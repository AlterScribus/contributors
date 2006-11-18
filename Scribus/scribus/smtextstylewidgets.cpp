/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include "smtextstylewidgets.h"
#include "smtextstylewidgets.moc"
#include "util.h"
#include "commonstrings.h"
#include "smwidgets.h"

#include <qgroupbox.h>
#include <qlayout.h>
#include <qtoolbutton.h>
#include <qlabel.h>
#include <qpopupmenu.h>
#include <qcombobox.h>
#include <qspinbox.h>
#include <qframe.h>
#include <qpixmap.h>
#include <qtabwidget.h>
#include <qmap.h>
#include <cmath>

static bool isEqual(double a, double b)
{
	double maxUlps = 0.00001;
    // Make sure maxUlps is non-negative and small enough that the
    // default NAN won't compare as equal to anything.
    assert(maxUlps > 0 && maxUlps < 4 * 1024 * 1024);
    int aInt = *(int*)&a;
    // Make aInt lexicographically ordered as a twos-complement int
    if (aInt < 0)
        aInt = 0x80000000 - aInt;
    // Make bInt lexicographically ordered as a twos-complement int
    int bInt = *(int*)&b;
    if (bInt < 0)
        bInt = 0x80000000 - bInt;
    int intDiff = abs(aInt - bInt);
    if (intDiff <= maxUlps)
        return true;
    return false;
}

SMPStyleWidget::SMPStyleWidget()
{
	setupDistances();
	setupDropCaps();
	setupTabs();
	setupCharStyle();
}

void SMPStyleWidget::setupDistances()
{
	distancesBox->setColumnLayout(0, Qt::Vertical );
	distancesBox->layout()->setSpacing( 0 );
	distancesBox->layout()->setMargin( 0 );
	distancesBoxLayout = new QGridLayout( distancesBox->layout() );
	distancesBoxLayout->setAlignment( Qt::AlignTop );
	distancesBoxLayout->setSpacing( 5 );
	distancesBoxLayout->setMargin( 10 );

	lineSpacingMode_ = new SMScComboBox(distancesBox, "linespacingCombo");
	lineSpacingMode_->insertItem( tr("Fixed Linespacing"));
	lineSpacingMode_->insertItem( tr("Automatic Linespacing"));
	lineSpacingMode_->insertItem( tr("Align to Baseline Grid"));
	distancesBoxLayout->addMultiCellWidget(lineSpacingMode_, 0, 0, 1, 3);
	connect(lineSpacingMode_, SIGNAL(highlighted(int)), this, SLOT(slotLineSpacingModeChanged(int)));

	pixmapLabel0 = new QLabel(distancesBox, "pixmapLabel0");
	pixmapLabel0->setMinimumSize(QSize(22,22));
	pixmapLabel0->setMaximumSize(QSize(22,22));
	pixmapLabel0->setPixmap(loadIcon("linespacing2.png"));
	distancesBoxLayout->addWidget(pixmapLabel0, 1, 0);

	lineSpacing_ = new SMMSpinBox(1, 300, distancesBox, 1 );
	lineSpacing_->setSuffix( tr( " pt" ));
	distancesBoxLayout->addWidget(lineSpacing_, 1,1);

	pixmapLabel3 = new QLabel( "", distancesBox, "TextLabel1_2_2" );
	pixmapLabel3->setPixmap( loadIcon("above.png") );
	distancesBoxLayout->addWidget( pixmapLabel3, 1, 2 );

	spaceAbove_ = new SMMSpinBox( 0, 300, distancesBox, 1 );
	spaceAbove_->setSuffix( tr( " pt" ) );
	distancesBoxLayout->addWidget( spaceAbove_, 1, 3 );

	pixmapLabel4 = new QLabel( "", distancesBox, "TextLabel1_2_3" );
	pixmapLabel4->setPixmap( loadIcon("below.png") );
	distancesBoxLayout->addWidget( pixmapLabel4, 2, 2 );

	spaceBelow_ = new SMMSpinBox( 0, 300, distancesBox, 1 );
	spaceBelow_->setSuffix( tr( " pt" ) );
	distancesBoxLayout->addWidget( spaceBelow_, 2, 3 );

	alignement_ = new SMAlignSelect(distancesBox);
	distancesBoxLayout->addMultiCellWidget(alignement_, 3,3,1,3);
}

void SMPStyleWidget::slotLineSpacingModeChanged(int i)
{
	if (i == 0)
		lineSpacing_->setEnabled(true);
	else
		lineSpacing_->setEnabled(false);
}

void SMPStyleWidget::languageChange()
{
/***********************************/
/*      Begin Tooltips             */
/***********************************/
// These are for the paragraph style

	QToolTip::add(parentCombo,      tr("Parent style"));
	QToolTip::add(lineSpacingMode_, tr("Line spacing mode"));
	QToolTip::add(lineSpacing_,     tr("Line spacing"));
	QToolTip::add(spaceAbove_,      tr("Space above"));
	QToolTip::add(spaceBelow_,      tr("Space below"));
	QToolTip::add(dropCapsBox,      tr("Enable or disable drop cap"));
	QToolTip::add(dropCapLines_,    tr("Drop cap lines"));
	QToolTip::add(dropCapOffset_,   tr("Drop cap offset"));
	QToolTip::add(alignement_,      tr("Alignment"));
	QToolTip::add(tabList_->first_, tr("First line indent"));
	QToolTip::add(tabList_->left_,  tr("Left indent"));
	QToolTip::add(tabList_->right_, tr("Right indent"));
	QToolTip::add(tabList_,         tr("Tabulators"));

/***********************************/
/*      End Tooltips               */
/***********************************/

	lineSpacingMode_->clear();
	lineSpacingMode_->insertItem( tr("Fixed Linespacing"));
	lineSpacingMode_->insertItem( tr("Automatic Linespacing"));
	lineSpacingMode_->insertItem( tr("Align to Baseline Grid"));
	lineSpacing_->setSuffix( tr(" pt"));
	spaceAbove_->setSuffix( tr(" pt"));
	spaceBelow_->setSuffix( tr(" pt"));
	parentLabel->setText( tr("Parent"));
	distancesBox->setTitle( tr("Distances and Alignment"));
	dropCapsBox->setTitle( tr("Drop Caps"));
	tabsBox->setTitle( tr("Tabulators and Indentation"));
	tabWidget->setTabLabel(tabWidget->page(0), tr("Properties"));
	tabWidget->setTabLabel(tabWidget->page(1), tr("Character Style"));
}

