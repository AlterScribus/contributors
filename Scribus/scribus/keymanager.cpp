/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "keymanager.h"
#include "keymanager.moc"
#include <qaccel.h>
#include <qguardedptr.h>
#include <qstringlist.h>
#include <qptrlist.h>
#include <qmessagebox.h>
#include <qgroupbox.h>
#include <qpushbutton.h>
#include <qptrlist.h>
#include <qkeysequence.h>
#include <qwidget.h>
#include <qbuttongroup.h>
#include <qlabel.h>
#include <qradiobutton.h>
#include <qtable.h>
#include <qheader.h>
#include <qlayout.h>
#include <qtooltip.h>
#include <qevent.h>
#include <qcombobox.h>
#include <qfile.h>
#include <qfileinfo.h>
#include <qfiledialog.h>
#include <qdom.h>
#include <qdir.h>
#include <qtooltip.h>
#include <qinputdialog.h> 


#include "commonstrings.h"
#include "menumanager.h"
#include "scribus.h"
#include "prefsmanager.h"
#include "prefsfile.h"
#include "prefscontext.h"
#include "scpaths.h"
#include "scraction.h"

extern bool overwrite(QWidget *parent, QString filename);


KeyManager::KeyManager(QWidget* parent, QMap<QString,Keys> oldKeyMap): QWidget( parent, "key" )
{
	keyMap.clear();
	keyMap = oldKeyMap;
	Part0 = "";
	Part1 = "";
	Part2 = "";
	Part3 = "";
	keyCode = 0;
	keyManagerLayout = new QVBoxLayout( this, 0, 6); 
	keyManagerLayout->setAlignment( Qt::AlignTop );
	//CB TODO Remove third column when all done
	keyTable = new QTable( oldKeyMap.count(), 2, this, "keyTable" );
	//keyTable->setMaximumSize(QSize(500,200));

	
	//Generate our list of entries in the key manager from the menu system
	QStringList menuKeys;
	ScMW->scrMenuMgr->generateKeyManList(&menuKeys);
	uint currentRow=0;
	for ( QStringList::Iterator it = menuKeys.begin(); it != menuKeys.end(); ++it )
	{
		if (keyMap.contains(*it))
		{
			QString actName=QString(keyMap[*it].actionName);
			if (!actName.isEmpty() && !actName.isNull())
			{
				QTableItem *item = new QTableItem(keyTable, QTableItem::Never, keyMap[*it].cleanMenuText);
				keyTable->setItem(currentRow, 0, item);
				QTableItem *item2 = new QTableItem(keyTable, QTableItem::Never, QString(keyMap[*it].keySequence));
				keyTable->setItem(currentRow, 1, item2);
				//QTableItem *item3 = new QTableItem(keyTable, QTableItem::Never, QString(keyMap[*it].actionName));
				//keyTable->setItem(currentRow, 2, item3);
	
				keyMap[*it].tableRow=currentRow;
				++currentRow;
			}		
		}
	}
	
	//Add in non menu item ScrActions, make a list, sort and add	
	QStringList menuKeys2;
	for( QMap<QString, QGuardedPtr<ScrAction> >::Iterator it = ScMW->scrActions.begin(); it!=ScMW->scrActions.end(); ++it )
	{
		if (*it)
			if (!menuKeys.contains(QString(it.key())))
				menuKeys2.append(it.data()->name());
	}
	menuKeys2.sort();
	for ( QStringList::Iterator it = menuKeys2.begin(); it != menuKeys2.end(); ++it )
	{
		if (keyMap.contains(*it))
		{
			QString actName=QString(keyMap[*it].actionName);
			if (!actName.isEmpty() && !actName.isNull())
			{
				QTableItem *item = new QTableItem(keyTable, QTableItem::Never, keyMap[*it].cleanMenuText);
				keyTable->setItem(currentRow, 0, item);
				QTableItem *item2 = new QTableItem(keyTable, QTableItem::Never, QString(keyMap[*it].keySequence));
				keyTable->setItem(currentRow, 1, item2);
				//QTableItem *item3 = new QTableItem(keyTable, QTableItem::Never, QString(keyMap[*it].actionName));
				//keyTable->setItem(currentRow, 2, item3);
	
				keyMap[*it].tableRow=currentRow;
				++currentRow;
			}		
		}
	}
	
	keyTable->setNumRows(currentRow);
	keyTable->setSorting(false);
	keyTable->setSelectionMode(QTable::NoSelection);
	keyTable->setLeftMargin(0);
	keyTable->verticalHeader()->hide();
	header = keyTable->horizontalHeader();
	header->setLabel(0, tr("Action"));
	header->setLabel(1, tr("Current Key"));
	//header->setLabel(2, tr("Action Name"));
	keyTable->adjustColumn(0);
	keyTable->adjustColumn(1);
	//keyTable->adjustColumn(2);
	keyTable->setColumnMovingEnabled(false);
	keyTable->setRowMovingEnabled(false);
	header->setMovingEnabled(false);
	keyTable->setShowGrid( false );
	keyManagerLayout->addWidget( keyTable );

	keyGroup = new QButtonGroup( this, "keyGroup" );
	keyGroup->setTitle( tr( "Select a Key for this Action" ) );
	keyGroup->setColumnLayout(0, Qt::Vertical );
	keyGroup->layout()->setSpacing( 0 );
	keyGroup->layout()->setMargin( 0 );
	keyGroupLayout = new QGridLayout( keyGroup->layout() );
	keyGroupLayout->setAlignment( Qt::AlignTop );
	keyGroupLayout->setSpacing( 6 );
	keyGroupLayout->setMargin( 11 );

	noKey = new QRadioButton( tr( "&No Key" ), keyGroup, "noKey" );
	keyGroupLayout->addMultiCellWidget( noKey, 0, 1, 0, 1 );
	userDef = new QRadioButton( tr( "&User Defined Key" ), keyGroup, "userDef" );
	keyGroupLayout->addWidget( userDef, 2, 0 );

	keyDisplay = new QLabel( tr( "ALT+SHIFT+T" ), keyGroup, "keyDisplay" );
	keyDisplay->setFrameShape( QLabel::Panel );
	keyDisplay->setFrameShadow( QLabel::Sunken );
	keyDisplay->setAlignment( static_cast<int>( QLabel::AlignCenter ) );

	keyGroupLayout->addMultiCellWidget( keyDisplay, 0, 2, 2, 2 );

	setKeyButton = new QPushButton( tr( "Set &Key" ), keyGroup, "setKeyButton" );
	setKeyButton->setToggleButton(true);

	keyGroupLayout->addMultiCellWidget( setKeyButton, 0, 2, 1, 1, Qt::AlignCenter );
	keyManagerLayout->addWidget( keyGroup );
	
	loadableGroupBox = new QGroupBox( tr("Loadable Shortcut Sets"), this ,"loadshortcutgroup");
	loadableGroupBox->setColumnLayout(0, Qt::Vertical );
	loadableGroupBox->layout()->setSpacing( 0 );
	loadableGroupBox->layout()->setMargin( 0 );
	loadableGroupBoxLayout = new QHBoxLayout( loadableGroupBox->layout() );
	loadableGroupBoxLayout->setAlignment( Qt::AlignTop );
	loadableGroupBoxLayout->setSpacing( 6 );
	loadableGroupBoxLayout->setMargin( 11 );
	
	loadableSets = new QComboBox( false, loadableGroupBox,  "loadableSets");
	loadableSets->insertStringList(scanForSets());
	loadSetButton = new QPushButton( tr("&Load"), loadableGroupBox, "loadshortcutsetbutton");
	if (keySetList.count()==0)
	{
		loadableSets->setEnabled(false);
		loadSetButton->setEnabled(false);
	}
	QSpacerItem *loadableSpacer = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
	importSetButton = new QPushButton( tr("&Import..."), loadableGroupBox, "importshortcutsetbutton");
	exportSetButton = new QPushButton( tr("&Export..."), loadableGroupBox, "exportshortcutsetbutton");
	QSpacerItem *loadableSpacer2 = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
	resetSetButton = new QPushButton( tr("&Reset"), loadableGroupBox, "resetsetbutton");
	loadableGroupBoxLayout->addWidget( loadableSets );
	loadableGroupBoxLayout->addWidget( loadSetButton );
	loadableGroupBoxLayout->addItem( loadableSpacer );
	loadableGroupBoxLayout->addWidget( importSetButton );
	loadableGroupBoxLayout->addWidget( exportSetButton );
	loadableGroupBoxLayout->addItem( loadableSpacer2 );
	loadableGroupBoxLayout->addWidget( resetSetButton );
	
	keyManagerLayout->addWidget( loadableGroupBox );
	
	//setup tooltips
	QToolTip::add(loadableSets, tr("Keyboard shortcut sets available to load"));
	QToolTip::add(loadSetButton, tr("Load the selected shortcut set"));
	QToolTip::add(importSetButton, tr("Import a shortcut set into the current configuration"));
	QToolTip::add(exportSetButton, tr("Export the current shortcuts into an importable file"));
	QToolTip::add(resetSetButton, tr("Reload the default Scribus shortcuts"));
	
	dispKey(0);

	// signals and slots connections
	connect( keyTable, SIGNAL(pressed(int, int, int, const QPoint&)), this, SLOT(dispKey(int)));
	connect( noKey, SIGNAL(clicked()), this, SLOT(setNoKey()));
	connect( setKeyButton, SIGNAL(clicked()), this, SLOT(setKeyText()));
	connect( loadSetButton, SIGNAL(clicked()), this, SLOT(loadKeySetFile()));
	connect( importSetButton, SIGNAL(clicked()), this, SLOT(importKeySetFile()));
	connect( exportSetButton, SIGNAL(clicked()), this, SLOT(exportKeySetFile()));
	connect( resetSetButton, SIGNAL(clicked()), this, SLOT(resetKeySet()));
}

