/***************************************************************************
 *   Copyright (C) 2007 by Pierre Marchand   *
 *   pierre@moulindetouvois.com   *
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 *   This program is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU General Public License for more details.                          *
 *                                                                         *
 *   You should have received a copy of the GNU General Public License     *
 *   along with this program; if not, write to the                         *
 *   Free Software Foundation, Inc.,                                       *
 *   59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.             *
 ***************************************************************************/
#include "imposeoutputfile.h"

#include <fstream>
#include <stdexcept>
#include <algorithm>
#include <cmath>
#include <istream>
#include <ostream>
#include <cstdlib>
#include <iostream>

using std::ostringstream;
using std::map;
using std::vector;
using std::string;
using std::ifstream;
using std::istream;
using std::ostream;
using std::endl;
using std::runtime_error;

#include <iostream> //XXX
namespace PoDoFo
{
	namespace Impose
	{

#define MAX_SOURCE_PAGES 5000
#define MAX_RECORD_SIZE 2048

		imposeOutputFile::imposeOutputFile ( )
		{
			std::cerr<<"imposeOutputFile::imposeOutputFile"<<std::endl;
			targetDoc = 0;
			sheet = NULL; 
			//scaleFactor = 1.0;
		}

		PdfObject* imposeOutputFile::migrateResource ( PdfObject * obj, PoDoFo::Impose::imposeInputFile * input  )
		{
// 			std::cerr<<"imposeOutputFile::migrateResource"<<std::endl;
			PdfObject *ret ( 0 );

			if ( obj->IsDictionary() )
			{
				ret = targetDoc->GetObjects().CreateObject ( *obj );

				TKeyMap resmap = obj->GetDictionary().GetKeys();
				for ( TCIKeyMap itres = resmap.begin(); itres != resmap.end(); ++itres )
				{
					PdfObject *o = itres->second;
					ret->GetDictionary().AddKey ( itres->first , migrateResource ( o, input ) );
				}

				if ( obj->HasStream() )
				{
					* ( ret->GetStream() ) = * ( obj->GetStream() );
//                    ret = new PdfObject( ret->Reference() );
				}
			}
			else if ( obj->IsArray() )
			{
				PdfArray carray ( obj->GetArray() );
				PdfArray narray;
				for ( unsigned int ci = 0; ci < carray.GetSize(); ++ci )
				{
					PdfObject *co ( migrateResource ( &carray[ci],input ) );
					narray.push_back ( *co );
				}
				ret = targetDoc->GetObjects().CreateObject ( narray );
			}
			else if ( obj->IsReference() )
			{
				if ( migrateMap.find ( obj->GetReference().ToString() ) != migrateMap.end() )
                {
                    PdfObject * obj2 = migrateMap[ obj->GetReference().ToString() ];
                    return new PdfObject (obj2->Reference());
                    //return migrateMap[obj->GetReference().ToString() ];
				}

				PdfObject * o ( migrateResource ( input->sourceDoc->GetObjects().GetObject ( obj->GetReference() ), input ) );

                                ret  = new PdfObject ( o->Reference() ) ;

			}
			else
			{
				ret = new PdfObject ( *obj );//targetDoc->GetObjects().CreateObject(*obj);
			}


			migrateMap.insert ( std::pair<std::string, PdfObject*> ( obj->Reference().ToString(), ret ) );


			return ret;

		}

		PdfObject* imposeOutputFile::getInheritedResources ( PdfPage* page, PoDoFo::Impose::imposeInputFile * input)
		{
// 			std::cerr<<"imposeOutputFile::getInheritedResources"<<std::endl;
			PdfObject *res ( 0 ); // = new PdfObject;
			PdfObject *rparent = page->GetObject();
			while ( rparent && rparent->IsDictionary() )
			{
				PdfObject *curRes = rparent->GetDictionary().GetKey ( PdfName ( "Resources" ) );
				if ( curRes )
				{
					res = migrateResource ( curRes, input );
				}
				rparent = rparent->GetIndirectKey ( "Parent" );
			}
			return res;

		}