void SMPStyleWidget::setupDropCaps()
{
	dropCapsBox->setCheckable( true );
	dropCapsBox->setColumnLayout(0, Qt::Vertical );
	dropCapsBox->layout()->setSpacing( 5 );
	dropCapsBox->layout()->setMargin( 10 );

	dropCapsBoxLayout = new QGridLayout(dropCapsBox->layout());
	dropCapsBoxLayout->setAlignment(Qt::AlignTop);

	dropCapLines_ = new SMSpinBox(dropCapsBox, "DropLines");
	dropCapLines_->setMinValue(2);
	dropCapLines_->setMaxValue(20);
	capLabel1 = new QLabel(dropCapLines_, tr("&Lines:"), dropCapsBox, "CapLabel");
	dropCapsBoxLayout->addWidget(capLabel1, 0, 0);
	dropCapsBoxLayout->addWidget(dropCapLines_, 0, 1);

	dropCapOffset_ = new SMMSpinBox(-3000, 3000, dropCapsBox, 1);
	dropCapOffset_->setSuffix( tr(" pt"));
	capLabel2 = new QLabel(dropCapLines_, tr("Distance from Text:"), dropCapsBox, "CapLabel2");
	dropCapsBoxLayout->addWidget(capLabel2, 1, 0);
	dropCapsBoxLayout->addWidget(dropCapOffset_, 1, 1);
}

void SMPStyleWidget::setupTabs()
{
	tabsBox->setColumnLayout(0, Qt::Vertical );
	tabsBox->layout()->setSpacing( 0 );
	tabsBox->layout()->setMargin( 0 );

	tabsBoxLayout = new QVBoxLayout(tabsBox->layout());
	tabsBoxLayout->setAlignment( Qt::AlignTop );
	tabsBoxLayout->setSpacing( 5 );
	tabsBoxLayout->setMargin( 10 );

	tabList_ = new SMTabruler(tabsBox);
	tabsBoxLayout->addWidget( tabList_ );
}

void SMPStyleWidget::setupCharStyle()
{
	QHBoxLayout *la = new QHBoxLayout(characterBox, 0, 0, "la");
	cpage = new SMCStylePage(characterBox);
	la->addWidget(cpage);
	characterBox->setEnabled(true);
}

void SMPStyleWidget::show(ParagraphStyle *pstyle, QValueList<ParagraphStyle> &pstyles, QValueList<CharStyle> &cstyles, int unitIndex, const QString &defLang)
{
	parentCombo->setEnabled(true);
	const ParagraphStyle *parent = dynamic_cast<const ParagraphStyle*>(pstyle->parentStyle());
	hasParent_ = pstyle->hasParent() && parent != NULL && parent->hasName() && pstyle->parent() != "";

	lineSpacingMode_->clear();
	lineSpacingMode_->insertItem( tr("Fixed Linespacing"));
	lineSpacingMode_->insertItem( tr("Automatic Linespacing"));
	lineSpacingMode_->insertItem( tr("Align to Baseline Grid"));

	if (hasParent_)
	{
		lineSpacingMode_->setCurrentItem(pstyle->lineSpacingMode(), pstyle->isInhLineSpacingMode());
		lineSpacingMode_->setParentItem(parent->lineSpacingMode());

		lineSpacing_->setValue(pstyle->lineSpacing(), pstyle->isInhLineSpacing());
		lineSpacing_->setParentValue(parent->lineSpacing());

		spaceAbove_->setValue(pstyle->gapBefore(), pstyle->isInhGapBefore());
		spaceAbove_->setParentValue(parent->gapBefore());

		spaceBelow_->setValue(pstyle->gapAfter(), pstyle->isInhGapAfter());
		spaceBelow_->setParentValue(parent->gapAfter());

		dropCapsBox->setChecked(pstyle->hasDropCap());;
		parentDropCap_ = parent->hasDropCap();
		if (pstyle->isInhHasDropCap())
			parentDropCapButton->hide();
		else
			parentDropCapButton->show();

		connect(parentDropCapButton, SIGNAL(clicked()), this, SLOT(slotParentDropCap()));

		dropCapLines_->setValue(pstyle->dropCapLines(), pstyle->isInhDropCapLines());
		dropCapLines_->setParentValue(parent->dropCapLines());

		dropCapOffset_->setValue(pstyle->dropCapOffset(), pstyle->isInhDropCapOffset());
		dropCapOffset_->setParentValue(parent->dropCapOffset());

		alignement_->setStyle(pstyle->alignment(), pstyle->isInhAlignment());
		alignement_->setParentItem(parent->alignment());

		bool hasParentTabs = pstyle->isInhTabValues();
		QValueList<ParagraphStyle::TabRecord> tabs;
		if (hasParentTabs)
			tabs = QValueList<ParagraphStyle::TabRecord>(parent->tabValues());
		else
			tabs = pstyle->tabValues();

		tabList_->setTabs(tabs, unitIndex, hasParentTabs);
		tabList_->setParentTabs(parent->tabValues());

		tabList_->setLeftIndentValue(pstyle->leftMargin(),pstyle->isInhLeftMargin());
		tabList_->setParentLeftIndent(parent->leftMargin());

		tabList_->setFirstLineValue(pstyle->firstIndent(), pstyle->isInhFirstIndent());
		tabList_->setParentFirstLine(parent->firstIndent());

		tabList_->setRightIndentValue(pstyle->rightMargin(), pstyle->isInhRightMargin());
		tabList_->setParentRightIndent(parent->rightMargin());
	}
	else
	{
		lineSpacingMode_->setCurrentItem(pstyle->lineSpacingMode());
		lineSpacing_->setValue(pstyle->lineSpacing());
		spaceAbove_->setValue(pstyle->gapBefore());
		spaceBelow_->setValue(pstyle->gapAfter());
		dropCapsBox->setChecked(pstyle->hasDropCap());
		parentDropCapButton->hide();
		disconnect(parentDropCapButton, SIGNAL(clicked()), this, SLOT(slotParentDropCap()));
		dropCapLines_->setValue(pstyle->dropCapLines());
		dropCapOffset_->setValue(pstyle->dropCapOffset());
		parentDropCapButton->hide();
		alignement_->setStyle(pstyle->alignment());
		tabList_->setTabs(pstyle->tabValues(), unitIndex);
		tabList_->setLeftIndentValue(pstyle->leftMargin());
		tabList_->setFirstLineValue(pstyle->firstIndent());
		tabList_->setRightIndentValue(pstyle->rightMargin());
	}

	lineSpacing_->setEnabled(pstyle->lineSpacingMode() == ParagraphStyle::FixedLineSpacing);
	dropCapLines_->setEnabled(pstyle->hasDropCap());
	dropCapOffset_->setEnabled(pstyle->hasDropCap());

	QFont f(font());
	f.setBold(true);
	parentDropCapButton->setFont(f);

	cpage->parentLabel->setText(tr("Based on"));
	cpage->show(&pstyle->charStyle(), cstyles, defLang);

	parentCombo->clear();
	parentCombo->insertItem("");

	for (uint i = 0; i < pstyles.count(); ++i)
	{
		if (pstyles[i].hasName() && pstyles[i].name() != pstyle->name())
			parentCombo->insertItem(pstyles[i].name());
	}

	if (hasParent_)
	{
		int index = 0;
		for (int i = 0; i < parentCombo->count(); ++i)
		{
			if (parentCombo->text(i) == parent->name())
			{
				index = i;
				break;
			}
		}
		parentCombo->setCurrentItem(index);
	}
	else
		parentCombo->setCurrentItem(0);

	connect(dropCapsBox, SIGNAL(toggled(bool)), this, SLOT(slotDropCap(bool)));
}