bool KeyManager::event( QEvent* ev )
{
	bool ret = QWidget::event( ev );
	if ( ev->type() == QEvent::KeyPress )
		keyPressEvent((QKeyEvent*)ev);
	if ( ev->type() == QEvent::KeyRelease )
		keyReleaseEvent((QKeyEvent*)ev);
	return ret;
}

void KeyManager::keyPressEvent(QKeyEvent *k)
{
	if (setKeyButton->isOn())
	{
		QStringList tl;
		if (!keyDisplay->text().isEmpty())
		{
			tl = tl.split("+", keyDisplay->text());
			Part4 = tl[tl.count()-1];
			if (Part4 == tr("Alt") || Part4 == tr("Ctrl") || Part4 == tr("Shift") || Part4 == tr("Meta"))
				Part4 = "";
		}
		else
			Part4 = "";
		switch (k->key())
		{
			case Key_Meta:
				Part0 = tr("Meta+");
				keyCode |= META;
				break;
			case Key_Shift:
				Part3 = tr("Shift+");
				keyCode |= SHIFT;
				break;
			case Key_Alt:
				Part2 = tr("Alt+");
				keyCode |= ALT;
				break;
			case Key_Control:
				Part1 = tr("Ctrl+");
				keyCode |= CTRL;
				break;
			default:
				keyCode |= k->key();
//				qDebug(QString("got key %1 %2").arg(keyCode).arg(getKeyText(keyCode)));
				keyDisplay->setText(getKeyText(keyCode));
				if (checkKey(keyCode))
				{
					QMessageBox::information(this,
											CommonStrings::trWarning,
											tr("This key sequence is already in use"),
											CommonStrings::tr_OK);
					keyTable->setText(currRow, 1, "");
					keyDisplay->setText("");
					if (currentKeyMapRow!=NULL)
						currentKeyMapRow.data().keySequence=QKeySequence();
					noKey->setChecked(true);
				}
				else
				{
					QKeySequence newKeySequence(keyCode);
					keyTable->setText(currRow, 1, QString(newKeySequence));
					if (currentKeyMapRow!=NULL)
						currentKeyMapRow.data().keySequence=newKeySequence;
					userDef->setChecked(true);
				}
				setKeyButton->setOn(false);
				releaseKeyboard();
		}
	}
	if (setKeyButton->isOn())
		keyDisplay->setText(Part0+Part1+Part2+Part3+Part4);
}

