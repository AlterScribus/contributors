/***************************************************************************
                          serializer.cpp  -  description
                             -------------------
    begin                : Sat May 5 2001
    copyright            : (C) 2001 by Franz Schmid
    email                : Franz.Schmid@altmuehlnet.de
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include "serializer.h"
#include <qfile.h>
#include <qtextstream.h>
#include <qtextcodec.h>
extern bool loadText(QString nam, QString *Buffer);
Serializer::Serializer(QString name)
{
	Filename = name;
	Objekt = "";
}

QString Serializer::GetObjekt()
{
	return Objekt;
}

void Serializer::PutText(PageItem *Item)
{
  uint a;
  QString Dat = "";
	QPtrList<Pti> y = Item->Ptext;
  for (a=0; a<y.count(); ++a)
  	{
		QString b = y.at(a)->ch;
		if (b == QChar(13))
			b = "\n";
    Dat += b;
    }
	Objekt = Dat;
}

void Serializer::GetText(PageItem *Item, int Absatz, QString font, int size, bool Append)
{
	struct Pti *hg;
	PageItem *nb;
	uint a;
	if (!Append)
		{
		if (Item->NextBox != 0)
			{
			nb = Item->NextBox;
			while (nb != 0)
				{
				nb->Ptext.clear();
				nb->CPos = 0;
				nb->Dirty = true;
				nb = nb->NextBox;
				}
			}
		Item->Ptext.clear();
		Item->CPos = 0;
		}
	for (a=0; a<Objekt.length(); ++a)
		{
		if (Objekt.at(a) == QChar(0)) { continue; }
		if (Objekt.at(a) == QChar(13)) { continue; }
		hg = new Pti;
		hg->ch = Objekt.at(a);
		if (hg->ch == QChar(10)) { hg->ch = QChar(13); }
		if (hg->ch == QChar(5)) { hg->ch = QChar(13); }
		if (hg->ch == QChar(9)) { hg->ch = " "; }
		if (font != "")
			{
			hg->cfont = font;
			hg->csize = size;
			}
		else
			{
			hg->cfont = Item->IFont;
			hg->csize = Item->ISize;
			}
		hg->ccolor = Item->TxtFill;
		hg->cshade = Item->ShTxtFill;
		hg->cstroke = Item->TxtStroke;
		hg->cshade2 = Item->ShTxtStroke;
		hg->cscale = Item->TxtScale;
		hg->cextra = 0;
		hg->cselect = false;
		hg->cstyle = 0;
 		hg->cab = Absatz;
		hg->xp = 0;
		hg->yp = 0;
		hg->PRot = 0;
		hg->PtransX = 0;
		hg->PtransY = 0;
		if (Append)
 			Item->Ptext.insert(Item->CPos, hg);
		else
			Item->Ptext.append(hg);
 		Item->CPos += 1;
		}
}

bool Serializer::Write(QString Cod)
{
	QTextCodec *codec;
	if (Cod == "")
		codec = QTextCodec::codecForLocale();
	else
		codec = QTextCodec::codecForName(Cod);
  QCString dec = codec->fromUnicode( Objekt );
	QFile f(Filename);
	bool ret = false;
	if (f.open(IO_WriteOnly))
		{
		f.writeBlock(dec, dec.length());
		f.close();
		ret = true;
		}
	else
		{
		ret = false;
		}
	return ret;
}

bool Serializer::Read(QString Cod)
{
	QTextCodec *codec;
	bool tmp = loadText(Filename, &Objekt);
	if (Cod == "")
		codec = QTextCodec::codecForLocale();
	else
		codec = QTextCodec::codecForName(Cod);
  QString dec = codec->toUnicode( Objekt );
	Objekt = dec;
	return tmp;
}