void SMPStyleWidget::show(QValueList<ParagraphStyle*> &pstyles, QValueList<ParagraphStyle> &pstylesAll, QValueList<CharStyle> &cstyles, int unitIndex, const QString &defLang)
{
	if (pstyles.count() == 1)
		show(pstyles[0], pstylesAll, cstyles, unitIndex, defLang);
	else if (pstyles.count() > 1)
	{
		showLineSpacing(pstyles);
		showSpaceAB(pstyles);
		showDropCap(pstyles);
		showAlignment(pstyles);
		showTabs(pstyles, unitIndex);
		showCStyle(pstyles, cstyles, defLang);
		showParent(pstyles);
	}
}

void SMPStyleWidget::showLineSpacing(QValueList<ParagraphStyle*> &pstyles)
{
	lineSpacingMode_->clear();
	lineSpacingMode_->insertItem(tr("Fixed Linespacing"));
	lineSpacingMode_->insertItem(tr("Automatic Linespacing"));
	lineSpacingMode_->insertItem(tr("Align to Baseline Grid"));

	int tmpLP = -1;
	for (uint i = 0; i < pstyles.count(); ++i)
	{
		if (tmpLP != -1 && pstyles[i]->lineSpacingMode() != tmpLP)
		{
			tmpLP = -1;
			break;
		}
		else
			tmpLP = pstyles[i]->lineSpacingMode();
	}

	if (tmpLP == -1)
	{
		if (lineSpacingMode_->text(lineSpacingMode_->count() - 1) != "")
			lineSpacingMode_->insertItem("");
		lineSpacingMode_->setCurrentItem(lineSpacingMode_->count() - 1);
	}
	else
		lineSpacingMode_->setCurrentItem(tmpLP);

	double tmpLS = -1.0;
	for (uint i = 0; i < pstyles.count(); ++i)
	{
		if (tmpLS > 0 && !isEqual(pstyles[i]->lineSpacing(), tmpLS))
		{
			tmpLS = -1.0;
			break;
		}
		else
			tmpLS = pstyles[i]->lineSpacing();
	}
	lineSpacing_->setEnabled(true);
	if (tmpLS < 0)
		lineSpacing_->clear();
	else
		lineSpacing_->setValue(tmpLS);
}

void SMPStyleWidget::showSpaceAB(QValueList<ParagraphStyle*> &pstyles)
{
	double tmpA = -1.2;
	for (uint i = 0; i < pstyles.count(); ++i)
	{
		if (tmpA > -1.0 && !isEqual(pstyles[i]->gapBefore(), tmpA))
		{
			tmpA = -1.2;
			break;
		}
		else
			tmpA = pstyles[i]->gapBefore();
	}

	if (tmpA < 0)
		spaceAbove_->clear();
	else
		spaceAbove_->setValue(tmpA);

	tmpA = -1.2;
	for (uint i = 0; i < pstyles.count(); ++i)
	{
		if (tmpA > -1.0 && !isEqual(pstyles[i]->gapAfter(), tmpA))
		{
			tmpA = -1.2;
			break;
		}
	}

	if (tmpA < 0)
		spaceBelow_->clear();
	else
		spaceBelow_->setValue(tmpA);
}