void KeyManager::keyReleaseEvent(QKeyEvent *k)
{
	if (setKeyButton->isOn())
	{
		if (!keyDisplay->text().isEmpty())
		{
			QStringList tl;
			tl = tl.split("+", keyDisplay->text());
			Part4 = tl[tl.count()-1];
			if (Part4 == tr("Alt") || Part4 == tr("Ctrl") || Part4 == tr("Shift") || Part4 == tr("Meta"))
				Part4 = "";
		}
		else
			Part4 = "";
		if (k->key() == Key_Meta)
		{
			Part0 = "";
			keyCode &= ~META;
		}
		if (k->key() == Key_Shift)
		{
			Part3 = "";
			keyCode &= ~SHIFT;
		}
		if (k->key() == Key_Alt)
		{
			Part2 = "";
			keyCode &= ~ALT;
		}
		if (k->key() == Key_Control)
		{
			Part1 = "";
			keyCode &= ~CTRL;
		}
		keyDisplay->setText(Part0+Part1+Part2+Part3+Part4);
	}
}

void KeyManager::setKeyText()
{
	if (setKeyButton->isOn())
	{
		keyCode = 0;
		Part0 = "";
		Part1 = "";
		Part2 = "";
		Part3 = "";
		Part4 = "";
		grabKeyboard();
	}
	else
		releaseKeyboard();
}