		void imposeOutputFile::createTarget ( const std::string & target, PoDoFo::Impose::imposeInputFile * input)
		{
			if ( !input || !input->sourceDoc )
				throw std::logic_error ( "input document not loaded." );

			targetDoc = new PdfMemDocument;

			for ( int i = 0; i < input->pcount ; ++i )
			{
				PdfPage * page = input->sourceDoc->GetPage ( i );
				PdfMemoryOutputStream outMemStream ( 1 );

				PdfXObject *xobj = new PdfXObject ( page->GetMediaBox(), targetDoc );
				if ( page->GetContents()->HasStream() )
				{
					page->GetContents()->GetStream()->GetFilteredCopy ( &outMemStream );
				}
				else if ( page->GetContents()->IsArray() )
				{
					PdfArray carray ( page->GetContents()->GetArray() );
					for ( unsigned int ci = 0; ci < carray.GetSize(); ++ci )
					{
						if ( carray[ci].HasStream() )
						{
							carray[ci].GetStream()->GetFilteredCopy ( &outMemStream );
						}
						else if ( carray[ci].IsReference() )
						{
							PdfObject *co = input->sourceDoc->GetObjects().GetObject ( carray[ci].GetReference() );

							while ( co != NULL )
							{
								if ( co->IsReference() )
								{
									co = input->sourceDoc->GetObjects().GetObject ( co->GetReference() );
								}
								else if ( co->HasStream() )
								{
									co->GetStream()->GetFilteredCopy ( &outMemStream );
									break;
								}
							}

						}

					}
				}

				/// Its time to manage other keys of the page dictionary.
				std::vector<std::string> pageKeys;
				std::vector<std::string>::const_iterator itKey;
				pageKeys.push_back ( "Group" );
				for ( itKey = pageKeys.begin(); itKey != pageKeys.end(); ++itKey )
				{
					PoDoFo::PdfName keyname ( *itKey );
					if ( page->GetObject()->GetDictionary().HasKey ( keyname ) )
					{
						xobj->GetObject()->GetDictionary().AddKey ( keyname, migrateResource ( page->GetObject()->GetDictionary().GetKey ( keyname ) , input));
					}
				}

				outMemStream.Close();

				PdfMemoryInputStream inStream ( outMemStream.TakeBuffer(),outMemStream.GetLength() );
				xobj->GetContents()->GetStream()->Set ( &inStream );

				resources[i+1] = getInheritedResources ( page,input );
				xobjects[i+1] = xobj;
				cropRect[i+1] = page->GetCropBox();
				bleedRect[i+1] = page->GetBleedBox();
				trimRect[i+1] = page->GetTrimBox();
				artRect[i+1] = page->GetArtBox();

			}


			targetDoc->SetPdfVersion ( input->sourceDoc->GetPdfVersion() );

			PdfInfo *sInfo ( input->sourceDoc->GetInfo() );
			PdfInfo *tInfo ( targetDoc->GetInfo() );

			if ( sInfo->GetAuthor() != PdfString::StringNull )
				tInfo->SetAuthor ( sInfo->GetAuthor() );
			if ( sInfo->GetCreator() != PdfString::StringNull )
				tInfo->SetCreator ( sInfo->GetCreator() );
			if ( sInfo->GetSubject() != PdfString::StringNull )
				tInfo->SetSubject ( sInfo->GetSubject() );
			if ( sInfo->GetTitle() != PdfString::StringNull )
				tInfo->SetTitle ( sInfo->GetTitle() );
			if ( sInfo->GetKeywords() != PdfString::StringNull )
				tInfo->SetKeywords ( sInfo->GetKeywords() );

			if ( sInfo->GetTrapped() != PdfName::KeyNull )
				tInfo->SetTrapped ( sInfo->GetTrapped() );

		}

		void imposeOutputFile::imposePage (int page,double c, double s, double x, double y) {
			PdfXObject *xo = xobjects[page];
			// FIXME BBOX STUFF HERE
			ostringstream op;
			op << "OriginalPage" << page;
			xdict.AddKey ( PdfName ( op.str() ) , xo->GetObjectReference() );
			if ( resources[page] )
			{
				if ( resources[page]->IsDictionary() )
				{
					TKeyMap resmap = resources[page]->GetDictionary().GetKeys();
					TCIKeyMap itres;
					for ( itres = resmap.begin(); itres != resmap.end(); ++itres )
						xo->GetResources()->GetDictionary().AddKey ( itres->first, itres->second );
				}
				else if ( resources[page]->IsReference() )
					xo->GetObject()->GetDictionary().AddKey ( PdfName ( "Resources" ), resources[page] );
				else
					std::cerr<<"ERROR Unknown type resource "<<resources[page]->GetDataTypeString()  <<  std::endl;
			}
			// Very primitive but it makes it easy to track down imposition plan into content stream.
            *buffer << "q\n";
            *buffer << std::fixed << c <<" "<< s <<" "<< -s <<" "<< c<<" "<< x <<" "<<  y << " cm\n";
            *buffer << "/OriginalPage" << page << " Do\n";
            *buffer << "Q\n";
		}

		void imposeOutputFile::startSheet (double w, double h, double s) {
            sheet = targetDoc->CreatePage ( PdfRect ( 0.0, 0.0, w, h ) );
            buffer = new std::ostringstream();
			xdict.Clear();
			/* Scale factor */
            *buffer << std::fixed << s <<" 0 0 "<< s <<" 0 0 cm\n";
		}


		void imposeOutputFile::finishSheet () {
            string bufStr = buffer->str();
            sheet->GetContentsForAppending()->GetStream()->Set ( bufStr.data(), bufStr.size() );
			sheet->GetResources()->GetDictionary().AddKey ( PdfName ( "XObject" ), xdict );
            delete buffer;
			// FIXME: Check whether sheet gets distroyed, otherwise memory leak here.
		};
	};
}; // end of namespace