void SMPStyleWidget::showDropCap(QValueList<ParagraphStyle*> &pstyles)
{
	parentDropCapButton->hide();
	disconnect(parentDropCapButton, SIGNAL(clicked()), this, SLOT(slotParentDropCap()));

	bool dc = pstyles[0]->hasDropCap();
	for (uint i = 0; i < pstyles.count(); ++i)
	{
		if (dc != pstyles[i]->hasDropCap())
		{
			dc = false;
			break;
		}
	}
	dropCapsBox->setChecked(dc);

	int lines = -1;
	for (uint i = 0; i < pstyles.count(); ++i)
	{
		if (lines > -1 && pstyles[i]->dropCapLines() != lines)
		{
			lines = -1;
			break;
		}
		else
			lines = pstyles[i]->dropCapLines();
	}
	if (lines == -1)
		dropCapLines_->clear();
	else
		dropCapLines_->setValue(lines);

	double dco = -4000.0;
	for (uint i = 0; i < pstyles.count(); ++i)
	{
		if (dco > -3980.0 && !isEqual(pstyles[i]->dropCapOffset(), dco))
		{
			dco = -4000.0;
			break;
		}
		else
			dco = pstyles[i]->dropCapOffset();
	}

	if (dco < -3800.0)
		dropCapOffset_->clear();
	else
		dropCapOffset_->setValue(dco);

	connect(dropCapsBox, SIGNAL(toggled(bool)), this, SLOT(slotDropCap(bool)));
	dropCapsBox->setEnabled(true);
	dropCapLines_->setEnabled(true);
	dropCapOffset_->setEnabled(true);
}

void SMPStyleWidget::showAlignment(QValueList<ParagraphStyle*> &pstyles)
{
	ParagraphStyle::AlignmentType a = pstyles[0]->alignment();
	for (uint i = 0; i < pstyles.count(); ++i)
	{
		if (a != pstyles[i]->alignment())
		{
			if (alignement_->selectedId() > -1)
			{
				alignement_->setExclusive(false);
				alignement_->selected()->toggle();
				alignement_->setExclusive(true);
			}
			return;
		}
	}
	alignement_->setStyle(a);
}

void SMPStyleWidget::showTabs(QValueList<ParagraphStyle*> &pstyles, int unitIndex)
{
	QValueList<ParagraphStyle::TabRecord> t = pstyles[0]->tabValues();
	for (uint i = 0; i < pstyles.count(); ++i)
	{
		if (t != pstyles[i]->tabValues())
		{
			t = QValueList<ParagraphStyle::TabRecord>();
			break;
		}
	}
	tabList_->setTabs(t, unitIndex);

	double l = -4000.0;
	for (uint i = 0; i < pstyles.count(); ++i)
	{
		if (l > -3800.0 && !isEqual(pstyles[i]->leftMargin(), l))
		{
			l = -4000.0;
			break;
		}
		else
			l = pstyles[i]->leftMargin();
	}
	if (l < -3800.0)
	{
		tabList_->setLeftIndentValue(0.0);
		tabList_->left_->clear();	
	}
	else
		tabList_->setLeftIndentValue(l);

	l = -4000.0;
	for (uint i = 0; i < pstyles.count(); ++i)
	{
		if (l > -3800.0 && !isEqual(pstyles[i]->firstIndent(), l))
		{
			l = -4000.0;
			break;
		}
		else
			l = pstyles[i]->firstIndent();
	}
	if (l < -3800.0)
	{
		tabList_->setFirstLineValue(0.0);
		tabList_->first_->clear();
	}
	else
		tabList_->setFirstLineValue(l);

	l = -4000.0;
	for (uint i = 0; i < pstyles.count(); ++i)
	{
		if (l > -3800.0 && !isEqual(pstyles[i]->rightMargin(), l))
		{
			l = -4000.0;
			break;
		}
		else
			l = pstyles[i]->rightMargin();
	}
	if (l < -3800.0)
	{
		tabList_->setRightIndentData(0.0);
		tabList_->right_->clear();
	}
	else
		tabList_->setRightIndentValue(l);

}

void SMPStyleWidget::showCStyle(QValueList<ParagraphStyle*> &pstyles, QValueList<CharStyle> &cstyles, const QString &defLang)
{
	cpage->parentLabel->setText(tr("Based on"));

	QValueList<CharStyle*> cstyle;
	for (uint i = 0; i < pstyles.count(); ++i)
		cstyle << &pstyles[i]->charStyle();

	cpage->show(cstyle, cstyles, defLang);
}

void SMPStyleWidget::showParent(QValueList<ParagraphStyle*> &pstyles)
{
	parentCombo->setEnabled(false);

// 	parentCombo->clear();
// 	parentCombo->insertItem("");
// 	for (uint i = 0; i < pstyles.count(); ++i)
// 	{
// 		if (pstyles[i].hasName() && pstyles[i].name() != pstyle->name())
// 			parentCombo->insertItem(pstyles[i].name());
// 	}
// 
// 	if (hasParent_)
// 	{
// 		int index = 0;
// 		for (int i = 0; i < parentCombo->count(); ++i)
// 		{
// 			if (parentCombo->text(i) == parent->name())
// 			{
// 				index = i;
// 				break;
// 			}
// 		}
// 		parentCombo->setCurrentItem(index);
// 	}
// 	else
// 		parentCombo->setCurrentItem(0);
}

void SMPStyleWidget::clearAll()
{

}

void SMPStyleWidget::slotDropCap(bool isOn)
{
	if (isOn)
	{
		dropCapsBox->setEnabled(true);
		dropCapLines_->setEnabled(true);
		dropCapOffset_->setEnabled(true);
	}
	else
	{
		dropCapsBox->setEnabled(true);
		dropCapLines_->setEnabled(false);
		dropCapOffset_->setEnabled(false);
	}
	if (hasParent_)
		parentDropCapButton->show();
}

