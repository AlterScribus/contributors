<!DOCTYPE TS><TS>
<context>
    <name></name>
    <message>
        <source>getFontSize([&quot;name&quot;]) -&gt; float

Returns the font size in points for the text frame &quot;name&quot;. If this text
frame has some text selected the value assigned to the first character of
the selection is returned.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished">getFontSize([&quot;name&quot;]) -&gt; float

Returns the font size in points for the text frame &quot;name&quot;. If this text
frame has some text selected the value assigned to the first character of
the selection is returned.
If &quot;name&quot; is not given the currently selected item is used.
</translation>
    </message>
    <message>
        <source>getColorNames() -&gt; list

Returns a list containing the names of all defined colors in the document.
If no document is open, returns a list of the default document colors.
</source>
        <translation type="unfinished">getColorNames() -&gt; list

Returns a list containing the names of all defined colours in the document.
If no document is open, returns a list of the default document colours.
</translation>
    </message>
    <message>
        <source>newDocDialog() -&gt; bool

Displays the &quot;New Document&quot; dialog box. Creates a new document if the user
accepts the settings. Does not create a document if the user presses cancel.
Returns true if a new document was created.
</source>
        <translation type="unfinished">newDocDialog() -&gt; bool

Displays the &quot;New Document&quot; dialog box. Creates a new document if the user
accepts the settings. Does not create a document if the user presses cancel.
Returns true if a new document was created.
</translation>
    </message>
    <message>
        <source>getFillColor([&quot;name&quot;]) -&gt; string

Returns the name of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished">getFillColor([&quot;name&quot;]) -&gt; string

Returns the name of the fill colour of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</translation>
    </message>
    <message>
        <source>moveObject(dx, dy [, &quot;name&quot;])

Moves the object &quot;name&quot; by dx and dy relative to its current position. The
distances are expressed in the current measurement unit of the document (see
UNIT constants). If &quot;name&quot; is not given the currently selected item is used.
If the object &quot;name&quot; belongs to a group, the whole group is moved.
</source>
        <translation type="unfinished">moveObject(dx, dy [, &quot;name&quot;])

Moves the object &quot;name&quot; by dx and dy relative to its current position. The
distances are expressed in the current measurement unit of the document (see
UNIT constants). If &quot;name&quot; is not given the currently selected item is used.
If the object &quot;name&quot; belongs to a group, the whole group is moved.
</translation>
    </message>
    <message>
        <source>setRedraw(bool)

Disables page redraw when bool = False, otherwise redrawing is enabled.
This change will persist even after the script exits, so make sure to call
setRedraw(True) in a finally: clause at the top level of your script.
</source>
        <translation type="unfinished">setRedraw(bool)

Disables page redraw when bool = False, otherwise redrawing is enabled.
This change will persist even after the script exits, so make sure to call
setRedraw(True) in a finally: clause at the top level of your script.
</translation>
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
        <translation type="unfinished">createRect(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new rectangle on the current page and returns its name. The
coordinates are given in the current measurement units of the document
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object
because you need this name to reference that object in future. If &quot;name&quot;
is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</translation>
    </message>
    <message>
        <source>newPage(where [,&quot;template&quot;])

Creates a new page. If &quot;where&quot; is -1 the new Page is appended to the
document, otherwise the new page is inserted before &quot;where&quot;. Page numbers are
counted from 1 upwards, no matter what the displayed first page number of your
document is. The optional parameter &quot;template&quot; specifies the name of the
template page for the new page.

May raise IndexError if the page number is out of range
</source>
        <translation type="obsolete">newPage(where [,&quot;template&quot;])

Creates a new page. If &quot;where&quot; is -1 the new Page is appended to the
document, otherwise the new page is inserted before &quot;where&quot;. Page numbers are
counted from 1 upwards, no matter what the displayed first page number of your
document is. The optional parameter &quot;template&quot; specifies the name of the
template page for the new page.

May raise IndexError if the page number is out of range
</translation>
    </message>
    <message>
        <source>setGradientFill(type, &quot;color1&quot;, shade1, &quot;color2&quot;, shade2, [&quot;name&quot;])

Sets the gradient fill of the object &quot;name&quot; to type. Color descriptions are
the same as for setFillColor() and setFillShade(). See the constants for
available types (FILL_&lt;type&gt;).
</source>
        <translation type="unfinished">setGradientFill(type, &quot;colour1&quot;, shade1, &quot;colour2&quot;, shade2, [&quot;name&quot;])

Sets the gradient fill of the object &quot;name&quot; to type. Colour descriptions are
the same as for setFillColor() and setFillShade(). See the constants for
available types (FILL_&lt;type&gt;).
</translation>
    </message>
    <message>
        <source>messagebarText(&quot;string&quot;)

Writes the &quot;string&quot; into the Scribus message bar (status line). The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
</source>
        <translation type="unfinished">messagebarText(&quot;string&quot;)

Writes the &quot;string&quot; into the Scribus message bar (status line). The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
</translation>
    </message>
    <message>
        <source>newDoc(size, margins, orientation, firstPageNumber,
                   unit, facingPages, firstSideLeft) -&gt; bool

Creates a new document and returns true if successful. The parameters have the
following meaning:

    size = A tuple (width, height) describing the size of the document. You can
    use predefined constants named PAPER_&lt;paper_type&gt; e.g. PAPER_A4 etc.

    margins = A tuple (left, right, top, bottom) describing the document
    margins

    orientation = the page orientation - constants PORTRAIT, LANDSCAPE

    firstPageNumber = is the number of the first page in the document used for
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
        <translation type="obsolete">newDoc(size, margins, orientation, firstPageNumber,
                   unit, facingPages, firstSideLeft) -&gt; bool

Creates a new document and returns true if successful. The parameters have the
following meaning:

    size = A tuple (width, height) describing the size of the document. You can
    use predefined constants named PAPER_&lt;paper_type&gt; e.g. PAPER_A4 etc.

    margins = A tuple (left, right, top, bottom) describing the document
    margins

    orientation = the page orientation - constants PORTRAIT, LANDSCAPE

    firstPageNumber = is the number of the first page in the document used for
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
</translation>
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
        <source>importSVG(&quot;string&quot;)

The &quot;string&quot; must be a valid filename for a SVG image. The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
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
        <translation type="unfinished">getFont([&quot;name&quot;]) -&gt; string

Returns the font name for the text frame &quot;name&quot;. If this text frame
has some text selected the value assigned to the first character
of the selection is returned. If &quot;name&quot; is not given the currently
selected item is used.
</translation>
    </message>
    <message>
        <source>getTextLength([&quot;name&quot;]) -&gt; integer

Returns the length of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished">getTextLength([&quot;name&quot;]) -&gt; integer

Returns the length of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</translation>
    </message>
    <message>
        <source>getText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot;. If this text frame has some text
selected, the selected text is returned. All text in the frame, not just
currently visible text, is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished">getText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot;. If this text frame has some text
selected, the selected text is returned. All text in the frame, not just
currently visible text, is returned. If &quot;name&quot; is not given the currently
selected item is used.
</translation>
    </message>
    <message>
        <source>getAllText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot; and of all text frames which are
linked with this frame. If this textframe has some text selected, the selected
text is returned. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation type="unfinished">getAllText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot; and of all text frames which are
linked with this frame. If this textframe has some text selected, the selected
text is returned. If &quot;name&quot; is not given the currently selected item is
used.
</translation>
    </message>
    <message>
        <source>getLineSpacing([&quot;name&quot;]) -&gt; float

Returns the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; expressed in
points. If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished">getLineSpacing([&quot;name&quot;]) -&gt; float

Returns the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; expressed in
points. If &quot;name&quot; is not given the currently selected item is used.
</translation>
    </message>
    <message>
        <source>getColumnGap([&quot;name&quot;]) -&gt; float

Returns the column gap size of the text frame &quot;name&quot; expressed in points. If
&quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished">getColumnGap([&quot;name&quot;]) -&gt; float

Returns the column gap size of the text frame &quot;name&quot; expressed in points. If
&quot;name&quot; is not given the currently selected item is used.
</translation>
    </message>
    <message>
        <source>getColumns([&quot;name&quot;]) -&gt; integer

Gets the number of columns of the text frame &quot;name&quot;. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished">getColumns([&quot;name&quot;]) -&gt; integer

Gets the number of columns of the text frame &quot;name&quot;. If &quot;name&quot; is not
given the currently selected item is used.
</translation>
    </message>
    <message>
        <source>setText(&quot;text&quot;, [&quot;name&quot;])

Sets the text of the text frame &quot;name&quot; to the text of the string &quot;text&quot;.
Text must be UTF8 encoded - use e.g. unicode(text, &apos;iso-8859-2&apos;). See the FAQ
for more details. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation type="unfinished">setText(&quot;text&quot;, [&quot;name&quot;])

Sets the text of the text frame &quot;name&quot; to the text of the string &quot;text&quot;.
Text must be UTF8 encoded - use e.g. unicode(text, &apos;iso-8859-2&apos;). See the FAQ
for more details. If &quot;name&quot; is not given the currently selected item is
used.
</translation>
    </message>
    <message>
        <source>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame. Text
must be UTF encoded (see setText() as reference) The first character has an
index of 0. &quot;name&quot; If &quot;name&quot; is not given the currently selected Item is
used.

May throw IndexError for an insertion out of bounds.
</source>
        <translation type="obsolete">insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame. Text
must be UTF encoded (see setText() as reference) The first character has an
index of 0. &quot;name&quot; If &quot;name&quot; is not given the currently selected Item is
used.

May throw IndexError for an insertion out of bounds.
</translation>
    </message>
    <message>
        <source>setFont(&quot;font&quot;, [&quot;name&quot;])

Sets the font of the text frame &quot;name&quot; to &quot;font&quot;. If there is some text
selected only the selected text is changed.  If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError if the font cannot be found.
</source>
        <translation type="unfinished">setFont(&quot;font&quot;, [&quot;name&quot;])

Sets the font of the text frame &quot;name&quot; to &quot;font&quot;. If there is some text
selected only the selected text is changed.  If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError if the font cannot be found.
</translation>
    </message>
    <message>
        <source>setFontSize(size, [&quot;name&quot;])

Sets the font size of the text frame &quot;name&quot; to &quot;size&quot;. &quot;size&quot; is treated
as a value in points. If there is some text selected only the selected text is
changed. &quot;size&quot; must be in the range 1 to 512. If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError for a font size that&apos;s out of bounds.
</source>
        <translation type="unfinished">setFontSize(size, [&quot;name&quot;])

Sets the font size of the text frame &quot;name&quot; to &quot;size&quot;. &quot;size&quot; is treated
as a value in points. If there is some text selected only the selected text is
changed. &quot;size&quot; must be in the range 1 to 512. If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError for a font size that&apos;s out of bounds.
</translation>
    </message>
    <message>
        <source>setLineSpacing(size, [&quot;name&quot;])

Sets the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; to &quot;size&quot;.
&quot;size&quot; is a value in points. If &quot;name&quot; is not given the currently selected
item is used.

May throw ValueError if the line spacing is out of bounds.
</source>
        <translation type="unfinished">setLineSpacing(size, [&quot;name&quot;])

Sets the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; to &quot;size&quot;.
&quot;size&quot; is a value in points. If &quot;name&quot; is not given the currently selected
item is used.

May throw ValueError if the line spacing is out of bounds.
</translation>
    </message>
    <message>
        <source>setColumnGap(size, [&quot;name&quot;])

Sets the column gap of the text frame &quot;name&quot; to the value &quot;size&quot;. If
&quot;name&quot; is not given the currently selected item is used.

May throw ValueError if the column gap is out of bounds (must be positive).
</source>
        <translation type="unfinished">setColumnGap(size, [&quot;name&quot;])

Sets the column gap of the text frame &quot;name&quot; to the value &quot;size&quot;. If
&quot;name&quot; is not given the currently selected item is used.

May throw ValueError if the column gap is out of bounds (must be positive).
</translation>
    </message>
    <message>
        <source>setColumns(nr, [&quot;name&quot;])

Sets the number of columns of the text frame &quot;name&quot; to the integer &quot;nr&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May throw ValueError if number of columns is not at least one.
</source>
        <translation type="unfinished">setColumns(nr, [&quot;name&quot;])

Sets the number of columns of the text frame &quot;name&quot; to the integer &quot;nr&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May throw ValueError if number of columns is not at least one.
</translation>
    </message>
    <message>
        <source>setTextAlignment(align, [&quot;name&quot;])

Sets the text alignment of the text frame &quot;name&quot; to the specified alignment.
If &quot;name&quot; is not given the currently selected item is used. &quot;align&quot; should
be one of the ALIGN_ constants defined in this module - see dir(scribus).

May throw ValueError for an invalid alignment constant.
</source>
        <translation type="unfinished">setTextAlignment(align, [&quot;name&quot;])

Sets the text alignment of the text frame &quot;name&quot; to the specified alignment.
If &quot;name&quot; is not given the currently selected item is used. &quot;align&quot; should
be one of the ALIGN_ constants defined in this module - see dir(scribus).

May throw ValueError for an invalid alignment constant.
</translation>
    </message>
    <message>
        <source>selectText(start, count, [&quot;name&quot;])

Selects &quot;count&quot; characters of text in the text frame &quot;name&quot; starting from the
character &quot;start&quot;. Character counting starts at 0. If &quot;count&quot; is zero, any
text selection will be cleared.  If &quot;name&quot; is not given the currently
selected item is used.

May throw IndexError if the selection is outside the bounds of the text.
</source>
        <translation type="unfinished">selectText(start, count, [&quot;name&quot;])

Selects &quot;count&quot; characters of text in the text frame &quot;name&quot; starting from the
character &quot;start&quot;. Character counting starts at 0. If &quot;count&quot; is zero, any
text selection will be cleared.  If &quot;name&quot; is not given the currently
selected item is used.

May throw IndexError if the selection is outside the bounds of the text.
</translation>
    </message>
    <message>
        <source>deleteText([&quot;name&quot;])

Deletes any text in the text frame &quot;name&quot;. If there is some text selected,
only the selected text will be deleted. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished">deleteText([&quot;name&quot;])

Deletes any text in the text frame &quot;name&quot;. If there is some text selected,
only the selected text will be deleted. If &quot;name&quot; is not given the currently
selected item is used.
</translation>
    </message>
    <message>
        <source>setTextColor(&quot;color&quot;, [&quot;name&quot;])

Sets the text color of the text frame &quot;name&quot; to the color &quot;color&quot;. If there
is some text selected only the selected text is changed. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished">setTextColor(&quot;colour&quot;, [&quot;name&quot;])

Sets the text colour of the text frame &quot;name&quot; to the colour &quot;colour&quot;. If there
is some text selected only the selected text is changed. If &quot;name&quot; is not
given the currently selected item is used.
</translation>
    </message>
    <message>
        <source>setTextStroke(&quot;color&quot;, [&quot;name&quot;])

Set &quot;color&quot; of the text stroke. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished">setTextStroke(&quot;colour&quot;, [&quot;name&quot;])

Set &quot;colour&quot; of the text stroke. If &quot;name&quot; is not given the currently
selected item is used.
</translation>
    </message>
    <message>
        <source>setTextShade(shade, [&quot;name&quot;])

Sets the shading of the text color of the object &quot;name&quot; to &quot;shade&quot;. If
there is some text selected only the selected text is changed. &quot;shade&quot; must
be an integer value in the range from 0 (lightest) to 100 (full color
intensity). If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation type="unfinished">setTextShade(shade, [&quot;name&quot;])

Sets the shading of the text colour of the object &quot;name&quot; to &quot;shade&quot;. If
there is some text selected only the selected text is changed. &quot;shade&quot; must
be an integer value in the range from 0 (lightest) to 100 (full colour
intensity). If &quot;name&quot; is not given the currently selected item is
used.
</translation>
    </message>
    <message>
        <source>linkTextFrames(&quot;fromname&quot;, &quot;toname&quot;)

Link two text frames. The frame named &quot;fromname&quot; is linked to the
frame named &quot;toname&quot;. The target frame must be an empty text frame
and must not link to or be linked from any other frames already.

May throw ScribusException if linking rules are violated.
</source>
        <translation type="unfinished">linkTextFrames(&quot;fromname&quot;, &quot;toname&quot;)

Link two text frames. The frame named &quot;fromname&quot; is linked to the
frame named &quot;toname&quot;. The target frame must be an empty text frame
and must not link to or be linked from any other frames already.

May throw ScribusException if linking rules are violated.
</translation>
    </message>
    <message>
        <source>unlinkTextFrames(&quot;name&quot;)

Remove the specified (named) object from the text frame flow/linkage. If the
frame was in the middle of a chain, the previous and next frames will be
connected, eg &apos;a-&gt;b-&gt;c&apos; becomes &apos;a-&gt;c&apos; when you unlinkTextFrames(b)&apos;

May throw ScribusException if linking rules are violated.
</source>
        <translation type="unfinished">unlinkTextFrames(&quot;name&quot;)

Remove the specified (named) object from the text frame flow/linkage. If the
frame was in the middle of a chain, the previous and next frames will be
connected, eg &apos;a-&gt;b-&gt;c&apos; becomes &apos;a-&gt;c&apos; when you unlinkTextFrames(b)&apos;

May throw ScribusException if linking rules are violated.
</translation>
    </message>
    <message>
        <source>traceText([&quot;name&quot;])

Convert the text frame &quot;name&quot; to outlines. If &quot;name&quot; is not given the
currently selected item is used.</source>
        <translation type="unfinished">traceText([&quot;name&quot;])

Convert the text frame &quot;name&quot; to outlines. If &quot;name&quot; is not given the
currently selected item is used.</translation>
    </message>
    <message>
        <source>getColor(&quot;name&quot;) -&gt; tuple

Returns a tuple (C, M, Y, K) containing the four color components of the
color &quot;name&quot; from the current document. If no document is open, returns
the value of the named color from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished">getColor(&quot;name&quot;) -&gt; tuple

Returns a tuple (C, M, Y, K) containing the four colour components of the
colour &quot;name&quot; from the current document. If no document is open, returns
the value of the named colour from the default document colours.

May raise NotFoundError if the named colour wasn&apos;t found.
May raise ValueError if an invalid colour name is specified.
</translation>
    </message>
    <message>
        <source>changeColor(&quot;name&quot;, c, m, y, k)

Changes the color &quot;name&quot; to the specified CMYK value. The color value is
defined via four components c = Cyan, m = Magenta, y = Yellow and k = Black.
Color components should be in the range from 0 to 255.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished">changeColor(&quot;name&quot;, c, m, y, k)

Changes the colour &quot;name&quot; to the specified CMYK value. The colour value is
defined via four components c = Cyan, m = Magenta, y = Yellow and k = Black.
Colour components should be in the range from 0 to 255.

May raise NotFoundError if the named colour wasn&apos;t found.
May raise ValueError if an invalid colour name is specified.
</translation>
    </message>
    <message>
        <source>deleteColor(&quot;name&quot;, &quot;replace&quot;)

Deletes the color &quot;name&quot;. Every occurrence of that color is replaced by the
color &quot;replace&quot;. If not specified, &quot;replace&quot; defaults to the color
&quot;None&quot; - transparent.

deleteColor works on the default document colors if there is no document open.
In that case, &quot;replace&quot;, if specified, has no effect.

May raise NotFoundError if a named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="obsolete">deleteColor(&quot;name&quot;, &quot;replace&quot;)

Deletes the colour &quot;name&quot;. Every occurrence of that colour is replaced by the
colour &quot;replace&quot;. If not specified, &quot;replace&quot; defaults to the colour
&quot;None&quot; - transparent.

deleteColor works on the default document colours if there is no document open.
In that case, &quot;replace&quot;, if specified, has no effect.

May raise NotFoundError if a named colour wasn&apos;t found.
May raise ValueError if an invalid colour name is specified.
</translation>
    </message>
    <message>
        <source>replaceColor(&quot;name&quot;, &quot;replace&quot;)

Every occurrence of the color &quot;name&quot; is replaced by the color &quot;replace&quot;.

May raise NotFoundError if a named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="obsolete">replaceColor(&quot;name&quot;, &quot;replace&quot;)

Every occurrence of the colour &quot;name&quot; is replaced by the colour &quot;replace&quot;.

May raise NotFoundError if a named colour wasn&apos;t found.
May raise ValueError if an invalid colour name is specified.
</translation>
    </message>
    <message>
        <source>fileDialog(&quot;caption&quot;, [&quot;filter&quot;, &quot;defaultname&quot; ,haspreview, issave]) -&gt; string with filename

Shows a File Open dialog box with the caption &quot;caption&quot;. Files are filtered
with the filter string &quot;filter&quot;. A default filename or file path can also
supplied, leave this string empty when you don&apos;t want to use it.  A value of
True for haspreview enables a small preview widget in the FileSelect box.  When
the issave parameter is set to True the dialog acts like a &quot;Save As&quot; dialog
otherwise it acts like a &quot;File Open Dialog&quot;. The default for both of the
opional parameters is False.

The filter, if specified, takes the form &apos;comment (*.type *.type2 ...)&apos;.
For example &apos;Images (*.png *.xpm *.jpg)&apos;.

Refer to the Qt-Documentation for QFileDialog for details on filters.

Example: fileDialog(&apos;Open input&apos;, &apos;CSV files (*.csv)&apos;)
Example: fileDialog(&apos;Save report&apos;, defaultname=&apos;report.txt&apos;, issave=True)
</source>
        <translation type="obsolete">fileDialog(&quot;caption&quot;, [&quot;filter&quot;, &quot;defaultname&quot; ,haspreview, issave]) -&gt; string with filename

Shows a File Open dialog box with the caption &quot;caption&quot;. Files are filtered
with the filter string &quot;filter&quot;. A default filename or file path can also
supplied, leave this string empty when you don&apos;t want to use it.  A value of
True for haspreview enables a small preview widget in the FileSelect box.  When
the issave parameter is set to True the dialog acts like a &quot;Save As&quot; dialog
otherwise it acts like a &quot;File Open Dialog&quot;. The default for both of the
opional parameters is False.

The filter, if specified, takes the form &apos;comment (*.type *.type2 ...)&apos;.
For example &apos;Images (*.png *.xpm *.jpg)&apos;.

Refer to the Qt-Documentation for QFileDialog for details on filters.

Example: fileDialog(&apos;Open input&apos;, &apos;CSV files (*.csv)&apos;)
Example: fileDialog(&apos;Save report&apos;, defaultname=&apos;report.txt&apos;, issave=True)
</translation>
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
        <translation type="unfinished">messageBox(&quot;caption&quot;, &quot;message&quot;,
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
</translation>
    </message>
    <message>
        <source>valueDialog(caption, message [,defaultvalue]) -&gt; string

Shows the common &apos;Ask for string&apos; dialog and returns its value as a string
Parameters: window title, text in the window and optional &apos;default&apos; value.

Example: valueDialog(&apos;title&apos;, &apos;text in the window&apos;, &apos;optional&apos;)
</source>
        <translation type="unfinished">valueDialog(caption, message [,defaultvalue]) -&gt; string

Shows the common &apos;Ask for string&apos; dialog and returns its value as a string
Parameters: window title, text in the window and optional &apos;default&apos; value.

Example: valueDialog(&apos;title&apos;, &apos;text in the window&apos;, &apos;optional&apos;)
</translation>
    </message>
    <message>
        <source>closeDoc()

Closes the current document without prompting to save.

May throw NoDocOpenError if there is no document to close
</source>
        <translation type="unfinished">closeDoc()

Closes the current document without prompting to save.

May throw NoDocOpenError if there is no document to close
</translation>
    </message>
    <message>
        <source>haveDoc() -&gt; bool

Returns true if there is a document open.
</source>
        <translation type="unfinished">haveDoc() -&gt; bool

Returns true if there is a document open.
</translation>
    </message>
    <message>
        <source>openDoc(&quot;name&quot;)

Opens the document &quot;name&quot;.

May raise ScribusError if the document could not be opened.
</source>
        <translation type="unfinished">openDoc(&quot;name&quot;)

Opens the document &quot;name&quot;.

May raise ScribusError if the document could not be opened.
</translation>
    </message>
    <message>
        <source>saveDoc()

Saves the current document with its current name, returns true if successful.
If the document has not already been saved, this may bring up an interactive
save file dialog.

If the save fails, there is currently no way to tell.
</source>
        <translation type="unfinished">saveDoc()

Saves the current document with its current name, returns true if successful.
If the document has not already been saved, this may bring up an interactive
save file dialog.

If the save fails, there is currently no way to tell.
</translation>
    </message>
    <message>
        <source>saveDocAs(&quot;name&quot;)

Saves the current document under the new name &quot;name&quot; (which may be a full or
relative path).

May raise ScribusError if the save fails.
</source>
        <translation type="unfinished">saveDocAs(&quot;name&quot;)

Saves the current document under the new name &quot;name&quot; (which may be a full or
relative path).

May raise ScribusError if the save fails.
</translation>
    </message>
    <message>
        <source>saveDocAs(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -&gt; bool

Sets the document information. &quot;Author&quot;, &quot;Info&quot;, &quot;Description&quot; are
strings.
</source>
        <translation type="obsolete">saveDocAs(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -&gt; bool

Sets the document information. &quot;Author&quot;, &quot;Info&quot;, &quot;Description&quot; are
strings.
</translation>
    </message>
    <message>
        <source>setMargins(lr, rr, tr, br)

Sets the margins of the document, Left(lr), Right(rr), Top(tr) and Bottom(br)
margins are given in the measurement units of the document - see UNIT_&lt;type&gt;
constants.
</source>
        <translation type="unfinished">setMargins(lr, rr, tr, br)

Sets the margins of the document, Left(lr), Right(rr), Top(tr) and Bottom(br)
margins are given in the measurement units of the document - see UNIT_&lt;type&gt;
constants.
</translation>
    </message>
    <message>
        <source>setUnit(type)

Changes the measurement unit of the document. Possible values for &quot;unit&quot; are
defined as constants UNIT_&lt;type&gt;.

May raise ValueError if an invalid unit is passed.
</source>
        <translation type="unfinished">setUnit(type)

Changes the measurement unit of the document. Possible values for &quot;unit&quot; are
defined as constants UNIT_&lt;type&gt;.

May raise ValueError if an invalid unit is passed.
</translation>
    </message>
    <message>
        <source>getUnit() -&gt; integer (Scribus unit constant)

Returns the measurement units of the document. The returned value will be one
of the UNIT_* constants:
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.
</source>
        <translation type="unfinished">getUnit() -&gt; integer (Scribus unit constant)

Returns the measurement units of the document. The returned value will be one
of the UNIT_* constants:
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.
</translation>
    </message>
    <message>
        <source>loadStylesFromFile(&quot;filename&quot;)

Loads paragraph styles from the Scribus document at &quot;filename&quot; into the
current document.
</source>
        <translation type="unfinished">loadStylesFromFile(&quot;filename&quot;)

Loads paragraph styles from the Scribus document at &quot;filename&quot; into the
current document.
</translation>
    </message>
    <message>
        <source>setDocType(facingPages, firstPageLeft)

Sets the document type. To get facing pages set the first parameter to
FACINGPAGES, to switch facingPages off use NOFACINGPAGES instead.  If you want
to be the first page a left side set the second parameter to FIRSTPAGELEFT, for
a right page use FIRSTPAGERIGHT.
</source>
        <translation type="unfinished">setDocType(facingPages, firstPageLeft)

Sets the document type. To get facing pages set the first parameter to
FACINGPAGES, to switch facingPages off use NOFACINGPAGES instead.  If you want
to be the first page a left side set the second parameter to FIRSTPAGELEFT, for
a right page use FIRSTPAGERIGHT.
</translation>
    </message>
    <message>
        <source>getLineColor([&quot;name&quot;]) -&gt; string

Returns the name of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished">getLineColor([&quot;name&quot;]) -&gt; string

Returns the name of the line colour of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</translation>
    </message>
    <message>
        <source>getLineWidth([&quot;name&quot;]) -&gt; integer

Returns the line width of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation type="unfinished">getLineWidth([&quot;name&quot;]) -&gt; integer

Returns the line width of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</translation>
    </message>
    <message>
        <source>getLineShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished">getLineShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the line colour of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</translation>
    </message>
    <message>
        <source>getLineJoin([&quot;name&quot;]) -&gt; integer (see contants)

Returns the line join style of the object &quot;name&quot;. If &quot;name&quot; is not given
the currently selected item is used.  The join types are:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND
</source>
        <translation type="unfinished">getLineJoin([&quot;name&quot;]) -&gt; integer (see contants)

Returns the line join style of the object &quot;name&quot;. If &quot;name&quot; is not given
the currently selected item is used.  The join types are:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND
</translation>
    </message>
    <message>
        <source>getLineEnd([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line cap style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. The cap types are:
CAP_FLAT, CAP_ROUND, CAP_SQUARE
</source>
        <translation type="unfinished">getLineEnd([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line cap style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. The cap types are:
CAP_FLAT, CAP_ROUND, CAP_SQUARE
</translation>
    </message>
    <message>
        <source>getLineStyle([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. Line style constants are:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID
</source>
        <translation type="unfinished">getLineStyle([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. Line style constants are:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID
</translation>
    </message>
    <message>
        <source>getFillShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished">getFillShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the fill colour of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</translation>
    </message>
    <message>
        <source>getImageScale([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple containing the scaling values of the image frame
&quot;name&quot;.  If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished">getImageScale([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple containing the scaling values of the image frame
&quot;name&quot;.  If &quot;name&quot; is not given the currently selected item is used.
</translation>
    </message>
    <message>
        <source>getImageName([&quot;name&quot;]) -&gt; string

Returns the filename for the image in the image frame. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished">getImageName([&quot;name&quot;]) -&gt; string

Returns the filename for the image in the image frame. If &quot;name&quot; is not
given the currently selected item is used.
</translation>
    </message>
    <message>
        <source>getSize([&quot;name&quot;]) -&gt; (width,height)

Returns a (width, height) tuple with the size of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. The size is
expressed in the current measurement unit of the document - see UNIT_&lt;type&gt;
for reference.
</source>
        <translation type="unfinished">getSize([&quot;name&quot;]) -&gt; (width,height)

Returns a (width, height) tuple with the size of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. The size is
expressed in the current measurement unit of the document - see UNIT_&lt;type&gt;
for reference.
</translation>
    </message>
    <message>
        <source>getRotation([&quot;name&quot;]) -&gt; integer

Returns the rotation of the object &quot;name&quot;. The value is expressed in degrees,
and clockwise is positive. If &quot;name&quot; is not given the currently selected item
is used.
</source>
        <translation type="unfinished">getRotation([&quot;name&quot;]) -&gt; integer

Returns the rotation of the object &quot;name&quot;. The value is expressed in degrees,
and clockwise is positive. If &quot;name&quot; is not given the currently selected item
is used.
</translation>
    </message>
    <message>
        <source>getAllObjects() -&gt; list

Returns a list containing the names of all objects on the current page.
</source>
        <translation type="unfinished">getAllObjects() -&gt; list

Returns a list containing the names of all objects on the current page.
</translation>
    </message>
    <message>
        <source>moveObjectAbs(x, y [, &quot;name&quot;])

Moves the object &quot;name&quot; to a new location. The coordinates are expressed in
the current measurement unit of the document (see UNIT constants).  If &quot;name&quot;
is not given the currently selected item is used.  If the object &quot;name&quot;
belongs to a group, the whole group is moved.
</source>
        <translation type="unfinished">moveObjectAbs(x, y [, &quot;name&quot;])

Moves the object &quot;name&quot; to a new location. The coordinates are expressed in
the current measurement unit of the document (see UNIT constants).  If &quot;name&quot;
is not given the currently selected item is used.  If the object &quot;name&quot;
belongs to a group, the whole group is moved.
</translation>
    </message>
    <message>
        <source>rotateObject(rot [, &quot;name&quot;])

Rotates the object &quot;name&quot; by &quot;rot&quot; degrees relatively. The object is
rotated by the vertex that is currently selected as the rotation point - by
default, the top left vertext at zero rotation. Positive values mean counter
clockwise rotation when the default rotation point is used. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished">rotateObject(rot [, &quot;name&quot;])

Rotates the object &quot;name&quot; by &quot;rot&quot; degrees relatively. The object is
rotated by the vertex that is currently selected as the rotation point - by
default, the top left vertext at zero rotation. Positive values mean counter
clockwise rotation when the default rotation point is used. If &quot;name&quot; is not
given the currently selected item is used.
</translation>
    </message>
    <message>
        <source>sizeObject(width, height [, &quot;name&quot;])

Resizes the object &quot;name&quot; to the given width and height. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation type="unfinished">sizeObject(width, height [, &quot;name&quot;])

Resizes the object &quot;name&quot; to the given width and height. If &quot;name&quot;
is not given the currently selected item is used.
</translation>
    </message>
    <message>
        <source>getSelectedObject([nr]) -&gt; string

Returns the name of the selected object. &quot;nr&quot; if given indicates the number
of the selected object, e.g. 0 means the first selected object, 1 means the
second selected Object and so on.
</source>
        <translation type="unfinished">getSelectedObject([nr]) -&gt; string

Returns the name of the selected object. &quot;nr&quot; if given indicates the number
of the selected object, e.g. 0 means the first selected object, 1 means the
second selected Object and so on.
</translation>
    </message>
    <message>
        <source>selectionCount() -&gt; integer

Returns the number of selected objects.
</source>
        <translation type="unfinished">selectionCount() -&gt; integer

Returns the number of selected objects.
</translation>
    </message>
    <message>
        <source>selectObject(&quot;name&quot;)

Selects the object with the given &quot;name&quot;.
</source>
        <translation type="unfinished">selectObject(&quot;name&quot;)

Selects the object with the given &quot;name&quot;.
</translation>
    </message>
    <message>
        <source>deselectAll()

Deselects all objects in the whole document.
</source>
        <translation type="unfinished">deselectAll()

Deselects all objects in the whole document.
</translation>
    </message>
    <message>
        <source>groupObjects(list)

Groups the objects named in &quot;list&quot; together. &quot;list&quot; must contain the names
of the objects to be grouped. If &quot;list&quot; is not given the currently selected
items are used.
</source>
        <translation type="unfinished">groupObjects(list)

Groups the objects named in &quot;list&quot; together. &quot;list&quot; must contain the names
of the objects to be grouped. If &quot;list&quot; is not given the currently selected
items are used.
</translation>
    </message>
    <message>
        <source>unGroupObjects(&quot;name&quot;)

Destructs the group the object &quot;name&quot; belongs to.If &quot;name&quot; is not given the currently selected item is used.</source>
        <translation type="unfinished">unGroupObjects(&quot;name&quot;)

Destructs the group the object &quot;name&quot; belongs to.If &quot;name&quot; is not given the currently selected item is used.</translation>
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
        <translation type="unfinished">scaleGroup(factor [,&quot;name&quot;])

Scales the group the object &quot;name&quot; belongs to. Values greater than 1 enlarge
the group, values smaller than 1 make the group smaller e.g a value of 0.5
scales the group to 50 % of its original size, a value of 1.5 scales the group
to 150 % of its original size.  The value for &quot;factor&quot; must be greater than
0. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if an invalid scale factor is passed.
</translation>
    </message>
    <message>
        <source>loadImage(&quot;filename&quot; [, &quot;name&quot;])

Loads the picture &quot;picture&quot; into the image frame &quot;name&quot;. If &quot;name&quot; is
not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation type="unfinished">loadImage(&quot;filename&quot; [, &quot;name&quot;])

Loads the picture &quot;picture&quot; into the image frame &quot;name&quot;. If &quot;name&quot; is
not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not an image frame
</translation>
    </message>
    <message>
        <source>scaleImage(x, y [, &quot;name&quot;])

Sets the scaling factors of the picture in the image frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. A number of 1
means 100 %.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation type="unfinished">scaleImage(x, y [, &quot;name&quot;])

Sets the scaling factors of the picture in the image frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. A number of 1
means 100 %.

May raise WrongFrameTypeError if the target frame is not an image frame
</translation>
    </message>
    <message>
        <source>lockObject([&quot;name&quot;]) -&gt; bool

Locks the object &quot;name&quot; if it&apos;s unlocked or unlock it if it&apos;s locked.
If &quot;name&quot; is not given the currently selected item is used. Returns true
if locked.
</source>
        <translation type="unfinished">lockObject([&quot;name&quot;]) -&gt; bool

Locks the object &quot;name&quot; if it&apos;s unlocked or unlock it if it&apos;s locked.
If &quot;name&quot; is not given the currently selected item is used. Returns true
if locked.
</translation>
    </message>
    <message>
        <source>isLocked([&quot;name&quot;]) -&gt; bool

Returns true if is the object &quot;name&quot; locked.  If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation type="unfinished">isLocked([&quot;name&quot;]) -&gt; bool

Returns true if is the object &quot;name&quot; locked.  If &quot;name&quot; is not given the
currently selected item is used.
</translation>
    </message>
    <message>
        <source>getFontNames() -&gt; list

Returns a list with the names of all available fonts.
</source>
        <translation type="unfinished">getFontNames() -&gt; list

Returns a list with the names of all available fonts.
</translation>
    </message>
    <message>
        <source>getXFontNames() -&gt; list of tuples

Returns a larger font info. It&apos;s a list of the tuples with:
[ (Scribus name, Family, Real name, subset (1|0), embed PS (1|0), font file), (...), ... ]
</source>
        <translation type="unfinished">getXFontNames() -&gt; list of tuples

Returns a larger font info. It&apos;s a list of the tuples with:
[ (Scribus name, Family, Real name, subset (1|0), embed PS (1|0), font file), (...), ... ]
</translation>
    </message>
    <message>
        <source>rendeFont(&quot;name&quot;, &quot;filename&quot;, &quot;sample&quot;, size) -&gt; bool

Creates an image preview of font &quot;name&quot; with given text &quot;sample&quot; and size.
Image is saved into &quot;filename&quot;. Returns true when success.

May raise NotFoundError if the specified font can&apos;t be found.
May raise ValueError if an empty sample or filename is passed.
</source>
        <translation type="obsolete">rendeFont(&quot;name&quot;, &quot;filename&quot;, &quot;sample&quot;, size) -&gt; bool

Creates an image preview of font &quot;name&quot; with given text &quot;sample&quot; and size.
Image is saved into &quot;filename&quot;. Returns true when success.

May raise NotFoundError if the specified font can&apos;t be found.
May raise ValueError if an empty sample or filename is passed.
</translation>
    </message>
    <message>
        <source>getLayers() -&gt; list

Returns a list with the names of all defined layers.
</source>
        <translation type="unfinished">getLayers() -&gt; list

Returns a list with the names of all defined layers.
</translation>
    </message>
    <message>
        <source>setActiveLayer(&quot;name&quot;)

Sets the active layer to the layer named &quot;name&quot;.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished">setActiveLayer(&quot;name&quot;)

Sets the active layer to the layer named &quot;name&quot;.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</translation>
    </message>
    <message>
        <source>getActiveLayer() -&gt; string

Returns the name of the current active layer.
</source>
        <translation type="unfinished">getActiveLayer() -&gt; string

Returns the name of the current active layer.
</translation>
    </message>
    <message>
        <source>sentToLayer(&quot;layer&quot; [, &quot;name&quot;])

Sends the object &quot;name&quot; to the layer &quot;layer&quot;. The layer must exist.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished">sentToLayer(&quot;layer&quot; [, &quot;name&quot;])

Sends the object &quot;name&quot; to the layer &quot;layer&quot;. The layer must exist.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</translation>
    </message>
    <message>
        <source>setLayerVisible(&quot;layer&quot;, visible)

Sets the layer &quot;layer&quot; to be visible or not. If is the visible set to false
the layer is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished">setLayerVisible(&quot;layer&quot;, visible)

Sets the layer &quot;layer&quot; to be visible or not. If is the visible set to false
the layer is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</translation>
    </message>
    <message>
        <source>setLayerPrintable(&quot;layer&quot;, printable)

Sets the layer &quot;layer&quot; to be printable or not. If is the printable set to
false the layer won&apos;t be printed.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished">setLayerPrintable(&quot;layer&quot;, printable)

Sets the layer &quot;layer&quot; to be printable or not. If is the printable set to
false the layer won&apos;t be printed.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns wether the Layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="obsolete">isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns wether the Layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns wether the layer &quot;layer&quot; is printable or not, a value of True means
that the layer &quot;layer&quot; can be printed, a value of False means that printing
the layer &quot;layer&quot; is disabled.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="obsolete">isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns wether the layer &quot;layer&quot; is printable or not, a value of True means
that the layer &quot;layer&quot; can be printed, a value of False means that printing
the layer &quot;layer&quot; is disabled.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</translation>
    </message>
    <message>
        <source>deleteLayer(&quot;layer&quot;)

Deletes the layer with the name &quot;layer&quot;. Nothing happens if the layer doesn&apos;t
exists or if it&apos;s the only layer in the document.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished">deleteLayer(&quot;layer&quot;)

Deletes the layer with the name &quot;layer&quot;. Nothing happens if the layer doesn&apos;t
exists or if it&apos;s the only layer in the document.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</translation>
    </message>
    <message>
        <source>createLayer(layer)

Creates a new layer with the name &quot;name&quot;.

May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished">createLayer(layer)

Creates a new layer with the name &quot;name&quot;.

May raise ValueError if the layer name isn&apos;t acceptable.
</translation>
    </message>
    <message>
        <source>getGuiLanguage() -&gt; string

Returns a string with the -lang value.
</source>
        <translation type="unfinished">getGuiLanguage() -&gt; string

Returns a string with the -lang value.
</translation>
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
        <translation type="unfinished">createEllipse(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new ellipse on the current page and returns its name.
The coordinates are given in the current measurement units of the document
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object
because you need this name for further referencing of that object. If &quot;name&quot;
is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</translation>
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
        <translation type="unfinished">createImage(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new picture frame on the current page and returns its name. The
coordinates are given in the current measurement units of the document.
&quot;name&quot; should be a unique identifier for the object because you need this
name for further access to that object. If &quot;name&quot; is not given Scribus will
create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</translation>
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
        <translation type="unfinished">createText(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new text frame on the actual page and returns its name.
The coordinates are given in the actual measurement unit of the document (see
UNIT constants). &quot;name&quot; should be a unique identifier for the object because
you need this name for further referencing of that object. If &quot;name&quot; is not
given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</translation>
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
        <translation type="unfinished">createLine(x1, y1, x2, y2, [&quot;name&quot;]) -&gt; string

Creates a new line from the point(x1, y1) to the point(x2, y2) and returns
its name. The coordinates are given in the current measurement unit of the
document (see UNIT constants). &quot;name&quot; should be a unique identifier for the
object because you need this name for further access to that object. If
&quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</translation>
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
        <translation type="unfinished">createPolyLine(list, [&quot;name&quot;]) -&gt; string

Creates a new polyline and returns its name. The points for the polyline are
stored in the list &quot;list&quot; in the following order: [x1, y1, x2, y2...xn. yn].
The coordinates are given in the current measurement units of the document (see
UNIT constants). &quot;name&quot; should be a unique identifier for the object because
you need this name for further access to that object. If &quot;name&quot; is not given
Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don&apos;t group into points without leftovers.
</translation>
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
        <translation type="unfinished">createPolygon(list, [&quot;name&quot;]) -&gt; string

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
</translation>
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
        <translation type="unfinished">createBezierLine(list, [&quot;name&quot;]) -&gt; string

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
</translation>
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
        <translation type="unfinished">createPathText(x, y, &quot;textbox&quot;, &quot;beziercurve&quot;, [&quot;name&quot;]) -&gt; string

Creates a new pathText by merging the two objects &quot;textbox&quot; and
&quot;beziercurve&quot; and returns its name. The coordinates are given in the current
measurement unit of the document (see UNIT constants). &quot;name&quot; should be a
unique identifier for the object because you need this name for further access
to that object. If &quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise NotFoundError if one or both of the named base object don&apos;t exist.
</translation>
    </message>
    <message>
        <source>deleteObject([&quot;name&quot;])

Deletes the item with the name &quot;name&quot;. If &quot;name&quot; is not given the currently
selected item is deleted.
</source>
        <translation type="unfinished">deleteObject([&quot;name&quot;])

Deletes the item with the name &quot;name&quot;. If &quot;name&quot; is not given the currently
selected item is deleted.
</translation>
    </message>
    <message>
        <source>textFlowsAroundFrame(&quot;name&quot; [, state])

Enables/disables &quot;Text Flows Around Frame&quot; feature for object &quot;name&quot;.
Called with parameters string name and optional boolean &quot;state&quot;. If &quot;state&quot;
is not passed, text flow is toggled.
</source>
        <translation type="unfinished">textFlowsAroundFrame(&quot;name&quot; [, state])

Enables/disables &quot;Text Flows Around Frame&quot; feature for object &quot;name&quot;.
Called with parameters string name and optional boolean &quot;state&quot;. If &quot;state&quot;
is not passed, text flow is toggled.
</translation>
    </message>
    <message>
        <source>objectExists([&quot;name&quot;]) -&gt; bool

Test if an object with specified name really exists in the document.
The optional parameter is the object name. When no object name is given,
returns True if there is something selected.
</source>
        <translation type="unfinished">objectExists([&quot;name&quot;]) -&gt; bool

Test if an object with specified name really exists in the document.
The optional parameter is the object name. When no object name is given,
returns True if there is something selected.
</translation>
    </message>
    <message>
        <source>setStyle(&quot;style&quot; [, &quot;name&quot;])

Apply the named &quot;style&quot; to the object named &quot;name&quot;. If is no object name
given, it&apos;s applied on the selected object.
</source>
        <translation type="unfinished">setStyle(&quot;style&quot; [, &quot;name&quot;])

Apply the named &quot;style&quot; to the object named &quot;name&quot;. If is no object name
given, it&apos;s applied on the selected object.
</translation>
    </message>
    <message>
        <source>getAllStyles() -&gt; list

Return a list of the names of all paragraph styles in the current document.
</source>
        <translation type="unfinished">getAllStyles() -&gt; list

Return a list of the names of all paragraph styles in the current document.
</translation>
    </message>
    <message>
        <source>currentPage() -&gt; integer

Returns the number of the current working page. Page numbers are counted from 1
upwards, no matter what the displayed first page number of your document is.
</source>
        <translation type="unfinished">currentPage() -&gt; integer

Returns the number of the current working page. Page numbers are counted from 1
upwards, no matter what the displayed first page number of your document is.
</translation>
    </message>
    <message>
        <source>redrawAll()

Redraws all pages.
</source>
        <translation type="unfinished">redrawAll()

Redraws all pages.
</translation>
    </message>
    <message>
        <source>savePageAsEPS(&quot;name&quot;)

Saves the current page as an EPS to the file &quot;name&quot;.

May raise ScribusError if the save failed.
</source>
        <translation type="unfinished">savePageAsEPS(&quot;name&quot;)

Saves the current page as an EPS to the file &quot;name&quot;.

May raise ScribusError if the save failed.
</translation>
    </message>
    <message>
        <source>deletePage(nr)

Deletes the given page. Does nothing if the document contains only one page.
Page numbers are counted from 1 upwards, no matter what the displayed first
page number is.

May raise IndexError if the page number is out of range
</source>
        <translation type="unfinished">deletePage(nr)

Deletes the given page. Does nothing if the document contains only one page.
Page numbers are counted from 1 upwards, no matter what the displayed first
page number is.

May raise IndexError if the page number is out of range
</translation>
    </message>
    <message>
        <source>gotoPage(nr)

Moves to the page &quot;nr&quot; (that is, makes the current page &quot;nr&quot;). Note that
gotoPage doesn&apos;t (curently) change the page the user&apos;s view is displaying, it
just sets the page that script commands will operates on.

May raise IndexError if the page number is out of range.
</source>
        <translation type="unfinished">gotoPage(nr)

Moves to the page &quot;nr&quot; (that is, makes the current page &quot;nr&quot;). Note that
gotoPage doesn&apos;t (curently) change the page the user&apos;s view is displaying, it
just sets the page that script commands will operates on.

May raise IndexError if the page number is out of range.
</translation>
    </message>
    <message>
        <source>pageCount() -&gt; integer

Returns the number of pages in the document.
</source>
        <translation type="unfinished">pageCount() -&gt; integer

Returns the number of pages in the document.
</translation>
    </message>
    <message>
        <source>getHGuides() -&gt; list

Returns a list containing positions of the horizontal guides. Values are in the
document&apos;s current units - see UNIT_&lt;type&gt; constants.
</source>
        <translation type="unfinished">getHGuides() -&gt; list

Returns a list containing positions of the horizontal guides. Values are in the
document&apos;s current units - see UNIT_&lt;type&gt; constants.
</translation>
    </message>
    <message>
        <source>setHGuides(list)

Sets horizontal guides. Input parameter must be a list of guide positions
measured in the current document units - see UNIT_&lt;type&gt; constants.

Example: setHGuides(getHGuides() + [200.0, 210.0] # add new guides without any lost
         setHGuides([90,250]) # replace current guides entirely
</source>
        <translation type="unfinished">setHGuides(list)

Sets horizontal guides. Input parameter must be a list of guide positions
measured in the current document units - see UNIT_&lt;type&gt; constants.

Example: setHGuides(getHGuides() + [200.0, 210.0] # add new guides without any lost
         setHGuides([90,250]) # replace current guides entirely
</translation>
    </message>
    <message>
        <source>getVGuides()

See getHGuides.
</source>
        <translation type="unfinished">getVGuides()

See getHGuides.
</translation>
    </message>
    <message>
        <source>setVGuides()

See setHGuides.
</source>
        <translation type="unfinished">setVGuides()

See setHGuides.
</translation>
    </message>
    <message>
        <source>getPageSize() -&gt; tuple

Returns a tuple with page dimensions measured in the document&apos;s current units.
See UNIT_&lt;type&gt; constants and getPageMargins()
</source>
        <translation type="unfinished">getPageSize() -&gt; tuple

Returns a tuple with page dimensions measured in the document&apos;s current units.
See UNIT_&lt;type&gt; constants and getPageMargins()
</translation>
    </message>
    <message>
        <source>getPageItems() -&gt; list

Returns a list of tuples with items on the current page. The tuple is:
(name, objectType, order) E.g. [(&apos;Text1&apos;, 4, 0), (&apos;Image1&apos;, 2, 1)]
means that object named &apos;Text1&apos; is a text frame (type 4) and is the first at
the page...
</source>
        <translation type="unfinished">getPageItems() -&gt; list

Returns a list of tuples with items on the current page. The tuple is:
(name, objectType, order) E.g. [(&apos;Text1&apos;, 4, 0), (&apos;Image1&apos;, 2, 1)]
means that object named &apos;Text1&apos; is a text frame (type 4) and is the first at
the page...
</translation>
    </message>
    <message>
        <source>getPageMargins()

Returns the page margins as a (left, right, top, bottom) tuple in the current
units. See UNIT_&lt;type&gt; constants and getPageSize().
</source>
        <translation type="obsolete">getPageMargins()

Returns the page margins as a (left, right, top, bottom) tuple in the current
units. See UNIT_&lt;type&gt; constants and getPageSize().
</translation>
    </message>
    <message>
        <source>setFillColor(&quot;color&quot;, [&quot;name&quot;])

Sets the fill color of the object &quot;name&quot; to the color &quot;color&quot;. &quot;color&quot;
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation type="unfinished">setFillColor(&quot;colour&quot;, [&quot;name&quot;])

Sets the fill colour of the object &quot;name&quot; to the colour &quot;colour&quot;. &quot;colour&quot;
is the name of one of the defined colours. If &quot;name&quot; is not given the
currently selected item is used.
</translation>
    </message>
    <message>
        <source>setLineColor(&quot;color&quot;, [&quot;name&quot;])

Sets the line color of the object &quot;name&quot; to the color &quot;color&quot;. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation type="unfinished">setLineColor(&quot;colour&quot;, [&quot;name&quot;])

Sets the line colour of the object &quot;name&quot; to the colour &quot;colour&quot;. If &quot;name&quot;
is not given the currently selected item is used.
</translation>
    </message>
    <message>
        <source>setLineWidth(width, [&quot;name&quot;])

Sets line width of the object &quot;name&quot; to &quot;width&quot;. &quot;width&quot; must be in the
range from 0.0 to 12.0 inclusive, and is measured in points. If &quot;name&quot; is not
given the currently selected item is used.

May raise ValueError if the line width is out of bounds.
</source>
        <translation type="unfinished">setLineWidth(width, [&quot;name&quot;])

Sets line width of the object &quot;name&quot; to &quot;width&quot;. &quot;width&quot; must be in the
range from 0.0 to 12.0 inclusive, and is measured in points. If &quot;name&quot; is not
given the currently selected item is used.

May raise ValueError if the line width is out of bounds.
</translation>
    </message>
    <message>
        <source>setLineShade(shade, [&quot;name&quot;])

Sets the shading of the line color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full color intensity). If &quot;name&quot; is not given the currently selected item
is used.

May raise ValueError if the line shade is out of bounds.
</source>
        <translation type="unfinished">setLineShade(shade, [&quot;name&quot;])

Sets the shading of the line colour of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full colour intensity). If &quot;name&quot; is not given the currently selected item
is used.

May raise ValueError if the line shade is out of bounds.
</translation>
    </message>
    <message>
        <source>setLineJoin(join, [&quot;name&quot;])

Sets the line join style of the object &quot;name&quot; to the style &quot;join&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for join - JOIN_&lt;type&gt;.
</source>
        <translation type="unfinished">setLineJoin(join, [&quot;name&quot;])

Sets the line join style of the object &quot;name&quot; to the style &quot;join&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for join - JOIN_&lt;type&gt;.
</translation>
    </message>
    <message>
        <source>setLineEnd(endtype, [&quot;name&quot;])

Sets the line cap style of the object &quot;name&quot; to the style &quot;cap&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for &quot;cap&quot; - CAP_&lt;type&gt;.
</source>
        <translation type="unfinished">setLineEnd(endtype, [&quot;name&quot;])

Sets the line cap style of the object &quot;name&quot; to the style &quot;cap&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for &quot;cap&quot; - CAP_&lt;type&gt;.
</translation>
    </message>
    <message>
        <source>setLineStyle(style, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the style &quot;style&quot;. If &quot;name&quot;
is not given the currently selected item is used. There are predefined
constants for &quot;style&quot; - LINE_&lt;style&gt;.
</source>
        <translation type="unfinished">setLineStyle(style, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the style &quot;style&quot;. If &quot;name&quot;
is not given the currently selected item is used. There are predefined
constants for &quot;style&quot; - LINE_&lt;style&gt;.
</translation>
    </message>
    <message>
        <source>setFillShade(shade, [&quot;name&quot;])

Sets the shading of the fill color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full Color intensity). If &quot;name&quot; is not given the currently selected
Item is used.

May raise ValueError if the fill shade is out of bounds.
</source>
        <translation type="unfinished">setFillShade(shade, [&quot;name&quot;])

Sets the shading of the fill colour of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full Colour intensity). If &quot;name&quot; is not given the currently selected
Item is used.

May raise ValueError if the fill shade is out of bounds.
</translation>
    </message>
    <message>
        <source>setCornerRadius(radius, [&quot;name&quot;])

Sets the corner radius of the object &quot;name&quot;. The radius is expressed
in points. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if the corner radius is negative.
</source>
        <translation type="unfinished">setCornerRadius(radius, [&quot;name&quot;])

Sets the corner radius of the object &quot;name&quot;. The radius is expressed
in points. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if the corner radius is negative.
</translation>
    </message>
    <message>
        <source>setMultiLine(&quot;namedStyle&quot;, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the named style &quot;namedStyle&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the line style doesn&apos;t exist.
</source>
        <translation type="unfinished">setMultiLine(&quot;namedStyle&quot;, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the named style &quot;namedStyle&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the line style doesn&apos;t exist.
</translation>
    </message>
    <message>
        <source>progressReset()

Cleans up the Scribus progress bar previous settings. It is called before the
new progress bar use. See progressSet.
</source>
        <translation type="unfinished">progressReset()

Cleans up the Scribus progress bar previous settings. It is called before the
new progress bar use. See progressSet.
</translation>
    </message>
    <message>
        <source>progressTotal(max)

Sets the progress bar&apos;s maximum steps value to the specified number.
See progressSet.
</source>
        <translation type="unfinished">progressTotal(max)

Sets the progress bar&apos;s maximum steps value to the specified number.
See progressSet.
</translation>
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
        <translation type="unfinished">progressSet(nr)

Set the progress bar position to &quot;nr&quot;, a value relative to the previously set
progressTotal. The progress bar uses the concept of steps; you give it the
total number of steps and the number of steps completed so far and it will
display the percentage of steps that have been completed. You can specify the
total number of steps with progressTotal(). The current number of steps is set
with progressSet(). The progress bar can be rewound to the beginning with
progressReset(). [based on info taken from Trolltech&apos;s Qt docs]
</translation>
    </message>
    <message>
        <source>setCursor()

[UNSUPPORTED!] This might break things, so steer clear for now.
</source>
        <translation type="unfinished">setCursor()

[UNSUPPORTED!] This might break things, so steer clear for now.
</translation>
    </message>
    <message>
        <source>docChanged(bool)

Enable/disable save icon in the Scribus icon bar and the Save menu item. It&apos;s
useful to call this procedure when you&apos;re changing the document, because Scribus
won&apos;t automatically notice when you change the document using a script.
</source>
        <translation type="unfinished">docChanged(bool)

Enable/disable save icon in the Scribus icon bar and the Save menu item. It&apos;s
useful to call this procedure when you&apos;re changing the document, because Scribus
won&apos;t automatically notice when you change the document using a script.
</translation>
    </message>
    <message>
        <source>defineColor(&quot;name&quot;, c, m, y, k)

Defines a new color &quot;name&quot;. The color Value is defined via four components:
c = Cyan, m = Magenta, y = Yellow and k = Black. Color components should be in
the range from 0 to 255.

May raise ValueError if an invalid color name is specified.
</source>
        <translation type="obsolete">defineColor(&quot;name&quot;, c, m, y, k)

Defines a new colour &quot;name&quot;. The colour Value is defined via four components:
c = Cyan, m = Magenta, y = Yellow and k = Black. Colour components should be in
the range from 0 to 255.

May raise ValueError if an invalid colour name is specified.
</translation>
    </message>
    <message>
        <source>getCornerRadius([&quot;name&quot;]) -&gt; integer

Returns the corner radius of the object &quot;name&quot;. The radius is
expressed in points. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="obsolete">getCornerRadius([&quot;name&quot;]) -&gt; integer

Returns the corner radius of the object &quot;name&quot;. The radius is
expressed in points. If &quot;name&quot; is not given the currently
selected item is used.
</translation>
    </message>
    <message>
        <source>getPosition([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple with the position of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
The position is expressed in the actual measurement unit of the document
- see UNIT_&lt;type&gt; for reference.
</source>
        <translation type="obsolete">getPosition([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple with the position of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
The position is expressed in the actual measurement unit of the document
- see UNIT_&lt;type&gt; for reference.
</translation>
    </message>
    <message>
        <source>rotateObjectAbs(rot [, &quot;name&quot;])

Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positive values
mean counter clockwise rotation. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="obsolete">rotateObjectAbs(rot [, &quot;name&quot;])

Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positive values
mean counter clockwise rotation. If &quot;name&quot; is not given the currently
selected item is used.
</translation>
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
        <source>setScaleImageToFrame(scaletoframe, proportional=None, name=&lt;selection&gt;)

Sets the scale to frame on the selected or specified image frame to `scaletoframe&apos;.
If `proportional&apos; is specified, set fixed aspect ratio scaling to `proportional&apos;.
Both `scaletoframe&apos; and `proportional&apos; are boolean.

May raise WrongFrameTypeError.
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
        <source>%1. %2 %3 </source>
        <translation type="obsolete">%1. %2 %3 </translation>
    </message>
    <message>
        <source>Scribus Version %1
%2 %3</source>
        <translation type="obsolete">Scribus Version %1
%2 %3</translation>
    </message>
    <message>
        <source>Build-ID:</source>
        <translation type="obsolete">Build-ID:</translation>
    </message>
    <message>
        <source>Contributions from:</source>
        <translation>สนับสนุนจาก:</translation>
    </message>
    <message>
        <source>Windows port:</source>
        <translation type="obsolete">Windows port:</translation>
    </message>
    <message>
        <source>German:</source>
        <translation type="obsolete">German:</translation>
    </message>
    <message>
        <source>French:</source>
        <translation type="obsolete">French:</translation>
    </message>
    <message>
        <source>Italian:</source>
        <translation type="obsolete">Italian:</translation>
    </message>
    <message>
        <source>Hungarian:</source>
        <translation type="obsolete">Hungarian:</translation>
    </message>
    <message>
        <source>Ukrainian:</source>
        <translation type="obsolete">Ukrainian:</translation>
    </message>
    <message>
        <source>Bulgarian:</source>
        <translation type="obsolete">Bulgarian:</translation>
    </message>
    <message>
        <source>Galician:</source>
        <translation type="obsolete">Galician:</translation>
    </message>
    <message>
        <source>Turkish:</source>
        <translation type="obsolete">Turkish:</translation>
    </message>
    <message>
        <source>Lithuanian:</source>
        <translation type="obsolete">Lithuanian:</translation>
    </message>
    <message>
        <source>Polish:</source>
        <translation type="obsolete">Polish:</translation>
    </message>
    <message>
        <source>Czech:</source>
        <translation type="obsolete">Czech:</translation>
    </message>
    <message>
        <source>Slovak:</source>
        <translation type="obsolete">Slovak:</translation>
    </message>
    <message>
        <source>Danish:</source>
        <translation type="obsolete">Danish:</translation>
    </message>
    <message>
        <source>Norwegian:</source>
        <translation type="obsolete">Norwegian:</translation>
    </message>
    <message>
        <source>Welsh:</source>
        <translation type="obsolete">Welsh:</translation>
    </message>
    <message>
        <source>Russian:</source>
        <translation type="obsolete">Russian:</translation>
    </message>
    <message>
        <source>Brazilian:</source>
        <translation type="obsolete">Brazilian:</translation>
    </message>
    <message>
        <source>Finnish:</source>
        <translation type="obsolete">Finnish:</translation>
    </message>
    <message>
        <source>Basque:</source>
        <translation type="obsolete">Basque:</translation>
    </message>
    <message>
        <source>Slovenian:</source>
        <translation type="obsolete">Slovenian:</translation>
    </message>
    <message>
        <source>This panel shows the version, build date and
 compiled in library support in Scribus
The C-C-T equates to C=CUPS C=littlecms T=TIFF support.
Missing library support is indicated by a *</source>
        <translation type="obsolete">This panel shows the version, build date and
 compiled in library support in Scribus
The C-C-T equates to C=CUPS C=littlecms T=TIFF support.
Missing library support is indicated by a *</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation type="unfinished">เกี่ยวกับ
</translation>
    </message>
    <message>
        <source>A&amp;uthors</source>
        <translation type="unfinished">ผู้เขียน
</translation>
    </message>
    <message>
        <source>&amp;Translations</source>
        <translation type="unfinished">การแปล
</translation>
    </message>
    <message>
        <source>&amp;Online</source>
        <translation type="unfinished">ใช้งาน
</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">ปิด
</translation>
    </message>
    <message>
        <source>Development Team:</source>
        <translation>ทีมพัฒนา
:</translation>
    </message>
    <message>
        <source>Official Documentation:</source>
        <translation>เอกสารราชการ
:</translation>
    </message>
    <message>
        <source>Other Documentation:</source>
        <translation>เอกสารอื่นๆ
:</translation>
    </message>
    <message>
        <source>English (British):</source>
        <translation type="obsolete">English (British):</translation>
    </message>
    <message>
        <source>Swedish:</source>
        <translation type="obsolete">Swedish:</translation>
    </message>
    <message>
        <source>Homepage</source>
        <translation>หน้าแรก
</translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation>ลงทะเบียนงาน
</translation>
    </message>
    <message>
        <source>Bugs and Feature Requests</source>
        <translation></translation>
    </message>
    <message>
        <source>Mailing List</source>
        <translation type="obsolete">รายการข้อความ
</translation>
    </message>
    <message>
        <source>Official Translations and Translators:</source>
        <translation>ออฟฟิตแปลเอกสารและผู้แปล:</translation>
    </message>
    <message>
        <source>Esperanto:</source>
        <translation type="obsolete">Esperanto:</translation>
    </message>
    <message>
        <source>Korean:</source>
        <translation type="obsolete">Korean:</translation>
    </message>
    <message>
        <source>Serbian:</source>
        <translation type="obsolete">Serbian:</translation>
    </message>
    <message>
        <source>Spanish:</source>
        <translation type="obsolete">Spanish:</translation>
    </message>
    <message>
        <source>Previous Translation Contributors:</source>
        <translation type="unfinished">Previous Translation Contributors:</translation>
    </message>
    <message>
        <source>Catalan:</source>
        <translation type="obsolete">Catalan:</translation>
    </message>
    <message>
        <source>About Scribus %1</source>
        <translation>เกี่ยวกับ Scribus %1</translation>
    </message>
    <message>
        <source>%1 %2 %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%3-%2-%1 %4 %5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Using Ghostscript version %1</source>
        <translation>กำลังใช้ โกสต์สคริป รุ่นที่ %1
</translation>
    </message>
    <message>
        <source>No Ghostscript version available</source>
        <translation>ไม่สามารถใช้ โกสต์สคริปได้
</translation>
    </message>
    <message>
        <source>&lt;b&gt;Scribus Version %1&lt;/b&gt;&lt;p&gt;%2&lt;br/&gt;%3 %4&lt;br/&gt;%5&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Build ID:</source>
        <translation type="unfinished">สร้างรหัส:</translation>
    </message>
    <message>
        <source>Wiki</source>
        <translation>วิกิ
</translation>
    </message>
    <message>
        <source>This panel shows the version, build date and compiled in library support in Scribus. The C-C-T-F equates to C=littlecms C=CUPS T=TIFF support F=Fontconfig support. Last Letter is the renderer C=cairo or A=libart Missing library support is indicated by a *. This also indicates the version of Ghostscript which Scribus has detected.</source>
        <translation>แสดงแถบเครื่องมือของรุ่น กำหนดเวลาและรวมรวมไว้ในไลบรารี่ เพื่อสนับสนุนโปรแกรมสไครบัส.
</translation>
    </message>
    <message>
        <source>Mac OS&amp;#174; X Aqua Port:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Windows&amp;#174; Port:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tango Project Icons:</source>
        <translation type="unfinished">โปรเจคสัญลักษณ์แทงโก้
</translation>
    </message>
    <message>
        <source>OS/2&amp;#174;/eComStation&amp;#8482; Port:</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">ใช่
</translation>
    </message>
    <message>
        <source>No</source>
        <translation>ไม่
</translation>
    </message>
    <message>
        <source>Filename:</source>
        <translation type="unfinished">ชื่อเอกสาร
</translation>
    </message>
    <message>
        <source>Version:</source>
        <translation type="unfinished">รุ่น
</translation>
    </message>
    <message>
        <source>Enabled:</source>
        <translation type="unfinished">สามารถ
</translation>
    </message>
    <message>
        <source>Release Date:</source>
        <translation type="unfinished">วันที่ปล่อย</translation>
    </message>
    <message>
        <source>Description:</source>
        <translation type="unfinished">ลักษณะ
</translation>
    </message>
    <message>
        <source>Author(s):</source>
        <translation type="unfinished">ผู้เขียน
</translation>
    </message>
    <message>
        <source>Copyright:</source>
        <translation type="unfinished">ลิขสิทธ์
</translation>
    </message>
    <message>
        <source>License:</source>
        <translation type="unfinished">อนุญาติ
</translation>
    </message>
</context>
<context>
    <name>AboutPluginsBase</name>
    <message>
        <source>Scribus: About Plug-ins</source>
        <translation type="unfinished">สไครบัส:เกี่ยวกับตัวเสริม
</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">ปิด
</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
</context>
<context>
    <name>ActionManager</name>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished">ใหม่
</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation type="unfinished">เปิด...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">ปิด
</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished">บันทึก
</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="unfinished">บันทึกเป็น...</translation>
    </message>
    <message>
        <source>Re&amp;vert to Saved</source>
        <translation type="unfinished">กลับไปบันทึก</translation>
    </message>
    <message>
        <source>Collect for O&amp;utput...</source>
        <translation type="unfinished">รวมเอกสารส่งออก...</translation>
    </message>
    <message>
        <source>Get Text...</source>
        <translation type="unfinished">ดึงข้อความ...</translation>
    </message>
    <message>
        <source>Append &amp;Text...</source>
        <translation type="unfinished">เพิ่มข้อความ...</translation>
    </message>
    <message>
        <source>Get Image...</source>
        <translation type="unfinished">ดึงรูป...</translation>
    </message>
    <message>
        <source>Save &amp;Text...</source>
        <translation type="unfinished">บันทึกข้อความ...</translation>
    </message>
    <message>
        <source>Save Page as &amp;EPS...</source>
        <translation type="unfinished">บันทึกเป็นอีพีเอส...</translation>
    </message>
    <message>
        <source>Save as P&amp;DF...</source>
        <translation type="unfinished">บันทึกเป็นพีดีเอฟ...</translation>
    </message>
    <message>
        <source>Document &amp;Setup...</source>
        <translation type="unfinished">ตั้งค่าเอกสาร...</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation type="unfinished">พิมพ์...
</translation>
    </message>
    <message>
        <source>Print Previe&amp;w</source>
        <translation type="unfinished">ตัวอย่างก่อนพิมพ์
</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation type="unfinished">ออกจากโปรแกรม</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="unfinished">แก้ไขกลับคืน</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished">ทำซ้ำ</translation>
    </message>
    <message>
        <source>&amp;Item Action Mode</source>
        <translation type="unfinished">โหมดแสดงรายการ
</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="unfinished">ตัด</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished">คัดลอก
</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished">วาง</translation>
    </message>
    <message>
        <source>C&amp;lear Contents</source>
        <translation type="obsolete">C&amp;lear Contents</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation type="unfinished">เลือกทั้งหมด</translation>
    </message>
    <message>
        <source>&amp;Deselect All</source>
        <translation type="unfinished">ไม่เลือกทั้งหมด
</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation type="unfinished">ค้นหา/แทนที่
...</translation>
    </message>
    <message>
        <source>Edit Image...</source>
        <translation type="unfinished">แก้ไขรูปภาพ</translation>
    </message>
    <message>
        <source>C&amp;olors...</source>
        <translation type="unfinished">สี...</translation>
    </message>
    <message>
        <source>&amp;Paragraph Styles...</source>
        <translation type="unfinished">รูปแบบย่อหน้า...</translation>
    </message>
    <message>
        <source>&amp;Line Styles...</source>
        <translation type="unfinished">รูปแบบบรรทัด...</translation>
    </message>
    <message>
        <source>&amp;Master Pages...</source>
        <translation type="unfinished">หน้าต้นแบบ...</translation>
    </message>
    <message>
        <source>&amp;JavaScripts...</source>
        <translation type="unfinished">จาวาสคริป...</translation>
    </message>
    <message>
        <source>P&amp;references...</source>
        <translation type="unfinished">ตั้งค่าโปรแกรม...</translation>
    </message>
    <message>
        <source>%1 pt</source>
        <translation type="unfinished">%1 พ้อยต์</translation>
    </message>
    <message>
        <source>&amp;Other...</source>
        <translation type="unfinished">อื่นๆ...</translation>
    </message>
    <message>
        <source>&amp;Left</source>
        <translation type="unfinished">ซ้าย</translation>
    </message>
    <message>
        <source>&amp;Center</source>
        <translation type="unfinished">กลาง</translation>
    </message>
    <message>
        <source>&amp;Right</source>
        <translation type="unfinished">ขวา</translation>
    </message>
    <message>
        <source>&amp;Block</source>
        <translation type="unfinished">บล็อก</translation>
    </message>
    <message>
        <source>&amp;Forced</source>
        <translation type="unfinished">บังคับ</translation>
    </message>
    <message>
        <source>&amp;%1 %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Normal</source>
        <translation type="unfinished">ปกติ</translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation type="unfinished">ขีดเส้นใต้</translation>
    </message>
    <message>
        <source>Underline &amp;Words</source>
        <translation type="unfinished">ขีดเส้นใต้ข้อความ</translation>
    </message>
    <message>
        <source>&amp;Strike Through</source>
        <translation type="unfinished">ขีดเส้นทับข้อความ</translation>
    </message>
    <message>
        <source>&amp;All Caps</source>
        <translation type="unfinished">ตัวพิมพ์ใหญ่</translation>
    </message>
    <message>
        <source>Small &amp;Caps</source>
        <translation type="unfinished">ตัวพิมพ์เล็ก</translation>
    </message>
    <message>
        <source>Su&amp;perscript</source>
        <translation type="unfinished">ตัวยก</translation>
    </message>
    <message>
        <source>Su&amp;bscript</source>
        <translation type="unfinished">ต้นห้อย
</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <translation type="obsolete">&amp;Outline</translation>
    </message>
    <message>
        <source>S&amp;hadow</source>
        <translation type="unfinished">เงา</translation>
    </message>
    <message>
        <source>&amp;Image Effects</source>
        <translation type="unfinished">ลูกเล่นรูปภาพ
</translation>
    </message>
    <message>
        <source>&amp;Tabulators...</source>
        <translation type="unfinished">เครื่องมือสร้างตาราง...</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="unfinished">ทำซ้ำ</translation>
    </message>
    <message>
        <source>&amp;Multiple Duplicate</source>
        <translation type="unfinished">ทำซ้ำต่อเนื่อง</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="unfinished">รวมกลุ่ม</translation>
    </message>
    <message>
        <source>&amp;Ungroup</source>
        <translation type="unfinished">แตกกลุ่ม</translation>
    </message>
    <message>
        <source>Is &amp;Locked</source>
        <translation type="unfinished">ล็อก</translation>
    </message>
    <message>
        <source>Si&amp;ze is Locked</source>
        <translation type="unfinished">ล็อกขนาด</translation>
    </message>
    <message>
        <source>Lower to &amp;Bottom</source>
        <translation type="unfinished">ลดตำ่ลงล่าง</translation>
    </message>
    <message>
        <source>Raise to &amp;Top</source>
        <translation type="unfinished">ยกขึ้นบน</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation type="unfinished">ลดต่ำลง
</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation type="unfinished">ยกขึ้น
</translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation type="unfinished">ส่งไปยังสมุดภาพ</translation>
    </message>
    <message>
        <source>&amp;Attributes...</source>
        <translation type="unfinished">อ้างว่า</translation>
    </message>
    <message>
        <source>More Info...</source>
        <translation type="unfinished">ข้อมูลเพิ่ม...</translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation type="unfinished">แสดงรูปภาพ</translation>
    </message>
    <message>
        <source>&amp;Update Image</source>
        <translation type="unfinished">ปรับปรุงรูปภาพ</translation>
    </message>
    <message>
        <source>Adjust Frame to Image</source>
        <translation type="unfinished">ปรับกรอบให้เข้ากับรูปภาพ</translation>
    </message>
    <message>
        <source>Extended Image Properties</source>
        <translation type="unfinished">ขยายคุณสมบัติของรูปภาพ</translation>
    </message>
    <message>
        <source>&amp;Low Resolution</source>
        <translation type="unfinished">ความละเอียดต่ำ</translation>
    </message>
    <message>
        <source>&amp;Normal Resolution</source>
        <translation type="unfinished">ความละเอียดปกติ</translation>
    </message>
    <message>
        <source>&amp;Full Resolution</source>
        <translation type="unfinished">ความละเอียดสูง</translation>
    </message>
    <message>
        <source>Is PDF &amp;Bookmark</source>
        <translation type="unfinished">Is PDF ที่คั่นหนังสือ</translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation type="unfinished">Is PDF คำอธิบายประกอบ</translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation type="unfinished">คำอธิบายประกอบ คุณสมบัติ</translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation type="unfinished">คุณสมบัติเขตข้อมูล</translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation type="unfinished">แก้ไขรูปร่าง</translation>
    </message>
    <message>
        <source>&amp;Attach Text to Path</source>
        <translation type="unfinished">แนบข้อความเข้ากับเส้นทาง</translation>
    </message>
    <message>
        <source>&amp;Detach Text from Path</source>
        <translation type="unfinished">ยกเลิกการแนบข้อความเข้ากับเส้นทาง</translation>
    </message>
    <message>
        <source>&amp;Combine Polygons</source>
        <translation type="unfinished">รวมโพลิกอน</translation>
    </message>
    <message>
        <source>Split &amp;Polygons</source>
        <translation type="unfinished">แยกโพลิกอน</translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation type="unfinished">&amp;Bezier Curve</translation>
    </message>
    <message>
        <source>&amp;Image Frame</source>
        <translation type="unfinished">เฟรมรูปภาพ</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <translation type="obsolete">&amp;Outlines</translation>
    </message>
    <message>
        <source>&amp;Polygon</source>
        <translation type="unfinished">โพลิกอน</translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation type="unfinished">เฟรมข้อความ</translation>
    </message>
    <message>
        <source>&amp;Glyph...</source>
        <translation type="unfinished">ตัวอักษร...</translation>
    </message>
    <message>
        <source>Sample Text</source>
        <translation type="unfinished">ตัวอย่างข้อความ</translation>
    </message>
    <message>
        <source>&amp;Insert...</source>
        <translation type="unfinished">แทรก...</translation>
    </message>
    <message>
        <source>Im&amp;port...</source>
        <translation type="unfinished">นำเข้า...</translation>
    </message>
    <message>
        <source>&amp;Delete...</source>
        <translation type="unfinished">ลบ...</translation>
    </message>
    <message>
        <source>&amp;Copy...</source>
        <translation type="unfinished">คัดลอก...</translation>
    </message>
    <message>
        <source>&amp;Move...</source>
        <translation type="unfinished">ย้าย...</translation>
    </message>
    <message>
        <source>&amp;Apply Master Page...</source>
        <translation type="unfinished">ประยุกต์ใช้ต้นแบบเอกสาร...</translation>
    </message>
    <message>
        <source>Convert to Master Page...</source>
        <translation type="unfinished">แปลงไปเป็นต้นแบบเอกสาร...</translation>
    </message>
    <message>
        <source>Manage &amp;Guides...</source>
        <translation type="unfinished">จัดการไกด์...</translation>
    </message>
    <message>
        <source>Manage Page Properties...</source>
        <translation type="unfinished">จัดการคุณสมบัติหน้ากระดาษ...</translation>
    </message>
    <message>
        <source>&amp;Fit in window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;50%</source>
        <translation type="unfinished">50%</translation>
    </message>
    <message>
        <source>&amp;75%</source>
        <translation type="unfinished">75%</translation>
    </message>
    <message>
        <source>&amp;100%</source>
        <translation type="unfinished">100%</translation>
    </message>
    <message>
        <source>&amp;200%</source>
        <translation type="unfinished">200%</translation>
    </message>
    <message>
        <source>&amp;Thumbnails</source>
        <translation type="unfinished">&amp;Thumbnails</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation type="unfinished">แสดงระยะขอบ</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation type="unfinished">แสดงเฟรม</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation type="unfinished">แสดงรูปภาพ</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation type="unfinished">แสดงกริก</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation type="unfinished">แสดงไกด์</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation type="unfinished">แสดงกริกหลัก</translation>
    </message>
    <message>
        <source>Show &amp;Text Chain</source>
        <translation type="unfinished">แสดงตัวเชื่อมข้อความ</translation>
    </message>
    <message>
        <source>Show Control Characters</source>
        <translation type="unfinished">แสดงตัวควบคุมตัวอักษร</translation>
    </message>
    <message>
        <source>Rulers relative to Page</source>
        <translation type="unfinished">ไม้บรรทัดสัมพัทธ์กับหน้า</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation type="unfinished">จัดแนบกริก</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation type="unfinished">จัดแนบไกด์</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation type="unfinished">คุณสมบัติ</translation>
    </message>
    <message>
        <source>&amp;Scrapbook</source>
        <translation type="unfinished">สมุดตัดแปะรูป</translation>
    </message>
    <message>
        <source>&amp;Layers</source>
        <translation type="unfinished">ชั้น</translation>
    </message>
    <message>
        <source>&amp;Arrange Pages</source>
        <translation type="unfinished">จัดเรียงหน้ากระดาษ</translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation type="unfinished">ที่คั่นหนังสือ</translation>
    </message>
    <message>
        <source>&amp;Measurements</source>
        <translation type="unfinished">ตัววัด</translation>
    </message>
    <message>
        <source>Action &amp;History</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preflight &amp;Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Align and Distribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation type="unfinished">เครื่องมือ</translation>
    </message>
    <message>
        <source>P&amp;DF Tools</source>
        <translation type="unfinished">เครื่องมือพีดีเอฟ</translation>
    </message>
    <message>
        <source>Select Item</source>
        <translation type="unfinished">เลือกรายการ</translation>
    </message>
    <message>
        <source>T&amp;able</source>
        <translation type="unfinished">ตาราง</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation type="unfinished">รูปร่าง</translation>
    </message>
    <message>
        <source>&amp;Line</source>
        <translation type="unfinished">เส้น</translation>
    </message>
    <message>
        <source>&amp;Freehand Line</source>
        <translation type="unfinished">เส้นอิสระ</translation>
    </message>
    <message>
        <source>Rotate Item</source>
        <translation type="unfinished">หมุนข้อความ</translation>
    </message>
    <message>
        <source>Zoom in or out</source>
        <translation type="unfinished">ขยายเข้า หรือ ออก</translation>
    </message>
    <message>
        <source>Zoom in</source>
        <translation type="unfinished">ขยายเข้า</translation>
    </message>
    <message>
        <source>Zoom out</source>
        <translation type="unfinished">ขยายออก</translation>
    </message>
    <message>
        <source>Edit Contents of Frame</source>
        <translation type="unfinished">แก้ไขภายในเฟรม</translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation type="unfinished">แก้ไขข้อความ...</translation>
    </message>
    <message>
        <source>Link Text Frames</source>
        <translation type="unfinished">เชื่อมกรอบข้อความ</translation>
    </message>
    <message>
        <source>Unlink Text Frames</source>
        <translation type="unfinished">ยกเลิกการเชื่อมกรอบข้อความ</translation>
    </message>
    <message>
        <source>&amp;Eye Dropper</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy Item Properties</source>
        <translation type="unfinished">คัดลอกรายละเอียดของ</translation>
    </message>
    <message>
        <source>Edit the text with the Story Editor</source>
        <translation type="unfinished">แก้ไขข้อความด้วยตัวแก้ไขเนื้อหา</translation>
    </message>
    <message>
        <source>Insert Text Frame</source>
        <translation type="unfinished">แทรกกรอบข้อความ</translation>
    </message>
    <message>
        <source>Insert Image Frame</source>
        <translation type="unfinished">แทรกเฟรมรูปภาพ</translation>
    </message>
    <message>
        <source>Insert Table</source>
        <translation type="unfinished">แทรกตาราง</translation>
    </message>
    <message>
        <source>Insert Shape</source>
        <translation type="unfinished">แทรกรูปร่าง</translation>
    </message>
    <message>
        <source>Insert Polygon</source>
        <translation type="unfinished">แทรกโพลิกอน</translation>
    </message>
    <message>
        <source>Insert Line</source>
        <translation type="unfinished">แทรกบรรทัด</translation>
    </message>
    <message>
        <source>Insert Bezier Curve</source>
        <translation type="unfinished">Insert Bezier Curve</translation>
    </message>
    <message>
        <source>Insert Freehand Line</source>
        <translation type="unfinished">แทรกลายเส้นอิสระ</translation>
    </message>
    <message>
        <source>&amp;Manage Pictures</source>
        <translation type="obsolete">จัดการรูปภาพ</translation>
    </message>
    <message>
        <source>&amp;Hyphenate Text</source>
        <translation type="unfinished">Hyphenate Text</translation>
    </message>
    <message>
        <source>Dehyphenate Text</source>
        <translation type="unfinished">Dehyphenate Text</translation>
    </message>
    <message>
        <source>&amp;Generate Table Of Contents</source>
        <translation type="unfinished">ตารางสารบัญทั่วไป</translation>
    </message>
    <message>
        <source>&amp;Cascade</source>
        <translation type="unfinished">ไม่ขนาน</translation>
    </message>
    <message>
        <source>&amp;Tile</source>
        <translation type="unfinished">ชิ้น</translation>
    </message>
    <message>
        <source>&amp;About Scribus</source>
        <translation type="unfinished">เกี่ยวกับ สไครบัส</translation>
    </message>
    <message>
        <source>&amp;About Plug-ins</source>
        <translation type="unfinished">เกี่ยวกับปลั๊กอิน</translation>
    </message>
    <message>
        <source>About &amp;Qt</source>
        <translation type="unfinished">เกี่ยวกับ คิวที</translation>
    </message>
    <message>
        <source>Toolti&amp;ps</source>
        <translation type="unfinished">ตัวแนะนำ</translation>
    </message>
    <message>
        <source>Scribus &amp;Manual...</source>
        <translation type="unfinished">คู่มือ สไครบัส...</translation>
    </message>
    <message>
        <source>Smart &amp;Hyphen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Non Breaking Dash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Non Breaking &amp;Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page &amp;Number</source>
        <translation type="unfinished">หมายเลขหน้า</translation>
    </message>
    <message>
        <source>New Line</source>
        <translation type="unfinished">บรรทัดใหม่</translation>
    </message>
    <message>
        <source>Frame Break</source>
        <translation type="unfinished">ตัวแบ่งเฟรม</translation>
    </message>
    <message>
        <source>Column Break</source>
        <translation type="unfinished">ตัวแบ่งคอลัมน์</translation>
    </message>
    <message>
        <source>Copyright</source>
        <translation type="unfinished">ลิขสิทธิ์</translation>
    </message>
    <message>
        <source>Registered Trademark</source>
        <translation type="unfinished">เครื่องหมายการค้าลงทะเบียน</translation>
    </message>
    <message>
        <source>Trademark</source>
        <translation type="unfinished">เครื่องหมายการค้า</translation>
    </message>
    <message>
        <source>Bullet</source>
        <translation type="unfinished">รายการลำดับ</translation>
    </message>
    <message>
        <source>Em Dash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>En Dash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Figure Dash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quotation Dash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apostrophe</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Straight Double</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Single Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Single Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Double Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Double Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Single Reversed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Double Reversed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Single Left Guillemet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Single Right Guillemet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Double Left Guillemet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Double Right Guillemet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Low Single Comma</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Low Double Comma</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CJK Single Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CJK Single Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CJK Double Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CJK Double Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Toggle Palettes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Toggle Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Printing Enabled</source>
        <translation type="unfinished">สามารถพืมพ์</translation>
    </message>
    <message>
        <source>&amp;Flip Horizontally</source>
        <translation type="unfinished">กลับในแนวนอน</translation>
    </message>
    <message>
        <source>&amp;Flip Vertically</source>
        <translation type="unfinished">กลับแนวตั้ง</translation>
    </message>
    <message>
        <source>Show Rulers</source>
        <translation type="unfinished">แสดงแถบไม้บรรทัด</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <comment>Document Outline Palette</comment>
        <translation type="unfinished">เค้าโครง</translation>
    </message>
    <message>
        <source>Solidus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Middle Dot</source>
        <translation type="unfinished">จุดกึ่งกลาง</translation>
    </message>
    <message>
        <source>En Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Em Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Thin Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Thick Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mid Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hair Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Smart Hyphen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Non Breaking Dash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Non Breaking Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert Page Number</source>
        <translation type="unfinished">แทรกหมายเลขหน้า</translation>
    </message>
    <message>
        <source>ff</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>fi</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>fl</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>ffi</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>ffl</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>ft</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>st</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S&amp;tyles...</source>
        <translation type="unfinished">รูปแบบ...</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <comment>type effect</comment>
        <translation type="unfinished">เค้าโครง</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <comment>Convert to oulines</comment>
        <translation type="unfinished">เค้าโครง</translation>
    </message>
    <message>
        <source>Paste (&amp;Absolute)</source>
        <translation type="unfinished">วาง</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished">เคลียร์</translation>
    </message>
    <message>
        <source>Show Text Frame Columns</source>
        <translation type="unfinished">แสดงกรอบข้อความคอลัมน์</translation>
    </message>
    <message>
        <source>&amp;400%</source>
        <translation type="unfinished">&amp;400%</translation>
    </message>
    <message>
        <source>&amp;Manage Images</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AdvOptions</name>
    <message>
        <source>Advanced Options</source>
        <translation type="obsolete">Advanced Options</translation>
    </message>
    <message>
        <source>Creates PostScript Level 3</source>
        <translation type="obsolete">Creates PostScript Level 3</translation>
    </message>
    <message>
        <source>Creates PostScript Level 2 only, beware,
this can create huge files</source>
        <translation type="obsolete">Creates PostScript Level 2 only, beware,
this can create huge files</translation>
    </message>
    <message>
        <source>Creates PostScript Level 1 only, beware,
this can create huge files</source>
        <translation type="obsolete">Creates PostScript Level 1 only, beware,
this can create huge files</translation>
    </message>
    <message>
        <source>Mirror Page(s) &amp;Horizontal</source>
        <translation type="obsolete">Mirror Page(s) &amp;Horizontal</translation>
    </message>
    <message>
        <source>Mirror Page(s) &amp;Vertical</source>
        <translation type="obsolete">Mirror Page(s) &amp;Vertical</translation>
    </message>
    <message>
        <source>Apply &amp;ICC Profiles</source>
        <translation type="obsolete">Apply &amp;ICC Profiles</translation>
    </message>
    <message>
        <source>PostScript Level &amp;1</source>
        <translation type="obsolete">PostScript Level &amp;1</translation>
    </message>
    <message>
        <source>PostScript Level &amp;2</source>
        <translation type="obsolete">PostScript Level &amp;2</translation>
    </message>
    <message>
        <source>PostScript Level &amp;3</source>
        <translation type="obsolete">PostScript Level &amp;3</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>Apply Under Color &amp;Removal</source>
        <translation type="obsolete">Apply Under Colour &amp;Removal</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="obsolete">A way of switching off some of the grey shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the grey. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</translation>
    </message>
</context>
<context>
    <name>Align</name>
    <message>
        <source>Distribute/Align</source>
        <translation type="obsolete">Distribute/Align</translation>
    </message>
    <message>
        <source>Align</source>
        <translation type="obsolete">Align</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="obsolete">Horizontal</translation>
    </message>
    <message>
        <source>Left Sides</source>
        <translation type="obsolete">Left Sides</translation>
    </message>
    <message>
        <source>Middles</source>
        <translation type="obsolete">Middles</translation>
    </message>
    <message>
        <source>Right Sides</source>
        <translation type="obsolete">Right Sides</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="obsolete">Vertical</translation>
    </message>
    <message>
        <source>Top Sides</source>
        <translation type="obsolete">Top Sides</translation>
    </message>
    <message>
        <source>Bottom Sides</source>
        <translation type="obsolete">Bottom Sides</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation type="obsolete">&amp;Apply</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>&amp;Between:</source>
        <translation type="obsolete">&amp;Between:</translation>
    </message>
    <message>
        <source>A&amp;lign</source>
        <translation type="obsolete">A&amp;lign</translation>
    </message>
    <message>
        <source>Di&amp;splacement</source>
        <translation type="obsolete">Di&amp;splacement</translation>
    </message>
    <message>
        <source>Distribute &amp;Evenly</source>
        <translation type="obsolete">Distribute &amp;Evenly</translation>
    </message>
    <message>
        <source>Bet&amp;ween:</source>
        <translation type="obsolete">Bet&amp;ween:</translation>
    </message>
    <message>
        <source>Do &amp;Not Change</source>
        <translation type="obsolete">Do &amp;Not Change</translation>
    </message>
    <message>
        <source>Al&amp;ign</source>
        <translation type="obsolete">Al&amp;ign</translation>
    </message>
    <message>
        <source>Dis&amp;placement</source>
        <translation type="obsolete">Dis&amp;placement</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source>Distribute E&amp;venly</source>
        <translation type="obsolete">Distribute E&amp;venly</translation>
    </message>
    <message>
        <source>&amp;Do Not Change</source>
        <translation type="obsolete">&amp;Do Not Change</translation>
    </message>
</context>
<context>
    <name>AlignDistributePalette</name>
    <message>
        <source>Align and Distribute</source>
        <translation type="unfinished">เส้นตรง และ กระจาย</translation>
    </message>
    <message>
        <source>Align</source>
        <translation type="unfinished">เส้นตรง</translation>
    </message>
    <message>
        <source>&amp;Relative to:</source>
        <translation type="unfinished">อ้างถึง</translation>
    </message>
    <message>
        <source>First Selected</source>
        <translation type="unfinished">เลือกอันดับแรก</translation>
    </message>
    <message>
        <source>Last Selected</source>
        <translation type="unfinished">เลือกอันดับสุท้าย</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished">หน้า</translation>
    </message>
    <message>
        <source>Margins</source>
        <translation type="unfinished">ขอบ</translation>
    </message>
    <message>
        <source>Guide</source>
        <translation type="unfinished">คำแนะนำ</translation>
    </message>
    <message>
        <source>Selection</source>
        <translation type="unfinished">เลือก</translation>
    </message>
    <message>
        <source>Align right sides of objects to left side of anchor</source>
        <translation type="unfinished">ชิดขวาไปยังซ้าย</translation>
    </message>
    <message>
        <source>Align left sides of objects to right side of anchor</source>
        <translation type="unfinished">ชิดซ้ายไปยังขวา</translation>
    </message>
    <message>
        <source>Align bottoms</source>
        <translation type="unfinished">ชิดขอบล่าง</translation>
    </message>
    <message>
        <source>Align right sides</source>
        <translation type="unfinished">ชิดขอบขวา</translation>
    </message>
    <message>
        <source>Align tops of objects to bottom of anchor</source>
        <translation type="unfinished">ชิดขอบบนไปยังขอบล่าง</translation>
    </message>
    <message>
        <source>Center on vertical axis</source>
        <translation type="unfinished">จุดกึ่งกลางแนวตั้ง</translation>
    </message>
    <message>
        <source>Align left sides</source>
        <translation type="unfinished">ชิดขอบซ้าย</translation>
    </message>
    <message>
        <source>Center on horizontal axis</source>
        <translation type="unfinished">จุดกึ่งกลางแนวขวาง</translation>
    </message>
    <message>
        <source>Align bottoms of objects to top of anchor</source>
        <translation type="unfinished">ชิดขอบล่างไปยังด้านบน</translation>
    </message>
    <message>
        <source>Align tops</source>
        <translation type="unfinished">ชิดขอบบน</translation>
    </message>
    <message>
        <source>&amp;Selected Guide:</source>
        <translation type="unfinished">เลือกคำแนะนำ</translation>
    </message>
    <message>
        <source>Distribute</source>
        <translation type="unfinished">กระจาย</translation>
    </message>
    <message>
        <source>Make horizontal gaps between objects equal</source>
        <translation type="unfinished">ทำแนวขวางแก๊ประหว่างวัตถุให้เท่ากัน</translation>
    </message>
    <message>
        <source>Make horizontal gaps between objects equal to the value specified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distribute right sides equidistantly</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distribute bottoms equidistantly</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distribute centers equidistantly horizontally</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make vertical gaps between objects equal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make vertical gaps between objects equal to the value specified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distribute left sides equidistantly</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distribute centers equidistantly vertically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distribute tops equidistantly</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Distance:</source>
        <translation type="unfinished">ระยะ</translation>
    </message>
    <message>
        <source>Distribute the items with the distance specified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None Selected</source>
        <translation type="unfinished">ไม่เลือก</translation>
    </message>
    <message>
        <source>Some objects are locked.</source>
        <translation type="unfinished">วัตถุประสงค์บางอย่างถูกล็อค</translation>
    </message>
    <message>
        <source>&amp;Unlock All</source>
        <translation type="unfinished">ไม่ล๊อคทั้งหมด</translation>
    </message>
    <message>
        <source>Y: %1%2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X: %1%2</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AlignSelect</name>
    <message>
        <source>Align Text Left</source>
        <translation type="unfinished">จัดข้อความชิดซ้าย</translation>
    </message>
    <message>
        <source>Align Text Right</source>
        <translation type="unfinished">จัดข้อความชิดขวา</translation>
    </message>
    <message>
        <source>Align Text Center</source>
        <translation type="unfinished">จัดข้อความตรงกลาง</translation>
    </message>
    <message>
        <source>Align Text Justified</source>
        <translation type="unfinished">จัดข้อความชิดขอบ</translation>
    </message>
    <message>
        <source>Align Text Forced Justified</source>
        <translation type="unfinished">Align Text Forced Justified</translation>
    </message>
</context>
<context>
    <name>Annot</name>
    <message>
        <source>Field Properties</source>
        <translation type="unfinished">ขอบเขตคุณสมบัติ</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation type="unfinished">ชนิด:</translation>
    </message>
    <message>
        <source>Button</source>
        <translation type="unfinished">กด</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation type="unfinished">ขอบเขตข้อความ</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation type="unfinished">ตรวจกล่อง</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation type="unfinished">กล่องผสม</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation type="unfinished">รายการ</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation type="unfinished">คุณสมบัติ</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished">ชื่อ:</translation>
    </message>
    <message>
        <source>Tool-Tip:</source>
        <translation type="unfinished">เครื่องมือ-พิเศษ:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished">ข้อความ</translation>
    </message>
    <message>
        <source>Border</source>
        <translation type="unfinished">ตัวหนา</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="unfinished">สี:</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">ไม่มีชื่อ</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation type="unfinished">ตัวเอียง:</translation>
    </message>
    <message>
        <source>Thin</source>
        <translation type="unfinished">ตัวบาง</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">ธรรมดา</translation>
    </message>
    <message>
        <source>Wide</source>
        <translation type="unfinished">กว้าง</translation>
    </message>
    <message>
        <source>Style:</source>
        <translation type="unfinished">ลักษณะ:</translation>
    </message>
    <message>
        <source>Solid</source>
        <translation type="unfinished">ความหนา</translation>
    </message>
    <message>
        <source>Dashed</source>
        <translation type="unfinished">เส้นขีด</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation type="unfinished">เส้นใต้</translation>
    </message>
    <message>
        <source>Beveled</source>
        <translation type="unfinished">มุม</translation>
    </message>
    <message>
        <source>Inset</source>
        <translation type="unfinished">Inset</translation>
    </message>
    <message>
        <source>Other</source>
        <translation type="unfinished">อื่นๆ</translation>
    </message>
    <message>
        <source>Read Only</source>
        <translation type="unfinished">อ่านอย่างเดียว</translation>
    </message>
    <message>
        <source>Required</source>
        <translation type="unfinished">ต้องการ</translation>
    </message>
    <message>
        <source>Don&apos;t Export Value</source>
        <translation type="unfinished">Don&apos;t Export Value</translation>
    </message>
    <message>
        <source>Visibility:</source>
        <translation type="unfinished">ความกระจ่าง:</translation>
    </message>
    <message>
        <source>Visible</source>
        <translation type="unfinished">ชัด</translation>
    </message>
    <message>
        <source>Hidden</source>
        <translation type="unfinished">ซ่อน</translation>
    </message>
    <message>
        <source>No Print</source>
        <translation type="unfinished">ไม่พิมพ์</translation>
    </message>
    <message>
        <source>No View</source>
        <translation type="unfinished">ไม่แสดงภาพ</translation>
    </message>
    <message>
        <source>Appearance</source>
        <translation type="unfinished">ปรากฏ</translation>
    </message>
    <message>
        <source>Text for Button Down</source>
        <translation type="unfinished">ข้อความสำหรับข้างล่างสุด</translation>
    </message>
    <message>
        <source>Text for Roll Over</source>
        <translation type="unfinished">Text for Roll Over</translation>
    </message>
    <message>
        <source>Icons</source>
        <translation>สัญลักษณ์</translation>
    </message>
    <message>
        <source>Use Icons</source>
        <translation type="unfinished">ใช่สัญลักษณ์</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation type="unfinished">ย้าย</translation>
    </message>
    <message>
        <source>Pressed</source>
        <translation type="unfinished">กด</translation>
    </message>
    <message>
        <source>Roll Over</source>
        <translation type="unfinished">Roll Over</translation>
    </message>
    <message>
        <source>Icon Placement...</source>
        <translation type="unfinished">Icon Placement...</translation>
    </message>
    <message>
        <source>Highlight</source>
        <translation type="unfinished">เน้นข้อความ</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation type="unfinished">กลับ</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation type="unfinished">เค้าโครงร่าง</translation>
    </message>
    <message>
        <source>Push</source>
        <translation type="unfinished">Push</translation>
    </message>
    <message>
        <source>Multi-Line</source>
        <translation type="unfinished">Multi-Line</translation>
    </message>
    <message>
        <source>Password</source>
        <translation type="unfinished">รหัส</translation>
    </message>
    <message>
        <source>Limit of</source>
        <translation type="unfinished">จำกัด</translation>
    </message>
    <message>
        <source>Characters</source>
        <translation type="unfinished">ตัวอักษร</translation>
    </message>
    <message>
        <source>Do Not Scroll</source>
        <translation type="unfinished">ไม่ใข้สกอร์</translation>
    </message>
    <message>
        <source>Do Not Spell Check</source>
        <translation type="unfinished">ไม่เอาตัวสะกด</translation>
    </message>
    <message>
        <source>Check Style:</source>
        <translation type="unfinished">ตรวจสอบลักษณะ:</translation>
    </message>
    <message>
        <source>Check</source>
        <translation type="unfinished">ตรวจสอบ</translation>
    </message>
    <message>
        <source>Cross</source>
        <translation type="unfinished">กากบาท</translation>
    </message>
    <message>
        <source>Diamond</source>
        <translation type="unfinished">รูปสี่เหลี่ยมขนมเปียกปูน</translation>
    </message>
    <message>
        <source>Circle</source>
        <translation type="unfinished">วงกลม</translation>
    </message>
    <message>
        <source>Star</source>
        <translation type="unfinished">รูปดาว</translation>
    </message>
    <message>
        <source>Square</source>
        <translation type="unfinished">สี่เหลี่ยม</translation>
    </message>
    <message>
        <source>Default is Checked</source>
        <translation type="unfinished">การตรวจสอบผิดพลาด</translation>
    </message>
    <message>
        <source>Editable</source>
        <translation type="unfinished">แก้ไขตาราง</translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="unfinished">ทางเลือก</translation>
    </message>
    <message>
        <source>Java Script</source>
        <translation type="obsolete">Java Script</translation>
    </message>
    <message>
        <source>Go To</source>
        <translation type="unfinished">ไปยัง</translation>
    </message>
    <message>
        <source>Submit Form</source>
        <translation type="unfinished">ยอมรับ</translation>
    </message>
    <message>
        <source>Reset Form</source>
        <translation type="unfinished">ตั้งค่าอีกครั้ง</translation>
    </message>
    <message>
        <source>Import Data</source>
        <translation type="unfinished">ข้อมูลนำเข้า</translation>
    </message>
    <message>
        <source>Event:</source>
        <translation type="unfinished">กรณี:</translation>
    </message>
    <message>
        <source>Mouse Up</source>
        <translation type="unfinished">Mouse Up</translation>
    </message>
    <message>
        <source>Mouse Down</source>
        <translation type="unfinished">Mouse Down</translation>
    </message>
    <message>
        <source>Mouse Enter</source>
        <translation type="unfinished">Mouse Enter</translation>
    </message>
    <message>
        <source>Mouse Exit</source>
        <translation type="unfinished">Mouse Exit</translation>
    </message>
    <message>
        <source>On Focus</source>
        <translation type="unfinished">จุดโฟกัส</translation>
    </message>
    <message>
        <source>On Blur</source>
        <translation type="unfinished">On Blur</translation>
    </message>
    <message>
        <source>Script:</source>
        <translation type="unfinished">ต้นฉบับ:</translation>
    </message>
    <message>
        <source>Edit...</source>
        <translation type="unfinished">แก้ไข...</translation>
    </message>
    <message>
        <source>Submit to URL:</source>
        <translation type="unfinished">ยัมรับ ไปยัง URL:</translation>
    </message>
    <message>
        <source>Submit Data as HTML</source>
        <translation type="obsolete">ยอมรับข้อมูล HTML</translation>
    </message>
    <message>
        <source>Import Data from:</source>
        <translation type="unfinished">ข้อมูลนำเข้าจาก:</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation type="unfinished">ปลายทาง</translation>
    </message>
    <message>
        <source>To File:</source>
        <translation type="unfinished">ไปยังแฟ้ม:</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation type="unfinished">เปลี่ยน...</translation>
    </message>
    <message>
        <source>Page:</source>
        <translation type="unfinished">หน้า:</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation type="unfinished">X-Pos:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation type="unfinished">Y-Pos:</translation>
    </message>
    <message>
        <source>Action</source>
        <translation type="unfinished">Action</translation>
    </message>
    <message>
        <source>Field is formatted as:</source>
        <translation type="unfinished">Field is formatted as:</translation>
    </message>
    <message>
        <source>Plain</source>
        <translation type="unfinished">ปกติ</translation>
    </message>
    <message>
        <source>Number</source>
        <translation type="unfinished">ตัวเลข</translation>
    </message>
    <message>
        <source>Percentage</source>
        <translation type="unfinished">เปอร์เซ็นต์</translation>
    </message>
    <message>
        <source>Date</source>
        <translation type="unfinished">วันที่</translation>
    </message>
    <message>
        <source>Time</source>
        <translation type="unfinished">เวลา</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">Custom</translation>
    </message>
    <message>
        <source>Number Format</source>
        <translation type="unfinished">รูปแบบตัวเลข</translation>
    </message>
    <message>
        <source>Decimals:</source>
        <translation type="unfinished">ทศนิยม:</translation>
    </message>
    <message>
        <source>Use Currency Symbol</source>
        <translation type="unfinished">ใช้สัญลักษณ์</translation>
    </message>
    <message>
        <source>Prepend Currency Symbol</source>
        <translation type="unfinished">Prepend Currency Symbol</translation>
    </message>
    <message>
        <source>Formatting</source>
        <translation type="unfinished">รูปแบบ</translation>
    </message>
    <message>
        <source>Percent Format</source>
        <translation type="unfinished">รูปแบบเปร์เซ็นต์</translation>
    </message>
    <message>
        <source>Date Format</source>
        <translation type="unfinished">รูปแบบวันที่</translation>
    </message>
    <message>
        <source>Time Format</source>
        <translation type="unfinished">รูปแบบเวลา</translation>
    </message>
    <message>
        <source>Custom Scripts</source>
        <translation type="unfinished">Custom Scripts</translation>
    </message>
    <message>
        <source>Format:</source>
        <translation type="unfinished">รูปแบบ:</translation>
    </message>
    <message>
        <source>Keystroke:</source>
        <translation type="unfinished">Keystroke:</translation>
    </message>
    <message>
        <source>Format</source>
        <translation type="unfinished">รูปแบบ</translation>
    </message>
    <message>
        <source>Value is not validated</source>
        <translation type="unfinished">Value is not validated</translation>
    </message>
    <message>
        <source>Value must be greater than or equal to:</source>
        <translation type="unfinished">Value must be greater than or equal to:</translation>
    </message>
    <message>
        <source>and less or equal to:</source>
        <translation type="unfinished">and less or equal to:</translation>
    </message>
    <message>
        <source>Custom validate script:</source>
        <translation type="unfinished">Custom validate script:</translation>
    </message>
    <message>
        <source>Validate</source>
        <translation type="unfinished">ใช้ได้</translation>
    </message>
    <message>
        <source>Value is not calculated</source>
        <translation type="unfinished">Value is not calculated</translation>
    </message>
    <message>
        <source>Value is the</source>
        <translation type="unfinished">Value is the</translation>
    </message>
    <message>
        <source>sum</source>
        <translation type="unfinished">ยอดรวม</translation>
    </message>
    <message>
        <source>product</source>
        <translation type="unfinished">ผลคูณ</translation>
    </message>
    <message>
        <source>average</source>
        <translation type="unfinished">ค่าเฉลี่ย</translation>
    </message>
    <message>
        <source>minimum</source>
        <translation type="unfinished">ค่าน้อยที่สุด</translation>
    </message>
    <message>
        <source>maximum</source>
        <translation type="unfinished">ค่ามากที่สุด</translation>
    </message>
    <message>
        <source>of the following fields:</source>
        <translation type="unfinished">of the following fields:</translation>
    </message>
    <message>
        <source>Pick...</source>
        <translation type="unfinished">เลือก...</translation>
    </message>
    <message>
        <source>Custom calculation script:</source>
        <translation type="unfinished">Custom calculation script:</translation>
    </message>
    <message>
        <source>Calculate</source>
        <translation type="unfinished">เครื่องคิดเลข</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">ตกลง</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
    <message>
        <source>Enter a comma separated list of fields here</source>
        <translation type="unfinished">Enter a comma separated list of fields here</translation>
    </message>
    <message>
        <source>You need at least the Icon for Normal to use Icons for Buttons</source>
        <translation type="unfinished">You need at least the Icon for Normal to use Icons for Buttons</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>เปิด</translation>
    </message>
    <message>
        <source>Images (*.tif *.png *.jpg *.xpm);;Postscript (*.eps);;All Files (*)</source>
        <translation type="obsolete">Images (*.tif *.png *.jpg *.xpm);;Postscript (*.eps);;All Files (*)</translation>
    </message>
    <message>
        <source>Example:</source>
        <translation type="unfinished">ตัวอย่าง:</translation>
    </message>
    <message>
        <source>Selection Change</source>
        <translation type="unfinished">เลือก เปลี่ยนe</translation>
    </message>
    <message>
        <source>Font for use with PDF 1.3:</source>
        <translation type="unfinished">ตัวพิมใช้กับ PDF 1.3:</translation>
    </message>
    <message>
        <source>Flag is ignored for PDF 1.3</source>
        <translation type="unfinished">Flag is ignored for PDF 1.3</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation type="unfinished">PDF Files (*.pdf);;All Files (*)</translation>
    </message>
    <message>
        <source>JavaScript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Images (*.tif *.png *.jpg *.xpm);;PostScript (*.eps);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <comment>highlight</comment>
        <translation type="unfinished">None</translation>
    </message>
    <message>
        <source>None</source>
        <comment>action</comment>
        <translation type="unfinished">None</translation>
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
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Annota</name>
    <message>
        <source>Annotation Properties</source>
        <translation type="unfinished">คำอธิบายคุณสมบัติ</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished">ข้อความ</translation>
    </message>
    <message>
        <source>Link</source>
        <translation type="unfinished">เชื่อมต่อ</translation>
    </message>
    <message>
        <source>External Link</source>
        <translation type="unfinished">เชื่อมต่อภายนอก</translation>
    </message>
    <message>
        <source>External Web-Link</source>
        <translation type="unfinished">เชื่อมต่อ เวป</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation type="unfinished">จุดมุ่งหมาย</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">เปิด</translation>
    </message>
    <message>
        <source>PDF-Documents (*.pdf);;All Files (*)</source>
        <translation type="unfinished">เอกสาร-PDF (*.pdf);;All Files (*)</translation>
    </message>
    <message>
        <source>&amp;Type:</source>
        <translation type="unfinished">ชนิด:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="unfinished">เปลี่ยน...</translation>
    </message>
    <message>
        <source>&amp;Page:</source>
        <translation type="unfinished">หน้า:</translation>
    </message>
    <message>
        <source>&amp;X-Pos</source>
        <translation type="unfinished">&amp;X-Pos</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation type="unfinished">&amp;Y-Pos:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
</context>
<context>
    <name>ApplyMasterPageDialog</name>
    <message>
        <source>Normal</source>
        <translation type="unfinished">ปกติ</translation>
    </message>
    <message>
        <source>Apply Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Master Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply To</source>
        <translation type="unfinished">สมัครถึง</translation>
    </message>
    <message>
        <source>Current &amp;page</source>
        <translation type="unfinished">หน้าปัจจุบัน</translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Even pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+E</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>O&amp;dd pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;All pages</source>
        <translation type="unfinished">หน้าทั้งหมด</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Within range</source>
        <translation type="unfinished">ภายในขอบเขต</translation>
    </message>
    <message>
        <source>Alt+W</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>to</source>
        <translation type="unfinished">ถึง</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="unfinished">Alt+O</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
    <message>
        <source>Apply the selected master page to even, odd or all pages within the following range</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ApplyT</name>
    <message>
        <source>Apply Template</source>
        <translation type="obsolete">Apply Template</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normal</translation>
    </message>
    <message>
        <source>&amp;Template:</source>
        <translation type="obsolete">&amp;Template:</translation>
    </message>
    <message>
        <source>Apply to &amp;Current Page</source>
        <translation type="obsolete">Apply to &amp;Current Page</translation>
    </message>
    <message>
        <source>Apply from &amp;Page:</source>
        <translation type="obsolete">Apply from &amp;Page:</translation>
    </message>
    <message>
        <source>To:</source>
        <translation type="obsolete">To:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>Apply to all &amp;even Pages</source>
        <translation type="obsolete">Apply to all &amp;even Pages</translation>
    </message>
    <message>
        <source>Apply to all &amp;odd Pages</source>
        <translation type="obsolete">Apply to all &amp;odd Pages</translation>
    </message>
</context>
<context>
    <name>ArrowChooser</name>
    <message>
        <source>None</source>
        <translation type="unfinished">ไม่มี</translation>
    </message>
</context>
<context>
    <name>Barcode</name>
    <message>
        <source>&amp;Barcode Generator...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus frontend for Pure Postscript Barcode Writer</source>
        <translation type="unfinished">อักษรสครปบัสสำหรับผู้เขียนต้นฉบับบาร์โค๊ด</translation>
    </message>
</context>
<context>
    <name>BarcodeGenerator</name>
    <message>
        <source>Error opening file: %1</source>
        <translation type="unfinished">เปิดแฟ้มผิดพลาด%1</translation>
    </message>
    <message>
        <source>12 or 13 digits</source>
        <translation type="unfinished">12 หรือ13 หลัก</translation>
    </message>
    <message>
        <source>8 digits</source>
        <translation type="unfinished">8 หลัก</translation>
    </message>
    <message>
        <source>11 or 12 digits</source>
        <translation type="unfinished">11หรือ12 หลัก</translation>
    </message>
    <message>
        <source>7 or 8 digits</source>
        <translation type="unfinished">7 หรือ8หลัก</translation>
    </message>
    <message>
        <source>5 digits</source>
        <translation type="unfinished">5 หลัก</translation>
    </message>
    <message>
        <source>2 digits</source>
        <translation type="unfinished">2 หลัก</translation>
    </message>
    <message>
        <source>Variable number of characters, digits and any of the symbols -. *$/+%.</source>
        <translation type="unfinished">ลักษณะค่าของตัวเลข, หลัก และสัญลักษณ์ต่างๆ</translation>
    </message>
    <message>
        <source>Variable number of ASCII characters and special function symbols, starting with the appropriate start character for the initial character set. UCC/EAN-128s must have a mandatory FNC 1 symbol immediately following the start character.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Variable number of digits and any of the symbols -$:/.+ABCD.</source>
        <translation type="unfinished">ลักษณะค่าของตัวเลข, หลัก และสัญลักษณ์ต่างๆ +เอบีซีดี</translation>
    </message>
    <message>
        <source>Variable number of digits. An ITF-14 is 14 characters and does not have a check digit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Variable number of digits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Variable number of digits and capital letters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Variable number of hexadecimal characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Barcode incomplete</source>
        <translation type="unfinished">รหัส ไม่สมบูรณ์</translation>
    </message>
    <message>
        <source>12 or 13 digits with dashes. The legacy ISBN-10 format accepts 9 or 10 digits with dashes, but this standard was depreciated for public use after 1st January 2007. (Note: To convert an old ISBN-10 to a new ISBN-13, prefix 978- to the first 9 digits, e.g. 1-56592-479-7 -&gt; 978-1-56592-479. The final check-digit will be calculated automatically.)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>BarcodeGeneratorBase</name>
    <message>
        <source>Barcode Creator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Barcode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Type:</source>
        <translation type="unfinished">ชนิด</translation>
    </message>
    <message>
        <source>Select one of the available barcode type here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The numeric representation of the code itself. See the help message below</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset the barcode samples</source>
        <translation type="unfinished">ตั้งค่าตัวอย่างบารโค๊ด</translation>
    </message>
    <message>
        <source>&amp;Include text in barcode</source>
        <translation type="unfinished">รวมข้อความในบารโค๊ต</translation>
    </message>
    <message>
        <source>Alt+I</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>If checked, there will be numbers in the barcode too</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Guard whitespace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+G</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Draw arrows to be sure of space next the code</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colors</source>
        <translation type="unfinished">สี</translation>
    </message>
    <message>
        <source>&amp;Background</source>
        <translation type="unfinished">พื้นหลัง</translation>
    </message>
    <message>
        <source>Alt+B</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Background color - under the code lines</source>
        <translation type="unfinished">สีพิ้นหลัง-ใต้เส้น</translation>
    </message>
    <message>
        <source>&amp;Lines</source>
        <translation type="unfinished">เส้น</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of the lines in barcode</source>
        <translation type="unfinished">สีเส้นรหัส</translation>
    </message>
    <message>
        <source>&amp;Text</source>
        <translation type="unfinished">ข้อความ</translation>
    </message>
    <message>
        <source>Alt+T</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of the text and numbers</source>
        <translation type="unfinished">ขอความสีและตัวเลข</translation>
    </message>
    <message>
        <source>Hints and help is shown here</source>
        <translation type="unfinished">ตัวช่วยและวิธีใช้ แสดงตรงนี้</translation>
    </message>
    <message>
        <source>Preview of the result. 72dpi sample.</source>
        <translation type="unfinished">แสดงผลรวม ตัวอย่าง72ดีพีไอ</translation>
    </message>
    <message>
        <source>Co&amp;de:</source>
        <translation type="unfinished">รหัส</translation>
    </message>
    <message>
        <source>I&amp;nclude checksum</source>
        <translation type="unfinished">ตรวจผลรวม</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Generate and include a checksum in barcode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Incl&amp;ude checksum digit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Include the checksum digit in the barcode text</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Biblio</name>
    <message>
        <source>Scrapbook</source>
        <translation type="unfinished">Scrapbook</translation>
    </message>
    <message>
        <source>Scrapbooks (*.scs);;All Files (*)</source>
        <translation type="obsolete">Scrapbooks (*.scs);;All Files (*)</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>Object</source>
        <translation type="unfinished">วัตถุ</translation>
    </message>
    <message>
        <source>New Entry</source>
        <translation type="unfinished">เข้ามาใหม่</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation type="unfinished">ตั้งชื่อใหม่</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Warning</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="obsolete">Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">OK</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished">ใหม่</translation>
    </message>
    <message>
        <source>&amp;Load...</source>
        <translation type="unfinished">โหลด...</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="obsolete">&amp;Save</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="unfinished">บันทึกเป็น...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">ปิด</translation>
    </message>
    <message>
        <source>&amp;Small</source>
        <translation type="obsolete">&amp;Small</translation>
    </message>
    <message>
        <source>&amp;Medium</source>
        <translation type="obsolete">&amp;Medium</translation>
    </message>
    <message>
        <source>&amp;Large</source>
        <translation type="obsolete">&amp;Large</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished">แฟ้ม</translation>
    </message>
    <message>
        <source>&amp;Preview</source>
        <translation type="unfinished">ตัวอย่างก่อน</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished">ชื่อ:</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; is not unique.
Please choose another.</source>
        <translation type="unfinished">ชื่อ %1 ไม่ได้มีอยู่หันเดียว โปรดเลือกชื่อใหม่</translation>
    </message>
    <message>
        <source>Choose a Scrapbook Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation type="unfinished">เลือกคำสั่ง</translation>
    </message>
    <message>
        <source>Scrapbook (*.scs)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a scrapbook file to import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Import Scrapbook File...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Main</source>
        <translation type="unfinished">หลัก</translation>
    </message>
</context>
<context>
    <name>BookMView</name>
    <message>
        <source>Bookmarks</source>
        <translation type="unfinished">หมายเหตุ</translation>
    </message>
    <message>
        <source>Move Bookmark</source>
        <translation type="unfinished">ย้าย หมายเหตุ</translation>
    </message>
    <message>
        <source>Insert Bookmark</source>
        <translation type="unfinished">แทรกหมายเหตุ</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
</context>
<context>
    <name>BookPalette</name>
    <message>
        <source>Bookmarks</source>
        <translation type="unfinished">หมายเหตุ</translation>
    </message>
</context>
<context>
    <name>ButtonIcon</name>
    <message>
        <source>Icon Placement</source>
        <translation type="unfinished">Icon Placement</translation>
    </message>
    <message>
        <source>Layout:</source>
        <translation type="unfinished">ถาดออก:</translation>
    </message>
    <message>
        <source>Caption only</source>
        <translation type="unfinished">คำอธิบายเท่านั้น</translation>
    </message>
    <message>
        <source>Icon only</source>
        <translation type="unfinished">สัญลักษณ์เท่านั้น</translation>
    </message>
    <message>
        <source>Caption below Icon</source>
        <translation type="unfinished">คำอธิบายข้างล่างสัญลักษณ์</translation>
    </message>
    <message>
        <source>Caption above Icon</source>
        <translation type="unfinished">คำอธิบายเหนือสัญลักษณ์</translation>
    </message>
    <message>
        <source>Caption right to Icon</source>
        <translation type="unfinished">คำอธิบายด้านขวามือของสัญลักษณ์</translation>
    </message>
    <message>
        <source>Caption left to Icon</source>
        <translation type="unfinished">คำอธิบายด้านซ้ายมือของสัญลักษณ์</translation>
    </message>
    <message>
        <source>Caption overlays Icon</source>
        <translation type="unfinished">คำอธิบายพื้นหลังสัญลักษณ์</translation>
    </message>
    <message>
        <source>Scale:</source>
        <translation type="unfinished">สามเหลี่ยม:</translation>
    </message>
    <message>
        <source>Always</source>
        <translation type="unfinished">ตลอด</translation>
    </message>
    <message>
        <source>When Icon is too big</source>
        <translation type="unfinished">When Icon is too big</translation>
    </message>
    <message>
        <source>Never</source>
        <translation type="unfinished">ไม่เคย</translation>
    </message>
    <message>
        <source>Scale How:</source>
        <translation type="unfinished">Scale How:</translation>
    </message>
    <message>
        <source>Proportional</source>
        <translation type="unfinished">สัดส่วน</translation>
    </message>
    <message>
        <source>Non Proportional</source>
        <translation type="unfinished">ไม่ตรงตามสัดส่วน</translation>
    </message>
    <message>
        <source>Icon</source>
        <translation type="unfinished">สัญลักษณ์</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">ตกลง</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
    <message>
        <source>Reset</source>
        <translation>ตั้งค่าใหม่</translation>
    </message>
    <message>
        <source>When Icon is too small</source>
        <translation type="unfinished">เมื่อสัญลักษณ์เล็กมาก</translation>
    </message>
</context>
<context>
    <name>CMSPrefs</name>
    <message>
        <source>Color Management Settings</source>
        <translation type="obsolete">Colour Management Settings</translation>
    </message>
    <message>
        <source>System Profiles</source>
        <translation type="unfinished">ระบบข้อมูล</translation>
    </message>
    <message>
        <source>Rendering Intents</source>
        <translation type="unfinished">ตอบใจความ</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="unfinished">Perceptual</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="unfinished">Relative Colourimetric</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished">Saturation</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="unfinished">Absolute Colourimetric</translation>
    </message>
    <message>
        <source>Default color profile for imported images</source>
        <translation type="obsolete">Default colour profile for imported images</translation>
    </message>
    <message>
        <source>Default color profile for solid colors on the page</source>
        <translation type="unfinished">Default colour profile for solid colours on the page</translation>
    </message>
    <message>
        <source>Color profile that you have generated or received from the manufacturer.
This profile should be specific to your monitor and not a generic profile (i.e. sRGB).</source>
        <translation type="unfinished">Colour profile that you have generated or received from the manufacturer.
This profile should be specific to your monitor and not a generic profile (i.e. sRGB).</translation>
    </message>
    <message>
        <source>Color profile for your printer model from the manufacturer.
This profile should be specific to your printer and not a generic profile (i.e. sRGB).</source>
        <translation type="unfinished">Colour profile for your printer model from the manufacturer.
This profile should be specific to your printer and not a generic profile (i.e. sRGB).</translation>
    </message>
    <message>
        <source>Black Point Compensation is a method of improving contrast in photos.
It is recommended that you enable this if you have photos in your document.</source>
        <translation type="unfinished">Black Point Compensation is a method of improving contrast in photos.
It is recommended that you enable this if you have photos in your document.</translation>
    </message>
    <message>
        <source>Default rendering intent for your monitor. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation type="unfinished">Default rendering intent for your monitor. Unless you know why to change it,
Relative Colourimetric or Perceptual should be chosen.</translation>
    </message>
    <message>
        <source>Default rendering intent for your printer. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation type="unfinished">Default rendering intent for your printer. Unless you know why to change it,
Relative Colourimetric or Perceptual should be chosen.</translation>
    </message>
    <message>
        <source>Enable &apos;soft proofing&apos; of how your document colors will print,
based on the chosen printer profile.</source>
        <translation type="unfinished">Enable &apos;soft proofing&apos; of how your document colours will print,
based on the chosen printer profile.</translation>
    </message>
    <message>
        <source>Method of showing colors on the screen which may not print properly.
This requires very accurate profiles and serves only as a warning.</source>
        <translation type="unfinished">Method of showing colours on the screen which may not print properly.
This requires very accurate profiles and serves only as a warning.</translation>
    </message>
    <message>
        <source>&amp;Activate Color Management</source>
        <translation type="unfinished">&amp;Activate Colour Management</translation>
    </message>
    <message>
        <source>&amp;Pictures:</source>
        <translation type="obsolete">&amp;Pictures:</translation>
    </message>
    <message>
        <source>&amp;Solid Colors:</source>
        <translation type="unfinished">รวมสี:</translation>
    </message>
    <message>
        <source>&amp;Monitor:</source>
        <translation type="unfinished">จอ:</translation>
    </message>
    <message>
        <source>P&amp;rinter:</source>
        <translation type="unfinished">ปริ้นเตอร์:</translation>
    </message>
    <message>
        <source>M&amp;onitor:</source>
        <translation type="unfinished">จอ:</translation>
    </message>
    <message>
        <source>Pr&amp;inter:</source>
        <translation type="unfinished">พริ้นเตอร์:</translation>
    </message>
    <message>
        <source>Sim&amp;ulate Printer on the Screen</source>
        <translation type="unfinished">เปลี่ยนสี พริ้นเตอร์บนฉาก</translation>
    </message>
    <message>
        <source>Mark Colors out of &amp;Gamut</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use &amp;Blackpoint Compensation</source>
        <translation type="unfinished">Use &amp;Blackpoint Compensation</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>&amp;RGB Pictures:</source>
        <translation type="obsolete">รูป อาร์จีบี </translation>
    </message>
    <message>
        <source>&amp;CMYK Pictures:</source>
        <translation type="obsolete">รูป ซีเอ็มวายเค</translation>
    </message>
    <message>
        <source>Default color profile for imported CMYK images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default color profile for imported RGB images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;RGB Images:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;CMYK Images:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CMYKChoose</name>
    <message>
        <source>Edit Color</source>
        <translation type="unfinished">แก้ไขสี</translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation type="unfinished">CMYK</translation>
    </message>
    <message>
        <source>RGB</source>
        <translation type="unfinished">RGB</translation>
    </message>
    <message>
        <source>Web Safe RGB</source>
        <translation type="unfinished">ป้องกัน เวป RGB</translation>
    </message>
    <message>
        <source>New</source>
        <translation type="unfinished">ใหม่</translation>
    </message>
    <message>
        <source>Old</source>
        <translation type="unfinished">เก่า</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">OK</translation>
    </message>
    <message>
        <source>C:</source>
        <translation type="unfinished">C:</translation>
    </message>
    <message>
        <source>M:</source>
        <translation type="unfinished">M:</translation>
    </message>
    <message>
        <source>Y:</source>
        <translation type="unfinished">Y:</translation>
    </message>
    <message>
        <source>K:</source>
        <translation type="unfinished">K:</translation>
    </message>
    <message>
        <source>Dynamic Color Bars</source>
        <translation type="unfinished">Dynamic Colour Bars</translation>
    </message>
    <message>
        <source>Static Color Bars</source>
        <translation type="unfinished">Static Colour Bars</translation>
    </message>
    <message>
        <source>R:</source>
        <translation type="unfinished">R:</translation>
    </message>
    <message>
        <source>G:</source>
        <translation type="unfinished">G:</translation>
    </message>
    <message>
        <source>B:</source>
        <translation type="unfinished">B:</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Warning</translation>
    </message>
    <message>
        <source>Name of the Color is not unique</source>
        <translation type="obsolete">Name of the colour is not unique</translation>
    </message>
    <message>
        <source>HSV-Colormap</source>
        <translation type="unfinished">HSV-Colourmap</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished">&amp;ชื่อ:</translation>
    </message>
    <message>
        <source>Color &amp;Model</source>
        <translation type="unfinished">สี &amp;หุ่น</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>You cannot create a color named &quot;%1&quot;.
It&apos;s a reserved name for transparent color</source>
        <translation type="obsolete">You cannot create a colour named &quot;%1&quot;.
It&apos;s a reserved name for transparent colour</translation>
    </message>
    <message>
        <source>Is Spot Color</source>
        <translation type="unfinished">จุดสี</translation>
    </message>
    <message>
        <source>Is Registration Color</source>
        <translation type="unfinished">ลงทะเบียนสี</translation>
    </message>
    <message>
        <source>You cannot create a color named &quot;%1&quot;.
It is a reserved name for transparent color</source>
        <translation type="unfinished">คุณไม่สามารถจัดการสีที่ชื่อ %1 มันเป็นชื่อสำรองที่ไม่มีสี</translation>
    </message>
    <message>
        <source>Name of the color is not unique</source>
        <translation type="unfinished">ชื่อมีสี ไม่ได้มีชื่อเดียว</translation>
    </message>
    <message>
        <source>Choosing this will enable printing this on all plates. Registration colors are used for printer marks such as crop marks, registration marks and the like. These are not typically used in the layout itself.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choosing this will make this color a spot color, thus creating another spot when creating plates or separations. This is used most often when a logo or other color needs exact representation or cannot be replicated with CMYK inks. Metallic and fluorescent inks are good examples which cannot be easily replicated with CMYK inks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You cannot create a color without a name
Please give it a name</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ChTable</name>
    <message>
        <source>You can see a thumbnail if you press and hold down the right mouse button. The Insert key inserts a Glyph into the Selection below and the Delete key removes the last inserted one</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CharSelect</name>
    <message>
        <source>Select Character:</source>
        <translation type="unfinished">เลือกอักขระ:</translation>
    </message>
    <message>
        <source>Font:</source>
        <translation type="unfinished">แบบอักษร:</translation>
    </message>
    <message>
        <source>Character Class:</source>
        <translation type="unfinished">ลักษณะชั้น</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="unfinished">แทรก</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished">ล้าง</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">ปิด</translation>
    </message>
    <message>
        <source>Insert the characters at the cursor in the text</source>
        <translation type="unfinished">แทรกอักขระ ณ ตำแหน่งเคอร์เซอร์</translation>
    </message>
    <message>
        <source>Delete the current selection(s).</source>
        <translation type="unfinished">ลบข้อมูลที่เลือก.</translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing.</source>
        <translation type="obsolete">Close this dialog and return to text editing.</translation>
    </message>
    <message>
        <source>Full Character Set</source>
        <translation type="unfinished">ชุดเต็มอักขระ</translation>
    </message>
    <message>
        <source>Basic Latin</source>
        <translation type="unfinished">ลาตินพื้นฐาน</translation>
    </message>
    <message>
        <source>Latin-1 Supplement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Latin Extended-A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Latin Extended-B</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>General Punctuation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Super- and Subscripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Currency Symbols</source>
        <translation type="unfinished">สัญลักษณ์ปัจจุบัน</translation>
    </message>
    <message>
        <source>Letterlike Symbols</source>
        <translation type="unfinished">สัญลักษณ์ตัวอักษร</translation>
    </message>
    <message>
        <source>Number Forms</source>
        <translation type="unfinished">รูปแบบตัวเลข</translation>
    </message>
    <message>
        <source>Arrows</source>
        <translation type="unfinished">หัวลูกศร</translation>
    </message>
    <message>
        <source>Mathematical Operators</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Box Drawing</source>
        <translation type="unfinished">กล่องภาพวาด</translation>
    </message>
    <message>
        <source>Block Elements</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Geometric Shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Miscellaneous Symbols</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dingbats</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Small Form Variants</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ligatures</source>
        <translation type="unfinished">อีกษรควบ</translation>
    </message>
    <message>
        <source>Specials</source>
        <translation type="unfinished">พิเศษ</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation type="unfinished">กรีก</translation>
    </message>
    <message>
        <source>Greek Extended</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cyrillic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cyrillic Supplement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arabic</source>
        <translation type="unfinished">อาราบิค</translation>
    </message>
    <message>
        <source>Arabic Extended A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arabic Extended B</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hebrew</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Insert Code:</source>
        <translation type="unfinished">แทรกรหัส</translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing</source>
        <translation type="unfinished">ปิดการสนทนา และกลับไปยังข้อความที่ต้องแก้ไข</translation>
    </message>
    <message>
        <source>Type in a four digit unicode value directly here</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CheckDocument</name>
    <message>
        <source>Glyphs missing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text overflow</source>
        <translation type="unfinished">ข้อความล้น</translation>
    </message>
    <message>
        <source>Object is not on a Page</source>
        <translation type="unfinished">วัตถุไม่อยู่บนหน้ากระดาษ</translation>
    </message>
    <message>
        <source>Missing Image</source>
        <translation type="unfinished">ไม่มีรูป</translation>
    </message>
    <message>
        <source>Image has a DPI-Value less than %1 DPI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object has transparency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object is a PDF Annotation or Field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object is a placed PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished">เอกสาร</translation>
    </message>
    <message>
        <source>No Problems found</source>
        <translation type="unfinished">ไม่พบปัญหา</translation>
    </message>
    <message>
        <source>Page </source>
        <translation type="unfinished">หน้า</translation>
    </message>
    <message>
        <source>Free Objects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Problems found</source>
        <translation type="unfinished">พบปัญหา</translation>
    </message>
    <message>
        <source>Preflight Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Items</source>
        <translation type="unfinished">ไอเท็ม</translation>
    </message>
    <message>
        <source>Problems</source>
        <translation type="unfinished">ปัญหา</translation>
    </message>
    <message>
        <source>Current Profile:</source>
        <translation type="unfinished">โปรไฟล์ปัจจุบัน</translation>
    </message>
    <message>
        <source>&amp;Ignore Errors</source>
        <translation type="unfinished">ละทิ้งข้อผิดพลาด</translation>
    </message>
    <message>
        <source>Annotation uses a non TrueType font</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ChooseStyles</name>
    <message>
        <source>Choose Styles</source>
        <translation type="unfinished">เลือกลักษณะ</translation>
    </message>
    <message>
        <source>Available Styles</source>
        <translation type="unfinished">ลักษณะที่ใช้ได้</translation>
    </message>
</context>
<context>
    <name>CollectForOutput</name>
    <message>
        <source>Choose a Directory</source>
        <translation type="unfinished">เลือกไดเรกทอรี่</translation>
    </message>
    <message>
        <source>Collecting...</source>
        <translation type="unfinished">รวม</translation>
    </message>
    <message>
        <source>Cannot collect the file: 
%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">เตือน</translation>
    </message>
    <message>
        <source>Cannot collect all files for output for file:
%1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ColorManager</name>
    <message>
        <source>Colors</source>
        <translation type="unfinished">สี</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished">นำเข้า</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished">ใหม่</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished">แก้ไข</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="unfinished">ฉบับคู่</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>&amp;Remove Unused</source>
        <translation type="unfinished">ที่ีไม่ได้ใช้เอาออก</translation>
    </message>
    <message>
        <source>Color Sets</source>
        <translation type="unfinished">ตั้งค่าสี</translation>
    </message>
    <message>
        <source>Current Color Set:</source>
        <translation type="unfinished">ตั้งค่าสีปัจจุบัน:</translation>
    </message>
    <message>
        <source>&amp;Save Color Set</source>
        <translation type="unfinished">บันทึกการตั้งค่าสี</translation>
    </message>
    <message>
        <source>Choose a color set to load</source>
        <translation type="unfinished">เลือกสีที่ตั้งค่าไปโหลด</translation>
    </message>
    <message>
        <source>Save the current color set</source>
        <translation type="unfinished">บันทึกการตั้งค่าสีปัจจุบัน</translation>
    </message>
    <message>
        <source>Remove unused colors from current document&apos;s color set</source>
        <translation type="unfinished">เอาสีที่ไม่ได้ใช้ออก จาก การตั้งค่าสีเอกสารปัจจุบัน</translation>
    </message>
    <message>
        <source>Import colors to the current set from an existing document</source>
        <translation type="unfinished">ตั้งค่าสีนำเข้าล่าสุดจากเอกสารที่ยังอยู่</translation>
    </message>
    <message>
        <source>Create a new color within the current set</source>
        <translation type="unfinished">สร้างสีใหม่ภายในการตั้งค่าปัจจุบัน</translation>
    </message>
    <message>
        <source>Edit the currently selected color</source>
        <translation type="unfinished">แก้ไขสีที่เลือกล่าสุด</translation>
    </message>
    <message>
        <source>Make a copy of the currently selected color</source>
        <translation type="unfinished">ทำการคัดลอกสีที่เลือกปัจจขุบัน</translation>
    </message>
    <message>
        <source>Delete the currently selected color</source>
        <translation type="unfinished">ลบสีที่เลือกปัจจุบัน</translation>
    </message>
    <message>
        <source>Make the current colorset the default color set</source>
        <translation type="unfinished">สร้างการตั้งค่าสีปัจจุบันผิดพลาด</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished">ชื่อ:</translation>
    </message>
    <message>
        <source>Choose a Name</source>
        <translation type="unfinished">เลือกชื่อ</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>เปิด</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="unfinished">เอกสาร (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="unfinished">เอกสาร (*.sla *.scd);;แฟ้มทั้งหมด (*)</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="unfinished">คัดลอก %1</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation type="unfinished">สีใหม่</translation>
    </message>
    <message>
        <source>If color management is enabled, a triangle warning indicator is a warning the the color maybe outside of the color gamut of the current printer profile selected. What this means is the color many not be able to be printed exactly as displayed on screen. Spot colors are indicated by a red circle. Registration colors will have a registration mark next to the color. More hints about gamut warnings are in the online help under Color Management.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ColorWheel</name>
    <message>
        <source>Monochromatic</source>
        <translation type="unfinished">โมโนโครเมติค</translation>
    </message>
    <message>
        <source>Analogous</source>
        <translation type="unfinished">อนาล๊อค</translation>
    </message>
    <message>
        <source>Complementary</source>
        <translation type="unfinished">องค์ประกอบ</translation>
    </message>
    <message>
        <source>Split Complementary</source>
        <translation type="unfinished">แยกองค์ประกอบ</translation>
    </message>
    <message>
        <source>Triadic</source>
        <translation type="unfinished">สามเหลี่ยม</translation>
    </message>
    <message>
        <source>Tetradic (Double Complementary)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Base Color</source>
        <translation type="unfinished">สีหลัก</translation>
    </message>
    <message>
        <source>Monochromatic Light</source>
        <translation type="unfinished">โมโนโครมิค ไลท์</translation>
    </message>
    <message>
        <source>Monochromatic Dark</source>
        <translation type="unfinished">โมโนโ๕รมิค ดาร์ค</translation>
    </message>
    <message>
        <source>1st. Analogous</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>2nd. Analogous</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>1st. Split</source>
        <translation type="unfinished">แยก1</translation>
    </message>
    <message>
        <source>2nd. Split</source>
        <translation type="unfinished">แยก2</translation>
    </message>
    <message>
        <source>3rd. Split</source>
        <translation type="unfinished">แยก3</translation>
    </message>
    <message>
        <source>4th. Split</source>
        <translation type="unfinished">แยก4</translation>
    </message>
    <message>
        <source>1st. Triadic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>2nd. Triadic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>1st. Tetradic (base opposite)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>2nd. Tetradic (angle)</source>
        <translation type="unfinished">มุมสามเหลี่ยม</translation>
    </message>
    <message>
        <source>3rd. Tetradic (angle opposite)</source>
        <translation type="unfinished">มุมตรงข้างสามเหลี่ยม</translation>
    </message>
</context>
<context>
    <name>ColorWheelDialog</name>
    <message>
        <source>Cr&amp;eate color...</source>
        <translation type="unfinished">ออกแบบสี</translation>
    </message>
    <message>
        <source>C&amp;olor Components...</source>
        <translation type="unfinished">ส่วนประกอบของสี</translation>
    </message>
    <message>
        <source>&amp;Import existing color...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Merge colors</source>
        <translation type="unfinished">ผสมสี</translation>
    </message>
    <message>
        <source>&amp;Replace colors</source>
        <translation type="unfinished">สีแทนที่</translation>
    </message>
    <message>
        <source>E&amp;xit</source>
        <translation type="unfinished">ออก</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation type="unfinished">สี</translation>
    </message>
    <message>
        <source>Normal Vision</source>
        <translation type="unfinished">ปกติ</translation>
    </message>
    <message>
        <source>Protanopia (Red)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Deuteranopia (Green)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tritanopia (Blue)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Full Color Blindness</source>
        <translation type="unfinished">ไม่เติมสี</translation>
    </message>
    <message>
        <source>Vision Defect:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Wheel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished">สี</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>ชื่อ</translation>
    </message>
    <message>
        <source>C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>K</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select Method:</source>
        <translation type="unfinished">เลือกเมโทรด</translation>
    </message>
    <message>
        <source>Angle (0 - 90 degrees):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Merge Colors</source>
        <translation type="unfinished">สีผสม</translation>
    </message>
    <message>
        <source>&amp;Replace Colors</source>
        <translation type="unfinished">แทนที่สี</translation>
    </message>
    <message>
        <source>Merge created colors into the document colors</source>
        <translation type="unfinished">ออกแบบสีผสมไปยังเอกสารสี</translation>
    </message>
    <message>
        <source>Replace created colors in the document colors</source>
        <translation type="unfinished">ออกแบบสีแทนที่ไปยังเอกสารสี</translation>
    </message>
    <message>
        <source>Leave colors untouched</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Difference between the selected value and the counted ones. Refer to documentation for more information.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Click the wheel to get the base color. It is hue in HSV mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample color scheme</source>
        <translation type="unfinished">ตัวอย่างสี</translation>
    </message>
    <message>
        <source>Select one of the methods to create a color scheme. Refer to documentation for more information.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colors of your chosen color scheme</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Simulate common vision defects here. Select type of the defect.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Merging colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error: </source>
        <translation type="unfinished">ผิดพลาด</translation>
    </message>
    <message>
        <source>Color %1 exists already!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color %1 appended.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Now opening the color manager.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Merging</source>
        <translation type="unfinished">สีผสม</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation type="unfinished">สีใหม่</translation>
    </message>
    <message>
        <source>Unable to find the requested color. You have probably selected black, gray or white. There is no way to process this color.</source>
        <translation type="unfinished">ไม่สามารถหาสีที่ต้องการได้.คุณน่าจะเลือกสีดำ เทา หรือขาว.สีไม่สามารถดำเนินการต่อไปได้</translation>
    </message>
</context>
<context>
    <name>ColorWheelPlugin</name>
    <message>
        <source>&amp;Color Wheel...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color setting helper</source>
        <translation type="unfinished">ตัวช่วยตั้งค่าสี</translation>
    </message>
    <message>
        <source>Color selector with color theory included.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CommonStrings</name>
    <message>
        <source>&amp;Apply</source>
        <translation type="unfinished">สมัคร</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished">ตกลง</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished">บันทึก</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">คำเตือน</translation>
    </message>
    <message>
        <source>None</source>
        <comment>color name</comment>
        <translation type="unfinished">ไม่มี</translation>
    </message>
    <message>
        <source>Custom</source>
        <comment>CommonStrings, custom page size</comment>
        <translation type="unfinished">กำหนด</translation>
    </message>
    <message>
        <source>Single Page</source>
        <translation type="unfinished">หน้าเดียว</translation>
    </message>
    <message>
        <source>Double Sided</source>
        <translation type="unfinished">สองหน้า</translation>
    </message>
    <message>
        <source>3-Fold</source>
        <translation type="unfinished">3 พับ</translation>
    </message>
    <message>
        <source>4-Fold</source>
        <translation type="unfinished">4 พับ</translation>
    </message>
    <message>
        <source>Left Page</source>
        <translation type="unfinished">หน้าซ้าย</translation>
    </message>
    <message>
        <source>Middle</source>
        <translation type="unfinished">กลาง</translation>
    </message>
    <message>
        <source>Middle Left</source>
        <translation type="unfinished">กลางซ้าย</translation>
    </message>
    <message>
        <source>Middle Right</source>
        <translation type="unfinished">กลางขวา</translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation type="unfinished">หน้าขวา</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">ปกติ</translation>
    </message>
    <message>
        <source>Normal Left</source>
        <translation type="unfinished">ปกติซ้าย</translation>
    </message>
    <message>
        <source>Normal Middle</source>
        <translation type="unfinished">ปกติกลาง</translation>
    </message>
    <message>
        <source>Normal Right</source>
        <translation type="unfinished">ปกติขวา</translation>
    </message>
    <message>
        <source>Monday</source>
        <translation type="unfinished">จันทร์</translation>
    </message>
    <message>
        <source>Tuesday</source>
        <translation type="unfinished">อังคาร</translation>
    </message>
    <message>
        <source>Wednesday</source>
        <translation type="unfinished">พุธ</translation>
    </message>
    <message>
        <source>Thursday</source>
        <translation type="unfinished">พฤหัสบดี</translation>
    </message>
    <message>
        <source>Friday</source>
        <translation type="unfinished">ศุกร์</translation>
    </message>
    <message>
        <source>Saturday</source>
        <translation type="unfinished">เสาร์</translation>
    </message>
    <message>
        <source>Sunday</source>
        <translation type="unfinished">อาทิตย์</translation>
    </message>
    <message>
        <source>January</source>
        <translation type="unfinished">มกราคม</translation>
    </message>
    <message>
        <source>February</source>
        <translation type="unfinished">กุมภาพันธ์</translation>
    </message>
    <message>
        <source>March</source>
        <translation type="unfinished">มีนาคม</translation>
    </message>
    <message>
        <source>April</source>
        <translation type="unfinished">เมษายน</translation>
    </message>
    <message>
        <source>May</source>
        <translation type="unfinished">พฤษภาคม</translation>
    </message>
    <message>
        <source>June</source>
        <translation type="unfinished">มิถุนายน</translation>
    </message>
    <message>
        <source>July</source>
        <translation type="unfinished">กรกฎาคม</translation>
    </message>
    <message>
        <source>August</source>
        <translation type="unfinished">สิงหาคม</translation>
    </message>
    <message>
        <source>September</source>
        <translation type="unfinished">กันยายน</translation>
    </message>
    <message>
        <source>October</source>
        <translation type="unfinished">ตุลาคม</translation>
    </message>
    <message>
        <source>November</source>
        <translation type="unfinished">พฤศจิกายน</translation>
    </message>
    <message>
        <source>December</source>
        <translation type="unfinished">ธันวาคม</translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Cpalette</name>
    <message>
        <source>Normal</source>
        <translation type="unfinished">ปกติ</translation>
    </message>
    <message>
        <source>Horizontal Gradient</source>
        <translation type="unfinished">Horizontal Gradient</translation>
    </message>
    <message>
        <source>Vertical Gradient</source>
        <translation type="unfinished">Vertical Gradient</translation>
    </message>
    <message>
        <source>Diagonal Gradient</source>
        <translation type="unfinished">Diagonal Gradient</translation>
    </message>
    <message>
        <source>Cross Diagonal Gradient</source>
        <translation type="unfinished">Cross Diagonal Gradient</translation>
    </message>
    <message>
        <source>Radial Gradient</source>
        <translation type="unfinished">Radial Gradient</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation type="unfinished">ทึบ:</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished">เปอร์เซ็นต์</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation type="unfinished">ดำ:</translation>
    </message>
    <message>
        <source>Edit Line Color Properties</source>
        <translation type="unfinished">แก้ไขคุณสมบัติเส้นสี</translation>
    </message>
    <message>
        <source>Edit Fill Color Properties</source>
        <translation type="unfinished">แก้ไขคุณสมบัติสีทั้งหมด</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation type="unfinished">สีน้ำ</translation>
    </message>
    <message>
        <source>Normal or gradient fill method</source>
        <translation type="unfinished">Normal or gradient fill method</translation>
    </message>
    <message>
        <source>Set the transparency for the color selected</source>
        <translation type="unfinished">Set the transparency for the colour selected</translation>
    </message>
    <message>
        <source>Color of selected object</source>
        <translation type="obsolete">Colour of selected object</translation>
    </message>
    <message>
        <source>Free linear Gradient</source>
        <translation type="unfinished">Free linear Gradient</translation>
    </message>
    <message>
        <source>Free radial Gradient</source>
        <translation type="unfinished">Free radial Gradient</translation>
    </message>
    <message>
        <source>X1:</source>
        <translation type="unfinished">X1:</translation>
    </message>
    <message>
        <source>Y1:</source>
        <translation type="unfinished">Y1:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished">pt</translation>
    </message>
    <message>
        <source>X2:</source>
        <translation type="unfinished">X2:</translation>
    </message>
    <message>
        <source>Y2:</source>
        <translation type="unfinished">Y2:</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Move Vector</source>
        <translation type="unfinished">ย้ายเส้นแสดงระยะ</translation>
    </message>
    <message>
        <source>Move the start of the gradient vector with the left mouse button pressed and move the end of the gradient vector with the right mouse button pressed</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CsvDialog</name>
    <message>
        <source>CSV Importer Options</source>
        <translation type="unfinished">CSV นำเข้าตัวเลือก</translation>
    </message>
    <message>
        <source>Field delimiter:</source>
        <translation type="unfinished">Field delimiter:</translation>
    </message>
    <message>
        <source>(TAB)</source>
        <translation type="unfinished">(TAB)</translation>
    </message>
    <message>
        <source>Value delimiter:</source>
        <translation type="unfinished">กำหนดค่า:</translation>
    </message>
    <message>
        <source>First row is a header</source>
        <translation type="unfinished">First row is a header</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">ตกลง</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>None</source>
        <comment>delimiter</comment>
        <translation type="unfinished">ไม่มี</translation>
    </message>
</context>
<context>
    <name>CupsOptions</name>
    <message>
        <source>Printer Options</source>
        <translation type="unfinished">ตัวเลือกเครื่องพิมพ์</translation>
    </message>
    <message>
        <source>Option</source>
        <translation type="unfinished">ตัวเลือก</translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="unfinished">ค่า</translation>
    </message>
    <message>
        <source>Page Set</source>
        <translation type="unfinished">ตั้งหน้า</translation>
    </message>
    <message>
        <source>All Pages</source>
        <translation type="unfinished">ทุกหน้า</translation>
    </message>
    <message>
        <source>Even Pages only</source>
        <translation type="unfinished">หน้าคู่เท่านั้น</translation>
    </message>
    <message>
        <source>Odd Pages only</source>
        <translation type="unfinished">หน้าคี่เท่านั้น</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation type="unfinished">กระจก</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="unfinished">ไม่</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="unfinished">ใช่</translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation type="unfinished">การวางแนว</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished">แนวตั้ง</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished">แนวนอน</translation>
    </message>
    <message>
        <source>N-Up Printing</source>
        <translation type="unfinished">N-Up Printing</translation>
    </message>
    <message>
        <source>Page per Sheet</source>
        <translation type="unfinished">Page per Sheet</translation>
    </message>
    <message>
        <source>Pages per Sheet</source>
        <translation type="unfinished">Pages per Sheet</translation>
    </message>
    <message>
        <source>This panel displays various CUPS options when printing. 
The exact parameters available will depend on your printer driver.
You can confirm CUPS support by selecting Help &gt; About.
Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support.
Missing library support is indicated by a *</source>
        <translation type="obsolete">This panel displays various CUPS options when printing. 
The exact parameters available will depend on your printer driver.
You can confirm CUPS support by selecting Help &gt; About.
Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support.
Missing library support is indicated by a *</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>This panel displays various CUPS options when printing. The exact parameters available will depend on your printer driver. You can confirm CUPS support by selecting Help &gt; About. Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support. Missing library support is indicated by a *</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CustomFDialog</name>
    <message>
        <source>Encoding:</source>
        <translation type="unfinished">Encoding:</translation>
    </message>
    <message>
        <source>Moves to your Document Directory.
This can be set in the Preferences.</source>
        <translation type="unfinished">ย้ายไปยังเอกสารไดเร็คทอรี่ของคุณ.สามารถตั้งค่าการนำเสนอได้</translation>
    </message>
    <message>
        <source>&amp;Compress File</source>
        <translation type="unfinished">ย่อแฟ้ม</translation>
    </message>
    <message>
        <source>&amp;Include Fonts</source>
        <translation type="unfinished">รวมตัวอักษร</translation>
    </message>
</context>
<context>
    <name>CwSetColor</name>
    <message>
        <source>Set Color Components</source>
        <translation type="unfinished">ตั้งค่าส่วนประกอบสี</translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation type="unfinished">ซีเอ็มวายเค</translation>
    </message>
    <message>
        <source>RGB</source>
        <translation type="unfinished">อาร์จีบี</translation>
    </message>
    <message>
        <source>HSV</source>
        <translation>เฮขเอสวี</translation>
    </message>
    <message>
        <source>H:</source>
        <translation type="unfinished">เฮช</translation>
    </message>
    <message>
        <source>S:</source>
        <translation type="unfinished">เอส</translation>
    </message>
    <message>
        <source>V:</source>
        <translation type="unfinished">วี</translation>
    </message>
    <message>
        <source>R:</source>
        <translation type="unfinished">อาร์</translation>
    </message>
    <message>
        <source>G:</source>
        <translation type="unfinished">จี</translation>
    </message>
    <message>
        <source>B:</source>
        <translation type="unfinished">บี</translation>
    </message>
    <message>
        <source>C:</source>
        <translation type="unfinished">ซี</translation>
    </message>
    <message>
        <source>M:</source>
        <translation type="unfinished">เอ็ม</translation>
    </message>
    <message>
        <source>Y:</source>
        <translation type="unfinished">วาย:</translation>
    </message>
    <message>
        <source>K:</source>
        <translation type="unfinished">เค</translation>
    </message>
    <message>
        <source>Set &amp;RGB</source>
        <translation type="unfinished">ตั้งค่า อาร์จีบี</translation>
    </message>
    <message>
        <source>Set C&amp;MYK</source>
        <translation type="unfinished">ตั้งค่า ซีเอ็มวายเค</translation>
    </message>
    <message>
        <source>Set &amp;HSV</source>
        <translation type="unfinished">ตั้งค่า เฮชเอสวี</translation>
    </message>
</context>
<context>
    <name>DeferredTask</name>
    <message>
        <source>Cancelled by user</source>
        <translation type="unfinished">ยกเลิกโดยผู้ใช้</translation>
    </message>
</context>
<context>
    <name>DelColor</name>
    <message>
        <source>Delete Color</source>
        <translation type="unfinished">ลบสี</translation>
    </message>
    <message>
        <source>?</source>
        <translation type="obsolete">?</translation>
    </message>
    <message>
        <source>Replace it with:</source>
        <translation type="obsolete">Replace it with:</translation>
    </message>
    <message>
        <source>Delete color:</source>
        <translation type="obsolete">Delete colour:</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>Delete Color:</source>
        <translation type="unfinished">ลบสี</translation>
    </message>
    <message>
        <source>Replace With:</source>
        <translation type="unfinished">แทนที่</translation>
    </message>
</context>
<context>
    <name>DelPages</name>
    <message>
        <source>Delete Pages</source>
        <translation type="unfinished">ลบหน้ากระดาษ</translation>
    </message>
    <message>
        <source>Delete from:</source>
        <translation type="obsolete">Delete from:</translation>
    </message>
    <message>
        <source>to:</source>
        <translation>ถึง:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>Delete From:</source>
        <translation type="unfinished">ลบจาก</translation>
    </message>
</context>
<context>
    <name>DelStyle</name>
    <message>
        <source>Delete Style</source>
        <translation type="unfinished">ลบลักษณะ</translation>
    </message>
    <message>
        <source>Delete Style:</source>
        <translation type="unfinished">ลบลักษณะ</translation>
    </message>
    <message>
        <source>Replace With:</source>
        <translation type="unfinished">แทนที่กับ</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation type="unfinished">ไม่มีลักษณะ</translation>
    </message>
</context>
<context>
    <name>DmF</name>
    <message>
        <source>Missing Font</source>
        <translation type="obsolete">Missing Font</translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation type="obsolete">The Font %1 is not installed.</translation>
    </message>
    <message>
        <source>Use</source>
        <translation type="obsolete">Use</translation>
    </message>
    <message>
        <source>instead</source>
        <translation type="obsolete">instead</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">OK</translation>
    </message>
</context>
<context>
    <name>DocIm</name>
    <message>
        <source>Importing failed</source>
        <translation type="unfinished">ข้อมูลเข้าล้มเหลว</translation>
    </message>
    <message>
        <source>Importing Word document failed 
%1</source>
        <translation type="unfinished">ข้อมูลเอกสารเข้าล้มเหลว 1เปอร์เซ็นต์</translation>
    </message>
</context>
<context>
    <name>DocInfos</name>
    <message>
        <source>Document Information</source>
        <translation type="unfinished">เอกสารแนะนำ</translation>
    </message>
    <message>
        <source>&amp;Title:</source>
        <translation type="unfinished">ชื่อเรื่อง:</translation>
    </message>
    <message>
        <source>&amp;Author:</source>
        <translation type="unfinished">ผู้เขียน:</translation>
    </message>
    <message>
        <source>&amp;Keywords:</source>
        <translation type="unfinished">คำสำคัญ:</translation>
    </message>
    <message>
        <source>Descri&amp;ption:</source>
        <translation type="unfinished">ลักษณะ:</translation>
    </message>
    <message>
        <source>P&amp;ublisher:</source>
        <translation type="unfinished">ผู้โฆษณา:</translation>
    </message>
    <message>
        <source>&amp;Contributors:</source>
        <translation type="unfinished">ผู้เขียน:</translation>
    </message>
    <message>
        <source>Dat&amp;e:</source>
        <translation type="unfinished">วัน:</translation>
    </message>
    <message>
        <source>T&amp;ype:</source>
        <translation type="unfinished">ชนิด:</translation>
    </message>
    <message>
        <source>F&amp;ormat:</source>
        <translation type="unfinished">ตั้งรูปใหม่:</translation>
    </message>
    <message>
        <source>Identi&amp;fier:</source>
        <translation type="unfinished">Identifier:</translation>
    </message>
    <message>
        <source>&amp;Source:</source>
        <translation type="unfinished">ที่มา:</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation type="unfinished">ภาษา:</translation>
    </message>
    <message>
        <source>&amp;Relation:</source>
        <translation type="unfinished">สัมพันธ์:</translation>
    </message>
    <message>
        <source>Co&amp;verage:</source>
        <translation type="unfinished">ครอบคลุม:</translation>
    </message>
    <message>
        <source>Ri&amp;ghts:</source>
        <translation type="unfinished">ถูก:</translation>
    </message>
    <message>
        <source>&amp;Document</source>
        <translation type="obsolete">&amp;Document</translation>
    </message>
    <message>
        <source>Further &amp;Information</source>
        <translation type="unfinished">Further &amp;Information</translation>
    </message>
    <message>
        <source>The person or organisation primarily responsible for making the content of the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation type="obsolete">The person or organisation primarily responsible for making the content of the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</translation>
    </message>
    <message>
        <source>A name given to the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation type="obsolete">A name given to the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</translation>
    </message>
    <message>
        <source>An account of the content of the document.
This field is for a brief description or abstract of the document. It is embedded in the PDF on export</source>
        <translation type="obsolete">An account of the content of the document.
This field is for a brief description or abstract of the document. It is embedded in the PDF on export</translation>
    </message>
    <message>
        <source>The topic of the content of the document.
This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</source>
        <translation type="obsolete">The topic of the content of the document.
This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</translation>
    </message>
    <message>
        <source>A person or organisation responsible for making the document available</source>
        <translation type="unfinished">A person or organisation responsible for making the document available</translation>
    </message>
    <message>
        <source>A person or organisation responsible for making contributions to the content of the document</source>
        <translation type="unfinished">A person or organisation responsible for making contributions to the content of the document</translation>
    </message>
    <message>
        <source>A date associated with an event in the life cycle of the document, in YYYY-MM-DD format, as per ISO 8601</source>
        <translation type="unfinished">A date associated with an event in the life cycle of the document, in YYYY-MM-DD format, as per ISO 8601</translation>
    </message>
    <message>
        <source>The nature or genre of the content of the document, eg. categories, functions, genres, etc</source>
        <translation type="unfinished">The nature or genre of the content of the document, eg. categories, functions, genres, etc</translation>
    </message>
    <message>
        <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting.
RFC2045,RFC2046 for MIME types are also useful here</source>
        <translation type="obsolete">The physical or digital manifestation of the document. Media type and dimensions would be worth noting.
RFC2045,RFC2046 for MIME types are also useful here</translation>
    </message>
    <message>
        <source>An unambiguous reference to the document within a given context such as ISBN or URI</source>
        <translation type="unfinished">An unambiguous reference to the document within a given context such as ISBN or URI</translation>
    </message>
    <message>
        <source>A reference to a document from which the present document is derived, eg. ISBN or URI</source>
        <translation type="unfinished">A reference to a document from which the present document is derived, eg. ISBN or URI</translation>
    </message>
    <message>
        <source>The language in which the content of the document is written, usually a ISO-639 language code
optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
        <translation type="obsolete">The language in which the content of the document is written, usually a ISO-639 language code
optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</translation>
    </message>
    <message>
        <source>A reference to a related document, possibly using a formal identifier such as a ISBN or URI</source>
        <translation type="unfinished">A reference to a related document, possibly using a formal identifier such as a ISBN or URI</translation>
    </message>
    <message>
        <source>The extent or scope of the content of the document, possibly including location, time and jurisdiction ranges</source>
        <translation type="unfinished">The extent or scope of the content of the document, possibly including location, time and jurisdiction ranges</translation>
    </message>
    <message>
        <source>Information about rights held in and over the document, eg. copyright, patent or trademark</source>
        <translation type="unfinished">Information about rights held in and over the document, eg. copyright, patent or trademark</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>Documen&amp;t</source>
        <translation type="unfinished">เอกสาร</translation>
    </message>
    <message>
        <source>The person or organisation primarily responsible for making the content of the document. This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A name given to the document. This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An account of the content of the document. This field is for a brief description or abstract of the document. It is embedded in the PDF on export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The topic of the content of the document. This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting. RFC2045,RFC2046 for MIME types are also useful here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The language in which the content of the document is written, usually a ISO-639 language code optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DocSections</name>
    <message>
        <source>Add a page numbering section to the document. The new section will be added after the currently selected section.</source>
        <translation type="unfinished">เพิ่มหมายเลขหน้ากระดาษที่เอกสาร.หัวข้อใหม่จะเพิ่มหลังจากที่เลือกหัวข้อปัจจุบัน</translation>
    </message>
    <message>
        <source>Delete the currently selected section.</source>
        <translation type="unfinished">ลบหัวข้อที่เลือกล่าสุด</translation>
    </message>
    <message>
        <source>1, 2, 3, ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>i, ii, iii, ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>I, II, III, ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>a, b, c, ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A, B, C, ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Name:&lt;/b&gt; Optional name for section eg. Index&lt;br/&gt;&lt;b&gt;Shown:&lt;/b&gt; Select to show the page numbers in this section if there is one or more text frames setup to do so.&lt;br/&gt;&lt;b&gt;From:&lt;/b&gt; The page index for this section to start at.&lt;br/&gt;&lt;b&gt;To:&lt;/b&gt; The page index for this section to stop at.&lt;br/&gt;&lt;b&gt;Style:&lt;/b&gt; Select the page number style to be used.&lt;br/&gt;&lt;b&gt;Start:&lt;/b&gt; The index within the Style&apos;s range to star at. Eg. If Start=2 and Style=a,b,c, ..., the numbers will begin at b. For the first section in the document this replaces the older First Page Number in the new file window.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Number Out Of Bounds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The value you have entered is outside the range of page numbers in the current document (%1-%2).</source>
        <translation type="unfinished">คำแนะนำเกี่ยวกับความถูกต้องยึดถือตามเอกสาร อีจี ลิขสิทธิ์ จดทะเบียน เครื่องหมายการค้า</translation>
    </message>
</context>
<context>
    <name>DocSectionsBase</name>
    <message>
        <source>Document Sections</source>
        <translation type="unfinished">เอกสารแต่ล่ะส่วน</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">ชื่อ</translation>
    </message>
    <message>
        <source>Shown</source>
        <translation>แสดง</translation>
    </message>
    <message>
        <source>From</source>
        <translation type="unfinished">จาก</translation>
    </message>
    <message>
        <source>To</source>
        <translation type="unfinished">ถึง</translation>
    </message>
    <message>
        <source>Style</source>
        <translation type="unfinished">ลักษณะ</translation>
    </message>
    <message>
        <source>Start</source>
        <translation type="unfinished">เริ่ม</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="unfinished">เพิ่ม</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DocumentItemAttributes</name>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>Relates To</source>
        <translation type="unfinished">อ้างถึง</translation>
    </message>
    <message>
        <source>Is Parent Of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Is Child Of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Text Frames</source>
        <translation type="unfinished">กรอบข้อความ</translation>
    </message>
    <message>
        <source>Image Frames</source>
        <translation type="unfinished">กรอบรูป</translation>
    </message>
    <message>
        <source>Boolean</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Integer</source>
        <translation type="unfinished">จำนวนเต็ม</translation>
    </message>
    <message>
        <source>String</source>
        <translation>แถว</translation>
    </message>
    <message>
        <source>None</source>
        <comment>relationship</comment>
        <translation type="unfinished">ไม่มี</translation>
    </message>
    <message>
        <source>None</source>
        <comment>auto add</comment>
        <translation type="unfinished">ไม่มี</translation>
    </message>
    <message>
        <source>None</source>
        <comment>types</comment>
        <translation type="unfinished">ไม่มี</translation>
    </message>
    <message>
        <source>Real Number</source>
        <translation type="unfinished">ตัวเลจจริง</translation>
    </message>
</context>
<context>
    <name>DocumentItemAttributesBase</name>
    <message>
        <source>Document Item Attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">ชื่อ</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished">ชนิด</translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Parameter</source>
        <translation type="unfinished">พารามิเตอร์</translation>
    </message>
    <message>
        <source>Relationship</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Relationship To</source>
        <translation type="unfinished">อ้างถึง</translation>
    </message>
    <message>
        <source>Auto Add To</source>
        <translation type="unfinished">เพิ่มอัตโนมัติ</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="unfinished">เพิ่ม</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished">คัดลอก</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished">เคลียร์</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Druck</name>
    <message>
        <source>Setup Printer</source>
        <translation type="unfinished">ตั้งค่าเครื่องพิมพ์</translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished">แฟ้ม</translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="unfinished">ตัวเลือก</translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished">ทั้งหมด</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished">บันทึกเป็น</translation>
    </message>
    <message>
        <source>Postscript-Files (*.ps);;All Files (*)</source>
        <translation type="obsolete">Postscript-Files (*.ps);;All Files (*)</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation type="unfinished">ฟ้า</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation type="unfinished">ม่วง</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation>เหลือง</translation>
    </message>
    <message>
        <source>Black</source>
        <translation type="unfinished">ดำ</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="unfinished">Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</translation>
    </message>
    <message>
        <source>Print Destination</source>
        <translation type="unfinished">Print Destination</translation>
    </message>
    <message>
        <source>&amp;Options...</source>
        <translation type="unfinished">ตัวเลือก...</translation>
    </message>
    <message>
        <source>&amp;File:</source>
        <translation type="unfinished">แฟ้ม:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="unfinished">เปลี่ยน...</translation>
    </message>
    <message>
        <source>A&amp;lternative Printer Command</source>
        <translation type="unfinished">A&amp;lternative Printer Command</translation>
    </message>
    <message>
        <source>Co&amp;mmand:</source>
        <translation type="unfinished">คำสั่ง:</translation>
    </message>
    <message>
        <source>Range</source>
        <translation type="unfinished">ช่วง</translation>
    </message>
    <message>
        <source>Print &amp;All</source>
        <translation type="unfinished">พิมพ์ ทั้งหมด</translation>
    </message>
    <message>
        <source>Print Current Pa&amp;ge</source>
        <translation type="unfinished">หน้าที่เลือก</translation>
    </message>
    <message>
        <source>Print &amp;Range</source>
        <translation type="unfinished">ช่วงการพิมพ์</translation>
    </message>
    <message>
        <source>N&amp;umber of Copies:</source>
        <translation type="unfinished">จำนวนสำเนา:</translation>
    </message>
    <message>
        <source>Print &amp;Normal</source>
        <translation type="obsolete">Print &amp;Normal</translation>
    </message>
    <message>
        <source>Print &amp;Separations</source>
        <translation type="obsolete">Print &amp;Separations</translation>
    </message>
    <message>
        <source>Pr&amp;int In Color If Available</source>
        <translation type="obsolete">Pr&amp;int In Colour If Available</translation>
    </message>
    <message>
        <source>Print In Gra&amp;yscale</source>
        <translation type="obsolete">Print In Gre&amp;yscale</translation>
    </message>
    <message>
        <source>Ad&amp;vanced Options...</source>
        <translation type="obsolete">Ad&amp;vanced Options...</translation>
    </message>
    <message>
        <source>&amp;Print</source>
        <translation type="unfinished">พิมพ์</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>Use an alternative print manager, such as kprinter or gtklp,
to utilize additional printing options</source>
        <translation type="obsolete">Use an alternative print manager, such as kprinter or gtklp,
to utilise additional printing options</translation>
    </message>
    <message>
        <source>Print Normal</source>
        <translation type="unfinished">พิมพ์ปกติ</translation>
    </message>
    <message>
        <source>Print Separations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print in Color if Available</source>
        <translation type="unfinished">พิมพ์สี</translation>
    </message>
    <message>
        <source>Print in Grayscale</source>
        <translation type="unfinished">พิมพ์ขาวดำ</translation>
    </message>
    <message>
        <source>PostScript Level 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostScript Level 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostScript Level 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished">หน้า</translation>
    </message>
    <message>
        <source>Mirror Page(s) Horizontal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mirror Page(s) Vertical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set Media Size</source>
        <translation type="unfinished">ตั้งขนาดสื่อ</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished">สี</translation>
    </message>
    <message>
        <source>Apply Under Color Removal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Convert Spot Colors to Process Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply ICC Profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Advanced Options</source>
        <translation type="unfinished">Advanced Options</translation>
    </message>
    <message>
        <source>Preview...</source>
        <translation type="unfinished">ตัวอย่าง...</translation>
    </message>
    <message>
        <source>Use an alternative print manager, such as kprinter or gtklp, to utilize additional printing options</source>
        <translation type="unfinished">ใช้ทางเลือกจัดการพิมพ์ เช่น เครื่องพริ้นเตอร์ หรือ จีทีเคแอลพี ไปยังตัวเลือกเพื่อเพิ่มในการพิมพ์</translation>
    </message>
    <message>
        <source>Sets the PostScript Level.
 Setting to Level 1 or 2 can create huge files</source>
        <translation type="unfinished">ตั่งค่าระดับของ ปล.
ตั้งค่าถึงระดับ 1 หรือ 2 สามารถสร้างแฟ้มเก็บข้อมูลขนาดใหญ่ได้</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis.UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allows you to embed ICC profiles in the print stream when color management is enabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This enables you to explicitely set the media size of the PostScript file. Not recommended unless requested by your printer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostScript Files (*.ps);;All Files (*)</source>
        <translation type="unfinished">แแฟ้ม ปล. แฟ้มทั้งหมด</translation>
    </message>
    <message>
        <source>Clip to Page Margins</source>
        <translation type="unfinished">คลิปหน้ากระดาษไปยังริมสุด</translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page or exported file</source>
        <translation type="obsolete">Do not show objects outside the margins on the printed page or exported file</translation>
    </message>
    <message>
        <source>Failed to retrieve printer settings</source>
        <translation type="unfinished">ตั้งค่าพริ้นเตอร์ล้มเหลว</translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page</source>
        <translation type="unfinished">ไม่แสดงวัตถุด้านนอกริมสุดบนหน้ากระดาษพิมพ์</translation>
    </message>
</context>
<context>
    <name>EPSPlug</name>
    <message>
        <source>Importing File:
%1
failed!</source>
        <translation type="unfinished">แฟ้มรับล้มเหลว:
%1
</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation type="unfinished">ข้อผิดพลาดอันตราย</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>ผิดพลาด</translation>
    </message>
    <message>
        <source>Importing PostScript</source>
        <translation type="unfinished">ปล.</translation>
    </message>
    <message>
        <source>Analyzing PostScript:</source>
        <translation type="unfinished">แยก ปล.</translation>
    </message>
    <message>
        <source>Generating Items</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Converting of %1 images failed!</source>
        <translation type="unfinished">แปลงรูปภาพล้มเหลง%1</translation>
    </message>
</context>
<context>
    <name>EditStyle</name>
    <message>
        <source>Edit Style</source>
        <translation type="unfinished">แก้ไขรูปแบบ</translation>
    </message>
    <message>
        <source>Character</source>
        <translation type="unfinished">อักขระ</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished">pt</translation>
    </message>
    <message>
        <source>Effect:</source>
        <translation type="obsolete">Effect:</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>Vertical Spaces</source>
        <translation type="obsolete">Vertical Spaces</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation type="unfinished">ระยะห่างบรรทัด</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">OK</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Warning</translation>
    </message>
    <message>
        <source>Name of the Style is not unique</source>
        <translation type="obsolete">Name of the Style is not unique</translation>
    </message>
    <message>
        <source>Name of your paragraph style</source>
        <translation type="unfinished">ชื่อลักษณะย่อหน้าของคุณ</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation type="unfinished">แบบอักษรข้อความหรือวัตถุ</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation type="unfinished">ขนาดอักษร</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation type="unfinished">สีพื้นอักษร</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation type="unfinished">สีขอบอักษร</translation>
    </message>
    <message>
        <source>Provides an oversized first letter for a paragraph. Used for stylistic effect</source>
        <translation type="obsolete">Provides an oversized first letter for a paragraph. Used for stylistic effect</translation>
    </message>
    <message>
        <source>Determines the overall height, in line numbers, of the Drop Caps</source>
        <translation type="unfinished">Determines the overall height, in line numbers, of the Drop Caps</translation>
    </message>
    <message>
        <source>Align text to baseline grid</source>
        <translation type="obsolete">Align text to baseline grid</translation>
    </message>
    <message>
        <source>Spacing above the paragraph</source>
        <translation type="unfinished">เว้นช่องด้านบนพารากราฟ</translation>
    </message>
    <message>
        <source>Spacing below the paragraph</source>
        <translation type="unfinished">เว้นช่องด้านล่างพารากราฟ</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Tabulators and Indentation</source>
        <translation type="unfinished">ตารางทำสถิติและย่อหน้า</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished">ชื่อ:</translation>
    </message>
    <message>
        <source>&amp;Font:</source>
        <translation type="obsolete">&amp;Font:</translation>
    </message>
    <message>
        <source>Si&amp;ze:</source>
        <translation type="obsolete">Si&amp;ze:</translation>
    </message>
    <message>
        <source>&amp;Alignment:</source>
        <translation type="obsolete">&amp;Alignment:</translation>
    </message>
    <message>
        <source>&amp;Drop Caps</source>
        <translation type="obsolete">&amp;Drop Caps</translation>
    </message>
    <message>
        <source>&amp;Lines:</source>
        <translation type="unfinished">เส้น:</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation type="obsolete">F&amp;ill Colour:</translation>
    </message>
    <message>
        <source>St&amp;roke Color:</source>
        <translation type="obsolete">St&amp;roke Colour:</translation>
    </message>
    <message>
        <source>Adjust to Baseline &amp;Grid</source>
        <translation type="obsolete">Adjust to Baseline &amp;Grid</translation>
    </message>
    <message>
        <source>Line &amp;Spacing:</source>
        <translation type="obsolete">Line &amp;Spacing:</translation>
    </message>
    <message>
        <source>Abo&amp;ve:</source>
        <translation type="obsolete">Abo&amp;ve:</translation>
    </message>
    <message>
        <source>&amp;Below:</source>
        <translation type="obsolete">&amp;Below:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished">เปอร์เซ็นต์</translation>
    </message>
    <message>
        <source>Distances</source>
        <translation type="unfinished">ระยะ</translation>
    </message>
    <message>
        <source>Fixed Linespacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatic Linespacing</source>
        <translation type="unfinished">เส้นว่างอัตโนมัติ</translation>
    </message>
    <message>
        <source>Align to Baseline Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Drop Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance from Text:</source>
        <translation type="unfinished">ระยะจากข้อความ</translation>
    </message>
    <message>
        <source>Preview of the Paragraph Style</source>
        <translation type="unfinished">ลักษณะเค้าโ๕รงของพารากราฟ</translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="unfinished">พื้นหลัง</translation>
    </message>
    <message>
        <source>Determines the gap between the DropCaps and the Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Toggles sample text of this paragraph style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name of the style is not unique</source>
        <translation type="unfinished">ลักษณธของชื่อไม่ได้มีอย่างเดียว</translation>
    </message>
    <message>
        <source>Select for easier reading of light coloured text styles</source>
        <translation type="unfinished">เลือกอ่านอย่างง่าย ตัวอักษรสีที่มีลักษณะสว่าง</translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation type="unfinished">คู้มือนำทาง</translation>
    </message>
    <message>
        <source>Offset to baseline of characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Click and hold down to select the line spacing mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Auto</source>
        <translation type="unfinished">อัตโนมัติ</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scaling height of characters</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Editor</name>
    <message>
        <source>Editor</source>
        <translation>ตัวแก้ไข
</translation>
    </message>
    <message>
        <source>Javascripts (*.js);;All Files (*)</source>
        <translation type="obsolete">Javascripts (*.js);;All Files (*)</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished">ใหม่
</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation type="unfinished">เปิด...</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="unfinished">บันทึกเป็น...</translation>
    </message>
    <message>
        <source>&amp;Save and Exit</source>
        <translation type="unfinished">บันทึกและออก</translation>
    </message>
    <message>
        <source>&amp;Exit without Saving</source>
        <translation type="unfinished">ออกโดยไม่บันทึก
</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="unfinished">แก้ไขกลับคืน
</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished">ทำซ้ำ
</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="unfinished">ตัด
</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished">คัดลอก
</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished">วาง
</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished">เคลียร์
</translation>
    </message>
    <message>
        <source>&amp;Get Field Names</source>
        <translation type="unfinished">ดึงชื่อฟิลด์</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished">แฟ้ม
</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished">แก้ไข
</translation>
    </message>
    <message>
        <source>JavaScripts (*.js);;All Files (*)</source>
        <translation type="unfinished">จาวาสคริป(*.js);;แฟ้มทั้งหมด(*)</translation>
    </message>
</context>
<context>
    <name>EffectsDialog</name>
    <message>
        <source>Image Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Options:</source>
        <translation type="unfinished">ตัวเลือก</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="unfinished">สี</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation type="unfinished">แรเงา:</translation>
    </message>
    <message>
        <source>Brightness:</source>
        <translation type="unfinished">สว่าง</translation>
    </message>
    <message>
        <source>Contrast:</source>
        <translation type="unfinished">สีตัดกัน</translation>
    </message>
    <message>
        <source>Radius:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Posterize:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Available Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Blur</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Brightness</source>
        <translation type="unfinished">สว่าง</translation>
    </message>
    <message>
        <source>Colorize</source>
        <translation type="unfinished">สี</translation>
    </message>
    <message>
        <source>Contrast</source>
        <translation type="unfinished">สีตัดกัน</translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invert</source>
        <translation type="unfinished">กลับ</translation>
    </message>
    <message>
        <source>Posterize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sharpen</source>
        <translation type="unfinished">ชัดขึ้น</translation>
    </message>
    <message>
        <source>&gt;&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;&lt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Effects in use</source>
        <translation type="unfinished">ผลในการใช้</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">ตกลง</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
</context>
<context>
    <name>ExportForm</name>
    <message>
        <source>&amp;All pages</source>
        <translation type="unfinished">หน้าทั้งหมด</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>Change the output directory</source>
        <translation type="unfinished">เปลี่ยนคำแนะนำที่มีผลต่อเอกสาร</translation>
    </message>
    <message>
        <source>The output directory - the place to store your images.
Name of the export file will be &apos;documentname-pagenumber.filetype&apos;</source>
        <translation type="unfinished">The output directory - the place to store your images.
Name of the export file will be &apos;documentname-pagenumber.filetype&apos;</translation>
    </message>
    <message>
        <source>Export only the current page</source>
        <translation type="unfinished">Export only the current page</translation>
    </message>
    <message>
        <source>Available export formats</source>
        <translation type="unfinished">Available export formats</translation>
    </message>
    <message>
        <source>Choose a Export Directory</source>
        <translation type="unfinished">Choose a Export Directory</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="unfinished">เปลี่ยน...</translation>
    </message>
    <message>
        <source>&amp;Export to Directory:</source>
        <translation type="unfinished">ส่งออกข้อความแนะนำ:</translation>
    </message>
    <message>
        <source>Image &amp;Type:</source>
        <translation type="unfinished">รูปชนิด:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation type="unfinished">คุณสมบัติ:</translation>
    </message>
    <message>
        <source>Export as Image(s)</source>
        <translation type="unfinished">ส่งรูปออก</translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="unfinished">ตัวเลือก</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation type="unfinished">ตกลง:</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="unfinished">ดีพีไอ</translation>
    </message>
    <message>
        <source>Range</source>
        <translation type="unfinished">ระยะ</translation>
    </message>
    <message>
        <source>&amp;Current page</source>
        <translation type="unfinished">หน้าปัจจุบัน</translation>
    </message>
    <message>
        <source>&amp;Range</source>
        <translation type="unfinished">ระยะ</translation>
    </message>
    <message>
        <source>C</source>
        <translation type="unfinished">ซี</translation>
    </message>
    <message>
        <source>Export a range of pages</source>
        <translation type="unfinished">Export a range of pages</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="unfinished">Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</translation>
    </message>
    <message>
        <source>Export all pages</source>
        <translation type="unfinished">ส่งหน้ากระดาษทั้งหมด</translation>
    </message>
    <message>
        <source>Resolution of the Images
Use 72 dpi for Images intended for the Screen</source>
        <translation type="unfinished">จัดรูป
ใช้ 72 ดีพีไอ สำหรับรูปภาพที่ต้องการไปเป็นฉาก</translation>
    </message>
    <message>
        <source>The quality of your images - 100% is the best, 1% the lowest quality</source>
        <translation type="unfinished">คุณสมบัติของรูปคุณ - 100% ดีมาก, 1% ต่ำกว่ามาตรฐาน</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished">ขนาด:</translation>
    </message>
    <message>
        <source>Size of the images. 100% for no changes, 200% for two times larger etc.</source>
        <translation type="unfinished">ขนาดของรูป. 100% เปลี่ยนไม่ได้, 200% ใช้ได้สองครั้ง อื่นๆ.</translation>
    </message>
</context>
<context>
    <name>ExtImageProps</name>
    <message>
        <source>Extended Image Properties</source>
        <translation type="unfinished">คุณสมบัติความกว้างของภาพ</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">ปกติ</translation>
    </message>
    <message>
        <source>Darken</source>
        <translation type="unfinished">ทึบ</translation>
    </message>
    <message>
        <source>Lighten</source>
        <translation type="unfinished">สว่าง</translation>
    </message>
    <message>
        <source>Hue</source>
        <translation type="unfinished">สี</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished">Saturation</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished">สี</translation>
    </message>
    <message>
        <source>Luminosity</source>
        <translation type="unfinished">สว่าง</translation>
    </message>
    <message>
        <source>Multiply</source>
        <translation type="unfinished">คูร</translation>
    </message>
    <message>
        <source>Screen</source>
        <translation type="unfinished">ฉาก</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation type="unfinished">เลือน</translation>
    </message>
    <message>
        <source>Overlay</source>
        <translation></translation>
    </message>
    <message>
        <source>Hard Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Soft Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Difference</source>
        <translation type="unfinished">แตกต่าง</translation>
    </message>
    <message>
        <source>Exclusion</source>
        <translation type="unfinished">จำกัด</translation>
    </message>
    <message>
        <source>Color Dodge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Burn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exlusion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Blend Mode:</source>
        <translation type="unfinished">วิธีผสม</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation type="unfinished">ทึบแสง</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished">เปอร์เซ็นต์</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">ชื่อ</translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="unfinished">พื้นหลัง</translation>
    </message>
    <message>
        <source>Layers</source>
        <translation type="unfinished">ชั้น</translation>
    </message>
    <message>
        <source>Don&apos;t use any Path</source>
        <translation type="unfinished">ห้ามใช้ทุกพาธ</translation>
    </message>
    <message>
        <source>Paths</source>
        <translation type="unfinished">พาธ</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">&amp;Close</translation>
    </message>
</context>
<context>
    <name>FDialogPreview</name>
    <message>
        <source>Size:</source>
        <translation type="unfinished">ขนาด:</translation>
    </message>
    <message>
        <source>Title:</source>
        <translation type="unfinished">ชื่อเรื่อง:</translation>
    </message>
    <message>
        <source>No Title</source>
        <translation type="unfinished">ไม่มีชื่อเรื่อง</translation>
    </message>
    <message>
        <source>Author:</source>
        <translation type="unfinished">ผู้เขียน:</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>ไม่รู้</translation>
    </message>
    <message>
        <source>Scribus Document</source>
        <translation type="unfinished">เอกสารสไครบัส</translation>
    </message>
    <message>
        <source>Resolution:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DPI</source>
        <translation type="unfinished">ดีพีไอ
</translation>
    </message>
    <message>
        <source>RGB</source>
        <translation type="unfinished">อาร์จีบี</translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation type="unfinished">ซีเอ็มวายเค</translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colorspace:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Version:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Farbmanager</name>
    <message>
        <source>Colors</source>
        <translation type="obsolete">Colours</translation>
    </message>
    <message>
        <source>Color Sets</source>
        <translation type="obsolete">Colour Sets</translation>
    </message>
    <message>
        <source>Current Color Set:</source>
        <translation type="obsolete">Current Colour Set:</translation>
    </message>
    <message>
        <source>Choose a Name</source>
        <translation type="obsolete">Choose a Name</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="obsolete">Open</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="obsolete">Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="obsolete">Documents (*.sla *.scd);;All Files (*)</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation type="obsolete">New Colour</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="obsolete">Copy of %1</translation>
    </message>
    <message>
        <source>Choose a color set to load</source>
        <translation type="obsolete">Choose a colour set to load</translation>
    </message>
    <message>
        <source>Save the current color set</source>
        <translation type="obsolete">Save the current colour set</translation>
    </message>
    <message>
        <source>Remove unused colors from current document&apos;s color set</source>
        <translation type="obsolete">Remove unused colours from current document&apos;s colour set</translation>
    </message>
    <message>
        <source>Append colors to the current set from an existing document</source>
        <translation type="obsolete">Append colours to the current set from an existing document</translation>
    </message>
    <message>
        <source>Create a new color within the current set</source>
        <translation type="obsolete">Create a new colour within the current set</translation>
    </message>
    <message>
        <source>Edit the currently selected color</source>
        <translation type="obsolete">Edit the currently selected colour</translation>
    </message>
    <message>
        <source>Make a copy of the currently selected color</source>
        <translation type="obsolete">Make a copy of the currently selected colour</translation>
    </message>
    <message>
        <source>Delete the currently selected color</source>
        <translation type="obsolete">Delete the currently selected colour</translation>
    </message>
    <message>
        <source>Make the current colorset the default color set</source>
        <translation type="obsolete">Make the current colourset the default colour set</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="obsolete">&amp;Append</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;New</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="obsolete">&amp;Edit</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="obsolete">D&amp;uplicate</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Delete</translation>
    </message>
    <message>
        <source>&amp;Remove Unused</source>
        <translation type="obsolete">&amp;Remove Unused</translation>
    </message>
    <message>
        <source>&amp;Save Color Set</source>
        <translation type="obsolete">&amp;Save Colour Set</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="obsolete">&amp;Name:</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="obsolete">&amp;Import</translation>
    </message>
</context>
<context>
    <name>FileLoader</name>
    <message>
        <source>Some fonts used by this document have been substituted:</source>
        <translation type="unfinished">ตัวอักษรบางตัวใช้ได้กับเอกสารที่ต้องการแทนที่</translation>
    </message>
    <message>
        <source> was replaced by: </source>
        <translation type="unfinished">แทนที่โดย</translation>
    </message>
</context>
<context>
    <name>FontPrefs</name>
    <message>
        <source>Global Font Settings</source>
        <translation type="obsolete">Global Font Settings</translation>
    </message>
    <message>
        <source>Available Fonts</source>
        <translation type="unfinished">ตัวอักษรที่หาได้</translation>
    </message>
    <message>
        <source>Font Substitutions</source>
        <translation type="unfinished">แบบอักษรแทนที่</translation>
    </message>
    <message>
        <source>Additional Paths</source>
        <translation type="unfinished">พาธ ต่อเติม</translation>
    </message>
    <message>
        <source>Postscript</source>
        <translation type="obsolete">Postscript</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="obsolete">Yes</translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation type="unfinished">ชื่อแบบอักษร</translation>
    </message>
    <message>
        <source>Use Font</source>
        <translation type="obsolete">Use Font</translation>
    </message>
    <message>
        <source>Embed in:</source>
        <translation type="obsolete">Embed in:</translation>
    </message>
    <message>
        <source>Subset</source>
        <translation type="obsolete">Subset</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Type</translation>
    </message>
    <message>
        <source>Path to Font File</source>
        <translation type="obsolete">Path to Font File</translation>
    </message>
    <message>
        <source>Replacement</source>
        <translation type="unfinished">แทนที่</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation type="unfinished">เลือกไดเรกทอรี่</translation>
    </message>
    <message>
        <source>&amp;Available Fonts</source>
        <translation type="unfinished">&amp;Available Fonts</translation>
    </message>
    <message>
        <source>Font &amp;Substitutions</source>
        <translation type="unfinished">ตัวอักษร แทนที่</translation>
    </message>
    <message>
        <source>Additional &amp;Paths</source>
        <translation type="unfinished">เพิ่มเติม พาธ</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="unfinished">เปลี่ยน...</translation>
    </message>
    <message>
        <source>A&amp;dd...</source>
        <translation type="unfinished">เพิ่ม...</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation type="unfinished">ถอด</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>Font Name</source>
        <comment>font preview</comment>
        <translation type="unfinished">ชื่อแบบอักษร</translation>
    </message>
    <message>
        <source>Use Font</source>
        <comment>font preview</comment>
        <translation type="unfinished">แบบอักษรที่ใช้</translation>
    </message>
    <message>
        <source>Embed in:</source>
        <comment>font preview</comment>
        <translation type="unfinished">Embed in:</translation>
    </message>
    <message>
        <source>Subset</source>
        <comment>font preview</comment>
        <translation type="unfinished">Subset</translation>
    </message>
    <message>
        <source>Path to Font File</source>
        <comment>font preview</comment>
        <translation type="unfinished">พาธถึงอักษรแฟ้ม</translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation type="obsolete">ปล.</translation>
    </message>
    <message>
        <source>Font search paths can only be set when there are no documents open. Close any open documents, then use File -&gt;Preferences &gt; Fonts to change the font search path.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FontPreview</name>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+O</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="obsolete">Woven silk pyjamas exchanged for blue quartz</translation>
    </message>
    <message>
        <source>Fonts Preview</source>
        <translation type="obsolete">Fonts Preview</translation>
    </message>
    <message>
        <source>Append selected font into Style, Font menu</source>
        <translation type="obsolete">Append selected font into Style, Font menu</translation>
    </message>
    <message>
        <source>Leave preview</source>
        <translation type="obsolete">Leave preview</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <comment>font preview</comment>
        <translation type="unfinished">Woven silk pyjamas exchanged for blue quartz</translation>
    </message>
    <message>
        <source>Type</source>
        <comment>font preview</comment>
        <translation type="obsolete">Type</translation>
    </message>
    <message>
        <source>Subset</source>
        <comment>font preview</comment>
        <translation type="obsolete">Subset</translation>
    </message>
    <message>
        <source>Fonts Preview</source>
        <comment>font preview</comment>
        <translation type="obsolete">Fonts Preview</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="obsolete">&amp;Append</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <comment>font preview</comment>
        <translation type="obsolete">Alt+O</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <comment>font preview</comment>
        <translation type="obsolete">&amp;Close</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <comment>font preview</comment>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>Append selected font into Style, Font menu</source>
        <comment>font preview</comment>
        <translation type="unfinished">เลือกอักษรแนบท้าย, เมนู ตัวอักษร</translation>
    </message>
    <message>
        <source>Leave preview</source>
        <comment>font preview</comment>
        <translation type="unfinished">เค้าโครงละทิ้ง</translation>
    </message>
    <message>
        <source>Start searching</source>
        <translation type="unfinished">เริ่มค้นหา</translation>
    </message>
    <message>
        <source>Size of the selected font</source>
        <translation type="unfinished">เลือกขนาดตัวอักษร</translation>
    </message>
    <message>
        <source>User</source>
        <comment>font preview</comment>
        <translation type="unfinished">ผู้ใช้</translation>
    </message>
    <message>
        <source>System</source>
        <comment>font preview</comment>
        <translation type="unfinished">ระบบ</translation>
    </message>
    <message>
        <source>Sample will be shown after key release</source>
        <translation type="unfinished">แสดงตัวอย่างหลังจากที่ปลดกุญแจ</translation>
    </message>
    <message>
        <source>Typing the text here provides quick searching in the font names. Searching is case insensitive. You can provide a common wild cards (*, ?, [...]) in your phrase. Examples: t* will list all fonts starting with t or T. *bold* will list all fonts with word bold, bolder etc. in the name.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FontPreviewBase</name>
    <message>
        <source>Fonts Preview</source>
        <translation type="obsolete">เค้าโครงตัวอักษร</translation>
    </message>
    <message>
        <source>&amp;Quick Search:</source>
        <translation type="unfinished">ค้นหาทางลัด</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation type="unfinished">ค้นหา</translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation type="unfinished">อักษรชื่อ</translation>
    </message>
    <message>
        <source>Doc</source>
        <translation type="unfinished">เอกสาร</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished">ชนิด</translation>
    </message>
    <message>
        <source>Subset</source>
        <translation type="unfinished">Subset</translation>
    </message>
    <message>
        <source>Access</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation type="unfinished">ขนาดอักษร:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished">ข้อความ</translation>
    </message>
    <message>
        <source>Sample text to display</source>
        <translation type="unfinished">แสดงตัวอย่างข้อความบนดิสเพล</translation>
    </message>
    <message>
        <source>Se&amp;t</source>
        <translation type="unfinished">ตั้งค่า</translation>
    </message>
    <message>
        <source>Alt+T</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset the text</source>
        <translation type="unfinished">ตั้งค่าข้อความใหม่</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="unfinished">&amp;Append</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">ปิด</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
    <message>
        <source>Font Preview</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FontPreviewPlugin</name>
    <message>
        <source>&amp;Font Preview...</source>
        <translation type="unfinished">เค้าโครงตัวอักษร</translation>
    </message>
    <message>
        <source>Font Preview dialog</source>
        <translation type="unfinished">เค้าโครงตัวอักษรไดอาล๊อค</translation>
    </message>
    <message>
        <source>Sorting, searching and browsing available fonts.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FontReplaceDialog</name>
    <message>
        <source>Font Substitution</source>
        <translation type="unfinished">แทนตัวอักษร</translation>
    </message>
    <message>
        <source>This document contains some fonts that are not installed on your system, please choose a suitable replacement for them. Cancel will stop the document from loading.</source>
        <translation type="unfinished">เอกสารบรรจุไปด้วยตัวอักษรบางส่วนที่ไม่สามารถติดตั้งบนระบบของคุณได้ กรุณาเลือกคำร้องเพื่อแทนที่. ยกเลิกเพื่อจะหยุดเอกสารจากการโหลด</translation>
    </message>
    <message>
        <source>Original Font</source>
        <translation type="unfinished">ตัวอักษรดั้งเดิม</translation>
    </message>
    <message>
        <source>Substitution Font</source>
        <translation type="unfinished">แทนตัวอักษร</translation>
    </message>
    <message>
        <source>Make these substitutions permanent</source>
        <translation type="unfinished">สร้างเพิ่อแทนที่อย่างถาวร</translation>
    </message>
    <message>
        <source>Cancels these font substitutions and stops loading the document.</source>
        <translation type="unfinished">ยกเลิกตัวอักษรแทนที่ และหยุดการโหลดลงเอกสาร</translation>
    </message>
    <message>
        <source>Enabling this tells Scribus to use these replacements for missing fonts permanently in all future layouts. This can be reverted or changed in Edit &gt; Preferences &gt; Fonts.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>If you select OK, then save, these substitutions are made permanent in the document.</source>
        <translation type="unfinished">ถ้าคุณเลือก ตกลง หลังจากบันทึก ข้อความที่ถูกสร้างขึ้นจะแทนที่ทันทีในเอกสาร </translation>
    </message>
</context>
<context>
    <name>GradientEditor</name>
    <message>
        <source>Position:</source>
        <translation type="unfinished">ตำแหน่ง:</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Here you can add, change or remove Color-Stops.</source>
        <translation type="obsolete">Here you can add, change or remove Colour-Stops.</translation>
    </message>
    <message>
        <source>Add, change or remove color stops here</source>
        <translation type="unfinished">เพิ่ม,เปลี่ยน หรือย้ายกลับ สีที่หยุดตอนนี้</translation>
    </message>
</context>
<context>
    <name>GuideManager</name>
    <message>
        <source>Manage Guides</source>
        <translation type="unfinished">จัดการแนะนำ</translation>
    </message>
    <message>
        <source>Horizontal Guides</source>
        <translation type="unfinished">แนะนำแนวขวาง</translation>
    </message>
    <message>
        <source>Vertical Guides</source>
        <translation type="unfinished">แนะนำเส้นตั้งตรง</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation type="unfinished">&amp;Y-Pos:</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="unfinished">&amp;เพิ่ม</translation>
    </message>
    <message>
        <source>D&amp;elete</source>
        <translation type="unfinished">ล&amp;บ</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation type="unfinished">&amp;X-Pos:</translation>
    </message>
    <message>
        <source>A&amp;dd</source>
        <translation type="unfinished">เ&amp;พิ่ม</translation>
    </message>
    <message>
        <source>De&amp;lete</source>
        <translation type="unfinished">ล&amp;บ</translation>
    </message>
    <message>
        <source>&amp;Lock Guides</source>
        <translation type="unfinished">&amp;ล๊อค คำแนะนำ</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>Guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unit</source>
        <translation type="unfinished">หน่วย</translation>
    </message>
    <message>
        <source>Rows and Columns - Automatic Guides</source>
        <translation type="unfinished">แถว และคอลัมน์ - Automatic Guides</translation>
    </message>
    <message>
        <source>&amp;Rows:</source>
        <translation type="unfinished">แถว</translation>
    </message>
    <message>
        <source>C&amp;olumns:</source>
        <translation type="unfinished">คอลัมน์:</translation>
    </message>
    <message>
        <source>Row &amp;Gap</source>
        <translation type="unfinished">แถว&amp;ช่อง</translation>
    </message>
    <message>
        <source>Colum&amp;n Gap</source>
        <translation type="unfinished">ระยะห่างคอลัมน์</translation>
    </message>
    <message>
        <source>Refer to:</source>
        <translation type="unfinished">อ้างถึง</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation type="unfinished">&amp;หน้า</translation>
    </message>
    <message>
        <source>&amp;Margins</source>
        <translation type="unfinished">ริมกระดาษ</translation>
    </message>
    <message>
        <source>&amp;Selection</source>
        <translation type="unfinished">เลือก</translation>
    </message>
    <message>
        <source>&amp;Apply to All Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">&amp;ปิด</translation>
    </message>
    <message>
        <source>&amp;Update</source>
        <translation type="unfinished">อัพเดต</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation type="unfinished">เค้าโครง</translation>
    </message>
    <message>
        <source>Set the guides in document. Guide manager is still opened but the changes are persistant</source>
        <comment>guide manager</comment>
        <translation type="unfinished">ตั้งค่าคำแนะนำในเอกสาร.จัดการคำแนะนำทั้งที่ยังเปิดเอกสารอยู่ แต่เปลี่ยนเป็นเพอร์ซิสเท้นท์</translation>
    </message>
    <message>
        <source>There is empty (0.0) guide already</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>HelpBrowser</name>
    <message>
        <source>Sorry, no manual available! Please see: http://docs.scribus.net for updated docs
and www.scribus.net for downloads.</source>
        <translation type="unfinished">Sorry, no manual available! Please see: http://docs.scribus.net for updated docs
and www.scribus.net for downloads.</translation>
    </message>
    <message>
        <source>Contents</source>
        <translation type="unfinished">สารบัญ</translation>
    </message>
    <message>
        <source>Link</source>
        <translation type="unfinished">เชื่อมต่อ</translation>
    </message>
    <message>
        <source>Scribus Online Help</source>
        <translation type="unfinished">ตัวช่วยสริปบัส</translation>
    </message>
    <message>
        <source>&amp;Contents</source>
        <translation type="unfinished">สารบัญ</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation type="unfinished">ค้นหา</translation>
    </message>
    <message>
        <source>Se&amp;arch</source>
        <translation type="unfinished">ค้นหา</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished">ใหม่</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>De&amp;lete All</source>
        <translation type="unfinished">ลบทั้งหมด</translation>
    </message>
    <message>
        <source>Book&amp;marks</source>
        <translation type="unfinished">หมายเหตุ</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation type="unfinished">พิมพ์...</translation>
    </message>
    <message>
        <source>E&amp;xit</source>
        <translation type="unfinished">ออก</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished">แฟ้ม</translation>
    </message>
    <message>
        <source>&amp;Find...</source>
        <translation type="unfinished">หา</translation>
    </message>
    <message>
        <source>Find &amp;Next</source>
        <translation type="unfinished">หาต่อไป</translation>
    </message>
    <message>
        <source>Find &amp;Previous</source>
        <translation type="unfinished">หา ก่อนหน้า</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished">แก้ไข</translation>
    </message>
    <message>
        <source>&amp;Add Bookmark</source>
        <translation type="unfinished">เพิ่่มหมายเหตุ</translation>
    </message>
    <message>
        <source>D&amp;elete All</source>
        <translation type="unfinished">ลบทั้งหมด</translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation type="unfinished">หมายเหตุ</translation>
    </message>
    <message>
        <source>Searching is case unsensitive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Find</source>
        <translation type="unfinished">หา</translation>
    </message>
    <message>
        <source>Search Term:</source>
        <translation type="unfinished">กำหนดการค้นหา</translation>
    </message>
    <message>
        <source>New Bookmark</source>
        <translation type="unfinished">หมายเหตุใหม่</translation>
    </message>
    <message>
        <source>New Bookmark&apos;s Title:</source>
        <translation type="unfinished">หมายเหตุชื่อเรื่ง</translation>
    </message>
    <message>
        <source>Relevance</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>HyAsk</name>
    <message>
        <source>Possible Hyphenation</source>
        <translation type="unfinished">Possible Hyphenation</translation>
    </message>
    <message>
        <source>Accept</source>
        <translation type="unfinished">ยอมรับ</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation type="unfinished">ข้าม</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
</context>
<context>
    <name>HySettings</name>
    <message>
        <source>Hyphenator Settings</source>
        <translation type="obsolete">Hyphenator Settings</translation>
    </message>
    <message>
        <source>Length of the smallest word to be hyphenated.</source>
        <translation type="unfinished">Length of the smallest word to be hyphenated.</translation>
    </message>
    <message>
        <source>Maximum number of Hyphenations following each other.
A value of 0 means unlimited hyphenations.</source>
        <translation type="unfinished">Maximum number of Hyphenations following each other.
A value of 0 means unlimited hyphenations.</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation type="unfinished">ภาษา:</translation>
    </message>
    <message>
        <source>&amp;Smallest Word:</source>
        <translation type="unfinished">&amp;Smallest Word:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>&amp;Hyphenation Suggestions</source>
        <translation type="unfinished">คำแนะนำ เครื่องหมายยติภังค์</translation>
    </message>
    <message>
        <source>Hyphenate Text Automatically &amp;During Typing</source>
        <translation type="unfinished">ข้อความ(-)อัตโนมัติระหว่างพิมพ์</translation>
    </message>
    <message>
        <source>A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</source>
        <translation type="unfinished">A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</translation>
    </message>
    <message>
        <source>Enables automatic hyphenation of your text while typing.</source>
        <translation type="unfinished">สามารถหาเครื่องหมาย(-) ของข้อความของคุณในขณะที่กำลังพิมพ์.</translation>
    </message>
    <message>
        <source>Consecutive Hyphenations &amp;Allowed:</source>
        <translation type="unfinished">Consecutive Hyphenations &amp;Allowed:</translation>
    </message>
</context>
<context>
    <name>ImageInfoDialog</name>
    <message>
        <source>Image Info</source>
        <translation type="unfinished">รูป</translation>
    </message>
    <message>
        <source>General Info</source>
        <translation type="unfinished">ทั่วไป</translation>
    </message>
    <message>
        <source>Date / Time:</source>
        <translation type="unfinished">วัน/เวลา</translation>
    </message>
    <message>
        <source>Has Embedded Profile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="unfinished">ใช่</translation>
    </message>
    <message>
        <source>No</source>
        <translation>ไม่</translation>
    </message>
    <message>
        <source>Profile Name:</source>
        <translation type="unfinished">ชื่อแฟ้ม</translation>
    </message>
    <message>
        <source>Has Embedded Paths:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Has Layers:</source>
        <translation type="unfinished">มีชั้น</translation>
    </message>
    <message>
        <source>EXIF Info</source>
        <translation type="unfinished">อีเอ็กซ์ไอเอฟ</translation>
    </message>
    <message>
        <source>Artist:</source>
        <translation type="unfinished">อาร์ติสท์</translation>
    </message>
    <message>
        <source>Comment:</source>
        <translation type="unfinished">ข้อวิจารณ์</translation>
    </message>
    <message>
        <source>User Comment:</source>
        <translation type="unfinished">ผู้วิจารณ์</translation>
    </message>
    <message>
        <source>Camera Model:</source>
        <translation type="unfinished">รูปแบบกล้อง</translation>
    </message>
    <message>
        <source>Camera Manufacturer:</source>
        <translation type="unfinished">จัดกล้อง</translation>
    </message>
    <message>
        <source>Description:</source>
        <translation type="unfinished">ลักษณะ</translation>
    </message>
    <message>
        <source>Copyright:</source>
        <translation type="unfinished">ลิขสิทธิ์</translation>
    </message>
    <message>
        <source>Scanner Model:</source>
        <translation type="unfinished">แสกนรูปแบบ</translation>
    </message>
    <message>
        <source>Scanner Manufacturer:</source>
        <translation type="unfinished">ทำการแสกน</translation>
    </message>
</context>
<context>
    <name>ImportPSPlugin</name>
    <message>
        <source>Import &amp;EPS/PS...</source>
        <translation type="unfinished">นำเข้า อีพีเอส/พีเอส...</translation>
    </message>
    <message>
        <source>Imports EPS Files</source>
        <translation type="unfinished">นำเข้าแฟ้ม อีพีเอส</translation>
    </message>
    <message>
        <source>Imports most EPS files into the current document,
converting their vector data into Scribus objects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation type="obsolete">ปล.</translation>
    </message>
    <message>
        <source>PDF</source>
        <translation type="unfinished">พีดีเอฟ</translation>
    </message>
</context>
<context>
    <name>InsPage</name>
    <message>
        <source>Insert Page</source>
        <translation type="unfinished">แทรกหน้า</translation>
    </message>
    <message>
        <source>Inserting</source>
        <translation type="obsolete">Inserting</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation type="unfinished">หน้าก่อนหน้า</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation type="unfinished">หน้าถัดไป</translation>
    </message>
    <message>
        <source>at End</source>
        <translation type="unfinished">สิ้นสุด</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">ปกติ</translation>
    </message>
    <message>
        <source>Template (Right Page):</source>
        <translation type="obsolete">Template (Right Page):</translation>
    </message>
    <message>
        <source>&amp;Inserting</source>
        <translation type="obsolete">&amp;Inserting</translation>
    </message>
    <message>
        <source>Page(s)</source>
        <translation type="unfinished">หน้า</translation>
    </message>
    <message>
        <source>&amp;Template (Left Page):</source>
        <translation type="obsolete">&amp;Template (Left Page):</translation>
    </message>
    <message>
        <source>&amp;Template:</source>
        <translation type="obsolete">&amp;Template:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="unfinished">แทรก</translation>
    </message>
    <message>
        <source>Master Pages</source>
        <translation type="unfinished">หน้าต้นแบบ</translation>
    </message>
    <message>
        <source>&amp;Master Page:</source>
        <translation type="unfinished">หน้าต้นแบบ:</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished">ขนาดหน้า</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished">ขนาด:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">กำหนดเอง</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished">การวางแนว:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished">แนวตั้ง</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished">แนวนอน</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished">ความกว้าง:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished">ความสูง:</translation>
    </message>
    <message>
        <source>Move Objects with their Page</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>InsertTable</name>
    <message>
        <source>Insert Table</source>
        <translation type="unfinished">แทรกตาราง</translation>
    </message>
    <message>
        <source>Number of Rows:</source>
        <translation type="obsolete">Number of Rows:</translation>
    </message>
    <message>
        <source>Number of Columns:</source>
        <translation type="obsolete">Number of Columns:</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Cancel</translation>
    </message>
    <message>
        <source>Number of rows:</source>
        <translation type="unfinished">จำนวนแถว:</translation>
    </message>
    <message>
        <source>Number of columns:</source>
        <translation type="unfinished">จำนวนคอลัมน์:</translation>
    </message>
</context>
<context>
    <name>JavaDocs</name>
    <message>
        <source>New Script</source>
        <translation type="unfinished">ต้นฉบับใหม่</translation>
    </message>
    <message>
        <source>Edit JavaScripts</source>
        <translation type="unfinished">แก้ไขต้นฉบับจาวา</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Warning</translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation type="unfinished">แก้ไข...</translation>
    </message>
    <message>
        <source>&amp;Add...</source>
        <translation type="unfinished">เพิ่ม...</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">ปิด</translation>
    </message>
    <message>
        <source>&amp;New Script:</source>
        <translation type="unfinished">ต้นฉบับใหม่:</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="unfinished">ไม่</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="unfinished">ใช่</translation>
    </message>
    <message>
        <source>Do you really want to delete this Script?</source>
        <translation type="obsolete">Do you really want to delete this Script?</translation>
    </message>
    <message>
        <source>Adds a new Script, predefines a function with the same name. If you want to use this script as an &quot;Open Action&quot; script be sure not to change the name of the function.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you really want to delete this script?</source>
        <translation type="unfinished">คุณต้องการลบต้นฉบับ?</translation>
    </message>
</context>
<context>
    <name>KeyManager</name>
    <message>
        <source>Manage Keyboard Shortcuts</source>
        <translation type="obsolete">Manage Keyboard Shortcuts</translation>
    </message>
    <message>
        <source>Action</source>
        <translation type="unfinished">กระทำ</translation>
    </message>
    <message>
        <source>Current Key</source>
        <translation type="unfinished">ปุ่มกดปัจจุบัน</translation>
    </message>
    <message>
        <source>Select a Key for this Action</source>
        <translation type="unfinished">เลือกปุ่มกด เพื่อลงมือกระมำ</translation>
    </message>
    <message>
        <source>ALT+SHIFT+T</source>
        <translation type="unfinished">ALT+SHIFT+T</translation>
    </message>
    <message>
        <source>Alt</source>
        <translation type="unfinished">Alt</translation>
    </message>
    <message>
        <source>Ctrl</source>
        <translation type="unfinished">Ctrl</translation>
    </message>
    <message>
        <source>Shift</source>
        <translation type="unfinished">ชิพ</translation>
    </message>
    <message>
        <source>Shift+</source>
        <translation type="unfinished">Shift+</translation>
    </message>
    <message>
        <source>Alt+</source>
        <translation type="unfinished">Alt+</translation>
    </message>
    <message>
        <source>Ctrl+</source>
        <translation type="unfinished">Ctrl+</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Warning</translation>
    </message>
    <message>
        <source>&amp;No Key</source>
        <translation type="unfinished">ไม่มีปุ่มกด</translation>
    </message>
    <message>
        <source>&amp;User Defined Key</source>
        <translation type="unfinished">ผู้ใช้กำหนดปุ่มกด</translation>
    </message>
    <message>
        <source>Set &amp;Key</source>
        <translation type="unfinished">ตั้งค่า &amp;ปุ่มกด</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>This Key Sequence is already in use</source>
        <translation type="obsolete">This Key Sequence is already in use</translation>
    </message>
    <message>
        <source>Loadable Shortcut Sets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Load</source>
        <translation type="unfinished">โหลด</translation>
    </message>
    <message>
        <source>&amp;Import...</source>
        <translation type="unfinished">นำเข้า</translation>
    </message>
    <message>
        <source>&amp;Export...</source>
        <translation type="unfinished">ส่งออก</translation>
    </message>
    <message>
        <source>&amp;Reset</source>
        <translation type="unfinished">ตั้งค่าใหม่</translation>
    </message>
    <message>
        <source>Keyboard shortcut sets available to load</source>
        <translation type="unfinished">ตั้งค่าทางลัดในการใช้แฟ้นพิมพ์ เท่ามี่จะหาโหลดได้</translation>
    </message>
    <message>
        <source>Load the selected shortcut set</source>
        <translation type="unfinished">ตั้งค่าเลือกโหลดทางลัด</translation>
    </message>
    <message>
        <source>Import a shortcut set into the current configuration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export the current shortcuts into an importable file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reload the default Scribus shortcuts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Meta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Meta+</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This key sequence is already in use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Key Set XML Files (*.ksxml)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LayerPalette</name>
    <message>
        <source>Layers</source>
        <translation type="unfinished">ชั้น</translation>
    </message>
    <message>
        <source>Add a new Layer</source>
        <translation type="obsolete">Add a new Layer</translation>
    </message>
    <message>
        <source>Delete Layer</source>
        <translation type="unfinished">ลบชั้น</translation>
    </message>
    <message>
        <source>Raise Layer</source>
        <translation type="obsolete">Raise Layer</translation>
    </message>
    <message>
        <source>Lower Layer</source>
        <translation type="obsolete">Lower Layer</translation>
    </message>
    <message>
        <source>New Layer</source>
        <translation type="obsolete">New Layer</translation>
    </message>
    <message>
        <source>Do you want to delete all Objects on this Layer too?</source>
        <translation type="obsolete">Do you want to delete all Objects on this Layer too?</translation>
    </message>
    <message>
        <source>Do you want to delete all objects on this layer too?</source>
        <translation type="unfinished">คุณต้องการที่จะลบวัตถุที่อยู่บนชั้นทั้งหมดหรือไม่?</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">ชื่อ </translation>
    </message>
    <message>
        <source>Add a new layer</source>
        <translation type="unfinished">เพิ่มชั้นใหม่</translation>
    </message>
    <message>
        <source>Delete layer</source>
        <translation type="unfinished">ลบชั้น</translation>
    </message>
    <message>
        <source>Raise layer</source>
        <translation type="unfinished">เปิดชั้น</translation>
    </message>
    <message>
        <source>Lower layer</source>
        <translation type="unfinished">ชั้นล่าง</translation>
    </message>
</context>
<context>
    <name>LineFormate</name>
    <message>
        <source>Edit Line Styles</source>
        <translation type="unfinished">แก้ไขแบบเส้น</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>คัดลอก%1</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation type="unfinished">แบบใหม่</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Warning</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">เปิด</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="unfinished">เอกสาร (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="unfinished">เอกสาร(*.sla *.scd);;All Files (*)</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="obsolete">&amp;Append</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished">ใหม่</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished">แก้ไข</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="unfinished">คู่ฉบับ</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished">บันทึก</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="unfinished">ไม่</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="unfinished">ใช่</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation type="obsolete">Do you really want to delete this Style?</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished">นำเข้า</translation>
    </message>
    <message>
        <source>Do you really want to delete this style?</source>
        <translation type="unfinished">คุณต้องการที่จะลบแบบ?</translation>
    </message>
</context>
<context>
    <name>LineStyleWBase</name>
    <message>
        <source>%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation type="unfinished">ความกว้างของเส้น</translation>
    </message>
</context>
<context>
    <name>LineStyleWidget</name>
    <message>
        <source> pt</source>
        <translation type="unfinished">pt</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation type="unfinished">แบน แค๊ป</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation type="unfinished">สี่เหลี่ยมจัตุรัส</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation type="unfinished">วงกลม</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation type="unfinished">รูปทรงเส้น</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation type="unfinished">เส้นหวัด</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation type="unfinished">เส้นปะ</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LoadSavePlugin</name>
    <message>
        <source>All Files (*)</source>
        <translation type="unfinished">แฟ้มทั้งหมด (*)</translation>
    </message>
</context>
<context>
    <name>LoremManager</name>
    <message>
        <source>Select Lorem Ipsum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Author:</source>
        <translation type="unfinished">ผู้เขียน</translation>
    </message>
    <message>
        <source>Get More:</source>
        <translation type="unfinished">รับมากกว่า</translation>
    </message>
    <message>
        <source>XML File:</source>
        <translation type="unfinished">แฟ้ม เอ็กซ์เอ็มแอล </translation>
    </message>
    <message>
        <source>Lorem Ipsum</source>
        <translation></translation>
    </message>
    <message>
        <source>Paragraphs:</source>
        <translation type="unfinished">พารากราฟ</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="unfinished">Alt+O</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
</context>
<context>
    <name>MSpinBox</name>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source>mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source>in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source>p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
</context>
<context>
    <name>MarginDialog</name>
    <message>
        <source>Manage Page Properties</source>
        <translation type="unfinished">จัดการคุณสมบัติหน้าเอกสาร</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished">ขนาดหน้า</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished">&amp;ขนาด:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">กำหนด</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished">การวางแนว</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished">แนวตั้ง</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished">แนวนอน</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished">ความกว้าง</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished">ความสูง</translation>
    </message>
    <message>
        <source>Move Objects with their Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type:</source>
        <translation type="unfinished">ชนิด:</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="unfinished">ระยะขอบ</translation>
    </message>
</context>
<context>
    <name>MarginWidget</name>
    <message>
        <source>Preset Layouts:</source>
        <translation type="unfinished">การจัดวางปัจจุบัน</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="unfinished">ล่าง:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="unfinished">บน:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="unfinished">ขวา:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="unfinished">ซ้าย:</translation>
    </message>
    <message>
        <source>Apply margin settings to all pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Apply the margin changes to all existing pages in the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation type="unfinished">Distance between the top margin guide and the edge of the page</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation type="unfinished">Distance between the bottom margin guide and the edge of the page</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page. If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page. If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation type="unfinished">ข้างใน:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation type="unfinished">ข้างนอก:</translation>
    </message>
    <message>
        <source>Printer Margins...</source>
        <translation type="unfinished">พิมพ์ริมขอบกระดาษ</translation>
    </message>
    <message>
        <source>Import the margins for the selected page size from the available printers.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MasterPagesPalette</name>
    <message>
        <source>Edit Master Pages</source>
        <translation type="unfinished">แก้ไขต้นฉบับ</translation>
    </message>
    <message>
        <source>Duplicate the selected master page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete the selected master page</source>
        <translation type="unfinished">เลือกลบต้นฉบับ</translation>
    </message>
    <message>
        <source>Add a new master page</source>
        <translation type="unfinished">เพิ่มต้นฉบับ</translation>
    </message>
    <message>
        <source>Import master pages from another document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you really want to delete this master page?</source>
        <translation type="unfinished">คุณต้องการลบต้นฉบับ?</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="unfinished">&amp;ใช่</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="unfinished">ไม่</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="unfinished">ชื่อ:</translation>
    </message>
    <message>
        <source>New Master Page</source>
        <translation type="unfinished">ต้นฉบับใหม่</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="unfinished">คัดลอก %1</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished">ชื่อ:</translation>
    </message>
    <message>
        <source>New MasterPage</source>
        <translation type="unfinished">ต้นฉบับใหม่</translation>
    </message>
    <message>
        <source>New Master Page %1</source>
        <translation type="unfinished">ต้นฉบับใหม่1เปอร์เซ็นต์</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished">Copy #%1 of </translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">ปกติ</translation>
    </message>
    <message>
        <source>Unable to Rename Master Page</source>
        <translation>ไม่สามารถตั้งชื่อต้นฉบับได้</translation>
    </message>
    <message>
        <source>The Normal page is not allowed to be renamed.</source>
        <translation type="unfinished">หน้าปกติไม่อนุญาตให้ตั้งชื่อใหม่</translation>
    </message>
    <message>
        <source>Rename Master Page</source>
        <translation type="unfinished">ตั้งชื่อต้นฉบับใหม่</translation>
    </message>
    <message>
        <source>New Name:</source>
        <translation type="unfinished">ชื่อใหม่</translation>
    </message>
</context>
<context>
    <name>Mdup</name>
    <message>
        <source>Multiple Duplicate</source>
        <translation type="unfinished">ฉบับคู่ มัลติเพิล</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>&amp;Number of Copies:</source>
        <translation type="unfinished">คัดลอกหมายเลข:</translation>
    </message>
    <message>
        <source>&amp;Horizontal Shift:</source>
        <translation type="unfinished">&amp;Horizontal Shift:</translation>
    </message>
    <message>
        <source>&amp;Vertical Shift:</source>
        <translation type="unfinished">&amp;Vertical Shift:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
</context>
<context>
    <name>Measurements</name>
    <message>
        <source>Distances</source>
        <translation type="unfinished">ระยะ</translation>
    </message>
    <message>
        <source>X1:</source>
        <translation type="unfinished">X1:</translation>
    </message>
    <message>
        <source>Y1:</source>
        <translation type="unfinished">Y1:</translation>
    </message>
    <message>
        <source>X2:</source>
        <translation type="unfinished">X2:</translation>
    </message>
    <message>
        <source>Y2:</source>
        <translation type="unfinished">Y2:</translation>
    </message>
    <message>
        <source>DX:</source>
        <translation type="unfinished">DX:</translation>
    </message>
    <message>
        <source>DY:</source>
        <translation type="unfinished">DY:</translation>
    </message>
    <message>
        <source>Angle:</source>
        <translation type="unfinished">มุม:</translation>
    </message>
    <message>
        <source>Length:</source>
        <translation type="unfinished">ความยาว:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="unfinished">pt</translation>
    </message>
</context>
<context>
    <name>MenuTest</name>
    <message>
        <source>Script error</source>
        <translation type="obsolete">Script error</translation>
    </message>
    <message>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation type="obsolete">If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation type="obsolete">Show &amp;Console</translation>
    </message>
    <message>
        <source>Hide &amp;Console</source>
        <translation type="obsolete">Hide &amp;Console</translation>
    </message>
    <message>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation type="obsolete">This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</translation>
    </message>
</context>
<context>
    <name>MergeDoc</name>
    <message>
        <source>Change...</source>
        <translation type="obsolete">Change...</translation>
    </message>
    <message>
        <source>Import</source>
        <translation type="obsolete">Import</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Cancel</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">เปิด</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="unfinished">เอกสาร (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="unfinished">เอกสาร (*.sla *.scd);;All Files (*)</translation>
    </message>
    <message>
        <source>Import Template</source>
        <translation type="obsolete">Import Template</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation type="unfinished">นำเข้าหน้า(s)</translation>
    </message>
    <message>
        <source>From Document:</source>
        <translation type="obsolete">From Document:</translation>
    </message>
    <message>
        <source>Import Page(s):</source>
        <translation type="obsolete">Import Page(s):</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="obsolete">Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</translation>
    </message>
    <message>
        <source> from 0</source>
        <translation type="unfinished">จาก 0</translation>
    </message>
    <message>
        <source>Create Page(s)</source>
        <translation type="unfinished">สร้างหน้ากระดาษ(s)</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation type="obsolete">before Page</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation type="obsolete">after Page</translation>
    </message>
    <message>
        <source>at End</source>
        <translation type="obsolete">at End</translation>
    </message>
    <message>
        <source> from %1</source>
        <translation type="unfinished">จาก %1</translation>
    </message>
    <message>
        <source>Import Master Page</source>
        <translation type="unfinished">นำเข้าหน้าหลัก</translation>
    </message>
    <message>
        <source>&amp;From Document:</source>
        <translation type="unfinished">จากเอกสาร</translation>
    </message>
    <message>
        <source>Chan&amp;ge...</source>
        <translation type="unfinished">เปลี่ยน</translation>
    </message>
    <message>
        <source>&amp;Import Page(s):</source>
        <translation type="unfinished">นำเข้าหน้า</translation>
    </message>
    <message>
        <source>&amp;Import Master Page</source>
        <translation type="unfinished">นำเข้าต้นฉบับ</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens import where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Before Page</source>
        <translation type="unfinished">หน้าก่อน</translation>
    </message>
    <message>
        <source>After Page</source>
        <translation type="unfinished">หลังจากหน้านี้</translation>
    </message>
    <message>
        <source>At End</source>
        <translation type="unfinished">จบ</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished">นำเข้า</translation>
    </message>
</context>
<context>
    <name>MissingFont</name>
    <message>
        <source>Missing Font</source>
        <translation type="unfinished">ตัวอักษรผิดพลาด</translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation type="unfinished">ตัวอักษร %1 ติดตั้งไม่ได้.</translation>
    </message>
    <message>
        <source>Use</source>
        <translation type="unfinished">ใช้</translation>
    </message>
    <message>
        <source>instead</source>
        <translation type="unfinished">แทนที่</translation>
    </message>
</context>
<context>
    <name>MovePages</name>
    <message>
        <source>Move Pages</source>
        <translation type="unfinished">ย้ายหน้า</translation>
    </message>
    <message>
        <source>Copy Page</source>
        <translation type="unfinished">สำเนาหน้า</translation>
    </message>
    <message>
        <source>Move Page(s):</source>
        <translation type="unfinished">ย้ายหน้า(s):</translation>
    </message>
    <message>
        <source>to:</source>
        <translation type="obsolete">to:</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation type="obsolete">before Page</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation type="obsolete">after Page</translation>
    </message>
    <message>
        <source>at End</source>
        <translation type="obsolete">at End</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>Move Page(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To:</source>
        <translation type="unfinished">ไป:</translation>
    </message>
    <message>
        <source>Number of copies:</source>
        <translation type="unfinished">จำนวนสำเนา</translation>
    </message>
    <message>
        <source>Before Page</source>
        <translation type="unfinished">หน้าก่อนหน้า</translation>
    </message>
    <message>
        <source>After Page</source>
        <translation type="unfinished">หน้าถัดไป</translation>
    </message>
    <message>
        <source>At End</source>
        <translation type="unfinished">จุดสิ้นสุด</translation>
    </message>
</context>
<context>
    <name>Mpalette</name>
    <message>
        <source>Properties</source>
        <translation type="unfinished">คุณสมบัติ</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">ชื่อ</translation>
    </message>
    <message>
        <source>Geometry</source>
        <translation type="unfinished">Geometry</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished">pt</translation>
    </message>
    <message>
        <source>Basepoint:</source>
        <translation type="unfinished">Basepoint:</translation>
    </message>
    <message>
        <source>Level</source>
        <translation type="unfinished">ลำดับ</translation>
    </message>
    <message>
        <source>Shape:</source>
        <translation type="unfinished">แรเงา:</translation>
    </message>
    <message>
        <source>Distance of Text</source>
        <translation type="unfinished">ระยะของข้อความ</translation>
    </message>
    <message>
        <source>Show Curve</source>
        <translation>แสดงเส้นโค้ง</translation>
    </message>
    <message>
        <source>Start Offset:</source>
        <translation type="unfinished">Start Offset:</translation>
    </message>
    <message>
        <source>Distance from Curve:</source>
        <translation type="unfinished">ระยะจากเส้นโค้ง:</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Custom Spacing</source>
        <translation type="obsolete">Custom Spacing</translation>
    </message>
    <message>
        <source>Input Profile:</source>
        <translation type="unfinished">เส้นรอบนอก:</translation>
    </message>
    <message>
        <source>Rendering Intent:</source>
        <translation type="unfinished">Rendering Intent:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="unfinished">Perceptual</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="unfinished">Relative Colourimetric</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished">Saturation</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="unfinished">Absolute Colourimetric</translation>
    </message>
    <message>
        <source>Left Point</source>
        <translation type="unfinished">Left Point</translation>
    </message>
    <message>
        <source>End Points</source>
        <translation type="unfinished">End Points</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation type="unfinished">Mitre Join</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation type="unfinished">Bevel Join</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation type="unfinished">Round Join</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation type="unfinished">Flat Cap</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation type="unfinished">Square Cap</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation type="unfinished">Round Cap</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation type="unfinished">ไม่มีแบบ</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation type="unfinished">ขนาดตัวหนังสือ</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation type="unfinished">Line Spacing</translation>
    </message>
    <message>
        <source>Manual Kerning</source>
        <translation type="obsolete">Manual Kerning</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Warning</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="obsolete">Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">OK</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation type="obsolete">Shade:</translation>
    </message>
    <message>
        <source>Name of selected object</source>
        <translation type="unfinished">เลือกชื่อวัตถุ</translation>
    </message>
    <message>
        <source>Horizontal position of current basepoint</source>
        <translation type="unfinished">Horizontal position of current basepoint</translation>
    </message>
    <message>
        <source>Vertical position of current basepoint</source>
        <translation type="unfinished">Vertical position of current basepoint</translation>
    </message>
    <message>
        <source>Width</source>
        <translation type="unfinished">ความกว้าง</translation>
    </message>
    <message>
        <source>Height</source>
        <translation type="unfinished">ความสูง</translation>
    </message>
    <message>
        <source>Rotation of object at current basepoint</source>
        <translation type="unfinished">Rotation of object at current basepoint</translation>
    </message>
    <message>
        <source>Point from which measurements or rotation angles are referenced</source>
        <translation type="unfinished">Point from which measurements or rotation angles are referenced</translation>
    </message>
    <message>
        <source>Select top left for basepoint</source>
        <translation type="unfinished">เลือกจุดสำคัญบนสุดด้านซ้าย</translation>
    </message>
    <message>
        <source>Select top right for basepoint</source>
        <translation type="unfinished">เลือกจุสำคัญบนสุดด้านขวา</translation>
    </message>
    <message>
        <source>Select bottom left for basepoint</source>
        <translation type="unfinished">เลือกจุดสำคัญท้ายสุดด้านซ้าย</translation>
    </message>
    <message>
        <source>Select bottom right for basepoint</source>
        <translation type="unfinished">เลือกจุดสำคัญท้ายสุดด้านขวา</translation>
    </message>
    <message>
        <source>Select center for basepoint</source>
        <translation type="unfinished">เลือกจุดสำคัญตรงกลาง</translation>
    </message>
    <message>
        <source>Flip Horizontal</source>
        <translation type="unfinished">Flip Horizontal</translation>
    </message>
    <message>
        <source>Flip Vertical</source>
        <translation type="unfinished">Flip Vertical</translation>
    </message>
    <message>
        <source>Move one level up</source>
        <translation type="unfinished">เลื่อนขึ้นไปอีกหนึ่งระดับ</translation>
    </message>
    <message>
        <source>Move one level down</source>
        <translation type="unfinished">ย้ายระดับลงมาอีกหนึ่ง</translation>
    </message>
    <message>
        <source>Move to front</source>
        <translation type="unfinished">ย้ายไปข้างหน้า</translation>
    </message>
    <message>
        <source>Move to back</source>
        <translation type="unfinished">ย้ายกลับ</translation>
    </message>
    <message>
        <source>Lock or unlock the object</source>
        <translation type="unfinished">ล๊อค หรือไม่ล๊อควัตถุ</translation>
    </message>
    <message>
        <source>Lock or unlock the size of the object</source>
        <translation type="unfinished">ล๊อค หรือไม่ล๊อค ขนาดของวัตถุ</translation>
    </message>
    <message>
        <source>Enable or disable printing of the object</source>
        <translation type="obsolete">สามารถ หรือไม่สามารถ พิมพ์วัตถุ</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation type="unfinished">เลือกข้อความตัวอักษร หรือวัตถุ</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation type="unfinished">Scaling width of characters</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation type="obsolete">Colour of text stroke</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation type="obsolete">Colour of text fill</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation type="unfinished">Saturation of colour of text stroke</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation type="unfinished">Saturation of colour of text fill</translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation type="unfinished">แบบพารากราฟปัจจุบัน</translation>
    </message>
    <message>
        <source>Change settings for left or end points</source>
        <translation type="unfinished">เปลี่ยนการตั้งค่าไปยังด้สนซ้าย หรือ จบ</translation>
    </message>
    <message>
        <source>Pattern of line</source>
        <translation type="unfinished">แบบลายเส้น</translation>
    </message>
    <message>
        <source>Thickness of line</source>
        <translation type="unfinished">เส้นหนา</translation>
    </message>
    <message>
        <source>Type of line joins</source>
        <translation type="unfinished">ชนิดของลายเส้น</translation>
    </message>
    <message>
        <source>Type of line end</source>
        <translation type="unfinished">ชนิดลายเส้นตอนจบ</translation>
    </message>
    <message>
        <source>Line style of current object</source>
        <translation type="unfinished">แบบลายเส้นของวัตถุปัจจุบัน</translation>
    </message>
    <message>
        <source>Choose the shape of frame...</source>
        <translation type="unfinished">เลือกรูปของเฟลม...</translation>
    </message>
    <message>
        <source>Edit shape of the frame...</source>
        <translation type="unfinished">แก้ไขรูปเฟลม...</translation>
    </message>
    <message>
        <source>Set radius of corner rounding</source>
        <translation type="unfinished">Set radius of corner rounding</translation>
    </message>
    <message>
        <source>Number of columns in text frame</source>
        <translation type="unfinished">จำนวนคอลัมน์ในเฟลมข้อความ</translation>
    </message>
    <message>
        <source>Distance between columns</source>
        <translation type="unfinished">ระยะห่างระหว่างคอลัมน์</translation>
    </message>
    <message>
        <source>Distance of text from top of frame</source>
        <translation>ระยะข้อความจากข้างบนสุดไปยังเฟลม</translation>
    </message>
    <message>
        <source>Distance of text from bottom of frame</source>
        <translation type="unfinished">ระยะข้อความจากข้างล่างไปยังเฟลม</translation>
    </message>
    <message>
        <source>Distance of text from left of frame</source>
        <translation type="unfinished">ระยะข้อความจากด้สนซ้ายไปยังเฟลม</translation>
    </message>
    <message>
        <source>Distance of text from right of frame</source>
        <translation type="unfinished">ระยะข้อความจากด้านขวาไปยังเฟลม</translation>
    </message>
    <message>
        <source>Edit tab settings of text frame...</source>
        <translation type="unfinished">ตั้งค่า แก้ไข แทป ของข้อความเฟลม...</translation>
    </message>
    <message>
        <source>Allow the image to be a different size to the frame</source>
        <translation type="unfinished">ยอมรับรูปที่มีความแตกต่างด้านขนาด เฟลม</translation>
    </message>
    <message>
        <source>Horizontal offset of image within frame</source>
        <translation type="unfinished">Horizontal offset of image within frame</translation>
    </message>
    <message>
        <source>Vertical offset of image within frame</source>
        <translation type="unfinished">Vertical offset of image within frame</translation>
    </message>
    <message>
        <source>Resize the image horizontally</source>
        <translation type="unfinished">Resize the image horizontally</translation>
    </message>
    <message>
        <source>Resize the image vertically</source>
        <translation type="unfinished">Resize the image vertically</translation>
    </message>
    <message>
        <source>Keep the X and Y scaling the same</source>
        <translation type="unfinished">เก็บแกนเอ็กซื และแกนวายให้เหมือนกัน</translation>
    </message>
    <message>
        <source>Make the image fit within the size of the frame</source>
        <translation type="unfinished">ทำรูปให้เหมาะสมกับขนาดของเฟลม</translation>
    </message>
    <message>
        <source>Use image proportions rather than those of the frame</source>
        <translation type="unfinished">ใช้รูปภาพสัดส่วนที่น้อยกว่าเฟลม</translation>
    </message>
    <message>
        <source>Cell Lines</source>
        <translation type="unfinished">เส้น เซลล์</translation>
    </message>
    <message>
        <source>Line at Top</source>
        <translation type="unfinished">ลายเส้นบนสุด</translation>
    </message>
    <message>
        <source>Line at the Left</source>
        <translation type="unfinished">ลายเส้นด้านซ้าย</translation>
    </message>
    <message>
        <source>Line at the Right </source>
        <translation type="unfinished">ลายเส้นด้านขวา</translation>
    </message>
    <message>
        <source>Line at Bottom</source>
        <translation type="unfinished">ลายเส้นด้านล่าง</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Keep the aspect ratio</source>
        <translation type="unfinished">รักษาเกณฑ์อัตราส่วน</translation>
    </message>
    <message>
        <source>Source profile of the image</source>
        <translation type="unfinished">แหล่งที่มาโปรไฟล์ของรูปภาพ</translation>
    </message>
    <message>
        <source>Rendering intent for the image</source>
        <translation type="unfinished">Rendering intent for the image</translation>
    </message>
    <message>
        <source>Path Text Properties</source>
        <translation type="unfinished">คุณสมบัติข้อความพาธ</translation>
    </message>
    <message>
        <source>Indicates the level the object is on, 0 means the object is at the bottom</source>
        <translation type="unfinished">Indicates the level the object is on, 0 means the object is at the bottom</translation>
    </message>
    <message>
        <source>Make text in lower frames flow around the object shape</source>
        <translation type="obsolete">Make text in lower frames flow around the object shape</translation>
    </message>
    <message>
        <source>Switches between Gap or Column width</source>
        <translation type="unfinished">สลับระหว่าง ระยะห่าง หรือ ความกว้างคอลัมน์</translation>
    </message>
    <message>
        <source>Column width</source>
        <translation type="unfinished">ความกว้างของคอลัมน์</translation>
    </message>
    <message>
        <source>X, Y, &amp;Z</source>
        <translation type="unfinished">X, Y, &amp;Z</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation type="unfinished">รูปร่าง</translation>
    </message>
    <message>
        <source>&amp;Text</source>
        <translation type="unfinished">ข้อความ</translation>
    </message>
    <message>
        <source>&amp;Image</source>
        <translation type="unfinished">รูปภาพ</translation>
    </message>
    <message>
        <source>&amp;Line</source>
        <translation type="unfinished">เส้น</translation>
    </message>
    <message>
        <source>&amp;Colors</source>
        <translation type="unfinished">สี</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation type="unfinished">&amp;X-Pos:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation type="unfinished">&amp;Y-Pos:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished">กว้าง:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished">สูง:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="unfinished">หมุน:</translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation type="unfinished">แก้ไขรูป...</translation>
    </message>
    <message>
        <source>R&amp;ound
Corners:</source>
        <translation type="unfinished">มุม:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation type="unfinished">คอลัมน์:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="unfinished">&amp;Gap:</translation>
    </message>
    <message>
        <source>To&amp;p:</source>
        <translation type="unfinished">สูงสุด:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="unfinished">ท้ายสุด</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="unfinished">ซ้าย</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="unfinished">ขวา</translation>
    </message>
    <message>
        <source>T&amp;abulators...</source>
        <translation type="unfinished">ตาราง</translation>
    </message>
    <message>
        <source>Text &amp;Flows Around Frame</source>
        <translation type="unfinished">ข้อความ โค้งตามเฟลม</translation>
    </message>
    <message>
        <source>Use &amp;Bounding Box</source>
        <translation type="unfinished">Use &amp;Bounding Box</translation>
    </message>
    <message>
        <source>&amp;Use Contour Line</source>
        <translation type="unfinished">ใช้ลายเส้นสี</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation type="obsolete">&amp;Font Size:</translation>
    </message>
    <message>
        <source>&amp;Kerning:</source>
        <translation type="obsolete">&amp;Kerning:</translation>
    </message>
    <message>
        <source>L&amp;ine Spacing:</source>
        <translation type="obsolete">L&amp;ine Spacing:</translation>
    </message>
    <message>
        <source>St&amp;yle:</source>
        <translation type="unfinished">แบบ</translation>
    </message>
    <message>
        <source>Lan&amp;guage:</source>
        <translation type="unfinished">ภาษา:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation type="unfinished">ฟรี สเกลล์</translation>
    </message>
    <message>
        <source>X-Sc&amp;ale:</source>
        <translation type="unfinished">X-Sc&amp;ale:</translation>
    </message>
    <message>
        <source>Y-Scal&amp;e:</source>
        <translation type="unfinished">Y-Scal&amp;e:</translation>
    </message>
    <message>
        <source>Scale &amp;To Frame Size</source>
        <translation type="unfinished">สเกลล์ขนาดเฟลม</translation>
    </message>
    <message>
        <source>P&amp;roportional</source>
        <translation type="unfinished">สัดส่วน</translation>
    </message>
    <message>
        <source>&amp;Basepoint:</source>
        <translation type="unfinished">&amp;Basepoint:</translation>
    </message>
    <message>
        <source>T&amp;ype of Line:</source>
        <translation type="unfinished">ชนิดของลายเส้น</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation type="unfinished">ความกว้างของเส้น</translation>
    </message>
    <message>
        <source>Ed&amp;ges:</source>
        <translation type="unfinished">ขอบ</translation>
    </message>
    <message>
        <source>&amp;Endings:</source>
        <translation type="unfinished">&amp;Endings:</translation>
    </message>
    <message>
        <source>&amp;X1:</source>
        <translation type="unfinished">&amp;X1:</translation>
    </message>
    <message>
        <source>X&amp;2:</source>
        <translation type="unfinished">X&amp;2:</translation>
    </message>
    <message>
        <source>Y&amp;1:</source>
        <translation type="unfinished">Y&amp;1:</translation>
    </message>
    <message>
        <source>&amp;Y2:</source>
        <translation type="unfinished">&amp;Y2:</translation>
    </message>
    <message>
        <source>Use a surrounding box instead of the frame&apos;s shape for text flow</source>
        <translation type="obsolete">Use a surrounding box instead of the frame&apos;s shape for text flow</translation>
    </message>
    <message>
        <source>Use a second line originally based on the frame&apos;s shape for text flow</source>
        <translation type="obsolete">Use a second line originally based on the frame&apos;s shape for text flow</translation>
    </message>
    <message>
        <source>Hyphenation language of frame</source>
        <translation type="unfinished">ภาษา (-)ของเฟลม</translation>
    </message>
    <message>
        <source>Right to Left Writing</source>
        <translation type="unfinished">เขียนจากขวาไปซ้าย</translation>
    </message>
    <message>
        <source>Fixed Linespacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatic Linespacing</source>
        <translation type="unfinished">ลายเส้นอัตโนมัติ</translation>
    </message>
    <message>
        <source>Align to Baseline Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.&lt;br/&gt;Please choose another.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Actual X-DPI:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Actual Y-DPI:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Start Arrow:</source>
        <translation type="unfinished">เริ่มต้นหัวลูกศร</translation>
    </message>
    <message>
        <source>End Arrow:</source>
        <translation type="unfinished">จบหัวลูกศร</translation>
    </message>
    <message>
        <source>Offset to baseline of characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scaling height of characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation type="unfinished">คู่มือแนวทาง</translation>
    </message>
    <message>
        <source>Fill Rule</source>
        <translation type="unfinished">เพิ่มแบบ</translation>
    </message>
    <message>
        <source>Even-Odd</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Non Zero</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of text stroke and/or drop shadow, depending which is chosen.If both are chosen, then they share the same color.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color of selected text. If Outline text decoration is enabled, this color will be the fill color. If Drop Shadow Text is enabled, then this will be the top most color.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make text in lower frames flow around the object. The options below define how this is enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use the bounding box, which is always rectangular, instead of the frame&apos;s shape for text flow of text frames below the object. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use a second line originally based on the frame&apos;s shape for text flow of text frames below the object. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Auto</source>
        <translation type="unfinished">อัตโนมัติ</translation>
    </message>
    <message>
        <source>Click and hold down to select the line spacing mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable or disable exporting of the object</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MultiLine</name>
    <message>
        <source>Edit Style</source>
        <translation type="unfinished">แก้ไขแบบ</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation type="unfinished">แบน แค๊ป</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation type="unfinished">สี่เหลี่ยมแค๊ป</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation type="unfinished">Round Cap</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation type="unfinished">Mitre Join</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation type="unfinished">Bevel Join</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation type="unfinished">Round Join</translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation type="unfinished">ความกว้างของเส้น</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished"> pt</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">ตกลง</translation>
    </message>
    <message>
        <source> pt </source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation type="unfinished">เส้นหนา</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation type="unfinished">เส้นขีดยาว</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation type="unfinished">เส้นปะ</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation type="unfinished">Dash Dot Line</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation type="unfinished">Dash Dot Dot Line</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Warning</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="obsolete">Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.&lt;br/&gt;Please choose another.</source>
        <translation type="unfinished">ชื่อ%1 ไม่ได้มีอันเดียว กรุณาเลือกชื่ออื่น</translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="unfinished">pt</translation>
    </message>
</context>
<context>
    <name>MultiProgressDialogBase</name>
    <message>
        <source>Progress</source>
        <translation type="unfinished">ดำเนินการต่อ</translation>
    </message>
    <message>
        <source>Overall Progress:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
</context>
<context>
    <name>MusterSeiten</name>
    <message>
        <source>Edit Templates</source>
        <translation type="obsolete">Edit Templates</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Warning</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="obsolete">Name:</translation>
    </message>
    <message>
        <source>New Template</source>
        <translation type="obsolete">New Template</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="obsolete">Copy of %1</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="obsolete">Copy #%1 of </translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normal</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="obsolete">&amp;Append</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;New</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="obsolete">D&amp;uplicate</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Delete</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Close</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="obsolete">&amp;No</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="obsolete">&amp;Yes</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="obsolete">&amp;Name:</translation>
    </message>
    <message>
        <source>Do you really want to delete this Template?</source>
        <translation type="obsolete">Do you really want to delete this Template?</translation>
    </message>
</context>
<context>
    <name>MyPlugin</name>
    <message>
        <source>My &amp;Plugin</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MyPluginImpl</name>
    <message>
        <source>Scribus - My Plugin</source>
        <translation type="unfinished">สไครบัส- ปลั๊กอิน</translation>
    </message>
    <message>
        <source>The plugin worked!</source>
        <translation type="unfinished">ปลั๊กอิน ทำงาน</translation>
    </message>
</context>
<context>
    <name>NewDoc</name>
    <message>
        <source>New Document</source>
        <translation type="unfinished">เอกสารใหม่</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished">ขนาดหน้า</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">ปรับแต่ง</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished">แนวตั้ง</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished">แนวนอน</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="unfinished">เส้นนำขอบหน้า</translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="unfinished">ตัวเลือก</translation>
    </message>
    <message>
        <source>Points (pts)</source>
        <translation type="obsolete">Points (pts)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation type="obsolete">Millimetres (mm)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="obsolete">Inches (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="obsolete">Picas (p)</translation>
    </message>
    <message>
        <source>Column Guides</source>
        <translation type="obsolete">Column Guides</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Document page size, either a standard size or a custom size</source>
        <translation type="unfinished">ขนาดหน้าเอกสาร, ขนาดมาตรฐานหรือปรับแต่งเอง</translation>
    </message>
    <message>
        <source>Orientation of the document&apos;s pages</source>
        <translation type="unfinished">รูปแบบการจัดหน้าเอกสาร</translation>
    </message>
    <message>
        <source>Width of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished">Width of the document&apos;s pages, editable if you have chosen a custom page size</translation>
    </message>
    <message>
        <source>Height of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished">Height of the document&apos;s pages, editable if you have chosen a custom page size</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation type="obsolete">Enable single or spread based layout</translation>
    </message>
    <message>
        <source>Make the first page the left page of the document</source>
        <translation type="obsolete">Make the first page the left page of the document</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation type="obsolete">Distance between the top margin guide and the edge of the page</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation type="obsolete">Distance between the bottom margin guide and the edge of the page</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</translation>
    </message>
    <message>
        <source>First page number of the document</source>
        <translation type="obsolete">First page number of the document</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation type="unfinished">หน่วยวัดมาตรฐานที่ใช้การแก้ไข</translation>
    </message>
    <message>
        <source>Create text frames automatically when new pages are added</source>
        <translation type="unfinished">สร้างเท็กซ์เฟรมอัตโนมัติเมื่อเพิ่มหน้าเอกสารใหม่</translation>
    </message>
    <message>
        <source>Distance between automatically created columns</source>
        <translation type="unfinished">ระยะห่างเมื่อสร้างคอลัมน์</translation>
    </message>
    <message>
        <source>Number of columns to create in automatically created text frames</source>
        <translation type="unfinished">จำนวนคอลัมน์เมื่อสร้างเท็กซ์เฟรม</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation type="obsolete">Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation type="obsolete">Letter</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation type="obsolete">Tabloid</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished">ขนาด:</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished">แนวกระดาษ:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished">กว้าง:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished">สูง:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation type="obsolete">&amp;Facing Pages</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation type="obsolete">Left &amp;Page First</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="obsolete">&amp;Left:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="obsolete">&amp;Right:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="obsolete">&amp;Top:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="obsolete">&amp;Bottom:</translation>
    </message>
    <message>
        <source>F&amp;irst Page Number:</source>
        <translation type="obsolete">F&amp;irst Page Number:</translation>
    </message>
    <message>
        <source>&amp;Default Unit:</source>
        <translation type="unfinished">หน่วยมาตรฐาน:</translation>
    </message>
    <message>
        <source>&amp;Automatic Text Frames</source>
        <translation type="unfinished">เท็กซ์เฟรมอัตโนมัติ</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="unfinished">ระยะห่าง:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation type="unfinished">คอลัมน์:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation type="obsolete">&amp;Inside:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation type="obsolete">O&amp;utside:</translation>
    </message>
    <message>
        <source>Executive</source>
        <translation type="obsolete">Executive</translation>
    </message>
    <message>
        <source>Folio</source>
        <translation type="obsolete">Folio</translation>
    </message>
    <message>
        <source>Ledger</source>
        <translation type="obsolete">Ledger</translation>
    </message>
    <message>
        <source>&amp;New Document</source>
        <translation type="unfinished">เอกสารใหม่</translation>
    </message>
    <message>
        <source>Open &amp;Existing Document</source>
        <translation type="unfinished">เปิดเอกสารเดิม</translation>
    </message>
    <message>
        <source>Open Recent &amp;Document</source>
        <translation type="unfinished">เปิดเอกสารล่าสุด</translation>
    </message>
    <message>
        <source>Do not show this dialog again</source>
        <translation type="unfinished">ไม่แสดงหน้านี้อีกต่อไป</translation>
    </message>
    <message>
        <source>Initial number of pages of the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>N&amp;umber of Pages:</source>
        <translation type="unfinished">จำนวนหน้า</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">เปิด</translation>
    </message>
</context>
<context>
    <name>NewFromTemplatePlugin</name>
    <message>
        <source>New &amp;from Template...</source>
        <translation type="unfinished">สร้างแบบใหม่</translation>
    </message>
    <message>
        <source>Load documents with predefined layout</source>
        <translation type="unfinished">โหลดเอกสารกับแบบคำศัพท์ล่วงหน้า</translation>
    </message>
    <message>
        <source>Start a document from a template made by other users or yourself (f.e. for documents you have a constant style).</source>
        <translation type="unfinished">เริ่มต้นทำเอกสารใหม่โดยผู้ใช้คนอื่นหรือตัวคุณเอง</translation>
    </message>
</context>
<context>
    <name>NewTm</name>
    <message>
        <source>Left Page</source>
        <translation type="obsolete">Left Page</translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation type="obsolete">Right Page</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
</context>
<context>
    <name>NodePalette</name>
    <message>
        <source>Nodes</source>
        <translation type="unfinished">ปุ่ม</translation>
    </message>
    <message>
        <source>Move Nodes</source>
        <translation type="unfinished">ย้ายปุ่ม</translation>
    </message>
    <message>
        <source>Move Control Points</source>
        <translation type="unfinished">ย้ายการบังคับ</translation>
    </message>
    <message>
        <source>Add Nodes</source>
        <translation type="unfinished">เพิ่มปุ่ม</translation>
    </message>
    <message>
        <source>Delete Nodes</source>
        <translation type="unfinished">ลบปุ่ม</translation>
    </message>
    <message>
        <source>Reset Control Points</source>
        <translation type="unfinished">ตั้งค่าบังคับย้อยท์</translation>
    </message>
    <message>
        <source>Reset this Control Point</source>
        <translation type="unfinished">ตั้งค่าบังคับพ้อยท์อีกครั้ง</translation>
    </message>
    <message>
        <source>When checked use Coordinates relative to the Page,
otherwise Coordinates are relative to the Object.</source>
        <translation type="obsolete">When checked use Coordinates relative to the Page,
otherwise Coordinates are relative to the Object.</translation>
    </message>
    <message>
        <source>&amp;Absolute Coordinates</source>
        <translation type="unfinished">ประสาน</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation type="unfinished">&amp;X-Pos:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation type="unfinished">&amp;Y-Pos:</translation>
    </message>
    <message>
        <source>Edit &amp;Contour Line</source>
        <translation type="unfinished">แก้ไข เส้นแสดงรูปร่าง</translation>
    </message>
    <message>
        <source>&amp;Reset Contour Line</source>
        <translation type="unfinished">ตั้งค่าเส้นแสดงรูปร่าง</translation>
    </message>
    <message>
        <source>&amp;End Editing</source>
        <translation type="unfinished">แก้ไขเสร็จสิ้น</translation>
    </message>
    <message>
        <source>Move Control Points Independently</source>
        <translation type="unfinished">ยา้ยจุดบังคับอิสระ
</translation>
    </message>
    <message>
        <source>Move Control Points Symmetrical</source>
        <translation type="unfinished">ย้ายจุดบังคับสัดส่วย</translation>
    </message>
    <message>
        <source>Open a Polygon or Cuts a Bezier Curve</source>
        <translation type="unfinished">เปิดด้านเหลี่ยน หรือ ตัด เส้นโค้ง</translation>
    </message>
    <message>
        <source>Close this Bezier Curve</source>
        <translation type="unfinished">ปิดเส้นโค้ง</translation>
    </message>
    <message>
        <source>Mirror the Path Horizontally</source>
        <translation type="unfinished">Mirror the Path Horizontally</translation>
    </message>
    <message>
        <source>Mirror the Path Vertically</source>
        <translation type="unfinished">Mirror the Path Vertically</translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Left</source>
        <translation type="unfinished">Shear the Path Horizontally to the Left</translation>
    </message>
    <message>
        <source>Shear the Path Vertically Up</source>
        <translation type="unfinished">ตัด พาธเส้นตั้งตรงขึ้นไป</translation>
    </message>
    <message>
        <source>Shear the Path Vertically Down</source>
        <translation type="unfinished">ตัดพาธเส้นตรงลงมา</translation>
    </message>
    <message>
        <source>Rotate the Path Counter-Clockwise</source>
        <translation type="unfinished">หมุนจากขวาไปซ้าย</translation>
    </message>
    <message>
        <source>Rotate the Path Clockwise</source>
        <translation type="unfinished">หมุนจากซ้ายไปขวา</translation>
    </message>
    <message>
        <source>Reduce the Size of the Path by shown %</source>
        <translation type="obsolete">Reduce the Size of the Path by shown %</translation>
    </message>
    <message>
        <source>Enlarge the Size of the Path by shown %</source>
        <translation type="unfinished">แสดงภาพขยายของพาธ %</translation>
    </message>
    <message>
        <source>Angle of Rotation</source>
        <translation type="unfinished">หมุนมุม</translation>
    </message>
    <message>
        <source>% to Enlarge or Reduce By</source>
        <translation type="obsolete">% to Enlarge or Reduce By</translation>
    </message>
    <message>
        <source>Activate Contour Line Editing Mode</source>
        <translation type="unfinished">ลงมือแก้ไขเส้นแบบแสดงรูปร่าง</translation>
    </message>
    <message>
        <source>Reset the Contour Line to the Original Shape of the Frame</source>
        <translation type="unfinished">Reset the Contour Line to the Original Shape of the Frame</translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Right</source>
        <translation type="unfinished">Shear the Path Horizontally to the Right</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>When checked use coordinates relative to the page, otherwise coordinates are relative to the Object.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shrink the Size of the Path by shown %</source>
        <translation type="unfinished">ย่อขนาดภาพโดยแสดงเป็นเปอร์เซ็ฯต์</translation>
    </message>
    <message>
        <source>Reduce the Size of the Path by the shown value</source>
        <translation type="unfinished">ย่อขนาดชองพาธโดยแสดงค่า</translation>
    </message>
    <message>
        <source>Enlarge the Size of the Path by the shown value</source>
        <translation type="unfinished">ขนาดภาพขยายของพาธ โดยแสดงค่า</translation>
    </message>
    <message>
        <source>% to Enlarge or Shrink By</source>
        <translation type="unfinished">ภาพขยาย หรือ หดภาพ</translation>
    </message>
    <message>
        <source>Value to Enlarge or Shrink By</source>
        <translation type="unfinished">แสดงค่าของภาพขาย หรือ ย่อขนาดภาพโดย</translation>
    </message>
    <message>
        <source>to Canvas</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>to Page</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OODPlug</name>
    <message>
        <source>This document does not seem to be an OpenOffice Draw file.</source>
        <translation type="unfinished">เอกสารนี้ไม่เหมือน กับเปิดออฟฟิต ดรอ ไฟล์</translation>
    </message>
</context>
<context>
    <name>OODrawImportPlugin</name>
    <message>
        <source>Import &amp;OpenOffice.org Draw...</source>
        <translation type="unfinished">นำเข้า &amp;เปิดเอกสารแสดง.org วาดภาพ...</translation>
    </message>
    <message>
        <source>Imports OpenOffice.org Draw Files</source>
        <translation type="unfinished">เปิดอ๊อฟฟิตนำเข้า.โออาร์จี แฟ้มวาดภาพ</translation>
    </message>
    <message>
        <source>Imports most OpenOffice.org Draw files into the current document, converting their vector data into Scribus objects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OpenDocument 1.0 Draw</source>
        <comment>Import/export format name</comment>
        <translation type="unfinished">เปิดเอกสารวาดภาพ 1.0</translation>
    </message>
    <message>
        <source>OpenOffice.org 1.x Draw</source>
        <comment>Import/export format name</comment>
        <translation type="unfinished">เปิดออฟฟิต.โออาร์จี วาดภาพ 1.x</translation>
    </message>
    <message>
        <source>This file contains some unsupported features</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OdtDialog</name>
    <message>
        <source>OpenDocument Importer Options</source>
        <translation type="unfinished">เปิดเอกสารตัวเลือกนำเข้า</translation>
    </message>
    <message>
        <source>Overwrite Paragraph Styles</source>
        <translation type="unfinished">โอเว่อร์ไรท์แบบพารากราฟ</translation>
    </message>
    <message>
        <source>Enabling this will overwrite existing styles in the current Scribus document</source>
        <translation type="unfinished">เอกสารสริปบัสฉบับนี้ไม่สามารถเขียนแบบได้</translation>
    </message>
    <message>
        <source>Merge Paragraph Styles</source>
        <translation type="unfinished">รูปแบบพารากราฟแบบผสม</translation>
    </message>
    <message>
        <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document&apos;s styles are named differently.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation type="unfinished">ใช้ชื่อนำหน้าเอกสารสำหรับรูปแบบของพารากราฟ</translation>
    </message>
    <message>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation type="unfinished">เตรียมชื่อเอกสารไปยังแบบพารากราฟ ชื่อในสริปบัส</translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation type="unfinished">ห้ามถามอีก</translation>
    </message>
    <message>
        <source>Make these settings the default and do not prompt again when importing an OASIS OpenDocument.</source>
        <translation type="unfinished">ไม่มีการตั้งค่า และไม่มีการทำในทันที เมื่อมีการเปิดเอกสารนำเข้าโอเอซิส</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">ตกลง</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
</context>
<context>
    <name>OldScribusFormat</name>
    <message>
        <source>Scribus Document</source>
        <translation type="unfinished">เอกสารสริปบัส</translation>
    </message>
    <message>
        <source>Scribus 1.2.x Document</source>
        <translation type="unfinished">เอกสารสริปบัส1.2.x</translation>
    </message>
</context>
<context>
    <name>OutlineValues</name>
    <message>
        <source> %</source>
        <translation type="unfinished">เปอร์เซ็นต์</translation>
    </message>
    <message>
        <source>Linewidth</source>
        <translation type="unfinished">ความกว้างของเส้น</translation>
    </message>
</context>
<context>
    <name>PConsole</name>
    <message>
        <source>Script Console</source>
        <translation type="obsolete">Script Console</translation>
    </message>
</context>
<context>
    <name>PDFExportDialog</name>
    <message>
        <source>Save as PDF</source>
        <translation type="unfinished">บันทึกเป็น พีดีเอฟ</translation>
    </message>
    <message>
        <source>O&amp;utput to File:</source>
        <translation type="unfinished">จำนวนแฟ้มส่งออก:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation type="unfinished">เปลี่ยน...</translation>
    </message>
    <message>
        <source>Output one file for eac&amp;h page</source>
        <translation type="unfinished">จำนวนแฟ้มส่งออกจำนวนหนึ่งต่อหน้า</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished">บันทึก</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished">บันทึกเป็น</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation type="unfinished">แฟ้มพีดีเอฟ (*.pdf);;All Files (*)</translation>
    </message>
    <message>
        <source>This enables exporting one individually named PDF file for each page in the document. Page numbers are added automatically. This is most useful for imposing PDF for commercial printing.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The save button will be disabled if you are trying to export PDF/X-3 and the info string is missing from the PDF/X-3 tab.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PDF_Opts</name>
    <message>
        <source>Export Range</source>
        <translation type="obsolete">Export Range</translation>
    </message>
    <message>
        <source>File Options</source>
        <translation type="obsolete">File Options</translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation type="obsolete">Left Margin</translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation type="obsolete">Right Margin</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="obsolete"> dpi</translation>
    </message>
    <message>
        <source>General</source>
        <translation type="obsolete">General</translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation type="obsolete">Embedding</translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation type="obsolete">Available Fonts:</translation>
    </message>
    <message>
        <source>Fonts to embed:</source>
        <translation type="obsolete">Fonts to embed:</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="obsolete">Page</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation type="obsolete">Effects</translation>
    </message>
    <message>
        <source> sec</source>
        <translation type="obsolete"> sec</translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation type="obsolete">No Effect</translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation type="obsolete">Blinds</translation>
    </message>
    <message>
        <source>Box</source>
        <translation type="obsolete">Box</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation type="obsolete">Dissolve</translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation type="obsolete">Glitter</translation>
    </message>
    <message>
        <source>Split</source>
        <translation type="obsolete">Split</translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation type="obsolete">Wipe</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="obsolete">Horizontal</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="obsolete">Vertical</translation>
    </message>
    <message>
        <source>Inside</source>
        <translation type="obsolete">Inside</translation>
    </message>
    <message>
        <source>Outside</source>
        <translation type="obsolete">Outside</translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation type="obsolete">Left to Right</translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation type="obsolete">Top to Bottom</translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation type="obsolete">Bottom to Top</translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation type="obsolete">Right to Left</translation>
    </message>
    <message>
        <source>Top-left to Bottom-Right</source>
        <translation type="obsolete">Top-left to Bottom-Right</translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation type="obsolete">Passwords</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation type="obsolete">Settings</translation>
    </message>
    <message>
        <source>Screen / Web</source>
        <translation type="obsolete">Screen / Web</translation>
    </message>
    <message>
        <source>Printer</source>
        <translation type="obsolete">Printer</translation>
    </message>
    <message>
        <source>Solid Colors:</source>
        <translation type="obsolete">Solid Colours:</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation type="obsolete">Profile:</translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation type="obsolete">Rendering-Intent:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="obsolete">Perceptual</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="obsolete">Relative Colourimetric</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="obsolete">Saturation</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="obsolete">Absolute Colourimetric</translation>
    </message>
    <message>
        <source>Images:</source>
        <translation type="obsolete">Images:</translation>
    </message>
    <message>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation type="obsolete">Don&apos;t use embedded ICC profiles</translation>
    </message>
    <message>
        <source>PDF/X-3 Output Intent</source>
        <translation type="obsolete">PDF/X-3 Output Intent</translation>
    </message>
    <message>
        <source>Trim Box</source>
        <translation type="obsolete">Trim Box</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="obsolete">Save as</translation>
    </message>
    <message>
        <source>Image Settings</source>
        <translation type="obsolete">Image Settings</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation type="obsolete">Automatic</translation>
    </message>
    <message>
        <source>JPEG</source>
        <translation type="obsolete">JPEG</translation>
    </message>
    <message>
        <source>Zip</source>
        <translation type="obsolete">Zip</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation type="obsolete">Maximum</translation>
    </message>
    <message>
        <source>High</source>
        <translation type="obsolete">High</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="obsolete">Medium</translation>
    </message>
    <message>
        <source>Low</source>
        <translation type="obsolete">Low</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation type="obsolete">Minimum</translation>
    </message>
    <message>
        <source>Export all pages to PDF</source>
        <translation type="obsolete">Export all pages to PDF</translation>
    </message>
    <message>
        <source>Export a range of pages to PDF</source>
        <translation type="obsolete">Export a range of pages to PDF</translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page.</source>
        <translation type="obsolete">Length of time the page is shown before the presentation starts on the selected page.</translation>
    </message>
    <message>
        <source>Length of time the effect runs.
A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation type="obsolete">Length of time the effect runs.
A shorter time will speed up the effect, a longer one will slow it down.</translation>
    </message>
    <message>
        <source>Apply the selected effect to all pages.</source>
        <translation type="obsolete">Apply the selected effect to all pages.</translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the
security features in your exported PDF</source>
        <translation type="obsolete">Choose a master password which enables or disables all the
security features in your exported PDF</translation>
    </message>
    <message>
        <source>Embed a color profile for solid colors</source>
        <translation type="obsolete">Embed a colour profile for solid colours</translation>
    </message>
    <message>
        <source>Embed a color profile for images</source>
        <translation type="obsolete">Embed a colour profile for images</translation>
    </message>
    <message>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation type="obsolete">Do not use colour profiles that are embedded in source images</translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="obsolete">Distance for bleed from the top of the physical page</translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="obsolete">Distance for bleed from the bottom of the physical page</translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="obsolete">Distance for bleed from the left of the physical page</translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="obsolete">Distance for bleed from the right of the physical page</translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation type="obsolete">&amp;General</translation>
    </message>
    <message>
        <source>&amp;Fonts</source>
        <translation type="obsolete">&amp;Fonts</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Determines the PDF compatibility. The default is Acrobat 4.0 which gives the widest compatibility.
Choose Acrobat 5.0 if your file has PDF 1.4 features such as transparency or you require 128 bit encryption.
PDF/X-3 is for exporting the PDF for commercial printing and is selectable when you have activated color management.</source>
        <translation type="obsolete">Determines the PDF compatibility. The default is Acrobat 4.0 which gives the widest compatibility.
Choose Acrobat 5.0 if your file has PDF 1.4 features such as transparency or you require 128 bit encryption.
PDF/X-3 is for exporting the PDF for commercial printing and is selectable when you have activated colour management.</translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know
you need to change it leave the default choice - Left.</source>
        <translation type="obsolete">Determines the binding of pages in the PDF. Unless you know
you need to change it leave the default choice - Left.</translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF.
Some viewers can use the thumbnails for navigation.</source>
        <translation type="obsolete">Generates thumbnails of each page in the PDF.
Some viewers can use the thumbnails for navigation.</translation>
    </message>
    <message>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation type="obsolete">Generate PDF Articles, which is useful for navigating linked articles in a PDF.</translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document.
These are useful for navigating long PDF documents.</source>
        <translation type="obsolete">Embed the bookmarks you created in your document.
These are useful for navigating long PDF documents.</translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics.
This does not affect the resolution of bitmap images like photos.</source>
        <translation type="obsolete">Export resolution of text and vector graphics.
This does not affect the resolution of bitmap images like photos.</translation>
    </message>
    <message>
        <source>Compression of text and graphics.
Unless you have a reason, leave this checked. This reduces PDF size.</source>
        <translation type="obsolete">Compression of text and graphics.
Unless you have a reason, leave this checked. This reduces PDF size.</translation>
    </message>
    <message>
        <source>Version of compression for images.
Automatic allows Scribus to choose the best method.
ZIP is good for images with solid colors.
JPEG is better at creating smaller PDF files which have many photos (with slight image loss possible).
Leave it set to automatic, unless you have a need for special compression options.</source>
        <translation type="obsolete">Version of compression for images.
Automatic allows Scribus to choose the best method.
ZIP is good for images with solid colours.
JPEG is better at creating smaller PDF files which have many photos (with slight image loss possible).
Leave it set to automatic, unless you have a need for special compression options.</translation>
    </message>
    <message>
        <source>Downsample your bitmap images to the selected DPI.
Leaving this unchecked will render them at their native resolution.</source>
        <translation type="obsolete">Downsample your bitmap images to the selected DPI.
Leaving this unchecked will render them at their native resolution.</translation>
    </message>
    <message>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation type="obsolete">DPI (Dots Per Inch) for image export.</translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts
will preserve the layout and appearance of your document.</source>
        <translation type="obsolete">Embed fonts into the PDF. Embedding the fonts
will preserve the layout and appearance of your document.</translation>
    </message>
    <message>
        <source>Enables presentation effects when using Acrobat Reader in full screen mode.</source>
        <translation type="obsolete">Enables presentation effects when using Acrobat Reader in full screen mode.</translation>
    </message>
    <message>
        <source>Show page previews of each page listed above.</source>
        <translation type="obsolete">Show page previews of each page listed above.</translation>
    </message>
    <message>
        <source>Type of the display effect.</source>
        <translation type="obsolete">Type of the display effect.</translation>
    </message>
    <message>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation type="obsolete">Direction of the effect of moving lines for the split and blind effects.</translation>
    </message>
    <message>
        <source>Starting position for the box and split effects.</source>
        <translation type="obsolete">Starting position for the box and split effects.</translation>
    </message>
    <message>
        <source>Direction of the glitter or wipe effects.</source>
        <translation type="obsolete">Direction of the glitter or wipe effects.</translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF.
If you selected Acrobat 4.0, the PDF will be protected by 40 bit encryption.
If you selected Acrobat 5.0, the PDF will be protected by 128 bit encryption.
Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation type="obsolete">Enable the security features in your exported PDF.
If you selected Acrobat 4.0, the PDF will be protected by 40 bit encryption.
If you selected Acrobat 5.0, the PDF will be protected by 128 bit encryption.
Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</translation>
    </message>
    <message>
        <source>Color model for the output of your PDF.
Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets.
Choose Printer when printing to a true 4 color CMYK printer.</source>
        <translation type="obsolete">Colour model for the output of your PDF.
Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets.
Choose Printer when printing to a true 4 colour CMYK printer.</translation>
    </message>
    <message>
        <source>Color profile for solid colors</source>
        <translation type="obsolete">Colour profile for solid colours</translation>
    </message>
    <message>
        <source>Rendering intent for solid colors</source>
        <translation type="obsolete">Rendering intent for solid colours</translation>
    </message>
    <message>
        <source>Color profile for images</source>
        <translation type="obsolete">Colour profile for images</translation>
    </message>
    <message>
        <source>Rendering intent for images</source>
        <translation type="obsolete">Rendering intent for images</translation>
    </message>
    <message>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation type="obsolete">Output profile for printing. If possible, get some guidance from your printer on profile selection.</translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail
PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation type="obsolete">Mandatory string for PDF/X-3 or the PDF will fail
PDF/X-3 conformance. We recommend you use the title of the document.</translation>
    </message>
    <message>
        <source>Compression levels: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%)</source>
        <translation type="obsolete">Compression levels: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%)</translation>
    </message>
    <message>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation type="obsolete">Choose a password for users to be able to read your PDF.</translation>
    </message>
    <message>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation type="obsolete">Allow printing of the PDF. If un-checked, printing is prevented. </translation>
    </message>
    <message>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation type="obsolete">Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. 
If un-checked, text and graphics cannot be copied.</source>
        <translation type="obsolete">Allow copying of text or graphics from the PDF. 
If un-checked, text and graphics cannot be copied.</translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. 
If un-checked, editing annotations and fileds is prevented.</source>
        <translation type="obsolete">Allow adding annotations and fields to the PDF. 
If un-checked, editing annotations and fileds is prevented.</translation>
    </message>
    <message>
        <source>Create PDF File</source>
        <translation type="obsolete">Create PDF File</translation>
    </message>
    <message>
        <source>O&amp;utput to File:</source>
        <translation type="obsolete">O&amp;utput to File:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation type="obsolete">Cha&amp;nge...</translation>
    </message>
    <message>
        <source>&amp;All Pages</source>
        <translation type="obsolete">&amp;All Pages</translation>
    </message>
    <message>
        <source>C&amp;hoose Pages</source>
        <translation type="obsolete">C&amp;hoose Pages</translation>
    </message>
    <message>
        <source>Compatibilit&amp;y:</source>
        <translation type="obsolete">Compatibilit&amp;y:</translation>
    </message>
    <message>
        <source>&amp;Binding:</source>
        <translation type="obsolete">&amp;Binding:</translation>
    </message>
    <message>
        <source>Generate &amp;Thumbnails</source>
        <translation type="obsolete">Generate &amp;Thumbnails</translation>
    </message>
    <message>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation type="obsolete">Save &amp;Linked Text Frames as PDF Articles</translation>
    </message>
    <message>
        <source>&amp;Include Bookmarks</source>
        <translation type="obsolete">&amp;Include Bookmarks</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation type="obsolete">&amp;Resolution:</translation>
    </message>
    <message>
        <source>&amp;Method:</source>
        <translation type="obsolete">&amp;Method:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation type="obsolete">&amp;Quality:</translation>
    </message>
    <message>
        <source>&amp;Downsample Images to:</source>
        <translation type="obsolete">&amp;Downsample Images to:</translation>
    </message>
    <message>
        <source>&amp;Embed all Fonts</source>
        <translation type="obsolete">&amp;Embed all Fonts</translation>
    </message>
    <message>
        <source>&amp;&gt;&gt;</source>
        <translation type="obsolete">&amp;&gt;&gt;</translation>
    </message>
    <message>
        <source>&amp;&lt;&lt;</source>
        <translation type="obsolete">&amp;&lt;&lt;</translation>
    </message>
    <message>
        <source>Show Page Pre&amp;views</source>
        <translation type="obsolete">Show Page Pre&amp;views</translation>
    </message>
    <message>
        <source>&amp;Display Duration:</source>
        <translation type="obsolete">&amp;Display Duration:</translation>
    </message>
    <message>
        <source>Effec&amp;t Duration:</source>
        <translation type="obsolete">Effec&amp;t Duration:</translation>
    </message>
    <message>
        <source>Effect T&amp;ype:</source>
        <translation type="obsolete">Effect T&amp;ype:</translation>
    </message>
    <message>
        <source>&amp;Moving Lines:</source>
        <translation type="obsolete">&amp;Moving Lines:</translation>
    </message>
    <message>
        <source>F&amp;rom the:</source>
        <translation type="obsolete">F&amp;rom the:</translation>
    </message>
    <message>
        <source>D&amp;irection:</source>
        <translation type="obsolete">D&amp;irection:</translation>
    </message>
    <message>
        <source>&amp;Apply Effect on all Pages</source>
        <translation type="obsolete">&amp;Apply Effect on all Pages</translation>
    </message>
    <message>
        <source>&amp;Use Encryption</source>
        <translation type="obsolete">&amp;Use Encryption</translation>
    </message>
    <message>
        <source>&amp;User:</source>
        <translation type="obsolete">&amp;User:</translation>
    </message>
    <message>
        <source>&amp;Owner:</source>
        <translation type="obsolete">&amp;Owner:</translation>
    </message>
    <message>
        <source>Allow &amp;Printing the Document</source>
        <translation type="obsolete">Allow &amp;Printing the Document</translation>
    </message>
    <message>
        <source>Allow &amp;Changing the Document</source>
        <translation type="obsolete">Allow &amp;Changing the Document</translation>
    </message>
    <message>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation type="obsolete">Allow Cop&amp;ying Text and Graphics</translation>
    </message>
    <message>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation type="obsolete">Allow Adding &amp;Annotations and Fields</translation>
    </message>
    <message>
        <source>S&amp;ecurity</source>
        <translation type="obsolete">S&amp;ecurity</translation>
    </message>
    <message>
        <source>Output &amp;Intended For:</source>
        <translation type="obsolete">Output &amp;Intended For:</translation>
    </message>
    <message>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation type="obsolete">&amp;Use Custom Rendering Settings</translation>
    </message>
    <message>
        <source>Rendering Settings</source>
        <translation type="obsolete">Rendering Settings</translation>
    </message>
    <message>
        <source>Fre&amp;quency:</source>
        <translation type="obsolete">Fre&amp;quency:</translation>
    </message>
    <message>
        <source>&amp;Angle:</source>
        <translation type="obsolete">&amp;Angle:</translation>
    </message>
    <message>
        <source>S&amp;pot Function:</source>
        <translation type="obsolete">S&amp;pot Function:</translation>
    </message>
    <message>
        <source>Simple Dot</source>
        <translation type="obsolete">Simple Dot</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="obsolete">Line</translation>
    </message>
    <message>
        <source>Round</source>
        <translation type="obsolete">Round</translation>
    </message>
    <message>
        <source>Ellipse</source>
        <translation type="obsolete">Ellipse</translation>
    </message>
    <message>
        <source>Use ICC Profile</source>
        <translation type="obsolete">Use ICC Profile</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation type="obsolete">C&amp;olour</translation>
    </message>
    <message>
        <source>&amp;Info String:</source>
        <translation type="obsolete">&amp;Info String:</translation>
    </message>
    <message>
        <source>Output &amp;Profile:</source>
        <translation type="obsolete">Output &amp;Profile:</translation>
    </message>
    <message>
        <source>PDF/X-&amp;3</source>
        <translation type="obsolete">PDF/X-&amp;3</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="obsolete">&amp;Save</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="obsolete">Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation type="obsolete">PDF Files (*.pdf);;All Files (*)</translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled
when specifically requested by your printer and they have given you the exact details needed.
Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation type="obsolete">This is an advanced setting which is not enabled by default. This should only be enabled
when specifically requested by your printer and they have given you the exact details needed.
Otherwise, your exported PDF may not print properly and is truly not portable across systems.</translation>
    </message>
    <message>
        <source>Compress Text and &amp;Vector Graphics</source>
        <translation type="obsolete">Compress Text and &amp;Vector Graphics</translation>
    </message>
    <message>
        <source>En&amp;able Presentation Effects</source>
        <translation type="obsolete">En&amp;able Presentation Effects</translation>
    </message>
    <message>
        <source>&amp;Presentation</source>
        <translation type="obsolete">&amp;Presentation</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="obsolete">&amp;Rotation:</translation>
    </message>
    <message>
        <source>&amp;Subset all Fonts</source>
        <translation type="obsolete">&amp;Subset all Fonts</translation>
    </message>
    <message>
        <source>Fonts to subset:</source>
        <translation type="obsolete">Fonts to subset:</translation>
    </message>
    <message>
        <source>Mirror Page(s) horizontally</source>
        <translation type="obsolete">Mirror Page(s) horizontally</translation>
    </message>
    <message>
        <source>Mirror Page(s) vertically</source>
        <translation type="obsolete">Mirror Page(s) vertically</translation>
    </message>
</context>
<context>
    <name>PDFlib</name>
    <message>
        <source>Saving PDF</source>
        <translation type="unfinished">บันทึก พีดีเอฟ</translation>
    </message>
    <message>
        <source>Exporting Master Pages:</source>
        <translation type="unfinished">ส่งออกต้นฉบับ</translation>
    </message>
    <message>
        <source>Exporting Pages:</source>
        <translation type="unfinished">ส่งออกหน้ากระดาษ</translation>
    </message>
    <message>
        <source>Exporting Items on Current Page:</source>
        <translation type="unfinished">ส่งออกจำนวนหนึ่งบนหน้ากระดาษ</translation>
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
        <translation type="unfinished">รูปแบบก่อนการพิมพ์</translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished">ทั้งหมด</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of text items in the viewer, at the expense
of a slight slowdown in previewing. This only affects Type 1 fonts</source>
        <translation type="obsolete">Provides a more pleasant view of text items in the viewer, at the expense
of a slight slowdown in previewing. This only affects Type 1 fonts</translation>
    </message>
    <message>
        <source>Shows transparency and transparent items in your document. Requires Ghostscript 7.07 or later</source>
        <translation type="unfinished">Shows transparency and transparent items in your document. Requires Ghostscript 7.07 or later</translation>
    </message>
    <message>
        <source>Gives a print preview using simulations of generic CMYK inks, instead of RGB colors</source>
        <translation type="unfinished">Gives a print preview using simulations of generic CMYK inks, instead of RGB colours</translation>
    </message>
    <message>
        <source>Enable/disable the C (Cyan) ink plate</source>
        <translation type="unfinished">สามารถ/ไม่สามารถ ซี (Cyan) หมึกแม่พิมพ์</translation>
    </message>
    <message>
        <source>Enable/disable the M (Magenta) ink plate</source>
        <translation type="unfinished">สามารถ/ไม่สามารถ เอ็ม (Magenta) หมึกแม่พิมพ์</translation>
    </message>
    <message>
        <source>Enable/disable the Y (Yellow) ink plate</source>
        <translation type="unfinished">สามารถ/ไม่สามารถ วาย (Yellow) หมึกแม่พิมพ์</translation>
    </message>
    <message>
        <source>Enable/disable the K (Black) ink plate</source>
        <translation type="unfinished">สามารถ/ไม่สามารถ เค (Black) หมึกแม่พิมพ์</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Text</source>
        <translation type="obsolete">Anti-alias &amp;Text</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Graphics</source>
        <translation type="obsolete">Anti-alias &amp;Graphics</translation>
    </message>
    <message>
        <source>Display Trans&amp;parency</source>
        <translation type="unfinished">แสดง ให้เห็น&amp;ตลอด</translation>
    </message>
    <message>
        <source>&amp;Display CMYK</source>
        <translation type="unfinished">แสดง ซีเอ็มวายเค</translation>
    </message>
    <message>
        <source>&amp;C</source>
        <translation type="unfinished">ซี</translation>
    </message>
    <message>
        <source>&amp;M</source>
        <translation type="unfinished">เอ็ม</translation>
    </message>
    <message>
        <source>&amp;Y</source>
        <translation type="unfinished">วาย</translation>
    </message>
    <message>
        <source>&amp;K</source>
        <translation type="unfinished">เค</translation>
    </message>
    <message>
        <source>&amp;Under Color Removal</source>
        <translation type="unfinished">ย้ายสีข้างล่าง</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="obsolete">A way of switching off some of the grey shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the grey. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of TrueType Fonts, OpenType Fonts, EPS, PDF and
vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation type="obsolete">Provides a more pleasant view of TrueType Fonts, OpenType Fonts, EPS, PDF and
vector graphics in the preview, at the expense of a slight slowdown in previewing</translation>
    </message>
    <message>
        <source>Separation Name</source>
        <translation type="unfinished">แยกชื่อ</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation type="unfinished">ไซแอน</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation type="unfinished">มาเจนตา</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation type="unfinished">สีเหลือง</translation>
    </message>
    <message>
        <source>Black</source>
        <translation type="unfinished">สีดำ</translation>
    </message>
    <message>
        <source>Scaling:</source>
        <translation type="unfinished">เส้นปะ</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished">ปิด</translation>
    </message>
    <message>
        <source>Print...</source>
        <translation type="unfinished">พิมพ์...</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis. UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resize the scale of the page.</source>
        <translation type="unfinished">รีไซด์สเกลของหน้ากระดาษ</translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished">แฟ้ม</translation>
    </message>
    <message>
        <source>Enable &amp;Antialiasing</source>
        <translation type="unfinished">สามารถแอนทิอะไลซิ่ง</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of Type 1 Fonts, TrueType Fonts, OpenType Fonts, EPS, PDF and vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PSLib</name>
    <message>
        <source>Processing Master Pages:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exporting Pages:</source>
        <translation type="unfinished">กระดาษออก</translation>
    </message>
</context>
<context>
    <name>Page</name>
    <message>
        <source>Copy Here</source>
        <translation type="obsolete">Copy Here</translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation type="obsolete">Move Here</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Cancel</translation>
    </message>
    <message>
        <source>Picture</source>
        <translation type="obsolete">Picture</translation>
    </message>
    <message>
        <source>File: </source>
        <translation type="obsolete">File </translation>
    </message>
    <message>
        <source>Linked Text</source>
        <translation type="obsolete">Linked Text</translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation type="obsolete">Text Frame</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation type="obsolete">Text on a Path</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation type="obsolete">Paragraphs: </translation>
    </message>
    <message>
        <source>Words: </source>
        <translation type="obsolete">Words: </translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation type="obsolete">Chars: </translation>
    </message>
    <message>
        <source>Print: </source>
        <translation type="obsolete">Print: </translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="obsolete">Enabled</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation type="obsolete">Disabled</translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation type="obsolete">Edit Text...</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>The Program</source>
        <translation type="obsolete">The Program</translation>
    </message>
    <message>
        <source>is missing!</source>
        <translation type="obsolete">is missing!</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Warning</translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation type="obsolete">Copy of</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="obsolete">&amp;Paste</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation type="obsolete">Show &amp;Margins</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation type="obsolete">Show &amp;Frames</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation type="obsolete">Show &amp;Images</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation type="obsolete">Show &amp;Grid</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation type="obsolete">Show G&amp;uides</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation type="obsolete">Show &amp;Baseline Grid</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation type="obsolete">Sn&amp;ap to Grid</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation type="obsolete">Sna&amp;p to Guides</translation>
    </message>
    <message>
        <source>Original PPI: </source>
        <translation type="obsolete">Original PPI: </translation>
    </message>
    <message>
        <source>Actual PPI: </source>
        <translation type="obsolete">Actual PPI: </translation>
    </message>
    <message>
        <source>In&amp;fo</source>
        <translation type="obsolete">In&amp;fo</translation>
    </message>
    <message>
        <source>&amp;Get Picture...</source>
        <translation type="obsolete">&amp;Get Picture...</translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation type="obsolete">I&amp;mage Visible</translation>
    </message>
    <message>
        <source>&amp;Update Picture</source>
        <translation type="obsolete">&amp;Update Picture</translation>
    </message>
    <message>
        <source>&amp;Edit Picture</source>
        <translation type="obsolete">&amp;Edit Picture</translation>
    </message>
    <message>
        <source>&amp;Adjust Frame to Picture</source>
        <translation type="obsolete">&amp;Adjust Frame to Picture</translation>
    </message>
    <message>
        <source>&amp;Get Text...</source>
        <translation type="obsolete">&amp;Get Text...</translation>
    </message>
    <message>
        <source>&amp;Append Text...</source>
        <translation type="obsolete">&amp;Append Text...</translation>
    </message>
    <message>
        <source>&amp;Edit Text...</source>
        <translation type="obsolete">&amp;Edit Text...</translation>
    </message>
    <message>
        <source>&amp;Insert Sample Text</source>
        <translation type="obsolete">&amp;Insert Sample Text</translation>
    </message>
    <message>
        <source>Is PDF &amp;Bookmark</source>
        <translation type="obsolete">Is PDF &amp;Bookmark</translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation type="obsolete">Is PDF A&amp;nnotation</translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation type="obsolete">Annotation P&amp;roperties</translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation type="obsolete">Field P&amp;roperties</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation type="obsolete">&amp;PDF Options</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation type="obsolete">&amp;Lock</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation type="obsolete">Un&amp;lock</translation>
    </message>
    <message>
        <source>Lock Object &amp;Size</source>
        <translation type="obsolete">Lock Object &amp;Size</translation>
    </message>
    <message>
        <source>Unlock Object &amp;Size</source>
        <translation type="obsolete">Unlock Object &amp;Size</translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation type="obsolete">Send to S&amp;crapbook</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation type="obsolete">Send to La&amp;yer</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="obsolete">&amp;Group</translation>
    </message>
    <message>
        <source>Un&amp;group</source>
        <translation type="obsolete">Un&amp;group</translation>
    </message>
    <message>
        <source>Le&amp;vel</source>
        <translation type="obsolete">Le&amp;vel</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation type="obsolete">Send to &amp;Back</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation type="obsolete">Bring to &amp;Front</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation type="obsolete">&amp;Lower</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation type="obsolete">&amp;Raise</translation>
    </message>
    <message>
        <source>&amp;Picture Frame</source>
        <translation type="obsolete">&amp;Picture Frame</translation>
    </message>
    <message>
        <source>Pol&amp;ygon</source>
        <translation type="obsolete">Pol&amp;ygon</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <translation type="obsolete">&amp;Outlines</translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation type="obsolete">&amp;Text Frame</translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation type="obsolete">&amp;Bezier Curve</translation>
    </message>
    <message>
        <source>Conve&amp;rt to</source>
        <translation type="obsolete">Conve&amp;rt to</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="obsolete">Cu&amp;t</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="obsolete">&amp;Copy</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Delete</translation>
    </message>
    <message>
        <source>C&amp;lear Contents</source>
        <translation type="obsolete">C&amp;lear Contents</translation>
    </message>
    <message>
        <source>Show P&amp;roperties...</source>
        <translation type="obsolete">Show P&amp;roperties...</translation>
    </message>
    <message>
        <source>Hide P&amp;roperties...</source>
        <translation type="obsolete">Hide P&amp;roperties...</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation type="obsolete">Do you really want to clear all your Text?</translation>
    </message>
</context>
<context>
    <name>PageItem</name>
    <message>
        <source>Image</source>
        <translation type="unfinished">รูปภาพ</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished">ข้อความ</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="unfinished">เส้น</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation type="unfinished">Polygon</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation type="unfinished">Polyline</translation>
    </message>
    <message>
        <source>PathText</source>
        <translation type="unfinished">PathText</translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation type="unfinished">สำเนาของ</translation>
    </message>
</context>
<context>
    <name>PageItemAttributes</name>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>Relates To</source>
        <translation type="unfinished">เกี่ยวกับ</translation>
    </message>
    <message>
        <source>Is Parent Of</source>
        <translation></translation>
    </message>
    <message>
        <source>Is Child Of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <comment>relationship</comment>
        <translation type="unfinished">ไม่มี</translation>
    </message>
</context>
<context>
    <name>PageItemAttributesBase</name>
    <message>
        <source>Page Item Attributes</source>
        <translation type="unfinished">ค่าตัวแปรหน้า</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">ชื่อ</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished">ตัวพิมพ์</translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Parameter</source>
        <translation>พารามิเตอร์</translation>
    </message>
    <message>
        <source>Relationship</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Relationship To</source>
        <translation type="unfinished">อ้างถึง</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="unfinished">เพิ่ม</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished">คัดลอก</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished">ชัดเจน</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished">ตกลง</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
</context>
<context>
    <name>PageLayouts</name>
    <message>
        <source>Page Layout</source>
        <translation type="obsolete">การจัดวางหน้า</translation>
    </message>
    <message>
        <source>First Page is:</source>
        <translation type="unfinished">หน้าแรก</translation>
    </message>
    <message>
        <source>Document Layout</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PagePalette</name>
    <message>
        <source>Double sided</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Middle Right</source>
        <translation type="unfinished">กลางขวา</translation>
    </message>
    <message>
        <source>Drag pages or master pages onto the trashbin to delete them</source>
        <translation type="unfinished">เลื่อนหน้ากะรดาษ หรือ ต้นฉบับไปยังกล่องขยะเพื่อลบทั้งหมด</translation>
    </message>
    <message>
        <source>Here are all your master pages. To create a new page, drag a master page to the page view below</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">ปกติ</translation>
    </message>
    <message>
        <source>Arrange Pages</source>
        <translation type="unfinished">จัดการหน้ากระดาษ</translation>
    </message>
    <message>
        <source>Available Master Pages:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document Pages:</source>
        <translation type="unfinished">หน้าเอกสาร:</translation>
    </message>
</context>
<context>
    <name>PageSelector</name>
    <message>
        <source>Page </source>
        <translation type="obsolete">Page </translation>
    </message>
    <message>
        <source> of %1</source>
        <translation type="obsolete"> of %1</translation>
    </message>
    <message>
        <source>%1 of %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 of %2</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PageSize</name>
    <message>
        <source>Quarto</source>
        <translation type="unfinished">แปดหน้า</translation>
    </message>
    <message>
        <source>Foolscap</source>
        <translation type="unfinished">พับสอง</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation type="unfinished">จดหมาย</translation>
    </message>
    <message>
        <source>Government Letter</source>
        <translation type="unfinished">จดหมายราชการ</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation type="unfinished">Legal</translation>
    </message>
    <message>
        <source>Ledger</source>
        <translation type="unfinished">บัญชีแยกประเภท</translation>
    </message>
    <message>
        <source>Executive</source>
        <translation type="unfinished">บริหาร</translation>
    </message>
    <message>
        <source>Post</source>
        <translation type="unfinished">ไปรษณ๊ย์</translation>
    </message>
    <message>
        <source>Crown</source>
        <translation type="unfinished">คำลงท้าย</translation>
    </message>
    <message>
        <source>Large Post</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Demy</source>
        <translation type="unfinished">ขนาดกระดาษ</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="unfinished">กลาง</translation>
    </message>
    <message>
        <source>Royal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Elephant</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Double Demy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quad Demy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>STMT</source>
        <translation type="unfinished">เอสทีเอ็มที</translation>
    </message>
    <message>
        <source>A</source>
        <translation type="unfinished">เอ</translation>
    </message>
    <message>
        <source>B</source>
        <translation>บี</translation>
    </message>
    <message>
        <source>C</source>
        <translation type="unfinished">ซี</translation>
    </message>
    <message>
        <source>D</source>
        <translation type="unfinished">ดี</translation>
    </message>
    <message>
        <source>E</source>
        <translation type="unfinished">อี</translation>
    </message>
</context>
<context>
    <name>PicSearch</name>
    <message>
        <source>Result</source>
        <translation type="unfinished">ผลสรุป</translation>
    </message>
    <message>
        <source>Search Results for: </source>
        <translation type="unfinished">ค้นหาผลเพื่อ: </translation>
    </message>
    <message>
        <source>Preview</source>
        <translation type="unfinished">เค้าโครง</translation>
    </message>
    <message>
        <source>Select</source>
        <translation type="unfinished">เลือก</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
</context>
<context>
    <name>PicStatus</name>
    <message>
        <source>Pictures</source>
        <translation type="obsolete">Pictures</translation>
    </message>
    <message>
        <source>Goto</source>
        <translation type="obsolete">ไปยัง</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="unfinished">ใช่</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">ตกลง</translation>
    </message>
    <message>
        <source>Missing</source>
        <translation type="unfinished">พลาด</translation>
    </message>
    <message>
        <source>Search</source>
        <translation type="unfinished">ค้นหา</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">ชื่อ</translation>
    </message>
    <message>
        <source>Path</source>
        <translation type="unfinished">พาธ</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>หน้า</translation>
    </message>
    <message>
        <source>Print</source>
        <translation type="unfinished">พิมพ์</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>สถานะ</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>Manage Pictures</source>
        <translation type="obsolete">จัดการรูป</translation>
    </message>
    <message>
        <source>Cancel Search</source>
        <translation type="unfinished">ยกเลิกการค้นหา</translation>
    </message>
    <message>
        <source>Select a base directory for search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus - Image Search</source>
        <translation type="unfinished">สคิปบัส-ค้นหารูปภาพ</translation>
    </message>
    <message>
        <source>The search failed: %1</source>
        <translation type="unfinished">ค้นหาล้มเหลว</translation>
    </message>
    <message>
        <source>No images named &quot;%1&quot; were found.</source>
        <translation type="unfinished">ไม่มีรูปชื่อนี้ 1เปอร์เซ็ฯต์ ล้มเหลว</translation>
    </message>
    <message>
        <source>Manage Images</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">บันทึกเป็น&amp;รูปภาพ...</translation>
    </message>
    <message>
        <source>Export As Image</source>
        <translation type="unfinished">ส่งรูปภาพออก</translation>
    </message>
    <message>
        <source>Exports selected pages as bitmap images.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PluginManager</name>
    <message>
        <source>Cannot find plugin</source>
        <comment>plugin manager</comment>
        <translation type="unfinished">ไม่สามารถหา ปลั๊กอินได้</translation>
    </message>
    <message>
        <source>unknown error</source>
        <comment>plugin manager</comment>
        <translation type="unfinished">ไม่รู้ ผิดพลาด</translation>
    </message>
    <message>
        <source>Cannot find symbol (%1)</source>
        <comment>plugin manager</comment>
        <translation type="unfinished">ไม่สามารถหาสัญลักษณ์(1เปอร์เซ็นต์)</translation>
    </message>
    <message>
        <source>Plugin: loading %1</source>
        <comment>plugin manager</comment>
        <translation type="unfinished">ปลั๊กอิน โหลด 1เปอร์เซ็นต์</translation>
    </message>
    <message>
        <source>init failed</source>
        <comment>plugin load error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>unknown plugin type</source>
        <comment>plugin load error</comment>
        <translation type="unfinished">ไม่รู้ชนิดของปลั๊กอิน</translation>
    </message>
    <message>
        <source>Plugin: %1 loaded</source>
        <comment>plugin manager</comment>
        <translation type="unfinished">ปลั๊กอิน โหลด1เปอร์เซ็นต์</translation>
    </message>
    <message>
        <source>Plugin: %1 failed to load: %2</source>
        <comment>plugin manager</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PluginManagerPrefsGui</name>
    <message>
        <source>Plugin Manager</source>
        <translation type="unfinished">จัดการปลั๊กอิน</translation>
    </message>
    <message>
        <source>Plugin</source>
        <translation type="unfinished">ปลั๊กอิน</translation>
    </message>
    <message>
        <source>How to run</source>
        <translation type="unfinished">ดำเนินการอย่างไร</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished">ชนิด</translation>
    </message>
    <message>
        <source>Load it?</source>
        <translation type="unfinished">โหลด?</translation>
    </message>
    <message>
        <source>Plugin ID</source>
        <translation type="unfinished">ปลั๊กอิน ไอดี</translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished">แฟ้ม</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="unfinished">ใช่</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="unfinished">ไม่</translation>
    </message>
    <message>
        <source>You need to restart the application to apply the changes.</source>
        <translation type="unfinished">คุณจำเป็นต้องเริ่มต้นใหม่เพื่อรับการเปลี่ยนแปลง</translation>
    </message>
</context>
<context>
    <name>PolygonProps</name>
    <message>
        <source>Polygon Properties</source>
        <translation type="unfinished">คุณสมบัติ โพลีกอน</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="obsolete"> %</translation>
    </message>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="obsolete">Corn&amp;ers:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="obsolete">&amp;Rotation:</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="obsolete">&amp;Factor:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="obsolete">Number of corners for polygons</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="obsolete">Degrees of rotation for polygons</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="obsolete">Sample Polygon</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="obsolete">Apply &amp;Factor</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="obsolete">Apply Convex/Concave Factor to change shape of Polygons</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="obsolete">A negative value will make the polygon concave (or star shaped),
a positive value will make it convex</translation>
    </message>
</context>
<context>
    <name>PolygonWidget</name>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="unfinished">มุม:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="unfinished">หมุน:</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="unfinished">Apply &amp;Factor</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="unfinished">&amp;ปัจจัย:</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation>หมายเลขตรงมุมสำหรับโพลีกอน</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="unfinished">ระดับในการหมุนของโพลีกอน</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation>Apply Convex/Concave Factor to change shape of Polygons</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="unfinished">ตัวอย่างโพลีกอน</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped), a positive value will make it convex</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Preferences</name>
    <message>
        <source>Preferences</source>
        <translation type="unfinished">ตั้งค่าโปรแกรม</translation>
    </message>
    <message>
        <source>General</source>
        <translation type="unfinished">ทั่วไป</translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished">เอกสาร</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation>แนะนำ</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation type="unfinished">Typography</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation type="unfinished">เครื่องมือ</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation type="obsolete">Scrapbook</translation>
    </message>
    <message>
        <source>Display</source>
        <translation type="unfinished">แสดง</translation>
    </message>
    <message>
        <source>GUI</source>
        <translation type="unfinished">GUI</translation>
    </message>
    <message>
        <source>Units</source>
        <translation type="obsolete">Units</translation>
    </message>
    <message>
        <source>Points (pt)</source>
        <translation type="obsolete">Points (pt)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation type="obsolete">Millimetres (mm)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="obsolete">Inches (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="obsolete">Picas (p)</translation>
    </message>
    <message>
        <source>Menus</source>
        <translation type="obsolete">Menus</translation>
    </message>
    <message>
        <source>Paths</source>
        <translation type="unfinished">พาธ</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished">ขนาดกระดาษ</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">Custom</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished">รูปคน</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished">ภูมิประเทศ</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="unfinished">แนะนำขอบกระดาษ</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation type="unfinished">บันทึกอัตโนมัติ</translation>
    </message>
    <message>
        <source>min</source>
        <translation type="unfinished">น้อย</translation>
    </message>
    <message>
        <source>Grid Layout</source>
        <translation type="obsolete">Grid Layout</translation>
    </message>
    <message>
        <source>Grid Colors</source>
        <translation type="obsolete">Grid Colours</translation>
    </message>
    <message>
        <source>Placing</source>
        <translation type="obsolete">Placing</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation type="obsolete">Subscript</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="obsolete"> %</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="obsolete">Superscript</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="obsolete">Small Caps</translation>
    </message>
    <message>
        <source>Other</source>
        <translation type="obsolete">Other</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished">pt</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="obsolete">Woven silk pyjamas exchanged for blue quartz</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>Other Options</source>
        <translation type="obsolete">Other Options</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation type="obsolete">Preview</translation>
    </message>
    <message>
        <source>Small</source>
        <translation type="obsolete">Small</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="obsolete">Medium</translation>
    </message>
    <message>
        <source>To adjust the display drag the ruler below with the Slider.</source>
        <translation type="obsolete">To adjust the display drag the ruler below with the Slider.</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation type="unfinished">เลือกไดเรคทอรี่</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>External Tools</source>
        <translation type="unfinished">เครื่องมือภายนอก</translation>
    </message>
    <message>
        <source>Misc.</source>
        <translation type="obsolete">Misc.</translation>
    </message>
    <message>
        <source>Postscript Interpreter</source>
        <translation type="obsolete">Postscript Interpreter</translation>
    </message>
    <message>
        <source>Image Processing Tool</source>
        <translation type="unfinished">รูปแบบแนวทางเครื่องมือ</translation>
    </message>
    <message>
        <source>Printing</source>
        <translation type="obsolete">Printing</translation>
    </message>
    <message>
        <source>Choose the default window decoration and looks.
Scribus inherits any available KDE or Qt themes</source>
        <translation type="obsolete">Choose the default window decoration and looks.
Scribus inherits any available KDE or Qt themes</translation>
    </message>
    <message>
        <source>Default font size for the menus and windows</source>
        <translation type="unfinished">ขนาดตัวอักษรสำหรับรายการและหน้าต่าง</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation type="unfinished">Default unit of measurement for document editing</translation>
    </message>
    <message>
        <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
        <translation type="unfinished">Number of lines Scribus will scroll for each move of the mouse wheel</translation>
    </message>
    <message>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation type="obsolete">Radius of the area where Scribus will allow you to grab an objects handles</translation>
    </message>
    <message>
        <source>Number of recently edited documents to show in the File menu</source>
        <translation type="unfinished">แก้ไขเอกสารตัวเลขล่าสุด ไปแสดงในรายการแฟ้ม</translation>
    </message>
    <message>
        <source>Default documents directory</source>
        <translation type="unfinished">Default documents directory</translation>
    </message>
    <message>
        <source>Default ICC profiles directory</source>
        <translation type="obsolete">Default ICC profiles directory</translation>
    </message>
    <message>
        <source>Default Scripter scripts directory</source>
        <translation type="unfinished">Default Scripter scripts directory</translation>
    </message>
    <message>
        <source>Default page size, either a standard size or a custom size</source>
        <translation type="unfinished">ขนาดหน้าผิด, อก้ไขเป็นขนาดมาตรฐานหรือขนาดตามที่ต้องการ</translation>
    </message>
    <message>
        <source>Default orientation of document pages</source>
        <translation>พลิกหน้าเอกสารผิด</translation>
    </message>
    <message>
        <source>Width of document pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished">ความกว้างของหน้าเอกสาร, แก้ไขได้ ถ้า คุณเลือกขนาดหน้าตามต้องการ</translation>
    </message>
    <message>
        <source>Height of document pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished">ความสูงของหน้า, แก้ไขได้ถัาคุณเลือกขนาดหน้าที่ต้องการ</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation type="obsolete">Enable single or spread based layout</translation>
    </message>
    <message>
        <source>Make the first page the left page of a document</source>
        <translation type="obsolete">Make the first page the left page of a document</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation type="obsolete">Distance between the top margin guide and the edge of the page</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation type="obsolete">Distance between the bottom margin guide and the edge of the page</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</translation>
    </message>
    <message>
        <source>When enabled, Scribus saves a backup copy of your file with the .bak extension
each time the time period elapses</source>
        <translation type="obsolete">When enabled, Scribus saves a backup copy of your file with the .bak extension
each time the time period elapses</translation>
    </message>
    <message>
        <source>Time period between saving automatically</source>
        <translation type="unfinished">ระยะเวลาระหว่างการบันทึกอัตโนมัติ</translation>
    </message>
    <message>
        <source>Distance between the minor grid lines</source>
        <translation type="obsolete">Distance between the minor grid lines</translation>
    </message>
    <message>
        <source>Distance between the major grid lines</source>
        <translation type="obsolete">Distance between the major grid lines</translation>
    </message>
    <message>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation type="obsolete">Distance within which an object will snap to your placed guides</translation>
    </message>
    <message>
        <source>Color of the minor grid lines</source>
        <translation type="obsolete">Colour of the minor grid lines</translation>
    </message>
    <message>
        <source>Color of the major grid lines</source>
        <translation type="obsolete">Colour of the major grid lines</translation>
    </message>
    <message>
        <source>Color of the guide lines you insert</source>
        <translation type="obsolete">Colour of the guide lines you insert</translation>
    </message>
    <message>
        <source>Place the grid behind your page objects</source>
        <translation type="obsolete">Place the grid behind your page objects</translation>
    </message>
    <message>
        <source>Place the grid in front of your page objects</source>
        <translation type="obsolete">Place the grid in front of your page objects</translation>
    </message>
    <message>
        <source>Displacement above the baseline of the font on a line</source>
        <translation type="obsolete">Displacement above the baseline of the font on a line</translation>
    </message>
    <message>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation type="obsolete">Relative size of the superscript compared to the normal font</translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation type="obsolete">Displacement below the baseline of the normal font on a line</translation>
    </message>
    <message>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation type="obsolete">Relative size of the subscript compared to the normal font</translation>
    </message>
    <message>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation type="obsolete">Relative size of the small caps font compared to the normal font</translation>
    </message>
    <message>
        <source>Percentage increase over the font size for the line spacing</source>
        <translation type="obsolete">Percentage increase over the font size for the line spacing</translation>
    </message>
    <message>
        <source>Text Frame Properties</source>
        <translation type="obsolete">Text Frame Properties</translation>
    </message>
    <message>
        <source>Picture Frame Properties</source>
        <translation type="obsolete">Picture Frame Properties</translation>
    </message>
    <message>
        <source>Shape Drawing Properties</source>
        <translation type="obsolete">Shape Drawing Properties</translation>
    </message>
    <message>
        <source>Magnification Level Defaults</source>
        <translation type="obsolete">Magnification Level Defaults</translation>
    </message>
    <message>
        <source>Line Drawing Properties</source>
        <translation type="obsolete">Line Drawing Properties</translation>
    </message>
    <message>
        <source>Polygon Drawing Properties</source>
        <translation type="obsolete">Polygon Drawing Properties</translation>
    </message>
    <message>
        <source>Font for new text frames</source>
        <translation type="obsolete">Font for new text frames</translation>
    </message>
    <message>
        <source>Size of font for new text frames</source>
        <translation type="obsolete">Size of font for new text frames</translation>
    </message>
    <message>
        <source>Color of font</source>
        <translation type="obsolete">Colour of font</translation>
    </message>
    <message>
        <source>Number of columns in a text frame</source>
        <translation type="obsolete">Number of columns in a text frame</translation>
    </message>
    <message>
        <source>Gap between text frame columns</source>
        <translation type="obsolete">Gap between text frame columns</translation>
    </message>
    <message>
        <source>Sample of your font</source>
        <translation type="obsolete">Sample of your font</translation>
    </message>
    <message>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation type="obsolete">Picture frames allow pictures to scale to any size</translation>
    </message>
    <message>
        <source>Horizontal scaling of images</source>
        <translation type="obsolete">Horizontal scaling of images</translation>
    </message>
    <message>
        <source>Vertical scaling of images</source>
        <translation type="obsolete">Vertical scaling of images</translation>
    </message>
    <message>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation type="obsolete">Keep horizontal and vertical scaling the same</translation>
    </message>
    <message>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation type="obsolete">Pictures in picture frames are scaled to the size of the frame</translation>
    </message>
    <message>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation type="obsolete">Automatically scaled pictures keep their original proportions</translation>
    </message>
    <message>
        <source>Fill color of picture frames</source>
        <translation type="obsolete">Fill colour of picture frames</translation>
    </message>
    <message>
        <source>Saturation of color of fill</source>
        <translation type="obsolete">Saturation of colour of fill</translation>
    </message>
    <message>
        <source>Line color of shapes</source>
        <translation type="obsolete">Line colour of shapes</translation>
    </message>
    <message>
        <source>Saturation of color of lines</source>
        <translation type="obsolete">Saturation of colour of lines</translation>
    </message>
    <message>
        <source>Fill color of shapes</source>
        <translation type="obsolete">Fill colour of shapes</translation>
    </message>
    <message>
        <source>Line style of shapes</source>
        <translation type="obsolete">Line style of shapes</translation>
    </message>
    <message>
        <source>Line width of shapes</source>
        <translation type="obsolete">Line width of shapes</translation>
    </message>
    <message>
        <source>Minimum magnification allowed</source>
        <translation type="obsolete">Minimum magnification allowed</translation>
    </message>
    <message>
        <source>Maximum magnification allowed</source>
        <translation type="obsolete">Maximum magnification allowed</translation>
    </message>
    <message>
        <source>Change in magnification for each zoom operation</source>
        <translation type="obsolete">Change in magnification for each zoom operation</translation>
    </message>
    <message>
        <source>Color of lines</source>
        <translation type="obsolete">Colour of lines</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation type="obsolete">Saturation of colour</translation>
    </message>
    <message>
        <source>Style of lines</source>
        <translation type="obsolete">Style of lines</translation>
    </message>
    <message>
        <source>Width of lines</source>
        <translation type="obsolete">Width of lines</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="obsolete">Number of corners for polygons</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="obsolete">Degrees of rotation for polygons</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="obsolete">Sample Polygon</translation>
    </message>
    <message>
        <source>Choose the size of the preview in the scrapbook palette</source>
        <translation type="obsolete">Choose the size of the preview in the scrapbook palette</translation>
    </message>
    <message>
        <source>When using facing pages, show the two pages side by side</source>
        <translation type="obsolete">When using facing pages, show the two pages side by side</translation>
    </message>
    <message>
        <source>Color for paper</source>
        <translation type="unfinished">สีสำหรับหน้า</translation>
    </message>
    <message>
        <source>Color for the margin lines</source>
        <translation type="obsolete">Colour for the margin lines</translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation type="unfinished">Mask the area outside the margins in the margin colour</translation>
    </message>
    <message>
        <source>Enable transparency features within PDF 1.4 export</source>
        <translation type="obsolete">Enable transparency features within PDF 1.4 export</translation>
    </message>
    <message>
        <source>Set the default zoom level</source>
        <translation type="unfinished">ตั้งค่าระดับการขยายผิด</translation>
    </message>
    <message>
        <source>Filesystem location for the Ghostscript interpreter</source>
        <translation type="obsolete">Filesystem location for the Ghostscript interpreter</translation>
    </message>
    <message>
        <source>Antialias text for EPS and PDF onscreen rendering</source>
        <translation type="unfinished">Antialias text for EPS and PDF onscreen rendering</translation>
    </message>
    <message>
        <source>Antialias graphics for EPS and PDF onscreen rendering</source>
        <translation type="unfinished">Antialias graphics for EPS and PDF onscreen rendering</translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page or exported file</source>
        <translation type="obsolete">Do not show objects outside the margins on the printed page or exported file</translation>
    </message>
    <message>
        <source>Save the scrapbook contents everytime after a change</source>
        <translation type="obsolete">Save the scrapbook contents everytime after a change</translation>
    </message>
    <message>
        <source>Filesystem location for graphics editor</source>
        <translation type="obsolete">Filesystem location for graphics editor</translation>
    </message>
    <message>
        <source> px</source>
        <translation type="obsolete"> px</translation>
    </message>
    <message>
        <source>Baseline Grid</source>
        <translation type="obsolete">Baseline Grid</translation>
    </message>
    <message>
        <source>Turns on the basegrid</source>
        <translation type="obsolete">Turns on the basegrid</translation>
    </message>
    <message>
        <source>Turns off the basegrid</source>
        <translation type="obsolete">Turns off the basegrid</translation>
    </message>
    <message>
        <source>&amp;Theme:</source>
        <translation type="unfinished">ธีม:</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation type="obsolete">&amp;Font Size:</translation>
    </message>
    <message>
        <source>Mouse Settings</source>
        <translation type="obsolete">Mouse Settings</translation>
    </message>
    <message>
        <source>&amp;Wheel Jump:</source>
        <translation type="unfinished">&amp;Wheel Jump:</translation>
    </message>
    <message>
        <source>&amp;Grab Radius:</source>
        <translation type="obsolete">&amp;Grab Radius:</translation>
    </message>
    <message>
        <source>&amp;Recent Documents:</source>
        <translation type="unfinished">เอกสารล่สุด:</translation>
    </message>
    <message>
        <source>&amp;Documents:</source>
        <translation type="unfinished">เอกสาร:</translation>
    </message>
    <message>
        <source>&amp;Change...</source>
        <translation type="unfinished">เปลี่ยน...</translation>
    </message>
    <message>
        <source>&amp;ICC Profiles:</source>
        <translation type="unfinished">โปรไฟล์ ไอซีซี:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation type="unfinished">เปลี่ยน...</translation>
    </message>
    <message>
        <source>&amp;Scripts:</source>
        <translation type="unfinished">ต้นฉบับ:</translation>
    </message>
    <message>
        <source>Ch&amp;ange...</source>
        <translation type="unfinished">เปลี่ยน...</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished">ขนาด:</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished">พลิก:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished">กว้าง:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished">สูง:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation type="obsolete">&amp;Facing Pages</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation type="obsolete">Left &amp;Page First</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="unfinished">ข้างล่าง:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="unfinished">บนสุด:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="unfinished">ขวา:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="unfinished">ซ้าย:</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation type="obsolete">&amp;Enabled</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation type="unfinished">ระยะห่่าง:</translation>
    </message>
    <message>
        <source>M&amp;inor Grid Spacing:</source>
        <translation type="obsolete">M&amp;inor Grid Spacing:</translation>
    </message>
    <message>
        <source>Ma&amp;jor Grid Spacing:</source>
        <translation type="obsolete">Ma&amp;jor Grid Spacing:</translation>
    </message>
    <message>
        <source>Guide &amp;Snap Distance:</source>
        <translation type="obsolete">Guide &amp;Snap Distance:</translation>
    </message>
    <message>
        <source>Min&amp;or Grid Color:</source>
        <translation type="obsolete">Min&amp;or Grid Colour:</translation>
    </message>
    <message>
        <source>Majo&amp;r Grid Color:</source>
        <translation type="obsolete">Majo&amp;r Grid Colour:</translation>
    </message>
    <message>
        <source>&amp;User Guides Color:</source>
        <translation type="obsolete">&amp;User Guides Colour:</translation>
    </message>
    <message>
        <source>Base&amp;line Grid Color:</source>
        <translation type="obsolete">Base&amp;line Grid Colour:</translation>
    </message>
    <message>
        <source>In the &amp;Background</source>
        <translation type="obsolete">In the &amp;Background</translation>
    </message>
    <message>
        <source>In the Fore&amp;ground</source>
        <translation type="obsolete">In the Fore&amp;ground</translation>
    </message>
    <message>
        <source>O&amp;n</source>
        <translation type="obsolete">O&amp;n</translation>
    </message>
    <message>
        <source>O&amp;ff</source>
        <translation type="obsolete">O&amp;ff</translation>
    </message>
    <message>
        <source>&amp;Displacement:</source>
        <translation type="obsolete">&amp;Displacement:</translation>
    </message>
    <message>
        <source>&amp;Scaling:</source>
        <translation type="obsolete">&amp;Scaling:</translation>
    </message>
    <message>
        <source>D&amp;isplacement:</source>
        <translation type="obsolete">D&amp;isplacement:</translation>
    </message>
    <message>
        <source>S&amp;caling:</source>
        <translation type="obsolete">S&amp;caling:</translation>
    </message>
    <message>
        <source>Sc&amp;aling:</source>
        <translation type="obsolete">Sc&amp;aling:</translation>
    </message>
    <message>
        <source>Baseline &amp;Grid:</source>
        <translation type="obsolete">Baseline &amp;Grid:</translation>
    </message>
    <message>
        <source>Baseline &amp;Offset:</source>
        <translation type="obsolete">Baseline &amp;Offset:</translation>
    </message>
    <message>
        <source>Automatic &amp;Line Spacing:</source>
        <translation type="obsolete">Automatic &amp;Line Spacing:</translation>
    </message>
    <message>
        <source>Default &amp;Font:</source>
        <translation type="obsolete">Default &amp;Font:</translation>
    </message>
    <message>
        <source>Default &amp;Size:</source>
        <translation type="obsolete">Default &amp;Size:</translation>
    </message>
    <message>
        <source>&amp;Text Color:</source>
        <translation type="obsolete">&amp;Text Colour:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation type="obsolete">Colu&amp;mns:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="obsolete">&amp;Gap:</translation>
    </message>
    <message>
        <source>&amp;Line Color:</source>
        <translation type="obsolete">&amp;Line Colour:</translation>
    </message>
    <message>
        <source>&amp;Shading:</source>
        <translation type="obsolete">&amp;Shading:</translation>
    </message>
    <message>
        <source>&amp;Fill Color:</source>
        <translation type="obsolete">&amp;Fill Colour:</translation>
    </message>
    <message>
        <source>S&amp;hading:</source>
        <translation type="obsolete">S&amp;hading:</translation>
    </message>
    <message>
        <source>&amp;Type of Line:</source>
        <translation type="obsolete">&amp;Type of Line:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation type="obsolete">Line &amp;Width:</translation>
    </message>
    <message>
        <source>Mi&amp;nimum:</source>
        <translation type="obsolete">Mi&amp;nimum:</translation>
    </message>
    <message>
        <source>Ma&amp;ximum:</source>
        <translation type="obsolete">Ma&amp;ximum:</translation>
    </message>
    <message>
        <source>&amp;Stepping:</source>
        <translation type="obsolete">&amp;Stepping:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation type="obsolete">&amp;Free Scaling</translation>
    </message>
    <message>
        <source>&amp;Horizontal Scaling:</source>
        <translation type="obsolete">&amp;Horizontal Scaling:</translation>
    </message>
    <message>
        <source>&amp;Vertical Scaling:</source>
        <translation type="obsolete">&amp;Vertical Scaling:</translation>
    </message>
    <message>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation type="obsolete">&amp;Scale Picture to Frame Size</translation>
    </message>
    <message>
        <source>Keep Aspect &amp;Ratio</source>
        <translation type="obsolete">Keep Aspect &amp;Ratio</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation type="obsolete">F&amp;ill Colour:</translation>
    </message>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="obsolete">Corn&amp;ers:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="obsolete">&amp;Rotation:</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="obsolete">&amp;Factor:</translation>
    </message>
    <message>
        <source>Sa&amp;ve Contents on Changes</source>
        <translation type="obsolete">Sa&amp;ve Contents on Changes</translation>
    </message>
    <message>
        <source>Large</source>
        <translation type="obsolete">Large</translation>
    </message>
    <message>
        <source>Display Pages &amp;Side by Side</source>
        <translation type="obsolete">Display Pages &amp;Side by Side</translation>
    </message>
    <message>
        <source>Page Colors</source>
        <translation type="obsolete">Page Colours</translation>
    </message>
    <message>
        <source>&amp;Background:</source>
        <translation type="obsolete">&amp;Background:</translation>
    </message>
    <message>
        <source>&amp;Margins:</source>
        <translation type="obsolete">&amp;Margins:</translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation type="unfinished">Display &amp;Unprintable Area in Margin Colour</translation>
    </message>
    <message>
        <source>Use PDF 1.4 &amp;Transparency Features</source>
        <translation type="obsolete">Use PDF 1.4 &amp;Transparency Features</translation>
    </message>
    <message>
        <source>&amp;Adjust Display Size</source>
        <translation type="unfinished">&amp;Adjust Display Size</translation>
    </message>
    <message>
        <source>&amp;Name of Executable:</source>
        <translation type="unfinished">&amp;Name of Executable:</translation>
    </message>
    <message>
        <source>Antialias &amp;Text</source>
        <translation type="unfinished">Antialias &amp;Text</translation>
    </message>
    <message>
        <source>Antialias &amp;Graphics</source>
        <translation type="unfinished">Antialias &amp;Graphics</translation>
    </message>
    <message>
        <source>Name of &amp;Executable:</source>
        <translation type="unfinished">Name of &amp;Executable:</translation>
    </message>
    <message>
        <source>Clip to Page &amp;Margins</source>
        <translation type="obsolete">Clip to Page &amp;Margins</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation type="obsolete">&amp;Inside:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation type="obsolete">O&amp;utside:</translation>
    </message>
    <message>
        <source>Apply &amp;Under Color Removal</source>
        <translation type="obsolete">Apply &amp;Under Colour Removal</translation>
    </message>
    <message>
        <source>T&amp;emplates:</source>
        <translation type="obsolete">T&amp;emplates:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation type="unfinished">เปลี่ยน...</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="obsolete">Apply &amp;Factor</translation>
    </message>
    <message>
        <source>Additional Directory for Document Templates</source>
        <translation type="obsolete">Additional Directory for Document Templates</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="obsolete">Apply Convex/Concave Factor to change shape of Polygons</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="obsolete">A negative value will make the polygon concave (or star shaped),
a positive value will make it convex</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="obsolete">A way of switching off some of the grey shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the grey. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</translation>
    </message>
    <message>
        <source>Executive</source>
        <translation type="obsolete">Executive</translation>
    </message>
    <message>
        <source>Folio</source>
        <translation type="obsolete">Folio</translation>
    </message>
    <message>
        <source>Ledger</source>
        <translation type="obsolete">Ledger</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation type="obsolete">Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation type="obsolete">Letter</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation type="obsolete">Tabloid</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation type="unfinished">ภาษา</translation>
    </message>
    <message>
        <source>&amp;Font Size (Menus):</source>
        <translation type="unfinished">ขนาดตัวอักษร(เมนู)</translation>
    </message>
    <message>
        <source>Font Size (&amp;Palettes):</source>
        <translation type="unfinished">ขนาดตัวอักษร</translation>
    </message>
    <message>
        <source>Document T&amp;emplates:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Units:</source>
        <translation type="unfinished">บท</translation>
    </message>
    <message>
        <source>Undo/Redo</source>
        <translation type="unfinished">ไม่ทำ/ทำอีกรอบ</translation>
    </message>
    <message>
        <source>Action history length</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hyphenator</source>
        <translation type="unfinished">-</translation>
    </message>
    <message>
        <source>Fonts</source>
        <translation type="unfinished">ตัวอักษร</translation>
    </message>
    <message>
        <source>Preflight Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Management</source>
        <translation type="unfinished">จัดการสี</translation>
    </message>
    <message>
        <source>PDF Export</source>
        <translation type="unfinished">ส่งออกพีดีเอฟ</translation>
    </message>
    <message>
        <source>Document Item Attributes</source>
        <translation type="unfinished">ค่าตัวแปรเอกสาร</translation>
    </message>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation type="unfinished">ตารางสารบัญและสถิติ</translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation type="unfinished">ทางลัดแป้นพิมพ์</translation>
    </message>
    <message>
        <source>Page Display</source>
        <translation type="unfinished">แสดงหน้า</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="unfinished">สี</translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Pictures</source>
        <translation type="obsolete">แสดงรูปภาพ</translation>
    </message>
    <message>
        <source>Show Text Chains</source>
        <translation type="unfinished">แสดงข้อความ</translation>
    </message>
    <message>
        <source>Show Text Control Characters</source>
        <translation type="unfinished">แสดงลักษณะการบังคับข้อความ</translation>
    </message>
    <message>
        <source>Show Frames</source>
        <translation type="unfinished">แสดงเฟลม</translation>
    </message>
    <message>
        <source>Rulers relative to Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scratch Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Gaps between Pages</source>
        <translation type="unfinished">แก๊ป ระหว่างหน้า</translation>
    </message>
    <message>
        <source>Horizontal:</source>
        <translation type="unfinished">แนวขวาง</translation>
    </message>
    <message>
        <source>Vertical:</source>
        <translation type="unfinished">แนวตั้ง</translation>
    </message>
    <message>
        <source>To adjust the display drag the ruler below with the slider.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostScript Interpreter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>dpi</source>
        <translation type="unfinished">ดีพีไอ</translation>
    </message>
    <message>
        <source>Resolution:</source>
        <translation type="unfinished">กำหนด</translation>
    </message>
    <message>
        <source>Always ask before fonts are replaced when loading a document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Preview of current Paragraph Style visible when editing Styles</source>
        <translation type="unfinished">เค้าโครงรูปแบบพารากราฟปัจจุบันเมื่อแก้ไขรูปแบบ</translation>
    </message>
    <message>
        <source>Show Startup Dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lorem Ipsum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Always use standard Lorem Ipsum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Count of the Paragraphs:</source>
        <translation type="unfinished">นับพาราการฟ</translation>
    </message>
    <message>
        <source>Miscellaneous</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugins</source>
        <translation type="unfinished">ปลั๊กอิน</translation>
    </message>
    <message>
        <source>Enable or disable  the display of linked frames.</source>
        <translation type="unfinished">สามารถหรือไม่สามารถ แสดงการเชื่อมต่อของเฟลม</translation>
    </message>
    <message>
        <source>Display non-printing characters such as paragraph markers in text frames</source>
        <translation type="unfinished">แสดงลักษณะที่พิมพ์ไม่ได้ เช่นทำเครื่องหมายพารากราฟในข้อความเฟลม</translation>
    </message>
    <message>
        <source>Turns the display of frames on or off</source>
        <translation type="unfinished">กลับไปแสดง เฟลม เปิดหรือปิด</translation>
    </message>
    <message>
        <source>Turns the display of pictures on or off</source>
        <translation type="obsolete">กลับไปแสดงรูปภาพเปิดหรือปิด</translation>
    </message>
    <message>
        <source>Select your default language for Scribus to run with. Leave this blank to choose based on environment variables. You can still override this by passing a command line option when starting Scribus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose the default window decoration and looks. Scribus inherits any available KDE or Qt themes, if Qt is configured to search KDE plugins.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default font size for the tool windows</source>
        <translation type="unfinished">ขนาดตัวอักษรผิดสำหรับเครื่องมือหน้าต่าง</translation>
    </message>
    <message>
        <source>Default ICC profiles directory. This cannot be changed with a document open. By default, Scribus will look in the System Directories under Mac OSX and Windows. On Linux and Unix, Scribus will search $home/.color/icc,/usr/share/color/icc and /usr/local/share/color/icc </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Additional directory for document templates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>When enabled, Scribus saves a backup copy of your file with the .bak extension each time the time period elapses</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set the length of the action history in steps. If set to 0 infinite amount of actions will be stored.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Place a ruler against your screen and drag the slider to set the zoom level so Scribus will display your pages and objects on them at the correct size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File system location for graphics editor. If you use gimp and your distro includes it, we recommend &apos;gimp-remote&apos;, as it allows you to edit the image in an already running instance of gimp.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Defines amount of space left of the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Defines amount of space right of the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Defines amount of space above the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Defines amount of space below the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Locate Ghostscript</source>
        <translation type="unfinished">ที่ตั้งโกสต์สคริป</translation>
    </message>
    <message>
        <source>Locate your image editor</source>
        <translation type="unfinished">ที่ตั้งรูปภาพแก้ไข</translation>
    </message>
    <message>
        <source>Add the path for the Ghostscript interpreter. On Windows, please note it is important to note you need to use the program named gswin32c.exe - NOT gswin32.exe. Otherwise, this maybe cause a hang when starting Scribus.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the display of images on or off</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PrefsDialogBase</name>
    <message>
        <source>Save...</source>
        <translation type="unfinished">บันทึก...</translation>
    </message>
    <message>
        <source>&amp;Defaults</source>
        <translation type="unfinished">ค่าบริยาย</translation>
    </message>
    <message>
        <source>Save Preferences</source>
        <translation type="unfinished">ตั้งค่าโปรแกรม</translation>
    </message>
</context>
<context>
    <name>PrefsManager</name>
    <message>
        <source>Left Page</source>
        <translation type="obsolete">Left Page</translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation type="obsolete">Right Page</translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation type="unfinished">ปล.</translation>
    </message>
    <message>
        <source>Migrate Old Scribus Settings?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus has detected existing Scribus 1.2 preferences files.
Do you want to migrate them to the new Scribus version?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not open preferences file &quot;%1&quot; for writing: %2</source>
        <translation type="unfinished">ไม่สามารถเปิดแฟ้มข้อเสนอ%1 สำหรับเขียน %2</translation>
    </message>
    <message>
        <source>Writing to preferences file &quot;%1&quot; failed: QIODevice status code %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to open prefs file &quot;%1&quot;: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to read prefs XML from &quot;%1&quot;: %2 at line %3, col %4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Postscript</source>
        <translation type="unfinished">ปล.</translation>
    </message>
    <message>
        <source>PDF 1.3</source>
        <translation type="obsolete">พีดีเอฟ 1.3</translation>
    </message>
    <message>
        <source>PDF 1.4</source>
        <translation type="obsolete">พีดีเอฟ 1.4</translation>
    </message>
    <message>
        <source>Error Writing Preferences</source>
        <translation type="unfinished">เขียนข้อสเนอฟิดพลาด</translation>
    </message>
    <message>
        <source>Scribus was not able to save its preferences:&lt;br&gt;%1&lt;br&gt;Please check file and directory permissions and available disk space.</source>
        <comment>scribus app error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error Loading Preferences</source>
        <translation type="unfinished">โหลดข้อมูลที่อ้างถึงผิดพลาด</translation>
    </message>
    <message>
        <source>Scribus was not able to load its preferences:&lt;br&gt;%1&lt;br&gt;Default settings will be loaded.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PresetLayout</name>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>Gutenberg</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Magazine</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fibonacci</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Golden Mean</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Nine Parts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You can select predefined page layout here. &apos;None&apos; leave margins as is, Gutenberg sets margins classically. &apos;Magazine&apos; sets all margins for same value. Leading is Left/Inside value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <comment>layout type</comment>
        <translation type="unfinished">ไม่มี</translation>
    </message>
</context>
<context>
    <name>PythonConsole</name>
    <message>
        <source>&amp;Open...</source>
        <translation type="unfinished">เปิด...</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished">บันทึก</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="unfinished">บันทึกเป็น...</translation>
    </message>
    <message>
        <source>&amp;Exit</source>
        <translation type="unfinished">ออก</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished">แฟ้ม</translation>
    </message>
    <message>
        <source>&amp;Run</source>
        <translation type="unfinished">ดำเนินการ</translation>
    </message>
    <message>
        <source>Run As &amp;Console</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Save Output...</source>
        <translation type="unfinished">บันทึกข้อมูลส่งออก...</translation>
    </message>
    <message>
        <source>&amp;Script</source>
        <translation type="unfinished">สคริป</translation>
    </message>
    <message>
        <source>Scribus Python Console</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Script Console</source>
        <translation type="unfinished">Script Console</translation>
    </message>
    <message>
        <source>Write your commands here. A selection is processed as script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Output of your script</source>
        <translation type="unfinished">ต้นฉบับของคุณส่งออก</translation>
    </message>
    <message>
        <source>Python Scripts (*.py)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open Python Script File</source>
        <translation type="unfinished">เปิดแฟ้มต้นฉบับไพตอน</translation>
    </message>
    <message>
        <source>Save the Python Commands in File</source>
        <translation type="unfinished">บันทึกชุดคำสั่งของไพท่อนลงในแฟ้ม</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">เตือน</translation>
    </message>
    <message>
        <source>Text Files (*.txt)</source>
        <translation type="unfinished">แฟ้มข้อความ</translation>
    </message>
    <message>
        <source>Save Current Output</source>
        <translation type="unfinished">บันทึกส่งออกปัจจุบัน</translation>
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
        <translation type="unfinished">Hu&amp;e:</translation>
    </message>
    <message>
        <source>&amp;Sat:</source>
        <translation type="unfinished">&amp;Sat:</translation>
    </message>
    <message>
        <source>&amp;Val:</source>
        <translation type="unfinished">&amp;Val:</translation>
    </message>
    <message>
        <source>&amp;Red:</source>
        <translation type="unfinished">แดง:</translation>
    </message>
    <message>
        <source>&amp;Green:</source>
        <translation type="unfinished">เขียว:</translation>
    </message>
    <message>
        <source>Bl&amp;ue:</source>
        <translation type="unfinished">ฟ้า</translation>
    </message>
    <message>
        <source>A&amp;lpha channel:</source>
        <translation type="unfinished">ช่อง อัลฟ่า:</translation>
    </message>
    <message>
        <source>&amp;Basic colors</source>
        <translation type="unfinished">สีพื้นฐาน</translation>
    </message>
    <message>
        <source>&amp;Custom colors</source>
        <translation type="unfinished">&amp;Custom colours</translation>
    </message>
    <message>
        <source>&amp;Define Custom Colors &gt;&gt;</source>
        <translation type="unfinished">&amp;Define Custom Colours &gt;&gt;</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">ตกลง</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
    <message>
        <source>&amp;Add to Custom Colors</source>
        <translation type="unfinished">เพิ่มรายชื่อสี</translation>
    </message>
    <message>
        <source>Select color</source>
        <translation type="unfinished">เลือกสี</translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <source>Copy or Move a File</source>
        <translation type="unfinished">คัดลอก หรือย้ายแฟ้ม</translation>
    </message>
    <message>
        <source>Read: %1</source>
        <translation type="unfinished">อ่าน: %1</translation>
    </message>
    <message>
        <source>Write: %1</source>
        <translation type="unfinished">เขียน: %1</translation>
    </message>
    <message>
        <source>File &amp;name:</source>
        <translation type="unfinished">แฟ้ม ชื่อ:</translation>
    </message>
    <message>
        <source>File &amp;type:</source>
        <translation type="unfinished">แฟ้มชนิด:</translation>
    </message>
    <message>
        <source>One directory up</source>
        <translation type="unfinished">One directory up</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation type="unfinished">แฟ้มทั้งหมด (*)</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">ชื่อ</translation>
    </message>
    <message>
        <source>Size</source>
        <translation type="unfinished">ขนาด</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>ชนิด</translation>
    </message>
    <message>
        <source>Date</source>
        <translation type="unfinished">วัน</translation>
    </message>
    <message>
        <source>Attributes</source>
        <translation type="unfinished">Attributes</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">ตกลง</translation>
    </message>
    <message>
        <source>Look &amp;in:</source>
        <translation type="unfinished">มอง&amp;ใน:</translation>
    </message>
    <message>
        <source>Back</source>
        <translation>กลับ</translation>
    </message>
    <message>
        <source>Create New Folder</source>
        <translation type="unfinished">สร้างกล่องข้อความใหม่</translation>
    </message>
    <message>
        <source>List View</source>
        <translation type="unfinished">หน้าต่างรายการ</translation>
    </message>
    <message>
        <source>Detail View</source>
        <translation type="unfinished">หน้าต่างรายละเอียด</translation>
    </message>
    <message>
        <source>Preview File Info</source>
        <translation type="unfinished">เค้าโครงแฟ้ม อินโฟ</translation>
    </message>
    <message>
        <source>Preview File Contents</source>
        <translation type="unfinished">เค้าโครงแฟ้มสารบัญ</translation>
    </message>
    <message>
        <source>Read-write</source>
        <translation type="unfinished">อ่าน-เขียน</translation>
    </message>
    <message>
        <source>Read-only</source>
        <translation type="unfinished">อ่าน-อย่างเดียว</translation>
    </message>
    <message>
        <source>Write-only</source>
        <translation>เขียน-อย่างเดียว</translation>
    </message>
    <message>
        <source>Inaccessible</source>
        <translation type="unfinished">เข้าไม่ถึง</translation>
    </message>
    <message>
        <source>Symlink to File</source>
        <translation type="unfinished">แฟ้มข้อมูลเกี่ยวข้อง</translation>
    </message>
    <message>
        <source>Symlink to Directory</source>
        <translation type="unfinished">Symlink to Directory</translation>
    </message>
    <message>
        <source>Symlink to Special</source>
        <translation type="unfinished">Symlink to Special</translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished">แฟ้ม</translation>
    </message>
    <message>
        <source>Dir</source>
        <translation type="unfinished">Dir</translation>
    </message>
    <message>
        <source>Special</source>
        <translation type="unfinished">พิเศษ</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">เปิด</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation type="unfinished">บันทึกเป็น</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation type="unfinished">เปิด</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished">บันทึก</translation>
    </message>
    <message>
        <source>&amp;Rename</source>
        <translation type="unfinished">ตั้งชื่อใหม่</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>R&amp;eload</source>
        <translation type="unfinished">โหลดอีกครั้ง</translation>
    </message>
    <message>
        <source>Sort by &amp;Name</source>
        <translation type="unfinished">หาโดย ชื่อ</translation>
    </message>
    <message>
        <source>Sort by &amp;Size</source>
        <translation type="unfinished">หาโดย&amp;ขนาด</translation>
    </message>
    <message>
        <source>Sort by &amp;Date</source>
        <translation type="unfinished">หาโดย วัน</translation>
    </message>
    <message>
        <source>&amp;Unsorted</source>
        <translation type="unfinished">ไม่หา</translation>
    </message>
    <message>
        <source>Sort</source>
        <translation type="unfinished">หา</translation>
    </message>
    <message>
        <source>Show &amp;hidden files</source>
        <translation type="unfinished">แสดง แฟ้มที่ซ่อนไว้</translation>
    </message>
    <message>
        <source>the file</source>
        <translation type="unfinished">แฟ้ม</translation>
    </message>
    <message>
        <source>the directory</source>
        <translation type="unfinished">the directory</translation>
    </message>
    <message>
        <source>the symlink</source>
        <translation type="unfinished">ซิมลิงค์</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation type="unfinished">ลบ%1</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Are you sure you wish to delete %1 &quot;%2&quot;?&lt;/qt&gt;</source>
        <translation type="unfinished">&lt;qt&gt;คุณแน่ใจที่จะลบ %1 &quot;%2&quot;?&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="unfinished">ใช่</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="unfinished">ไม่</translation>
    </message>
    <message>
        <source>New Folder 1</source>
        <translation type="unfinished">กล่องใหม่ 1</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation type="unfinished">กล่องใหม่</translation>
    </message>
    <message>
        <source>New Folder %1</source>
        <translation type="unfinished">กล่องใหม่ %1</translation>
    </message>
    <message>
        <source>Find Directory</source>
        <translation type="unfinished">หาไดเรคทอรี่</translation>
    </message>
    <message>
        <source>Directories</source>
        <translation type="unfinished">ไดเรกทอรี่</translation>
    </message>
    <message>
        <source>Save</source>
        <translation type="unfinished">บันทึก</translation>
    </message>
    <message>
        <source>Error</source>
        <translation type="unfinished">ผิดพลาด</translation>
    </message>
    <message>
        <source>%1
File not found.
Check path and filename.</source>
        <translation type="unfinished">%1
หาแฟ้มไม่เจอ.
ตรวจพาธและชื่อของแฟ้ม.</translation>
    </message>
    <message>
        <source>All Files (*.*)</source>
        <translation type="unfinished">แฟ้มทั้งหมด(*.*)</translation>
    </message>
    <message>
        <source>Select a Directory</source>
        <translation type="unfinished">เลือกไดเรคทอรี่</translation>
    </message>
    <message>
        <source>Directory:</source>
        <translation type="unfinished">ไดเรคทอรี่:</translation>
    </message>
</context>
<context>
    <name>QFontDialog</name>
    <message>
        <source>&amp;Font</source>
        <translation type="unfinished">ตัวอักษร</translation>
    </message>
    <message>
        <source>Font st&amp;yle</source>
        <translation type="unfinished">ตัวอักษร รูปแบบ</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation type="unfinished">ขนาด</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation type="unfinished">ผล</translation>
    </message>
    <message>
        <source>Stri&amp;keout</source>
        <translation type="unfinished">Stri&amp;keout</translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation type="unfinished">เส้นใต้</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation type="unfinished">สี</translation>
    </message>
    <message>
        <source>Sample</source>
        <translation type="unfinished">ตัวอย่าง</translation>
    </message>
    <message>
        <source>Scr&amp;ipt</source>
        <translation type="unfinished">ต้นฉบับ</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">ตกลง</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation type="unfinished">สมัคร</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished">ปิด</translation>
    </message>
    <message>
        <source>Select Font</source>
        <translation type="unfinished">เลือกตัวอักษร</translation>
    </message>
</context>
<context>
    <name>QLineEdit</name>
    <message>
        <source>Clear</source>
        <translation type="unfinished">ล้าง</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation type="unfinished">เลือกทั้งหมด</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished">ทำใหม่</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="unfinished">ตัด</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished">คัดลอก</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished">วาง</translation>
    </message>
</context>
<context>
    <name>QMainWindow</name>
    <message>
        <source>Line up</source>
        <translation type="unfinished">แนวตั้ง</translation>
    </message>
    <message>
        <source>Customize...</source>
        <translation type="unfinished">Customise...</translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <source>&lt;h3&gt;About Qt&lt;/h3&gt;&lt;p&gt;This program uses Qt version %1.&lt;/p&gt;&lt;p&gt;Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p&gt;&lt;p&gt;Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br&gt;Qt is also available for embedded devices.&lt;/p&gt;&lt;p&gt;Qt is a Trolltech product. See &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt; for more information.&lt;/p&gt;</source>
        <translation type="unfinished">&lt;h3&gt;About Qt&lt;/h3&gt;&lt;p&gt;This program uses Qt version %1.&lt;/p&gt;&lt;p&gt;Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p&gt;&lt;p&gt;Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br&gt;Qt is also available for embedded devices.&lt;/p&gt;&lt;p&gt;Qt is a Trolltech product. See &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt; for more information.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Initializing...</source>
        <translation type="unfinished">Initialising...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="obsolete">Document</translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="unfinished">พื้นหลัง</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>เตือน</translation>
    </message>
    <message>
        <source>Do you really want to overwrite the File:
%1 ?</source>
        <translation type="unfinished">Do you really want to overwrite the File:
%1 ?</translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation type="obsolete">Online Reference</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">เปิด</translation>
    </message>
    <message>
        <source>Python Scripts (*.py);; All Files (*)</source>
        <translation type="obsolete">Python Scripts (*.py);; All Files (*)</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished">บันทึกเป็น</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg *.svgz);;All Files (*)</source>
        <translation type="unfinished">เอสวีจี-รูป (*.svg *.svgz);;แฟ้มทั้งหมด (*)</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg);;All Files (*)</source>
        <translation type="unfinished">เอสวีจี-รูป (*.svg);;แฟ้มทั้งหมด (*)</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="unfinished">ใช่</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="unfinished">ไม่</translation>
    </message>
    <message>
        <source>S&amp;cript</source>
        <translation type="obsolete">S&amp;cript</translation>
    </message>
    <message>
        <source>Save as Image</source>
        <translation type="unfinished">บันทึกเป็นรุปภาพ</translation>
    </message>
    <message>
        <source>Error writting the output file(s).</source>
        <translation type="obsolete">Error writting the output file(s).</translation>
    </message>
    <message>
        <source>Error writing the output file(s).</source>
        <translation type="unfinished">เขียนแฟ้มส่งออกผิดพลาด.</translation>
    </message>
    <message>
        <source>Export successful.</source>
        <translation type="unfinished">นำออกสำเร็จ.</translation>
    </message>
    <message>
        <source>File exists. Overwrite?</source>
        <translation type="unfinished">แฟ้มออก. Overwrite?</translation>
    </message>
    <message>
        <source>exists already. Overwrite?</source>
        <translation type="unfinished">exists already. Overwrite?</translation>
    </message>
    <message>
        <source>Yes all</source>
        <translation type="unfinished">ใช่ทั้งหมด</translation>
    </message>
    <message>
        <source>All Supported Formats (*.eps *.EPS *.ps *.PS);;</source>
        <translation type="unfinished">สนับสนุนการทำใหม่ทั้งหมด (*.eps *.EPS *.ps *.PS);;</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation type="unfinished">แฟ้มทั้งหมด (*)</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview</source>
        <translation type="obsolete">&amp;Fonts Preview</translation>
    </message>
    <message>
        <source>&amp;Insert Special</source>
        <translation type="obsolete">&amp;Insert Special</translation>
    </message>
    <message>
        <source>New &amp;from Template...</source>
        <translation type="obsolete">New &amp;from Template...</translation>
    </message>
    <message>
        <source>Newsletters</source>
        <translation type="unfinished">จดหมายใหม่</translation>
    </message>
    <message>
        <source>Brochures</source>
        <translation type="unfinished">หนังสือ</translation>
    </message>
    <message>
        <source>Catalogs</source>
        <translation type="unfinished">แคทตาล๊อค</translation>
    </message>
    <message>
        <source>Flyers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Signs</source>
        <translation type="unfinished">เครื่องหมาย</translation>
    </message>
    <message>
        <source>Cards</source>
        <translation type="unfinished">การ์ด</translation>
    </message>
    <message>
        <source>Letterheads</source>
        <translation type="unfinished">หัวจดหมาย</translation>
    </message>
    <message>
        <source>Envelopes</source>
        <translation>ซองจดหมาย</translation>
    </message>
    <message>
        <source>Business Cards</source>
        <translation type="unfinished">นามบัตร</translation>
    </message>
    <message>
        <source>Calendars</source>
        <translation type="unfinished">ปฏิทิน</translation>
    </message>
    <message>
        <source>Advertisements</source>
        <translation type="unfinished">โฆษณา</translation>
    </message>
    <message>
        <source>Labels</source>
        <translation type="unfinished">ตรหน้า</translation>
    </message>
    <message>
        <source>Menus</source>
        <translation type="unfinished">รายการ</translation>
    </message>
    <message>
        <source>Programs</source>
        <translation type="unfinished">โปรแกรม</translation>
    </message>
    <message>
        <source>PDF Forms</source>
        <translation type="unfinished">รูปแบบ พีดีเอฟ</translation>
    </message>
    <message>
        <source>PDF Presentations</source>
        <translation type="unfinished">แสดงพีดีเอฟ</translation>
    </message>
    <message>
        <source>Magazines</source>
        <translation>แมกกาซีน</translation>
    </message>
    <message>
        <source>Posters</source>
        <translation type="unfinished">โปสเตอร์</translation>
    </message>
    <message>
        <source>Announcements</source>
        <translation type="unfinished">ประกาศ</translation>
    </message>
    <message>
        <source>Text Documents</source>
        <translation>ข้อความเอกสาร</translation>
    </message>
    <message>
        <source>Folds</source>
        <translation type="unfinished">ใบปลิว</translation>
    </message>
    <message>
        <source>Own Templates</source>
        <translation type="unfinished">Own Templates</translation>
    </message>
    <message>
        <source>Save as &amp;Image...</source>
        <translation type="obsolete">Save as &amp;Image...</translation>
    </message>
    <message>
        <source>Print Previe&amp;w</source>
        <translation type="obsolete">Print Previe&amp;w</translation>
    </message>
    <message>
        <source>Import &amp;EPS/PS...</source>
        <translation type="obsolete">Import &amp;EPS/PS...</translation>
    </message>
    <message>
        <source>Save as &amp;Template...</source>
        <translation type="obsolete">Save as &amp;Template...</translation>
    </message>
    <message>
        <source>S&amp;cripter Manual...</source>
        <translation type="obsolete">S&amp;cripter Manual...</translation>
    </message>
    <message>
        <source>&amp;Scribus Scripts</source>
        <translation type="unfinished">สคิลป์สใครบัส</translation>
    </message>
    <message>
        <source>&amp;Execute Script...</source>
        <translation type="unfinished">จัดการต้นฉบับ...</translation>
    </message>
    <message>
        <source>&amp;Recent Scripts</source>
        <translation type="unfinished">ต้นฉบับล่าสุด</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation type="unfinished">แสดง Console</translation>
    </message>
    <message>
        <source>Save Page as &amp;SVG...</source>
        <translation type="obsolete">Save Page as &amp;SVG...</translation>
    </message>
    <message>
        <source>Import &amp;SVG...</source>
        <translation type="obsolete">Import &amp;SVG...</translation>
    </message>
    <message>
        <source>Print Preview</source>
        <translation type="obsolete">Print Preview</translation>
    </message>
    <message>
        <source>Importing text</source>
        <translation type="unfinished">ข้อความนำเข้า</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation type="unfinished">สนับสนุนการแก้ไขทั้งหมด</translation>
    </message>
    <message>
        <source>HTML Files</source>
        <translation type="unfinished">แฟ้ม เฮชทีเอ็มแอล</translation>
    </message>
    <message>
        <source>html</source>
        <translation>เฮชทีเอ็มแอล</translation>
    </message>
    <message>
        <source>Text Files</source>
        <translation type="unfinished">แฟ้มข้อความ</translation>
    </message>
    <message>
        <source>Comma Separated Value Files</source>
        <translation type="unfinished">Comma Separated Value Files</translation>
    </message>
    <message>
        <source>CSV_data</source>
        <translation type="unfinished">ซีเอสวี_ดาต้า</translation>
    </message>
    <message>
        <source>CSV_header</source>
        <translation type="unfinished">ซีเอสวี_เฮดเดอร์</translation>
    </message>
    <message>
        <source>Font %1 is broken, discarding it</source>
        <translation type="unfinished">ตัวอักษร %1 ชำรุด, ยกเลิกการใข้งาน</translation>
    </message>
    <message>
        <source>Template: </source>
        <translation type="obsolete">Template: </translation>
    </message>
    <message>
        <source>
External Links
</source>
        <translation type="unfinished">เชื่อมต่อภายนอก</translation>
    </message>
    <message>
        <source>Text Filters</source>
        <translation type="unfinished">กรองข้อความ</translation>
    </message>
    <message>
        <source>Media Cases</source>
        <translation type="unfinished">เครื่องมือตัวอย่าง</translation>
    </message>
    <message>
        <source>Albanian</source>
        <translation type="unfinished">แอลแบเนียน</translation>
    </message>
    <message>
        <source>Basque</source>
        <translation type="unfinished">แบ๊ซค</translation>
    </message>
    <message>
        <source>Bulgarian</source>
        <translation type="unfinished">บัลแกเรียล</translation>
    </message>
    <message>
        <source>Brazilian</source>
        <translation type="obsolete">Brazilian</translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation type="unfinished">แคตอะแลน</translation>
    </message>
    <message>
        <source>Chinese</source>
        <translation type="unfinished">ไชนีส</translation>
    </message>
    <message>
        <source>Czech</source>
        <translation type="unfinished">กรีซ</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation type="unfinished">เดนิส</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation type="unfinished">ดีชซ์</translation>
    </message>
    <message>
        <source>English</source>
        <translation type="unfinished">อังกฤษ</translation>
    </message>
    <message>
        <source>English (British)</source>
        <translation type="unfinished">อังกฤษ (อังกฤษ)</translation>
    </message>
    <message>
        <source>Esperanto</source>
        <translation type="unfinished">สเปน</translation>
    </message>
    <message>
        <source>German</source>
        <translation type="unfinished">เยอรมัน</translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation type="unfinished">ฟินนิช</translation>
    </message>
    <message>
        <source>French</source>
        <translation type="unfinished">ฟเร็นด์</translation>
    </message>
    <message>
        <source>Galician</source>
        <translation type="unfinished">กาลิเซียน</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation type="unfinished">กรีก</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation type="unfinished">ฮังกาเรียน</translation>
    </message>
    <message>
        <source>Indonesian</source>
        <translation type="unfinished">อินโดนีเซียน</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation type="unfinished">อิตาเลียน</translation>
    </message>
    <message>
        <source>Korean</source>
        <translation type="unfinished">โคเลียน</translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation type="unfinished">ลิโทเนียน</translation>
    </message>
    <message>
        <source>Norwegian (Bokmaal)</source>
        <translation type="unfinished">นอร์เวย์เจี้ยน (Bokmaal)</translation>
    </message>
    <message>
        <source>Norwegian (Nnyorsk)</source>
        <translation type="unfinished">Norwegian (Nnyorsk)</translation>
    </message>
    <message>
        <source>Norwegian</source>
        <translation type="unfinished">นอร์เวย์เจียน</translation>
    </message>
    <message>
        <source>Polish</source>
        <translation type="unfinished">โพลิช</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation type="unfinished">รัชเชียน</translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation type="unfinished">สวีดิช</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation type="unfinished">สเปนิช</translation>
    </message>
    <message>
        <source>Spanish (Latin)</source>
        <translation type="unfinished">สเปนิช (ลาติน)</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation type="unfinished">สโลวัค</translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation type="unfinished">สโลวีเนียน</translation>
    </message>
    <message>
        <source>Serbian</source>
        <translation type="unfinished">เซอร์เบียน</translation>
    </message>
    <message>
        <source>Tried to set progress &gt; maximum progress</source>
        <translation type="obsolete">Tried to set progress &gt; maximum progress</translation>
    </message>
    <message>
        <source>&amp;About Script...</source>
        <translation type="unfinished">เกี่ยวกับต้นฉบับ...</translation>
    </message>
    <message>
        <source>About Script</source>
        <translation type="unfinished">เกี่ยวกัยต้นฉบับ</translation>
    </message>
    <message>
        <source>Cannot get font size of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถรับขนาดตัวอักษร ของเฟลมที่ไม่มีข้อความ</translation>
    </message>
    <message>
        <source>Cannot get font of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถรับขนาดตัวอักษร ของเฟลมที่ไม่มีข้อความ</translation>
    </message>
    <message>
        <source>Cannot get text size of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถรับขนาดข้อความ ของเฟลมที่ไม่มีข้อความ</translation>
    </message>
    <message>
        <source>Cannot get column count of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">พลิกหน้าเอกสารผิดพลิกหน้าเอกสารผิดไม่สามารถรับคอลัมน์ของเฟลมที่ไม่มีข้อความ</translation>
    </message>
    <message>
        <source>Cannot get line space of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถรับเส้นระยะ ของเฟลมที่ไม่มีข้อความ</translation>
    </message>
    <message>
        <source>Cannot get column gap of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถรับระยะห่างคอลัมน์ ของเฟลมที่ไม่มีข้อความ</translation>
    </message>
    <message>
        <source>Cannot get text of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถรับข้อความ ของเฟลมที่ไม่มีข้อความ</translation>
    </message>
    <message>
        <source>Cannot set text of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถตั้งค่าข้อความ ของเฟลมที่ไม่มีข้อความ</translation>
    </message>
    <message>
        <source>Cannot insert text into non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถแทรกข้อความไปยังเฟลมที่ไม่มีข้อความ</translation>
    </message>
    <message>
        <source>Insert index out of bounds</source>
        <comment>python error</comment>
        <translation type="obsolete">Insert index out of bounds</translation>
    </message>
    <message>
        <source>Alignment out of range. Use one of the scribus.ALIGN* constants.</source>
        <comment>python error</comment>
        <translation type="unfinished">Alignment out of range. Use one of the scribus.ALIGN* constants.</translation>
    </message>
    <message>
        <source>Can&apos;t set text alignment on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t set text alignment on a non-text frame</translation>
    </message>
    <message>
        <source>Font size out of bounds - must be 1 &lt;= size &lt;= 512</source>
        <comment>python error</comment>
        <translation type="obsolete">Font size out of bounds - must be 1 &lt;= size &lt;= 512</translation>
    </message>
    <message>
        <source>Can&apos;t set font size on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t set font size on a non-text frame</translation>
    </message>
    <message>
        <source>Can&apos;t set font on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t set font on a non-text frame</translation>
    </message>
    <message>
        <source>Font not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Font not found</translation>
    </message>
    <message>
        <source>Line space out of bounds, must be &gt;= 0.1</source>
        <comment>python error</comment>
        <translation type="obsolete">Line space out of bounds, must be &gt;= 0.1</translation>
    </message>
    <message>
        <source>Can&apos;t line spacing on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t line spacing on a non-text frame</translation>
    </message>
    <message>
        <source>Column gap out of bounds, must be positive</source>
        <comment>python error</comment>
        <translation type="obsolete">Column gap out of bounds, must be positive</translation>
    </message>
    <message>
        <source>Can&apos;t column gap on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t column gap on a non-text frame</translation>
    </message>
    <message>
        <source>Column count out of bounds, must be &gt; 1</source>
        <comment>python error</comment>
        <translation type="obsolete">Column count out of bounds, must be &gt; 1</translation>
    </message>
    <message>
        <source>Can&apos;t number of columns on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t number of columns on a non-text frame</translation>
    </message>
    <message>
        <source>Selection index out of bounds</source>
        <comment>python error</comment>
        <translation type="unfinished">เลือกสารบาญออกจากปกหนังสือ</translation>
    </message>
    <message>
        <source>Can&apos;t select text in a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t select text in a non-text frame</translation>
    </message>
    <message>
        <source>Can&apos;t delete text from a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t delete text from a non-text frame</translation>
    </message>
    <message>
        <source>Can&apos;t set text fill on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t set text fill on a non-text frame</translation>
    </message>
    <message>
        <source>Can&apos;t set text stroke on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t set text stroke on a non-text frame</translation>
    </message>
    <message>
        <source>Can&apos;t set text shade on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t set text shade on a non-text frame</translation>
    </message>
    <message>
        <source>Can only link text frames</source>
        <comment>python error</comment>
        <translation type="obsolete">Can only link text frames</translation>
    </message>
    <message>
        <source>Target frame must be empty</source>
        <comment>python error</comment>
        <translation type="obsolete">Target frame must be empty</translation>
    </message>
    <message>
        <source>Target frame links to another frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Target frame links to another frame</translation>
    </message>
    <message>
        <source>Target frame is linked to by another frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Target frame is linked to by another frame</translation>
    </message>
    <message>
        <source>Source and target are the same object</source>
        <comment>python error</comment>
        <translation type="obsolete">Source and target are the same object</translation>
    </message>
    <message>
        <source>Can&apos;t unlink a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t unlink a non-text frame</translation>
    </message>
    <message>
        <source>Object is not a linked text frame, can&apos;t unlink.</source>
        <comment>python error</comment>
        <translation type="unfinished">วัตถุไม่เชื่อมต่อกับข้อความเฟลม ไม่สามารถเชื่อมต่อกัน</translation>
    </message>
    <message>
        <source>Object the last frame in a series, can&apos;t unlink. Unlink the previous frame instead.</source>
        <comment>python error</comment>
        <translation type="unfinished">วัตถุเฟลมอันล่าสุดในเนื้อเรื่อง ไม่สามารถเชื่อมต่อได้.ไม่เชื่อมแทนที่เฟลมก่อนหน้านี่</translation>
    </message>
    <message>
        <source>Can&apos;t convert a non-text frame to outlines</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t convert a non-text frame to outlines</translation>
    </message>
    <message>
        <source>Failed to open document</source>
        <comment>python error</comment>
        <translation type="obsolete">Failed to open document</translation>
    </message>
    <message>
        <source>Failed to save document</source>
        <comment>python error</comment>
        <translation type="obsolete">Failed to save document</translation>
    </message>
    <message>
        <source>Unit out of range. Use one of the scribus.UNIT_* constants.</source>
        <comment>python error</comment>
        <translation type="unfinished">Unit out of range. Use one of the scribus.UNIT_* constants.</translation>
    </message>
    <message>
        <source>Target is not an image frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">จุดหมายไม่ใช่เฟลมรูป</translation>
    </message>
    <message>
        <source>Can&apos;t scale by 0%</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t scale by 0%</translation>
    </message>
    <message>
        <source>Can&apos;t render an empty sample</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t render an empty sample</translation>
    </message>
    <message>
        <source>Can&apos;t save to a blank filename</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t save to a blank filename</translation>
    </message>
    <message>
        <source>Can&apos;t have an empty layer name</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t have an empty layer name</translation>
    </message>
    <message>
        <source>Layer not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Layer not found</translation>
    </message>
    <message>
        <source>Can&apos;t remove the last layer</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t remove the last layer</translation>
    </message>
    <message>
        <source>Can&apos;t create layer without a name</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t create layer without a name</translation>
    </message>
    <message>
        <source>An object with the requested name already exists</source>
        <comment>python error</comment>
        <translation type="obsolete">An object with the requested name already exists</translation>
    </message>
    <message>
        <source>Point list must contain at least two points (four values)</source>
        <comment>python error</comment>
        <translation type="obsolete">Point list must contain at least two points (four values)</translation>
    </message>
    <message>
        <source>Point list must contain an even number of values</source>
        <comment>python error</comment>
        <translation type="obsolete">Point list must contain an even number of values</translation>
    </message>
    <message>
        <source>Point list must contain at least three points (six values)</source>
        <comment>python error</comment>
        <translation type="obsolete">Point list must contain at least three points (six values)</translation>
    </message>
    <message>
        <source>Point list must contain at least four points (eight values)</source>
        <comment>python error</comment>
        <translation type="obsolete">Point list must contain at least four points (eight values)</translation>
    </message>
    <message>
        <source>Point list must have a multiple of six values</source>
        <comment>python error</comment>
        <translation type="obsolete">Point list must have a multiple of six values</translation>
    </message>
    <message>
        <source>Object not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Object not found</translation>
    </message>
    <message>
        <source>Style not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Style not found</translation>
    </message>
    <message>
        <source>Can&apos;t set style on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Can&apos;t set style on a non-text frame</translation>
    </message>
    <message>
        <source>Failed to save EPS</source>
        <comment>python error</comment>
        <translation type="obsolete">Failed to save EPS</translation>
    </message>
    <message>
        <source>Page number out of range</source>
        <comment>python error</comment>
        <translation type="obsolete">Page number out of range</translation>
    </message>
    <message>
        <source>argument is not list: must be list of float values</source>
        <comment>python error</comment>
        <translation type="obsolete">argument is not list: must be list of float values</translation>
    </message>
    <message>
        <source>argument contains non-numeric values: must be list of float values</source>
        <comment>python error</comment>
        <translation type="obsolete">argument contains non-numeric values: must be list of float values</translation>
    </message>
    <message>
        <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12</source>
        <comment>python error</comment>
        <translation type="obsolete">Line width out of bounds, must be 0 &lt;= line_width &lt;= 12</translation>
    </message>
    <message>
        <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100</source>
        <comment>python error</comment>
        <translation type="obsolete">Line shade out of bounds, must be 0 &lt;= shade &lt;= 100</translation>
    </message>
    <message>
        <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100</source>
        <comment>python error</comment>
        <translation type="obsolete">Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100</translation>
    </message>
    <message>
        <source>Corner radius must be a positive number.</source>
        <comment>python error</comment>
        <translation type="unfinished">รัศมีของมุมต้องเป็นตัวเลขที่แน่นอน</translation>
    </message>
    <message>
        <source>Line style not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Line style not found</translation>
    </message>
    <message>
        <source>Cannot get a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถรับสีกับชื่อที่ยังไม่ได้ตั้ง</translation>
    </message>
    <message>
        <source>Color not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Colour not found</translation>
    </message>
    <message>
        <source>Cannot change a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถเปลี่ยนสี กับชื่อที่ยังไม่ได้ตั้ง</translation>
    </message>
    <message>
        <source>Color not found in document</source>
        <comment>python error</comment>
        <translation type="obsolete">Colour not found in document</translation>
    </message>
    <message>
        <source>Color not found in default colors</source>
        <comment>python error</comment>
        <translation type="obsolete">Colour not found in default colours</translation>
    </message>
    <message>
        <source>Cannot create a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถสร้างสีกับชื่อที่ยังไม่ได้ตั้ง</translation>
    </message>
    <message>
        <source>Cannot delete a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถลบสีกับชื่อที่ยังไม่ได้ตั้ง.</translation>
    </message>
    <message>
        <source>Cannot replace a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถแทนที่สีกับชื่อที่ยังไม่ได้ตั้ง</translation>
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
      the text colour on a graphics frame doesn&apos;t make sense, and will result
      in this exception being raised.
    - Errors resulting from calls to the underlying Python API will be
      passed through unaltered. As such, the list of exceptions thrown by
      any function as provided here and in its docstring is incomplete.
Details of what exceptions each function may throw are provided on the
function&apos;s documentation.
</source>
        <translation type="obsolete">Scribus Python interface module
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
      the text colour on a graphics frame doesn&apos;t make sense, and will result
      in this exception being raised.
    - Errors resulting from calls to the underlying Python API will be
      passed through unaltered. As such, the list of exceptions thrown by
      any function as provided here and in its docstring is incomplete.
Details of what exceptions each function may throw are provided on the
function&apos;s documentation.
</translation>
    </message>
    <message>
        <source>Import &amp;OpenOffice.org Draw...</source>
        <translation type="obsolete">Import &amp;OpenOffice.org Draw...</translation>
    </message>
    <message>
        <source>OpenOffice.org Draw (*.sxd);;All Files (*)</source>
        <translation type="obsolete">OpenOffice.org Draw (*.sxd);;All Files (*)</translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Documents</source>
        <translation type="unfinished">OpenOffice.org Writer Documents</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished">คัดลอก #%1 of </translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation type="unfinished">แอฟริกา</translation>
    </message>
    <message>
        <source>Croatian</source>
        <translation type="unfinished">โครเอเชีย</translation>
    </message>
    <message>
        <source>German (Trad.)</source>
        <translation type="unfinished">เยอรมัน</translation>
    </message>
    <message>
        <source>Portuguese</source>
        <translation type="unfinished">โปรตุเกส</translation>
    </message>
    <message>
        <source>Portuguese (BR)</source>
        <translation type="unfinished">โปรตุเกส</translation>
    </message>
    <message>
        <source>Thai</source>
        <translation type="unfinished">ไทย</translation>
    </message>
    <message>
        <source>Turkish</source>
        <translation type="unfinished">ตุรกี</translation>
    </message>
    <message>
        <source>Ukranian</source>
        <translation type="unfinished">ยูคาเนี่ยน</translation>
    </message>
    <message>
        <source>Welsh</source>
        <translation type="unfinished">เวลล์</translation>
    </message>
    <message>
        <source>Scribus Crash</source>
        <translation type="unfinished">เกิดปัญหาในโปรแกรมสไครบัส</translation>
    </message>
    <message>
        <source>Scribus crashes due to Signal #%1</source>
        <translation>Scribus crashes due to Signal #%1</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished">ตกลง</translation>
    </message>
    <message>
        <source>Scribus crashes due to the following exception : %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">Custom</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished">หน้า</translation>
    </message>
    <message>
        <source>Master Page </source>
        <translation>ต้นฉบับ</translation>
    </message>
    <message>
        <source>4A0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>2A0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Comm10E</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DLE</source>
        <translation type="unfinished">ดีแอลอี</translation>
    </message>
    <message>
        <source>Could not open output file %1</source>
        <translation type="unfinished">ไม่สามารถเปิดแฟ้มส่งออก %1</translation>
    </message>
    <message>
        <source>Output stream not writeable</source>
        <translation type="unfinished">ไม่ได้เขียนหัวข้อความส่งออก</translation>
    </message>
    <message>
        <source>Verification of settings failed: %1</source>
        <translation type="unfinished">ตรวจสอบการตั้งค่าล้มเหลว: %1</translation>
    </message>
    <message>
        <source>Could not open input file %1</source>
        <translation type="unfinished">ไม่สามารถเปิดแฟ้มที่ได้รับ %1</translation>
    </message>
    <message>
        <source>Unable to read settings XML:</source>
        <translation type="unfinished">ไม่สามารถอ่านตั้งค่า เอ็กซ์เอ็มแอล</translation>
    </message>
    <message>
        <source>%1 (line %2 col %3)</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished">%1 (บรรทัด %2 คอลัมน์ %3)

โหลด ค่าพีดีเอฟ</translation>
    </message>
    <message>
        <source>Unable to read settings XML: %1</source>
        <translation type="unfinished">ไม่สามารถอ่านตั้งค่า เอ็กซืเอ็มแอล: %1</translation>
    </message>
    <message>
        <source>null root node</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;pdfVersion&gt; invalid</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>found %1 &lt;%2&gt; nodes, need 1.</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>unexpected null &lt;%2&gt; node</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>node &lt;%1&gt; not an element</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>element &lt;%1&gt; lacks `value&apos; attribute</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>element &lt;%1&gt; value must be `true&apos; or `false&apos;</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished">ค่าองค์ประกอบ &lt;%1&gt; จะต้องเป็น ถูกต้อง หรือ ผิด</translation>
    </message>
    <message>
        <source>element &lt;lpiSettingsEntry&gt; lacks `name&apos; attribute</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished">ทั้งหมด</translation>
    </message>
    <message>
        <source>Exporting PostScript File</source>
        <translation type="unfinished">แฟ้มส่งออกต้นฉบับ</translation>
    </message>
    <message>
        <source>Printing File</source>
        <translation type="unfinished">แฟ้มพิมพ์</translation>
    </message>
    <message>
        <source>Black</source>
        <translation type="unfinished">ดำ</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation type="unfinished">ฟ้า</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation type="unfinished">ม่วง</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation type="unfinished">เหลือง</translation>
    </message>
    <message>
        <source>Freetype2 library not available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font %1 is broken, no embedding</source>
        <translation type="unfinished">ฟอนต์ %1 ไม่สามารถใช้ได้ </translation>
    </message>
    <message>
        <source>Font %1 is broken (read stream), no embedding</source>
        <translation type="unfinished">ฟอนต์ %1 ไม่สามารถใช้ได้, ไม่</translation>
    </message>
    <message>
        <source>Font %1 is broken (FreeType2), discarding it</source>
        <translation type="unfinished">ฟอนต์ %1 ไม่สามารถใช้ได้  (FreeType2) ยกเลิกการใช้งาน</translation>
    </message>
    <message>
        <source>Font %1 is broken (no Face), discarding it</source>
        <translation type="unfinished">ฟอนต์ %1 ไม่สามารถใช้ได้  (No Face) ยกเลิกการใช้งาน</translation>
    </message>
    <message>
        <source>Font %1 has broken glyph %2 (charcode %3)</source>
        <translation type="unfinished">ฟอนต์ %1 เกิดผิดพลาดที่ตัวอักษร %2 (รหัสตัวอักษร %3)</translation>
    </message>
    <message>
        <source>Font %1 is broken and will be discarded</source>
        <translation type="unfinished">ฟอนต์ %1 ไม่สามารถใช้ได้ และละทึ้ง</translation>
    </message>
    <message>
        <source>Font %1 cannot be read, no embedding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Creating Font Cache</source>
        <translation type="unfinished">สร้างตัวอักษรที่ซ่อน</translation>
    </message>
    <message>
        <source>Failed to load font %1 - font type unknown</source>
        <translation type="unfinished">โหลดตัวอักษรล้มเหลว 1เปอร์เซ็นต์-ไม่รู้ชื่อตัวอักษร</translation>
    </message>
    <message>
        <source>New Font found, checking...</source>
        <translation type="unfinished">หาอักษรใหม่ ,ตรวจสอบ</translation>
    </message>
    <message>
        <source>Modified Font found, checking...</source>
        <translation type="unfinished">เปลี่ยนแปลงอักษร, ตรวจสอบ</translation>
    </message>
    <message>
        <source>Font %1 loaded from %2(%3)</source>
        <translation type="unfinished">ตัวอักษร 1เปอร์เซ็นต์ โหลดจาก 2 (3)</translation>
    </message>
    <message>
        <source>Font %1(%2) is duplicate of %3</source>
        <translation type="unfinished">ตัวอักษร 1เปอร์เซ็นต์(2) ฉบับคู่ของ(3)</translation>
    </message>
    <message>
        <source>Loading font %1 (found using fontconfig)</source>
        <translation type="unfinished">โหลด ตัวอักษร 1เปอร์เซ็นต์</translation>
    </message>
    <message>
        <source>Failed to load a font - freetype2 couldn&apos;t find the font file</source>
        <translation type="unfinished">ตัวอักษรที่โหลดล้มเหลว-มีอยู่2ชนิด ไมาสามารถหาตัวอักษรจากแฟ้ม</translation>
    </message>
    <message>
        <source>Reading Font Cache</source>
        <translation type="unfinished">อ่านอักษรแครช</translation>
    </message>
    <message>
        <source>Writing updated Font Cache</source>
        <translation type="unfinished">เขียนตัวอักษรแครชครั้งล่าสุด</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation type="unfinished">ค้นหาตัวอักษร</translation>
    </message>
    <message>
        <source>Font %1 is broken (FreeType), discarding it</source>
        <translation type="unfinished">ฟอนต์ %1  ไม่สามารถใช้ได้ (FreeType), ละทิ้ง
</translation>
    </message>
    <message>
        <source>Font %1  has invalid glyph %2 (charcode %3), discarding it</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>extracting face %1 from font %2 (offset=%3, nTables=%4)</source>
        <translation type="unfinished">ถอดหน้า1 เปอร์เซ็ฯต์จากตัวอักษร 2เปอร์เซ็นต์</translation>
    </message>
    <message>
        <source>memcpy header: %1 %2 %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>table &apos;%1&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>memcpy table: %1 %2 %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>memcpy offset: %1 %2 %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus Development Version</source>
        <translation type="unfinished">พัฒนารุ่นสไครบัส</translation>
    </message>
    <message>
        <source>You are running a development version of Scribus 1.3.x. The document you are working with was created in Scribus 1.2.3 or lower. The process of saving will make this file unusable again in Scribus 1.2.3 unless you use File-&gt;Save As. Are you sure you wish to proceed with this operation?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;reate</source>
        <translation type="unfinished">สร้าง</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished">นำเข้า</translation>
    </message>
    <message>
        <source>The changes to your document have not been saved and you have requested to revert them. Do you wish to continue?</source>
        <translation type="unfinished">การแก้ไขเอกสารของคุณยังไม่ได้ถูกบันทึก และคุณต้องย้อนกลับไปยังจุดเริ่มต้น. คุณต้องการที่จะดำเนินการต่อหรือไม่?</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished">pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="unfinished">in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="unfinished">p</translation>
    </message>
    <message>
        <source> cm</source>
        <translation type="unfinished">cm</translation>
    </message>
    <message>
        <source> c</source>
        <translation type="unfinished">c</translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="unfinished">pt</translation>
    </message>
    <message>
        <source>mm</source>
        <translation type="unfinished">mm</translation>
    </message>
    <message>
        <source>in</source>
        <translation type="unfinished">in</translation>
    </message>
    <message>
        <source>p</source>
        <translation type="unfinished">p</translation>
    </message>
    <message>
        <source>cm</source>
        <translation type="unfinished">cm</translation>
    </message>
    <message>
        <source>c</source>
        <translation type="unfinished">c</translation>
    </message>
    <message>
        <source>Points (pt)</source>
        <translation type="unfinished">พ้อนต์ (pt)</translation>
    </message>
    <message>
        <source>Millimeters (mm)</source>
        <translation type="unfinished">มิลลิเมตร (mm)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="unfinished">นิ้ว (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="unfinished">พิคา (p)</translation>
    </message>
    <message>
        <source>Centimeters (cm)</source>
        <translation type="unfinished">เซนติเมตร (cm)</translation>
    </message>
    <message>
        <source>Cicero (c)</source>
        <translation type="unfinished">ซีเซโร่ (c)</translation>
    </message>
    <message>
        <source>File exists</source>
        <translation type="unfinished">ออกจากแฟ้ม</translation>
    </message>
    <message>
        <source>A file named &apos;%1&apos; already exists.&lt;br/&gt;Do you want to replace it with the file you are saving?</source>
        <translation type="unfinished">แฟ้มชื่อ %1 มีอยู่ก่อนแล้ว คุณต้องการที่จะบันทึกแทนที่มันด้วยแฟ้มปัจจุบันนี้?</translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation type="unfinished">แทนที่</translation>
    </message>
    <message>
        <source>page</source>
        <comment>page export</comment>
        <translation type="unfinished">หน้า</translation>
    </message>
    <message>
        <source>Color Wheel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Preview</source>
        <translation type="unfinished">เค้าโครงตัวอักษร</translation>
    </message>
    <message>
        <source>My Plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New From Template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document Template: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export As Image</source>
        <translation type="unfinished">ส่งรูปออก</translation>
    </message>
    <message>
        <source>PS/EPS Importer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save As Template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color not found.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่กำหนดสี</translation>
    </message>
    <message>
        <source>Color not found in document.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่กำหนดสีในเอกสาร</translation>
    </message>
    <message>
        <source>Color not found in default colors.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่กำหนดสีในสีที่ผิด</translation>
    </message>
    <message>
        <source>firstPageOrder is bigger than allowed.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to open document.</source>
        <comment>python error</comment>
        <translation type="unfinished">เปิดเอกสารล้มเหลว</translation>
    </message>
    <message>
        <source>Failed to save document.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถบันทึกเอกสารได้
เกิดความผิดพลาดที่ไพท่อน</translation>
    </message>
    <message>
        <source>Color not found - python error</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่กำหนดสี-ไพตอนผิดพลาด</translation>
    </message>
    <message>
        <source>Argument must be page item name, or PyCObject instance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Property not found</source>
        <translation type="unfinished">ไม่กำหนดคุณสมบัติ</translation>
    </message>
    <message>
        <source>Child not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Couldn&apos;t convert result type &apos;%1&apos;.</source>
        <translation type="unfinished">ไม่สามารถแปลงชนิดของผลลัพท์ %1</translation>
    </message>
    <message>
        <source>Property type &apos;%1&apos; not supported</source>
        <translation type="unfinished">ชนิดคุณสมบัติ %1 ไม่สนับสนุน</translation>
    </message>
    <message>
        <source>Couldn&apos;t convert &apos;%1&apos; to property type &apos;%2&apos;</source>
        <translation type="unfinished">ไม่สามารถแปลง%1 ถึงชนิดของคุณสมบัติ%2</translation>
    </message>
    <message>
        <source>Types matched, but setting property failed.</source>
        <translation type="unfinished">ชนิดแมช แต่การตั้งค่าคุณสมบัติล้มเหลว</translation>
    </message>
    <message>
        <source>Specified item not an image frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">วัตถุที่เลือกไม่ใช้เฟรมรูปภาพ</translation>
    </message>
    <message>
        <source>Cannot group less than two items</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถรวมวัตถุน้อยกว่าสองชึ้น</translation>
    </message>
    <message>
        <source>Can&apos;t group less than two items</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถรวมวัตถุน้อยกว่าสองชึ้น</translation>
    </message>
    <message>
        <source>Need selection or argument list of items to group</source>
        <comment>python error</comment>
        <translation type="unfinished">จำเป็นเลือก หรือ พิสูจน์รายการ ของไอเท็มกลุ่ม</translation>
    </message>
    <message>
        <source>Cannot scale by 0%.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถสเกล 0%</translation>
    </message>
    <message>
        <source>Font not found.</source>
        <comment>python error</comment>
        <translation type="unfinished">กำหนดตัวอักษรไม่ได้</translation>
    </message>
    <message>
        <source>Cannot render an empty sample.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถแปลจากตัวอย่างที่ว่างเปล่า</translation>
    </message>
    <message>
        <source>Unable to save pixmap</source>
        <comment>scripter error</comment>
        <translation type="unfinished">ไม่สามารถบันทึก pixmap

ชุดคำสั่งผิดพลาด</translation>
    </message>
    <message>
        <source>Cannot have an empty layer name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer not found.</source>
        <comment>python error</comment>
        <translation type="unfinished">กำหนอชั้นไม่ได้</translation>
    </message>
    <message>
        <source>Cannot remove the last layer.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถเคลื่อนย้ายชั้นล่าสุด</translation>
    </message>
    <message>
        <source>Cannot create layer without a name.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถสร้างชื่อชั้นโดยปราศจากชื่อ</translation>
    </message>
    <message>
        <source>An object with the requested name already exists.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain at least two points (four values).</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain an even number of values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain at least three points (six values).</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must contain at least four points (eight values).</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point list must have a multiple of six values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Object not found.</source>
        <comment>python error</comment>
        <translation type="unfinished">กำหนดวัตถุไม่ได้</translation>
    </message>
    <message>
        <source>Style not found.</source>
        <comment>python error</comment>
        <translation type="unfinished">กำหนดรูปแบบไม่ได้</translation>
    </message>
    <message>
        <source>Cannot set style on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถตั้งค่ารูปแบบบนเฟลมที่ไม่มีข้อความได้</translation>
    </message>
    <message>
        <source>Failed to save EPS.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถบันทึกเป็นอีพีเอส

เกิดความผิดพลาดที่ไพท่อน</translation>
    </message>
    <message>
        <source>Page number out of range.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่การเรียงหมายเลขหน้ากระดาษ</translation>
    </message>
    <message>
        <source>argument is not list: must be list of float values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>argument contains non-numeric values: must be list of float values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>argument contains no-numeric values: must be list of float values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line style not found.</source>
        <comment>python error</comment>
        <translation type="unfinished">กำหนดรูปแบบลานเส้นไม่ได้</translation>
    </message>
    <message>
        <source>Insert index out of bounds.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set text alignment on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถตั้งค่าลายเส้นแนวตรงบนเฟลมที่ไม่มีข้อความได้</translation>
    </message>
    <message>
        <source>Font size out of bounds - must be 1 &lt;= size &lt;= 512.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set font size on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถตั้งค่าขนาดตัวอักษรบนเฟลมที่ไม่มีข้อความได้</translation>
    </message>
    <message>
        <source>Cannot set font on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถตั้งค่าตัวอักษรบนเฟลมที่ไม่ข้อความได้</translation>
    </message>
    <message>
        <source>Line space out of bounds, must be &gt;= 0.1.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set line spacing on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถตั้งค่าช่องว่างของเส้นบนเฟลมที่ไม่มีข้อความได้</translation>
    </message>
    <message>
        <source>Column gap out of bounds, must be positive.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set column gap on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถตั้งค่าระยะห่างคอลัมน์บนเฟลมที่ไม่มีข้อความได้</translation>
    </message>
    <message>
        <source>Column count out of bounds, must be &gt; 1.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set number of columns on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถตั้งค่าจำนวนคอลัมน์บนเฟลมที่ไม่ใช้เฟรมข้อความได้</translation>
    </message>
    <message>
        <source>Cannot select text in a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถเลือกข้อความในเฟลมที่ไม่มีข้อความได้</translation>
    </message>
    <message>
        <source>Cannot delete text from a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถลบข้อความจากเฟลมที่ไม่มีข้อความได้</translation>
    </message>
    <message>
        <source>Cannot set text fill on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถตั้งค่าเติมข้อความบนเฟลมที่ไม่มีข้อความได้</translation>
    </message>
    <message>
        <source>Cannot set text stroke on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set text shade on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถตั้งค่าการแรเงาของข้อความบนเฟลมที่ไม่มีข้อความได้</translation>
    </message>
    <message>
        <source>Can only link text frames.</source>
        <comment>python error</comment>
        <translation type="unfinished">สามารถเชื่อมต่อเฟลมข้อความได้อย่างเดียว</translation>
    </message>
    <message>
        <source>Target frame must be empty.</source>
        <comment>python error</comment>
        <translation type="unfinished">เป้าหมายเฟลมต้องว่าง</translation>
    </message>
    <message>
        <source>Target frame links to another frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">การเชื่อมต่อเป้าหมายเฟลมไปยังอีกเฟลมหนึ่ง</translation>
    </message>
    <message>
        <source>Target frame is linked to by another frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">การเชื่อมต่อเป้าหมายเฟลมไปถึงอีกเฟลมอื่นๆ</translation>
    </message>
    <message>
        <source>Source and target are the same object.</source>
        <comment>python error</comment>
        <translation type="unfinished">ค้นหา และกำหนดเป้าหมายคล้ายวัตถุ</translation>
    </message>
    <message>
        <source>Cannot unlink a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถเชื่อมต่อเฟลมที่ไม่มีข้อความได้</translation>
    </message>
    <message>
        <source>Cannot convert a non-text frame to outlines.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถแปลงเฟลมที่ไม่มีข้อความไปยัง เค้าร่าง</translation>
    </message>
    <message>
        <source>Only text frames can be checked for overflowing</source>
        <comment>python error</comment>
        <translation type="unfinished">เฟลมข้อความเท่านั้นที่สามารถตรวจ สำหรับโอเว่อร์โฟรวิ่ง</translation>
    </message>
    <message>
        <source>Can&apos;t set bookmark on a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถตั้งค่าหมายเหตุบนเฟลมที่ไม่ข้อความได้</translation>
    </message>
    <message>
        <source>Can&apos;t get info from a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถรับอินโฟรจากเฟลมที่ไม่มีข้อความได้</translation>
    </message>
    <message>
        <source>The filename must be a string.</source>
        <comment>python error</comment>
        <translation type="unfinished">แฟ้มชื่อต้องมีลายเส้น</translation>
    </message>
    <message>
        <source>The filename should not be empty string.</source>
        <comment>python error</comment>
        <translation type="unfinished">แฟ้มชื่อไม่ควรใช้ลายเส้นที่ว่าง</translation>
    </message>
    <message>
        <source>Cannot delete image type settings.</source>
        <comment>python error</comment>
        <translation type="unfinished">ไม่สามารถลบการตั้งค่าชนิดรูปภาพได้</translation>
    </message>
    <message>
        <source>The image type must be a string.</source>
        <comment>python error</comment>
        <translation type="unfinished">ชนิดของรูปภาพต้องมีลายเส้น</translation>
    </message>
    <message>
        <source>&apos;allTypes&apos; attribute is READ-ONLY</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to export image</source>
        <comment>python error</comment>
        <translation type="unfinished">รูปภาพส่งออกล้มเหลว</translation>
    </message>
    <message>
        <source>&amp;Script</source>
        <translation type="unfinished">ต้นฉบับ</translation>
    </message>
    <message>
        <source>Scripter</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom (optional) configuration: </source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Standard configuration: </source>
        <comment>short words plugin</comment>
        <translation type="unfinished">มาตรฐานของรูปร่าง</translation>
    </message>
    <message>
        <source>Short Words</source>
        <translation type="unfinished">ย่อคำ</translation>
    </message>
    <message>
        <source>Short Words processing. Wait please...</source>
        <comment>short words plugin</comment>
        <translation type="unfinished">กำลังดำเนินการย่อคำ.กรุณารอสักครู่</translation>
    </message>
    <message>
        <source>Short Words processing. Done.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished">การดำเนินการย่อคำ.สำเร็จ</translation>
    </message>
    <message>
        <source>SVG Export</source>
        <translation type="unfinished">เอสวีจีส่งออก</translation>
    </message>
    <message>
        <source>SVG Import</source>
        <translation type="unfinished">เอสวีจีนำเข้า</translation>
    </message>
    <message>
        <source>Old .sla format support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OpenOffice.org Draw Importer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OpenDocument Text Documents</source>
        <translation type="unfinished">เปิดเอกสาร ข้อความเอกสาร</translation>
    </message>
    <message>
        <source>Barcode Generator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OpenOffice.org Draw (*.sxd *.odg);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Word Documents</source>
        <translation type="unfinished">คำศัพย์เอกสาร</translation>
    </message>
    <message>
        <source>Palm PDB Documents</source>
        <comment>PDB Importer</comment>
        <translation type="unfinished">ปาร์ม เอกสาร พีดีบี</translation>
    </message>
    <message>
        <source>PDB_data</source>
        <comment>PDB Importer</comment>
        <translation type="unfinished">พีดีบี ดาต้า</translation>
    </message>
    <message>
        <source>PDB Import</source>
        <comment>PDB Importer</comment>
        <translation type="unfinished">นำเข้า พีดีบี</translation>
    </message>
    <message>
        <source>Could not open file %1</source>
        <comment>PDB Importer</comment>
        <translation type="unfinished">ไม่สามารถเปิกแฟ้มได้%1</translation>
    </message>
    <message>
        <source>Luxembourgish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arabic</source>
        <translation type="unfinished">อาราบิค</translation>
    </message>
    <message>
        <source>Estonian</source>
        <translation type="unfinished">เอสโทเนีย</translation>
    </message>
    <message>
        <source>Japanese</source>
        <translation type="unfinished">เจแปนนิส</translation>
    </message>
    <message>
        <source>Given master page name does not match any existing.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Icelandic</source>
        <translation type="unfinished">ไอซแลนด์ดิ๊ก</translation>
    </message>
    <message>
        <source>%1 may be corrupted : missing resolution tags</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This file is not recognized as a PDB document. Please, report this as a bug if you are sure it is one.</source>
        <comment>PDB Importer</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Breton</source>
        <translation type="unfinished">บรีตัน</translation>
    </message>
    <message>
        <source>English (American)</source>
        <translation type="unfinished">อังกฤษ (อเมริกา)</translation>
    </message>
    <message>
        <source>English (Australian)</source>
        <translation type="unfinished">อังกฤษ (ออสเตรเลีย)</translation>
    </message>
    <message>
        <source>%1 may be corrupted : missing or wrong resolution tags</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Chinese (Trad.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>German (Swiss)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font %1 has broken metrics in file %2, ignoring metrics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Valid metrics were found for font %1, using metrics in file %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 has more than 8 bits per channel, Scribus will not preserve less significant bits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insufficient memory for this image size.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill opacity out of bounds, must be 0.0 &lt;= opacity &lt;= 1.0</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transparency out of bounds, must be 0 &lt;= transparency &lt;= 1.</source>
        <comment>python error</comment>
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
        <translation type="unfinished">ล้าง</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation type="unfinished">เลือกทั้งหมด</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="unfinished">แก้ไข</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished">ทำใหม่</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="unfinished">ตัด</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished">ค้ดลอก</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished">วาง</translation>
    </message>
</context>
<context>
    <name>QTitleBar</name>
    <message>
        <source>System Menu</source>
        <translation type="unfinished">รายการระบบ</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation type="unfinished">ระบายเงา</translation>
    </message>
    <message>
        <source>Unshade</source>
        <translation>ไม่ระบายเงา</translation>
    </message>
    <message>
        <source>Normalize</source>
        <translation type="unfinished">ปกติ</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation type="unfinished">น้อยที่สุด</translation>
    </message>
    <message>
        <source>Maximize</source>
        <translation type="unfinished">มากที่สุด</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished">ปิด</translation>
    </message>
</context>
<context>
    <name>QWorkspace</name>
    <message>
        <source>&amp;Restore</source>
        <translation type="unfinished">กลับเหมือนเดิม</translation>
    </message>
    <message>
        <source>&amp;Move</source>
        <translation type="unfinished">ย้าย</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation type="unfinished">ขนาด</translation>
    </message>
    <message>
        <source>Mi&amp;nimize</source>
        <translation type="unfinished">น้อยที่สุด</translation>
    </message>
    <message>
        <source>Ma&amp;ximize</source>
        <translation type="unfinished">มากที่สุด</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">ปิด</translation>
    </message>
    <message>
        <source>Stay on &amp;Top</source>
        <translation type="unfinished">อยู่ ด้าน บนสุด</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation type="unfinished">น้อยที่สุด</translation>
    </message>
    <message>
        <source>Restore Down</source>
        <translation type="unfinished">กลับลงไปข้างล่างเหมือนเดิม</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished">ปิด</translation>
    </message>
    <message>
        <source>Sh&amp;ade</source>
        <translation type="unfinished">แรเงา</translation>
    </message>
    <message>
        <source>%1 - [%2]</source>
        <translation type="unfinished">%1 - [%2]</translation>
    </message>
    <message>
        <source>&amp;Unshade</source>
        <translation type="unfinished">ไม่แรเงา</translation>
    </message>
</context>
<context>
    <name>Query</name>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
</context>
<context>
    <name>ReformDoc</name>
    <message>
        <source>Document Setup</source>
        <translation type="unfinished">ตั้งค่าเอกสาร</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation type="unfinished">Margin Guides</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation type="obsolete">Enable single or spread based layout</translation>
    </message>
    <message>
        <source>Make the first page the left page of the document</source>
        <translation type="obsolete">Make the first page the left page of the document</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation type="obsolete">Distance between the top margin guide and the edge of the page</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation type="obsolete">Distance between the bottom margin guide and the edge of the page</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="unfinished">บน:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="unfinished">ซ้าย:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="unfinished">ข้างล่าง:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="unfinished">ขวา:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation type="obsolete">&amp;Facing Pages</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation type="obsolete">Left &amp;Page First</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation type="obsolete">&amp;Inside:</translation>
    </message>
    <message>
        <source>&amp;Outside:</source>
        <translation type="obsolete">&amp;Outside:</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished">ขนาดกระดาษ</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation type="obsolete">Size:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">Custom</translation>
    </message>
    <message>
        <source>Orientation:</source>
        <translation type="obsolete">Orientation:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation type="unfinished">Portrait</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation type="unfinished">ภูมิประเทศ</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation type="obsolete">Width:</translation>
    </message>
    <message>
        <source>Height:</source>
        <translation type="obsolete">Height:</translation>
    </message>
    <message>
        <source>F&amp;irst Page Number:</source>
        <translation type="obsolete">F&amp;irst Page Number:</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished">ขนาด:</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished">พลิก</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation type="unfinished">กว้าง</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation type="unfinished">สูง</translation>
    </message>
    <message>
        <source>&amp;Unit:</source>
        <translation type="unfinished">หน่วย</translation>
    </message>
    <message>
        <source>Apply size settings to all pages</source>
        <translation type="unfinished">สมัครการตั้งค่าขนาดกระดาษทั้งหมด</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation type="unfinished">บันทึกอัตโนมัติ</translation>
    </message>
    <message>
        <source>min</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation type="unfinished">ระยะ</translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished">เอกสาร</translation>
    </message>
    <message>
        <source>Document Information</source>
        <translation type="unfinished">เอกสารแนะนำ</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation type="unfinished">แนะนำ</translation>
    </message>
    <message>
        <source>Page Display</source>
        <translation type="unfinished">แสดงหน้า</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="unfinished">สี</translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Pictures</source>
        <translation type="obsolete">แสดงรูปภาพ</translation>
    </message>
    <message>
        <source>Show Text Chains</source>
        <translation type="unfinished">แสดงแนวข้อความ</translation>
    </message>
    <message>
        <source>Show Text Control Characters</source>
        <translation type="unfinished">แสดงการบังคับลักษณะข้อความ</translation>
    </message>
    <message>
        <source>Show Frames</source>
        <translation type="unfinished">แสดงเฟลม</translation>
    </message>
    <message>
        <source>Rulers relative to Page</source>
        <translation type="unfinished">ไม้บรรทัดบนหน้ากระดาษ</translation>
    </message>
    <message>
        <source>Minimum Scratch Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Gaps between Pages</source>
        <translation type="unfinished">แก๊ป ระหว่างหน้ากระดาษ</translation>
    </message>
    <message>
        <source>Horizontal:</source>
        <translation type="unfinished">แนวขวาง</translation>
    </message>
    <message>
        <source>Vertical:</source>
        <translation type="unfinished">เส้นตั้งตรง</translation>
    </message>
    <message>
        <source>Display</source>
        <translation type="unfinished">แสดง</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tools</source>
        <translation type="unfinished">เครื่องมือ</translation>
    </message>
    <message>
        <source>Hyphenator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fonts</source>
        <translation>ตัวอักษร</translation>
    </message>
    <message>
        <source>Preflight Verifier</source>
        <translation type="unfinished">ตรวจสอบก่อน</translation>
    </message>
    <message>
        <source>PDF Export</source>
        <translation type="unfinished">พีดีเอฟส่งออก</translation>
    </message>
    <message>
        <source>Document Item Attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sections</source>
        <translation type="unfinished">แผนก</translation>
    </message>
    <message>
        <source>Color Management</source>
        <translation type="unfinished">การจัดการสี</translation>
    </message>
    <message>
        <source>Enable or disable the display of linked text frames.</source>
        <translation type="unfinished">สามารถ หรือ ไม่สามารถแสดงการเชื่อมต่อข้อความเฟลม</translation>
    </message>
    <message>
        <source>Display non-printing characters such as paragraph markers in text frames</source>
        <translation type="unfinished">แสดงลักษระการพิมพ์ เช่นเครื่องหมายพารากราฟในข้อความเฟลม</translation>
    </message>
    <message>
        <source>Turns the display of frames on or off</source>
        <translation type="unfinished">กลับไปแสดงเฟลม เปิด หรือ ปิด</translation>
    </message>
    <message>
        <source>Turns the display of pictures on or off</source>
        <translation type="obsolete">กลับไปแสดงรูปภาพเปิดหรือปิด</translation>
    </message>
    <message>
        <source>Color for paper</source>
        <translation type="unfinished">สีสำหรับกระดาษ</translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation type="unfinished">ครอบคลุมขอบข้างด้านนอก ในสีเส้นขอบ</translation>
    </message>
    <message>
        <source>Apply the page size changes to all existing pages in the document</source>
        <translation type="unfinished">สมัครการเปลี่ยนขนาดหน้าไปยังหน้าที่อยู่ทั้งหมดในเอกสาร</translation>
    </message>
    <message>
        <source>Adjusting Colors</source>
        <translation type="unfinished">ปรับสี</translation>
    </message>
    <message>
        <source>Show Images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the display of images on or off</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>RunScriptDialog</name>
    <message>
        <source>Python Scripts (*.py);; All Files (*)</source>
        <translation type="unfinished">ต้นฉบับไพตอน (*.py);; แฟ้มทั้งหมด (*)</translation>
    </message>
    <message>
        <source>Run as Extension Script</source>
        <comment>run script dialog</comment>
        <translation type="unfinished">ดำเนินตามขอบเขตต้นฉบับ</translation>
    </message>
</context>
<context>
    <name>SMBase</name>
    <message>
        <source>Style Manager</source>
        <translation type="unfinished">แบบการจัดการ</translation>
    </message>
    <message>
        <source>Column 1</source>
        <translation type="unfinished">คอลัมน์ 1</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="unfinished">เพิ่ม</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished">ชื่อ:</translation>
    </message>
    <message>
        <source>O&amp;K</source>
        <translation type="unfinished">ตกลง</translation>
    </message>
    <message>
        <source>Alt+K</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A&amp;pply</source>
        <translation type="unfinished">สมัคร</translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ca&amp;ncel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMLineStyle</name>
    <message>
        <source>Properties</source>
        <translation type="unfinished">คุณสมบัติ</translation>
    </message>
    <message>
        <source>Lines</source>
        <translation type="unfinished">เส้น</translation>
    </message>
</context>
<context>
    <name>SToolBAlign</name>
    <message>
        <source>Style of current paragraph</source>
        <translation type="unfinished">รูปแบบของพารากราฟล่าสุด</translation>
    </message>
    <message>
        <source>Style Settings</source>
        <translation type="unfinished">ตั้งค่ารูปแบบ</translation>
    </message>
</context>
<context>
    <name>SToolBColorF</name>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation type="unfinished">เติมสีข้อความ</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation type="unfinished">Saturation of colour of text fill</translation>
    </message>
    <message>
        <source>Fill Color Settings</source>
        <translation type="unfinished">ตั้งค่าเติมสี</translation>
    </message>
</context>
<context>
    <name>SToolBColorS</name>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation type="unfinished">สีของเส้นข้อความ</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation type="unfinished">Saturation of colour of text stroke</translation>
    </message>
    <message>
        <source>Stroke Color Settings</source>
        <translation type="unfinished">ตั้งค่าสีเส้นตัวหนังสือ</translation>
    </message>
</context>
<context>
    <name>SToolBFont</name>
    <message>
        <source> pt</source>
        <translation type="unfinished">pt</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Font of selected text</source>
        <translation type="unfinished">รูปแบบอักษรของข้อความที่เลือก</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation type="unfinished">ขนาดตัวอักษร</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation type="unfinished">สเกลความกว้างของตัวอักษร</translation>
    </message>
    <message>
        <source>Font Settings</source>
        <translation type="unfinished">ตั้งค่าตัวอักษร</translation>
    </message>
    <message>
        <source>Scaling height of characters</source>
        <translation type="unfinished">สเกลความสูงของตัวอักษร</translation>
    </message>
</context>
<context>
    <name>SToolBStyle</name>
    <message>
        <source>Kerning:</source>
        <translation type="obsolete">Kerning:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source>Manual Kerning</source>
        <translation type="obsolete">Manual Kerning</translation>
    </message>
    <message>
        <source>Character Settings</source>
        <translation type="unfinished">ตั้งค่าตัวอักษร</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished">%</translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation type="unfinished">การติดตามการทำงานแบบแมนนวล</translation>
    </message>
</context>
<context>
    <name>SVGExportPlugin</name>
    <message>
        <source>Save Page as &amp;SVG...</source>
        <translation type="unfinished">บันทึกเอกสารเป็นเอสวีจี...</translation>
    </message>
    <message>
        <source>Exports SVG Files</source>
        <translation type="unfinished">ส่งออกแฟ้ม เอสวีจี</translation>
    </message>
    <message>
        <source>Exports the current page into an SVG file.</source>
        <translation type="unfinished">ส่งออกหน้าปัจจุบันไปยังแฟ้มเอสวีจี</translation>
    </message>
</context>
<context>
    <name>SVGImportPlugin</name>
    <message>
        <source>Import &amp;SVG...</source>
        <translation type="unfinished">นำเข้า เอสวีจี...</translation>
    </message>
    <message>
        <source>Imports SVG Files</source>
        <translation type="unfinished">นำเข้าแฟ้มเอสวีจี</translation>
    </message>
    <message>
        <source>Imports most SVG files into the current document,
converting their vector data into Scribus objects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scalable Vector Graphics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SVG file contains some unsupported features</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SWDialog</name>
    <message>
        <source>Short Words</source>
        <comment>short words plugin</comment>
        <translation type="unfinished">คำสั้น</translation>
    </message>
    <message>
        <source>Apply unbreakable space on:</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Selected frames</source>
        <comment>short words plugin</comment>
        <translation type="unfinished">เลือกเฟลม</translation>
    </message>
    <message>
        <source>Active &amp;page</source>
        <comment>short words plugin</comment>
        <translation type="unfinished">แอคทีฟ หน้า</translation>
    </message>
    <message>
        <source>&amp;All items</source>
        <comment>short words plugin</comment>
        <translation type="unfinished">ทุกไอเท็ม</translation>
    </message>
    <message>
        <source>Only selected frames processed.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished">ดำเนินการเลือกเฟลมเท่านั้น</translation>
    </message>
    <message>
        <source>Only actual page processed.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished">ดำเนินการหน้าปัจจุบันเท่านั้น</translation>
    </message>
    <message>
        <source>All items in document processed.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished">ดำเนินการข้อในเอกสารทั้งหมด</translation>
    </message>
</context>
<context>
    <name>SWPrefsGui</name>
    <message>
        <source>User settings</source>
        <translation type="unfinished">ตั้งค่าผู้ใช้</translation>
    </message>
    <message>
        <source>System wide configuration</source>
        <translation type="unfinished">ระบบความกว้างรูปร่างภายนอก</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="unfinished">บันทึก</translation>
    </message>
    <message>
        <source>&amp;Reset</source>
        <translation type="unfinished">ตั้งค่าใหม่</translation>
    </message>
    <message>
        <source>Save user configuration</source>
        <translation type="unfinished">บันทึกการตั้งค่าของผู้ใช้</translation>
    </message>
    <message>
        <source>Reload system wide configuration and remove user defined one</source>
        <translation type="unfinished">โหลดระบบความกว้างรูปร่างภายและกำหนดย้ายผู้ใช้เพียงหนึ่งเดียว</translation>
    </message>
    <message>
        <source>Edit custom configuration. If you save it, it will be used over system wide configuration</source>
        <translation type="unfinished">แก้ไขการตั้งค่า. ถ้าคุณทำการบันทึก. มันจะถูกเรียกใช้โดยระบบหลัก</translation>
    </message>
    <message>
        <source>Short Words</source>
        <translation type="unfinished">คำสั้น</translation>
    </message>
    <message>
        <source>User configuration exists elready. Do you really want to overwrite it?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot write file %1.</source>
        <translation type="unfinished">ไม่สามารถเขียนแฟ้มได้ %1</translation>
    </message>
    <message>
        <source>User settings saved</source>
        <translation type="unfinished">บันทึกการตั้งค่าของผู้ใช้</translation>
    </message>
    <message>
        <source>System wide configuration reloaded</source>
        <translation type="unfinished">ระบบความกว้างรูปร่าง โหลดอีกครั้ง</translation>
    </message>
    <message>
        <source>Cannot open file %1</source>
        <translation type="unfinished">ไม่สามารถเปิดแฟ้ม %1</translation>
    </message>
</context>
<context>
    <name>SaveAsTemplatePlugin</name>
    <message>
        <source>Save as &amp;Template...</source>
        <translation type="unfinished">บันทึกเป็นแม่แบบ...</translation>
    </message>
    <message>
        <source>Save a document as a template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save a document as a template. Good way to ease the initial work for documents with a constant look</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScPlugin</name>
    <message>
        <source>Load/Save/Import/Export</source>
        <translation type="unfinished">โหลด/บันทึก/นำเข้า/ส่งออก</translation>
    </message>
    <message>
        <source>Persistent</source>
        <comment>plugin manager plugin type</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Action</source>
        <comment>plugin manager plugin type</comment>
        <translation type="unfinished">ลักษณะท่าทาง</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation type="unfinished">ไม่รู้ชื่อ</translation>
    </message>
</context>
<context>
    <name>ScToolBar</name>
    <message>
        <source>Top</source>
        <translation type="unfinished">บน</translation>
    </message>
    <message>
        <source>Right</source>
        <translation type="unfinished">ขวา</translation>
    </message>
    <message>
        <source>Bottom</source>
        <translation type="unfinished">ล่าง</translation>
    </message>
    <message>
        <source>Left</source>
        <translation type="unfinished">ซ้าย</translation>
    </message>
    <message>
        <source>Allow Docking To...</source>
        <translation type="unfinished">อนุญาติให้แนบที่...</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="unfinished">แนวนอน</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="unfinished">แนวตั้ง</translation>
    </message>
    <message>
        <source>Floating Orientation...</source>
        <translation type="unfinished">Floating Orientation...</translation>
    </message>
</context>
<context>
    <name>ScWinPrint</name>
    <message>
        <source>Printing...</source>
        <translation type="unfinished">พิมพ์...</translation>
    </message>
</context>
<context>
    <name>ScriXmlDoc</name>
    <message>
        <source>Copy #%1 of </source>
        <translation type="unfinished">คัดลอก #%1 of </translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="unfinished">พื้นหลัง</translation>
    </message>
</context>
<context>
    <name>ScribusApp</name>
    <message>
        <source>File</source>
        <translation type="obsolete">File</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation type="obsolete">Searching for Fonts</translation>
    </message>
    <message>
        <source>There are no Postscript-Fonts on your System</source>
        <translation type="obsolete">There are no Postscript-Fonts on your System</translation>
    </message>
    <message>
        <source>Exiting now</source>
        <translation type="obsolete">Exiting now</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation type="obsolete">Fatal Error</translation>
    </message>
    <message>
        <source>Smart Hyphen</source>
        <translation type="obsolete">Smart Hyphen</translation>
    </message>
    <message>
        <source>Align Left</source>
        <translation type="obsolete">Align Left</translation>
    </message>
    <message>
        <source>Align Right</source>
        <translation type="obsolete">Align Right</translation>
    </message>
    <message>
        <source>Align Center</source>
        <translation type="obsolete">Align Centre</translation>
    </message>
    <message>
        <source>Insert Page Number</source>
        <translation type="obsolete">Insert Page Number</translation>
    </message>
    <message>
        <source>Attach Text to Path</source>
        <translation type="obsolete">Attach Text to Path</translation>
    </message>
    <message>
        <source>Show Layers</source>
        <translation type="obsolete">Show Layers</translation>
    </message>
    <message>
        <source>Javascripts...</source>
        <translation type="obsolete">Javascripts...</translation>
    </message>
    <message>
        <source>Undo</source>
        <translation type="obsolete">Undo</translation>
    </message>
    <message>
        <source>Show Page Palette</source>
        <translation type="obsolete">Show Page Palette</translation>
    </message>
    <message>
        <source>Lock/Unlock</source>
        <translation type="obsolete">Lock/Unlock</translation>
    </message>
    <message>
        <source>Non Breaking Space</source>
        <translation type="obsolete">Non Breaking Space</translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation type="obsolete">Reading Preferences</translation>
    </message>
    <message>
        <source>Init Hyphenator</source>
        <translation type="obsolete">Init Hyphenator</translation>
    </message>
    <message>
        <source>Setting up Shortcuts</source>
        <translation type="obsolete">Setting up Shortcuts</translation>
    </message>
    <message>
        <source>Reading Scrapbook</source>
        <translation type="obsolete">Reading Scrapbook</translation>
    </message>
    <message>
        <source>Initializing Plugins</source>
        <translation type="obsolete">Initialising Plugins</translation>
    </message>
    <message>
        <source>New</source>
        <translation type="obsolete">New</translation>
    </message>
    <message>
        <source>Open...</source>
        <translation type="obsolete">Open...</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="obsolete">Close</translation>
    </message>
    <message>
        <source>Save</source>
        <translation type="obsolete">Save</translation>
    </message>
    <message>
        <source>Save as...</source>
        <translation type="obsolete">Save as...</translation>
    </message>
    <message>
        <source>Get Text/Picture...</source>
        <translation type="obsolete">Get Text/Picture...</translation>
    </message>
    <message>
        <source>Document Info...</source>
        <translation type="obsolete">Document Info...</translation>
    </message>
    <message>
        <source>Document Setup...</source>
        <translation type="obsolete">Document Setup...</translation>
    </message>
    <message>
        <source>Print...</source>
        <translation type="obsolete">Print...</translation>
    </message>
    <message>
        <source>Quit</source>
        <translation type="obsolete">Quit</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation type="obsolete">Cut</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation type="obsolete">Copy</translation>
    </message>
    <message>
        <source>Paste</source>
        <translation type="obsolete">Paste</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation type="obsolete">Clear</translation>
    </message>
    <message>
        <source>Select all</source>
        <translation type="obsolete">Select all</translation>
    </message>
    <message>
        <source>Colors...</source>
        <translation type="obsolete">Colours...</translation>
    </message>
    <message>
        <source>Styles...</source>
        <translation type="obsolete">Styles...</translation>
    </message>
    <message>
        <source>Templates...</source>
        <translation type="obsolete">Templates...</translation>
    </message>
    <message>
        <source>Fonts...</source>
        <translation type="obsolete">Fonts...</translation>
    </message>
    <message>
        <source>Select New Font</source>
        <translation type="obsolete">Select New Font</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation type="obsolete">Duplicate</translation>
    </message>
    <message>
        <source>Multiple Duplicate</source>
        <translation type="obsolete">Multiple Duplicate</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="obsolete">Delete</translation>
    </message>
    <message>
        <source>Group</source>
        <translation type="obsolete">Group</translation>
    </message>
    <message>
        <source>Un-group</source>
        <translation type="obsolete">Un-group</translation>
    </message>
    <message>
        <source>Lock</source>
        <translation type="obsolete">Lock</translation>
    </message>
    <message>
        <source>Send to Back</source>
        <translation type="obsolete">Send to Back</translation>
    </message>
    <message>
        <source>Bring to Front</source>
        <translation type="obsolete">Bring to Front</translation>
    </message>
    <message>
        <source>Lower</source>
        <translation type="obsolete">Lower</translation>
    </message>
    <message>
        <source>Raise</source>
        <translation type="obsolete">Raise</translation>
    </message>
    <message>
        <source>Distribute/Align...</source>
        <translation type="obsolete">Distribute/Align...</translation>
    </message>
    <message>
        <source>Insert...</source>
        <translation type="obsolete">Insert...</translation>
    </message>
    <message>
        <source>Delete...</source>
        <translation type="obsolete">Delete...</translation>
    </message>
    <message>
        <source>Move...</source>
        <translation type="obsolete">Move...</translation>
    </message>
    <message>
        <source>Apply Template...</source>
        <translation type="obsolete">Apply Template...</translation>
    </message>
    <message>
        <source>Manage Guides...</source>
        <translation type="obsolete">Manage Guides...</translation>
    </message>
    <message>
        <source>Fit in Window</source>
        <translation type="obsolete">Fit in Window</translation>
    </message>
    <message>
        <source>50%</source>
        <translation type="obsolete">50%</translation>
    </message>
    <message>
        <source>75%</source>
        <translation type="obsolete">75%</translation>
    </message>
    <message>
        <source>200%</source>
        <translation type="obsolete">200%</translation>
    </message>
    <message>
        <source>Thumbnails</source>
        <translation type="obsolete">Thumbnails</translation>
    </message>
    <message>
        <source>Hide Margins</source>
        <translation type="obsolete">Hide Margins</translation>
    </message>
    <message>
        <source>Hide Frames</source>
        <translation type="obsolete">Hide Frames</translation>
    </message>
    <message>
        <source>Hide Images</source>
        <translation type="obsolete">Hide Images</translation>
    </message>
    <message>
        <source>Show Grid</source>
        <translation type="obsolete">Show Grid</translation>
    </message>
    <message>
        <source>Snap to Grid</source>
        <translation type="obsolete">Snap to Grid</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation type="obsolete">Tools</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation type="obsolete">Properties</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation type="obsolete">Outline</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation type="obsolete">Scrapbook</translation>
    </message>
    <message>
        <source>Manage Pictures</source>
        <translation type="obsolete">Manage Pictures</translation>
    </message>
    <message>
        <source>Hyphenate Text</source>
        <translation type="obsolete">Hyphenate Text</translation>
    </message>
    <message>
        <source>About Scribus</source>
        <translation type="obsolete">About Scribus</translation>
    </message>
    <message>
        <source>About Qt</source>
        <translation type="obsolete">About Qt</translation>
    </message>
    <message>
        <source>Online-Help...</source>
        <translation type="obsolete">Online-Help...</translation>
    </message>
    <message>
        <source>Style</source>
        <translation type="obsolete">Style</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normal</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation type="obsolete">Underline</translation>
    </message>
    <message>
        <source>Strikethru</source>
        <translation type="obsolete">Strikeout</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="obsolete">Small Caps</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="obsolete">Superscript</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation type="obsolete">Subscript</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation type="obsolete">Outlined</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation type="obsolete">X-Pos:</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation type="obsolete">Y-Pos:</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation type="obsolete">Ready</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>Get Picture...</source>
        <translation type="obsolete">Get Picture...</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="obsolete">Colour</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation type="obsolete">Invert</translation>
    </message>
    <message>
        <source>Get Text...</source>
        <translation type="obsolete">Get Text...</translation>
    </message>
    <message>
        <source>Font</source>
        <translation type="obsolete">Font</translation>
    </message>
    <message>
        <source>Size</source>
        <translation type="obsolete">Size</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation type="obsolete">Shade</translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation type="obsolete">Unlock</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="obsolete">Open</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="obsolete">Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="obsolete">Documents (*.sla *.scd);;All Files (*)</translation>
    </message>
    <message>
        <source>Loading...</source>
        <translation type="obsolete">Loading...</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation type="obsolete">All Supported Formats</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation type="obsolete">All Files (*)</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation type="obsolete">Text Files (*.txt);;All Files(*)</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Warning</translation>
    </message>
    <message>
        <source>Can&apos;t write the File: 
%1</source>
        <translation type="obsolete">Can&apos;t write the File: 
%1</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">OK</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="obsolete">Save as</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</source>
        <translation type="obsolete">Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</translation>
    </message>
    <message>
        <source>Saving...</source>
        <translation type="obsolete">Saving...</translation>
    </message>
    <message>
        <source>Printing...</source>
        <translation type="obsolete">Printing...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="obsolete">Document</translation>
    </message>
    <message>
        <source>Printing failed!</source>
        <translation type="obsolete">Printing failed!</translation>
    </message>
    <message>
        <source>Scribus Manual</source>
        <translation type="obsolete">Scribus Manual</translation>
    </message>
    <message>
        <source>The following Programs are missing:</source>
        <translation type="obsolete">The following Programs are missing:</translation>
    </message>
    <message>
        <source>All</source>
        <translation type="obsolete">All</translation>
    </message>
    <message>
        <source>EPS-Files (*.eps);;All Files (*)</source>
        <translation type="obsolete">EPS-Files (*.eps);;All Files (*)</translation>
    </message>
    <message>
        <source>Loading:</source>
        <translation type="obsolete">Loading:</translation>
    </message>
    <message>
        <source>Adjusting Colors</source>
        <translation type="obsolete">Adjusting Colours</translation>
    </message>
    <message>
        <source>English</source>
        <translation type="obsolete">English</translation>
    </message>
    <message>
        <source>German</source>
        <translation type="obsolete">German</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation type="obsolete">Spanish</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation type="obsolete">Italian</translation>
    </message>
    <message>
        <source>French</source>
        <translation type="obsolete">French</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation type="obsolete">Russian</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation type="obsolete">Danish</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation type="obsolete">Slovak</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation type="obsolete">Hungarian</translation>
    </message>
    <message>
        <source>Czech</source>
        <translation type="obsolete">Czech</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation type="obsolete">Dutch</translation>
    </message>
    <message>
        <source>Portuguese</source>
        <translation type="obsolete">Portuguese</translation>
    </message>
    <message>
        <source>Ukrainian</source>
        <translation type="obsolete">Ukrainian</translation>
    </message>
    <message>
        <source>Polish</source>
        <translation type="obsolete">Polish</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation type="obsolete">Greek</translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation type="obsolete">Catalan</translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation type="obsolete">Finnish</translation>
    </message>
    <message>
        <source>Irish</source>
        <translation type="obsolete">Irish</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation type="obsolete">Choose a Directory</translation>
    </message>
    <message>
        <source>Scribus Crash</source>
        <translation type="obsolete">Scribus Crash</translation>
    </message>
    <message>
        <source>Scribus crashes due to Signal #%1</source>
        <translation type="obsolete">Scribus crashes due to Signal #%1</translation>
    </message>
    <message>
        <source>Create a new Document</source>
        <translation type="obsolete">Create a new Document</translation>
    </message>
    <message>
        <source>Open a Document</source>
        <translation type="obsolete">Open a Document</translation>
    </message>
    <message>
        <source>Save the current Document</source>
        <translation type="obsolete">Save the current Document</translation>
    </message>
    <message>
        <source>Close the current Document</source>
        <translation type="obsolete">Close the current Document</translation>
    </message>
    <message>
        <source>Print the current Document</source>
        <translation type="obsolete">Print the current Document</translation>
    </message>
    <message>
        <source>Save the current Document as PDF</source>
        <translation type="obsolete">Save the current Document as PDF</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="obsolete">&amp;File</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="obsolete">&amp;Edit</translation>
    </message>
    <message>
        <source>&amp;Item</source>
        <translation type="obsolete">&amp;Item</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation type="obsolete">&amp;Page</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation type="obsolete">&amp;View</translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation type="obsolete">&amp;Tools</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation type="obsolete">E&amp;xtras</translation>
    </message>
    <message>
        <source>&amp;Windows</source>
        <translation type="obsolete">&amp;Windows</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation type="obsolete">&amp;Help</translation>
    </message>
    <message>
        <source>Show Baseline Grid</source>
        <translation type="obsolete">Show Baseline Grid</translation>
    </message>
    <message>
        <source>Hide Baseline Grid</source>
        <translation type="obsolete">Hide Baseline Grid</translation>
    </message>
    <message>
        <source>Some Objects are locked.</source>
        <translation type="obsolete">Some Objects are locked.</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Cancel</translation>
    </message>
    <message>
        <source>Lock all</source>
        <translation type="obsolete">Lock all</translation>
    </message>
    <message>
        <source>Unlock all</source>
        <translation type="obsolete">Unlock all</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source>mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source>in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source>p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation type="obsolete">&amp;Settings</translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation type="obsolete">Lithuanian</translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation type="obsolete">Swedish</translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation type="obsolete">Slovenian</translation>
    </message>
    <message>
        <source>&amp;Color Management...</source>
        <translation type="obsolete">&amp;Colour Management...</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;New</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation type="obsolete">&amp;Open...</translation>
    </message>
    <message>
        <source>Open &amp;Recent</source>
        <translation type="obsolete">Open &amp;Recent</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Close</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="obsolete">&amp;Save</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="obsolete">Save &amp;As...</translation>
    </message>
    <message>
        <source>Re&amp;vert to Saved</source>
        <translation type="obsolete">Re&amp;vert to Saved</translation>
    </message>
    <message>
        <source>Collect for O&amp;utput...</source>
        <translation type="obsolete">Collect for O&amp;utput...</translation>
    </message>
    <message>
        <source>&amp;Get Text/Picture...</source>
        <translation type="obsolete">&amp;Get Text/Picture...</translation>
    </message>
    <message>
        <source>Append &amp;Text...</source>
        <translation type="obsolete">Append &amp;Text...</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="obsolete">&amp;Import</translation>
    </message>
    <message>
        <source>Save &amp;Text...</source>
        <translation type="obsolete">Save &amp;Text...</translation>
    </message>
    <message>
        <source>Save Page as &amp;EPS...</source>
        <translation type="obsolete">Save Page as &amp;EPS...</translation>
    </message>
    <message>
        <source>Save as P&amp;DF...</source>
        <translation type="obsolete">Save as P&amp;DF...</translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation type="obsolete">&amp;Export</translation>
    </message>
    <message>
        <source>Document &amp;Setup...</source>
        <translation type="obsolete">Document &amp;Setup...</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation type="obsolete">&amp;Print...</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation type="obsolete">&amp;Quit</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="obsolete">&amp;Undo</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="obsolete">Cu&amp;t</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="obsolete">&amp;Copy</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="obsolete">&amp;Paste</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="obsolete">C&amp;lear</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation type="obsolete">Select &amp;All</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation type="obsolete">&amp;Search/Replace...</translation>
    </message>
    <message>
        <source>C&amp;olors...</source>
        <translation type="obsolete">C&amp;olours...</translation>
    </message>
    <message>
        <source>&amp;Paragraph Styles...</source>
        <translation type="obsolete">&amp;Paragraph Styles...</translation>
    </message>
    <message>
        <source>&amp;Line Styles...</source>
        <translation type="obsolete">&amp;Line Styles...</translation>
    </message>
    <message>
        <source>&amp;Templates...</source>
        <translation type="obsolete">&amp;Templates...</translation>
    </message>
    <message>
        <source>&amp;Javascripts...</source>
        <translation type="obsolete">&amp;Javascripts...</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="obsolete">D&amp;uplicate</translation>
    </message>
    <message>
        <source>&amp;Multiple Duplicate</source>
        <translation type="obsolete">&amp;Multiple Duplicate</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Delete</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="obsolete">&amp;Group</translation>
    </message>
    <message>
        <source>&amp;Ungroup</source>
        <translation type="obsolete">&amp;Ungroup</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation type="obsolete">&amp;Lock</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation type="obsolete">Send to &amp;Back</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation type="obsolete">Bring to &amp;Front</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation type="obsolete">&amp;Lower</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation type="obsolete">&amp;Raise</translation>
    </message>
    <message>
        <source>Distribute/&amp;Align...</source>
        <translation type="obsolete">Distribute/&amp;Align...</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation type="obsolete">&amp;Shape</translation>
    </message>
    <message>
        <source>&amp;Attach Text to Path</source>
        <translation type="obsolete">&amp;Attach Text to Path</translation>
    </message>
    <message>
        <source>&amp;Detach Text from Path</source>
        <translation type="obsolete">&amp;Detach Text from Path</translation>
    </message>
    <message>
        <source>&amp;Combine Polygons</source>
        <translation type="obsolete">&amp;Combine Polygons</translation>
    </message>
    <message>
        <source>Split &amp;Polygons</source>
        <translation type="obsolete">Split &amp;Polygons</translation>
    </message>
    <message>
        <source>C&amp;onvert to Outlines</source>
        <translation type="obsolete">C&amp;onvert to Outlines</translation>
    </message>
    <message>
        <source>&amp;Insert...</source>
        <translation type="obsolete">&amp;Insert...</translation>
    </message>
    <message>
        <source>&amp;Delete...</source>
        <translation type="obsolete">&amp;Delete...</translation>
    </message>
    <message>
        <source>&amp;Move...</source>
        <translation type="obsolete">&amp;Move...</translation>
    </message>
    <message>
        <source>&amp;Apply Template...</source>
        <translation type="obsolete">&amp;Apply Template...</translation>
    </message>
    <message>
        <source>&amp;Fit in Window</source>
        <translation type="obsolete">&amp;Fit in Window</translation>
    </message>
    <message>
        <source>&amp;100%</source>
        <translation type="obsolete">&amp;100%</translation>
    </message>
    <message>
        <source>&amp;Thumbnails</source>
        <translation type="obsolete">&amp;Thumbnails</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation type="obsolete">Show &amp;Grid</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation type="obsolete">Sna&amp;p to Guides</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation type="obsolete">Show &amp;Baseline Grid</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation type="obsolete">&amp;Properties</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <translation type="obsolete">&amp;Outline</translation>
    </message>
    <message>
        <source>&amp;Scrapbook</source>
        <translation type="obsolete">&amp;Scrapbook</translation>
    </message>
    <message>
        <source>&amp;Layers</source>
        <translation type="obsolete">&amp;Layers</translation>
    </message>
    <message>
        <source>P&amp;age Palette</source>
        <translation type="obsolete">P&amp;age Palette</translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation type="obsolete">&amp;Bookmarks</translation>
    </message>
    <message>
        <source>&amp;Manage Pictures</source>
        <translation type="obsolete">&amp;Manage Pictures</translation>
    </message>
    <message>
        <source>&amp;Hyphenate Text</source>
        <translation type="obsolete">&amp;Hyphenate Text</translation>
    </message>
    <message>
        <source>Toolti&amp;ps</source>
        <translation type="obsolete">Toolti&amp;ps</translation>
    </message>
    <message>
        <source>P&amp;DF Tools</source>
        <translation type="obsolete">P&amp;DF Tools</translation>
    </message>
    <message>
        <source>Tooltips</source>
        <translation type="obsolete">Tooltips</translation>
    </message>
    <message>
        <source>&amp;Fonts...</source>
        <translation type="obsolete">&amp;Fonts...</translation>
    </message>
    <message>
        <source>&amp;Hyphenator...</source>
        <translation type="obsolete">&amp;Hyphenator...</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts...</source>
        <translation type="obsolete">&amp;Keyboard Shortcuts...</translation>
    </message>
    <message>
        <source>&amp;About Scribus</source>
        <translation type="obsolete">&amp;About Scribus</translation>
    </message>
    <message>
        <source>About &amp;Qt</source>
        <translation type="obsolete">About &amp;Qt</translation>
    </message>
    <message>
        <source>Scribus &amp;Manual...</source>
        <translation type="obsolete">Scribus &amp;Manual...</translation>
    </message>
    <message>
        <source>St&amp;yle</source>
        <translation type="obsolete">St&amp;yle</translation>
    </message>
    <message>
        <source>&amp;Left</source>
        <translation type="obsolete">&amp;Left</translation>
    </message>
    <message>
        <source>&amp;Center</source>
        <translation type="obsolete">&amp;Centre</translation>
    </message>
    <message>
        <source>&amp;Right</source>
        <translation type="obsolete">&amp;Right</translation>
    </message>
    <message>
        <source>&amp;Block</source>
        <translation type="obsolete">&amp;Block</translation>
    </message>
    <message>
        <source>&amp;Forced</source>
        <translation type="obsolete">&amp;Forced</translation>
    </message>
    <message>
        <source>&amp;Other...</source>
        <translation type="obsolete">&amp;Other...</translation>
    </message>
    <message>
        <source>&amp;Cascade</source>
        <translation type="obsolete">&amp;Cascade</translation>
    </message>
    <message>
        <source>&amp;Tile</source>
        <translation type="obsolete">&amp;Tile</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation type="obsolete">&amp;Colour</translation>
    </message>
    <message>
        <source>&amp;Invert</source>
        <translation type="obsolete">&amp;Invert</translation>
    </message>
    <message>
        <source>&amp;Get Text...</source>
        <translation type="obsolete">&amp;Get Text...</translation>
    </message>
    <message>
        <source>&amp;Font</source>
        <translation type="obsolete">&amp;Font</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation type="obsolete">&amp;Size</translation>
    </message>
    <message>
        <source>&amp;Effects</source>
        <translation type="obsolete">&amp;Effects</translation>
    </message>
    <message>
        <source>&amp;Alignment</source>
        <translation type="obsolete">&amp;Alignment</translation>
    </message>
    <message>
        <source>&amp;Shade</source>
        <translation type="obsolete">&amp;Shade</translation>
    </message>
    <message>
        <source>&amp;Tabulators...</source>
        <translation type="obsolete">&amp;Tabulators...</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation type="obsolete">Un&amp;lock</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation type="obsolete">Show &amp;Images</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation type="obsolete">Show &amp;Margins</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation type="obsolete">Show &amp;Frames</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation type="obsolete">Show G&amp;uides</translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS Images</source>
        <translation type="obsolete">Ghostscript : You cannot use EPS Images</translation>
    </message>
    <message>
        <source>Import &amp;Page(s)...</source>
        <translation type="obsolete">Import &amp;Page(s)...</translation>
    </message>
    <message>
        <source>100%</source>
        <translation type="obsolete">100%</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation type="obsolete">Sn&amp;ap to Grid</translation>
    </message>
    <message>
        <source>P&amp;references...</source>
        <translation type="obsolete">P&amp;references...</translation>
    </message>
    <message>
        <source>Importing Pages...</source>
        <translation type="obsolete">Importing Pages...</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation type="obsolete">Import Page(s)</translation>
    </message>
    <message>
        <source>&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</source>
        <translation type="obsolete">&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation type="obsolete">Create</translation>
    </message>
    <message>
        <source>Import</source>
        <translation type="obsolete">Import</translation>
    </message>
    <message>
        <source>Import done</source>
        <translation type="obsolete">Import done</translation>
    </message>
    <message>
        <source>Found nothing to import</source>
        <translation type="obsolete">Found nothing to import</translation>
    </message>
    <message>
        <source>Getting ICC Profiles</source>
        <translation type="obsolete">Getting ICC Profiles</translation>
    </message>
    <message>
        <source>Manage &amp;Guides...</source>
        <translation type="obsolete">Manage &amp;Guides...</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="obsolete">&amp;Size:</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation type="obsolete">&amp;Shade:</translation>
    </message>
    <message>
        <source>Document &amp;Information...</source>
        <translation type="obsolete">Document &amp;Information...</translation>
    </message>
    <message>
        <source>&amp;Undo Delete Object</source>
        <translation type="obsolete">&amp;Undo Delete Object</translation>
    </message>
    <message>
        <source>&amp;Undo Object Move</source>
        <translation type="obsolete">&amp;Undo Object Move</translation>
    </message>
    <message>
        <source>&amp;Undo Object Change</source>
        <translation type="obsolete">&amp;Undo Object Change</translation>
    </message>
    <message>
        <source>&amp;Edit Shape</source>
        <translation type="obsolete">&amp;Edit Shape</translation>
    </message>
    <message>
        <source>File %1 is not in Scribus format</source>
        <translation type="obsolete">File %1 is not in Scribus format</translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation type="obsolete">Afrikaans</translation>
    </message>
    <message>
        <source>Font System Initialized</source>
        <translation type="obsolete">Font System Initialised</translation>
    </message>
</context>
<context>
    <name>ScribusColorList</name>
    <message>
        <source>Color</source>
        <translation type="obsolete">Colour</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>Document Colors</source>
        <translation type="unfinished">สีเอกสาร</translation>
    </message>
</context>
<context>
    <name>ScribusDoc</name>
    <message>
        <source>Document</source>
        <translation type="unfinished">เอกสาร</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>พื้นหลัง</translation>
    </message>
    <message>
        <source>New Layer</source>
        <translation type="unfinished">ชั้นใหม่</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">ปกติ</translation>
    </message>
    <message>
        <source>Do you really want to clear all your text?</source>
        <translation type="unfinished">คุณต้องการที่จะล้างข้อความของคุณทั้งหมดหรือไม่?</translation>
    </message>
    <message>
        <source>Cannot Delete In-Use Item</source>
        <translation type="unfinished">ไม่สามารถลบ ผู้ใช้ไอเท็ม</translation>
    </message>
    <message>
        <source>The item %1 is currently being edited by Story Editor. The delete operation will be cancelled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An error occurred while opening ICC profiles, color management is not enabled.</source>
        <translation type="unfinished">ข้อผิดพลาดเกิดขึ้น ขณะที่กำลังเปิด โปรไฟล์ ไอซีซี,ไม่สามารถจัดการกับสีได้</translation>
    </message>
</context>
<context>
    <name>ScribusMainWindow</name>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>Initializing Plugins</source>
        <translation type="unfinished">เตรียมค่าปลั๊กอิน</translation>
    </message>
    <message>
        <source>Initializing Keyboard Shortcuts</source>
        <translation type="unfinished">เตรียมค่าทางลัดแป้นพิมพ์</translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation type="unfinished">อ่านข้อมูลอ้างอิง</translation>
    </message>
    <message>
        <source>Initializing Story Editor</source>
        <translation type="unfinished">เตรียมค่าเริ่มต้น Story Editor</translation>
    </message>
    <message>
        <source>Reading ICC Profiles</source>
        <translation type="unfinished">อ่านโปรไฟล์ ไอซีซ๊</translation>
    </message>
    <message>
        <source>Initializing Hyphenator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reading Scrapbook</source>
        <translation type="unfinished">Reading Scrapbook</translation>
    </message>
    <message>
        <source>Setting up Shortcuts</source>
        <translation type="unfinished">ตั้งค่าทางลัด</translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished">แฟ้ม</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>แก้ไข</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation type="unfinished">ค้นหาตัวอักษร</translation>
    </message>
    <message>
        <source>There are no fonts found on your system.</source>
        <translation type="unfinished">ไม่มีอักษรที่กำหนดบนระบบของคุณ</translation>
    </message>
    <message>
        <source>Exiting now.</source>
        <translation type="unfinished">ออกตอนนี้</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation type="unfinished">ผิดพลาดร้ายแรง</translation>
    </message>
    <message>
        <source>Font System Initialized</source>
        <translation type="unfinished">ริเริ่มระบบตัวอักษร</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished">แฟ้ม</translation>
    </message>
    <message>
        <source>Open &amp;Recent</source>
        <translation type="unfinished">เอกสารปัจจุบัน</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished">นำเข้า</translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation type="unfinished">ส่งออก</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished">แก้ไข</translation>
    </message>
    <message>
        <source>St&amp;yle</source>
        <translation type="unfinished">รูปแบบ</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation type="unfinished">สี</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation type="unfinished">ขนาด</translation>
    </message>
    <message>
        <source>&amp;Shade</source>
        <translation type="unfinished">ไล่ระดับสี</translation>
    </message>
    <message>
        <source>&amp;Font</source>
        <translation type="unfinished">อักษระ</translation>
    </message>
    <message>
        <source>&amp;Effects</source>
        <translation type="unfinished">ตกแต่ง</translation>
    </message>
    <message>
        <source>&amp;Item</source>
        <translation type="unfinished">ไอเท็ม</translation>
    </message>
    <message>
        <source>Preview Settings</source>
        <translation type="unfinished">ตั้งค่าเค้าโครง</translation>
    </message>
    <message>
        <source>Level</source>
        <translation type="unfinished">ระดับ</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation type="unfinished">ส่งออกไปที่ชั้น</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation type="unfinished">ตัวเลือก พีดีเอฟ</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation type="unfinished">รูปร่าง</translation>
    </message>
    <message>
        <source>C&amp;onvert To</source>
        <translation type="unfinished">กลับไปยัง</translation>
    </message>
    <message>
        <source>I&amp;nsert</source>
        <translation type="unfinished">แทรก</translation>
    </message>
    <message>
        <source>Character</source>
        <translation type="unfinished">ตัวอักษร</translation>
    </message>
    <message>
        <source>Quote</source>
        <translation type="unfinished">อ้าง</translation>
    </message>
    <message>
        <source>Space</source>
        <translation type="unfinished">ช่องว่าง</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation type="unfinished">หน้า</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation type="unfinished">มุมมอง</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation type="unfinished">พิเศษ</translation>
    </message>
    <message>
        <source>&amp;Windows</source>
        <translation type="unfinished">หน้าต่าง</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation type="unfinished">ช่วยเหลือ</translation>
    </message>
    <message>
        <source>&amp;Alignment</source>
        <translation type="unfinished">เส้นตรง</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation type="unfinished">พร้อม</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">เปิด</translation>
    </message>
    <message>
        <source>Importing Pages...</source>
        <translation type="unfinished">นำเข้าหน้า...</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation type="unfinished">นำเข้าหน้า(s)</translation>
    </message>
    <message>
        <source>Import done</source>
        <translation type="unfinished">นำเข้าเสร็จสิ้น</translation>
    </message>
    <message>
        <source>Found nothing to import</source>
        <translation type="unfinished">ไม่พบสิ่งที่ต้องการนำเข้า</translation>
    </message>
    <message>
        <source>File %1 is not in an acceptable format</source>
        <translation type="unfinished">แฟ้ม%1 ไม่สามารถรองรับการรูปแบบ</translation>
    </message>
    <message>
        <source>Loading...</source>
        <translation type="unfinished">โหลด...</translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation type="obsolete">PostScript</translation>
    </message>
    <message>
        <source>Some ICC profiles used by this document are not installed:</source>
        <translation type="unfinished">บางโปรไฟล์ ไอซีซี ผู้ใช้เอกสารติดตั้งไม่ได้</translation>
    </message>
    <message>
        <source> was replaced by: </source>
        <translation type="unfinished">แทนที่โดย</translation>
    </message>
    <message>
        <source>(converted)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation type="unfinished">สนับสนุนการฟอร์แมต ทั้งหมด</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation type="unfinished">แฟ้มทั้งหมด(*)</translation>
    </message>
    <message>
        <source>Cannot write the file: 
%1</source>
        <translation type="unfinished">ไม่สามารถเขียนแฟ้ม %1</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</source>
        <translation type="unfinished">เอกสาร (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="unfinished">เอกสาร (*.sla *.scd);;All Files (*)</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation type="unfinished">บันทึกเป็น</translation>
    </message>
    <message>
        <source>Saving...</source>
        <translation type="unfinished">บันทึก..</translation>
    </message>
    <message>
        <source>Scribus has detected some errors. Consider using the Preflight Verifier to correct them</source>
        <translation type="unfinished">การตรวจสอบสไครบัสบางอย่างผิดพลาด พิจารณาใช้ข้อพิสูจน์ที่ถูกต้อง</translation>
    </message>
    <message>
        <source>&amp;Ignore</source>
        <translation type="unfinished">ละทิ้ง</translation>
    </message>
    <message>
        <source>&amp;Abort</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
    <message>
        <source>Printing...</source>
        <translation type="unfinished">พิมพ์...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="unfinished">เอกสาร</translation>
    </message>
    <message>
        <source>Printing failed!</source>
        <translation type="unfinished">พิมพ์ล้มเหลว!</translation>
    </message>
    <message>
        <source>Cannot Cut In-Use Item</source>
        <translation type="unfinished">ไม่สามารถตัดสิ่งที่ถูกเรียกใช้งานอยู่</translation>
    </message>
    <message>
        <source>The item %1 is currently being edited by Story Editor. The cut operation will be cancelled</source>
        <translation type="unfinished">ไอเท็ม %1 กำลังแก้ไขด้วย Story Editor การดำเนินการตัดจะถูกยกเลิก</translation>
    </message>
    <message>
        <source>About Qt</source>
        <translation type="unfinished">เกี่ยวกับ คิวที</translation>
    </message>
    <message>
        <source>Scribus Manual</source>
        <translation type="unfinished">คู่มือสคไครบัส</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished">บันทึกเป็น</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation type="unfinished">แฟ้มข้อความ (*.txt);;แฟ้มทั้งหมด(*)</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="unfinished">ปกติ</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished">ชื่อ:</translation>
    </message>
    <message>
        <source>Convert Page to Master Page</source>
        <translation type="unfinished">กลับไปยังหน้าหลัก</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="unfinished">ขนาด:</translation>
    </message>
    <message>
        <source>Size</source>
        <translation type="unfinished">ขนาด</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation type="unfinished">ไล่ระดับสี:</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation type="unfinished">ไล่ระดับสี</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation type="unfinished">ไม่มีรูปแบบ</translation>
    </message>
    <message>
        <source>The following programs are missing:</source>
        <translation type="unfinished">โปรแกรมดังต่อไปนี้ไม่มีในระบบ:</translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS images or Print Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished">ทั้งหมด</translation>
    </message>
    <message>
        <source>Scribus detected some errors.
Consider using the Preflight Verifier  to correct them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>EPS Files (*.eps);;All Files (*)</source>
        <translation type="unfinished">แฟ้ม อีพีเอส ,แฟ้มทั้งหมด</translation>
    </message>
    <message>
        <source>Detected some errors.
Consider using the Preflight Verifier to correct them</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>-Page%1</source>
        <translation type="unfinished">-หน้า%1</translation>
    </message>
    <message>
        <source>Some objects are locked.</source>
        <translation type="unfinished">บางวัตถุโดนล๊อค</translation>
    </message>
    <message>
        <source>&amp;Lock All</source>
        <translation type="unfinished">ล็อคทั้งหมด</translation>
    </message>
    <message>
        <source>&amp;Unlock All</source>
        <translation type="unfinished">ไม่ล๊อคทั้งหมด</translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="unfinished">คำแนะนำ</translation>
    </message>
    <message>
        <source>The program %1 is already running!</source>
        <translation type="unfinished">โปรแกรม %1 ถูกเรียกใช้งานอยู่ก่อนแล้ว</translation>
    </message>
    <message>
        <source>The program %1 is missing!</source>
        <translation type="unfinished">โปรแกรม %1 ไม่มีอยู่ในระบบ</translation>
    </message>
    <message>
        <source>The selected color does not exist in the document&apos;s color set. Please enter a name for this new color.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Not Found</source>
        <translation type="unfinished">ไม่พบสี</translation>
    </message>
    <message>
        <source>The name you have selected already exists. Please enter a different name for this new color.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Level</source>
        <translation type="unfinished">ระดับ</translation>
    </message>
    <message>
        <source>Send to Layer</source>
        <translation type="unfinished">ส่งออกไปที่ชั้น</translation>
    </message>
    <message>
        <source>Previe&amp;w Settings</source>
        <translation type="unfinished">ตั้งค่าเค้าโครง</translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation type="unfinished">เครื่องมือ</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation type="unfinished">X-Pos:</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation type="unfinished">Y-Pos:</translation>
    </message>
    <message>
        <source>Spaces &amp;&amp; Breaks</source>
        <translation type="unfinished">ช่องว่าง &amp;&amp; แบ่ง</translation>
    </message>
    <message>
        <source>Ligature</source>
        <translation type="unfinished">อักษรควบ</translation>
    </message>
    <message>
        <source>New Master Page %1</source>
        <translation type="unfinished">หน้าหลักใหม่ %1</translation>
    </message>
    <message>
        <source>Number of copies: %1
Horizontal shift: %2
Vertical shift: %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS images or PostScript Print Preview</source>
        <translation type="unfinished">โกสต์สคริป คุณไม่สามารถใช้ รูปอีพีเอส หรือ พิมพ์เค้าโครงปล.</translation>
    </message>
    <message>
        <source>Ghostscript is missing : Postscript Print Preview is not available</source>
        <translation type="unfinished">โกสต์สคริป ผิดพลาด เค้าโครงพิมพ์ ปล.ไม่สามารถหาได้</translation>
    </message>
    <message>
        <source>Do you really want to replace your existing image?</source>
        <translation type="unfinished">คุณต้องการแทนที่ รูปเดิมที่มีอยู่ไหม?</translation>
    </message>
    <message>
        <source>Contents</source>
        <translation type="unfinished">สารบัญ</translation>
    </message>
    <message>
        <source>Liga&amp;ture</source>
        <translation type="unfinished">อักษรควบ</translation>
    </message>
    <message>
        <source>Your document was saved to a temporary file and could not be moved: 
%1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusQApp</name>
    <message>
        <source>Invalid argument: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File %1 does not exist, aborting.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Usage: scribus [option ... ] [file]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Options:</source>
        <translation type="unfinished">ตัวเลือก</translation>
    </message>
    <message>
        <source>Print help (this message) and exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Uses xx as shortcut for a language, eg `en&apos; or `de&apos;</source>
        <translation type="unfinished">ใช้ เอ๊กซ์เอ๊กซ์ ทางลัด สำหรับภาษา, อีจี อีเอ็น หรือ ดีอี</translation>
    </message>
    <message>
        <source>List the currently installed interface languages</source>
        <translation type="unfinished">รายการติดตั้งภาษา</translation>
    </message>
    <message>
        <source>Show information on the console when fonts are being loaded</source>
        <translation type="unfinished">แสดงคำแนะนำบน คอนโซล ขณะที่โหลดตัวอีกษร</translation>
    </message>
    <message>
        <source>Do not show the splashscreen on startup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Output version information and exit</source>
        <translation type="unfinished">รุ่นคำแนะนำที่ส่งออก</translation>
    </message>
    <message>
        <source>Use right to left dialog button ordering (eg. Cancel/No/Yes instead of Yes/No/Cancel)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>filename</source>
        <translation type="unfinished">ชื่อแฟ้ม</translation>
    </message>
    <message>
        <source>Use filename as path for user given preferences</source>
        <translation type="unfinished">ใช้ชื่อแฟ้มพาธสำหรับใช้เป็นชื่ออ้างอิง</translation>
    </message>
    <message>
        <source>Installed interface languages for Scribus are as follows:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To override the default language choice:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>scribus -l xx or scribus --lang xx, where xx is the language of choice.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scribus Version</source>
        <translation type="unfinished">รุ่นสไครบัส</translation>
    </message>
    <message>
        <source>Scribus, Open Source Desktop Publishing</source>
        <translation type="unfinished">สไครบัส, เปิดประกาศแหล่งที่มาหน้าจอ</translation>
    </message>
    <message>
        <source>Homepage</source>
        <translation type="unfinished">หน้าแรก</translation>
    </message>
    <message>
        <source>Documentation</source>
        <translation type="unfinished">เอกสาร</translation>
    </message>
    <message>
        <source>Wiki</source>
        <translation type="unfinished">วิกี้</translation>
    </message>
    <message>
        <source>Issues</source>
        <translation type="unfinished">ฉบับ</translation>
    </message>
    <message>
        <source>Display a console window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show location ICC profile information on console while starting</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusView</name>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation type="unfinished">ชั้น</translation>
    </message>
    <message>
        <source>All</source>
        <translation type="obsolete">All</translation>
    </message>
    <message>
        <source>pt</source>
        <translation type="obsolete">pt</translation>
    </message>
    <message>
        <source>mm</source>
        <translation type="obsolete">mm</translation>
    </message>
    <message>
        <source>in</source>
        <translation type="obsolete">in</translation>
    </message>
    <message>
        <source>p</source>
        <translation type="obsolete">p</translation>
    </message>
    <message>
        <source>Copy Here</source>
        <translation type="unfinished">คัดลอกที่นี่</translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation type="unfinished">ย้ายที่นี่</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished">วาง</translation>
    </message>
    <message>
        <source>Picture</source>
        <translation type="obsolete">รูปภาพ</translation>
    </message>
    <message>
        <source>File: </source>
        <translation type="unfinished">แฟ้ม</translation>
    </message>
    <message>
        <source>Original PPI: </source>
        <translation type="unfinished">Original PPI: </translation>
    </message>
    <message>
        <source>Actual PPI: </source>
        <translation type="unfinished">Actual PPI: </translation>
    </message>
    <message>
        <source>Colorspace: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation type="unfinished">ไม่รู้ชื่อ</translation>
    </message>
    <message>
        <source>RGB</source>
        <translation type="unfinished">RGB</translation>
    </message>
    <message>
        <source>CMYK</source>
        <translation type="unfinished">CMYK</translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation type="unfinished">เทา</translation>
    </message>
    <message>
        <source>Linked Text</source>
        <translation type="unfinished">เชื่อมต่อข้อความ</translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation type="unfinished">เฟลมข้อความ</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation type="unfinished">ข้อความบนพาธ</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation type="unfinished">ย่อหน้า: </translation>
    </message>
    <message>
        <source>Words: </source>
        <translation type="unfinished">คำ: </translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation type="unfinished">อักษร: </translation>
    </message>
    <message>
        <source>Print: </source>
        <translation type="obsolete">พิมพ์: </translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="unfinished">เลือก</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation type="unfinished">ไม่เลือก</translation>
    </message>
    <message>
        <source>In&amp;fo</source>
        <translation type="unfinished">ข้อมูล</translation>
    </message>
    <message>
        <source>Preview Settings</source>
        <translation type="unfinished">ตั้งค่าตัวอย่าง</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation type="unfinished">ตัวเลือกพีดีเอฟ</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation type="unfinished">ส่งไปยังชั้น</translation>
    </message>
    <message>
        <source>Le&amp;vel</source>
        <translation type="unfinished">ระดับ</translation>
    </message>
    <message>
        <source>Conve&amp;rt to</source>
        <translation type="unfinished">กลับไป</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>Linking Text Frames</source>
        <translation type="unfinished">เชื่อมต่อเฟรมข้อความ</translation>
    </message>
    <message>
        <source>You are trying to link to a filled frame, or a frame to itself.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page %1 to %2</source>
        <translation type="unfinished">หน้า%1 ถึง %2</translation>
    </message>
    <message>
        <source>Cannot Convert In-Use Item</source>
        <translation type="unfinished">ไม่สามารถเปลี่ยนวัตถุที่กำลังเรียกใช้อยู่</translation>
    </message>
    <message>
        <source>The item %1 is currently being edited by Story Editor. The convert to outlines operation for this item will be skipped</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Contents</source>
        <translation type="unfinished">สารบัญ</translation>
    </message>
    <message>
        <source>Image</source>
        <translation type="unfinished">Image</translation>
    </message>
    <message>
        <source>Export: </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusWin</name>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Warning</translation>
    </message>
    <message>
        <source>Document:</source>
        <translation type="unfinished">เอกสาร:</translation>
    </message>
    <message>
        <source>has been changed since the last save.</source>
        <translation type="unfinished">การเปลี่ยนแปลงครั้งล่าสุดถูกบันทึก.</translation>
    </message>
    <message>
        <source>&amp;Leave Anyway</source>
        <translation type="obsolete">&amp;Leave Anyway</translation>
    </message>
    <message>
        <source>C&amp;lose Anyway</source>
        <translation type="obsolete">C&amp;lose Anyway</translation>
    </message>
    <message>
        <source>&amp;Save Now</source>
        <translation type="obsolete">&amp;Save Now</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>&amp;Discard</source>
        <translation type="unfinished">ละทิ้ง</translation>
    </message>
</context>
<context>
    <name>ScriptPlugin</name>
    <message>
        <source>Embedded Python scripting support.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scripter</source>
        <translation type="unfinished">สคริปเตอร์</translation>
    </message>
</context>
<context>
    <name>ScripterCore</name>
    <message>
        <source>Script error</source>
        <translation type="unfinished">ต้นฉบับผิดพลาด</translation>
    </message>
    <message>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation type="unfinished">ถ้าคุณกำลังดำเนินการรายงานต้นฉบับอยู่ ที่ &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</translation>
    </message>
    <message>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation type="unfinished">This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</translation>
    </message>
    <message>
        <source>There was an internal error while trying the command you entered. Details were printed to stderr. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Examine Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Python Scripts (*.py);;All Files (*)</source>
        <translation type="unfinished">ต้นฉบับไพตอน แฟ้มทั้งหมด</translation>
    </message>
    <message>
        <source>Setting up the Python plugin failed. Error details were printed to stderr. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documentation for:</source>
        <translation type="unfinished">เอกสารสำหรับ</translation>
    </message>
    <message>
        <source>Script</source>
        <translation type="unfinished">ต้นฉบับ</translation>
    </message>
    <message>
        <source> doesn&apos;t contain any docstring!</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScripterPrefsGui</name>
    <message>
        <source>Extensions</source>
        <translation type="unfinished">ตัวขยาย:</translation>
    </message>
    <message>
        <source>Console</source>
        <translation type="unfinished">คอนโซล</translation>
    </message>
    <message>
        <source>Scripter Preferences</source>
        <translation type="unfinished">ต้นฉบับอ้างถึง</translation>
    </message>
    <message>
        <source>Enable Extension Scripts</source>
        <translation type="unfinished">สามารถขยายต้นฉบับ</translation>
    </message>
    <message>
        <source>Startup Script:</source>
        <translation type="unfinished">เริ่มต้นสคริบส์</translation>
    </message>
    <message>
        <source>Errors:</source>
        <comment>syntax highlighting</comment>
        <translation type="unfinished">ผิดพลาด:</translation>
    </message>
    <message>
        <source>Comments:</source>
        <comment>syntax highlighting</comment>
        <translation type="unfinished">ข้อวิจารณ์:</translation>
    </message>
    <message>
        <source>Keywords:</source>
        <comment>syntax highlighting</comment>
        <translation type="unfinished">คำสำคัญ:</translation>
    </message>
    <message>
        <source>Signs:</source>
        <comment>syntax highlighting</comment>
        <translation type="unfinished">สัญลักษณ์:</translation>
    </message>
    <message>
        <source>Numbers:</source>
        <comment>syntax highlighting</comment>
        <translation type="unfinished">ตัวเลข:</translation>
    </message>
    <message>
        <source>Strings:</source>
        <comment>syntax highlighting</comment>
        <translation type="unfinished">เส้น</translation>
    </message>
    <message>
        <source>Base Texts:</source>
        <comment>syntax highlighting</comment>
        <translation type="unfinished">ฐานข้อความ</translation>
    </message>
    <message>
        <source>Select Color</source>
        <translation type="unfinished">เลือกสี</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation type="unfinished">เปลี่ยน...</translation>
    </message>
    <message>
        <source>Locate Startup Script</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SeList</name>
    <message>
        <source>Show Page Previews</source>
        <translation type="unfinished">แสดงเค้าโครงร่างกระดาษ</translation>
    </message>
</context>
<context>
    <name>SeView</name>
    <message>
        <source>Show Template Names</source>
        <translation type="obsolete">Show Template Names</translation>
    </message>
</context>
<context>
    <name>SearchReplace</name>
    <message>
        <source>Search/Replace</source>
        <translation type="unfinished">ค้นหา/แทนที่</translation>
    </message>
    <message>
        <source>Search for:</source>
        <translation type="unfinished">ค้นหาสำหรับ:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished">ช้อความ</translation>
    </message>
    <message>
        <source>Paragraph Style</source>
        <translation type="unfinished">รูปแบบย่อหน้า</translation>
    </message>
    <message>
        <source>Font</source>
        <translation type="unfinished">ตัวอักษร</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>ขนาดตัวอักษร</translation>
    </message>
    <message>
        <source>Font Effects</source>
        <translation type="unfinished">ตกแต่งตัวอักษร</translation>
    </message>
    <message>
        <source>Fill Color</source>
        <translation type="unfinished">เติมสี</translation>
    </message>
    <message>
        <source>Fill Shade</source>
        <translation type="unfinished">เติมการไล่สี</translation>
    </message>
    <message>
        <source>Stroke Color</source>
        <translation type="unfinished">Stroke Colour</translation>
    </message>
    <message>
        <source>Stroke Shade</source>
        <translation type="unfinished">Stroke Shade</translation>
    </message>
    <message>
        <source>Left</source>
        <translation type="unfinished">ซ้าย</translation>
    </message>
    <message>
        <source>Center</source>
        <translation type="unfinished">กลาง</translation>
    </message>
    <message>
        <source>Right</source>
        <translation type="unfinished">ขวา</translation>
    </message>
    <message>
        <source>Block</source>
        <translation type="unfinished">บล็อค</translation>
    </message>
    <message>
        <source>Forced</source>
        <translation type="unfinished">Forced</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished">pt</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">None</translation>
    </message>
    <message>
        <source>Replace with:</source>
        <translation type="unfinished">แทนที่กับ:</translation>
    </message>
    <message>
        <source>Search finished</source>
        <translation type="unfinished">ค้นหาเสร็จสิ้น</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">OK</translation>
    </message>
    <message>
        <source>&amp;Whole Word</source>
        <translation type="unfinished">คำศัพย์ทั้งหมด</translation>
    </message>
    <message>
        <source>&amp;Ignore Case</source>
        <translation type="unfinished">เพิกเฉยกรณ๊</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation type="unfinished">ค้นหา</translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation type="unfinished">แทนที่</translation>
    </message>
    <message>
        <source>Replace &amp;All</source>
        <translation type="unfinished">แทนที่ ทั้งหมด</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">ปิด</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished">ล้าง</translation>
    </message>
    <message>
        <source>Search finished, found %1 matches</source>
        <translation type="unfinished">ค้นหาเสร็จสิ้น,กำหนด%1 แมซ</translation>
    </message>
</context>
<context>
    <name>SeitenPal</name>
    <message>
        <source>Arrange Pages</source>
        <translation type="obsolete">Arrange Pages</translation>
    </message>
    <message>
        <source>Available Templates:</source>
        <translation type="obsolete">Available Templates:</translation>
    </message>
    <message>
        <source>Document Pages:</source>
        <translation type="obsolete">Document Pages:</translation>
    </message>
    <message>
        <source>Facing Pages</source>
        <translation type="obsolete">Facing Pages</translation>
    </message>
    <message>
        <source>Left Page first</source>
        <translation type="obsolete">Left Page first</translation>
    </message>
    <message>
        <source>Drag Pages or Template Pages onto the Trashbin to delete them.</source>
        <translation type="obsolete">Drag Pages or Template Pages onto the Trashbin to delete them.</translation>
    </message>
    <message>
        <source>Here are all your Templates, to create a new Page
drag a Template to the Pageview below.</source>
        <translation type="obsolete">Here are all your Templates, to create a new Page
drag a Template to the Pageview below.</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normal</translation>
    </message>
    <message>
        <source>Previews all the pages of your document.</source>
        <translation type="obsolete">Previews all the pages of your document.</translation>
    </message>
</context>
<context>
    <name>SelectFields</name>
    <message>
        <source>Select Fields</source>
        <translation type="unfinished">เลือกฟิลด์</translation>
    </message>
    <message>
        <source>Available Fields</source>
        <translation type="unfinished">ฟิลด์ที่เหมาะสม</translation>
    </message>
    <message>
        <source>Selected Fields</source>
        <translation type="unfinished">เลือกฟิลด์</translation>
    </message>
    <message>
        <source>&amp;&gt;&gt;</source>
        <translation type="unfinished">&amp;&gt;&gt;</translation>
    </message>
    <message>
        <source>&amp;&lt;&lt;</source>
        <translation type="unfinished">&amp;&lt;&lt;</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
</context>
<context>
    <name>ShadeButton</name>
    <message>
        <source>Other...</source>
        <translation type="unfinished">อื่นๆ..</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation type="unfinished">การไล่สี</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation type="unfinished">การไล่สี:</translation>
    </message>
</context>
<context>
    <name>ShadowValues</name>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>X-Offset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y-Offset</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ShortWordsPlugin</name>
    <message>
        <source>Short &amp;Words...</source>
        <comment>short words plugin</comment>
        <translation type="unfinished">สั้น คำศัพย์</translation>
    </message>
    <message>
        <source>Short Words</source>
        <translation type="unfinished">คำสั้น</translation>
    </message>
    <message>
        <source>Special plug-in for adding non-breaking spaces before or after so called short words. Available in the following languages: </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SideBar</name>
    <message>
        <source>No Style</source>
        <translation type="unfinished">ไม่มีรูปแบบ</translation>
    </message>
    <message>
        <source>Edit Styles...</source>
        <translation type="unfinished">แกไขรูปแบบ</translation>
    </message>
</context>
<context>
    <name>Spalette</name>
    <message>
        <source>No Style</source>
        <translation type="unfinished">ไม่มีรูปแบบ</translation>
    </message>
</context>
<context>
    <name>StilFormate</name>
    <message>
        <source>Edit Styles</source>
        <translation type="unfinished">แก้ไขรูปแบบ</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="unfinished">คัดลอก%1</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation type="unfinished">รูปแบบใหม่</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Warning</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="obsolete">No</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="obsolete">Yes</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">เปิด</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="unfinished">เอกสาร (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="unfinished">เอกสาร (*.sla *.scd);;All Files (*)</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="obsolete">&amp;Append</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished">&amp;ใหม่</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished">&amp;แก้ไข</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="unfinished">ฉบับ&amp;คู่</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">&amp;ลบ</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="obsolete">&amp;Save</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation type="obsolete">Do you really want to delete this Style?</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="unfinished">&amp;นำเข้า</translation>
    </message>
</context>
<context>
    <name>StoryEditor</name>
    <message>
        <source>Story Editor</source>
        <translation type="unfinished">แก้ไขเรื่อง</translation>
    </message>
    <message>
        <source>Current Paragraph:</source>
        <translation type="unfinished">พารากราฟปัจจุบัน:</translation>
    </message>
    <message>
        <source>Words: </source>
        <translation type="unfinished">คำ: </translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation type="unfinished">Chars: </translation>
    </message>
    <message>
        <source>Totals:</source>
        <translation type="unfinished">รวม:</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation type="unfinished">พาราการฟ: </translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Warning</translation>
    </message>
    <message>
        <source>Do you really want to lose all your Changes?</source>
        <translation type="obsolete">Do you really want to lose all your Changes?</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation type="obsolete">Do you really want to clear all your Text?</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished">เปิด</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation type="unfinished">แฟ้มข้อความ (*.txt);;All Files(*)</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="unfinished">บันทึกเป็น</translation>
    </message>
    <message>
        <source>Do you want to save your changes?</source>
        <translation type="unfinished">คุณต้องการบันทึกการเปลี่ยนแปลงหรือไม่?</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished">ใหม่</translation>
    </message>
    <message>
        <source>&amp;Reload Text from Frame</source>
        <translation type="unfinished">โหลดข้อความจากเฟลมอีกครั้ง</translation>
    </message>
    <message>
        <source>&amp;Save to File...</source>
        <translation type="unfinished">บันทึกเป็นแฟ้ม...</translation>
    </message>
    <message>
        <source>&amp;Load from File...</source>
        <translation type="unfinished">โหลดจากแฟ้ม...</translation>
    </message>
    <message>
        <source>Save &amp;Document</source>
        <translation type="unfinished">บันทึกเอกสาร</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame and Exit</source>
        <translation type="unfinished">ข้อความจากเฟลมล่าสุด และ ออก</translation>
    </message>
    <message>
        <source>&amp;Exit Without Updating Text Frame</source>
        <translation type="unfinished">ออกโดยปราศจากข้อความเฟลมล่าสุด</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="unfinished">ตัด</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="unfinished">คัดลอก</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="unfinished">วาง</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished">ล้าง</translation>
    </message>
    <message>
        <source>&amp;Insert Special...</source>
        <translation type="obsolete">แทรกแบบพิเศษ...</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame</source>
        <translation type="unfinished">ข้อความเฟลมล่าสุด</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="unfinished">แฟ้ม</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="unfinished">แก้ไข</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation type="unfinished">เลือก ทั้งหมด</translation>
    </message>
    <message>
        <source>&amp;Edit Styles...</source>
        <translation type="unfinished">แก้ไขรูปแบบ...</translation>
    </message>
    <message>
        <source>File</source>
        <translation type="unfinished">แฟ้ม</translation>
    </message>
    <message>
        <source>Load Text from File</source>
        <translation type="obsolete">Load Text from File</translation>
    </message>
    <message>
        <source>Save Text to File</source>
        <translation type="obsolete">Save Text to File</translation>
    </message>
    <message>
        <source>Update Text Frame and Exit</source>
        <translation type="obsolete">Update Text Frame and Exit</translation>
    </message>
    <message>
        <source>Exit Without Updating Text Frame</source>
        <translation type="obsolete">Exit Without Updating Text Frame</translation>
    </message>
    <message>
        <source>Reload Text from Frame</source>
        <translation type="obsolete">Reload Text from Frame</translation>
    </message>
    <message>
        <source>Update Text Frame</source>
        <translation type="obsolete">Update Text Frame</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation type="unfinished">ค้นหา/แทนที่...</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview...</source>
        <translation type="unfinished">เค้าโครงอักษร...</translation>
    </message>
    <message>
        <source>&amp;Background...</source>
        <translation type="unfinished">พื้นหลัง...</translation>
    </message>
    <message>
        <source>&amp;Display Font...</source>
        <translation type="unfinished">แสดงตัวอักษร...</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation type="unfinished">ตั้งค่า</translation>
    </message>
    <message>
        <source>Search/Replace</source>
        <translation type="obsolete">Search/Replace</translation>
    </message>
    <message>
        <source>Clear all Text</source>
        <translation type="obsolete">Clear all Text</translation>
    </message>
    <message>
        <source>&amp;Smart text selection</source>
        <translation type="unfinished">เลือกข้อความ สมาร์ท</translation>
    </message>
    <message>
        <source>&amp;Insert Glyph...</source>
        <translation type="unfinished">แทรก</translation>
    </message>
    <message>
        <source>Clear All Text</source>
        <translation type="unfinished">ล้างข้อความ</translation>
    </message>
    <message>
        <source>Story Editor - %1</source>
        <translation type="unfinished">แกไขเนื้อเรื่อง-%1</translation>
    </message>
    <message>
        <source>Do you really want to lose all your changes?</source>
        <translation type="unfinished">คุณต้องการที่จะยกเลิกสิ่งที่แก้ไขไปใช่ไหม?</translation>
    </message>
    <message>
        <source>Do you really want to clear all your text?</source>
        <translation type="unfinished">คุณต้องการที่จะล้างข้อความของคุณทั้งหมดใช่ไหม?</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="unfinished">แทรก</translation>
    </message>
    <message>
        <source>Character</source>
        <translation type="unfinished">ลักษณะ</translation>
    </message>
    <message>
        <source>Quote</source>
        <translation type="unfinished">อ้าง</translation>
    </message>
    <message>
        <source>Spaces &amp;&amp; Breaks</source>
        <translation type="unfinished">วรรค พัก</translation>
    </message>
    <message>
        <source>Ligature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Space</source>
        <translation type="unfinished">ว่าง</translation>
    </message>
</context>
<context>
    <name>StrikeValues</name>
    <message>
        <source>Auto</source>
        <translation type="unfinished">อัตโนมัติ</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Displacement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Linewidth</source>
        <translation type="unfinished">ความกว้างของเส้น</translation>
    </message>
</context>
<context>
    <name>StyleManager</name>
    <message>
        <source>More than one item selected</source>
        <translation type="unfinished">เลือกข้อความมากกว่าหนึ่ง</translation>
    </message>
</context>
<context>
    <name>StyleSelect</name>
    <message>
        <source>Underline</source>
        <translation type="obsolete">Underline</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="unfinished">Small Caps</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation type="unfinished">Subscript</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="unfinished">Superscript</translation>
    </message>
    <message>
        <source>Outline Text</source>
        <translation type="obsolete">Outline Text</translation>
    </message>
    <message>
        <source>Strike Out</source>
        <translation type="obsolete">Strike Out</translation>
    </message>
    <message>
        <source>All Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Outline</source>
        <translation type="obsolete">Outline</translation>
    </message>
    <message>
        <source>Outline</source>
        <comment>Text Style Selector</comment>
        <translation type="obsolete">Outline</translation>
    </message>
    <message>
        <source>Underline Text. Hold down the button momentarily to set line width and displacement options.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Underline Words Only. Hold down the button momentarily to set line width and displacement options.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Strike Out. Hold down the button momentarily to set line width and displacement options.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Outline. Hold down the button momentarily to change the outline stroke width.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shadowed Text. Hold down the button momentarily to enable the offset spacing.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SxwDialog</name>
    <message>
        <source>Update paragraph styles</source>
        <translation type="obsolete">Update paragraph styles</translation>
    </message>
    <message>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation type="unfinished">ใช้คำนำหน้าชื่อเอกสารสำหรับรูปแบบพารากราฟ</translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation type="unfinished">ห้ามถามอีกครั้ง</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">ตกลง</translation>
    </message>
    <message>
        <source>Should importer add the name of the document
on front of the paragraph style name in Scribus</source>
        <translation type="obsolete">Should importer add the name of the document
on front of the paragraph style name in Scribus</translation>
    </message>
    <message>
        <source>If a paragraph style already exists with the same name as the current
OpenOffice.org document&apos;s paragraph, should the style in Scribus be
edited to match the one being imported, or left untouched</source>
        <translation type="obsolete">If a paragraph style already exists with the same name as the current
OpenOffice.org document&apos;s paragraph, should the style in Scribus be
edited to match the one being imported, or left untouched</translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Importer Options</source>
        <translation type="unfinished">เปิดออฟฟิต.โออาร์จี เขียนตัวเลือกนำเข้า</translation>
    </message>
    <message>
        <source>Should the importer always use currently
set value when importing OpenOffice.org document and
never ask your confirmation again</source>
        <translation type="obsolete">Should the importer always use currently
set value when importing OpenOffice.org document and
never ask your confirmation again</translation>
    </message>
    <message>
        <source>Overwrite Paragraph Styles</source>
        <translation type="unfinished">โอเว่อร์ไรท์ รูปแบบพารากราฟ</translation>
    </message>
    <message>
        <source>Enabling this will overwrite existing styles in the current Scribus document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Merge Paragraph Styles</source>
        <translation type="unfinished">รูปแบบผสม พารากราฟ</translation>
    </message>
    <message>
        <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document&apos;s styles are named differently.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation type="unfinished">เตรียมชื่อเอกสารถึงชื่อรูปแบบพารากราฟในสไครบัส</translation>
    </message>
    <message>
        <source>Make these settings the default and do not prompt again when importing an OpenOffice.org 1.x document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
</context>
<context>
    <name>TOCIndexPrefs</name>
    <message>
        <source>None</source>
        <translation type="unfinished">ไม่มี</translation>
    </message>
    <message>
        <source>At the beginning</source>
        <translation type="unfinished">เพิ่งเริ่มต้น</translation>
    </message>
    <message>
        <source>At the end</source>
        <translation type="unfinished">จบ</translation>
    </message>
    <message>
        <source>Not Shown</source>
        <translation type="unfinished">ไม่แสดง</translation>
    </message>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation type="unfinished">ตารางสารบัญและดัชนี</translation>
    </message>
    <message>
        <source>Table Of Contents</source>
        <translation type="unfinished">ตารางสารบัญ</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="unfinished">เพิ่ม</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The frame the table of contents will be placed into</source>
        <translation type="unfinished">ตารางเฟลมของสารบัญ</translation>
    </message>
    <message>
        <source>Page Numbers Placed:</source>
        <translation type="unfinished">วางเลขหน้า</translation>
    </message>
    <message>
        <source>Item Attribute Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The Item Attribute that will be set on frames used as a basis for creation of the entries</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Place page numbers of the entries at the beginning or the end of the line, or not at all</source>
        <translation type="unfinished">วางหมายเลขของการเริ่อมต้น หรือ จบเส้น หรือไม่ทั้งหมด</translation>
    </message>
    <message>
        <source>List Non-Printing Entries</source>
        <translation type="unfinished">รายการ เข้าพิมพ์ไม่ได้</translation>
    </message>
    <message>
        <source>Include frames that are set to not print as well</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The paragraph style used for the entry lines</source>
        <translation type="unfinished">รูปแบบพาราการฟใช้สำหรับลายเส้น</translation>
    </message>
    <message>
        <source>Paragraph Style:</source>
        <translation type="unfinished">รูปแบบพารากราฟ</translation>
    </message>
    <message>
        <source>Destination Frame:</source>
        <translation type="unfinished">จุดหมายเฟลม</translation>
    </message>
    <message>
        <source>Table of Contents %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TOCIndexPrefsBase</name>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation type="unfinished">ตารางสารบัญและดัชนี</translation>
    </message>
    <message>
        <source>Table Of Contents</source>
        <translation type="unfinished">ตารางสารบัญ</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="unfinished">เพิ่ม</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The frame the table of contents will be placed into</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Numbers Placed:</source>
        <translation type="unfinished">วางหมายเลขหน้า</translation>
    </message>
    <message>
        <source>Item Attribute Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The Item Attribute that will be set on frames used as a basis for creation of the entries</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Place page numbers of the entries at the beginning or the end of the line, or not at all</source>
        <translation type="unfinished">วางหมายเลขของการเริ่อมต้น หรือ จบเส้น หรือไม่ทั้งหมด</translation>
    </message>
    <message>
        <source>List Non-Printing Entries</source>
        <translation type="unfinished">รายการเข้าพิมพ์ไม่ได้</translation>
    </message>
    <message>
        <source>Include frames that are set to not print as well</source>
        <translation type="unfinished">รวมเฟลมที่ตั้งค่าพิมพ์ไม่ได้</translation>
    </message>
    <message>
        <source>The paragraph style used for the entry lines</source>
        <translation type="unfinished">รูปแบบพารากราฟใช้สำหรับลายเส้น</translation>
    </message>
    <message>
        <source>Paragraph Style:</source>
        <translation type="unfinished">รูปแบบพารากราฟ</translation>
    </message>
    <message>
        <source>Destination Frame:</source>
        <translation type="unfinished">จุดหมายเฟลม</translation>
    </message>
</context>
<context>
    <name>TabCheckDoc</name>
    <message>
        <source>Ignore all errors</source>
        <translation type="unfinished">ข้อมูลผิดพลากทั้งหมด</translation>
    </message>
    <message>
        <source>Automatic check before printing or exporting</source>
        <translation type="unfinished">ตรวจอัตโฯมัติ ก่อนที่จะพิมพ์ หรือ ส่งออก</translation>
    </message>
    <message>
        <source>Check for missing glyphs</source>
        <translation type="unfinished">ตรวจคำผิดของglyphs</translation>
    </message>
    <message>
        <source>Check for objects not on a page</source>
        <translation type="unfinished">ตรวจวัตถุที่ไม่ได้อยู่บนหน้ากระดาษ</translation>
    </message>
    <message>
        <source>Check for overflow in text frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check for transparencies used</source>
        <translation type="unfinished">ตรวจการใช้สีโปร่งใส</translation>
    </message>
    <message>
        <source>Check for missing images</source>
        <translation type="unfinished">ตรวจรูปที่ผิดพลาด</translation>
    </message>
    <message>
        <source>Check image resolution</source>
        <translation type="unfinished">ตรวจความตั้งใจรูป</translation>
    </message>
    <message>
        <source>Lowest allowed resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="unfinished"> dpi</translation>
    </message>
    <message>
        <source>Check for placed PDF Files</source>
        <translation type="unfinished">ตรวจที่วางปฟ้มพีดีเอฟ</translation>
    </message>
    <message>
        <source>Check for PDF Annotations and Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add Profile</source>
        <translation type="unfinished">เพิ่มโปรไฟล์</translation>
    </message>
    <message>
        <source>Remove Profile</source>
        <translation type="unfinished">ย้านโปรไฟล์</translation>
    </message>
</context>
<context>
    <name>TabGuides</name>
    <message>
        <source>Common Settings</source>
        <translation type="unfinished">ตั้งค่าทั่วไป</translation>
    </message>
    <message>
        <source>Placing in Documents</source>
        <translation type="unfinished">วางในเอกสาร</translation>
    </message>
    <message>
        <source>In the Background</source>
        <translation type="unfinished">พื้นหลัง</translation>
    </message>
    <message>
        <source>In the Foreground</source>
        <translation type="unfinished">พื้นหน้า</translation>
    </message>
    <message>
        <source>Snapping</source>
        <translation type="unfinished">ภาพที่ถ่าย</translation>
    </message>
    <message>
        <source>Snap Distance:</source>
        <translation type="unfinished">ระยะภาพที่ถ่าย</translation>
    </message>
    <message>
        <source>Grab Radius:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> px</source>
        <translation type="unfinished"> px</translation>
    </message>
    <message>
        <source>Show Guides</source>
        <translation type="unfinished">แสดงคำแนะนำ</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation type="unfinished">สี</translation>
    </message>
    <message>
        <source>Show Margins</source>
        <translation type="unfinished">แสดงเส้นขอบ</translation>
    </message>
    <message>
        <source>Show Page Grid</source>
        <translation type="unfinished">แสดงหน้าตาราง</translation>
    </message>
    <message>
        <source>Major Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spacing:</source>
        <translation type="unfinished">ว่าง</translation>
    </message>
    <message>
        <source>Minor Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show Baseline Grid</source>
        <translation type="unfinished">แสดงฐานเส้นตาราง</translation>
    </message>
    <message>
        <source>Baseline Settings</source>
        <translation type="unfinished">ตั้งค่าฐานลายเส้น</translation>
    </message>
    <message>
        <source>Baseline &amp;Grid:</source>
        <translation type="unfinished">ฐานลายเส้น &amp;ตาราง:</translation>
    </message>
    <message>
        <source>Baseline &amp;Offset:</source>
        <translation type="unfinished">ฐานลายเส้น &amp;ไม่ตั้งค่า:</translation>
    </message>
    <message>
        <source>Guides are not visible through objects on the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Guides are visible above all objects on the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the minor grid lines</source>
        <translation type="unfinished">Distance between the minor grid lines</translation>
    </message>
    <message>
        <source>Distance between the major grid lines</source>
        <translation type="unfinished">Distance between the major grid lines</translation>
    </message>
    <message>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation type="obsolete">Distance within which an object will snap to your placed guides</translation>
    </message>
    <message>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation type="obsolete">Radius of the area where Scribus will allow you to grab an objects handles</translation>
    </message>
    <message>
        <source>Color of the minor grid lines</source>
        <translation type="unfinished">Colour of the minor grid lines</translation>
    </message>
    <message>
        <source>Color of the major grid lines</source>
        <translation type="unfinished">Colour of the major grid lines</translation>
    </message>
    <message>
        <source>Color of the guide lines you insert</source>
        <translation type="unfinished">Colour of the guide lines you insert</translation>
    </message>
    <message>
        <source>Color for the margin lines</source>
        <translation type="unfinished">Colour for the margin lines</translation>
    </message>
    <message>
        <source>Color for the baseline grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the basegrid on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance between the lines of the baseline grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance from the top of the page for the first baseline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the gridlines on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the guides on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Turns the margins on or off</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">จัดการตารางสถิติ</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
</context>
<context>
    <name>TabPDFOptions</name>
    <message>
        <source>Export Range</source>
        <translation type="unfinished">ระยะในการส่งออก</translation>
    </message>
    <message>
        <source>&amp;All Pages</source>
        <translation type="unfinished">หน้าทั้งหมด</translation>
    </message>
    <message>
        <source>C&amp;hoose Pages</source>
        <translation type="unfinished">เลือกหน้า</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="unfinished">หมุน:</translation>
    </message>
    <message>
        <source>File Options</source>
        <translation type="unfinished">ตัวเลือกแฟ้ม</translation>
    </message>
    <message>
        <source>Compatibilit&amp;y:</source>
        <translation type="unfinished">ตรงกัน:</translation>
    </message>
    <message>
        <source>&amp;Binding:</source>
        <translation type="unfinished">&amp;Binding:</translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation type="unfinished">ชิดขอบซ้าย</translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation type="unfinished">ชิดขอบขวา</translation>
    </message>
    <message>
        <source>Generate &amp;Thumbnails</source>
        <translation type="unfinished">Generate &amp;Thumbnails</translation>
    </message>
    <message>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation type="unfinished">Save &amp;Linked Test Frames as PDF Articles</translation>
    </message>
    <message>
        <source>&amp;Include Bookmarks</source>
        <translation type="unfinished">รวมหมายเหตุ</translation>
    </message>
    <message>
        <source>Include La&amp;yers</source>
        <translation type="unfinished">รวมชั้น</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="unfinished">ดีพีไอ</translation>
    </message>
    <message>
        <source>&amp;Resolution for EPS Graphics:</source>
        <translation type="unfinished">กำหนดเพื่อ กราฟฟิคอีพีเอส</translation>
    </message>
    <message>
        <source>Com&amp;press Text and Vector Graphics</source>
        <translation type="unfinished">ย่อข้อความและเวกเตอร์กราฟฟิค</translation>
    </message>
    <message>
        <source>Image Settings</source>
        <translation type="obsolete">Image Settings</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation type="unfinished">อัตโนมัติ</translation>
    </message>
    <message>
        <source>JPEG</source>
        <translation type="obsolete">JPEG</translation>
    </message>
    <message>
        <source>Zip</source>
        <translation type="obsolete">Zip</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">ไม่มี</translation>
    </message>
    <message>
        <source>Compression Metho&amp;d:</source>
        <translation type="unfinished">ย่อระเบียบ</translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation type="unfinished">มาก</translation>
    </message>
    <message>
        <source>High</source>
        <translation type="unfinished">สูง</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="unfinished">กลาง</translation>
    </message>
    <message>
        <source>Low</source>
        <translation type="unfinished">ต่ำ</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation type="unfinished">น้อย</translation>
    </message>
    <message>
        <source>Compression &amp;Quality:</source>
        <translation type="unfinished">ย่อ คุณสมบัติ</translation>
    </message>
    <message>
        <source>Resa&amp;mple Images to:</source>
        <translation type="unfinished">แสดงรูปตัวอย่างอีกครั้ง</translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation type="unfinished">ทั่วไป</translation>
    </message>
    <message>
        <source>&amp;Embed all Fonts</source>
        <translation type="obsolete">ฝังตัวอักษรทั้งหมด</translation>
    </message>
    <message>
        <source>&amp;Subset all Fonts</source>
        <translation type="obsolete">&amp;ซับเซตตัวอักษรทั้งหมด</translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation type="unfinished">Embedding</translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation type="unfinished">ตัวอักษรที่หาได้:</translation>
    </message>
    <message>
        <source>&amp;&gt;&gt;</source>
        <translation type="unfinished">&amp;&gt;&gt;</translation>
    </message>
    <message>
        <source>&amp;&lt;&lt;</source>
        <translation type="unfinished">&amp;&lt;&lt;</translation>
    </message>
    <message>
        <source>Fonts to embed:</source>
        <translation type="unfinished">ตัวอักษร เอ็มเบ้ด:</translation>
    </message>
    <message>
        <source>Fonts to subset:</source>
        <translation type="obsolete">ตัวอักษรซับเซต:</translation>
    </message>
    <message>
        <source>&amp;Fonts</source>
        <translation type="unfinished">&amp;ตัวอักษร</translation>
    </message>
    <message>
        <source>Enable &amp;Presentation Effects</source>
        <translation type="unfinished">สามารถ เสนอผล</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="unfinished">หน้า</translation>
    </message>
    <message>
        <source>Show Page Pre&amp;views</source>
        <translation type="unfinished">แสดงหน้าเค้าโครงร่าง</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation type="unfinished">ผล</translation>
    </message>
    <message>
        <source>&amp;Display Duration:</source>
        <translation type="unfinished">แสดงตลอกเวลา</translation>
    </message>
    <message>
        <source>Effec&amp;t Duration:</source>
        <translation type="unfinished">ผล ตลอดเวลา:</translation>
    </message>
    <message>
        <source>Effect T&amp;ype:</source>
        <translation type="unfinished">ผลชนิด:</translation>
    </message>
    <message>
        <source>&amp;Moving Lines:</source>
        <translation type="unfinished">ย้ายเส้น:</translation>
    </message>
    <message>
        <source>F&amp;rom the:</source>
        <translation type="unfinished">จาก:</translation>
    </message>
    <message>
        <source>D&amp;irection:</source>
        <translation type="unfinished">แนวทาง:</translation>
    </message>
    <message>
        <source> sec</source>
        <translation type="unfinished"> sec</translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation type="unfinished">ไม่มีผล</translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation type="unfinished">มองไม่เห็น</translation>
    </message>
    <message>
        <source>Box</source>
        <translation type="unfinished">กล่อง</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation type="unfinished">ตัด</translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation type="unfinished">สว่าง</translation>
    </message>
    <message>
        <source>Split</source>
        <translation type="unfinished">ตัด</translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="unfinished">แนวขวาง</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="unfinished">แนวตั้ง</translation>
    </message>
    <message>
        <source>Inside</source>
        <translation type="unfinished">ข้างใน</translation>
    </message>
    <message>
        <source>Outside</source>
        <translation>ข้างนอก</translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation type="unfinished">ซ้ายไปขวา</translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation type="unfinished">บนลงล่าง</translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation type="unfinished">ล่างขึ้นบน</translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation type="unfinished">ขวาไปซ้าย</translation>
    </message>
    <message>
        <source>Top-left to Bottom-Right</source>
        <translation type="unfinished">บนซ้ายไปล่างขวา</translation>
    </message>
    <message>
        <source>&amp;Apply Effect on all Pages</source>
        <translation type="obsolete">ใจความบนกระดาษทั้งหมด</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation type="unfinished">พิเศษ</translation>
    </message>
    <message>
        <source>Display Settings</source>
        <translation type="unfinished">ตั้งค่าแสดง</translation>
    </message>
    <message>
        <source>Page Layout</source>
        <translation type="obsolete">หน้าเลย์เอ้าท์</translation>
    </message>
    <message>
        <source>Single Page</source>
        <translation type="unfinished">หน้าเดียว</translation>
    </message>
    <message>
        <source>Continuous</source>
        <translation type="unfinished">ดำเนินการต่อ</translation>
    </message>
    <message>
        <source>Double Page Left</source>
        <translation type="unfinished">หน้าคู่ซ้าย</translation>
    </message>
    <message>
        <source>Double Page Right</source>
        <translation type="unfinished">หน้าคู่ขวา</translation>
    </message>
    <message>
        <source>Visual Appearance</source>
        <translation type="unfinished">ปรากฏภาพ</translation>
    </message>
    <message>
        <source>Use Viewers Defaults</source>
        <translation type="unfinished">ใช้ภาพผิด</translation>
    </message>
    <message>
        <source>Use Full Screen Mode</source>
        <translation type="unfinished">ใช้โหมดเต็มหน้าจอ</translation>
    </message>
    <message>
        <source>Display Bookmarks Tab</source>
        <translation type="unfinished">แสดงหมายเหตุ</translation>
    </message>
    <message>
        <source>Display Thumbnails</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display Layers Tab</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hide Viewers Toolbar</source>
        <translation type="unfinished">มุมมองเครื่องมือ</translation>
    </message>
    <message>
        <source>Hide Viewers Menubar</source>
        <translation type="unfinished">มุมมองรายการสูง</translation>
    </message>
    <message>
        <source>Zoom Pages to fit Viewer Window</source>
        <translation type="unfinished">ขยายหน้าไปยังมุมมองหน้าต่าง</translation>
    </message>
    <message>
        <source>Special Actions</source>
        <translation type="unfinished">ลักษณะพิเศษ</translation>
    </message>
    <message>
        <source>No Script</source>
        <translation type="unfinished">ไม่มีต้นฉบับ</translation>
    </message>
    <message>
        <source>Viewer</source>
        <translation type="unfinished">มุมมอง</translation>
    </message>
    <message>
        <source>&amp;Use Encryption</source>
        <translation type="unfinished">ใช้ เอ็นคริปชั่น</translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation type="unfinished">รหัส</translation>
    </message>
    <message>
        <source>&amp;User:</source>
        <translation type="unfinished">ผู้ใช้:</translation>
    </message>
    <message>
        <source>&amp;Owner:</source>
        <translation type="unfinished">เจ้าของ:</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation type="unfinished">ตั้งค่า</translation>
    </message>
    <message>
        <source>Allow &amp;Printing the Document</source>
        <translation type="unfinished">อนุญาติให้พิมพ์เอกสาร</translation>
    </message>
    <message>
        <source>Allow &amp;Changing the Document</source>
        <translation type="unfinished">อนุญาติให้เปลี่ยนเอกสาร</translation>
    </message>
    <message>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation type="unfinished">อนุญาติให้คัดลอกข้อความและ กราฟฟิค</translation>
    </message>
    <message>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation type="unfinished">อนุญาติให้เพิ่ม คำอธิบายและฟิลล์</translation>
    </message>
    <message>
        <source>S&amp;ecurity</source>
        <translation type="unfinished">ปลอดภัย</translation>
    </message>
    <message>
        <source>General</source>
        <translation type="unfinished">ทั่วไป</translation>
    </message>
    <message>
        <source>Output &amp;Intended For:</source>
        <translation type="unfinished">ส่งออกไปยัง:</translation>
    </message>
    <message>
        <source>Screen / Web</source>
        <translation type="unfinished">สกรีน / เวป</translation>
    </message>
    <message>
        <source>Printer</source>
        <translation type="unfinished">ปริ้นเตอร์</translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Convert Spot Colors to Process Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation type="unfinished">ใช้การตั้งค่าการแปล</translation>
    </message>
    <message>
        <source>Rendering Settings</source>
        <translation type="unfinished">ตั้งค่าคำแปล</translation>
    </message>
    <message>
        <source>Fre&amp;quency:</source>
        <translation type="unfinished">บ่อย:</translation>
    </message>
    <message>
        <source>&amp;Angle:</source>
        <translation type="unfinished">มุม:</translation>
    </message>
    <message>
        <source>S&amp;pot Function:</source>
        <translation type="unfinished">โครงสร้างจุด:</translation>
    </message>
    <message>
        <source>Simple Dot</source>
        <translation type="unfinished">ตัวอย่าง ด๊อดจ์</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="unfinished">ลายเส้ย</translation>
    </message>
    <message>
        <source>Round</source>
        <translation type="unfinished">วงกลม</translation>
    </message>
    <message>
        <source>Ellipse</source>
        <translation type="unfinished">วงรี</translation>
    </message>
    <message>
        <source>Solid Colors:</source>
        <translation type="unfinished">สีพิ้นฐาน:</translation>
    </message>
    <message>
        <source>Use ICC Profile</source>
        <translation type="unfinished">ใช้โปรไฟล์ ไอซีซี</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation type="unfinished">โปรไฟล์</translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation type="unfinished">คำแปล-ไปยัง:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="unfinished">Perceptual</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="unfinished">Relative Colourimetric</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="unfinished">Saturation</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="unfinished">Absolute Colourimetric</translation>
    </message>
    <message>
        <source>Images:</source>
        <translation type="unfinished">รูป</translation>
    </message>
    <message>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation type="unfinished">Don&apos;t use embedded ICC profiles</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation type="unfinished">สี</translation>
    </message>
    <message>
        <source>PDF/X-3 Output Intent</source>
        <translation type="unfinished">พีดีเอฟ/เอ๊กซ์ ส่งออกไปยัง</translation>
    </message>
    <message>
        <source>&amp;Info String:</source>
        <translation type="unfinished">อินโฟ แถว:</translation>
    </message>
    <message>
        <source>Output &amp;Profile:</source>
        <translation type="unfinished">ส่งออก โปรไฟล์:</translation>
    </message>
    <message>
        <source>Trim Box</source>
        <translation type="unfinished">ตกแต่งกล่อง</translation>
    </message>
    <message>
        <source>PDF/X-&amp;3</source>
        <translation type="unfinished">PDF/X-&amp;3</translation>
    </message>
    <message>
        <source>Show page previews of each page listed above.</source>
        <translation type="unfinished">แสดงเค้าโครงหน้ากระดาษของหน้าบางส่วนในรายการด้านบน</translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page.</source>
        <translation type="obsolete">Length of time the page is shown before the presentation starts on the selected page.</translation>
    </message>
    <message>
        <source>Length of time the effect runs. A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type of the display effect.</source>
        <translation type="unfinished">ชนิดของการแสดงผล</translation>
    </message>
    <message>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation type="unfinished">ทิศทางของผลในการย้ายลายเส้น ทำให้เกิดลายแตกและมองไม่เห็น</translation>
    </message>
    <message>
        <source>Starting position for the box and split effects.</source>
        <translation type="unfinished">ตำแหน่งเริ่มต้นสำหรับผลของกล่องที่แตก</translation>
    </message>
    <message>
        <source>Direction of the glitter or wipe effects.</source>
        <translation type="unfinished">ทิศทางของแสง สว่าง หรือ ผลของการลบ.</translation>
    </message>
    <message>
        <source>Apply the selected effect to all pages.</source>
        <translation type="unfinished">Apply the selected effect to all pages.</translation>
    </message>
    <message>
        <source>Export all pages to PDF</source>
        <translation type="unfinished">ส่งออกหน้าทั้งหมดไปยังพีดีเอฟ</translation>
    </message>
    <message>
        <source>Export a range of pages to PDF</source>
        <translation type="unfinished">ระยะในการส่งออกของหน้าไปยังพีดีเอฟ</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know you need to change it leave the default choice - Left.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF. Some viewers can use the thumbnails for navigation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation type="unfinished">บทความทั่วไปของพีดีเอฟ, ซึ่งใช้เป็นประโยชน์เพื่อนำทางการเชื่อมต่อบทความในพีดีเอฟ.</translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document. These are useful for navigating long PDF documents.</source>
        <translation type="unfinished">คุณสร้างหมายเหตุลงในเอกสาร.สามารถใช้ประโยชน์จากการนำทางของเอกสารพีดีเอฟ</translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics. This does not affect the resolution of bitmap images like photos.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables lossless compression of text and graphics. Unless you have a reason, leave this checked. This reduces PDF file size.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation type="unfinished">ดีพีไอ (Dots Per Inch) สำหรับรูปที่ส่งออก.</translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF. If you selected PDF 1.3, the PDF will be protected by 40 bit encryption. If you selected PDF 1.4, the PDF will be protected by 128 bit encryption. Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the security features in your exported PDF</source>
        <translation type="unfinished">เลือกรหัสหลักซึ่งสามารถใช้ หรือใช้ไม่ได้ กับความปลอดภัยในการส่งพัดีเอฟของคุณ</translation>
    </message>
    <message>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation type="unfinished">เลือกรหัสสำหรับผู้ใช้ที่คุณสามารถอ่านพีดีเอฟได้</translation>
    </message>
    <message>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation type="unfinished">อนุญาติให้พิมพ์ พีดีเอฟ. ถ้า ยังไม่ได้ตรวจสอบ, เพื่อป้องกันการพิมพ์ . </translation>
    </message>
    <message>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation type="unfinished">อนุญาติเปลี่ยนแปลงค่าพีดีเอฟ. ถ้าไม่ได้ตรวจสอบ, ป้องกันการเปลี่ยนแปลงของพีดีเอฟ .</translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. If unchecked, text and graphics cannot be copied.</source>
        <translation type="unfinished">อนุญาติคัดลอกข้อความหรือกราฟฟิคจากพีดีเอฟ.ถ้าไม่ได้ตรวจสอบ,ข้อมูลและกราฟฟิคไม่สามารถคัดลอกได้</translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. If unchecked, editing annotations and fields is prevented.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled when specifically requested by your printer and they have given you the exact details needed. Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Embed a color profile for solid colors</source>
        <translation type="unfinished">Embed a colour profile for solid colours</translation>
    </message>
    <message>
        <source>Color profile for solid colors</source>
        <translation type="unfinished">โปรไฟล์สำหรับสีที่มีความหนาแน่น</translation>
    </message>
    <message>
        <source>Rendering intent for solid colors</source>
        <translation type="unfinished">จุดมุ่งหมายของคำแปลสำหรับสีที่มีความหนาแน่น</translation>
    </message>
    <message>
        <source>Embed a color profile for images</source>
        <translation type="unfinished">Embed a colour profile for images</translation>
    </message>
    <message>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation type="unfinished">ห้ามใช้สีโปรไฟล์ ที่ เอ็มเบ๊ดจากแหล่งข้อมูลรูปภาพ</translation>
    </message>
    <message>
        <source>Color profile for images</source>
        <translation type="unfinished">โปรไฟล์สีสำหรับรูปภาพ</translation>
    </message>
    <message>
        <source>Rendering intent for images</source>
        <translation type="unfinished">Rendering intent for images</translation>
    </message>
    <message>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation type="unfinished">พิมพ์โปร์ไฟล์ส่งออก. ถ้าเป็นไปได้,จะได้รับคำแนะนำบางอย่างจากปริ้นเตอร์ของคุณ บนโปรไฟล์ที่คุณเลือก.</translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="unfinished"> </translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="unfinished">Distance for bleed from the bottom of the physical page</translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="unfinished">Distance for bleed from the left of the physical page</translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="unfinished">Distance for bleed from the right of the physical page</translation>
    </message>
    <message>
        <source>Mirror Page(s) horizontally</source>
        <translation type="unfinished">หน้ากระดาษ(s) แนวขวาง</translation>
    </message>
    <message>
        <source>Mirror Page(s) vertically</source>
        <translation type="unfinished">หน้ากระดาษ(s) แนวตั้ง</translation>
    </message>
    <message>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clip to Page Margins</source>
        <translation type="unfinished">คลิป ริมหน้ากระดาษ</translation>
    </message>
    <message>
        <source>Lossy - JPEG</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Lossless - Zip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image Compression Method</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Javascript to be executed
when PDF document is opened:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enables presentation effects when using Adobe&amp;#174; Reader&amp;#174; and other PDF viewers which support this in full screen mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Determines the PDF compatibility. The default is PDF 1.3 which gives the widest compatibility. Choose PDF 1.4 if your file uses features such as transparency or you require 128 bit encryption. PDF 1.5 is necessary when you wish to preserve objects in separate layers within the PDF.  PDF/X-3 is for exporting the PDF when you want color managed RGB for commercial printing and is selectable when you have activated color management. Use only when advised by your printer or in some cases printing to a 4 color digital color laser printer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layers in your document are exported to the PDF Only available if PDF 1.5 is chosen.</source>
        <translation type="unfinished">ชั้นของเอกสารที่ส่งออกไปยังพีดีเอฟอย่างเหมาะสม ถ้าเลือกพีดีเอฟ1.5</translation>
    </message>
    <message>
        <source>Re-sample your bitmap images to the selected DPI. Leaving this unchecked will render them at their native resolution. Enabling this will increase memory usage and slow down export.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color model for the output of your PDF. Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets. Choose Printer when printing to a true 4 color CMYK printer. Choose Grayscale when you want a grey scale PDF.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not show objects outside the margins in the exported file</source>
        <translation type="unfinished">ห้ามแสดงวัตถุด้านนอกขอบกระดาษในแฟ้มที่ส่งออก</translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page. Setting 0 will disable automatic page transition.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Method of compression to use for images. Automatic allows Scribus to choose the best method. ZIP is lossless and good for images with solid colors. JPEG is better at creating smaller PDF files which have many photos (with slight image quality loss possible). Leave it set to Automatic unless you have a need for special compression options.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quality levels for lossy compression methods: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%). Note that a quality level does not directly determine the size of the resulting image - both size and quality loss vary from image to image at any given quality level. Even with Maximum selected, there is always some quality loss with jpeg.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Embed All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fonts to outline:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Outline &amp;All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Apply Effect to all Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Document Layout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts will preserve the layout and appearance of your document.Some fonts like Open Type can only be subset, as they are not able to be embedded into PDF versions before PDF 1.6. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Subset all fonts into the PDF. Subsetting fonts is when only the glyphs used in the PDF are embedded, not the whole font. Some fonts like Open Type can only be subset, as they are not able to be embedded into PDF versions before PDF 1.6.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabTools</name>
    <message>
        <source>Font:</source>
        <translation type="unfinished">อักษร:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="unfinished">pt</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation type="unfinished">ขนาด:</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished">ไม่มี</translation>
    </message>
    <message>
        <source>Text Color:</source>
        <translation type="unfinished">ข้อความสี</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Shading:</source>
        <translation type="unfinished">แรเงา</translation>
    </message>
    <message>
        <source>Text Stroke:</source>
        <translation type="unfinished">เส้นข้อความ</translation>
    </message>
    <message>
        <source>Fill Color:</source>
        <translation type="unfinished">เติมสี</translation>
    </message>
    <message>
        <source>Stroke Color:</source>
        <translation type="unfinished">เส้นสี</translation>
    </message>
    <message>
        <source>Dot</source>
        <translation type="unfinished">จุด</translation>
    </message>
    <message>
        <source>Hyphen</source>
        <translation type="unfinished">-</translation>
    </message>
    <message>
        <source>Underscore</source>
        <translation type="unfinished">_</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">Custom</translation>
    </message>
    <message>
        <source>Tab Fill Character:</source>
        <translation type="unfinished">เติมลักษณะแถบ</translation>
    </message>
    <message>
        <source>Tab Width:</source>
        <translation type="unfinished">ความกว้างของแถบ</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation type="unfinished">คอลัมน์</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="unfinished">&amp;Gap:</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="unfinished">Woven silk pyjamas exchanged for blue quartz</translation>
    </message>
    <message>
        <source>&amp;Line Color:</source>
        <translation type="unfinished">&amp;ลายเส้นสีr:</translation>
    </message>
    <message>
        <source>&amp;Shading:</source>
        <translation type="unfinished">แรเงา:</translation>
    </message>
    <message>
        <source>&amp;Fill Color:</source>
        <translation type="unfinished">เติมสี:</translation>
    </message>
    <message>
        <source>S&amp;hading:</source>
        <translation type="unfinished">แรเงา:</translation>
    </message>
    <message>
        <source>Line Style:</source>
        <translation type="unfinished">รูปแบบเส้น</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation type="unfinished">ความกว้างลายเส้น:</translation>
    </message>
    <message>
        <source>Line S&amp;tyle:</source>
        <translation type="unfinished">รูปแบบลายเส้น</translation>
    </message>
    <message>
        <source>Arrows:</source>
        <translation type="unfinished">หัวลูกศร</translation>
    </message>
    <message>
        <source>Start:</source>
        <translation type="unfinished">เริ่ม</translation>
    </message>
    <message>
        <source>End:</source>
        <translation type="unfinished">จบ</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation type="unfinished">ฟรีสเกล</translation>
    </message>
    <message>
        <source>&amp;Horizontal Scaling:</source>
        <translation type="unfinished">สเกลแนวขวาง:</translation>
    </message>
    <message>
        <source>&amp;Vertical Scaling:</source>
        <translation type="unfinished">สเกลแนวตั้ง:</translation>
    </message>
    <message>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation type="obsolete">สเกลรูปภาพไปยังขนาดเฟลม</translation>
    </message>
    <message>
        <source>Keep Aspect &amp;Ratio</source>
        <translation type="unfinished">รักษา รูปร่าง &amp;สัดส่วน</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation type="unfinished">เติมสี:</translation>
    </message>
    <message>
        <source>Use embedded Clipping Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>On Screen Preview</source>
        <translation type="unfinished">เค้าโครงบนสกรีน</translation>
    </message>
    <message>
        <source>Full Resolution Preview</source>
        <translation type="unfinished">เค้าโครงเต็มของรัโซลูชั่น</translation>
    </message>
    <message>
        <source>Normal Resolution Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Low Resolution Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mi&amp;nimum:</source>
        <translation type="unfinished">น้อย</translation>
    </message>
    <message>
        <source>Ma&amp;ximum:</source>
        <translation type="unfinished">มาก</translation>
    </message>
    <message>
        <source>&amp;Stepping:</source>
        <translation type="unfinished">ระยะ:</translation>
    </message>
    <message>
        <source>Text Frame Properties</source>
        <translation type="unfinished">คุณสมบัตข้อความเฟลม</translation>
    </message>
    <message>
        <source>Picture Frame Properties</source>
        <translation type="obsolete">คุณสมบัติรูปภาพเฟลม</translation>
    </message>
    <message>
        <source>Shape Drawing Properties</source>
        <translation type="unfinished">คุณสมบัติรูปร่างภาพวาด</translation>
    </message>
    <message>
        <source>Magnification Level Defaults</source>
        <translation type="unfinished">Magnification Level Defaults</translation>
    </message>
    <message>
        <source>Line Drawing Properties</source>
        <translation type="unfinished">คุณสมบัติลายเส้นวาดภาพ</translation>
    </message>
    <message>
        <source>Polygon Drawing Properties</source>
        <translation type="unfinished">คุณสมบัติภาพวาด โพลิกอน</translation>
    </message>
    <message>
        <source>Font for new text frames</source>
        <translation type="unfinished">อักษรสำหรับข้อความใหม่เฟลม</translation>
    </message>
    <message>
        <source>Size of font for new text frames</source>
        <translation type="unfinished">ขนาดตัวอักษรสำหรับข้อความเฟลมใหม่</translation>
    </message>
    <message>
        <source>Color of font</source>
        <translation type="unfinished">สีตัวอักษร</translation>
    </message>
    <message>
        <source>Number of columns in a text frame</source>
        <translation type="unfinished">ตัวเลขคอลัมน์ในเฟลมข้อความ</translation>
    </message>
    <message>
        <source>Gap between text frame columns</source>
        <translation type="unfinished">ระยะห่างระหว่างคอลัมน์ในเฟลมข้อความ</translation>
    </message>
    <message>
        <source>Sample of your font</source>
        <translation type="unfinished">ตัวอย่างอักษร</translation>
    </message>
    <message>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation type="obsolete">Picture frames allow pictures to scale to any size</translation>
    </message>
    <message>
        <source>Horizontal scaling of images</source>
        <translation type="unfinished">สเกลแนวขวางสำหรับรูปภาพ</translation>
    </message>
    <message>
        <source>Vertical scaling of images</source>
        <translation type="unfinished">สเกลแนวตั้งสำหรับรูปภาพ</translation>
    </message>
    <message>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation type="unfinished">รักษา สเกลแนวขวางและแนวตั้งให้เหมือนกัน</translation>
    </message>
    <message>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation type="obsolete">รูปภาพ ในรูปเฟลมมีสเกลขนาดของเฟลม</translation>
    </message>
    <message>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation type="obsolete">คุณสมบัติแต่แรกรักษาสเกลรูปภาพอัตโนมัติ </translation>
    </message>
    <message>
        <source>Fill color of picture frames</source>
        <translation type="obsolete">เติมสีของเฟลมรูปภาพ</translation>
    </message>
    <message>
        <source>Saturation of color of fill</source>
        <translation type="unfinished">Saturation of colour of fill</translation>
    </message>
    <message>
        <source>Line color of shapes</source>
        <translation type="unfinished">สูปร่างของเส้นสี</translation>
    </message>
    <message>
        <source>Saturation of color of lines</source>
        <translation type="unfinished">Saturation of colour of lines</translation>
    </message>
    <message>
        <source>Fill color of shapes</source>
        <translation type="unfinished">เติมสีของรูปร่าง</translation>
    </message>
    <message>
        <source>Line style of shapes</source>
        <translation type="unfinished">รูปแบบเส้นของรูปร่าง</translation>
    </message>
    <message>
        <source>Line width of shapes</source>
        <translation type="unfinished">ความกว้างของเส้นของรูปร่าง</translation>
    </message>
    <message>
        <source>Minimum magnification allowed</source>
        <translation type="unfinished">Minimum magnification allowed</translation>
    </message>
    <message>
        <source>Maximum magnification allowed</source>
        <translation type="unfinished">Maximum magnification allowed</translation>
    </message>
    <message>
        <source>Change in magnification for each zoom operation</source>
        <translation type="unfinished">Change in magnification for each zoom operation</translation>
    </message>
    <message>
        <source>Color of lines</source>
        <translation type="unfinished">สีเส้น</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation type="unfinished">Saturation of colour</translation>
    </message>
    <message>
        <source>Style of lines</source>
        <translation type="unfinished">รูปแบบของเส้น</translation>
    </message>
    <message>
        <source>Width of lines</source>
        <translation type="unfinished">ความกว้างของเส้น</translation>
    </message>
    <message>
        <source>Custom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <comment>tab fill</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Scale Image to Frame Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image Frame Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image frames allow images to scale to any size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Images in image frames are scaled to the size of the frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatically scaled images keep their original proportions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill color of image frames</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabTypograpy</name>
    <message>
        <source>Subscript</source>
        <translation type="unfinished">ซับสคริป</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>&amp;Displacement:</source>
        <translation type="unfinished">ไม่แทนที่:</translation>
    </message>
    <message>
        <source>&amp;Scaling:</source>
        <translation type="unfinished">สเกล</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="unfinished">Superscript</translation>
    </message>
    <message>
        <source>D&amp;isplacement:</source>
        <translation type="unfinished">ไม่แทนที่:</translation>
    </message>
    <message>
        <source>S&amp;caling:</source>
        <translation type="unfinished">สเกล:</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation type="unfinished">ขีดเส้นใต้</translation>
    </message>
    <message>
        <source>Displacement:</source>
        <translation type="unfinished">ไม่แทนที่</translation>
    </message>
    <message>
        <source>Auto</source>
        <translation type="unfinished">อัตโนมัต</translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation type="unfinished">ความกว้างของเส้น</translation>
    </message>
    <message>
        <source>Strikethru</source>
        <translation type="unfinished">ลายเส้น</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="unfinished">Small Caps</translation>
    </message>
    <message>
        <source>Sc&amp;aling:</source>
        <translation type="unfinished">สเกล:</translation>
    </message>
    <message>
        <source>Automatic &amp;Line Spacing</source>
        <translation type="unfinished">อัตโนมัติ เส้นว่าง</translation>
    </message>
    <message>
        <source>Line Spacing:</source>
        <translation type="unfinished">เส้นว่าง</translation>
    </message>
    <message>
        <source>Displacement above the baseline of the font on a line</source>
        <translation type="unfinished">Displacement above the baseline of the font on a line</translation>
    </message>
    <message>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation type="unfinished">Relative size of the superscript compared to the normal font</translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation type="unfinished">Displacement below the baseline of the normal font on a line</translation>
    </message>
    <message>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation type="unfinished">Relative size of the subscript compared to the normal font</translation>
    </message>
    <message>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation type="unfinished">Relative size of the small caps font compared to the normal font</translation>
    </message>
    <message>
        <source>Percentage increase over the font size for the line spacing</source>
        <translation type="unfinished">Percentage increase over the font size for the line spacing</translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font expressed as a percentage of the fonts descender</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line width expressed as a percentage of the font size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Displacement above the baseline of the normal font expressed as a percentage of the fonts ascender</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Tabruler</name>
    <message>
        <source>Left</source>
        <translation type="unfinished">ซ้าย</translation>
    </message>
    <message>
        <source>Right</source>
        <translation type="unfinished">ขวา</translation>
    </message>
    <message>
        <source>Full Stop</source>
        <translation type="obsolete">จุด</translation>
    </message>
    <message>
        <source>Comma</source>
        <translation type="unfinished">จุด</translation>
    </message>
    <message>
        <source>Center</source>
        <translation type="unfinished">กลาง</translation>
    </message>
    <message>
        <source>Delete All</source>
        <translation type="unfinished">ลบทั้งหมด</translation>
    </message>
    <message>
        <source>Indentation for first line of the paragraph</source>
        <translation type="unfinished">ย่อหน้าบันทัดแรกของพารากราฟ</translation>
    </message>
    <message>
        <source>Indentation from the left for the whole paragraph</source>
        <translation type="unfinished">ย่อหน้าซ้ายของพารากราฟ</translation>
    </message>
    <message>
        <source>Delete all Tabulators</source>
        <translation type="unfinished">ลบตารางสถิติทั้งหมด</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete"> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>&amp;Position:</source>
        <translation type="unfinished">คุณสมบัติ:</translation>
    </message>
    <message>
        <source>First &amp;Line:</source>
        <translation type="obsolete">First &amp;Line:</translation>
    </message>
    <message>
        <source>Left Ind&amp;ent:</source>
        <translation type="obsolete">Left Ind&amp;ent:</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">ไม่มี</translation>
    </message>
    <message>
        <source>Dot</source>
        <translation type="unfinished">จุด</translation>
    </message>
    <message>
        <source>Hyphen</source>
        <translation type="unfinished">-</translation>
    </message>
    <message>
        <source>Underscore</source>
        <translation type="unfinished">_</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation type="unfinished">Custom</translation>
    </message>
    <message>
        <source>Fill Char:</source>
        <translation type="unfinished">เติมลักษณะ</translation>
    </message>
    <message>
        <source>Custom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Period</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <comment>tab fill</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Tree</name>
    <message>
        <source>Outline</source>
        <translation type="unfinished">โครงร่าง</translation>
    </message>
    <message>
        <source>Element</source>
        <translation type="unfinished">องค์ประกอบ</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Type</translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="obsolete">Information</translation>
    </message>
    <message>
        <source>X:</source>
        <translation type="obsolete">X:</translation>
    </message>
    <message>
        <source>Y:</source>
        <translation type="obsolete">Y:</translation>
    </message>
    <message>
        <source>Font:</source>
        <translation type="obsolete">Font:</translation>
    </message>
    <message>
        <source>Image</source>
        <translation type="obsolete">Image</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="obsolete">Text</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="obsolete">Line</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation type="obsolete">Polygon</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation type="obsolete">Polyline</translation>
    </message>
    <message>
        <source>PathText</source>
        <translation type="obsolete">PathText</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="obsolete">Page</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Warning</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="obsolete">Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">OK</translation>
    </message>
    <message>
        <source>Group </source>
        <translation type="unfinished">กลุ่ม</translation>
    </message>
    <message>
        <source>Free Objects</source>
        <translation type="unfinished">วัตถุอิสระ</translation>
    </message>
    <message>
        <source>Page </source>
        <translation type="unfinished">หน้า</translation>
    </message>
</context>
<context>
    <name>UnderlineValues</name>
    <message>
        <source>Auto</source>
        <translation type="unfinished">อัตโนมัติ</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="unfinished"> %</translation>
    </message>
    <message>
        <source>Displacement</source>
        <translation type="unfinished">แทนที่</translation>
    </message>
    <message>
        <source>Linewidth</source>
        <translation type="unfinished">ความกว้างของเส้น</translation>
    </message>
</context>
<context>
    <name>UndoManager</name>
    <message>
        <source>Add vertical guide</source>
        <translation type="unfinished">เพิ่มคำแนะนำแนวตั้ง</translation>
    </message>
    <message>
        <source>Add horizontal guide</source>
        <translation type="unfinished">เพิ่มคำแนะนำแนวขวาง</translation>
    </message>
    <message>
        <source>Remove vertical guide</source>
        <translation type="unfinished">ย้ายคำแนะนำแนวตั้ง</translation>
    </message>
    <message>
        <source>Remove horizontal guide</source>
        <translation type="unfinished">ย้ายคำแนะนำแนวขวาง</translation>
    </message>
    <message>
        <source>Move vertical guide</source>
        <translation type="unfinished">ย้ายคำแนะนำแนวตั้งออกไป</translation>
    </message>
    <message>
        <source>Move horizontal guide</source>
        <translation type="unfinished">ย้ายคำแนะนำแนวขวางออกไป</translation>
    </message>
    <message>
        <source>Lock guides</source>
        <translation type="unfinished">ล๊อคคำแนะนำ</translation>
    </message>
    <message>
        <source>Unlock guides</source>
        <translation type="unfinished">ไม่ล๊อคคำแนะนำ</translation>
    </message>
    <message>
        <source>Move</source>
        <translation type="unfinished">ย้าย</translation>
    </message>
    <message>
        <source>Resize</source>
        <translation type="unfinished">ขนาดใหม่</translation>
    </message>
    <message>
        <source>Rotate</source>
        <translation type="unfinished">หมุน</translation>
    </message>
    <message>
        <source>X1: %1, Y1: %2, %3
X2: %4, Y2: %5, %6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>W1: %1, H1: %2
W2: %3, H2: %4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selection</source>
        <translation type="unfinished">เลือก</translation>
    </message>
    <message>
        <source>Group</source>
        <translation type="unfinished">กลุ่ม</translation>
    </message>
    <message>
        <source>Selection/Group</source>
        <translation type="unfinished">เลือก/กลุ่ม</translation>
    </message>
    <message>
        <source>Create</source>
        <translation type="unfinished">สร้าง</translation>
    </message>
    <message>
        <source>X: %1, Y: %2
W: %3, H: %4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Align/Distribute</source>
        <translation type="unfinished">วางแนว/แพร่</translation>
    </message>
    <message>
        <source>Items involved</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
    <message>
        <source>Set fill color</source>
        <translation type="unfinished">ตั้งค่าเติมสี</translation>
    </message>
    <message>
        <source>Color1: %1, Color2: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set fill color shade</source>
        <translation type="unfinished">ตั้งค่าเติมสีแรเงา</translation>
    </message>
    <message>
        <source>Set line color</source>
        <translation type="unfinished">ตั้งค่าเส้นสี</translation>
    </message>
    <message>
        <source>Set line color shade</source>
        <translation type="unfinished">ตั้งค่าสีแรเงา</translation>
    </message>
    <message>
        <source>Flip horizontally</source>
        <translation type="unfinished">ฟลิปแนวนอน</translation>
    </message>
    <message>
        <source>Flip vertically</source>
        <translation type="unfinished">ฟลิปแนวตั้ง</translation>
    </message>
    <message>
        <source>Lock</source>
        <translation type="unfinished">ล๊อค</translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation type="unfinished">ไม่ล๊อค</translation>
    </message>
    <message>
        <source>Lock size</source>
        <translation type="unfinished">ล๊อคขนาด</translation>
    </message>
    <message>
        <source>Unlock size</source>
        <translation type="unfinished">ไม่ล๊อคขนาด</translation>
    </message>
    <message>
        <source>Ungroup</source>
        <translation type="unfinished">ไม่มีกลุ่ม</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation type="unfinished">สร้างชื่อใหม่</translation>
    </message>
    <message>
        <source>From %1
to %2</source>
        <translation type="unfinished">จาก%1ถึง%2</translation>
    </message>
    <message>
        <source>Apply Master Page</source>
        <translation type="unfinished">ลงชื่อหน้าหลัก</translation>
    </message>
    <message>
        <source>Paste</source>
        <translation type="unfinished">วาง</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation type="unfinished">ตัด</translation>
    </message>
    <message>
        <source>Set fill color transparency</source>
        <translation type="unfinished">ตั้งค่าเติมสีใส</translation>
    </message>
    <message>
        <source>Set line color transparency</source>
        <translation type="unfinished">ตั้งค่าเติมเส้นสีใส</translation>
    </message>
    <message>
        <source>Set line style</source>
        <translation type="unfinished">ตั้งค่ารูปแบบเส้น</translation>
    </message>
    <message>
        <source>Set the style of line end</source>
        <translation type="unfinished">ตั้งค่ารูปแบบเส้นตอนสุดท้าย</translation>
    </message>
    <message>
        <source>Set the style of line join</source>
        <translation type="unfinished">ตั้งค่ารูปแบบเส้นระหว่างพิมพ์</translation>
    </message>
    <message>
        <source>Set line width</source>
        <translation type="unfinished">ตั้งค่าความกว้างของเส้น</translation>
    </message>
    <message>
        <source>No style</source>
        <translation type="unfinished">ไม่มีรูปแบบ</translation>
    </message>
    <message>
        <source>Set custom line style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do not use custom line style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set start arrow</source>
        <translation type="unfinished">ตั้งค่าเริ่มต้นลูกศร</translation>
    </message>
    <message>
        <source>Set end arrow</source>
        <translation type="unfinished">ตั้งค่าสุดท้านลูกศร</translation>
    </message>
    <message>
        <source>Create table</source>
        <translation type="unfinished">สร้างตาราง</translation>
    </message>
    <message>
        <source>Rows: %1, Cols: %2</source>
        <translation type="unfinished">แถว:%1, คอลัมน์: %2</translation>
    </message>
    <message>
        <source>Set font</source>
        <translation type="unfinished">ตั้งค่าตัวอักษร</translation>
    </message>
    <message>
        <source>Set font size</source>
        <translation type="unfinished">ตั้งค่าขนาดตัวอักษร</translation>
    </message>
    <message>
        <source>Set font width</source>
        <translation type="unfinished">ตั้งคี่าความกว้างตัวอักษร</translation>
    </message>
    <message>
        <source>Set font height</source>
        <translation type="unfinished">ตั้งค่าความสูงตัวอักษร</translation>
    </message>
    <message>
        <source>Set font fill color</source>
        <translation type="unfinished">ตั้งค่าเติมสีตัวอักษร</translation>
    </message>
    <message>
        <source>Set font stroke color</source>
        <translation type="unfinished">ตั้งค่าลายเส้นตัวอักษร</translation>
    </message>
    <message>
        <source>Set font fill color shade</source>
        <translation type="unfinished">ตั้งค่าเติมสีแรเงาตัวอักษร</translation>
    </message>
    <message>
        <source>Set font stroke color shade</source>
        <translation type="unfinished">ตั้งค่าลายเส้นสีแรเงาตัวอักษร</translation>
    </message>
    <message>
        <source>Set kerning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set line spacing</source>
        <translation type="unfinished">ตั้งค่าช่องว่างของลายเส้น</translation>
    </message>
    <message>
        <source>Set paragraph style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set language</source>
        <translation type="unfinished">ตั้งค่ารูปแบบพารากราฟ</translation>
    </message>
    <message>
        <source>Align text</source>
        <translation type="unfinished">เส้นข้อความ</translation>
    </message>
    <message>
        <source>Set font effect</source>
        <translation type="unfinished">ตั้งค่าตัวอักษร</translation>
    </message>
    <message>
        <source>Image frame</source>
        <translation type="unfinished">รูปภาพเฟลม</translation>
    </message>
    <message>
        <source>Text frame</source>
        <translation type="unfinished">ข้อความเฟลม</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation type="unfinished">โพลิกอน</translation>
    </message>
    <message>
        <source>Bezier curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation type="unfinished">Polyline</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation type="unfinished">ข้อความบนพาธ</translation>
    </message>
    <message>
        <source>Convert to</source>
        <translation type="unfinished">แปลงไปยัง</translation>
    </message>
    <message>
        <source>Import SVG image</source>
        <translation type="unfinished">นำเข้ารูปภาพเอสวีจี</translation>
    </message>
    <message>
        <source>Import EPS image</source>
        <translation type="unfinished">นำเข้ารูปภาพอีพีเอส</translation>
    </message>
    <message>
        <source>Import OpenOffice.org Draw image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scratch space</source>
        <translation type="unfinished">ขีดที่ว่าง</translation>
    </message>
    <message>
        <source>Text flows around the frame</source>
        <translation type="unfinished">ข้อความโค้งรอบๆเฟลม</translation>
    </message>
    <message>
        <source>Text flows around bounding box</source>
        <translation type="unfinished">ข้อความโค้งรอบกล่อง</translation>
    </message>
    <message>
        <source>Text flows around contour line</source>
        <translation type="unfinished">ข้อความโค้งรอบเค้าเตอร์เส้น</translation>
    </message>
    <message>
        <source>No text flow</source>
        <translation type="unfinished">ไม่มีข้อความโค้ง</translation>
    </message>
    <message>
        <source>No bounding box</source>
        <translation type="unfinished">ไม่ติดกับกล่อง</translation>
    </message>
    <message>
        <source>No contour line</source>
        <translation type="unfinished">ไม่มีเส้นเคาท์เตอร์</translation>
    </message>
    <message>
        <source>Page %1</source>
        <translation type="unfinished">หน้า%1</translation>
    </message>
    <message>
        <source>Set image scaling</source>
        <translation type="unfinished">ตั้งค่ารูปสเกล</translation>
    </message>
    <message>
        <source>Frame size</source>
        <translation type="unfinished">ขนาดเฟลม</translation>
    </message>
    <message>
        <source>Free scaling</source>
        <translation type="unfinished">สเกลเฟลม</translation>
    </message>
    <message>
        <source>Keep aspect ratio</source>
        <translation type="unfinished">รักษารูปสัดส่วน</translation>
    </message>
    <message>
        <source>Break aspect ratio</source>
        <translation type="unfinished">พักรูปสัดส่วน</translation>
    </message>
    <message>
        <source>Edit contour line</source>
        <translation type="unfinished">แก้ไขเส้นเคาท์เตอร์</translation>
    </message>
    <message>
        <source>Edit shape</source>
        <translation type="unfinished">แก้ไขรูปร่าง</translation>
    </message>
    <message>
        <source>Reset contour line</source>
        <translation type="unfinished">ตั้งค่าเส้นเคาท์เตอร์</translation>
    </message>
    <message>
        <source>Add page</source>
        <translation type="unfinished">เพิ่มหน้า</translation>
    </message>
    <message>
        <source>Add pages</source>
        <translation type="unfinished">เพิ่มหน้า</translation>
    </message>
    <message>
        <source>Delete page</source>
        <translation type="unfinished">ลบหน้า</translation>
    </message>
    <message>
        <source>Delete pages</source>
        <translation type="unfinished">ลบหน้า</translation>
    </message>
    <message>
        <source>Add layer</source>
        <translation type="unfinished">เพิ่มชั้น</translation>
    </message>
    <message>
        <source>Delete layer</source>
        <translation type="unfinished">ลบชั้น</translation>
    </message>
    <message>
        <source>Rename layer</source>
        <translation type="unfinished">สร้างชื่อชั้น</translation>
    </message>
    <message>
        <source>Raise layer</source>
        <translation type="unfinished">ยกชั้น</translation>
    </message>
    <message>
        <source>Lower layer</source>
        <translation type="unfinished">ชั้นล่าง</translation>
    </message>
    <message>
        <source>Send to layer</source>
        <translation type="unfinished">ส่งไปยังชั้น</translation>
    </message>
    <message>
        <source>Enable printing of layer</source>
        <translation type="unfinished">สามารถพิมพ์จากถาด</translation>
    </message>
    <message>
        <source>Disable printing of layer</source>
        <translation type="unfinished">ไม่สามารถพิมพ์ออกจากถาดได้</translation>
    </message>
    <message>
        <source>Change name of the layer</source>
        <translation type="unfinished">เปลี่ยนชื่อชั้น</translation>
    </message>
    <message>
        <source>Get image</source>
        <translation type="unfinished">รับรูป</translation>
    </message>
    <message>
        <source>Enable Item Printing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Disable Item Printing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Multiple duplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change Image Offset</source>
        <translation type="unfinished">เปลี่ยนรูปอ๊อฟเซ๊ต</translation>
    </message>
    <message>
        <source>Change Image Scale</source>
        <translation type="unfinished">เปลี่ยนรูปสเกล</translation>
    </message>
    <message>
        <source>X1: %1, Y1: %2
X2: %4, Y2: %5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X: %1, Y: %2
X: %4, Y: %5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset control point</source>
        <translation type="unfinished">ตั้งค่าจุดบังคับ</translation>
    </message>
    <message>
        <source>Reset control points</source>
        <translation type="unfinished">ตั้งค่าจุบังคับ</translation>
    </message>
    <message>
        <source>Modify image effects</source>
        <translation type="unfinished">ผลของการเปลี่ยนรูป</translation>
    </message>
</context>
<context>
    <name>UndoPalette</name>
    <message>
        <source>Initial State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Action History</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show selected object only</source>
        <translation type="unfinished">แสดงตัวเลือกอย่างเดียว</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="unfinished">ไม่ทำ</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation type="unfinished">ทำอีกรอบ</translation>
    </message>
</context>
<context>
    <name>UndoWidget</name>
    <message>
        <source>%1: %2</source>
        <comment>undo target: action (f.e. Text frame: Resize)</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UpgradeChecker</name>
    <message>
        <source>Attempting to get the Scribus version update file</source>
        <translation type="unfinished">พยายามรับแฟ้มข้อมูลล่าสุดของสไครบัส</translation>
    </message>
    <message>
        <source>(No data on your computer will be sent to an external location)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Timed out when attempting to get update file.</source>
        <translation type="unfinished">หมดเวลาเมื่อพยายามรับข้อมูลใหม่</translation>
    </message>
    <message>
        <source>Error when attempting to get update file: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File not found on server</source>
        <translation type="unfinished">สร้างแฟ้มบนเซอร์ฟเวอร์ไม่ได้</translation>
    </message>
    <message>
        <source>Could not open version file: %1
Error:%2 at line: %3, row: %4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An error occurred while looking for updates for Scribus, please check your internet connection.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No updates are available for your version of Scribus %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>One or more updates for your version of Scribus (%1) are available:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This list may contain development versions.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Please visit www.scribus.net for details.</source>
        <translation type="unfinished">กรุณาเข้าไปเยี่ยม www.scribus.net สำหรับรายละเอียดเพิ่ม</translation>
    </message>
</context>
<context>
    <name>UsePrinterMarginsDialog</name>
    <message>
        <source>Minimum Margins for Page Size %1</source>
        <translation type="unfinished">ขอบริมอย่างน้อยสุดสำหรับกระดาษขนาด%1</translation>
    </message>
</context>
<context>
    <name>UsePrinterMarginsDialogBase</name>
    <message>
        <source>Use Printer Margins</source>
        <translation type="unfinished">ใช้ขิบกระดาษปริ้นเตอร์</translation>
    </message>
    <message>
        <source>Select &amp;Printer:</source>
        <translation type="unfinished">เลือก พิมพ์</translation>
    </message>
    <message>
        <source>Margins</source>
        <translation type="unfinished">ริม ขอบกระดาษ</translation>
    </message>
    <message>
        <source>Right:</source>
        <translation type="unfinished">ขวา</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="unfinished">บนสุด:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="unfinished">ล่างสุด:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="unfinished">ซ้าย:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished">ตกลง</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="unfinished">Alt+O</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">ยกเลิก</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
</context>
<context>
    <name>ValueDialog</name>
    <message>
        <source>Insert value</source>
        <translation type="unfinished">แทรกค่า</translation>
    </message>
    <message>
        <source>Enter a value then press OK.</source>
        <translation type="unfinished">ผ่านค่าหลังจากที่กดตกลง</translation>
    </message>
    <message>
        <source>Enter a value then press OK</source>
        <translation type="unfinished">ผ่านค่าหลังจากที่กดตกลง</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="unfinished">Alt+O</translation>
    </message>
    <message>
        <source>Send your value to the script</source>
        <translation type="unfinished">ส่งค่าของคุณถึงต้นฉบับ</translation>
    </message>
</context>
<context>
    <name>WerkToolB</name>
    <message>
        <source>Tools</source>
        <translation type="unfinished">เครื่องมือ</translation>
    </message>
    <message>
        <source>Select Items</source>
        <translation type="obsolete">Select Items</translation>
    </message>
    <message>
        <source>Insert Text Frame</source>
        <translation type="obsolete">Insert Text Frame</translation>
    </message>
    <message>
        <source>Insert Picture</source>
        <translation type="obsolete">Insert Picture</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation type="unfinished">คุณสมบัติ...</translation>
    </message>
    <message>
        <source>Insert Polygons</source>
        <translation type="obsolete">Insert Polygons</translation>
    </message>
    <message>
        <source>Insert Lines</source>
        <translation type="obsolete">Insert Lines</translation>
    </message>
    <message>
        <source>Insert Bezier Curves</source>
        <translation type="obsolete">Insert Bezier Curves</translation>
    </message>
    <message>
        <source>Insert Freehand Line</source>
        <translation type="obsolete">Insert Freehand Line</translation>
    </message>
    <message>
        <source>Rotate Item</source>
        <translation type="obsolete">Rotate Item</translation>
    </message>
    <message>
        <source>Edit Contents of Frame</source>
        <translation type="obsolete">Edit Contents of Frame</translation>
    </message>
    <message>
        <source>Link Text Frames</source>
        <translation type="obsolete">Link Text Frames</translation>
    </message>
    <message>
        <source>Unlink Text Frames</source>
        <translation type="obsolete">Unlink Text Frames</translation>
    </message>
    <message>
        <source>Zoom in or out</source>
        <translation type="obsolete">Zoom in or out</translation>
    </message>
    <message>
        <source>Edit the text with the Story Editor</source>
        <translation type="obsolete">Edit the text with the Story Editor</translation>
    </message>
    <message>
        <source>Draw various Shapes</source>
        <translation type="obsolete">Draw various Shapes</translation>
    </message>
    <message>
        <source>Insert Table</source>
        <translation type="obsolete">Insert Table</translation>
    </message>
    <message>
        <source>Do measurements</source>
        <translation type="obsolete">Do measurements</translation>
    </message>
</context>
<context>
    <name>WerkToolBP</name>
    <message>
        <source>Button</source>
        <translation type="unfinished">ปุ่ม</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation type="unfinished">ข้อความฟิลด์</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation type="unfinished">ตรวจกล่อง</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation type="unfinished">กล่องผสม</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation type="unfinished">รายการในกล่อง</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="unfinished">ข้อความ</translation>
    </message>
    <message>
        <source>Link</source>
        <translation type="unfinished">เชื่อมต่อ</translation>
    </message>
    <message>
        <source>PDF Tools</source>
        <translation type="unfinished">เครื่องมือ พีดีเอฟ</translation>
    </message>
    <message>
        <source>Insert PDF Fields</source>
        <translation type="unfinished">แทรก พีดีเอฟฟิลด์</translation>
    </message>
    <message>
        <source>Insert PDF Annotations</source>
        <translation type="unfinished">แทรกคำอธิบายประกอบพีดีเอฟ</translation>
    </message>
</context>
<context>
    <name>ZAuswahl</name>
    <message>
        <source>Select Character:</source>
        <translation type="obsolete">Select Character:</translation>
    </message>
    <message>
        <source>Insert the characters at the cursor in the text</source>
        <translation type="obsolete">Insert the characters at the cursor in the text</translation>
    </message>
    <message>
        <source>Delete the current selection(s).</source>
        <translation type="obsolete">Delete the current selection(s).</translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing.</source>
        <translation type="obsolete">Close this dialog and return to text editing.</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="obsolete">&amp;Insert</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="obsolete">C&amp;lear</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Close</translation>
    </message>
</context>
<context>
    <name>gtFileDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation type="unfinished">Choose the importer to use</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation type="unfinished">อัตโนมัติ</translation>
    </message>
    <message>
        <source>Get text only</source>
        <translation type="obsolete">Get text only</translation>
    </message>
    <message>
        <source>Import text without any formatting</source>
        <translation type="unfinished">ข้อความนำเข้าปราศจากการตั้งค่า</translation>
    </message>
    <message>
        <source>Importer:</source>
        <translation type="unfinished">นำเข้า</translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation type="unfinished">เข้ารหัส:</translation>
    </message>
    <message>
        <source>Import Text Only</source>
        <translation type="unfinished">นำเข้าข้อความอย่างเดียว</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>gtImporterDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation type="unfinished">เลือกใช้กล่องนำเข้า</translation>
    </message>
    <message>
        <source></source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remember association</source>
        <translation type="unfinished">สมาชิกที่เข้าร่วม</translation>
    </message>
    <message>
        <source>Remember the file extension - importer association
and do not ask again to select an importer for
files of this type.</source>
        <translation type="obsolete">Remember the file extension - importer association
and do not ask again to select an importer for
files of this type.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">OK</translation>
    </message>
    <message>
        <source>Remember the file extension - importer association and do not ask again to select an importer for files of this type.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>nftdialog</name>
    <message>
        <source>New From Template</source>
        <translation type="unfinished">สร้างจากต้นแบบ</translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished">ทั้งหมด</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">ชื่อ</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished">ขนาดหน้า</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation type="unfinished">สี</translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="unfinished">รายละเอียด</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation type="unfinished">Usage</translation>
    </message>
    <message>
        <source>Created with</source>
        <translation type="unfinished">สร้างจาก</translation>
    </message>
    <message>
        <source>Author</source>
        <translation type="unfinished">ผู้แต่ง</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation type="unfinished">ย้ายออก</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation type="unfinished">เปิด</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
    <message>
        <source>Downloading Templates</source>
        <translation type="unfinished">Downloading Templates</translation>
    </message>
    <message>
        <source>Installing Templates</source>
        <translation type="unfinished">Installing Templates</translation>
    </message>
    <message>
        <source>Extract the package to the template directory ~/.scribus/templates for the current user or PREFIX/share/scribus/templates for all users in the system.</source>
        <translation type="unfinished">Extract the package to the template directory ~/.scribus/templates for the current user or PREFIX/share/scribus/templates for all users in the system.</translation>
    </message>
    <message>
        <source>Preparing a template</source>
        <translation type="unfinished">Preparing a template</translation>
    </message>
    <message>
        <source>Removing a template</source>
        <translation type="unfinished">Removing a template</translation>
    </message>
    <message>
        <source>Translating template.xml</source>
        <translation type="unfinished">Translating template.xml</translation>
    </message>
    <message>
        <source>Document templates can be found at http://www.scribus.net/ in the Downloads section.</source>
        <translation type="unfinished">Document templates can be found at http://www.scribus.net/ in the Downloads section.</translation>
    </message>
    <message>
        <source>Make sure images and fonts you use can be used freely. If fonts cannot be shared do not collect them when saving as a template.</source>
        <translation type="unfinished">Make sure images and fonts you use can be used freely. If fonts cannot be shared do not collect them when saving as a template.</translation>
    </message>
    <message>
        <source>The template creator should also make sure that the Installing Templates section above applies to their templates as well. This means a user should be able to download a template package and be able to extract them to the template directory and start using them.</source>
        <translation type="unfinished">The template creator should also make sure that the Installing Templates section above applies to their templates as well. This means a user should be able to download a template package and be able to extract them to the template directory and start using them.</translation>
    </message>
    <message>
        <source>Removing a template from the New From Template dialog will only remove the entry from the template.xml, it will not delete the document files. A popup menu with remove is only shown if you have write access to the template.xml file.</source>
        <translation type="unfinished">Removing a template from the New From Template dialog will only remove the entry from the template.xml, it will not delete the document files. A popup menu with remove is only shown if you have write access to the template.xml file.</translation>
    </message>
    <message>
        <source>Copy an existing template.xml to a file called template.lang_COUNTRY.xml (use the same lang code that is present in the qm file for your language), for example template.fi.xml for Finnish language template.xml. The copy must be located in the same directory as the original template.xml so Scribus can load it.</source>
        <translation type="unfinished">Copy an existing template.xml to a file called template.lang_COUNTRY.xml (use the same lang code that is present in the qm file for your language), for example template.fi.xml for Finnish language template.xml. The copy must be located in the same directory as the original template.xml so Scribus can load it.</translation>
    </message>
    <message>
        <source>Date</source>
        <translation type="unfinished">วันที่</translation>
    </message>
</context>
<context>
    <name>satdialog</name>
    <message>
        <source>Save as Template</source>
        <translation type="unfinished">Save as Template</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">ชื่อ</translation>
    </message>
    <message>
        <source>Category</source>
        <translation type="unfinished">แคตตาล็อค</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished">ขนาดหน้า</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation type="unfinished">สี</translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="unfinished">รายละเอียด</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation type="unfinished">การใช้</translation>
    </message>
    <message>
        <source>Author</source>
        <translation type="unfinished">ผู้เขียน</translation>
    </message>
    <message>
        <source>Email</source>
        <translation type="unfinished">อีเมล์</translation>
    </message>
    <message>
        <source>More Details</source>
        <translation type="unfinished">รายละเอียดอื่นๆ</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">ตกลง</translation>
    </message>
    <message>
        <source>Less Details</source>
        <translation type="unfinished">ข้อมูล</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation type="unfinished">เท่ากัน</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation type="unfinished">จดหมาย</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation type="unfinished">พาดหัว</translation>
    </message>
    <message>
        <source>landscape</source>
        <translation type="unfinished">แนวนอน</translation>
    </message>
    <message>
        <source>portrait</source>
        <translation type="unfinished">แนวตั้ง</translation>
    </message>
    <message>
        <source>custom</source>
        <translation type="unfinished">custom</translation>
    </message>
</context>
<context>
    <name>tfDia</name>
    <message>
        <source>Create filter</source>
        <translation type="unfinished">สร้างตัวกรอง</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished">ล้าง</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished">ลบ</translation>
    </message>
    <message>
        <source>Choose a previously saved filter</source>
        <translation type="unfinished">เลือกฟิลเตอร์ก่อนหน้านี้</translation>
    </message>
    <message>
        <source>Give a name to this filter for saving</source>
        <translation type="unfinished">ระบุชื่อฟิลเตอร์เพิ่อบันทึกเก็บ</translation>
    </message>
    <message>
        <source>Give a name for saving</source>
        <translation type="unfinished">ระบุชื่อสำหรับบันทึก</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancel</translation>
    </message>
</context>
<context>
    <name>tfFilter</name>
    <message>
        <source>Disable or enable this filter row</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove this filter row</source>
        <translation type="unfinished">ย้ายแถวฟิลเตอร์</translation>
    </message>
    <message>
        <source>Add a new filter row</source>
        <translation type="unfinished">เพิ่มแถวฟิลเตอร์ใหม่</translation>
    </message>
    <message>
        <source>to</source>
        <translation type="unfinished">ถึง</translation>
    </message>
    <message>
        <source>and</source>
        <translation type="unfinished">และ</translation>
    </message>
    <message>
        <source>remove match</source>
        <translation type="unfinished">remove match</translation>
    </message>
    <message>
        <source>do not remove match</source>
        <translation type="unfinished">ห้ามย้าย แมช</translation>
    </message>
    <message>
        <source>words</source>
        <translation type="unfinished">คำ</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation type="unfinished">ย้าย</translation>
    </message>
    <message>
        <source>Replace</source>
        <translation type="unfinished">แทนที่</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation type="unfinished">ตกลง</translation>
    </message>
    <message>
        <source>Value at the left is a regular expression</source>
        <translation type="unfinished">Value at the left is a regular expression</translation>
    </message>
    <message>
        <source>with</source>
        <translation type="unfinished">กับ</translation>
    </message>
    <message>
        <source>paragraph style</source>
        <translation type="unfinished">รูปแบบพารากราฟ</translation>
    </message>
    <message>
        <source>all instances of</source>
        <translation type="unfinished">all instances of</translation>
    </message>
    <message>
        <source>all paragraphs</source>
        <translation type="unfinished">พารากราฟทั้งหมด</translation>
    </message>
    <message>
        <source>paragraphs starting with</source>
        <translation type="unfinished">เริ่มต้นพารากราฟกับ</translation>
    </message>
    <message>
        <source>paragraphs with less than</source>
        <translation type="unfinished">พารากราฟน้อยกว่า</translation>
    </message>
    <message>
        <source>paragraphs with more than</source>
        <translation type="unfinished">พารากราฟมากกว่า</translation>
    </message>
</context>
</TS>