void KeyManager::dispKey(int row)
{
	keyDisplay->setText(keyTable->text(row, 1));
	keyTable->setText(row, 1, keyTable->text(row, 1));
	
	for (QMap<QString,Keys>::Iterator it=keyMap.begin(); it!=keyMap.end(); ++it)
	{
		if (it.data().tableRow == row)
		{
			if (it.data().keySequence.isEmpty())
				noKey->setChecked(true);
			else
				userDef->setChecked(true);
			currentKeyMapRow=it;	
		}
	}
	currRow = row;
}

void KeyManager::setNoKey()
{
	if (noKey->isChecked())
	{
		keyTable->setText(currRow, 1, "");
		keyDisplay->setText("");
		if (currentKeyMapRow!=NULL)
			currentKeyMapRow.data().keySequence=QKeySequence();
	}
}

QString KeyManager::getKeyText(int KeyC)
{
	if ((KeyC & ~(Qt::META | Qt::CTRL | Qt::ALT | Qt::SHIFT)) == 0)
		return "";
	// on OSX Qt translates modifiers to forsaken symbols, arrows and the like
	// we prefer plain English
	QString res;
	if ((KeyC & Qt::META) != 0)
		res += "Meta+";
	if ((KeyC & Qt::CTRL) != 0)
		res += "Ctrl+";
	if ((KeyC & Qt::ALT) != 0)
		res += "Alt+";
	if ((KeyC & Qt::SHIFT) != 0)
		res += "Shift+";
	return res + QString(QKeySequence(KeyC & ~(Qt::META | Qt::CTRL | Qt::ALT | Qt::SHIFT)));
}

/*
 * QString KeyManager::getDisplayKeyText(int KeyC)
{
	return ((KeyC == 0) ? "" : QString(QKeySequence(KeyC)));
}
*/

bool KeyManager::checkKey(int code)
{
	bool ret = false;
	QKeySequence key = QKeySequence(code);
	for (QMap<QString,Keys>::Iterator it=keyMap.begin(); it!=keyMap.end(); ++it)
	{
		if (key.matches(it.data().keySequence) != Qt::NoMatch)
		{
			ret = true;
			break;
		}
	}
	return ret;
}

const QMap<QString, Keys> KeyManager::getNewKeyMap()
{
	return keyMap;
}

void KeyManager::loadKeySetFile()
{
	if (keySetList[loadableSets->currentText()])
		importKeySet(keySetList[loadableSets->currentText()]);
}

void KeyManager::importKeySetFile()
{
	PrefsContext* dirs = PrefsManager::instance()->prefsFile->getContext("dirs");
	QString currentPath = dirs->get("keymapprefs_import", ".");
	QString s = QFileDialog::getOpenFileName(currentPath, tr("Key Set XML Files (*.ksxml)"), this, "load open file dialog", "Choose a file to open" );
	if (!s.isEmpty())
		importKeySet(s);
}
void KeyManager::exportKeySetFile()
{   
	PrefsContext* dirs = PrefsManager::instance()->prefsFile->getContext("dirs");
	QString currentPath= dirs->get("keymapprefs_export", ".");
	QString s = QFileDialog::getSaveFileName(currentPath, tr("Key Set XML Files (*.ksxml)"), this, "save open file dialog", "Choose a file to save" );
	if (!s.isEmpty())
		exportKeySet(s);
}

void KeyManager::importKeySet(QString filename)
{
	QFileInfo fi = QFileInfo(filename);

	if (fi.exists())
	{
		//import the file into qdomdoc
		QDomDocument doc( "keymapentries" );
		QFile file( filename );
		if ( !file.open( IO_ReadOnly ) )
			return;
		QTextStream ts(&file);
		ts.setEncoding(QTextStream::UnicodeUTF8);
		QString errorMsg;
		int eline;
		int ecol;
		if ( !doc.setContent( ts.read(), &errorMsg, &eline, &ecol )) 
		{
			qDebug("%s", QString("Could not open key set file: %1\nError:%2 at line: %3, row: %4").arg(filename).arg(errorMsg).arg(eline).arg(ecol).ascii());
			file.close();
			return;
		}
		file.close();
		//load the file now
		
		QDomElement docElem = doc.documentElement();
		if (docElem.tagName()=="shortcutset" && docElem.hasAttribute("name"))
		{
			QDomAttr keysetAttr = docElem.attributeNode( "name" );

			//clear current menu entries
			for (QMap<QString,Keys>::Iterator it=keyMap.begin(); it!=keyMap.end(); ++it)
			{
				it.data().keySequence = QKeySequence();
				keyTable->setText(it.data().tableRow, 1, "");
			}
			
			//load in new set
			QDomNode n = docElem.firstChild();
			while( !n.isNull() ) 
			{
				QDomElement e = n.toElement(); // try to convert the node to an element.
				if( !e.isNull() ) 
				{
					if (e.hasAttribute("name")  && e.hasAttribute( "shortcut" )) 
					{
						QDomAttr nameAttr = e.attributeNode( "name" );
						QDomAttr shortcutAttr = e.attributeNode( "shortcut" );
						if (keyMap.contains(nameAttr.value()))
						{
							keyMap[nameAttr.value()].keySequence=QKeySequence(shortcutAttr.value());
							keyTable->setText(keyMap[nameAttr.value()].tableRow,1,shortcutAttr.value());
						}
					}
				}
				n = n.nextSibling();
			}
			keyDisplay->setText(keyTable->text(keyTable->currentRow(), 1));
		}
	}
	keyTable->adjustColumn(1);
}