void SMPStyleWidget::slotParentDropCap()
{
	disconnect(parentDropCapButton, SIGNAL(clicked()), this, SLOT(slotParentDropCap()));
	disconnect(dropCapsBox, SIGNAL(toggled(bool)), this, SLOT(slotDropCap(bool)));
	parentDropCapButton->hide();
	dropCapsBox->setChecked(parentDropCap_);
	emit useParentDropCap();
	connect(parentDropCapButton, SIGNAL(clicked()), this, SLOT(slotParentDropCap()));
	connect(dropCapsBox, SIGNAL(toggled(bool)), this, SLOT(slotDropCap(bool)));
}

SMPStyleWidget::~SMPStyleWidget()
{
	
}

/******************************************************************************/
/******************************************************************************/

SMCStylePage::SMCStylePage(QWidget *parent) : CStylePBase(parent)
{
	characterBoxLayout = new QVBoxLayout(characterBox);
	characterBoxLayout->setAlignment( Qt::AlignLeft );
	characterBoxLayout->setSpacing( 5 );
	characterBoxLayout->setMargin( 0 );

	fontFace_ = new SMFontComboH(characterBox);
	characterBoxLayout->addWidget( fontFace_ );

	characterBoxLayout->addSpacing( 10 );
	spinBoxLayout_ = new QGridLayout(2, 9);

	fontSize_ = new SMMSpinBox( 1, 2048, characterBox, 1 );
	fontSize_->setMinimumSize( QSize( 70, 22 ) );
	fontSize_->setSuffix( tr( " pt" ) );

	fontSizeLabel_ = new QLabel( "" ,characterBox, "TextF2" );
	fontSizeLabel_->setPixmap(loadIcon("Zeichen.xpm"));
	fontSizeLabel_->setMinimumSize( QSize( 22, 22 ) );
	fontSizeLabel_->setMaximumSize( QSize( 22, 22 ) );

	spinBoxLayout_->addWidget(fontSizeLabel_, 0, 0);
	spinBoxLayout_->addMultiCellWidget(fontSize_, 0, 0, 1, 2);

	trackingLabel_ = new QLabel( characterBox, "pixmapLabel3_3" );
	trackingLabel_->setMinimumSize( QSize( 22, 22 ) );
	trackingLabel_->setMaximumSize( QSize( 22, 22 ) );
	trackingLabel_->setPixmap( loadIcon("textkern.png") );

	tracking_ = new SMMSpinBox( -300, 300, characterBox, 1 );
	tracking_->setSuffix( tr( " %" ) );

	spinBoxLayout_->addWidget(trackingLabel_, 0, 3);
	spinBoxLayout_->addMultiCellWidget(tracking_, 0, 0, 4, 5);

	baselineOffsetLabel_ = new QLabel( characterBox, "pixmapLabel2" );
	baselineOffsetLabel_->setMinimumSize( QSize( 22, 22 ) );
	baselineOffsetLabel_->setMaximumSize( QSize( 22, 22 ) );
	baselineOffsetLabel_->setPixmap( loadIcon("textbase.png") );

	baselineOffset_ = new SMMSpinBox( -100, 100, characterBox, 1 );
	baselineOffset_->setSuffix( tr( " %" ) );

	spinBoxLayout_->addWidget(baselineOffsetLabel_, 0, 6);
	spinBoxLayout_->addMultiCellWidget(baselineOffset_, 0, 0, 7, 8);

	hscaleLabel_ = new QLabel( "", characterBox, "pixmapLabel3" );
	hscaleLabel_->setMinimumSize( QSize( 22, 22 ) );
	hscaleLabel_->setMaximumSize( QSize( 22, 22 ) );
	hscaleLabel_->setPixmap( loadIcon("textscaleh.png") );

	fontHScale_ = new SMMSpinBox( 10, 400, characterBox, 1 );
	fontHScale_->setSuffix( tr( " %" ) );

	spinBoxLayout_->addWidget(hscaleLabel_, 1, 0);
	spinBoxLayout_->addMultiCellWidget(fontHScale_, 1, 1, 1, 2);

	vscaleLabel_ = new QLabel( "", characterBox, "pixmapLabel3_2" );
	vscaleLabel_->setMinimumSize( QSize( 22, 22 ) );
	vscaleLabel_->setMaximumSize( QSize( 22, 22 ) );
	vscaleLabel_->setPixmap( loadIcon("textscalev.png") );

	fontVScale_ = new SMMSpinBox( 10, 400, characterBox, 1 );
	fontVScale_->setSuffix( tr( " %" ) );

	spinBoxLayout_->addWidget(vscaleLabel_, 1, 3);
	spinBoxLayout_->addMultiCellWidget(fontVScale_, 1, 1, 4, 5);

	spinBoxLayout_->setColStretch(9, 10);

	characterBoxLayout->addLayout( spinBoxLayout_ );

	characterBoxLayout->addSpacing( 10 );

	layout9a = new QHBoxLayout( 0, 0, 0, "layout9");
	effects_ = new SMStyleSelect(characterBox);
	layout9a->addWidget( effects_ );

	layout9a->addSpacing(10);

	language_ = new SMScComboBox(false, characterBox, "language_");
	layout9a->addWidget(language_);

	spacer1 = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
	layout9a->addItem( spacer1 );
	characterBoxLayout->addLayout( layout9a, Qt::AlignLeft );

	characterBoxLayout->addSpacing( 10 );

	layout5 = new QHBoxLayout( 0, 0, 5, "layout5");
	FillIcon = new QLabel( "", characterBox, "FillIcon" );
	FillIcon->setPixmap(loadIcon("fill.png"));
	layout5->addWidget( FillIcon );

	fillColor_ = new SMColorCombo(characterBox, "TxFill");
	layout5->addWidget( fillColor_ );

	pixmapLabel3_20 = new QLabel( characterBox, "pixmapLabel3_20" );
	pixmapLabel3_20->setMinimumSize( QSize( 22, 22 ) );
	pixmapLabel3_20->setMaximumSize( QSize( 22, 22 ) );
	pixmapLabel3_20->setPixmap( loadIcon("shade.png") );
	layout5->addWidget( pixmapLabel3_20 );

	fillShade_ = new SMShadeButton(characterBox);
	layout5->addWidget( fillShade_ );
	QSpacerItem* spacer3 = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
	layout5->addItem( spacer3 );
	characterBoxLayout->addLayout( layout5 );

	layout6 = new QHBoxLayout( 0, 0, 5, "layout6");
	StrokeIcon = new QLabel( "", characterBox, "StrokeIcon" );
	StrokeIcon->setPixmap(loadIcon("16/stroke-color.png"));
	layout6->addWidget( StrokeIcon );

	strokeColor_ = new SMColorCombo(characterBox, "TxStroke");
	layout6->addWidget( strokeColor_ );

	pixmapLabel3_19 = new QLabel( "", characterBox, "pixmapLabel3_19" );
	pixmapLabel3_19->setMinimumSize( QSize( 22, 22 ) );
	pixmapLabel3_19->setMaximumSize( QSize( 22, 22 ) );
	pixmapLabel3_19->setPixmap( loadIcon("shade.png") );
	layout6->addWidget( pixmapLabel3_19 );

	strokeShade_ = new SMShadeButton(characterBox);
	layout6->addWidget( strokeShade_ );

	spacer4 = new QSpacerItem( 0, 0, QSizePolicy::Expanding, QSizePolicy::Minimum );
	layout6->addItem( spacer4 );
	characterBoxLayout->addLayout( layout6 );

	characterBoxLayout->addStretch(10);

	fillColor_->clear();
	strokeColor_->clear();
	ColorList::Iterator it;
	QPixmap pm = QPixmap(15, 15);
	fillColor_->insertItem(CommonStrings::NoneColor);
	strokeColor_->insertItem(CommonStrings::NoneColor);
	StrokeIcon->setEnabled(false);
	strokeShade_->setEnabled(false);
	strokeColor_->setEnabled(false);

	connect(effects_, SIGNAL(State(int)), this, SLOT(slotColorChange()));
}

