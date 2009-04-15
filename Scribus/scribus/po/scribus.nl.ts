<!DOCTYPE TS><TS>
<defaultcodec></defaultcodec>
<context>
    <name></name>
    <message>
        <source>getColorNames() -&gt; list

Returns a list containing the names of all defined colors in the document.
If no document is open, returns a list of the default document colors.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>newDocDialog() -&gt; bool

Displays the &quot;New Document&quot; dialog box. Creates a new document if the user
accepts the settings. Does not create a document if the user presses cancel.
Returns true if a new document was created.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>newDocument(size, margins, orientation, firstPageNumber,
                        unit, pagesType, firstPageOrder) -&gt; bool

Creates a new document and returns true if successful. The parameters have the
following meaning:

size = A tuple (width, height) describing the size of the document. You can
use predefined constants named PAPER_&lt;paper_type&gt; e.g. PAPER_A4 etc.

margins = A tuple (left, right, top, bottom) describing the document
margins

orientation = the page orientation - constants PORTRAIT, LANDSCAPE

firstPageNumer = is the number of the first page in the document used for
pagenumbering. While you&apos;ll usually want 1, it&apos;s useful to have higher
numbers if you&apos;re creating a document in several parts.

unit: this value sets the measurement units used by the document. Use a
predefined constant for this, one of: UNIT_INCHES, UNIT_MILLIMETERS,
UNIT_PICAS, UNIT_POINTS.

pagesType = One of the predefined constants PAGE_n. PAGE_1 is single page,
PAGE_2 is for double sided documents, PAGE_3 is for 3 pages fold and
PAGE_4 is 4-fold.

firstPageOrder = What is position of first page in the document.
Indexed from 0 (0 = first).

numPage = Number of pages to be created.

The values for width, height and the margins are expressed in the given unit
for the document. PAPER_* constants are expressed in points. If your document
is not in points, make sure to account for this.

example: newDocument(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 7, UNIT_POINTS,
PAGE_4, 3, 1)

May raise ScribusError if is firstPageOrder bigger than allowed by pagesType.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFillColor([&quot;name&quot;]) -&gt; string

Returns the name of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>moveObject(dx, dy [, &quot;name&quot;])

Moves the object &quot;name&quot; by dx and dy relative to its current position. The
distances are expressed in the current measurement unit of the document (see
UNIT constants). If &quot;name&quot; is not given the currently selected item is used.
If the object &quot;name&quot; belongs to a group, the whole group is moved.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setRedraw(bool)

Disables page redraw when bool = False, otherwise redrawing is enabled.
This change will persist even after the script exits, so make sure to call
setRedraw(True) in a finally: clause at the top level of your script.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createRect(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new rectangle on the current page and returns its name. The
coordinates are given in the current measurement units of the document
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object
because you need this name to reference that object in future. If &quot;name&quot;
is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>newPage(where [,&quot;masterpage&quot;])

Creates a new page. If &quot;where&quot; is -1 the new Page is appended to the
document, otherwise the new page is inserted before &quot;where&quot;. Page numbers are
counted from 1 upwards, no matter what the displayed first page number of your
document is. The optional parameter &quot;masterpage&quot; specifies the name of the
master page for the new page.

May raise IndexError if the page number is out of range
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setGradientFill(type, &quot;color1&quot;, shade1, &quot;color2&quot;, shade2, [&quot;name&quot;])

Sets the gradient fill of the object &quot;name&quot; to type. Color descriptions are
the same as for setFillColor() and setFillShade(). See the constants for
available types (FILL_&lt;type&gt;).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFontSize([&quot;name&quot;]) -&gt; float

Returns the font size in points for the text frame &quot;name&quot;. If this text
frame has some text selected the value assigned to the first character of
the selection is returned.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>messagebarText(&quot;string&quot;)

Writes the &quot;string&quot; into the Scribus message bar (status line). The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>importSVG(&quot;string&quot;)

The &quot;string&quot; must be a valid filename for a SVG image. The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>@default</name>
    <message>
        <source>getFont([&quot;name&quot;]) -&gt; string

Returns the font name for the text frame &quot;name&quot;. If this text frame
has some text selected the value assigned to the first character
of the selection is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getTextLength([&quot;name&quot;]) -&gt; integer

Returns the length of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot;. If this text frame has some text
selected, the selected text is returned. All text in the frame, not just
currently visible text, is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getAllText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot; and of all text frames which are
linked with this frame. If this textframe has some text selected, the selected
text is returned. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineSpacing([&quot;name&quot;]) -&gt; float

Returns the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; expressed in
points. If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getColumnGap([&quot;name&quot;]) -&gt; float

Returns the column gap size of the text frame &quot;name&quot; expressed in points. If
&quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getColumns([&quot;name&quot;]) -&gt; integer

Gets the number of columns of the text frame &quot;name&quot;. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setText(&quot;text&quot;, [&quot;name&quot;])

Sets the text of the text frame &quot;name&quot; to the text of the string &quot;text&quot;.
Text must be UTF8 encoded - use e.g. unicode(text, &apos;iso-8859-2&apos;). See the FAQ
for more details. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFont(&quot;font&quot;, [&quot;name&quot;])

Sets the font of the text frame &quot;name&quot; to &quot;font&quot;. If there is some text
selected only the selected text is changed.  If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError if the font cannot be found.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFontSize(size, [&quot;name&quot;])

Sets the font size of the text frame &quot;name&quot; to &quot;size&quot;. &quot;size&quot; is treated
as a value in points. If there is some text selected only the selected text is
changed. &quot;size&quot; must be in the range 1 to 512. If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError for a font size that&apos;s out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineSpacing(size, [&quot;name&quot;])

Sets the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; to &quot;size&quot;.
&quot;size&quot; is a value in points. If &quot;name&quot; is not given the currently selected
item is used.

May throw ValueError if the line spacing is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setColumnGap(size, [&quot;name&quot;])

Sets the column gap of the text frame &quot;name&quot; to the value &quot;size&quot;. If
&quot;name&quot; is not given the currently selected item is used.

May throw ValueError if the column gap is out of bounds (must be positive).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setColumns(nr, [&quot;name&quot;])

Sets the number of columns of the text frame &quot;name&quot; to the integer &quot;nr&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May throw ValueError if number of columns is not at least one.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setTextAlignment(align, [&quot;name&quot;])

Sets the text alignment of the text frame &quot;name&quot; to the specified alignment.
If &quot;name&quot; is not given the currently selected item is used. &quot;align&quot; should
be one of the ALIGN_ constants defined in this module - see dir(scribus).

May throw ValueError for an invalid alignment constant.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deleteText([&quot;name&quot;])

Deletes any text in the text frame &quot;name&quot;. If there is some text selected,
only the selected text will be deleted. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setTextColor(&quot;color&quot;, [&quot;name&quot;])

Sets the text color of the text frame &quot;name&quot; to the color &quot;color&quot;. If there
is some text selected only the selected text is changed. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setTextStroke(&quot;color&quot;, [&quot;name&quot;])

Set &quot;color&quot; of the text stroke. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setTextShade(shade, [&quot;name&quot;])

Sets the shading of the text color of the object &quot;name&quot; to &quot;shade&quot;. If
there is some text selected only the selected text is changed. &quot;shade&quot; must
be an integer value in the range from 0 (lightest) to 100 (full color
intensity). If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>linkTextFrames(&quot;fromname&quot;, &quot;toname&quot;)

Link two text frames. The frame named &quot;fromname&quot; is linked to the
frame named &quot;toname&quot;. The target frame must be an empty text frame
and must not link to or be linked from any other frames already.

May throw ScribusException if linking rules are violated.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>unlinkTextFrames(&quot;name&quot;)

Remove the specified (named) object from the text frame flow/linkage. If the
frame was in the middle of a chain, the previous and next frames will be
connected, eg &apos;a-&gt;b-&gt;c&apos; becomes &apos;a-&gt;c&apos; when you unlinkTextFrames(b)&apos;

May throw ScribusException if linking rules are violated.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>traceText([&quot;name&quot;])

Convert the text frame &quot;name&quot; to outlines. If &quot;name&quot; is not given the
currently selected item is used.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getColor(&quot;name&quot;) -&gt; tuple

Returns a tuple (C, M, Y, K) containing the four color components of the
color &quot;name&quot; from the current document. If no document is open, returns
the value of the named color from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>changeColor(&quot;name&quot;, c, m, y, k)

Changes the color &quot;name&quot; to the specified CMYK value. The color value is
defined via four components c = Cyan, m = Magenta, y = Yellow and k = Black.
Color components should be in the range from 0 to 255.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>messageBox(&quot;caption&quot;, &quot;message&quot;,
    icon=ICON_NONE, button1=BUTTON_OK|BUTTONOPT_DEFAULT,
    button2=BUTTON_NONE, button3=BUTTON_NONE) -&gt; integer

Displays a message box with the title &quot;caption&quot;, the message &quot;message&quot;, and
an icon &quot;icon&quot; and up to 3 buttons. By default no icon is used and a single
button, OK, is displayed. Only the caption and message arguments are required,
though setting an icon and appropriate button(s) is strongly
recommended. The message text may contain simple HTML-like markup.

Returns the number of the button the user pressed. Button numbers start
at 1.

For the icon and the button parameters there are predefined constants available
with the same names as in the Qt Documentation. These are the BUTTON_* and
ICON_* constants defined in the module. There are also two extra constants that
can be binary-ORed with button constants:
    BUTTONOPT_DEFAULT   Pressing enter presses this button.
    BUTTONOPT_ESCAPE    Pressing escape presses this button.

Usage examples:
result = messageBox(&apos;Script failed&apos;,
                    &apos;This script only works when you have a text frame selected.&apos;,
                    ICON_ERROR)
result = messageBox(&apos;Monkeys!&apos;, &apos;Something went ook! &lt;i&gt;Was it a monkey?&lt;/i&gt;&apos;,
                    ICON_WARNING, BUTTON_YES|BUTTONOPT_DEFAULT,
                    BUTTON_NO, BUTTON_IGNORE|BUTTONOPT_ESCAPE)

Defined button and icon constants:
BUTTON_NONE, BUTTON_ABORT, BUTTON_CANCEL, BUTTON_IGNORE, BUTTON_NO,
BUTTON_NOALL, BUTTON_OK, BUTTON_RETRY, BUTTON_YES, BUTTON_YESALL,
ICON_NONE, ICON_INFORMATION, ICON_WARNING, ICON_CRITICAL.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>valueDialog(caption, message [,defaultvalue]) -&gt; string

Shows the common &apos;Ask for string&apos; dialog and returns its value as a string
Parameters: window title, text in the window and optional &apos;default&apos; value.

Example: valueDialog(&apos;title&apos;, &apos;text in the window&apos;, &apos;optional&apos;)
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>closeDoc()

Closes the current document without prompting to save.

May throw NoDocOpenError if there is no document to close
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>haveDoc() -&gt; bool

Returns true if there is a document open.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>openDoc(&quot;name&quot;)

Opens the document &quot;name&quot;.

May raise ScribusError if the document could not be opened.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>saveDoc()

Saves the current document with its current name, returns true if successful.
If the document has not already been saved, this may bring up an interactive
save file dialog.

If the save fails, there is currently no way to tell.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>saveDocAs(&quot;name&quot;)

Saves the current document under the new name &quot;name&quot; (which may be a full or
relative path).

May raise ScribusError if the save fails.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setMargins(lr, rr, tr, br)

Sets the margins of the document, Left(lr), Right(rr), Top(tr) and Bottom(br)
margins are given in the measurement units of the document - see UNIT_&lt;type&gt;
constants.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setUnit(type)

Changes the measurement unit of the document. Possible values for &quot;unit&quot; are
defined as constants UNIT_&lt;type&gt;.

May raise ValueError if an invalid unit is passed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getUnit() -&gt; integer (Scribus unit constant)

Returns the measurement units of the document. The returned value will be one
of the UNIT_* constants:
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>loadStylesFromFile(&quot;filename&quot;)

Loads paragraph styles from the Scribus document at &quot;filename&quot; into the
current document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setDocType(facingPages, firstPageLeft)

Sets the document type. To get facing pages set the first parameter to
FACINGPAGES, to switch facingPages off use NOFACINGPAGES instead.  If you want
to be the first page a left side set the second parameter to FIRSTPAGELEFT, for
a right page use FIRSTPAGERIGHT.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineColor([&quot;name&quot;]) -&gt; string

Returns the name of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineWidth([&quot;name&quot;]) -&gt; integer

Returns the line width of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineJoin([&quot;name&quot;]) -&gt; integer (see contants)

Returns the line join style of the object &quot;name&quot;. If &quot;name&quot; is not given
the currently selected item is used.  The join types are:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineEnd([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line cap style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. The cap types are:
CAP_FLAT, CAP_ROUND, CAP_SQUARE
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineStyle([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. Line style constants are:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFillShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getImageScale([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple containing the scaling values of the image frame
&quot;name&quot;.  If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getImageName([&quot;name&quot;]) -&gt; string

Returns the filename for the image in the image frame. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getSize([&quot;name&quot;]) -&gt; (width,height)

Returns a (width, height) tuple with the size of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. The size is
expressed in the current measurement unit of the document - see UNIT_&lt;type&gt;
for reference.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getRotation([&quot;name&quot;]) -&gt; integer

Returns the rotation of the object &quot;name&quot;. The value is expressed in degrees,
and clockwise is positive. If &quot;name&quot; is not given the currently selected item
is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getAllObjects() -&gt; list

Returns a list containing the names of all objects on the current page.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>moveObjectAbs(x, y [, &quot;name&quot;])

Moves the object &quot;name&quot; to a new location. The coordinates are expressed in
the current measurement unit of the document (see UNIT constants).  If &quot;name&quot;
is not given the currently selected item is used.  If the object &quot;name&quot;
belongs to a group, the whole group is moved.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>rotateObject(rot [, &quot;name&quot;])

Rotates the object &quot;name&quot; by &quot;rot&quot; degrees relatively. The object is
rotated by the vertex that is currently selected as the rotation point - by
default, the top left vertext at zero rotation. Positive values mean counter
clockwise rotation when the default rotation point is used. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>sizeObject(width, height [, &quot;name&quot;])

Resizes the object &quot;name&quot; to the given width and height. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getSelectedObject([nr]) -&gt; string

Returns the name of the selected object. &quot;nr&quot; if given indicates the number
of the selected object, e.g. 0 means the first selected object, 1 means the
second selected Object and so on.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>selectionCount() -&gt; integer

Returns the number of selected objects.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>selectObject(&quot;name&quot;)

Selects the object with the given &quot;name&quot;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deselectAll()

Deselects all objects in the whole document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>groupObjects(list)

Groups the objects named in &quot;list&quot; together. &quot;list&quot; must contain the names
of the objects to be grouped. If &quot;list&quot; is not given the currently selected
items are used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>unGroupObjects(&quot;name&quot;)

Destructs the group the object &quot;name&quot; belongs to.If &quot;name&quot; is not given the currently selected item is used.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>scaleGroup(factor [,&quot;name&quot;])

Scales the group the object &quot;name&quot; belongs to. Values greater than 1 enlarge
the group, values smaller than 1 make the group smaller e.g a value of 0.5
scales the group to 50 % of its original size, a value of 1.5 scales the group
to 150 % of its original size.  The value for &quot;factor&quot; must be greater than
0. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if an invalid scale factor is passed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>loadImage(&quot;filename&quot; [, &quot;name&quot;])

Loads the picture &quot;picture&quot; into the image frame &quot;name&quot;. If &quot;name&quot; is
not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>scaleImage(x, y [, &quot;name&quot;])

Sets the scaling factors of the picture in the image frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. A number of 1
means 100 %.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>lockObject([&quot;name&quot;]) -&gt; bool

Locks the object &quot;name&quot; if it&apos;s unlocked or unlock it if it&apos;s locked.
If &quot;name&quot; is not given the currently selected item is used. Returns true
if locked.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isLocked([&quot;name&quot;]) -&gt; bool

Returns true if is the object &quot;name&quot; locked.  If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFontNames() -&gt; list

Returns a list with the names of all available fonts.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getXFontNames() -&gt; list of tuples

Returns a larger font info. It&apos;s a list of the tuples with:
[ (Scribus name, Family, Real name, subset (1|0), embed PS (1|0), font file), (...), ... ]
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLayers() -&gt; list

Returns a list with the names of all defined layers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setActiveLayer(&quot;name&quot;)

Sets the active layer to the layer named &quot;name&quot;.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getActiveLayer() -&gt; string

Returns the name of the current active layer.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>sentToLayer(&quot;layer&quot; [, &quot;name&quot;])

Sends the object &quot;name&quot; to the layer &quot;layer&quot;. The layer must exist.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLayerVisible(&quot;layer&quot;, visible)

Sets the layer &quot;layer&quot; to be visible or not. If is the visible set to false
the layer is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLayerPrintable(&quot;layer&quot;, printable)

Sets the layer &quot;layer&quot; to be printable or not. If is the printable set to
false the layer won&apos;t be printed.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deleteLayer(&quot;layer&quot;)

Deletes the layer with the name &quot;layer&quot;. Nothing happens if the layer doesn&apos;t
exists or if it&apos;s the only layer in the document.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createLayer(layer)

Creates a new layer with the name &quot;name&quot;.

May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getGuiLanguage() -&gt; string

Returns a string with the -lang value.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createEllipse(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new ellipse on the current page and returns its name.
The coordinates are given in the current measurement units of the document
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object
because you need this name for further referencing of that object. If &quot;name&quot;
is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createImage(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new picture frame on the current page and returns its name. The
coordinates are given in the current measurement units of the document.
&quot;name&quot; should be a unique identifier for the object because you need this
name for further access to that object. If &quot;name&quot; is not given Scribus will
create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createText(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new text frame on the actual page and returns its name.
The coordinates are given in the actual measurement unit of the document (see
UNIT constants). &quot;name&quot; should be a unique identifier for the object because
you need this name for further referencing of that object. If &quot;name&quot; is not
given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createLine(x1, y1, x2, y2, [&quot;name&quot;]) -&gt; string

Creates a new line from the point(x1, y1) to the point(x2, y2) and returns
its name. The coordinates are given in the current measurement unit of the
document (see UNIT constants). &quot;name&quot; should be a unique identifier for the
object because you need this name for further access to that object. If
&quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createPolyLine(list, [&quot;name&quot;]) -&gt; string

Creates a new polyline and returns its name. The points for the polyline are
stored in the list &quot;list&quot; in the following order: [x1, y1, x2, y2...xn. yn].
The coordinates are given in the current measurement units of the document (see
UNIT constants). &quot;name&quot; should be a unique identifier for the object because
you need this name for further access to that object. If &quot;name&quot; is not given
Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don&apos;t group into points without leftovers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createPolygon(list, [&quot;name&quot;]) -&gt; string

Creates a new polygon and returns its name. The points for the polygon are
stored in the list &quot;list&quot; in the following order: [x1, y1, x2, y2...xn. yn].
At least three points are required. There is no need to repeat the first point
to close the polygon. The polygon is automatically closed by connecting the
first and the last point.  The coordinates are given in the current measurement
units of the document (see UNIT constants).  &quot;name&quot; should be a unique
identifier for the object because you need this name for further access to that
object. If &quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don&apos;t group into points without leftovers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createBezierLine(list, [&quot;name&quot;]) -&gt; string

Creates a new bezier curve and returns its name. The points for the bezier
curve are stored in the list &quot;list&quot; in the following order:
[x1, y1, kx1, ky1, x2, y2, kx2, ky2...xn. yn, kxn. kyn]
In the points list, x and y mean the x and y coordinates of the point and kx
and ky meaning the control point for the curve.  The coordinates are given in
the current measurement units of the document (see UNIT constants). &quot;name&quot;
should be a unique identifier for the object because you need this name for
further access to that object. If &quot;name&quot; is not given Scribus will create one
for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don&apos;t group into points without leftovers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createPathText(x, y, &quot;textbox&quot;, &quot;beziercurve&quot;, [&quot;name&quot;]) -&gt; string

Creates a new pathText by merging the two objects &quot;textbox&quot; and
&quot;beziercurve&quot; and returns its name. The coordinates are given in the current
measurement unit of the document (see UNIT constants). &quot;name&quot; should be a
unique identifier for the object because you need this name for further access
to that object. If &quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise NotFoundError if one or both of the named base object don&apos;t exist.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deleteObject([&quot;name&quot;])

Deletes the item with the name &quot;name&quot;. If &quot;name&quot; is not given the currently
selected item is deleted.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>textFlowsAroundFrame(&quot;name&quot; [, state])

Enables/disables &quot;Text Flows Around Frame&quot; feature for object &quot;name&quot;.
Called with parameters string name and optional boolean &quot;state&quot;. If &quot;state&quot;
is not passed, text flow is toggled.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>objectExists([&quot;name&quot;]) -&gt; bool

Test if an object with specified name really exists in the document.
The optional parameter is the object name. When no object name is given,
returns True if there is something selected.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setStyle(&quot;style&quot; [, &quot;name&quot;])

Apply the named &quot;style&quot; to the object named &quot;name&quot;. If is no object name
given, it&apos;s applied on the selected object.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getAllStyles() -&gt; list

Return a list of the names of all paragraph styles in the current document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>currentPage() -&gt; integer

Returns the number of the current working page. Page numbers are counted from 1
upwards, no matter what the displayed first page number of your document is.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>redrawAll()

Redraws all pages.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>savePageAsEPS(&quot;name&quot;)

Saves the current page as an EPS to the file &quot;name&quot;.

May raise ScribusError if the save failed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deletePage(nr)

Deletes the given page. Does nothing if the document contains only one page.
Page numbers are counted from 1 upwards, no matter what the displayed first
page number is.

May raise IndexError if the page number is out of range
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>gotoPage(nr)

Moves to the page &quot;nr&quot; (that is, makes the current page &quot;nr&quot;). Note that
gotoPage doesn&apos;t (curently) change the page the user&apos;s view is displaying, it
just sets the page that script commands will operates on.

May raise IndexError if the page number is out of range.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>pageCount() -&gt; integer

Returns the number of pages in the document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getHGuides() -&gt; list

Returns a list containing positions of the horizontal guides. Values are in the
document&apos;s current units - see UNIT_&lt;type&gt; constants.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setHGuides(list)

Sets horizontal guides. Input parameter must be a list of guide positions
measured in the current document units - see UNIT_&lt;type&gt; constants.

Example: setHGuides(getHGuides() + [200.0, 210.0] # add new guides without any lost
         setHGuides([90,250]) # replace current guides entirely
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getVGuides()

See getHGuides.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setVGuides()

See setHGuides.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPageSize() -&gt; tuple

Returns a tuple with page dimensions measured in the document&apos;s current units.
See UNIT_&lt;type&gt; constants and getPageMargins()
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPageItems() -&gt; list

Returns a list of tuples with items on the current page. The tuple is:
(name, objectType, order) E.g. [(&apos;Text1&apos;, 4, 0), (&apos;Image1&apos;, 2, 1)]
means that object named &apos;Text1&apos; is a text frame (type 4) and is the first at
the page...
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFillColor(&quot;color&quot;, [&quot;name&quot;])

Sets the fill color of the object &quot;name&quot; to the color &quot;color&quot;. &quot;color&quot;
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineColor(&quot;color&quot;, [&quot;name&quot;])

Sets the line color of the object &quot;name&quot; to the color &quot;color&quot;. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineWidth(width, [&quot;name&quot;])

Sets line width of the object &quot;name&quot; to &quot;width&quot;. &quot;width&quot; must be in the
range from 0.0 to 12.0 inclusive, and is measured in points. If &quot;name&quot; is not
given the currently selected item is used.

May raise ValueError if the line width is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineShade(shade, [&quot;name&quot;])

Sets the shading of the line color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full color intensity). If &quot;name&quot; is not given the currently selected item
is used.

May raise ValueError if the line shade is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineJoin(join, [&quot;name&quot;])

Sets the line join style of the object &quot;name&quot; to the style &quot;join&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for join - JOIN_&lt;type&gt;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineEnd(endtype, [&quot;name&quot;])

Sets the line cap style of the object &quot;name&quot; to the style &quot;cap&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for &quot;cap&quot; - CAP_&lt;type&gt;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineStyle(style, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the style &quot;style&quot;. If &quot;name&quot;
is not given the currently selected item is used. There are predefined
constants for &quot;style&quot; - LINE_&lt;style&gt;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFillShade(shade, [&quot;name&quot;])

Sets the shading of the fill color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full Color intensity). If &quot;name&quot; is not given the currently selected
Item is used.

May raise ValueError if the fill shade is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setCornerRadius(radius, [&quot;name&quot;])

Sets the corner radius of the object &quot;name&quot;. The radius is expressed
in points. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if the corner radius is negative.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setMultiLine(&quot;namedStyle&quot;, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the named style &quot;namedStyle&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the line style doesn&apos;t exist.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>progressReset()

Cleans up the Scribus progress bar previous settings. It is called before the
new progress bar use. See progressSet.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>progressTotal(max)

Sets the progress bar&apos;s maximum steps value to the specified number.
See progressSet.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>progressSet(nr)

Set the progress bar position to &quot;nr&quot;, a value relative to the previously set
progressTotal. The progress bar uses the concept of steps; you give it the
total number of steps and the number of steps completed so far and it will
display the percentage of steps that have been completed. You can specify the
total number of steps with progressTotal(). The current number of steps is set
with progressSet(). The progress bar can be rewound to the beginning with
progressReset(). [based on info taken from Trolltech&apos;s Qt docs]
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setCursor()

[UNSUPPORTED!] This might break things, so steer clear for now.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>docChanged(bool)

Enable/disable save icon in the Scribus icon bar and the Save menu item. It&apos;s
useful to call this procedure when you&apos;re changing the document, because Scribus
won&apos;t automatically notice when you change the document using a script.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setScaleImageToFrame(scaletoframe, proportional=None, name=&lt;selection&gt;)

Sets the scale to frame on the selected or specified image frame to `scaletoframe&apos;.
If `proportional&apos; is specified, set fixed aspect ratio scaling to `proportional&apos;.
Both `scaletoframe&apos; and `proportional&apos; are boolean.

May raise WrongFrameTypeError.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is printable or not, a value of True means
that the layer &quot;layer&quot; can be printed, a value of False means that printing
the layer &quot;layer&quot; is disabled.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getColorAsRGB(&quot;name&quot;) -&gt; tuple

Returns a tuple (R,G,B) containing the three color components of the
color &quot;name&quot; from the current document, converted to the RGB color
space. If no document is open, returns the value of the named color
from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>defineColor(&quot;name&quot;, c, m, y, k)

Defines a new color &quot;name&quot;. The color Value is defined via four components:
c = Cyan, m = Magenta, y = Yello and k = Black. Color components should be in
the range from 0 to 255.

May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getCornerRadius([&quot;name&quot;]) -&gt; integer

Returns the corner radius of the object &quot;name&quot;. The radius isexpressed in points. If &quot;name&quot; is not given the currentlyselected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPosition([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple with the position of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.The position is expressed in the actual measurement unit of the document
- see UNIT_&lt;type&gt; for reference.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPropertyCType(object, property, includesuper=True)

Returns the name of the C type of `property&apos; of `object&apos;. See getProperty()
for details of arguments.

If `includesuper&apos; is true, search inherited properties too.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPropertyNames(object, includesuper=True)

Return a list of property names supported by `object&apos;.
If `includesuper&apos; is true, return properties supported
by parent classes as well.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getProperty(object, property)

Return the value of the property `property&apos; of the passed `object&apos;.

The `object&apos; argument may be a string, in which case the named PageItem
is searched for. It may also be a PyCObject, which may point to any
C++ QObject instance.

The `property&apos; argument must be a string, and is the name of the property
to look up on `object&apos;.

The return value varies depending on the type of the property.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setProperty(object, property, value)

Set `property&apos; of `object&apos; to `value&apos;. If `value&apos; cannot be converted to a type
compatible with the type of `property&apos;, an exception is raised. An exception may
also be raised if the underlying setter fails.

See getProperty() for more information.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getChildren(object, ofclass=None, ofname=None, regexpmatch=False, recursive=True)

Return a list of children of `object&apos;, possibly restricted to children
of class named `ofclass&apos; or children named `ofname&apos;. If `recursive&apos; is true,
search recursively through children, grandchildren, etc.

See QObject::children() in the Qt docs for more information.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getChild(object, childname, ofclass=None, recursive=True)

Return the first child of `object&apos; named `childname&apos;, possibly restricting
the search to children of type name `ofclass&apos;. If `recursive&apos; is true,
search recursively through children, grandchildren, etc.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>rotateObjectAbs(rot [, &quot;name&quot;])

Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positve values
mean counter clockwise rotation. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>renderFont(&quot;name&quot;, &quot;filename&quot;, &quot;sample&quot;, size, format=&quot;PPM&quot;) -&gt; bool

Creates an image preview of font &quot;name&quot; with given text &quot;sample&quot; and size.
If &quot;filename&quot; is not &quot;&quot;, image is saved into &quot;filename&quot;. Otherwise
image data is returned as a string. The optional &quot;format&quot; argument
specifies the image format to generate, and supports any format allowed
by QPixmap.save(). Common formats are PPM, JPEG, PNG and XPM.

May raise NotFoundError if the specified font can&apos;t be found.
May raise ValueError if an empty sample or filename is passed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>selectText(start, count, [&quot;name&quot;])

Selects &quot;count&quot; characters of text in the text frame &quot;name&quot; starting from the
character &quot;start&quot;. Character counting starts at 0. If &quot;count&quot; is zero, any
text selection will be cleared.  If &quot;name&quot; is not given the currently
selected item is used.

May throw IndexError if the selection is outside the bounds of the text.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>fileDialog(&quot;caption&quot;, [&quot;filter&quot;, &quot;defaultname&quot;, haspreview, issave, isdir]) -&gt; string with filename

Shows a File Open dialog box with the caption &quot;caption&quot;. Files are filtered
with the filter string &quot;filter&quot;. A default filename or file path can also
supplied, leave this string empty when you don&apos;t want to use it.  A value of
True for haspreview enables a small preview widget in the FileSelect box.  When
the issave parameter is set to True the dialog acts like a &quot;Save As&quot; dialog
otherwise it acts like a &quot;File Open Dialog&quot;. When the isdir parameter is True
the dialog shows and returns only directories. The default for all of the
opional parameters is False.

The filter, if specified, takes the form &apos;comment (*.type *.type2 ...)&apos;.
For example &apos;Images (*.png *.xpm *.jpg)&apos;.

Refer to the Qt-Documentation for QFileDialog for details on filters.

Example: fileDialog(&apos;Open input&apos;, &apos;CSV files (*.csv)&apos;)
Example: fileDialog(&apos;Save report&apos;, defaultname=&apos;report.txt&apos;, issave=True)
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>newStyleDialog() -&gt; string

Shows &apos;Create new paragraph style&apos; dialog. Function returns real
style name or None when user cancels the dialog.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getPageMargins()

Returns the page margins as a (top, left, right, bottom) tuple in the current
units. See UNIT_&lt;type&gt; constants and getPageSize().
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame &quot;name&quot;.
Text must be UTF encoded (see setText() as reference) The first character has an
index of 0. Inserting at position -1 appends text to the frame. If &quot;name&quot; is
not given the currently selected Item is used.

May throw IndexError for an insertion out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>textOverflows([&quot;name&quot;, nolinks]) -&gt; integer

Returns the actual number of overflowing characters in text frame &quot;name&quot;.
If is nolinks set to non zero value it takes only one frame - it doesn&apos;t
use text frame linking. Without this parameter it search all linking chain.

May raise WrongFrameTypeError if the target frame is not an text frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setPDFBookmark(&quot;toggle&quot;, [&quot;name&quot;])

Sets wether (toggle = 1) the text frame &quot;name&quot; is a bookmark nor not.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>isPDFBookmark([&quot;name&quot;]) -&gt; bool

Returns true if the text frame &quot;name&quot; is a PDF bookmark.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>newDoc(size, margins, orientation, firstPageNumber,
                   unit, facingPages, firstSideLeft) -&gt; bool

WARNING: Obsolete procedure! Use newDocument instead.

Creates a new document and returns true if successful. The parameters have the
following meaning:

    size = A tuple (width, height) describing the size of the document. You can
    use predefined constants named PAPER_&lt;paper_type&gt; e.g. PAPER_A4 etc.

    margins = A tuple (left, right, top, bottom) describing the document
    margins

    orientation = the page orientation - constants PORTRAIT, LANDSCAPE

    firstPageNumer = is the number of the first page in the document used for
    pagenumbering. While you&apos;ll usually want 1, it&apos;s useful to have higher
    numbers if you&apos;re creating a document in several parts.

    unit: this value sets the measurement units used by the document. Use a
    predefined constant for this, one of: UNIT_INCHES, UNIT_MILLIMETERS,
    UNIT_PICAS, UNIT_POINTS.

    facingPages = FACINGPAGES, NOFACINGPAGES

    firstSideLeft = FIRSTPAGELEFT, FIRSTPAGERIGHT

The values for width, height and the margins are expressed in the given unit
for the document. PAPER_* constants are expressed in points. If your document
is not in points, make sure to account for this.

example: newDoc(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 1, UNIT_POINTS,
                FACINGPAGES, FIRSTPAGERIGHT)
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>closeMasterPage()

Closes the currently active master page, if any, and returns editing
to normal. Begin editing with editMasterPage().
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>masterPageNames()

Returns a list of the names of all master pages in the document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>editMasterPage(pageName)

Enables master page editing and opens the named master page
for editing. Finish editing with closeMasterPage().
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>createMasterPage(pageName)

Creates a new master page named pageName and opens it for
editing.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deleteMasterPage(pageName)

Delete the named master page.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>zoomDocument(double)

Zoom the document in main GUI window. Actions have whole number
values like 20.0, 100.0, etc. Zoom to Fit uses -100 as a marker.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setInfo(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -&gt; bool

Sets the document information. &quot;Author&quot;, &quot;Info&quot;, &quot;Description&quot; are
strings.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>duplicateObject([&quot;name&quot;]) -&gt; string

creates a Duplicate of the selected Object (or Selection Group).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getFillTransparency([&quot;name&quot;]) -&gt; float

Returns the fill transparency of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getLineTransparency([&quot;name&quot;]) -&gt; float

Returns the line transparency of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setFillTransparency(transparency, [&quot;name&quot;])

Sets the fill transparency of the object &quot;name&quot; to transparency
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setLineTransparency(transparency, [&quot;name&quot;])

Sets the line transparency of the object &quot;name&quot; to transparency
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>getTextDistances([&quot;name&quot;]) -&gt; tuple

Returns the text distances of the text frame &quot;name&quot; expressed in points. The
distances are returned as a tuple like (left, right, top, bottom). If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>setTextDistances(left, right, top, bottom, [&quot;name&quot;])

Sets the text distances of the text frame &quot;name&quot; to the values &quot;left&quot;
&quot;right&quot;, &quot;top&quot; and &quot;bottom&quot;. If &quot;name&quot; is not given the currently
selected item is used.

May throw ValueError if any of the distances are out of bounds (must be positive).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>deleteColor(&quot;name&quot;, &quot;replace&quot;)

Deletes the color &quot;name&quot;. Every occurence of that color is replaced by the
color &quot;replace&quot;. If not specified, &quot;replace&quot; defaults to the color
&quot;None&quot; - transparent.

deleteColor works on the default document colors if there is no document open.
In that case, &quot;replace&quot;, if specified, has no effect.

May raise NotFoundError if a named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>replaceColor(&quot;name&quot;, &quot;replace&quot;)

Every occurence of the color &quot;name&quot; is replaced by the color &quot;replace&quot;.

May raise NotFoundError if a named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>About</name>
    <message>
        <source>&amp;About</source>
        <translation>Inf&amp;o</translation>
    </message>
    <message>
        <source>Contributions from:</source>
        <translation>Bijdragen van:</translation>
    </message>
    <message>
        <source>A&amp;uthors</source>
        <translation>A&amp;uteurs</translation>
    </message>
    <message>
        <source>&amp;Translations</source>
        <translation>Ver&amp;talingen</translation>
    </message>
    <message>
        <source>&amp;Online</source>
        <translation>&amp;Online</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Sluiten</translation>
    </message>
    <message>
        <source>Development Team:</source>
        <translation>Ontwikkelteam:</translation>
    </message>
    <message>
        <source>Official Documentation:</source>
        <translation>Officiële documentatie:</translation>
    </message>
    <message>
        <source>Other Documentation:</source>
        <translation>Andere documentatie:</translation>
    </message>
    <message>
        <source>Homepage</source>
        <translation>Homepage</translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation>Online handleiding</translation>
    </message>
    <message>
        <source>Bugs and Feature Requests</source>
        <translation>Fouten en wensen</translation>
    </message>
    <message>
        <source>Mailing List</source>
        <translation type="obsolete">Mailinglijst</translation>
    </message>
    <message>
        <source>About Scribus %1</source>
        <translation>Info over Scribus %1</translation>
    </message>
    <message>
        <source>Official Translations and Translators:</source>
        <translation>Officiële vertalingen en vertalers:</translation>
    </message>
    <message>
        <source>Previous Translation Contributors:</source>
        <translation>Eerdere bijdragers van vertalingen:</translation>
    </message>
    <message>
        <source>Wiki</source>
        <translation>Wiki</translation>
    </message>
    <message>
        <source>%1 %2 %3</source>
        <translation>%1 %2 %3</translation>
    </message>
    <message>
        <source>%3-%2-%1 %4 %5</source>
        <translation>%3-%2-%1 %4 %5</translation>
    </message>
    <message>
        <source>Using Ghostscript version %1</source>
        <translation>Ghostscript versie %1</translation>
    </message>
    <message>
        <source>No Ghostscript version available</source>
        <translation>Geen Ghostscript beschikbaar</translation>
    </message>
    <message>
        <source>&lt;b&gt;Scribus Version %1&lt;/b&gt;&lt;p&gt;%2&lt;br/&gt;%3 %4&lt;br/&gt;%5&lt;/p&gt;</source>
        <translation>&lt;b&gt;Scribus Versie %1&lt;/b&gt;&lt;p&gt;%2&lt;br/&gt;%3 %4&lt;br/&gt;%5&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Build ID:</source>
        <translation>Build ID:</translation>
    </message>
    <message>
        <source>This panel shows the version, build date and compiled in library support in Scribus. The C-C-T-F equates to C=littlecms C=CUPS T=TIFF support F=Fontconfig support. Last Letter is the renderer C=cairo or A=libart Missing library support is indicated by a *. This also indicates the version of Ghostscript which Scribus has detected.</source>
        <translation>Dit paneel toont de versie, compileerdatum en de ingebouwde ondersteuning voor bibliotheken in Scribus. &quot;C-C-T-F&quot; staat voor C=CUPS, C=littlecms, T=TIFF, F=Fontconfig-ondersteuning. De laatse letter betekent de renderer C=cairo of A=libart. Ontbrekende bibliotheken worden aangeduid met *. Dit geeft ook aan welke versie van Ghostscript Scibus heeft gevonden.</translation>
    </message>
    <message>
        <source>Mac OS&amp;#174; X Aqua Port:</source>
        <translation>Mac OS&amp;#174; X Aqua Port:</translation>
    </message>
    <message>
        <source>Windows&amp;#174; Port:</source>
        <translation>Windows&amp;#174; Port:</translation>
    </message>
    <message>
        <source>Tango Project Icons:</source>
        <translation>Tango project iconen:</translation>
    </message>
    <message>
        <source>OS/2&amp;#174;/eComStation&amp;#8482; Port:</source>
        <translation>OS/2&amp;amp;#174;/eComStation&amp;amp;#8482; Port:</translation>
    </message>
    <message>
        <source>Developer Blog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mailing Lists</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AboutPlugins</name>
    <message>
        <source>Yes</source>
        <translation>Ja</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Nee</translation>
    </message>
    <message>
        <source>Filename:</source>
        <translation>Naam van het bestand:</translation>
    </message>
    <message>
        <source>Version:</source>
        <translation>Versie:</translation>
    </message>
    <message>
        <source>Enabled:</source>
        <translation>Aangezet:</translation>
    </message>
    <message>
        <source>Release Date:</source>
        <translation>Datum van publicatie:</translation>
    </message>
    <message>
        <source>Description:</source>
        <translation>Omschrijving:</translation>
    </message>
    <message>
        <source>Author(s):</source>
        <translation>Auteur(s):</translation>
    </message>
    <message>
        <source>Copyright:</source>
        <translation>Auteursrecht:</translation>
    </message>
    <message>
        <source>License:</source>
        <translation>Licentie:</translation>
    </message>
</context>
<context>
    <name>AboutPluginsBase</name>
    <message>
        <source>Scribus: About Plug-ins</source>
        <translation>Scribus: Over Plug-ins</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Sluiten</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+A</translation>
    </message>
</context>
<context>
    <name>ActionManager</name>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nieuw</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Openen...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>S&amp;luiten</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>Op&amp;slaan</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Opslaan &amp;als...</translation>
    </message>
    <message>
        <source>Re&amp;vert to Saved</source>
        <translation>Terug&amp;zetten naar opgeslagen</translation>
    </message>
    <message>
        <source>Collect for O&amp;utput...</source>
        <translation>Verzamelen voor &amp;uitvoer...</translation>
    </message>
    <message>
        <source>Get Text...</source>
        <translation>Tekst verkrijgen ...</translation>
    </message>
    <message>
        <source>Append &amp;Text...</source>
        <translation>Tekst &amp;toevoegen...</translation>
    </message>
    <message>
        <source>Get Image...</source>
        <translation>Afbeelding verkrijgen ...</translation>
    </message>
    <message>
        <source>Save &amp;Text...</source>
        <translation>&amp;Tekst opslaan...</translation>
    </message>
    <message>
        <source>Save Page as &amp;EPS...</source>
        <translation>Pagina opslaan als &amp;EPS...</translation>
    </message>
    <message>
        <source>Save as P&amp;DF...</source>
        <translation>Opslaan als P&amp;DF...</translation>
    </message>
    <message>
        <source>Document &amp;Setup...</source>
        <translation>Documentin&amp;stellingen...</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation>Afdru&amp;kken...</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>A&amp;fsluiten</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Ongedaan maken</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>O&amp;pnieuw doen</translation>
    </message>
    <message>
        <source>&amp;Item Action Mode</source>
        <translation>&amp;Item Actie Mode</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Kni&amp;ppen</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiëren</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>Pla&amp;kken</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>&amp;Alles selecteren</translation>
    </message>
    <message>
        <source>&amp;Deselect All</source>
        <translation>Alle&amp;s deselecteren</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation>&amp;Zoeken/vervangen...</translation>
    </message>
    <message>
        <source>Edit Image...</source>
        <translation>Afbeelding bewerken ...</translation>
    </message>
    <message>
        <source>C&amp;olors...</source>
        <translation>Kle&amp;uren...</translation>
    </message>
    <message>
        <source>&amp;Paragraph Styles...</source>
        <translation>&amp;Alineastijlen...</translation>
    </message>
    <message>
        <source>&amp;Line Styles...</source>
        <translation>&amp;Lijnstijlen...</translation>
    </message>
    <message>
        <source>&amp;Master Pages...</source>
        <translation>S&amp;jablonen ...</translation>
    </message>
    <message>
        <source>P&amp;references...</source>
        <translation>&amp;Voorkeuren...</translation>
    </message>
    <message>
        <source>%1 pt</source>
        <translation>%1 pt</translation>
    </message>
    <message>
        <source>&amp;Other...</source>
        <translation>&amp;Overig...</translation>
    </message>
    <message>
        <source>&amp;Left</source>
        <translation>&amp;Links</translation>
    </message>
    <message>
        <source>&amp;Center</source>
        <translation>&amp;Midden</translation>
    </message>
    <message>
        <source>&amp;Right</source>
        <translation>&amp;Rechts</translation>
    </message>
    <message>
        <source>&amp;Block</source>
        <translation>&amp;Blok</translation>
    </message>
    <message>
        <source>&amp;Forced</source>
        <translation>Ge&amp;forceerd</translation>
    </message>
    <message>
        <source>&amp;%1 %</source>
        <translation>&amp;%1 %</translation>
    </message>
    <message>
        <source>&amp;Normal</source>
        <translation>&amp;Normaal</translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation>&amp;Onderstreept</translation>
    </message>
    <message>
        <source>Underline &amp;Words</source>
        <translation>Onderstreep &amp;woorden</translation>
    </message>
    <message>
        <source>&amp;Strike Through</source>
        <translation>Door&amp;haalen</translation>
    </message>
    <message>
        <source>&amp;All Caps</source>
        <translation>K&amp;apitalen</translation>
    </message>
    <message>
        <source>Small &amp;Caps</source>
        <translation>Kleinkap&amp;itaal</translation>
    </message>
    <message>
        <source>Su&amp;perscript</source>
        <translation>S&amp;uperscript</translation>
    </message>
    <message>
        <source>Su&amp;bscript</source>
        <translation>Su&amp;bscript</translation>
    </message>
    <message>
        <source>S&amp;hadow</source>
        <translation>Schadu&amp;w</translation>
    </message>
    <message>
        <source>&amp;Image Effects</source>
        <translation>&amp;Afbeelding effecten</translation>
    </message>
    <message>
        <source>&amp;Tabulators...</source>
        <translation>&amp;Tabstops...</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;upliceren</translation>
    </message>
    <message>
        <source>&amp;Multiple Duplicate</source>
        <translation>&amp;Meervoudig dupliceren</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation>&amp;Groeperen</translation>
    </message>
    <message>
        <source>&amp;Ungroup</source>
        <translation>&amp;Groep losmaken</translation>
    </message>
    <message>
        <source>Is &amp;Locked</source>
        <translation>Is &amp;vergrendeld</translation>
    </message>
    <message>
        <source>Si&amp;ze is Locked</source>
        <translation>Groo&amp;tte is vergrendeld</translation>
    </message>
    <message>
        <source>Lower to &amp;Bottom</source>
        <translation>Naar achte&amp;rgrond</translation>
    </message>
    <message>
        <source>Raise to &amp;Top</source>
        <translation>Naar voorgron&amp;d</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation>&amp;Lager</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation>&amp;Hoger</translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation>In &amp;kladblok zetten</translation>
    </message>
    <message>
        <source>&amp;Attributes...</source>
        <translation>Eigensch&amp;appen...</translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation>Af&amp;beelding zichtbaar</translation>
    </message>
    <message>
        <source>&amp;Update Image</source>
        <translation>Afbeelding bij&amp;werken</translation>
    </message>
    <message>
        <source>Adjust Frame to Image</source>
        <translation>Kader aan afbeelding aanpassen</translation>
    </message>
    <message>
        <source>Extended Image Properties</source>
        <translation>Uitgebreide afbeeldingseigenschappen</translation>
    </message>
    <message>
        <source>&amp;Low Resolution</source>
        <translation>&amp;Lage resolutie</translation>
    </message>
    <message>
        <source>&amp;Normal Resolution</source>
        <translation>&amp;Normale resolutie</translation>
    </message>
    <message>
        <source>&amp;Full Resolution</source>
        <translation>&amp;Volledige resolutie</translation>
    </message>
    <message>
        <source>Is PDF &amp;Bookmark</source>
        <translation>Dit is een PDF-&amp;bladwijzer</translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation>Dit is een PDF-a&amp;nnotatie</translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation>&amp;Eigenschappen van annotatie</translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation>&amp;Veldeigenschappen</translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation>Vorm b&amp;ewerken...</translation>
    </message>
    <message>
        <source>&amp;Attach Text to Path</source>
        <translation>Tekst &amp;aan pad toevoegen</translation>
    </message>
    <message>
        <source>&amp;Detach Text from Path</source>
        <translation>Tekst van &amp;pad losmaken</translation>
    </message>
    <message>
        <source>&amp;Combine Polygons</source>
        <translation>Polygonen &amp;samenvoegen</translation>
    </message>
    <message>
        <source>Split &amp;Polygons</source>
        <translation>&amp;Polygonen opsplitsen</translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation>&amp;Beziercurve</translation>
    </message>
    <message>
        <source>&amp;Image Frame</source>
        <translation>&amp;Afbeeldingskader</translation>
    </message>
    <message>
        <source>&amp;Polygon</source>
        <translation>&amp;Polygoon</translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation>&amp;Tekstframe</translation>
    </message>
    <message>
        <source>&amp;Glyph...</source>
        <translation>&amp;Symboolteken...</translation>
    </message>
    <message>
        <source>Sample Text</source>
        <translation>Voorbeeldtekst</translation>
    </message>
    <message>
        <source>&amp;Insert...</source>
        <translation>&amp;Invoegen...</translation>
    </message>
    <message>
        <source>Im&amp;port...</source>
        <translation>Im&amp;porteren ...</translation>
    </message>
    <message>
        <source>&amp;Delete...</source>
        <translation>Verwij&amp;deren...</translation>
    </message>
    <message>
        <source>&amp;Copy...</source>
        <translation>&amp;Kopiëren ...</translation>
    </message>
    <message>
        <source>&amp;Move...</source>
        <translation>&amp;Verplaatsen...</translation>
    </message>
    <message>
        <source>&amp;Apply Master Page...</source>
        <translation>&amp;Sjabloon toepassen ...</translation>
    </message>
    <message>
        <source>Manage &amp;Guides...</source>
        <translation>&amp;Hulplijnen beheren...</translation>
    </message>
    <message>
        <source>Manage Page Properties...</source>
        <translation>Paginaeigenschappen bewerken...</translation>
    </message>
    <message>
        <source>&amp;Fit in window</source>
        <translation>&amp;Schaal naar venster</translation>
    </message>
    <message>
        <source>&amp;50%</source>
        <translation>&amp;50%</translation>
    </message>
    <message>
        <source>&amp;75%</source>
        <translation>&amp;75%</translation>
    </message>
    <message>
        <source>&amp;100%</source>
        <translation>&amp;100%</translation>
    </message>
    <message>
        <source>&amp;200%</source>
        <translation>&amp;200%</translation>
    </message>
    <message>
        <source>&amp;Thumbnails</source>
        <translation>Minia&amp;turen</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation>&amp;Marges tonen</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation>&amp;Frames tonen</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation>Afbeeld&amp;ingen tonen</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation>R&amp;aster tonen</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation>H&amp;ulplijnen tonen</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation>&amp;Basislijn-raster tonen</translation>
    </message>
    <message>
        <source>Show &amp;Text Chain</source>
        <translation>&amp;Tekstkoppeling tonen</translation>
    </message>
    <message>
        <source>Show Control Characters</source>
        <translation>Opmaaktekens tonen</translation>
    </message>
    <message>
        <source>Rulers relative to Page</source>
        <translation>Lineaal relatief naar pagina</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation>Ma&amp;gnetisch raster</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation>Magnetische hul&amp;plijnen</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>&amp;Eigenschappen</translation>
    </message>
    <message>
        <source>&amp;Scrapbook</source>
        <translation>&amp;Kladblok</translation>
    </message>
    <message>
        <source>&amp;Layers</source>
        <translation>&amp;Lagen</translation>
    </message>
    <message>
        <source>&amp;Arrange Pages</source>
        <translation>&amp;Paginatablet</translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation>&amp;Bladwijzers</translation>
    </message>
    <message>
        <source>&amp;Measurements</source>
        <translation>&amp;Afstanden</translation>
    </message>
    <message>
        <source>Action &amp;History</source>
        <translation>Actie&amp;geschiedenis</translation>
    </message>
    <message>
        <source>Preflight &amp;Verifier</source>
        <translation>Preflight &amp;controle</translation>
    </message>
    <message>
        <source>&amp;Align and Distribute</source>
        <translation>&amp;Verdelen en uitlijnen</translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation>&amp;Gereedschappen</translation>
    </message>
    <message>
        <source>P&amp;DF Tools</source>
        <translation>P&amp;DF-gereedschappen</translation>
    </message>
    <message>
        <source>Select Item</source>
        <translation>Item selecteren</translation>
    </message>
    <message>
        <source>T&amp;able</source>
        <translation>T&amp;abel</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>&amp;Vorm</translation>
    </message>
    <message>
        <source>&amp;Line</source>
        <translation>&amp;Lijn</translation>
    </message>
    <message>
        <source>&amp;Freehand Line</source>
        <translation>&amp;Vrijehand-curve</translation>
    </message>
    <message>
        <source>Rotate Item</source>
        <translation>Item roteren</translation>
    </message>
    <message>
        <source>Zoom in or out</source>
        <translation>In- of uitzoomen</translation>
    </message>
    <message>
        <source>Zoom in</source>
        <translation>Inzoomen</translation>
    </message>
    <message>
        <source>Zoom out</source>
        <translation>Uitzoomen</translation>
    </message>
    <message>
        <source>Edit Contents of Frame</source>
        <translation>Frameinhoud bewerken</translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation>Tekst bewerken...</translation>
    </message>
    <message>
        <source>Link Text Frames</source>
        <translation>Tekstframes koppelen</translation>
    </message>
    <message>
        <source>Unlink Text Frames</source>
        <translation>Tekstframes loskoppelen</translation>
    </message>
    <message>
        <source>&amp;Eye Dropper</source>
        <translation>&amp;Pipet</translation>
    </message>
    <message>
        <source>Copy Item Properties</source>
        <translation>Itemeigenschappen kopiëren</translation>
    </message>
    <message>
        <source>Edit the text with the Story Editor</source>
        <translation>Tekst met de story-editor bewerken</translation>
    </message>
    <message>
        <source>Insert Text Frame</source>
        <translation>Tekstframe invoegen</translation>
    </message>
    <message>
        <source>Insert Image Frame</source>
        <translation>Afbeelding invoegen</translation>
    </message>
    <message>
        <source>Insert Table</source>
        <translation>Tabel invoegen</translation>
    </message>
    <message>
        <source>Insert Shape</source>
        <translation>Vorm invoegen</translation>
    </message>
    <message>
        <source>Insert Polygon</source>
        <translation>Polygoon invoegen</translation>
    </message>
    <message>
        <source>Insert Line</source>
        <translation>Lijn invoegen</translation>
    </message>
    <message>
        <source>Insert Bezier Curve</source>
        <translation>Beziercurve invoegen</translation>
    </message>
    <message>
        <source>Insert Freehand Line</source>
        <translation>Vrijehand-curve invoegen</translation>
    </message>
    <message>
        <source>&amp;Manage Pictures</source>
        <translation type="obsolete">Afbeeldingen &amp;beheren</translation>
    </message>
    <message>
        <source>&amp;Hyphenate Text</source>
        <translation>Tekst a&amp;fbreken</translation>
    </message>
    <message>
        <source>Dehyphenate Text</source>
        <translation>Afbreking ongedaan maken</translation>
    </message>
    <message>
        <source>&amp;Generate Table Of Contents</source>
        <translation>&amp;Inhoudsopgave aanmaken</translation>
    </message>
    <message>
        <source>&amp;About Scribus</source>
        <translation>&amp;Info over Scribus</translation>
    </message>
    <message>
        <source>About &amp;Qt</source>
        <translation>Info over &amp;Qt</translation>
    </message>
    <message>
        <source>Toolti&amp;ps</source>
        <translation>Hul&amp;pballonnen</translation>
    </message>
    <message>
        <source>Scribus &amp;Manual...</source>
        <translation>Scribus &amp;handboek...</translation>
    </message>
    <message>
        <source>Smart &amp;Hyphen</source>
        <translation>Slimme &amp;woordafbraak</translation>
    </message>
    <message>
        <source>Non Breaking Dash</source>
        <translation>Niet afbrekende streep</translation>
    </message>
    <message>
        <source>Non Breaking &amp;Space</source>
        <translation>Niet afbrekende &amp;spatie</translation>
    </message>
    <message>
        <source>Page &amp;Number</source>
        <translation>Pagina&amp;nummer</translation>
    </message>
    <message>
        <source>New Line</source>
        <translation>Nieuwe regel</translation>
    </message>
    <message>
        <source>Frame Break</source>
        <translation>Frame-einde</translation>
    </message>
    <message>
        <source>Column Break</source>
        <translation>Kolomeinde</translation>
    </message>
    <message>
        <source>Copyright</source>
        <translation>Copyright</translation>
    </message>
    <message>
        <source>Registered Trademark</source>
        <translation>Geregistreerd handelsmerk</translation>
    </message>
    <message>
        <source>Trademark</source>
        <translation>Handelsmerk</translation>
    </message>
    <message>
        <source>Bullet</source>
        <translation>Opsomteken</translation>
    </message>
    <message>
        <source>Em Dash</source>
        <translation>Kastlijn (Em-streepje)</translation>
    </message>
    <message>
        <source>En Dash</source>
        <translation>Halve kastlijn (En-streepje)</translation>
    </message>
    <message>
        <source>Figure Dash</source>
        <translation>Nummer streep</translation>
    </message>
    <message>
        <source>Quotation Dash</source>
        <translation>Quote streep</translation>
    </message>
    <message>
        <source>Apostrophe</source>
        <translation>Apostrof</translation>
    </message>
    <message>
        <source>Straight Double</source>
        <translation>Dubbel recht</translation>
    </message>
    <message>
        <source>Single Left</source>
        <translation>Enkel links</translation>
    </message>
    <message>
        <source>Single Right</source>
        <translation>Enkel rechts</translation>
    </message>
    <message>
        <source>Double Left</source>
        <translation>Dubbel links</translation>
    </message>
    <message>
        <source>Double Right</source>
        <translation>Dubbel rechts</translation>
    </message>
    <message>
        <source>Single Reversed</source>
        <translation>Enkel omgedraaid</translation>
    </message>
    <message>
        <source>Double Reversed</source>
        <translation>Dubbel omgedraaid</translation>
    </message>
    <message>
        <source>Single Left Guillemet</source>
        <translation>Enkele linker Guillemet</translation>
    </message>
    <message>
        <source>Single Right Guillemet</source>
        <translation>Enkele rechter Guillemet</translation>
    </message>
    <message>
        <source>Double Left Guillemet</source>
        <translation>Dubbele linker Guillemets</translation>
    </message>
    <message>
        <source>Double Right Guillemet</source>
        <translation>Dubbele rechter Guillemets</translation>
    </message>
    <message>
        <source>Low Single Comma</source>
        <translation>Lage enkele komma</translation>
    </message>
    <message>
        <source>Low Double Comma</source>
        <translation>Lage dubbele komma</translation>
    </message>
    <message>
        <source>CJK Single Left</source>
        <translation>CJK enkel links</translation>
    </message>
    <message>
        <source>CJK Single Right</source>
        <translation>CJK enkel rechts</translation>
    </message>
    <message>
        <source>CJK Double Left</source>
        <translation>CJK dubbel links</translation>
    </message>
    <message>
        <source>CJK Double Right</source>
        <translation>CJK dubbel rechts</translation>
    </message>
    <message>
        <source>Toggle Palettes</source>
        <translation>Paletten wisselen</translation>
    </message>
    <message>
        <source>Toggle Guides</source>
        <translation>Hulplijnen wisselen</translation>
    </message>
    <message>
        <source>Print Previe&amp;w</source>
        <translation>Afdruk&amp;voorbeeld</translation>
    </message>
    <message>
        <source>&amp;JavaScripts...</source>
        <translation>&amp;JavaScripts...</translation>
    </message>
    <message>
        <source>Convert to Master Page...</source>
        <translation>Omzetten naar sjabloon...</translation>
    </message>
    <message>
        <source>&amp;Cascade</source>
        <translation>&amp;Trapsgewijs</translation>
    </message>
    <message>
        <source>&amp;Tile</source>
        <translation>&amp;Tegels</translation>
    </message>
    <message>
        <source>&amp;About Plug-ins</source>
        <translation>Over &amp;Plug-ins</translation>
    </message>
    <message>
        <source>More Info...</source>
        <translation>Meer informatie...</translation>
    </message>
    <message>
        <source>&amp;Printing Enabled</source>
        <translation>&amp;Printen toegestaan</translation>
    </message>
    <message>
        <source>&amp;Flip Horizontally</source>
        <translation>&amp;Draai horizontaal</translation>
    </message>
    <message>
        <source>&amp;Flip Vertically</source>
        <translation>&amp;Draai verticaal</translation>
    </message>
    <message>
        <source>Show Rulers</source>
        <translation>Toon linealen</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <comment>Document Outline Palette</comment>
        <translation>&amp;Outline</translation>
    </message>
    <message>
        <source>Solidus</source>
        <translation>Slash</translation>
    </message>
    <message>
        <source>Middle Dot</source>
        <translation>Interpunt</translation>
    </message>
    <message>
        <source>En Space</source>
        <translation>En-spatie</translation>
    </message>
    <message>
        <source>Em Space</source>
        <translation>Em-spatie</translation>
    </message>
    <message>
        <source>Thin Space</source>
        <translation>Halfspatie</translation>
    </message>
    <message>
        <source>Thick Space</source>
        <translation>Brede spatie</translation>
    </message>
    <message>
        <source>Mid Space</source>
        <translation>Midden spatie</translation>
    </message>
    <message>
        <source>Hair Space</source>
        <translation>Haarspatie</translation>
    </message>
    <message>
        <source>Insert Smart Hyphen</source>
        <translation>Pas slimme woordafbreking toe</translation>
    </message>
    <message>
        <source>Insert Non Breaking Dash</source>
        <translation>Niet afbrekende streep invoegen</translation>
    </message>
    <message>
        <source>Insert Non Breaking Space</source>
        <translation>Niet afbrekende spatie invoegen</translation>
    </message>
    <message>
        <source>Insert Page Number</source>
        <translation>Paginanummer invoegen</translation>
    </message>
    <message>
        <source>ff</source>
        <translation>ff</translation>
    </message>
    <message>
        <source>fi</source>
        <translation>fi</translation>
    </message>
    <message>
        <source>fl</source>
        <translation>fl</translation>
    </message>
    <message>
        <source>ffi</source>
        <translation>ffi</translation>
    </message>
    <message>
        <source>ffl</source>
        <translation>ffl</translation>
    </message>
    <message>
        <source>ft</source>
        <translation>ft</translation>
    </message>
    <message>
        <source>st</source>
        <translation>st</translation>
    </message>
    <message>
        <source>S&amp;tyles...</source>
        <translation>S&amp;tijlen...</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <comment>type effect</comment>
        <translation>&amp;Outline</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <comment>Convert to oulines</comment>
        <translation>C&amp;ontouren</translation>
    </message>
    <message>
        <source>Paste (&amp;Absolute)</source>
        <translation>Plakken (&amp;Absoluut)</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>W&amp;issen</translation>
    </message>
    <message>
        <source>Show Text Frame Columns</source>
        <translation>Toon tekstframe kolomlijnen</translation>
    </message>
    <message>
        <source>&amp;400%</source>
        <translation>&amp;400%</translation>
    </message>
    <message>
        <source>&amp;Manage Images</source>
        <translation>Afbeeldingen &amp;beheren</translation>
    </message>
</context>
<context>
    <name>AlignDistributePalette</name>
    <message>
        <source>Align and Distribute</source>
        <translation>Verdelen/uitlijnen</translation>
    </message>
    <message>
        <source>Align</source>
        <translation>Uitlijnen</translation>
    </message>
    <message>
        <source>&amp;Relative to:</source>
        <translation>&amp;Relatief ten opzichte van:</translation>
    </message>
    <message>
        <source>First Selected</source>
        <translation>Eerste geselecteerde</translation>
    </message>
    <message>
        <source>Last Selected</source>
        <translation>Laatste geselecteerde</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Pagina</translation>
    </message>
    <message>
        <source>Margins</source>
        <translation>Marges</translation>
    </message>
    <message>
        <source>Guide</source>
        <translation>Hulplijn</translation>
    </message>
    <message>
        <source>Selection</source>
        <translation>Selectie</translation>
    </message>
    <message>
        <source>Align right sides of objects to left side of anchor</source>
        <translation>Uitlijnen rechter zijden van objecten naar linker zijde van referentie</translation>
    </message>
    <message>
        <source>Align left sides of objects to right side of anchor</source>
        <translation>Uitlijnen linker zijden van objecten naar rechter zijde van referentie</translation>
    </message>
    <message>
        <source>Align bottoms</source>
        <translation>Onderkanten uitlijnen</translation>
    </message>
    <message>
        <source>Align right sides</source>
        <translation>Rechterkanten uitlijnen</translation>
    </message>
    <message>
        <source>Align tops of objects to bottom of anchor</source>
        <translation>Uitlijnen bovenkanten van objecten naar onderkant referentie</translation>
    </message>
    <message>
        <source>Center on vertical axis</source>
        <translation>Centreer op verticale as</translation>
    </message>
    <message>
        <source>Align left sides</source>
        <translation>Linkerkanten uitlijnen</translation>
    </message>
    <message>
        <source>Center on horizontal axis</source>
        <translation>Centreer op horizontale as</translation>
    </message>
    <message>
        <source>Align bottoms of objects to top of anchor</source>
        <translation>Uitlijnen onderkanten van objecten naar bovevkant referentie</translation>
    </message>
    <message>
        <source>Align tops</source>
        <translation>Bovenkanten uitlijnen</translation>
    </message>
    <message>
        <source>&amp;Selected Guide:</source>
        <translation>&amp;Geselecteerde hulplijn:</translation>
    </message>
    <message>
        <source>Distribute</source>
        <translation>Verdelen</translation>
    </message>
    <message>
        <source>Make horizontal gaps between objects equal</source>
        <translation>Maak horizontale ruimtes tussen objecten gelijk</translation>
    </message>
    <message>
        <source>Make horizontal gaps between objects equal to the value specified</source>
        <translation>Maak horizontale ruimtes tussen objecten gelijk met opgegeven afstand</translation>
    </message>
    <message>
        <source>Distribute right sides equidistantly</source>
        <translation>Verdeel rechterkanten met gelijke afstand</translation>
    </message>
    <message>
        <source>Distribute bottoms equidistantly</source>
        <translation>Verdeel onderkanten met gelijke afstand</translation>
    </message>
    <message>
        <source>Distribute centers equidistantly horizontally</source>
        <translation>Verdeel middens met gelijke afstanden horizontaal</translation>
    </message>
    <message>
        <source>Make vertical gaps between objects equal</source>
        <translation>Maak verticale ruimtes tussen objecten gelijk</translation>
    </message>
    <message>
        <source>Make vertical gaps between objects equal to the value specified</source>
        <translation>Maak verticale ruimtes tussen objecten gelijk met opgegeven afstand</translation>
    </message>
    <message>
        <source>Distribute left sides equidistantly</source>
        <translation>Verdeel linkerkanten met gelijke afstand</translation>
    </message>
    <message>
        <source>Distribute centers equidistantly vertically</source>
        <translation>Verdeel middens met gelijke afstanden verticaal</translation>
    </message>
    <message>
        <source>Distribute tops equidistantly</source>
        <translation>Verdeel bovenkanten met gelijke afstand</translation>
    </message>
    <message>
        <source>&amp;Distance:</source>
        <translation>&amp;Afstand:</translation>
    </message>
    <message>
        <source>Distribute the items with the distance specified</source>
        <translation>Verdeel de items met de opgegeven afstand</translation>
    </message>
    <message>
        <source>None Selected</source>
        <translation>Niets geselecteerd</translation>
    </message>
    <message>
        <source>Some objects are locked.</source>
        <translation>Sommige objecten zijn vergrendeld.</translation>
    </message>
    <message>
        <source>&amp;Unlock All</source>
        <translation>&amp;Alle losmaken</translation>
    </message>
    <message>
        <source>Y: %1%2</source>
        <translation>Y: %1%2</translation>
    </message>
    <message>
        <source>X: %1%2</source>
        <translation>X: %1%2</translation>
    </message>
</context>
<context>
    <name>AlignSelect</name>
    <message>
        <source>Align Text Left</source>
        <translation>Tekst links uitlijnen</translation>
    </message>
    <message>
        <source>Align Text Right</source>
        <translation>Tekst rechts uitlijnen</translation>
    </message>
    <message>
        <source>Align Text Center</source>
        <translation>Tekst centreren</translation>
    </message>
    <message>
        <source>Align Text Justified</source>
        <translation>Tekst uitvullen</translation>
    </message>
    <message>
        <source>Align Text Forced Justified</source>
        <translation>Tekst geforceerd uitvullen</translation>
    </message>
</context>
<context>
    <name>Annot</name>
    <message>
        <source>Field Properties</source>
        <translation>Veldeigenschappen</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Type:</translation>
    </message>
    <message>
        <source>Button</source>
        <translation>Knop</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation>Tekstveld</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation>Keuzevakje</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation>Combobox</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation>Lijst</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation>Eigenschappen</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Naam:</translation>
    </message>
    <message>
        <source>Tool-Tip:</source>
        <translation>Hulpballon:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Tekst</translation>
    </message>
    <message>
        <source>Font for use with PDF 1.3:</source>
        <translation>Fonts voor gebruik met PDF 1.3:</translation>
    </message>
    <message>
        <source>Border</source>
        <translation>Rand</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Kleur:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation>Breedte:</translation>
    </message>
    <message>
        <source>Thin</source>
        <translation>Smal</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normaal</translation>
    </message>
    <message>
        <source>Wide</source>
        <translation>Breed</translation>
    </message>
    <message>
        <source>Style:</source>
        <translation>Stijl:</translation>
    </message>
    <message>
        <source>Solid</source>
        <translation>Effen</translation>
    </message>
    <message>
        <source>Dashed</source>
        <translation>Gestreept</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation>Onderstreept</translation>
    </message>
    <message>
        <source>Beveled</source>
        <translation>Afgeschuind</translation>
    </message>
    <message>
        <source>Inset</source>
        <translation>Inliggend</translation>
    </message>
    <message>
        <source>Other</source>
        <translation>Overig</translation>
    </message>
    <message>
        <source>Read Only</source>
        <translation>Alleen-lezen</translation>
    </message>
    <message>
        <source>Required</source>
        <translation>Vereist</translation>
    </message>
    <message>
        <source>Don&apos;t Export Value</source>
        <translation>Waarde niet exporteren</translation>
    </message>
    <message>
        <source>Visibility:</source>
        <translation>Zichtbaarheid:</translation>
    </message>
    <message>
        <source>Visible</source>
        <translation>Zichtbaar</translation>
    </message>
    <message>
        <source>Hidden</source>
        <translation>Onzichtbaar</translation>
    </message>
    <message>
        <source>No Print</source>
        <translation>Niet afdrukken</translation>
    </message>
    <message>
        <source>No View</source>
        <translation>Niet weergeven</translation>
    </message>
    <message>
        <source>Appearance</source>
        <translation>Uiterlijk</translation>
    </message>
    <message>
        <source>Text for Button Down</source>
        <translation>Tekst voor ingedrukte knop</translation>
    </message>
    <message>
        <source>Text for Roll Over</source>
        <translation>Tekst voor muis-over</translation>
    </message>
    <message>
        <source>Icons</source>
        <translation>Pictogrammen</translation>
    </message>
    <message>
        <source>Use Icons</source>
        <translation>Pictogrammen gebruiken</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Verwijderen</translation>
    </message>
    <message>
        <source>Pressed</source>
        <translation>Ingedrukt</translation>
    </message>
    <message>
        <source>Roll Over</source>
        <translation>Muis-over</translation>
    </message>
    <message>
        <source>Icon Placement...</source>
        <translation>Plaatsing van pictogram...</translation>
    </message>
    <message>
        <source>Highlight</source>
        <translation>Accentueren</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation>Inverteren</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation>Outline</translation>
    </message>
    <message>
        <source>Push</source>
        <translation>Druk</translation>
    </message>
    <message>
        <source>Multi-Line</source>
        <translation>Meerregelig</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>Wachtwoord</translation>
    </message>
    <message>
        <source>Limit of</source>
        <translation>Limiet van</translation>
    </message>
    <message>
        <source>Characters</source>
        <translation>tekens</translation>
    </message>
    <message>
        <source>Do Not Scroll</source>
        <translation>Niet schuiven</translation>
    </message>
    <message>
        <source>Do Not Spell Check</source>
        <translation>Geen spellingcontrole</translation>
    </message>
    <message>
        <source>Check Style:</source>
        <translation>Stijl controleren:</translation>
    </message>
    <message>
        <source>Check</source>
        <translation>Controleren</translation>
    </message>
    <message>
        <source>Cross</source>
        <translation>Kruis</translation>
    </message>
    <message>
        <source>Diamond</source>
        <translation>Diamant</translation>
    </message>
    <message>
        <source>Circle</source>
        <translation>Cirkel</translation>
    </message>
    <message>
        <source>Star</source>
        <translation>Ster</translation>
    </message>
    <message>
        <source>Square</source>
        <translation>Vierkant</translation>
    </message>
    <message>
        <source>Default is Checked</source>
        <translation>Standaard is geselecteerd</translation>
    </message>
    <message>
        <source>Editable</source>
        <translation>Bewerkbaar</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opties</translation>
    </message>
    <message>
        <source>Go To</source>
        <translation>Ga naar</translation>
    </message>
    <message>
        <source>Submit Form</source>
        <translation>Formulier verzenden</translation>
    </message>
    <message>
        <source>Reset Form</source>
        <translation>Formulier wissen</translation>
    </message>
    <message>
        <source>Import Data</source>
        <translation>Gegevens importeren</translation>
    </message>
    <message>
        <source>Event:</source>
        <translation>Gebeurtenis:</translation>
    </message>
    <message>
        <source>Mouse Up</source>
        <translation>Muisknop omhoog</translation>
    </message>
    <message>
        <source>Mouse Down</source>
        <translation>Muisknop omlaag</translation>
    </message>
    <message>
        <source>Mouse Enter</source>
        <translation>Muis komt over</translation>
    </message>
    <message>
        <source>Mouse Exit</source>
        <translation>Muis gaat weg</translation>
    </message>
    <message>
        <source>On Focus</source>
        <translation>Bij focus</translation>
    </message>
    <message>
        <source>On Blur</source>
        <translation>Bij verlaten van focus</translation>
    </message>
    <message>
        <source>Script:</source>
        <translation>Script:</translation>
    </message>
    <message>
        <source>Edit...</source>
        <translation>Bewerken...</translation>
    </message>
    <message>
        <source>Submit to URL:</source>
        <translation>Verzenden naar URL:</translation>
    </message>
    <message>
        <source>Submit Data as HTML</source>
        <translation type="obsolete">Gegevens als HTML versturen</translation>
    </message>
    <message>
        <source>Import Data from:</source>
        <translation>Gegevens importeren van:</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>Doel</translation>
    </message>
    <message>
        <source>To File:</source>
        <translation>Naar bestand:</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation>Wijzigen...</translation>
    </message>
    <message>
        <source>Page:</source>
        <translation>Pagina:</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation>X-positie:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation>Y-positie:</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Actie</translation>
    </message>
    <message>
        <source>Field is formatted as:</source>
        <translation>Veld is geformatteerd als:</translation>
    </message>
    <message>
        <source>Plain</source>
        <translation>Eenvoudig</translation>
    </message>
    <message>
        <source>Number</source>
        <translation>Nummer</translation>
    </message>
    <message>
        <source>Percentage</source>
        <translation>Percentage</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Datum</translation>
    </message>
    <message>
        <source>Time</source>
        <translation>Tijd</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Aangepast</translation>
    </message>
    <message>
        <source>Number Format</source>
        <translation>Nummerformaat</translation>
    </message>
    <message>
        <source>Decimals:</source>
        <translation>Decimalen:</translation>
    </message>
    <message>
        <source>Use Currency Symbol</source>
        <translation>Geldwaarde-symbool gebruiken</translation>
    </message>
    <message>
        <source>Prepend Currency Symbol</source>
        <translation>Waarde-symbool vooraan plaatsen</translation>
    </message>
    <message>
        <source>Formatting</source>
        <translation>Formattering</translation>
    </message>
    <message>
        <source>Percent Format</source>
        <translation>Percentageformaat</translation>
    </message>
    <message>
        <source>Date Format</source>
        <translation>Datumformaat</translation>
    </message>
    <message>
        <source>Time Format</source>
        <translation>Tijdformaat</translation>
    </message>
    <message>
        <source>Custom Scripts</source>
        <translation>Eigen scripts</translation>
    </message>
    <message>
        <source>Format:</source>
        <translation>Formaat:</translation>
    </message>
    <message>
        <source>Keystroke:</source>
        <translation>Toetsaanslag:</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>Formaat</translation>
    </message>
    <message>
        <source>Value is not validated</source>
        <translation>Waarde is niet gevalideerd</translation>
    </message>
    <message>
        <source>Value must be greater than or equal to:</source>
        <translation>Waarde moet groter of gelijk zijn aan:</translation>
    </message>
    <message>
        <source>and less or equal to:</source>
        <translation>en kleiner of gelijk aan:</translation>
    </message>
    <message>
        <source>Custom validate script:</source>
        <translation>Eigen validatiescript:</translation>
    </message>
    <message>
        <source>Validate</source>
        <translation>Valideren</translation>
    </message>
    <message>
        <source>Value is not calculated</source>
        <translation>Waarde is niet berekend</translation>
    </message>
    <message>
        <source>Value is the</source>
        <translation>Waarde is</translation>
    </message>
    <message>
        <source>sum</source>
        <translation>de som</translation>
    </message>
    <message>
        <source>product</source>
        <translation>het produkt</translation>
    </message>
    <message>
        <source>average</source>
        <translation>het gemiddelde</translation>
    </message>
    <message>
        <source>minimum</source>
        <translation>het minimum</translation>
    </message>
    <message>
        <source>maximum</source>
        <translation>het maximum</translation>
    </message>
    <message>
        <source>of the following fields:</source>
        <translation>van de volgende velden:</translation>
    </message>
    <message>
        <source>Pick...</source>
        <translation>Selecteren...</translation>
    </message>
    <message>
        <source>Custom calculation script:</source>
        <translation>Eigen calculatiescript:</translation>
    </message>
    <message>
        <source>Calculate</source>
        <translation>Berekenen</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message>
        <source>Flag is ignored for PDF 1.3</source>
        <translation>Deze vlag wordt genegeerd in PDF 1.3</translation>
    </message>
    <message>
        <source>Enter a comma separated list of fields here</source>
        <translation>Voer hier een door komma&apos;s gescheiden lijst van velden in</translation>
    </message>
    <message>
        <source>You need at least the Icon for Normal to use Icons for Buttons</source>
        <translation>U hebt tenminste een pictogram &apos;Normaal&apos; nodig om pictogrammen voor knoppen te kunnen gebruiken</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>Example:</source>
        <translation>Voorbeeld:</translation>
    </message>
    <message>
        <source>Selection Change</source>
        <translation>Selectie wijzigen</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>PDF-bestanden (*.pdf);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>JavaScript</source>
        <translation>JavaScript</translation>
    </message>
    <message>
        <source>Images (*.tif *.png *.jpg *.xpm);;PostScript (*.eps);;All Files (*)</source>
        <translation>Afbeeldingen (*.tif *.png *.jpg *.xpm);;PostScript (*.eps);;Alle formaten (*)</translation>
    </message>
    <message>
        <source>None</source>
        <comment>highlight</comment>
        <translation>Geen</translation>
    </message>
    <message>
        <source>None</source>
        <comment>action</comment>
        <translation>Geen</translation>
    </message>
    <message>
        <source>Submit format:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>HTML</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>XFDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PDF</source>
        <translation type="unfinished">PDF</translation>
    </message>
</context>
<context>
    <name>Annota</name>
    <message>
        <source>Annotation Properties</source>
        <translation>Annotatie-eigenschappen</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Tekst</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Koppeling</translation>
    </message>
    <message>
        <source>External Link</source>
        <translation>Externe koppeling</translation>
    </message>
    <message>
        <source>External Web-Link</source>
        <translation>Externe webkoppeling</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>Doel</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>PDF-Documents (*.pdf);;All Files (*)</source>
        <translation>PDF-bestanden (*.pdf);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>&amp;Type:</source>
        <translation>&amp;Type:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Wijzigen...</translation>
    </message>
    <message>
        <source>&amp;Page:</source>
        <translation>&amp;Pagina:</translation>
    </message>
    <message>
        <source>&amp;X-Pos</source>
        <translation>&amp;X-pos</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y-pos:</translation>
    </message>
</context>
<context>
    <name>ApplyMasterPageDialog</name>
    <message>
        <source>Normal</source>
        <translation>Normaal</translation>
    </message>
    <message>
        <source>Apply Master Page</source>
        <translation>Sjabloon toepassen</translation>
    </message>
    <message>
        <source>&amp;Master Page:</source>
        <translation>&amp;Sjabloon:</translation>
    </message>
    <message>
        <source>Apply To</source>
        <translation>Toepassen op</translation>
    </message>
    <message>
        <source>Current &amp;page</source>
        <translation>Huidige &amp;pagina</translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation>Alt+P</translation>
    </message>
    <message>
        <source>&amp;Even pages</source>
        <translation>&amp;Even pagina&apos;s</translation>
    </message>
    <message>
        <source>Alt+E</source>
        <translation>Alt+E</translation>
    </message>
    <message>
        <source>O&amp;dd pages</source>
        <translation>O&amp;neven pagina&apos;s</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>&amp;All pages</source>
        <translation>A&amp;lle pagina&apos;s</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Within range</source>
        <translation>&amp;Toepassen vanaf</translation>
    </message>
    <message>
        <source>Alt+W</source>
        <translation>Alt+W</translation>
    </message>
    <message>
        <source>to</source>
        <translation>tot</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Atl+O</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <source>Apply the selected master page to even, odd or all pages within the following range</source>
        <translation>Geselecteerde sjabloon op even, oneven of alle pagina&apos;s binnen het bereik toepassen</translation>
    </message>
</context>
<context>
    <name>ArrowChooser</name>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
</context>
<context>
    <name>Barcode</name>
    <message>
        <source>&amp;Barcode Generator...</source>
        <translation>&amp;Streepjescodegenerator...</translation>
    </message>
    <message>
        <source>Scribus frontend for Pure Postscript Barcode Writer</source>
        <translation>Scribus frontend om zuivere Postscript streepjescode te schrijven</translation>
    </message>
</context>
<context>
    <name>BarcodeGenerator</name>
    <message>
        <source>Error opening file: %1</source>
        <translation>Fout bij het openen van bestand: %1</translation>
    </message>
    <message>
        <source>12 or 13 digits</source>
        <translation>12 of 13 cijfers</translation>
    </message>
    <message>
        <source>8 digits</source>
        <translation>8 cijfers</translation>
    </message>
    <message>
        <source>11 or 12 digits</source>
        <translation>11 of 12 cijfers</translation>
    </message>
    <message>
        <source>7 or 8 digits</source>
        <translation>7 of 8 cijfers</translation>
    </message>
    <message>
        <source>5 digits</source>
        <translation>5 cijfers</translation>
    </message>
    <message>
        <source>2 digits</source>
        <translation>2 cijfers</translation>
    </message>
    <message>
        <source>9 or 10 digits separated appropriately with dashes</source>
        <translation type="obsolete">9 of 10 cijfers, correct gescheiden door streepjes</translation>
    </message>
    <message>
        <source>Variable number of characters, digits and any of the symbols -. *$/+%.</source>
        <translation>Variabele aantal tekens, cijfers en de symbolen -. *$/+%.</translation>
    </message>
    <message>
        <source>Variable number of ASCII characters and special function symbols, starting with the appropriate start character for the initial character set. UCC/EAN-128s must have a mandatory FNC 1 symbol immediately following the start character.</source>
        <translation>Variabele aantal van ADCII tekens en symbolen voor speciale functies, beginnend met het correcte teken voor het tekenstel. UCC/EAN-128-codes hebben in ieder geval een FNC1-symbool na het startteken nodig.</translation>
    </message>
    <message>
        <source>Variable number of digits and any of the symbols -$:/.+ABCD.</source>
        <translation>Varaibele aantal cijfers en de symbolen -$:/.+ABCD.</translation>
    </message>
    <message>
        <source>Variable number of digits. An ITF-14 is 14 characters and does not have a check digit</source>
        <translation>Variabele aantal cijfers. Een ITF-14-code bestaat uit 14 tekens en heeft geen controlecijfer</translation>
    </message>
    <message>
        <source>Variable number of digits</source>
        <translation>Variabele aantal cijfers</translation>
    </message>
    <message>
        <source>Variable number of digits and capital letters</source>
        <translation>Variabele aantal cijfers en hoofdletters</translation>
    </message>
    <message>
        <source>Variable number of hexadecimal characters</source>
        <translation>Variabele aantal hexadecimale tekens</translation>
    </message>
    <message>
        <source>Barcode incomplete</source>
        <translation>Streepjescode onvolledig</translation>
    </message>
    <message>
        <source>12 or 13 digits with dashes. The legacy ISBN-10 format accepts 9 or 10 digits with dashes, but this standard was depreciated for public use after 1st January 2007. (Note: To convert an old ISBN-10 to a new ISBN-13, prefix 978- to the first 9 digits, e.g. 1-56592-479-7 -&gt; 978-1-56592-479. The final check-digit will be calculated automatically.)</source>
        <translation>12 of 13 cijfers met streepjes. Het oorspronkelijke ISBN-10 formaat accepteert 9 of 10 cijfers met streepjes, maar deze standaard is beïndigd voor publiek gebruik na 1 januari 2007. (Noot: om een oud ISBN-10 naar een nieuw ISBN-13 nummer om zetten. Zet 978 voor de eerste 9 cijfers, dus 1-56592-47907 -&gt; 978-1-56592-47907. Het uiteindelijke controle-cijfer wordt automatisch berekend.)</translation>
    </message>
</context>
<context>
    <name>BarcodeGeneratorBase</name>
    <message>
        <source>Barcode Creator</source>
        <translation>Streepjescodegenerator</translation>
    </message>
    <message>
        <source>Barcode</source>
        <translation>Streepjescode</translation>
    </message>
    <message>
        <source>&amp;Type:</source>
        <translation>&amp;Type:</translation>
    </message>
    <message>
        <source>Select one of the available barcode type here</source>
        <translation>Kies een van de beschikbare streepjescodes</translation>
    </message>
    <message>
        <source>The numeric representation of the code itself. See the help message below</source>
        <translation>De numerieke uitdrukking van de code. Bekijk de uitleg hieronder</translation>
    </message>
    <message>
        <source>Reset the barcode samples</source>
        <translation>Reset de streepjescodevoorbeelden</translation>
    </message>
    <message>
        <source>&amp;Include text in barcode</source>
        <translation>Tekst in streepjescode &amp;invoegen</translation>
    </message>
    <message>
        <source>Alt+I</source>
        <translation>Alt+I</translation>
    </message>
    <message>
        <source>If checked, there will be numbers in the barcode too</source>
        <translation>Als geselecteerd, zullen er ook cijfers in de streepjescode staan</translation>
    </message>
    <message>
        <source>&amp;Guard whitespace</source>
        <translation>&amp;Bewaak witruimte</translation>
    </message>
    <message>
        <source>Alt+G</source>
        <translation>Alt+G</translation>
    </message>
    <message>
        <source>Draw arrows to be sure of space next the code</source>
        <translation>Tekent een pijl om een afstand tussen tekst en streepjescode te waarborgen</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Kleuren</translation>
    </message>
    <message>
        <source>&amp;Background</source>
        <translation>&amp;Achtergrond</translation>
    </message>
    <message>
        <source>Alt+B</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>Background color - under the code lines</source>
        <translation>Kleur van de achtergrond - onder de codestreepjes</translation>
    </message>
    <message>
        <source>&amp;Lines</source>
        <translation>&amp;Lijnen</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <source>Color of the lines in barcode</source>
        <translation>Kleur van de streepjes in code</translation>
    </message>
    <message>
        <source>&amp;Text</source>
        <translation>&amp;Tekst</translation>
    </message>
    <message>
        <source>Alt+T</source>
        <translation>Alt+T</translation>
    </message>
    <message>
        <source>Color of the text and numbers</source>
        <translation>Kleur van tekst en cijfers</translation>
    </message>
    <message>
        <source>Hints and help is shown here</source>
        <translation>Tips en hulp worden hier getoond</translation>
    </message>
    <message>
        <source>Preview of the result. 72dpi sample.</source>
        <translation>Voorbeeld van het resultaat in 72 dpi.</translation>
    </message>
    <message>
        <source>Co&amp;de:</source>
        <translation>Co&amp;de:</translation>
    </message>
    <message>
        <source>I&amp;nclude checksum</source>
        <translation>Controlenummer &amp;bijvoegen</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation>Alt+B</translation>
    </message>
    <message>
        <source>Generate and include a checksum in barcode</source>
        <translation>Controlenummer in streepjescode aanmaken en bijvoegen</translation>
    </message>
    <message>
        <source>Incl&amp;ude checksum digit</source>
        <translation>Controlenummer&amp;cijfer invoegen</translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <source>Include the checksum digit in the barcode text</source>
        <translation>Controlenummer in streepjescodetekst invoegen</translation>
    </message>
</context>
<context>
    <name>Biblio</name>
    <message>
        <source>Scrapbook</source>
        <translation>Kladblok</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nieuw</translation>
    </message>
    <message>
        <source>&amp;Load...</source>
        <translation>&amp;Openen...</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Opslaan &amp;als...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Sluiten</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Bestand</translation>
    </message>
    <message>
        <source>&amp;Preview</source>
        <translation>&amp;Voorbeeld</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Hernoemen</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Verwijderen</translation>
    </message>
    <message>
        <source>Object</source>
        <translation>Object</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Naam:</translation>
    </message>
    <message>
        <source>New Entry</source>
        <translation>Nieuwe ingang</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; is not unique.
Please choose another.</source>
        <translation>De naam &quot;%1&quot; is niet uniek.
Kies een andere naam.</translation>
    </message>
    <message>
        <source>Choose a Scrapbook Directory</source>
        <translation>Kies een kladblokmap</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Kies een map</translation>
    </message>
    <message>
        <source>Scrapbook (*.scs)</source>
        <translation>Kladblok (*.scs)</translation>
    </message>
    <message>
        <source>Choose a scrapbook file to import</source>
        <translation>Kies een kladblokbestand om te importeren</translation>
    </message>
    <message>
        <source>&amp;Import Scrapbook File...</source>
        <translation>&amp;Importeer kladblokbestand...</translation>
    </message>
    <message>
        <source>Main</source>
        <translation>Hoofd</translation>
    </message>
</context>
<context>
    <name>BookMView</name>
    <message>
        <source>Bookmarks</source>
        <translation>Bladwijzers</translation>
    </message>
    <message>
        <source>Move Bookmark</source>
        <translation>Bladwijzer verplaatsen</translation>
    </message>
    <message>
        <source>Insert Bookmark</source>
        <translation>Bladwijzer invoegen</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
</context>
<context>
    <name>BookPalette</name>
    <message>
        <source>Bookmarks</source>
        <translation>Bladwijzers</translation>
    </message>
</context>
<context>
    <name>ButtonIcon</name>
    <message>
        <source>Icon Placement</source>
        <translation>Plaatsing van pictogrammen</translation>
    </message>
    <message>
        <source>Layout:</source>
        <translation>Layout:</translation>
    </message>
    <message>
        <source>Caption only</source>
        <translation>Alleen tekst</translation>
    </message>
    <message>
        <source>Icon only</source>
        <translation>Alleen pictogrammen</translation>
    </message>
    <message>
        <source>Caption below Icon</source>
        <translation>Tekst onder pictogram</translation>
    </message>
    <message>
        <source>Caption above Icon</source>
        <translation>Tekst boven pictogram</translation>
    </message>
    <message>
        <source>Caption right to Icon</source>
        <translation>Tekst rechts van pictogram</translation>
    </message>
    <message>
        <source>Caption left to Icon</source>
        <translation>Tekst links van pictogram</translation>
    </message>
    <message>
        <source>Caption overlays Icon</source>
        <translation>Tekst over pictogram heen</translation>
    </message>
    <message>
        <source>Scale:</source>
        <translation>Schaal:</translation>
    </message>
    <message>
        <source>Always</source>
        <translation>Altijd</translation>
    </message>
    <message>
        <source>When Icon is too small</source>
        <translation>Als pictogram te klein is</translation>
    </message>
    <message>
        <source>When Icon is too big</source>
        <translation>Als pictogram te groot is</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>Nooit</translation>
    </message>
    <message>
        <source>Scale How:</source>
        <translation>Schaalmethode:</translation>
    </message>
    <message>
        <source>Proportional</source>
        <translation>Proportioneel</translation>
    </message>
    <message>
        <source>Non Proportional</source>
        <translation>Niet proportioneel</translation>
    </message>
    <message>
        <source>Icon</source>
        <translation>Pictogram</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message>
        <source>Reset</source>
        <translation>Opnieuw instellen</translation>
    </message>
</context>
<context>
    <name>CMSPrefs</name>
    <message>
        <source>&amp;Activate Color Management</source>
        <translation>Kleurbeheer &amp;activeren</translation>
    </message>
    <message>
        <source>System Profiles</source>
        <translation>Systeemprofielen</translation>
    </message>
    <message>
        <source>&amp;Solid Colors:</source>
        <translation>&amp;Effen kleuren:</translation>
    </message>
    <message>
        <source>&amp;Monitor:</source>
        <translation>&amp;Beeldscherm:</translation>
    </message>
    <message>
        <source>P&amp;rinter:</source>
        <translation>&amp;Printer:</translation>
    </message>
    <message>
        <source>Rendering Intents</source>
        <translation>Rendering intents</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Perceptueel</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Relatief colorimetrisch</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Verzadiging</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Absoluut colorimetrisch</translation>
    </message>
    <message>
        <source>M&amp;onitor:</source>
        <translation>Bee&amp;ldscherm:</translation>
    </message>
    <message>
        <source>Pr&amp;inter:</source>
        <translation>Pr&amp;inter:</translation>
    </message>
    <message>
        <source>Sim&amp;ulate Printer on the Screen</source>
        <translation>Printerweergave op scherm sim&amp;uleren</translation>
    </message>
    <message>
        <source>Mark Colors out of &amp;Gamut</source>
        <translation>Kleuren buiten de &amp;gamut markeren</translation>
    </message>
    <message>
        <source>Use &amp;Blackpoint Compensation</source>
        <translation>&amp;Zwartpuntcompensatie gebruiken</translation>
    </message>
    <message>
        <source>Default color profile for solid colors on the page</source>
        <translation>Standaard kleurprofiel voor effen kleuren op de pagina</translation>
    </message>
    <message>
        <source>Color profile that you have generated or received from the manufacturer.
This profile should be specific to your monitor and not a generic profile (i.e. sRGB).</source>
        <translation>Door uzelf aangemaakt of via fabrikant verkregen kleurprofiel.
Dit profiel is specifiek voor uw beeldscherm en niet algemeen (zoals bijv. sRGB).</translation>
    </message>
    <message>
        <source>Color profile for your printer model from the manufacturer.
This profile should be specific to your printer and not a generic profile (i.e. sRGB).</source>
        <translation>Kleurprofiel voor uw printer van de printerfabrikant.
Dit profiel is specifiek voor uw printer en niet algemeen (zoals bijv. sRGB).</translation>
    </message>
    <message>
        <source>Default rendering intent for your monitor. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation>Standaard rendering intent voor uw beeldscherm. Kies, tenzij u precies weet
wat u doet, voor Relatief colorimetrisch of Perceptueel.</translation>
    </message>
    <message>
        <source>Default rendering intent for your printer. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation>Standaard rendering intent voor uw printer. Kies, tenzij u precies weet
wat u doet, voor Relatief colorimetrisch of Perceptueel.</translation>
    </message>
    <message>
        <source>Enable &apos;soft proofing&apos; of how your document colors will print,
based on the chosen printer profile.</source>
        <translation>Laat een weergave op uw scherm zien, gebaseerd
op het gekozen printerprofiel.</translation>
    </message>
    <message>
        <source>Method of showing colors on the screen which may not print properly.
This requires very accurate profiles and serves only as a warning.</source>
        <translation>Hiermee kunnen kleurgebieden gemarkeerd worden die niet correct zouden worden
afgedrukt. Dit vereist zeer accurate profielen en dient enkel als waarschuwing.</translation>
    </message>
    <message>
        <source>Black Point Compensation is a method of improving contrast in photos.
It is recommended that you enable this if you have photos in your document.</source>
        <translation>Zwartpuntcompensatie is een methode om het contrast in foto&apos;s te verbeteren.
Als uw document foto&apos;s bevat wordt deze instelling aangeraden.</translation>
    </message>
    <message>
        <source>&amp;RGB Pictures:</source>
        <translation type="obsolete">&amp;RGB-afbeeldingen:</translation>
    </message>
    <message>
        <source>&amp;CMYK Pictures:</source>
        <translation type="obsolete">&amp;CMYK-afbeeldingen:</translation>
    </message>
    <message>
        <source>Default color profile for imported CMYK images</source>
        <translation>Standaard-kleurprofiel voor geïmporteerde CMYK-afbeeldingen</translation>
    </message>
    <message>
        <source>Default color profile for imported RGB images</source>
        <translation>Standaard-kleurprofiel voor geïmporteerde RGB-afbeeldingen</translation>
    </message>
    <message>
        <source>&amp;RGB Images:</source>
        <translation>&amp;RGB-afbeeldingen:</translation>
    </message>
    <message>
        <source>&amp;CMYK Images:</source>
        <translation>&amp;CMYK-afbeeldingen:</translation>
    </message>
</context>
<context>
    <name>CMYKChoose</name>
    <message>
        <source>Edit Color</source>
        <translation>Kleur bewerken</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Naam:</translation>
    </message>
    <message>
        <source>Color &amp;Model</source>
        <translation>Kleur&amp;model</translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation>CMYK</translation>
    </message>
    <message>
        <source>RGB</source>
        <translation>RGB</translation>
    </message>
    <message>
        <source>Web Safe RGB</source>
        <translation>RGB voor web</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Nieuw</translation>
    </message>
    <message>
        <source>Old</source>
        <translation>Oud</translation>
    </message>
    <message>
        <source>HSV-Colormap</source>
        <translation>HSV-kleurenkaart</translation>
    </message>
    <message>
        <source>C:</source>
        <translation>C:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>M:</source>
        <translation>M:</translation>
    </message>
    <message>
        <source>Y:</source>
        <translation>Y:</translation>
    </message>
    <message>
        <source>K:</source>
        <translation>K:</translation>
    </message>
    <message>
        <source>Dynamic Color Bars</source>
        <translation>Dynamische kleurbalken</translation>
    </message>
    <message>
        <source>Static Color Bars</source>
        <translation>Statische kleurbalken</translation>
    </message>
    <message>
        <source>R:</source>
        <translation>R:</translation>
    </message>
    <message>
        <source>G:</source>
        <translation>G:</translation>
    </message>
    <message>
        <source>B:</source>
        <translation>B:</translation>
    </message>
    <message>
        <source>Is Spot Color</source>
        <translation>Is een steunkleur</translation>
    </message>
    <message>
        <source>Is Registration Color</source>
        <translation>Is een registratie kleur</translation>
    </message>
    <message>
        <source>You cannot create a color named &quot;%1&quot;.
It is a reserved name for transparent color</source>
        <translation>U kan niet een kleur maken genaamd &quot;%1&quot;.
Het is een naam gereserveerd voor transparantkleur</translation>
    </message>
    <message>
        <source>Name of the color is not unique</source>
        <translation>Naam van de kleur is niet uniek</translation>
    </message>
    <message>
        <source>Choosing this will enable printing this on all plates. Registration colors are used for printer marks such as crop marks, registration marks and the like. These are not typically used in the layout itself.</source>
        <translation>Hiermee worden alle platen afgedrukt. Registratiekleuren worden gebruikt voor afdrukmarkeringen zoals, snijtekens, paskruizen en dergelijke. Deze worden gebruikelijk buiten de de layout zelf geplaatst.</translation>
    </message>
    <message>
        <source>Choosing this will make this color a spot color, thus creating another spot when creating plates or separations. This is used most often when a logo or other color needs exact representation or cannot be replicated with CMYK inks. Metallic and fluorescent inks are good examples which cannot be easily replicated with CMYK inks.</source>
        <translation>Hiermee wordt van deze kleur een steunkleur gemaakt. Voor elke steunkleur wordt een separatie gemaakt bij het maken van platen of films. Steunkleuren worden meestal gebruikt als een kleur exact moet worden weergegeven en niet kan worden samengesteld met cmyk kleuren. Metallic en fluoriserende inkten zijn specifieke voorbeelden welke niet met cmyk inkten kunnen worden aangemaakt.</translation>
    </message>
    <message>
        <source>You cannot create a color without a name
Please give it a name</source>
        <translation>U kan niet een kleur maken zonder een naam
Geef het AUB een naam</translation>
    </message>
</context>
<context>
    <name>ChTable</name>
    <message>
        <source>You can see a thumbnail if you press and hold down the right mouse button. The Insert key inserts a Glyph into the Selection below and the Delete key removes the last inserted one</source>
        <translation>U kunt een miniatuurweergave zien als u de rechter muisknop ingedrukt houdt. De insert-toets voegt een glyph in de selectie hieronder en de delete-toets verwijderd de laatst ingevoegde</translation>
    </message>
</context>
<context>
    <name>CharSelect</name>
    <message>
        <source>Select Character:</source>
        <translation>Karakter selecteren:</translation>
    </message>
    <message>
        <source>Font:</source>
        <translation>Font:</translation>
    </message>
    <message>
        <source>Character Class:</source>
        <translation>Karakterklasse:</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation>&amp;Invoegen</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>W&amp;issen</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Sluiten</translation>
    </message>
    <message>
        <source>Insert the characters at the cursor in the text</source>
        <translation>Voegt de tekens in op de huidige cursorpositie</translation>
    </message>
    <message>
        <source>Delete the current selection(s).</source>
        <translation>Verwijdert de huidige selectie(s).</translation>
    </message>
    <message>
        <source>Full Character Set</source>
        <translation>Volledige karakterset</translation>
    </message>
    <message>
        <source>Basic Latin</source>
        <translation>Basis latijn</translation>
    </message>
    <message>
        <source>Latin-1 Supplement</source>
        <translation>Latijn-1 toevoeging</translation>
    </message>
    <message>
        <source>Latin Extended-A</source>
        <translation>Latijn uitgebreid-A</translation>
    </message>
    <message>
        <source>Latin Extended-B</source>
        <translation>Latijn uitgebreid-B</translation>
    </message>
    <message>
        <source>General Punctuation</source>
        <translation>Algemene puntuatie</translation>
    </message>
    <message>
        <source>Super- and Subscripts</source>
        <translation>Super- en subscripts</translation>
    </message>
    <message>
        <source>Currency Symbols</source>
        <translation>Valutasymbolen</translation>
    </message>
    <message>
        <source>Letterlike Symbols</source>
        <translation>Lettersymbolen</translation>
    </message>
    <message>
        <source>Number Forms</source>
        <translation>Getalvormen</translation>
    </message>
    <message>
        <source>Arrows</source>
        <translation>Pijlen</translation>
    </message>
    <message>
        <source>Mathematical Operators</source>
        <translation>Mathematische karakters</translation>
    </message>
    <message>
        <source>Box Drawing</source>
        <translation>Blok tekensymbolen</translation>
    </message>
    <message>
        <source>Block Elements</source>
        <translation>Blokelementen</translation>
    </message>
    <message>
        <source>Geometric Shapes</source>
        <translation>Geometrische vormen</translation>
    </message>
    <message>
        <source>Miscellaneous Symbols</source>
        <translation>Diverse symbolen</translation>
    </message>
    <message>
        <source>Dingbats</source>
        <translation>Dingbats</translation>
    </message>
    <message>
        <source>Small Form Variants</source>
        <translation>Small Form Variants</translation>
    </message>
    <message>
        <source>Ligatures</source>
        <translation>Ligaturen</translation>
    </message>
    <message>
        <source>Specials</source>
        <translation>Specials</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation>Grieks</translation>
    </message>
    <message>
        <source>Greek Extended</source>
        <translation>Grieks uitgebreid</translation>
    </message>
    <message>
        <source>Cyrillic</source>
        <translation>Cyrillisch</translation>
    </message>
    <message>
        <source>Cyrillic Supplement</source>
        <translation>Cyrillisch supplement</translation>
    </message>
    <message>
        <source>Arabic</source>
        <translation>Arabisch</translation>
    </message>
    <message>
        <source>Arabic Extended A</source>
        <translation>Arabisch uitgebreid A</translation>
    </message>
    <message>
        <source>Arabic Extended B</source>
        <translation>Arabisch uitgebreid B</translation>
    </message>
    <message>
        <source>Hebrew</source>
        <translation>Hebreeuws</translation>
    </message>
    <message>
        <source>&amp;Insert Code:</source>
        <translation>Voeg code &amp;in:</translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing</source>
        <translation>Sluit idt venster en ga terug naar tekstbewerken</translation>
    </message>
    <message>
        <source>Type in a four digit unicode value directly here</source>
        <translation>Type direct een viercijferige unicode waarde hier</translation>
    </message>
</context>
<context>
    <name>CheckDocument</name>
    <message>
        <source>Current Profile:</source>
        <translation>Huidige profiel:</translation>
    </message>
    <message>
        <source>Items</source>
        <translation>Items</translation>
    </message>
    <message>
        <source>Problems</source>
        <translation>Problemen</translation>
    </message>
    <message>
        <source>Glyphs missing</source>
        <translation>Missende symbooltekens</translation>
    </message>
    <message>
        <source>Text overflow</source>
        <translation>Tekstoverloop</translation>
    </message>
    <message>
        <source>Object is not on a Page</source>
        <translation>Object staat niet op een pagina</translation>
    </message>
    <message>
        <source>Missing Image</source>
        <translation>Missende afbeelding</translation>
    </message>
    <message>
        <source>Image has a DPI-Value less than %1 DPI</source>
        <translation>Afbeelding heeft een DPI-waarde lager dan %1 DPI</translation>
    </message>
    <message>
        <source>Object has transparency</source>
        <translation>Object is doorzichtig</translation>
    </message>
    <message>
        <source>Object is a placed PDF</source>
        <translation>Object is een geplaatste PDF</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Document</translation>
    </message>
    <message>
        <source>No Problems found</source>
        <translation>Geen problemen gevonden</translation>
    </message>
    <message>
        <source>Page </source>
        <translation>Pagina</translation>
    </message>
    <message>
        <source>Free Objects</source>
        <translation>Vrije objecten</translation>
    </message>
    <message>
        <source>Problems found</source>
        <translation>Gevonden problemen</translation>
    </message>
    <message>
        <source>Preflight Verifier</source>
        <translation>Preflight controle</translation>
    </message>
    <message>
        <source>Object is a PDF Annotation or Field</source>
        <translation>Object is een PDF annotatie of veld</translation>
    </message>
    <message>
        <source>&amp;Ignore Errors</source>
        <translation>&amp;Negeer fouten</translation>
    </message>
    <message>
        <source>Annotation uses a non TrueType font</source>
        <translation>Annotatie gebruikt een niet-TrueType font</translation>
    </message>
</context>
<context>
    <name>ChooseStyles</name>
    <message>
        <source>Choose Styles</source>
        <translation>Kies stijlen</translation>
    </message>
    <message>
        <source>Available Styles</source>
        <translation>Beschikbare stijlen</translation>
    </message>
</context>
<context>
    <name>CollectForOutput</name>
    <message>
        <source>Choose a Directory</source>
        <translation>Kies een map</translation>
    </message>
    <message>
        <source>Collecting...</source>
        <translation>Verzamelen...</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>Cannot collect all files for output for file:
%1</source>
        <translation>Kan niet alle bestanden vinden voor de output van bestand:
%1</translation>
    </message>
    <message>
        <source>Cannot collect the file: 
%1</source>
        <translation>Verzamelenniet gelukt van bestand: %1</translation>
    </message>
</context>
<context>
    <name>ColorManager</name>
    <message>
        <source>Colors</source>
        <translation>Kleuren</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importeren</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nieuw</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>Be&amp;werken</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;upliceren</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>&amp;Remove Unused</source>
        <translation>Ongebruikte ve&amp;rwijderen</translation>
    </message>
    <message>
        <source>Color Sets</source>
        <translation>Kleurensets</translation>
    </message>
    <message>
        <source>Current Color Set:</source>
        <translation>Huidige kleurenset:</translation>
    </message>
    <message>
        <source>&amp;Save Color Set</source>
        <translation>Kleurenset op&amp;slaan</translation>
    </message>
    <message>
        <source>Choose a color set to load</source>
        <translation>Kies de te laden kleurenset</translation>
    </message>
    <message>
        <source>Save the current color set</source>
        <translation>De huidige kleurenset opslaan</translation>
    </message>
    <message>
        <source>Remove unused colors from current document&apos;s color set</source>
        <translation>Verwijdert de ongebruikte kleuren uit de kleurenset van dit document</translation>
    </message>
    <message>
        <source>Import colors to the current set from an existing document</source>
        <translation>Importeer kleuren naar de huidige set uit een bestaand document</translation>
    </message>
    <message>
        <source>Create a new color within the current set</source>
        <translation>Een nieuwe kleur aanmaken in de huidige set</translation>
    </message>
    <message>
        <source>Edit the currently selected color</source>
        <translation>De geselecteerde kleur bewerken</translation>
    </message>
    <message>
        <source>Make a copy of the currently selected color</source>
        <translation>Een kopie van de geselecteerde kleur maken</translation>
    </message>
    <message>
        <source>Delete the currently selected color</source>
        <translation>De geselecteerde kleur verwijderen</translation>
    </message>
    <message>
        <source>Make the current colorset the default color set</source>
        <translation>Stelt de huidige kleurenset in als standaard</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Naam:</translation>
    </message>
    <message>
        <source>Choose a Name</source>
        <translation>Kies een naam</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documenten (*.sla *.sla.gz *.scd *.scd.gz);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documenten (*.sla *.scd);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Kopie van %1</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation>Nieuwe kleur</translation>
    </message>
    <message>
        <source>If color management is enabled, a triangle warning indicator is a warning the the color maybe outside of the color gamut of the current printer profile selected. What this means is the color many not be able to be printed exactly as displayed on screen. Spot colors are indicated by a red circle. Registration colors will have a registration mark next to the color. More hints about gamut warnings are in the online help under Color Management.</source>
        <translation>Als het kleurbeheer is ingeschakeld, een driehoekig waarschuwingsteken is een waarschuwing dat de kleur buiten het kleurspectrum van het huidige printerprofiel. Dit betekend dat de kleur misschien niet geprint wordt zoals op het scherm getoond. Spot-kleuren zijn gemerkt door een rode circel. Registratiekleuren hebben een registratiemerk naast de kleur. Meer hints over spectrumwaarschuwingen staan in de online help onder kleurbeheer (Color Management).</translation>
    </message>
</context>
<context>
    <name>ColorWheel</name>
    <message>
        <source>Monochromatic</source>
        <translation>Monochroom</translation>
    </message>
    <message>
        <source>Analogous</source>
        <translation>Analoog</translation>
    </message>
    <message>
        <source>Complementary</source>
        <translation>Complementair</translation>
    </message>
    <message>
        <source>Split Complementary</source>
        <translation>Gesplitst complementair</translation>
    </message>
    <message>
        <source>Triadic</source>
        <translation>Triadisch</translation>
    </message>
    <message>
        <source>Tetradic (Double Complementary)</source>
        <translation>Tetradisch (Dubbel complementair)</translation>
    </message>
    <message>
        <source>Base Color</source>
        <translation>Basiskleur</translation>
    </message>
    <message>
        <source>Monochromatic Light</source>
        <translation>Monochromatisch licht</translation>
    </message>
    <message>
        <source>Monochromatic Dark</source>
        <translation>Monochromatisch donker</translation>
    </message>
    <message>
        <source>1st. Analogous</source>
        <translation>1e Analoog</translation>
    </message>
    <message>
        <source>2nd. Analogous</source>
        <translation>2e Analoog</translation>
    </message>
    <message>
        <source>1st. Split</source>
        <translation>1e Splitsing</translation>
    </message>
    <message>
        <source>2nd. Split</source>
        <translation>2e Splitsing</translation>
    </message>
    <message>
        <source>3rd. Split</source>
        <translation>3e Splitsing</translation>
    </message>
    <message>
        <source>4th. Split</source>
        <translation>4e Splitsing</translation>
    </message>
    <message>
        <source>1st. Triadic</source>
        <translation>1e Triade</translation>
    </message>
    <message>
        <source>2nd. Triadic</source>
        <translation>2e Triade</translation>
    </message>
    <message>
        <source>1st. Tetradic (base opposite)</source>
        <translation>1e Tetrade (basis tegengesteld)</translation>
    </message>
    <message>
        <source>2nd. Tetradic (angle)</source>
        <translation>2e Tetrade (hoek)</translation>
    </message>
    <message>
        <source>3rd. Tetradic (angle opposite)</source>
        <translation>3e Tetrade (hoek tegengesteld)</translation>
    </message>
</context>
<context>
    <name>ColorWheelDialog</name>
    <message>
        <source>Normal Vision</source>
        <translation>Normaal zicht</translation>
    </message>
    <message>
        <source>Full Color Blindness</source>
        <translation>Volledig kleurenblind</translation>
    </message>
    <message>
        <source>Vision Defect:</source>
        <translation>Zichtgebrek:</translation>
    </message>
    <message>
        <source>Color Wheel</source>
        <translation>Kleurwiel</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Kleur</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <source>C</source>
        <translation>C</translation>
    </message>
    <message>
        <source>M</source>
        <translation>M</translation>
    </message>
    <message>
        <source>Y</source>
        <translation>Y</translation>
    </message>
    <message>
        <source>K</source>
        <translation>K</translation>
    </message>
    <message>
        <source>Select Method:</source>
        <translation>Selecteer methode:</translation>
    </message>
    <message>
        <source>Angle (0 - 90 degrees):</source>
        <translation>Hoek (0 - 90 graden):</translation>
    </message>
    <message>
        <source>&amp;Merge Colors</source>
        <translation>&amp;Meng kleuren</translation>
    </message>
    <message>
        <source>&amp;Replace Colors</source>
        <translation>Ve&amp;rvang kleuren</translation>
    </message>
    <message>
        <source>Merge created colors into the document colors</source>
        <translation>Meng aangemaakte kleuren in de documentkleuren</translation>
    </message>
    <message>
        <source>Replace created colors in the document colors</source>
        <translation>Vervang aangemaakte kleuren in documentkleuren</translation>
    </message>
    <message>
        <source>Leave colors untouched</source>
        <translation>Laat kleur onaangeraakt</translation>
    </message>
    <message>
        <source>Merging colors</source>
        <translation>Vermeng kleuren</translation>
    </message>
    <message>
        <source>Error: </source>
        <translation>Fout: </translation>
    </message>
    <message>
        <source>Now opening the color manager.</source>
        <translation>Opent nu het kleurbeheer.</translation>
    </message>
    <message>
        <source>Color Merging</source>
        <translation>Kleursamenvoeging</translation>
    </message>
    <message>
        <source>Cr&amp;eate color...</source>
        <translation>Ni&amp;euwe kleur...</translation>
    </message>
    <message>
        <source>&amp;Import existing color...</source>
        <translation>&amp;Importeer bestaande kleuren...</translation>
    </message>
    <message>
        <source>&amp;Merge colors</source>
        <translation>&amp;Meng kleuren</translation>
    </message>
    <message>
        <source>&amp;Replace colors</source>
        <translation>Ve&amp;rvang kleuren</translation>
    </message>
    <message>
        <source>E&amp;xit</source>
        <translation>&amp;Sluiten</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation>&amp;Kleur</translation>
    </message>
    <message>
        <source>Difference between the selected value and the counted ones. Refer to documentation for more information.</source>
        <translation>Verschil tussen de geselecteerde en de berekende waarden. Lees de documentatie voor meer informatie.</translation>
    </message>
    <message>
        <source>Click the wheel to get the base color. It is hue in HSV mode.</source>
        <translation>Klik het wiel om de basiskleur te krijgen. De tint is in HSV mode.</translation>
    </message>
    <message>
        <source>Sample color scheme</source>
        <translation>Voorbeeld kleuren schema</translation>
    </message>
    <message>
        <source>Select one of the methods to create a color scheme. Refer to documentation for more information.</source>
        <translation>Selecteer een van de methoden om een kleurenschema aan te maken. Lees de documentatie voor meer informatie.</translation>
    </message>
    <message>
        <source>Colors of your chosen color scheme</source>
        <translation>Kleuren van het gekozen kleurschema</translation>
    </message>
    <message>
        <source>Simulate common vision defects here. Select type of the defect.</source>
        <translation>Simuleer voorkomende gezichtsbeperkingen. Selecteer het type beperking.</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation>Nieuwe kleur</translation>
    </message>
    <message>
        <source>Unable to find the requested color. You have probably selected black, gray or white. There is no way to process this color.</source>
        <translation>Kan de gevraagde kleur niet vinden. Waarschijnlijk is zwart, grijs of wit geselecteerd. Deze kleur kan niet worden verwerkt.</translation>
    </message>
    <message>
        <source>C&amp;olor Components...</source>
        <translation>Kleur &amp;Componenten...</translation>
    </message>
    <message>
        <source>Protanopia (Red)</source>
        <translation>Protanopia (Rood)</translation>
    </message>
    <message>
        <source>Deuteranopia (Green)</source>
        <translation>Deuteranopia (Groen)</translation>
    </message>
    <message>
        <source>Tritanopia (Blue)</source>
        <translation>Tritanopia (Blauw)</translation>
    </message>
    <message>
        <source>Color %1 exists already!</source>
        <translation>Kleur %1 bestaat al!</translation>
    </message>
    <message>
        <source>Color %1 appended.</source>
        <translation>Kleur %1 toegevoegd.</translation>
    </message>
</context>
<context>
    <name>ColorWheelPlugin</name>
    <message>
        <source>&amp;Color Wheel...</source>
        <translation>&amp;Kleurwiel...</translation>
    </message>
    <message>
        <source>Color setting helper</source>
        <translation>Kleurinstellingen helper</translation>
    </message>
    <message>
        <source>Color selector with color theory included.</source>
        <translation>Kleur selecteren inclusief kleurtheorie.</translation>
    </message>
</context>
<context>
    <name>CommonStrings</name>
    <message>
        <source>&amp;Apply</source>
        <translation>Toe&amp;passen</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>Op&amp;slaan</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>None</source>
        <comment>color name</comment>
        <translation>Geen</translation>
    </message>
    <message>
        <source>Custom</source>
        <comment>CommonStrings, custom page size</comment>
        <translation>Aangepast</translation>
    </message>
    <message>
        <source>Single Page</source>
        <translation>Enkele pagina</translation>
    </message>
    <message>
        <source>Double Sided</source>
        <translation>Dubbelzijdig</translation>
    </message>
    <message>
        <source>3-Fold</source>
        <translation>Drieluik</translation>
    </message>
    <message>
        <source>4-Fold</source>
        <translation>Vierluik</translation>
    </message>
    <message>
        <source>Left Page</source>
        <translation>Linker pagina</translation>
    </message>
    <message>
        <source>Middle</source>
        <translation>Midden</translation>
    </message>
    <message>
        <source>Middle Left</source>
        <translation>Midden links</translation>
    </message>
    <message>
        <source>Middle Right</source>
        <translation>Midden rechts</translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation>Rechter pagina</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normaal</translation>
    </message>
    <message>
        <source>Normal Left</source>
        <translation>Normaal links</translation>
    </message>
    <message>
        <source>Normal Middle</source>
        <translation>Normaal midden</translation>
    </message>
    <message>
        <source>Normal Right</source>
        <translation>Normaal rechts</translation>
    </message>
    <message>
        <source>Monday</source>
        <translation>Maandag</translation>
    </message>
    <message>
        <source>Tuesday</source>
        <translation>Dinsdag</translation>
    </message>
    <message>
        <source>Wednesday</source>
        <translation>Woensdag</translation>
    </message>
    <message>
        <source>Thursday</source>
        <translation>Donderdag</translation>
    </message>
    <message>
        <source>Friday</source>
        <translation>Vrijdag</translation>
    </message>
    <message>
        <source>Saturday</source>
        <translation>Zaterdag</translation>
    </message>
    <message>
        <source>Sunday</source>
        <translation>Zondag</translation>
    </message>
    <message>
        <source>January</source>
        <translation>Januari</translation>
    </message>
    <message>
        <source>February</source>
        <translation>Februari</translation>
    </message>
    <message>
        <source>March</source>
        <translation>Maart</translation>
    </message>
    <message>
        <source>April</source>
        <translation>April</translation>
    </message>
    <message>
        <source>May</source>
        <translation>Mei</translation>
    </message>
    <message>
        <source>June</source>
        <translation>Juni</translation>
    </message>
    <message>
        <source>July</source>
        <translation>Juli</translation>
    </message>
    <message>
        <source>August</source>
        <translation>Augustus</translation>
    </message>
    <message>
        <source>September</source>
        <translation>September</translation>
    </message>
    <message>
        <source>October</source>
        <translation>Oktober</translation>
    </message>
    <message>
        <source>November</source>
        <translation>November</translation>
    </message>
    <message>
        <source>December</source>
        <translation>December</translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation>Postscript</translation>
    </message>
</context>
<context>
    <name>Cpalette</name>
    <message>
        <source>Shade:</source>
        <translation>Tint:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation>Ondoorzichtigheid:</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normaal</translation>
    </message>
    <message>
        <source>Horizontal Gradient</source>
        <translation>Horizontaal verloop</translation>
    </message>
    <message>
        <source>Vertical Gradient</source>
        <translation>Verticaal verloop</translation>
    </message>
    <message>
        <source>Diagonal Gradient</source>
        <translation>Diagonaal verloop</translation>
    </message>
    <message>
        <source>Cross Diagonal Gradient</source>
        <translation>Kruislings diagonaal verloop</translation>
    </message>
    <message>
        <source>Radial Gradient</source>
        <translation>Straalsgewijs verloop</translation>
    </message>
    <message>
        <source>Free linear Gradient</source>
        <translation>Vrij lineair verloop</translation>
    </message>
    <message>
        <source>Free radial Gradient</source>
        <translation>Vrij straalsgewijs verloop</translation>
    </message>
    <message>
        <source>X1:</source>
        <translation>X1:</translation>
    </message>
    <message>
        <source>Y1:</source>
        <translation>Y1:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>X2:</source>
        <translation>X2:</translation>
    </message>
    <message>
        <source>Y2:</source>
        <translation>Y2:</translation>
    </message>
    <message>
        <source>Edit Line Color Properties</source>
        <translation>Lijnkleur bewerken</translation>
    </message>
    <message>
        <source>Edit Fill Color Properties</source>
        <translation>Vulkleur bewerken</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation>Kleurverzadiging</translation>
    </message>
    <message>
        <source>Normal or gradient fill method</source>
        <translation>Vulmethode: normaal of kleurverloop</translation>
    </message>
    <message>
        <source>Set the transparency for the color selected</source>
        <translation>Geeft de mate van ondoorschijnendheid aan</translation>
    </message>
    <message>
        <source>Move Vector</source>
        <translation>Verplaats vector</translation>
    </message>
    <message>
        <source>Move the start of the gradient vector with the left mouse button pressed and move the end of the gradient vector with the right mouse button pressed</source>
        <translation>Verplaats het begin van de gradiëntvector met de linker muisknop ingedrukt en verplaats het einde van de gradiëntvector met de rechter muisknop ingedrukt</translation>
    </message>
</context>
<context>
    <name>CsvDialog</name>
    <message>
        <source>CSV Importer Options</source>
        <translation>Opties voor importeren CSV</translation>
    </message>
    <message>
        <source>Field delimiter:</source>
        <translation>Veldscheidingsteken:</translation>
    </message>
    <message>
        <source>(TAB)</source>
        <translation>(TAB)</translation>
    </message>
    <message>
        <source>Value delimiter:</source>
        <translation>Waardescheidingsteken:</translation>
    </message>
    <message>
        <source>First row is a header</source>
        <translation>Eerste regel is een kopregel</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message>
        <source>None</source>
        <comment>delimiter</comment>
        <translation>Geen</translation>
    </message>
</context>
<context>
    <name>CupsOptions</name>
    <message>
        <source>Printer Options</source>
        <translation>Afdrukinstellingen</translation>
    </message>
    <message>
        <source>Page Set</source>
        <translation>Bereik</translation>
    </message>
    <message>
        <source>All Pages</source>
        <translation>Alle pagina&apos;s</translation>
    </message>
    <message>
        <source>Even Pages only</source>
        <translation>Even pagina&apos;s</translation>
    </message>
    <message>
        <source>Odd Pages only</source>
        <translation>Oneven pagina&apos;s</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation>Spiegelen</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Nee</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Ja</translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation>Oriëntatie</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Staand</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Liggend</translation>
    </message>
    <message>
        <source>N-Up Printing</source>
        <translation>Pagina&apos;s per vel</translation>
    </message>
    <message>
        <source>Page per Sheet</source>
        <translation>pagina per vel</translation>
    </message>
    <message>
        <source>Pages per Sheet</source>
        <translation>pagina&apos;s per vel</translation>
    </message>
    <message>
        <source>Option</source>
        <translation>Optie</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Waarde</translation>
    </message>
    <message>
        <source>This panel displays various CUPS options when printing. The exact parameters available will depend on your printer driver. You can confirm CUPS support by selecting Help &gt; About. Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support. Missing library support is indicated by a *</source>
        <translation>Dit scherm toont diverse CUPS- printopties. Exacte parameters zijn afhankelijk van de beschikbare printerdriver. CUPS support kan worden bevestigd door Help &gt; Over te selecteren. Kijk naar de lijst: C-C-T Dit is gelijk aan C=CUPS C=littlecms T=Tiff support. Ontbrekende bibliotheken worden aangegeven met een *</translation>
    </message>
</context>
<context>
    <name>CustomFDialog</name>
    <message>
        <source>&amp;Compress File</source>
        <translation>Bestand &amp;comprimeren</translation>
    </message>
    <message>
        <source>&amp;Include Fonts</source>
        <translation>Fonts &amp;insluiten</translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation>Codering:</translation>
    </message>
    <message>
        <source>Moves to your Document Directory.
This can be set in the Preferences.</source>
        <translation>Gaat naar uw documentenmap.
Deze kan worden ingesteld in de voorkeuren.</translation>
    </message>
</context>
<context>
    <name>CwSetColor</name>
    <message>
        <source>Set Color Components</source>
        <translation>Instellen kleurcomponenten</translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation>CMYK</translation>
    </message>
    <message>
        <source>RGB</source>
        <translation>RGB</translation>
    </message>
    <message>
        <source>HSV</source>
        <translation>HSV</translation>
    </message>
    <message>
        <source>H:</source>
        <translation>H:</translation>
    </message>
    <message>
        <source>S:</source>
        <translation>S:</translation>
    </message>
    <message>
        <source>V:</source>
        <translation>V:</translation>
    </message>
    <message>
        <source>R:</source>
        <translation>R:</translation>
    </message>
    <message>
        <source>G:</source>
        <translation>G:</translation>
    </message>
    <message>
        <source>B:</source>
        <translation>B:</translation>
    </message>
    <message>
        <source>C:</source>
        <translation>C:</translation>
    </message>
    <message>
        <source>M:</source>
        <translation>M:</translation>
    </message>
    <message>
        <source>Y:</source>
        <translation>Y:</translation>
    </message>
    <message>
        <source>K:</source>
        <translation>K:</translation>
    </message>
    <message>
        <source>Set &amp;RGB</source>
        <translation>Instellen &amp;RGB</translation>
    </message>
    <message>
        <source>Set C&amp;MYK</source>
        <translation>Instellen C&amp;MYK</translation>
    </message>
    <message>
        <source>Set &amp;HSV</source>
        <translation>Instellen &amp;HSV</translation>
    </message>
</context>
<context>
    <name>DeferredTask</name>
    <message>
        <source>Cancelled by user</source>
        <translation>Geannuleerd door gebruiker</translation>
    </message>
</context>
<context>
    <name>DelColor</name>
    <message>
        <source>Delete Color</source>
        <translation>Kleur verwijderen</translation>
    </message>
    <message>
        <source>Delete Color:</source>
        <translation>Kleur verwijderen:</translation>
    </message>
    <message>
        <source>Replace With:</source>
        <translation>Vervangen door:</translation>
    </message>
</context>
<context>
    <name>DelPages</name>
    <message>
        <source>Delete Pages</source>
        <translation>Pagina&apos;s verwijderen</translation>
    </message>
    <message>
        <source>to:</source>
        <translation>tot:</translation>
    </message>
    <message>
        <source>Delete From:</source>
        <translation>Verwijder van:</translation>
    </message>
</context>
<context>
    <name>DelStyle</name>
    <message>
        <source>Delete Style</source>
        <translation>Verwijder stijl</translation>
    </message>
    <message>
        <source>Delete Style:</source>
        <translation>Verwijder stijl:</translation>
    </message>
    <message>
        <source>Replace With:</source>
        <translation>Vervangen door:</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation>Geen stijl</translation>
    </message>
</context>
<context>
    <name>DocIm</name>
    <message>
        <source>Importing failed</source>
        <translation>Importeren mislukt</translation>
    </message>
    <message>
        <source>Importing Word document failed 
%1</source>
        <translation>Het importeren mislukt bij het bestand:
%1 </translation>
    </message>
</context>
<context>
    <name>DocInfos</name>
    <message>
        <source>Document Information</source>
        <translation>Documentinformatie</translation>
    </message>
    <message>
        <source>&amp;Title:</source>
        <translation>&amp;Titel:</translation>
    </message>
    <message>
        <source>&amp;Author:</source>
        <translation>&amp;Auteur:</translation>
    </message>
    <message>
        <source>&amp;Keywords:</source>
        <translation>T&amp;refwoorden:</translation>
    </message>
    <message>
        <source>Descri&amp;ption:</source>
        <translation>Om&amp;schrijving:</translation>
    </message>
    <message>
        <source>P&amp;ublisher:</source>
        <translation>&amp;Uitgever:</translation>
    </message>
    <message>
        <source>&amp;Contributors:</source>
        <translation>&amp;Medewerkers:</translation>
    </message>
    <message>
        <source>Dat&amp;e:</source>
        <translation>&amp;Datum:</translation>
    </message>
    <message>
        <source>T&amp;ype:</source>
        <translation>T&amp;ype:</translation>
    </message>
    <message>
        <source>F&amp;ormat:</source>
        <translation>&amp;Formaat:</translation>
    </message>
    <message>
        <source>Identi&amp;fier:</source>
        <translation>&amp;Identifier:</translation>
    </message>
    <message>
        <source>&amp;Source:</source>
        <translation>Br&amp;on:</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>T&amp;aal:</translation>
    </message>
    <message>
        <source>&amp;Relation:</source>
        <translation>R&amp;elatie:</translation>
    </message>
    <message>
        <source>Co&amp;verage:</source>
        <translation>Gaat o&amp;ver:</translation>
    </message>
    <message>
        <source>Ri&amp;ghts:</source>
        <translation>Rec&amp;hten:</translation>
    </message>
    <message>
        <source>Further &amp;Information</source>
        <translation>Meer &amp;informatie</translation>
    </message>
    <message>
        <source>A person or organisation responsible for making the document available</source>
        <translation>De persoon of organisatie die dit document beschikbaar maakt</translation>
    </message>
    <message>
        <source>A person or organisation responsible for making contributions to the content of the document</source>
        <translation>Personen of organisaties die hebben bijgedragen aan dit document</translation>
    </message>
    <message>
        <source>A date associated with an event in the life cycle of the document, in YYYY-MM-DD format, as per ISO 8601</source>
        <translation>Datum die bij het document hoort, bijv. de aanmaakdatum, in JJJJ-MM-DD formaat, zoals in ISO 8601</translation>
    </message>
    <message>
        <source>The nature or genre of the content of the document, eg. categories, functions, genres, etc</source>
        <translation>Genre, categorie of type van dit document</translation>
    </message>
    <message>
        <source>An unambiguous reference to the document within a given context such as ISBN or URI</source>
        <translation>Een exacte referentie naar dit document, zoals een ISBN-nummer of een URI</translation>
    </message>
    <message>
        <source>A reference to a document from which the present document is derived, eg. ISBN or URI</source>
        <translation>Een verwijzing naar een document waar dit document van is afgelijk, bijv. ISBN of een URI</translation>
    </message>
    <message>
        <source>A reference to a related document, possibly using a formal identifier such as a ISBN or URI</source>
        <translation>Een verwijzing naar een gerelateerd document, mogelijk via een ISBN-nummer of URI</translation>
    </message>
    <message>
        <source>The extent or scope of the content of the document, possibly including location, time and jurisdiction ranges</source>
        <translation>Het bereik dat door het document wordt omvat, bijvoorbeeld in plaats, tijd of jurisdictie</translation>
    </message>
    <message>
        <source>Information about rights held in and over the document, eg. copyright, patent or trademark</source>
        <translation>Informatie over rechten die voor dit document gelden, zoals copyright, patenten of handelsmerken</translation>
    </message>
    <message>
        <source>Documen&amp;t</source>
        <translation>Documen&amp;t</translation>
    </message>
    <message>
        <source>The person or organisation primarily responsible for making the content of the document. This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation>Persoon of organisatie verantwoordelijk voor de inhoud van het document. Dit veld kan worden ingesloten in het Scribus document ter referentie, alsmede in de PDF metadata</translation>
    </message>
    <message>
        <source>A name given to the document. This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation>Naam van een document. Dit veld kan worden ingebed in het Scribus document ter referentie, evenals in de PDF metadata</translation>
    </message>
    <message>
        <source>An account of the content of the document. This field is for a brief description or abstract of the document. It is embedded in the PDF on export</source>
        <translation>Omschrijving van de inhoud van het document. Dit veld is een korte omschrijving van het document. Wordt bij export naar PDF ingebed</translation>
    </message>
    <message>
        <source>The topic of the content of the document. This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</source>
        <translation>Trefwoorden over de inhoud van het document. Dit veld is voor trefwoorden die in een PDF moeten worden ingebd, om zoeken en indexeren van PDF bestanden eenvoudiger te maken</translation>
    </message>
    <message>
        <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting. RFC2045,RFC2046 for MIME types are also useful here</source>
        <translation>Fysieke of digitale staat van het document. Media type en afmetingen zijn goed om te vermelden evenals RFC2045,RFC2046 for MIME types</translation>
    </message>
    <message>
        <source>The language in which the content of the document is written, usually a ISO-639 language code optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
        <translation>De taal waarin de inhoud van het document is geschreven, vaak wordt een ISO-639 taalcode geschreven met een afbreekstreepje en een ISO-3166 landcode, als en-GB, fr-CH</translation>
    </message>
</context>
<context>
    <name>DocSections</name>
    <message>
        <source>Add a page numbering section to the document. The new section will be added after the currently selected section.</source>
        <translation>Voeg een sectie voor paginanummering toe aan het document. De nieuwe sectie wordt toegevoegd na de huidige geselecteerde sectie.</translation>
    </message>
    <message>
        <source>Delete the currently selected section.</source>
        <translation>Wis de geselecteerde sectie.</translation>
    </message>
    <message>
        <source>1, 2, 3, ...</source>
        <translation>1, 2, 3, ...</translation>
    </message>
    <message>
        <source>i, ii, iii, ...</source>
        <translation>i, ii, iii, ...</translation>
    </message>
    <message>
        <source>I, II, III, ...</source>
        <translation>I, II, III, ...</translation>
    </message>
    <message>
        <source>a, b, c, ...</source>
        <translation>a, b, c, ...</translation>
    </message>
    <message>
        <source>A, B, C, ...</source>
        <translation>A, B, C, ...</translation>
    </message>
    <message>
        <source>&lt;b&gt;Name:&lt;/b&gt; Optional name for section eg. Index&lt;br/&gt;&lt;b&gt;Shown:&lt;/b&gt; Select to show the page numbers in this section if there is one or more text frames setup to do so.&lt;br/&gt;&lt;b&gt;From:&lt;/b&gt; The page index for this section to start at.&lt;br/&gt;&lt;b&gt;To:&lt;/b&gt; The page index for this section to stop at.&lt;br/&gt;&lt;b&gt;Style:&lt;/b&gt; Select the page number style to be used.&lt;br/&gt;&lt;b&gt;Start:&lt;/b&gt; The index within the Style&apos;s range to star at. Eg. If Start=2 and Style=a,b,c, ..., the numbers will begin at b. For the first section in the document this replaces the older First Page Number in the new file window.</source>
        <translation>&lt;b&gt;Naam:&lt;/b&gt;Optionele naam voor sectie bijv. Index&lt;br/&gt;&lt;b&gt;Getoond:&lt;/b&gt;Selecteer om paginanummers in deze sectie tonen als dit voor meerdere tekstframes geldt.&lt;br/&gt;Van:&lt;/b&gt;De start van de pagina index voor deze sectie.&lt;br/&gt;&lt;b&gt;Tot:&lt;/b&gt;Het eind van de pagina index voor deze sectie.&lt;br/&gt;&lt;b&gt;Stijl:&lt;/b&gt; Selecteer de te gebruiken stijl voor de paginanummering.&lt;br/&gt;&lt;b&gt;Start:,/b&gt; De index waarbinnen binnen de nummeringsstijl moet worden gestart. Bijv. Als Start=2 en Stijl=a,b,c,..., zal de nummering beginnen bij b. Voor de eerste sectie in het document zal dit het oudere Eerste Pagina Nummer in het nieuwe bestandsvenster vervangen.</translation>
    </message>
    <message>
        <source>Page Number Out Of Bounds</source>
        <translation>Paginanummer buiten bereik</translation>
    </message>
    <message>
        <source>The value you have entered is outside the range of page numbers in the current document (%1-%2).</source>
        <translation>De ingevoerde waarde ligt buiten de waarde van de paginanummering in dit document (%1-%2).</translation>
    </message>
</context>
<context>
    <name>DocSectionsBase</name>
    <message>
        <source>Document Sections</source>
        <translation>Document Secties</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <source>From</source>
        <translation>Van</translation>
    </message>
    <message>
        <source>To</source>
        <translation>Naar</translation>
    </message>
    <message>
        <source>Style</source>
        <translation>Stijl</translation>
    </message>
    <message>
        <source>Start</source>
        <translation>Start</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Toevoegen</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+T</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>Shown</source>
        <translation>Getoond</translation>
    </message>
</context>
<context>
    <name>DocumentItemAttributes</name>
    <message>
        <source>Relates To</source>
        <translation>Relatie tot</translation>
    </message>
    <message>
        <source>Is Parent Of</source>
        <translation>Is ouder van</translation>
    </message>
    <message>
        <source>Is Child Of</source>
        <translation>Is kind van</translation>
    </message>
    <message>
        <source>Text Frames</source>
        <translation>Tekstframes</translation>
    </message>
    <message>
        <source>Image Frames</source>
        <translation>Afbeeldingskader</translation>
    </message>
    <message>
        <source>Boolean</source>
        <translation>Boolean</translation>
    </message>
    <message>
        <source>Integer</source>
        <translation>Integer</translation>
    </message>
    <message>
        <source>String</source>
        <translation>String</translation>
    </message>
    <message>
        <source>None</source>
        <comment>relationship</comment>
        <translation>Geen</translation>
    </message>
    <message>
        <source>None</source>
        <comment>auto add</comment>
        <translation>Geen</translation>
    </message>
    <message>
        <source>None</source>
        <comment>types</comment>
        <translation>Geen</translation>
    </message>
    <message>
        <source>Real Number</source>
        <translation>Getal</translation>
    </message>
</context>
<context>
    <name>DocumentItemAttributesBase</name>
    <message>
        <source>Document Item Attributes</source>
        <translation>Document Item attributen</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Type</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Waarde</translation>
    </message>
    <message>
        <source>Parameter</source>
        <translation>Parameter</translation>
    </message>
    <message>
        <source>Relationship</source>
        <translation>Relatie</translation>
    </message>
    <message>
        <source>Relationship To</source>
        <translation>Relatie tot</translation>
    </message>
    <message>
        <source>Auto Add To</source>
        <translation>Voeg automatisch toe aan</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Toevoegen</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+T</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiëren</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+K</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>W&amp;issen</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation>Alt+I</translation>
    </message>
</context>
<context>
    <name>Druck</name>
    <message>
        <source>Setup Printer</source>
        <translation>Printer instellen</translation>
    </message>
    <message>
        <source>Print Destination</source>
        <translation>Afdrukken naar</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Bestand</translation>
    </message>
    <message>
        <source>&amp;Options...</source>
        <translation>&amp;Opties...</translation>
    </message>
    <message>
        <source>&amp;File:</source>
        <translation>&amp;Bestand:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Wijzigen...</translation>
    </message>
    <message>
        <source>A&amp;lternative Printer Command</source>
        <translation>A&amp;lternatief printcommando</translation>
    </message>
    <message>
        <source>Co&amp;mmand:</source>
        <translation>Co&amp;mmando:</translation>
    </message>
    <message>
        <source>Range</source>
        <translation>Bereik</translation>
    </message>
    <message>
        <source>Print &amp;All</source>
        <translation>&amp;Alle pagina&apos;s</translation>
    </message>
    <message>
        <source>Print Current Pa&amp;ge</source>
        <translation>Huidige pa&amp;gina</translation>
    </message>
    <message>
        <source>Print &amp;Range</source>
        <translation>Be&amp;reik</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Voer hier de paginanummer(s) in die u wilt afdrukken,
bijvoorbeeld 1,3,5 of 1-5 (pag. 1 t/m 5 afdrukken).
Een * staat voor alle pagina&apos;s.</translation>
    </message>
    <message>
        <source>N&amp;umber of Copies:</source>
        <translation>Aantal &amp;kopieën:</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opties</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Alles</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation>Cyaan</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation>Magenta</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation>Geel</translation>
    </message>
    <message>
        <source>Black</source>
        <translation>Zwart</translation>
    </message>
    <message>
        <source>&amp;Print</source>
        <translation>Afdru&amp;kken</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Opslaan als</translation>
    </message>
    <message>
        <source>Print Normal</source>
        <translation>Druk Normaal af</translation>
    </message>
    <message>
        <source>Print Separations</source>
        <translation>Druk Separaties</translation>
    </message>
    <message>
        <source>Print in Color if Available</source>
        <translation>Druk bij beschikbaarheid in kleur af</translation>
    </message>
    <message>
        <source>Print in Grayscale</source>
        <translation>Druk in grijstinten af</translation>
    </message>
    <message>
        <source>PostScript Level 1</source>
        <translation>PostScript Level 1</translation>
    </message>
    <message>
        <source>PostScript Level 2</source>
        <translation>PostScript Level 2</translation>
    </message>
    <message>
        <source>PostScript Level 3</source>
        <translation>PostScript Level 3</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Pagina</translation>
    </message>
    <message>
        <source>Mirror Page(s) Horizontal</source>
        <translation>Spiegel pagina(&apos;s) horizontaal</translation>
    </message>
    <message>
        <source>Mirror Page(s) Vertical</source>
        <translation>Spiegel pagina(&apos;s) verticaal</translation>
    </message>
    <message>
        <source>Set Media Size</source>
        <translation>Papierformaat instellen</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Kleur</translation>
    </message>
    <message>
        <source>Apply Under Color Removal</source>
        <translation>Onderliggende kleurvlakken verwijderen</translation>
    </message>
    <message>
        <source>Convert Spot Colors to Process Colors</source>
        <translation>Steunkleuren naar Process kleuren omzetten</translation>
    </message>
    <message>
        <source>Apply ICC Profiles</source>
        <translation>ICC-profielen toepassen</translation>
    </message>
    <message>
        <source>Advanced Options</source>
        <translation>Geavanceerde opties</translation>
    </message>
    <message>
        <source>Preview...</source>
        <translation>Voorbeeld...</translation>
    </message>
    <message>
        <source>Sets the PostScript Level.
 Setting to Level 1 or 2 can create huge files</source>
        <translation>Stelt het PostScript Level in.
Instellen op Level 1 of 2 kan leiden tot grote bestanden</translation>
    </message>
    <message>
        <source>PostScript Files (*.ps);;All Files (*)</source>
        <translation>Postscript bestanden (*.ps);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Use an alternative print manager, such as kprinter or gtklp, to utilize additional printing options</source>
        <translation>Gebruik een alternatieve print manager, bijvoorbeeld kprinter of gtklp, voor additionele opties</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis.UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>Een manier om uit cyaan, geel en magenta samengestelde tonen door zwarte tonen te vervangen. UCR heeft het meeste effect op delen van afbeeldingen met neutrale of grijsachtige tonen. Gebruik hiervan kan afdrukken van bepaalde afbeeldingen verbeteren. UCR reduceert de mogelijkheid van oververzadiging met CMY inkten.</translation>
    </message>
    <message>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation>Steunkleuren worden omgezet naar composiet-kleuren. Bij voorkeur aanvinken. Tenzij steunkleuren in een drukkerij gedrukt moeten worden.</translation>
    </message>
    <message>
        <source>Allows you to embed ICC profiles in the print stream when color management is enabled</source>
        <translation>Staat toe ICC-profielen te embedden in de printstroom als kleurbeheer ingeschakeld is</translation>
    </message>
    <message>
        <source>This enables you to explicitely set the media size of the PostScript file. Not recommended unless requested by your printer.</source>
        <translation>Geef hiermee het papierformaat in het PostScript bestand aan. Wordt niet aanbevolen tenzij de drukker hier uitdrukkelijk om vraagt.</translation>
    </message>
    <message>
        <source>Clip to Page Margins</source>
        <translation>Afsnijden bij paginarand</translation>
    </message>
    <message>
        <source>Failed to retrieve printer settings</source>
        <translation>Mislukt om printerinstellingen te ontavangen</translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page</source>
        <translation>Verberg objecten buiten de marges van de pagina</translation>
    </message>
</context>
<context>
    <name>EPSPlug</name>
    <message>
        <source>Importing File:
%1
failed!</source>
        <translation>Het importeren van het bestand:
%1
is mislukt!</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation>Fatale fout</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Fout</translation>
    </message>
    <message>
        <source>Importing PostScript</source>
        <translation>Importeer Postscript</translation>
    </message>
    <message>
        <source>Analyzing PostScript:</source>
        <translation>Analyseer Postscript:</translation>
    </message>
    <message>
        <source>Generating Items</source>
        <translation>Verwerk items</translation>
    </message>
    <message>
        <source>Converting of %1 images failed!</source>
        <translation>Verwerken van %1 afbeelding mislukt!</translation>
    </message>
</context>
<context>
    <name>EditStyle</name>
    <message>
        <source>Edit Style</source>
        <translation>Stijl bewerken</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Naam:</translation>
    </message>
    <message>
        <source>Character</source>
        <translation>Teken</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>&amp;Lines:</source>
        <translation>Rege&amp;ls:</translation>
    </message>
    <message>
        <source>Tabulators and Indentation</source>
        <translation>Tabs en inspringing</translation>
    </message>
    <message>
        <source>Name of your paragraph style</source>
        <translation>Naam van uw alineastijl</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation>Font van object of geselecteerde tekst</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Tekengrootte</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Kleur van de tekstvulling</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Kleur van de tekstomlijning</translation>
    </message>
    <message>
        <source>Determines the overall height, in line numbers, of the Drop Caps</source>
        <translation>Geeft de hoogte van de kapitaal aan in het aantal regels dat deze beslaat</translation>
    </message>
    <message>
        <source>Spacing above the paragraph</source>
        <translation>Witruimte boven de alinea</translation>
    </message>
    <message>
        <source>Spacing below the paragraph</source>
        <translation>Witruimte onder de alinea</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation>Tussenruimte tussen de regels</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Distances</source>
        <translation>Afstanden</translation>
    </message>
    <message>
        <source>Fixed Linespacing</source>
        <translation>Vaste regelspatiëring</translation>
    </message>
    <message>
        <source>Automatic Linespacing</source>
        <translation>Automatische regelspatiëring</translation>
    </message>
    <message>
        <source>Align to Baseline Grid</source>
        <translation>Aan de basislijn van het raster uitlijnen</translation>
    </message>
    <message>
        <source>Drop Caps</source>
        <translation>Beginkapitaal</translation>
    </message>
    <message>
        <source>Distance from Text:</source>
        <translation>Afstand van tekst:</translation>
    </message>
    <message>
        <source>Preview of the Paragraph Style</source>
        <translation>Preview Alineastijl</translation>
    </message>
    <message>
        <source>Determines the gap between the DropCaps and the Text</source>
        <translation>Bepaalt ruimte tussen beginkapitaal en tekst</translation>
    </message>
    <message>
        <source>Toggles sample text of this paragraph style</source>
        <translation>Verwissel voorbeeldtekst van deze alineastijl</translation>
    </message>
    <message>
        <source>Name of the style is not unique</source>
        <translation>Naam van de stijl is niet uniek</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Achtergrond</translation>
    </message>
    <message>
        <source>Select for easier reading of light coloured text styles</source>
        <translation>Selecteer voor makkelijker lezen van licht gekleurde tekststijlen</translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation>Handmatige tracking</translation>
    </message>
    <message>
        <source>Offset to baseline of characters</source>
        <translation>Offset ten opzichte van basislijn tekens</translation>
    </message>
    <message>
        <source>Click and hold down to select the line spacing mode.</source>
        <translation>Klik en houd ingedrukt om regelafstand modus te selecteren.</translation>
    </message>
    <message>
        <source>Auto</source>
        <translation>Automatisch</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation type="unfinished">Schaalbreedte van tekens</translation>
    </message>
    <message>
        <source>Scaling height of characters</source>
        <translation type="unfinished">Schaalhoogte van tekens</translation>
    </message>
</context>
<context>
    <name>Editor</name>
    <message>
        <source>Editor</source>
        <translation>Editor</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nieuw</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Openen...</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Opslaan &amp;als...</translation>
    </message>
    <message>
        <source>&amp;Save and Exit</source>
        <translation>Op&amp;slaan en sluiten</translation>
    </message>
    <message>
        <source>&amp;Exit without Saving</source>
        <translation>Sluit&amp;en zonder opslaan</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Ongedaan maken</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>O&amp;pnieuw doen</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Kni&amp;ppen</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiëren</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>P&amp;lakken</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>W&amp;issen</translation>
    </message>
    <message>
        <source>&amp;Get Field Names</source>
        <translation>Veldnamen opvra&amp;gen</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Bestand</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>Be&amp;werken</translation>
    </message>
    <message>
        <source>JavaScripts (*.js);;All Files (*)</source>
        <translation>JavaScripts (*.js);;Alle bestanden (*)</translation>
    </message>
</context>
<context>
    <name>EffectsDialog</name>
    <message>
        <source>Image Effects</source>
        <translation>Afbeeldingseffecten</translation>
    </message>
    <message>
        <source>Options:</source>
        <translation>Opties:</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Kleur:</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation>Tint:</translation>
    </message>
    <message>
        <source>Brightness:</source>
        <translation>Helderheid:</translation>
    </message>
    <message>
        <source>Contrast:</source>
        <translation>Contrast:</translation>
    </message>
    <message>
        <source>Radius:</source>
        <translation>Radius:</translation>
    </message>
    <message>
        <source>Value:</source>
        <translation>Waarde:</translation>
    </message>
    <message>
        <source>Posterize:</source>
        <translation>Poster effect:</translation>
    </message>
    <message>
        <source>Available Effects</source>
        <translation>Beschikbare effecten</translation>
    </message>
    <message>
        <source>Blur</source>
        <translation>Vervagen</translation>
    </message>
    <message>
        <source>Brightness</source>
        <translation>Helderheid</translation>
    </message>
    <message>
        <source>Colorize</source>
        <translation>Colorizeren</translation>
    </message>
    <message>
        <source>Contrast</source>
        <translation>Contrast</translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation>Grijsttinten</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation>Inverteren</translation>
    </message>
    <message>
        <source>Posterize</source>
        <translation>Poster effect</translation>
    </message>
    <message>
        <source>Sharpen</source>
        <translation>Verscherpen</translation>
    </message>
    <message>
        <source>&gt;&gt;</source>
        <translation>&gt;&gt;</translation>
    </message>
    <message>
        <source>&lt;&lt;</source>
        <translation>&lt;&lt;</translation>
    </message>
    <message>
        <source>Effects in use</source>
        <translation>Effect in gebruik</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
</context>
<context>
    <name>ExportForm</name>
    <message>
        <source>Choose a Export Directory</source>
        <translation>Kies een map om naar te exporteren</translation>
    </message>
    <message>
        <source>Export as Image(s)</source>
        <translation>Exporteren als afbeelding(en)</translation>
    </message>
    <message>
        <source>&amp;Export to Directory:</source>
        <translation>&amp;Exporteren naar map:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Wijzigen...</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opties</translation>
    </message>
    <message>
        <source>Image &amp;Type:</source>
        <translation>Afbeeldings&amp;type:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation>&amp;Kwaliteit:</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation>&amp;Resolutie:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation>dpi</translation>
    </message>
    <message>
        <source>Range</source>
        <translation>Bereik</translation>
    </message>
    <message>
        <source>&amp;Current page</source>
        <translation>Huidige pa&amp;gina</translation>
    </message>
    <message>
        <source>&amp;All pages</source>
        <translation>Alle &amp;pagina&apos;s</translation>
    </message>
    <message>
        <source>&amp;Range</source>
        <translation>&amp;Bereik</translation>
    </message>
    <message>
        <source>C</source>
        <translation>C</translation>
    </message>
    <message>
        <source>Export a range of pages</source>
        <translation>Een bepaald bereik exporteren</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Voer hier de paginanummer(s) in die u wilt exporteren,
bijvoorbeeld 1,3,5 of 1-5 (pag. 1 t/m 5 exporteren).
Een * staat voor alle pagina&apos;s.</translation>
    </message>
    <message>
        <source>Export all pages</source>
        <translation>Alle pagina&apos;s exporteren</translation>
    </message>
    <message>
        <source>Export only the current page</source>
        <translation>Alleen de huidige pagina exporteren</translation>
    </message>
    <message>
        <source>Resolution of the Images
Use 72 dpi for Images intended for the Screen</source>
        <translation>Oplossend vermogen (resolutie). Gebruik 72dpi voor
afbeeldingen bedoeld voor schermweergave</translation>
    </message>
    <message>
        <source>The quality of your images - 100% is the best, 1% the lowest quality</source>
        <translation>De gewenste kwaliteit: 100% geeft de hoogste kwaliteit, 1% de laagste</translation>
    </message>
    <message>
        <source>Available export formats</source>
        <translation>Beschikbare exportformaten</translation>
    </message>
    <message>
        <source>The output directory - the place to store your images.
Name of the export file will be &apos;documentname-pagenumber.filetype&apos;</source>
        <translation>De plaats waar de afbeeldingen moeten worden opgeslagen.
De naam van het bestand zal zijn &apos;documentnaam-pagina.type&apos;</translation>
    </message>
    <message>
        <source>Change the output directory</source>
        <translation>De uitvoermap wijzigen</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Grootte:</translation>
    </message>
    <message>
        <source>Size of the images. 100% for no changes, 200% for two times larger etc.</source>
        <translation>Grootte van de afbeeldingen. 100% voor geen verandering, 200% voor twee maal groter, etc.</translation>
    </message>
</context>
<context>
    <name>ExtImageProps</name>
    <message>
        <source>Extended Image Properties</source>
        <translation>Uitgebreide afbeeldingseigenschappen</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normaal</translation>
    </message>
    <message>
        <source>Darken</source>
        <translation>Donkerder</translation>
    </message>
    <message>
        <source>Lighten</source>
        <translation>Lichter</translation>
    </message>
    <message>
        <source>Hue</source>
        <translation>Tint</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Verzadiging</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Kleur</translation>
    </message>
    <message>
        <source>Luminosity</source>
        <translation>Helderheid</translation>
    </message>
    <message>
        <source>Multiply</source>
        <translation>Vermenigvuldig</translation>
    </message>
    <message>
        <source>Screen</source>
        <translation>Scherm</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation>Oplossen</translation>
    </message>
    <message>
        <source>Overlay</source>
        <translation>Maskerlaag</translation>
    </message>
    <message>
        <source>Hard Light</source>
        <translation>Hard licht</translation>
    </message>
    <message>
        <source>Soft Light</source>
        <translation>Zacht licht</translation>
    </message>
    <message>
        <source>Difference</source>
        <translation>Verschil</translation>
    </message>
    <message>
        <source>Exclusion</source>
        <translation>Uitsluiting</translation>
    </message>
    <message>
        <source>Color Dodge</source>
        <translation>Kleur tegenhouden</translation>
    </message>
    <message>
        <source>Color Burn</source>
        <translation>Kleur doordrukken</translation>
    </message>
    <message>
        <source>Exlusion</source>
        <translation>Uitsluiting</translation>
    </message>
    <message>
        <source>Blend Mode:</source>
        <translation>Vermeng Mode:</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation>Doorschijnendheid:</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Achtergrond</translation>
    </message>
    <message>
        <source>Layers</source>
        <translation>Lagen</translation>
    </message>
    <message>
        <source>Don&apos;t use any Path</source>
        <translation>Gebruik geen enkel pad</translation>
    </message>
    <message>
        <source>Paths</source>
        <translation>Lokaties</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FDialogPreview</name>
    <message>
        <source>Size:</source>
        <translation>Grootte:</translation>
    </message>
    <message>
        <source>Title:</source>
        <translation>Titel:</translation>
    </message>
    <message>
        <source>No Title</source>
        <translation>Geen titel</translation>
    </message>
    <message>
        <source>Author:</source>
        <translation>Auteur:</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Onbekend</translation>
    </message>
    <message>
        <source>Scribus Document</source>
        <translation>Scribus document</translation>
    </message>
    <message>
        <source>Resolution:</source>
        <translation>Resolutie:</translation>
    </message>
    <message>
        <source>DPI</source>
        <translation>DPI</translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation>CMYK</translation>
    </message>
    <message>
        <source>RGB</source>
        <translation>RGB</translation>
    </message>
    <message>
        <source>Colorspace:</source>
        <translation>Kleurruimte: </translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation>Grijstinten</translation>
    </message>
    <message>
        <source>Version:</source>
        <translation type="unfinished">Versie:</translation>
    </message>
</context>
<context>
    <name>FileLoader</name>
    <message>
        <source>Some fonts used by this document have been substituted:</source>
        <translation>Enkele in dit document gebruikte fonts zijn vervangen:</translation>
    </message>
    <message>
        <source> was replaced by: </source>
        <translation> vervangen door: </translation>
    </message>
</context>
<context>
    <name>FontPrefs</name>
    <message>
        <source>Available Fonts</source>
        <translation>Beschikbare fonts</translation>
    </message>
    <message>
        <source>Font Substitutions</source>
        <translation>Font-vervangingen</translation>
    </message>
    <message>
        <source>Additional Paths</source>
        <translation>Additionele lokaties</translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation>Font Naam</translation>
    </message>
    <message>
        <source>&amp;Available Fonts</source>
        <translation>Beschikbare &amp;fonts</translation>
    </message>
    <message>
        <source>Replacement</source>
        <translation>Vervanging</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>Font &amp;Substitutions</source>
        <translation>Font-&amp;vervangingen</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Wijzigen...</translation>
    </message>
    <message>
        <source>A&amp;dd...</source>
        <translation>&amp;Toevoegen...</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>Ve&amp;rwijderen</translation>
    </message>
    <message>
        <source>Additional &amp;Paths</source>
        <translation>Additionele l&amp;okaties</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Kies een map</translation>
    </message>
    <message>
        <source>Font Name</source>
        <comment>font preview</comment>
        <translation>Font Naam</translation>
    </message>
    <message>
        <source>Use Font</source>
        <comment>font preview</comment>
        <translation>Font gebruiken</translation>
    </message>
    <message>
        <source>Embed in:</source>
        <comment>font preview</comment>
        <translation>Invoegen in:</translation>
    </message>
    <message>
        <source>Subset</source>
        <comment>font preview</comment>
        <translation>Subset</translation>
    </message>
    <message>
        <source>Path to Font File</source>
        <comment>font preview</comment>
        <translation>Pad naar fontbestand</translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation type="obsolete">Postscript</translation>
    </message>
    <message>
        <source>Font search paths can only be set when there are no documents open. Close any open documents, then use File -&gt;Preferences &gt; Fonts to change the font search path.</source>
        <translation>Een font zoekpad kan alleen worden ingesteld als er geen document is geopend. Sluiten alle documenten, en gebruik Bestand -&gt; Voorkeuren &gt; Fonts om het font zoekpad te wijzigen.</translation>
    </message>
</context>
<context>
    <name>FontPreview</name>
    <message>
        <source>User</source>
        <comment>font preview</comment>
        <translation>Gebruiker</translation>
    </message>
    <message>
        <source>System</source>
        <comment>font preview</comment>
        <translation>Systeem</translation>
    </message>
    <message>
        <source>Append selected font into Style, Font menu</source>
        <comment>font preview</comment>
        <translation>Het geselecteerde font toepassen in het menu Stijl, Font</translation>
    </message>
    <message>
        <source>Leave preview</source>
        <comment>font preview</comment>
        <translation>Voorbeeld sluiten</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <comment>font preview</comment>
        <translation>Sexy qua lijf, doch bang voor &apos;t zwempak</translation>
    </message>
    <message>
        <source>Start searching</source>
        <translation>Start zoeken</translation>
    </message>
    <message>
        <source>Size of the selected font</source>
        <translation>Grootte van geselecteerde font</translation>
    </message>
    <message>
        <source>Sample will be shown after key release</source>
        <translation>Voorbeeld wordt getoond nadat toets is losgelaten</translation>
    </message>
    <message>
        <source>Typing the text here provides quick searching in the font names. Searching is case insensitive. You can provide a common wild cards (*, ?, [...]) in your phrase. Examples: t* will list all fonts starting with t or T. *bold* will list all fonts with word bold, bolder etc. in the name.</source>
        <translation>De tekst hier getyped zal snel gezocht worden in de fontnamen. Zoeken is hoofdletterongevoelig. U kunt gebruik maken van wildcards (*, ?, [...]) in de tekst. Voorbeeld: t* zal alle fonts beginnend met t of T opsommen. *bold* zal alle fonts met het woord bold, bolder enz. opsommen.</translation>
    </message>
</context>
<context>
    <name>FontPreviewBase</name>
    <message>
        <source>Fonts Preview</source>
        <translation type="obsolete">Fontvoorbeeld</translation>
    </message>
    <message>
        <source>&amp;Quick Search:</source>
        <translation>&amp;Snel zoeken:</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Zoeken</translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation>Alt+S</translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation>Fontnaam</translation>
    </message>
    <message>
        <source>Doc</source>
        <translation>Doc</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Type</translation>
    </message>
    <message>
        <source>Subset</source>
        <translation>Subset</translation>
    </message>
    <message>
        <source>Access</source>
        <translation>Toegang</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation>&amp;Lettergrootte:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Tekst</translation>
    </message>
    <message>
        <source>Sample text to display</source>
        <translation>Te tonen voorbeeldtekst</translation>
    </message>
    <message>
        <source>Se&amp;t</source>
        <translation>Se&amp;t</translation>
    </message>
    <message>
        <source>Alt+T</source>
        <translation>Alt+T</translation>
    </message>
    <message>
        <source>Reset the text</source>
        <translation>Herstel de tekst</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>&amp;Toepassen</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+T</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Sluiten</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+S</translation>
    </message>
    <message>
        <source>Font Preview</source>
        <translation>Fontvoorbeeld</translation>
    </message>
</context>
<context>
    <name>FontPreviewPlugin</name>
    <message>
        <source>&amp;Font Preview...</source>
        <translation>&amp;Fontvoorbeeld...</translation>
    </message>
    <message>
        <source>Font Preview dialog</source>
        <translation>Fontvoorbeeldvenster</translation>
    </message>
    <message>
        <source>Sorting, searching and browsing available fonts.</source>
        <translation>Sorteer, zoek en blader door beschikbare fonts.</translation>
    </message>
</context>
<context>
    <name>FontReplaceDialog</name>
    <message>
        <source>Font Substitution</source>
        <translation>Fontvervanging</translation>
    </message>
    <message>
        <source>Original Font</source>
        <translation>Orginele font</translation>
    </message>
    <message>
        <source>Substitution Font</source>
        <translation>Vervangend font</translation>
    </message>
    <message>
        <source>Make these substitutions permanent</source>
        <translation>Maak deze vervanging definitief</translation>
    </message>
    <message>
        <source>This document contains some fonts that are not installed on your system, please choose a suitable replacement for them. Cancel will stop the document from loading.</source>
        <translation>Dit document bevat enkele fonts die niet op uw systeem geïnstalleerd zijn, kies een vervangend font voor ze. Annuleren stop het laden van dit document.</translation>
    </message>
    <message>
        <source>Cancels these font substitutions and stops loading the document.</source>
        <translation>Annuleert de fontvervanging en stopt het laden van het document.</translation>
    </message>
    <message>
        <source>Enabling this tells Scribus to use these replacements for missing fonts permanently in all future layouts. This can be reverted or changed in Edit &gt; Preferences &gt; Fonts.</source>
        <translation>Bij inschakelen zal Scribus deze vervangingen voor ontbrekende fonts permanent gebruiken in toekomstige layouts. Dit kan ongedaan worden gemaakt of aangepast worden in Bestand&gt; Voorkeuren&gt; Fonts.</translation>
    </message>
    <message>
        <source>If you select OK, then save, these substitutions are made permanent in the document.</source>
        <translation>Als u OK selecteert, dan bewaren, zullen deze vervangingendefinitief gemaakt worden in dit document.</translation>
    </message>
</context>
<context>
    <name>GradientEditor</name>
    <message>
        <source>Position:</source>
        <translation>Positie:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Add, change or remove color stops here</source>
        <translation>Verander, verwijder of voeg kleurstops hier toe</translation>
    </message>
</context>
<context>
    <name>GuideManager</name>
    <message>
        <source>Manage Guides</source>
        <translation>Hulplijnen beheren</translation>
    </message>
    <message>
        <source>Horizontal Guides</source>
        <translation>Horizontale hulplijnen</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y-pos:</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Toevoegen</translation>
    </message>
    <message>
        <source>D&amp;elete</source>
        <translation>V&amp;erwijderen</translation>
    </message>
    <message>
        <source>Vertical Guides</source>
        <translation>Verticale hulplijnen</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>&amp;X-pos:</translation>
    </message>
    <message>
        <source>A&amp;dd</source>
        <translation>Toe&amp;voegen</translation>
    </message>
    <message>
        <source>De&amp;lete</source>
        <translation>Ve&amp;rwijderen</translation>
    </message>
    <message>
        <source>&amp;Lock Guides</source>
        <translation>Hulplijnen vast&amp;zetten</translation>
    </message>
    <message>
        <source>Rows and Columns - Automatic Guides</source>
        <translation>Rijen en kolommen - Automatische hulplijnen</translation>
    </message>
    <message>
        <source>&amp;Rows:</source>
        <translation>&amp;Rijen:</translation>
    </message>
    <message>
        <source>C&amp;olumns:</source>
        <translation>K&amp;olommen:</translation>
    </message>
    <message>
        <source>Row &amp;Gap</source>
        <translation>Rijr&amp;uimte</translation>
    </message>
    <message>
        <source>Colum&amp;n Gap</source>
        <translation>Kolo&amp;mruimte</translation>
    </message>
    <message>
        <source>Refer to:</source>
        <translation>Refereer aan:</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation>&amp;Pagina</translation>
    </message>
    <message>
        <source>&amp;Margins</source>
        <translation>&amp;Marges</translation>
    </message>
    <message>
        <source>&amp;Selection</source>
        <translation>&amp;Selectie</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Sluiten</translation>
    </message>
    <message>
        <source>&amp;Update</source>
        <translation>&amp;Update</translation>
    </message>
    <message>
        <source>Set the guides in document. Guide manager is still opened but the changes are persistant</source>
        <comment>guide manager</comment>
        <translation>Stel hulplijnen in document in. Hulplijnen manager is geopend, maar wijzigingen zijn doorgevoerd</translation>
    </message>
    <message>
        <source>&amp;Apply to All Pages</source>
        <translation>Pas op &amp;alle pagina&apos;s toe</translation>
    </message>
    <message>
        <source>Guide</source>
        <translation>Hulplijn</translation>
    </message>
    <message>
        <source>Unit</source>
        <translation>Maateenheid</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Voorbeeld</translation>
    </message>
    <message>
        <source>There is empty (0.0) guide already</source>
        <translation>Er is al een lege (0.0) hulplijn</translation>
    </message>
</context>
<context>
    <name>HelpBrowser</name>
    <message>
        <source>Sorry, no manual available! Please see: http://docs.scribus.net for updated docs
and www.scribus.net for downloads.</source>
        <translation>Helaas, geen handleiding beschikbaar! Kijk op http://docs.scribus.net/ voor bijgewerkte
documentatie en op http://www.scribus.net/ voor downloads.</translation>
    </message>
    <message>
        <source>Contents</source>
        <translation>Inhoud</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Koppeling</translation>
    </message>
    <message>
        <source>Scribus Online Help</source>
        <translation>Scribus online hulp</translation>
    </message>
    <message>
        <source>&amp;Contents</source>
        <translation>&amp;Inhoud</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Zoeken</translation>
    </message>
    <message>
        <source>Se&amp;arch</source>
        <translation>Zo&amp;eken</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nieuw</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>De&amp;lete All</source>
        <translation>A&amp;lles verwijderen</translation>
    </message>
    <message>
        <source>Book&amp;marks</source>
        <translation>&amp;Bladwijzers</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation>Afdru&amp;kken...</translation>
    </message>
    <message>
        <source>E&amp;xit</source>
        <translation>&amp;Sluiten</translation>
    </message>
    <message>
        <source>Searching is case unsensitive</source>
        <translation>Zoeken is niet hoofdlettergevoelig</translation>
    </message>
    <message>
        <source>Find</source>
        <translation>Vind</translation>
    </message>
    <message>
        <source>Search Term:</source>
        <translation>Zoekterm:</translation>
    </message>
    <message>
        <source>New Bookmark</source>
        <translation>Nieuwe bladwijzer</translation>
    </message>
    <message>
        <source>New Bookmark&apos;s Title:</source>
        <translation>Nieuwe bladwijzertitel:</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Bestand</translation>
    </message>
    <message>
        <source>&amp;Find...</source>
        <translation>&amp;Vind...</translation>
    </message>
    <message>
        <source>Find &amp;Next</source>
        <translation>Vind v&amp;olgende</translation>
    </message>
    <message>
        <source>Find &amp;Previous</source>
        <translation>Vind vo&amp;rige</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>Be&amp;werken</translation>
    </message>
    <message>
        <source>&amp;Add Bookmark</source>
        <translation>Bl&amp;adwijzer toevoegen</translation>
    </message>
    <message>
        <source>D&amp;elete All</source>
        <translation>All&amp;es verwijderen</translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation>&amp;Bladwijzers</translation>
    </message>
    <message>
        <source>Relevance</source>
        <translation>Relevantie</translation>
    </message>
</context>
<context>
    <name>HyAsk</name>
    <message>
        <source>Possible Hyphenation</source>
        <translation>Mogelijke afbreking</translation>
    </message>
    <message>
        <source>Accept</source>
        <translation>Accepteren</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>Overslaan</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
</context>
<context>
    <name>HySettings</name>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Taal:</translation>
    </message>
    <message>
        <source>&amp;Smallest Word:</source>
        <translation>&amp;Kleinste woord:</translation>
    </message>
    <message>
        <source>Length of the smallest word to be hyphenated.</source>
        <translation>Woorden korter dan deze lengte worden niet afgebroken.</translation>
    </message>
    <message>
        <source>Maximum number of Hyphenations following each other.
A value of 0 means unlimited hyphenations.</source>
        <translation>Maximaal aantal afbrekingen dat elkaar mag opvolgen.
De waarde 0 betekent onbeperkt.</translation>
    </message>
    <message>
        <source>&amp;Hyphenation Suggestions</source>
        <translation>A&amp;fbreeksuggesties</translation>
    </message>
    <message>
        <source>Hyphenate Text Automatically &amp;During Typing</source>
        <translation>Automatisch afbreken tij&amp;dens typen</translation>
    </message>
    <message>
        <source>A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</source>
        <translation>Met de optie Extra, Tekst afbreken krijgt u een dialoogvenster te zien met alle afbreekmogelijkheden voor elk woord.</translation>
    </message>
    <message>
        <source>Enables automatic hyphenation of your text while typing.</source>
        <translation>Voorziet tekst tijdens het typen direct van afbreektekens.</translation>
    </message>
    <message>
        <source>Consecutive Hyphenations &amp;Allowed:</source>
        <translation>Opeenvolgende &amp;afbrekingen toegestaan:</translation>
    </message>
</context>
<context>
    <name>ImageInfoDialog</name>
    <message>
        <source>Image Info</source>
        <translation>Afbeelding informatie</translation>
    </message>
    <message>
        <source>General Info</source>
        <translation>Algemene informatie</translation>
    </message>
    <message>
        <source>Date / Time:</source>
        <translation>Datum / Tijd:</translation>
    </message>
    <message>
        <source>Has Embedded Profile:</source>
        <translation>Heeft ingebed profiel:</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Ja</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Nee</translation>
    </message>
    <message>
        <source>Profile Name:</source>
        <translation>Profielnaam:</translation>
    </message>
    <message>
        <source>Has Embedded Paths:</source>
        <translation>Heeft ingebedde paden:</translation>
    </message>
    <message>
        <source>Has Layers:</source>
        <translation>Heeft lagen:</translation>
    </message>
    <message>
        <source>EXIF Info</source>
        <translation>EXIF Informatie</translation>
    </message>
    <message>
        <source>Artist:</source>
        <translation>Artiest:</translation>
    </message>
    <message>
        <source>Comment:</source>
        <translation>Commentaar:</translation>
    </message>
    <message>
        <source>User Comment:</source>
        <translation>Gebruikerscommentaar:</translation>
    </message>
    <message>
        <source>Camera Model:</source>
        <translation>Cameramodel:</translation>
    </message>
    <message>
        <source>Camera Manufacturer:</source>
        <translation>Camerafabrikant:</translation>
    </message>
    <message>
        <source>Description:</source>
        <translation>Omschrijving:</translation>
    </message>
    <message>
        <source>Copyright:</source>
        <translation>Auteursrecht:</translation>
    </message>
    <message>
        <source>Scanner Model:</source>
        <translation>Scannermodel:</translation>
    </message>
    <message>
        <source>Scanner Manufacturer:</source>
        <translation>Scannerfabrikant:</translation>
    </message>
</context>
<context>
    <name>ImportPSPlugin</name>
    <message>
        <source>Import &amp;EPS/PS...</source>
        <translation>&amp;EPS/PS importeren...</translation>
    </message>
    <message>
        <source>Imports EPS Files</source>
        <translation>EPS bestanden importeren</translation>
    </message>
    <message>
        <source>Imports most EPS files into the current document,
converting their vector data into Scribus objects.</source>
        <translation>Importeert de meeste EPS bestanden naar het huidige document,
zet de vectordata over naar Scribus objecten.</translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation type="obsolete">Postscript</translation>
    </message>
    <message>
        <source>PDF</source>
        <translation>PDF</translation>
    </message>
</context>
<context>
    <name>InsPage</name>
    <message>
        <source>Insert Page</source>
        <translation>Pagina invoegen</translation>
    </message>
    <message>
        <source>Page(s)</source>
        <translation>pagina&apos;s</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation>voor pagina</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation>na pagina</translation>
    </message>
    <message>
        <source>at End</source>
        <translation>aan het eind</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normaal</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation>&amp;Invoegen</translation>
    </message>
    <message>
        <source>Master Pages</source>
        <translation>Sjablonen</translation>
    </message>
    <message>
        <source>&amp;Master Page:</source>
        <translation>&amp;Sjabloon:</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Paginagrootte</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Grootte:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Aangepast</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Orië&amp;ntatie:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Staand</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Liggend</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Breedte:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Hoogte:</translation>
    </message>
    <message>
        <source>Move Objects with their Page</source>
        <translation>Verplaats objecten met hun pagina</translation>
    </message>
</context>
<context>
    <name>InsertTable</name>
    <message>
        <source>Insert Table</source>
        <translation>Tabel invoegen</translation>
    </message>
    <message>
        <source>Number of rows:</source>
        <translation>Aantal rijen:</translation>
    </message>
    <message>
        <source>Number of columns:</source>
        <translation>Aantal kolommen:</translation>
    </message>
</context>
<context>
    <name>JavaDocs</name>
    <message>
        <source>Edit JavaScripts</source>
        <translation>JavaScripts bewerken</translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation>B&amp;ewerken...</translation>
    </message>
    <message>
        <source>&amp;Add...</source>
        <translation>&amp;Toevoegen...</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Sluiten&amp;Sluiten</translation>
    </message>
    <message>
        <source>&amp;New Script:</source>
        <translation>&amp;Nieuw script:</translation>
    </message>
    <message>
        <source>New Script</source>
        <translation>Nieuw script</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Nee</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Ja</translation>
    </message>
    <message>
        <source>Do you really want to delete this script?</source>
        <translation>Wilt u dit script werkelijk verwijderen?</translation>
    </message>
    <message>
        <source>Adds a new Script, predefines a function with the same name. If you want to use this script as an &quot;Open Action&quot; script be sure not to change the name of the function.</source>
        <translation>Voegt een nieuw Script toe, benoemt een functie met dezelfde naam. Als u dit script als een &quot;Open Actie&quot; script wilt gebruiken, verander dan de naam van de functie.</translation>
    </message>
</context>
<context>
    <name>KeyManager</name>
    <message>
        <source>Action</source>
        <translation>Actie</translation>
    </message>
    <message>
        <source>Current Key</source>
        <translation>Huidige toets</translation>
    </message>
    <message>
        <source>Select a Key for this Action</source>
        <translation>Selecteer een toets voor deze actie</translation>
    </message>
    <message>
        <source>&amp;No Key</source>
        <translation>&amp;Geen toets</translation>
    </message>
    <message>
        <source>&amp;User Defined Key</source>
        <translation>Gebr&amp;uikersgedefiniëerd</translation>
    </message>
    <message>
        <source>ALT+SHIFT+T</source>
        <translation>Alt+Shift+T</translation>
    </message>
    <message>
        <source>Set &amp;Key</source>
        <translation>&amp;Toets instellen</translation>
    </message>
    <message>
        <source>Alt</source>
        <translation>Alt</translation>
    </message>
    <message>
        <source>Ctrl</source>
        <translation>Ctrl</translation>
    </message>
    <message>
        <source>Shift</source>
        <translation>Shift</translation>
    </message>
    <message>
        <source>Shift+</source>
        <translation>Shift+</translation>
    </message>
    <message>
        <source>Alt+</source>
        <translation>Alt+</translation>
    </message>
    <message>
        <source>Ctrl+</source>
        <translation>Ctrl+</translation>
    </message>
    <message>
        <source>Loadable Shortcut Sets</source>
        <translation>Laadbare sneltoetssets</translation>
    </message>
    <message>
        <source>&amp;Load</source>
        <translation>&amp;Openen</translation>
    </message>
    <message>
        <source>&amp;Import...</source>
        <translation>&amp;Importeren...</translation>
    </message>
    <message>
        <source>&amp;Export...</source>
        <translation>&amp;Exporteren...</translation>
    </message>
    <message>
        <source>&amp;Reset</source>
        <translation>He&amp;rstel</translation>
    </message>
    <message>
        <source>Keyboard shortcut sets available to load</source>
        <translation>Toetsenbord sneltoetssets beschikbaar om te laden</translation>
    </message>
    <message>
        <source>Load the selected shortcut set</source>
        <translation>Laad de geselecteerde sneltoetsset</translation>
    </message>
    <message>
        <source>Import a shortcut set into the current configuration</source>
        <translation>Importeer een sneltoetsset in de huidige configuratie</translation>
    </message>
    <message>
        <source>Export the current shortcuts into an importable file</source>
        <translation>Exporteer de hidige sneltoetsen naar een importeerbaar bestand</translation>
    </message>
    <message>
        <source>Reload the default Scribus shortcuts</source>
        <translation>Herlaad de standaard Scribus sneltoetsen</translation>
    </message>
    <message>
        <source>Key Set XML Files (*.ksxml)</source>
        <translation>Key Set XML bestanden (*.ksxml)</translation>
    </message>
    <message>
        <source>This key sequence is already in use</source>
        <translation>Deze toetsenvolgorde is al in gebruik</translation>
    </message>
    <message>
        <source>Meta</source>
        <translation>Meta</translation>
    </message>
    <message>
        <source>Meta+</source>
        <translation>Meta+</translation>
    </message>
</context>
<context>
    <name>LayerPalette</name>
    <message>
        <source>Layers</source>
        <translation>Lagen</translation>
    </message>
    <message>
        <source>Delete Layer</source>
        <translation>Laag verwijderen</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <source>Do you want to delete all objects on this layer too?</source>
        <translation>Wilt u ook alle objecten op deze laag verwijderen?</translation>
    </message>
    <message>
        <source>Add a new layer</source>
        <translation>Voeg een nieuwe laag toe</translation>
    </message>
    <message>
        <source>Delete layer</source>
        <translation>Laag verwijderen</translation>
    </message>
    <message>
        <source>Raise layer</source>
        <translation>Verhoog laag</translation>
    </message>
    <message>
        <source>Lower layer</source>
        <translation>Verlaag laag</translation>
    </message>
</context>
<context>
    <name>LineFormate</name>
    <message>
        <source>Edit Line Styles</source>
        <translation>Lijnstijlen bewerken</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nieuw</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>B&amp;ewerken</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;upliceren</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>Op&amp;slaan</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Kopie van %1</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation>Nieuwe stijl</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Nee</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Ja</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documenten (*.sla *.sla.gz *.scd *.scd.gz);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documenten (*.sla *.scd);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importeren</translation>
    </message>
    <message>
        <source>Do you really want to delete this style?</source>
        <translation>Wilt u deze stijl werkelijk verwijderen?</translation>
    </message>
</context>
<context>
    <name>LineStyleWBase</name>
    <message>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation>Lijndikte:</translation>
    </message>
</context>
<context>
    <name>LineStyleWidget</name>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>Plat eind</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation>Vierkant eind</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation>Rond eind</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation>Verstekverbinding</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Schuine verbinding</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation>Ronde verbinding</translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation>Lijn</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation>Gestreepte lijn</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation>Stippellijn</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation>Streep-stip lijn</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation>Streep-stip-stip lijn</translation>
    </message>
</context>
<context>
    <name>LoadSavePlugin</name>
    <message>
        <source>All Files (*)</source>
        <translation>Alle bestanden (*)</translation>
    </message>
</context>
<context>
    <name>LoremManager</name>
    <message>
        <source>Select Lorem Ipsum</source>
        <translation>Selecteer Lorem Ipsum</translation>
    </message>
    <message>
        <source>Author:</source>
        <translation>Auteur:</translation>
    </message>
    <message>
        <source>Get More:</source>
        <translation>Meer verkrijgen:</translation>
    </message>
    <message>
        <source>XML File:</source>
        <translation>XML bestand:</translation>
    </message>
    <message>
        <source>Lorem Ipsum</source>
        <translation>Lorem Ipsum</translation>
    </message>
    <message>
        <source>Paragraphs:</source>
        <translation>Alinea&apos;s:</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Atl+O</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
</context>
<context>
    <name>MarginDialog</name>
    <message>
        <source>Manage Page Properties</source>
        <translation>Paginaeigenschappen bewerken</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Paginagrootte</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Grootte:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Aangepast</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Orië&amp;ntatie:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Staand</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Liggend</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Breedte:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Hoogte:</translation>
    </message>
    <message>
        <source>Move Objects with their Page</source>
        <translation>Verplaats objecten met hun pagina</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Type:</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Marge hulplijnen</translation>
    </message>
</context>
<context>
    <name>MarginWidget</name>
    <message>
        <source>&amp;Bottom:</source>
        <translation>On&amp;der:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>&amp;Boven:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>&amp;Rechts:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Links:</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Afstand tussen de bovenkant van de marge en de rand van het papier</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Afstand tussen de onderkant van de marge en de rand van het papier</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation>B&amp;innenkant:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation>B&amp;uitenkant:</translation>
    </message>
    <message>
        <source>Preset Layouts:</source>
        <translation>Vooringestelde Layouts:</translation>
    </message>
    <message>
        <source>Apply margin settings to all pages</source>
        <translation>De geselecteerde margeinstellingen op alle pagina&apos;s toepassen</translation>
    </message>
    <message>
        <source>Apply the margin changes to all existing pages in the document</source>
        <translation>De geselecteerde margeinstellingen op alle bestaande pagina&apos;s van het document toepassen</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page. If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Afstand tussen de rand van de pagina en de linkermarge. Als Tegenoverliggende Pagina&apos;s is geselecteerd, kan deze marge worden gebruikt om de juiste bindmarge te verkrijgen</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page. If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Afstand tussen de rand van de pagina en de rechtermarge. Als Tegenoverliggende Pagina&apos;s is geselecteerd, kan deze marge worden gebruikt om de juiste bindmarge te verkrijgen</translation>
    </message>
    <message>
        <source>Printer Margins...</source>
        <translation>Printer marges...</translation>
    </message>
    <message>
        <source>Import the margins for the selected page size from the available printers.</source>
        <translation>Importeer de marges voor de geselecteerde paginagrootte bij de beschikbare printers.</translation>
    </message>
</context>
<context>
    <name>MasterPagesPalette</name>
    <message>
        <source>Edit Master Pages</source>
        <translation>Bewerk sjabloon</translation>
    </message>
    <message>
        <source>Do you really want to delete this master page?</source>
        <translation>Wilt u dit sjabloon werkelijk verwijderen?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Nee</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Ja</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Naam:</translation>
    </message>
    <message>
        <source>New Master Page</source>
        <translation>Nieuw sjabloon</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Kopie van %1</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Naam:</translation>
    </message>
    <message>
        <source>New MasterPage</source>
        <translation>Nieuw sjabloon</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation>Kopie #%1 van</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normaal</translation>
    </message>
    <message>
        <source>Duplicate the selected master page</source>
        <translation>Dubliceer het geselecteerd sjabloon</translation>
    </message>
    <message>
        <source>Delete the selected master page</source>
        <translation>Verwijder het geselecteerde sjabloon</translation>
    </message>
    <message>
        <source>Add a new master page</source>
        <translation>Voeg een nieuw sjabloon toe</translation>
    </message>
    <message>
        <source>Import master pages from another document</source>
        <translation>Importeer sjablonen vanuit een ander document</translation>
    </message>
    <message>
        <source>New Master Page %1</source>
        <translation>Nieuw sjabloon %1</translation>
    </message>
    <message>
        <source>Unable to Rename Master Page</source>
        <translation>Niet in staat om sjabloon te hernoemen</translation>
    </message>
    <message>
        <source>The Normal page is not allowed to be renamed.</source>
        <translation>De standaard pagina is niet hernoembaar.</translation>
    </message>
    <message>
        <source>Rename Master Page</source>
        <translation>Hernoem sjabloon</translation>
    </message>
    <message>
        <source>New Name:</source>
        <translation>Nieuwe naam:</translation>
    </message>
</context>
<context>
    <name>Mdup</name>
    <message>
        <source>Multiple Duplicate</source>
        <translation>Meervoudig dupliceren</translation>
    </message>
    <message>
        <source>&amp;Number of Copies:</source>
        <translation>Aa&amp;ntal kopieën:</translation>
    </message>
    <message>
        <source>&amp;Horizontal Shift:</source>
        <translation>&amp;Horizontale verplaatsing:</translation>
    </message>
    <message>
        <source>&amp;Vertical Shift:</source>
        <translation>&amp;Verticale verplaatsing:</translation>
    </message>
</context>
<context>
    <name>Measurements</name>
    <message>
        <source>Distances</source>
        <translation>Afstanden</translation>
    </message>
    <message>
        <source>X1:</source>
        <translation>X1:</translation>
    </message>
    <message>
        <source>Y1:</source>
        <translation>Y1:</translation>
    </message>
    <message>
        <source>X2:</source>
        <translation>X2:</translation>
    </message>
    <message>
        <source>Y2:</source>
        <translation>Y2:</translation>
    </message>
    <message>
        <source>DX:</source>
        <translation>dX:</translation>
    </message>
    <message>
        <source>DY:</source>
        <translation>dY:</translation>
    </message>
    <message>
        <source>Angle:</source>
        <translation>Hoek:</translation>
    </message>
    <message>
        <source>Length:</source>
        <translation>Lengte:</translation>
    </message>
    <message>
        <source>pt</source>
        <translation>pt</translation>
    </message>
</context>
<context>
    <name>MergeDoc</name>
    <message>
        <source>Import Page(s)</source>
        <translation>Pagina(&apos;s) importeren</translation>
    </message>
    <message>
        <source> from 0</source>
        <translation>van 0</translation>
    </message>
    <message>
        <source>Create Page(s)</source>
        <translation>Pagina(&apos;s) aanmaken</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documenten (*.sla *.sla.gz *.scd *.scd.gz);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documenten (*.sla *.scd);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source> from %1</source>
        <translation>van %1</translation>
    </message>
    <message>
        <source>&amp;From Document:</source>
        <translation>&amp;Van document:</translation>
    </message>
    <message>
        <source>Chan&amp;ge...</source>
        <translation>Wijzi&amp;gen...</translation>
    </message>
    <message>
        <source>&amp;Import Page(s):</source>
        <translation>Pagina(&apos;s) &amp;importeren:</translation>
    </message>
    <message>
        <source>Before Page</source>
        <translation>Voor pagina</translation>
    </message>
    <message>
        <source>After Page</source>
        <translation>Na pagina</translation>
    </message>
    <message>
        <source>At End</source>
        <translation>Aan het einde</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importeren</translation>
    </message>
    <message>
        <source>Import Master Page</source>
        <translation>Sjabloon importeren</translation>
    </message>
    <message>
        <source>&amp;Import Master Page</source>
        <translation>Sjabloon &amp;importeren</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens import where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
        <translation>Voer hier de paginanummer(s) in die u wilt importeren,bijvoorbeeld 1,3,5 of 1-5 (pag. 1 t/m 5 exporteren). Een * staat voor alle pagina&apos;s.</translation>
    </message>
</context>
<context>
    <name>MissingFont</name>
    <message>
        <source>Missing Font</source>
        <translation>Missend font</translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation>Font %1 is niet geïnstalleerd.</translation>
    </message>
    <message>
        <source>Use</source>
        <translation>Gebruik</translation>
    </message>
    <message>
        <source>instead</source>
        <translation>in plaats van</translation>
    </message>
</context>
<context>
    <name>MovePages</name>
    <message>
        <source>Move Pages</source>
        <translation>Pagina&apos;s verplaatsen</translation>
    </message>
    <message>
        <source>Copy Page</source>
        <translation>Pagina kopiëren</translation>
    </message>
    <message>
        <source>Move Page(s):</source>
        <translation>Pagina(&apos;s) verplaatsen:</translation>
    </message>
    <message>
        <source>Move Page(s)</source>
        <translation>Pagina(&apos;s) verplaatsen</translation>
    </message>
    <message>
        <source>Before Page</source>
        <translation>Voor pagina</translation>
    </message>
    <message>
        <source>After Page</source>
        <translation>Na pagina</translation>
    </message>
    <message>
        <source>At End</source>
        <translation>Aan het einde</translation>
    </message>
    <message>
        <source>To:</source>
        <translation>tot:</translation>
    </message>
    <message>
        <source>Number of copies:</source>
        <translation>Aantal Kopieën:</translation>
    </message>
</context>
<context>
    <name>Mpalette</name>
    <message>
        <source>Properties</source>
        <translation>Eigenschappen</translation>
    </message>
    <message>
        <source>X, Y, &amp;Z</source>
        <translation>X, Y, &amp;Z</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>&amp;Vorm</translation>
    </message>
    <message>
        <source>&amp;Text</source>
        <translation>&amp;Tekst</translation>
    </message>
    <message>
        <source>&amp;Image</source>
        <translation>Afbeeld&amp;ing</translation>
    </message>
    <message>
        <source>&amp;Line</source>
        <translation>&amp;Lijn</translation>
    </message>
    <message>
        <source>&amp;Colors</source>
        <translation>&amp;Kleuren</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <source>Geometry</source>
        <translation>Geometrie</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>&amp;X-pos:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y-pos:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Breedte:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Hoogte:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Rotatie:</translation>
    </message>
    <message>
        <source>Basepoint:</source>
        <translation>Basispunt:</translation>
    </message>
    <message>
        <source>Level</source>
        <translation>Niveau</translation>
    </message>
    <message>
        <source>Shape:</source>
        <translation>Vorm:</translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation>Vorm b&amp;ewerken...</translation>
    </message>
    <message>
        <source>R&amp;ound
Corners:</source>
        <translation>R&amp;onde
hoeken:</translation>
    </message>
    <message>
        <source>Distance of Text</source>
        <translation>Afstand tot tekst</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>Kolo&amp;mmen:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>Tussen&amp;ruimte:</translation>
    </message>
    <message>
        <source>To&amp;p:</source>
        <translation>&amp;Boven:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>On&amp;der:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Links:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>&amp;Rechts:</translation>
    </message>
    <message>
        <source>T&amp;abulators...</source>
        <translation>T&amp;abulators...</translation>
    </message>
    <message>
        <source>Path Text Properties</source>
        <translation>Tekstpad-eigenschappen</translation>
    </message>
    <message>
        <source>Show Curve</source>
        <translation>Curve weergeven</translation>
    </message>
    <message>
        <source>Start Offset:</source>
        <translation>Beginafstand:</translation>
    </message>
    <message>
        <source>Distance from Curve:</source>
        <translation>Afstand van curve:</translation>
    </message>
    <message>
        <source>Text &amp;Flows Around Frame</source>
        <translation>Tekst &amp;loopt om frame</translation>
    </message>
    <message>
        <source>Use &amp;Bounding Box</source>
        <translation>&amp;Bounding Box gebruiken</translation>
    </message>
    <message>
        <source>&amp;Use Contour Line</source>
        <translation>Contourlijn gebr&amp;uiken</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>St&amp;yle:</source>
        <translation>Sti&amp;jl:</translation>
    </message>
    <message>
        <source>Lan&amp;guage:</source>
        <translation>&amp;Taal:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation>&amp;Vrije schaal</translation>
    </message>
    <message>
        <source>X-Sc&amp;ale:</source>
        <translation>&amp;X-schaal:</translation>
    </message>
    <message>
        <source>Y-Scal&amp;e:</source>
        <translation>&amp;Y-schaal:</translation>
    </message>
    <message>
        <source>Scale &amp;To Frame Size</source>
        <translation>Schalen naar &amp;framegrootte</translation>
    </message>
    <message>
        <source>P&amp;roportional</source>
        <translation>&amp;Proportioneel</translation>
    </message>
    <message>
        <source>Input Profile:</source>
        <translation>Invoerprofiel:</translation>
    </message>
    <message>
        <source>Rendering Intent:</source>
        <translation>Rendering intent:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Perceptueel</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Relatief colorimetrisch</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Verzadiging</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Absoluut colorimetrisch</translation>
    </message>
    <message>
        <source>Left Point</source>
        <translation>Linker punt</translation>
    </message>
    <message>
        <source>End Points</source>
        <translation>Eindpunt</translation>
    </message>
    <message>
        <source>&amp;Basepoint:</source>
        <translation>&amp;Basispunt:</translation>
    </message>
    <message>
        <source>T&amp;ype of Line:</source>
        <translation>Lijnt&amp;ype:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation>Linedi&amp;kte:</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation>Verstek</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Schuin</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation>Rond</translation>
    </message>
    <message>
        <source>Ed&amp;ges:</source>
        <translation>&amp;Hoeken:</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>Plat</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation>Vierkant</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation>Rond</translation>
    </message>
    <message>
        <source>&amp;Endings:</source>
        <translation>&amp;Einden:</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation>Geen stijl</translation>
    </message>
    <message>
        <source>Cell Lines</source>
        <translation>Cellijnen</translation>
    </message>
    <message>
        <source>Line at Top</source>
        <translation>Bovenlijn</translation>
    </message>
    <message>
        <source>Line at the Left</source>
        <translation>Linkerlijn</translation>
    </message>
    <message>
        <source>Line at the Right </source>
        <translation>Rechterlijn</translation>
    </message>
    <message>
        <source>Line at Bottom</source>
        <translation>Onderlijn</translation>
    </message>
    <message>
        <source>Name of selected object</source>
        <translation>Naam van geselecteerd object</translation>
    </message>
    <message>
        <source>Horizontal position of current basepoint</source>
        <translation>Horizontale positie van het huidige basispunt</translation>
    </message>
    <message>
        <source>Vertical position of current basepoint</source>
        <translation>Verticale positie van het huidige basispunt</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>Breedte</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>Hoogte</translation>
    </message>
    <message>
        <source>Rotation of object at current basepoint</source>
        <translation>Rotatie van object op huidig basispunt</translation>
    </message>
    <message>
        <source>Point from which measurements or rotation angles are referenced</source>
        <translation>Punt waarvandaan de rotatiehoeken worden berekend</translation>
    </message>
    <message>
        <source>Select top left for basepoint</source>
        <translation>Linksboven als basispunt gebruiken</translation>
    </message>
    <message>
        <source>Select top right for basepoint</source>
        <translation>Rechtsboven als basispunt gebruiken</translation>
    </message>
    <message>
        <source>Select bottom left for basepoint</source>
        <translation>Linksonder als basispunt gebruiken</translation>
    </message>
    <message>
        <source>Select bottom right for basepoint</source>
        <translation>Rechtsonder als basispunt gebruiken</translation>
    </message>
    <message>
        <source>Select center for basepoint</source>
        <translation>Midden als basispunt gebruiken</translation>
    </message>
    <message>
        <source>Flip Horizontal</source>
        <translation>Horizontaal spiegelen</translation>
    </message>
    <message>
        <source>Flip Vertical</source>
        <translation>Verticaal spiegelen</translation>
    </message>
    <message>
        <source>Move one level up</source>
        <translation>Een niveau hoger</translation>
    </message>
    <message>
        <source>Move one level down</source>
        <translation>Een niveau lager</translation>
    </message>
    <message>
        <source>Move to front</source>
        <translation>Naar voorgrond</translation>
    </message>
    <message>
        <source>Move to back</source>
        <translation>Naar achtergrond</translation>
    </message>
    <message>
        <source>Indicates the level the object is on, 0 means the object is at the bottom</source>
        <translation>Geeft weer op welk niveau dit opject is, 0 betekent onderaan</translation>
    </message>
    <message>
        <source>Lock or unlock the object</source>
        <translation>Object vergrendelen of losmaken</translation>
    </message>
    <message>
        <source>Lock or unlock the size of the object</source>
        <translation>Grootte van het object vergrendelen of losmaken</translation>
    </message>
    <message>
        <source>Enable or disable printing of the object</source>
        <translation type="obsolete">Dit object wel of niet afdrukken</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation>Font van geselecteerde tekst of object</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Tekengrootte</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation>Schaalbreedte van tekens</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation>Verzadiging van kleur van tekstlijnen</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation>Verzadiging van kleur van tekstinvulling</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation>Regelspatiëring</translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation>Stijl van huidige alinea</translation>
    </message>
    <message>
        <source>Hyphenation language of frame</source>
        <translation>Taalinstelling (voor afbreken) van frame</translation>
    </message>
    <message>
        <source>Change settings for left or end points</source>
        <translation>Instellingen voor linkerpunt of eindpunt aanpassen</translation>
    </message>
    <message>
        <source>Pattern of line</source>
        <translation>Lijnpatroon</translation>
    </message>
    <message>
        <source>Thickness of line</source>
        <translation>Lijndikte</translation>
    </message>
    <message>
        <source>Type of line joins</source>
        <translation>Type lijnverbindingen</translation>
    </message>
    <message>
        <source>Type of line end</source>
        <translation>Type lijneinden</translation>
    </message>
    <message>
        <source>Line style of current object</source>
        <translation>Lijnstijl van huidig object</translation>
    </message>
    <message>
        <source>Choose the shape of frame...</source>
        <translation>Vorm van het frame kiezen...</translation>
    </message>
    <message>
        <source>Edit shape of the frame...</source>
        <translation>Vorm van het frame bewerken...</translation>
    </message>
    <message>
        <source>Set radius of corner rounding</source>
        <translation>Straal van ronde hoeken instellen</translation>
    </message>
    <message>
        <source>Number of columns in text frame</source>
        <translation>Aantal kolommen in tekstframe</translation>
    </message>
    <message>
        <source>Switches between Gap or Column width</source>
        <translation>Schakelt tussen Tussenruimte of Kolombreedte</translation>
    </message>
    <message>
        <source>Distance between columns</source>
        <translation>Afstand tussen kolommen</translation>
    </message>
    <message>
        <source>Distance of text from top of frame</source>
        <translation>Afstand van tekst tot bovenkant frame</translation>
    </message>
    <message>
        <source>Distance of text from bottom of frame</source>
        <translation>Afstand van tekst tot onderkant frame</translation>
    </message>
    <message>
        <source>Distance of text from left of frame</source>
        <translation>Afstand van tekst tot linkerkant frame</translation>
    </message>
    <message>
        <source>Distance of text from right of frame</source>
        <translation>Afstand van tekst tot rechterkant frame</translation>
    </message>
    <message>
        <source>Edit tab settings of text frame...</source>
        <translation>Tabinstellingen van tekstframe bewerken...</translation>
    </message>
    <message>
        <source>Allow the image to be a different size to the frame</source>
        <translation>Toestaan dat een afbeelding een andere grootte heeft dan het frame</translation>
    </message>
    <message>
        <source>Horizontal offset of image within frame</source>
        <translation>Horizontale afstand van afbeelding in frame</translation>
    </message>
    <message>
        <source>Vertical offset of image within frame</source>
        <translation>Verticale afstand van afbeelding in frame</translation>
    </message>
    <message>
        <source>Resize the image horizontally</source>
        <translation>De afbeelding horizontaal schalen</translation>
    </message>
    <message>
        <source>Resize the image vertically</source>
        <translation>De afbeelding verticaal schalen</translation>
    </message>
    <message>
        <source>Keep the X and Y scaling the same</source>
        <translation>X- en Y-schaling gelijk houden</translation>
    </message>
    <message>
        <source>Keep the aspect ratio</source>
        <translation>Beeldverhouding behouden</translation>
    </message>
    <message>
        <source>Make the image fit within the size of the frame</source>
        <translation>Afbeelding passend maken</translation>
    </message>
    <message>
        <source>Use image proportions rather than those of the frame</source>
        <translation>De afbeeldingsverhoudingen gebruiken in plaats van die van het frame</translation>
    </message>
    <message>
        <source>Source profile of the image</source>
        <translation>Bronprofiel van de afbeelding</translation>
    </message>
    <message>
        <source>Rendering intent for the image</source>
        <translation>Rendering intent van de afbeelding</translation>
    </message>
    <message>
        <source>&amp;X1:</source>
        <translation>&amp;X1:</translation>
    </message>
    <message>
        <source>X&amp;2:</source>
        <translation>X&amp;2:</translation>
    </message>
    <message>
        <source>Y&amp;1:</source>
        <translation>Y&amp;1:</translation>
    </message>
    <message>
        <source>&amp;Y2:</source>
        <translation>&amp;Y2:</translation>
    </message>
    <message>
        <source>Column width</source>
        <translation>Kolombreedte</translation>
    </message>
    <message>
        <source>Right to Left Writing</source>
        <translation>Rechts naar links scrijven</translation>
    </message>
    <message>
        <source>Start Arrow:</source>
        <translation>Begin pijl:</translation>
    </message>
    <message>
        <source>End Arrow:</source>
        <translation>Eind pijl:</translation>
    </message>
    <message>
        <source>Fixed Linespacing</source>
        <translation>Vaste regelspatiëring</translation>
    </message>
    <message>
        <source>Automatic Linespacing</source>
        <translation>Automatische regelspatiëring</translation>
    </message>
    <message>
        <source>Align to Baseline Grid</source>
        <translation>Aan de basislijn van het raster uitlijnen</translation>
    </message>
    <message>
        <source>Actual X-DPI:</source>
        <translation>Werkelijk X-DPI:</translation>
    </message>
    <message>
        <source>Actual Y-DPI:</source>
        <translation>Werkelijk Y-DPI:</translation>
    </message>
    <message>
        <source>Offset to baseline of characters</source>
        <translation>Offset ten opzichte van basislijn tekens</translation>
    </message>
    <message>
        <source>Scaling height of characters</source>
        <translation>Schaalhoogte van tekens</translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation>Handmatige tracking</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.&lt;br/&gt;Please choose another.</source>
        <translation>Naam &quot;%1&quot; is niet uniek.&lt;br/&gt;Kies een andere naam.</translation>
    </message>
    <message>
        <source>Fill Rule</source>
        <translation>Vulmethode</translation>
    </message>
    <message>
        <source>Even-Odd</source>
        <translation>Even-oneven</translation>
    </message>
    <message>
        <source>Non Zero</source>
        <translation>Niet nul</translation>
    </message>
    <message>
        <source>Color of text stroke and/or drop shadow, depending which is chosen.If both are chosen, then they share the same color.</source>
        <translation>Kleur van tekstomlijning en/of valschaduw, afhankelijk van welke is gekozen. Als beiden zijn gekozen, gebruiken ze dezelfde kleur.</translation>
    </message>
    <message>
        <source>Color of selected text. If Outline text decoration is enabled, this color will be the fill color. If Drop Shadow Text is enabled, then this will be the top most color.</source>
        <translation>Kleur van de geselecteerde tekst. Als Outline tekt decoratie is ingeschakeld, zal deze kleur de vulkleur zijn. Als Valschaduw Tekst is ingeschakeld, is dit de bovenliggende kleur.</translation>
    </message>
    <message>
        <source>Make text in lower frames flow around the object. The options below define how this is enabled.</source>
        <translation>Laat tekst in onderliggende frames rond het object lopen. De opties hieronder beschrijven hoe dit is toegepast.</translation>
    </message>
    <message>
        <source>Use the bounding box, which is always rectangular, instead of the frame&apos;s shape for text flow of text frames below the object. </source>
        <translation>Gebruik de omliggende rechthoek, in plaats van de vorm van het frame voor de tekstomloop.</translation>
    </message>
    <message>
        <source>Use a second line originally based on the frame&apos;s shape for text flow of text frames below the object. </source>
        <translation>Gebruik een tweede lijn gebaseerd om de vorm van het frame voor tekstomloop onder het object.</translation>
    </message>
    <message>
        <source>Auto</source>
        <translation>Automatisch</translation>
    </message>
    <message>
        <source>Click and hold down to select the line spacing mode.</source>
        <translation>Klik en houd ingedrukt om regelafstand modus te selecteren.</translation>
    </message>
    <message>
        <source>Enable or disable exporting of the object</source>
        <translation>Dit object wel of niet exporteren</translation>
    </message>
</context>
<context>
    <name>MultiLine</name>
    <message>
        <source>Edit Style</source>
        <translation>Stijl bewerken</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>Plat eind</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation>Vierkant eind</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation>Rond eind</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation>Verstekverbinding</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Schuine verbinding</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation>Ronde verbinding</translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation>Lijndikte:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source> pt </source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation>Ononderbroken lijn</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation>Gestreepte lijn</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation>Stippellijn</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation>Streep-stip lijn</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation>Streep-stip-stip lijn</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.&lt;br/&gt;Please choose another.</source>
        <translation>Naam &quot;%1&quot; is niet uniek.&lt;br/&gt;Kies een andere naam.</translation>
    </message>
    <message>
        <source>pt</source>
        <translation>pt</translation>
    </message>
</context>
<context>
    <name>MultiProgressDialogBase</name>
    <message>
        <source>Progress</source>
        <translation>Voortgang</translation>
    </message>
    <message>
        <source>Overall Progress:</source>
        <translation>Algehele voortgang:</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
</context>
<context>
    <name>MyPlugin</name>
    <message>
        <source>My &amp;Plugin</source>
        <translation>Mijn &amp;plug-in</translation>
    </message>
</context>
<context>
    <name>MyPluginImpl</name>
    <message>
        <source>Scribus - My Plugin</source>
        <translation>Scribus - Mijn plug-in</translation>
    </message>
    <message>
        <source>The plugin worked!</source>
        <translation>De plug-in werkt!</translation>
    </message>
</context>
<context>
    <name>NewDoc</name>
    <message>
        <source>New Document</source>
        <translation>Nieuw document</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Paginagrootte</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Grootte:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Aangepast</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Orië&amp;ntatie:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Staand</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Liggend</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Breedte:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Hoogte:</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Marge hulplijnen</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opties</translation>
    </message>
    <message>
        <source>&amp;Default Unit:</source>
        <translation>Stan&amp;daard eenheid:</translation>
    </message>
    <message>
        <source>&amp;Automatic Text Frames</source>
        <translation>&amp;Automatische tekstframes</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>&amp;Tussenruimte:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>Kolo&amp;mmen:</translation>
    </message>
    <message>
        <source>Document page size, either a standard size or a custom size</source>
        <translation>Paginagrootte, standaard of aangepast</translation>
    </message>
    <message>
        <source>Orientation of the document&apos;s pages</source>
        <translation>Oriëntatie van de pagina&apos;s van dit document</translation>
    </message>
    <message>
        <source>Width of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Breedte van de pagina&apos;s in dit document, kies &apos;Aangepast&apos; om hier een waarde in te kunnen stellen</translation>
    </message>
    <message>
        <source>Height of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Hoogte van de pagina&apos;s in dit document, kies &apos;Aangepast&apos; om hier een waarde in te kunnen stellen</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation>Standaard meeteenheid voor het bewerken van dit document</translation>
    </message>
    <message>
        <source>Create text frames automatically when new pages are added</source>
        <translation>Automatisch tekstframes aanmaken zodra nieuwe pagina&apos;s worden toegevoegd</translation>
    </message>
    <message>
        <source>Number of columns to create in automatically created text frames</source>
        <translation>Aantal kolommen dat in automatisch aangemaakte tekstframes moet worden opgenomen</translation>
    </message>
    <message>
        <source>Distance between automatically created columns</source>
        <translation>Afstand tussen de automatisch aangemaakte kolommen</translation>
    </message>
    <message>
        <source>Do not show this dialog again</source>
        <translation>Toon dit venster niet opnieuw</translation>
    </message>
    <message>
        <source>Initial number of pages of the document</source>
        <translation>Gewenst aantal pagina&apos;s voor het document</translation>
    </message>
    <message>
        <source>N&amp;umber of Pages:</source>
        <translation>&amp;Aantal pagina&apos;s:</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>&amp;New Document</source>
        <translation>&amp;Nieuw document</translation>
    </message>
    <message>
        <source>Open &amp;Existing Document</source>
        <translation>Open B&amp;estaand document</translation>
    </message>
    <message>
        <source>Open Recent &amp;Document</source>
        <translation>Open recent &amp;document</translation>
    </message>
</context>
<context>
    <name>NewFromTemplatePlugin</name>
    <message>
        <source>New &amp;from Template...</source>
        <translation>Nieuw van &amp;sjabloon...</translation>
    </message>
    <message>
        <source>Load documents with predefined layout</source>
        <translation>Laad documenten met vooringestelde layout</translation>
    </message>
    <message>
        <source>Start a document from a template made by other users or yourself (f.e. for documents you have a constant style).</source>
        <translation>Begin een document vanuit een sjabloon gemaakt door anderen of uzelf.(zodat u meerdere documenten in dezelfde stijl kunt maken).</translation>
    </message>
</context>
<context>
    <name>NodePalette</name>
    <message>
        <source>Nodes</source>
        <translation>Knooppunten</translation>
    </message>
    <message>
        <source>&amp;Absolute Coordinates</source>
        <translation>&amp;Absolute coördinaten</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>&amp;X-pos:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>&amp;Y-pos:</translation>
    </message>
    <message>
        <source>Edit &amp;Contour Line</source>
        <translation>&amp;Contourlijn bewerken</translation>
    </message>
    <message>
        <source>&amp;Reset Contour Line</source>
        <translation>Contou&amp;rlijn opnieuw instellen</translation>
    </message>
    <message>
        <source>&amp;End Editing</source>
        <translation>B&amp;ewerking beëindigen</translation>
    </message>
    <message>
        <source>Move Nodes</source>
        <translation>Knooppunten verplaatsen</translation>
    </message>
    <message>
        <source>Move Control Points</source>
        <translation>Controlepunten verplaatsen</translation>
    </message>
    <message>
        <source>Add Nodes</source>
        <translation>Knooppunten toevoegen</translation>
    </message>
    <message>
        <source>Delete Nodes</source>
        <translation>Knooppunten verwijderen</translation>
    </message>
    <message>
        <source>Move Control Points Independently</source>
        <translation>Controlepunten onafhankelijk verplaatsen</translation>
    </message>
    <message>
        <source>Move Control Points Symmetrical</source>
        <translation>Controlepunten symmetrisch verplaatsen</translation>
    </message>
    <message>
        <source>Reset Control Points</source>
        <translation>Controlepunten opnieuw instellen</translation>
    </message>
    <message>
        <source>Reset this Control Point</source>
        <translation>Dit controlepunt opnieuw instellen</translation>
    </message>
    <message>
        <source>Open a Polygon or Cuts a Bezier Curve</source>
        <translation>Veelhoek starten of beziercurve knippen</translation>
    </message>
    <message>
        <source>Close this Bezier Curve</source>
        <translation>Deze beziercurve sluiten</translation>
    </message>
    <message>
        <source>Mirror the Path Horizontally</source>
        <translation>Pad horizontaal spiegelen</translation>
    </message>
    <message>
        <source>Mirror the Path Vertically</source>
        <translation>Pad verticaal spiegelen</translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Right</source>
        <translation>Pad horizontaal naar rechts scheeftrekken</translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Left</source>
        <translation>Pad horizontaal naar links scheeftrekken</translation>
    </message>
    <message>
        <source>Shear the Path Vertically Up</source>
        <translation>Pad verticaal omhoog scheeftrekken</translation>
    </message>
    <message>
        <source>Shear the Path Vertically Down</source>
        <translation>Pad verticaal naar beneden scheeftrekken</translation>
    </message>
    <message>
        <source>Rotate the Path Counter-Clockwise</source>
        <translation>Pad tegen de klok in roteren</translation>
    </message>
    <message>
        <source>Rotate the Path Clockwise</source>
        <translation>Pad met de klok mee roteren</translation>
    </message>
    <message>
        <source>Enlarge the Size of the Path by shown %</source>
        <translation>Pad met getoonde % verkleinen</translation>
    </message>
    <message>
        <source>Angle of Rotation</source>
        <translation>Rotatiehoek</translation>
    </message>
    <message>
        <source>Activate Contour Line Editing Mode</source>
        <translation>Contourlijnen bewerken</translation>
    </message>
    <message>
        <source>Reset the Contour Line to the Original Shape of the Frame</source>
        <translation>Contourlijnen terugzetten naar oorspronkelijke framevorm</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>When checked use coordinates relative to the page, otherwise coordinates are relative to the Object.</source>
        <translation>Als aangevinkt; gebruik coordinaten gerelateerd aan de pagina, anders relatief aan het object.</translation>
    </message>
    <message>
        <source>Shrink the Size of the Path by shown %</source>
        <translation>Verklein Pad met getoonde %</translation>
    </message>
    <message>
        <source>Reduce the Size of the Path by the shown value</source>
        <translation>Verklein het formaat van het pad me de getoonde waarde</translation>
    </message>
    <message>
        <source>Enlarge the Size of the Path by the shown value</source>
        <translation>Vergroot het formaat van het pad met de getoonde waarde</translation>
    </message>
    <message>
        <source>% to Enlarge or Shrink By</source>
        <translation>% te vergroten of te verkleinen</translation>
    </message>
    <message>
        <source>Value to Enlarge or Shrink By</source>
        <translation>Waarde om te vergroten of te verkleinen</translation>
    </message>
    <message>
        <source>to Canvas</source>
        <translation>naar canvas</translation>
    </message>
    <message>
        <source>to Page</source>
        <translation>naar pagina</translation>
    </message>
</context>
<context>
    <name>OODPlug</name>
    <message>
        <source>This document does not seem to be an OpenOffice Draw file.</source>
        <translation>Dit bestand lijkt geen OpenOffice.org Draw bestand te zijn.</translation>
    </message>
</context>
<context>
    <name>OODrawImportPlugin</name>
    <message>
        <source>Import &amp;OpenOffice.org Draw...</source>
        <translation>&amp;OpenOffice.org Draw importeren...</translation>
    </message>
    <message>
        <source>Imports OpenOffice.org Draw Files</source>
        <translation>Importeer OpenOffice.org Draw bestanden</translation>
    </message>
    <message>
        <source>Imports most OpenOffice.org Draw files into the current document, converting their vector data into Scribus objects.</source>
        <translation>Importeert de meeste OpenOffice.org Draw bestanden in het huidige document, de vectordata omzettend in Scribus objecten.</translation>
    </message>
    <message>
        <source>OpenDocument 1.0 Draw</source>
        <comment>Import/export format name</comment>
        <translation>OpenDocument 1.0 Draw</translation>
    </message>
    <message>
        <source>OpenOffice.org 1.x Draw</source>
        <comment>Import/export format name</comment>
        <translation>OpenOffice.org 1.x Draw</translation>
    </message>
    <message>
        <source>This file contains some unsupported features</source>
        <translation>Dit bestand bevat enkele niet ondersteunde functies</translation>
    </message>
</context>
<context>
    <name>OdtDialog</name>
    <message>
        <source>OpenDocument Importer Options</source>
        <translation>OpenDocument importeeropties</translation>
    </message>
    <message>
        <source>Overwrite Paragraph Styles</source>
        <translation>Overschrijf alineastijlen</translation>
    </message>
    <message>
        <source>Enabling this will overwrite existing styles in the current Scribus document</source>
        <translation>Hiermee worden bestaande stijlen in het huidige Scribus document overschreven</translation>
    </message>
    <message>
        <source>Merge Paragraph Styles</source>
        <translation>Voeg alineastijlen samen</translation>
    </message>
    <message>
        <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document&apos;s styles are named differently.</source>
        <translation>Voeg de alineastijl samen op basis van attributen. Dit resulteert in een minder aantal op elkaar lijkende alineastijlen, zelfs als de originele stijlen anders zijn genoemd.</translation>
    </message>
    <message>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation>Documentnaam als prefix voor alineastijlen gebruiken</translation>
    </message>
    <message>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation>Voeg documtennaam toe aan de alineastijlnaam in Scribus.</translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation>Deze vraag niet meer stellen</translation>
    </message>
    <message>
        <source>Make these settings the default and do not prompt again when importing an OASIS OpenDocument.</source>
        <translation>Maak deze instellingen standaard, vraag niet opnieuw bij importeren van een OASIS OpenDocument.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
</context>
<context>
    <name>OldScribusFormat</name>
    <message>
        <source>Scribus Document</source>
        <translation>Scribus document</translation>
    </message>
    <message>
        <source>Scribus 1.2.x Document</source>
        <translation>Scribus 1.2.x document</translation>
    </message>
</context>
<context>
    <name>OutlineValues</name>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Linewidth</source>
        <translation>Lijndikte</translation>
    </message>
</context>
<context>
    <name>PDFExportDialog</name>
    <message>
        <source>Save as PDF</source>
        <translation>Opslaan als PDF</translation>
    </message>
    <message>
        <source>O&amp;utput to File:</source>
        <translation>&amp;Uitvoeren naar bestand:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation>Wijzige&amp;n...</translation>
    </message>
    <message>
        <source>Output one file for eac&amp;h page</source>
        <translation>Uitvoeren van &amp;een bestand per pagina</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>Op&amp;slaan</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Opslaan als</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>PDF-bestanden (*.pdf);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>This enables exporting one individually named PDF file for each page in the document. Page numbers are added automatically. This is most useful for imposing PDF for commercial printing.</source>
        <translation>Hiermee wordt van elke pagina van het een afzonderlijk genummerd PDF bestand gemaakt. Dit is een bruikbare methode voor maken van plaatsbare PDF&apos;s voor commercieel drukwerk.</translation>
    </message>
    <message>
        <source>The save button will be disabled if you are trying to export PDF/X-3 and the info string is missing from the PDF/X-3 tab.</source>
        <translation>De Opslaan button wordt uitgeschakeld bij export naar PDF/X3 als de info string ontbreekt in de PDF/X3 tab.</translation>
    </message>
</context>
<context>
    <name>PDFlib</name>
    <message>
        <source>Saving PDF</source>
        <translation>Opslaan als PDF</translation>
    </message>
    <message>
        <source>Exporting Master Pages:</source>
        <translation>Exporteer sjabloon:</translation>
    </message>
    <message>
        <source>Exporting Pages:</source>
        <translation>Exporteer pagina&apos;s:</translation>
    </message>
    <message>
        <source>Exporting Items on Current Page:</source>
        <translation>Exporteer items op huidige pagina:</translation>
    </message>
    <message>
        <source>A write error occured, please check available disk space</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PPreview</name>
    <message>
        <source>Print Preview</source>
        <translation>Afdrukvoorbeeld</translation>
    </message>
    <message>
        <source>Display Trans&amp;parency</source>
        <translation>Trans&amp;parantie weergeven</translation>
    </message>
    <message>
        <source>&amp;Under Color Removal</source>
        <translation>Onderliggende kle&amp;uren verwijderen</translation>
    </message>
    <message>
        <source>&amp;Display CMYK</source>
        <translation>CMYK &amp;weergeven</translation>
    </message>
    <message>
        <source>&amp;C</source>
        <translation>&amp;C</translation>
    </message>
    <message>
        <source>&amp;M</source>
        <translation>&amp;M</translation>
    </message>
    <message>
        <source>&amp;Y</source>
        <translation>&amp;Y</translation>
    </message>
    <message>
        <source>&amp;K</source>
        <translation>&amp;K</translation>
    </message>
    <message>
        <source>Shows transparency and transparent items in your document. Requires Ghostscript 7.07 or later</source>
        <translation>Toont doorschijnende elementen in uw document. Ghostscript 7.07 of hoger is hiervoor vereist</translation>
    </message>
    <message>
        <source>Gives a print preview using simulations of generic CMYK inks, instead of RGB colors</source>
        <translation>Geeft een afdrukvoorbeeld weer met simulaties van CMYK-inkten, inplaats van RGB-kleuren</translation>
    </message>
    <message>
        <source>Enable/disable the C (Cyan) ink plate</source>
        <translation>Schakelt de C (Cyaan) inktplaat in of uit</translation>
    </message>
    <message>
        <source>Enable/disable the M (Magenta) ink plate</source>
        <translation>Schakelt de M (Magenta) inktplaat in of uit</translation>
    </message>
    <message>
        <source>Enable/disable the Y (Yellow) ink plate</source>
        <translation>Schakelt de Y (Yellow = geel) inktplaat in of uit</translation>
    </message>
    <message>
        <source>Enable/disable the K (Black) ink plate</source>
        <translation>Schakelt de K (Black = zwart) inktplaat in of uit</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Alles</translation>
    </message>
    <message>
        <source>Separation Name</source>
        <translation>Scheidingsnaam</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation>Cyaan</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation>Magenta</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation>Geel</translation>
    </message>
    <message>
        <source>Black</source>
        <translation>Zwart</translation>
    </message>
    <message>
        <source>Scaling:</source>
        <translation>Schalen:</translation>
    </message>
    <message>
        <source>Print...</source>
        <translation>Afdrukken...</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis. UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>Een manier om uit cyaan, geel en magenta samengestelde tonen door zwarte tonen te vervangen. UCR heeft het meeste effect op delen van afbeeldingen met neutrale of grijsachtige tonen. Gebruik hiervan kan afdrukken van bepaalde afbeeldingen verbeteren. UCR reduceert de mogelijkheid van oververzadiging met CMY inkten. </translation>
    </message>
    <message>
        <source>Resize the scale of the page.</source>
        <translation>Pas afdrukformaat aan.</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Sluiten</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Bestand</translation>
    </message>
    <message>
        <source>Enable &amp;Antialiasing</source>
        <translation>&amp;Antialiasing toepassen</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of Type 1 Fonts, TrueType Fonts, OpenType Fonts, EPS, PDF and vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation>Geeft een verbeterd beeld van Type 1 Fonts, TrueType Fonts, OpenType Fonts, EPS, PDF en vectorafbeeldingen in een preview</translation>
    </message>
</context>
<context>
    <name>PSLib</name>
    <message>
        <source>Processing Master Pages:</source>
        <translation>Verwerk sjablonen:</translation>
    </message>
    <message>
        <source>Exporting Pages:</source>
        <translation>Exporteer pagina&apos;s:</translation>
    </message>
</context>
<context>
    <name>PageItem</name>
    <message>
        <source>Image</source>
        <translation>Afbeelding</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Tekst</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Lijn</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Polygoon</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation>Polylijn</translation>
    </message>
    <message>
        <source>PathText</source>
        <translation>Tekstpad</translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation>Kopie van</translation>
    </message>
</context>
<context>
    <name>PageItemAttributes</name>
    <message>
        <source>Relates To</source>
        <translation>Relatie tot</translation>
    </message>
    <message>
        <source>Is Parent Of</source>
        <translation>Is ouder van</translation>
    </message>
    <message>
        <source>Is Child Of</source>
        <translation>Is kind van</translation>
    </message>
    <message>
        <source>None</source>
        <comment>relationship</comment>
        <translation>Geen</translation>
    </message>
</context>
<context>
    <name>PageItemAttributesBase</name>
    <message>
        <source>Page Item Attributes</source>
        <translation>Pagina item attributen</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Type</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Waarde</translation>
    </message>
    <message>
        <source>Parameter</source>
        <translation>Parameter</translation>
    </message>
    <message>
        <source>Relationship</source>
        <translation>Relatie</translation>
    </message>
    <message>
        <source>Relationship To</source>
        <translation>Relatie tot</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Toevoegen</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+T</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiëren</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+K</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>W&amp;issen</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation>Alt+I</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
</context>
<context>
    <name>PageLayouts</name>
    <message>
        <source>First Page is:</source>
        <translation>Eerste pagina is:</translation>
    </message>
    <message>
        <source>Document Layout</source>
        <translation>Document layout</translation>
    </message>
</context>
<context>
    <name>PagePalette</name>
    <message>
        <source>Double sided</source>
        <translation>Dubbelzijdig</translation>
    </message>
    <message>
        <source>Middle Right</source>
        <translation>Midden rechts</translation>
    </message>
    <message>
        <source>Drag pages or master pages onto the trashbin to delete them</source>
        <translation>Sleep pagina&apos;s of sjablonen in de prullenbak om ze te verwijderen</translation>
    </message>
    <message>
        <source>Here are all your master pages. To create a new page, drag a master page to the page view below</source>
        <translation>Hier zijn all uw sjablonen. Om een nieuwe pagina aan te maken, sleep een sjabloon naar pagina hieronder</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normaal</translation>
    </message>
    <message>
        <source>Arrange Pages</source>
        <translation>Rangschik pagina&apos;s</translation>
    </message>
    <message>
        <source>Available Master Pages:</source>
        <translation>Beschikbare sjablonen:</translation>
    </message>
    <message>
        <source>Document Pages:</source>
        <translation>Documentpagina&apos;s:</translation>
    </message>
</context>
<context>
    <name>PageSelector</name>
    <message>
        <source>%1 of %2</source>
        <translation>%1 van %2</translation>
    </message>
    <message>
        <source>%1 of %1</source>
        <translation>%1 van %1</translation>
    </message>
</context>
<context>
    <name>PageSize</name>
    <message>
        <source>Quarto</source>
        <translation>Quarto</translation>
    </message>
    <message>
        <source>Foolscap</source>
        <translation>Folio</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation>Letter (US)</translation>
    </message>
    <message>
        <source>Government Letter</source>
        <translation>Government Letter</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <source>Ledger</source>
        <translation>Tabloid</translation>
    </message>
    <message>
        <source>Executive</source>
        <translation>Executive</translation>
    </message>
    <message>
        <source>Post</source>
        <translation>Post</translation>
    </message>
    <message>
        <source>Crown</source>
        <translation>Crown</translation>
    </message>
    <message>
        <source>Large Post</source>
        <translation>Large Post</translation>
    </message>
    <message>
        <source>Demy</source>
        <translation>Demy</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation>Medium</translation>
    </message>
    <message>
        <source>Royal</source>
        <translation>Royal</translation>
    </message>
    <message>
        <source>Elephant</source>
        <translation>Elephant</translation>
    </message>
    <message>
        <source>Double Demy</source>
        <translation>Double Demy</translation>
    </message>
    <message>
        <source>Quad Demy</source>
        <translation>Quad Demy</translation>
    </message>
    <message>
        <source>STMT</source>
        <translation>STMT</translation>
    </message>
    <message>
        <source>A</source>
        <translation>A</translation>
    </message>
    <message>
        <source>B</source>
        <translation>B</translation>
    </message>
    <message>
        <source>C</source>
        <translation>C</translation>
    </message>
    <message>
        <source>D</source>
        <translation>D</translation>
    </message>
    <message>
        <source>E</source>
        <translation>E</translation>
    </message>
</context>
<context>
    <name>PicSearch</name>
    <message>
        <source>Result</source>
        <translation>Resultaat</translation>
    </message>
    <message>
        <source>Search Results for: </source>
        <translation>Zoekresultaten voor: </translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Voorbeeld</translation>
    </message>
    <message>
        <source>Select</source>
        <translation>Selecteren</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
</context>
<context>
    <name>PicStatus</name>
    <message>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <source>Path</source>
        <translation>Lokatie</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Pagina</translation>
    </message>
    <message>
        <source>Print</source>
        <translation>Afdrukken</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Status</translation>
    </message>
    <message>
        <source>Goto</source>
        <translation type="obsolete">Ga naar</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Ja</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Missing</source>
        <translation>Ontbrekend</translation>
    </message>
    <message>
        <source>Search</source>
        <translation>Zoeken</translation>
    </message>
    <message>
        <source>Cancel Search</source>
        <translation>Annuleer zoekopdracht</translation>
    </message>
    <message>
        <source>Manage Pictures</source>
        <translation type="obsolete">Afbeelingen beheren</translation>
    </message>
    <message>
        <source>Scribus - Image Search</source>
        <translation>Scribus - Afbeelding zoeken</translation>
    </message>
    <message>
        <source>The search failed: %1</source>
        <translation>De zoekopdracht is mislukt: %1</translation>
    </message>
    <message>
        <source>No images named &quot;%1&quot; were found.</source>
        <translation>Geen afbeelding genaamd &quot;%1&quot; werd gevonden.</translation>
    </message>
    <message>
        <source>Select a base directory for search</source>
        <translation>Selecteer een te doorzoeken map</translation>
    </message>
    <message>
        <source>Manage Images</source>
        <translation>Afbeelingen beheren</translation>
    </message>
    <message>
        <source>Go to</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PixmapExportPlugin</name>
    <message>
        <source>Save as &amp;Image...</source>
        <translation>Opslaan als &amp;afbeelding...</translation>
    </message>
    <message>
        <source>Export As Image</source>
        <translation>Exporteren als afbeelding</translation>
    </message>
    <message>
        <source>Exports selected pages as bitmap images.</source>
        <translation>Exporteer geselecteerde pagina&apos;s als bitmap afbeeldingen.</translation>
    </message>
</context>
<context>
    <name>PluginManager</name>
    <message>
        <source>Cannot find plugin</source>
        <comment>plugin manager</comment>
        <translation>Kan plug-in niet vinden</translation>
    </message>
    <message>
        <source>unknown error</source>
        <comment>plugin manager</comment>
        <translation>onbekende fout</translation>
    </message>
    <message>
        <source>Cannot find symbol (%1)</source>
        <comment>plugin manager</comment>
        <translation>Kan symbool (%1) niet vinden</translation>
    </message>
    <message>
        <source>Plugin: loading %1</source>
        <comment>plugin manager</comment>
        <translation>Plug-in: laadt %1</translation>
    </message>
    <message>
        <source>init failed</source>
        <comment>plugin load error</comment>
        <translation>init mislukt</translation>
    </message>
    <message>
        <source>unknown plugin type</source>
        <comment>plugin load error</comment>
        <translation>onbekend plug-in type</translation>
    </message>
    <message>
        <source>Plugin: %1 loaded</source>
        <comment>plugin manager</comment>
        <translation>Plugin: %1 geladen</translation>
    </message>
    <message>
        <source>Plugin: %1 failed to load: %2</source>
        <comment>plugin manager</comment>
        <translation>Plugin: %1 kan %2 niet laden</translation>
    </message>
</context>
<context>
    <name>PluginManagerPrefsGui</name>
    <message>
        <source>Plugin Manager</source>
        <translation>Plug-in beheerder</translation>
    </message>
    <message>
        <source>Plugin</source>
        <translation>Plug-in</translation>
    </message>
    <message>
        <source>How to run</source>
        <translation>Hoe te starten</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Type</translation>
    </message>
    <message>
        <source>Load it?</source>
        <translation>Laden?</translation>
    </message>
    <message>
        <source>Plugin ID</source>
        <translation>Plug-in ID</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Bestand</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Ja</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Nee</translation>
    </message>
    <message>
        <source>You need to restart the application to apply the changes.</source>
        <translation>Het programma dient opnieuw te worden opgestart om de verandering toe te passen.</translation>
    </message>
</context>
<context>
    <name>PolygonProps</name>
    <message>
        <source>Polygon Properties</source>
        <translation>Polygoon-eigenschappen</translation>
    </message>
</context>
<context>
    <name>PolygonWidget</name>
    <message>
        <source>Corn&amp;ers:</source>
        <translation>Ho&amp;eken:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Rotatie:</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation>&amp;Factor toepassen</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation>&amp;Factor:</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation>Aantal hoeken voor polygonen</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation>Rotatiegraden voor polygonen</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation>Convex/concaaf-factor toepassen op de vorm van polygonen</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation>Voobeeldpolygoon</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped), a positive value will make it convex</source>
        <translation>Een negatieve waarde zal de polygoon concaaf (of stervormig) maken, een positieve waarde zal het convex maken</translation>
    </message>
</context>
<context>
    <name>Preferences</name>
    <message>
        <source>Preferences</source>
        <translation>Voorkeuren</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Algemeen</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Document</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation>Hulplijnen</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation>Typografie</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation>Gereedschappen</translation>
    </message>
    <message>
        <source>Display</source>
        <translation>Tonen</translation>
    </message>
    <message>
        <source>External Tools</source>
        <translation>Externe hulpprogramma&apos;s</translation>
    </message>
    <message>
        <source>GUI</source>
        <translation>GUI</translation>
    </message>
    <message>
        <source>&amp;Theme:</source>
        <translation>S&amp;tijl:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>&amp;Wheel Jump:</source>
        <translation>Muis&amp;wiel:</translation>
    </message>
    <message>
        <source>&amp;Recent Documents:</source>
        <translation>&amp;Recente documenten:</translation>
    </message>
    <message>
        <source>Paths</source>
        <translation>Lokaties</translation>
    </message>
    <message>
        <source>&amp;Documents:</source>
        <translation>&amp;Documenten:</translation>
    </message>
    <message>
        <source>&amp;Change...</source>
        <translation>&amp;Wijzigen...</translation>
    </message>
    <message>
        <source>&amp;ICC Profiles:</source>
        <translation>&amp;ICC-profielen:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>Wijzige&amp;n...</translation>
    </message>
    <message>
        <source>&amp;Scripts:</source>
        <translation>&amp;Scripts:</translation>
    </message>
    <message>
        <source>Ch&amp;ange...</source>
        <translation>Wij&amp;zigen...</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Paginagrootte</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Aangepast</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Grootte:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Staand</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Liggend</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Orië&amp;ntatie:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Breedte:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Hoogte:</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Marge hulplijnen</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>On&amp;der:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>&amp;Boven:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>&amp;Rechts:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Links:</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation>Automatisch opslaan</translation>
    </message>
    <message>
        <source>min</source>
        <translation>min</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation>&amp;Interval:</translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation>&amp;Niet-afdrukbare gebieden in margekleur weergeven</translation>
    </message>
    <message>
        <source>&amp;Adjust Display Size</source>
        <translation>Venstergrootte &amp;aanpassen</translation>
    </message>
    <message>
        <source>&amp;Name of Executable:</source>
        <translation>&amp;Naam van uitvoerbaar programma:</translation>
    </message>
    <message>
        <source>Antialias &amp;Text</source>
        <translation>Anti-alias &amp;tekst</translation>
    </message>
    <message>
        <source>Antialias &amp;Graphics</source>
        <translation>Anti-alias &amp;grafisch</translation>
    </message>
    <message>
        <source>Image Processing Tool</source>
        <translation>Programma voor beeldbewerking</translation>
    </message>
    <message>
        <source>Name of &amp;Executable:</source>
        <translation>Naam van uitvoerbaar &amp;programma:</translation>
    </message>
    <message>
        <source>Default font size for the menus and windows</source>
        <translation>Standaardtekengrootte voor menu&apos;s en vensters</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation>Standaard meeteenheid voor het bewerken van dit document</translation>
    </message>
    <message>
        <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
        <translation>Bepaalt hoeveel regels Scribus doorschuift bij een stap van het muiswiel</translation>
    </message>
    <message>
        <source>Number of recently edited documents to show in the File menu</source>
        <translation>Bepaalt hoeveel recent geopende documenten Scribus toont in het menu Bestand</translation>
    </message>
    <message>
        <source>Default documents directory</source>
        <translation>Standaardmap voor documenten</translation>
    </message>
    <message>
        <source>Default Scripter scripts directory</source>
        <translation>Standaardmap voor Scripts</translation>
    </message>
    <message>
        <source>Default page size, either a standard size or a custom size</source>
        <translation>Standaard paginagrootte</translation>
    </message>
    <message>
        <source>Default orientation of document pages</source>
        <translation>Standaardoriëntatie van de pagina&apos;s van een document</translation>
    </message>
    <message>
        <source>Width of document pages, editable if you have chosen a custom page size</source>
        <translation>Breedte van de pagina&apos;s, kies &apos;Aangepast&apos; om hier een waarde in te kunnen stellen</translation>
    </message>
    <message>
        <source>Height of document pages, editable if you have chosen a custom page size</source>
        <translation>Hoogte van de pagina&apos;s, kies &apos;Aangepast&apos; om hier een waarde in te kunnen stellen</translation>
    </message>
    <message>
        <source>Time period between saving automatically</source>
        <translation>Tijdsinterval voor automatisch opslaan</translation>
    </message>
    <message>
        <source>Color for paper</source>
        <translation>Papierkleur</translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation>Maskeert het gebied buiten de kantlijnen in de kantlijnkleur</translation>
    </message>
    <message>
        <source>Set the default zoom level</source>
        <translation>Stelt het standaardzoom-niveau in</translation>
    </message>
    <message>
        <source>Antialias text for EPS and PDF onscreen rendering</source>
        <translation>Tekst voor EPS en PDF voorzien van zachte weergave op het scherm (anti-alias)</translation>
    </message>
    <message>
        <source>Antialias graphics for EPS and PDF onscreen rendering</source>
        <translation>Grafische objecten voor EPS en PDF weergeven met vloeiende lijnen</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Kies een map</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation>Wijzige&amp;n...</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Taal:</translation>
    </message>
    <message>
        <source>Units:</source>
        <translation>Eenheden:</translation>
    </message>
    <message>
        <source>Undo/Redo</source>
        <translation>Ongedaan maken/opnieuw doen</translation>
    </message>
    <message>
        <source>Action history length</source>
        <translation>Actiehistorie lengte</translation>
    </message>
    <message>
        <source>Hyphenator</source>
        <translation>Afbreekfunctie</translation>
    </message>
    <message>
        <source>Fonts</source>
        <translation>Fonts</translation>
    </message>
    <message>
        <source>Color Management</source>
        <translation>Kleurbeheer</translation>
    </message>
    <message>
        <source>PDF Export</source>
        <translation>PDF Exporteren</translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation>Toetsenbord shortcuts</translation>
    </message>
    <message>
        <source>Page Display</source>
        <translation>Paginaweergave</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Kleur:</translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation>Alt+U</translation>
    </message>
    <message>
        <source>Show Pictures</source>
        <translation type="obsolete">Toon plaatjes</translation>
    </message>
    <message>
        <source>Show Text Chains</source>
        <translation>Tekstkoppeling tonen</translation>
    </message>
    <message>
        <source>Show Frames</source>
        <translation>Toon Kaders</translation>
    </message>
    <message>
        <source>Scratch Space</source>
        <translation>Kladblok</translation>
    </message>
    <message>
        <source>Plugins</source>
        <translation>Plug-ins</translation>
    </message>
    <message>
        <source>Turns the display of frames on or off</source>
        <translation>Zet weergave van frames aan of uit</translation>
    </message>
    <message>
        <source>Turns the display of pictures on or off</source>
        <translation type="obsolete">Zet weergave van afbeeldingen aan of uit</translation>
    </message>
    <message>
        <source>Document T&amp;emplates:</source>
        <translation>Document &amp;Sjablonen:</translation>
    </message>
    <message>
        <source>Preflight Verifier</source>
        <translation>Preflight controle</translation>
    </message>
    <message>
        <source>Document Item Attributes</source>
        <translation>Document Item attributen</translation>
    </message>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation>Inhoudsopgave en indices</translation>
    </message>
    <message>
        <source>Show Text Control Characters</source>
        <translation>Opmaaktekens tonen</translation>
    </message>
    <message>
        <source>Rulers relative to Page</source>
        <translation>Lineaal relatief naar pagina</translation>
    </message>
    <message>
        <source>Gaps between Pages</source>
        <translation>Ruimtes tussen pagina&apos;s</translation>
    </message>
    <message>
        <source>Horizontal:</source>
        <translation>Horizontaal:</translation>
    </message>
    <message>
        <source>Vertical:</source>
        <translation>Verticaal:</translation>
    </message>
    <message>
        <source>To adjust the display drag the ruler below with the slider.</source>
        <translation>Om in te stellen sleep het lineaal hieronder met de schuifbalk.</translation>
    </message>
    <message>
        <source>dpi</source>
        <translation>dpi</translation>
    </message>
    <message>
        <source>Resolution:</source>
        <translation>Resolutie:</translation>
    </message>
    <message>
        <source>Always ask before fonts are replaced when loading a document</source>
        <translation>Vraag altijd voordat fonts vervangen worden bij het laden van een document</translation>
    </message>
    <message>
        <source>Preview of current Paragraph Style visible when editing Styles</source>
        <translation>Voorbeeld van de huidige alineastijl zichtbaar tijdens bijwerken stijlen</translation>
    </message>
    <message>
        <source>Show Startup Dialog</source>
        <translation>Opstart dialoog tonen</translation>
    </message>
    <message>
        <source>Lorem Ipsum</source>
        <translation>Lorem Ipsum</translation>
    </message>
    <message>
        <source>Always use standard Lorem Ipsum</source>
        <translation>Gebruik altijd de standaard Lorem Ipsum</translation>
    </message>
    <message>
        <source>Count of the Paragraphs:</source>
        <translation>Tellen van de paragrafen:</translation>
    </message>
    <message>
        <source>Miscellaneous</source>
        <translation>Diversen</translation>
    </message>
    <message>
        <source>Display non-printing characters such as paragraph markers in text frames</source>
        <translation>Toon niet te printen karakters, zoals alineatekens in tekstkaders</translation>
    </message>
    <message>
        <source>Additional directory for document templates</source>
        <translation>Additionele locatie voor documentsjablonen</translation>
    </message>
    <message>
        <source>Place a ruler against your screen and drag the slider to set the zoom level so Scribus will display your pages and objects on them at the correct size</source>
        <translation>Plaats een lineaal tegen het scherm en stel met de slider het zoom-niveau in, zodat Scribus de pagina&apos;s en objecten in het correcte formaat weergeeft</translation>
    </message>
    <message>
        <source>Defines amount of space left of the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation>Stelt ruimte in links van het document beschikbaar als werkblad voor aanmaken en bewerken van objecten en het slepen van objecten naar de actieve pagina</translation>
    </message>
    <message>
        <source>Defines amount of space right of the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation>Stelt ruimte in rechts van het document beschikbaar als werkblad voor aanmaken en bewerken van objecten en het slepen van objecten naar de actieve pagina</translation>
    </message>
    <message>
        <source>Defines amount of space above the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation>Stelt ruimte in boven het document beschikbaar als werkblad voor aanmaken en bewerken van objecten en het slepen van objecten naar de actieve pagina</translation>
    </message>
    <message>
        <source>Defines amount of space below the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation>Stelt ruimte in onder het document beschikbaar als werkblad voor aanmaken en bewerken van objecten en het slepen van objecten naar de actieve pagina</translation>
    </message>
    <message>
        <source>Locate Ghostscript</source>
        <translation>Lokaliseer Ghostscript</translation>
    </message>
    <message>
        <source>Locate your image editor</source>
        <translation>Lokaliseer uw afbeeldingsbewerker</translation>
    </message>
    <message>
        <source>PostScript Interpreter</source>
        <translation>PostScript Interpreter</translation>
    </message>
    <message>
        <source>Enable or disable  the display of linked frames.</source>
        <translation>Zet de weergave van gekoppelde frames aan of uit.</translation>
    </message>
    <message>
        <source>Select your default language for Scribus to run with. Leave this blank to choose based on environment variables. You can still override this by passing a command line option when starting Scribus</source>
        <translation>Kies de standaardtaal voor gebruik van Scribus. Bij geen keuze wordt de keuze gemaakt op basis van het gebruikte systeem. Dit kan naderhand worden aangepast door een command line optie toe te passen bij de start van Scribus</translation>
    </message>
    <message>
        <source>&amp;Font Size (Menus):</source>
        <translation>&amp;Fontgrootte (Menu&apos;s):</translation>
    </message>
    <message>
        <source>Font Size (&amp;Palettes):</source>
        <translation>Fontgrootte (&amp;Palettes):</translation>
    </message>
    <message>
        <source>Choose the default window decoration and looks. Scribus inherits any available KDE or Qt themes, if Qt is configured to search KDE plugins.</source>
        <translation>Kies de standaard stijl voor Scribus. Scribus maakt gebruik van elk beschikbaar KDE of QT thema, als QT is geconfigureerd om KDE plugins te zoeken.</translation>
    </message>
    <message>
        <source>Default font size for the tool windows</source>
        <translation>Standaardtekengrootte voor gereedschappen venster</translation>
    </message>
    <message>
        <source>Default ICC profiles directory. This cannot be changed with a document open. By default, Scribus will look in the System Directories under Mac OSX and Windows. On Linux and Unix, Scribus will search $home/.color/icc,/usr/share/color/icc and /usr/local/share/color/icc </source>
        <translation>Standaard locatie voor ICC profielen. Kan niet worden aangepast bij een geopend document. Standaard zal Scribus in de systeemmappen zoek bij Mac OSX en Windows. Bij Linux en Unix zal Scribus zoeken in $home/.color/icc,/usr/share/color/icc en /usr/local/share/color/icc</translation>
    </message>
    <message>
        <source>When enabled, Scribus saves a backup copy of your file with the .bak extension each time the time period elapses</source>
        <translation>Bij inschakeling zal Scribus aan het eind van de ingestelde tijd een backup van het bestand maken met de extensie .bak</translation>
    </message>
    <message>
        <source>Set the length of the action history in steps. If set to 0 infinite amount of actions will be stored.</source>
        <translation>Stel het aantal te bewaren stappen in van de actiegeschiedenis. Bij instelling 0 is het aantal opgeslagen acties oneindig.</translation>
    </message>
    <message>
        <source>File system location for graphics editor. If you use gimp and your distro includes it, we recommend &apos;gimp-remote&apos;, as it allows you to edit the image in an already running instance of gimp.</source>
        <translation>Pad naar systeem tekensoftware. Bij gebruik van GIMP, wordt &apos;gimp-remote&apos; aangeraden, de afbeelding kan dan in een reeds gestartte gimp worden bewerkt.</translation>
    </message>
    <message>
        <source>Add the path for the Ghostscript interpreter. On Windows, please note it is important to note you need to use the program named gswin32c.exe - NOT gswin32.exe. Otherwise, this maybe cause a hang when starting Scribus.</source>
        <translation>Voeg pad toe naar Ghostscript interpreter. Bij Windows is het belangrijk op te letten dat gswin32c.exe en NIET gswin32.exe wordt ingesteld, Scribus kan dan mogeljk niet starten.</translation>
    </message>
    <message>
        <source>Show Images</source>
        <translation>Afbeeldingen tonen</translation>
    </message>
    <message>
        <source>Turns the display of images on or off</source>
        <translation>Zet weergave van afbeeldingen aan of uit</translation>
    </message>
</context>
<context>
    <name>PrefsDialogBase</name>
    <message>
        <source>&amp;Defaults</source>
        <translation>Stan&amp;daard</translation>
    </message>
    <message>
        <source>Save...</source>
        <translation>Opslaan...</translation>
    </message>
    <message>
        <source>Save Preferences</source>
        <translation>Voorkeuren opslaan</translation>
    </message>
</context>
<context>
    <name>PrefsManager</name>
    <message>
        <source>Postscript</source>
        <translation>Postscript</translation>
    </message>
    <message>
        <source>Migrate Old Scribus Settings?</source>
        <translation>Migreer oude instellingen van Scribus?</translation>
    </message>
    <message>
        <source>Scribus has detected existing Scribus 1.2 preferences files.
Do you want to migrate them to the new Scribus version?</source>
        <translation>Scribus heeft bestaande Scribus 1.2 voorkeurbestanden gedetecteerd.
Wilt u deze migreren naar de nieuwe Scribus versie?</translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation>PostScript</translation>
    </message>
    <message>
        <source>Could not open preferences file &quot;%1&quot; for writing: %2</source>
        <translation>Kan voorkeurbestand &quot;%1&quot; niet openen om te schrijven: %2</translation>
    </message>
    <message>
        <source>Writing to preferences file &quot;%1&quot; failed: QIODevice status code %2</source>
        <translation>Schrijft naar voorkeurbestand &quot;%1&quot; mislukt: QIODevice status code %2</translation>
    </message>
    <message>
        <source>Failed to open prefs file &quot;%1&quot;: %2</source>
        <translation>Openen van voorkeurbestand &quot;%1&quot; mislukt: %2</translation>
    </message>
    <message>
        <source>Failed to read prefs XML from &quot;%1&quot;: %2 at line %3, col %4</source>
        <translation>Lezen van voorkeur XML &quot;%1&quot; mislukt: %2 op regel %3, col %4</translation>
    </message>
    <message>
        <source>PDF 1.3</source>
        <translation type="obsolete">PDF 1.3</translation>
    </message>
    <message>
        <source>PDF 1.4</source>
        <translation type="obsolete">PDF 1.4</translation>
    </message>
    <message>
        <source>PDF/X-3</source>
        <translation type="obsolete">PDF/X-3</translation>
    </message>
    <message>
        <source>Error Writing Preferences</source>
        <translation>Schrijffout voorkeuren</translation>
    </message>
    <message>
        <source>Scribus was not able to save its preferences:&lt;br&gt;%1&lt;br&gt;Please check file and directory permissions and available disk space.</source>
        <comment>scribus app error</comment>
        <translation>Scribus was niet in staat om de voorkeuren op te slaan:&lt;br&gt;%1&lt;br&gt;Controleer bestands- en maprechten en beschikbare schrijfruimte.</translation>
    </message>
    <message>
        <source>Error Loading Preferences</source>
        <translation>Laadfout voorkeuren</translation>
    </message>
    <message>
        <source>Scribus was not able to load its preferences:&lt;br&gt;%1&lt;br&gt;Default settings will be loaded.</source>
        <translation>Scribus was niet in staat om de voorkeuren te laden: &lt;br&gt;%1&lt;br&gt;Standaard instellingen worden geladen.</translation>
    </message>
</context>
<context>
    <name>PresetLayout</name>
    <message>
        <source>Magazine</source>
        <translation>Magazine</translation>
    </message>
    <message>
        <source>Fibonacci</source>
        <translation>Fibonacci</translation>
    </message>
    <message>
        <source>Golden Mean</source>
        <translation>Gulden snede</translation>
    </message>
    <message>
        <source>Nine Parts</source>
        <translation>Negen Delen</translation>
    </message>
    <message>
        <source>Gutenberg</source>
        <translation>Gutenberg</translation>
    </message>
    <message>
        <source>You can select predefined page layout here. &apos;None&apos; leave margins as is, Gutenberg sets margins classically. &apos;Magazine&apos; sets all margins for same value. Leading is Left/Inside value.</source>
        <translation>U kunt hier een vooringestelde paginalayout selecteren. &apos;None&apos;&apos; laat de marges ongewijzigd. Gutenberg stelt marges in op de klassieke wijze. &apos;Magazine&apos; stelt alle marges in op dezelfde waarde. Leidend is Links/Binnen waarde.</translation>
    </message>
    <message>
        <source>None</source>
        <comment>layout type</comment>
        <translation>Geen</translation>
    </message>
</context>
<context>
    <name>PythonConsole</name>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Openen...</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>Op&amp;slaan</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Opslaan &amp;als...</translation>
    </message>
    <message>
        <source>&amp;Exit</source>
        <translation>&amp;Sluiten</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Bestand</translation>
    </message>
    <message>
        <source>&amp;Run</source>
        <translation>&amp;Uitvoeren</translation>
    </message>
    <message>
        <source>Run As &amp;Console</source>
        <translation>Voer als &amp;console uit</translation>
    </message>
    <message>
        <source>&amp;Save Output...</source>
        <translation>Op&amp;slaan Output...</translation>
    </message>
    <message>
        <source>&amp;Script</source>
        <translation>&amp;Script</translation>
    </message>
    <message>
        <source>Scribus Python Console</source>
        <translation>Scribus Python Console</translation>
    </message>
    <message>
        <source>This is derived from standard Python console so it contains some limitations esp. in the case of whitespaces. Please consult Scribus manual for more informations.</source>
        <translation type="obsolete">Dit is een afgeleide van de standaard Python console en bevat beperkingen, speciaal in het geval van witruimten. Lees de Scribus handleiding voor meer informatie.</translation>
    </message>
    <message>
        <source>Script Console</source>
        <translation>Scriptconsole</translation>
    </message>
    <message>
        <source>Write your commands here. A selection is processed as script</source>
        <translation>Voer commando&apos;s hier in. Een selectie wordt als script uitgevoerd</translation>
    </message>
    <message>
        <source>Output of your script</source>
        <translation>Output van het script</translation>
    </message>
    <message>
        <source>Python Scripts (*.py)</source>
        <translation>Python scripts (*.py)</translation>
    </message>
    <message>
        <source>Save the Python Commands in File</source>
        <translation>Sla Python commando&apos;s op in bestand</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>Text Files (*.txt)</source>
        <translation>Tekstbestanden (*.txt)</translation>
    </message>
    <message>
        <source>Save Current Output</source>
        <translation>Bewaar huidige output</translation>
    </message>
    <message>
        <source>Open Python Script File</source>
        <translation>Open Python Script bestand</translation>
    </message>
    <message>
        <source>This is a standard Python console with some 
known limitations. Please consult the Scribus 
Scripter documentation for futher information. </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QColorDialog</name>
    <message>
        <source>Hu&amp;e:</source>
        <translation>Tin&amp;t:</translation>
    </message>
    <message>
        <source>&amp;Sat:</source>
        <translation>&amp;Verz.:</translation>
    </message>
    <message>
        <source>&amp;Val:</source>
        <translation>&amp;Waarde:</translation>
    </message>
    <message>
        <source>&amp;Red:</source>
        <translation>&amp;Rood:</translation>
    </message>
    <message>
        <source>&amp;Green:</source>
        <translation>&amp;Groen:</translation>
    </message>
    <message>
        <source>Bl&amp;ue:</source>
        <translation>&amp;Blauw:</translation>
    </message>
    <message>
        <source>A&amp;lpha channel:</source>
        <translation>&amp;Alfakanaal:</translation>
    </message>
    <message>
        <source>&amp;Basic colors</source>
        <translation>&amp;Basiskleuren</translation>
    </message>
    <message>
        <source>&amp;Custom colors</source>
        <translation>&amp;Aangepaste kleuren</translation>
    </message>
    <message>
        <source>&amp;Define Custom Colors &gt;&gt;</source>
        <translation>Aangepaste kleuren &amp;instellen &gt;&gt;</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message>
        <source>&amp;Add to Custom Colors</source>
        <translation>&amp;Toevoegen aan kleuren</translation>
    </message>
    <message>
        <source>Select color</source>
        <translation>Kleur kiezen</translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <source>Copy or Move a File</source>
        <translation>Bestand kopiëren of verplaatsen</translation>
    </message>
    <message>
        <source>Read: %1</source>
        <translation>Lezen: %1</translation>
    </message>
    <message>
        <source>Write: %1</source>
        <translation>Schrijven: %1</translation>
    </message>
    <message>
        <source>File &amp;name:</source>
        <translation>Bestands&amp;naam:</translation>
    </message>
    <message>
        <source>File &amp;type:</source>
        <translation>Bestands&amp;type:</translation>
    </message>
    <message>
        <source>One directory up</source>
        <translation>Bovenliggende map</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Grootte</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Type</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Datum</translation>
    </message>
    <message>
        <source>Attributes</source>
        <translation>Attributen</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Look &amp;in:</source>
        <translation>Zoeken &amp;in:</translation>
    </message>
    <message>
        <source>Back</source>
        <translation>Terug</translation>
    </message>
    <message>
        <source>Create New Folder</source>
        <translation>Nieuwe map</translation>
    </message>
    <message>
        <source>List View</source>
        <translation>Lijstweergave</translation>
    </message>
    <message>
        <source>Detail View</source>
        <translation>Detailweergave</translation>
    </message>
    <message>
        <source>Preview File Info</source>
        <translation>Bestandsinfo tonen</translation>
    </message>
    <message>
        <source>Preview File Contents</source>
        <translation>Bestandsinhoud tonen</translation>
    </message>
    <message>
        <source>Read-write</source>
        <translation>Lezen en schrijven</translation>
    </message>
    <message>
        <source>Read-only</source>
        <translation>Alleen-lezen</translation>
    </message>
    <message>
        <source>Write-only</source>
        <translation>Alleen-schrijven</translation>
    </message>
    <message>
        <source>Inaccessible</source>
        <translation>Niet toegankelijk</translation>
    </message>
    <message>
        <source>Symlink to File</source>
        <translation>Symlink naar bestand</translation>
    </message>
    <message>
        <source>Symlink to Directory</source>
        <translation>Symlink naar map</translation>
    </message>
    <message>
        <source>Symlink to Special</source>
        <translation>Symlink naar speciaal</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Bestand</translation>
    </message>
    <message>
        <source>Dir</source>
        <translation>Map</translation>
    </message>
    <message>
        <source>Special</source>
        <translation>Speciaal</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation>Opslaan als</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Openen</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>Op&amp;slaan</translation>
    </message>
    <message>
        <source>&amp;Rename</source>
        <translation>He&amp;rnoemen</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>R&amp;eload</source>
        <translation>Opni&amp;euw laden</translation>
    </message>
    <message>
        <source>Sort by &amp;Name</source>
        <translation>Sorteren op &amp;naam</translation>
    </message>
    <message>
        <source>Sort by &amp;Size</source>
        <translation>Sorteren op &amp;grootte</translation>
    </message>
    <message>
        <source>Sort by &amp;Date</source>
        <translation>Sorteren op &amp;datum</translation>
    </message>
    <message>
        <source>&amp;Unsorted</source>
        <translation>Niet &amp;sorteren</translation>
    </message>
    <message>
        <source>Sort</source>
        <translation>Sorteren</translation>
    </message>
    <message>
        <source>Show &amp;hidden files</source>
        <translation>&amp;Verborgen bestanden tonen</translation>
    </message>
    <message>
        <source>the file</source>
        <translation>het bestand</translation>
    </message>
    <message>
        <source>the directory</source>
        <translation>de map</translation>
    </message>
    <message>
        <source>the symlink</source>
        <translation>de symlink</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>%1 verwijderen</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Are you sure you wish to delete %1 &quot;%2&quot;?&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Wilt u werkelijk %1 &quot;%2&quot; verwijderen?&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Ja, verwijderen</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Nee</translation>
    </message>
    <message>
        <source>New Folder 1</source>
        <translation>Nieuwe map 1</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>Nieuwe map</translation>
    </message>
    <message>
        <source>New Folder %1</source>
        <translation>Nieuwe map %1</translation>
    </message>
    <message>
        <source>Find Directory</source>
        <translation>Map zoeken</translation>
    </message>
    <message>
        <source>Directories</source>
        <translation>Mappen</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>Opslaan</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Fout</translation>
    </message>
    <message>
        <source>%1
File not found.
Check path and filename.</source>
        <translation>%1
Bestand niet gevonden.
Controleer het pad en de bestandsnaam.</translation>
    </message>
    <message>
        <source>All Files (*.*)</source>
        <translation>Alle bestanden (*.*)</translation>
    </message>
    <message>
        <source>Select a Directory</source>
        <translation>Map kiezen</translation>
    </message>
    <message>
        <source>Directory:</source>
        <translation>Map:</translation>
    </message>
</context>
<context>
    <name>QFontDialog</name>
    <message>
        <source>&amp;Font</source>
        <translation>&amp;Font</translation>
    </message>
    <message>
        <source>Font st&amp;yle</source>
        <translation>St&amp;ijl</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;Grootte</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation>Effecten</translation>
    </message>
    <message>
        <source>Stri&amp;keout</source>
        <translation>Door&amp;halen</translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation>&amp;Onderstrepen</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation>&amp;Kleur</translation>
    </message>
    <message>
        <source>Sample</source>
        <translation>Voorbeeld</translation>
    </message>
    <message>
        <source>Scr&amp;ipt</source>
        <translation>Scr&amp;ipt</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Toepassen</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Sluiten</translation>
    </message>
    <message>
        <source>Select Font</source>
        <translation>Font selecteren</translation>
    </message>
</context>
<context>
    <name>QLineEdit</name>
    <message>
        <source>Clear</source>
        <translation>Leegmaken</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>Alles selecteren</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Ongedaan maken</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>O&amp;pnieuw doen</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Kni&amp;ppen</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiëren</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>P&amp;lakken</translation>
    </message>
</context>
<context>
    <name>QMainWindow</name>
    <message>
        <source>Line up</source>
        <translation>Naast elkaar</translation>
    </message>
    <message>
        <source>Customize...</source>
        <translation>Aanpassen...</translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <source>&lt;h3&gt;About Qt&lt;/h3&gt;&lt;p&gt;This program uses Qt version %1.&lt;/p&gt;&lt;p&gt;Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p&gt;&lt;p&gt;Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br&gt;Qt is also available for embedded devices.&lt;/p&gt;&lt;p&gt;Qt is a Trolltech product. See &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt; for more information.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Info over Qt&lt;/h3&gt;&lt;p&gt;Dit programma gebruikt Qt versie %1.&lt;/p&gt;&lt;p&gt;Qt is een C++-toolkit voor het ontwikkelen van toepassingen op verschillende platformen.&lt;/p&gt;&lt;p&gt;Qt biedt broncode-compatibiliteit tussen MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, en alle belangrijke UNIX-varianten.&lt;br&gt;Qt is ook beschikbaar voor ingebedde apparaten.&lt;/p&gt;&lt;p&gt;Qt is een product van Trolltech. Zie &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt; voor meer informatie.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Importing text</source>
        <translation>Tekst wordt geïmporteerd</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation>Alle ondersteunde formaten</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Initializing...</source>
        <translation>Bezig te initialiseren...</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Achtergrond</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <source>Do you really want to overwrite the File:
%1 ?</source>
        <translation>Wilt u werkelijk het bestand %1 overschrijven:?</translation>
    </message>
    <message>
        <source>Newsletters</source>
        <translation>Nieuwsbrieven</translation>
    </message>
    <message>
        <source>Brochures</source>
        <translation>Brochures</translation>
    </message>
    <message>
        <source>Catalogs</source>
        <translation>Catalogi</translation>
    </message>
    <message>
        <source>Flyers</source>
        <translation>Flyers</translation>
    </message>
    <message>
        <source>Signs</source>
        <translation>Tekens</translation>
    </message>
    <message>
        <source>Cards</source>
        <translation>Kaarten</translation>
    </message>
    <message>
        <source>Letterheads</source>
        <translation>Briefhoofden</translation>
    </message>
    <message>
        <source>Envelopes</source>
        <translation>Enveloppen</translation>
    </message>
    <message>
        <source>Business Cards</source>
        <translation>Visitekaartjes</translation>
    </message>
    <message>
        <source>Calendars</source>
        <translation>Kalenders</translation>
    </message>
    <message>
        <source>Advertisements</source>
        <translation>Advertenties</translation>
    </message>
    <message>
        <source>Labels</source>
        <translation>Labels</translation>
    </message>
    <message>
        <source>Menus</source>
        <translation>Menu&apos;s</translation>
    </message>
    <message>
        <source>Programs</source>
        <translation>Programma&apos;s</translation>
    </message>
    <message>
        <source>PDF Forms</source>
        <translation>PDF-formulieren</translation>
    </message>
    <message>
        <source>PDF Presentations</source>
        <translation>PDF-presentaties</translation>
    </message>
    <message>
        <source>Magazines</source>
        <translation>Magazines</translation>
    </message>
    <message>
        <source>Posters</source>
        <translation>Posters</translation>
    </message>
    <message>
        <source>Announcements</source>
        <translation>Aankondigingen</translation>
    </message>
    <message>
        <source>Text Documents</source>
        <translation>Tekstdocumenten</translation>
    </message>
    <message>
        <source>Folds</source>
        <translation>Gevouwen documenten</translation>
    </message>
    <message>
        <source>Own Templates</source>
        <translation>Eigen sjablonen</translation>
    </message>
    <message>
        <source>Save as Image</source>
        <translation>Opslaan als afbeelding</translation>
    </message>
    <message>
        <source>Error writing the output file(s).</source>
        <translation>Fout tijdens het schrijven naar uitvoerbestand(en).</translation>
    </message>
    <message>
        <source>Export successful.</source>
        <translation>Export was succesvol.</translation>
    </message>
    <message>
        <source>File exists. Overwrite?</source>
        <translation>Het bestand bestaat. Wilt u het overschrijven?</translation>
    </message>
    <message>
        <source>exists already. Overwrite?</source>
        <translation>bestaat al. Wilt u het overschrijven?</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Nee</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Ja</translation>
    </message>
    <message>
        <source>Yes all</source>
        <translation>Ja, alles</translation>
    </message>
    <message>
        <source>All Supported Formats (*.eps *.EPS *.ps *.PS);;</source>
        <translation>Alle ondersteunde formaten (*.eps *.EPS *.ps *.PS);;</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>&amp;Scribus Scripts</source>
        <translation>&amp;Scribus scripts</translation>
    </message>
    <message>
        <source>&amp;Execute Script...</source>
        <translation>Script &amp;uitvoeren...</translation>
    </message>
    <message>
        <source>&amp;Recent Scripts</source>
        <translation>&amp;Recente scripts</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation>&amp;Console tonen</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Opslaan als</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg *.svgz);;All Files (*)</source>
        <translation>SVG-afbeeldingen (*.svg *.svgz);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg);;All Files (*)</source>
        <translation>SVG-afbeeldingen (*.svg);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Comma Separated Value Files</source>
        <translation>Bestanden met kommagescheiden-waarden (CSV)</translation>
    </message>
    <message>
        <source>CSV_data</source>
        <translation>CSV_gegevens</translation>
    </message>
    <message>
        <source>CSV_header</source>
        <translation>CSV_kopregel</translation>
    </message>
    <message>
        <source>HTML Files</source>
        <translation>HTML-bestanden</translation>
    </message>
    <message>
        <source>html</source>
        <translation>html</translation>
    </message>
    <message>
        <source>
External Links
</source>
        <translation>
Externe koppelingen
</translation>
    </message>
    <message>
        <source>Text Files</source>
        <translation>Tekstbestanden</translation>
    </message>
    <message>
        <source>Font %1 is broken, discarding it</source>
        <translation>Het font %1 is beschadigd en wordt weggelaten</translation>
    </message>
    <message>
        <source>Text Filters</source>
        <translation>Tekstfilters</translation>
    </message>
    <message>
        <source>Albanian</source>
        <translation>Albanees</translation>
    </message>
    <message>
        <source>Basque</source>
        <translation>Baskisch</translation>
    </message>
    <message>
        <source>Bulgarian</source>
        <translation>Bulgaars</translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation>Catalaans</translation>
    </message>
    <message>
        <source>Chinese</source>
        <translation>Chinees</translation>
    </message>
    <message>
        <source>Czech</source>
        <translation>Tsjechisch</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation>Deens</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation>Nederlands</translation>
    </message>
    <message>
        <source>English</source>
        <translation>Engels</translation>
    </message>
    <message>
        <source>English (British)</source>
        <translation>Engels (Brits)</translation>
    </message>
    <message>
        <source>Esperanto</source>
        <translation>Esperanto</translation>
    </message>
    <message>
        <source>German</source>
        <translation>Duits</translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation>Fins</translation>
    </message>
    <message>
        <source>French</source>
        <translation>Frans</translation>
    </message>
    <message>
        <source>Galician</source>
        <translation>Galiciaans</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation>Grieks</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation>Hongaars</translation>
    </message>
    <message>
        <source>Indonesian</source>
        <translation>Indonesisch</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation>Italiaans</translation>
    </message>
    <message>
        <source>Korean</source>
        <translation>Koreaans</translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation>Litouws</translation>
    </message>
    <message>
        <source>Norwegian (Bokmaal)</source>
        <translation>Noors (Bokmaal)</translation>
    </message>
    <message>
        <source>Norwegian (Nnyorsk)</source>
        <translation>Noors (Nnyorsk)</translation>
    </message>
    <message>
        <source>Norwegian</source>
        <translation>Noors</translation>
    </message>
    <message>
        <source>Polish</source>
        <translation>Pools</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation>Russisch</translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation>Zweeds</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation>Spaans</translation>
    </message>
    <message>
        <source>Spanish (Latin)</source>
        <translation>Spaans (Latijn)</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation>Slovaaks</translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation>Sloveens</translation>
    </message>
    <message>
        <source>Serbian</source>
        <translation>Servisch</translation>
    </message>
    <message>
        <source>Media Cases</source>
        <translation>Media-cases</translation>
    </message>
    <message>
        <source>&amp;About Script...</source>
        <translation>&amp;Over script...</translation>
    </message>
    <message>
        <source>About Script</source>
        <translation>Over script</translation>
    </message>
    <message>
        <source>Cannot get font size of non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan fontgrootte niet verkrijgen van non-tekst frame.</translation>
    </message>
    <message>
        <source>Cannot get font of non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan font niet verkrijgen van non-tekst frame.</translation>
    </message>
    <message>
        <source>Cannot get text size of non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan tekstgrootte niet verkrijgen van non-tekst frame.</translation>
    </message>
    <message>
        <source>Cannot get column count of non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan kolomtelling niet verkrijgen van non-tekst frame.</translation>
    </message>
    <message>
        <source>Cannot get line space of non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan regelspaciering niet verkrijgen van non-tekst frame.</translation>
    </message>
    <message>
        <source>Cannot get column gap of non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan kolomruimte niet verkrijgen van non-tekst frame.</translation>
    </message>
    <message>
        <source>Cannot get text of non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan tekst niet verkrijgen van non-tekst frame.</translation>
    </message>
    <message>
        <source>Cannot set text of non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan tekst niet plaatsen van non-tekst frame.</translation>
    </message>
    <message>
        <source>Cannot insert text into non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan tekst niet intvoegen in non-tekst frame.</translation>
    </message>
    <message>
        <source>Alignment out of range. Use one of the scribus.ALIGN* constants.</source>
        <comment>python error</comment>
        <translation>Uitlijning buiten bereik. Gebruik een van de scribus.ALIGN* constanten.</translation>
    </message>
    <message>
        <source>Selection index out of bounds</source>
        <comment>python error</comment>
        <translation>Selectie index buiten bereik</translation>
    </message>
    <message>
        <source>Unit out of range. Use one of the scribus.UNIT_* constants.</source>
        <comment>python error</comment>
        <translation>Eenheid buiten bereik. Gebruik een van de scribus.UNIT_* constanten.</translation>
    </message>
    <message>
        <source>Target is not an image frame.</source>
        <comment>python error</comment>
        <translation>Doel is geen afbeeldingsframe.</translation>
    </message>
    <message>
        <source>Corner radius must be a positive number.</source>
        <comment>python error</comment>
        <translation>Hoekradius moet een positief nummer zijn.</translation>
    </message>
    <message>
        <source>Cannot get a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Kan een kleur niet verkrijgen met een lege naam.</translation>
    </message>
    <message>
        <source>Cannot change a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Kan een kleur niet veranderen met een lege naam.</translation>
    </message>
    <message>
        <source>Cannot create a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Kan een kleur niet aanmaken met een lege naam.</translation>
    </message>
    <message>
        <source>Cannot delete a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Kan een kleur niet verwijderen met een lege naam.</translation>
    </message>
    <message>
        <source>Cannot replace a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Kan een kleur niet vervangen met een lege naam.</translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Documents</source>
        <translation>OpenOffice.org Writer-documenten</translation>
    </message>
    <message>
        <source>Color not found - python error</source>
        <comment>python error</comment>
        <translation>Kleur niet gevonden - pythonfout</translation>
    </message>
    <message>
        <source>Custom (optional) configuration: </source>
        <comment>short words plugin</comment>
        <translation>Handmatige (optioneel) configuratie: </translation>
    </message>
    <message>
        <source>Standard configuration: </source>
        <comment>short words plugin</comment>
        <translation>Standaard configuratie: </translation>
    </message>
    <message>
        <source>Short Words processing. Wait please...</source>
        <comment>short words plugin</comment>
        <translation>Korte woorden in bewerking. Wachten aub...</translation>
    </message>
    <message>
        <source>Short Words processing. Done.</source>
        <comment>short words plugin</comment>
        <translation>Korte woorden in bewerking. Gereed.</translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation>Afrikaans</translation>
    </message>
    <message>
        <source>Turkish</source>
        <translation>Turks</translation>
    </message>
    <message>
        <source>Ukranian</source>
        <translation>Oekraïens</translation>
    </message>
    <message>
        <source>Welsh</source>
        <translation>Welsh</translation>
    </message>
    <message>
        <source>The filename must be a string.</source>
        <comment>python error</comment>
        <translation>De bestandsnaam moet een string zijn.</translation>
    </message>
    <message>
        <source>Cannot delete image type settings.</source>
        <comment>python error</comment>
        <translation>Kan afbeeldingtype instellingenniet verwijderen.</translation>
    </message>
    <message>
        <source>The image type must be a string.</source>
        <comment>python error</comment>
        <translation>Het afbeeldingstype moet een string zijn.</translation>
    </message>
    <message>
        <source>&apos;allTypes&apos; attribute is READ-ONLY</source>
        <comment>python error</comment>
        <translation>&apos;allTypes&apos; attribuut is ALLEEN LEZEN</translation>
    </message>
    <message>
        <source>Failed to export image</source>
        <comment>python error</comment>
        <translation>Exporteren van afbeelding mislukt</translation>
    </message>
    <message>
        <source>Cannot scale by 0%.</source>
        <comment>python error</comment>
        <translation>Kan niet schalen met 0%.</translation>
    </message>
    <message>
        <source>Specified item not an image frame.</source>
        <comment>python error</comment>
        <translation>Item is geen afbeeldingsframe.</translation>
    </message>
    <message>
        <source>Font not found.</source>
        <comment>python error</comment>
        <translation>Font niet gevonden.</translation>
    </message>
    <message>
        <source>Cannot render an empty sample.</source>
        <comment>python error</comment>
        <translation>Kan geen leeg voorbeeld renderen.</translation>
    </message>
    <message>
        <source>Cannot have an empty layer name.</source>
        <comment>python error</comment>
        <translation>Naam van de laag ontbreekt.</translation>
    </message>
    <message>
        <source>Layer not found.</source>
        <comment>python error</comment>
        <translation>Laag niet gevonden.</translation>
    </message>
    <message>
        <source>Cannot remove the last layer.</source>
        <comment>python error</comment>
        <translation>Kan laatste laag niet verwijderen.</translation>
    </message>
    <message>
        <source>Cannot create layer without a name.</source>
        <comment>python error</comment>
        <translation>Kan geen nieuwe laag aanmaken zonder naam.</translation>
    </message>
    <message>
        <source>Insert index out of bounds.</source>
        <comment>python error</comment>
        <translation>In te voegen index buiten bereik.</translation>
    </message>
    <message>
        <source>Cannot set text alignment on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan regeluitlijning niet verkrijgen van non-tekst frame.</translation>
    </message>
    <message>
        <source>Font size out of bounds - must be 1 &lt;= size &lt;= 512.</source>
        <comment>python error</comment>
        <translation>Fontgrootte buiten bereik - moet 1 &lt;= grootte &lt;= 512 zijn.</translation>
    </message>
    <message>
        <source>Cannot set font size on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan fontgrootte niet instellen van non-tekst frame.</translation>
    </message>
    <message>
        <source>Cannot set font on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan font niet instellen van non-tekst frame.</translation>
    </message>
    <message>
        <source>Line space out of bounds, must be &gt;= 0.1.</source>
        <comment>python error</comment>
        <translation>Spatiëring buiten bereik, moet zijn &gt;= 0.1.</translation>
    </message>
    <message>
        <source>Cannot set line spacing on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan regelspaciering niet instellen van non-tekst frame.</translation>
    </message>
    <message>
        <source>Column gap out of bounds, must be positive.</source>
        <comment>python error</comment>
        <translation>Kolomruimte buiten bereik, moet positief zijn.</translation>
    </message>
    <message>
        <source>Cannot set column gap on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan kolomruimte niet instellen van non-tekst frame.</translation>
    </message>
    <message>
        <source>Column count out of bounds, must be &gt; 1.</source>
        <comment>python error</comment>
        <translation>Kolomtelling buiten bereik, moet &gt; 1 zijn.</translation>
    </message>
    <message>
        <source>Cannot set number of columns on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan aantal kolommen niet instellen in non-tekst frame.</translation>
    </message>
    <message>
        <source>Cannot select text in a non-text frame</source>
        <comment>python error</comment>
        <translation>Kan tekst niet selecteren in non-tekst frame</translation>
    </message>
    <message>
        <source>Cannot delete text from a non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan tekst niet wissen in een non-tekst frame.</translation>
    </message>
    <message>
        <source>Cannot set text fill on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan tekenvulkleur niet instellen in een non-tekst frame.</translation>
    </message>
    <message>
        <source>Cannot set text stroke on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan kleur tekenomlijning niet instellen in een non-tekst frame.</translation>
    </message>
    <message>
        <source>Cannot set text shade on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan tint tekst niet instellen in een non-tekst frame.</translation>
    </message>
    <message>
        <source>Can only link text frames.</source>
        <comment>python error</comment>
        <translation>Kan alleen tekstframes verbinden.</translation>
    </message>
    <message>
        <source>Target frame must be empty.</source>
        <comment>python error</comment>
        <translation>Doel frame moet leeg zijn.</translation>
    </message>
    <message>
        <source>Target frame links to another frame.</source>
        <comment>python error</comment>
        <translation>Doel frame linkt naar ander frame.</translation>
    </message>
    <message>
        <source>Target frame is linked to by another frame.</source>
        <comment>python error</comment>
        <translation>Naar doelframe wordt gelinkt door ander frame.</translation>
    </message>
    <message>
        <source>Source and target are the same object.</source>
        <comment>python error</comment>
        <translation>Bron en doel zijn het zelfde object.</translation>
    </message>
    <message>
        <source>Cannot unlink a non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan een non-tekst frame niet loskoppelen.</translation>
    </message>
    <message>
        <source>Cannot convert a non-text frame to outlines.</source>
        <comment>python error</comment>
        <translation>Kan een non-tekst frame niet naar contouren omzetten.</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Pagina</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Aangepast</translation>
    </message>
    <message>
        <source>Scribus Development Version</source>
        <translation>Scribus ontwikkelings versie</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation>in</translation>
    </message>
    <message>
        <source> p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <source>in</source>
        <translation>in</translation>
    </message>
    <message>
        <source>p</source>
        <translation>p</translation>
    </message>
    <message>
        <source>Points (pt)</source>
        <translation>Punten (pt)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation>Inches (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation>Picas (p)</translation>
    </message>
    <message>
        <source>File exists</source>
        <translation>Bestand bestaat</translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation>&amp;Vervangen</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Alles</translation>
    </message>
    <message>
        <source>Failed to open document.</source>
        <comment>python error</comment>
        <translation>Openen van document mislukt.</translation>
    </message>
    <message>
        <source>Failed to save document.</source>
        <comment>python error</comment>
        <translation>Bewaren van document mislukt.</translation>
    </message>
    <message>
        <source>Argument must be page item name, or PyCObject instance</source>
        <translation>Argument moet een pagina item naam zijn, of PyCObject instance</translation>
    </message>
    <message>
        <source>Property not found</source>
        <translation>Eigenschap niet gevonden</translation>
    </message>
    <message>
        <source>Child not found</source>
        <translation>Child niet gevonden</translation>
    </message>
    <message>
        <source>Couldn&apos;t convert result type &apos;%1&apos;.</source>
        <translation>Kan niet omzetten resultaat type &apos;%1&apos;.</translation>
    </message>
    <message>
        <source>Property type &apos;%1&apos; not supported</source>
        <translation>Eigenschap type &apos;%1&apos; niet ondersteunt</translation>
    </message>
    <message>
        <source>Couldn&apos;t convert &apos;%1&apos; to property type &apos;%2&apos;</source>
        <translation>Kan &apos;%1&apos; eigenschap niet omzetten naar type &apos;%2&apos;</translation>
    </message>
    <message>
        <source>Types matched, but setting property failed.</source>
        <translation>Types komen overeen, maar instellen eigenschappen lukt niet.</translation>
    </message>
    <message>
        <source>Unable to save pixmap</source>
        <comment>scripter error</comment>
        <translation>Kan pixmap niet opslaan</translation>
    </message>
    <message>
        <source>An object with the requested name already exists.</source>
        <comment>python error</comment>
        <translation>Een object met deze naam bestaat reeds.</translation>
    </message>
    <message>
        <source>Point list must contain at least two points (four values).</source>
        <comment>python error</comment>
        <translation>Puntenlijst moet tenminste twee punten bevatten (vier waarden).</translation>
    </message>
    <message>
        <source>Point list must contain an even number of values.</source>
        <comment>python error</comment>
        <translation>Puntenlijst moet een even aantal waarden bevatten.</translation>
    </message>
    <message>
        <source>Point list must contain at least three points (six values).</source>
        <comment>python error</comment>
        <translation>Puntenlijst moet tenminste drie punten bevatten (zes waarden).</translation>
    </message>
    <message>
        <source>Point list must contain at least four points (eight values).</source>
        <comment>python error</comment>
        <translation>Puntenlijst moet tenminste vier punten bevatten (acht waarden).</translation>
    </message>
    <message>
        <source>Point list must have a multiple of six values.</source>
        <comment>python error</comment>
        <translation>Puntenlijst moet een veelvoud van zes waarden bevatten.</translation>
    </message>
    <message>
        <source>Object not found.</source>
        <comment>python error</comment>
        <translation>Object niet gevonden.</translation>
    </message>
    <message>
        <source>Style not found.</source>
        <comment>python error</comment>
        <translation>Stijl niet gevonden.</translation>
    </message>
    <message>
        <source>Cannot set style on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Kan stijl niet instellen van non-tekst frame.</translation>
    </message>
    <message>
        <source>Failed to save EPS.</source>
        <comment>python error</comment>
        <translation>Opslaan van EPS mislukt.</translation>
    </message>
    <message>
        <source>Page number out of range.</source>
        <comment>python error</comment>
        <translation>Paginanummer buiten bereik.</translation>
    </message>
    <message>
        <source>argument is not list: must be list of float values.</source>
        <comment>python error</comment>
        <translation>argument is geen lijst: moet een lijst van zwevende waarden (float values) zijn.</translation>
    </message>
    <message>
        <source>argument contains non-numeric values: must be list of float values.</source>
        <comment>python error</comment>
        <translation>argument bevat niet-nummerieke waarden: moet een lijst van zwevende waarden (float values) zijn.</translation>
    </message>
    <message>
        <source>argument contains no-numeric values: must be list of float values.</source>
        <comment>python error</comment>
        <translation>argument bevat niet-nummerieke waarden: moet een lijst van zwevende waarden (float values) zijn.</translation>
    </message>
    <message>
        <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12.</source>
        <comment>python error</comment>
        <translation>Lijnbreedte buiten bereik, moet zijn 0 &lt;= line_width &lt;=12.</translation>
    </message>
    <message>
        <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
        <comment>python error</comment>
        <translation>Lijn tint buiten bereik, moet zijn 0 &lt;= shade &lt;=100.</translation>
    </message>
    <message>
        <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
        <comment>python error</comment>
        <translation>Vul tint buiten bereik, moet zijn 0 &lt;= shade &lt;=100.</translation>
    </message>
    <message>
        <source>Line style not found.</source>
        <comment>python error</comment>
        <translation>Lijn stijl niet gevonden.</translation>
    </message>
    <message>
        <source>Object is not a linked text frame, can&apos;t unlink.</source>
        <comment>python error</comment>
        <translation>Object is een niet gekoppeld tekst frame, kan niet ontkoppelen.</translation>
    </message>
    <message>
        <source>Object the last frame in a series, can&apos;t unlink. Unlink the previous frame instead.</source>
        <comment>python error</comment>
        <translation>Object is het laatste frame van een serie. Ontkoppel het eerdere frame.</translation>
    </message>
    <message>
        <source>Only text frames can be checked for overflowing</source>
        <comment>python error</comment>
        <translation>Alleeen tekst frames kunnen worden gecontroleerd op overloop</translation>
    </message>
    <message>
        <source>&amp;Script</source>
        <translation>&amp;Script</translation>
    </message>
    <message>
        <source>Croatian</source>
        <translation>Kroatisch</translation>
    </message>
    <message>
        <source>Portuguese</source>
        <translation>Portugees</translation>
    </message>
    <message>
        <source>Portuguese (BR)</source>
        <translation>Portugees (Br)</translation>
    </message>
    <message>
        <source>Scribus Crash</source>
        <translation>Scribus is gecrashed</translation>
    </message>
    <message>
        <source>Scribus crashes due to Signal #%1</source>
        <translation>Scribus is gecrashed met signaal #%1</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>Master Page </source>
        <translation>Sjabloon </translation>
    </message>
    <message>
        <source>4A0</source>
        <translation>4A0</translation>
    </message>
    <message>
        <source>2A0</source>
        <translation>2A0</translation>
    </message>
    <message>
        <source>Comm10E</source>
        <translation>Comm10E</translation>
    </message>
    <message>
        <source>DLE</source>
        <translation>DLE</translation>
    </message>
    <message>
        <source>Could not open output file %1</source>
        <translation>Kan output bestand %1 niet openen</translation>
    </message>
    <message>
        <source>Output stream not writeable</source>
        <translation>Kan output stream %1 niet schrijven</translation>
    </message>
    <message>
        <source>Verification of settings failed: %1</source>
        <translation>Verificatie van instellingen mislukt: %1</translation>
    </message>
    <message>
        <source>Could not open input file %1</source>
        <translation>Kan input bestand %1 niet openen</translation>
    </message>
    <message>
        <source>Unable to read settings XML:</source>
        <translation>Kan XML instellingen niet lezen:</translation>
    </message>
    <message>
        <source>%1 (line %2 col %3)</source>
        <comment>Load PDF settings</comment>
        <translation>%1 [line %2 col %3)</translation>
    </message>
    <message>
        <source>Unable to read settings XML: %1</source>
        <translation>Kan XML instellingen niet lezen: %1</translation>
    </message>
    <message>
        <source>null root node</source>
        <comment>Load PDF settings</comment>
        <translation>null root node</translation>
    </message>
    <message>
        <source>&lt;pdfVersion&gt; invalid</source>
        <comment>Load PDF settings</comment>
        <translation>&lt;pdfVersion&gt; niet correct</translation>
    </message>
    <message>
        <source>found %1 &lt;%2&gt; nodes, need 1.</source>
        <comment>Load PDF settings</comment>
        <translation>gevonden %1 &lt;%2&gt; nodes, benodigd 1.</translation>
    </message>
    <message>
        <source>unexpected null &lt;%2&gt; node</source>
        <comment>Load PDF settings</comment>
        <translation>onverwachte null &lt;%2&gt; node</translation>
    </message>
    <message>
        <source>node &lt;%1&gt; not an element</source>
        <comment>Load PDF settings</comment>
        <translation>node &lt;%1&gt; is geen element</translation>
    </message>
    <message>
        <source>element &lt;%1&gt; lacks `value&apos; attribute</source>
        <comment>Load PDF settings</comment>
        <translation>in element &lt;%1&gt; ontbreekt &apos;value&apos; attribuut</translation>
    </message>
    <message>
        <source>element &lt;%1&gt; value must be `true&apos; or `false&apos;</source>
        <comment>Load PDF settings</comment>
        <translation>element &lt;%1&gt; moet waarde &apos;true&apos; of &apos;false&apos; zijn</translation>
    </message>
    <message>
        <source>element &lt;lpiSettingsEntry&gt; lacks `name&apos; attribute</source>
        <comment>Load PDF settings</comment>
        <translation>in element &lt;lpiSettingsEntry&gt; ontbreekt &apos;name&apos; attribuut</translation>
    </message>
    <message>
        <source>Freetype2 library not available</source>
        <translation>Freetype2 library niet beschikbaar</translation>
    </message>
    <message>
        <source>Font %1 is broken, no embedding</source>
        <translation>Het font %1 is beschadigd en wordt niet ingesloten</translation>
    </message>
    <message>
        <source>Font %1 is broken (read stream), no embedding</source>
        <translation>Het font %1 is beschadigd (read stream), wordt niet ingesloten</translation>
    </message>
    <message>
        <source>Font %1 is broken (FreeType2), discarding it</source>
        <translation>Font %1 is beschadigd (FreeType2), wordt genegeerd</translation>
    </message>
    <message>
        <source>Font %1 is broken (no Face), discarding it</source>
        <translation>Font %1 is beschadigd (no Face), wordt genegeerd</translation>
    </message>
    <message>
        <source>Font %1 has broken glyph %2 (charcode %3)</source>
        <translation>Font %1 heeft beschadigde symboolteken %2 (charcode %3)</translation>
    </message>
    <message>
        <source>Font %1 is broken and will be discarded</source>
        <translation>Font %1 is beschadigd, wordt genegeerd</translation>
    </message>
    <message>
        <source>Font %1 cannot be read, no embedding</source>
        <translation>Font %1 kan niet worden gelezen, wordt niet ingesloten</translation>
    </message>
    <message>
        <source>Failed to load font %1 - font type unknown</source>
        <translation>Font %1 kan niet worden geladen, font type onbekend</translation>
    </message>
    <message>
        <source>Font %1 loaded from %2(%3)</source>
        <translation>Font %1 geladen uit %2(%3)</translation>
    </message>
    <message>
        <source>Font %1(%2) is duplicate of %3</source>
        <translation>Font %1(%2) is een duplicaat van %3</translation>
    </message>
    <message>
        <source>Loading font %1 (found using fontconfig)</source>
        <translation>Laden font %1 (gevonden met fontconfig)</translation>
    </message>
    <message>
        <source>Failed to load a font - freetype2 couldn&apos;t find the font file</source>
        <translation>Laden van een font niet gelukt - freetype2 kan font bestand niet vinden</translation>
    </message>
    <message>
        <source>Font %1 is broken (FreeType), discarding it</source>
        <translation>Font %1 is beschadigd (FreeType), wordt genegeerd</translation>
    </message>
    <message>
        <source>Font %1  has invalid glyph %2 (charcode %3), discarding it</source>
        <translation>Font %1 heeft beschadigde symboolteken %2 (charcode %3), wordt genegeerd</translation>
    </message>
    <message>
        <source>extracting face %1 from font %2 (offset=%3, nTables=%4)</source>
        <translation>extractie face %1 van font %2 (offset=%3, nTables=%4)</translation>
    </message>
    <message>
        <source>memcpy header: %1 %2 %3</source>
        <translation>memcpy header: %1 %2 %3</translation>
    </message>
    <message>
        <source>table &apos;%1&apos;</source>
        <translation>tabel &apos;%1&apos;</translation>
    </message>
    <message>
        <source>memcpy table: %1 %2 %3</source>
        <translation>memcpy tabel: %1 %2 %3</translation>
    </message>
    <message>
        <source>memcpy offset: %1 %2 %3</source>
        <translation>memcpy positie: %1 %2 %3</translation>
    </message>
    <message>
        <source> cm</source>
        <translation> cm</translation>
    </message>
    <message>
        <source> c</source>
        <translation> c</translation>
    </message>
    <message>
        <source>cm</source>
        <translation>cm</translation>
    </message>
    <message>
        <source>c</source>
        <translation>c</translation>
    </message>
    <message>
        <source>Millimeters (mm)</source>
        <translation>Millimeters (mm)</translation>
    </message>
    <message>
        <source>Centimeters (cm)</source>
        <translation>Centimeters (cm)</translation>
    </message>
    <message>
        <source>Cicero (c)</source>
        <translation>Cicero (c)</translation>
    </message>
    <message>
        <source>page</source>
        <comment>page export</comment>
        <translation>pagina</translation>
    </message>
    <message>
        <source>Document Template: </source>
        <translation>Document Sjabloon:</translation>
    </message>
    <message>
        <source>Color not found.</source>
        <comment>python error</comment>
        <translation>Kleur niet gevonden.</translation>
    </message>
    <message>
        <source>Color not found in document.</source>
        <comment>python error</comment>
        <translation>Kleur niet gevonden in document.</translation>
    </message>
    <message>
        <source>Color not found in default colors.</source>
        <comment>python error</comment>
        <translation>Kleur niet gevonden in standaard kleuren.</translation>
    </message>
    <message>
        <source>Cannot group less than two items</source>
        <comment>python error</comment>
        <translation>Kan minder dan twee items niet groeperen</translation>
    </message>
    <message>
        <source>Can&apos;t group less than two items</source>
        <comment>python error</comment>
        <translation>Kan minder dan twee items niet groeperen</translation>
    </message>
    <message>
        <source>Need selection or argument list of items to group</source>
        <comment>python error</comment>
        <translation>Benodig selectie of argumentenlijst van te groeperen items</translation>
    </message>
    <message>
        <source>Can&apos;t set bookmark on a non-text frame</source>
        <comment>python error</comment>
        <translation>Kan geen bookmark instellen van non-tekst frame</translation>
    </message>
    <message>
        <source>Can&apos;t get info from a non-text frame</source>
        <comment>python error</comment>
        <translation>Kan geen informatie krijgen van non-tekst frame</translation>
    </message>
    <message>
        <source>The filename should not be empty string.</source>
        <comment>python error</comment>
        <translation>De bestandsnaam kan geen lege string zijn.</translation>
    </message>
    <message>
        <source>Scribus Python interface module

This module is the Python interface for Scribus. It provides functions
to control scribus and to manipulate objects on the canvas. Each
function is documented individually below.

A few things are common across most of the interface.

Most functions operate on frames. Frames are identified by their name,
a string - they are not real Python objects. Many functions take an
optional (non-keyword) parameter, a frame name.
Many exceptions are also common across most functions. These are
not currently documented in the docstring for each function.
- Many functions will raise a NoDocOpenError if you try to use them
without a document to operate on.
- If you do not pass a frame name to a function that requires one,
the function will use the currently selected frame, if any, or
raise a NoValidObjectError if it can&apos;t find anything to operate
on.
- Many functions will raise WrongFrameTypeError if you try to use them
on a frame type that they do not make sense with. For example, setting
the text color on a graphics frame doesn&apos;t make sense, and will result
in this exception being raised.
- Errors resulting from calls to the underlying Python API will be
passed through unaltered. As such, the list of exceptions thrown by
any function as provided here and in its docstring is incomplete.

Details of what exceptions each function may throw are provided on the
function&apos;s documentation, though as with most Python code this list
is not exhaustive due to exceptions from called functions.
</source>
        <translation>Scribus Python interface module

Deze module is de Python interface voor Scribus. Het bevat functies
om Scribus te beheersen en voor manipulatie van objecten op het werkblad. 
Elke functie is hieronder afzonderlijk gedocumenteerd.

De meeste functies zijn bewerkingen van frames. Frames worden 
geïdentificeerd bij hun naam - zij zijn geen echte Python objecten.
Veel functies benodigen een optionele (non-keyword) parameter, een frame naam.
Veel uitzonderingen komen regelmatig bij de meeste functies voor. Zij zijn
niet gedocumenteerd in de docstring voor elke functie.
- Vele functies roepen een NoDocOpenError op als zij worden gebruikt 
zonder te bewerken document.
- Als er geen frame naam wordt toegekend aan een functie waarbij dat nodig is,
zal de functie het actieve frame gebruiken, als aanwezig, of een NoValidObjectError 
oproepen als er niets is om te bewerken.
- Meerdere functies zullen een WrongFrameTypeError oproepen als getracht wordt
deze toe te passen op een frame waar dit niet mogeljk is. Bijvoorbeeld,
instellen van de tekstkleur in een afbeeldingenframe is niet relevant, en zal een
WrongFrameTypeError oproepen.
- Fouten die resulteren uit aanroepen de van de onderliggende Python API
worden ongewijzigd doorgegeven. Zodoende is de lijst met uitzonderingen die
elke functie die hier wordt gebruikt incompleet.

Details van welke uitzonderingen elke functie oproept worden meegegeven in de
documentatie van de functie, maar zoals met het grootste deel van de Python code
is deze documentatie niet uitputtend ten gevolge van uitzonderingen van
aangeroepen functies.
</translation>
    </message>
    <message>
        <source>OpenDocument Text Documents</source>
        <translation>OpenDocument Text Documenten</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation>Kopie #%1 van</translation>
    </message>
    <message>
        <source>Black</source>
        <translation>Zwart</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation>Cyaan</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation>Magenta</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation>Geel</translation>
    </message>
    <message>
        <source>Color Wheel</source>
        <translation>Kleurwiel</translation>
    </message>
    <message>
        <source>Font Preview</source>
        <translation>Fontvoorbeeld</translation>
    </message>
    <message>
        <source>My Plugin</source>
        <translation>Mijn plug-in</translation>
    </message>
    <message>
        <source>New From Template</source>
        <translation>Nieuw van sjabloon</translation>
    </message>
    <message>
        <source>Export As Image</source>
        <translation>Exporteren als afbeelding</translation>
    </message>
    <message>
        <source>PS/EPS Importer</source>
        <translation>PS/EPS importfilter</translation>
    </message>
    <message>
        <source>Save As Template</source>
        <translation>Opslaan als sjabloon</translation>
    </message>
    <message>
        <source>Scripter</source>
        <translation>Scripter</translation>
    </message>
    <message>
        <source>Short Words</source>
        <translation>Korte woorden</translation>
    </message>
    <message>
        <source>SVG Export</source>
        <translation>SVG exporteren</translation>
    </message>
    <message>
        <source>SVG Import</source>
        <translation>SVG importeren</translation>
    </message>
    <message>
        <source>OpenOffice.org Draw Importer</source>
        <translation>OpenOffice.org Draw Importfilter</translation>
    </message>
    <message>
        <source>Scribus crashes due to the following exception : %1</source>
        <translation>Scribus wordt gestopt ten gevolge van de volgende uitzondering : %1</translation>
    </message>
    <message>
        <source>Creating Font Cache</source>
        <translation>Maak Font Cache aan</translation>
    </message>
    <message>
        <source>New Font found, checking...</source>
        <translation>Nieuw Font gevonden, controleren...</translation>
    </message>
    <message>
        <source>Modified Font found, checking...</source>
        <translation>Bijgewerkt Font gevonden, controleren...</translation>
    </message>
    <message>
        <source>Reading Font Cache</source>
        <translation>Lees Font Cache</translation>
    </message>
    <message>
        <source>Writing updated Font Cache</source>
        <translation>Schrijf bijgewerkte Font Cache</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation>Zoekt naar fonts</translation>
    </message>
    <message>
        <source>You are running a development version of Scribus 1.3.x. The document you are working with was created in Scribus 1.2.3 or lower. The process of saving will make this file unusable again in Scribus 1.2.3 unless you use File-&gt;Save As. Are you sure you wish to proceed with this operation?</source>
        <translation>U werkt met een ontwikkelversie van Scribus 1.3.x. Het document waarin u werkt is oorspronkelijk opgezet in Scribus 1.2.3. of lager. Opslaan van dit bestand maakt het onbruikbaar voor Scribus 1.2.3. tenzij u Bestand-&gt; Opslaan als.. gebruikt. Weet u zeker dat u wilt doorgaan?</translation>
    </message>
    <message>
        <source>The changes to your document have not been saved and you have requested to revert them. Do you wish to continue?</source>
        <translation>De veranderingen in het document zijn nog niet opgeslagen en u heeft gevraagd deze terug te zetten. Wilt u doorgaan?</translation>
    </message>
    <message>
        <source>A file named &apos;%1&apos; already exists.&lt;br/&gt;Do you want to replace it with the file you are saving?</source>
        <translation>Een bestand met de naam &apos;%1&apos; bestaat reeds.&lt;br/&gt;Wilt u dit bestand vervangen door de nieuwe versie?</translation>
    </message>
    <message>
        <source>firstPageOrder is bigger than allowed.</source>
        <comment>python error</comment>
        <translation>firstPageOrder is groter dan toegestaan.</translation>
    </message>
    <message>
        <source>Old .sla format support</source>
        <translation>Ouder .sla formaat ondersteuning</translation>
    </message>
    <message>
        <source>German (Trad.)</source>
        <translation>Duits (Trad.)</translation>
    </message>
    <message>
        <source>Exporting PostScript File</source>
        <translation>Exporteren PostScript bestand</translation>
    </message>
    <message>
        <source>Printing File</source>
        <translation>Afdrukken bestand</translation>
    </message>
    <message>
        <source>&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;</source>
        <translation>&lt;p&gt;U probeert meer pagina&apos;s te importeren dan er beschikbaar zijn in het huidige document geteld vanaf de actieve pagina.&lt;/p&gt;Maak een keuze:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Aanmaken&lt;/b&gt; ontbrekende pagina&apos;s&lt;/li&gt;&lt;li&gt;&lt;b&gt;Importeren&lt;/b&gt; Pagina&apos;s tot de laatste pagina&lt;/li&gt;&lt;li&gt;&lt;b&gt;Afbreken&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;</translation>
    </message>
    <message>
        <source>C&amp;reate</source>
        <translation>&amp;Aanmaken</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importeren</translation>
    </message>
    <message>
        <source>Thai</source>
        <translation>Thais</translation>
    </message>
    <message>
        <source>Barcode Generator</source>
        <translation>Streepjescodegenerator</translation>
    </message>
    <message>
        <source>OpenOffice.org Draw (*.sxd *.odg);;All Files (*)</source>
        <translation>OpenOffice.org Draw (*.sxd *.odg);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Word Documents</source>
        <translation>Word documenten</translation>
    </message>
    <message>
        <source>Palm PDB Documents</source>
        <comment>PDB Importer</comment>
        <translation>Palm PDB documenten</translation>
    </message>
    <message>
        <source>PDB_data</source>
        <comment>PDB Importer</comment>
        <translation>PDB_data</translation>
    </message>
    <message>
        <source>PDB Import</source>
        <comment>PDB Importer</comment>
        <translation>PDB import</translation>
    </message>
    <message>
        <source>Could not open file %1</source>
        <comment>PDB Importer</comment>
        <translation>Kan bestand %1 niet openen</translation>
    </message>
    <message>
        <source>Luxembourgish</source>
        <translation>Luxemburgs</translation>
    </message>
    <message>
        <source>Arabic</source>
        <translation>Arabisch</translation>
    </message>
    <message>
        <source>Estonian</source>
        <translation>Estisch</translation>
    </message>
    <message>
        <source>Japanese</source>
        <translation>Japans</translation>
    </message>
    <message>
        <source>Given master page name does not match any existing.</source>
        <comment>python error</comment>
        <translation>Deze master pagina naam komt niet overeen met een bestaande.</translation>
    </message>
    <message>
        <source>Icelandic</source>
        <translation>IJslands</translation>
    </message>
    <message>
        <source>%1 may be corrupted : missing resolution tags</source>
        <translation>%1 kan beschadigd zijn: ontbrekende resolutie labels</translation>
    </message>
    <message>
        <source>This file is not recognized as a PDB document. Please, report this as a bug if you are sure it is one.</source>
        <comment>PDB Importer</comment>
        <translation>Bestand wordt niet herkend als een PDF document. Meldt dit als een bug.</translation>
    </message>
    <message>
        <source>Breton</source>
        <translation>Bretons</translation>
    </message>
    <message>
        <source>English (American)</source>
        <translation>Engels (Amerikaans)</translation>
    </message>
    <message>
        <source>English (Australian)</source>
        <translation>Engels (Australisch)</translation>
    </message>
    <message>
        <source>%1 may be corrupted : missing or wrong resolution tags</source>
        <translation>%1 kan beschadigd zijn: ontbrekende of verkeerde resolutie labels</translation>
    </message>
    <message>
        <source>German (Swiss)</source>
        <translation>Duits (Zwitsers)</translation>
    </message>
    <message>
        <source>Chinese (Trad.)</source>
        <translation>Chinees (Trad.)</translation>
    </message>
    <message>
        <source>Font %1 has broken metrics in file %2, ignoring metrics</source>
        <translation>Het font %1 heeft gebroken metriek in bestand %2, negeer metriek</translation>
    </message>
    <message>
        <source>Valid metrics were found for font %1, using metrics in file %2</source>
        <translation>Geldige metriek werd gevonden voor font %1, gebruik metriek in bestand %2</translation>
    </message>
    <message>
        <source>Insufficient memory for this image size.</source>
        <translation>Onvoldoende geheugen voor deze afbeeldinggrootte.</translation>
    </message>
    <message>
        <source>Fill opacity out of bounds, must be 0.0 &lt;= opacity &lt;= 1.0</source>
        <comment>python error</comment>
        <translation>Vul ondoorzichtigheid  buiten bereik, moet zijn 0.0 &lt;= opacity &lt;= 1.0</translation>
    </message>
    <message>
        <source>Transparency out of bounds, must be 0 &lt;= transparency &lt;= 1.</source>
        <comment>python error</comment>
        <translation>Transparantie buiten bereik, moet zijn 0 &lt;=  transparency &lt;= 1.</translation>
    </message>
    <message>
        <source>%1 has more than 8 bits per channel, Scribus will not preserve less significant bits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get text distances of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text distances out of bounds, must be positive.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set text distances on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QTextEdit</name>
    <message>
        <source>Clear</source>
        <translation>Leegmaken</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>Alles selecteren</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Ongedaan maken</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>O&amp;pnieuw doen</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Kni&amp;ppen</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiëren</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>P&amp;lakken</translation>
    </message>
</context>
<context>
    <name>QTitleBar</name>
    <message>
        <source>System Menu</source>
        <translation>Systeemmenu</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Oprollen</translation>
    </message>
    <message>
        <source>Unshade</source>
        <translation>Tevoorschijn halen</translation>
    </message>
    <message>
        <source>Normalize</source>
        <translation>Normaliseren</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>Minimaliseren</translation>
    </message>
    <message>
        <source>Maximize</source>
        <translation>Maximaliseren</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Sluiten</translation>
    </message>
</context>
<context>
    <name>QWorkspace</name>
    <message>
        <source>&amp;Restore</source>
        <translation>&amp;Herstellen</translation>
    </message>
    <message>
        <source>&amp;Move</source>
        <translation>&amp;Verplaatsen</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;Grootte</translation>
    </message>
    <message>
        <source>Mi&amp;nimize</source>
        <translation>Mi&amp;nimaliseren</translation>
    </message>
    <message>
        <source>Ma&amp;ximize</source>
        <translation>Ma&amp;ximaliseren</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Sluiten</translation>
    </message>
    <message>
        <source>Stay on &amp;Top</source>
        <translation>Altijd op &amp;voorgrond</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>Minimaliseren</translation>
    </message>
    <message>
        <source>Restore Down</source>
        <translation>Herstellen onder</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Sluiten</translation>
    </message>
    <message>
        <source>Sh&amp;ade</source>
        <translation>&amp;Oprollen</translation>
    </message>
    <message>
        <source>%1 - [%2]</source>
        <translation>%1 - [%2]</translation>
    </message>
    <message>
        <source>&amp;Unshade</source>
        <translation>&amp;Tevoorschijn halen</translation>
    </message>
</context>
<context>
    <name>ReformDoc</name>
    <message>
        <source>Document Setup</source>
        <translation>Instellingen voor document</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Marge hulplijnen</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>&amp;Boven:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Links:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>On&amp;der:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>&amp;Rechts:</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Paginagrootte</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Aangepast</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Staand</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Liggend</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Grootte:</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Orië&amp;ntatie:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Breedte:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Hoogte:</translation>
    </message>
    <message>
        <source>&amp;Unit:</source>
        <translation>&amp;Eenheid:</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation>Automatisch opslaan</translation>
    </message>
    <message>
        <source>min</source>
        <translation>min</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation>&amp;Interval:</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Document</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation>Hulplijnen</translation>
    </message>
    <message>
        <source>Page Display</source>
        <translation>Paginaweergave</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Kleur:</translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation>&amp;Niet-afdrukbare gebieden in margekleur weergeven</translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation>Alt+U</translation>
    </message>
    <message>
        <source>Show Pictures</source>
        <translation type="obsolete">Toon plaatjes</translation>
    </message>
    <message>
        <source>Show Text Chains</source>
        <translation>Tekstkoppeling tonen</translation>
    </message>
    <message>
        <source>Show Frames</source>
        <translation>Toon Kaders</translation>
    </message>
    <message>
        <source>Display</source>
        <translation>Tonen</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation>Typografie</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation>Gereedschappen</translation>
    </message>
    <message>
        <source>Hyphenator</source>
        <translation>Afbreekfunctie</translation>
    </message>
    <message>
        <source>Fonts</source>
        <translation>Fonts</translation>
    </message>
    <message>
        <source>PDF Export</source>
        <translation>PDF Exporteren</translation>
    </message>
    <message>
        <source>Color Management</source>
        <translation>Kleurbeheer</translation>
    </message>
    <message>
        <source>Turns the display of frames on or off</source>
        <translation>Zet weergave van frames aan of uit</translation>
    </message>
    <message>
        <source>Turns the display of pictures on or off</source>
        <translation type="obsolete">Zet weergave van afbeeldingen aan of uit</translation>
    </message>
    <message>
        <source>Color for paper</source>
        <translation>Papierkleur</translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation>Maskeert het gebied buiten de kantlijnen in de kantlijnkleur</translation>
    </message>
    <message>
        <source>Document Information</source>
        <translation>Documentinformatie</translation>
    </message>
    <message>
        <source>Show Text Control Characters</source>
        <translation>Opmaaktekens tonen</translation>
    </message>
    <message>
        <source>Rulers relative to Page</source>
        <translation>Lineaal relatief naar pagina</translation>
    </message>
    <message>
        <source>Minimum Scratch Space</source>
        <translation>Minimale kladruimte</translation>
    </message>
    <message>
        <source>Gaps between Pages</source>
        <translation>Ruimte tussen pagina&apos;s</translation>
    </message>
    <message>
        <source>Horizontal:</source>
        <translation>Horizontaal:</translation>
    </message>
    <message>
        <source>Vertical:</source>
        <translation>Verticaal:</translation>
    </message>
    <message>
        <source>Preflight Verifier</source>
        <translation>Preflight controle</translation>
    </message>
    <message>
        <source>Document Item Attributes</source>
        <translation>Document Item attributen</translation>
    </message>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation>Inhoudsopgave en indices</translation>
    </message>
    <message>
        <source>Display non-printing characters such as paragraph markers in text frames</source>
        <translation>Toon niet te printen karakters, zoals alineatekens in tekstframes</translation>
    </message>
    <message>
        <source>Adjusting Colors</source>
        <translation>Aanpassen kleuren</translation>
    </message>
    <message>
        <source>Enable or disable the display of linked text frames.</source>
        <translation>Zet de weergave van gekoppelde frames aan of uit.</translation>
    </message>
    <message>
        <source>Apply size settings to all pages</source>
        <translation>Pas formaat-instellingen toe op alle pagina&apos;s</translation>
    </message>
    <message>
        <source>Sections</source>
        <translation>Secties</translation>
    </message>
    <message>
        <source>Apply the page size changes to all existing pages in the document</source>
        <translation>Pas de pagina-formaat-instellingen toe op alle bestaande pagina&apos;s in het document</translation>
    </message>
    <message>
        <source>Show Images</source>
        <translation>Afbeeldingen tonen</translation>
    </message>
    <message>
        <source>Turns the display of images on or off</source>
        <translation>Zet weergave van afbeeldingen aan of uit</translation>
    </message>
</context>
<context>
    <name>RunScriptDialog</name>
    <message>
        <source>Python Scripts (*.py);; All Files (*)</source>
        <translation>Python scripts (*.py);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Run as Extension Script</source>
        <comment>run script dialog</comment>
        <translation>Voer uit als extensie script</translation>
    </message>
</context>
<context>
    <name>SMBase</name>
    <message>
        <source>Style Manager</source>
        <translation>Stijl manager</translation>
    </message>
    <message>
        <source>Column 1</source>
        <translation>Kolom 1</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Toevoegen</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+T</translation>
    </message>
    <message>
        <source>C&amp;lone</source>
        <translation>K&amp;loon</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Naam:</translation>
    </message>
    <message>
        <source>O&amp;K</source>
        <translation>O&amp;K</translation>
    </message>
    <message>
        <source>Alt+K</source>
        <translation>Alt+K</translation>
    </message>
    <message>
        <source>A&amp;pply</source>
        <translation>Toe&amp;passen</translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation>Alt+P</translation>
    </message>
    <message>
        <source>Ca&amp;ncel</source>
        <translation>A&amp;nnuleren</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation>Alt+N</translation>
    </message>
</context>
<context>
    <name>SMLineStyle</name>
    <message>
        <source>Properties</source>
        <translation>Eigenschappen</translation>
    </message>
    <message>
        <source>Lines</source>
        <translation>Lijnen</translation>
    </message>
</context>
<context>
    <name>SToolBAlign</name>
    <message>
        <source>Style Settings</source>
        <translation>Stijlinstellingen</translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation>Stijl van huidige alinea</translation>
    </message>
</context>
<context>
    <name>SToolBColorF</name>
    <message>
        <source>Fill Color Settings</source>
        <translation>Vulkleur-instellingen</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Kleur van de tekstvulling</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation>Verzadiging van kleur van tekstinvulling</translation>
    </message>
</context>
<context>
    <name>SToolBColorS</name>
    <message>
        <source>Stroke Color Settings</source>
        <translation>Lijnkleur-instellingen</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Kleur van de tekstlijnen</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation>Verzadiging van kleur van tekstlijnen</translation>
    </message>
</context>
<context>
    <name>SToolBFont</name>
    <message>
        <source>Font Settings</source>
        <translation>Font-instellingen</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Font of selected text</source>
        <translation>Font van geselecteerde tekst</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Tekengrootte</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation>Schaalbreedte van tekens</translation>
    </message>
    <message>
        <source>Scaling height of characters</source>
        <translation>Schaalhoogte van tekens</translation>
    </message>
</context>
<context>
    <name>SToolBStyle</name>
    <message>
        <source>Character Settings</source>
        <translation>Teken-instellingen</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation>Handmatige tracking</translation>
    </message>
</context>
<context>
    <name>SVGExportPlugin</name>
    <message>
        <source>Save Page as &amp;SVG...</source>
        <translation>Pagina opslaan als &amp;SVG...</translation>
    </message>
    <message>
        <source>Exports SVG Files</source>
        <translation>Exporteert SVG bestanden</translation>
    </message>
    <message>
        <source>Exports the current page into an SVG file.</source>
        <translation>Extorteert de huidige pagina naar een SVG bestand.</translation>
    </message>
</context>
<context>
    <name>SVGImportPlugin</name>
    <message>
        <source>Import &amp;SVG...</source>
        <translation>&amp;SVG importeren...</translation>
    </message>
    <message>
        <source>Imports SVG Files</source>
        <translation>Importeert SVG bestanden</translation>
    </message>
    <message>
        <source>Imports most SVG files into the current document,
converting their vector data into Scribus objects.</source>
        <translation>Importeert de meeste SVG bestanden naar het huidige document,
zet de vectordata over naar Scribus objecten.</translation>
    </message>
    <message>
        <source>Scalable Vector Graphics</source>
        <translation>Scalable Vector Graphics</translation>
    </message>
    <message>
        <source>SVG file contains some unsupported features</source>
        <translation>SVG bestand bevat niet ondersteunde eigenschappen</translation>
    </message>
</context>
<context>
    <name>SWDialog</name>
    <message>
        <source>Short Words</source>
        <comment>short words plugin</comment>
        <translation>Korte woorden</translation>
    </message>
    <message>
        <source>Apply unbreakable space on:</source>
        <comment>short words plugin</comment>
        <translation>Niet afbreekbare spatie toepassen op:</translation>
    </message>
    <message>
        <source>&amp;Selected frames</source>
        <comment>short words plugin</comment>
        <translation>Ge&amp;selecteerde frames</translation>
    </message>
    <message>
        <source>Active &amp;page</source>
        <comment>short words plugin</comment>
        <translation>Actieve &amp;pagina</translation>
    </message>
    <message>
        <source>&amp;All items</source>
        <comment>short words plugin</comment>
        <translation>&amp;Alle items</translation>
    </message>
    <message>
        <source>Only selected frames processed.</source>
        <comment>short words plugin</comment>
        <translation>Enkel geslecteerde frames verwerkt.</translation>
    </message>
    <message>
        <source>Only actual page processed.</source>
        <comment>short words plugin</comment>
        <translation>Alleen huidige pagina verwerkt.</translation>
    </message>
    <message>
        <source>All items in document processed.</source>
        <comment>short words plugin</comment>
        <translation>Alle items in document verwerkt.</translation>
    </message>
</context>
<context>
    <name>SWPrefsGui</name>
    <message>
        <source>User settings</source>
        <translation>Gebruikersinstellingen</translation>
    </message>
    <message>
        <source>System wide configuration</source>
        <translation>Systeeminstellingen</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>Op&amp;slaan</translation>
    </message>
    <message>
        <source>&amp;Reset</source>
        <translation>He&amp;rstel</translation>
    </message>
    <message>
        <source>Save user configuration</source>
        <translation>Bewaar gebruikersinstellingen</translation>
    </message>
    <message>
        <source>Reload system wide configuration and remove user defined one</source>
        <translation>Herlaad systeem instellingen en verwijder gebruikersinstellingen</translation>
    </message>
    <message>
        <source>Edit custom configuration. If you save it, it will be used over system wide configuration</source>
        <translation>Bewerk handmatig instellingen. Als u deze bewaart zullen deze boven de systeeminstellingen gebruikt worden</translation>
    </message>
    <message>
        <source>Short Words</source>
        <translation>Korte woorden</translation>
    </message>
    <message>
        <source>User configuration exists elready. Do you really want to overwrite it?</source>
        <translation>Gerbruikersinstellingen bestaan reeds. Wilt u deze werkelijk overschrijven?</translation>
    </message>
    <message>
        <source>Cannot write file %1.</source>
        <translation>Kan bestand %1 niet schrijven.</translation>
    </message>
    <message>
        <source>User settings saved</source>
        <translation>Gebruikersinstellingen bewaart</translation>
    </message>
    <message>
        <source>System wide configuration reloaded</source>
        <translation>Systeeminstellingen herladen</translation>
    </message>
    <message>
        <source>Cannot open file %1</source>
        <translation>Kan bestand %1 niet openen</translation>
    </message>
</context>
<context>
    <name>SaveAsTemplatePlugin</name>
    <message>
        <source>Save as &amp;Template...</source>
        <translation>Opslaan als &amp;sjabloon...</translation>
    </message>
    <message>
        <source>Save a document as a template</source>
        <translation>Bewaar een bestand als slabloon</translation>
    </message>
    <message>
        <source>Save a document as a template. Good way to ease the initial work for documents with a constant look</source>
        <translation>Bewaar een bestand als slabloon. Een goede manier om de gebruikelijke opmaak voor bestanden te vereenvoudigen</translation>
    </message>
</context>
<context>
    <name>ScPlugin</name>
    <message>
        <source>Persistent</source>
        <comment>plugin manager plugin type</comment>
        <translation>Persistente</translation>
    </message>
    <message>
        <source>Action</source>
        <comment>plugin manager plugin type</comment>
        <translation>Actie</translation>
    </message>
    <message>
        <source>Load/Save/Import/Export</source>
        <translation>Laad/Bewaar/Importeer/Exporteer</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Onbekend</translation>
    </message>
</context>
<context>
    <name>ScToolBar</name>
    <message>
        <source>Top</source>
        <translation>Top</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Rechts</translation>
    </message>
    <message>
        <source>Bottom</source>
        <translation>Onder</translation>
    </message>
    <message>
        <source>Left</source>
        <translation>Links</translation>
    </message>
    <message>
        <source>Allow Docking To...</source>
        <translation>Toestaan vastzetten aan...</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation>Horizontaal</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation>Verticaal</translation>
    </message>
    <message>
        <source>Floating Orientation...</source>
        <translation>Vrije oriëntatie...</translation>
    </message>
</context>
<context>
    <name>ScWinPrint</name>
    <message>
        <source>Printing...</source>
        <translation>Afdrukken...</translation>
    </message>
</context>
<context>
    <name>ScriXmlDoc</name>
    <message>
        <source>Copy #%1 of </source>
        <translation>Kopie #%1 van</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Achtergrond</translation>
    </message>
</context>
<context>
    <name>ScribusColorList</name>
    <message>
        <source>Document Colors</source>
        <translation>Documentkleuren</translation>
    </message>
</context>
<context>
    <name>ScribusDoc</name>
    <message>
        <source>New Layer</source>
        <translation>Nieuwe laag</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normaal</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Document</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Achtergrond</translation>
    </message>
    <message>
        <source>Do you really want to clear all your text?</source>
        <translation>Wilt u werkelijk uw tekst verwijderen?</translation>
    </message>
    <message>
        <source>Cannot Delete In-Use Item</source>
        <translation>Kan item in gebruik niet wissen</translation>
    </message>
    <message>
        <source>The item %1 is currently being edited by Story Editor. The delete operation will be cancelled</source>
        <translation>Dit item %1 wordt momenteel bijgewerkt met de Story Editor. Wissen wordt geannuleerd</translation>
    </message>
    <message>
        <source>An error occurred while opening ICC profiles, color management is not enabled.</source>
        <translation>Fout opgetreden bij openen van ICC profielen, kleurmanagement is niet ingeschakeld.</translation>
    </message>
</context>
<context>
    <name>ScribusMainWindow</name>
    <message>
        <source>Initializing Plugins</source>
        <translation>Initialiseren Plugins</translation>
    </message>
    <message>
        <source>Initializing Keyboard Shortcuts</source>
        <translation>Initializeren Sneltoetsen</translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation>Voorkeuren inlezen</translation>
    </message>
    <message>
        <source>Initializing Story Editor</source>
        <translation>Initializeren Story Editor</translation>
    </message>
    <message>
        <source>Reading ICC Profiles</source>
        <translation>ICC Profielen inlezen</translation>
    </message>
    <message>
        <source>Initializing Hyphenator</source>
        <translation>Initializeren Afbreekfunctie</translation>
    </message>
    <message>
        <source>Reading Scrapbook</source>
        <translation>Kladblok inlezen</translation>
    </message>
    <message>
        <source>Setting up Shortcuts</source>
        <translation>Instellen sneltoetsen</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Bestand</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>Bewerken</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation>Zoekt naar fonts</translation>
    </message>
    <message>
        <source>There are no fonts found on your system.</source>
        <translation>Er zijn geen fonts op uw systeem gevonden.</translation>
    </message>
    <message>
        <source>Exiting now.</source>
        <translation>Sluit nu af.</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation>Kritieke fout</translation>
    </message>
    <message>
        <source>Font System Initialized</source>
        <translation>Fonts geïnitialiseerd</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Bestand</translation>
    </message>
    <message>
        <source>Open &amp;Recent</source>
        <translation>&amp;Recent geopend</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importeren</translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation>&amp;Exporteren</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>Be&amp;werken</translation>
    </message>
    <message>
        <source>St&amp;yle</source>
        <translation>Sti&amp;jl</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation>&amp;Kleur</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>&amp;Grootte</translation>
    </message>
    <message>
        <source>&amp;Shade</source>
        <translation>&amp;Tint</translation>
    </message>
    <message>
        <source>&amp;Font</source>
        <translation>&amp;Font</translation>
    </message>
    <message>
        <source>&amp;Effects</source>
        <translation>&amp;Effecten</translation>
    </message>
    <message>
        <source>&amp;Item</source>
        <translation>&amp;Item</translation>
    </message>
    <message>
        <source>Preview Settings</source>
        <translation>Voorbeeld instellingen</translation>
    </message>
    <message>
        <source>Level</source>
        <translation>Niveau</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation>In &amp;laag zetten</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation>&amp;PDF-opties</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>&amp;Vorm</translation>
    </message>
    <message>
        <source>C&amp;onvert To</source>
        <translation>&amp;Omzetten naar</translation>
    </message>
    <message>
        <source>I&amp;nsert</source>
        <translation>I&amp;nvoegen</translation>
    </message>
    <message>
        <source>Character</source>
        <translation>Teken</translation>
    </message>
    <message>
        <source>Quote</source>
        <translation>Aanhalingsteken</translation>
    </message>
    <message>
        <source>Space</source>
        <translation>Spatie</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation>&amp;Pagina</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>Beel&amp;d</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation>E&amp;xtras</translation>
    </message>
    <message>
        <source>&amp;Windows</source>
        <translation>&amp;Venster</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;Help</translation>
    </message>
    <message>
        <source>&amp;Alignment</source>
        <translation>&amp;Uitlijning</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation>Gereed</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>Importing Pages...</source>
        <translation>Pagina&apos;s worden geïmporteerd...</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation>Pagina(&apos;s) importeren</translation>
    </message>
    <message>
        <source>Import done</source>
        <translation>Importeren voltooid</translation>
    </message>
    <message>
        <source>Found nothing to import</source>
        <translation>Niets gevonden om te importeren</translation>
    </message>
    <message>
        <source>File %1 is not in an acceptable format</source>
        <translation>Bestand %1 is een niet door Scribus geaccepteerd bestandsformaat.</translation>
    </message>
    <message>
        <source>Loading...</source>
        <translation>Laden...</translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation type="obsolete">PostScript</translation>
    </message>
    <message>
        <source>Some ICC profiles used by this document are not installed:</source>
        <translation>Enkele ICC profielen in dit document zijn niet geïnstalleerd:</translation>
    </message>
    <message>
        <source> was replaced by: </source>
        <translation> vervangen door: </translation>
    </message>
    <message>
        <source>(converted)</source>
        <translation>(omgezet)</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation>Alle ondersteunde formaten</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Cannot write the file: 
%1</source>
        <translation>Kan het bestand niet schrijven:
%1</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</source>
        <translation>Documenten (*.sla *.sla.gz *.scd *.scd.gz);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documenten (*.sla *.scd);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation>Opslaan als</translation>
    </message>
    <message>
        <source>Saving...</source>
        <translation>Opslaan...</translation>
    </message>
    <message>
        <source>Scribus has detected some errors. Consider using the Preflight Verifier to correct them</source>
        <translation>Fouten geconstateerd. Gebruik Preflight Controle om te herstellen</translation>
    </message>
    <message>
        <source>&amp;Ignore</source>
        <translation>&amp;Afbreken</translation>
    </message>
    <message>
        <source>&amp;Abort</source>
        <translation>&amp;Stop
</translation>
    </message>
    <message>
        <source>Printing...</source>
        <translation>Afdrukken...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Document</translation>
    </message>
    <message>
        <source>Printing failed!</source>
        <translation>Afdrukken mislukt!</translation>
    </message>
    <message>
        <source>Cannot Cut In-Use Item</source>
        <translation>Kan item in gebruik niet knippen</translation>
    </message>
    <message>
        <source>The item %1 is currently being edited by Story Editor. The cut operation will be cancelled</source>
        <translation>Dit item %1 wordt momenteel bijgewerkt met de Story Editor. Knippen wordt geannuleerd</translation>
    </message>
    <message>
        <source>About Qt</source>
        <translation>Over Qt</translation>
    </message>
    <message>
        <source>Scribus Manual</source>
        <translation>Scribus handboek</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Opslaan als</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Tekstbestanden (*.txt);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normaal</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Naam:</translation>
    </message>
    <message>
        <source>Convert Page to Master Page</source>
        <translation>Zet Pagina om naar sjabloon</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Grootte:</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Grootte</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation>&amp;Tint:</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Tint</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation>Geen stijl</translation>
    </message>
    <message>
        <source>The following programs are missing:</source>
        <translation>De volgende programma&apos;s ontbreken:</translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS images or Print Preview</source>
        <translation>Ghostscript: EPS afbeeldingen of Print Preview kan niet worden gebruikt</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Alles</translation>
    </message>
    <message>
        <source>Scribus detected some errors.
Consider using the Preflight Verifier  to correct them.</source>
        <translation>Fouten geconstateerd.
Gebruik Preflight Controle om te herstellen</translation>
    </message>
    <message>
        <source>EPS Files (*.eps);;All Files (*)</source>
        <translation>EPS bestanden (*.eps);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Detected some errors.
Consider using the Preflight Verifier to correct them</source>
        <translation>Fouten geconstateerd.
Gebruik Preflight Controle om te herstellen</translation>
    </message>
    <message>
        <source>-Page%1</source>
        <translation>-Pagina%1</translation>
    </message>
    <message>
        <source>Some objects are locked.</source>
        <translation>Sommige objecten zijn vergrendeld.</translation>
    </message>
    <message>
        <source>&amp;Lock All</source>
        <translation>&amp;Alles vergrendelen</translation>
    </message>
    <message>
        <source>&amp;Unlock All</source>
        <translation>&amp;Alle losmaken</translation>
    </message>
    <message>
        <source>Information</source>
        <translation>Informatie</translation>
    </message>
    <message>
        <source>The program %1 is already running!</source>
        <translation>Het programma %1 is al actief!</translation>
    </message>
    <message>
        <source>The program %1 is missing!</source>
        <translation>Het programma %1 ontbreekt!</translation>
    </message>
    <message>
        <source>The selected color does not exist in the document&apos;s color set. Please enter a name for this new color.</source>
        <translation>De geselecteerde kleur ontbreekt in de kleurenset van het document. Voer een naam in voor deze nieuwe kleur.</translation>
    </message>
    <message>
        <source>Color Not Found</source>
        <translation>Kleur niet gevonden</translation>
    </message>
    <message>
        <source>The name you have selected already exists. Please enter a different name for this new color.</source>
        <translation>De naam van deze kleur bestaat al. Gebruik een andere naam voor deze kleur.</translation>
    </message>
    <message>
        <source>&amp;Level</source>
        <translation>&amp;Niveau</translation>
    </message>
    <message>
        <source>Send to Layer</source>
        <translation>In laag zetten</translation>
    </message>
    <message>
        <source>Previe&amp;w Settings</source>
        <translation>&amp;Voorbeeldinstellingen</translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation>&amp;Gereedschappen</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation>X-positie:</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation>Y-positie:</translation>
    </message>
    <message>
        <source>Spaces &amp;&amp; Breaks</source>
        <translation>Spaties &amp;&amp; onderbrekingen</translation>
    </message>
    <message>
        <source>Ligature</source>
        <translation>Ligatuur</translation>
    </message>
    <message>
        <source>New Master Page %1</source>
        <translation>Nieuw sjabloon %1</translation>
    </message>
    <message>
        <source>Number of copies: %1
Horizontal shift: %2
Vertical shift: %3</source>
        <translation>Aantal kopieën: %1
Horizontaal shift: %2
Verticaal shift: %3</translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS images or PostScript Print Preview</source>
        <translation>Ghostscript: EPS afbeeldingen of Print Preview kan niet worden gebruikt</translation>
    </message>
    <message>
        <source>Ghostscript is missing : Postscript Print Preview is not available</source>
        <translation>Ghostscript ontbreekt: EPS afbeeldingen of Print Preview kan niet worden gebruikt</translation>
    </message>
    <message>
        <source>Do you really want to replace your existing image?</source>
        <translation>Wilt u deze afbeelding werkelijk vervangen?</translation>
    </message>
    <message>
        <source>Contents</source>
        <translation>Inhoud</translation>
    </message>
    <message>
        <source>Liga&amp;ture</source>
        <translation>Liga&amp;tuur</translation>
    </message>
    <message>
        <source>Your document was saved to a temporary file and could not be moved: 
%1</source>
        <translation>Uw document is opgeslagen in een tijdelijk bestand en kan niet verplaatst worden:
%1</translation>
    </message>
</context>
<context>
    <name>ScribusQApp</name>
    <message>
        <source>Invalid argument: </source>
        <translation>Fout argument:</translation>
    </message>
    <message>
        <source>File %1 does not exist, aborting.</source>
        <translation>Bestand %1 bestaat niet, afbreken.</translation>
    </message>
    <message>
        <source>Usage: scribus [option ... ] [file]</source>
        <translation>Gebruik: scribus [optie...] [bestand]</translation>
    </message>
    <message>
        <source>Options:</source>
        <translation>Opties:</translation>
    </message>
    <message>
        <source>Print help (this message) and exit</source>
        <translation>Druk help af (deze mededeling) en sluit af</translation>
    </message>
    <message>
        <source>Uses xx as shortcut for a language, eg `en&apos; or `de&apos;</source>
        <translation>Gebruik xx als afkorting voor een taal, bijv. &apos;en&apos; of &apos;nl&apos;</translation>
    </message>
    <message>
        <source>List the currently installed interface languages</source>
        <translation>Toon de momenteel geïnstalleerde interface talen</translation>
    </message>
    <message>
        <source>Show information on the console when fonts are being loaded</source>
        <translation>Toon informatie in de console als fonts worden geladen</translation>
    </message>
    <message>
        <source>Do not show the splashscreen on startup</source>
        <translation>Toon opstartscherm niet tijdens opstarten</translation>
    </message>
    <message>
        <source>Output version information and exit</source>
        <translation>Versie informatie Output en sluit af</translation>
    </message>
    <message>
        <source>Use right to left dialog button ordering (eg. Cancel/No/Yes instead of Yes/No/Cancel)</source>
        <translation>Gebruik van rechts naar links dialoogknop rangschikking (Afbreken/Nee/Ja inplaats van Ja/Nee/Afbreken)</translation>
    </message>
    <message>
        <source>filename</source>
        <translation>bestandsnaam</translation>
    </message>
    <message>
        <source>Use filename as path for user given preferences</source>
        <translation>Gebuik bestandsnaam als pad voor door gebruiker ingevoerde voorkeuren</translation>
    </message>
    <message>
        <source>Installed interface languages for Scribus are as follows:</source>
        <translation>Geïnstalleerde taal interfaces voor Scribus zijn:</translation>
    </message>
    <message>
        <source>To override the default language choice:</source>
        <translation>Standaard taalkeuze negeren:</translation>
    </message>
    <message>
        <source>scribus -l xx or scribus --lang xx, where xx is the language of choice.</source>
        <translation>scribus -l xx of scribus --lang xx, waarbij xx de keuzetaal is.</translation>
    </message>
    <message>
        <source>Scribus Version</source>
        <translation>Scribus versie</translation>
    </message>
    <message>
        <source>Scribus, Open Source Desktop Publishing</source>
        <translation>Scribus, Open Source Desktop Publishing</translation>
    </message>
    <message>
        <source>Homepage</source>
        <translation>Homepage</translation>
    </message>
    <message>
        <source>Documentation</source>
        <translation>Documentatie</translation>
    </message>
    <message>
        <source>Wiki</source>
        <translation>Wiki</translation>
    </message>
    <message>
        <source>Issues</source>
        <translation>Kwesties</translation>
    </message>
    <message>
        <source>Display a console window</source>
        <translation>Toon een console venster</translation>
    </message>
    <message>
        <source>Show location ICC profile information on console while starting</source>
        <translation>Toon locatie ICC profiel informatie in console bij het starten</translation>
    </message>
</context>
<context>
    <name>ScribusView</name>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation>Laag</translation>
    </message>
    <message>
        <source>Copy Here</source>
        <translation>Kopie hier</translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation>Verplaatsen hier</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>Pla&amp;kken</translation>
    </message>
    <message>
        <source>Picture</source>
        <translation type="obsolete">Afbeelding</translation>
    </message>
    <message>
        <source>File: </source>
        <translation>Bestand:</translation>
    </message>
    <message>
        <source>Original PPI: </source>
        <translation>Oorspronkelijk PPI:</translation>
    </message>
    <message>
        <source>Actual PPI: </source>
        <translation>Werkelijk PPI:</translation>
    </message>
    <message>
        <source>Linked Text</source>
        <translation>Gekoppelde tekst</translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation>Tekstframe</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation>Tekst op een pad</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation>Alinea&apos;s:</translation>
    </message>
    <message>
        <source>Words: </source>
        <translation>Woorden:</translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation>Tekens:</translation>
    </message>
    <message>
        <source>Print: </source>
        <translation type="obsolete">Afdrukken:</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Ingeschakeld</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Uitgeschakeld</translation>
    </message>
    <message>
        <source>In&amp;fo</source>
        <translation>In&amp;fo</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation>&amp;PDF-opties</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation>In &amp;laag zetten</translation>
    </message>
    <message>
        <source>Le&amp;vel</source>
        <translation>Ni&amp;veau</translation>
    </message>
    <message>
        <source>Conve&amp;rt to</source>
        <translation>Omzetten naa&amp;r</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>Preview Settings</source>
        <translation>Voorbeeldinstellingen</translation>
    </message>
    <message>
        <source>Linking Text Frames</source>
        <translation>Verbind tekstframes</translation>
    </message>
    <message>
        <source>You are trying to link to a filled frame, or a frame to itself.</source>
        <translation>Je probeert naar een reeds gevuld frame, of een frame naar zichzelf te verbinden.</translation>
    </message>
    <message>
        <source>Cannot Convert In-Use Item</source>
        <translation>Kan item in gebruik niet omzetten</translation>
    </message>
    <message>
        <source>The item %1 is currently being edited by Story Editor. The convert to outlines operation for this item will be skipped</source>
        <translation>Dit item %1 wordt momenteel bijgewerkt met de Story Editor. Omzetten naar contouren wordt voor dit item geannuleerd</translation>
    </message>
    <message>
        <source>Page %1 to %2</source>
        <translation>Pagina %1 tot %2</translation>
    </message>
    <message>
        <source>Colorspace: </source>
        <translation>Kleurruimte: </translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Onbekend</translation>
    </message>
    <message>
        <source>RGB</source>
        <translation>RGB</translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation>CMYK</translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation>Grijstinten</translation>
    </message>
    <message>
        <source>Contents</source>
        <translation>Inhoud</translation>
    </message>
    <message>
        <source>Export: </source>
        <translation>Exporteren:</translation>
    </message>
    <message>
        <source>Image</source>
        <translation>Afbeelding</translation>
    </message>
</context>
<context>
    <name>ScribusWin</name>
    <message>
        <source>Document:</source>
        <translation>Het document:</translation>
    </message>
    <message>
        <source>has been changed since the last save.</source>
        <translation>is gewijzigd na de laatste keer opslaan.</translation>
    </message>
    <message>
        <source>&amp;Discard</source>
        <translation>&amp;Verwerpen</translation>
    </message>
</context>
<context>
    <name>ScriptPlugin</name>
    <message>
        <source>Embedded Python scripting support.</source>
        <translation>Ingebedde Python scripting ondersteuning.</translation>
    </message>
    <message>
        <source>Scripter</source>
        <translation>Scripter</translation>
    </message>
</context>
<context>
    <name>ScripterCore</name>
    <message>
        <source>Script error</source>
        <translation>Scriptfout</translation>
    </message>
    <message>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation>Als dit een officieel script is, geef deze fout dan a.u.b. door op &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt;.</translation>
    </message>
    <message>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation>Dit bericht staat ook op het klembord. Met Ctrl+V kunt u het in de bugtracker plakken.</translation>
    </message>
    <message>
        <source>There was an internal error while trying the command you entered. Details were printed to stderr. </source>
        <translation>Er is een interne fout opgetreden tijdens de uitvoering van de ingevoerde opdracht. Details zijn geprint naar stderr.</translation>
    </message>
    <message>
        <source>Examine Script</source>
        <translation>Onderzoek Script</translation>
    </message>
    <message>
        <source>Setting up the Python plugin failed. Error details were printed to stderr. </source>
        <translation>Instellen van Python plugin mislukt. Details zijn geprint naar stderr.</translation>
    </message>
    <message>
        <source>Python Scripts (*.py);;All Files (*)</source>
        <translation>Python scripts (*.py);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Documentation for:</source>
        <translation>Documentatie over:</translation>
    </message>
    <message>
        <source>Script</source>
        <translation>Script</translation>
    </message>
    <message>
        <source> doesn&apos;t contain any docstring!</source>
        <translation> bevat geen docstring!</translation>
    </message>
</context>
<context>
    <name>ScripterPrefsGui</name>
    <message>
        <source>Scripter Preferences</source>
        <translation>Scripter voorkeuren</translation>
    </message>
    <message>
        <source>Enable Extension Scripts</source>
        <translation>Schakel Extensiescripts in</translation>
    </message>
    <message>
        <source>Extensions</source>
        <translation>Extensies</translation>
    </message>
    <message>
        <source>Console</source>
        <translation>Console</translation>
    </message>
    <message>
        <source>Startup Script:</source>
        <translation>Opstartscript:</translation>
    </message>
    <message>
        <source>Errors:</source>
        <comment>syntax highlighting</comment>
        <translation>Fouten:</translation>
    </message>
    <message>
        <source>Comments:</source>
        <comment>syntax highlighting</comment>
        <translation>Commentaar:</translation>
    </message>
    <message>
        <source>Keywords:</source>
        <comment>syntax highlighting</comment>
        <translation>Trefwoorden:</translation>
    </message>
    <message>
        <source>Signs:</source>
        <comment>syntax highlighting</comment>
        <translation>Tekens:</translation>
    </message>
    <message>
        <source>Numbers:</source>
        <comment>syntax highlighting</comment>
        <translation>Nummers:</translation>
    </message>
    <message>
        <source>Strings:</source>
        <comment>syntax highlighting</comment>
        <translation>Strings:</translation>
    </message>
    <message>
        <source>Base Texts:</source>
        <comment>syntax highlighting</comment>
        <translation>Basis tekst:</translation>
    </message>
    <message>
        <source>Select Color</source>
        <translation>Kleur kiezen</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation>Wijzigen...</translation>
    </message>
    <message>
        <source>Locate Startup Script</source>
        <translation>Lokaliseer opstartscript</translation>
    </message>
</context>
<context>
    <name>SeList</name>
    <message>
        <source>Show Page Previews</source>
        <translation>Paginavoorbeelden tonen</translation>
    </message>
</context>
<context>
    <name>SearchReplace</name>
    <message>
        <source>Search/Replace</source>
        <translation>Zoeken/vervangen</translation>
    </message>
    <message>
        <source>Search for:</source>
        <translation>Zoeken naar:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Tekst</translation>
    </message>
    <message>
        <source>Paragraph Style</source>
        <translation>Alineastijl</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Font</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Lettergrootte</translation>
    </message>
    <message>
        <source>Font Effects</source>
        <translation>Font-effecten</translation>
    </message>
    <message>
        <source>Fill Color</source>
        <translation>Vulkleur</translation>
    </message>
    <message>
        <source>Fill Shade</source>
        <translation>Vultint</translation>
    </message>
    <message>
        <source>Stroke Color</source>
        <translation>Lijnkleur</translation>
    </message>
    <message>
        <source>Stroke Shade</source>
        <translation>Lijntint</translation>
    </message>
    <message>
        <source>Left</source>
        <translation>Links</translation>
    </message>
    <message>
        <source>Center</source>
        <translation>Midden</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Rechts</translation>
    </message>
    <message>
        <source>Block</source>
        <translation>Blok</translation>
    </message>
    <message>
        <source>Forced</source>
        <translation>Geforceerd</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Replace with:</source>
        <translation>Vervangen door:</translation>
    </message>
    <message>
        <source>&amp;Whole Word</source>
        <translation>&amp;Heel woord</translation>
    </message>
    <message>
        <source>&amp;Ignore Case</source>
        <translation>Hoofdletteron&amp;gevoelig</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Zoeken</translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation>&amp;Vervangen</translation>
    </message>
    <message>
        <source>Replace &amp;All</source>
        <translation>&amp;Alles vervangen</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Sluiten</translation>
    </message>
    <message>
        <source>Search finished</source>
        <translation>Zoeken voltooid</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>W&amp;issen</translation>
    </message>
    <message>
        <source>Search finished, found %1 matches</source>
        <translation>Zoeken gereed, %1 overeenkomsten gevonden</translation>
    </message>
</context>
<context>
    <name>SelectFields</name>
    <message>
        <source>Select Fields</source>
        <translation>Velden selecteren</translation>
    </message>
    <message>
        <source>Available Fields</source>
        <translation>Beschikbare velden</translation>
    </message>
    <message>
        <source>&amp;&gt;&gt;</source>
        <translation>&amp;&gt;&gt;</translation>
    </message>
    <message>
        <source>&amp;&lt;&lt;</source>
        <translation>&amp;&lt;&lt;</translation>
    </message>
    <message>
        <source>Selected Fields</source>
        <translation>Geselecteerde velden</translation>
    </message>
</context>
<context>
    <name>ShadeButton</name>
    <message>
        <source>Other...</source>
        <translation>Overig...</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation>&amp;Tint:</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Tint</translation>
    </message>
</context>
<context>
    <name>ShadowValues</name>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>X-Offset</source>
        <translation>X-Offset</translation>
    </message>
    <message>
        <source>Y-Offset</source>
        <translation>Y-Offset</translation>
    </message>
</context>
<context>
    <name>ShortWordsPlugin</name>
    <message>
        <source>Short &amp;Words...</source>
        <comment>short words plugin</comment>
        <translation>Korte &amp;woorden...</translation>
    </message>
    <message>
        <source>Short Words</source>
        <translation>Korte woorden</translation>
    </message>
    <message>
        <source>Special plug-in for adding non-breaking spaces before or after so called short words. Available in the following languages: </source>
        <translation>Speciale plug-in om niet-afbrekende spaties voor en achter zgn. korte woorden te plaatsen. Beschikbaar in de volgende talen:</translation>
    </message>
</context>
<context>
    <name>SideBar</name>
    <message>
        <source>No Style</source>
        <translation>Geen stijl</translation>
    </message>
    <message>
        <source>Edit Styles...</source>
        <translation>Stijlen bewerken...</translation>
    </message>
</context>
<context>
    <name>Spalette</name>
    <message>
        <source>No Style</source>
        <translation>Geen stijl</translation>
    </message>
</context>
<context>
    <name>StilFormate</name>
    <message>
        <source>Edit Styles</source>
        <translation>Stijlen bewerken</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nieuw</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>Be&amp;werken</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;upliceren</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Kopie van %1</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation>Nieuwe stijl</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documenten (*.sla *.sla.gz *.scd *.scd.gz);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documenten (*.sla *.scd);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importeren</translation>
    </message>
</context>
<context>
    <name>StoryEditor</name>
    <message>
        <source>Story Editor</source>
        <translation>Story-editor</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nieuw</translation>
    </message>
    <message>
        <source>&amp;Reload Text from Frame</source>
        <translation>Tekst uit frame &amp;herladen</translation>
    </message>
    <message>
        <source>&amp;Save to File...</source>
        <translation>Op&amp;slaan naar bestand...</translation>
    </message>
    <message>
        <source>&amp;Load from File...</source>
        <translation>&amp;Laden uit bestand...</translation>
    </message>
    <message>
        <source>Save &amp;Document</source>
        <translation>&amp;Document opslaan</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame and Exit</source>
        <translation>Tekstframe bijwerken en sl&amp;uiten</translation>
    </message>
    <message>
        <source>&amp;Exit Without Updating Text Frame</source>
        <translation>Sluit&amp;en zonder tekstframe bij te werken</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>&amp;Alles selecteren</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Kni&amp;ppen</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiëren</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>P&amp;lakken</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>W&amp;issen</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation>&amp;Zoeken/vervangen...</translation>
    </message>
    <message>
        <source>&amp;Edit Styles...</source>
        <translation>Stijlen b&amp;ewerken...</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview...</source>
        <translation>&amp;Fontweergave...</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame</source>
        <translation>Tekstframe bij&amp;werken</translation>
    </message>
    <message>
        <source>&amp;Background...</source>
        <translation>&amp;Achtergrond...</translation>
    </message>
    <message>
        <source>&amp;Display Font...</source>
        <translation>Weergave&amp;font...</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Bestand</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>Be&amp;werken</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation>In&amp;stellingen</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Bestand</translation>
    </message>
    <message>
        <source>Current Paragraph:</source>
        <translation>Huidige alinea:</translation>
    </message>
    <message>
        <source>Words: </source>
        <translation>Woorden:</translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation>Tekens:</translation>
    </message>
    <message>
        <source>Totals:</source>
        <translation>Totalen:</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation>Alinea&apos;s:</translation>
    </message>
    <message>
        <source>Do you want to save your changes?</source>
        <translation>Wilt u uw wijzigingen opslaan?</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Tekstbestanden (*.txt);;Alle bestanden (*)</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Opslaan als</translation>
    </message>
    <message>
        <source>&amp;Smart text selection</source>
        <translation>Intelligente tekst&amp;selectie</translation>
    </message>
    <message>
        <source>&amp;Insert Glyph...</source>
        <translation>Voeg symboolteken &amp;in...</translation>
    </message>
    <message>
        <source>Clear All Text</source>
        <translation>Alle tekst verwijderen</translation>
    </message>
    <message>
        <source>Story Editor - %1</source>
        <translation>Story-editor - %1</translation>
    </message>
    <message>
        <source>Do you really want to lose all your changes?</source>
        <translation>Wilt u werkelijk alle veranderingen verliezen?</translation>
    </message>
    <message>
        <source>Do you really want to clear all your text?</source>
        <translation>Wilt u werkelijk uw tekst verwijderen?</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation>&amp;Invoegen</translation>
    </message>
    <message>
        <source>Character</source>
        <translation>Teken</translation>
    </message>
    <message>
        <source>Quote</source>
        <translation>Aanhalingsteken</translation>
    </message>
    <message>
        <source>Spaces &amp;&amp; Breaks</source>
        <translation>Spaties &amp;&amp; onderbrekingen</translation>
    </message>
    <message>
        <source>Ligature</source>
        <translation>Ligatuur</translation>
    </message>
    <message>
        <source>Space</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>StrikeValues</name>
    <message>
        <source>Auto</source>
        <translation>Automatisch</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Displacement</source>
        <translation>Verplaatsing</translation>
    </message>
    <message>
        <source>Linewidth</source>
        <translation>Lijndikte</translation>
    </message>
</context>
<context>
    <name>StyleManager</name>
    <message>
        <source>More than one item selected</source>
        <translation>Meer dan een item geselecteerd</translation>
    </message>
</context>
<context>
    <name>StyleSelect</name>
    <message>
        <source>Small Caps</source>
        <translation>Kleinkapitalen</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation>Subscript</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation>Superscript</translation>
    </message>
    <message>
        <source>All Caps</source>
        <translation>Kapitalen</translation>
    </message>
    <message>
        <source>Underline Text. Hold down the button momentarily to set line width and displacement options.</source>
        <translation>Onderstreep tekst. Houdt de knop een moment ingedrukt om de lijndikte en verplaatsing in te stellen.</translation>
    </message>
    <message>
        <source>Underline Words Only. Hold down the button momentarily to set line width and displacement options.</source>
        <translation>Onderstreep alleen woorden. Houdt de knop een moment ingedrukt om de lijndikte en verplaatsing in te stellen.</translation>
    </message>
    <message>
        <source>Strike Out. Hold down the button momentarily to set line width and displacement options.</source>
        <translation>Streep door. Houdt de knop een moment ingedrukt om de lijndikte en verplaatsing in te stellen.</translation>
    </message>
    <message>
        <source>Outline. Hold down the button momentarily to change the outline stroke width.</source>
        <translation>Tekstomlijning. Houdt de knop een moment ingedrukt om de lijndikte in te stellen.</translation>
    </message>
    <message>
        <source>Shadowed Text. Hold down the button momentarily to enable the offset spacing.</source>
        <translation>Tekstschaduw. Houdt de knop een moment ingedrukt om de uitval in te stellen.</translation>
    </message>
</context>
<context>
    <name>SxwDialog</name>
    <message>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation>Documentnaam als prefix voor alineastijlen gebruiken</translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation>Deze vraag niet meer stellen</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Importer Options</source>
        <translation>Instellingen voor OpenOffice.org Writer-import</translation>
    </message>
    <message>
        <source>Overwrite Paragraph Styles</source>
        <translation>Overschrijf alineastijlen</translation>
    </message>
    <message>
        <source>Enabling this will overwrite existing styles in the current Scribus document</source>
        <translation>Hiermee worden bestaande stijlen in het huidige Scribus document overschreven
</translation>
    </message>
    <message>
        <source>Merge Paragraph Styles</source>
        <translation>Alinea stijlen samenvoegen</translation>
    </message>
    <message>
        <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document&apos;s styles are named differently.</source>
        <translation>Voeg de alieastijl samen op basis van attributen. Dit resulteert in een minder aantal op elkaar lijkende alineastijlen, zelf als de originele stijlen anders zijn genoemd.</translation>
    </message>
    <message>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation>Voeg documtennaam toe aan de alineastijlnaam in Scribus.</translation>
    </message>
    <message>
        <source>Make these settings the default and do not prompt again when importing an OpenOffice.org 1.x document.</source>
        <translation>Maak deze instellingen standaard, vraag niet opnieuw bij importeren van een OpenOffice.org 1.x document.</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
</context>
<context>
    <name>TOCIndexPrefs</name>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>At the beginning</source>
        <translation>Aan het begin</translation>
    </message>
    <message>
        <source>At the end</source>
        <translation>Aan het einde</translation>
    </message>
    <message>
        <source>Not Shown</source>
        <translation>Niet getoond</translation>
    </message>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation>Inhoudsopgave en indices</translation>
    </message>
    <message>
        <source>Table Of Contents</source>
        <translation>Inhoudsopgave</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Toevoegen</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>The frame the table of contents will be placed into</source>
        <translation>Het inhouds-tabel frame wordt geplaatst in</translation>
    </message>
    <message>
        <source>Page Numbers Placed:</source>
        <translation>Paginanummers geplaatst:</translation>
    </message>
    <message>
        <source>Item Attribute Name:</source>
        <translation>Naam item attributen:</translation>
    </message>
    <message>
        <source>The Item Attribute that will be set on frames used as a basis for creation of the entries</source>
        <translation>Het Item Attribuut ingesteld voor de frames gebruikt als basis voor de creatie van toevoegingen</translation>
    </message>
    <message>
        <source>Place page numbers of the entries at the beginning or the end of the line, or not at all</source>
        <translation>Plaats paginanummers van de toevoegingen aan het begin of aan het eind van de regel, of helemaal niet</translation>
    </message>
    <message>
        <source>List Non-Printing Entries</source>
        <translation>Maak een lijst vast niet af te drukken toevoegingen</translation>
    </message>
    <message>
        <source>Include frames that are set to not print as well</source>
        <translation>Inclusief frames die uitgeschakeld zijn voor afdrukken</translation>
    </message>
    <message>
        <source>The paragraph style used for the entry lines</source>
        <translation>De alineastijl gebruikt voor de toevoegingen</translation>
    </message>
    <message>
        <source>Paragraph Style:</source>
        <translation>Alineastijl:</translation>
    </message>
    <message>
        <source>Destination Frame:</source>
        <translation>Bestemmingsframe:</translation>
    </message>
    <message>
        <source>Table of Contents %1</source>
        <translation>Inhoudsopgave %1</translation>
    </message>
</context>
<context>
    <name>TOCIndexPrefsBase</name>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation>Inhoudsopgave en indices</translation>
    </message>
    <message>
        <source>Table Of Contents</source>
        <translation>Inhoudsopgave</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Toevoegen</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>The frame the table of contents will be placed into</source>
        <translation>Het frame waarin de inhoudstabel wordt geplaatst</translation>
    </message>
    <message>
        <source>Page Numbers Placed:</source>
        <translation>Pagina nummer geplaatst:</translation>
    </message>
    <message>
        <source>Item Attribute Name:</source>
        <translation>Item attribuut naam:</translation>
    </message>
    <message>
        <source>The Item Attribute that will be set on frames used as a basis for creation of the entries</source>
        <translation>Het Item Attribuut ingesteld voor de frames gebruikt als basis voor de creatie van toevoegingen</translation>
    </message>
    <message>
        <source>Place page numbers of the entries at the beginning or the end of the line, or not at all</source>
        <translation>Plaats paginanummers van de toevoegingen aan het begin of aan het eind van de regel, of helemaal niet</translation>
    </message>
    <message>
        <source>List Non-Printing Entries</source>
        <translation>Maak een lijst vast niet af te drukken toevoegingen</translation>
    </message>
    <message>
        <source>Include frames that are set to not print as well</source>
        <translation>Inclusief frames die uitgeschakeld zijn voor afdrukken</translation>
    </message>
    <message>
        <source>The paragraph style used for the entry lines</source>
        <translation>De alineastijl gebruikt voor de toevoegingen</translation>
    </message>
    <message>
        <source>Paragraph Style:</source>
        <translation>Alineastijl:</translation>
    </message>
    <message>
        <source>Destination Frame:</source>
        <translation>Bestemmingsframe:</translation>
    </message>
</context>
<context>
    <name>TabCheckDoc</name>
    <message>
        <source>Ignore all errors</source>
        <translation>Negeer alle fouten</translation>
    </message>
    <message>
        <source>Automatic check before printing or exporting</source>
        <translation>Automatische controle voor printen of exporteren</translation>
    </message>
    <message>
        <source>Check for missing glyphs</source>
        <translation>Controleer op missende symbooltekens</translation>
    </message>
    <message>
        <source>Check for objects not on a page</source>
        <translation>Controleer op objecten die niet pagina staan</translation>
    </message>
    <message>
        <source>Check for overflow in text frames</source>
        <translation>Controleer op overloop in tekst frames</translation>
    </message>
    <message>
        <source>Check for transparencies used</source>
        <translation>Controleer op gebruikte transparanties</translation>
    </message>
    <message>
        <source>Check for missing images</source>
        <translation>Controleer op missende afbeeldingen</translation>
    </message>
    <message>
        <source>Check image resolution</source>
        <translation>Controleer afbeeldingresoluties</translation>
    </message>
    <message>
        <source>Lowest allowed resolution</source>
        <translation>Laagst toegestane resolutie</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation> dpi</translation>
    </message>
    <message>
        <source>Check for PDF Annotations and Fields</source>
        <translation>Controleer op PDF annotaties en velden</translation>
    </message>
    <message>
        <source>Add Profile</source>
        <translation>Voeg profiel toe</translation>
    </message>
    <message>
        <source>Remove Profile</source>
        <translation>Verwijder profiel</translation>
    </message>
    <message>
        <source>Check for placed PDF Files</source>
        <translation>Controleer op geplaatste PDF bestanden</translation>
    </message>
</context>
<context>
    <name>TabGuides</name>
    <message>
        <source>Common Settings</source>
        <translation>Gebruikelijke instellingen</translation>
    </message>
    <message>
        <source>Placing in Documents</source>
        <translation>Plaatsing in documenten</translation>
    </message>
    <message>
        <source>In the Background</source>
        <translation>Op de achtergrond</translation>
    </message>
    <message>
        <source>In the Foreground</source>
        <translation>Op de voorgrond</translation>
    </message>
    <message>
        <source>Snapping</source>
        <translation>Vastplakken</translation>
    </message>
    <message>
        <source>Snap Distance:</source>
        <translation>Vastplak afstand:</translation>
    </message>
    <message>
        <source>Grab Radius:</source>
        <translation>Grijp Radius:</translation>
    </message>
    <message>
        <source> px</source>
        <translation>px</translation>
    </message>
    <message>
        <source>Show Guides</source>
        <translation>Toon hulplijnen</translation>
    </message>
    <message>
        <source>Show Margins</source>
        <translation>Toon Randen</translation>
    </message>
    <message>
        <source>Show Page Grid</source>
        <translation>Toon Pagina raster</translation>
    </message>
    <message>
        <source>Major Grid</source>
        <translation>Hoofd raster</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Kleur:</translation>
    </message>
    <message>
        <source>Spacing:</source>
        <translation>Spatiëring:</translation>
    </message>
    <message>
        <source>Minor Grid</source>
        <translation>Klein raster</translation>
    </message>
    <message>
        <source>Show Baseline Grid</source>
        <translation>Basislijn-raster tonen</translation>
    </message>
    <message>
        <source>Baseline &amp;Grid:</source>
        <translation>Basislijn &amp;raster:</translation>
    </message>
    <message>
        <source>Baseline &amp;Offset:</source>
        <translation>Basislijn &amp;afstand:</translation>
    </message>
    <message>
        <source>Distance between the minor grid lines</source>
        <translation>Afstand tussen de kleine rasterlijnen</translation>
    </message>
    <message>
        <source>Distance between the major grid lines</source>
        <translation>Afstand tussen de grote rasterlijnen</translation>
    </message>
    <message>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation type="obsolete">Afstand vanaf welke een object zal aantrekken tot de hulplijnen</translation>
    </message>
    <message>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation type="obsolete">Geeft de straal aan van het gebied waar Scribus het u toestaat een object vast te pakken</translation>
    </message>
    <message>
        <source>Color of the minor grid lines</source>
        <translation>Kleur van de kleine rasterlijnen</translation>
    </message>
    <message>
        <source>Color of the major grid lines</source>
        <translation>Kleur van de grote rasterlijnen</translation>
    </message>
    <message>
        <source>Color of the guide lines you insert</source>
        <translation>Kleur van uw eigen hulplijnen</translation>
    </message>
    <message>
        <source>Color for the margin lines</source>
        <translation>Kleur voor de kantlijnen</translation>
    </message>
    <message>
        <source>Turns the basegrid on or off</source>
        <translation>Zet basislijnraster aan of uit</translation>
    </message>
    <message>
        <source>Turns the gridlines on or off</source>
        <translation>Zet basisrasterlijnen aan of uit</translation>
    </message>
    <message>
        <source>Turns the guides on or off</source>
        <translation>Zet de hulplijnen aan of uit</translation>
    </message>
    <message>
        <source>Turns the margins on or off</source>
        <translation>Zet de marges aan of uit</translation>
    </message>
    <message>
        <source>Baseline Settings</source>
        <translation>Basislijn instellingen</translation>
    </message>
    <message>
        <source>Guides are not visible through objects on the page</source>
        <translation>Hulplijnen zijn niet zichtbaar door objecten op de pagina</translation>
    </message>
    <message>
        <source>Guides are visible above all objects on the page</source>
        <translation>Hulplijnen zijn zichtbaar door alle objecten op de pagina</translation>
    </message>
    <message>
        <source>Color for the baseline grid</source>
        <translation>Kleur van het basislijn raster</translation>
    </message>
    <message>
        <source>Distance between the lines of the baseline grid</source>
        <translation>Afstanden tussen de lijnen van het basislijn raster</translation>
    </message>
    <message>
        <source>Distance from the top of the page for the first baseline</source>
        <translation>Afstand tot de bovenzijde van de pagina tot de eerste basislijn</translation>
    </message>
    <message>
        <source>Distance within which an object will snap to your placed guides. After setting this you will need to restart Scribus to set this setting.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Radius of the area where Scribus will allow you to grab an objects handles.After setting this you will need to restart Scribus to set this setting.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabManager</name>
    <message>
        <source>Manage Tabulators</source>
        <translation>Tabulators beheren</translation>
    </message>
</context>
<context>
    <name>TabPDFOptions</name>
    <message>
        <source>Export Range</source>
        <translation>Exporteer bereik</translation>
    </message>
    <message>
        <source>&amp;All Pages</source>
        <translation>&amp;Alle pagina&apos;s</translation>
    </message>
    <message>
        <source>C&amp;hoose Pages</source>
        <translation>&amp;Pagina&apos;s kiezen</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Rotatie:</translation>
    </message>
    <message>
        <source>File Options</source>
        <translation>Bestandsopties</translation>
    </message>
    <message>
        <source>Compatibilit&amp;y:</source>
        <translation>&amp;Compatibiliteit:</translation>
    </message>
    <message>
        <source>&amp;Binding:</source>
        <translation>In&amp;binden:</translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation>Linker marge</translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation>Rechter marge</translation>
    </message>
    <message>
        <source>Generate &amp;Thumbnails</source>
        <translation>Minia&amp;turen aanmaken</translation>
    </message>
    <message>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation>Gekoppe&amp;lde tekstframes als PDF-artikelen opslaan</translation>
    </message>
    <message>
        <source>&amp;Include Bookmarks</source>
        <translation>Bladwijzers &amp;invoegen</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation>dpi</translation>
    </message>
    <message>
        <source>Com&amp;press Text and Vector Graphics</source>
        <translation>Tekst en vectorafbeeldingen compri&amp;meren</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automatisch</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation>Maximaal</translation>
    </message>
    <message>
        <source>High</source>
        <translation>Hoog</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation>Gemiddeld</translation>
    </message>
    <message>
        <source>Low</source>
        <translation>Laag</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation>Minimaal</translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation>Al&amp;gemeen</translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation>Insluiten</translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation>Beschikbare fonts:</translation>
    </message>
    <message>
        <source>&amp;&gt;&gt;</source>
        <translation>&amp;&gt;&gt;</translation>
    </message>
    <message>
        <source>&amp;&lt;&lt;</source>
        <translation>&amp;&lt;&lt;</translation>
    </message>
    <message>
        <source>Fonts to embed:</source>
        <translation>Fonts om in te sluiten:</translation>
    </message>
    <message>
        <source>&amp;Fonts</source>
        <translation>&amp;Fonts</translation>
    </message>
    <message>
        <source>Enable &amp;Presentation Effects</source>
        <translation>&amp;Presentatie-effecten</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Pagina</translation>
    </message>
    <message>
        <source>Show Page Pre&amp;views</source>
        <translation>Pagina&amp;voorbeelden tonen</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation>Effecten</translation>
    </message>
    <message>
        <source>&amp;Display Duration:</source>
        <translation>Weergave tij&amp;dsduur:</translation>
    </message>
    <message>
        <source>Effec&amp;t Duration:</source>
        <translation>Effec&amp;t tijdsduur:</translation>
    </message>
    <message>
        <source>Effect T&amp;ype:</source>
        <translation>Effectt&amp;ype:</translation>
    </message>
    <message>
        <source>&amp;Moving Lines:</source>
        <translation>&amp;Bewegende lijnen:</translation>
    </message>
    <message>
        <source>F&amp;rom the:</source>
        <translation>&amp;Van de:</translation>
    </message>
    <message>
        <source>D&amp;irection:</source>
        <translation>R&amp;ichting:</translation>
    </message>
    <message>
        <source> sec</source>
        <translation>sec</translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation>Geen effect</translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation>Luiken</translation>
    </message>
    <message>
        <source>Box</source>
        <translation>Box</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation>Oplossen</translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation>Glitter</translation>
    </message>
    <message>
        <source>Split</source>
        <translation>Splitsen</translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation>Wegvegen</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation>Horizontaal</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation>Verticaal</translation>
    </message>
    <message>
        <source>Inside</source>
        <translation>Binnen</translation>
    </message>
    <message>
        <source>Outside</source>
        <translation>Buiten</translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation>Links naar rechts</translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation>Boven naar beneden</translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation>Beneden naar boven</translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation>Rechts naar links</translation>
    </message>
    <message>
        <source>Top-left to Bottom-Right</source>
        <translation>Linksboven naar rechtsonder</translation>
    </message>
    <message>
        <source>&amp;Apply Effect on all Pages</source>
        <translation type="obsolete">Effect op &amp;alle pagina&apos;s toepassen</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation>E&amp;xtras</translation>
    </message>
    <message>
        <source>&amp;Use Encryption</source>
        <translation>Versle&amp;uteling gebruiken</translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation>Wachtwoorden</translation>
    </message>
    <message>
        <source>&amp;User:</source>
        <translation>Gebr&amp;uiker:</translation>
    </message>
    <message>
        <source>&amp;Owner:</source>
        <translation>&amp;Eigenaar:</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation>Instellingen</translation>
    </message>
    <message>
        <source>Allow &amp;Printing the Document</source>
        <translation>A&amp;fdrukken van het document toestaan</translation>
    </message>
    <message>
        <source>Allow &amp;Changing the Document</source>
        <translation>Wi&amp;jzigen van het document toestaan</translation>
    </message>
    <message>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation>&amp;Kopiëren van tekst en afbeeldingen toestaan</translation>
    </message>
    <message>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation>Toevoegen van &amp;annotaties en velden toestaan</translation>
    </message>
    <message>
        <source>S&amp;ecurity</source>
        <translation>V&amp;eiligheid</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Algemeen</translation>
    </message>
    <message>
        <source>Output &amp;Intended For:</source>
        <translation>&amp;Uitvoer bestemd voor:</translation>
    </message>
    <message>
        <source>Screen / Web</source>
        <translation>Scherm / web</translation>
    </message>
    <message>
        <source>Printer</source>
        <translation>Printer</translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation>Grijstinten</translation>
    </message>
    <message>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation>Aangepaste &amp;weergaveinstellingen gebruiken</translation>
    </message>
    <message>
        <source>Rendering Settings</source>
        <translation>Weergaveinstellingen</translation>
    </message>
    <message>
        <source>Fre&amp;quency:</source>
        <translation>Fre&amp;quentie:</translation>
    </message>
    <message>
        <source>&amp;Angle:</source>
        <translation>&amp;Hoek:</translation>
    </message>
    <message>
        <source>S&amp;pot Function:</source>
        <translation>&amp;Punt-functie:</translation>
    </message>
    <message>
        <source>Simple Dot</source>
        <translation>Enkele stip</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Lijn</translation>
    </message>
    <message>
        <source>Round</source>
        <translation>Rond</translation>
    </message>
    <message>
        <source>Ellipse</source>
        <translation>Ellips</translation>
    </message>
    <message>
        <source>Solid Colors:</source>
        <translation>Effen kleuren:</translation>
    </message>
    <message>
        <source>Use ICC Profile</source>
        <translation>ICC-profiel gebruiken</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation>Profiel:</translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation>Rendering intent:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Perceptueel</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Relatief colorimetrisch</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Verzadiging</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Absoluut colorimetrisch</translation>
    </message>
    <message>
        <source>Images:</source>
        <translation>Afbeeldingen:</translation>
    </message>
    <message>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation>Geen ingesloten ICC-profielen gebruiken</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation>&amp;Kleur</translation>
    </message>
    <message>
        <source>PDF/X-3 Output Intent</source>
        <translation>PDF/X3 Output intentie</translation>
    </message>
    <message>
        <source>&amp;Info String:</source>
        <translation>&amp;Infotekst:</translation>
    </message>
    <message>
        <source>Output &amp;Profile:</source>
        <translation>Uitvoer&amp;profiel:</translation>
    </message>
    <message>
        <source>Trim Box</source>
        <translation>Rechthoek bijknippen</translation>
    </message>
    <message>
        <source>PDF/X-&amp;3</source>
        <translation>PDF/X-&amp;3</translation>
    </message>
    <message>
        <source>Show page previews of each page listed above.</source>
        <translation>Laat van elke pagina een voorbeeld zien.</translation>
    </message>
    <message>
        <source>Type of the display effect.</source>
        <translation>Type van het overgangseffect.</translation>
    </message>
    <message>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation>Richting van het effect van bewegende lijnen en de lamel-effecten.</translation>
    </message>
    <message>
        <source>Starting position for the box and split effects.</source>
        <translation>Startpositie voor de rechthoek en split-effecten.</translation>
    </message>
    <message>
        <source>Direction of the glitter or wipe effects.</source>
        <translation>Richting voor de glitter of veeg-effecten.</translation>
    </message>
    <message>
        <source>Apply the selected effect to all pages.</source>
        <translation>Het geselecteerde effect op alle pagina&apos;s toepassen.</translation>
    </message>
    <message>
        <source>Export all pages to PDF</source>
        <translation>Alle pagina&apos;s naar PDF exporteren</translation>
    </message>
    <message>
        <source>Export a range of pages to PDF</source>
        <translation>Een bereik exporteren naar PDF</translation>
    </message>
    <message>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation>Maakt PDF-artikelen aan, zodat het gemakkelijker is door de tekst te navigeren.</translation>
    </message>
    <message>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation>DPI (dots per inch) voor afbeeldingen.</translation>
    </message>
    <message>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation>Kies een wachtwoord voor gebruikers om de PDF te kunnen lezen.</translation>
    </message>
    <message>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation>Het afdrukken van de PDF toestaan. Indien niet geselecteerd is afdrukken onmogelijk.</translation>
    </message>
    <message>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation>Wijzigen van de PDF toestaan. Indien niet geselecteerd is wijzigen onmogelijk.</translation>
    </message>
    <message>
        <source>Embed a color profile for solid colors</source>
        <translation>Een kleurprofiel insluiten voor effen kleuren</translation>
    </message>
    <message>
        <source>Color profile for solid colors</source>
        <translation>Kleurprofiel voor effen kleuren</translation>
    </message>
    <message>
        <source>Rendering intent for solid colors</source>
        <translation>Rendering intent voor effen kleuren</translation>
    </message>
    <message>
        <source>Embed a color profile for images</source>
        <translation>Een kleurprofiel insluiten voor afbeeldingen</translation>
    </message>
    <message>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation>Kleurprofielen in bronafbeeldingen niet gebruiken</translation>
    </message>
    <message>
        <source>Color profile for images</source>
        <translation>Kleurprofiel voor afbeeldingen</translation>
    </message>
    <message>
        <source>Rendering intent for images</source>
        <translation>Rendering intent voor afbeeldingen</translation>
    </message>
    <message>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation>Uitvoerprofiel voor het afdrukken. Laat u indien mogelijk, adviseren door uw drukkerij, bij het selecteren van een profiel.</translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation>Afloop-afstand vanaf de bovenkant van de fysieke pagina</translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation>Afloop-afstand vanaf de onderkant van de fysieke pagina</translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation>Afloop-afstand vanaf de linkerkant van de fysieke pagina</translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation>Afloop-afstand vanaf de rechterkant van de fysieke pagina</translation>
    </message>
    <message>
        <source>Mirror Page(s) horizontally</source>
        <translation>Pagina(&apos;s) horizontaal spiegelen</translation>
    </message>
    <message>
        <source>Mirror Page(s) vertically</source>
        <translation>Pagina(&apos;s) verticaal spiegelen</translation>
    </message>
    <message>
        <source>&amp;Resolution for EPS Graphics:</source>
        <translation>&amp;Resolutie van EPS afbeeldingen:</translation>
    </message>
    <message>
        <source>Convert Spot Colors to Process Colors</source>
        <translation>Steunkleuren naar Process kleuren omzetten</translation>
    </message>
    <message>
        <source>Compression &amp;Quality:</source>
        <translation>Compressie &amp;kwaliteit:</translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. If unchecked, text and graphics cannot be copied.</source>
        <translation>Sta kopieëren van tekst of afbeeldingen van de PDF toe. Indien niet aangevinkt, kunnen tekst en afbeeldingen niet worden gekopieërd.</translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. If unchecked, editing annotations and fields is prevented.</source>
        <translation>Sta toevoegen van annotaties en velden aan de PDF toe. Indien niet aangevinkt, kunnen annotaties en velden niet worden bewerkt.</translation>
    </message>
    <message>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation>Steunkleuren worden omgezet naar composiet-kleuren. Bij voorkeur aanvinken. Tenzij steunkleuren in een drukkerij gedrukt moeten worden.</translation>
    </message>
    <message>
        <source>Include La&amp;yers</source>
        <translation>&amp;Lagen insluiten</translation>
    </message>
    <message>
        <source>Compression Metho&amp;d:</source>
        <translation>Compressie metho&amp;de:</translation>
    </message>
    <message>
        <source>Resa&amp;mple Images to:</source>
        <translation>Afbeeldingen o&amp;mzetten naar:</translation>
    </message>
    <message>
        <source>Length of time the effect runs. A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation>Lengte in tijd van het effect. Een kortere tijd zal het effect versnellen, een langere tijd zal het effect vertragen.</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
        <translation>Voer hier de paginanummer(s) in die u wilt afdrukken, bijvoorbeeld 1,3,5 of 1-5 (pag. 1 t/m 5 afdrukken). Een * staat voor alle pagina&apos;s.</translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know you need to change it leave the default choice - Left.</source>
        <translation>Bepaalt de binding van pagina&apos;s in de PDF. Laat standaard (Links) tenzij anders is gewenst.</translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF. Some viewers can use the thumbnails for navigation.</source>
        <translation>Maakt thumbnails aan van elke pagina in de PDF. Thumbnails kunnen in pdf-viewers voor navigatie worden gebruikt.</translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document. These are useful for navigating long PDF documents.</source>
        <translation>Sluit gecreëerde bookmarks in het document in. Bruikbaar bij navigeren in lange PDF documenten.</translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics. This does not affect the resolution of bitmap images like photos.</source>
        <translation>Exporteer resolutie van tekst en afbeeldingen. Heeft geen invloed op de resolutie van pixel afbeeldingen, zoals foto&apos;s.</translation>
    </message>
    <message>
        <source>Enables lossless compression of text and graphics. Unless you have a reason, leave this checked. This reduces PDF file size.</source>
        <translation>Staat lossless compressie van tekst en afbeeldingen toe. Laat aangevinkt, tenzij er een reden voor is. Reduceert de grootte van het PDF bestand.</translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF. If you selected PDF 1.3, the PDF will be protected by 40 bit encryption. If you selected PDF 1.4, the PDF will be protected by 128 bit encryption. Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation>Schakel veiligheidsmogelijk in de geëxporteerde PDF in. Bij selectie van PDF 1.3, wordt de PDF met 40 bit encryptie beveiligd. Bij PDF 1.4 met 128 bit encryptie. Disclaimer: PDF encryptie is niet zo betrouwbaar als GPG of PGP encryptie en heeft beperkingen.</translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the security features in your exported PDF</source>
        <translation>Kies een Master wachtwoord welke alle veiligheids mogelijkheden in de geëxporteerde PDF in- of uitschakeld</translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled when specifically requested by your printer and they have given you the exact details needed. Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation>Dit is een geavanceerde instelling welke niet standaard is ingeschakeld. Schakel uitsluitend in op aanvraag van uw drukkerij, zij voorzien u daarbij mogelijk van de benodigde details. Mogelijk kan de PDF bij inschakeling niet goed afgedrukt worden en is niet overdraagbaar naar andere systemen.</translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation>Voorgeschreven regel voor PDF/X-3 bij niet invullen voldoet de PDF/X-3 niet aan de eisen. Wij adviseren de titel van het document te gebruiken.</translation>
    </message>
    <message>
        <source>Display Settings</source>
        <translation>Scherminstellingen</translation>
    </message>
    <message>
        <source>Single Page</source>
        <translation>Enkele pagina</translation>
    </message>
    <message>
        <source>Continuous</source>
        <translation>Doorlopend</translation>
    </message>
    <message>
        <source>Double Page Left</source>
        <translation>Dubbele pagina links</translation>
    </message>
    <message>
        <source>Double Page Right</source>
        <translation>Dubbele pagina rechts</translation>
    </message>
    <message>
        <source>Visual Appearance</source>
        <translation>Uiterlijk</translation>
    </message>
    <message>
        <source>Use Viewers Defaults</source>
        <translation>Gebruik standaardinstelling Viewer</translation>
    </message>
    <message>
        <source>Use Full Screen Mode</source>
        <translation>Gebruik volledig scherm modus</translation>
    </message>
    <message>
        <source>Display Bookmarks Tab</source>
        <translation>Bladwijzertabblad weergeven</translation>
    </message>
    <message>
        <source>Display Thumbnails</source>
        <translation>Miniaturen weergeven</translation>
    </message>
    <message>
        <source>Display Layers Tab</source>
        <translation>Lagentabblad weergeven</translation>
    </message>
    <message>
        <source>Hide Viewers Toolbar</source>
        <translation>Verberg Toolbar Viewer</translation>
    </message>
    <message>
        <source>Hide Viewers Menubar</source>
        <translation>Verberg Menubar Viewer</translation>
    </message>
    <message>
        <source>Zoom Pages to fit Viewer Window</source>
        <translation>Zoom pagina&apos;s tot formaat venster Viewer</translation>
    </message>
    <message>
        <source>Special Actions</source>
        <translation>Speciale Acties</translation>
    </message>
    <message>
        <source>No Script</source>
        <translation>Geen script</translation>
    </message>
    <message>
        <source>Viewer</source>
        <translation>Viewer</translation>
    </message>
    <message>
        <source>Clip to Page Margins</source>
        <translation>Afsnijden bij paginarand</translation>
    </message>
    <message>
        <source>Lossy - JPEG</source>
        <translation>Lossy - JPEG</translation>
    </message>
    <message>
        <source>Lossless - Zip</source>
        <translation>Lossles - Zip</translation>
    </message>
    <message>
        <source>Image Compression Method</source>
        <translation>Afbeelding compressie methode</translation>
    </message>
    <message>
        <source>Javascript to be executed
when PDF document is opened:</source>
        <translation>Javascript starten
als PDF document wordt geopend:</translation>
    </message>
    <message>
        <source>Enables presentation effects when using Adobe&amp;#174; Reader&amp;#174; and other PDF viewers which support this in full screen mode.</source>
        <translation>Staat presentatie-effecten toe bij gebruik van Adobe&amp;#174; Reader&amp;#174; en andere viewers welke full screen mode ondersteunen.</translation>
    </message>
    <message>
        <source>Determines the PDF compatibility. The default is PDF 1.3 which gives the widest compatibility. Choose PDF 1.4 if your file uses features such as transparency or you require 128 bit encryption. PDF 1.5 is necessary when you wish to preserve objects in separate layers within the PDF.  PDF/X-3 is for exporting the PDF when you want color managed RGB for commercial printing and is selectable when you have activated color management. Use only when advised by your printer or in some cases printing to a 4 color digital color laser printer.</source>
        <translation>Stelt PDF comptabiliteit vast. Standaard is PDF 1.3, welke het meest compatibel is. Kies PDF 1.4 als het bestand transparanten bevat of 128 bits encryptie benodigd is. PDF 1.5 is nodig als objecten in separate lagen in de PDF bewaard moeten blijven. PDF/X3 is voor PDF export als van color managed RGB gebruikt gemaakt moet worden woorden professioneel drukwerk en is selecteerbaar als kleurbeheer is ingeschakeld. Gebruik alleen op advies van uw drukker of in bepaalde gevallen bij afdrukken op een 4-kleuren digitale kleuren laserprinter.</translation>
    </message>
    <message>
        <source>Layers in your document are exported to the PDF Only available if PDF 1.5 is chosen.</source>
        <translation>Lagen in het document worden geexporteerd naar de PDF. Alleen beschikbaar bij selectie van PDF 1.5.</translation>
    </message>
    <message>
        <source>Re-sample your bitmap images to the selected DPI. Leaving this unchecked will render them at their native resolution. Enabling this will increase memory usage and slow down export.</source>
        <translation>Pas de pixel-afbeeldingen aan naar het geselecteerde DPI. Indien niet aangevinkt worden de afbeeldingen gerenderd naar de oorspronkelijke resolutie. Dit kan resulteren in meer gebruik van geheugen.</translation>
    </message>
    <message>
        <source>Color model for the output of your PDF. Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets. Choose Printer when printing to a true 4 color CMYK printer. Choose Grayscale when you want a grey scale PDF.</source>
        <translation>Kleurmodel voor de output van de PDF. Kies Screen/Web voor PDF&apos;s die op alleen op een beeldscherm worden getoond en voor printen op bepaalde inkjets. Kies Printer voor drukwerk en als er naar een true color CMYK printer moet worden gedrukt. Kies Grijstinten als een grijswaarden PDF nodig is.</translation>
    </message>
    <message>
        <source>Do not show objects outside the margins in the exported file</source>
        <translation>Verberg objecten buiten de marges in het geëxporteerde bestand</translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page. Setting 0 will disable automatic page transition.</source>
        <translation>Lengte in tijd waarin de pagina wordt getoont voor de presentatie start op de geselecteerde pagina. Instelling 0 zet automatische pagina-wisseling uit.</translation>
    </message>
    <message>
        <source>&amp;Embed All</source>
        <translation>All&amp;es insluiten</translation>
    </message>
    <message>
        <source>Fonts to outline:</source>
        <translation>Fonts om te zetten naar curven:</translation>
    </message>
    <message>
        <source>Outline &amp;All</source>
        <translation>&amp;Alles naar curven</translation>
    </message>
    <message>
        <source>Document Layout</source>
        <translation>Document layout</translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts will preserve the layout and appearance of your document.Some fonts like Open Type can only be subset, as they are not able to be embedded into PDF versions before PDF 1.6. </source>
        <translation>Alle fonts insluiten in PDF. Insluiten van fonts zorgt dat de layout en aanzicht van het document behouden blijven. Sommige fonts zoals Open Type kunnen alleen ingesloten worden als subset, aangezien ze niet ingesloten kunnen worden in PDF versies voor PDF 1.6.</translation>
    </message>
    <message>
        <source>Subset all fonts into the PDF. Subsetting fonts is when only the glyphs used in the PDF are embedded, not the whole font. Some fonts like Open Type can only be subset, as they are not able to be embedded into PDF versions before PDF 1.6.</source>
        <translation>Subset alle fonts in PDF. Subsetten van fonts is wanneer enkel de karakters gebruikt in de PDF zijn ingesloten, niet het gehele font. Sommige fonts zoals Open Type kunnen alleen ingesloten worden als subset, aangezien ze niet ingesloten kunnen worden in PDF versies voor PDF 1.6.</translation>
    </message>
    <message>
        <source>Method of compression to use for images. Automatic allows Scribus to choose the best method. ZIP is lossless and good for images with solid colors. JPEG is better at creating smaller PDF files which have many photos (with slight image quality loss possible). Leave it set to Automatic unless you have a need for special compression options.</source>
        <translation>Methode van compressie, te gebruiken voor afbeeldingen. Automatisch laat Scribus de beste methode kiezen. ZIP is lossless en goed voor afbeeldingen met effen kleurvlakken. JPEG is beter om kleinere PDF bestanden te verkrijgen welke veel foto&apos;s bevatten (licht kwaliteitsverlies mogelijk). Laat bij voorkeur staan op Automatisch tenzij er een speciale reden is om compressie te gebruiken.</translation>
    </message>
    <message>
        <source>Quality levels for lossy compression methods: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%). Note that a quality level does not directly determine the size of the resulting image - both size and quality loss vary from image to image at any given quality level. Even with Maximum selected, there is always some quality loss with jpeg.</source>
        <translation>Kwaliteitsniveaus voor lossy compressie methoden. Minimum (25%). Laag (50%), Medium (75%), Hoog (85%), Maximum (95%). Het kwaliteitsniveau bepaalt niet direct de grootte van de resulterende afbeelding. Grootte en verlies van kwaliteit variëren bij elk afzonderlijk kwaliteitsniveau. Zelfs bij keuze voor het Maximum niveau is er altijd een kwaliteitsverlies bij jpeg.</translation>
    </message>
    <message>
        <source>&amp;Apply Effect to all Pages</source>
        <translation>Effect op &amp;alle pagina&apos;s toepassen</translation>
    </message>
</context>
<context>
    <name>TabTools</name>
    <message>
        <source>Font:</source>
        <translation>Font:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation>pt</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>Grootte:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Geen</translation>
    </message>
    <message>
        <source>Fill Color:</source>
        <translation>VulKleur:</translation>
    </message>
    <message>
        <source>Stroke Color:</source>
        <translation>Lijnkleur:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>Kolo&amp;mmen:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>Tussen&amp;ruimte:</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation>Pa&apos;s wijze lynx bezag vroom het fikse aquaduct</translation>
    </message>
    <message>
        <source>&amp;Line Color:</source>
        <translation>&amp;Lijnkleur:</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>&amp;Shading:</source>
        <translation>&amp;Tint:</translation>
    </message>
    <message>
        <source>&amp;Fill Color:</source>
        <translation>&amp;Vulkleur:</translation>
    </message>
    <message>
        <source>S&amp;hading:</source>
        <translation>T&amp;int:</translation>
    </message>
    <message>
        <source>Line Style:</source>
        <translation>Lijnstijl:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation>Linedi&amp;kte:</translation>
    </message>
    <message>
        <source>Line S&amp;tyle:</source>
        <translation>Lijns&amp;tijl:</translation>
    </message>
    <message>
        <source>Arrows:</source>
        <translation>Pijlen:</translation>
    </message>
    <message>
        <source>Start:</source>
        <translation>Start:</translation>
    </message>
    <message>
        <source>End:</source>
        <translation>Einde:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation>&amp;Vrije schaal</translation>
    </message>
    <message>
        <source>&amp;Horizontal Scaling:</source>
        <translation>&amp;Horizontale schaal:</translation>
    </message>
    <message>
        <source>&amp;Vertical Scaling:</source>
        <translation>&amp;Verticale schaal:</translation>
    </message>
    <message>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation type="obsolete">Afbeelding &amp;schalen naar framegrootte</translation>
    </message>
    <message>
        <source>Keep Aspect &amp;Ratio</source>
        <translation>Beeldve&amp;rhouding behouden</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation>V&amp;ulKleur:</translation>
    </message>
    <message>
        <source>Mi&amp;nimum:</source>
        <translation>Mi&amp;nimaal:</translation>
    </message>
    <message>
        <source>Ma&amp;ximum:</source>
        <translation>Ma&amp;ximaal:</translation>
    </message>
    <message>
        <source>&amp;Stepping:</source>
        <translation>In &amp;stappen:</translation>
    </message>
    <message>
        <source>Text Frame Properties</source>
        <translation>Eigenschappen voor tekstframe</translation>
    </message>
    <message>
        <source>Picture Frame Properties</source>
        <translation type="obsolete">Eigenschappen voor afbeeldingsframe</translation>
    </message>
    <message>
        <source>Shape Drawing Properties</source>
        <translation>Eigenschappen voor tekenen van vormen</translation>
    </message>
    <message>
        <source>Magnification Level Defaults</source>
        <translation>Standaardwaarden voor vergrotingsniveau</translation>
    </message>
    <message>
        <source>Line Drawing Properties</source>
        <translation>Lijneigenschappen</translation>
    </message>
    <message>
        <source>Polygon Drawing Properties</source>
        <translation>Polygooneigenschappen</translation>
    </message>
    <message>
        <source>Font for new text frames</source>
        <translation>Font voor nieuwe tekstframes</translation>
    </message>
    <message>
        <source>Size of font for new text frames</source>
        <translation>Tekengrootte voor nieuwe tekstframes</translation>
    </message>
    <message>
        <source>Color of font</source>
        <translation>Letterkleur</translation>
    </message>
    <message>
        <source>Number of columns in a text frame</source>
        <translation>Aantal kolommen in een tekstframe</translation>
    </message>
    <message>
        <source>Gap between text frame columns</source>
        <translation>Tussenruimte tussen kolommen</translation>
    </message>
    <message>
        <source>Sample of your font</source>
        <translation>Voorbeeld van uw font</translation>
    </message>
    <message>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation type="obsolete">Afbeeldingsframes kunnen afbeeldingen meeschalen naar elke grootte</translation>
    </message>
    <message>
        <source>Horizontal scaling of images</source>
        <translation>Horizontale schaal voor afbeeldingen</translation>
    </message>
    <message>
        <source>Vertical scaling of images</source>
        <translation>Verticale schaal voor afbeeldingen</translation>
    </message>
    <message>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation>Houdt de horizontale en verticale schaal gelijk</translation>
    </message>
    <message>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation type="obsolete">Afbeeldingen in afbeeldingsframes worden altijd naar de grootte van het frame geschaald</translation>
    </message>
    <message>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation type="obsolete">Automatisch geschaalde afbeeldingen houden hun oorspronkelijke beeldverhouding</translation>
    </message>
    <message>
        <source>Fill color of picture frames</source>
        <translation type="obsolete">Vulkleur voor afbeeldingsframes</translation>
    </message>
    <message>
        <source>Saturation of color of fill</source>
        <translation>Verzadiging van de vulkleur</translation>
    </message>
    <message>
        <source>Line color of shapes</source>
        <translation>Lijnkleur van vormen</translation>
    </message>
    <message>
        <source>Saturation of color of lines</source>
        <translation>Verzadiging van de lijnkleur</translation>
    </message>
    <message>
        <source>Fill color of shapes</source>
        <translation>Vulkleur van vormen</translation>
    </message>
    <message>
        <source>Line style of shapes</source>
        <translation>Lijnstijl van vormen</translation>
    </message>
    <message>
        <source>Line width of shapes</source>
        <translation>Lijndikte van vormen</translation>
    </message>
    <message>
        <source>Minimum magnification allowed</source>
        <translation>Minimaal toegestane vergroting</translation>
    </message>
    <message>
        <source>Maximum magnification allowed</source>
        <translation>Maximaal toegestane vergroting</translation>
    </message>
    <message>
        <source>Change in magnification for each zoom operation</source>
        <translation>Verandering in grootte bij elke zoom-stap</translation>
    </message>
    <message>
        <source>Color of lines</source>
        <translation>Lijnkleur</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation>Kleurverzadiging</translation>
    </message>
    <message>
        <source>Style of lines</source>
        <translation>Lijnstijl</translation>
    </message>
    <message>
        <source>Width of lines</source>
        <translation>Dikte van lijnen</translation>
    </message>
    <message>
        <source>Tab Fill Character:</source>
        <translation>Tab uitvulteken:</translation>
    </message>
    <message>
        <source>Tab Width:</source>
        <translation>Tabbreedte:</translation>
    </message>
    <message>
        <source>Use embedded Clipping Path</source>
        <translation>Gebruik ingebed uitknip pad</translation>
    </message>
    <message>
        <source>On Screen Preview</source>
        <translation>Afdrukvoorbeeld</translation>
    </message>
    <message>
        <source>Full Resolution Preview</source>
        <translation>Volledige resolutie voorbeeld</translation>
    </message>
    <message>
        <source>Normal Resolution Preview</source>
        <translation>Normale resolutie voorbeeld</translation>
    </message>
    <message>
        <source>Low Resolution Preview</source>
        <translation>Lage resolutie voorbeeld</translation>
    </message>
    <message>
        <source>Custom:</source>
        <translation>Aangepast:</translation>
    </message>
    <message>
        <source>Custom: </source>
        <translation>Aangepast: </translation>
    </message>
    <message>
        <source>Text Color:</source>
        <translation>Tekstkleur:</translation>
    </message>
    <message>
        <source>Shading:</source>
        <translation>Tint:</translation>
    </message>
    <message>
        <source>Text Stroke:</source>
        <translation>Tekstlijn:</translation>
    </message>
    <message>
        <source>Dot</source>
        <translation>Punt</translation>
    </message>
    <message>
        <source>Hyphen</source>
        <translation>Afbreekstreepje</translation>
    </message>
    <message>
        <source>Underscore</source>
        <translation>Underscore</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Aangepast</translation>
    </message>
    <message>
        <source>None</source>
        <comment>tab fill</comment>
        <translation>Geen</translation>
    </message>
    <message>
        <source>&amp;Scale Image to Frame Size</source>
        <translation>Afbeelding &amp;schalen naar framegrootte</translation>
    </message>
    <message>
        <source>Image Frame Properties</source>
        <translation>Eigenschappen voor afbeeldingframe</translation>
    </message>
    <message>
        <source>Image frames allow images to scale to any size</source>
        <translation>Afbeeldingsframes kunnen afbeeldingen meeschalen naar elke grootte</translation>
    </message>
    <message>
        <source>Images in image frames are scaled to the size of the frame</source>
        <translation>Afbeeldingen in afbeeldingsframes worden altijd naar de grootte van het frame geschaald</translation>
    </message>
    <message>
        <source>Automatically scaled images keep their original proportions</source>
        <translation>Automatisch geschaalde afbeeldingen houden hun oorspronkelijke beeldverhouding</translation>
    </message>
    <message>
        <source>Fill color of image frames</source>
        <translation>Vulkleur voor afbeeldingsframes</translation>
    </message>
</context>
<context>
    <name>TabTypograpy</name>
    <message>
        <source>Subscript</source>
        <translation>Subscript</translation>
    </message>
    <message>
        <source> %</source>
        <translation>%</translation>
    </message>
    <message>
        <source>&amp;Displacement:</source>
        <translation>Ver&amp;plaatsing:</translation>
    </message>
    <message>
        <source>&amp;Scaling:</source>
        <translation>&amp;Schaal:</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation>Superscript</translation>
    </message>
    <message>
        <source>D&amp;isplacement:</source>
        <translation>Verplaat&amp;sing:</translation>
    </message>
    <message>
        <source>S&amp;caling:</source>
        <translation>S&amp;chaal:</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation>Kleinkapitalen</translation>
    </message>
    <message>
        <source>Sc&amp;aling:</source>
        <translation>Sch&amp;aal:</translation>
    </message>
    <message>
        <source>Displacement above the baseline of the font on a line</source>
        <translation>Verplaatsing boven de basislijn van een font op een regel</translation>
    </message>
    <message>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation>Relatieve grootte van het superscript t.o.v. de normale tekengrootte</translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation>Verplaatsing onder de basislijn van een font op een regel</translation>
    </message>
    <message>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation>Relatieve grootte van het subscript t.o.v. de normale tekengrootte</translation>
    </message>
    <message>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation>Relatieve grootte van de kleinkapitalen t.o.v. de normale tekengrootte</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation>Onderstrepen</translation>
    </message>
    <message>
        <source>Displacement:</source>
        <translation>Verplaatsing:</translation>
    </message>
    <message>
        <source>Auto</source>
        <translation>Automatisch</translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation>Lijndikte:</translation>
    </message>
    <message>
        <source>Strikethru</source>
        <translation>Doorhalen</translation>
    </message>
    <message>
        <source>Automatic &amp;Line Spacing</source>
        <translation>Automatische &amp;interlinie
</translation>
    </message>
    <message>
        <source>Line Spacing:</source>
        <translation>Interlinie:</translation>
    </message>
    <message>
        <source>Percentage increase over the font size for the line spacing</source>
        <translation>Toename van regelhoogte in procent van de waarde die het font aangeeft</translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font expressed as a percentage of the fonts descender</source>
        <translation>Verplaatsing onder de basislijn van het normale font uitgedrukt in percentage van de font onderzijde</translation>
    </message>
    <message>
        <source>Line width expressed as a percentage of the font size</source>
        <translation>Lijndikte uitgedrukt in percentage van het font formaat</translation>
    </message>
    <message>
        <source>Displacement above the baseline of the normal font expressed as a percentage of the fonts ascender</source>
        <translation>Verplaatsing boven de basislijn van het normale font in percentage van de font bovenzijde</translation>
    </message>
</context>
<context>
    <name>Tabruler</name>
    <message>
        <source>Left</source>
        <translation>Links</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Rechts</translation>
    </message>
    <message>
        <source>Full Stop</source>
        <translation type="obsolete">Volledige stop</translation>
    </message>
    <message>
        <source>Comma</source>
        <translation>Komma</translation>
    </message>
    <message>
        <source>Center</source>
        <translation>Centreren</translation>
    </message>
    <message>
        <source>&amp;Position:</source>
        <translation>&amp;Positie:</translation>
    </message>
    <message>
        <source>Delete All</source>
        <translation>Alles verwijderen</translation>
    </message>
    <message>
        <source>Indentation for first line of the paragraph</source>
        <translation>Inspringen voor de eerste regel van de alinea</translation>
    </message>
    <message>
        <source>Indentation from the left for the whole paragraph</source>
        <translation>Inspringen vanaf links voor de hele alinea</translation>
    </message>
    <message>
        <source>Delete all Tabulators</source>
        <translation>Alle tabstops verwijderen</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Geen</translation>
    </message>
    <message>
        <source>Dot</source>
        <translation>Punt</translation>
    </message>
    <message>
        <source>Hyphen</source>
        <translation>Afbreekstreepje</translation>
    </message>
    <message>
        <source>Underscore</source>
        <translation>Underscore</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Aangepast</translation>
    </message>
    <message>
        <source>Fill Char:</source>
        <translation>Opvulteken:</translation>
    </message>
    <message>
        <source>Custom:</source>
        <translation>Aangepast:</translation>
    </message>
    <message>
        <source>Custom: </source>
        <translation>Aangepast: </translation>
    </message>
    <message>
        <source>None</source>
        <comment>tab fill</comment>
        <translation>Geen</translation>
    </message>
    <message>
        <source>Period</source>
        <translation>Punt</translation>
    </message>
</context>
<context>
    <name>Tree</name>
    <message>
        <source>Outline</source>
        <translation>Outline</translation>
    </message>
    <message>
        <source>Element</source>
        <translation>Element</translation>
    </message>
    <message>
        <source>Group </source>
        <translation>Groep</translation>
    </message>
    <message>
        <source>Free Objects</source>
        <translation>Vrije objecten</translation>
    </message>
    <message>
        <source>Page </source>
        <translation>Pagina </translation>
    </message>
</context>
<context>
    <name>UnderlineValues</name>
    <message>
        <source>Auto</source>
        <translation>Automatisch</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Displacement</source>
        <translation>Verplaatsing</translation>
    </message>
    <message>
        <source>Linewidth</source>
        <translation>Lijndikte</translation>
    </message>
</context>
<context>
    <name>UndoManager</name>
    <message>
        <source>Add vertical guide</source>
        <translation>Voeg verticale hulplijnen toe</translation>
    </message>
    <message>
        <source>Add horizontal guide</source>
        <translation>Voeg horizontale hulplijnen toe</translation>
    </message>
    <message>
        <source>Remove vertical guide</source>
        <translation>Verwijder verticale hulplijnen</translation>
    </message>
    <message>
        <source>Remove horizontal guide</source>
        <translation>Verwijder horizontale hulplijnen</translation>
    </message>
    <message>
        <source>Move vertical guide</source>
        <translation>Verplaats verticale hulplijnen</translation>
    </message>
    <message>
        <source>Move horizontal guide</source>
        <translation>Verplaats horizontale hulplijnen</translation>
    </message>
    <message>
        <source>Lock guides</source>
        <translation>Hulplijnen vastzetten</translation>
    </message>
    <message>
        <source>Unlock guides</source>
        <translation>Hulplijnen losmaken</translation>
    </message>
    <message>
        <source>Move</source>
        <translation>Verplaatsen</translation>
    </message>
    <message>
        <source>Resize</source>
        <translation>Grootte aanpassen</translation>
    </message>
    <message>
        <source>Rotate</source>
        <translation>Roteer</translation>
    </message>
    <message>
        <source>X1: %1, Y1: %2, %3
X2: %4, Y2: %5, %6</source>
        <translation>X1: %1, Y1: %2, %3
X2: %4, Y2: %5, %6</translation>
    </message>
    <message>
        <source>W1: %1, H1: %2
W2: %3, H2: %4</source>
        <translation>W1: %1, H1: %2
W2: %3, H2: %4</translation>
    </message>
    <message>
        <source>Selection</source>
        <translation>Selectie</translation>
    </message>
    <message>
        <source>Group</source>
        <translation>Groeperen</translation>
    </message>
    <message>
        <source>Selection/Group</source>
        <translation>Selectie/Grouperen</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>Aanmaken</translation>
    </message>
    <message>
        <source>X: %1, Y: %2
W: %3, H: %4</source>
        <translation>X: %1, Y: %2
W: %3, H: %4</translation>
    </message>
    <message>
        <source>Align/Distribute</source>
        <translation>Verdelen/uitlijnen</translation>
    </message>
    <message>
        <source>Items involved</source>
        <translation>Items betrokken</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Annuleren</translation>
    </message>
    <message>
        <source>Set fill color</source>
        <translation>Bepaal vulkleur</translation>
    </message>
    <message>
        <source>Color1: %1, Color2: %2</source>
        <translation>Kleur1: %1, Kleur2: %2</translation>
    </message>
    <message>
        <source>Set fill color shade</source>
        <translation>Bepaal vulkleur schaduw</translation>
    </message>
    <message>
        <source>Set line color</source>
        <translation>Bepaal lijnkleur</translation>
    </message>
    <message>
        <source>Set line color shade</source>
        <translation>Bepaal tint lijnkleur schaduw</translation>
    </message>
    <message>
        <source>Flip horizontally</source>
        <translation>Horizontaal spiegelen</translation>
    </message>
    <message>
        <source>Flip vertically</source>
        <translation>Verticaal spiegelen</translation>
    </message>
    <message>
        <source>Lock</source>
        <translation>Vastzetten</translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation>Losmaken</translation>
    </message>
    <message>
        <source>Lock size</source>
        <translation>Grootte vastzetten</translation>
    </message>
    <message>
        <source>Unlock size</source>
        <translation>Grootte losmaken</translation>
    </message>
    <message>
        <source>Ungroup</source>
        <translation>Degroeperen</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Verwijderen</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Hernoemen</translation>
    </message>
    <message>
        <source>From %1
to %2</source>
        <translation>Van %1
tot %2</translation>
    </message>
    <message>
        <source>Paste</source>
        <translation>Plakken</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation>Knippen</translation>
    </message>
    <message>
        <source>Set fill color transparency</source>
        <translation>Bepaal vulkleur transparantie</translation>
    </message>
    <message>
        <source>Set line color transparency</source>
        <translation>Bepaal lijnkleur transparantie</translation>
    </message>
    <message>
        <source>Set line style</source>
        <translation>Bepaal lijnstijl</translation>
    </message>
    <message>
        <source>Set the style of line end</source>
        <translation>Stel stijl in van eindpunt lijn</translation>
    </message>
    <message>
        <source>Set the style of line join</source>
        <translation>Stel stijl in van lijnverbinding</translation>
    </message>
    <message>
        <source>Set line width</source>
        <translation>Bepaal lijndikte</translation>
    </message>
    <message>
        <source>No style</source>
        <translation>Geen stijl</translation>
    </message>
    <message>
        <source>Set custom line style</source>
        <translation>Bepaal eigen lijnstijl</translation>
    </message>
    <message>
        <source>Do not use custom line style</source>
        <translation>Gebruik eigen lijnstijl niet</translation>
    </message>
    <message>
        <source>Set start arrow</source>
        <translation>Stel begin pijl in</translation>
    </message>
    <message>
        <source>Set end arrow</source>
        <translation>Stel einde pijl in</translation>
    </message>
    <message>
        <source>Create table</source>
        <translation>Maak tabel</translation>
    </message>
    <message>
        <source>Rows: %1, Cols: %2</source>
        <translation>Rijen: %1, Kolommen: %2</translation>
    </message>
    <message>
        <source>Set font</source>
        <translation>Font instellen</translation>
    </message>
    <message>
        <source>Set font size</source>
        <translation>Tekengrootte instellen</translation>
    </message>
    <message>
        <source>Set font width</source>
        <translation>Schaalbreedte van tekens instellen</translation>
    </message>
    <message>
        <source>Set font fill color</source>
        <translation>Font vulkleur instellen</translation>
    </message>
    <message>
        <source>Set font stroke color</source>
        <translation>Kleur font-omlijning instellen</translation>
    </message>
    <message>
        <source>Set font fill color shade</source>
        <translation>Tint font vulkleur instellen</translation>
    </message>
    <message>
        <source>Set font stroke color shade</source>
        <translation>Tint font-omlijning kleur instellen</translation>
    </message>
    <message>
        <source>Set kerning</source>
        <translation>Kerning instellen</translation>
    </message>
    <message>
        <source>Set line spacing</source>
        <translation>Regelspatiëring instellen</translation>
    </message>
    <message>
        <source>Set paragraph style</source>
        <translation>Alineastijl instellen</translation>
    </message>
    <message>
        <source>Set language</source>
        <translation>Taal instellen</translation>
    </message>
    <message>
        <source>Align text</source>
        <translation>Tekst uitlijnen</translation>
    </message>
    <message>
        <source>Set font effect</source>
        <translation>Font-effecten instellen</translation>
    </message>
    <message>
        <source>Image frame</source>
        <translation>Afbeeldingskader</translation>
    </message>
    <message>
        <source>Text frame</source>
        <translation>Tekstframe</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Polygoon</translation>
    </message>
    <message>
        <source>Bezier curve</source>
        <translation>Beziercurve</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation>Polylijn</translation>
    </message>
    <message>
        <source>Convert to</source>
        <translation>Converteer naar</translation>
    </message>
    <message>
        <source>Import SVG image</source>
        <translation>Importeer SVG bestand</translation>
    </message>
    <message>
        <source>Import EPS image</source>
        <translation>Importeer EPS bestand </translation>
    </message>
    <message>
        <source>Scratch space</source>
        <translation>Kladblok</translation>
    </message>
    <message>
        <source>Text flows around the frame</source>
        <translation>Tekst loopt om frame</translation>
    </message>
    <message>
        <source>Text flows around bounding box</source>
        <translation>Tekstomloop rond omliggende rechthoek</translation>
    </message>
    <message>
        <source>Text flows around contour line</source>
        <translation>Tekstomloop rond contourlijn</translation>
    </message>
    <message>
        <source>No text flow</source>
        <translation>Geen tekstomloop</translation>
    </message>
    <message>
        <source>No bounding box</source>
        <translation>Geen omliggende rechthoek</translation>
    </message>
    <message>
        <source>No contour line</source>
        <translation>Geen contourlijn</translation>
    </message>
    <message>
        <source>Page %1</source>
        <translation>Pagina %1</translation>
    </message>
    <message>
        <source>Set image scaling</source>
        <translation>Stel afbeeldingsschaal in</translation>
    </message>
    <message>
        <source>Frame size</source>
        <translation>Framegrootte</translation>
    </message>
    <message>
        <source>Free scaling</source>
        <translation>Vrije schaal</translation>
    </message>
    <message>
        <source>Keep aspect ratio</source>
        <translation>Beeldverhouding behouden</translation>
    </message>
    <message>
        <source>Break aspect ratio</source>
        <translation>Beeldverhouding niet behouden</translation>
    </message>
    <message>
        <source>Edit contour line</source>
        <translation>Contourlijn bewerken</translation>
    </message>
    <message>
        <source>Edit shape</source>
        <translation>Bewerk vorm</translation>
    </message>
    <message>
        <source>Reset contour line</source>
        <translation>Contourlijn opnieuw instellen</translation>
    </message>
    <message>
        <source>Apply Master Page</source>
        <translation>Sjabloon toepassen</translation>
    </message>
    <message>
        <source>Set font height</source>
        <translation>Bepaal letertypehoogte</translation>
    </message>
    <message>
        <source>Import OpenOffice.org Draw image</source>
        <translation>Importeer OpenOffice.org Draw afbeelding</translation>
    </message>
    <message>
        <source>Add page</source>
        <translation>Pagina toevoegen</translation>
    </message>
    <message>
        <source>Add pages</source>
        <translation>Pagina&apos;s toevoegen</translation>
    </message>
    <message>
        <source>Delete page</source>
        <translation>Pagina verwijderen</translation>
    </message>
    <message>
        <source>Delete pages</source>
        <translation>Pagina&apos;s verwijderen</translation>
    </message>
    <message>
        <source>Add layer</source>
        <translation>Laag toevoegen</translation>
    </message>
    <message>
        <source>Delete layer</source>
        <translation>Laag verwijderen</translation>
    </message>
    <message>
        <source>Rename layer</source>
        <translation>Laag hernoemen</translation>
    </message>
    <message>
        <source>Raise layer</source>
        <translation>Laag niveau hoger</translation>
    </message>
    <message>
        <source>Lower layer</source>
        <translation>Laag niveau lager</translation>
    </message>
    <message>
        <source>Send to layer</source>
        <translation>In laag zetten</translation>
    </message>
    <message>
        <source>Enable printing of layer</source>
        <translation>Printen van deze laag inschakelen</translation>
    </message>
    <message>
        <source>Disable printing of layer</source>
        <translation>Printen van deze laag uitschakelen</translation>
    </message>
    <message>
        <source>Change name of the layer</source>
        <translation>Naam van laag veranderen</translation>
    </message>
    <message>
        <source>Get image</source>
        <translation>Verkrijg afbeelding</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation>Tekst op een pad</translation>
    </message>
    <message>
        <source>Enable Item Printing</source>
        <translation>Item printen inschakelen</translation>
    </message>
    <message>
        <source>Disable Item Printing</source>
        <translation>Item printen uitschakelen</translation>
    </message>
    <message>
        <source>Multiple duplicate</source>
        <translation>Meervoudig dupliceren</translation>
    </message>
    <message>
        <source>Change Image Offset</source>
        <translation>Verander afbeeldingspositie</translation>
    </message>
    <message>
        <source>Change Image Scale</source>
        <translation>Verander afbeeldingsschaal</translation>
    </message>
    <message>
        <source>X1: %1, Y1: %2
X2: %4, Y2: %5</source>
        <translation>X1: %1, Y1: %2
X2: %4, Y2: %5</translation>
    </message>
    <message>
        <source>X: %1, Y: %2
X: %4, Y: %5</source>
        <translation>X: %1, Y: %2
X: %4, Y: %5</translation>
    </message>
    <message>
        <source>Reset control point</source>
        <translation>Controlepunt opnieuw instellen</translation>
    </message>
    <message>
        <source>Reset control points</source>
        <translation>Controlepunten opnieuw instellen</translation>
    </message>
    <message>
        <source>Modify image effects</source>
        <translation>Afbeeldingseffecten aanpassen</translation>
    </message>
</context>
<context>
    <name>UndoPalette</name>
    <message>
        <source>Action History</source>
        <translation>Actiegeschiedenis</translation>
    </message>
    <message>
        <source>Show selected object only</source>
        <translation>Laat alleen geselecteerd object zien</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Ongedaan maken</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>O&amp;pnieuw doen</translation>
    </message>
    <message>
        <source>Initial State</source>
        <translation>Oorspronkelijke staat</translation>
    </message>
</context>
<context>
    <name>UndoWidget</name>
    <message>
        <source>%1: %2</source>
        <comment>undo target: action (f.e. Text frame: Resize)</comment>
        <translation>%1: %2</translation>
    </message>
</context>
<context>
    <name>UpgradeChecker</name>
    <message>
        <source>Attempting to get the Scribus version update file</source>
        <translation>Poging Scribus versie update bestand op te halen</translation>
    </message>
    <message>
        <source>(No data on your computer will be sent to an external location)</source>
        <translation>(Er wordt geen data van deze computer verzonden naar een externe locatie)</translation>
    </message>
    <message>
        <source>Timed out when attempting to get update file.</source>
        <translation>Tijdslimiet overschreden tijdens poging update bestand op te halen.</translation>
    </message>
    <message>
        <source>Error when attempting to get update file: %1</source>
        <translation>Fout tijdens poging update bestand op te halen: %1</translation>
    </message>
    <message>
        <source>File not found on server</source>
        <translation>Bestand niet gevonden op de server</translation>
    </message>
    <message>
        <source>Could not open version file: %1
Error:%2 at line: %3, row: %4</source>
        <translation>Kan niet openen versie bestand: %1
Fout: %2 in regel: %3, rij: %4</translation>
    </message>
    <message>
        <source>An error occurred while looking for updates for Scribus, please check your internet connection.</source>
        <translation>Er is een fout opgetreden tijdens zoeken naar updates voor Scribus. Controleer de internet verbinding.</translation>
    </message>
    <message>
        <source>No updates are available for your version of Scribus %1</source>
        <translation>Er zijn geen updates beschikbaar voor deze versie van Scribus %1</translation>
    </message>
    <message>
        <source>One or more updates for your version of Scribus (%1) are available:</source>
        <translation>Een of meer updates voor deze versie van Scribus (%1) zijn beschikbaar:</translation>
    </message>
    <message>
        <source>This list may contain development versions.</source>
        <translation>Deze lijst kan ontwikkel versies bevatten.</translation>
    </message>
    <message>
        <source>Please visit www.scribus.net for details.</source>
        <translation>Bezoek www.scribus.net voor details.</translation>
    </message>
</context>
<context>
    <name>UsePrinterMarginsDialog</name>
    <message>
        <source>Minimum Margins for Page Size %1</source>
        <translation>Minimale marges voor paginagrootte %1</translation>
    </message>
</context>
<context>
    <name>UsePrinterMarginsDialogBase</name>
    <message>
        <source>Use Printer Margins</source>
        <translation>Gebruik printermarges</translation>
    </message>
    <message>
        <source>Select &amp;Printer:</source>
        <translation>Selecteer &amp;printer:</translation>
    </message>
    <message>
        <source>Margins</source>
        <translation>Marges</translation>
    </message>
    <message>
        <source>Right:</source>
        <translation>Rechts:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>&amp;Boven:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>On&amp;der:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Links:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Atl+O</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Annuleren</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+A</translation>
    </message>
</context>
<context>
    <name>ValueDialog</name>
    <message>
        <source>Insert value</source>
        <translation>Waarde invoegen</translation>
    </message>
    <message>
        <source>Enter a value then press OK.</source>
        <translation>Voer een waarde in en klik op OK.</translation>
    </message>
    <message>
        <source>Enter a value then press OK</source>
        <translation>Voer een waarde in en klik op OK</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Atl+O</translation>
    </message>
    <message>
        <source>Send your value to the script</source>
        <translation>Geef uw waarde door aan het script</translation>
    </message>
</context>
<context>
    <name>WerkToolB</name>
    <message>
        <source>Tools</source>
        <translation>Gereedschappen</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation>Eigenschappen...</translation>
    </message>
</context>
<context>
    <name>WerkToolBP</name>
    <message>
        <source>PDF Tools</source>
        <translation>PDF-gereedschappen</translation>
    </message>
    <message>
        <source>Button</source>
        <translation>Knop</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation>Tekstveld</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation>Checkbox</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation>Combobox</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation>Listbox</translation>
    </message>
    <message>
        <source>Insert PDF Fields</source>
        <translation>PDF-velden invoegen</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Tekst</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Koppeling</translation>
    </message>
    <message>
        <source>Insert PDF Annotations</source>
        <translation>PDF-annotaties invoegen</translation>
    </message>
</context>
<context>
    <name>gtFileDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation>Selecteer het te gebruiken importfilter</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automatisch</translation>
    </message>
    <message>
        <source>Import text without any formatting</source>
        <translation>Tekst importeren zonder enige opmaak</translation>
    </message>
    <message>
        <source>Importer:</source>
        <translation>Importfilter:</translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation>Codering:</translation>
    </message>
    <message>
        <source>Import Text Only</source>
        <translation>Importeer alleen tekst</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Openen</translation>
    </message>
</context>
<context>
    <name>gtImporterDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation>Selecteer het te gebruiken importfilter</translation>
    </message>
    <message>
        <source>Remember association</source>
        <translation>Deze associatie onthouden</translation>
    </message>
    <message>
        <source>Remember the file extension - importer association and do not ask again to select an importer for files of this type.</source>
        <translation>Onthoudt de bestandsnaamextensie-importfilter associatie. De volgende keer wordt bij het importeren van een bestand van dit type hetzelfde importfilter gebruikt.</translation>
    </message>
</context>
<context>
    <name>nftdialog</name>
    <message>
        <source>New From Template</source>
        <translation>Nieuw van sjabloon</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>Ve&amp;rwijderen</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Openen</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Alles</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Paginagrootte</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Kleuren</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Omschrijving</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation>Gebruik</translation>
    </message>
    <message>
        <source>Created with</source>
        <translation>Aangemaakt met</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Datum</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Auteur</translation>
    </message>
    <message>
        <source>Downloading Templates</source>
        <translation>Sjablonen downloaden</translation>
    </message>
    <message>
        <source>Document templates can be found at http://www.scribus.net/ in the Downloads section.</source>
        <translation>U kunt documentsjablonen vinden op http://www.scribus.net/ in de Downloads-sectie.</translation>
    </message>
    <message>
        <source>Installing Templates</source>
        <translation>Sjablonen installeren</translation>
    </message>
    <message>
        <source>Extract the package to the template directory ~/.scribus/templates for the current user or PREFIX/share/scribus/templates for all users in the system.</source>
        <translation>Pak het bestand uit in de sjablonenmap van Scibus: ~/.scribus/templates voor de huidige gebruiker of PREFIX/share/scribus/templates voor alle gebruikers van het systeem.</translation>
    </message>
    <message>
        <source>Preparing a template</source>
        <translation>Sjabloon prepareren</translation>
    </message>
    <message>
        <source>Make sure images and fonts you use can be used freely. If fonts cannot be shared do not collect them when saving as a template.</source>
        <translation>Vergewis u ervan dat afbeeldingen en fonts vrij gebruikt kunnen worden. Als fonts niet kunnen worden gedeeld, verzamel deze dan niet als u een document opslaat als een sjabloon.</translation>
    </message>
    <message>
        <source>The template creator should also make sure that the Installing Templates section above applies to their templates as well. This means a user should be able to download a template package and be able to extract them to the template directory and start using them.</source>
        <translation>Wie een sjabloon maakt dient ook zeker te zijn dat het installeren van de sjabloon goed zal werken, zodat een gebruiker deze eenvoudig kan uitpakken en ermee beginnen te werken.</translation>
    </message>
    <message>
        <source>Removing a template</source>
        <translation>Sjablonen verwijderen</translation>
    </message>
    <message>
        <source>Removing a template from the New From Template dialog will only remove the entry from the template.xml, it will not delete the document files. A popup menu with remove is only shown if you have write access to the template.xml file.</source>
        <translation>Als u een sjabloon verwijdert wordt enkel de ingang in het bestand template.xml verwijderd, niet de documentbestanden zelf. De optie verwijderen wordt enkel weergegeven als u schrijftoegang hebt tot het template-xml-bestand.</translation>
    </message>
    <message>
        <source>Translating template.xml</source>
        <translation>Het template.xml-bestand vertalen</translation>
    </message>
    <message>
        <source>Copy an existing template.xml to a file called template.lang_COUNTRY.xml (use the same lang code that is present in the qm file for your language), for example template.fi.xml for Finnish language template.xml. The copy must be located in the same directory as the original template.xml so Scribus can load it.</source>
        <translation>Dit kan door een bestaand template.xml te kopiëren naar een bestand met de naam template.lang_LANDCODE.xml (gebruik dezelfde landcode als het .ts-bestand voor uw taal), bijvoorbeeld template.nl.xml voor de Nederlandse vertaling van sjabloonnamen. De kopie dient zich in dezelfde map te bevingen als het oorspronkelijke bestand, zodat Scribus het kan vinden.</translation>
    </message>
</context>
<context>
    <name>satdialog</name>
    <message>
        <source>Save as Template</source>
        <translation>Opslaan als sjabloon</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Naam</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Categorie</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Paginagrootte</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Kleuren</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Omschrijving</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation>Gebruik</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Auteur</translation>
    </message>
    <message>
        <source>Email</source>
        <translation>E-mail</translation>
    </message>
    <message>
        <source>More Details</source>
        <translation>Meer informatie</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Less Details</source>
        <translation>Minder informatie</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation>Letter (US)</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation>Tabloid</translation>
    </message>
    <message>
        <source>landscape</source>
        <translation>liggend</translation>
    </message>
    <message>
        <source>portrait</source>
        <translation>staand</translation>
    </message>
    <message>
        <source>custom</source>
        <translation>aangepast</translation>
    </message>
</context>
<context>
    <name>tfDia</name>
    <message>
        <source>Create filter</source>
        <translation>Filter aanmaken</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>W&amp;issen</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>Verwij&amp;deren</translation>
    </message>
    <message>
        <source>Choose a previously saved filter</source>
        <translation>Kies een eerder bewaard filter</translation>
    </message>
    <message>
        <source>Give a name to this filter for saving</source>
        <translation>Geef dit filter een naam om op te slaan</translation>
    </message>
    <message>
        <source>Give a name for saving</source>
        <translation>Voer een naam in</translation>
    </message>
</context>
<context>
    <name>tfFilter</name>
    <message>
        <source>Disable or enable this filter row</source>
        <translation>Deze filterregel in- of uitschakelen</translation>
    </message>
    <message>
        <source>Remove this filter row</source>
        <translation>Deze filterregel verwijderen</translation>
    </message>
    <message>
        <source>Add a new filter row</source>
        <translation>Een nieuwe regel toevoegen</translation>
    </message>
    <message>
        <source>to</source>
        <translation>aan</translation>
    </message>
    <message>
        <source>and</source>
        <translation>en</translation>
    </message>
    <message>
        <source>remove match</source>
        <translation>verwijder overeenkomst</translation>
    </message>
    <message>
        <source>do not remove match</source>
        <translation>verwijder overeenkomst niet</translation>
    </message>
    <message>
        <source>words</source>
        <translation>woorden</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Verwijderen</translation>
    </message>
    <message>
        <source>Replace</source>
        <translation>Vervangen</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Toepassen</translation>
    </message>
    <message>
        <source>Value at the left is a regular expression</source>
        <translation>De waarde links is een reguliere expressie</translation>
    </message>
    <message>
        <source>with</source>
        <translation>met</translation>
    </message>
    <message>
        <source>paragraph style</source>
        <translation>alinastijl</translation>
    </message>
    <message>
        <source>all instances of</source>
        <translation>alle instanties van</translation>
    </message>
    <message>
        <source>all paragraphs</source>
        <translation>alle alinea&apos;s</translation>
    </message>
    <message>
        <source>paragraphs starting with</source>
        <translation>alinea&apos;s die beginnen met</translation>
    </message>
    <message>
        <source>paragraphs with less than</source>
        <translation>alinea&apos;s met minder dan</translation>
    </message>
    <message>
        <source>paragraphs with more than</source>
        <translation>alinea&apos;s met meer dan</translation>
    </message>
</context>
</TS>