/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include <QKeyEvent>
#include "guidesview.h"


GuidesView::GuidesView(QWidget * parent)
	: QTableView(parent)
{
}

void GuidesView::keyPressEvent(QKeyEvent * event)
{
	if (event->key() == Qt::Key_Delete)
	{
		emit deleteKeyPressed();
		return;
	}
	QTableView::keyPressEvent(event);
}