void SMCStylePage::languageChange()
{
/***********************************/
/*      Begin Tooltips             */
/***********************************/
// These are for the character style page
// as in character styles and in paragraph style's character style

	QToolTip::add(parentCombo,     tr("Parent style"));
	QToolTip::add(fontFace_,       tr("Font face"));
	QToolTip::add(fontSize_,       tr("Font size"));
	QToolTip::add(tracking_,       tr("Tracking"));
	QToolTip::add(baselineOffset_, tr("Baseline offset"));
	QToolTip::add(fontHScale_,     tr("Horizontal scaling"));
	QToolTip::add(fontVScale_,     tr("Vertical scaling"));
	QToolTip::add(language_,       tr("Language"));
	QToolTip::add(fillColor_,      tr("Fill color"));
	QToolTip::add(fillShade_,      tr("Fill shade"));
	QToolTip::add(strokeColor_,    tr("Stroke color"));
	QToolTip::add(strokeShade_,    tr("Stroke shade"));

/***********************************/
/*        End Tooltips             */
/***********************************/

	parentLabel->setText( tr("Parent"));
	fontVScale_->setSuffix( tr(" %"));
	fontHScale_->setSuffix( tr(" %"));
	baselineOffset_->setSuffix( tr(" %"));
	tracking_->setSuffix( tr(" %"));
	fontSize_->setSuffix( tr(" pt"));
}

void SMCStylePage::fillLangCombo(QMap<QString,QString> langMap)
{
	QStringList sortList;
	QMap<QString,QString>::Iterator it;

	langMap_ = langMap;

	language_->clear();

	for (it = langMap.begin(); it != langMap.end(); ++it)
		sortList.push_back(it.data());

	language_->insertStringList(sortQStringList(sortList));
	language_->listBox()->setMinimumWidth(language_->listBox()->maxItemWidth() + 24);
}

void SMCStylePage::fillColorCombo(ColorList &colors)
{
	fillColor_->clear();
	strokeColor_->clear();

	fillColor_->insertItem(CommonStrings::NoneColor);
	strokeColor_->insertItem(CommonStrings::NoneColor);
	ColorList::Iterator itend=colors.end();
	for (ColorList::Iterator it = colors.begin(); it != itend; ++it)
	{
		fillColor_->insertSmallItem(colors[it.key()], it.key());
		strokeColor_->insertSmallItem(colors[it.key()], it.key());
	}
	fillColor_->listBox()->setMinimumWidth(fillColor_->listBox()->maxItemWidth()+24);
	strokeColor_->listBox()->setMinimumWidth(strokeColor_->listBox()->maxItemWidth()+24);
}

