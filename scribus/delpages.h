/****************************************************************************
** Form interface generated from reading ui file 'DelPage.ui'
**
** Created: Thu Jun 14 11:37:35 2001
**      by:  The User Interface Compiler (uic)
**
** WARNING! All changes made in this file will be lost!
****************************************************************************/
#ifndef DELPAGES_H
#define DELPAGES_H

class QDialog;
class QLabel;
class QLayout;
class QPushbutton;
class QSpinbox;

class DelPages : public QDialog
{ 
    Q_OBJECT

public:
    DelPages( QWidget* parent, int currentPage, int maxPage );
    ~DelPages() {};

	const int getFromPage();
	const int getToPage();

private:
    QVBoxLayout* dialogLayout;
    QHBoxLayout* fromToLayout;
    QHBoxLayout* okCancelLayout;

    QPushButton* cancelQPButton;
    QPushButton* okQPButton;
    QLabel* fromQLabel;
    QLabel* toQLabel;
    QSpinBox* toPageQSBox;
    QSpinBox* fromPageQSBox;

private slots:
    virtual void fromChanged(int pageNumber);
    virtual void toChanged(int pageNumber);
};

#endif // DELPAGES_H
