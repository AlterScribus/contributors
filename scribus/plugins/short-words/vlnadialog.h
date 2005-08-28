/*! This is the Scribus Short Words GUI class specification.

This code is based on the Scribus-Vlna plug in rewritten for
international use.

2004 Petr Vanek <petr@yarpen.cz>

This program is free software - see LICENSE file in the distribution
or documentation
*/

#ifndef _SHORTWORDSDIALOG_H
#define _SHORTWORDSDIALOG_H

#include "shortwords.h"

#include <qdialog.h>

class QVBoxLayout;
class QHBoxLayout;
class QGridLayout;
class QButtonGroup;
class QRadioButton;
class QPushButton;
class QLabel;
class QCheckBox;
class QMenuBar;

class Config;

/** \brief GUI dialog for user to make decision.
 Generated from Qt designer UI file. Later changes by my hands :) */
class VlnaDialog : public QDialog
{
	Q_OBJECT

public:
	VlnaDialog(QWidget* parent = 0, const char* name = 0, bool modal = FALSE, WFlags fl = 0);
	~VlnaDialog();

	//! reference on the config structure
	Config *cfg;

	QButtonGroup* buttonGroup;
	QRadioButton* frameRadio;
	QRadioButton* pageRadio;
	QRadioButton* allRadio;
	QPushButton* okButton;
	QPushButton* cancelButton;
	//QPushButton* infoButton;
	QCheckBox* userCheckBox;
	/*! 1-3 integer - value of the radio button group transformed */
	int actionSelected;
	/*! Menu bar for this widget */
	QMenuBar *menuBar;

	/** from config file */
	void selectAction(int aAction);

public slots:
	/** run shorts processing */
	virtual void okButton_pressed();
	/** cancel and quit */
	virtual void cancelButton_pressed();
	/** raise "about" dialog */
	virtual void infoButton_pressed();
	/** Edit system wide rc file */
	virtual void editSystemCfg();
	/** Edit user wide rc file */
	virtual void editUserCfg();
	/** Set the plain text editor */
	virtual void setupEditor();
	/** TODO: raise help dialog. It doesn't support tutorial sections.*/
	virtual void help();


protected:
	QGridLayout* VlnaDialogLayout;
	QVBoxLayout* layout4;
	QHBoxLayout* layout3;
	QVBoxLayout* layout2;
	QVBoxLayout* layout1;

	/*! Cal editor to edit specified file */
	void editFile(QString);

protected slots:
	virtual void languageChange();
};

#endif // VLNADIALOG_H