void SMCStylePage::show(CharStyle *cstyle, QValueList<CharStyle> &cstyles, const QString &defLang)
{
	disconnect(effects_, SIGNAL(State(int)), this, SLOT(slotColorChange()));
	parentCombo->setEnabled(true);
	const CharStyle *parent = dynamic_cast<const CharStyle*>(cstyle->parentStyle());
	bool hasParent =  cstyle->hasParent() && parent != 0 && parent->hasName() && cstyle->parent() != "";
	if (hasParent)
	{
		fontSize_->setValue(cstyle->fontSize() / 10.0, cstyle->isInhFontSize());
		fontSize_->setParentValue(parent->fontSize() / 10.0);

		fontHScale_->setValue(cstyle->scaleH() / 10.0, cstyle->isInhScaleH());
		fontHScale_->setParentValue(parent->scaleH() / 10.0);

		fontVScale_->setValue(cstyle->scaleV() / 10.0, cstyle->isInhScaleV());
		fontVScale_->setParentValue(parent->scaleV() / 10.0);

		baselineOffset_->setValue(cstyle->baselineOffset() / 10.0, cstyle->isInhBaselineOffset());
		baselineOffset_->setParentValue(parent->baselineOffset() / 10.0);

		tracking_->setValue(cstyle->tracking() / 10.0, cstyle->isInhTracking());
		tracking_->setParentValue(parent->tracking() / 10.0);

		effects_->setStyle(static_cast<int>(cstyle->effects()), cstyle->isInhEffects());
		effects_->setParentItem(static_cast<int>(parent->effects()));

		fillShade_->setValue(cstyle->fillShade(), cstyle->isInhFillShade());
		fillShade_->setParentValue(parent->fillShade());

		strokeShade_->setValue(cstyle->strokeShade(), cstyle->isInhStrokeShade());
		strokeShade_->setParentValue(parent->strokeShade());

		fillColor_->setCurrentText(cstyle->fillColor(), cstyle->isInhFillColor());
		fillColor_->setParentText(parent->fillColor());

		strokeColor_->setCurrentText(cstyle->strokeColor(), cstyle->isInhStrokeColor());
		strokeColor_->setParentText(parent->strokeColor());

		fontFace_->setCurrentFont(cstyle->font().scName(), cstyle->isInhFont());
		fontFace_->setParentFont(parent->font().scName());
	}
	else
	{
		fontSize_->setValue(cstyle->fontSize() / 10.0);
		fontHScale_->setValue(cstyle->scaleH() / 10.0);
		fontVScale_->setValue(cstyle->scaleV() / 10.0);
		baselineOffset_->setValue(cstyle->baselineOffset() / 10.0);
		tracking_->setValue(cstyle->tracking() / 10.0);
		effects_->setStyle(static_cast<int>(cstyle->effects()));
		fillShade_->setValue(cstyle->fillShade());
		strokeShade_->setValue(cstyle->strokeShade());
		fillColor_->setCurrentText(cstyle->fillColor());
		strokeColor_->setCurrentText(cstyle->strokeColor());
		fontFace_->setCurrentFont(cstyle->font().scName());
	}

	effects_->ShadowVal->Xoffset->setValue(cstyle->shadowXOffset() / 10.0);
	effects_->ShadowVal->Yoffset->setValue(cstyle->shadowYOffset() / 10.0);
	effects_->OutlineVal->LWidth->setValue(cstyle->outlineWidth() / 10.0);
	effects_->StrikeVal->LPos->setValue(cstyle->strikethruOffset() / 10.0);
	effects_->StrikeVal->LWidth->setValue(cstyle->strikethruWidth() / 10.0);
	effects_->UnderlineVal->LPos->setValue(cstyle->underlineOffset() / 10.0);
	effects_->UnderlineVal->LWidth->setValue(cstyle->underlineWidth() / 10.0);
	slotColorChange();

	parentCombo->clear();
	parentCombo->insertItem("");
	for (uint i = 0; i < cstyles.count(); ++i)
	{
		if (cstyles[i].name() != cstyle->name())
			parentCombo->insertItem(cstyles[i].name());
	}

	if (hasParent)
	{
		int index = 0;
		for (int i = 0; i < parentCombo->count(); ++i)
		{
			if (parentCombo->text(i) == cstyle->parentStyle()->name())
			{
				index = i;
				break;
			}
		}
		parentCombo->setCurrentItem(index);
	}
	else
		parentCombo->setCurrentItem(0);

	QString clang = cstyle->language() == QString::null || cstyle->language().isEmpty() ?
	                                      defLang : cstyle->language();
	QString plang = QString::null;
	if (hasParent)
		plang = parent->language() == QString::null || parent->language().isEmpty() ?
		                              defLang : parent->language();

	int ci = -1, pi = -1, di = -1;
	for (int i = 0; i < language_->count(); ++i)
	{
		if (language_->text(i) == langMap_[clang])
			ci = i;
		
		if (hasParent && language_->text(i) == langMap_[plang])
			pi = i;

		if (language_->text(i) == defLang || language_->text(i) == langMap_[defLang])
			di = i;
	}

	Q_ASSERT(di != -1);

	if (hasParent)
	{
		if (ci == -1)
			language_->setCurrentItem(di, cstyle->isInhLanguage());
		else
			language_->setCurrentItem(ci, cstyle->isInhLanguage());

		language_->setParentItem(pi);
	}
	else
	{
		if (ci == -1)
			language_->setCurrentItem(di);
		else
			language_->setCurrentItem(ci);
	}

	connect(effects_, SIGNAL(State(int)), this, SLOT(slotColorChange()));
}

void SMCStylePage::show(QValueList<CharStyle*> &cstyles, QValueList<CharStyle> &cstylesAll, const QString &defLang)
{
	if (cstyles.count() == 1)
		show(cstyles[0], cstylesAll, defLang);
	else if (cstyles.count() > 1)
	{
		showSizeAndPosition(cstyles);
		showEffects(cstyles);
		showColors(cstyles);
		showLanguage(cstyles, defLang);
		showParent(cstyles);
	}
}

