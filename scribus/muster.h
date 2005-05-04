#ifndef MUSTERPAGES_H
#define MUSTERPAGES_H

#include <qdialog.h>
class QListBox;
class QListBoxItem;
class QPushButton;
class QHBoxLayout;
class QVBoxLayout;

class ScribusDoc;
class ScribusView;

class MasterPagesPalette : public QDialog
{
	Q_OBJECT

public:
	MasterPagesPalette( QWidget* parent, ScribusDoc *pCurrentDoc, ScribusView *pCurrentView, QString masterPageName);
	~MasterPagesPalette() {};
	void closeEvent(QCloseEvent *closeEvent);
	void updateMasterPageList(QString MasterPageName);

public slots:
	void selectMasterPage(QString name);

protected slots:
	void reject();

private:
	QListBox* masterPageData;
	QPushButton* importButton;
	QPushButton* newButton;
	QPushButton* duplicateButton;
	QPushButton* deleteButton;
	QPushButton* closeButton;
	ScribusDoc *currentDoc;
	ScribusView *currentView;
	QString sMuster;

protected:
	QVBoxLayout* masterPagesLayout;
	QHBoxLayout* buttonLayout;

private slots:
	void duplicateMasterPage();
	void deleteMasterPage();
	void newMasterPage();
	void appendPage();
	void selectMasterPage(QListBoxItem *item);

signals:
	void createNew(int);
	void loadPage(QString, int, bool);
	void finished();
	void docAltered(ScribusDoc *);

};

#endif // MUSTERPAGES_H
