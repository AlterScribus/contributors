#include "cmdgetprop.h"
#include "cmdutil.h"

PyObject *scribus_getfillcolor(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *i = GetUniqueItem(QString(Name));
	return i != NULL ? PyString_FromString(i->Pcolor) : NULL;
}

PyObject *scribus_getlinecolor(PyObject *self, PyObject* args)
{
	char *Name = "";
	PageItem *it;
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	it = GetUniqueItem(QString(Name));
	if (it == NULL)
		return NULL;
	if ((it->HasSel) && ((it->PType == FRAME_TEXT) || (it->PType == FRAME_PATHTEXT)))
	{
		for (uint b = 0; b < it->Ptext.count(); ++b)
		{
			if (it->Ptext.at(b)->cselect)
				return PyString_FromString(it->Ptext.at(b)->ccolor);
		}
	}
	else
		return PyString_FromString(it->Pcolor2);
	return PyString_FromString("");
}

PyObject *scribus_getlinewidth(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *i = GetUniqueItem(QString(Name));
	return i != NULL ? PyFloat_FromDouble(static_cast<double>(i->Pwidth)) : NULL;
}

PyObject *scribus_getlineshade(PyObject *self, PyObject* args)
{
	char *Name = "";
	PageItem *it;
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	it = GetUniqueItem(QString(Name));
	if (it == NULL)
		return NULL;
	if ((it->HasSel) && ((it->PType == FRAME_TEXT) || (it->PType == FRAME_PATHTEXT)))
	{
		for (uint b = 0; b < it->Ptext.count(); ++b)
		{
			if (it->Ptext.at(b)->cselect)
				return PyInt_FromLong(static_cast<long>(it->Ptext.at(b)->cshade));
		}
	}
	else
		return PyInt_FromLong(static_cast<long>(it->Shade2));
	return PyInt_FromLong(0L);
}

PyObject *scribus_getlinejoin(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *i = GetUniqueItem(QString(Name));
	return i != NULL ? PyInt_FromLong(static_cast<long>(i->PLineJoin)) : NULL;
}

PyObject *scribus_getlineend(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *i = GetUniqueItem(QString(Name));
	return i != NULL ? PyInt_FromLong(static_cast<long>(i->PLineEnd)) : NULL;
}

PyObject *scribus_getlinestyle(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *i = GetUniqueItem(QString(Name));
	return i != NULL ? PyInt_FromLong(static_cast<long>(i->PLineArt)) : NULL;
}

PyObject *scribus_getfillshade(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *i = GetUniqueItem(QString(Name));
	return i != NULL ? PyInt_FromLong(static_cast<long>(i->Shade)) : NULL;
}

PyObject *scribus_getcornerrad(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *i = GetUniqueItem(QString(Name));
	return i != NULL ? PyInt_FromLong(static_cast<long>(i->RadRect)) : NULL;
}

PyObject *scribus_getimgscale(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *i = GetUniqueItem(QString(Name));
	return i != NULL ? Py_BuildValue("(ff)", i->LocalScX, i->LocalScY) : NULL;
}

PyObject *scribus_getimgname(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *i = GetUniqueItem(QString(Name));
	return i != NULL ? PyString_FromString(i->Pfile) : NULL;
}

PyObject *scribus_getposi(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *i = GetUniqueItem(QString(Name));
	return (i != NULL) ? Py_BuildValue("(ff)", PointToValue(i->Xpos), PointToValue(i->Ypos)) : NULL;
}

PyObject *scribus_getsize(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *i = GetUniqueItem(QString(Name));
	return (i != NULL) ? Py_BuildValue("(ff)", PointToValue(i->Width), PointToValue(i->Height)) : NULL;
}

PyObject *scribus_getrotation(PyObject *self, PyObject* args)
{
	char *Name = "";
	if (!PyArg_ParseTuple(args, "|s", &Name))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	PageItem *i = GetUniqueItem(QString(Name));
	return i != NULL ? PyFloat_FromDouble(static_cast<double>(i->Rot * -1)) : NULL;
}

PyObject *scribus_getallobj(PyObject *self, PyObject* args)
{
	PyObject *l;
	int typ = -1;
	uint counter = 0;
	uint counter2 = 0;
	if (!PyArg_ParseTuple(args, "|i", &typ))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	// have doc already
	if (typ != -1)
	{
		for (uint lam2 = 0; lam2 < Carrier->doc->Items.count(); ++lam2)
		{
			if (Carrier->doc->Items.at(lam2)->PType == typ)
				counter++;
		}
	}
	else
		counter = Carrier->doc->Items.count();

	l = PyList_New(counter);
	for (uint lam=0; lam < Carrier->doc->Items.count(); ++lam)
	{
		if (typ != -1)
		{
			if (Carrier->doc->Items.at(lam)->PType == typ)
			{
				PyList_SetItem(l, counter2, PyString_FromString(Carrier->doc->Items.at(lam)->AnName));
				counter2++;
			}
		}
		else
			PyList_SetItem(l, lam, PyString_FromString(Carrier->doc->Items.at(lam)->AnName));
	}
	return l;
}