void SMCStylePage::showSizeAndPosition(const QValueList<CharStyle*> &cstyles)
{
	int d = -30000;
	for (uint i = 0; i < cstyles.count(); ++i)
	{
		if (d != -30000 && cstyles[i]->fontSize() != d)
		{
			d = -30000;
			break;
		}
		else
			d = cstyles[i]->fontSize();
	}
	if (d == -30000)
		fontSize_->clear();
	else
		fontSize_->setValue(d / 10.0);

	d = -30000;
	for (uint i = 0; i < cstyles.count(); ++i)
	{
		if (d != -30000 && cstyles[i]->scaleH() != d)
		{
			d = -30000;
			break;
		}
		else
			d = cstyles[i]->scaleH();
	}
	if (d == -30000)
		fontHScale_->clear();
	else
		fontHScale_->setValue(d / 10.0);

	d = -30000;
	for (uint i = 0; i < cstyles.count(); ++i)
	{
		if (d != -30000 && cstyles[i]->scaleV() != d)
		{
			d = -30000;
			break;
		}
		else
			d = cstyles[i]->scaleV();
	}
	if (d == -30000)
		fontVScale_->clear();
	else
		fontVScale_->setValue(d / 10.0);

	d = -30000;
	for (uint i = 0; i < cstyles.count(); ++i)
	{
		if (d != -30000 && cstyles[i]->baselineOffset() != d)
		{
			d = -30000;
			break;
		}
		else
			d = cstyles[i]->baselineOffset();
	}
	if (d == -30000)
		baselineOffset_->clear();
	else
		baselineOffset_->setValue(d / 10.0);

	d = -30000;
	for (uint i = 0; i < cstyles.count(); ++i)
	{
		if (d != -30000 && cstyles[i]->tracking() != d)
		{
			d = -30000;
			break;
		}
		else
			d = cstyles[i]->tracking();
	}
	if (d == -30000)
		tracking_->clear();
	else
		tracking_->setValue(d / 10.0);
}

void SMCStylePage::showEffects(const QValueList<CharStyle*> &cstyles)
{
	int d = -30000;
	for (uint i = 0; i < cstyles.count(); ++i)
	{
		if (d != -30000 && static_cast<int>(cstyles[i]->effects()) != d)
		{
			d = -30000;
			break;
		}
		else
			d = static_cast<int>(cstyles[i]->effects());
	}
	if (d == -30000)
		effects_->setStyle(0);
	else
		effects_->setStyle(d);

// 	TODO these things still missing:
// 		effects_->ShadowVal->Xoffset->setValue(cstyle->shadowXOffset() / 10.0);
// 		effects_->ShadowVal->Yoffset->setValue(cstyle->shadowYOffset() / 10.0);
// 		effects_->OutlineVal->LWidth->setValue(cstyle->outlineWidth() / 10.0);
// 		effects_->StrikeVal->LPos->setValue(cstyle->strikethruOffset() / 10.0);
// 		effects_->StrikeVal->LWidth->setValue(cstyle->strikethruWidth() / 10.0);
// 		effects_->UnderlineVal->LPos->setValue(cstyle->underlineOffset() / 10.0);
// 		effects_->UnderlineVal->LWidth->setValue(cstyle->underlineWidth() / 10.0);
}

void SMCStylePage::showColors(const QValueList<CharStyle*> &cstyles)
{
	strokeShade_->setEnabled(true);
	strokeColor_->setEnabled(true);

	int d = -30000;
	for (uint i = 0; i < cstyles.count(); ++i)
	{
		if (d != -30000 && cstyles[i]->fillShade() != d)
		{
			d = -30000;
			break;
		}
		else
			d = cstyles[i]->fillShade();
	}
	if (d == -30000)
		fillShade_->setText(tr("Shade"));
	else
		fillShade_->setValue(d);

	d = -30000;
	for (uint i = 0; i < cstyles.count(); ++i)
	{
		if (d != -30000 && cstyles[i]->strokeShade() != d)
		{
			d = -30000;
			break;
		}
		else
			d = cstyles[i]->strokeShade();
	}
	if (d == -30000)
	{
		strokeShade_->setValue(21);
		strokeShade_->setText(tr("Shade"));
	}
	else
		strokeShade_->setValue(d);

	QString s = QString::null;
	for (uint i = 0; i < cstyles.count(); ++i)
	{
		if (s != QString::null && s != cstyles[i]->fillColor())
		{
			s = QString::null;
			break;
		}
		else
			s = cstyles[i]->fillColor();
	}
	if (s == QString::null)
	{
		if (fillColor_->text(fillColor_->count() - 1) != "")
			fillColor_->insertItem("");
		fillColor_->setCurrentItem(fillColor_->count() - 1);
	}
	else
		fillColor_->setCurrentText(s);

	s = QString::null;
	for (uint i = 0; i < cstyles.count(); ++i)
	{
		if (s != QString::null && s != cstyles[i]->strokeColor())
		{
			s = QString::null;
			break;
		}
		else
			s = cstyles[i]->strokeColor();
	}
	if (s == QString::null)
	{
		if (strokeColor_->text(strokeColor_->count() - 1) != "")
			strokeColor_->insertItem("");
		strokeColor_->setCurrentItem(fillColor_->count() - 1);
	}
	else
		strokeColor_->setCurrentText(s);
}

void SMCStylePage::showLanguage(const QValueList<CharStyle*> &cstyles, const QString &defLang)
{
	QString s = cstyles[0]->language();
	for (uint i = 0; i < cstyles.count(); ++i)
	{
		if (s != cstyles[i]->language())
		{
			s = QString::null;
			break;
		}
		else
			s = cstyles[i]->language();
	}

	if (s == QString::null)
	{
		if (language_->text(language_->count() - 1) != "")
			language_->insertItem("");
		language_->setCurrentItem(language_->count() - 1);
	}
	else
	{
		Q_ASSERT(langMap_.contains(s));
		language_->setCurrentText(langMap_[s]);
	}
}

void SMCStylePage::showParent(const QValueList<CharStyle*> &cstyles)
{
	parentCombo->setEnabled(false);
}

void SMCStylePage::clearAll()
{
	
}

void SMCStylePage::slotColorChange()
{
	int s = effects_->getStyle();
	bool enabled;
	if ((s & 4) || (s & 256))
		enabled = true;
	else
		enabled = false;
	StrokeIcon->setEnabled(enabled);
	strokeShade_->setEnabled(enabled);
	strokeColor_->setEnabled(enabled);
}


SMCStylePage::~SMCStylePage()
{
	
}

/******************************************************************************/
/******************************************************************************/