bool KeyManager::exportKeySet(QString filename)
{
	QFileInfo fi = QFileInfo(filename);
	QString exportFileName;
	if (filename.endsWith(".ksxml"))
		exportFileName = filename;
	else
		exportFileName = filename+".ksxml";
	if (overwrite(this, exportFileName))
	{
		bool ok;
		QString setName = QInputDialog::getText("Export Keyboard Shortcuts to File", "Enter the name of the shortcut set:", QLineEdit::Normal, QString::null, &ok, this );
		if (!( ok && !setName.isEmpty()) ) 
			return false;
		
		QDomDocument doc( "keymapentries" );
		QString keyset=QString("<shortcutset name=\"%1\"></shortcutset>").arg(setName);
		doc.setContent(keyset);
		QDomElement keySetElement=doc.documentElement();
		QMap<QString,Keys>::Iterator itEnd=keyMap.end();
		for (QMap<QString,Keys>::Iterator it=keyMap.begin(); it!=itEnd; ++it)
		{
			if (it.data().keySequence.isEmpty() && it.key().isEmpty())
				continue;
			QDomElement function_shortcut=doc.createElement("function");
			function_shortcut.setAttribute("name",it.key());
			function_shortcut.setAttribute("shortcut",getKeyText(it.data().keySequence));
			keySetElement.appendChild(function_shortcut);
		}
		QFile f(filename);
		if(!f.open(IO_WriteOnly))
			return false;
		QTextStream s(&f);
		s.setEncoding(QTextStream::UnicodeUTF8);
		QString xmltag("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n");
		s.writeRawBytes(xmltag, xmltag.length());
		QString xmldoc = doc.toString(4);
		s.writeRawBytes(xmldoc, xmldoc.length());
		f.close();
	}
	return true;
}

void KeyManager::resetKeySet()
{
	QString location=ScPaths::instance().libDir();
	QString defaultKeySetFileName=QDir::convertSeparators(location+"keysets/scribus13.ksxml");
	importKeySet(defaultKeySetFileName);	
}

QStringList KeyManager::scanForSets()
{
	keySetList.clear();
	QString location=ScPaths::instance().libDir();
	QString keySetLocation=QDir::convertSeparators(location+"keysets/");
	QDir keySetsDir(keySetLocation, "*.ksxml", QDir::Name, QDir::Files | QDir::NoSymLinks);
	if ((keySetsDir.exists()) && (keySetsDir.count() != 0))
	{
		QStringList appNames;
		for (uint fileCounter = 0; fileCounter < keySetsDir.count(); ++fileCounter)
		{
			QString filename=QDir::convertSeparators(location+"keysets/"+keySetsDir[fileCounter]);
			
			QDomDocument doc( "keymapentries" );
			QFile file( filename );
			if ( !file.open( IO_ReadOnly ) )
				continue;
			QString errorMsg;
			int eline;
			int ecol;
			
			if ( !doc.setContent( &file, &errorMsg, &eline, &ecol )) 
			{
				qDebug("%s", QString("Could not open key set file: %1\nError:%2 at line: %3, row: %4").arg(keySetsDir[fileCounter]).arg(errorMsg).arg(eline).arg(ecol).ascii());
				file.close();
				continue;
			}
			file.close();
		
			QDomElement docElem = doc.documentElement();
			if (docElem.tagName()=="shortcutset" && docElem.hasAttribute("name"))
			{
				QDomAttr nameAttr = docElem.attributeNode( "name" );
				appNames.append(nameAttr.value());
				keySetList.insert(nameAttr.value(), filename);
			}
		}
		return QStringList(appNames);
	}
	return NULL;
}