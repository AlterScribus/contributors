<!DOCTYPE TS><TS>
<context>
    <name></name>
    <message>
        <source>getColorNames() -&gt; list

Returns a list containing the names of all defined colors in the document.
If no document is open, returns a list of the default document colors.
</source>
        <translation>getColorNames() -&gt; lista(new line)
Devolve unha lista que contén os nomes de todas as cores definidas no documento.
Se non hai nengún documento aberto, devolve unha lista das cores do documento padrón.</translation>
    </message>
    <message>
        <source>newDocDialog() -&gt; bool

Displays the &quot;New Document&quot; dialog box. Creates a new document if the user
accepts the settings. Does not create a document if the user presses cancel.
Returns true if a new document was created.
</source>
        <translation>newDocDialog() -&gt; bool

Mostra o diálogo &quot;Documento Novo&quot;. Crea un documento novo se o usuario
acepta a configuración. Non crea un documento se o usuario preme sobre Cancelar.
Devolve verdadeiro se se creou un documento novo.</translation>
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
        <translation type="obsolete">newDoc(tamaño, marxes, orientación, númeroPrimeiraPáxina,
                   unidade, páxinasEnfrentadas, primeiraCaraEsquerda) -&gt; bool

Crea un documento novo e devolve verdadeiro se o puido crear. Os parámetros teñen
o significado seguinte:

    tamaño = Un par (anchura, altura) que descrebe o tamaño do documento. Pode
    usar as constantes pré-definidas chamas PAPER_&lt;tipo_de_papel&gt;, p.ex. PAPER_A4, etc.

    marxes = Catro datos (esquerda, diretia, superior, inferior) que descreben
    as marxes do documento

    orientación = a orientación da páxina - constantes RETRATO, APAISADO

    númeroPrimeiraPáxina = é o número da primeira páxina no documento, que
    se usa para a numeración das páxinas. Ainda que normalmente será 1, resulta útil
    poder usar números máis altos se se crea un documento en varias partes.

    unidade: este valor fixa as unidades de medida usadas polo documento. Use
    unha constante definida para isto de entre UNIT_INCHES, UNIT_MILLIMETERS,
    UNIT_PICAS, UNIT_POINTS.

    páxinasEnfrentadas = FACINGPAGES, NOFACINGPAGES

    primeiraPáxinaEsquerda = FIRSTPAGELEFT, FIRSTPAGERIGHT

Os valores para anchura, altura e as marxes exprésanse na unidade dada
para o documento. As constantes PAPER_* exprésanse en puntos. Se o seu documento
non está en puntos, asegúrese de telo en conta.

exemplo: newDoc(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 1, UNIT_POINTS,
               FACINGPAGES, FIRSTPAGERIGHT)</translation>
    </message>
    <message>
        <source>getFillColor([&quot;name&quot;]) -&gt; string

Returns the name of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getFillColor([&quot;nome&quot;]) -&gt; cadea

Devolve o nome da cor de enchido do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot;, úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>moveObject(dx, dy [, &quot;name&quot;])

Moves the object &quot;name&quot; by dx and dy relative to its current position. The
distances are expressed in the current measurement unit of the document (see
UNIT constants). If &quot;name&quot; is not given the currently selected item is used.
If the object &quot;name&quot; belongs to a group, the whole group is moved.
</source>
        <translation>moveObject(dx, dy [, &quot;nome&quot;])

Move o obxecto &quot;nome&quot; en dx e dy relativos á súa posición actual.
As distancias expesanse na unidade de medida actual do documento
(ver constantes UNIT). Se non se fornece un &quot;nome&quot;, úsase o elemento seleccionado
nese momento. Se o obxecto &quot;nome&quot; pertence a un grupo, móvese todo o grupo.</translation>
    </message>
    <message>
        <source>setRedraw(bool)

Disables page redraw when bool = False, otherwise redrawing is enabled.
This change will persist even after the script exits, so make sure to call
setRedraw(True) in a finally: clause at the top level of your script.
</source>
        <translation>setRedraw(bool)

Desactiva o redeseñado da páxina se bool = False e, se non, permite o redeseñado.
Esta modificación persistirá mesmo logo de sair o guión, de maneira que deberá
asegurarse de chamar setRedraw(True) nunha cláusula finally: no nível superior do guión.</translation>
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
        <translation>createRect(x, y, anchura, altura, [&quot;nome&quot;]) -&gt; cadea

Crea un rectángulo novo na páxina actual e devolve o seu nome.
As coordenadas danse nas unidades de medida actuais do documento
(ver constantes UNIT). &quot;nome&quot; debería ser un identificador único para o
obxecto porque precisará deste nome para facer referencia a ese obxecto
no futuro. Se non se fornece un &quot;nome&quot;, Scribus creará un por vostede.

Pode provocar un NameExistsError se pasar explicitamente un nome que xa exista.</translation>
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
        <translation type="obsolete">newPage(where [,&quot;modelo&quot;])

Crea unha páxina nova. Se &quot;where&quot; é -1, a Páxina nova adiciónaselle ao
documento; se non, a páxina nova insírese antes do &quot;where&quot;. Os números de
páxina cóntanse a partir do 1, sen importar cal sexa o número da primeira páxina
do seu documento. O parámetro opcional &quot;modelo&quot; especifica o nome do
modelo de páxina para a páxina nova.

Pode causar un IndexError se o número de páxina estiver fora de rango</translation>
    </message>
    <message>
        <source>setGradientFill(type, &quot;color1&quot;, shade1, &quot;color2&quot;, shade2, [&quot;name&quot;])

Sets the gradient fill of the object &quot;name&quot; to type. Color descriptions are
the same as for setFillColor() and setFillShade(). See the constants for
available types (FILL_&lt;type&gt;).
</source>
        <translation>setGradientFill(tipo, &quot;cor1&quot;, saturación1, &quot;co2&quot;, saturación2, [&quot;nome&quot;])

Fixa o gradiente de enchido do obxecto &quot;nome&quot; nese tipo. As descricións
de cores son as mesmas que para setFillColor() and setFillShade().
Vexa as constantes para os tipos disponíbeis (FILL_&lt;type&gt;).</translation>
    </message>
    <message>
        <source>getFontSize([&quot;name&quot;]) -&gt; float

Returns the font size in points for the text frame &quot;name&quot;. If this text
frame has some text selected the value assigned to the first character of
the selection is returned.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getFontSize([&quot;nome&quot;]) -&gt; float

Devolve o tamaño da fonte en puntos para a moldura de texto &quot;nome&quot;.
Se esta moldura de texto tiver texto seleccionado, devólvese o valor asignado
ao primeiro carácter da seleccion.
Se non se fornece un &quot;nome&quot;, úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>messagebarText(&quot;string&quot;)

Writes the &quot;string&quot; into the Scribus message bar (status line). The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
</source>
        <translation>messagebarText(&quot;cadea&quot;)

Escrebe a &quot;cadea&quot; na barra de mensaxes de Scribus (liña de estado).
O texto debe estar codificado en UTF8 ou ser unha cadea &apos;unicode&apos; (recomendado).</translation>
    </message>
    <message>
        <source>register_macro_callable(name, callable, accel=&apos;&apos;)

Create a macro called &quot;name&quot; with the existing callable object &quot;callable&quot;.
The passed callable must not require any arguments when called (it may take
optional arguments, but will not be given any).
If provided, the string &quot;accel&quot; will be used to set a keyboard shortcut
for the macro.
If the passed callable is a class, it will be rejected. Functions and bound
methods are quite acceptable, as are instances of classes that provide a
__call__ method with no arguments. There is no problem with registering
a callable more than once, nor with registering multiple bound methods
of a single instance.
</source>
        <translation type="obsolete">Módulo da interface de Python para Scribus

Este módulo e&apos;a interface de Python para Scribus. Fornece funcións para
controlar Scribus e para manipular obxectos da tela. Cada función documéntase
individualmente máis abaixo.

Certas cousas son comúns a toda a interface.

A maioría das funcións operan sobre molduras. As molduras identifícanse polo seu nome,
unha cadea - non son obxectos reais de Python. Moitas funcións levan un
parámetro opcional (non palabra-chave), o nome da moldura.
Moitas excepcións son así mesmo comuns para a maioría das funcións. Estas
non se documentan actualmente no docstring para cada función.
- Moitas funcións provocarán un NoDocOpenError se tenta usalas sen un documento sobre
o que operaren.
- Se non lle pasa o nome dunha moldura a unha función que o requira, a función usará a moldura
seleccionada nese momento, de habela, ou provocará un NoValidObjectError se non dá atopado
nada sobre o que operar.
- Moitas funcións provocarán un WrongFrameTypeError se tenta usalas nun tipo de moldura no que
non teñan sentido. Por exemplo, asignar a cor do texto nunha moldura de imaxes non ten sentido
e provocará esta excepción.
- Os erros que proveñan de chamadas á API de Python subxacente pasaranse sen alteracións.
Como tais, a lista de excepcións fornecida aquí e no seu docstring é incompleta.

Os detalles sobre as excepcións que pode provocar cada función fornécense na
documentación de cada función.</translation>
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
        <translation type="obsolete">newDoc(tamaño, marxes, orientación, númeroPrimeiraPáxina
                   unidade, páxinasEnfrontadas, primeiraPáxinaEsquerda) -&gt; booleano

Crea un documento novo e devolve verdadeiro se o logra. Os parámetros significan o seguinte:

    tamaño = Un par de valores (anchura, altura) que descrebe o tamaño do documento. Pódense
    utilizar constantes pré-definidas chamadas PAPER_&lt;tipo_de_papel&gt;. Por exemplo PAPER_A4, etc.

    marxes = Catro valores (esquerda, direita, superior, inferior) que descreben as marxes do documento

    orientación = a orientación da páxina - constantes PORTRAIR, LANDSCAPE

    númeroPrimeiraPáxina = é o número da primeira páxina do documento que se emprega
    para a numeración das páxinas. Normalmente será 1, mais ás veces é preciso un número máis grande
    se se está a crear un documento en varias partes.

    unidade: este valor indica as unidades de medida utilizadas polo documento. Empregue
    para isto unha constante pré-definida de entre UNIT_INCHES, UNIT_MILLIMETERS,
    UNIT_PICAS, UNIT_POINTS.

    páxinasEnfrontadas = FACINGPAGES, NOFACINGPAGES

    primeiraPáxinaEsquerda = FIRSTPAGELEFT, FIRSTPAGERIGHT

Os valores para a anchura, a altura e as marxes exprésanse na unidade dada
para o documento. As constantes PAPER_* exprésanse en puntos. Se o seu documento
non está en puntos, asegúrase de telo en conta.ine)
(sp)(sp)(sp)(sp)(sp)(sp)(sp)(sp)(sp)(sp)(sp)(sp)(sp)(sp)(sp)(sp)FACINGPAGES, FIRSTPAGERIGHT)(new line)

exemplo: newDoc(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 1, UNIT_POINTS,
                FACINGPAGES, FIRSTPAGERIGHT)</translation>
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
        <translation>newPage(where[.&quot;páxinamaestra&quot;])

Crea unha páxina nova. Se &quot;where&quot; é -1 a Páxina nova adiciónase ao documento.
Se non, a páxina nova insírese antes de &quot;where&quot;. Os números de páxina
cóntanse a partir do 1, sen importar cal sexa o número da primeira páxina do
documento que se mostra. O parámetro opcional &quot;páxinamaestra&quot; indica o nome
da páxina maestra para a nova páxina.

Pode provocar un IndexError se o número da páxina está fora de rango</translation>
    </message>
    <message>
        <source>importSVG(&quot;string&quot;)

The &quot;string&quot; must be a valid filename for a SVG image. The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
</source>
        <translation>importSVG(&quot;cadea&quot;)

A &quot;cadea&quot; debe ser un número de ficheiro válido para unha imaxe SVG.
O texto debe ir codificado en UTF8 ou ser unha cadea &quot;unicode&quot; (o que se recomenda).</translation>
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

The values for width, height and the margins are expressed in the given unit
for the document. PAPER_* constants are expressed in points. If your document
is not in points, make sure to account for this.

example: newDocument(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 7, UNIT_POINTS,
PAGE_4, 3)

May raise ScribusError if is firstPageOrder bigger than allowed by pagesType.
</source>
        <translation type="obsolete">newDocument(tamaño, marxes, orientación, númeroPrimeiraPáxina,
                     unidade, tipoPáxinas, ordePrimeiraPáxina) -&gt; booleano

Crea un documento novo e devolve verdadeiro se o consegue. Os parámetros teñen o
significado seguinte:

tamaño = Un par (anchura, altura) que describe o tamaño do documento. Pode
utilizar constantes predefinidas chamadas PAPER_&lt;tipo_de_papel&gt;, p.ex. PAPER_A4 etc.

marxes = Catro valores (esquerda, dereita, superior, inferior) que describen as marxes
do documento

orientación = a orientación da páxina - constantes PORTRAIT (retrato) e LANDSCAPE (apaisado)

númeroPrimeiraPáxina = é o número da primeira páxina do documento utilizado para
a numeración das páxinas. Ainda que normalmente quererá que sexa 1, resulta útil ter números
máis altos se está a crear un documento en varias partes.

unidade: este valor establece as unidades de medida utilizadas no documento. Utilice
para isto unha constante predefinida de entre UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS,
UNIT_POINTS.

tipoPáxinas = Unha das constantes predefinidas PAGE_n. PAGE_1 é unha única páxina, PAGE_2 é
para documentos con dúas páxinas, PAGE_3 é para trípticos e PAGE_4 é para catro páxinas.

ordePrimeiraPáxina = Cal é a posición da primeira páxina no documento.
Indexada desde 0 (0 = primeira).

Os valores para a anchura, altura e as marxes exprésanse na unidade dada para o documento.
As constantes PAPER_* exprésanse en puntos. Se o seu documento non está en puntos
asegúrese de que o ten en conta.

exemplo: newDocument(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 7, UNIT_POINTS,
PAGE_4, 3)

Pode provocar un Scribuserror se ordePrimeiraPáxina é maior do que permite tipoPáxinas.
</translation>
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
        <source>getColor(&quot;name&quot;) -&gt; tuple

Returns a tuple (C, M, Y, K) containing the four color components of the
color &quot;name&quot; from the current document. If no document is open, returns
the value of the named color from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation>getColor(&quot;nome&quot;) -&gt; valores

Devolve catro valores (C, M, Y, K) que conteñen os catro componentes de cor
da cor &quot;nome&quot; do documento actual. Se non hai nengún documento aberto,
devolve o valor da cor nomeada das cores do documento padrón.

Pode provocar un NotFoundError se non se atopou a cor nomeada.
Pode provocar un ValueError se se especifica un nome de cor non válido.</translation>
    </message>
    <message>
        <source>changeColor(&quot;name&quot;, c, m, y, k)

Changes the color &quot;name&quot; to the specified CMYK value. The color value is
defined via four components c = Cyan, m = Magenta, y = Yellow and k = Black.
Color components should be in the range from 0 to 255.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation>changeColor(&quot;nome&quot;, c, m, y, k)

Muda a cor &quot;nome&quot; ao valor CMYK especificado. O valor da cor defínese mediante
catro componentes c = Cián, m = Maxenta, y = Amarelo e k = Negro.
As componentes das cores deberían estar no rango entre 0 e 255.

Pode provocar un NotFoundError se non se atopou a cor nomeada.
Pode provocar un ValueError se se especifica un nome de cor non válido.</translation>
    </message>
    <message>
        <source>defineColor(&quot;name&quot;, c, m, y, k)

Defines a new color &quot;name&quot;. The color Value is defined via four components:
c = Cyan, m = Magenta, y = Yellow and k = Black. Color components should be in
the range from 0 to 255.

May raise ValueError if an invalid color name is specified.
</source>
        <translation type="obsolete">defineColor(&quot;nome&quot;, c, m, y, k)

Define un novo &quot;nome&quot; de cor. O Valor da cor defínese mediante catro componentes:
c = Cián, m = Maxenta, y = Amarelo e k = Negro.
As componentes das cores deberían estar no rango entre 0 e 255.

Pode provocar un ValueError se se especifica un nome de cor non válido.</translation>
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
        <translation>deleteColor(&quot;nome&quot;,&quot;substituta&quot;)

Limpa o &quot;nome&quot; da cor. Toda aparición da cor substituése pola &quot;substituta&quot;.
Se non se especifica, &quot;substituta&quot; pasa a ser a cor &quot;Nengunha&quot; - transparente.

deleteColor funciona sobre as cores por omisión do documento se non hai
nengún documento aberto. Nese caso, se se especifica &quot;substituta&quot;, esta non ten efecto.

Pode provocar un NotFoundError se non se atopou a cor nomeada.
Pode provocar un ValueError se se especifica un nome de cor non válido.</translation>
    </message>
    <message>
        <source>replaceColor(&quot;name&quot;, &quot;replace&quot;)

Every occurence of the color &quot;name&quot; is replaced by the color &quot;replace&quot;.

May raise NotFoundError if a named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation>replaceColor(&quot;name&quot;, &quot;substituta&quot;)

Toda aparición da cor &quot;nome&quot; substitúese pola cor &quot;substituta&quot;.

Pode provocar un NotFoundError se non se atopou a cor nomeada.
Pode provocar un ValueError se se especifica un nome de cor non válido.</translation>
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
        <translation type="obsolete">fileDialog(&quot;lexenda&quot;, [&quot;filtro&quot;, &quot;nomePorOmisión&quot; ,haspreview, issave]) -&gt; cadea con nome de ficheiro

Mostra un diálogo Abrir Ficheiro coa lexenda &quot;lexenda&quot;. Os ficheiros fíltranse coa
cadea de filtro &quot;filtro&quot;. Tamén se poden fornecer un nome de ficheiro ou un camiño por
omisión; deixe esta cadea baleira cando non a queira usar. O valor True para haspreview
permite un visor de vista previa na caixa de FileSelect. Se o parámetro issave se fixa en True
o diálogo funciona como un diálogo &quot;Salvar Como&quot;; se non, funciona como un &quot;Diálogo
Abrir Ficheiro&quot;. Por omisión, ambos parámetros son False.

O filtro, se se especifica, toma a forma &quot;comentario (*.tipo *.tipo2 ...)&apos;.
Por exemplo &apos;Imaxes (*.png *.xpm *.jpg)&apos;.

Consulte a Documentación QT para QFileDialog para máis detalles sobre os filtros.

Exemplo: fileDialog(&apos;Abrir fonte&apos;, &apos;ficheiros CSV (*.csv)&apos;)
Exemplo: fileDialog(&apos;Salvar informe&apos;, defaultname=&apos;informe.txt&apos;, issave=True)
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
        <translation>messageBox(&quot;lexenda&quot;, &quot;mensaxe&quot;,
    icon=ICON_NONE, button1=BUTTON_OK|BUTTONOPT_DEFAULT,
    button2=BUTTON_NONE, button3=BUTTON_NONE) -&gt; inteiro

Mostra unha caixa de mensaxe co título &quot;lexenda&quot;, a mensaxe &quot;mensaxe&quot; e un icone, &quot;icon&quot;
e até 3 botóns. Por omisión non se usa nengún icone e só se mostra un botón, OK.
Só son precisos os argumentos da lexenda e da mensaxe, ainda que se recomenda moito
indicar un icone e un(s) botón(s) apropiados. O texto da mensaxe pode conter linguaxe de etiquetado
tipo HTML.

Devolve o número do botón que o usuario premeu. Os números dos botóns comezan polo 1.

Para os parámetros do icone e do botón existen constantes pré-definidas cos mesmos nomes que
na Documentación do QT. Son as constantes BUTTON_* e ICON* definidas no módulo. Hai tamén dúas
constantes extra que poden ser binary-ORed con contantes de botón:
    BUTTONOPT_DEFAULT    Ao premer enter prémese este botón.
    BUTTONOPT_ESCAPE    Ao premer escape prémese este botón.

Exemplos de uso:
result = messageBox(&apos;Fallou o guión&apos;,
                    &apos;Este guión só funciona se ten unha moldura de texto seleccionada&apos;,
                    ICON_ERROR)
result = messageBox(&apos;Monos!&apos;, &apos;Algo se foi ao carallo!&apos; &lt;i&gt;Era un mono?&lt;/i&gt;&apos;,
                    ICON_WARNING, BUTTON_YES|BUTTONOPT_DEFAULT
                    BUTTON_NO, BUTTON_IGNORE|BUTTONOPT_ESCAPE)

Constantes de botón e icone definidas:
BUTTON_NONE, BUTTON_ABORT, BUTTON_CANCEL, BUTTON_IGNORE, BUTTON_NO,
BUTTON_NOALL, BUTTON_OK, BUTTON_RETRY, BUTTON_YES, BUTTON_YESALL,
ICON_NONE, ICON_INFORMATION, ICON_WARNING, ICON_CRITICAL.</translation>
    </message>
    <message>
        <source>valueDialog(caption, message [,defaultvalue]) -&gt; string

Shows the common &apos;Ask for string&apos; dialog and returns its value as a string
Parameters: window title, text in the window and optional &apos;default&apos; value.

Example: valueDialog(&apos;title&apos;, &apos;text in the window&apos;, &apos;optional&apos;)
</source>
        <translation>valueDialog(lexenda, mensaxe [,valorporomisión]) -&gt; cadea

Mostra o diálogo común &apos;Pedir unha cadea&apos; e devolve o seu valor como cadea.
Parámetros: título da xanela, texto na xanela e valor &apos;por omisión&apos; opcional.

Exemplo: valueDialog(&apos;título&apos;, &apos;texto na xanela&apos;, &apos;opcional&apos;)</translation>
    </message>
    <message>
        <source>closeDoc()

Closes the current document without prompting to save.

May throw NoDocOpenError if there is no document to close
</source>
        <translation>closeDoc()

Fecha o documento actual sen pedir se se ha de gardar.

Pode mandar un NoDocOpenError se non hai un documento que fechar</translation>
    </message>
    <message>
        <source>haveDoc() -&gt; bool

Returns true if there is a document open.
</source>
        <translation>haveDoc() -&gt; bool

Devolve verdadeiro se hai un documento aberto.</translation>
    </message>
    <message>
        <source>openDoc(&quot;name&quot;)

Opens the document &quot;name&quot;.

May raise ScribusError if the document could not be opened.
</source>
        <translation>openDoc(&quot;nome)

Abre o documento &quot;nome&quot;.

Pode provocar un ScribusError se non se puido abrir o documento.</translation>
    </message>
    <message>
        <source>saveDoc()

Saves the current document with its current name, returns true if successful.
If the document has not already been saved, this may bring up an interactive
save file dialog.

If the save fails, there is currently no way to tell.
</source>
        <translation>saveDoc()

Salva o documento actual co seu nome actual; devolve verdadeiro se se logrou.
Se o documento ainda non se salvou, pode activar un diálogo interactivo
para gardalo.

Se falla o gardado non hai maneira de sabelo de momento.</translation>
    </message>
    <message>
        <source>saveDocAs(&quot;name&quot;)

Saves the current document under the new name &quot;name&quot; (which may be a full or
relative path).

May raise ScribusError if the save fails.
</source>
        <translation>saveDocAs(&quot;nome&quot;)

Salva o documento actual co novo nome &quot;nome&quot; (que pode ser un
camiño completo ou relativo).

Pode provocar un ScribusError se non se puido gardar.</translation>
    </message>
    <message>
        <source>saveDocAs(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -&gt; bool

Sets the document information. &quot;Author&quot;, &quot;Info&quot;, &quot;Description&quot; are
strings.
</source>
        <translation type="obsolete">saveDocAs(&quot;autor&quot;, &quot;información&quot;, &quot;descrición&quot;) -&gt; bool

Consigna a información do documento. &quot;Autor&quot;, &quot;Información&quot;, &quot;Descrición&quot;
son cadeas.</translation>
    </message>
    <message>
        <source>setMargins(lr, rr, tr, br)

Sets the margins of the document, Left(lr), Right(rr), Top(tr) and Bottom(br)
margins are given in the measurement units of the document - see UNIT_&lt;type&gt;
constants.
</source>
        <translation>setMargins(lr, rr, tr, br)

Fixa as marxes do documento, Esquerda(lr), Dereita(rr), Superior(tr) e Inferior(br)
As marxes danse nas unidades de medida do documento - vexa as
constantes UNIT_&lt;tipo&gt;.</translation>
    </message>
    <message>
        <source>setUnit(type)

Changes the measurement unit of the document. Possible values for &quot;unit&quot; are
defined as constants UNIT_&lt;type&gt;.

May raise ValueError if an invalid unit is passed.
</source>
        <translation>setUnit(tipo)

Muda as unidades de medida do documento. Os valores posíbeis para &quot;unidade&quot;
son definidas como constantes UNIT_&lt;tipo&gt;.</translation>
    </message>
    <message>
        <source>getUnit() -&gt; integer (Scribus unit constant)

Returns the measurement units of the document. The returned value will be one
of the UNIT_* constants:
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.
</source>
        <translation>getUnit() -&gt; inteiro (Constante da unidade de Scribus)

Devolve as unidades de medida do documento. O valor de retorno será unha
das constantes UNIT_*:
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.</translation>
    </message>
    <message>
        <source>loadStylesFromFile(&quot;filename&quot;)

Loads paragraph styles from the Scribus document at &quot;filename&quot; into the
current document.
</source>
        <translation>loadStylesFromFile(&quot;nomedeficheiro&quot;)

Carrega estilos de parágrafo desde o documento de Scribus en &quot;nomedodocumento&quot;
no documento actual.</translation>
    </message>
    <message>
        <source>setDocType(facingPages, firstPageLeft)

Sets the document type. To get facing pages set the first parameter to
FACINGPAGES, to switch facingPages off use NOFACINGPAGES instead.  If you want
to be the first page a left side set the second parameter to FIRSTPAGELEFT, for
a right page use FIRSTPAGERIGHT.
</source>
        <translation>setDocType(páxinasEnfrentadas, primeiraPáxinaEsquerda)

Indica o tipo de documento. Para obter páxinas enfrendas, fixe o primeiro parámetro en
FACINGPAGES; para non as ter use NOFACINGPAGES. Se quer ter a primeira páxina
á esquerda, fixe o segundo parámetro en FIRSTPAGELEFT; para que sexa a esquerda
use FIRSTPAGERIGHT.</translation>
    </message>
    <message>
        <source>getLineColor([&quot;name&quot;]) -&gt; string

Returns the name of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getLineColor([&quot;nome&quot;[) -&gt; cadea

Devolve o nome da cor da liña do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot;, úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getLineWidth([&quot;name&quot;]) -&gt; integer

Returns the line width of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation>getLineWidth([&quot;nome&quot;[) -&gt;inteiro

Devolve a anchura da liña do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getLineShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getLineShade([&quot;nome&quot;[) -&gt;inteiro

Devolve o valor de saturación da liña do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getLineJoin([&quot;name&quot;]) -&gt; integer (see contants)

Returns the line join style of the object &quot;name&quot;. If &quot;name&quot; is not given
the currently selected item is used.  The join types are:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND
</source>
        <translation>getLineJoin([&quot;nome&quot;[) -&gt;inteiro (ver as constantes)

Devolve o estilo da xunta do obxecto &quot;nome&quot;. Se non se fornece un
&quot;nome&quot; úsase o elemento seleccionado nese momento. Os tipos de bordes son:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND</translation>
    </message>
    <message>
        <source>getLineEnd([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line cap style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. The cap types are:
CAP_FLAT, CAP_ROUND, CAP_SQUARE
</source>
        <translation>getLineEnd([&quot;nome&quot;[) -&gt;inteiro (ver as constantes)

Devolve o estilo de terminación do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
Os estilos de terminación son:
CAP_FLAT, CAP_ROUND, CAP_SQUARE</translation>
    </message>
    <message>
        <source>getLineStyle([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. Line style constants are:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID
</source>
        <translation>getLineStyle([&quot;nome&quot;[) -&gt;inteiro (ver as constantes)

Devolve o estilo de liña do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
As constantes de estilo de liña son:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID</translation>
    </message>
    <message>
        <source>getFillShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getFillShade([&quot;nome&quot;[) -&gt;inteiro

Devolve o valor de saturación da cor de enchido do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getCornerRadius([&quot;name&quot;]) -&gt; integer

Returns the corner radius of the object &quot;name&quot;. The radius is
expressed in points. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="obsolete">getCornerRadius([&quot;nome&quot;[) -&gt;inteiro

Devolve o radio dos vértices do obxecto &quot;nome&quot;. O radio exprésase en puntos.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getImageScale([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple containing the scaling values of the image frame
&quot;name&quot;.  If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getLineShade([&quot;nome&quot;[) -&gt;(x,y)

Devolve un par (x, y) que contén os valores de ampliación da moldura de imaxe
&quot;nome&quot;. Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getImageName([&quot;name&quot;]) -&gt; string

Returns the filename for the image in the image frame. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>getImageName([&quot;nome&quot;[) -&gt;cadea

Devolve o nome do ficheiro da imaxe que está na moldura de imaxe.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getPosition([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple with the position of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
The position is expressed in the actual measurement unit of the document
- see UNIT_&lt;type&gt; for reference.
</source>
        <translation type="obsolete">getPosition([&quot;nome&quot;[) -&gt;inteiro

Devolve un par (x, y) coa posición do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
A posición exprésase na unidade de medida real do documento
- ver UNIT_&lt;tipo&gt; para máis referencias.</translation>
    </message>
    <message>
        <source>getSize([&quot;name&quot;]) -&gt; (width,height)

Returns a (width, height) tuple with the size of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. The size is
expressed in the current measurement unit of the document - see UNIT_&lt;type&gt;
for reference.
</source>
        <translation>getSize([&quot;nome&quot;[) -&gt;(anchura,altura)

Devolve un par (anchura, altura) co tamaño do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
O tamaño exprésase na unidade de medida real do documento
- ver UNIT_&lt;tipo&gt; para máis referencias.</translation>
    </message>
    <message>
        <source>getRotation([&quot;name&quot;]) -&gt; integer

Returns the rotation of the object &quot;name&quot;. The value is expressed in degrees,
and clockwise is positive. If &quot;name&quot; is not given the currently selected item
is used.
</source>
        <translation>getRotation([&quot;nome&quot;[) -&gt;inteiro

Devolve o valor da rotación do obxecto &quot;nome&quot;. O valor exprésase en graus,
e o sentido das agulLas do reloxio é positivo.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getAllObjects() -&gt; list

Returns a list containing the names of all objects on the current page.
</source>
        <translation>getAllObjects() -&gt; lista

Devolve unha lista que contén os nomes de todos os obxectos da páxina actual.</translation>
    </message>
    <message>
        <source>moveObjectAbs(x, y [, &quot;name&quot;])

Moves the object &quot;name&quot; to a new location. The coordinates are expressed in
the current measurement unit of the document (see UNIT constants).  If &quot;name&quot;
is not given the currently selected item is used.  If the object &quot;name&quot;
belongs to a group, the whole group is moved.
</source>
        <translation>moveObjectAbs(x, y [, &quot;nome&quot;])

Move o obxecto &quot;nome&quot; a unha localización nova. As coordenadas exprésanse na
unidade de medida actual do documento (ver as constantes UNIT).
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
Se o obxecto &quot;nome&quot; pertence a un grupo, móvese o grupo inteiro.</translation>
    </message>
    <message>
        <source>rotateObject(rot [, &quot;name&quot;])

Rotates the object &quot;name&quot; by &quot;rot&quot; degrees relatively. The object is
rotated by the vertex that is currently selected as the rotation point - by
default, the top left vertext at zero rotation. Positive values mean counter
clockwise rotation when the default rotation point is used. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>rotateObject(rot[, &quot;nome&quot;])

Rota o obxecto &quot;nome&quot; en &quot;rot&quot; graus relativamente. O obxecto rótase
co vértice actualmente seleccionado como punto de rotación - por omisión
o vértice superior esquerdo con rotación cero. Os valores positivos significan
rotación anti-reloxio cando se usa o punto de rotación por omisión.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>rotateObjectAbs(rot [, &quot;name&quot;])

Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positive values
mean counter clockwise rotation. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="obsolete">rotateObjectAbs(rot [, &quot;nome&quot;])

Fixa a rotación do obxecto &quot;nome&quot; en &quot;rot&quot;. Os valores positivos
significan rotación anti-reloxio. 
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>sizeObject(width, height [, &quot;name&quot;])

Resizes the object &quot;name&quot; to the given width and height. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation>sizeObject(anchura, altura[, &quot;nome&quot;])

Modifica o tamaño do obxecto &quot;nome&quot; para a anchura e altura dadas.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getSelectedObject([nr]) -&gt; string

Returns the name of the selected object. &quot;nr&quot; if given indicates the number
of the selected object, e.g. 0 means the first selected object, 1 means the
second selected Object and so on.
</source>
        <translation>getSelectedObject([nr]) -&gt; cadea

Devolve o nome do obxecto seleccionado. &quot;nr&quot;, de se fornecer, indica o número
de obxectos seleccionados; p.ex. 0 significa o primeiro obxecto seleccionado,
1 significa o segundo Obxecto seleccionado, e así.</translation>
    </message>
    <message>
        <source>selectionCount() -&gt; integer

Returns the number of selected objects.
</source>
        <translation>selectionCount() -&gt; inteiro

Devolve o número de obxectos seleccionados.</translation>
    </message>
    <message>
        <source>selectObject(&quot;name&quot;)

Selects the object with the given &quot;name&quot;.
</source>
        <translation>selectObject(&quot;nome&quot;)

Selecciona o obxecto co &quot;nome&quot; dado.</translation>
    </message>
    <message>
        <source>deselectAll()

Deselects all objects in the whole document.
</source>
        <translation>deselectAll()

De-selecciona todos os obxectos do documento.</translation>
    </message>
    <message>
        <source>groupObjects(list)

Groups the objects named in &quot;list&quot; together. &quot;list&quot; must contain the names
of the objects to be grouped. If &quot;list&quot; is not given the currently selected
items are used.
</source>
        <translation>groupObjects(lista)

Agrupa xuntas os obxectos enunciados na &quot;lista&quot;. &quot;lista&quot; debe conter os nomes
dos obxectos que se han de agrupar. 
Se non se fornece unha &quot;lista&quot; úsanse os elementos seleccionados nese momento.</translation>
    </message>
    <message>
        <source>unGroupObjects(&quot;name&quot;)

Destructs the group the object &quot;name&quot; belongs to.If &quot;name&quot; is not given the currently selected item is used.</source>
        <translation>unGroupObjects(&quot;name&quot;)

Destrúe o grupo ao que pertence o obecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
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
        <translation>scaleGroup(factor [, &quot;nome&quot;})

Escala o grupo ao que pertence o obxecto &quot;nome&quot;. Os valores maiores de 1 aumentan
o grupo; os valores menores de 1 reducen o tamaño do grupo. Por exemplo, un valor
de 0.5 reduce o grupo ao 50% do seu tamaño orixinal, un valor de 1.5 aumenta o tamaño
do grupo a un 150% do seu tamaño orixinal. O valor de &quot;factor&quot; debe ser maior de 0.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un ValueError se se lle pasa un factor de escala non válido.</translation>
    </message>
    <message>
        <source>loadImage(&quot;filename&quot; [, &quot;name&quot;])

Loads the picture &quot;picture&quot; into the image frame &quot;name&quot;. If &quot;name&quot; is
not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation>loadImage(&quot;nomedeficheiro&quot; [, &quot;nome&quot;])

Carrega a imaxe &quot;imaxe&quot; na moldura de imaxe &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un WrongFrameTypeError se a moldura de destino non é unha moldura de imaxe</translation>
    </message>
    <message>
        <source>scaleImage(x, y [, &quot;name&quot;])

Sets the scaling factors of the picture in the image frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. A number of 1
means 100 %.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation>scaleImaxe(x, y [, &quot;nome&quot;])

Fixa os factores de escala para a imaxe da moldura de imaxe &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
O número 1 indica 100%.

Pode provocar un WrongFrameTypeError se a moldura de destino non é unha moldura de imaxe</translation>
    </message>
    <message>
        <source>lockObject([&quot;name&quot;]) -&gt; bool

Locks the object &quot;name&quot; if it&apos;s unlocked or unlock it if it&apos;s locked.
If &quot;name&quot; is not given the currently selected item is used. Returns true
if locked.
</source>
        <translation>lockObject([&quot;nome&quot;]) -&gt; bool

Bloquea o obxecto &quot;nome&quot; se está desbloqueado ou desbloquéao se está bloqueado.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
Devolve verdadeiro se está bloqueado.</translation>
    </message>
    <message>
        <source>isLocked([&quot;name&quot;]) -&gt; bool

Returns true if is the object &quot;name&quot; locked.  If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation>isLocked([&quot;nome&quot;]) -&gt; bool

Devolve verdadeiro se o obxecto &quot;nome&quot; está bloqueado.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getFontNames() -&gt; list

Returns a list with the names of all available fonts.
</source>
        <translation>getFontNames() -&gt; list

Devolve unha lista cos nomes das fontes disponíbeis.</translation>
    </message>
    <message>
        <source>getXFontNames() -&gt; list of tuples

Returns a larger font info. It&apos;s a list of the tuples with:
[ (Scribus name, Family, Real name, subset (1|0), embed PS (1|0), font file), (...), ... ]
</source>
        <translation>getXFontNames() -&gt; lista de valores

Devolve información ampliada sobre a fonte. É unha lista de valores con:
[ (Nome Scribus, Familia, Nome real, subgrupo (1|0), embed PS (1|0), ficheiro da fonte), (...), ...]</translation>
    </message>
    <message>
        <source>rendeFont(&quot;name&quot;, &quot;filename&quot;, &quot;sample&quot;, size) -&gt; bool

Creates an image preview of font &quot;name&quot; with given text &quot;sample&quot; and size.
Image is saved into &quot;filename&quot;. Returns true when success.

May raise NotFoundError if the specified font can&apos;t be found.
May raise ValueError if an empty sample or filename is passed.
</source>
        <translation type="obsolete">rendeFont(&quot;nome&quot;,&quot;nomedoficheiro&quot;, &quot;mostra&quot;, tamaño) -&gt; bool

Crea unha ante-visión da fonte &quot;nome&quot; co texto dado &quot;mostra&quot; e o tamaño.
A imaxe sálvase en &quot;nomedeficheiro&quot;. Devolve verdadeiro se se garda.

Pode provocar un NotFoundError se non se atopa a fonte especificada.
Pode provocar un ValueError se se lle pasan unha mostra ou nome de ficheiros baleiros.</translation>
    </message>
    <message>
        <source>getLayers() -&gt; list

Returns a list with the names of all defined layers.
</source>
        <translation>getLayers() -&gt; lista

Devolve unha lista cos nomes das capas definidas.</translation>
    </message>
    <message>
        <source>setActiveLayer(&quot;name&quot;)

Sets the active layer to the layer named &quot;name&quot;.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>secActiveLayer(&quot;nome&quot;)

Fixa a capa activa na capa de nome &quot;nome&quot;.

Pode provocar un NotFoundError se non se atopa a capa.
Pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>getActiveLayer() -&gt; string

Returns the name of the current active layer.
</source>
        <translation>getActiveLayer() -&gt; string

Devolve o nome da capa activa actual.</translation>
    </message>
    <message>
        <source>sentToLayer(&quot;layer&quot; [, &quot;name&quot;])

Sends the object &quot;name&quot; to the layer &quot;layer&quot;. The layer must exist.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>sentToLayer(&quot;capa&quot;[ &quot;nome&quot;])

Envía o obxecto &quot;nome&quot; para a capa &quot;capa&quot;. A capa debe existir.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un NotFoundError se non se atopa a capa.
Pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>setLayerVisible(&quot;layer&quot;, visible)

Sets the layer &quot;layer&quot; to be visible or not. If is the visible set to false
the layer is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>setLayerVisible(&quot;capa&quot;, visible)

Fixa a capa &quot;capa&quot; como visíbel ou non. Se visíbel está fixado como false
a capa é invisíbel.

Pode provocar un NotFoundError se non se atopa a capa.
Pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>setLayerPrintable(&quot;layer&quot;, printable)

Sets the layer &quot;layer&quot; to be printable or not. If is the printable set to
false the layer won&apos;t be printed.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>setLayerPrintable(&quot;capa&quot;, printable)

Fixa a capa &quot;capa&quot; como imprimíbel ou non. Se imprimíbel está fixado como false
a capa non poderá imprimirse.

Pode provocar un NotFoundError se non se atopa a capa.
Pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns wether the Layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="obsolete">isLayerVisible(&quot;capa&quot;) -&gt; bool

Devolve se a Capa &quot;capa&quot; é visíbel ou non; un valor True significa
que a capa &quot;capa&quot; é visíbel, un valor False significa que a capa
&quot;capa&quot; é invisíbel.

Pode provocar un NotFoundError se non se atopa a capa.
Pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns wether the layer &quot;layer&quot; is printable or not, a value of True means
that the layer &quot;layer&quot; can be printed, a value of False means that printing
the layer &quot;layer&quot; is disabled.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="obsolete">isLayerPrintable(&quot;capa&quot;) -&gt; bool

Devolve se a Capa &quot;capa&quot; é imprimíbel ou non; un valor True significa
que a capa &quot;capa&quot; é imprimíbel un valor False significa que non se permite imprimir
a capa &quot;capa&quot;.

Pode provocar un NotFoundError se non se atopa a capa.
Pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>deleteLayer(&quot;layer&quot;)

Deletes the layer with the name &quot;layer&quot;. Nothing happens if the layer doesn&apos;t
exists or if it&apos;s the only layer in the document.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>deleteLayer(&quot;layer&quot;)

Eliminar a capa de nome &quot;capa&quot;. Non acontece nada se a capa non existe
ou se é a única capa do documento.
Pode provocar un NotFoundError se non se atopa a capa.
Pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>createLayer(layer)

Creates a new layer with the name &quot;name&quot;.

May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>createLayer(capa)

Crea unha capa nova co nome &quot;nome&quot;.
Pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>getGuiLanguage() -&gt; string

Returns a string with the -lang value.
</source>
        <translation>getGuiLanguage() -&gt; string

Devolve unha cadea co valor -lang.</translation>
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
        <translation>createEllipse(x, y, anchura, altura, [&quot;nome&quot;]) -&gt; cadea

Crea unha elipse nova na páxina actual e devolve o seu nome.
As coordenadas fornécense nas unidades de medida do documento
(ver constantes UNIT). &quot;nome&quot; debería ser un identificador único para o obxecto
porque precisará deste nome para posteriores referencias a ese obxecto.
Se non se fornece un &quot;nome&quot; Scribus creará un por vostede.

Pode provocar un NameExistsError se pasa explicitamente un nome que xa se está a usar.</translation>
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
        <translation>createImage(x, y, anchura, altura, [&quot;nome&quot;]) -&gt; cadea

Crea unha molura de imaxe nova na páxina actual e devolve o seu nome.
As coordenadas fornécense nas unidades de medida do documento
(ver constantes UNIT). &quot;nome&quot; debería ser un identificador único para o obxecto
porque precisará deste nome para posteriores referencias a ese obxecto.
Se non se fornece un &quot;nome&quot; Scribus creará un por vostede.

Pode provocar un NameExistsError se pasa explicitamente un nome que xa se está a usar.</translation>
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
        <translation>createText(x, y, anchura, altura, [&quot;nome&quot;]) -&gt; cadea

Crea unha moldura de texto nova na páxina actual e devolve o seu nome.
As coordenadas fornécense nas unidades de medida do documento
(ver constantes UNIT). &quot;nome&quot; debería ser un identificador único para o obxecto
porque precisará deste nome para posteriores referencias a ese obxecto.
Se non se fornece un &quot;nome&quot; Scribus creará un por vostede.

Pode provocar un NameExistsError se pasa explicitamente un nome que xa se está a usar.</translation>
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
        <translation>createLine(x1, y1, x2, y2, [&quot;nome&quot;]) -&gt; cadea

Crea unha liña nova desde o punto(x1, y1) ao punto(x2, y2) e devolve o seu nome.
As coordenadas fornécense nas unidades de medida do documento
(ver constantes UNIT). &quot;nome&quot; debería ser un identificador único para o obxecto
porque precisará deste nome para posteriores referencias a ese obxecto.
Se non se fornece un &quot;nome&quot; Scribus creará un por vostede.

Pode provocar un NameExistsError se pasa explicitamente un nome que xa se está a usar.</translation>
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
        <translation>createPolyLine(lista, [&quot;nome&quot;]) -&gt; cadea

Crea unha poli-liña nova e devolve o seu nome. Os puntos da poli-liña
armacénanse na lista &quot;lista&quot; na orde seguinte: [x1, y1, x2, y2...xn, yn].
As coordenadas fornécense nas unidades de medida do documento
(ver constantes UNIT). &quot;nome&quot; debería ser un identificador único para o obxecto
porque precisará deste nome para posteriores referencias a ese obxecto.
Se non se fornece un &quot;nome&quot; Scribus creará un por vostede.

Pode provocar un NameExistsError se pasa explicitamente un nome que xa se está a usar.
Pode provocar un ValueError se se lle pasa un número insuficiente de puntos ou se
o número de valores que se lle pasan non se agrupan en puntos sen sobrantes.</translation>
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
        <translation>createPolyLigon(lista, [&quot;nome&quot;]) -&gt; cadea

Crea un polígono novo e devolve o seu nome. Os puntos do polígono
armacénanse na lista &quot;lista&quot; na orde seguinte: [x1, y1, x2, y2...xn. yn].
Requírense polo menos tres puntos. Non hai necesidade de repetir o
primeiro para fechar o polígono. O polígono féchase automaticamente
conectando o primeiro e derradeiro puntos.
As coordenadas fornécense nas unidades de medida do documento
(ver constantes UNIT). &quot;nome&quot; debería ser un identificador único para o obxecto
porque precisará deste nome para posteriores referencias a ese obxecto.
Se non se fornece un &quot;nome&quot; Scribus creará un por vostede.

Pode provocar un NameExistsError se pasa explicitamente un nome que xa se está a usar.
Pode provocar un ValueError se se lle pasa un número insuficiente de puntos ou se
o número de valores que se lle pasan non se agrupan en puntos sen sobrantes.</translation>
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
        <translation>createBezierLine(lista, [&quot;nome&quot;]) -&gt; cadea

Crea unha curva de Bézier nova e devolve o seu nome. Os puntos da curva de Bézier
armacénanse na lista &quot;lista&quot; na orde seguinte: [x1, y1, kx1, ky1, x2, y2, kx2, ky2...xn. yn, kxn. kyn].
Na lista de puntos, x e y significan as coordenadas x e y do punto e kx e ky significan
o punto de control da curva. As coordenadas fornécense nas unidades de medida do documento
(ver constantes UNIT). &quot;nome&quot; debería ser un identificador único para o obxecto
porque precisará deste nome para posteriores referencias a ese obxecto.
Se non se fornece un &quot;nome&quot; Scribus creará un por vostede.

Pode provocar un NameExistsError se pasa explicitamente un nome que xa se está a usar.
Pode provocar un ValueError se se lle pasa un número insuficiente de puntos ou se
o número de valores que se lle pasan non se agrupan en puntos sen sobrantes.</translation>
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
        <translation>createTrazoDeTexto(x, y, &quot;caixadetexto&quot;, &quot;curvadeBézier&quot;, [&quot;nome&quot;]) -&gt; cadea

Crea un TrazoDeTexto novo unindo os dous obxectos &quot;caixadetexto&quot; e
&quot;curvadeBézier&quot; e devolve o seu nome. 
As coordenadas fornécense nas unidades de medida do documento
(ver constantes UNIT). &quot;nome&quot; debería ser un identificador único para o obxecto
porque precisará deste nome para posteriores referencias a ese obxecto.
Se non se fornece un &quot;nome&quot; Scribus creará un por vostede.

Pode provocar un NameExistsError se pasa explicitamente un nome que xa se está a usar.
Pode provocar un NotFoundError se un ou os dous obxectos de base nomeados non existe.</translation>
    </message>
    <message>
        <source>deleteObject([&quot;name&quot;])

Deletes the item with the name &quot;name&quot;. If &quot;name&quot; is not given the currently
selected item is deleted.
</source>
        <translation>newPage(where [,&quot;modelo&quot;])

Crea unha páxina nova. Se &quot;where&quot; é -1, a Páxina nova adiciónaselle ao
documento; se non, a páxina nova insírese antes do &quot;where&quot;. Os números de
páxina cóntanse a partir do 1, sen importar cal sexa o número da primeir páxina
do seu documento. O parámetro opcional &quot;modelo&quot; especifica o nome do
modelo de páxina para a páxina nova.

Pode causar un IndexError se o número de páxina está fora de rango.</translation>
    </message>
    <message>
        <source>textFlowsAroundFrame(&quot;name&quot; [, state])

Enables/disables &quot;Text Flows Around Frame&quot; feature for object &quot;name&quot;.
Called with parameters string name and optional boolean &quot;state&quot;. If &quot;state&quot;
is not passed, text flow is toggled.
</source>
        <translation>textFlowsAroundFrame(&quot;name&quot; [, estado])

Habilita/Deshabilita a función &quot;O Texto Flúe Arredor da Moldura&quot; para o obxecto &quot;nome.
Chámase cos parámetros cadea nome e un &quot;estado&quot; booleano opcional&quot;.
Se non se lle pasa un &quot;estado&quot;, múdase o fluxo de texto.</translation>
    </message>
    <message>
        <source>objectExists([&quot;name&quot;]) -&gt; bool

Test if an object with specified name really exists in the document.
The optional parameter is the object name. When no object name is given,
returns True if there is something selected.
</source>
        <translation>objectExists([&quot;nome&quot;]) -&gt; bool

Comproba se existe un obxecto co nome especificado no documento.
O parámetro opcional é o nome do obxecto. Se non se lle fornece o nome dun
obxecto devolve Verdadeiro se hai algo seleccionado.</translation>
    </message>
    <message>
        <source>setStyle(&quot;style&quot; [, &quot;name&quot;])

Apply the named &quot;style&quot; to the object named &quot;name&quot;. If is no object name
given, it&apos;s applied on the selected object.
</source>
        <translation>setStyle(&quot;estilo&quot; [, &quot;nome&quot;])

Aplica o &quot;estilo&quot; nomeado ao obxecto chamado &quot;nome&quot;. Se non se lle fornece
un nome de obxecto aplícase ao obxecto seleccionado.</translation>
    </message>
    <message>
        <source>getAllStyles() -&gt; list

Return a list of the names of all paragraph styles in the current document.
</source>
        <translation>getAllStyles() -&gt; lista

Devolve unha lista dos nomes de todos os estilos de parágrafo do documento actual.</translation>
    </message>
    <message>
        <source>currentPage() -&gt; integer

Returns the number of the current working page. Page numbers are counted from 1
upwards, no matter what the displayed first page number of your document is.
</source>
        <translation>currentPage() -&gt; inteiro

Devolve o núemro da páxina de traballo actual. Os números de páxina cóntanse desde o 1,
sen importar cal sexa o número que se mostra na primeira páxina do seu documento.</translation>
    </message>
    <message>
        <source>redrawAll()

Redraws all pages.
</source>
        <translation>redrawAll()

Redeseña todas as páxinas.</translation>
    </message>
    <message>
        <source>savePageAsEPS(&quot;name&quot;)

Saves the current page as an EPS to the file &quot;name&quot;.

May raise ScribusError if the save failed.
</source>
        <translation>savePageAsEPS(&quot;nome&quot;)

Salva a páxina actual como un EPS no ficheiro &quot;nome&quot;.

Pode provocar un ScribusError se non se pode gravar.</translation>
    </message>
    <message>
        <source>deletePage(nr)

Deletes the given page. Does nothing if the document contains only one page.
Page numbers are counted from 1 upwards, no matter what the displayed first
page number is.

May raise IndexError if the page number is out of range
</source>
        <translation>deletePage(nr)

Elimina a páxina dada. Non fai nada se o documento só contén unha páxina.
Os números de páxina cóntanse a partir do 1, sen importar cal é o número
que se mostra na primeira páxina.

Pode provocar un IndexError se o número de páxina está fora de rango</translation>
    </message>
    <message>
        <source>gotoPage(nr)

Moves to the page &quot;nr&quot; (that is, makes the current page &quot;nr&quot;). Note that
gotoPage doesn&apos;t (curently) change the page the user&apos;s view is displaying, it
just sets the page that script commands will operates on.

May raise IndexError if the page number is out of range.
</source>
        <translation>gotoPage(nr)

Móvese a páxina &quot;nr&quot; (ou sexa, fai que &quot;nr&quot; sexa a páxina actual). Obsérvese que
gotoPage non cambia (actualmente) a páxina que se lle mostra ao usuario,
simplemente designa a páxina sobre a que operarán os comandos do guión.

Pode provocar un IndexError se o número de páxina está fora do rango.</translation>
    </message>
    <message>
        <source>pageCount() -&gt; integer

Returns the number of pages in the document.
</source>
        <translation>pageCount() -&gt; inteiro

Devolve o número de páxinas do documento.</translation>
    </message>
    <message>
        <source>getHGuides() -&gt; list

Returns a list containing positions of the horizontal guides. Values are in the
document&apos;s current units - see UNIT_&lt;type&gt; constants.
</source>
        <translation>getHGuides() -&gt; lista

Devolve unha lista coas posicións das guías horizontais. Os valores están
nas unidades actuais do documento - ver as constantes UNIT_&lt;tipo&gt;.</translation>
    </message>
    <message>
        <source>setHGuides(list)

Sets horizontal guides. Input parameter must be a list of guide positions
measured in the current document units - see UNIT_&lt;type&gt; constants.

Example: setHGuides(getHGuides() + [200.0, 210.0] # add new guides without any lost
         setHGuides([90,250]) # replace current guides entirely
</source>
        <translation>setHGuides() -&gt; lista

Fixa as guías horizontais. O parámetro de entrada debe ser unha lista de posicións de guías
medidas nas nidades do documento actual - ver as constantes UNIT_&lt;tipo&gt;

Exemplo: setHGuides(getHGuides() + [200.0, 210.0] # adicionar guías novas sen perder nengunha
         setHGuides([90,250]) # substituir completamente as guías actuais</translation>
    </message>
    <message>
        <source>getVGuides()

See getHGuides.
</source>
        <translation>getVGuides() -&gt; lista

ver getHGuides.</translation>
    </message>
    <message>
        <source>setVGuides()

See setHGuides.
</source>
        <translation>Ver setHGuides.</translation>
    </message>
    <message>
        <source>getPageSize() -&gt; tuple

Returns a tuple with page dimensions measured in the document&apos;s current units.
See UNIT_&lt;type&gt; constants and getPageMargins()
</source>
        <translation>getPageSize() -&gt; valores

Devolve uns valores coas dimensións da páxina medidas nas unidades actuais do documento.
Ver as constantes UNIT_&lt;tipo&gt; e getPageMargins()</translation>
    </message>
    <message>
        <source>getPageItems() -&gt; list

Returns a list of tuples with items on the current page. The tuple is:
(name, objectType, order) E.g. [(&apos;Text1&apos;, 4, 0), (&apos;Image1&apos;, 2, 1)]
means that object named &apos;Text1&apos; is a text frame (type 4) and is the first at
the page...
</source>
        <translation>getPageItems() -&gt; lista

Devolve unha lista de valores con elementos da páxina actual. Os valores son:
(nome, tipoDeObxecto, orde). Por exemplo [(&apos;Texto1&apos;, 4, 0), (&apos;Imaxe1&apos;, 2, 1)]
significa que o obxecto chamado &apos;Texto1&apos; é unha moldura de texto (tipo 4) e que
é o primeiro na páxina...</translation>
    </message>
    <message>
        <source>getPageMargins()

Returns the page margins as a (left, right, top, bottom) tuple in the current
units. See UNIT_&lt;type&gt; constants and getPageSize().
</source>
        <translation type="obsolete">getPageMargins()

Devolve as marxes da páxina como valores (esquerda, direita, superior, inferior)
nas unidades actuais. Ver as constantes UNIT_&lt;tipo&gt; e getPageSize().</translation>
    </message>
    <message>
        <source>setFillColor(&quot;color&quot;, [&quot;name&quot;])

Sets the fill color of the object &quot;name&quot; to the color &quot;color&quot;. &quot;color&quot;
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation>setFillColor(&quot;cor&quot;, [&quot;nome&quot;])

Fixa a cor de enchido do obxecto &quot;nome&quot; para a cor &quot;cor&quot;.
&quot;cor&quot; é o nome dunha das cores definidas. Se non se fornece un &quot;nome&quot;
úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>setLineColor(&quot;color&quot;, [&quot;name&quot;])

Sets the line color of the object &quot;name&quot; to the color &quot;color&quot;. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation>setFillColor(&quot;cor&quot;, [&quot;nome&quot;])

Fixa a cor da liña do obxecto &quot;nome&quot; para a cor &quot;cor&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>setLineWidth(width, [&quot;name&quot;])

Sets line width of the object &quot;name&quot; to &quot;width&quot;. &quot;width&quot; must be in the
range from 0.0 to 12.0 inclusive, and is measured in points. If &quot;name&quot; is not
given the currently selected item is used.

May raise ValueError if the line width is out of bounds.
</source>
        <translation>setLineWidth(anchura, [&quot;nome&quot;])

Fixa a anchura da liña do obxecto &quot;nome&quot; en &quot;anchura&quot;.
&quot;anchura&quot; debe estar no rango entre 0.0 e 12.0 incluídos e mídese en puntos.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un ValueError se a anchura da liña está fora dos limites.</translation>
    </message>
    <message>
        <source>setLineShade(shade, [&quot;name&quot;])

Sets the shading of the line color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full color intensity). If &quot;name&quot; is not given the currently selected item
is used.

May raise ValueError if the line shade is out of bounds.
</source>
        <translation>setLineShade(saturación, [&quot;nome&quot;])

Fixa a saturación da cor da liña do obxecto &quot;nome&quot; en &quot;saturación&quot;.
&quot;saturación&quot; debe ser un valor inteiro no rango de 0 (menor) a 100
(intensidade de cor total). Se non se fornece un &quot;nome&quot;
úsase o elemento seleccionado nese momento.

Pode provocar un ValueError se a saturación da liña está fora de limites.</translation>
    </message>
    <message>
        <source>setLineJoin(join, [&quot;name&quot;])

Sets the line join style of the object &quot;name&quot; to the style &quot;join&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for join - JOIN_&lt;type&gt;.
</source>
        <translation>setLineJoin(borde, [&quot;nome&quot;])

Fixa o estilo do borde da liña do obxecto &quot;nome&quot; no estilo &quot;borde&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
Existen unhas constantes pré-definidas para o borde - JOIN_&lt;tipo&gt;.</translation>
    </message>
    <message>
        <source>setLineEnd(endtype, [&quot;name&quot;])

Sets the line cap style of the object &quot;name&quot; to the style &quot;cap&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for &quot;cap&quot; - CAP_&lt;type&gt;.
</source>
        <translation>setLineExtremo(extremo, [&quot;nome&quot;])

Fixa o estilo do extremo da liña do obxecto &quot;nome&quot; no estilo &quot;extremo&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
Existen unhas constantes pré-definidas para extremo - CAP_&lt;tipo&gt;.</translation>
    </message>
    <message>
        <source>setLineStyle(style, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the style &quot;style&quot;. If &quot;name&quot;
is not given the currently selected item is used. There are predefined
constants for &quot;style&quot; - LINE_&lt;style&gt;.
</source>
        <translation>setLineStyle(estilo, [&quot;nome&quot;])

Fixa o estilo da liña do obxecto &quot;nome&quot; para o estilo &quot;estilo&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
Existen constantes pré-definidas para o &quot;estilo&quot; - LINE_&lt;estilo&gt;.</translation>
    </message>
    <message>
        <source>setFillShade(shade, [&quot;name&quot;])

Sets the shading of the fill color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full Color intensity). If &quot;name&quot; is not given the currently selected
Item is used.

May raise ValueError if the fill shade is out of bounds.
</source>
        <translation>setFillShade(saturación, [&quot;nome&quot;])

Fixa a saturación da cor de enchido do obxecto &quot;nome&quot; en &quot;saturación&quot;.
&quot;saturación&quot; debe ser un valor inteiro no rango de 0 (menor) a 100
(intensidade de cor total). Se non se fornece un &quot;nome&quot;
úsase o elemento seleccionado nese momento.

Pode provocar un ValueError se a saturación da liña está fora de limites.</translation>
    </message>
    <message>
        <source>setCornerRadius(radius, [&quot;name&quot;])

Sets the corner radius of the object &quot;name&quot;. The radius is expressed
in points. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if the corner radius is negative.
</source>
        <translation>setCornerRadius(radio, [&quot;nome&quot;])

Fixa o radio da esquina do obxecto &quot;nome&quot;. O radio exprésase en puntos.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un ValueError se a saturación da liña está fora de limites.</translation>
    </message>
    <message>
        <source>setMultiLine(&quot;namedStyle&quot;, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the named style &quot;namedStyle&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the line style doesn&apos;t exist.
</source>
        <translation>setMultiLine(&quot;nomeDeEstilo&quot;, [&quot;nome&quot;])

Fixa o estilo de liña do obxecto &quot;nome&quot; para o estilo de nome &quot;nomeDeEstilo&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un ValueError se a saturación da liña está fora de limites.</translation>
    </message>
    <message>
        <source>getFont([&quot;name&quot;]) -&gt; string

Returns the font name for the text frame &quot;name&quot;. If this text frame
has some text selected the value assigned to the first character
of the selection is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>getFont([&quot;nome&quot;]) -&gt; cadea

Devolve o nome da fonte da moldura de texto &quot;nome&quot;. Se esta
moldura de texto ten algún texto seleccionado, devólvese o valor
asignado ao primeiro carácter da selección.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getTextLength([&quot;name&quot;]) -&gt; integer

Returns the length of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getTextLength([&quot;nome&quot;])

Devolve a lonxitude do texto da moldura de texto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot;. If this text frame has some text
selected, the selected text is returned. All text in the frame, not just
currently visible text, is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>getText([&quot;nome&quot;]) -&gt; cadea

Devolve o texto da moldura de texto &quot;nome&quot;. Se a moldura de texto ten algún
texto selecconado, devólvese o texto seleccionado. Devólvese todo todo o texto
da moldura, non só o texto que se pode ver actualmente. 
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getAllText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot; and of all text frames which are
linked with this frame. If this textframe has some text selected, the selected
text is returned. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation>getAllText([&quot;nome&quot;]) -&gt; cadea

Devolve o texto da moldura de texto &quot;nome&quot; e de todas as molduras que están
vinculadas con esta moldura. Se a moldura de texto ten algún
texto selecconado, devólvese o texto seleccionado.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getLineSpacing([&quot;name&quot;]) -&gt; float

Returns the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; expressed in
points. If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getLineSpacing([&quot;nome&quot;]) -&gt; float

Devolve o interliñado da moldura de texto &quot;nome&quot; expresado en puntos.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getColumnGap([&quot;name&quot;]) -&gt; float

Returns the column gap size of the text frame &quot;name&quot; expressed in points. If
&quot;name&quot; is not given the currently selected item is used.
</source>
        <translation>getColumnGap([&quot;nome&quot;]) -&gt; float

Devolve o tamaño da distancia entre as columnas  da moldura de texto &quot;nome&quot; expresado en puntos.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>getColumns([&quot;name&quot;]) -&gt; integer

Gets the number of columns of the text frame &quot;name&quot;. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>getColumns([&quot;nome&quot;]) -&gt; inteiro

Devolve o número de columnas da moldura de texto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>setText(&quot;text&quot;, [&quot;name&quot;])

Sets the text of the text frame &quot;name&quot; to the text of the string &quot;text&quot;.
Text must be UTF8 encoded - use e.g. unicode(text, &apos;iso-8859-2&apos;). See the FAQ
for more details. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation>setText(&quot;text&quot;, [&quot;nome&quot;])

Fixa o texto da moldura de texto &quot;nome&quot; para o texto da cadea &quot;texto&quot;.
O texto debe estar codificado en UTF8 - usar, p.ex. unicode(text, &apos;iso-8850-2&apos;).
Ver as FAQ para máis detalles. Se non se fornece un &quot;nome&quot; úsase o elemento
seleccionado nese momento.</translation>
    </message>
    <message>
        <source>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame. Text
must be UTF encoded (see setText() as reference) The first character has an
index of 0. &quot;name&quot; If &quot;name&quot; is not given the currently selected Item is
used.

May throw IndexError for an insertion out of bounds.
</source>
        <translation type="obsolete">insertText(&quot;texto&quot;, pos, [&quot;nome&quot;])

Insire o texto &quot;texto&quot; na posición &quot;pos&quot; na moldura de texto. O texto debe estar
codificado en UTF (ver setText() como referencia). O primeiro carácter ten o
índice 0. &quot;nome&quot;. Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un IndexError debido a unha inserción fora de limites.</translation>
    </message>
    <message>
        <source>setFont(&quot;font&quot;, [&quot;name&quot;])

Sets the font of the text frame &quot;name&quot; to &quot;font&quot;. If there is some text
selected only the selected text is changed.  If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError if the font cannot be found.
</source>
        <translation>setFont(&quot;fonte&quot;, [&quot;nome&quot;])

Fixa a fonte da moldura de texto &quot;nome&quot; en &quot;fonte&quot;. Se hai texto
seleccionado só se modifica o texto seleccionado. Se non se fornece
un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode devolver un ValueError se non se atopa a fonte.</translation>
    </message>
    <message>
        <source>setFontSize(size, [&quot;name&quot;])

Sets the font size of the text frame &quot;name&quot; to &quot;size&quot;. &quot;size&quot; is treated
as a value in points. If there is some text selected only the selected text is
changed. &quot;size&quot; must be in the range 1 to 512. If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError for a font size that&apos;s out of bounds.
</source>
        <translation>setFontSize(tamaño, [&quot;nome&quot;])

Fixa o tamaño da fonte da moldura de texto &quot;nome&quot; en &quot;tamaño&quot;.
&quot;tamaño&quot; trátase como un valor en puntos. Se hai texto seleccionado só se
modifica o texto seleccionado. &quot;tamaño&quot; debe estar no rango 1 a 512.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un ValueError por un tamaño de fonte que está fora dos limites.</translation>
    </message>
    <message>
        <source>setLineSpacing(size, [&quot;name&quot;])

Sets the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; to &quot;size&quot;.
&quot;size&quot; is a value in points. If &quot;name&quot; is not given the currently selected
item is used.

May throw ValueError if the line spacing is out of bounds.
</source>
        <translation>setLineSpacing(tamaño, [&quot;nome&quot;])

Fixa o interliñado da moldura de texto &quot;nome&quot; en &quot;tamaño&quot;.
&quot;tamaño&quot; é un valor en puntos. Se non se fornece
un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un ValueError se o espaciamento de liña está fora de limites.</translation>
    </message>
    <message>
        <source>setColumnGap(size, [&quot;name&quot;])

Sets the column gap of the text frame &quot;name&quot; to the value &quot;size&quot;. If
&quot;name&quot; is not given the currently selected item is used.

May throw ValueError if the column gap is out of bounds (must be positive).
</source>
        <translation>setColumnGap(tamaño, [&quot;nome&quot;])

Fixa a distancia entre columnas da moldura de texto &quot;nome&quot; en &quot;tamaño&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un ValueError se a distancia entre columnas está fora de limites.</translation>
    </message>
    <message>
        <source>setColumns(nr, [&quot;name&quot;])

Sets the number of columns of the text frame &quot;name&quot; to the integer &quot;nr&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May throw ValueError if number of columns is not at least one.
</source>
        <translation>setColumn(nr, [&quot;nome&quot;])

Fixa o número de columnas da moldura de texto &quot;nome&quot; en &quot;tamaño&quot; no inteiro &quot;nr&quot;.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.

Pode provocar un ValueError se o número de columnas está fora de limites.</translation>
    </message>
    <message>
        <source>setTextAlignment(align, [&quot;name&quot;])

Sets the text alignment of the text frame &quot;name&quot; to the specified alignment.
If &quot;name&quot; is not given the currently selected item is used. &quot;align&quot; should
be one of the ALIGN_ constants defined in this module - see dir(scribus).

May throw ValueError for an invalid alignment constant.
</source>
        <translation>setTextAlignment(aliñamento, [&quot;nome&quot;])

Fixa o aliñamento da moldura de texto &quot;nome&quot; no aliñamento especificado.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.
&quot;aliñamento&quot; debería ser unha das constantes ALIGN_constantes definidas
neste módulo - ver dir(Scribus).

Pode provocar un ValueError se o número de columnas está fora de limites.</translation>
    </message>
    <message>
        <source>selectText(start, count, [&quot;name&quot;])

Selects &quot;count&quot; characters of text in the text frame &quot;name&quot; starting from the
character &quot;start&quot;. Character counting starts at 0. If &quot;count&quot; is zero, any
text selection will be cleared.  If &quot;name&quot; is not given the currently
selected item is used.

May throw IndexError if the selection is outside the bounds of the text.
</source>
        <translation>selectText(inicio,conta, [&quot;nome&quot;])

Selecciona &quot;conta&quot; caracteres de texto na moldura de texto &quot;nome&quot; a partir
do carácter &quot;inicio&quot;. A conta de caracteres comeza no 0. Se &quot;conta&quot; é cero,
elimínase calquer selección de texto. Se non se fornece un &quot;nome&quot;
úsase o elemento seleccionado nese momento.

Pode provocar un IndexError se a selección está fora dos limites do texto.</translation>
    </message>
    <message>
        <source>deleteText([&quot;name&quot;])

Deletes any text in the text frame &quot;name&quot;. If there is some text selected,
only the selected text will be deleted. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>deleteText([&quot;nome&quot;])

Limpa todo o texto da moldura de texto &quot;nome&quot;. Se hai texto seleccionado
só se limpará o texto seleccionado. Se non se fornece un &quot;nome&quot;
úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>setTextColor(&quot;color&quot;, [&quot;name&quot;])

Sets the text color of the text frame &quot;name&quot; to the color &quot;color&quot;. If there
is some text selected only the selected text is changed. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation>setTextColor(&quot;cor&quot;, [&quot;nome&quot;])

Fixa a cor do texto da moldura de texto &quot;nome&quot; na cor &quot;cor&quot;.
Se hai texto seleccionado só se modificará o texto seleccionado.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>setTextStroke(&quot;color&quot;, [&quot;name&quot;])

Set &quot;color&quot; of the text stroke. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>setTextStroke(&quot;cor&quot;, [&quot;nome&quot;])

Fixa a cor do trazo do texto.
Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>setTextShade(shade, [&quot;name&quot;])

Sets the shading of the text color of the object &quot;name&quot; to &quot;shade&quot;. If
there is some text selected only the selected text is changed. &quot;shade&quot; must
be an integer value in the range from 0 (lightest) to 100 (full color
intensity). If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation>setTextShade(&quot;saturación&quot;, [&quot;nome&quot;])

Fixa a saturación da cor do texto do obxecto &quot;nome&quot; en &quot;saturación&quot;.
Se hai texto seleccionado só se modificará o texto seleccionado.
&quot;saturación&quot; debe ser un valor inteiro no rango de 0 (menor) a 100 (intensidade
total da cor). Se non se fornece un &quot;nome&quot; úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>linkTextFrames(&quot;fromname&quot;, &quot;toname&quot;)

Link two text frames. The frame named &quot;fromname&quot; is linked to the
frame named &quot;toname&quot;. The target frame must be an empty text frame
and must not link to or be linked from any other frames already.

May throw ScribusException if linking rules are violated.
</source>
        <translation>linkTextFrames(&quot;denome&quot;, &quot;anome&quot;)

Vincula dúas molduras de texto. A moldura de nome &quot;denome&quot; vincúlase á
moldura chamada &quot;anome&quot;. A moldura de destino debe ser unha moldura
de texto baleira e non debe vincularse ou estar vinculada xa a outras molduras.</translation>
    </message>
    <message>
        <source>unlinkTextFrames(&quot;name&quot;)

Remove the specified (named) object from the text frame flow/linkage. If the
frame was in the middle of a chain, the previous and next frames will be
connected, eg &apos;a-&gt;b-&gt;c&apos; becomes &apos;a-&gt;c&apos; when you unlinkTextFrames(b)&apos;

May throw ScribusException if linking rules are violated.
</source>
        <translation>unlinkTextFrames(&quot;nome&quot;)

Eliminar o obxecto (con nome) especificado do fluxo/vinculación de moldura
de texto. Se a moldura estaba no medio dunha cadea, conectaranse as molduras
anterior e seguinte, p.ex. &apos;a-&gt;b-&gt;c&apos; convírtese en &apos;a-&gt;c&apos; cando se fai
unlinkTextFrames(b)

Pode provocar unha ScribusException se se violan as regras de vinculación.</translation>
    </message>
    <message>
        <source>traceText([&quot;name&quot;])

Convert the text frame &quot;name&quot; to outlines. If &quot;name&quot; is not given the
currently selected item is used.</source>
        <translation>traceText([&quot;nome&quot;])

Convirte a moldura de texto &quot;nome&quot; en siluetas. Se non se fornece un &quot;nome&quot;
úsase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>progressReset()

Cleans up the Scribus progress bar previous settings. It is called before the
new progress bar use. See progressSet.
</source>
        <translation>progressReset()

Limpa a configuración anterior da barra de progreso de Scribus. Chámase antes de
usasr a nova barra de progreso. Ver progressSet.</translation>
    </message>
    <message>
        <source>progressTotal(max)

Sets the progress bar&apos;s maximum steps value to the specified number.
See progressSet.
</source>
        <translation>progressTotal(max)

Fixa o valor de paso máximo da barra de paso no número especificado.
Ver progressSet.</translation>
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
        <translation>progressSet(nr)

Fixa a posición da barra de progreso en &quot;nr&quot;, un valor relativo ao progressTotal
fixado anteriormente. A barra de progreso usa o concepto de pasos; dáselle o
número total de pasos e o número de pasos xa completado e mostra a percentaxe
de pasos xa completados. Pódese especcificar o número total de pasos con
progressTotal(). O número actual de pasos fíxase con progressSet(). Pódese facer
retornar a barra de progreso ao principio con progressReset(). [basado en información
obtida dos documentos do Qt da Trolltech]</translation>
    </message>
    <message>
        <source>setCursor()

[UNSUPPORTED!] This might break things, so steer clear for now.
</source>
        <translation>setCursor()

[NON ACEPTADO!] Isto podería foder as cousas, así que non o toques de momento.</translation>
    </message>
    <message>
        <source>docChanged(bool)

Enable/disable save icon in the Scribus icon bar and the Save menu item. It&apos;s
useful to call this procedure when you&apos;re changing the document, because Scribus
won&apos;t automatically notice when you change the document using a script.
</source>
        <translation>docChanged(bool)

Des/Habilita o icone de gardar na barra de icones de Scribus e o elemento do
menú Gardar. É útil chamar por este procedimento cando está a modificar o documento
porque Scribus non perceberá automaticamente cando se modifica o documento
por medio dun guión.</translation>
    </message>
    <message>
        <source>setScaleImageToFrame(scaletoframe, proportional=None, name=&lt;selection&gt;)

Sets the scale to frame on the selected or specified image frame to `scaletoframe&apos;.
If `proportional&apos; is specified, set fixed aspect ratio scaling to `proportional&apos;.
Both `scaletoframe&apos; and `proportional&apos; are boolean.

May raise WrongFrameTypeError.
</source>
        <translation>setScaleImageToFrame(escalaamoldura, proporcional=None, nome=&lt;selección&gt;)

Indica que a escala á moldura na imaxe seleccionada ou especificada será &quot;escalaamoldura&quot;.
De especificarse &quot;proporcional&quot;, a ampliación de aspecto fixo será &quot;proporcional&quot;.
Tanto &quot;escalaamoldura&quot; como &quot;proporcional&quot; son booleanas.

Pode provocar un erro WrongFrameTypeError.</translation>
    </message>
    <message>
        <source>selectText(start, count, [&quot;name&quot;])

Selects &quot;count&quot; characters of text in the text frame &quot;name&quot; starting from the
character &quot;start&quot;. Character counting starts at 0. If &quot;count&quot; is zero, any
text selection will be cleared. If &quot;count&quot; is -1, all text in the frame will
be selected. If &quot;name&quot; is not given the currently selected item is used.

May throw IndexError if the selection is outside the bounds of the text.
</source>
        <translation type="obsolete">selectText(inicio, conta, [&quot;nome&quot;])

Selecciona &quot;conta&quot; caracteres de texto na moldura de texto &quot;nome&quot; a partir
do carácter &quot;inicio&quot;. A conta de caracteres comeza por 0. Se a &quot;conta&quot; é cero,
eliminarase toda selección de texto. Se a &quot;conta&quot; é -1 seleccionarase todo o
texto da moldura. Se non se dá un &quot;nome&quot;, usarase o elemento seleccionado
nese momento.

Pode provocar un IndexError se a selección está fora dos limites do texto.</translation>
    </message>
    <message>
        <source>register_macro_code(name, sourcetext, accel=&apos;&apos;)

Create a macro named &quot;name&quot; by evaluating the the source code &quot;sourcetext&quot;.
&quot;sourcetext&quot; must follow the same rules as macros created in the GUI.
If provided, the string &quot;accel&quot; will be used to set a keyboard shortcut
for the macro.
</source>
        <translation type="obsolete">register_macro_code(nome, textofonte, acelerador=&apos;&apos;)

Crear unha macro chamada &quot;nome&quot; mediante a evaluación do código fonte &quot;textofonte&quot;.
&quot;textofonte&quot; debe seguir as mesmas regras que as macros creadas na GUI.
Se se fornece, a cadea &quot;acelerador&quot; usarase para contar cun atallo
de teclado para a macro.</translation>
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
        <translation>renderFont(&quot;nome&quot;, &quot;nomedeficheiro&quot;, &quot;exemplo&quot;, tamaño, formato=&quot;PPM&quot;) -&gt; booleano

Crea unha vista previa gráfica da fonte &quot;nome&quot; co texto &quot;exemplo&quot; e o tamaño.
Se o &quot;nomedeficheiro&quot; non é &quot;&quot;, a imaxe sálvase en &quot;nomedeficheiro&quot;. Do contrario,
os datos de imaxe devólvense como unha cadea. O argumento opcional
&quot;formato&quot; especifica o formato de imaxe que se ha de xerar e permite calquer formato
permitido por QPixmap.save(). Formatos habituais son PPM, JPEG, PNG e XPM.

Pode provocar un NotFoundError se non se atopa a fonte especificada.
Pode provocar un ValueError se se lle pasar un exemplo ou nome de ficheiro vacíos.</translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>isLayerPrintable(&quot;capa&quot;) -&gt; booleano

Devolve se a capa &quot;capa&quot; é visíbel ou non; o valor Verdadeiro significa
que a capa &quot;capa&quot; é visíbelo, o valor Falso significa que a capa
&quot;capa&quot; é invisíbel.

Pode provocar un NotFoundError se non se atopou a capa.
pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is printable or not, a value of True means
that the layer &quot;layer&quot; can be printed, a value of False means that printing
the layer &quot;layer&quot; is disabled.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation>isLayerPrintable(&quot;capa&quot;) -&gt; booleano

devolve se a capa &quot;capa&quot; é imprimíbel ou non; o valor Verdadeiro significa
que a capa &quot;capa&quot; pódese imprimir, o valor Falso significa que foi deshabilitada
a impresión da capa &quot;capa&quot;.

Pode provocar un NotfoundError se non se atopa a capa.
Pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>getColorAsRGB(&quot;name&quot;) -&gt; tuple

Returns a tuple (R,G,B) containing the three color components of the
color &quot;name&quot; from the current document, converted to the RGB colour
space. If no document is open, returns the value of the named color
from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="obsolete">getColorAsRGB(&quot;nome&quot;) -&gt; trio

Devolve un trio (R,G,B) que contén os tres componentes de cor da
cor &quot;nome&quot; do documento actual, convertidos ao espazo de cor RGB.
Se non hai nengun documento aberto, devolve o valor da cor nomeada
das cores por omisión do documento.

Pode provocar un NotFoundError se non se atopou a cor nomeada.
Pode provocar un ValueError se se indicou un nome de cor non válido.</translation>
    </message>
    <message>
        <source>setPDFBookmark(&quot;toggle&quot;, [&quot;name&quot;])

Sets wether (toggle = 1) the text frame &quot;name&quot; is a bookmark nor not.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
        <translation>setPDFBookmark(&quot;alternar&quot;, [&quot;nome&quot;])

Indica se (alternar = 1) a moldura de texto &quot;nome&quot; é un marcador ou non.
Se non se lle dá un &quot;nome&quot; selecciónase o elemento seleccionado nese momento.

Pode provocar un WrongFrameTypeError se a moldura de destino non é unha moldura de texto</translation>
    </message>
    <message>
        <source>isPDFBookmark([&quot;name&quot;]) -&gt; bool

Returns true if the text frame &quot;name&quot; is a PDF bookmark.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
        <translation>isPDFBookmark([&quot;nome&quot;]) -&gt; booleano

Devolve verdadeiro se a moldura de texto &quot;nome&quot; é un marcador de PDF.
Se non se dá un &quot;nome&quot; utilízase o elemento seleccionado nese momento.

Pode provocar un WrongFrameTypeErro se a moldura de destino non é unha moldura de texto</translation>
    </message>
    <message>
        <source>isLayerVisible(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="obsolete">isLayerVisible(&quot;capa&quot;) -&gt; booleano

Devolve se a capa &quot;capa&quot; é visíbel ou non; un valor de Verdadeiro significa
que a capa &quot;capa&quot; é visíbel; un valor de Falso significa que a capa
&quot;capa&quot; é invisíbel.

Pode provocar un NotFoundError se non se dá atopada a capa.
Pode provocar un ValueError se o nome da capa non é aceptábel.</translation>
    </message>
    <message>
        <source>getPageMargins()

Returns the page margins as a (top, left, right, bottom) tuple in the current
units. See UNIT_&lt;type&gt; constants and getPageSize().
</source>
        <translation>getPageMargins()

Devolve as marxes da páxina como un conxunto de catro valores (arriba, esquerda, dereita, abaixo)
nas unidades actuais. Ver as constantes UNIT_&lt;type&gt; e getPageSize().
</translation>
    </message>
    <message>
        <source>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame &quot;name&quot;.
Text must be UTF encoded (see setText() as reference). The first character has
an index of 0. Inserting at position -1 appends text to the frame. If &quot;name&quot;
is not given the currently selected Item is used.

May throw IndexError for an insertion out of bounds.
</source>
        <translation type="obsolete">insertText(&quot;texto&quot;, pos.[&quot;nome&quot;])

Insire o texto &quot;texto&quot; na posición &quot;pos&quot; na moldura de texto &quot;nome&quot;.
O texto debe estar codificado en UTF (ver setText() como referencia). O primeiro
carácter ten un índice de O. Se se insire na posición -1 adiciónase o texto á moldura.
Se non se fornece un &quot;nome&quot;, utilízase o elemento seleccionado nese momento.

Pove provocar un IndexError se se fai unha inserción fora dos limites.
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
        <translation>getColorAsRGB(&quot;nome&quot;) -&gt; tres valores

Devolve tres valores (R,G,B) que conteñen as tres componentes de cor da
cor &quot;nome&quot; do documento actual, convertidas no espazo de cores RGB.
Se non hai un documento aberto, devolve o valor da cor dese nome
das cores do documento por omisión.</translation>
    </message>
    <message>
        <source>defineColor(&quot;name&quot;, c, m, y, k)

Defines a new color &quot;name&quot;. The color Value is defined via four components:
c = Cyan, m = Magenta, y = Yello and k = Black. Color components should be in
the range from 0 to 255.

May raise ValueError if an invalid color name is specified.
</source>
        <translation>defineColor(&quot;nome&quot;, c, m, y, k)

Define unha cor &quot;nome&quot; nova. O Valor da cor defínese mediante catro componentes:
c = Cián, m = Maxenta, y = Amarelo e k = Negro. As componentes da cor deben
estar no rango entre 0 e 255.</translation>
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
        <translation>fileDialog(&quot;lexenda&quot;, [&quot;filtro&quot;, &quot;nomeporomisión&quot;, tenantevisión, égardar, édirectorio]) -&gt; cadea con nome de ficheiro

Mostra unha caixa de diálogo Abrir Fichiero coa lexenda &quot;lexenda&quot;. Os ficheiros fíltranse coa cadea de filtro
&quot;filtro&quot;. Pódese fornecer tamén un nome de ficheiro ou rota por omisión ; deixe esta cadea baleira cando
non a queira usar. O valor Verdadeiro para tenantevisión permite que apareza unha caixiña coa antevisión na
caixa de selección. Se o parámetro égardar é Verdadeiro, o diálogo funciona como diálogo &quot;Salvar Como&quot; e se non
actúa como &quot;Diálogo Abrir Ficheiro&quot;. Se o parámetro édirectorio é Verdadeiro, o diálogo mostra e devolve só directorios.
Por omisión, todos estes parámetros son Falso.

O filtro, de especificarse, ten a forma &quot;comentario (*.tipo *.tipo2 ...)&quot;.
Por exemplo &quot;Imaxes (*.png *.pxm *.jpg)&quot;.

Consulte a Documentación de Qt para os detalles sobre filtros no QFileDialog.

Examplo: fileDialog(&apos;Abrir entrada&apos;, &apos;CSV files (*.csv)&apos;)
Examplo: fileDialog(&apos;Gardar este informe&apos;, defaultname=&apos;informe.txt&apos;, issave=True)</translation>
    </message>
    <message>
        <source>newStyleDialog() -&gt; string

Shows &apos;Create new paragraph style&apos; dialog. Function returns real
style name or None when user cancels the dialog.
</source>
        <translation>newStyleDialog() -&gt; string

Mostra o diálogo &quot;Crear novo estilo de parágrafo&quot;. A función devolve un
nome de estilo real ou Nengún cando o utilizador cancela o diálogo.</translation>
    </message>
    <message>
        <source>getCornerRadius([&quot;name&quot;]) -&gt; integer

Returns the corner radius of the object &quot;name&quot;. The radius isexpressed in points. If &quot;name&quot; is not given the currentlyselected item is used.
</source>
        <translation>getCornerRadius([&quot;nome&quot;]) -&gt; inteiro

Devolve o radio da esquina do obxecto &quot;nome&quot;. O radio exprésase en puntos. Se non se dá un &quot;nome&quot; utilízase o elemento seleccionado.</translation>
    </message>
    <message>
        <source>getPosition([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple with the position of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.The position is expressed in the actual measurement unit of the document
- see UNIT_&lt;type&gt; for reference.
</source>
        <translation>getPosition([&quot;nome&quot;]) -&gt; (x,y)

Devolve un par de valores (x, y) coa posición do obxecto &quot;nome&quot;.
Se non se fornece un &quot;nome&quot; utilízase o elemento seleccionado nese momento. A posición exprésase na unidade de medida actual
do documento. Vexa UNIT_&lt;type&gt; para máis detalles.</translation>
    </message>
    <message>
        <source>getPropertyCType(object, property, includesuper=True)

Returns the name of the C type of `property&apos; of `object&apos;. See getProperty()
for details of arguments.

If `includesuper&apos; is true, search inherited properties too.
</source>
        <translation>getPropertyCType(obxecto, propiedade, includesuper=True)

Devolve o nome do tipo C da &quot;propiedade&quot; de &quot;obxecto&quot;. Vexa getProperty()
para detalles sobre os argumentos.</translation>
    </message>
    <message>
        <source>getPropertyNames(object, includesuper=True)

Return a list of property names supported by `object&apos;.
If `includesuper&apos; is true, return properties supported
by parent classes as well.
</source>
        <translation>getPropertyNames(obxecto, includesuper=True)

Devolve unha lista de nomes de propiedades utilizábeis por &quot;obxecto&quot;.
Se &quot;includesuper&quot; é verdadeiro, devolve tamén as propiedades
utilizábeis polas clases pai.</translation>
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
        <translation>getProperty(obxecto, propiedade)

Devolver o valor da propiedade &quot;propiedade&quot; do &quot;obxecto&quot; pasado.

O argumento &quot;obxecto&quot; pode ser unha cadea, en cuxo caso procúrase o
ElementoDePáxina que se indica. Pode ser tamén un PyCObject, que pode apuntar
a calquer instancia C++ QObject.

O argumento &quot;propiedade&quot; debe ser unha cadea e é o nome da propiedade que
se ha de consultar sobre &quot;obxecto&quot;.

O valor de retorno varía dependendo no tipo de propiedade.</translation>
    </message>
    <message>
        <source>setProperty(object, property, value)

Set `property&apos; of `object&apos; to `value&apos;. If `value&apos; cannot be converted to a type
compatible with the type of `property&apos;, an exception is raised. An exception may
also be raised if the underlying setter fails.

See getProperty() for more information.
</source>
        <translation>setProperty(obxecto, propiedade, valor)

Asigne &quot;propiedade&quot; de &quot;obxecto&quot; a &quot;valor&quot;. Se &quot;valor&quot; non se pode convertir nun tipo
compatíbel co tipo de &quot;propiedade&quot; provócase unha excepción. Tamén se pode provocar
unha excepción se falla un designador subxacente.

Vexa getProperty() para máis información.</translation>
    </message>
    <message>
        <source>getChildren(object, ofclass=None, ofname=None, regexpmatch=False, recursive=True)

Return a list of children of `object&apos;, possibly restricted to children
of class named `ofclass&apos; or children named `ofname&apos;. If `recursive&apos; is true,
search recursively through children, grandchildren, etc.

See QObject::children() in the Qt docs for more information.
</source>
        <translation>getChildren(obxecto, declase=None, denome=None, regexpmatch=False, recursivo=Verdadeiro)

Devolve unha lista de fillos de &quot;obxecto&quot;, posibelmente restrinxida a fillos
da clase chamada &quot;declase&quot; ou fillos chamados &quot;denome&quot;. Se &quot;recursivo&quot; é verdadeiro,
procurar recursivamente através dos fillos, netos, etc.

Consulte QObject::children() nos documentos de Qt para máis información.</translation>
    </message>
    <message>
        <source>getChild(object, childname, ofclass=None, recursive=True)

Return the first child of `object&apos; named `childname&apos;, possibly restricting
the search to children of type name `ofclass&apos;. If `recursive&apos; is true,
search recursively through children, grandchildren, etc.
</source>
        <translation>getChild(obxecto, nomefillo, declase=None, recursivo=Verdadeiro)

Devolve o primeiro fillo do &quot;obxecto&quot; chamado &quot;nomedofillo&quot;, posibelmente restrinxindo
a procura aos fillos do tipo de nome &quot;declase&quot;. Se &quot;recursivo&quot; é verdadeiro,
procurar recursivamente através dos fillos, netos, etc.</translation>
    </message>
    <message>
        <source>rotateObjectAbs(rot [, &quot;name&quot;])

Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positve values
mean counter clockwise rotation. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation>rotateObjectAbs(rot [.&quot;nome&quot;])

Indica a rotación do obxecto &quot;nome&quot; como &quot;rot&quot;. Os valores positivos
significan rotación contraria á das agullas do reloxio. Se non se dá &quot;nome&quot;
utilízase o elemento seleccionado nese momento.</translation>
    </message>
    <message>
        <source>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame &quot;name&quot;.
Text must be UTF encoded (see setText() as reference) The first character has an
index of 0. Inserting at position -1 appends text to the frame. If &quot;name&quot; is
not given the currently selected Item is used.

May throw IndexError for an insertion out of bounds.
</source>
        <translation>insertText(&quot;texto&quot;, pos. [&quot;nome&quot;]

Insire o texto &quot;texto&quot; na posición &quot;pos&quot; na moldura de texto &quot;nome&quot;.
O texto debe estar codificado en UTF (ver setText() como referencia). O primeiro carácter
ten un índice de O. Se se insire na posición -1 o texto adiciónase á moldura. Se non se
fornece &quot;nome&quot; utilízase o elemento seleccionado nese momento.

Pode provocar un IndexError nunha inserción fora de limites.</translation>
    </message>
    <message>
        <source>textOverflows([&quot;name&quot;, nolinks]) -&gt; integer

Returns the actual number of overflowing characters in text frame &quot;name&quot;.
If is nolinks set to non zero value it takes only one frame - it doesn&apos;t
use text frame linking. Without this parameter it search all linking chain.

May raise WrongFrameTypeError if the target frame is not an text frame
</source>
        <translation>textOverflows([&quot;nome&quot;, nolinks]) -&gt; inteiro

Devolve o número real de caracteres de desborde na moldura de texto &quot;nome&quot;.
Se nolinks ten un valor distinto de cero entón só colle unha moldura - non
utiliza vinculación entre molduras. Sen este parámetro procura todas as cadeas de vínculos.

Pode provocar un WrongFrameTypeError se a moldura de destino non é de texto</translation>
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
        <translation>newDoc(tamaño, marxes, orientación, númeroPrimeiraPáxina,
                   unidade, páxinasEnfrontadas, primeiraPáxinaEsquerda) -&gt; booleano

ADVERTENCIA: Procedemento obsoleto! Utilice newDocument no seu lugar.

Crea un documento novo e devolve verdadeiro se o logra. Os parámetros teñen o 
significado seguinte:

    tamaño = Un par (anchura, altura) que describe o tamaño do documento. Pode utilizar
    as constantes predefinidas PAPER_&lt;tipo_de_papel&gt;, p.ex. PAPER_A4, etc.

    marxes = Catro valores (esquerda, dereita, superior, inferior) que describen as
    marxes do documento

    orientación = a orientación da páxina - constantes RETRATO, LANDSCAPE

    númeroPrimeiraPáxina = é o número da primeira páxina do documento utilizado para
    a numeración das páxinas. Ainda que normalmente quererá que sexa 1, resulta útil dispor
    de números máis altos se está a crear un documento en varias partes.

    unidade: este valor indica as unidades de medida utilizadas polo documento.
    Utilice para isto unha constante predefinida de entre UNIT_INCHES, UNIT_MILLIMETERS,
    UNIT_PICAS, UNIT_POINTS.

    páxinasEnfrontadas = FACINGPAGES, NOFACINGPAGES

    primeiraPáxinaEsquerda = FIRSTPAGELEFT, FIRSTPAGERIGHT

Os valores da anchura, altura e as marxes exprésanse na unidade dada para o documento.
As constantes PAPER_* exprésanse en puntos. Se o seu documento non está en puntos,
asegúrese de telo en conta.

examplo: newDoc(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 1, UNIT_POINTS,
                FACINGPAGES, FIRSTPAGERIGHT)
</translation>
    </message>
    <message>
        <source>closeMasterPage()

Closes the currently active master page, if any, and returns editing
to normal. Begin editing with editMasterPage().
</source>
        <translation>closeMasterPage()

Fecha a páxina mestra activa, de habela, e volve á edición normal.
Comece a editar con editMasterPage().</translation>
    </message>
    <message>
        <source>masterPageNames()

Returns a list of the names of all master pages in the document.
</source>
        <translation>masterPageNames()

Devolve unha lista cos nomes de todas as páxinas mestras do documento.</translation>
    </message>
    <message>
        <source>editMasterPage(pageName)

Enables master page editing and opens the named master page
for editing. Finish editing with closeMasterPage().
</source>
        <translation>editMasterPage(pageName)

Permite a edición da páxina mestra e abre para edición a páxina mestra
dese nome. Remate a edición con closeMasterPage().</translation>
    </message>
    <message>
        <source>createMasterPage(pageName)

Creates a new master page named pageName and opens it for
editing.
</source>
        <translation>createMasterPage(nomePáxina)

Crea unha páxina mestra nova chamada nomePáxina e ábrea para editar.</translation>
    </message>
    <message>
        <source>deleteMasterPage(pageName)

Delete the named master page.
</source>
        <translation>deleteMasterPage(nomePáxina)

Elimina a páxina mestra con ese nome.</translation>
    </message>
    <message>
        <source>zoomDocument(double)

Zoom the document in main GUI window. Actions have whole number
values like 20.0, 100.0, etc. Zoom to Fit uses -100 as a marker.
</source>
        <translation>zoomDocument(dobre)

Amplía o documento na xanela principal. As accións teñen valores redondos
como 20.0, 100.0, etc. Ampliar até Axustar utiliza -100 como marcador.</translation>
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
</context>
<context>
    <name>About</name>
    <message>
        <source>About Scribus%1%2</source>
        <translation type="obsolete">Acerca de Scribus%1%2</translation>
    </message>
    <message>
        <source>%1. %2 %3 </source>
        <translation type="obsolete">%1. %2 %3 </translation>
    </message>
    <message>
        <source>Scribus Version %1
%2 %3</source>
        <translation type="obsolete">Scribus, Versión %1
%2 %3</translation>
    </message>
    <message>
        <source>Build-ID:</source>
        <translation type="obsolete">ID da compilación:</translation>
    </message>
    <message>
        <source>Programming:</source>
        <translation type="obsolete">Programación:</translation>
    </message>
    <message>
        <source>Contributions from:</source>
        <translation>Contribucións de:</translation>
    </message>
    <message>
        <source>Windows port:</source>
        <translation type="obsolete">Portaxe a Windows:</translation>
    </message>
    <message>
        <source>Documentation:</source>
        <translation type="obsolete">Documentación:</translation>
    </message>
    <message>
        <source>German:</source>
        <translation type="obsolete">Alemán:</translation>
    </message>
    <message>
        <source>French:</source>
        <translation type="obsolete">Francés:</translation>
    </message>
    <message>
        <source>Spanish and Catalan:</source>
        <translation type="obsolete">Español e Catalán:</translation>
    </message>
    <message>
        <source>Italian:</source>
        <translation type="obsolete">Italiano:</translation>
    </message>
    <message>
        <source>Hungarian:</source>
        <translation type="obsolete">Húngaro:</translation>
    </message>
    <message>
        <source>Ukrainian:</source>
        <translation type="obsolete">Ucraniano:</translation>
    </message>
    <message>
        <source>Bulgarian:</source>
        <translation type="obsolete">Búlgaro:</translation>
    </message>
    <message>
        <source>Galician:</source>
        <translation type="obsolete">Galego:</translation>
    </message>
    <message>
        <source>Turkish:</source>
        <translation type="obsolete">Turco:</translation>
    </message>
    <message>
        <source>Lithuanian:</source>
        <translation type="obsolete">Lituano:</translation>
    </message>
    <message>
        <source>Polish:</source>
        <translation type="obsolete">Polonés:</translation>
    </message>
    <message>
        <source>Czech:</source>
        <translation type="obsolete">Checo:</translation>
    </message>
    <message>
        <source>Slovak:</source>
        <translation type="obsolete">Eslovaco:</translation>
    </message>
    <message>
        <source>Danish:</source>
        <translation type="obsolete">Dinamarqués:</translation>
    </message>
    <message>
        <source>Norwegian:</source>
        <translation type="obsolete">Noruegués:</translation>
    </message>
    <message>
        <source>English:</source>
        <translation type="obsolete">Inglés:</translation>
    </message>
    <message>
        <source>Welsh:</source>
        <translation type="obsolete">Galés:</translation>
    </message>
    <message>
        <source>Russian:</source>
        <translation type="obsolete">Ruso:</translation>
    </message>
    <message>
        <source>Brazilian:</source>
        <translation type="obsolete">Portugués do Brasil:</translation>
    </message>
    <message>
        <source>Finnish:</source>
        <translation type="obsolete">Finlandés:</translation>
    </message>
    <message>
        <source>Homepage and online reference</source>
        <translation type="obsolete">Sitio web e referencia en liña</translation>
    </message>
    <message>
        <source>Mailing list</source>
        <translation type="obsolete">Lista de corrreo</translation>
    </message>
    <message>
        <source>Bugs and feature requests</source>
        <translation type="obsolete">Erros e propostas de funcionalidades</translation>
    </message>
    <message>
        <source>Basque:</source>
        <translation type="obsolete">Basco:</translation>
    </message>
    <message>
        <source>Slovenian:</source>
        <translation type="obsolete">Esloveno:</translation>
    </message>
    <message>
        <source>This panel shows the version, build date and
 compiled in library support in Scribus
The C-C-T equates to C=CUPS C=littlecms T=TIFF support.
Missing library support is indicated by a *</source>
        <translation type="obsolete">Este painel mostra a versión, data da compilación e
soporte de librarías compiladas en Scribus
O C-C-T equivale a soporte C=CUPS C=littlecms T=TIFF.
Se falta o soporte dunha libraría, indícase con *</translation>
    </message>
    <message>
        <source>&amp;About</source>
        <translation>&amp;Acerca de</translation>
    </message>
    <message>
        <source>A&amp;uthors</source>
        <translation>A&amp;utores</translation>
    </message>
    <message>
        <source>&amp;Translations</source>
        <translation>&amp;Traducións</translation>
    </message>
    <message>
        <source>&amp;Online</source>
        <translation>&amp;En liña</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Fechar</translation>
    </message>
    <message>
        <source>About Scribus %1</source>
        <translation>Acerca de Scribus %1</translation>
    </message>
    <message>
        <source>Development Team:</source>
        <translation>Equipo de Desenvolvimento:</translation>
    </message>
    <message>
        <source>Official Documentation:</source>
        <translation>Documentación Oficial:</translation>
    </message>
    <message>
        <source>Other Documentation:</source>
        <translation>Outra Documentación:</translation>
    </message>
    <message>
        <source>Official Translations and Translators:</source>
        <translation>Traducións e Tradutores Oficiais:</translation>
    </message>
    <message>
        <source>Catalan:</source>
        <translation type="obsolete">Catalán:</translation>
    </message>
    <message>
        <source>English (British):</source>
        <translation type="obsolete">Inglés (británico):</translation>
    </message>
    <message>
        <source>Esperanto:</source>
        <translation type="obsolete">Esperanto:</translation>
    </message>
    <message>
        <source>Korean:</source>
        <translation type="obsolete">Coreano:</translation>
    </message>
    <message>
        <source>Serbian:</source>
        <translation type="obsolete">Serbio:</translation>
    </message>
    <message>
        <source>Spanish:</source>
        <translation type="obsolete">Español:</translation>
    </message>
    <message>
        <source>Swedish:</source>
        <translation type="obsolete">Sueco:</translation>
    </message>
    <message>
        <source>Previous Translation Contributors:</source>
        <translation>Contribuíron anteriormente coas súas traducións:</translation>
    </message>
    <message>
        <source>Homepage</source>
        <translation>Sitio web</translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation>Referencia en liña</translation>
    </message>
    <message>
        <source>Bugs and Feature Requests</source>
        <translation>Erros e Peticións</translation>
    </message>
    <message>
        <source>Mailing List</source>
        <translation>Lista de Correo</translation>
    </message>
    <message>
        <source>This panel shows the version, build date and
 compiled in library support in Scribus
The C-C-T equates to C=littlecms C=CUPS T=TIFF support.
Missing library support is indicated by a *</source>
        <translation type="obsolete">Este painel mostra a versión, data de creación e
soporte de librarías compilado en Scribus.
C-C-T significa apoio a C=littlecms C=CUPS T=TIFF.
A ausencia de apoio a librarías indícase cun *</translation>
    </message>
    <message>
        <source>Portugese (Brazilian):</source>
        <translation type="obsolete">Portugués (Brasileiro):</translation>
    </message>
    <message>
        <source>%1 %2 %3 </source>
        <translation type="obsolete">%1 %2 %3 </translation>
    </message>
    <message>
        <source>Afrikaans:</source>
        <translation type="obsolete">Africaner:</translation>
    </message>
    <message>
        <source>Portuguese (Brazilian):</source>
        <translation type="obsolete">Portugués do Brasil:</translation>
    </message>
    <message>
        <source>Using GhostScript version %1</source>
        <translation type="obsolete">Utilizando a versión %1 de GhostScript</translation>
    </message>
    <message>
        <source>No GS version available</source>
        <translation type="obsolete">Non hai unha versión de GS disponíbel</translation>
    </message>
    <message>
        <source>Scribus Version %1
%2 %3 (%4)</source>
        <translation type="obsolete">Scribus Versión %1
%2 %3 (%4)</translation>
    </message>
    <message>
        <source>Mac OSX Aqua Port:</source>
        <translation type="obsolete">Portaxe ao Aqua de Mac OSX:</translation>
    </message>
    <message>
        <source>Windows Port:</source>
        <translation type="obsolete">Portaxe a Windows:</translation>
    </message>
    <message>
        <source>Wiki</source>
        <translation>Wiki</translation>
    </message>
    <message>
        <source>This panel shows the version, build date and compiled in library support in Scribus. The C-C-T-F equates to C=littlecms C=CUPS T=TIFF support F=Fontconfig support. Last Letter is the renderer C=cairo or A=libart Missing library support is indicated by a * This also indicates the version of Ghostscript which Scribus has detected.</source>
        <translation type="obsolete">Este painel mostra a versión, data de compilación e suporte de librarías compiladas en Scribus. C-C-T-F significa que se acepta C=littlecms C=CUPS T=TIFF F=Fontconfig. A última letra é o motor C=cairo ou A=libart. Se se aceptan librarías ausentes indícase cun *. Isto tamén indica a versión de Ghostscript detectada por Scribus.</translation>
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
        <translation>A utilizar Ghostscript versión %1</translation>
    </message>
    <message>
        <source>No Ghostscript version available</source>
        <translation>Non se dispón dunha versión do Ghostscript</translation>
    </message>
    <message>
        <source>&lt;b&gt;Scribus Version %1&lt;/b&gt;&lt;p&gt;%2&lt;br/&gt;%3 %4&lt;br/&gt;%5&lt;/p&gt;</source>
        <translation>&lt;b&gt;Versión %1 de Scribus&lt;/b&gt;&lt;p&gt;%2&lt;br/&gt;%3 %4&lt;br/&gt;%5&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Build ID:</source>
        <translation>ID da Compilación:</translation>
    </message>
    <message>
        <source>This panel shows the version, build date and compiled in library support in Scribus. The C-C-T-F equates to C=littlecms C=CUPS T=TIFF support F=Fontconfig support. Last Letter is the renderer C=cairo or A=libart Missing library support is indicated by a *. This also indicates the version of Ghostscript which Scribus has detected.</source>
        <translation>Este painel mostra a versión, data da compilación e soporte de librarías compiladas en Scribus. C-C-T-F equivale a C=littlecms C=CUPS T=soporta TIFF  F=soporta Fontconfig. A derradeira letra é o visualizador C=cairo ou A=libart. Se falla o soporte de librarías indícase cun *. Isto tamén indica a versión de Ghostscript detectada por Scribus.</translation>
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
        <source>March</source>
        <translation type="obsolete">Marzo</translation>
    </message>
    <message>
        <source>Tango Project Icons:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AboutPlugins</name>
    <message>
        <source>Yes</source>
        <translation>Si</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Non</translation>
    </message>
    <message>
        <source>Filename:</source>
        <translation>Nome do ficheiro:</translation>
    </message>
    <message>
        <source>Version:</source>
        <translation>Versión:</translation>
    </message>
    <message>
        <source>Enabled:</source>
        <translation>Habilitado:</translation>
    </message>
    <message>
        <source>Release Date:</source>
        <translation>Data de Publicación:</translation>
    </message>
    <message>
        <source>Description:</source>
        <translation>Descrición:</translation>
    </message>
    <message>
        <source>Author(s):</source>
        <translation>Autor/es:</translation>
    </message>
    <message>
        <source>Copyright:</source>
        <translation>Copyright:</translation>
    </message>
    <message>
        <source>License:</source>
        <translation>Licenza:</translation>
    </message>
</context>
<context>
    <name>AboutPluginsBase</name>
    <message>
        <source>Scribus: About Plug-ins</source>
        <translation>Scribus: Acerca das Extensións</translation>
    </message>
    <message>
        <source>File Name:</source>
        <translation type="obsolete">Nome do Ficheiro:</translation>
    </message>
    <message>
        <source>Version:</source>
        <translation type="obsolete">Versión:</translation>
    </message>
    <message>
        <source>Enabled:</source>
        <translation type="obsolete">Habilitado:</translation>
    </message>
    <message>
        <source>Release Date:</source>
        <translation type="obsolete">Data de Publicación:</translation>
    </message>
    <message>
        <source>Copyright:</source>
        <translation type="obsolete">Copyright:</translation>
    </message>
    <message>
        <source>Author(s):</source>
        <translation type="obsolete">Autor/es:</translation>
    </message>
    <message>
        <source>Description:</source>
        <translation type="obsolete">Descrición:</translation>
    </message>
    <message>
        <source>License:</source>
        <translation type="obsolete">Licenza:</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Fechar</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
</context>
<context>
    <name>ActionManager</name>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Novo</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Abrir...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Fechar</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Gardar</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Gardar &amp;Como...</translation>
    </message>
    <message>
        <source>Re&amp;vert to Saved</source>
        <translation>&amp;Volver ao Salvado</translation>
    </message>
    <message>
        <source>Collect for O&amp;utput...</source>
        <translation>Recoller para S&amp;aída...</translation>
    </message>
    <message>
        <source>Get Text...</source>
        <translation>Obter Texto...</translation>
    </message>
    <message>
        <source>Append &amp;Text...</source>
        <translation>Adicionar &amp;Texto...</translation>
    </message>
    <message>
        <source>Get Image...</source>
        <translation>Obter Imaxe...</translation>
    </message>
    <message>
        <source>Save &amp;Text...</source>
        <translation>Salvar &amp;Texto...</translation>
    </message>
    <message>
        <source>Save Page as &amp;EPS...</source>
        <translation>Salvar Páxina como &amp;EPS...</translation>
    </message>
    <message>
        <source>Save as P&amp;DF...</source>
        <translation>Salvar como P&amp;DF...</translation>
    </message>
    <message>
        <source>Document &amp;Setup...</source>
        <translation>&amp;Configuración do Documento...</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation>Im&amp;primir...</translation>
    </message>
    <message>
        <source>Print Previe&amp;w</source>
        <translation>Ante&amp;visión da Impresión</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation>&amp;Sair</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Desfacer</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Refacer</translation>
    </message>
    <message>
        <source>&amp;Item Action Mode</source>
        <translation>Modo de Acción do &amp;Elemento</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Recor&amp;tar</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copiar</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Pegar</translation>
    </message>
    <message>
        <source>C&amp;lear Contents</source>
        <translation type="obsolete">&amp;Limpar o Contido</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>Seleccion&amp;alo Todo</translation>
    </message>
    <message>
        <source>&amp;Deselect All</source>
        <translation>Non se&amp;leccionar nada</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation>Pr&amp;ocurar/Substituir...</translation>
    </message>
    <message>
        <source>Edit Image...</source>
        <translation>Modificar a Imaxe...</translation>
    </message>
    <message>
        <source>C&amp;olors...</source>
        <translation>C&amp;ores...</translation>
    </message>
    <message>
        <source>&amp;Paragraph Styles...</source>
        <translation>Estilos de &amp;Parágrafo...</translation>
    </message>
    <message>
        <source>&amp;Line Styles...</source>
        <translation>Estilos de &amp;Liña...</translation>
    </message>
    <message>
        <source>&amp;Master Pages...</source>
        <translation>Páxinas &amp;Mestras...</translation>
    </message>
    <message>
        <source>&amp;JavaScripts...</source>
        <translation>&amp;JavaScripts...</translation>
    </message>
    <message>
        <source>P&amp;references...</source>
        <translation>P&amp;referencias...</translation>
    </message>
    <message>
        <source>%1 pt</source>
        <translation>%1 pt</translation>
    </message>
    <message>
        <source>&amp;Other...</source>
        <translation>&amp;Outra...</translation>
    </message>
    <message>
        <source>&amp;Left</source>
        <translation>&amp;Esquerda</translation>
    </message>
    <message>
        <source>&amp;Center</source>
        <translation>&amp;Centro</translation>
    </message>
    <message>
        <source>&amp;Right</source>
        <translation>Di&amp;reita</translation>
    </message>
    <message>
        <source>&amp;Block</source>
        <translation>B&amp;loquear</translation>
    </message>
    <message>
        <source>&amp;Forced</source>
        <translation>&amp;Forzado</translation>
    </message>
    <message>
        <source>&amp;%1 %</source>
        <translation>&amp;%1 %</translation>
    </message>
    <message>
        <source>&amp;Normal</source>
        <translation>&amp;Normal</translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation>&amp;Subliñado</translation>
    </message>
    <message>
        <source>Underline &amp;Words</source>
        <translation>Subliñar as &amp;Palabras</translation>
    </message>
    <message>
        <source>&amp;Strike Through</source>
        <translation>&amp;Tachar</translation>
    </message>
    <message>
        <source>&amp;All Caps</source>
        <translation>Todo en &amp;Maiúsculas</translation>
    </message>
    <message>
        <source>Small &amp;Caps</source>
        <translation>Ver&amp;salitas</translation>
    </message>
    <message>
        <source>Su&amp;perscript</source>
        <translation>Su&amp;períndice</translation>
    </message>
    <message>
        <source>Su&amp;bscript</source>
        <translation>Su&amp;bíndice</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <translation type="obsolete">&amp;Esquema</translation>
    </message>
    <message>
        <source>S&amp;hadow</source>
        <translation>S&amp;ombra</translation>
    </message>
    <message>
        <source>&amp;Image Effects</source>
        <translation>Efectos de &amp;Imaxe</translation>
    </message>
    <message>
        <source>&amp;Tabulators...</source>
        <translation>T&amp;abuladores...</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;uplicar</translation>
    </message>
    <message>
        <source>&amp;Multiple Duplicate</source>
        <translation>Duplicados &amp;Múltiples</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation>A&amp;grupar</translation>
    </message>
    <message>
        <source>&amp;Ungroup</source>
        <translation>Desa&amp;grupar</translation>
    </message>
    <message>
        <source>Is &amp;Locked</source>
        <translation>Está B&amp;loqueado</translation>
    </message>
    <message>
        <source>Si&amp;ze is Locked</source>
        <translation>Tama&amp;ño Bloqueado</translation>
    </message>
    <message>
        <source>Lower to &amp;Bottom</source>
        <translation>Baixar para o &amp;Fondo</translation>
    </message>
    <message>
        <source>Raise to &amp;Top</source>
        <translation>Traer para &amp;Diante</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation>&amp;Baixar</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation>Subi&amp;r</translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation>Enviar para o Po&amp;rta-retallos</translation>
    </message>
    <message>
        <source>&amp;Attributes...</source>
        <translation>&amp;Atributos...</translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation>I&amp;maxe Visíbel</translation>
    </message>
    <message>
        <source>&amp;Update Image</source>
        <translation>Act&amp;ualizar a Imaxe</translation>
    </message>
    <message>
        <source>Adjust Frame to Image</source>
        <translation>Axustar a Moldura á Imaxe</translation>
    </message>
    <message>
        <source>Extended Image Properties</source>
        <translation>Propiedades extendidas da Imaxe</translation>
    </message>
    <message>
        <source>&amp;Low Resolution</source>
        <translation>Reso&amp;lución Baixa</translation>
    </message>
    <message>
        <source>&amp;Normal Resolution</source>
        <translation>Resolución &amp;Normal</translation>
    </message>
    <message>
        <source>&amp;Full Resolution</source>
        <translation>Resolución &amp;Completa</translation>
    </message>
    <message>
        <source>Is PDF &amp;Bookmark</source>
        <translation>É &amp;Marcador PDF</translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation>É A&amp;notación PDF</translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation>P&amp;ropriedades da Anotación</translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation>P&amp;ropriedades do Campo</translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation>&amp;Modificar a Forma...</translation>
    </message>
    <message>
        <source>&amp;Attach Text to Path</source>
        <translation>&amp;Ligar o Texto ao Trazo</translation>
    </message>
    <message>
        <source>&amp;Detach Text from Path</source>
        <translation>&amp;Desligar o Texto do Trazo</translation>
    </message>
    <message>
        <source>&amp;Combine Polygons</source>
        <translation>&amp;Combinar Polígonos</translation>
    </message>
    <message>
        <source>Split &amp;Polygons</source>
        <translation>Partir &amp;Polígonos</translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation>Curva de &amp;Bézier</translation>
    </message>
    <message>
        <source>&amp;Image Frame</source>
        <translation>Moldura de &amp;Imaxe</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <translation type="obsolete">C&amp;ontornos</translation>
    </message>
    <message>
        <source>&amp;Polygon</source>
        <translation>&amp;Polígono</translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation>Moldura de &amp;Texto</translation>
    </message>
    <message>
        <source>&amp;Glyph...</source>
        <translation>&amp;Glifo...</translation>
    </message>
    <message>
        <source>Sample Text</source>
        <translation>Texto de Mostra</translation>
    </message>
    <message>
        <source>&amp;Insert...</source>
        <translation>&amp;Inserir...</translation>
    </message>
    <message>
        <source>Im&amp;port...</source>
        <translation>Im&amp;portar...</translation>
    </message>
    <message>
        <source>&amp;Delete...</source>
        <translation>&amp;Eliminar...</translation>
    </message>
    <message>
        <source>&amp;Copy...</source>
        <translation>&amp;Copiar...</translation>
    </message>
    <message>
        <source>&amp;Move...</source>
        <translation>&amp;Mover...</translation>
    </message>
    <message>
        <source>&amp;Apply Master Page...</source>
        <translation>&amp;Aplicar Páxina Mestra...</translation>
    </message>
    <message>
        <source>Convert to Master Page...</source>
        <translation>Converter a Páxina Mestra...</translation>
    </message>
    <message>
        <source>Manage &amp;Guides...</source>
        <translation>Xerir as &amp;Guías...</translation>
    </message>
    <message>
        <source>Manage Page Properties...</source>
        <translation>Xerir as Propiedades da Páxina...</translation>
    </message>
    <message>
        <source>&amp;Fit in window</source>
        <translation>A&amp;xustar á xanela</translation>
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
        <translation>&amp;Miniaturas</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation>Mostrar as &amp;Marxes</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation>Mostrar as &amp;Molduras</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation>Mostrar as &amp;Imaxes</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation>Mostrar a &amp;Grella</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation>Mostrar as G&amp;uías</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation>Mostrar a Grella &amp;Base</translation>
    </message>
    <message>
        <source>Show &amp;Text Chain</source>
        <translation>Mostrar a Cadea de &amp;Texto</translation>
    </message>
    <message>
        <source>Show Control Characters</source>
        <translation>Mostrar os Caracteres de Control</translation>
    </message>
    <message>
        <source>Rulers relative to Page</source>
        <translation>Regras relativas á Páxina</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation>Aga&amp;rrarse á Grella</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation>A&amp;garrarse ás Guías</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>&amp;Propriedades</translation>
    </message>
    <message>
        <source>&amp;Scrapbook</source>
        <translation>&amp;Porta-retallos</translation>
    </message>
    <message>
        <source>&amp;Layers</source>
        <translation>&amp;Capas</translation>
    </message>
    <message>
        <source>&amp;Arrange Pages</source>
        <translation>&amp;Xerir as Páxinas</translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation>&amp;Marcadores</translation>
    </message>
    <message>
        <source>&amp;Measurements</source>
        <translation>&amp;Medidas</translation>
    </message>
    <message>
        <source>Action &amp;History</source>
        <translation>&amp;Historial das Accións</translation>
    </message>
    <message>
        <source>Preflight &amp;Verifier</source>
        <translation>Comprobador Pré-&amp;voo</translation>
    </message>
    <message>
        <source>&amp;Align and Distribute</source>
        <translation>&amp;Aliñar e Distribuir</translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation>&amp;Ferramentas</translation>
    </message>
    <message>
        <source>P&amp;DF Tools</source>
        <translation>Ferramentas P&amp;DF</translation>
    </message>
    <message>
        <source>Select Item</source>
        <translation>Escoller Elemento</translation>
    </message>
    <message>
        <source>T&amp;able</source>
        <translation>T&amp;abela</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>&amp;Forma</translation>
    </message>
    <message>
        <source>&amp;Line</source>
        <translation>&amp;Liña</translation>
    </message>
    <message>
        <source>&amp;Freehand Line</source>
        <translation>Liña a &amp;Man alzada</translation>
    </message>
    <message>
        <source>Rotate Item</source>
        <translation>Rotar Elemento</translation>
    </message>
    <message>
        <source>Zoom in or out</source>
        <translation>Achegarse ou Alonxarse</translation>
    </message>
    <message>
        <source>Zoom in</source>
        <translation>Achegarse</translation>
    </message>
    <message>
        <source>Zoom out</source>
        <translation>Alonxarse</translation>
    </message>
    <message>
        <source>Edit Contents of Frame</source>
        <translation>Modificar o Contido da Moldura</translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation>Modificar Texto...</translation>
    </message>
    <message>
        <source>Link Text Frames</source>
        <translation>Vincular as Molduras de Texto</translation>
    </message>
    <message>
        <source>Unlink Text Frames</source>
        <translation>Desvincular as Molduras de Texto</translation>
    </message>
    <message>
        <source>&amp;Eye Dropper</source>
        <translation>Conta&amp;gotas</translation>
    </message>
    <message>
        <source>Copy Item Properties</source>
        <translation>Copiar as Propriedades do Elemento</translation>
    </message>
    <message>
        <source>Edit the text with the Story Editor</source>
        <translation>Modificar o texto co Editor de Artigos</translation>
    </message>
    <message>
        <source>Insert Text Frame</source>
        <translation>Inserir Moldura de Texto</translation>
    </message>
    <message>
        <source>Insert Image Frame</source>
        <translation>Inserir Moldura de Imaxe</translation>
    </message>
    <message>
        <source>Insert Table</source>
        <translation>Inserir Tabela</translation>
    </message>
    <message>
        <source>Insert Shape</source>
        <translation>Inserir Forma</translation>
    </message>
    <message>
        <source>Insert Polygon</source>
        <translation>Inserir Polígono</translation>
    </message>
    <message>
        <source>Insert Line</source>
        <translation>Inserir Liña</translation>
    </message>
    <message>
        <source>Insert Bezier Curve</source>
        <translation>Inserir Curva de Bézier</translation>
    </message>
    <message>
        <source>Insert Freehand Line</source>
        <translation>Inserir Liña a Man Alzada</translation>
    </message>
    <message>
        <source>&amp;Manage Pictures</source>
        <translation>&amp;Xerir as Imaxes</translation>
    </message>
    <message>
        <source>&amp;Hyphenate Text</source>
        <translation>&amp;Cortar as palabras con guións</translation>
    </message>
    <message>
        <source>Dehyphenate Text</source>
        <translation>Retirar os guións do final das liñas</translation>
    </message>
    <message>
        <source>&amp;Generate Table Of Contents</source>
        <translation>&amp;Xerar un Índice</translation>
    </message>
    <message>
        <source>&amp;Cascade</source>
        <translation>&amp;Cascada</translation>
    </message>
    <message>
        <source>&amp;Tile</source>
        <translation>&amp;Mosaico</translation>
    </message>
    <message>
        <source>&amp;About Scribus</source>
        <translation>&amp;Acerca do Scribus</translation>
    </message>
    <message>
        <source>&amp;About Plug-ins</source>
        <translation>&amp;Sobre as Extensións</translation>
    </message>
    <message>
        <source>About &amp;Qt</source>
        <translation>Acerca do &amp;Qt</translation>
    </message>
    <message>
        <source>Toolti&amp;ps</source>
        <translation>Su&amp;xestións</translation>
    </message>
    <message>
        <source>Scribus &amp;Manual...</source>
        <translation>&amp;Manual do Scribus...</translation>
    </message>
    <message>
        <source>Smart &amp;Hyphen</source>
        <translation>&amp;Guións Finais de Liña</translation>
    </message>
    <message>
        <source>Non Breaking Dash</source>
        <translation>Guión que non quebra</translation>
    </message>
    <message>
        <source>Non Breaking &amp;Space</source>
        <translation>&amp;Espazo que non quebra</translation>
    </message>
    <message>
        <source>Page &amp;Number</source>
        <translation>&amp;Número de Páxina</translation>
    </message>
    <message>
        <source>New Line</source>
        <translation>Nova Liña</translation>
    </message>
    <message>
        <source>Frame Break</source>
        <translation>Salto de Moldura</translation>
    </message>
    <message>
        <source>Column Break</source>
        <translation>Salto de Columna</translation>
    </message>
    <message>
        <source>Copyright</source>
        <translation>Copyright</translation>
    </message>
    <message>
        <source>Registered Trademark</source>
        <translation>Marca rexistrada</translation>
    </message>
    <message>
        <source>Trademark</source>
        <translation>Marca rexistrada</translation>
    </message>
    <message>
        <source>Bullet</source>
        <translation>Imaxe para listas</translation>
    </message>
    <message>
        <source>Em Dash</source>
        <translation>Guión tamaño -m-</translation>
    </message>
    <message>
        <source>En Dash</source>
        <translation>Guión tamaño -n-</translation>
    </message>
    <message>
        <source>Figure Dash</source>
        <translation>Guión Números</translation>
    </message>
    <message>
        <source>Quotation Dash</source>
        <translation>Guión para diálogos</translation>
    </message>
    <message>
        <source>Apostrophe</source>
        <translation>Apóstrofe</translation>
    </message>
    <message>
        <source>Straight Double</source>
        <translation>Rectas Dobres</translation>
    </message>
    <message>
        <source>Single Left</source>
        <translation>Simple Esquerda</translation>
    </message>
    <message>
        <source>Single Right</source>
        <translation>Simple Dereita</translation>
    </message>
    <message>
        <source>Double Left</source>
        <translation>Dobre Esquerda</translation>
    </message>
    <message>
        <source>Double Right</source>
        <translation>Dobre Dereita</translation>
    </message>
    <message>
        <source>Single Reversed</source>
        <translation>Simple Invertida</translation>
    </message>
    <message>
        <source>Double Reversed</source>
        <translation>Dobre Invertida</translation>
    </message>
    <message>
        <source>Single Left Guillemet</source>
        <translation>Latina Simple Esquerda</translation>
    </message>
    <message>
        <source>Single Right Guillemet</source>
        <translation>Latina Simple Dereita</translation>
    </message>
    <message>
        <source>Double Left Guillemet</source>
        <translation>Latina Dobre Esquerda</translation>
    </message>
    <message>
        <source>Double Right Guillemet</source>
        <translation>Latina Dobre Dereita</translation>
    </message>
    <message>
        <source>Low Single Comma</source>
        <translation>Vírgula Baixa Simple</translation>
    </message>
    <message>
        <source>Low Double Comma</source>
        <translation>Vírgula Baixa Dobre</translation>
    </message>
    <message>
        <source>Double Turned Comma</source>
        <translation type="obsolete">Aspas dobres</translation>
    </message>
    <message>
        <source>CJK Single Left</source>
        <translation>Aspas chinesas (CJK) Sinxelas Esquerdas</translation>
    </message>
    <message>
        <source>CJK Single Right</source>
        <translation>Aspas chinesas (CJK) Sinxelas Dereitas</translation>
    </message>
    <message>
        <source>CJK Double Left</source>
        <translation>Aspas chinesas (CJK) Dobres Esquerdas</translation>
    </message>
    <message>
        <source>CJK Double Right</source>
        <translation>Aspas chinesas (CJK) Dobres Dereitas</translation>
    </message>
    <message>
        <source>Toggle Palettes</source>
        <translation>Des/Activar Paletas</translation>
    </message>
    <message>
        <source>Toggle Guides</source>
        <translation>Des/Activar Guías</translation>
    </message>
    <message>
        <source>More Info...</source>
        <translation>Máis información...</translation>
    </message>
    <message>
        <source>Copy Contents</source>
        <translation type="obsolete">Copiar o Contido</translation>
    </message>
    <message>
        <source>Paste Contents</source>
        <translation type="obsolete">Pegar o Contido</translation>
    </message>
    <message>
        <source>&amp;Printing Enabled</source>
        <translation>Im&amp;presión Permitida</translation>
    </message>
    <message>
        <source>&amp;Flip Horizontally</source>
        <translation>&amp;Voltear Horizontalmente</translation>
    </message>
    <message>
        <source>&amp;Flip Vertically</source>
        <translation>&amp;Voltear Verticalmente</translation>
    </message>
    <message>
        <source>Show Rulers</source>
        <translation>Mostrar as Regras</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <comment>Document Outline Palette</comment>
        <translation>&amp;Esquema

Paleta co Esquema do Documento</translation>
    </message>
    <message>
        <source>Solidus</source>
        <translation>Sólido</translation>
    </message>
    <message>
        <source>Middle Dot</source>
        <translation>Punto medio</translation>
    </message>
    <message>
        <source>En Space</source>
        <translation>Espazo de tamaño n</translation>
    </message>
    <message>
        <source>Em Space</source>
        <translation>Espazo de tamaño m</translation>
    </message>
    <message>
        <source>Thin Space</source>
        <translation>Espazo pequeno</translation>
    </message>
    <message>
        <source>Thick Space</source>
        <translation>Espazo ancho</translation>
    </message>
    <message>
        <source>Mid Space</source>
        <translation>Espazo mediano</translation>
    </message>
    <message>
        <source>Hair Space</source>
        <translation>Espazo finísimo</translation>
    </message>
    <message>
        <source>Insert Smart Hyphen</source>
        <translation>Inserir Hífen Intelixente</translation>
    </message>
    <message>
        <source>Insert Non Breaking Dash</source>
        <translation>Inserir Guión que Non Racha</translation>
    </message>
    <message>
        <source>Insert Non Breaking Space</source>
        <translation>Inserir Espazo que Non Racha</translation>
    </message>
    <message>
        <source>Insert Page Number</source>
        <translation>Inserir o Número da Páxina</translation>
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
        <source>Paste Contents (Absolute)</source>
        <translation type="obsolete">Pegar o Contido (Absoluto)</translation>
    </message>
    <message>
        <source>S&amp;tyles...</source>
        <translation>Es&amp;tilos...</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <comment>type effect</comment>
        <translation>C&amp;ontorno

efecto de tipo</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <comment>Convert to oulines</comment>
        <translation>C&amp;ontornos

Convertir a siluetas</translation>
    </message>
    <message>
        <source>Paste (&amp;Absolute)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="unfinished">&amp;Limpar</translation>
    </message>
    <message>
        <source>Show Text Frame Columns</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AdvOptions</name>
    <message>
        <source>Advanced Options</source>
        <translation type="obsolete">Opcións avanzadas</translation>
    </message>
    <message>
        <source>Creates PostScript Level 3</source>
        <translation type="obsolete">Crea PostScript Nível 3</translation>
    </message>
    <message>
        <source>Creates PostScript Level 2 only, beware,
this can create huge files</source>
        <translation type="obsolete">Crea só PostScript Nível 2. Atención: 
pódense crear ficheiros enormes</translation>
    </message>
    <message>
        <source>Creates PostScript Level 1 only, beware,
this can create huge files</source>
        <translation type="obsolete">Crea só PostScript Nível 1. Atención: 
pódense crear ficheiros enormes</translation>
    </message>
    <message>
        <source>Mirror Page(s) &amp;Horizontal</source>
        <translation type="obsolete">Reflexar a(s) Páxina(s) na &amp;Horizontal</translation>
    </message>
    <message>
        <source>Mirror Page(s) &amp;Vertical</source>
        <translation type="obsolete">Reflexar a(s) Páxina(s) na &amp;Vertical</translation>
    </message>
    <message>
        <source>Apply &amp;ICC Profiles</source>
        <translation type="obsolete">Aplicar os Perfís &amp;ICC</translation>
    </message>
    <message>
        <source>PostScript Level &amp;1</source>
        <translation type="obsolete">PostScript Nível &amp;1</translation>
    </message>
    <message>
        <source>PostScript Level &amp;2</source>
        <translation type="obsolete">PostScript Nível &amp;2</translation>
    </message>
    <message>
        <source>PostScript Level &amp;3</source>
        <translation type="obsolete">PostScript Nível &amp;3</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Apply Under Color &amp;Removal</source>
        <translation type="obsolete">Aplicar UC&amp;R</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="obsolete">Un xeito de apagar algunhas das sombras en gris compostas
de cian, amarelo e maxenta e usar negro no seu lugar.
O UCR afecta fundamentalmente ás partes das imaxes que teñen tons neutros e/ou escuros
perto do gris. Cando se usa pode mellorar a impresión dalgunhas imaxes,
ainda que é preciso experimentar segundo cada caso.
O UCR reduce a posibilidade dun exceso de saturación coas tintas CMY.</translation>
    </message>
    <message>
        <source>Set Media Size</source>
        <translation type="obsolete">Indicar o Tamaño do Medio</translation>
    </message>
    <message>
        <source>This enables you to explicitely set,
the media size of the postscript file.
Not recommended unless
 requested by your printer.</source>
        <translation type="obsolete">Isto permítelle indicar explicitamente
o tamaño do medio do ficheiro postscript.
Non se recomenda a non ser
que llo pida o seu impresor.</translation>
    </message>
</context>
<context>
    <name>Align</name>
    <message>
        <source>Distribute/Align</source>
        <translation type="obsolete">Distribuir/Aliñar</translation>
    </message>
    <message>
        <source>Align</source>
        <translation type="obsolete">Aliñar</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="obsolete">Horizontal</translation>
    </message>
    <message>
        <source>Left Sides</source>
        <translation type="obsolete">Lados Esquerdos</translation>
    </message>
    <message>
        <source>Middles</source>
        <translation type="obsolete">Medios</translation>
    </message>
    <message>
        <source>Right Sides</source>
        <translation type="obsolete">Lados Direitos</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="obsolete">Vertical</translation>
    </message>
    <message>
        <source>Top Sides</source>
        <translation type="obsolete">Lados Superiores</translation>
    </message>
    <message>
        <source>Bottom Sides</source>
        <translation type="obsolete">Lados Inferiores</translation>
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
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Apply</source>
        <translation type="obsolete">&amp;Aplicar</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>&amp;Between:</source>
        <translation type="obsolete">&amp;Entre:</translation>
    </message>
    <message>
        <source>A&amp;lign</source>
        <translation type="obsolete">A&amp;liñar</translation>
    </message>
    <message>
        <source>Di&amp;splacement</source>
        <translation type="obsolete">De&amp;sprazamento</translation>
    </message>
    <message>
        <source>Distribute &amp;Evenly</source>
        <translation type="obsolete">Distribuir &amp;Uniformemente</translation>
    </message>
    <message>
        <source>Bet&amp;ween:</source>
        <translation type="obsolete">Ent&amp;re:</translation>
    </message>
    <message>
        <source>Do &amp;Not Change</source>
        <translation type="obsolete">&amp;Non Modificar</translation>
    </message>
    <message>
        <source>Al&amp;ign</source>
        <translation type="obsolete">Al&amp;iñar</translation>
    </message>
    <message>
        <source>Dis&amp;placement</source>
        <translation type="obsolete">Des&amp;prazamento</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source>Distribute E&amp;venly</source>
        <translation type="obsolete">Distribuir U&amp;niformemente</translation>
    </message>
    <message>
        <source>&amp;Do Not Change</source>
        <translation type="obsolete">N&amp;on Modificar</translation>
    </message>
</context>
<context>
    <name>AlignDistributePalette</name>
    <message>
        <source>Align and Distribute</source>
        <translation>Aliñar e Distribuir</translation>
    </message>
    <message>
        <source>Align</source>
        <translation>Aliñar</translation>
    </message>
    <message>
        <source>&amp;Relative to:</source>
        <translation>&amp;Relativa a:</translation>
    </message>
    <message>
        <source>First Selected</source>
        <translation>Primeiro Seleccionado</translation>
    </message>
    <message>
        <source>Last Selected</source>
        <translation>Último Seleccionado</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Páxina</translation>
    </message>
    <message>
        <source>Margins</source>
        <translation>Marxes</translation>
    </message>
    <message>
        <source>Guide</source>
        <translation>Guía</translation>
    </message>
    <message>
        <source>Selection</source>
        <translation>Selección</translation>
    </message>
    <message>
        <source>Align right sides of objects to left side of anchor</source>
        <translation>Aliñar os lados direitos dos obxectso ao lado esquerdo da áncora</translation>
    </message>
    <message>
        <source>Align left sides of objects to right side of anchor</source>
        <translation>Aliñar os lados esquerdos dos obxectos ao lado direito da áncora</translation>
    </message>
    <message>
        <source>Align bottoms</source>
        <translation>Aliñar as partes inferiores</translation>
    </message>
    <message>
        <source>Align right sides</source>
        <translation>Aliñar os lados direitos</translation>
    </message>
    <message>
        <source>Align tops of objects to bottom of anchor</source>
        <translation>Aliñar as partes superiores dos obxectos á parte inferior da áncora</translation>
    </message>
    <message>
        <source>Center on vertical axis</source>
        <translation>Centrar sobre o eixo vertical</translation>
    </message>
    <message>
        <source>Align left sides</source>
        <translation>Aliñar os lados esquerdos</translation>
    </message>
    <message>
        <source>Center on horizontal axis</source>
        <translation>centrar no eixo horizontal</translation>
    </message>
    <message>
        <source>Align bottoms of objects to top of anchor</source>
        <translation>Aliñar as partes inferiores dos obxectos á parte superior da áncora</translation>
    </message>
    <message>
        <source>Align tops</source>
        <translation>Aliñar as partes superiores</translation>
    </message>
    <message>
        <source>&amp;Selected Guide:</source>
        <translation>Guía &amp;Seleccionada:</translation>
    </message>
    <message>
        <source>Distribute</source>
        <translation>Distribuir</translation>
    </message>
    <message>
        <source>Make horizontal gaps between objects equal</source>
        <translation>Facer que as distancias horizontais entre os obxectos sexa iguais</translation>
    </message>
    <message>
        <source>Make horizontal gaps between objects equal to the value specified</source>
        <translation>Facer que as distancias horizontais entre os obxectos sexa iguais ao valor indicado</translation>
    </message>
    <message>
        <source>Distribute right sides equidistantly</source>
        <translation>Distribuir os lados direitos equidistantes</translation>
    </message>
    <message>
        <source>Distribute bottoms equidistantly</source>
        <translation>Distribuir as partes inferiores equidistantes</translation>
    </message>
    <message>
        <source>Distribute centers equidistantly horizontally</source>
        <translation>Distribuir os centros equidistantes na horizontal</translation>
    </message>
    <message>
        <source>Make vertical gaps between objects equal</source>
        <translation>Facer que as distancias verticais entre os obxectos sexan iguais</translation>
    </message>
    <message>
        <source>Make vertical gaps between objects equal to the value specified</source>
        <translation>Facer que as distancias verticais entre os obxectos sexan iguais ao valor indicado</translation>
    </message>
    <message>
        <source>Distribute left sides equidistantly</source>
        <translation>Distribuir os lados esquerdos equidistantes</translation>
    </message>
    <message>
        <source>Distribute centers equidistantly vertically</source>
        <translation>Distribuir os centros equidistantes na vertical</translation>
    </message>
    <message>
        <source>Distribute tops equidistantly</source>
        <translation>Distribuir as partes inferiores equidistantes</translation>
    </message>
    <message>
        <source>&amp;Distance:</source>
        <translation>&amp;Distancia:</translation>
    </message>
    <message>
        <source>Distribute the items with the distance specified</source>
        <translation>Distribuir os elementos coa distancia indicada</translation>
    </message>
    <message>
        <source>None Selected</source>
        <translation>Nengunha Seleccionada</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Some objects are locked.</source>
        <translation>Algúns obxectos están bloqueadas.</translation>
    </message>
    <message>
        <source>&amp;Unlock All</source>
        <translation>&amp;Desbloquealo Todo</translation>
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
        <translation>Aliñar o Texto á Esquerda</translation>
    </message>
    <message>
        <source>Align Text Right</source>
        <translation>Aliñar o Texto á Dereita</translation>
    </message>
    <message>
        <source>Align Text Center</source>
        <translation>Centrar o Texto</translation>
    </message>
    <message>
        <source>Align Text Justified</source>
        <translation>Xustificar o Texto</translation>
    </message>
    <message>
        <source>Align Text Forced Justified</source>
        <translation>Xustificar o Texto forzando</translation>
    </message>
</context>
<context>
    <name>Annot</name>
    <message>
        <source>Field Properties</source>
        <translation>Propriedades do Campo</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Tipo:</translation>
    </message>
    <message>
        <source>Button</source>
        <translation>Botón</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation>Campo de Texto</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation>Caixa de Selección</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation>Caixa de Lista despregábel</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation>Caixa de Lista</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation>Propriedades</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Nome:</translation>
    </message>
    <message>
        <source>Tool-Tip:</source>
        <translation>Suxestión:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Texto</translation>
    </message>
    <message>
        <source>Border</source>
        <translation>Bordo</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Cor:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nengún</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation>Anchura:</translation>
    </message>
    <message>
        <source>Thin</source>
        <translation>Delgado</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Wide</source>
        <translation>Ancho</translation>
    </message>
    <message>
        <source>Style:</source>
        <translation>Estilo:</translation>
    </message>
    <message>
        <source>Solid</source>
        <translation>Sólido</translation>
    </message>
    <message>
        <source>Dashed</source>
        <translation>Tracexado</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation>Subliñado</translation>
    </message>
    <message>
        <source>Beveled</source>
        <translation>Biselado</translation>
    </message>
    <message>
        <source>Inset</source>
        <translation>Biselado interior</translation>
    </message>
    <message>
        <source>Other</source>
        <translation>Outro</translation>
    </message>
    <message>
        <source>Read Only</source>
        <translation>Só  Lectura</translation>
    </message>
    <message>
        <source>Required</source>
        <translation>Necesario</translation>
    </message>
    <message>
        <source>Don&apos;t Export Value</source>
        <translation>Non Exportar o Valor</translation>
    </message>
    <message>
        <source>Visibility:</source>
        <translation>Visibilidade:</translation>
    </message>
    <message>
        <source>Visible</source>
        <translation>Visíbel</translation>
    </message>
    <message>
        <source>Hidden</source>
        <translation>Escondido</translation>
    </message>
    <message>
        <source>No Print</source>
        <translation>Non Imprimir</translation>
    </message>
    <message>
        <source>No View</source>
        <translation>Non Ver</translation>
    </message>
    <message>
        <source>Appearance</source>
        <translation>Aparencia</translation>
    </message>
    <message>
        <source>Text for Button Down</source>
        <translation>Texto para Botón Presionado</translation>
    </message>
    <message>
        <source>Text for Roll Over</source>
        <translation>Texto para Pasar co Botón</translation>
    </message>
    <message>
        <source>Icons</source>
        <translation>Iconas</translation>
    </message>
    <message>
        <source>Use Icons</source>
        <translation>Usar Iconas</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <source>Pressed</source>
        <translation>Presionado</translation>
    </message>
    <message>
        <source>Roll Over</source>
        <translation>Pasar co Punteiro</translation>
    </message>
    <message>
        <source>Icon Placement...</source>
        <translation>Colocación da Icona...</translation>
    </message>
    <message>
        <source>Highlight</source>
        <translation>Resaltar</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation>Invertir</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation></translation>
    </message>
    <message>
        <source>Push</source>
        <translation>Premer</translation>
    </message>
    <message>
        <source>Multi-Line</source>
        <translation>Multi-Liña</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>Contrasinal</translation>
    </message>
    <message>
        <source>Limit of</source>
        <translation>Limite de</translation>
    </message>
    <message>
        <source>Characters</source>
        <translation>Caracteres</translation>
    </message>
    <message>
        <source>Do Not Scroll</source>
        <translation>Non Desprazar</translation>
    </message>
    <message>
        <source>Do Not Spell Check</source>
        <translation>Non Comprobar a Ortografía</translation>
    </message>
    <message>
        <source>Check Style:</source>
        <translation>Comprobar o Estilo:</translation>
    </message>
    <message>
        <source>Check</source>
        <translation>Comprobar</translation>
    </message>
    <message>
        <source>Cross</source>
        <translation>Cruz</translation>
    </message>
    <message>
        <source>Diamond</source>
        <translation>Rombo</translation>
    </message>
    <message>
        <source>Circle</source>
        <translation>Círculo</translation>
    </message>
    <message>
        <source>Star</source>
        <translation>Estrela</translation>
    </message>
    <message>
        <source>Square</source>
        <translation>Cuadrado</translation>
    </message>
    <message>
        <source>Default is Checked</source>
        <translation>Seleccionado por omisión</translation>
    </message>
    <message>
        <source>Editable</source>
        <translation>Modificábel</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opcións</translation>
    </message>
    <message>
        <source>Java Script</source>
        <translation type="obsolete">Java Script</translation>
    </message>
    <message>
        <source>Go To</source>
        <translation>Ir A</translation>
    </message>
    <message>
        <source>Submit Form</source>
        <translation>Enviar o Formulario</translation>
    </message>
    <message>
        <source>Reset Form</source>
        <translation>Limpar o Formulario</translation>
    </message>
    <message>
        <source>Import Data</source>
        <translation>Importar Datos</translation>
    </message>
    <message>
        <source>Event:</source>
        <translation>Evento:</translation>
    </message>
    <message>
        <source>Mouse Up</source>
        <translation>Rato Soltado</translation>
    </message>
    <message>
        <source>Mouse Down</source>
        <translation>Rato Premido</translation>
    </message>
    <message>
        <source>Mouse Enter</source>
        <translation>Entrar co Rato</translation>
    </message>
    <message>
        <source>Mouse Exit</source>
        <translation>Sair co Rato</translation>
    </message>
    <message>
        <source>On Focus</source>
        <translation>On Focus</translation>
    </message>
    <message>
        <source>On Blur</source>
        <translation>On Blur</translation>
    </message>
    <message>
        <source>Script:</source>
        <translation>Guión:</translation>
    </message>
    <message>
        <source>Edit...</source>
        <translation>Modificar...</translation>
    </message>
    <message>
        <source>Submit to URL:</source>
        <translation>Enviar a un URL:</translation>
    </message>
    <message>
        <source>Submit Data as HTML</source>
        <translation>Enviar os Datos como HTML</translation>
    </message>
    <message>
        <source>Import Data from:</source>
        <translation>Importar Datos desde:</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>Destino</translation>
    </message>
    <message>
        <source>To File:</source>
        <translation>Para o Ficheiro:</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation>Mudar...</translation>
    </message>
    <message>
        <source>Page:</source>
        <translation>Páxina:</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation>Posición X:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation>Posición Y:</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Acción</translation>
    </message>
    <message>
        <source>Field is formatted as:</source>
        <translation>O Campo está formatado como:</translation>
    </message>
    <message>
        <source>Plain</source>
        <translation>Sen formato</translation>
    </message>
    <message>
        <source>Number</source>
        <translation>Número</translation>
    </message>
    <message>
        <source>Percentage</source>
        <translation>Percentaxe</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Data</translation>
    </message>
    <message>
        <source>Time</source>
        <translation>Hora</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalizado</translation>
    </message>
    <message>
        <source>Number Format</source>
        <translation>Formato dos Números</translation>
    </message>
    <message>
        <source>Decimals:</source>
        <translation>Decimais:</translation>
    </message>
    <message>
        <source>Use Currency Symbol</source>
        <translation>Usar o Símbolo de Moeda</translation>
    </message>
    <message>
        <source>Prepend Currency Symbol</source>
        <translation>Antepor o Símbolo de Moeda</translation>
    </message>
    <message>
        <source>Formatting</source>
        <translation>Formatado</translation>
    </message>
    <message>
        <source>Percent Format</source>
        <translation>Formato das percentaxes</translation>
    </message>
    <message>
        <source>Date Format</source>
        <translation>Formato da data</translation>
    </message>
    <message>
        <source>Time Format</source>
        <translation>Formato da hora</translation>
    </message>
    <message>
        <source>Custom Scripts</source>
        <translation>Guións persoais</translation>
    </message>
    <message>
        <source>Format:</source>
        <translation>Formato:</translation>
    </message>
    <message>
        <source>Keystroke:</source>
        <translation>Atallo de teclado:</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>Formato</translation>
    </message>
    <message>
        <source>Value is not validated</source>
        <translation>O valor non foi validado</translation>
    </message>
    <message>
        <source>Value must be greater than or equal to:</source>
        <translation>O valor debe ser maior ou igual a:</translation>
    </message>
    <message>
        <source>and less or equal to:</source>
        <translation>e menor ou igual a:</translation>
    </message>
    <message>
        <source>Custom validate script:</source>
        <translation>Validación personalizada do guión:</translation>
    </message>
    <message>
        <source>Validate</source>
        <translation>Validar</translation>
    </message>
    <message>
        <source>Value is not calculated</source>
        <translation>O valor non está calculado</translation>
    </message>
    <message>
        <source>Value is the</source>
        <translation>O valor é </translation>
    </message>
    <message>
        <source>sum</source>
        <translation>a suma</translation>
    </message>
    <message>
        <source>product</source>
        <translation>o produto</translation>
    </message>
    <message>
        <source>average</source>
        <translation>a media</translation>
    </message>
    <message>
        <source>minimum</source>
        <translation>o mínimo</translation>
    </message>
    <message>
        <source>maximum</source>
        <translation>o máximo</translation>
    </message>
    <message>
        <source>of the following fields:</source>
        <translation>dos campos seguintes:</translation>
    </message>
    <message>
        <source>Pick...</source>
        <translation>Escoller...</translation>
    </message>
    <message>
        <source>Custom calculation script:</source>
        <translation>Guión de cálculo personalizado:</translation>
    </message>
    <message>
        <source>Calculate</source>
        <translation>Calcular</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>De acordo</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <source>Enter a comma separated list of fields here</source>
        <translation>Introducir aquí unha lista de campos separados por vírgulas</translation>
    </message>
    <message>
        <source>You need at least the Icon for Normal to use Icons for Buttons</source>
        <translation>É preciso, como mínimo, a Icona de Normal para usar Iconas en Botóns</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Images (*.tif *.png *.jpg *.xpm);;Postscript (*.eps);;All Files (*)</source>
        <translation type="obsolete">Imaxes (*.tif *.png *.jpg *.xpm);;Postscript (*.eps);;Todos (*)</translation>
    </message>
    <message>
        <source>Example:</source>
        <translation>Exemplo:</translation>
    </message>
    <message>
        <source>Selection Change</source>
        <translation>Modificación da Selección</translation>
    </message>
    <message>
        <source>Font for use with PDF 1.3:</source>
        <translation>Fonte a usar con PDF 1.3:</translation>
    </message>
    <message>
        <source>Flag is ignored for PDF 1.3</source>
        <translation>Ignórase a bandeira para PDF 1.3</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>Ficheiros PDF (*.pdf);;Todos (*)</translation>
    </message>
    <message>
        <source>JavaScript</source>
        <translation>JavaScript</translation>
    </message>
    <message>
        <source>Images (*.tif *.png *.jpg *.xpm);;PostScript (*.eps);;All Files (*)</source>
        <translation>Imaxes (*.tif *.png *.jpg *.xpm);;PostScript (*.eps);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>None</source>
        <comment>highlight</comment>
        <translation>Nengún

resalte</translation>
    </message>
    <message>
        <source>None</source>
        <comment>action</comment>
        <translation>Nengunha

acción</translation>
    </message>
</context>
<context>
    <name>Annota</name>
    <message>
        <source>Annotation Properties</source>
        <translation>Propriedades das Anotacións</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation type="obsolete">Tipo:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Texto</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Ligazón</translation>
    </message>
    <message>
        <source>External Link</source>
        <translation>Ligazón externa</translation>
    </message>
    <message>
        <source>External Web-Link</source>
        <translation>Ligazón-web externa</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation>Destino</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation type="obsolete">Modificar...</translation>
    </message>
    <message>
        <source>Page:</source>
        <translation type="obsolete">Páxina:</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation type="obsolete">Posición X:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation type="obsolete">Posición Y:</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">Dacordo</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Cancelar</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>PDF-Documents (*.pdf);;All Files (*)</source>
        <translation>Documentos PDF (*.pdf);;Todos (*)</translation>
    </message>
    <message>
        <source>&amp;Type:</source>
        <translation>&amp;Tipo:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>Cam&amp;biar...</translation>
    </message>
    <message>
        <source>&amp;Page:</source>
        <translation>&amp;Páxina:</translation>
    </message>
    <message>
        <source>&amp;X-Pos</source>
        <translation>Pos-&amp;X</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>Pos-&amp;Y:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>ApplyMasterPageDialog</name>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Apply Master Page</source>
        <translation>Aplicar Páxina Mestra</translation>
    </message>
    <message>
        <source>&amp;Master Page:</source>
        <translation>Páxina &amp;Mestra:</translation>
    </message>
    <message>
        <source>Apply To</source>
        <translation>Aplicar A</translation>
    </message>
    <message>
        <source>Current &amp;page</source>
        <translation>&amp;Páxina Actual</translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation>Alt+P</translation>
    </message>
    <message>
        <source>&amp;Even pages</source>
        <translation>Páxinas &amp;Pares</translation>
    </message>
    <message>
        <source>Alt+E</source>
        <translation>Alt+E</translation>
    </message>
    <message>
        <source>O&amp;dd pages</source>
        <translation>Páxinas &amp;Impares</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>&amp;All pages</source>
        <translation>Tod&amp;as as páxinas</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Within range</source>
        <translation>Dent&amp;ro do rango</translation>
    </message>
    <message>
        <source>Alt+W</source>
        <translation>Alt+W</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Apply the selected template to even, odd or all pages within the following range&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Aplicar o modelo seleccionado ás páxinas pares, impares ou a todas dentro do rango seguinte&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>to</source>
        <translation>a</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <source>Apply the selected master page to even, odd or all pages within the following range</source>
        <translation>Aplicar a páxina mestra seleccionada ás páxinas pares, impares ou a todas dentro do rango seguinte</translation>
    </message>
</context>
<context>
    <name>ApplyT</name>
    <message>
        <source>Apply Template</source>
        <translation type="obsolete">Aplicar un Modelo</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normal</translation>
    </message>
    <message>
        <source>&amp;Template:</source>
        <translation type="obsolete">&amp;Modelo:</translation>
    </message>
    <message>
        <source>Apply to &amp;Current Page</source>
        <translation type="obsolete">Aplicar á Páxina &amp;Actual</translation>
    </message>
    <message>
        <source>Apply from &amp;Page:</source>
        <translation type="obsolete">Aplicar desde a &amp;Páxina:</translation>
    </message>
    <message>
        <source>To:</source>
        <translation type="obsolete">Á:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Apply to all &amp;even Pages</source>
        <translation type="obsolete">Aplicar a todas as Páxinas p&amp;ares</translation>
    </message>
    <message>
        <source>Apply to all &amp;odd Pages</source>
        <translation type="obsolete">Aplicar a todas as Páxinas &amp;impares</translation>
    </message>
</context>
<context>
    <name>ArrowChooser</name>
    <message>
        <source>None</source>
        <translation>Nengunha</translation>
    </message>
</context>
<context>
    <name>Barcode</name>
    <message>
        <source>&amp;Barcode Generator...</source>
        <translation>Xerador de Códigos de &amp;Barras...</translation>
    </message>
    <message>
        <source>Scribus frontend for Pure Postscript Barcode Writer</source>
        <translation>Interface de Scribus para o Escritor de Códigos de Barras Postscript Puro</translation>
    </message>
</context>
<context>
    <name>BarcodeGenerator</name>
    <message>
        <source>Error opening file: %1</source>
        <translation>Erro ao abrir o ficheiro: %1</translation>
    </message>
    <message>
        <source>12 or 13 digits</source>
        <translation>12 ou 13 díxitos</translation>
    </message>
    <message>
        <source>8 digits</source>
        <translation>8 díxitos</translation>
    </message>
    <message>
        <source>11 or 12 digits</source>
        <translation>11 ou 12 díxitos</translation>
    </message>
    <message>
        <source>7 or 8 digits</source>
        <translation>7 ou 8 díxitos</translation>
    </message>
    <message>
        <source>5 digits</source>
        <translation>5 díxitos</translation>
    </message>
    <message>
        <source>2 digits</source>
        <translation>2 díxitos</translation>
    </message>
    <message>
        <source>9 or 10 digits separated appropriately with dashes</source>
        <translation>9 ou 10 díxitos separados adecuadamente por guións</translation>
    </message>
    <message>
        <source>Variable number of characters, digits and any of the symbols -. *$/+%.</source>
        <translation>Número variábel de caracteres, díxitos e calquer dos símbolos -.*$/+%.</translation>
    </message>
    <message>
        <source>Variable number of ASCII characters and special function symbols, starting with the appropriate start character for the initial character set. UCC/EAN-128s must have a mandatory FNC 1 symbol immediately following the start character.</source>
        <translation>Número variábel de caracteres ASCII e símbolos especiais de función, a comezar co carácter de inicio apropiado para o conxunto de caracteres iniciais. UCC/EAN-128s debe ter un símbolo FNC 1 obrigatorio que siga inmediatamente ao carácter de inicio.</translation>
    </message>
    <message>
        <source>Variable number of digits and any of the symbols -$:/.+ABCD.</source>
        <translation>Número variábel de díxitos e calquer dos símbolos -$:/.+ABCD.</translation>
    </message>
    <message>
        <source>Variable number of digits. An ITF-14 is 14 characters and does not have a check digit</source>
        <translation>Número variábel de díxitos. Un ITF-14 son 14 caracteres e non ten un díxito de control</translation>
    </message>
    <message>
        <source>Variable number of digits</source>
        <translation>Número variábel de díxitos</translation>
    </message>
    <message>
        <source>Variable number of digits and capital letters</source>
        <translation>Número variábel de díxitos e maiúsculas</translation>
    </message>
    <message>
        <source>Variable number of hexadecimal characters</source>
        <translation>Número variábel de caracteres hexadecimais</translation>
    </message>
    <message>
        <source>Barcode incomplete</source>
        <translation>Código de barras incompleto</translation>
    </message>
</context>
<context>
    <name>BarcodeGeneratorBase</name>
    <message>
        <source>Barcode Creator</source>
        <translation>Creador de Códigos de Barras</translation>
    </message>
    <message>
        <source>Barcode</source>
        <translation>Código de Barras</translation>
    </message>
    <message>
        <source>&amp;Type:</source>
        <translation>&amp;Tipo:</translation>
    </message>
    <message>
        <source>Select one of the available barcode type here</source>
        <translation>Escolla aquí un dos tipos disponíbeis de códigos de barras</translation>
    </message>
    <message>
        <source>The numeric representation of the code itself. See the help message below</source>
        <translation>A representación numérica do código mesmo. Consulte a mensaxe de axuda de embaixo</translation>
    </message>
    <message>
        <source>Reset the barcode samples</source>
        <translation>Limpar as mostras de código de barras</translation>
    </message>
    <message>
        <source>&amp;Include text in barcode</source>
        <translation>&amp;Incluir texto no código de barras</translation>
    </message>
    <message>
        <source>Alt+I</source>
        <translation>Alt+I</translation>
    </message>
    <message>
        <source>If checked, there will be numbers in the barcode too</source>
        <translation>Se se selecciona, tamén aparecerán números no código de barras</translation>
    </message>
    <message>
        <source>&amp;Guard whitespace</source>
        <translation>&amp;Gardar espazo en branco</translation>
    </message>
    <message>
        <source>Alt+G</source>
        <translation>Alt+G</translation>
    </message>
    <message>
        <source>Draw arrows to be sure of space next the code</source>
        <translation>Debuxar flechas para asegurar o espazo acarón do código</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Cores</translation>
    </message>
    <message>
        <source>&amp;Background</source>
        <translation>&amp;Fondo</translation>
    </message>
    <message>
        <source>Alt+B</source>
        <translation>Alt+B</translation>
    </message>
    <message>
        <source>Background color - under the code lines</source>
        <translation>Cor de fodno - baixo as liñas do código</translation>
    </message>
    <message>
        <source>&amp;Lines</source>
        <translation>&amp;Liñas</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <source>Color of the lines in barcode</source>
        <translation>Cor das liñas do código de barras</translation>
    </message>
    <message>
        <source>&amp;Text</source>
        <translation>&amp;Texto</translation>
    </message>
    <message>
        <source>Alt+T</source>
        <translation>Alt+T</translation>
    </message>
    <message>
        <source>Color of the text and numbers</source>
        <translation>Cor do texto e dos números</translation>
    </message>
    <message>
        <source>Hints and help is shown here</source>
        <translation>Aquí se mostran suxestións e axuda</translation>
    </message>
    <message>
        <source>Preview of the result. 72dpi sample.</source>
        <translation>Antevisión do resultado. Mostra a 72dpi.</translation>
    </message>
    <message>
        <source>Make check digit visible in text</source>
        <translation type="obsolete">Facer que o código de control se vexa no texto</translation>
    </message>
    <message>
        <source>Co&amp;de:</source>
        <translation>Có&amp;digo:</translation>
    </message>
    <message>
        <source>I&amp;nclude checksum</source>
        <translation>I&amp;ncluir checksum</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation>Alt+N</translation>
    </message>
    <message>
        <source>Generate and include a checksum in barcode</source>
        <translation>Xerar e incluir unha checksum no código de barras</translation>
    </message>
    <message>
        <source>Incl&amp;ude checksum digit</source>
        <translation>Incl&amp;uir o díxito de checksum</translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation>Alt+U</translation>
    </message>
    <message>
        <source>Include the checksum digit in the barcode text</source>
        <translation>Incluir o díxito de checksum no texto do código de barras</translation>
    </message>
</context>
<context>
    <name>Biblio</name>
    <message>
        <source>Scrapbook</source>
        <translation>Porta-retallos</translation>
    </message>
    <message>
        <source>Scrapbooks (*.scs);;All Files (*)</source>
        <translation type="obsolete">Porta-retallos (*.scs);;Todos (*)</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <source>Object</source>
        <translation>Obxecto</translation>
    </message>
    <message>
        <source>New Entry</source>
        <translation>Entrada Nova</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Mudar o Nome</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="obsolete">O nome &quot;%1&quot; non é único.
Escolla outro.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">De acordo</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Novo</translation>
    </message>
    <message>
        <source>&amp;Load...</source>
        <translation>&amp;Carregar...</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="obsolete">&amp;Gardar</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Gardar &amp;Como...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Fechar</translation>
    </message>
    <message>
        <source>&amp;Small</source>
        <translation type="obsolete">&amp;Pequena</translation>
    </message>
    <message>
        <source>&amp;Medium</source>
        <translation type="obsolete">&amp;Mediana</translation>
    </message>
    <message>
        <source>&amp;Large</source>
        <translation type="obsolete">&amp;Grande</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Ficheiro</translation>
    </message>
    <message>
        <source>&amp;Preview</source>
        <translation>&amp;Vista Previa</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nome:</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; is not unique.
Please choose another.</source>
        <translation>O nome &quot;%1&quot; non é único.
Escolla outro.</translation>
    </message>
    <message>
        <source>Choose a Scrapbook Directory</source>
        <translation>Escolla un Directorio Porta-retallos</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Escolla un Directorio</translation>
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
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>BookMView</name>
    <message>
        <source>Bookmarks</source>
        <translation>Marcadores</translation>
    </message>
    <message>
        <source>Move Bookmark</source>
        <translation>Mover Marcador</translation>
    </message>
    <message>
        <source>Insert Bookmark</source>
        <translation>Inserir Marcador</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
</context>
<context>
    <name>BookPalette</name>
    <message>
        <source>Bookmarks</source>
        <translation>Marcadores</translation>
    </message>
</context>
<context>
    <name>ButtonIcon</name>
    <message>
        <source>Icon Placement</source>
        <translation>Colocación das Iconas</translation>
    </message>
    <message>
        <source>Layout:</source>
        <translation>Disposición:</translation>
    </message>
    <message>
        <source>Caption only</source>
        <translation>Só o rótulo</translation>
    </message>
    <message>
        <source>Icon only</source>
        <translation>Só a icona</translation>
    </message>
    <message>
        <source>Caption below Icon</source>
        <translation>O rótulo por baixo da Icona</translation>
    </message>
    <message>
        <source>Caption above Icon</source>
        <translation>O rótulo por cima da Icona</translation>
    </message>
    <message>
        <source>Caption right to Icon</source>
        <translation>O rótulo á dereita da Icona</translation>
    </message>
    <message>
        <source>Caption left to Icon</source>
        <translation>O rótulo á esquerda da Icona</translation>
    </message>
    <message>
        <source>Caption overlays Icon</source>
        <translation>O rótulo sobreposto á Icona</translation>
    </message>
    <message>
        <source>Scale:</source>
        <translation>Escala:</translation>
    </message>
    <message>
        <source>Always</source>
        <translation>Sempre</translation>
    </message>
    <message>
        <source>When Icon is too big</source>
        <translation>Cando a Icona é demasiado grande</translation>
    </message>
    <message>
        <source>Never</source>
        <translation>Nunca</translation>
    </message>
    <message>
        <source>Scale How:</source>
        <translation>Como Escalar:</translation>
    </message>
    <message>
        <source>Proportional</source>
        <translation>Proporcional</translation>
    </message>
    <message>
        <source>Non Proportional</source>
        <translation>Non Proporcional</translation>
    </message>
    <message>
        <source>Icon</source>
        <translation>Icona</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>De acordo</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <source>Reset</source>
        <translation>Configuración inicial</translation>
    </message>
    <message>
        <source>When Icon is too small</source>
        <translation>Cando a Icona é demasiado pequena</translation>
    </message>
</context>
<context>
    <name>CMSPrefs</name>
    <message>
        <source>Color Management Settings</source>
        <translation type="obsolete">Configuración da Xestión das Cores</translation>
    </message>
    <message>
        <source>System Profiles</source>
        <translation>Perfís do Sistema</translation>
    </message>
    <message>
        <source>Rendering Intents</source>
        <translation>Tipo de Exhibición</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Perceptual</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Colorimétrico relativo</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Saturazón</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Colorimétrico absoluto</translation>
    </message>
    <message>
        <source>Default color profile for imported images</source>
        <translation type="obsolete">Perfil de cores por omisión para as imaxes importadas</translation>
    </message>
    <message>
        <source>Default color profile for solid colors on the page</source>
        <translation>Perfil de cores por omisión para as cores sólidas na páxina</translation>
    </message>
    <message>
        <source>Color profile that you have generated or received from the manufacturer.
This profile should be specific to your monitor and not a generic profile (i.e. sRGB).</source>
        <translation>Perfil de cores que vostede xerou ou recebeu do fabricante.
Este perfil debería ser específico do seu monitor e non un perfil xenérico (ou sexa, sRGB).</translation>
    </message>
    <message>
        <source>Color profile for your printer model from the manufacturer.
This profile should be specific to your printer and not a generic profile (i.e. sRGB).</source>
        <translation>Perfil de cores para o seu modelo de impresora que forneceu o fabricante.
Este perfil debería ser específico da súa impresora e non un perfil xenérico (ou sexa, sRGB).</translation>
    </message>
    <message>
        <source>Black Point Compensation is a method of improving contrast in photos.
It is recommended that you enable this if you have photos in your document.</source>
        <translation>Compensación do Punto Negro é un método para mellorar o contraste nas fotografías.
Recoméndase que a permita se ten fotos no seu documento.</translation>
    </message>
    <message>
        <source>Default rendering intent for your monitor. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation>Exhibición por omisión para o seu monitor. De non ter unha boa razón para mudala,
limítese a escoller Colorimétrica Relativa ou Perceptual.</translation>
    </message>
    <message>
        <source>Default rendering intent for your printer. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation>Exhibición por omisión para a súa impresora. De non ter unha boa razón para mudala,
limítese a escoller Colorimétrica Relativa ou Perceptual.</translation>
    </message>
    <message>
        <source>Enable &apos;soft proofing&apos; of how your document colors will print,
based on the chosen printer profile.</source>
        <translation>Permitir &quot;probas virtuais&quot; de como se imprimirán as cores do seu documento,
baseadas no perfil de impresora escollido.</translation>
    </message>
    <message>
        <source>Method of showing colors on the screen which may not print properly.
This requires very accurate profiles and serves only as a warning.</source>
        <translation>Método polo que se mostran cores na pantalla que pode que non se impriman adecuadamente.
Isto require perfís moi exactos e só serve como advertencia.</translation>
    </message>
    <message>
        <source>&amp;Activate Color Management</source>
        <translation>&amp;Activar a Xestión das Cores</translation>
    </message>
    <message>
        <source>&amp;Pictures:</source>
        <translation type="obsolete">&amp;Imaxes:</translation>
    </message>
    <message>
        <source>&amp;Solid Colors:</source>
        <translation>Cores &amp;Sólidas:</translation>
    </message>
    <message>
        <source>&amp;Monitor:</source>
        <translation>&amp;Monitor:</translation>
    </message>
    <message>
        <source>P&amp;rinter:</source>
        <translation>Im&amp;resora:</translation>
    </message>
    <message>
        <source>M&amp;onitor:</source>
        <translation>M&amp;onitor:</translation>
    </message>
    <message>
        <source>Pr&amp;inter:</source>
        <translation>Impres&amp;ora:</translation>
    </message>
    <message>
        <source>Sim&amp;ulate Printer on the Screen</source>
        <translation>Sim&amp;ular a Impresora na Pantalla</translation>
    </message>
    <message>
        <source>Mark Colors out of &amp;Gamut</source>
        <translation>Marcar Cores da &amp;Gama</translation>
    </message>
    <message>
        <source>Use &amp;Blackpoint Compensation</source>
        <translation>Usar a Compensación de Punto &amp;Negro</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>&amp;RGB Pictures:</source>
        <translation>Imaxes &amp;RGB:</translation>
    </message>
    <message>
        <source>&amp;CMYK Pictures:</source>
        <translation>Imaxes &amp;CMYK:</translation>
    </message>
    <message>
        <source>Default color profile for imported CMYK images</source>
        <translation>Perfil de cor por omisión para as imaxes CMYK importadas</translation>
    </message>
    <message>
        <source>Default color profile for imported RGB images</source>
        <translation>Perfil de cor por omisión para as imaxes RGB importadas</translation>
    </message>
</context>
<context>
    <name>CMYKChoose</name>
    <message>
        <source>Edit Color</source>
        <translation>Mudar a Cor</translation>
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
        <translation>RGB preparada para a Web</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Nova</translation>
    </message>
    <message>
        <source>Old</source>
        <translation>Vella</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">De acordo</translation>
    </message>
    <message>
        <source>C:</source>
        <translation>Cián[C]:</translation>
    </message>
    <message>
        <source>M:</source>
        <translation>Max.[M]:</translation>
    </message>
    <message>
        <source>Y:</source>
        <translation>Ama.[Y]:</translation>
    </message>
    <message>
        <source>K:</source>
        <translation>Neg.[K]:</translation>
    </message>
    <message>
        <source>Dynamic Color Bars</source>
        <translation>Barras de Cores Dinámicas</translation>
    </message>
    <message>
        <source>Static Color Bars</source>
        <translation>Barras de Cores Estáticas</translation>
    </message>
    <message>
        <source>R:</source>
        <translation>Vm:</translation>
    </message>
    <message>
        <source>G:</source>
        <translation>Vd:</translation>
    </message>
    <message>
        <source>B:</source>
        <translation>Az:</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Name of the Color is not unique</source>
        <translation type="obsolete">O nome da Cor non é único</translation>
    </message>
    <message>
        <source>HSV-Colormap</source>
        <translation>Mapa de Cores HSV</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nome:</translation>
    </message>
    <message>
        <source>Color &amp;Model</source>
        <translation>&amp;Modelo de Cor</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengunha</translation>
    </message>
    <message>
        <source>You cannot create a color named &quot;%1&quot;.
It&apos;s a reserved name for transparent color</source>
        <translation type="obsolete">Non pode crear unha cor chamada &quot;%1&quot;.
É un nome reservado para a cor transparente</translation>
    </message>
    <message>
        <source>Is Spot Color</source>
        <translation>É Mancha de Cor</translation>
    </message>
    <message>
        <source>Is Registration Color</source>
        <translation>É Cor do Rexistro</translation>
    </message>
    <message>
        <source>You cannot create a color named &quot;%1&quot;.
It is a reserved name for transparent color</source>
        <translation>Non pode crear unha cor que se chame &quot;%1&quot;.
É un nome reservado para a cor transparente</translation>
    </message>
    <message>
        <source>Name of the color is not unique</source>
        <translation>O nome da cor non é único</translation>
    </message>
    <message>
        <source>Choosing this will enable printing this on all plates. Registration colors are used for printer marks such as crop marks, registration marks and the like. These are not typically used in the layout itself.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choosing this will make this color a spot color, thus creating another spot when creating plates or separations. This is used most often when a logo or other color needs exact representation or cannot be replicated with CMYK inks. Metallic and fluorescent inks are good examples which cannot be easily replicated with CMYK inks.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ChTable</name>
    <message>
        <source>You can see a thumbnail if you press
and hold down the right mouse button

The Insert key inserts a Glyph into the Selection below
and the Delete key removes the last inserted one</source>
        <translation type="obsolete">Pódese crear unha miniatura se preme
e mantén o botón direito do rato.

A tecla Inserir insire un Glifo na Selección de abaixo
e a tecla Eliminar elimina o último que se inseriu</translation>
    </message>
    <message>
        <source>You can see a thumbnail if you press and hold down the right mouse button. The Insert key inserts a Glyph into the Selection below and the Delete key removes the last inserted one</source>
        <translation>Pode ver unha miniatura se preme e mantén o botón dereito do rato. A tecla Inserir insire un Glifo na Selección de embaixo e a tecla Eliminar elimina o último que se inseriu</translation>
    </message>
</context>
<context>
    <name>CharSelect</name>
    <message>
        <source>Select Character:</source>
        <translation>Escoller Carácter:</translation>
    </message>
    <message>
        <source>Font:</source>
        <translation>Fonte:</translation>
    </message>
    <message>
        <source>Character Class:</source>
        <translation>Clase de Carácter:</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation>&amp;Inserir</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Limpar</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Fechar</translation>
    </message>
    <message>
        <source>Insert the characters at the cursor in the text</source>
        <translation>Inserir os caracteres no texto na posición do cursor</translation>
    </message>
    <message>
        <source>Delete the current selection(s).</source>
        <translation>Eliminar a(s) selección(s) actual/is.</translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing.</source>
        <translation type="obsolete">Fechar este diálogo e voltar á edición de texto.</translation>
    </message>
    <message>
        <source>Full Character Set</source>
        <translation>Conxunto de Caracteres Completo</translation>
    </message>
    <message>
        <source>Basic Latin</source>
        <translation>Latín Básico</translation>
    </message>
    <message>
        <source>Latin-1 Supplement</source>
        <translation>Latín-1 Suplementario</translation>
    </message>
    <message>
        <source>Latin Extended-A</source>
        <translation>Latín Extendido-A</translation>
    </message>
    <message>
        <source>Latin Extended-B</source>
        <translation>Latín Extendido-B</translation>
    </message>
    <message>
        <source>General Punctuation</source>
        <translation>Puntuación Xeral</translation>
    </message>
    <message>
        <source>Super- and Subscripts</source>
        <translation>Superíndices e Subíndices</translation>
    </message>
    <message>
        <source>Currency Symbols</source>
        <translation>Símbolos de Moeda</translation>
    </message>
    <message>
        <source>Letterlike Symbols</source>
        <translation>Símbolos parecidos a Letras</translation>
    </message>
    <message>
        <source>Number Forms</source>
        <translation>Formas de Números</translation>
    </message>
    <message>
        <source>Arrows</source>
        <translation>Flechas</translation>
    </message>
    <message>
        <source>Mathematical Operators</source>
        <translation>Operadores matemáticos</translation>
    </message>
    <message>
        <source>Box Drawing</source>
        <translation>Deseño de Caixas</translation>
    </message>
    <message>
        <source>Block Elements</source>
        <translation>Elementos de Bloco</translation>
    </message>
    <message>
        <source>Geometric Shapes</source>
        <translation>Formas Xeométricas</translation>
    </message>
    <message>
        <source>Miscellaneous Symbols</source>
        <translation>Símbolos Diversos</translation>
    </message>
    <message>
        <source>Dingbats</source>
        <translation>Debuxiños</translation>
    </message>
    <message>
        <source>Small Form Variants</source>
        <translation>Variantes Pequenas de Formas</translation>
    </message>
    <message>
        <source>Ligatures</source>
        <translation>Ligaturas</translation>
    </message>
    <message>
        <source>Specials</source>
        <translation>Especiais</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation>Grego</translation>
    </message>
    <message>
        <source>Greek Extended</source>
        <translation>Grego Extendido</translation>
    </message>
    <message>
        <source>Cyrillic</source>
        <translation>Cirílico</translation>
    </message>
    <message>
        <source>Cyrillic Supplement</source>
        <translation>Cirílico Suplementario</translation>
    </message>
    <message>
        <source>Arabic</source>
        <translation>Árabe</translation>
    </message>
    <message>
        <source>Arabic Extended A</source>
        <translation>Árabe Extendido A</translation>
    </message>
    <message>
        <source>Arabic Extended B</source>
        <translation>Árabe Extendido B</translation>
    </message>
    <message>
        <source>Hebrew</source>
        <translation>Hebreu</translation>
    </message>
    <message>
        <source>&amp;Insert Code:</source>
        <translation>&amp;Inserir Código:</translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing</source>
        <translation>Fechar este diálogo e voltar á edición de texto</translation>
    </message>
    <message>
        <source>Type in a four digit unicode value directly here</source>
        <translation>Introduza un valor unicode de catro díxitos aquí directamente</translation>
    </message>
</context>
<context>
    <name>CheckDocument</name>
    <message>
        <source>Glyphs missing</source>
        <translation>Glifos ausentes</translation>
    </message>
    <message>
        <source>Text overflow</source>
        <translation>Rebordo do texto</translation>
    </message>
    <message>
        <source>Object is not on a Page</source>
        <translation>O Obxecto non é unha Páxina</translation>
    </message>
    <message>
        <source>Missing Image</source>
        <translation>Falta a Imaxe</translation>
    </message>
    <message>
        <source>Image has a DPI-Value less than %1 DPI</source>
        <translation>A imaxe ten un Valor de DPI menor de %1 DPI</translation>
    </message>
    <message>
        <source>Object has transparency</source>
        <translation>O obxecto ten transparencia</translation>
    </message>
    <message>
        <source>Object is a PDF Annotation or Field</source>
        <translation>O obxecto é unha Anotación ou Campo PDF</translation>
    </message>
    <message>
        <source>Object is a placed PDF</source>
        <translation>O obxecto é un PDF colocado</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Documento</translation>
    </message>
    <message>
        <source>No Problems found</source>
        <translation>Non se atoparon problemas</translation>
    </message>
    <message>
        <source>Page </source>
        <translation>Páxina </translation>
    </message>
    <message>
        <source>Free Objects</source>
        <translation>Obxectos Libres</translation>
    </message>
    <message>
        <source>Problems found</source>
        <translation>Atopáronse Problemas</translation>
    </message>
    <message>
        <source>Preflight Verifier</source>
        <translation>Verificador Pré-voo</translation>
    </message>
    <message>
        <source>Items</source>
        <translation>Elementos</translation>
    </message>
    <message>
        <source>Problems</source>
        <translation>Problemas</translation>
    </message>
    <message>
        <source>Current Profile:</source>
        <translation>Perfil Actual:</translation>
    </message>
    <message>
        <source>&amp;Ignore Errors</source>
        <translation>&amp;Ignorar os Erros</translation>
    </message>
</context>
<context>
    <name>ChooseStyles</name>
    <message>
        <source>Choose Styles</source>
        <translation>Escolla Estilos</translation>
    </message>
    <message>
        <source>Available Styles</source>
        <translation>Estilos Disponíbeis</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">De acordo</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Cancelar</translation>
    </message>
</context>
<context>
    <name>CollectForOutput</name>
    <message>
        <source>Choose a Directory</source>
        <translation>Escolla un Directorio</translation>
    </message>
    <message>
        <source>Collecting...</source>
        <translation>Recollendo...</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Advertencia</translation>
    </message>
    <message>
        <source>Cannot collect all files for output for file:
%1</source>
        <translation>Non se poden recoller todos os ficheiros para a saída do ficheiro:
%1</translation>
    </message>
    <message>
        <source>Cannot collect the file: 
%1</source>
        <translation> Non se pode recoller o ficheiro:
%1</translation>
    </message>
</context>
<context>
    <name>ColorManager</name>
    <message>
        <source>Colors</source>
        <translation>Cores</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importar</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nova</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Modificar</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;uplicar</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>&amp;Remove Unused</source>
        <translation>Elimina&amp;r as que Non se Utilicen</translation>
    </message>
    <message>
        <source>Color Sets</source>
        <translation>Paletas de Cores</translation>
    </message>
    <message>
        <source>Current Color Set:</source>
        <translation>Paleta de Cores Actual:</translation>
    </message>
    <message>
        <source>&amp;Save Color Set</source>
        <translation>&amp;Salvar a Paleta de Cores</translation>
    </message>
    <message>
        <source>Choose a color set to load</source>
        <translation>Escolla a paleta de cores para carregar</translation>
    </message>
    <message>
        <source>Save the current color set</source>
        <translation>Salvar a paleta de cores actual</translation>
    </message>
    <message>
        <source>Remove unused colors from current document&apos;s color set</source>
        <translation>Eliminar as cores que non se utilicen da paleta de cores do documento actual</translation>
    </message>
    <message>
        <source>Import colors to the current set from an existing document</source>
        <translation>Importar cores á paleta actual desde un documento xa existente</translation>
    </message>
    <message>
        <source>Create a new color within the current set</source>
        <translation>Crear unha cor nova dentro da paleta actual</translation>
    </message>
    <message>
        <source>Edit the currently selected color</source>
        <translation>Modificar a cor seleccionada</translation>
    </message>
    <message>
        <source>Make a copy of the currently selected color</source>
        <translation>Facer unha copia da cor seleccionada</translation>
    </message>
    <message>
        <source>Delete the currently selected color</source>
        <translation>Eliminar a cor seleccionada</translation>
    </message>
    <message>
        <source>Make the current colorset the default color set</source>
        <translation>Facer que a paleta de cores actual sexa a predeterminada</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nome:</translation>
    </message>
    <message>
        <source>Choose a Name</source>
        <translation>Escolla un Nome</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documentos (*.sla *.sla.gz *.scd *.scd.gz);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documentos (*.sla *.scd);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Copiar de %1</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation>Cor Nova</translation>
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
        <translation>Monocromática</translation>
    </message>
    <message>
        <source>Analogous</source>
        <translation>Análoga</translation>
    </message>
    <message>
        <source>Complementary</source>
        <translation>Complementaria</translation>
    </message>
    <message>
        <source>Split Complementary</source>
        <translation>Complementaria Partida</translation>
    </message>
    <message>
        <source>Triadic</source>
        <translation>Triádica</translation>
    </message>
    <message>
        <source>Tetradic (Double Complementary)</source>
        <translation>Tetrádica (Complementaria Dobre)</translation>
    </message>
    <message>
        <source>Base Color</source>
        <translation>Cor Base</translation>
    </message>
    <message>
        <source>Monochromatic Light</source>
        <translation>Monocromática Clara</translation>
    </message>
    <message>
        <source>Monochromatic Dark</source>
        <translation>Monocromática Escura</translation>
    </message>
    <message>
        <source>1st. Analogous</source>
        <translation>Primeira Análoga</translation>
    </message>
    <message>
        <source>2nd. Analogous</source>
        <translation>Segunda Análoga</translation>
    </message>
    <message>
        <source>1st. Split</source>
        <translation>Primeira Partida</translation>
    </message>
    <message>
        <source>2nd. Split</source>
        <translation>Segunda Partida</translation>
    </message>
    <message>
        <source>3rd. Split</source>
        <translation>Terceira Partida</translation>
    </message>
    <message>
        <source>4th. Split</source>
        <translation>Cuarta Partida</translation>
    </message>
    <message>
        <source>1st. Triadic</source>
        <translation>Primeira Triádica</translation>
    </message>
    <message>
        <source>2nd. Triadic</source>
        <translation>Segunda Triádica</translation>
    </message>
    <message>
        <source>1st. Tetradic (base opposite)</source>
        <translation>Primeira Tetrádica (básica oposta)</translation>
    </message>
    <message>
        <source>2nd. Tetradic (angle)</source>
        <translation>Segunda Tetrádica (ángulo)</translation>
    </message>
    <message>
        <source>3rd. Tetradic (angle opposite)</source>
        <translation>Terceira Tetrádica (ángulo oposto)</translation>
    </message>
</context>
<context>
    <name>ColorWheelDialog</name>
    <message>
        <source>Normal Vision</source>
        <translation>Visión Normal</translation>
    </message>
    <message>
        <source>Protanopia (red)</source>
        <translation type="obsolete">Protanopia (vermello)</translation>
    </message>
    <message>
        <source>Deuteranopia (green)</source>
        <translation type="obsolete">Deuteranopia (verde)</translation>
    </message>
    <message>
        <source>Tritanopia (blue)</source>
        <translation type="obsolete">Tritanopia (azul)</translation>
    </message>
    <message>
        <source>Full Color Blindness</source>
        <translation>Cegueira Total para a Cor</translation>
    </message>
    <message>
        <source>Vision Defect:</source>
        <translation>Defecto de Visión:</translation>
    </message>
    <message>
        <source>Color Wheel</source>
        <translation>Roda de Cores</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Cor</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
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
        <translation>Método de Selección:</translation>
    </message>
    <message>
        <source>Angle (0 - 90 degrees):</source>
        <translation>Ángulo (0 - 90 graos):</translation>
    </message>
    <message>
        <source>&amp;Merge Colors</source>
        <translation>&amp;Xuntar Cores</translation>
    </message>
    <message>
        <source>&amp;Replace Colors</source>
        <translation>Substitui&amp;r Cores</translation>
    </message>
    <message>
        <source>Merge created colors into the document colors</source>
        <translation>xuntar as cores creadas nas cores do documento</translation>
    </message>
    <message>
        <source>Replace created colors in the document colors</source>
        <translation>Substituir as cores creadas nas cores do documento</translation>
    </message>
    <message>
        <source>Leave colors untouched</source>
        <translation>Deixar sen tocar as cores</translation>
    </message>
    <message>
        <source>Merging colors</source>
        <translation>A mesclar as cores</translation>
    </message>
    <message>
        <source>Error: </source>
        <translation>Erro:</translation>
    </message>
    <message>
        <source>Now opening the color manager.</source>
        <translation>Estáse a abrir o xestor de cores.</translation>
    </message>
    <message>
        <source>Color Merging</source>
        <translation>Mescla de Cores</translation>
    </message>
    <message>
        <source>Cr&amp;eate color...</source>
        <translation>Cr&amp;ear cor...</translation>
    </message>
    <message>
        <source>&amp;Import existing color...</source>
        <translation>&amp;Importar cor existente...</translation>
    </message>
    <message>
        <source>&amp;Merge colors</source>
        <translation>&amp;Mesclar cores</translation>
    </message>
    <message>
        <source>&amp;Replace colors</source>
        <translation>Substitui&amp;r cores</translation>
    </message>
    <message>
        <source>E&amp;xit</source>
        <translation>Sa&amp;ir</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation>C&amp;or</translation>
    </message>
    <message>
        <source>Saturation:</source>
        <translation type="obsolete">Saturación:</translation>
    </message>
    <message>
        <source>Value:</source>
        <translation type="obsolete">Valor:</translation>
    </message>
    <message>
        <source>Difference between the selected value and the counted ones. Refer to documentation for more information.</source>
        <translation>Diferenza entre o valor seleccionado e o contados. Consulte a documentación para máis información.</translation>
    </message>
    <message>
        <source>Saturation component in HSV mode</source>
        <translation type="obsolete">Comonente de saturación en modo HSV</translation>
    </message>
    <message>
        <source>Value component in HSV mode</source>
        <translation type="obsolete">Componente de valor en modo HSV</translation>
    </message>
    <message>
        <source>Click the wheel to get the base color. It is hue in HSV mode.</source>
        <translation>Faga clic na roda para obter a cor base. É ton no modo HSV.</translation>
    </message>
    <message>
        <source>Sample color scheme</source>
        <translation>Esquema de cor de mostra</translation>
    </message>
    <message>
        <source>Select one of the methods to create a color scheme. Refer to documentation for more information.</source>
        <translation>Escolla un dos métodos para crear un esquema de cores. Consulte a documentación para máis información.</translation>
    </message>
    <message>
        <source>Colors of your chosen color scheme</source>
        <translation>Cores do esquema de cores escollido</translation>
    </message>
    <message>
        <source>Simulate common vision defects here. Select type of the defect.</source>
        <translation>Simular aquí deficiencias de visión frecuentes. Escolla o tipo de deficiencia.</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation>Cor Nova</translation>
    </message>
    <message>
        <source>Unable to find the requested color. You have probably selected black, gray or white. There is no way to process this color.</source>
        <translation>Foi imposíbel atopar a cor solicitada. Posibelmente escolleu negro, gris ou branco. Non hai maneira de procesar esta cor.</translation>
    </message>
    <message>
        <source>C&amp;olor Components...</source>
        <translation>Componentes da C&amp;or...</translation>
    </message>
    <message>
        <source>Protanopia (Red)</source>
        <translation>Protanopia (Vermello)</translation>
    </message>
    <message>
        <source>Deuteranopia (Green)</source>
        <translation>Deuteranopia (Verde)</translation>
    </message>
    <message>
        <source>Tritanopia (Blue)</source>
        <translation>Tritanopia (Azul)</translation>
    </message>
    <message>
        <source>Color %1 exists already!</source>
        <translation>Xa existe a cor %1!</translation>
    </message>
    <message>
        <source>Color %1 appended.</source>
        <translation>Adicionouse a cor %1.</translation>
    </message>
</context>
<context>
    <name>ColorWheelPlugin</name>
    <message>
        <source>&amp;Color Wheel...</source>
        <translation>Roda de &amp;Cores...</translation>
    </message>
    <message>
        <source>Color setting helper</source>
        <translation>Axudante para a configuración da cor</translation>
    </message>
    <message>
        <source>Color selector with color theory included.</source>
        <translation>Selector de cores con teoría das cores incluída.</translation>
    </message>
</context>
<context>
    <name>CommonStrings</name>
    <message>
        <source>&amp;Apply</source>
        <translation>&amp;Aplicar</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengunha</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Gardar</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Advertencia</translation>
    </message>
    <message>
        <source>None</source>
        <comment>color name</comment>
        <translation>Nengunha

nome de cor</translation>
    </message>
    <message>
        <source>Custom</source>
        <comment>CommonStrings, custom page size</comment>
        <translation>Personalizado

CommonStrings, tamaño personalizado da páxina</translation>
    </message>
    <message>
        <source>Single Page</source>
        <translation>Páxina Única</translation>
    </message>
    <message>
        <source>Double Sided</source>
        <translation>A Dúas Caras</translation>
    </message>
    <message>
        <source>3-Fold</source>
        <translation>Tríptico</translation>
    </message>
    <message>
        <source>4-Fold</source>
        <translation>Catro caras</translation>
    </message>
    <message>
        <source>Left Page</source>
        <translation>Páxina Esquerda</translation>
    </message>
    <message>
        <source>Middle</source>
        <translation>Medio</translation>
    </message>
    <message>
        <source>Middle Left</source>
        <translation>Medio Esquerda</translation>
    </message>
    <message>
        <source>Middle Right</source>
        <translation>Medio Dereita</translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation>Páxina Dereita</translation>
    </message>
</context>
<context>
    <name>Cpalette</name>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Horizontal Gradient</source>
        <translation>Gradiente Horizontal</translation>
    </message>
    <message>
        <source>Vertical Gradient</source>
        <translation>Gradiente Vertical</translation>
    </message>
    <message>
        <source>Diagonal Gradient</source>
        <translation>Gradiente Diagonal</translation>
    </message>
    <message>
        <source>Cross Diagonal Gradient</source>
        <translation>Gradiente Diagonal inverso</translation>
    </message>
    <message>
        <source>Radial Gradient</source>
        <translation>Gradiente Radial</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation>Opacidade:</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengunha</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation>Saturación:</translation>
    </message>
    <message>
        <source>Edit Line Color Properties</source>
        <translation>Mudar as Propriedades de Cor da Liña</translation>
    </message>
    <message>
        <source>Edit Fill Color Properties</source>
        <translation>Mudar as Propriedades da Cor do Enchido</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation>Saturación da cor</translation>
    </message>
    <message>
        <source>Normal or gradient fill method</source>
        <translation>Método de enchido normal ou gradiente</translation>
    </message>
    <message>
        <source>Set the transparency for the color selected</source>
        <translation>Indicar a transparencia da cor seleccionada</translation>
    </message>
    <message>
        <source>Color of selected object</source>
        <translation type="obsolete">Cor do obxecto seleccionado</translation>
    </message>
    <message>
        <source>Free linear Gradient</source>
        <translation>Gradiente lineal libre</translation>
    </message>
    <message>
        <source>Free radial Gradient</source>
        <translation>Gradiente radial libre</translation>
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
        <translation> pt</translation>
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
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete">pl</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Move Vector</source>
        <translation>Mover Vector</translation>
    </message>
    <message>
        <source>Move the start of the gradient vector with the left mouse button pressed and move the end of the gradient vector with the right mouse button pressed</source>
        <translation>Mover o inicio do vector de gradiente calcando no botón esquerdo do rato e mover o final do vector de gradiante calcando no botón direito do rato</translation>
    </message>
</context>
<context>
    <name>CsvDialog</name>
    <message>
        <source>CSV Importer Options</source>
        <translation>Opcións do Importador de CSV</translation>
    </message>
    <message>
        <source>Field delimiter:</source>
        <translation>Delimitador de Campo:</translation>
    </message>
    <message>
        <source>(TAB)</source>
        <translation>(TAB)</translation>
    </message>
    <message>
        <source>Value delimiter:</source>
        <translation>Delimitador de Valor:</translation>
    </message>
    <message>
        <source>First row is a header</source>
        <translation>A primeira liña é un cabezallo</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>De acordo</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengún</translation>
    </message>
    <message>
        <source>None</source>
        <comment>delimiter</comment>
        <translation>Nengún

delimitador</translation>
    </message>
</context>
<context>
    <name>CupsOptions</name>
    <message>
        <source>Printer Options</source>
        <translation>Opcións da Impresora</translation>
    </message>
    <message>
        <source>Option</source>
        <translation>Opción</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valor</translation>
    </message>
    <message>
        <source>Page Set</source>
        <translation>Grupo de Páxinas</translation>
    </message>
    <message>
        <source>All Pages</source>
        <translation>Todas as Páxinas</translation>
    </message>
    <message>
        <source>Even Pages only</source>
        <translation>Só as Páxinas impares</translation>
    </message>
    <message>
        <source>Odd Pages only</source>
        <translation>Só as páxinas pares</translation>
    </message>
    <message>
        <source>Mirror</source>
        <translation>Reflectir</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Non</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Si</translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation>Orientación</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Retrato</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Apaisado</translation>
    </message>
    <message>
        <source>N-Up Printing</source>
        <translation>Impresión N-Up</translation>
    </message>
    <message>
        <source>Page per Sheet</source>
        <translation>Páxina por Folla</translation>
    </message>
    <message>
        <source>Pages per Sheet</source>
        <translation>Páxinas por Folla</translation>
    </message>
    <message>
        <source>This panel displays various CUPS options when printing. 
The exact parameters available will depend on your printer driver.
You can confirm CUPS support by selecting Help &gt; About.
Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support.
Missing library support is indicated by a *</source>
        <translation type="obsolete">Este painel mostra varias opcións de impresión do CUPS.
Os parámetros exactos disponíbeis dependerán do controlador da súa impresora.
Pode confirmar que acepta CUPS seleccionando Axuda &gt; Acerca de.
Procure as liñas C-C-T. Equivalen a se pode aceptar C=CUPS C=littlecms T=TIFF.
A ausencia de soporte para unha libraría indícase cun *</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>This panel displays various CUPS options when printing. The exact parameters available will depend on your printer driver. You can confirm CUPS support by selecting Help &gt; About. Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support. Missing library support is indicated by a *</source>
        <translation>Este painel mostra varias opcións de CUPS para imprimir. Os parámetros exactos disponíbeis dependerán do controlador da súa impresora. Pode confirmar o soporte CUPS indo a Axuda &gt; Acerca de. Procure as listas: C-C-T Equivalen a C=CUPS C=littlecms T=soporte TIFF. Se falta o soporte dunha libraría indícase cun *</translation>
    </message>
</context>
<context>
    <name>CustomFDialog</name>
    <message>
        <source>Encoding:</source>
        <translation>Codificación:</translation>
    </message>
    <message>
        <source>Moves to your Document Directory.
This can be set in the Preferences.</source>
        <translation>Móvese para o seu Directorio de Documentos.
Pódese definir nas Preferencias.</translation>
    </message>
    <message>
        <source>&amp;Compress File</source>
        <translation>&amp;Comprimir o Ficheiro</translation>
    </message>
    <message>
        <source>&amp;Include Fonts</source>
        <translation>&amp;Incluir Fontes</translation>
    </message>
</context>
<context>
    <name>CwSetColor</name>
    <message>
        <source>Set Color Components</source>
        <translation>Indicar os Componentes da Cor</translation>
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
        <translation>Vm:</translation>
    </message>
    <message>
        <source>G:</source>
        <translation>Vd:</translation>
    </message>
    <message>
        <source>B:</source>
        <translation>Az:</translation>
    </message>
    <message>
        <source>C:</source>
        <translation>Cián[C]:</translation>
    </message>
    <message>
        <source>M:</source>
        <translation>Max.[M]:</translation>
    </message>
    <message>
        <source>Y:</source>
        <translation>Amar.[Y]:</translation>
    </message>
    <message>
        <source>K:</source>
        <translation>Neg.[K]:</translation>
    </message>
    <message>
        <source>Set &amp;RGB</source>
        <translation>Seleccionar &amp;RGB</translation>
    </message>
    <message>
        <source>Set C&amp;MYK</source>
        <translation>Seleccionar C&amp;MYK</translation>
    </message>
    <message>
        <source>Set &amp;HSV</source>
        <translation>Seleccionar &amp;HSV</translation>
    </message>
</context>
<context>
    <name>DeferredTask</name>
    <message>
        <source>Cancelled by user</source>
        <translation>Cancelado polo utilizador</translation>
    </message>
</context>
<context>
    <name>DelColor</name>
    <message>
        <source>Delete Color</source>
        <translation>Eliminar esta Cor</translation>
    </message>
    <message>
        <source>?</source>
        <translation type="obsolete">?</translation>
    </message>
    <message>
        <source>Replace it with:</source>
        <translation type="obsolete">Substituir por:</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">Dacordo</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Cancelar</translation>
    </message>
    <message>
        <source>Delete color:</source>
        <translation type="obsolete">Eliminar a Cor:</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengunha</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Delete Color:</source>
        <translation>Eliminar esta Cor:</translation>
    </message>
    <message>
        <source>Replace With:</source>
        <translation>Substituir por:</translation>
    </message>
</context>
<context>
    <name>DelPages</name>
    <message>
        <source>Delete Pages</source>
        <translation>Eliminar Páxinas</translation>
    </message>
    <message>
        <source>Delete from:</source>
        <translation type="obsolete">Eliminar desde:</translation>
    </message>
    <message>
        <source>to:</source>
        <translation>até:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Delete From:</source>
        <translation>Eliminar Desde:</translation>
    </message>
</context>
<context>
    <name>DelStyle</name>
    <message>
        <source>Delete Style</source>
        <translation>Eliminar o Estilo</translation>
    </message>
    <message>
        <source>Delete Style:</source>
        <translation>Eliminar o Estilo:</translation>
    </message>
    <message>
        <source>Replace With:</source>
        <translation>Substituir Por:</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation>Sen Estilo</translation>
    </message>
</context>
<context>
    <name>DmF</name>
    <message>
        <source>Missing Font</source>
        <translation type="obsolete">Falta esta Fonte</translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation type="obsolete">A Fonte %1 non está instalada.</translation>
    </message>
    <message>
        <source>Use</source>
        <translation type="obsolete">Usar</translation>
    </message>
    <message>
        <source>instead</source>
        <translation type="obsolete">no seu lugar</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">De acordo</translation>
    </message>
</context>
<context>
    <name>DocIm</name>
    <message>
        <source>Importing failed</source>
        <translation>Fallou a importación</translation>
    </message>
    <message>
        <source>Importing Word document failed 
%1</source>
        <translation> Fallou a importación do documento de Word
%1</translation>
    </message>
</context>
<context>
    <name>DocInfos</name>
    <message>
        <source>Document Information</source>
        <translation>Información sobre o Documento</translation>
    </message>
    <message>
        <source>&amp;Title:</source>
        <translation>&amp;Título:</translation>
    </message>
    <message>
        <source>&amp;Author:</source>
        <translation>&amp;Autor:</translation>
    </message>
    <message>
        <source>&amp;Keywords:</source>
        <translation>&amp;Palabras-chave:</translation>
    </message>
    <message>
        <source>Descri&amp;ption:</source>
        <translation>Descri&amp;ción:</translation>
    </message>
    <message>
        <source>P&amp;ublisher:</source>
        <translation>&amp;Editor:</translation>
    </message>
    <message>
        <source>&amp;Contributors:</source>
        <translation>Co&amp;laboradores:</translation>
    </message>
    <message>
        <source>Dat&amp;e:</source>
        <translation>Dat&amp;a:</translation>
    </message>
    <message>
        <source>T&amp;ype:</source>
        <translation>T&amp;ipo:</translation>
    </message>
    <message>
        <source>F&amp;ormat:</source>
        <translation>F&amp;ormato:</translation>
    </message>
    <message>
        <source>Identi&amp;fier:</source>
        <translation>Id&amp;entificador:</translation>
    </message>
    <message>
        <source>&amp;Source:</source>
        <translation>&amp;Fonte:</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>Idiom&amp;a:</translation>
    </message>
    <message>
        <source>&amp;Relation:</source>
        <translation>&amp;Relación:</translation>
    </message>
    <message>
        <source>Co&amp;verage:</source>
        <translation>Ám&amp;bito:</translation>
    </message>
    <message>
        <source>Ri&amp;ghts:</source>
        <translation>Direito&amp;s:</translation>
    </message>
    <message>
        <source>&amp;Document</source>
        <translation type="obsolete">Docu&amp;mento</translation>
    </message>
    <message>
        <source>Further &amp;Information</source>
        <translation>Máis &amp;Información</translation>
    </message>
    <message>
        <source>The person or organisation primarily responsible for making the content of the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation type="obsolete">A persoa ou organización responsábel en primeira instáncia de crear o contido do documento.
Este campo pódese incorporar ao documento de Scribus como referencia, así como nos meta-datos dun PDF</translation>
    </message>
    <message>
        <source>A name given to the document.
This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation type="obsolete">Nome que se lle dá ao documento.
Este campo pódese incorporar ao documento de Scribus como referencia, así como nos meta-datos dun PDF</translation>
    </message>
    <message>
        <source>An account of the content of the document.
This field is for a brief description or abstract of the document. It is embedded in the PDF on export</source>
        <translation type="obsolete">Relación do contido do documento.
Este campo prevese para unha descrición ou resumo breves do documento. Incorpórase ao PDF á hora de exportalo</translation>
    </message>
    <message>
        <source>The topic of the content of the document.
This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</source>
        <translation type="obsolete">O tema do contido do documento
Este campo prevese para palabras-chave do documento que se queira incluir nun PDF para axudar nas procuras e na indexación de ficheiros PDF</translation>
    </message>
    <message>
        <source>A person or organisation responsible for making the document available</source>
        <translation>Unha persoa ou organización responsábel de distribuir o documento</translation>
    </message>
    <message>
        <source>A person or organisation responsible for making contributions to the content of the document</source>
        <translation>Unha persoa ou organización responsábel de contribuir ao contido do documento</translation>
    </message>
    <message>
        <source>A date associated with an event in the life cycle of the document, in YYYY-MM-DD format, as per ISO 8601</source>
        <translation>Unha data asociada cun acontecimento no ciclo vital do documento, no formato AAAA-MM-DD, ssegundo a ISO 8601</translation>
    </message>
    <message>
        <source>The nature or genre of the content of the document, eg. categories, functions, genres, etc</source>
        <translation>A natureza ou xénero do contido do documento, como por exemplo categorías, funcións, xéneros, etc</translation>
    </message>
    <message>
        <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting.
RFC2045,RFC2046 for MIME types are also useful here</source>
        <translation type="obsolete">A manifestación física ou dixital do documento. Paga a pena anotar o tipo e dimensións.
Tamén resultan de utilidade aquí RFC2045 e RFC2046 para os tipos MIME</translation>
    </message>
    <message>
        <source>An unambiguous reference to the document within a given context such as ISBN or URI</source>
        <translation>Unha referencia sen ambigüidades ao documento nun contexto tal como o ISBN ou o URI</translation>
    </message>
    <message>
        <source>A reference to a document from which the present document is derived, eg. ISBN or URI</source>
        <translation>Unha referencia a un documento do que deriva o documento acutal, como por exemplo o ISBN ou o URI</translation>
    </message>
    <message>
        <source>The language in which the content of the document is written, usually a ISO-639 language code
optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
        <translation type="obsolete">O idioma no que está escrito o documento, normalmente un código de idioma ISO-639,
co sufixo opcional dun hífen e un código de país ISO-3166 como, por exemplo en-GB ou fr-CH</translation>
    </message>
    <message>
        <source>A reference to a related document, possibly using a formal identifier such as a ISBN or URI</source>
        <translation>Unha referencia a un documento relacionado, talvez usando un identificador formal tal e como o ISBN ou o URI</translation>
    </message>
    <message>
        <source>The extent or scope of the content of the document, possibly including location, time and jurisdiction ranges</source>
        <translation>A entensión ou rango do contido do documento, que talvez inclúa a localización, hora e ámbitos de xurisdición</translation>
    </message>
    <message>
        <source>Information about rights held in and over the document, eg. copyright, patent or trademark</source>
        <translation>Información sobre os direitos que se posúen sobre o documento, como o copyright, patente ou marca rexistrada</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Documen&amp;t</source>
        <translation>Documen&amp;to</translation>
    </message>
    <message>
        <source>The person or organisation primarily responsible for making the content of the document. This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation>A persoa ou organización responsábel en primeira instancia da creación do contido do documento. Este campo pódese embeber no documento de Scribus como referencia, así como nos meta-datos dun PDF</translation>
    </message>
    <message>
        <source>A name given to the document. This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation>Nome dado ao documento. Este campo pódese embeber no documento de Scribus como referencia, así como nos meta-datos dun PDF</translation>
    </message>
    <message>
        <source>An account of the content of the document. This field is for a brief description or abstract of the document. It is embedded in the PDF on export</source>
        <translation>Explicación do contido do documento. Este campo é para unha descrición breve ou resumo do documento. Embébese no PDF ao exportar</translation>
    </message>
    <message>
        <source>The topic of the content of the document. This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</source>
        <translation>Asutno do contido do documento. Este campo é para palabras-chave do documento que queira embeber nun PDF ou para axudar nas procuras e indización dos ficheiros PDF</translation>
    </message>
    <message>
        <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting. RFC2045,RFC2046 for MIME types are also useful here</source>
        <translation>A manifestación física ou dixital do documento. Sería interesante anotar os tipos de medios e as dimensións. Tamén sería útil aquí RFC2045,RFC2046 para os tipos MIME</translation>
    </message>
    <message>
        <source>The language in which the content of the document is written, usually a ISO-639 language code optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
        <translation>A lingua na que se escrebeu o contido do documento, normalmente un código ISO-639 cun sufixo opcional cun guión e un código de país ISO-3166, como por exemplo en-GB ou fr-CH</translation>
    </message>
</context>
<context>
    <name>DocSections</name>
    <message>
        <source>Add a page numbering section to the document. The new section will be added after the currently selected section.</source>
        <translation>Adicione unha sección de numeración de páxinas ao documento. Engadirase unha sección nova a continuación da seleccionada actualmente.</translation>
    </message>
    <message>
        <source>Delete the currently selected section.</source>
        <translation>Eliminar a sección seleccionada.</translation>
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
        <translation>&lt;b&gt;Nome:&lt;/b&gt; Nome optativo para a sección, p.ex. Índice&lt;br/&gt;&lt;b&gt;Mostrados:&lt;/b&gt; Escolla se quer mostrar os números de páxina nesta sección se hai unha ou máis molduras de texto que o fagan.&lt;br/&gt;&lt;b&gt;Desde:&lt;/b&gt; O índice da páxina desta sección no que comezar.&lt;br/&gt;&lt;b&gt;Até:&lt;/b&gt; O índice da páxina desta sección no que rematar.&lt;/br/&gt;&lt;b&gt;Estilo&lt;/b&gt; Escolla o estilo de número de páxina que quer utilizar.&lt;br/&gt;&lt;b&gt;Inicio:&lt;/b&gt; O índice dentro do rango do Estilo no que comezar. P.ex. Se Inicio=2 e Estilo=a,b,c,..., os números comezarán en b. Para a primeira sección do documento isto substitúe o antigo Número da Primeira Páxina na nova xanela de ficheiro.</translation>
    </message>
    <message>
        <source>Page Number Out Of Bounds</source>
        <translation>Número de Páxina Fora de Limites</translation>
    </message>
    <message>
        <source>The value you have entered is outside the range of page numbers in the current document (%1-%2).</source>
        <translation>O valor que introduciu está fora do rango de números de páxina do documento actual (%1-%2).</translation>
    </message>
</context>
<context>
    <name>DocSectionsBase</name>
    <message>
        <source>Document Sections</source>
        <translation>Seccións do Documento</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>From</source>
        <translation>Deste</translation>
    </message>
    <message>
        <source>To</source>
        <translation>Até</translation>
    </message>
    <message>
        <source>Style</source>
        <translation>Estilo</translation>
    </message>
    <message>
        <source>Start</source>
        <translation>Inicio</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Adicionar</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>Shown</source>
        <translation>Mostrados</translation>
    </message>
</context>
<context>
    <name>DocumentItemAttributes</name>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengún</translation>
    </message>
    <message>
        <source>Relates To</source>
        <translation>Relacionado Con</translation>
    </message>
    <message>
        <source>Is Parent Of</source>
        <translation>É Pai De</translation>
    </message>
    <message>
        <source>Is Child Of</source>
        <translation>É Fillo De</translation>
    </message>
    <message>
        <source>Text Frames</source>
        <translation>Molduras de Texto</translation>
    </message>
    <message>
        <source>Image Frames</source>
        <translation>Molduras de Imaxe</translation>
    </message>
    <message>
        <source>Boolean</source>
        <translation>Booleano</translation>
    </message>
    <message>
        <source>Integer</source>
        <translation>Inteiro</translation>
    </message>
    <message>
        <source>String</source>
        <translation>Cadea</translation>
    </message>
    <message>
        <source>Document Item Attributes</source>
        <translation type="obsolete">Atributos do Elemento Documento</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="obsolete">Nome</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Tipo</translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="obsolete">Valor</translation>
    </message>
    <message>
        <source>Parameter</source>
        <translation type="obsolete">Parámetro</translation>
    </message>
    <message>
        <source>Relationship</source>
        <translation type="obsolete">Relación</translation>
    </message>
    <message>
        <source>Relationship To</source>
        <translation type="obsolete">Relación Con</translation>
    </message>
    <message>
        <source>Auto Add To</source>
        <translation type="obsolete">Adicionar Automaticamente A</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="obsolete">&amp;Adicionar</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="obsolete">Alt+A</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="obsolete">&amp;Copiar</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Eliminar</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="obsolete">Alt+D</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="obsolete">&amp;Limpar</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>None</source>
        <comment>relationship</comment>
        <translation>Nengunha

relación</translation>
    </message>
    <message>
        <source>None</source>
        <comment>auto add</comment>
        <translation>Nengunha

adición automática</translation>
    </message>
    <message>
        <source>None</source>
        <comment>types</comment>
        <translation>Nengún

tipos</translation>
    </message>
    <message>
        <source>Real Number</source>
        <translation>Número Real</translation>
    </message>
</context>
<context>
    <name>DocumentItemAttributesBase</name>
    <message>
        <source>Document Item Attributes</source>
        <translation>Atributos do Elemento do Documento</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valor</translation>
    </message>
    <message>
        <source>Parameter</source>
        <translation>Parámetro</translation>
    </message>
    <message>
        <source>Relationship</source>
        <translation>Relación</translation>
    </message>
    <message>
        <source>Relationship To</source>
        <translation>Relación Con</translation>
    </message>
    <message>
        <source>Auto Add To</source>
        <translation>Adicionar Automaticamente A</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Adicionar</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copiar</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Limpar</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
</context>
<context>
    <name>Druck</name>
    <message>
        <source>Setup Printer</source>
        <translation>Configurar a Impresora</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Ficheiro</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opcións</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Todo</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Gardar como</translation>
    </message>
    <message>
        <source>Postscript-Files (*.ps);;All Files (*)</source>
        <translation type="obsolete">Ficheiros Postscript (*.ps);;Todos (*)</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation>Cián</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation>Maxenta</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation>Amarelo</translation>
    </message>
    <message>
        <source>Black</source>
        <translation>Preto</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Inserir unha lista de elementos separada por vírgulas, na que
un elemento pode ser * para todas as páxinas, 1-5 para
un rango de páxinas ou un único número de páxina.</translation>
    </message>
    <message>
        <source>Print Destination</source>
        <translation>Destino da Impresión</translation>
    </message>
    <message>
        <source>&amp;Options...</source>
        <translation>&amp;Opcións...</translation>
    </message>
    <message>
        <source>&amp;File:</source>
        <translation>&amp;Ficheiro:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Mudar...</translation>
    </message>
    <message>
        <source>A&amp;lternative Printer Command</source>
        <translation>Comando de Impresión A&amp;lternativo</translation>
    </message>
    <message>
        <source>Co&amp;mmand:</source>
        <translation>Co&amp;mando:</translation>
    </message>
    <message>
        <source>Range</source>
        <translation>Rango</translation>
    </message>
    <message>
        <source>Print &amp;All</source>
        <translation>Imprimilo &amp;Todo</translation>
    </message>
    <message>
        <source>Print Current Pa&amp;ge</source>
        <translation>Imprimir a Pá&amp;xina Actual</translation>
    </message>
    <message>
        <source>Print &amp;Range</source>
        <translation>Imprimir o &amp;Rango</translation>
    </message>
    <message>
        <source>N&amp;umber of Copies:</source>
        <translation>N&amp;úmero de Copias:</translation>
    </message>
    <message>
        <source>Print &amp;Normal</source>
        <translation type="obsolete">Imprimir &amp;Normal</translation>
    </message>
    <message>
        <source>Print &amp;Separations</source>
        <translation type="obsolete">Imprimir as &amp;Separacións</translation>
    </message>
    <message>
        <source>Pr&amp;int In Color If Available</source>
        <translation type="obsolete">Impr&amp;imir en Cores de ser Posíbel</translation>
    </message>
    <message>
        <source>Print In Gra&amp;yscale</source>
        <translation type="obsolete">Imprimir en &amp;Escala de Grises</translation>
    </message>
    <message>
        <source>Ad&amp;vanced Options...</source>
        <translation type="obsolete">Opcións A&amp;vanzadas...</translation>
    </message>
    <message>
        <source>&amp;Print</source>
        <translation>Im&amp;primir</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Use an alternative print manager, such as kprinter or gtklp,
to utilize additional printing options</source>
        <translation type="obsolete">Usar un xestor de impresión alternativo, tal como kprinter ou gtklp,
para utilizar opcións de impresión adicionais</translation>
    </message>
    <message>
        <source>Print Normal</source>
        <translation>Imprimir Normal</translation>
    </message>
    <message>
        <source>Print Separations</source>
        <translation>Imprimir Separacións</translation>
    </message>
    <message>
        <source>Print in Color if Available</source>
        <translation>Imprimir en Cores de Ser Posíbel</translation>
    </message>
    <message>
        <source>Print in Grayscale</source>
        <translation>Impimir en Escala de Grises</translation>
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
        <translation>Páxina</translation>
    </message>
    <message>
        <source>Mirror Page(s) Horizontal</source>
        <translation>Reflexar a(s) Páxina(s) Horizontalmente</translation>
    </message>
    <message>
        <source>Mirror Page(s) Vertical</source>
        <translation>Reflexar a(s) Páxina(s) Verticalmente</translation>
    </message>
    <message>
        <source>Set Media Size</source>
        <translation>Indicar o Tamaño do Medio</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Cor</translation>
    </message>
    <message>
        <source>Apply Under Color Removal</source>
        <translation>Aplicar Eliminación da Cor Inferior (UCR)</translation>
    </message>
    <message>
        <source>Convert Spot Colors to Process Colors</source>
        <translation>Converter as Manchas de Cor en Cores Procesadas</translation>
    </message>
    <message>
        <source>Apply ICC Profiles</source>
        <translation>Aplicar Perfís ICC</translation>
    </message>
    <message>
        <source>Advanced Options</source>
        <translation>Opcións avanzadas</translation>
    </message>
    <message>
        <source>Preview...</source>
        <translation>Antevisión...</translation>
    </message>
    <message>
        <source>Sets the PostScript Level.
 Setting to Level 1 or 2 can create huge files</source>
        <translation>Indica o Nível de PostScript.
Escoller Nível 1 ou 2 pode crear ficheiros enormes</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="obsolete">Un xeito de apagar algunhas das sombras en gris compostas
de cian, amarelo e maxenta e usar negro no seu lugar.
A UCR afecta fundamentalmente ás partes das imaxes que teñen tons neutros e/ou escuros
perto do gris. Cando se usa pode mellorar a impresión dalgunhas imaxes,
ainda que é preciso experimentar segundo cada caso.
A UCR reduce a posibilidade dun exceso de saturación coas tintas CMY.</translation>
    </message>
    <message>
        <source>PostScript Files (*.ps);;All Files (*)</source>
        <translation>Ficheiros PostScript (*.ps);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Use an alternative print manager, such as kprinter or gtklp, to utilize additional printing options</source>
        <translation>Utilice un xestor de impresión alternativo, tal e como kprinter ou gtklp para acceder a opcións de impresión adicionais</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis.UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>Un xeito de apagar algunhas das sombras en gris compostas de cian, amarelo e maxenta e utilizar negro no seu lugar.
A UCR afecta fundamentalmente ás partes das imaxes que teñen tons neutros e/ou escuros perto do gris. Cando se utiliza pode mellorar a impresión dalgunhas imaxes, ainda que é preciso experimentar segundo cada caso. A UCR reduce a posibilidade dun exceso de saturación coas tintas CMY.</translation>
    </message>
    <message>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation>Permite que as Manchas de Cor se convirtan en cores compostas. A non ser que pretenda imprimir manchas de cor nunha imprenta comercial, será preferíbel que deixe isto seleccionado.</translation>
    </message>
    <message>
        <source>Allows you to embed ICC profiles in the print stream when color management is enabled</source>
        <translation>Permite embeber perfís ICC no fluxo de impresión se está habilitada a xestión de cor</translation>
    </message>
    <message>
        <source>This enables you to explicitely set the media size of the PostScript file. Not recommended unless requested by your printer.</source>
        <translation>Permite indicar explicitamente o tamaño do medio do ficheiro PostScript. Non se recomenda a non ser que llo pida a súa imprenta.</translation>
    </message>
    <message>
        <source>Clip to Page Margins</source>
        <translation>Arrimar ás Marxes da Páxina</translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page or exported file</source>
        <translation type="obsolete">Non mostrar os obxectos por fora das marxes na páxina impresa ou no ficheiro exportado</translation>
    </message>
    <message>
        <source>Failed to retrieve printer settings</source>
        <translation>Non se puido averiguar a configuración da impresora</translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page</source>
        <translation>Non mostrar os obxectos por fora das marxes da páxina impresa</translation>
    </message>
</context>
<context>
    <name>EPSPlug</name>
    <message>
        <source>Importing File:
%1
failed!</source>
        <translation>A importar o Ficheiro:
%1
fallou!</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation>Erro Fatal</translation>
    </message>
    <message>
        <source>Converting Image:
%1
failed!</source>
        <translation type="obsolete">A conversión da Imaxe:
%1
fallou!</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Erro</translation>
    </message>
    <message>
        <source>Importing PostScript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Analyzing PostScript:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Generating Items</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Converting of %1 images failed!</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>EditMacroDialog</name>
    <message>
        <source>Editing Macro: &lt;b&gt;</source>
        <translation type="obsolete">A editar a Macro: &lt;b&gt;</translation>
    </message>
    <message>
        <source>Scribus - Macro Manager</source>
        <translation type="obsolete">Scribus - Xestor de Macros</translation>
    </message>
    <message>
        <source>The file &apos;%1&apos; already exists.
Are you sure you want to overwrite it?
</source>
        <translation type="obsolete">O ficheiro &apos;%1&apos; xa existe.
Ten a certeza de querer escreber por riba?</translation>
    </message>
    <message>
        <source>You have already edited this macro.
Are you sure you want to discard all your changes?
</source>
        <translation type="obsolete">Xa modificou esta macro.
Ten a certeza de querer prescindir das modificacións?</translation>
    </message>
    <message>
        <source>A full traceback follows:

%1
</source>
        <translation type="obsolete">A continuación, un rexistro completo:

%1</translation>
    </message>
    <message>
        <source>Compilation of the macro failed, so it can not 
be saved in its current form. The error was:
%1
</source>
        <translation type="obsolete">Fallou a compilación da macro, de maneira
que non se pode salvar na súa forma actual.
O erro foi:
%1</translation>
    </message>
    <message>
        <source>Scribus - New Macro</source>
        <translation type="obsolete">Scribus - Macro Nova</translation>
    </message>
    <message>
        <source>&lt;qt&gt;This is the Edit Macro / New Macro dialog box. Here you can change the source code to macros. Edit the source code to the macro in the text editing area below the &quot;Source Code&quot; label and click OK to save your changes to the macro.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Este é o diálogo de Modificación de Macro / Macro Nova. Aqui pode modificar o código fonte das macros. Modifíqueo na área de edición de texto baixo a equiqueta &quot;Código Fonte&quot; e prema sobre Aceptar as modificacións para gardar as mudanzas feitas na macro.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Source Code:</source>
        <translation type="obsolete">Código Fonte:</translation>
    </message>
    <message>
        <source>Editing Macro:</source>
        <translation type="obsolete">Modificación da Macro:</translation>
    </message>
    <message>
        <source>The name of the macro being edited.</source>
        <translation type="obsolete">Nome da macro que se está a modificar.</translation>
    </message>
    <message>
        <source>&lt;/qt&gt;This item displays the name of the macro you are currently editing.&lt;qt&gt;</source>
        <translation type="obsolete">&lt;/qt&gt;Este elemento mostra o nome da macro que se está a editar neste momento.&lt;qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Discard all changes and exit.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Rexeitar as mudanzas feitas e sair.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Exit the editing dialog, discarding all changes you have made. If you want to exit without saving the macro but don&apos;t want to lose your changes, save your changes with &quot;Save Source As...&quot;.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Sair do diálogo de modificación, rexeitando todas as modificacións feitas. Se quer sair sen salvar a macro mais non quer perder as mudanzas, garde as modificacións con &quot;Salvar a Fonte Como...&quot;.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Ok</source>
        <translation type="obsolete">&amp;Aceptar as modificacións</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+A</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Save changes and exit.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Salvar as modificacións e sair.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Save changes to the macro and exit. If there is a problem with the macro, a message will be displayed and the editing dialog will not close.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Salvar as mudanzas feitas na macro e sair. De haber algún problema coa macro, mostrarase unha mensaxe e o diálogo de modificación non se fechará.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;This text area contains the source code of the macro. If you&apos;re creating a new macro there won&apos;t be anything in it, and if you&apos;re editing an existing macro the source code the macro was defined with will be shown here.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Esta área de texto contén o código fonte da macro. Se está a crear unha macro nova non haberá nada nel, mais se está a modificar unha macro xa existente, o código fonte co que se definiu a macro aparecerá aquí.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Load Source ...</source>
        <translation type="obsolete">&amp;Carregar a Fonte...</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Replace the current source code with code from a file.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Substituir o código fonte actual con código dun ficheiro.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Load new source code into the editing area from &quot;file&quot;. Any source code in the editing area is replaced. The loaded source must be a Scribus macro function. If you load any other script, you&apos;ll need to edit it so that it&apos;ll work as a scripter macro before saving it.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Carregar código fonte novo na área de edición desde o &quot;ficheiro&quot;. Calquer código fonte existente na área de modificación será substituído. A fonte carregada debe ser unha función de macro de Scribus. Se carrega calquer outro tipo de guión precisará modificalo para que funcione como unha macro de guión antes de salvalo.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Save Source As...</source>
        <translation type="obsolete">&amp;Salvar a Fonte Como...</translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="obsolete">Alt+S</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Save the source code being edited to a file.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Salvar nun ficheiro o código fonte que se está a modificar.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Save the source code - the text - of the macro to a file. You can edit the saved source and load it again with &quot;Load Source...&quot;.</source>
        <translation type="obsolete">Modificar o código fonte - o texto - da macro nun ficheiro. Pode modificar a fonte gardada e carregala de novo mediante &quot;Carregar Fonte...&quot;.</translation>
    </message>
    <message>
        <source>Python source files (*.py)</source>
        <translation type="obsolete">Ficheiros fonte de Python (*.py)</translation>
    </message>
    <message>
        <source>Save File Dialog</source>
        <translation type="obsolete">Diálogo de Gardar Ficheiros</translation>
    </message>
    <message>
        <source>Save macro source</source>
        <translation type="obsolete">Gardar a fonte da macro</translation>
    </message>
    <message>
        <source>Open File Dialog</source>
        <translation type="obsolete">Diálogo de Abrir Ficheiro</translation>
    </message>
    <message>
        <source>Select the source file to load</source>
        <translation type="obsolete">Escoller o ficheiro fonte a carregar</translation>
    </message>
</context>
<context>
    <name>EditStyle</name>
    <message>
        <source>Edit Style</source>
        <translation>Estilo de Edición</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nome:</translation>
    </message>
    <message>
        <source>Character</source>
        <translation>Carácter</translation>
    </message>
    <message>
        <source>&amp;Font:</source>
        <translation type="obsolete">&amp;Fonte:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source>Si&amp;ze:</source>
        <translation type="obsolete">Tama&amp;ño:</translation>
    </message>
    <message>
        <source>Effect:</source>
        <translation type="obsolete">Efecto:</translation>
    </message>
    <message>
        <source>&amp;Alignment:</source>
        <translation type="obsolete">&amp;Aliñamento:</translation>
    </message>
    <message>
        <source>&amp;Drop Caps</source>
        <translation type="obsolete">&amp;Maiúsculas Capitulares</translation>
    </message>
    <message>
        <source>&amp;Lines:</source>
        <translation>&amp;Liñas:</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation type="obsolete">C&amp;or de Enchido:</translation>
    </message>
    <message>
        <source>St&amp;roke Color:</source>
        <translation type="obsolete">Cor do T&amp;razo:</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengunha</translation>
    </message>
    <message>
        <source>Vertical Spaces</source>
        <translation type="obsolete">Espazos verticais</translation>
    </message>
    <message>
        <source>Adjust to Baseline &amp;Grid</source>
        <translation type="obsolete">Axustar á Liña Base e á &amp;Grella</translation>
    </message>
    <message>
        <source>Line &amp;Spacing:</source>
        <translation type="obsolete">E&amp;spaciamento da Liña:</translation>
    </message>
    <message>
        <source>Abo&amp;ve:</source>
        <translation type="obsolete">Por &amp;encima:</translation>
    </message>
    <message>
        <source>&amp;Below:</source>
        <translation type="obsolete">Por &amp;abaixo:</translation>
    </message>
    <message>
        <source>Tabulators and Indentation</source>
        <translation>Tabuladores e Indentación</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Name of your paragraph style</source>
        <translation>Nome do seu estilo de parágrafo</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation>Fonte do texto ou obxecto seleccionados</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Tamaño da Fonte</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Cor do recheo do texto</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Cor do trazo do texto</translation>
    </message>
    <message>
        <source>Provides an oversized first letter for a paragraph. Used for stylistic effect</source>
        <translation type="obsolete">Fornece unha primeira letra de parágrafo de tamaño máis grande. Úsase como efecto estilístico</translation>
    </message>
    <message>
        <source>Determines the overall height, in line numbers, of the Drop Caps</source>
        <translation>Determina a altura total, en número de liñas, das Maiúsculas Capitulares</translation>
    </message>
    <message>
        <source>Align text to baseline grid</source>
        <translation type="obsolete">Aliñar o texto coa grella de base</translation>
    </message>
    <message>
        <source>Spacing above the paragraph</source>
        <translation>Espaciamento por en cima do parágrafo</translation>
    </message>
    <message>
        <source>Spacing below the paragraph</source>
        <translation>Espaciamento por debaixo do parágrafo</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation>Interliñado</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="obsolete"> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation type="obsolete">pl</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Name of the Style is not unique</source>
        <translation type="obsolete">O nome do Estilo non é único</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">De acordo</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Distances</source>
        <translation>Distancias</translation>
    </message>
    <message>
        <source>Fixed Linespacing</source>
        <translation>Espaciado de liña fixo</translation>
    </message>
    <message>
        <source>Automatic Linespacing</source>
        <translation>Espaciado de liña automático</translation>
    </message>
    <message>
        <source>Align to Baseline Grid</source>
        <translation>Aliñar á Grella Base</translation>
    </message>
    <message>
        <source>Drop Caps</source>
        <translation>Maiúsculas Capitulares</translation>
    </message>
    <message>
        <source>Distance from Text:</source>
        <translation>Distancia ao Texto:</translation>
    </message>
    <message>
        <source>Preview of the Paragraph Style</source>
        <translation>Antevisión do Estilo de Parágrafo</translation>
    </message>
    <message>
        <source>Determines the gap between the DropCaps and the Text</source>
        <translation>Determina a distancia entre as Maiúsculas Capitulares e o Texto</translation>
    </message>
    <message>
        <source>Toggles sample text of this paragraph style</source>
        <translation>Activa o texto de mostra deste estilo de parágrafo</translation>
    </message>
    <message>
        <source>Name of the style is not unique</source>
        <translation>O nome do estilo non é único</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Fondo</translation>
    </message>
    <message>
        <source>Select for easier reading of light coloured text styles</source>
        <translation>Escolla para unha lectura máis doada dos estilos de textos con pouca cor</translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation type="unfinished">Tracking Manual</translation>
    </message>
    <message>
        <source>Offset to baseline of characters</source>
        <translation type="unfinished">Separación dos caracteres da liña base</translation>
    </message>
    <message>
        <source>Click to select the line spacing mode</source>
        <translation type="unfinished"></translation>
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
        <translation>&amp;Novo</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Abrir...</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Gardar &amp;Como...</translation>
    </message>
    <message>
        <source>&amp;Save and Exit</source>
        <translation>&amp;Salvar e Sair</translation>
    </message>
    <message>
        <source>&amp;Exit without Saving</source>
        <translation>&amp;Sair sen Salvar</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Desfacer</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Refacer</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Recor&amp;tar</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copiar</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Pegar</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Limpar</translation>
    </message>
    <message>
        <source>&amp;Get Field Names</source>
        <translation>&amp;Coller os Nomes dos Campos</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Ficheiro</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Modificar</translation>
    </message>
    <message>
        <source>Javascripts (*.js);;All Files (*)</source>
        <translation type="obsolete">Javascripts (*.js);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>JavaScripts (*.js);;All Files (*)</source>
        <translation>JavaScripts (*.js);;Todos os Ficheiros (*)</translation>
    </message>
</context>
<context>
    <name>EffectsDialog</name>
    <message>
        <source>Image Effects</source>
        <translation>Efectos de Imaxe</translation>
    </message>
    <message>
        <source>Options:</source>
        <translation>Opcións:</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Cor:</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation>Saturación:</translation>
    </message>
    <message>
        <source>Brightness:</source>
        <translation>Brillo:</translation>
    </message>
    <message>
        <source>Contrast:</source>
        <translation>Contraste:</translation>
    </message>
    <message>
        <source>Radius:</source>
        <translation>Radio:</translation>
    </message>
    <message>
        <source>Value:</source>
        <translation>Valor:</translation>
    </message>
    <message>
        <source>Posterize:</source>
        <translation>Posterizar:</translation>
    </message>
    <message>
        <source>Available Effects</source>
        <translation>Efectos Disponíbeis</translation>
    </message>
    <message>
        <source>Blur</source>
        <translation>Desdebuxar</translation>
    </message>
    <message>
        <source>Brightness</source>
        <translation>Brillo</translation>
    </message>
    <message>
        <source>Colorize</source>
        <translation>Colorizar</translation>
    </message>
    <message>
        <source>Contrast</source>
        <translation>Contraste</translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation>Escala de grises</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation>Invertir</translation>
    </message>
    <message>
        <source>Posterize</source>
        <translation>Posterizar</translation>
    </message>
    <message>
        <source>Sharpen</source>
        <translation>Máis nítido</translation>
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
        <translation>Efectos utilizados</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>De acordo</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
</context>
<context>
    <name>ExportForm</name>
    <message>
        <source>Choose a Export Directory</source>
        <translation>Escolla un Directorio para Exportar</translation>
    </message>
    <message>
        <source>Export as Image(s)</source>
        <translation>Exportar como Imaxe(s)</translation>
    </message>
    <message>
        <source>&amp;Export to Directory:</source>
        <translation>&amp;Exportar para o Directorio:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Mudar...</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opcións</translation>
    </message>
    <message>
        <source>Image &amp;Type:</source>
        <translation>&amp;Tipo de Imaxe:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation>&amp;Calidade:</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation>&amp;Resolución:</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Tamaño:</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation> ppp</translation>
    </message>
    <message>
        <source>Range</source>
        <translation>Rango</translation>
    </message>
    <message>
        <source>&amp;Current page</source>
        <translation>Páxina &amp;actual</translation>
    </message>
    <message>
        <source>&amp;All pages</source>
        <translation>Tod&amp;as as páxinas</translation>
    </message>
    <message>
        <source>&amp;Range</source>
        <translation>&amp;Rango</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>C</source>
        <translation>C</translation>
    </message>
    <message>
        <source>Export a range of pages</source>
        <translation>Exportar un rango de páxinas</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation>Inserir unha lista de elementos separada por vírgulas, na que
un elemento pode ser * para todas as páxinas, 1-5 para
un rango de páxinas ou un único número de páxina.</translation>
    </message>
    <message>
        <source>Export all pages</source>
        <translation>Exportar todas as páxinas</translation>
    </message>
    <message>
        <source>Export only the current page</source>
        <translation>Exportar só a páxina actual</translation>
    </message>
    <message>
        <source>Resolution of the Images
Use 72 dpi for Images intended for the Screen</source>
        <translation>Resolución das Imaxes
Use 72 ppp para Imaxes pensadas para un Monitor</translation>
    </message>
    <message>
        <source>Size of the images. 100% for no changes, 200% for two times larger etc.</source>
        <translation>Tamaño das Imaxes. 100% sen cambios, 200% para dúas veces maior, etc.</translation>
    </message>
    <message>
        <source>The quality of your images - 100% is the best, 1% the lowest quality</source>
        <translation>Calidade das imaxes - 100% e a mellor calidade, 1% a peor</translation>
    </message>
    <message>
        <source>Available export formats</source>
        <translation>Formatos de exportación disponíbeis</translation>
    </message>
    <message>
        <source>The output directory - the place to store your images.
Name of the export file will be &apos;documentname-pagenumber.filetype&apos;</source>
        <translation>Directorio de saída - o lugar no que almacenar as imaxes.
O nome do ficheiro de exportación será &quot;nomedodocumento-númerodepáxina.tipodeficheiro&quot;</translation>
    </message>
    <message>
        <source>Change the output directory</source>
        <translation>Mudar o directorio de saída</translation>
    </message>
</context>
<context>
    <name>ExtImageProps</name>
    <message>
        <source>Extended Image Properties</source>
        <translation>Propiedades extendidas de Imaxe</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Darken</source>
        <translation>Escurecer</translation>
    </message>
    <message>
        <source>Lighten</source>
        <translation>Aclarar</translation>
    </message>
    <message>
        <source>Hue</source>
        <translation>Ton</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Saturación</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Cor</translation>
    </message>
    <message>
        <source>Luminosity</source>
        <translation>Luminosidade</translation>
    </message>
    <message>
        <source>Multiply</source>
        <translation>Multiplicar</translation>
    </message>
    <message>
        <source>Screen</source>
        <translation>Pantalla</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation>Disolución</translation>
    </message>
    <message>
        <source>Overlay</source>
        <translation>Transparencia superposta</translation>
    </message>
    <message>
        <source>Hard Light</source>
        <translation>Luz dura</translation>
    </message>
    <message>
        <source>Soft Light</source>
        <translation>Luz branda</translation>
    </message>
    <message>
        <source>Difference</source>
        <translation>Diferenza</translation>
    </message>
    <message>
        <source>Exclusion</source>
        <translation>Exclusión</translation>
    </message>
    <message>
        <source>Color Dodge</source>
        <translation>Esborrar a cor</translation>
    </message>
    <message>
        <source>Color Burn</source>
        <translation>Quimar a cor</translation>
    </message>
    <message>
        <source>Exlusion</source>
        <translation>Exlusión</translation>
    </message>
    <message>
        <source>Blend Mode:</source>
        <translation>Modo de Mescla:</translation>
    </message>
    <message>
        <source>Opacity:</source>
        <translation>Opacidade:</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Fondo</translation>
    </message>
    <message>
        <source>Layers</source>
        <translation>Capas</translation>
    </message>
    <message>
        <source>Don&apos;t use any Path</source>
        <translation>Non utilizar nengunha Rota</translation>
    </message>
    <message>
        <source>Paths</source>
        <translation>Rotas</translation>
    </message>
</context>
<context>
    <name>FDialogPreview</name>
    <message>
        <source>Size:</source>
        <translation>Tamaño:</translation>
    </message>
    <message>
        <source>Title:</source>
        <translation>Título:</translation>
    </message>
    <message>
        <source>No Title</source>
        <translation>Sen Título</translation>
    </message>
    <message>
        <source>Author:</source>
        <translation>Autor/a:</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Descoñecido</translation>
    </message>
    <message>
        <source>Scribus Document</source>
        <translation>Documento de Scribus</translation>
    </message>
    <message>
        <source>Resolution:</source>
        <translation>Resolución:</translation>
    </message>
    <message>
        <source>DPI</source>
        <translation>DPI</translation>
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
        <translation>Escala de grises</translation>
    </message>
    <message>
        <source>Colorspace:</source>
        <translation>Espazo de cores:</translation>
    </message>
</context>
<context>
    <name>Farbmanager</name>
    <message>
        <source>Colors</source>
        <translation type="obsolete">Cores</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="obsolete">&amp;Adicionar</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;Nova</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="obsolete">&amp;Modificar</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="obsolete">D&amp;uplicar</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Eliminar</translation>
    </message>
    <message>
        <source>&amp;Remove Unused</source>
        <translation type="obsolete">Elimina&amp;r as que Non se usen</translation>
    </message>
    <message>
        <source>Color Sets</source>
        <translation type="obsolete">Paletas de Cores</translation>
    </message>
    <message>
        <source>Current Color Set:</source>
        <translation type="obsolete">Paleta de Cores Actual:</translation>
    </message>
    <message>
        <source>&amp;Save Color Set</source>
        <translation type="obsolete">&amp;Salvar a Paleta de Cores</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Choose a color set to load</source>
        <translation type="obsolete">Escolla a paleta de cores a carregar</translation>
    </message>
    <message>
        <source>Save the current color set</source>
        <translation type="obsolete">Salvar a paleta de cores actual</translation>
    </message>
    <message>
        <source>Remove unused colors from current document&apos;s color set</source>
        <translation type="obsolete">Eliminar as cores que non se usen da paleta de cores do documento actual</translation>
    </message>
    <message>
        <source>Append colors to the current set from an existing document</source>
        <translation type="obsolete">Adicionar as cores á paleta actual desde un documento xa existente</translation>
    </message>
    <message>
        <source>Create a new color within the current set</source>
        <translation type="obsolete">Crear unha cor nova dentro da paleta actual</translation>
    </message>
    <message>
        <source>Edit the currently selected color</source>
        <translation type="obsolete">Modificar a cor seleccionada agora</translation>
    </message>
    <message>
        <source>Make a copy of the currently selected color</source>
        <translation type="obsolete">Facer unha copia da cor seleccionada agora</translation>
    </message>
    <message>
        <source>Delete the currently selected color</source>
        <translation type="obsolete">Eliminar a cor seleccionada agora</translation>
    </message>
    <message>
        <source>Make the current colorset the default color set</source>
        <translation type="obsolete">Facer que a paleta de cores actual sexa a predeterminada</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="obsolete">&amp;Nome:</translation>
    </message>
    <message>
        <source>Choose a Name</source>
        <translation type="obsolete">Escolla un Nome</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="obsolete">Abrir</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="obsolete">Documentos (*.sla *.sla.gz *.scd *.scd.gz);;Todos os ficheiros (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="obsolete">Documentos (*.sla *.scd);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="obsolete">Copiar de %1</translation>
    </message>
    <message>
        <source>New Color</source>
        <translation type="obsolete">Cor Nova</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengunha</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="obsolete">&amp;Importar</translation>
    </message>
    <message>
        <source>Import colors to the current set from an existing document</source>
        <translation type="obsolete">Importar cores ao conxunto actual desde un documento existente</translation>
    </message>
</context>
<context>
    <name>FileLoader</name>
    <message>
        <source>Some fonts used by this document have been substituted:</source>
        <translation>Subsituíronse algunhas das fontes utilizadas neste documento:</translation>
    </message>
    <message>
        <source> was replaced by: </source>
        <translation> substituíuse por: </translation>
    </message>
</context>
<context>
    <name>FontPrefs</name>
    <message>
        <source>Global Font Settings</source>
        <translation type="obsolete">Configuración Global das Fontes</translation>
    </message>
    <message>
        <source>Available Fonts</source>
        <translation>Fontes Disponíbeis</translation>
    </message>
    <message>
        <source>Font Substitutions</source>
        <translation>Substitución de Fontes</translation>
    </message>
    <message>
        <source>Additional Paths</source>
        <translation>Rotas adicionais</translation>
    </message>
    <message>
        <source>Postscript</source>
        <translation type="obsolete">Postscript</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="obsolete">Si</translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation>Nome da Fonte</translation>
    </message>
    <message>
        <source>Use Font</source>
        <translation type="obsolete">Usar esta Fonte</translation>
    </message>
    <message>
        <source>Embed in:</source>
        <translation type="obsolete">Embeber en:</translation>
    </message>
    <message>
        <source>Subset</source>
        <translation type="obsolete">Subconxunto</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Tipo</translation>
    </message>
    <message>
        <source>Path to Font File</source>
        <translation type="obsolete">Rota ao Ficheiro da Fonte</translation>
    </message>
    <message>
        <source>&amp;Available Fonts</source>
        <translation>Fontes &amp;Disponíbeis</translation>
    </message>
    <message>
        <source>Replacement</source>
        <translation>Substitución</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>Font &amp;Substitutions</source>
        <translation>&amp;Substitucións de Fontes</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>M&amp;udar...</translation>
    </message>
    <message>
        <source>A&amp;dd...</source>
        <translation>A&amp;dicionar...</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>Elimina&amp;r</translation>
    </message>
    <message>
        <source>Additional &amp;Paths</source>
        <translation>Ro&amp;tas Adicionais</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Escolla un Directorio</translation>
    </message>
    <message>
        <source>Font Name</source>
        <comment>font preview</comment>
        <translation>Nome da Fonte</translation>
    </message>
    <message>
        <source>Use Font</source>
        <comment>font preview</comment>
        <translation>Usar esta Fonte

antevisión da fonte</translation>
    </message>
    <message>
        <source>Embed in:</source>
        <comment>font preview</comment>
        <translation>Embeber en:

antevisión da fonte:</translation>
    </message>
    <message>
        <source>Subset</source>
        <comment>font preview</comment>
        <translation>Subconxunto

antevisión da fonte</translation>
    </message>
    <message>
        <source>Path to Font File</source>
        <comment>font preview</comment>
        <translation>Rota ao Ficheiro da Fonte

antevisión da fonte</translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation>PostScript</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Font search paths can only be set in Preferences, and only when there is no document currently open. Close any open documents, then use Edit-&gt;Settings to change the font search path.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;As rotas de procura das fontes só se poden indicar nas Preferencias e só cando non hai nengún documento aberto. Feche todos os documentos abertos e vaia a Editar-&gt;Configuración para mudar a rota de procura de fontes.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Font search paths can only be set in Preferences, and only when there is no document currently open. Close any open documents, then use Edit-&gt;Settings to change the font search path.</source>
        <translation>As rotas de procura de fontes só se poden indicar nas Preferencias, e só cando non hai nengún documento aberto. Feche todos os documentos e vaia entón a Modificar -&gt; Preferencias para mudar a rota de procura de fontes.</translation>
    </message>
</context>
<context>
    <name>FontPreview</name>
    <message>
        <source>Fonts Preview</source>
        <translation type="obsolete">Antevisión das Fontes</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+O</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>Append selected font into Style, Font menu</source>
        <translation type="obsolete">Adicionar a fonte seleccionada ao menú Estilo, Fonte</translation>
    </message>
    <message>
        <source>Leave preview</source>
        <translation type="obsolete">Abandonar a vista previa</translation>
    </message>
    <message>
        <source>Size of the Font</source>
        <translation type="obsolete">Tamaño da Fonte</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="obsolete">Se xa o túzaro dicía que mañá quérenllo pór</translation>
    </message>
    <message>
        <source>Font Name</source>
        <comment>font preview</comment>
        <translation type="obsolete">Nome da Fonte

antevisión da fonte</translation>
    </message>
    <message>
        <source>Doc</source>
        <comment>font preview</comment>
        <translation type="obsolete">Doc

antevisión da fonte</translation>
    </message>
    <message>
        <source>Type</source>
        <comment>font preview</comment>
        <translation type="obsolete">Tipo

antevisión da fonte</translation>
    </message>
    <message>
        <source>Subset</source>
        <comment>font preview</comment>
        <translation type="obsolete">Subconxunto

antevisión da fonte</translation>
    </message>
    <message>
        <source>Access</source>
        <comment>font preview</comment>
        <translation type="obsolete">Acceso

antevisión da fonte</translation>
    </message>
    <message>
        <source>Font Size:</source>
        <translation type="obsolete">Tamaño da Fonte:</translation>
    </message>
    <message>
        <source>Fonts Preview</source>
        <comment>font preview</comment>
        <translation type="obsolete">Antevisión das Fontes

antevisión da fonte</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="obsolete">&amp;Adicionar</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <comment>font preview</comment>
        <translation type="obsolete">Alt+O

antevisión da fonte</translation>
    </message>
    <message>
        <source>Quick Search: </source>
        <translation type="obsolete">Procura Rápida: </translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation type="obsolete">&amp;Procurar</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <comment>font preview</comment>
        <translation type="obsolete">&amp;Fechar

antevisión da fonte</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <comment>font preview</comment>
        <translation type="obsolete">Alt+C

antevisión da fonte</translation>
    </message>
    <message>
        <source>Append selected font into Style, Font menu</source>
        <comment>font preview</comment>
        <translation>Adicionar a fonte seleccionada ao menú Estilo, Fonte

antevisión da fonte</translation>
    </message>
    <message>
        <source>Leave preview</source>
        <comment>font preview</comment>
        <translation>Abandonar a vista previa

antevisión da fonte</translation>
    </message>
    <message>
        <source>Typing the text here provides quick searching in the font names. E.g. &apos;bold&apos; shows all fonts with Bold in name. Searching is case insensitive.</source>
        <translation type="obsolete">Se se escrebe o texto aquí pódese procurar rapidamente nos nomes das fontes. Por exemplo, &quot;negra&quot; mostra todas as fontes con Negra no nome. Para a pesquisa non importan as maiúsculas ou minúsculas.</translation>
    </message>
    <message>
        <source>Start searching</source>
        <translation>Inciciar a pesquisa</translation>
    </message>
    <message>
        <source>Size of the selected font</source>
        <translation>Tamaño da fonte seleccionada</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <comment>font preview</comment>
        <translation>Mañá quérenllo pór, xa dicía o túzaro

antevisión da fonte</translation>
    </message>
    <message>
        <source>User</source>
        <comment>font preview</comment>
        <translation>Utilizador

antevisión da fonte</translation>
    </message>
    <message>
        <source>System</source>
        <comment>font preview</comment>
        <translation>Sistema

antevisión da fonte</translation>
    </message>
    <message>
        <source>Sample will be shown after key release</source>
        <translation>Mostrarase o exemplo cando solte a tecla</translation>
    </message>
    <message>
        <source>Typing the text here provides quick searching in the font names. Searching is case insensitive. You can provide a common wild cards (*, ?, [...]) in your phrase. Examples: t* will list all fonts starting with t or T. *bold* will list all fonts with word bold, bolder etc. in the name.</source>
        <translation>Escribir o texto aquí fornece unha procura rápida entre os nomes das fontes. A procura non distingue entre maiúsculas e minúsculas. Pode fornecer os comodíns habituais (*, ?, [...]) na frase. Exemplos: t* listará todas as fontes que comecen por t ou por T. *bold* listará todas as fontes con bold, bolder, etc. no nome.</translation>
    </message>
</context>
<context>
    <name>FontPreviewBase</name>
    <message>
        <source>Fonts Preview</source>
        <translation>Antevisión das Fontes</translation>
    </message>
    <message>
        <source>&amp;Quick Search:</source>
        <translation>&amp;Procura Rápida:</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Procurar</translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation>Alt+S</translation>
    </message>
    <message>
        <source>Font Name</source>
        <translation>Nome da Fonte</translation>
    </message>
    <message>
        <source>Doc</source>
        <translation>Doc</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <source>Subset</source>
        <translation>Subconxunto</translation>
    </message>
    <message>
        <source>Access</source>
        <translation>Acceso</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation>Tamaño da &amp;Fonte:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Texto</translation>
    </message>
    <message>
        <source>Sample text to display</source>
        <translation>Texto de exemplo para mostrar</translation>
    </message>
    <message>
        <source>Se&amp;t</source>
        <translation>Conxun&amp;to</translation>
    </message>
    <message>
        <source>Alt+T</source>
        <translation>Alt+T</translation>
    </message>
    <message>
        <source>Reset the text</source>
        <translation>Limpar o texto</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation>&amp;Adicionar</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Fechar</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
</context>
<context>
    <name>FontPreviewPlugin</name>
    <message>
        <source>&amp;Font Preview...</source>
        <translation>Antevisión da &amp;Fonte...</translation>
    </message>
    <message>
        <source>Font Preview dialog</source>
        <translation>Diálogo da Antevisión da Fonte</translation>
    </message>
    <message>
        <source>Sorting, searching and browsing available fonts.</source>
        <translation>Ordenación, procura e exame das fontes disponíbeis.</translation>
    </message>
</context>
<context>
    <name>FontReplaceDialog</name>
    <message>
        <source>Font Substitution</source>
        <translation>Substitución de Fontes</translation>
    </message>
    <message>
        <source>This document contains some fonts that are not installed on your system, please choose a suitable replacement for them. Cancel will stop the document from loading.</source>
        <translation>Este documento contén algunhas fontes non instaladas no seu sistema. Escolla unha substitución apropiada para elas.
Cancelar fará que non se continúe carregando o documento.</translation>
    </message>
    <message>
        <source>Original Font</source>
        <translation>Fonte Orixinal</translation>
    </message>
    <message>
        <source>Substitution Font</source>
        <translation>Fonte Substituta</translation>
    </message>
    <message>
        <source>Make these substitutions permanent</source>
        <translation>Facer que as substitucións sexan permanentes</translation>
    </message>
    <message>
        <source>Cancels these font substitutions and stops loading the document.</source>
        <translation>Cencela estas substitucións de fontes e detén a carga do documento.</translation>
    </message>
    <message>
        <source>Enabling this tells Scribus to use these replacements for missing fonts permanently in all future layouts. This can be reverted or changed in Edit &gt; Preferences &gt; Fonts.</source>
        <translation>Se o habilitar, Scribus utilizará estas substitucións permanentemente para as fontes que faltan en todos os documentos futuros.
Isto pódese desfacer ou mudar en Modificar &gt; Preferencias &gt; Fontes.</translation>
    </message>
    <message>
        <source>If you select OK, then save, these substitutions are made permanent in the document.</source>
        <translation>Se preme en De Acordo e logo grava, estas substitucións convertiranse en permanentes no documento.</translation>
    </message>
</context>
<context>
    <name>GradientEditor</name>
    <message>
        <source>Position:</source>
        <translation>Posición:</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Here you can add, change or remove Color-Stops.</source>
        <translation type="obsolete">Aquí pode adicionar, modificar ou eliminar Paradas de Cor.</translation>
    </message>
    <message>
        <source>Add, change or remove color stops here</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>GuideManager</name>
    <message>
        <source>Manage Guides</source>
        <translation>Xerir as Guías</translation>
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
        <translation type="obsolete"> pl</translation>
    </message>
    <message>
        <source> p</source>
        <translation type="obsolete"> p</translation>
    </message>
    <message>
        <source>Horizontal Guides</source>
        <translation>Guías Horizontais</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>Pos-&amp;Y:</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Adicionar</translation>
    </message>
    <message>
        <source>D&amp;elete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>Vertical Guides</source>
        <translation>Guías Verticais</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>Pos-&amp;X:</translation>
    </message>
    <message>
        <source>A&amp;dd</source>
        <translation>A&amp;dicionar</translation>
    </message>
    <message>
        <source>De&amp;lete</source>
        <translation>El&amp;iminar</translation>
    </message>
    <message>
        <source>&amp;Lock Guides</source>
        <translation>B&amp;loquear as Guías</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Rows and Columns - Automatic Guides</source>
        <translation>Fileiras e Columnas - Guías Automáticas</translation>
    </message>
    <message>
        <source>&amp;Rows:</source>
        <translation>&amp;Fileiras:</translation>
    </message>
    <message>
        <source>C&amp;olumns:</source>
        <translation>C&amp;olumnas:</translation>
    </message>
    <message>
        <source>Row &amp;Gap</source>
        <translation>&amp;Distancia entre Fileiras</translation>
    </message>
    <message>
        <source>Colum&amp;n Gap</source>
        <translation>Distancia entre Colum&amp;nas</translation>
    </message>
    <message>
        <source>Refer to:</source>
        <translation>Con referencia a:</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation>&amp;Páxina</translation>
    </message>
    <message>
        <source>&amp;Margins</source>
        <translation>&amp;Marxes</translation>
    </message>
    <message>
        <source>&amp;Selection</source>
        <translation>&amp;Selección</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Fechar</translation>
    </message>
    <message>
        <source>&amp;Update</source>
        <translation>Act&amp;ualizar</translation>
    </message>
    <message>
        <source>Set the guides in document. Guide manager is still opened but the changes are persistant</source>
        <comment>guide manager</comment>
        <translation>Indicar as guías do documento. O xestor de guías ainda está aberto mais as modificación son persistentes

xestor de guías</translation>
    </message>
    <message>
        <source>&amp;Apply to All Pages</source>
        <translation>&amp;Aplicar a Todas as Páxinas</translation>
    </message>
    <message>
        <source>Guide</source>
        <translation>Guía</translation>
    </message>
    <message>
        <source>Unit</source>
        <translation>Unidade</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Antevisión</translation>
    </message>
    <message>
        <source>There is empty (0.0) guide already</source>
        <translation>Xa existe unha guía baleira (0, 0)</translation>
    </message>
</context>
<context>
    <name>HelpBrowser</name>
    <message>
        <source>Contents</source>
        <translation>Contido</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Ligazón</translation>
    </message>
    <message>
        <source>&amp;Contents</source>
        <translation>&amp;Contido</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Procurar</translation>
    </message>
    <message>
        <source>S&amp;earch</source>
        <translation type="obsolete">P&amp;rocurar</translation>
    </message>
    <message>
        <source>Ctrl+F</source>
        <translation type="obsolete">Ctrl+F</translation>
    </message>
    <message>
        <source>F3</source>
        <translation type="obsolete">F3</translation>
    </message>
    <message>
        <source>Scribus Online Help</source>
        <translation>Axuda en-liña do Scribus</translation>
    </message>
    <message>
        <source>Sorry, no manual available! Please see: http://docs.scribus.net for updated docs
and www.scribus.net for downloads.</source>
        <translation>Desculpas, mais non hai un manual disponíbel. Consulte en http://docs.scribus.net para ver
se hai documentos novos e www.scribus.net para descargas.</translation>
    </message>
    <message>
        <source>unknown</source>
        <translation type="obsolete">descoñecido</translation>
    </message>
    <message>
        <source>Find</source>
        <translation>Atopar</translation>
    </message>
    <message>
        <source>Search Term:</source>
        <translation>Termo Procurado:</translation>
    </message>
    <message>
        <source>Se&amp;arch</source>
        <translation>Procur&amp;ar</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nova</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>De&amp;lete All</source>
        <translation>Elimin&amp;alo Todo</translation>
    </message>
    <message>
        <source>Book&amp;marks</source>
        <translation>&amp;Marcadores</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation>Im&amp;primir...</translation>
    </message>
    <message>
        <source>E&amp;xit</source>
        <translation>Sa&amp;ir</translation>
    </message>
    <message>
        <source>Searching is case unsensitive</source>
        <translation>Nas pesquisas non importan as maiúsculas e minúsculas</translation>
    </message>
    <message>
        <source>New Bookmark</source>
        <translation>Marcador Novo</translation>
    </message>
    <message>
        <source>New Bookmark&apos;s Title:</source>
        <translation>Título do Novo Marcador:</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Ficheiro</translation>
    </message>
    <message>
        <source>&amp;Find...</source>
        <translation>Pr&amp;ocurar...</translation>
    </message>
    <message>
        <source>Find &amp;Next</source>
        <translation>Procurar o Segui&amp;nte</translation>
    </message>
    <message>
        <source>Find &amp;Previous</source>
        <translation>&amp;Procurar o Anterior</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Modificar</translation>
    </message>
    <message>
        <source>&amp;Add Bookmark</source>
        <translation>&amp;Adicionar Marcador</translation>
    </message>
    <message>
        <source>D&amp;elete All</source>
        <translation>&amp;Eliminalo Todo</translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation>&amp;Marcadores</translation>
    </message>
    <message>
        <source>Relevance</source>
        <translation>Relevancia</translation>
    </message>
</context>
<context>
    <name>HyAsk</name>
    <message>
        <source>Possible Hyphenation</source>
        <translation>Separación con guión posíbel</translation>
    </message>
    <message>
        <source>Accept</source>
        <translation>Aceptar</translation>
    </message>
    <message>
        <source>Skip</source>
        <translation>Saltar</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
</context>
<context>
    <name>HySettings</name>
    <message>
        <source>Hyphenator Settings</source>
        <translation type="obsolete">Configuración do Hyphenator</translation>
    </message>
    <message>
        <source>&amp;Hyphenation Suggestions</source>
        <translation>Suxestións de &amp;separación con guións</translation>
    </message>
    <message>
        <source>Hyphenate Text Automatically &amp;During Typing</source>
        <translation>Cortar as palabras con guións automaticamente &amp;encanto se escrebe</translation>
    </message>
    <message>
        <source>&amp;Language:</source>
        <translation>&amp;Lingua:</translation>
    </message>
    <message>
        <source>&amp;Smallest Word:</source>
        <translation>Palabra máis &amp;pequena:</translation>
    </message>
    <message>
        <source>Consecutive Hyphenations &amp;Allowed:</source>
        <translation>Guións consecutivos &amp;Permitidos:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</source>
        <translation>Aparecerá un diálogo que mostra todos os guións posíbeis para cada palabra cando use a opción Extras, Separar as palabras con guións.</translation>
    </message>
    <message>
        <source>Enables automatic hyphenation of your text while typing.</source>
        <translation>Permite que as palabras se corten automaticamente con guións encanto escrebe.</translation>
    </message>
    <message>
        <source>Length of the smallest word to be hyphenated.</source>
        <translation>Lonxitude da palabra máis pequena que se poida cortar.</translation>
    </message>
    <message>
        <source>Maximum number of Hyphenations following each other.
A value of 0 means unlimited hyphenations.</source>
        <translation>Número máximo de guións seguidos.
O valor 0 significa un número ilimitado.</translation>
    </message>
</context>
<context>
    <name>ImageInfoDialog</name>
    <message>
        <source>Image Info</source>
        <translation>Información sobre a Imaxe</translation>
    </message>
    <message>
        <source>General Info</source>
        <translation>Información Xeral</translation>
    </message>
    <message>
        <source>Date / Time:</source>
        <translation>Data / Hora:</translation>
    </message>
    <message>
        <source>Has Embedded Profile:</source>
        <translation>Ten o Perfil Embebido:</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Si</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Non</translation>
    </message>
    <message>
        <source>Profile Name:</source>
        <translation>Nome do Perfil:</translation>
    </message>
    <message>
        <source>Has Embedded Paths:</source>
        <translation>Ten Rotas Embebidas:</translation>
    </message>
    <message>
        <source>Has Layers:</source>
        <translation>Ten Capas:</translation>
    </message>
    <message>
        <source>EXIF Info</source>
        <translation>Información de EXIF</translation>
    </message>
    <message>
        <source>Artist:</source>
        <translation>Artista:</translation>
    </message>
    <message>
        <source>Comment:</source>
        <translation>Comentario:</translation>
    </message>
    <message>
        <source>User Comment:</source>
        <translation>Comentario do Usuario:</translation>
    </message>
    <message>
        <source>Camera Model:</source>
        <translation>Modelo da Cámara:</translation>
    </message>
    <message>
        <source>Camera Manufacturer:</source>
        <translation>Fabricante da Cámara:</translation>
    </message>
    <message>
        <source>Description:</source>
        <translation>Descrición:</translation>
    </message>
    <message>
        <source>Copyright:</source>
        <translation>Copyright:</translation>
    </message>
    <message>
        <source>Scanner Model:</source>
        <translation>Modelo do Escáner:</translation>
    </message>
    <message>
        <source>Scanner Manufacturer:</source>
        <translation>Fabricante do Escáner:</translation>
    </message>
</context>
<context>
    <name>ImportPSPlugin</name>
    <message>
        <source>Import &amp;EPS/PS...</source>
        <translation>Importar &amp;EPS/PS...</translation>
    </message>
    <message>
        <source>Imports EPS Files</source>
        <translation>Importar Ficheiros EPS</translation>
    </message>
    <message>
        <source>Imports most EPS files into the current document,
converting their vector data into Scribus objects.</source>
        <translation>Importa a maioría dos ficheiros EPS no documento actual,
convertindo os seus datos vectoriais en obxectos de Scribus.</translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation>PostScript</translation>
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
        <translation>Inserir Páxina</translation>
    </message>
    <message>
        <source>&amp;Inserting</source>
        <translation type="obsolete">&amp;Inserindo</translation>
    </message>
    <message>
        <source>Page(s)</source>
        <translation>Páxina(s)</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation>antes da Páxina</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation>após a Páxina</translation>
    </message>
    <message>
        <source>at End</source>
        <translation>ao Final</translation>
    </message>
    <message>
        <source>Inserting</source>
        <translation type="obsolete">Inserindo</translation>
    </message>
    <message>
        <source>&amp;Template (Left Page):</source>
        <translation type="obsolete">&amp;Modelo (Páxina Esquerda):</translation>
    </message>
    <message>
        <source>&amp;Template:</source>
        <translation type="obsolete">&amp;Modelo:</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Template (Right Page):</source>
        <translation type="obsolete">Modelo (Páxina Dereita):</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation>&amp;Inserir</translation>
    </message>
    <message>
        <source>Master Pages</source>
        <translation>Páxinas Mestras</translation>
    </message>
    <message>
        <source>&amp;Master Page:</source>
        <translation>Páxina &amp;Mestra:</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Tamaño da páxina</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Tamaño:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalizado</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Orie&amp;ntación:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Retrato</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Apaisado</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Anchura:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Altura:</translation>
    </message>
    <message>
        <source>Move Objects with their Page</source>
        <translation>Mover os Obxectos coa súa Páxina</translation>
    </message>
</context>
<context>
    <name>InsertTable</name>
    <message>
        <source>Insert Table</source>
        <translation>Inserir unha Táboa</translation>
    </message>
    <message>
        <source>Number of Rows:</source>
        <translation type="obsolete">Número de Fileiras:</translation>
    </message>
    <message>
        <source>Number of Columns:</source>
        <translation type="obsolete">Número de Columnas:</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">De acordo</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Cancelar</translation>
    </message>
    <message>
        <source>Number of rows:</source>
        <translation>Número de fileiras:</translation>
    </message>
    <message>
        <source>Number of columns:</source>
        <translation>Número de columnas:</translation>
    </message>
</context>
<context>
    <name>JavaDocs</name>
    <message>
        <source>Edit JavaScripts</source>
        <translation>Modificar JavaScripts</translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation>&amp;Modificar...</translation>
    </message>
    <message>
        <source>&amp;Add...</source>
        <translation>&amp;Adicionar...</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Fechar</translation>
    </message>
    <message>
        <source>&amp;New Script:</source>
        <translation>&amp;Novo Guión:</translation>
    </message>
    <message>
        <source>New Script</source>
        <translation>Novo Guión</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Do you really want to delete this Script?</source>
        <translation type="obsolete">Realmente quer eliminar este Guión?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Non</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Si</translation>
    </message>
    <message>
        <source>Do you really want to delete this script?</source>
        <translation>De verdade que quer elimianar este guión?</translation>
    </message>
    <message>
        <source>Adds a new Script, predefines a function with the same name. If you want to use this script as an &quot;Open Action&quot; script be sure not to change the name of the function.</source>
        <translation>Adiciona un Guión novo, predefine unha función co mesmo nome. Se quer utilizar este guión como un guión de &quot;Acción Aberta&quot; asegúrese de non mudar o nome da función.</translation>
    </message>
</context>
<context>
    <name>KeyManager</name>
    <message>
        <source>Manage Keyboard Shortcuts</source>
        <translation type="obsolete">Xerir os Atallos do Teclado</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Acción</translation>
    </message>
    <message>
        <source>Current Key</source>
        <translation>Tecla Actual</translation>
    </message>
    <message>
        <source>Select a Key for this Action</source>
        <translation>Escolla unha Tecla para esta Acción</translation>
    </message>
    <message>
        <source>&amp;No Key</source>
        <translation>&amp;Nengunha Tecla</translation>
    </message>
    <message>
        <source>&amp;User Defined Key</source>
        <translation>Tecla Definida polo &amp;Usuario</translation>
    </message>
    <message>
        <source>ALT+SHIFT+T</source>
        <translation>ALT+SHIFT+T</translation>
    </message>
    <message>
        <source>Set &amp;Key</source>
        <translation>Asignar &amp;Tecla</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
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
        <translation>Maiúsculas</translation>
    </message>
    <message>
        <source>Shift+</source>
        <translation>Maiúsculas+</translation>
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
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>This Key Sequence is already in use</source>
        <translation type="obsolete">Esta Secuencia de Teclas xa está collida</translation>
    </message>
    <message>
        <source>Loadable Shortcut Sets</source>
        <translation>Conxuntos de Atallos Carregábeis</translation>
    </message>
    <message>
        <source>&amp;Load</source>
        <translation>&amp;Carregar</translation>
    </message>
    <message>
        <source>&amp;Import...</source>
        <translation>&amp;Importar...</translation>
    </message>
    <message>
        <source>&amp;Export...</source>
        <translation>&amp;Exportar...</translation>
    </message>
    <message>
        <source>&amp;Reset</source>
        <translation>Desface&amp;r</translation>
    </message>
    <message>
        <source>Keyboard shortcut sets available to load</source>
        <translation>Conxuntos de atallos de teclado que se poden carregar</translation>
    </message>
    <message>
        <source>Load the selected shortcut set</source>
        <translation>Carregar o conxunto de atallos seleccionado</translation>
    </message>
    <message>
        <source>Import a shortcut set into the current configuration</source>
        <translation>Importar un conxunto de atallos na configuración actual</translation>
    </message>
    <message>
        <source>Export the current shortcuts into an importable file</source>
        <translation>Exportar os atallos actuais para un ficheiro importábel</translation>
    </message>
    <message>
        <source>Reload the default Scribus shortcuts</source>
        <translation>Recarregar os atallos pré-definidos de Scribus</translation>
    </message>
    <message>
        <source>Key Set XML Files (*.ksxml)</source>
        <translation>Conxunto Key de Ficheiros XML (*.ksxml)</translation>
    </message>
    <message>
        <source>This key sequence is already in use</source>
        <translation>Esta secuencia de teclas xa se está a utilizar</translation>
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
        <translation>Capas</translation>
    </message>
    <message>
        <source>Add a new Layer</source>
        <translation type="obsolete">Adicionar unha Capa nova</translation>
    </message>
    <message>
        <source>Delete Layer</source>
        <translation>Eliminar unha Capa</translation>
    </message>
    <message>
        <source>Raise Layer</source>
        <translation type="obsolete">Subir a Capa</translation>
    </message>
    <message>
        <source>Lower Layer</source>
        <translation type="obsolete">Eliminar a Capa</translation>
    </message>
    <message>
        <source>New Layer</source>
        <translation type="obsolete">Capa Nova</translation>
    </message>
    <message>
        <source>Do you want to delete all Objects on this Layer too?</source>
        <translation type="obsolete">Quer eliminar tamén todos os Obxectos desta Capa?</translation>
    </message>
    <message>
        <source>Do you want to delete all objects on this layer too?</source>
        <translation>Quer eliminar tamén todos os obxectos desta capa?</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>Add a new layer</source>
        <translation>Adicionar unha nova capa</translation>
    </message>
    <message>
        <source>Delete layer</source>
        <translation>Eliminar a capa</translation>
    </message>
    <message>
        <source>Raise layer</source>
        <translation>Subir a capa</translation>
    </message>
    <message>
        <source>Lower layer</source>
        <translation>Baixar a capa</translation>
    </message>
</context>
<context>
    <name>LineFormate</name>
    <message>
        <source>Edit Line Styles</source>
        <translation>Modificar os Estilos de Liña</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="obsolete">&amp;Engadir</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Novo</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Modificar</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;uplicar</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Gardar</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Copiar de %1</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation>Estilo Novo</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation type="obsolete">Realmente quer eliminar este Estilo?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Non</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Si</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documentos (*.sla *.sla.gz *.scd *.scd.gz);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documentos (*.sla *.scd);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importar</translation>
    </message>
    <message>
        <source>Do you really want to delete this style?</source>
        <translation>Pretende realmente eliminar este estilo?</translation>
    </message>
</context>
<context>
    <name>LineStyleWBase</name>
    <message>
        <source>LineStyleWBase</source>
        <translation type="obsolete">LineStyleWBase</translation>
    </message>
    <message>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation>Anchura da Liña:</translation>
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
        <translation>Terminación Plana</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation>Terminación cadrada</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation>Terminación Arredondada</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation>Xunta en inglete</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Xunta biselada</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation>Xunta arredondada</translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation>Liña continua</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation>Liña tracexada</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation>Liña de puntos</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation>Liña guión-punto</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation>Liña guión-punto-punto</translation>
    </message>
</context>
<context>
    <name>LoadSavePlugin</name>
    <message>
        <source>All Files (*)</source>
        <translation>Todos os Ficheiros (*)</translation>
    </message>
</context>
<context>
    <name>LoremManager</name>
    <message>
        <source>Select Lorem Ipsum</source>
        <translation>Seleccionar Lorem Ipsum</translation>
    </message>
    <message>
        <source>Author:</source>
        <translation>Autor/a:</translation>
    </message>
    <message>
        <source>Get More:</source>
        <translation>Obter Máis:</translation>
    </message>
    <message>
        <source>XML File:</source>
        <translation>Ficheiro XML:</translation>
    </message>
    <message>
        <source>Lorem Ipsum</source>
        <translation>Lorem Ipsum</translation>
    </message>
    <message>
        <source>Paragraphs:</source>
        <translation>Parágrafos:</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
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
    <name>Macro</name>
    <message>
        <source>Passed object is not callable</source>
        <comment>python error</comment>
        <translation type="obsolete">Ao obxecto que se pasou non se lle pode chamar

erro de python</translation>
    </message>
</context>
<context>
    <name>MacroManager</name>
    <message>
        <source>Manage Macros</source>
        <translation type="obsolete">Xerir as Macros</translation>
    </message>
    <message>
        <source>Brings up a graphical window for creating, deleting, editing, saving and loading macros.</source>
        <translation type="obsolete">Fai aparecer unha xanela gráfica para crear, eliminar, modificar, salvar e carregar macros.</translation>
    </message>
    <message>
        <source>Create, edit and delete macros</source>
        <translation type="obsolete">Crear, modificar e eliminar macros</translation>
    </message>
    <message>
        <source>&amp;Macro</source>
        <translation type="obsolete">&amp;Macro</translation>
    </message>
    <message>
        <source>Scribus - Macro Manager</source>
        <translation type="obsolete">Scribus - Xestor de Macros</translation>
    </message>
    <message>
        <source>Unable to open the requested file: %1</source>
        <translation type="obsolete">Non se pode abrir o ficheiro pedido: %1</translation>
    </message>
    <message>
        <source>Scribus - Edit Macro</source>
        <translation type="obsolete">Scribus - Modificar Macro</translation>
    </message>
    <message>
        <source>Scribus - New Macro</source>
        <translation type="obsolete">Scribus - Macro Nova</translation>
    </message>
    <message>
        <source>Enter name for new macro: </source>
        <translation type="obsolete">Introduza o nome para a nova macro: </translation>
    </message>
    <message>
        <source>&lt;qt&gt;The macro name you requested is already taken  by another macro.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;O nome de macro que pide xa está collido por outra macro.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Macro creation failed. The macro manager was unable to set up the macro.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Fallo ao crear a Macro. O xestor de macros non puido preparar a macro.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>The macro &apos;%1&apos; has reported a minor error.
The error is: %2
A full traceback follows:

%3
</source>
        <translation type="obsolete">A macro &quot;%1&quot; informa dun erro menor.
O erro é: %2

%3</translation>
    </message>
    <message>
        <source>The macro &apos;%1&apos; failed to execute correctly.
The error is: %2
A full traceback follows:

%3
</source>
        <translation type="obsolete">A macro &quot;%1&quot; non se executou correctamente.
O erro é %2
Segue a información completa:

%3</translation>
    </message>
</context>
<context>
    <name>ManageMacrosDialog</name>
    <message>
        <source>Scribus Macro Files (*.pymacro)</source>
        <translation type="obsolete">Ficheiros de Macros de Scribus (*.pymacro)</translation>
    </message>
    <message>
        <source>Open File Dialog</source>
        <translation type="obsolete">Diálogo de Abrir Ficheiro</translation>
    </message>
    <message>
        <source>Select the macro file to load.</source>
        <translation type="obsolete">Escolla o ficheiro coa macro que quer carregar.</translation>
    </message>
    <message>
        <source>Save File Dialog</source>
        <translation type="obsolete">Diálogo de Salvar Ficheiro</translation>
    </message>
    <message>
        <source>Save all macros</source>
        <translation type="obsolete">Salvar todas as macros</translation>
    </message>
    <message>
        <source>Scribus - Rename Macro</source>
        <translation type="obsolete">Scribus - Mudar o nome da Macro</translation>
    </message>
    <message>
        <source>Enter new name: </source>
        <translation type="obsolete">Introduza o novo nome: </translation>
    </message>
    <message>
        <source>Scribus - Set Macro Shortcut</source>
        <translation type="obsolete">Scribus - Designar un Atallo para a Macro</translation>
    </message>
    <message>
        <source>Enter new shortcut: </source>
        <translation type="obsolete">Introduza o novo atallo: </translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="obsolete">Si</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="obsolete">Non</translation>
    </message>
    <message>
        <source>Scribus - Macro Manager</source>
        <translation type="obsolete">Scribus - Xestor de Macros</translation>
    </message>
    <message>
        <source>Renaming the macro failed because the name is already in use.</source>
        <translation type="obsolete">Non se puido modificar o nome da macro porque o nome xa está collido.</translation>
    </message>
    <message>
        <source>Scribus - Manage Macros</source>
        <translation type="obsolete">Scribu - Xestión de Macros</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;This window is the Scribus Macro Manager. Here you can create macros, edit macros, etc. All changes are made using the buttons on the right hand side of the window.&lt;/p&gt;
&lt;p&gt;All changes made in this dialog take effect instantly - you cannot cancel the actions you make here.
The table in the center of the dialog lists what macros are currently loaded and some information about them. Use &quot;What&apos;s this&quot; on the table for more information.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;&lt;p&gt;Esta xanela é o Xestor de Macros de Scribus. Aqui poderá crear macros, modificalas, etc. Todas as mudanzas fanse utilizando os botóns da parte dereita da xanela.&lt;/p&gt;
&lt;p&gt;Todas as modificacións feitas neste diálogo son efectivas inmediatamente - non se poden cancelar as accións realizadas aquí.
A táboa do centro do diálogo lista as macros que están carregadas actualmente e algunha información sobre elas. Use &quot;Que é isto&quot; na táboa para máis información.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;Nova</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation type="obsolete">Alt+N</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Create a new macro.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Crear unha macro nova&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Create a new macro by prompting for the macro name then bringing up the edit macro dialog box.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Crear unha macro nova pedindo o nome da macro e mostrando a continuación a caixa de diálogo de edición de macros.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Ok</source>
        <translation type="obsolete">&amp;Aceptar as modificacións</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+O</translation>
    </message>
    <message>
        <source>Close this dialog</source>
        <translation type="obsolete">Fechar este diálogo</translation>
    </message>
    <message>
        <source>Return to Scribus</source>
        <translation type="obsolete">Voltar a Scribus</translation>
    </message>
    <message>
        <source>Macro</source>
        <translation type="obsolete">Macro</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation type="obsolete">Modificar</translation>
    </message>
    <message>
        <source>Accel</source>
        <translation type="obsolete">Acelerador</translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="obsolete">Descrición</translation>
    </message>
    <message>
        <source>&lt;p&gt;This table lists the macros that are currently defined.&lt;/p&gt;

&lt;p&gt;&lt;b&gt;Name:&lt;/b&gt; The name of the macro, as shown in the menu bar and in other places around Scribus.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Edit:&lt;/b&gt; If the macro can be edited, &quot;Yes&quot; appears in this column. Usually if a macro cannot be edited it was created using the register_macro command in a script.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Accel:&lt;/b&gt; The menu shortcut key sequence, if any, associated with the macro. For example, CTRL-F8 means that you can press Control-F8 when in Scribus to run the macro.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Description:&lt;/b&gt; If the macro contains a &quot;docstring&quot;, a special string at the start of its definition that describes it, that is shown here. If the docstring is long, only the beginning is shown - use &quot;What&apos;s This&quot; on the macro&apos;s entry in the Macro menu to see the full description.&lt;/p&gt;</source>
        <translation type="obsolete">&lt;p&gt;Esta táboa lista as macros actualmente definidias.&lt;/p&gt;

&lt;p&gt;&lt;b&gt;Nome:&lt;/b&gt; O nome da macro, tal e como se mostra na barra de menú e noutros lugares do Scribus.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Modificábel:&lt;/b&gt; Se a macro pode ser editada, aparece &quot;Si&quot; nesta columna. Normalmente, se unha macro non se pode editar é que foi creada cun guión utilizando o comando register_macro.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Acelerador:&lt;/b&gt; A secuencia de atallo de teclado do menú, de existir, asociada coa macro. Por exemplo, CTRL-F8 significa que pode premer Control-F8 encanto Scribus estiver a executar a macro.&lt;/p&gt;
&lt;p&gt;&lt;b&gt;Descrición:&lt;/b&gt; Se a macro contén un &quot;dosctring&quot;, unha cadea especial ao inicio da súa definición que a descrebe, mostrarase aquí. Se o dosctring é longo, só se mostrará o comezo - use &quot;Qué é Isto&quot; na entrada da macro no menú Macro para ver a descrición completa.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Rena&amp;me</source>
        <translation type="obsolete">&amp;Mudar o nome</translation>
    </message>
    <message>
        <source>Alt+M</source>
        <translation type="obsolete">Alt+M</translation>
    </message>
    <message>
        <source>Rename the selected macro.</source>
        <translation type="obsolete">Mudarlle o nome á macro seleccionada.</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Rename the selected macro. You will be prompted for the new name.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Mudarlle o nome á macro seleccionada. Pediráselle que introduza o novo nome.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Edit...</source>
        <translation type="obsolete">&amp;Modificar...</translation>
    </message>
    <message>
        <source>Alt+E</source>
        <translation type="obsolete">Alt+E</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Edit the source of the selected macro, if the source is availible.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Modificar a fonte da macro seleccionada, se a fonte está disponíbel.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;p&gt;Edit the selected macro. &lt;/p&gt;
&lt;p&gt;If this button is greyed out, either there is no selected macro or the macro manager does not have the source code for the macro you have selected (in which case &lt;tt&gt;No&lt;/tt&gt; will be shown in the &lt;tt&gt;Edit &lt;/tt&gt;column of the macro).&lt;/p&gt;
&lt;p&gt;If Scribus doesn&apos;t have the source, the macro was probably created by a script.&lt;/p&gt;</source>
        <translation type="obsolete">&lt;p&gt;Modificar a macro seleccionada.&lt;/p&gt;
&lt;p&gt;Se o botón está atenuado é que non hai unha macro seleccionada ou que o xestor de macros non dispón do código fonte da macro que seleccionou (en cuxo caso aparecerá &lt;tt&gt;Non&lt;/tt&gt; na columna &lt;tt&gt;Modificar&lt;/tt&gt; da macro).&lt;/p&gt;
&lt;p&gt;Se Scribus non dispón da fonte, a macro foi probabelmente creada por medio dun guión.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Eliminar</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="obsolete">Alt+D</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Delete the currently selected macro.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Eliminar a macro seleccionada neste momento.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;p&gt;Delete the selected macro. This is instant, and there is no way to recover the macro once deleted. If the macro is created by a start-up script, it will reappear next time you load Scribus.&lt;/p&gt;</source>
        <translation type="obsolete">&lt;p&gt;Eliminar a macro seleccionada. Isto é inmediato e non hai maneira de recuperar a macro unha vez eliminado. Se a macro se creou por medio dun guión de inicio, reaparecerá a próxima vez que inicie Scribus.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>&amp;Set Accel</source>
        <translation type="obsolete">&amp;Designar un Acelerador</translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="obsolete">Alt+S</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Set the keyboard shortcut for the selected macro.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Designar o atallo de teclado para a macro seleccionada.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;p&gt;Set the keyboard shortcut (accelerator) key of the selected macro. You will be prompted for the new shortcut in a dialog box.&lt;/p&gt;</source>
        <translation type="obsolete">&lt;p&gt;Designar a tecla de atallo de teclado (acelerador) para a macro seleccionada. Pediráselle o novo atallo nunha caixa de diálogo.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>E&amp;xport</source>
        <translation type="obsolete">E&amp;xportar</translation>
    </message>
    <message>
        <source>Alt+X</source>
        <translation type="obsolete">Alt+X</translation>
    </message>
    <message>
        <source>Export macros to a file.</source>
        <translation type="obsolete">Exportar macros a un ficheiro.</translation>
    </message>
    <message>
        <source>&lt;p&gt;Export macros to an external file. The file will be a Python script containing the scripter commands to re-create the macros. It can be run using &lt;tt&gt;Load extension script&lt;/tt&gt; from the &lt;tt&gt;Script&lt;/tt&gt; menu, or the import button in the macro manager.&lt;/p&gt;
&lt;p&gt;If you want a nice, human readable version of your macros, select the macro you want, press the &lt;tt&gt;Edit&lt;/tt&gt;  button, and use the &lt;tt&gt;Save source&lt;/tt&gt; button in the &lt;tt&gt;Edit Macro&lt;/tt&gt; dialog. You won&apos;t be able to load that version with &lt;tt&gt;Load extension script&lt;/tt&gt; - instead, create a new macro with the&lt;tt&gt; New&lt;/tt&gt; button and use &lt;tt&gt;Load source&lt;/tt&gt;.&lt;/p&gt;</source>
        <translation type="obsolete">&lt;p&gt;Exportar macros para un ficheiro externo. O ficheiro consistirá nun guión en Python que conteña os comandos do scripter para recrear as macros. Pódese executar utilizando &lt;tt&gt;Carregar o guión de extensións&lt;/tt&gt; ou o botón Importar do xestor de macros.&lt;/p&gt;
&lt;p&gt;Se quer unha versión fácil de ler das súas macros, escolla a macro, calquer no botón &lt;tt&gt;Modificar&lt;/tt&gt; e utilice o botón &lt;tt&gt;Salvar a fonte&lt;/tt&gt; do diálogo &lt;tt&gt;Modificar Macro&lt;/tt&gt;. Non poderá carregar esa versión con &lt;tt&gt;Carregar o guión de extensións&lt;/tt&gt; - porén, cre unha nova macro co botón &lt;tt&gt;Novo&lt;/tt&gt; e utilice &lt;tt&gt;Carregar fonte&lt;/tt&gt;.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Delete &amp;All</source>
        <translation type="obsolete">Eliminalas &amp;Todas</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="obsolete">Alt+A</translation>
    </message>
    <message>
        <source>Delete all macros.</source>
        <translation type="obsolete">Eliminar todas as macros.</translation>
    </message>
    <message>
        <source>&lt;p&gt;Delete all registered macros. This is instant, and there is no way to recover the deleted macros. Any macros created by your start-up script will reappear next time you load Scribus.&lt;/p&gt;</source>
        <translation type="obsolete">&lt;p&gt;Eliminar todas as macros rexistradas. Isto é inmediato e non hai maneira de recuperar as macros eliminadas. As macros creadas co seu guión de inicio reaparecerán a próxima vez que lance o Scribus.&lt;/p&gt;</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="obsolete">&amp;Importar</translation>
    </message>
    <message>
        <source>Alt+I</source>
        <translation type="obsolete">Alt+I</translation>
    </message>
    <message>
        <source>Import macros from a file.</source>
        <translation type="obsolete">Importar macros desde un ficheiro.</translation>
    </message>
    <message>
        <source>&lt;p&gt;Loads macros from an external file.&lt;/p&gt;</source>
        <translation type="obsolete">&lt;p&gt;Carrega macros desde un ficheiro externo.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>MarginDialog</name>
    <message>
        <source>Manage Page Properties</source>
        <translation>Xerir as Propriedades da Páxina</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Tamaño da páxina</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Tamaño:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalizado</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Orie&amp;ntación:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Retrato</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Apaisado</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Anchura:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Altura:</translation>
    </message>
    <message>
        <source>Move Objects with their Page</source>
        <translation>Mover os Obxectos coa súa Páxina</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Tipo:</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Guías das Marxes</translation>
    </message>
</context>
<context>
    <name>MarginWidget</name>
    <message>
        <source>Preset Layouts:</source>
        <translation>Configuración por omisión:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>&amp;Inferior:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>&amp;Superior:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>&amp;Dereita:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Esquerda:</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation>Distancia entre a guía da marxe superior e o bordo da páxina</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation>Distancia entre a guía da marxe inferior e o bordo da páxina</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Distancia entre a guía da marxe esquerda e o bordo da páxina.
Se se escollen Páxinas Enfrentadas, este espazo de marxe pódese usar para obter as marxes adecuadas para a encuadernación</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Distancia entre a guía da marxe direita e o bordo da páxina.
Se se escollen Páxinas Enfrentadas, este espazo de marxe pódese usar para obter as marxes adecuadas para a encuadernación</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation>&amp;Dentro:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation>&amp;Fora:</translation>
    </message>
    <message>
        <source>Apply margin settings to all pages</source>
        <translation>Aplicar a configuración de marxes a todas as páxinas</translation>
    </message>
    <message>
        <source>Apply the margin changes to all existing pages in the document</source>
        <translation>Aplicar as modificacións nas marxes a todas as páxinas existentes do documento</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page. If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Distancia entre a guía da marxe esquerda e o bordo da páxina. Se se escolleron Páxinas Enfrontadas, este espazo de marxe pódese utilizar para obter as marxes adecuadas para encuadernar</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page. If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation>Distancia entre a guía da marxe dereita e o bordo da páxina. Se se escolleron Páxinas Enfrontadas, este espazo de marxe pódese utlizar para lograr as marxes adecuadas para encuadernar</translation>
    </message>
    <message>
        <source>Printer Margins...</source>
        <translation>Marxes da Impresora...</translation>
    </message>
    <message>
        <source>Import the margins for the selected page size from the available printers.</source>
        <translation>Importar as marxes para o tamaño de páxina escollida das impresoras disponíbeis.</translation>
    </message>
</context>
<context>
    <name>MasterPagesPalette</name>
    <message>
        <source>Edit Master Pages</source>
        <translation>Modificar as Páxinas Mestras</translation>
    </message>
    <message>
        <source>Duplicates the selected master page</source>
        <translation type="obsolete">Duplica a páxina mestra seleccionada</translation>
    </message>
    <message>
        <source>Deletes the selected master page</source>
        <translation type="obsolete">Elimina a páxina mestra seleccionada</translation>
    </message>
    <message>
        <source>Adds a new master page</source>
        <translation type="obsolete">Adiciona unha nova páxina mestra</translation>
    </message>
    <message>
        <source>Imports master pages from another document</source>
        <translation type="obsolete">Importa as páxinas mestras doutro documento</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Do you really want to delete this master page?</source>
        <translation>Quer realmente eliminar esta páxina mestra?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Non</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Si</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation>&amp;Nome:</translation>
    </message>
    <message>
        <source>New Master Page</source>
        <translation>Nova Páxina Mestra</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Copiar de %1</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Nome:</translation>
    </message>
    <message>
        <source>New MasterPage</source>
        <translation>Nova PáxinaMestra</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation>Copiar nº %1 de </translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Duplicate the selected master page</source>
        <translation>Duplicar a páxina mestra seleccionada</translation>
    </message>
    <message>
        <source>Delete the selected master page</source>
        <translation>Eliminar a páxina mestra seleccionada</translation>
    </message>
    <message>
        <source>Add a new master page</source>
        <translation>Adicionar unha páxina mestra nova</translation>
    </message>
    <message>
        <source>Import master pages from another document</source>
        <translation>Importar páxinas mestras doutro documento</translation>
    </message>
    <message>
        <source>New Master Page %1</source>
        <translation>Páxina Mestra Nova %1</translation>
    </message>
</context>
<context>
    <name>Mdup</name>
    <message>
        <source>Multiple Duplicate</source>
        <translation>Duplicados Múltiples</translation>
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
        <translation>&amp;Número de Copias:</translation>
    </message>
    <message>
        <source>&amp;Horizontal Shift:</source>
        <translation>Desprazamento &amp;Horizontal:</translation>
    </message>
    <message>
        <source>&amp;Vertical Shift:</source>
        <translation>Desprazamento &amp;Vertical:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>Measurements</name>
    <message>
        <source>Distances</source>
        <translation>Distancias</translation>
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
        <translation>DX:</translation>
    </message>
    <message>
        <source>DY:</source>
        <translation>DY:</translation>
    </message>
    <message>
        <source>Angle:</source>
        <translation>Ángulo:</translation>
    </message>
    <message>
        <source>Length:</source>
        <translation>Lonxitude:</translation>
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
        <translation>pt</translation>
    </message>
</context>
<context>
    <name>MergeDoc</name>
    <message>
        <source>Import Template</source>
        <translation type="obsolete">Importar un Modelo</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation>Importar Páxina(s)</translation>
    </message>
    <message>
        <source>From Document:</source>
        <translation type="obsolete">Desde o Documento:</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation type="obsolete">Mudar...</translation>
    </message>
    <message>
        <source>Import Page(s):</source>
        <translation type="obsolete">Importar Páxina(s):</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="obsolete">Inserir unha lista de elementos separada por vírgulas, na que
un elemento pode ser * para todas as páxinas, 1-5 para
un rango de páxinas ou un único número de páxina.</translation>
    </message>
    <message>
        <source> from 0</source>
        <translation> desde 0</translation>
    </message>
    <message>
        <source>Create Page(s)</source>
        <translation>Crear Páxina(s)</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation type="obsolete">antes da Páxina</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation type="obsolete">após a Páxina</translation>
    </message>
    <message>
        <source>at End</source>
        <translation type="obsolete">ao Final</translation>
    </message>
    <message>
        <source>Import</source>
        <translation type="obsolete">Importar</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Cancelar</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documentos (*.sla *.sla.gz *.scd *.scd.gz);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documentos (*.sla *.scd);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source> from %1</source>
        <translation> desde %1</translation>
    </message>
    <message>
        <source>Import Master Page</source>
        <translation>Importar Páxina Mestra</translation>
    </message>
    <message>
        <source>&amp;From Document:</source>
        <translation>&amp;Desde o Documento:</translation>
    </message>
    <message>
        <source>Chan&amp;ge...</source>
        <translation>Mu&amp;dar...</translation>
    </message>
    <message>
        <source>&amp;Import Page(s):</source>
        <translation>&amp;Importar Páxina(s):</translation>
    </message>
    <message>
        <source>&amp;Import Master Page</source>
        <translation>&amp;Importar Páxina Mestra</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens import where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
        <translation>Inserir unha lista de valores separados por vírgulas na que un valor pode ser * para todas as páxinas, 1-5 para un rango de páxinas ou un simple número de páxina.</translation>
    </message>
    <message>
        <source>Before Page</source>
        <translation>Antes da Páxina</translation>
    </message>
    <message>
        <source>After Page</source>
        <translation>Depóis da Páxina</translation>
    </message>
    <message>
        <source>At End</source>
        <translation>No Final</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importar</translation>
    </message>
</context>
<context>
    <name>MissingFont</name>
    <message>
        <source>Missing Font</source>
        <translation>Falta esta Fonte</translation>
    </message>
    <message>
        <source>The Font %1 is not installed.</source>
        <translation>A Fonte %1 non está instalada.</translation>
    </message>
    <message>
        <source>Use</source>
        <translation>Utilizar</translation>
    </message>
    <message>
        <source>instead</source>
        <translation>no seu lugar</translation>
    </message>
</context>
<context>
    <name>MovePages</name>
    <message>
        <source>Move Pages</source>
        <translation>Mover Páxinas</translation>
    </message>
    <message>
        <source>Copy Page</source>
        <translation>Copiar a Páxina</translation>
    </message>
    <message>
        <source>Move Page(s):</source>
        <translation>Mover Páxina(s):</translation>
    </message>
    <message>
        <source>to:</source>
        <translation type="obsolete">até:</translation>
    </message>
    <message>
        <source>before Page</source>
        <translation type="obsolete">antes da Páxina</translation>
    </message>
    <message>
        <source>after Page</source>
        <translation type="obsolete">após a Páxina</translation>
    </message>
    <message>
        <source>at End</source>
        <translation type="obsolete">ao Final</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Move Page(s)</source>
        <translation>Mover a(s) Páxina(s)</translation>
    </message>
    <message>
        <source>Before Page</source>
        <translation>Antes da Páxina</translation>
    </message>
    <message>
        <source>After Page</source>
        <translation>Depóis da Páxina</translation>
    </message>
    <message>
        <source>At End</source>
        <translation>No Final</translation>
    </message>
    <message>
        <source>To:</source>
        <translation>Á:</translation>
    </message>
    <message>
        <source>Number of copies:</source>
        <translation>Número de copias:</translation>
    </message>
</context>
<context>
    <name>Mpalette</name>
    <message>
        <source>Properties</source>
        <translation>Propriedades</translation>
    </message>
    <message>
        <source>X, Y, &amp;Z</source>
        <translation>X, Y, &amp;Z</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>&amp;Forma</translation>
    </message>
    <message>
        <source>&amp;Text</source>
        <translation>&amp;Texto</translation>
    </message>
    <message>
        <source>&amp;Image</source>
        <translation>&amp;Imaxe</translation>
    </message>
    <message>
        <source>&amp;Line</source>
        <translation>&amp;Liña</translation>
    </message>
    <message>
        <source>&amp;Colors</source>
        <translation>&amp;Cores</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>Geometry</source>
        <translation>Xeometría</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>Pos-&amp;X:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>Pos-&amp;Y:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Anchura:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Altura:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Rotación:</translation>
    </message>
    <message>
        <source>Basepoint:</source>
        <translation>Punto Base:</translation>
    </message>
    <message>
        <source>Level</source>
        <translation>Nível</translation>
    </message>
    <message>
        <source>Shape:</source>
        <translation>Forma:</translation>
    </message>
    <message>
        <source>&amp;Edit Shape...</source>
        <translation>&amp;Modificar a Forma...</translation>
    </message>
    <message>
        <source>R&amp;ound
Corners:</source>
        <translation>Esquinas
Arred&amp;ondadas:</translation>
    </message>
    <message>
        <source>Distance of Text</source>
        <translation>Distancia do Texto</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>Colu&amp;mnas:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>&amp;Distancia:</translation>
    </message>
    <message>
        <source>To&amp;p:</source>
        <translation>Su&amp;perior:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>&amp;Inferior:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Esquerda:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>Di&amp;reita:</translation>
    </message>
    <message>
        <source>T&amp;abulators...</source>
        <translation>T&amp;abuladores...</translation>
    </message>
    <message>
        <source>Path Text Properties</source>
        <translation>Propriedades do Trazado do Texto</translation>
    </message>
    <message>
        <source>Show Curve</source>
        <translation>Mostrar a Curva</translation>
    </message>
    <message>
        <source>Start Offset:</source>
        <translation>Distancia ao Inicio:</translation>
    </message>
    <message>
        <source>Distance from Curve:</source>
        <translation>Distáncia á Curva:</translation>
    </message>
    <message>
        <source>Text &amp;Flows Around Frame</source>
        <translation>O Texto &amp;Flúe Arredor da Moldura </translation>
    </message>
    <message>
        <source>Use &amp;Bounding Box</source>
        <translation>Usar &amp;Caixa Delimitadora</translation>
    </message>
    <message>
        <source>&amp;Use Contour Line</source>
        <translation>&amp;Usar Liña de Contorno</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation type="obsolete">Tamaño da &amp;Fonte:</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Shade:</source>
        <translation type="obsolete">Saturación:</translation>
    </message>
    <message>
        <source>Custom Spacing</source>
        <translation type="obsolete">Distancia personalizado</translation>
    </message>
    <message>
        <source>Trac&amp;king:</source>
        <translation type="obsolete">Trac&amp;king:</translation>
    </message>
    <message>
        <source>L&amp;ine Spacing:</source>
        <translation type="obsolete">Interl&amp;iñado:</translation>
    </message>
    <message>
        <source>St&amp;yle:</source>
        <translation>Est&amp;ilo:</translation>
    </message>
    <message>
        <source>Lan&amp;guage:</source>
        <translation>Lin&amp;gua:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation>Ampliación &amp;Libre</translation>
    </message>
    <message>
        <source>X-Sc&amp;ale:</source>
        <translation>Esc&amp;ala-X:</translation>
    </message>
    <message>
        <source>Y-Scal&amp;e:</source>
        <translation>Escal&amp;a-Y:</translation>
    </message>
    <message>
        <source>Scale &amp;To Frame Size</source>
        <translation>Acomodar ao Tamaño da &amp;Moldura</translation>
    </message>
    <message>
        <source>P&amp;roportional</source>
        <translation>P&amp;roporcional</translation>
    </message>
    <message>
        <source>Input Profile:</source>
        <translation>Perfil de Entrada:</translation>
    </message>
    <message>
        <source>Rendering Intent:</source>
        <translation>Propósito da exhibición:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Perceptual</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Colorimétrico relativo</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Saturación</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Colorimétrico absoluto</translation>
    </message>
    <message>
        <source>Left Point</source>
        <translation>Extremo esquerdo</translation>
    </message>
    <message>
        <source>End Points</source>
        <translation>Extremos</translation>
    </message>
    <message>
        <source>&amp;Basepoint:</source>
        <translation>&amp;Punto Base:</translation>
    </message>
    <message>
        <source>T&amp;ype of Line:</source>
        <translation>T&amp;ipo de Liña:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation>&amp;Anchura da Liña:</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation>Xunta en inglete</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Xunta biselada</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation>Xunta arredondada</translation>
    </message>
    <message>
        <source>Ed&amp;ges:</source>
        <translation>U&amp;nións:</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>Terminación Plana</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation>Terminación cadrada</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation>Terminación Arredondada</translation>
    </message>
    <message>
        <source>&amp;Endings:</source>
        <translation>R&amp;emates:</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation>Sen Estilo</translation>
    </message>
    <message>
        <source>Cell Lines</source>
        <translation></translation>
    </message>
    <message>
        <source>Line at Top</source>
        <translation>Liña en cima</translation>
    </message>
    <message>
        <source>Line at the Left</source>
        <translation>Liña á Esquerda</translation>
    </message>
    <message>
        <source>Line at the Right </source>
        <translation>Liña á Dereita</translation>
    </message>
    <message>
        <source>Line at Bottom</source>
        <translation>Liña embaixo</translation>
    </message>
    <message>
        <source>Name of selected object</source>
        <translation>Nome do obxecto seleccionado</translation>
    </message>
    <message>
        <source>Horizontal position of current basepoint</source>
        <translation>Posición horizontal do punto base actual</translation>
    </message>
    <message>
        <source>Vertical position of current basepoint</source>
        <translation>Posición vertical do punto base actual</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>Anchura</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>Altura</translation>
    </message>
    <message>
        <source>Rotation of object at current basepoint</source>
        <translation>Rotación do obxecto sobre o punto base actual</translation>
    </message>
    <message>
        <source>Point from which measurements or rotation angles are referenced</source>
        <translation>Punto desde o que se referencian as medidas e ángulos de rotación</translation>
    </message>
    <message>
        <source>Select top left for basepoint</source>
        <translation>Seleccionar como punto base o superior esquerdo</translation>
    </message>
    <message>
        <source>Select top right for basepoint</source>
        <translation>Seleccionar como punto base o superior direito</translation>
    </message>
    <message>
        <source>Select bottom left for basepoint</source>
        <translation>Seleccionar como punto base o inferior esquerdo</translation>
    </message>
    <message>
        <source>Select bottom right for basepoint</source>
        <translation>Seleccionar como punto base o inferior direito</translation>
    </message>
    <message>
        <source>Select center for basepoint</source>
        <translation>Seleccionar como punto base o centro</translation>
    </message>
    <message>
        <source>Flip Horizontal</source>
        <translation>Voltear na Horizontal</translation>
    </message>
    <message>
        <source>Flip Vertical</source>
        <translation>Voltear na Vertical</translation>
    </message>
    <message>
        <source>Move one level up</source>
        <translation>Subir un nível</translation>
    </message>
    <message>
        <source>Move one level down</source>
        <translation>Baixar un nível</translation>
    </message>
    <message>
        <source>Move to front</source>
        <translation>Traer para a frente</translation>
    </message>
    <message>
        <source>Move to back</source>
        <translation>Enviar para o fondo</translation>
    </message>
    <message>
        <source>Indicates the level the object is on, 0 means the object is at the bottom</source>
        <translation>Indica o nível no que se atopa o obxecto; 0 significa que o obxecto está no fondo</translation>
    </message>
    <message>
        <source>Lock or unlock the object</source>
        <translation>Bloquear ou desbloquear o obxecto</translation>
    </message>
    <message>
        <source>Lock or unlock the size of the object</source>
        <translation>Bloquear ou desbloquear o tamaño do obxecto</translation>
    </message>
    <message>
        <source>Enable or disable printing of the object</source>
        <translation>Permitir ou impedir que se imprima o obxecto</translation>
    </message>
    <message>
        <source>Make text in lower frames flow around the object shape</source>
        <translation type="obsolete">Facer que o texto das molduras inferiores flúa arredor da silueta do obxecto</translation>
    </message>
    <message>
        <source>Use a surrounding box instead of the frame&apos;s shape for text flow</source>
        <translation type="obsolete">Usar a caixa que o rodea, en vez da silueta da moldura, para o fluxo do texto</translation>
    </message>
    <message>
        <source>Use a second line originally based on the frame&apos;s shape for text flow</source>
        <translation type="obsolete">Usar unha ssegunda liña baseada orixinalmente na forma da moldura para o fluxo do texto</translation>
    </message>
    <message>
        <source>Font of selected text or object</source>
        <translation>Fonte do texto ou obxecto seleccionados</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Tamaño da Fonte</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation>Anchura de ampliación dos caracteres</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation type="obsolete">Cor do trazo do texto</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation type="obsolete">Cor do enchido do texto</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation>Saturación da cor do trazo do texto</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation>Saturación da cor do enchido do texto</translation>
    </message>
    <message>
        <source>Right to Left Writing</source>
        <translation>Escrita de Dereita a Esquerda</translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation>Tracking Manual</translation>
    </message>
    <message>
        <source>Line Spacing</source>
        <translation>Interliñado</translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation>Estilo do parágrafo actual</translation>
    </message>
    <message>
        <source>Hyphenation language of frame</source>
        <translation>Lingua da moldura para cortar con guións</translation>
    </message>
    <message>
        <source>Change settings for left or end points</source>
        <translation>Mudar a configuración para os puntos esquerdo ou final</translation>
    </message>
    <message>
        <source>Pattern of line</source>
        <translation>Deseño da liña</translation>
    </message>
    <message>
        <source>Thickness of line</source>
        <translation>Anchura da liña</translation>
    </message>
    <message>
        <source>Type of line joins</source>
        <translation>Tipo de xuntas</translation>
    </message>
    <message>
        <source>Type of line end</source>
        <translation>Tipo de extremo da liña</translation>
    </message>
    <message>
        <source>Line style of current object</source>
        <translation>Estilo da liña do obxecto actual</translation>
    </message>
    <message>
        <source>Choose the shape of frame...</source>
        <translation>Escoller a forma da moldura...</translation>
    </message>
    <message>
        <source>Edit shape of the frame...</source>
        <translation>Modificar a forma da moldura...</translation>
    </message>
    <message>
        <source>Set radius of corner rounding</source>
        <translation>Indicar o radio do arredondeamento da esquina</translation>
    </message>
    <message>
        <source>Number of columns in text frame</source>
        <translation>Número de columnas na moldura de texto</translation>
    </message>
    <message>
        <source>Switches between Gap or Column width</source>
        <translation>Alterna entre Espazo e Anchura de Columna</translation>
    </message>
    <message>
        <source>Distance between columns</source>
        <translation>Distancia entre columnas</translation>
    </message>
    <message>
        <source>Distance of text from top of frame</source>
        <translation>Distancia do texto desde a parte superior da moldura</translation>
    </message>
    <message>
        <source>Distance of text from bottom of frame</source>
        <translation>Distancia do texto desde a parte inferior da moldura</translation>
    </message>
    <message>
        <source>Distance of text from left of frame</source>
        <translation>Distancia do texto desde a parte esquerda da moldura</translation>
    </message>
    <message>
        <source>Distance of text from right of frame</source>
        <translation>Distancia do texto desde a parte dereita da moldura</translation>
    </message>
    <message>
        <source>Edit tab settings of text frame...</source>
        <translation>Modificar os tabuladores da moldura de texto...</translation>
    </message>
    <message>
        <source>Allow the image to be a different size to the frame</source>
        <translation>Permitir que a imaxe teña un tamaño diferente do da moldura</translation>
    </message>
    <message>
        <source>Horizontal offset of image within frame</source>
        <translation>Distancia horizontal da imaxe dentro da moldura</translation>
    </message>
    <message>
        <source>Vertical offset of image within frame</source>
        <translation>Distancia vertical da imaxe dentro da moldura</translation>
    </message>
    <message>
        <source>Resize the image horizontally</source>
        <translation>Modificar o tamaño da imaxe na horizontal</translation>
    </message>
    <message>
        <source>Resize the image vertically</source>
        <translation>Modificar o tamaño da imaxe na vertical</translation>
    </message>
    <message>
        <source>Keep the X and Y scaling the same</source>
        <translation>Manter igual a relación entre X e Y</translation>
    </message>
    <message>
        <source>Keep the aspect ratio</source>
        <translation>Manter a proporción</translation>
    </message>
    <message>
        <source>Make the image fit within the size of the frame</source>
        <translation>Facer que a imaxe se acomode dentro do tamaño da moldura</translation>
    </message>
    <message>
        <source>Use image proportions rather than those of the frame</source>
        <translation>Usar as proporcións da imaxe en vez das da moldura</translation>
    </message>
    <message>
        <source>Source profile of the image</source>
        <translation>Perfil da fonte da imaxe</translation>
    </message>
    <message>
        <source>Rendering intent for the image</source>
        <translation></translation>
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
        <source>Column width</source>
        <translation>Anchura da columna</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengunha</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="obsolete">O nome &quot;%1&quot; non é único.
Escolla outro.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">De acordo</translation>
    </message>
    <message>
        <source>Fixed Linespacing</source>
        <translation>Interliñado fixo</translation>
    </message>
    <message>
        <source>Automatic Linespacing</source>
        <translation>Interliñado automático</translation>
    </message>
    <message>
        <source>Align to Baseline Grid</source>
        <translation>Aliñar á Grella Base</translation>
    </message>
    <message>
        <source>Actual X-DPI:</source>
        <translation>X-DPI Real:</translation>
    </message>
    <message>
        <source>Actual Y-DPI:</source>
        <translation>Y-DPI Real:</translation>
    </message>
    <message>
        <source>Start Arrow:</source>
        <translation>Flecha Inicial:</translation>
    </message>
    <message>
        <source>End Arrow:</source>
        <translation>Flecha Final:</translation>
    </message>
    <message>
        <source>Offset to baseline of characters</source>
        <translation>Separación dos caracteres da liña base</translation>
    </message>
    <message>
        <source>Scaling height of characters</source>
        <translation>Escala da altura dos caracteres</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.&lt;br/&gt;Please choose another.</source>
        <translation>O nome &quot;%1&quot; non é único.&lt;br/&gt;Escolla outro.</translation>
    </message>
    <message>
        <source>Color of text stroke. Only available with &quot;outline&quot; text decoration.</source>
        <translation type="obsolete">Cor do trazo do texto. Só está disponíbel coa decoración de texto &quot;contorno&quot;.</translation>
    </message>
    <message>
        <source>Color of text fill. Only available with &quot;outline&quot; text decoration.</source>
        <translation type="obsolete">Cor do enchido do texto. Só está disponíbel coa decoración de texto &quot;contorno&quot;.</translation>
    </message>
    <message>
        <source>Fill Rule</source>
        <translation>Regra de Enchido</translation>
    </message>
    <message>
        <source>Even-Odd</source>
        <translation>Par-Impar</translation>
    </message>
    <message>
        <source>Non Zero</source>
        <translation>Non Cero</translation>
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
        <source>Click to select the line spacing mode</source>
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
</context>
<context>
    <name>MultiLine</name>
    <message>
        <source>Edit Style</source>
        <translation>Modificar o Estilo</translation>
    </message>
    <message>
        <source>Flat Cap</source>
        <translation>Terminación Plana</translation>
    </message>
    <message>
        <source>Square Cap</source>
        <translation>Terminación cadrada</translation>
    </message>
    <message>
        <source>Round Cap</source>
        <translation>Terminación Arredondada</translation>
    </message>
    <message>
        <source>Miter Join</source>
        <translation>Xunta en inglete</translation>
    </message>
    <message>
        <source>Bevel Join</source>
        <translation>Xunta biselada</translation>
    </message>
    <message>
        <source>Round Join</source>
        <translation>Xunta arredondada</translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation>Anchura da Liña:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source> pt </source>
        <translation> pt </translation>
    </message>
    <message>
        <source>Solid Line</source>
        <translation>Liña continua</translation>
    </message>
    <message>
        <source>Dashed Line</source>
        <translation>Liña tracexada</translation>
    </message>
    <message>
        <source>Dotted Line</source>
        <translation>Liña de puntos</translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation>Liña guión-punto</translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation>Liña guión-punto-punto</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="obsolete">O nome &quot;%1&quot; non é único.
Escolla outro.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>De acordo</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.&lt;br/&gt;Please choose another.</source>
        <translation>O nome &quot;%1&quot; non é único.&lt;br/&gt;Escolla outro.</translation>
    </message>
</context>
<context>
    <name>MultiProgressDialogBase</name>
    <message>
        <source>Progress</source>
        <translation>Progreso</translation>
    </message>
    <message>
        <source>Overall Progress:</source>
        <translation>Progreso Total:</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>MusterSeiten</name>
    <message>
        <source>Edit Templates</source>
        <translation type="obsolete">Modificar Modelos</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="obsolete">&amp;Adicionar</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;Novo</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="obsolete">D&amp;uplicar</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Eliminar</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Fechar</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Do you really want to delete this Template?</source>
        <translation type="obsolete">Realmente quer eliminar este Modelo?</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation type="obsolete">&amp;Non</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation type="obsolete">&amp;Si</translation>
    </message>
    <message>
        <source>&amp;Name:</source>
        <translation type="obsolete">&amp;Nome:</translation>
    </message>
    <message>
        <source>New Template</source>
        <translation type="obsolete">Modelo novo</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation type="obsolete">Copiar de %1</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="obsolete">Nome:</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation type="obsolete">Copia nº %1 de</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normal</translation>
    </message>
</context>
<context>
    <name>MyPlugin</name>
    <message>
        <source>My &amp;Plugin</source>
        <translation>A miña &amp;Extensión</translation>
    </message>
</context>
<context>
    <name>MyPluginImpl</name>
    <message>
        <source>Scribus - My Plugin</source>
        <translation>Scribus - A Miña Extensión</translation>
    </message>
    <message>
        <source>The plugin worked!</source>
        <translation>A extensión funcionou!</translation>
    </message>
</context>
<context>
    <name>NewDoc</name>
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
        <source>New Document</source>
        <translation>Documento novo</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Tamaño da páxina</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Tamaño:</translation>
    </message>
    <message>
        <source>Executive</source>
        <translation type="obsolete">Executivo</translation>
    </message>
    <message>
        <source>Folio</source>
        <translation type="obsolete">Folio</translation>
    </message>
    <message>
        <source>Ledger</source>
        <translation type="obsolete">Libro contábel</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation type="obsolete">Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation type="obsolete">Carta</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation type="obsolete">Tabloide</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalizado</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Orie&amp;ntación:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Retrato</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Apaisado</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Anchura:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Altura:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation type="obsolete">Páxinas &amp;Enfrentadas</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation type="obsolete">A Páxina &amp;Esquerda Primeiro</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Guías das Marxes</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation type="obsolete">&amp;Esquerda:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation type="obsolete">&amp;Direita:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation type="obsolete">&amp;Superior:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation type="obsolete">&amp;Inferior:</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opcións</translation>
    </message>
    <message>
        <source>F&amp;irst Page Number:</source>
        <translation type="obsolete">Pr&amp;imeiro Número de Páxina:</translation>
    </message>
    <message>
        <source>&amp;Default Unit:</source>
        <translation>Unidade por &amp;Omisión:</translation>
    </message>
    <message>
        <source>Points (pts)</source>
        <translation type="obsolete">Puntos (pts)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation type="obsolete">Milímetros (mm)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="obsolete">Polgadas (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="obsolete">Picas (p)</translation>
    </message>
    <message>
        <source>&amp;Automatic Text Frames</source>
        <translation>Molduras de Texto &amp;Automáticas</translation>
    </message>
    <message>
        <source>Column Guides</source>
        <translation type="obsolete">Guías das Columnas</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>&amp;Distancia:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>Colu&amp;mnas:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Document page size, either a standard size or a custom size</source>
        <translation>Tamaño de páxina do documento, ben un tamaño padrón, ben personalizado</translation>
    </message>
    <message>
        <source>Orientation of the document&apos;s pages</source>
        <translation>Orientación das páxinas do documento</translation>
    </message>
    <message>
        <source>Width of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Anchura das páxinas do documento, modificábel se escolleu un tamaño de páxina personalizado</translation>
    </message>
    <message>
        <source>Height of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation>Anchura das páxinas do documentos, modificábel se escolleu un tamaño de páxina personalizado</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation type="obsolete">Permitir a disposición sinxela ou de dobre páxina</translation>
    </message>
    <message>
        <source>Make the first page the left page of the document</source>
        <translation type="obsolete">Facer que a primeira páxina sexa a páxina esquerda do documento</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation type="obsolete">Distancia entre a guía da marxe superior e o bordo da páxina</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation type="obsolete">Distancia entre a guía da marxe inferior e o bordo da páxina</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Distancia entre a guía da marxe esquerda e o bordo da páxina.
Se se escollen Páxinas Enfrentadas, este espazo de marxe pódese ussar para obter as marxes adecuadas para a encuadernación</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Distancia entre a guía da marxe direita e o bordo da páxina.
Se se escollen Páxinas Enfrentadas, este espazo de marxe pódese ussar para obter as marxes adecuadas para a encuadernación</translation>
    </message>
    <message>
        <source>First page number of the document</source>
        <translation type="obsolete">Primeiro número de páxina do documento</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation>Unidade de medida predeterminada para a edición do documento</translation>
    </message>
    <message>
        <source>Create text frames automatically when new pages are added</source>
        <translation>Crear molduras de texto automaticamente ao adicionar páxinas novas</translation>
    </message>
    <message>
        <source>Number of columns to create in automatically created text frames</source>
        <translation>Número de columnas a crear nas molduras de texto creadas automaticamente</translation>
    </message>
    <message>
        <source>Distance between automatically created columns</source>
        <translation>Distancia entre columnas creadas automaticamente</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation type="obsolete">&amp;Dentro:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation type="obsolete">&amp;Fora:</translation>
    </message>
    <message>
        <source>Open Document</source>
        <translation type="obsolete">Abrir Documento</translation>
    </message>
    <message>
        <source>Recent Documents</source>
        <translation type="obsolete">Documentos Recentes</translation>
    </message>
    <message>
        <source>Do not show this dialog again</source>
        <translation>Non mostrar máis este diálogo</translation>
    </message>
    <message>
        <source>Initial number of pages of the document</source>
        <translation>Número inicial de páxinas do documento</translation>
    </message>
    <message>
        <source>N&amp;umber of Pages:</source>
        <translation>N&amp;úmero de Páxinas:</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;</source>
        <translation type="obsolete">Documentos (*.sla *.sla.gz *.scd *.scd.gz);;</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;</source>
        <translation type="obsolete">Documentos (*.sla *.scd);;</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation type="obsolete">Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>&amp;New Document</source>
        <translation>Documento &amp;Novo</translation>
    </message>
    <message>
        <source>Open &amp;Existing Document</source>
        <translation>Abrir un Documento &amp;Existente</translation>
    </message>
    <message>
        <source>Open Recent &amp;Document</source>
        <translation>Abrir un &amp;Documento Recente</translation>
    </message>
</context>
<context>
    <name>NewFromTemplatePlugin</name>
    <message>
        <source>New &amp;from Template...</source>
        <translation>Novo a partir dun &amp;Modelo...</translation>
    </message>
    <message>
        <source>Load documents with predefined layout</source>
        <translation>Carregar documentos cunha disposición predefinida</translation>
    </message>
    <message>
        <source>Start a document from a template made by other users or yourself (f.e. for documents you have a constant style).</source>
        <translation>Iniciar un documento a partir dun modelo feito por outros usuarios ou por vostede mesmo (p.ex. para documentos para os que ten un estilo constante).</translation>
    </message>
</context>
<context>
    <name>NewTm</name>
    <message>
        <source>Left Page</source>
        <translation type="obsolete">Páxina Esquerda</translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation type="obsolete">Páxina Direita</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>NodePalette</name>
    <message>
        <source>Nodes</source>
        <translation>Nodos</translation>
    </message>
    <message>
        <source>&amp;Absolute Coordinates</source>
        <translation>Coordenadas &amp;Absolutas</translation>
    </message>
    <message>
        <source>&amp;X-Pos:</source>
        <translation>Pos-&amp;X:</translation>
    </message>
    <message>
        <source>&amp;Y-Pos:</source>
        <translation>Pos-&amp;Y:</translation>
    </message>
    <message>
        <source>Edit &amp;Contour Line</source>
        <translation>Modificar a Liña de &amp;Contorno</translation>
    </message>
    <message>
        <source>&amp;Reset Contour Line</source>
        <translation>Bo&amp;rrar a Liña de Contorno</translation>
    </message>
    <message>
        <source>&amp;End Editing</source>
        <translation>R&amp;ematar as Modificacións</translation>
    </message>
    <message>
        <source>Move Nodes</source>
        <translation>Mover Nodos</translation>
    </message>
    <message>
        <source>Move Control Points</source>
        <translation>Mover Puntos de Control</translation>
    </message>
    <message>
        <source>Add Nodes</source>
        <translation>Adicionar Nodos</translation>
    </message>
    <message>
        <source>Delete Nodes</source>
        <translation>Eliminar Nodos</translation>
    </message>
    <message>
        <source>Move Control Points Independently</source>
        <translation>Mover os Puntos de Control Independentemente</translation>
    </message>
    <message>
        <source>Move Control Points Symmetrical</source>
        <translation>Mover os Puntos de Control Simetricamente</translation>
    </message>
    <message>
        <source>Reset Control Points</source>
        <translation>Limpar os Puntos de Control</translation>
    </message>
    <message>
        <source>Reset this Control Point</source>
        <translation>Limpar este Punto de Control</translation>
    </message>
    <message>
        <source>Open a Polygon or Cuts a Bezier Curve</source>
        <translation>Abrir un Polígono ou Cortar unha Curva de Bézier</translation>
    </message>
    <message>
        <source>Close this Bezier Curve</source>
        <translation>Fechar esta Curva de Bézier</translation>
    </message>
    <message>
        <source>Mirror the Path Horizontally</source>
        <translation>Reflexar o Trazo Horizontalmente</translation>
    </message>
    <message>
        <source>Mirror the Path Vertically</source>
        <translation>Reflexar o Trazo Verticalmente</translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Right</source>
        <translation>Recortar o Trazo Horizontalmente para a Dereita</translation>
    </message>
    <message>
        <source>Shear the Path Horizontally to the Left</source>
        <translation>Recortar o Trazo Horizontalmente para a Esquerda</translation>
    </message>
    <message>
        <source>Shear the Path Vertically Up</source>
        <translation>Recortar o Trazo Verticalmente para riba</translation>
    </message>
    <message>
        <source>Shear the Path Vertically Down</source>
        <translation>Recortar o Trazo Verticalmente para baixo</translation>
    </message>
    <message>
        <source>Rotate the Path Counter-Clockwise</source>
        <translation>Rotar o Trazo en sentido Anti-reloxio</translation>
    </message>
    <message>
        <source>Rotate the Path Clockwise</source>
        <translation>Rotar o Trazo no sentido do Reloxio</translation>
    </message>
    <message>
        <source>Reduce the Size of the Path by shown %</source>
        <translation type="obsolete">Reducir o Tamaño do Trazo polo % mostrado</translation>
    </message>
    <message>
        <source>Enlarge the Size of the Path by shown %</source>
        <translation>Aumentar o Tamaño do Trazo polo % mostrado</translation>
    </message>
    <message>
        <source>Angle of Rotation</source>
        <translation>Ángulo de Rotación</translation>
    </message>
    <message>
        <source>% to Enlarge or Reduce By</source>
        <translation type="obsolete">% polo que Aumentar ou Reducir</translation>
    </message>
    <message>
        <source>Activate Contour Line Editing Mode</source>
        <translation>Activar o Modo de Edición da Liña de Contorno</translation>
    </message>
    <message>
        <source>Reset the Contour Line to the Original Shape of the Frame</source>
        <translation>Limpar a Liña de Contorno para a Forma Orixinal da Moldura</translation>
    </message>
    <message>
        <source>When checked use Coordinates relative to the Page,
otherwise Coordinates are relative to the Object.</source>
        <translation type="obsolete">Se está seleccionado, úsanse as Coordenadas relativas á Páxina; se non, as Coordenadas son relativas ao Obxecto.</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>When checked use coordinates relative to the page, otherwise coordinates are relative to the Object.</source>
        <translation>De estar seleccionado utilizar coordenadas relativas á páxina; se non, as coordenadas son relativas ao Obxecto.</translation>
    </message>
    <message>
        <source>Shrink the Size of the Path by shown %</source>
        <translation>Encoller o Tamaño do Trazo na percentaxe mostrada</translation>
    </message>
    <message>
        <source>Reduce the Size of the Path by the shown value</source>
        <translation>Reducir o Tamaño do Trazo no valor mostrado</translation>
    </message>
    <message>
        <source>Enlarge the Size of the Path by the shown value</source>
        <translation>Aumentar o Tamaño do Trazo no valor mostrado</translation>
    </message>
    <message>
        <source>% to Enlarge or Shrink By</source>
        <translation>Percentaxe no que Aumentar ou Reducir</translation>
    </message>
    <message>
        <source>Value to Enlarge or Shrink By</source>
        <translation>Valor no que Aumentar ou Reducir</translation>
    </message>
</context>
<context>
    <name>OODPlug</name>
    <message>
        <source>This document does not seem to be an OpenOffice Draw file.</source>
        <translation>Este documento non parece ser un ficheiro do Draw de OpenOffice.</translation>
    </message>
</context>
<context>
    <name>OODrawImportPlugin</name>
    <message>
        <source>Import &amp;OpenOffice.org Draw...</source>
        <translation>Importar do Draw de &amp;OpenOffice.org...</translation>
    </message>
    <message>
        <source>Imports OpenOffice Draw Files</source>
        <translation type="obsolete">Importa Ficheiros do Draw de OpenOffice</translation>
    </message>
    <message>
        <source>Imports most OpenOffice Draw files into the current document, converting their vector data into Scribus objects.</source>
        <translation type="obsolete">Importa a maioría dos ficheiros do Draw de OpenOffice no documento actual, convertendo os seus datos vectorais en obxectos de Scribus.</translation>
    </message>
    <message>
        <source>Imports OpenOffice.org Draw Files</source>
        <translation>Importa Ficheiros do Draw de OpenOffice.org</translation>
    </message>
    <message>
        <source>Imports most OpenOffice.org Draw files into the current document, converting their vector data into Scribus objects.</source>
        <translation>Importa a maioría dos ficheiros do Draw de OpenOffice.org no documento actual, convertindo os seus datos vectoriais en obxectos de Scribus.</translation>
    </message>
    <message>
        <source>OpenDocument 1.0 Draw</source>
        <comment>Import/export format name</comment>
        <translation>OpenDocument 1.0 Draw

nome de formato de importación/exportación</translation>
    </message>
    <message>
        <source>OpenOffice.org 1.x Draw</source>
        <comment>Import/export format name</comment>
        <translation>OpenOffice.org 1.x Draw

nome de formato de importación/exportación</translation>
    </message>
</context>
<context>
    <name>OdtDialog</name>
    <message>
        <source>OpenDocument Importer Options</source>
        <translation>Opcións do Importador de OpenDocument</translation>
    </message>
    <message>
        <source>Update paragraph Styles</source>
        <translation type="obsolete">Actualizar os Estilos de parágrafo</translation>
    </message>
    <message>
        <source>Enabling this will overwrite existing styles in the current Scribus document</source>
        <translation>Se o permite sobreescribiránse os estilos do documento actual de Scribus</translation>
    </message>
    <message>
        <source>Merge Paragraph Styles</source>
        <translation>Integrar os Estilos de Parágrafo</translation>
    </message>
    <message>
        <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document&apos;s styles are named differently.</source>
        <translation>Integrar os estilos de parágrafo polos seus atributos. Isto resultará nun menor número de estilos de parágrafo semellantes e reterá os atributos de estilo, mesmo se os estilos do documento orixinal teñen un nome diferente.</translation>
    </message>
    <message>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation>Usar o nome do documento como prefixo para os estilos de parágrafo</translation>
    </message>
    <message>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation>Antepor o nome do documento ao nome do estilo de parágrafo en Scribus.</translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation>Non perguntar máis</translation>
    </message>
    <message>
        <source>Make these settings the default and do not prompt again when importing an OASIS OpenDocument.</source>
        <translation>Configurar isto como predeterminado e non perguntar máis cando se importe un documento OpenDocument OASIS.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>De acordo</translation>
    </message>
    <message>
        <source>Overwrite Paragraph Styles</source>
        <translation>Substituir os Estilos de Parágrafo</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
</context>
<context>
    <name>OldScribusFormat</name>
    <message>
        <source>Scribus Document</source>
        <translation>Documento de Scribus</translation>
    </message>
    <message>
        <source>Scribus 1.2.x Document</source>
        <translation>Documento de Scribus 1.2.x</translation>
    </message>
</context>
<context>
    <name>OutlineValues</name>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Linewidth</source>
        <translation>AnchuraDaLiña</translation>
    </message>
</context>
<context>
    <name>PConsole</name>
    <message>
        <source>Script Console</source>
        <translation type="obsolete">Consola de guións</translation>
    </message>
</context>
<context>
    <name>PDFExportDialog</name>
    <message>
        <source>Save as PDF</source>
        <translation>Salvar como PDF</translation>
    </message>
    <message>
        <source>O&amp;utput to File:</source>
        <translation>Saída para &amp;Ficheiro:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation>Mu&amp;dar...</translation>
    </message>
    <message>
        <source>Output one file for eac&amp;h page</source>
        <translation>Producir un ficheiro por ca&amp;da páxina</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Gardar</translation>
    </message>
    <message>
        <source>This enables exporting one individually named PDF file for each page in the document. Page numbers are added automatically. This is most useful for imposing PDF for commerical printing.</source>
        <translation type="obsolete">Isto permite exportar un ficheiro PDF con nome individual para cada unha das páxinas do documento. Os números de páxina adiciónanse automaticamente. Isto resulta moi útil para impostar PDF para a impresión comercial.</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Gardar como</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation>Ficheiros PDF (*.pdf);;Todos (*)</translation>
    </message>
    <message>
        <source>This enables exporting one individually named PDF file for each page in the document. Page numbers are added automatically. This is most useful for imposing PDF for commercial printing.</source>
        <translation>Isto permite exportar un ficheiro PDF con nome individual por cada páxina do documento. Os números de páxina colócanse automaticamente. Isto resulta especialmente útil para impór PDF para impresión comercial.</translation>
    </message>
    <message>
        <source>The save button will be disabled if you are trying to export PDF/X-3 and the info string is missing from the PDF/X-3 tab.</source>
        <translation>O botón gardar desactivarase se tenta exportar PDF/X-3 e falta a cadea info da pestana PDF/X-3.</translation>
    </message>
</context>
<context>
    <name>PDF_Opts</name>
    <message>
        <source>Save as PDF</source>
        <translation type="obsolete">Salvar como PDF</translation>
    </message>
    <message>
        <source>O&amp;utput to File:</source>
        <translation type="obsolete">Saída para &amp;Ficheiro:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation type="obsolete">&amp;Mudar...</translation>
    </message>
    <message>
        <source>Export Range</source>
        <translation type="obsolete">Rango de exportación</translation>
    </message>
    <message>
        <source>&amp;All Pages</source>
        <translation type="obsolete">Tod&amp;as as Páxinas</translation>
    </message>
    <message>
        <source>C&amp;hoose Pages</source>
        <translation type="obsolete">Esco&amp;ller as Páxinas</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="obsolete">&amp;Rotación:</translation>
    </message>
    <message>
        <source>File Options</source>
        <translation type="obsolete">Opcións do Ficheiro</translation>
    </message>
    <message>
        <source>Compatibilit&amp;y:</source>
        <translation type="obsolete">Compat&amp;ibilidade:</translation>
    </message>
    <message>
        <source>&amp;Binding:</source>
        <translation type="obsolete">&amp;Encadernación:</translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation type="obsolete">Marxe Esquerda</translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation type="obsolete">Marxe Direita</translation>
    </message>
    <message>
        <source>Generate &amp;Thumbnails</source>
        <translation type="obsolete">Xerar &amp;Miniaturas</translation>
    </message>
    <message>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation type="obsolete">Salvar as Molduras de Texto Vin&amp;culadas como Artigos PDF</translation>
    </message>
    <message>
        <source>&amp;Include Bookmarks</source>
        <translation type="obsolete">&amp;Incluir os Marcadores</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation type="obsolete"> dpi</translation>
    </message>
    <message>
        <source>&amp;Resolution:</source>
        <translation type="obsolete">&amp;Resolución:</translation>
    </message>
    <message>
        <source>Compress Text and &amp;Vector Graphics</source>
        <translation type="obsolete">Comprimir o Texto e os Gráficos &amp;Vectoriais</translation>
    </message>
    <message>
        <source>Image Settings</source>
        <translation type="obsolete">Configuración das Imaxes</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation type="obsolete">Automático</translation>
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
        <translation type="obsolete">Nengún</translation>
    </message>
    <message>
        <source>&amp;Method:</source>
        <translation type="obsolete">&amp;Método:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation type="obsolete">&amp;Calidade:</translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation type="obsolete">Máxima</translation>
    </message>
    <message>
        <source>High</source>
        <translation type="obsolete">Alta</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="obsolete">Media</translation>
    </message>
    <message>
        <source>Low</source>
        <translation type="obsolete">Baixa</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation type="obsolete">Mínima</translation>
    </message>
    <message>
        <source>&amp;Downsample Images to:</source>
        <translation type="obsolete">Re&amp;ducir as Imaxes a:</translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation type="obsolete">&amp;Xeral</translation>
    </message>
    <message>
        <source>&amp;Embed all Fonts</source>
        <translation type="obsolete">&amp;Embeber todas as Fontes</translation>
    </message>
    <message>
        <source>&amp;Subset all Fonts</source>
        <translation type="obsolete">&amp;Subconxunto de todas as Fontes</translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation type="obsolete">Embeber</translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation type="obsolete">Fontes Disponíbeis:</translation>
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
        <source>Fonts to embed:</source>
        <translation type="obsolete">Fontes a embeber:</translation>
    </message>
    <message>
        <source>Fonts to subset:</source>
        <translation type="obsolete">Fontes en subconxunto:</translation>
    </message>
    <message>
        <source>&amp;Fonts</source>
        <translation type="obsolete">&amp;Fontes</translation>
    </message>
    <message>
        <source>En&amp;able Presentation Effects</source>
        <translation type="obsolete">Permitir os &amp;Efectos de Presentación</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="obsolete">Páxina</translation>
    </message>
    <message>
        <source>Show Page Pre&amp;views</source>
        <translation type="obsolete">Mostrar a Ante&amp;visión das Páxinas</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation type="obsolete">Efectos</translation>
    </message>
    <message>
        <source>&amp;Display Duration:</source>
        <translation type="obsolete">Duración da E&amp;xhibición:</translation>
    </message>
    <message>
        <source>Effec&amp;t Duration:</source>
        <translation type="obsolete">Duración do Efec&amp;to:</translation>
    </message>
    <message>
        <source>Effect T&amp;ype:</source>
        <translation type="obsolete">T&amp;ipo de Efecto:</translation>
    </message>
    <message>
        <source>&amp;Moving Lines:</source>
        <translation type="obsolete">Liñas que se &amp;moven:</translation>
    </message>
    <message>
        <source>F&amp;rom the:</source>
        <translation type="obsolete">De&amp;sde a:</translation>
    </message>
    <message>
        <source>D&amp;irection:</source>
        <translation type="obsolete">D&amp;irección:</translation>
    </message>
    <message>
        <source> sec</source>
        <translation type="obsolete"> seg</translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation type="obsolete">Sen Efectos</translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation type="obsolete">Persianas</translation>
    </message>
    <message>
        <source>Box</source>
        <translation type="obsolete">Caixa</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation type="obsolete">Disolución</translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation type="obsolete">Brillos</translation>
    </message>
    <message>
        <source>Split</source>
        <translation type="obsolete">Partir</translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation type="obsolete">Limpar</translation>
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
        <translation type="obsolete">Dentro</translation>
    </message>
    <message>
        <source>Outside</source>
        <translation type="obsolete">Fora</translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation type="obsolete">De Esquerda a Direita</translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation type="obsolete">De Arriba a Baixo</translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation type="obsolete">De Abaixo a Riba</translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation type="obsolete">De Direita a Esquerda</translation>
    </message>
    <message>
        <source>Top-left to Bottom-Right</source>
        <translation type="obsolete">Superior Esquerda a Inferior Direita</translation>
    </message>
    <message>
        <source>&amp;Apply Effect on all Pages</source>
        <translation type="obsolete">&amp;Aplicar o Efecto a todas as áxinas</translation>
    </message>
    <message>
        <source>&amp;Presentation</source>
        <translation type="obsolete">&amp;Presentación</translation>
    </message>
    <message>
        <source>&amp;Use Encryption</source>
        <translation type="obsolete">&amp;Usar Encriptación</translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation type="obsolete">Contrasinais</translation>
    </message>
    <message>
        <source>&amp;User:</source>
        <translation type="obsolete">&amp;Utilizador:</translation>
    </message>
    <message>
        <source>&amp;Owner:</source>
        <translation type="obsolete">&amp;Propietario:</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation type="obsolete">Configuración</translation>
    </message>
    <message>
        <source>Allow &amp;Printing the Document</source>
        <translation type="obsolete">Permitir a Im&amp;presión do Documento</translation>
    </message>
    <message>
        <source>Allow &amp;Changing the Document</source>
        <translation type="obsolete">Permitir a &amp;Modificación do Documento</translation>
    </message>
    <message>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation type="obsolete">Permitir a Cop&amp;ia de Texto e Gráficos</translation>
    </message>
    <message>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation type="obsolete">Permitir Engadir &amp;Anotacións e Campos</translation>
    </message>
    <message>
        <source>S&amp;ecurity</source>
        <translation type="obsolete">S&amp;eguranza</translation>
    </message>
    <message>
        <source>General</source>
        <translation type="obsolete">Xeral</translation>
    </message>
    <message>
        <source>Output &amp;Intended For:</source>
        <translation type="obsolete">Saída e &amp;Deseñado Para:</translation>
    </message>
    <message>
        <source>Screen / Web</source>
        <translation type="obsolete">Pantalla / Web</translation>
    </message>
    <message>
        <source>Printer</source>
        <translation type="obsolete">Impresora</translation>
    </message>
    <message>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation type="obsolete">&amp;Usar Configuración Personalizada da Produción</translation>
    </message>
    <message>
        <source>Rendering Settings</source>
        <translation type="obsolete">Configuración da Produción</translation>
    </message>
    <message>
        <source>Fre&amp;quency:</source>
        <translation type="obsolete">Fre&amp;cuencia:</translation>
    </message>
    <message>
        <source>&amp;Angle:</source>
        <translation type="obsolete">&amp;Ángulo:</translation>
    </message>
    <message>
        <source>S&amp;pot Function:</source>
        <translation type="obsolete">Función P&amp;unto:</translation>
    </message>
    <message>
        <source>Simple Dot</source>
        <translation type="obsolete">Punto simple</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="obsolete">Liña</translation>
    </message>
    <message>
        <source>Round</source>
        <translation type="obsolete">Arredondado</translation>
    </message>
    <message>
        <source>Ellipse</source>
        <translation type="obsolete">Elipse</translation>
    </message>
    <message>
        <source>Solid Colors:</source>
        <translation type="obsolete">Cores sólidas:</translation>
    </message>
    <message>
        <source>Use ICC Profile</source>
        <translation type="obsolete">Usar o Perfil ICC</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation type="obsolete">Perfil:</translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation type="obsolete">Propósito da exhibicion:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation type="obsolete">Perceptual</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation type="obsolete">Colorimétrico relativo</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation type="obsolete">Saturación</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation type="obsolete">Colorimétrico absoluto</translation>
    </message>
    <message>
        <source>Images:</source>
        <translation type="obsolete">Imaxes:</translation>
    </message>
    <message>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation type="obsolete">Non usar os perfís ICC embebidos</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation type="obsolete">C&amp;or</translation>
    </message>
    <message>
        <source>&amp;Info String:</source>
        <translation type="obsolete">Cadea &amp;Info:</translation>
    </message>
    <message>
        <source>Output &amp;Profile:</source>
        <translation type="obsolete">&amp;Perfil de Saída:</translation>
    </message>
    <message>
        <source>Trim Box</source>
        <translation type="obsolete">Caixa de Recorte</translation>
    </message>
    <message>
        <source>PDF/X-&amp;3</source>
        <translation type="obsolete">PDF/X-&amp;3</translation>
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
        <source>&lt;qt&gt;Color management must be enabled to use PDF/X-3. You can enable color management from the Settings menu.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Debe estar habilitada a xestión da cor para poder usar PDF/X-3. Pódea habilitar desde o menú de Configuración.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;PDF/X-3 is supported and enabled, but can not be used for the selected PDF version. If you want to use PDF/X-3, you need to set PDF/X-3 as your PDF version (compatibility level).&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Recoñécese PDF/X-3 e está habilitado, pero non se pode usar para a versión de PDF seleccionada. Se quer usar PDF/X-3 terá que designar PDF/X-3 como a versión de PDF (nível de compatibilidade).&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;PDF/X-3 is not supported by this Scribus build (CMS support not present).&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Non se recoñece PDF/X-3 nesta edición de Scribus (non está presente CMS).&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="obsolete">&amp;Gardar</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Export all pages to PDF</source>
        <translation type="obsolete">Exportar todas as páxinas a PDF</translation>
    </message>
    <message>
        <source>Export a range of pages to PDF</source>
        <translation type="obsolete">Exportar un rango de páxinas a PDF</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="obsolete">Inserir unha lista de elementos separada por vírgulas, na que
un elemento pode ser * para todas as páxinas, 1-5 para
un rango de páxinas ou un único número de páxina.</translation>
    </message>
    <message>
        <source>Determines the PDF compatibility. The default is Acrobat 4.0 which gives the widest compatibility. Choose Acrobat 5.0 if your file has PDF 1.4 features such as transparency or you require 128 bit encryption. PDF/X-3 is for exporting the PDF when you want color managed RGB for commercial printing and is selectable when you have activated color management. Note: PDF/X-3 will convert all CMYK images to ICC based RGB colors. Use only when advised by your printer or in some cases printing to a 4 color digital color laser printer.</source>
        <translation type="obsolete">Determina a compatibilidade de PDF. Por omisión é Acrobat 4.0, que proporciona a maior compatibilidade. Escolla Acrobat 5.0 se o seu ficheiro ten funcionalidades de PDF 1.4 como a transparencia ou se require de encriptación de 128 bits. PDF/X-3 é para exportar o PDF cando quer cor RGB xestionada para a impresión comercial e selecciónase canto ten activada a xestión da cor. Nota: PDF/X-3 convertirá todas as imaxes CMYK a cores RGB baseadas en ICC. Úseo só cando llo recomenden na imprenta ou nalgúns casos en que teña que imprimir nunha impresora laser cor dixital.</translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know
you need to change it leave the default choice - Left.</source>
        <translation type="obsolete">Determina a encadernación de páxinas no PDF. A non ser que o saiba
terá que deixar a escolla por omisión: Esquerda.</translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF.
Some viewers can use the thumbnails for navigation.</source>
        <translation type="obsolete">Xera miniaturas de cada páxina no PDF.
Algúns visualizadores poden usar as miniaturas para a navegación.</translation>
    </message>
    <message>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation type="obsolete">Xerar Artigos PDF, que resultan útiles para navegar por artigos vinculados nun PDF.</translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document.
These are useful for navigating long PDF documents.</source>
        <translation type="obsolete">Embeber os marcadores que creou no seu documento.
Resultan útiles para navegar por documentos PDF longos.</translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics.
This does not affect the resolution of bitmap images like photos.</source>
        <translation type="obsolete">Exportar a resolución do texto e os gráficos vectoriais.
Isto non vai afectar a resolución das imaxes bitmap como as fotos.</translation>
    </message>
    <message>
        <source> Lossless compression of text and graphics.
Unless you have a reason, leave this checked. This reduces PDF size.</source>
        <translation type="obsolete"> Compresión sen perdas de texto e gráficos.
A non ser que teña unha razón, non o seleccione. Isto reduce o tamaño do PDF.</translation>
    </message>
    <message>
        <source>Method of compression to use for images. Automatic allows Scribus to choose the best method. ZIP is lossless and good for images with solid colors. JPEG is better at creating smaller PDF files which have many photos (with slight image quality loss possible). Leave it set to Automatic, unless you have a need for special compression options.</source>
        <translation type="obsolete">Método de compresión a usar polas imaxes. Automático permite que Scribus escolla o mellor método. ZIP non provoca perdas e é bon para imaxes con cores sólidas. JPEG é mellor en crear ficheiros PDF máis pequenos con moitas fotos (cunha posíbel lixeira perda de calidade). Déixeo en Automático, a non ser que teña unha razón para escoller unha compresión especial.</translation>
    </message>
    <message>
        <source>Compression levels: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%)</source>
        <translation type="obsolete">Níveis de compresión: Mínimo (25%), Baixo (50%), Medio (75%), Alto (85%), Máximo (95%)</translation>
    </message>
    <message>
        <source>Re-sample your bitmap images to the selected DPI.
Leaving this unchecked will render them at their native resolution.
This can increase memory usage and slow down export.</source>
        <translation type="obsolete">Reexaminar as imaxes bitmap para os ppp seleccionados.
Se non se selecciona mostraranse na súa resolución orixinal.
Isto pode incrementar o uso da memoria e enlentecer a exportación.</translation>
    </message>
    <message>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation type="obsolete">PPP (Puntos Por Pulgada) para a exportación das imaxes.</translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts
will preserve the layout and appearance of your document.</source>
        <translation type="obsolete">Embeber as fontes no PDF. Embeber as fontes
manterá a dispoción e aparencia do seu documento.</translation>
    </message>
    <message>
        <source>Enables presentation effects when using Acrobat Reader in full screen mode.</source>
        <translation type="obsolete">Permite os efectos de presentación ao usar Acroba Reader en pantalla completa.</translation>
    </message>
    <message>
        <source>Show page previews of each page listed above.</source>
        <translation type="obsolete">Mostrar a antevisión de páxina para cada páxina das que se listan en cima.</translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page.</source>
        <translation type="obsolete">Extensión de tempo durante a que se mostra a páxina antes de que a presentación comece na páxina seleccionada.</translation>
    </message>
    <message>
        <source>Length of time the effect runs.
A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation type="obsolete">Extensión de tempo durante a que dura o efecto. Un tempo menor acelerará o efecto; un maior enlentecerao.</translation>
    </message>
    <message>
        <source>Type of the display effect.</source>
        <translation type="obsolete">Tipo de efecto.</translation>
    </message>
    <message>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation type="obsolete">Dirección do efecto de liñas que se moven para os efectos partir e persianas.</translation>
    </message>
    <message>
        <source>Starting position for the box and split effects.</source>
        <translation type="obsolete">Posición inicial para os efectos de caixa e partir.</translation>
    </message>
    <message>
        <source>Direction of the glitter or wipe effects.</source>
        <translation type="obsolete">Dirección dos efectos de brillos e borrado.</translation>
    </message>
    <message>
        <source>Apply the selected effect to all pages.</source>
        <translation type="obsolete">Aplicar os efectos seleccionados a todas as páxinas.</translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF.
If you selected Acrobat 4.0, the PDF will be protected by 40 bit encryption.
If you selected Acrobat 5.0, the PDF will be protected by 128 bit encryption.
Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation type="obsolete">Permitir as funcionalidades de seguranza no PDF exportado.
Se escolle Acrobat 4.0, o PDF estará protexido por encriptación de 40 bits.
Se escolle Acrobat 5.0, o PDF estará protexido por encriptación de 128 bits.
Advertencia: A encriptación dos PDF non é tan efectiva como a encriptación GPG ou PGP e ten certas limitacións.</translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the
security features in your exported PDF</source>
        <translation type="obsolete">Escolla un contrasinal mestre que permita ou deshabilite todas
as funcionalidades de seguranza do seu PDF exportado</translation>
    </message>
    <message>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation type="obsolete">Escolla un contrasinal para que os usuarios poidan ler o seu PDF.</translation>
    </message>
    <message>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation type="obsolete">Permite que se imprima o PDF. Se non se selecciona impídese que se imprima.</translation>
    </message>
    <message>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation type="obsolete">Permite modificar o PDF. Se non se escolle impídese a modificación do PDF.</translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. 
If un-checked, text and graphics cannot be copied.</source>
        <translation type="obsolete">Permite copiar o texto ou gráficos do PDF.
Se non se escolle, non se poderán copiar nen o texto nen os gráficos.</translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. 
If un-checked, editing annotations and fields is prevented.</source>
        <translation type="obsolete">Permite engadir anotacións e campos no PDF.
Se non se selecciona, impídese modificar as anotacións e os campos.</translation>
    </message>
    <message>
        <source>Color model for the output of your PDF.
Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets.
Choose Printer when printing to a true 4 color CMYK printer.</source>
        <translation type="obsolete">Modelo de cor para a saída do seu PDF.
Escolla Pantalla/Web para PDFs que vaian ser mostrados nunha pantalla ou que se vaian imprimir nunha impresora de tinta típica.
Escolla Impresora cando sexan para imprimir nunha impresora de 4 cores CMYK verdadeiros.</translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled
when specifically requested by your printer and they have given you the exact details needed.
Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation type="obsolete">Esta é unha configuación avanzada que non se habilita por omisión. Só debería habilitarse
cando o indique explicitamente a súa imprenta e lle fornezan da información precisa.
Se non, o seu PDF exportado pode non imprimirse correctamente e con certeza non será portábel entre sistemas.</translation>
    </message>
    <message>
        <source>Embed a color profile for solid colors</source>
        <translation type="obsolete">Embeber un perfil de cor para cores sólidas</translation>
    </message>
    <message>
        <source>Color profile for solid colors</source>
        <translation type="obsolete">Perfil de cor para cores sólidas</translation>
    </message>
    <message>
        <source>Rendering intent for solid colors</source>
        <translation type="obsolete">Propósito da exhibición para cores sólidas</translation>
    </message>
    <message>
        <source>Embed a color profile for images</source>
        <translation type="obsolete">Embeber un perfil de cor para imaxes</translation>
    </message>
    <message>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation type="obsolete">Non usar perfís de cor embebidos en imaxes fonte</translation>
    </message>
    <message>
        <source>Color profile for images</source>
        <translation type="obsolete">Perfil de cor para imaxes</translation>
    </message>
    <message>
        <source>Rendering intent for images</source>
        <translation type="obsolete">Propósito da exhibición para imaxes</translation>
    </message>
    <message>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation type="obsolete">Perfil de saída para a impresión. De ser posíbel, solicite orientación na imprenta sobre a selección de perfís.</translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail
PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation type="obsolete">Cadea obrigatoria para PDF/X-3 ou o PDF fallará
na conformidade con PDF/X-3. Recomendamos que use o título do documento.</translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="obsolete">Distancia de sangrado desde a parte superior da páxina física</translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="obsolete">Distancia de sangrado desde a parte inferior da páxina física</translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="obsolete">Distancia de sangrado desde a esquerda da páxina física</translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="obsolete">Distancia de sangrado desde a direita da páxina física</translation>
    </message>
    <message>
        <source>Mirror Page(s) horizontally</source>
        <translation type="obsolete">Reflexar a(s) Páxina(s) horizontalmente</translation>
    </message>
    <message>
        <source>Mirror Page(s) vertically</source>
        <translation type="obsolete">Reflexar a(s) Páxina(s) verticalmente</translation>
    </message>
    <message>
        <source>PDF security settings</source>
        <translation type="obsolete">Configuración de seguranza do PDF</translation>
    </message>
    <message>
        <source>PDF/X-3 settings</source>
        <translation type="obsolete">Configuración PDF/X-3</translation>
    </message>
    <message>
        <source>&lt;qt&gt;PDF security can not be used with PDF/X-3. If you want to turn on security, change your PDF version (compatibility level) to something other than PDF/X-3.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Non se pode usar seguranza PDF con PDF/X-3. Se quer activar a seguranza, mude de versión de PDF (nível de compatibilidade) para algo distinto de PDF/X-3.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="obsolete">Gardar como</translation>
    </message>
    <message>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation type="obsolete">Ficheiros PDF (*.pdf);;Todos (*)</translation>
    </message>
    <message>
        <source>Output one file for eac&amp;h page</source>
        <translation type="obsolete">Producir un ficheiro por ca&amp;da páxina</translation>
    </message>
    <message>
        <source>This enables exporting one individually named PDF file for each page in the document. Page numbers are added automatically. This is most useful for imposing PDF for commerical printing.</source>
        <translation type="obsolete">Isto permite exportar un ficheiro PDF con nome individual para cada unha das páxinas do documento. Os números de páxina adiciónanse automaticamente. Isto resulta moi útil para impostar PDF para a impresión comercial.</translation>
    </message>
</context>
<context>
    <name>PDFlib</name>
    <message>
        <source>Saving PDF</source>
        <translation>A salvar PDF</translation>
    </message>
    <message>
        <source>Exporting Master Pages:</source>
        <translation>A exportar Páxinas Mestras:</translation>
    </message>
    <message>
        <source>Exporting Pages:</source>
        <translation>A Exportar Páxinas:</translation>
    </message>
    <message>
        <source>Exporting Items on Current Page:</source>
        <translation>A exportar Elementos da Páxina Actual:</translation>
    </message>
</context>
<context>
    <name>PPreview</name>
    <message>
        <source>Print Preview</source>
        <translation>Antevisión da Impresión</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Text</source>
        <translation type="obsolete">&amp;Texto Anti-alias</translation>
    </message>
    <message>
        <source>Anti-alias &amp;Graphics</source>
        <translation type="obsolete">&amp;Gráficos Anti-alias</translation>
    </message>
    <message>
        <source>Display Trans&amp;parency</source>
        <translation>Mostrar a trans&amp;parencia</translation>
    </message>
    <message>
        <source>&amp;Under Color Removal</source>
        <translation>Eliminación da Cor &amp;Inferior (UCR)</translation>
    </message>
    <message>
        <source>&amp;Display CMYK</source>
        <translation>&amp;Mostrar CMYK</translation>
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
        <source>Provides a more pleasant view of text items in the viewer, at the expense
of a slight slowdown in previewing. This only affects Type 1 fonts</source>
        <translation type="obsolete">Proporciona unha visión máis agradábel dos elementos de texto a expensas
dunha menor velocidade no procesamento. Isto só afecta ás fontes Tipo 1</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of TrueType Fonts, OpenType Fonts, EPS, PDF and
vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation type="obsolete">Proporciona unha visión máis agradábel das Fontes Truetype, OpenType, EPS, PDF
e os gráficos de vectores a expensas dunha velocidade menor no procesamento</translation>
    </message>
    <message>
        <source>Shows transparency and transparent items in your document. Requires Ghostscript 7.07 or later</source>
        <translation>Mostra as transparencia e os elementos transparentes do seu documento. Require Ghostscript 7.07 ou posterior</translation>
    </message>
    <message>
        <source>Gives a print preview using simulations of generic CMYK inks, instead of RGB colors</source>
        <translation>Fornece unha antevisión da impresión usando simulacións de tintas xenéricas CMYK, en vez de cores RGB</translation>
    </message>
    <message>
        <source>Enable/disable the C (Cyan) ink plate</source>
        <translation>Des/Activar o tinteiro C (Cián)</translation>
    </message>
    <message>
        <source>Enable/disable the M (Magenta) ink plate</source>
        <translation>Des/Activar o tinteiro M (Maxenta)</translation>
    </message>
    <message>
        <source>Enable/disable the Y (Yellow) ink plate</source>
        <translation>Des/Activar o tinteiro Y (Yellow-Amarelo)</translation>
    </message>
    <message>
        <source>Enable/disable the K (Black) ink plate</source>
        <translation>Des/Activar o tinteiro K (Black-Negro)</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="obsolete">Un xeito de apagar algunhas das sombras en gris compostas
de cian, amarelo e maxenta e usar negro no seu lugar.
O UCR afecta fundamentalmente ás partes das imaxes que teñen tons neutros e/ou escuros
perto do gris. Cando se usa pode mellorar a impresión dalgunhas imaxes,
ainda que é preciso experimentar segundo cada caso.
O UCR reduce a posibilidade dun exceso de saturación coas tintas CMY.</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Todo</translation>
    </message>
    <message>
        <source>Separation Name</source>
        <translation>Nome da Separación</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation>Cián</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation>Maxenta</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation>Amarelo</translation>
    </message>
    <message>
        <source>Black</source>
        <translation>Preto</translation>
    </message>
    <message>
        <source>Scaling:</source>
        <translation>Escala:</translation>
    </message>
    <message>
        <source>Print...</source>
        <translation>Imprimir...</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of text items in the viewer, at the expense of a slight slowdown in previewing. This only affects Type 1 fonts</source>
        <translation type="obsolete">Permite unha vista máis cómoda dos elementos de texto no visor a costa dunha exhibición máis lenta. Isto só afecta ás fontes Type 1</translation>
    </message>
    <message>
        <source>Provides a more pleasant view of TrueType Fonts, OpenType Fonts, EPS, PDF and vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation type="obsolete">Permite unha vista máis cómoda das Fontes Truetype, OpenType, EPS, PDF e gráficos vectoriais na antevisión a costa dunha exhibición máis lenta</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis. UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation>Un xeito de apagar algunhas das sombras en gris compostas de cian, amarelo e maxenta e usar negro no seu lugar.
A UCR afecta fundamentalmente ás partes das imaxes que teñen tons neutros e/ou escuros perto do gris. Cando se usa pode mellorar a impresión dalgunhas imaxes, ainda que é preciso experimentar segundo cada caso. A UCR reduce a posibilidade dun exceso de saturación coas tintas CMY.</translation>
    </message>
    <message>
        <source>Resize the scale of the page.</source>
        <translation>Recalcular a escala da páxina.</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Fechar</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Ficheiro</translation>
    </message>
    <message>
        <source>Enable &amp;Antialiasing</source>
        <translation type="unfinished"></translation>
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
        <translation>A procesar Páxinas Mestras:</translation>
    </message>
    <message>
        <source>Exporting Pages:</source>
        <translation>A exportar Páxinas:</translation>
    </message>
</context>
<context>
    <name>Page</name>
    <message>
        <source>Copy Here</source>
        <translation type="obsolete">Copiar Aquí</translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation type="obsolete">Mover Aquí</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Cancelar</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="obsolete">&amp;Pegar</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation type="obsolete">Mostrar as &amp;Marxes</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation type="obsolete">Mostrar as &amp;Molduras</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation type="obsolete">Mostrar as &amp;Imaxes</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation type="obsolete">Mostrar a &amp;Grella</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation type="obsolete">Mostrar as G&amp;uías</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation type="obsolete">Mostrar a Grella &amp;Base</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation type="obsolete">&amp;Agarre</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation type="obsolete">A&amp;garrarse ás Guías</translation>
    </message>
    <message>
        <source>Picture</source>
        <translation type="obsolete">Imaxe</translation>
    </message>
    <message>
        <source>File: </source>
        <translation type="obsolete">Ficheiro: </translation>
    </message>
    <message>
        <source>Original PPI: </source>
        <translation type="obsolete">PPI Orixinal:</translation>
    </message>
    <message>
        <source>Actual PPI: </source>
        <translation type="obsolete">PPI Real:</translation>
    </message>
    <message>
        <source>Linked Text</source>
        <translation type="obsolete">Texto Vinculado</translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation type="obsolete">Moldura de Texto</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation type="obsolete">Texto nun Trazo</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation type="obsolete">Parágrafos:</translation>
    </message>
    <message>
        <source>Words: </source>
        <translation type="obsolete">Palabras:</translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation type="obsolete">Caracteres.:</translation>
    </message>
    <message>
        <source>Print: </source>
        <translation type="obsolete">Imprimir:</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation type="obsolete">Activado</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation type="obsolete">Desactivado</translation>
    </message>
    <message>
        <source>In&amp;fo</source>
        <translation type="obsolete">In&amp;formación</translation>
    </message>
    <message>
        <source>&amp;Get Picture...</source>
        <translation type="obsolete">&amp;Ir procurar Imaxe...</translation>
    </message>
    <message>
        <source>I&amp;mage Visible</source>
        <translation type="obsolete">I&amp;maxe Visíbel</translation>
    </message>
    <message>
        <source>&amp;Update Picture</source>
        <translation type="obsolete">Ac&amp;tualizar Imaxe</translation>
    </message>
    <message>
        <source>&amp;Edit Picture</source>
        <translation type="obsolete">&amp;Modificar Imaxe</translation>
    </message>
    <message>
        <source>&amp;Adjust Frame to Picture</source>
        <translation type="obsolete">&amp;Axustar a Moldura á Imaxe</translation>
    </message>
    <message>
        <source>&amp;Get Text...</source>
        <translation type="obsolete">&amp;Ir procurar Texto...</translation>
    </message>
    <message>
        <source>&amp;Append Text...</source>
        <translation type="obsolete">&amp;Adicionar Texto...</translation>
    </message>
    <message>
        <source>&amp;Edit Text...</source>
        <translation type="obsolete">&amp;Modificar Texto...</translation>
    </message>
    <message>
        <source>Is PDF &amp;Bookmark</source>
        <translation type="obsolete">É &amp;Marcador PDF</translation>
    </message>
    <message>
        <source>Is PDF A&amp;nnotation</source>
        <translation type="obsolete">É A&amp;notación PDF</translation>
    </message>
    <message>
        <source>Annotation P&amp;roperties</source>
        <translation type="obsolete">P&amp;ropriedades da Anotación</translation>
    </message>
    <message>
        <source>Field P&amp;roperties</source>
        <translation type="obsolete">P&amp;ropriedades do Campo</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation type="obsolete">Opcións do &amp;PDF</translation>
    </message>
    <message>
        <source>Edit Text...</source>
        <translation type="obsolete">Modificar Texto...</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation type="obsolete">B&amp;loquear</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation type="obsolete">Desb&amp;loquear</translation>
    </message>
    <message>
        <source>Lock Object &amp;Size</source>
        <translation type="obsolete">Bloquear o &amp;Tamaño do Obxecto</translation>
    </message>
    <message>
        <source>Unlock Object &amp;Size</source>
        <translation type="obsolete">Desbloquear o &amp;Tamaño do Obxecto</translation>
    </message>
    <message>
        <source>Send to S&amp;crapbook</source>
        <translation type="obsolete">Enviar para o Po&amp;rta-retallos</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation type="obsolete">Enviar para &amp;Capa</translation>
    </message>
    <message>
        <source>&amp;Insert Sample Text</source>
        <translation type="obsolete">&amp;Inserir Texto de Mostra</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="obsolete">A&amp;grupar</translation>
    </message>
    <message>
        <source>Un&amp;group</source>
        <translation type="obsolete">Desa&amp;grupar</translation>
    </message>
    <message>
        <source>Le&amp;vel</source>
        <translation type="obsolete">Ní&amp;vel</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation type="obsolete">Enviar para &amp;Tras</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation type="obsolete">Traer para &amp;Diante</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation type="obsolete">&amp;Baixar</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation type="obsolete">Subi&amp;r</translation>
    </message>
    <message>
        <source>&amp;Picture Frame</source>
        <translation type="obsolete">Moldura de &amp;Imaxe</translation>
    </message>
    <message>
        <source>Pol&amp;ygon</source>
        <translation type="obsolete">Pol&amp;ígono</translation>
    </message>
    <message>
        <source>&amp;Outlines</source>
        <translation type="obsolete">C&amp;ontornos</translation>
    </message>
    <message>
        <source>&amp;Text Frame</source>
        <translation type="obsolete">Moldura de &amp;Texto</translation>
    </message>
    <message>
        <source>&amp;Bezier Curve</source>
        <translation type="obsolete">Curva de &amp;Bézier</translation>
    </message>
    <message>
        <source>Conve&amp;rt to</source>
        <translation type="obsolete">Conve&amp;rtir en</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="obsolete">Recor&amp;tar</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="obsolete">&amp;Copiar</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Eliminar</translation>
    </message>
    <message>
        <source>C&amp;lear Contents</source>
        <translation type="obsolete">&amp;Limpar o Contido</translation>
    </message>
    <message>
        <source>Show P&amp;roperties...</source>
        <translation type="obsolete">Mostrar P&amp;ropriedades...</translation>
    </message>
    <message>
        <source>Hide P&amp;roperties...</source>
        <translation type="obsolete">Agochar as P&amp;ropriedades...</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengún</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation type="obsolete">Realmente quer eliminar todo o Texto?</translation>
    </message>
    <message>
        <source>The Program</source>
        <translation type="obsolete">O Programa</translation>
    </message>
    <message>
        <source>is missing!</source>
        <translation type="obsolete">falta!</translation>
    </message>
</context>
<context>
    <name>PageItem</name>
    <message>
        <source>Image</source>
        <translation>Imaxe</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Texto</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Liña</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Polígono</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation>Poli-liña</translation>
    </message>
    <message>
        <source>PathText</source>
        <translation>TextoEnTrazo</translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation>Copiar de</translation>
    </message>
</context>
<context>
    <name>PageItemAttributes</name>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengún</translation>
    </message>
    <message>
        <source>Relates To</source>
        <translation>Relacionado Con</translation>
    </message>
    <message>
        <source>Is Parent Of</source>
        <translation>É Pai De</translation>
    </message>
    <message>
        <source>Is Child Of</source>
        <translation>É Fillo De</translation>
    </message>
    <message>
        <source>Page Item Attributes</source>
        <translation type="obsolete">Atributos do Elemento da Páxina</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="obsolete">Nome</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Tipo</translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="obsolete">Valor</translation>
    </message>
    <message>
        <source>Parameter</source>
        <translation type="obsolete">Parámetro</translation>
    </message>
    <message>
        <source>Relationship</source>
        <translation type="obsolete">Relación</translation>
    </message>
    <message>
        <source>Relationship To</source>
        <translation type="obsolete">Relación Con</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="obsolete">&amp;Adicionar</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="obsolete">Alt+A</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="obsolete">&amp;Copiar</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Eliminar</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation type="obsolete">Alt+D</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="obsolete">&amp;Limpar</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>None</source>
        <comment>relationship</comment>
        <translation>Nengunha

relación</translation>
    </message>
</context>
<context>
    <name>PageItemAttributesBase</name>
    <message>
        <source>Page Item Attributes</source>
        <translation>Atributos do Elemento da Páxina</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Valor</translation>
    </message>
    <message>
        <source>Parameter</source>
        <translation>Parámetro</translation>
    </message>
    <message>
        <source>Relationship</source>
        <translation>Relación</translation>
    </message>
    <message>
        <source>Relationship To</source>
        <translation>Relación Con</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Adicionar</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copiar</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Limpar</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>PageLayouts</name>
    <message>
        <source>Page Layout</source>
        <translation>Disposición da Páxina</translation>
    </message>
    <message>
        <source>First Page is:</source>
        <translation>A Primeira Páxina é:</translation>
    </message>
</context>
<context>
    <name>PagePalette</name>
    <message>
        <source>Double sided</source>
        <translation>A dúas caras</translation>
    </message>
    <message>
        <source>Middle Right</source>
        <translation>Medio Dereita</translation>
    </message>
    <message>
        <source>Drag pages or master pages onto the trashbin to delete them</source>
        <translation>Arrastrar as páxinas ou páxinas mestras ao lixo para eliminalas</translation>
    </message>
    <message>
        <source>Here are all your master pages. To create a new page, drag a master page to the page view below</source>
        <translation>Eis todas as páxinas mestras. Para crear unha páxina nova, arrastre unha páxina mestra á vista de páxinas de embaixo</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Arrange Pages</source>
        <translation>Dispor as Páxinas</translation>
    </message>
    <message>
        <source>Available Master Pages:</source>
        <translation>Páxinas Mestras Disponíbeis:</translation>
    </message>
    <message>
        <source>Document Pages:</source>
        <translation>Páxinas do Documento:</translation>
    </message>
</context>
<context>
    <name>PageSelector</name>
    <message>
        <source>Page </source>
        <translation type="obsolete">Páxina </translation>
    </message>
    <message>
        <source> of %1</source>
        <translation type="obsolete"> de %1</translation>
    </message>
    <message>
        <source>%1 of %1</source>
        <translation>%1 de %1</translation>
    </message>
    <message>
        <source>%1 of %2</source>
        <translation>%1 de %2</translation>
    </message>
</context>
<context>
    <name>PageSize</name>
    <message>
        <source>Quarto</source>
        <translation>Cuarto</translation>
    </message>
    <message>
        <source>Foolscap</source>
        <translation>Prego (43*35cm. aprox.)</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation>Carta</translation>
    </message>
    <message>
        <source>Government Letter</source>
        <translation>Carta Oficial</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <source>Ledger</source>
        <translation>Libro contábel</translation>
    </message>
    <message>
        <source>Executive</source>
        <translation>Executivo</translation>
    </message>
    <message>
        <source>Post</source>
        <translation>Post</translation>
    </message>
    <message>
        <source>Crown</source>
        <translation>Coroa</translation>
    </message>
    <message>
        <source>Large Post</source>
        <translation>Posta Grande</translation>
    </message>
    <message>
        <source>Demy</source>
        <translation>Demy</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation>Media</translation>
    </message>
    <message>
        <source>Royal</source>
        <translation>Real</translation>
    </message>
    <message>
        <source>Elephant</source>
        <translation>Elefante</translation>
    </message>
    <message>
        <source>Double Demy</source>
        <translation>Dobre Demy</translation>
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
        <translation>Resultado</translation>
    </message>
    <message>
        <source>Search Results for: </source>
        <translation>Procurar Resultado para:</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Antevisión</translation>
    </message>
    <message>
        <source>Select</source>
        <translation>Seleccionar</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
</context>
<context>
    <name>PicStatus</name>
    <message>
        <source>Pictures</source>
        <translation type="obsolete">Imaxes</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>Path</source>
        <translation>Rota</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Páxina</translation>
    </message>
    <message>
        <source>Print</source>
        <translation>Imprimir</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>Situación</translation>
    </message>
    <message>
        <source>Goto</source>
        <translation>IrA</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Si</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>De acordo</translation>
    </message>
    <message>
        <source>Missing</source>
        <translation>Falta</translation>
    </message>
    <message>
        <source>Search</source>
        <translation>Procurar</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>Cancel Search</source>
        <translation>Deter a Procura</translation>
    </message>
    <message>
        <source>Manage Pictures</source>
        <translation>Xerir as Imaxes</translation>
    </message>
    <message>
        <source>Scribus - Image Search</source>
        <translation>Scribus - Procura de Imaxes</translation>
    </message>
    <message>
        <source>The search failed: %1</source>
        <translation>Fallou a pesquisa: %1</translation>
    </message>
    <message>
        <source>No images named &quot;%1&quot; were found.</source>
        <translation>Non se atoparon imaxes co nome &quot;%1&quot;.</translation>
    </message>
    <message>
        <source>Select a base directory for search</source>
        <translation>Escolla un directorio base para procurar</translation>
    </message>
</context>
<context>
    <name>PixmapExportPlugin</name>
    <message>
        <source>Save as &amp;Image...</source>
        <translation>Salvar como &amp;Imaxe...</translation>
    </message>
    <message>
        <source>Export As Image</source>
        <translation>Exportar Como Imaxe</translation>
    </message>
    <message>
        <source>Exports selected pages as bitmap images.</source>
        <translation>Exporta as páxinas seleccionadas como imaxes de mapa de bits.</translation>
    </message>
</context>
<context>
    <name>PluginManager</name>
    <message>
        <source>Cannot find plugin</source>
        <comment>plugin manager</comment>
        <translation>Non se atopou a extensión

xestor de extensións</translation>
    </message>
    <message>
        <source>unknown error</source>
        <comment>plugin manager</comment>
        <translation>erro descoñecido

xestor de extensións</translation>
    </message>
    <message>
        <source>Cannot find symbol (%1)</source>
        <comment>plugin manager</comment>
        <translation>Non se atopou o símbolo (%1)

xestor de extensións</translation>
    </message>
    <message>
        <source>Plugin: loading %1</source>
        <comment>plugin manager</comment>
        <translation>Extensión: a carregar %1

xestor de extensións</translation>
    </message>
    <message>
        <source>init failed</source>
        <comment>plugin load error</comment>
        <translation>Fallou init

erro de carrega de extensións</translation>
    </message>
    <message>
        <source>unknown plugin type</source>
        <comment>plugin load error</comment>
        <translation>tipo de extensión descoñecido

erro de carga de extensión</translation>
    </message>
    <message>
        <source>Plugin: %1 loaded</source>
        <comment>plugin manager</comment>
        <translation>Extensión: %1 carregado

xestor de extensións</translation>
    </message>
    <message>
        <source>Plugin: %1 failed to load: %2</source>
        <comment>plugin manager</comment>
        <translation>Extensión: %1 non se puido carregar: %2

xestor de extensións</translation>
    </message>
    <message>
        <source>PostScript Files (*.eps *.EPS *.ps *.PS);;</source>
        <translation type="obsolete">Ficheiros PostScript (*.eps *.EPS *.ps *.PS);;</translation>
    </message>
    <message>
        <source>SVG Images (*.svg *.svgz);;</source>
        <translation type="obsolete">Imaxes SVG (*.svg *.svgz);;</translation>
    </message>
    <message>
        <source>SVG Images (*.svg);;</source>
        <translation type="obsolete">Imaxes SVG (*.svg);;</translation>
    </message>
    <message>
        <source>OpenOffice.org Draw (*.sxd);;</source>
        <translation type="obsolete">Draw do OpenOffice.org (*.sxd);;</translation>
    </message>
</context>
<context>
    <name>PluginManagerPrefsGui</name>
    <message>
        <source>Plugin Manager</source>
        <translation>Xestor de Extensións</translation>
    </message>
    <message>
        <source>Plugin</source>
        <translation>Extensión</translation>
    </message>
    <message>
        <source>How to run</source>
        <translation>Como executar</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <source>Load it?</source>
        <translation>Carregar?</translation>
    </message>
    <message>
        <source>Plugin ID</source>
        <translation>ID da Extensión</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Ficheiro</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Si</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Non</translation>
    </message>
    <message>
        <source>You need to restart the application to apply the changes.</source>
        <translation>Ten que reiniciar a aplicación para que as modificacións sexan efectivas.</translation>
    </message>
</context>
<context>
    <name>PolygonProps</name>
    <message>
        <source>Polygon Properties</source>
        <translation>Propriedades do Polígono</translation>
    </message>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="obsolete">Esqu&amp;inas:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="obsolete">&amp;Rotación:</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="obsolete">Aplicar &amp;Factor</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="obsolete"> %</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="obsolete">&amp;Factor:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="obsolete">Número de esquinas do polígono</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="obsolete">Graos de rotación do polígono</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="obsolete">Aplicar un Factor de Convexidade/Concavidade para mudar a forma dos Polígonos</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="obsolete">Polígono de Mostra</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="obsolete">Un valor negativo fará que o polígono sexa cóncavo (que teña forma de estrela);
un valor positivo farao convexo</translation>
    </message>
</context>
<context>
    <name>PolygonWidget</name>
    <message>
        <source>Corn&amp;ers:</source>
        <translation>Esqu&amp;inas:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Rotación:</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation>Aplicar &amp;Factor</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation>&amp;Factor:</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation>Número de esquinas para os polígonos</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation>Graos de rotación para os polígonos</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation>Aplicar un Factor de Convexidade/Concavidade para mudar a forma dos Polígonos</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation>Polígono de Mostra</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="obsolete">Un valor negativo fará que o polígono sexa cóncavo (que teña forma de estrela);
un valor positivo farao convexo</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped), a positive value will make it convex</source>
        <translation>Un valor negativo fará que o polígono sexa cóncavo (ou con forma de estrela), un valor positivo faráo convexo</translation>
    </message>
</context>
<context>
    <name>Preferences</name>
    <message>
        <source>Preferences</source>
        <translation>Preferencias</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Xeral</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Documento</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation>Guías</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation>Tipografía</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation>Ferramentas</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation type="obsolete">Porta-retallos</translation>
    </message>
    <message>
        <source>Display</source>
        <translation>Visualización</translation>
    </message>
    <message>
        <source>External Tools</source>
        <translation>Ferramentas externas</translation>
    </message>
    <message>
        <source>Misc.</source>
        <translation type="obsolete">Diversos.</translation>
    </message>
    <message>
        <source>GUI</source>
        <translation>Aparencia</translation>
    </message>
    <message>
        <source>&amp;Theme:</source>
        <translation>&amp;Tema:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source>&amp;Font Size:</source>
        <translation type="obsolete">Tamaño da &amp;Fonte:</translation>
    </message>
    <message>
        <source>Units</source>
        <translation type="obsolete">Unidades</translation>
    </message>
    <message>
        <source>Points (pt)</source>
        <translation type="obsolete">Puntos (pt)</translation>
    </message>
    <message>
        <source>Millimetres (mm)</source>
        <translation type="obsolete">Milímetros (mm)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation type="obsolete">Polgadas (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation type="obsolete">Picas (p)</translation>
    </message>
    <message>
        <source>Mouse Settings</source>
        <translation type="obsolete">Configuración do Rato</translation>
    </message>
    <message>
        <source>&amp;Wheel Jump:</source>
        <translation>&amp;Salto do Rato:</translation>
    </message>
    <message>
        <source> px</source>
        <translation type="obsolete"> px</translation>
    </message>
    <message>
        <source>&amp;Grab Radius:</source>
        <translation type="obsolete">Radio de a&amp;garre:</translation>
    </message>
    <message>
        <source>Menus</source>
        <translation type="obsolete">Menús</translation>
    </message>
    <message>
        <source>&amp;Recent Documents:</source>
        <translation>Documentos &amp;Recentes:</translation>
    </message>
    <message>
        <source>Paths</source>
        <translation>Rotas</translation>
    </message>
    <message>
        <source>&amp;Documents:</source>
        <translation>&amp;Documentos:</translation>
    </message>
    <message>
        <source>&amp;Change...</source>
        <translation>&amp;Mudar...</translation>
    </message>
    <message>
        <source>&amp;ICC Profiles:</source>
        <translation>Perfís &amp;ICC:</translation>
    </message>
    <message>
        <source>C&amp;hange...</source>
        <translation>&amp;Mudar...</translation>
    </message>
    <message>
        <source>&amp;Scripts:</source>
        <translation>&amp;Guións:</translation>
    </message>
    <message>
        <source>Ch&amp;ange...</source>
        <translation>Mud&amp;ar...</translation>
    </message>
    <message>
        <source>T&amp;emplates:</source>
        <translation type="obsolete">Mod&amp;elos:</translation>
    </message>
    <message>
        <source>Cha&amp;nge...</source>
        <translation>Muda&amp;r...</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Tamaño da páxina</translation>
    </message>
    <message>
        <source>Executive</source>
        <translation type="obsolete">Executivo</translation>
    </message>
    <message>
        <source>Folio</source>
        <translation type="obsolete">Folio</translation>
    </message>
    <message>
        <source>Ledger</source>
        <translation type="obsolete">Libro contábel</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation type="obsolete">Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation type="obsolete">Carta</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation type="obsolete">Tabloide</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalizado</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Tamaño:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Retrato</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Apaisado</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Orie&amp;ntación:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Anchura:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Altura:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation type="obsolete">Páxinas &amp;Enfrentadas</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation type="obsolete">A Páxina &amp;Esquerda Primeiro</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Guías das Marxes</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>&amp;Inferior:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>&amp;Superior:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>Di&amp;reita:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Esquerda:</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation>Gardado automático</translation>
    </message>
    <message>
        <source>&amp;Enabled</source>
        <translation type="obsolete">&amp;Activado</translation>
    </message>
    <message>
        <source>min</source>
        <translation>min</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation>&amp;Intervalo:</translation>
    </message>
    <message>
        <source>Grid Layout</source>
        <translation type="obsolete">Disposición da Grella</translation>
    </message>
    <message>
        <source>M&amp;inor Grid Spacing:</source>
        <translation type="obsolete">Espaciamento da Grella S&amp;ecundaria:</translation>
    </message>
    <message>
        <source>Ma&amp;jor Grid Spacing:</source>
        <translation type="obsolete">Espaciamento da Grella Pr&amp;incipal:</translation>
    </message>
    <message>
        <source>Guide &amp;Snap Distance:</source>
        <translation type="obsolete">Di&amp;stancia de Agarre:</translation>
    </message>
    <message>
        <source>Grid Colors</source>
        <translation type="obsolete">Cores da Grella</translation>
    </message>
    <message>
        <source>Min&amp;or Grid Color:</source>
        <translation type="obsolete">Cor da Grella Secund&amp;oria:</translation>
    </message>
    <message>
        <source>Majo&amp;r Grid Color:</source>
        <translation type="obsolete">Cor da Grella &amp;Principal:</translation>
    </message>
    <message>
        <source>&amp;User Guides Color:</source>
        <translation type="obsolete">Cor das Guías do &amp;Usuario:</translation>
    </message>
    <message>
        <source>Base&amp;line Grid Color:</source>
        <translation type="obsolete">Cor da Grella &amp;Base:</translation>
    </message>
    <message>
        <source>Placing</source>
        <translation type="obsolete">Colocación</translation>
    </message>
    <message>
        <source>In the &amp;Background</source>
        <translation type="obsolete">No &amp;Fondo</translation>
    </message>
    <message>
        <source>In the Fore&amp;ground</source>
        <translation type="obsolete">Por &amp;Diante</translation>
    </message>
    <message>
        <source>Baseline Grid</source>
        <translation type="obsolete">Grella Base</translation>
    </message>
    <message>
        <source>O&amp;n</source>
        <translation type="obsolete">&amp;Activada</translation>
    </message>
    <message>
        <source>O&amp;ff</source>
        <translation type="obsolete">De&amp;sactivada</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation type="obsolete">Subíndice</translation>
    </message>
    <message>
        <source> %</source>
        <translation type="obsolete"> %</translation>
    </message>
    <message>
        <source>&amp;Displacement:</source>
        <translation type="obsolete">&amp;Desprazamento:</translation>
    </message>
    <message>
        <source>&amp;Scaling:</source>
        <translation type="obsolete">E&amp;scala:</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="obsolete">Superíndice</translation>
    </message>
    <message>
        <source>D&amp;isplacement:</source>
        <translation type="obsolete">D&amp;esprazamento:</translation>
    </message>
    <message>
        <source>S&amp;caling:</source>
        <translation type="obsolete">Es&amp;cala:</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="obsolete">Versalitas</translation>
    </message>
    <message>
        <source>Sc&amp;aling:</source>
        <translation type="obsolete">Esc&amp;ala:</translation>
    </message>
    <message>
        <source>Other</source>
        <translation type="obsolete">Outra</translation>
    </message>
    <message>
        <source>Baseline &amp;Grid:</source>
        <translation type="obsolete">&amp;Grella de Base:</translation>
    </message>
    <message>
        <source>Baseline &amp;Offset:</source>
        <translation type="obsolete">Dis&amp;tancia da Grella Base:</translation>
    </message>
    <message>
        <source>Automatic &amp;Line Spacing:</source>
        <translation type="obsolete">Inter&amp;liñado Automático:</translation>
    </message>
    <message>
        <source>Default &amp;Font:</source>
        <translation type="obsolete">&amp;Fonte por Omisión:</translation>
    </message>
    <message>
        <source>Default &amp;Size:</source>
        <translation type="obsolete">Tama&amp;ño por Omisión:</translation>
    </message>
    <message>
        <source>&amp;Text Color:</source>
        <translation type="obsolete">Cor do &amp;Texto:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation type="obsolete">Colu&amp;mnas:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation type="obsolete">&amp;Distancia:</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="obsolete">Se xa o túzaro dicía que mañá quérenllo pór</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengunha</translation>
    </message>
    <message>
        <source>&amp;Line Color:</source>
        <translation type="obsolete">Cor da &amp;Liña:</translation>
    </message>
    <message>
        <source>&amp;Shading:</source>
        <translation type="obsolete">&amp;Saturación:</translation>
    </message>
    <message>
        <source>&amp;Fill Color:</source>
        <translation type="obsolete">Cor de &amp;Enchido:</translation>
    </message>
    <message>
        <source>S&amp;hading:</source>
        <translation type="obsolete">Sa&amp;turación:</translation>
    </message>
    <message>
        <source>&amp;Type of Line:</source>
        <translation type="obsolete">&amp;Tipo de Liña:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation type="obsolete">&amp;Anchura da Liña:</translation>
    </message>
    <message>
        <source>Mi&amp;nimum:</source>
        <translation type="obsolete">Mí&amp;nimo:</translation>
    </message>
    <message>
        <source>Ma&amp;ximum:</source>
        <translation type="obsolete">Má&amp;ximo:</translation>
    </message>
    <message>
        <source>&amp;Stepping:</source>
        <translation type="obsolete">&amp;Salto:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation type="obsolete">Ampliación &amp;Libre</translation>
    </message>
    <message>
        <source>&amp;Horizontal Scaling:</source>
        <translation type="obsolete">Ampliación &amp;Horizontal:</translation>
    </message>
    <message>
        <source>&amp;Vertical Scaling:</source>
        <translation type="obsolete">Ampliación &amp;Vertical:</translation>
    </message>
    <message>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation type="obsolete">Aco&amp;modar a Imaxe ao Tamaño da Moldura</translation>
    </message>
    <message>
        <source>Keep Aspect &amp;Ratio</source>
        <translation type="obsolete">Manter a &amp;Proporción</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation type="obsolete">C&amp;or de Enchido:</translation>
    </message>
    <message>
        <source>Corn&amp;ers:</source>
        <translation type="obsolete">Esqu&amp;inas:</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation type="obsolete">&amp;Rotación:</translation>
    </message>
    <message>
        <source>Apply &amp;Factor</source>
        <translation type="obsolete">Aplicar &amp;Factor</translation>
    </message>
    <message>
        <source>&amp;Factor:</source>
        <translation type="obsolete">&amp;Factor:</translation>
    </message>
    <message>
        <source>Other Options</source>
        <translation type="obsolete">Outras Opcións</translation>
    </message>
    <message>
        <source>Sa&amp;ve Contents on Changes</source>
        <translation type="obsolete">Sal&amp;var o Contido nos Cambios</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation type="obsolete">Antevisión</translation>
    </message>
    <message>
        <source>Small</source>
        <translation type="obsolete">Pequena</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation type="obsolete">Media</translation>
    </message>
    <message>
        <source>Large</source>
        <translation type="obsolete">Grande</translation>
    </message>
    <message>
        <source>Display Pages &amp;Side by Side</source>
        <translation type="obsolete">Mostrar as Páxinas &amp;Lado a Lado</translation>
    </message>
    <message>
        <source>Page Colors</source>
        <translation type="obsolete">Cores da Páxina</translation>
    </message>
    <message>
        <source>&amp;Background:</source>
        <translation type="obsolete">&amp;Fondo:</translation>
    </message>
    <message>
        <source>&amp;Margins:</source>
        <translation type="obsolete">&amp;Marxes:</translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation>Mostrar a Área &amp;Non Imprimíbel na Cor da Marxe</translation>
    </message>
    <message>
        <source>Use PDF 1.4 &amp;Transparency Features</source>
        <translation type="obsolete">Usar a Funcionalidade de &amp;Transparencia de PDF 1.4</translation>
    </message>
    <message>
        <source>&amp;Adjust Display Size</source>
        <translation>&amp;Axustar o Tamaño da Exhibición</translation>
    </message>
    <message>
        <source>To adjust the display drag the ruler below with the Slider.</source>
        <translation type="obsolete">Para axustar a exhibición arrastre a regra de embaixo.</translation>
    </message>
    <message>
        <source>Postscript Interpreter</source>
        <translation type="obsolete">Intérprete de Postcript</translation>
    </message>
    <message>
        <source>&amp;Name of Executable:</source>
        <translation>&amp;Nome do Executábel:</translation>
    </message>
    <message>
        <source>Antialias &amp;Text</source>
        <translation>&amp;Texto Antialias</translation>
    </message>
    <message>
        <source>Antialias &amp;Graphics</source>
        <translation>&amp;Gráficos Antialias</translation>
    </message>
    <message>
        <source>Image Processing Tool</source>
        <translation>Ferramenta de Procesamento de Imaxes</translation>
    </message>
    <message>
        <source>Name of &amp;Executable:</source>
        <translation>Nome do &amp;Executábel:</translation>
    </message>
    <message>
        <source>Printing</source>
        <translation type="obsolete">Impresión</translation>
    </message>
    <message>
        <source>Clip to Page &amp;Margins</source>
        <translation type="obsolete">Arrimar ás &amp;Marxes da Páxina</translation>
    </message>
    <message>
        <source>Apply &amp;Under Color Removal</source>
        <translation type="obsolete">Aplicar Eliminación da Cor &amp;Inferior (UCR)</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Choose the default window decoration and looks.
Scribus inherits any available KDE or Qt themes</source>
        <translation type="obsolete">Escolla a decoración e aparencia predeterminadas das xanelas.
Scribus herda calquer tema disponíbel de KDE ou Qt</translation>
    </message>
    <message>
        <source>Default font size for the menus and windows</source>
        <translation>Tamaño por omisión da fonte para os menús e xanelas</translation>
    </message>
    <message>
        <source>Default unit of measurement for document editing</source>
        <translation>Unidade de medida por omisión para a edición de documentos</translation>
    </message>
    <message>
        <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
        <translation>Número de liñas que se desprazará o punteiro a cada movemento da roda do rato</translation>
    </message>
    <message>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation type="obsolete">Radio da área dentro da que Scribus permitirá agarrar os manipuladores</translation>
    </message>
    <message>
        <source>Number of recently edited documents to show in the File menu</source>
        <translation>Número de documentos editados recentementos que se mostrarán no menú Ficheiro</translation>
    </message>
    <message>
        <source>Default documents directory</source>
        <translation>Directorio por omisión dos documentos</translation>
    </message>
    <message>
        <source>Default ICC profiles directory. This cannot
be changed with documents open.</source>
        <translation type="obsolete">Directorio por omisión dos perfís ICC. Non se pode mudar co documentos abertos.</translation>
    </message>
    <message>
        <source>Default Scripter scripts directory</source>
        <translation>Directorio por omisión dos guións do Scripter</translation>
    </message>
    <message>
        <source>Additional Directory for Document Templates</source>
        <translation type="obsolete">Directorio adicional dos Modelos de Documento</translation>
    </message>
    <message>
        <source>Default page size, either a standard size or a custom size</source>
        <translation>Tamaño por omisión da páxina, ora un tamaño padrón ou un personalizado</translation>
    </message>
    <message>
        <source>Default orientation of document pages</source>
        <translation>Orientación por omisión das páxinas dos documentos</translation>
    </message>
    <message>
        <source>Width of document pages, editable if you have chosen a custom page size</source>
        <translation>Anchura das páxinas dos documentos, modificábel se escolleu un tamaño de páxina personalizado</translation>
    </message>
    <message>
        <source>Height of document pages, editable if you have chosen a custom page size</source>
        <translation>Altura das páxinas dos documentos, modificábel se escolleu un tamaño de páxina personalizado</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation type="obsolete">Permitir a disposición sinxela ou de dobre páxina</translation>
    </message>
    <message>
        <source>Make the first page the left page of a document</source>
        <translation type="obsolete">Facer que a primeira páxina sexa a páxina esquerda do documento</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation type="obsolete">Distancia entre a guía da marxe superior e o bordo da páxina</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation type="obsolete">Distancia entre a guía da marxe inferior e o bordo da páxina</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Distancia entre a guía da marxe esquerda e o bordo da páxina.
Se se escollen Páxinas Enfrentadas, este espazo de marxe pódese ussar para obter as marxes adecuadas para a encuadernación</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Distancia entre a guía da marxe direita e o bordo da páxina.
Se se escollen Páxinas Enfrentadas, este espazo de marxe pódese ussar para obter as marxes adecuadas para a encuadernación</translation>
    </message>
    <message>
        <source>When enabled, Scribus saves a backup copy of your file with the .bak extension
each time the time period elapses</source>
        <translation type="obsolete">Se se activa, Scribus salva unha copia de seguranza do seu ficheiro coa extensión .bak
cada fracción de tempo determinada</translation>
    </message>
    <message>
        <source>Time period between saving automatically</source>
        <translation>Período de tempo após o que se produce o gardado automático</translation>
    </message>
    <message>
        <source>Distance between the minor grid lines</source>
        <translation type="obsolete">Distancia entre as liñas da grella secundaria</translation>
    </message>
    <message>
        <source>Distance between the major grid lines</source>
        <translation type="obsolete">Distancia entre as liñas da grella principal</translation>
    </message>
    <message>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation type="obsolete">Distancia á que un obxecto se agarrará ás guías personalizadas</translation>
    </message>
    <message>
        <source>Color of the minor grid lines</source>
        <translation type="obsolete">Cor das liñas da grella secundaria</translation>
    </message>
    <message>
        <source>Color of the major grid lines</source>
        <translation type="obsolete">Cor das liñas da grella principal</translation>
    </message>
    <message>
        <source>Color of the guide lines you insert</source>
        <translation type="obsolete">Cor das liñas das liñas guía que vaia colocando</translation>
    </message>
    <message>
        <source>Place the grid behind your page objects</source>
        <translation type="obsolete">Colocar a grella por detrás dos obxectos da páxina</translation>
    </message>
    <message>
        <source>Place the grid in front of your page objects</source>
        <translation type="obsolete">Colocar a grella por diante dos obxectos da páxina</translation>
    </message>
    <message>
        <source>Turns on the base grid</source>
        <translation type="obsolete">Activa a grella base</translation>
    </message>
    <message>
        <source>Turns off the base grid</source>
        <translation type="obsolete">Desactiva a grella base</translation>
    </message>
    <message>
        <source>Displacement above the baseline of the font on a line</source>
        <translation type="obsolete">Desprazamento da fonte por en cima da liña de base nunha liña</translation>
    </message>
    <message>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation type="obsolete">Tamaño relativo do superíndice en relación á fonte normal</translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation type="obsolete">Desprazamento da fonte por debaixo da liña de base nunha liña</translation>
    </message>
    <message>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation type="obsolete">Tamaño relativo do subíndice en relación á fonte normal</translation>
    </message>
    <message>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation type="obsolete">Tamaño relativo das versalitas en relación á fonte normal</translation>
    </message>
    <message>
        <source>Percentage increase over the font size for the line spacing</source>
        <translation type="obsolete">Incremento en percentaxe sobre o tamaño da fonte do espaciamento da liña</translation>
    </message>
    <message>
        <source>Text Frame Properties</source>
        <translation type="obsolete">Propriedades das Molduras de Texto</translation>
    </message>
    <message>
        <source>Picture Frame Properties</source>
        <translation type="obsolete">Propriedades das Molduras de Imaxes</translation>
    </message>
    <message>
        <source>Shape Drawing Properties</source>
        <translation type="obsolete">Propriedades do Deseño de Formas</translation>
    </message>
    <message>
        <source>Magnification Level Defaults</source>
        <translation type="obsolete">Nível Predeterminado de Aumento</translation>
    </message>
    <message>
        <source>Line Drawing Properties</source>
        <translation type="obsolete">Propriedades do Deseño de Liñas</translation>
    </message>
    <message>
        <source>Polygon Drawing Properties</source>
        <translation type="obsolete">Propriedades do Deseño de Polígonos</translation>
    </message>
    <message>
        <source>Font for new text frames</source>
        <translation type="obsolete">Fonte para as molduras de texto novas</translation>
    </message>
    <message>
        <source>Size of font for new text frames</source>
        <translation type="obsolete">Tamaño da fonte para as molduras de texto novas</translation>
    </message>
    <message>
        <source>Color of font</source>
        <translation type="obsolete">Cor da fonte</translation>
    </message>
    <message>
        <source>Number of columns in a text frame</source>
        <translation type="obsolete">Número de columnas nunha moldura de texto</translation>
    </message>
    <message>
        <source>Gap between text frame columns</source>
        <translation type="obsolete">Distancia entre as columnas das molduras de texto</translation>
    </message>
    <message>
        <source>Sample of your font</source>
        <translation type="obsolete">Mostra da súa fonte</translation>
    </message>
    <message>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation type="obsolete">As molduras de imaxes permiten que as imaxes varíen de escala</translation>
    </message>
    <message>
        <source>Horizontal scaling of images</source>
        <translation type="obsolete">Modificación do tamaño horizontal das imaxes</translation>
    </message>
    <message>
        <source>Vertical scaling of images</source>
        <translation type="obsolete">Modificación do tamaño vertical das imaxes</translation>
    </message>
    <message>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation type="obsolete">Manter a proporción horizontal e vertical</translation>
    </message>
    <message>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation type="obsolete">As imaxes nas molduras de imaxes acomódansse ao tamaño da moldura</translation>
    </message>
    <message>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation type="obsolete">As imaxes cuxo tamaño se modifica automaticamente manteñen a proporcion orixinal</translation>
    </message>
    <message>
        <source>Fill color of picture frames</source>
        <translation type="obsolete">Dor de enchido das molduras de imaxe</translation>
    </message>
    <message>
        <source>Saturation of color of fill</source>
        <translation type="obsolete">Saturación da cor de enchido</translation>
    </message>
    <message>
        <source>Line color of shapes</source>
        <translation type="obsolete">Cor da liña das formas</translation>
    </message>
    <message>
        <source>Saturation of color of lines</source>
        <translation type="obsolete">Saturación da cor das liñas</translation>
    </message>
    <message>
        <source>Fill color of shapes</source>
        <translation type="obsolete">Cor de enchido das formas</translation>
    </message>
    <message>
        <source>Line style of shapes</source>
        <translation type="obsolete">Estilo de liña das formas</translation>
    </message>
    <message>
        <source>Line width of shapes</source>
        <translation type="obsolete">Anchura da liña das formas</translation>
    </message>
    <message>
        <source>Minimum magnification allowed</source>
        <translation type="obsolete">Redución mínima permitida</translation>
    </message>
    <message>
        <source>Maximum magnification allowed</source>
        <translation type="obsolete">Aumento máximo permitido</translation>
    </message>
    <message>
        <source>Change in magnification for each zoom operation</source>
        <translation type="obsolete">Paso de aumento/redución</translation>
    </message>
    <message>
        <source>Color of lines</source>
        <translation type="obsolete">Cor das liñas</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation type="obsolete">Saturación da cor</translation>
    </message>
    <message>
        <source>Style of lines</source>
        <translation type="obsolete">Estilo das liñas</translation>
    </message>
    <message>
        <source>Width of lines</source>
        <translation type="obsolete">Anchura das liñas</translation>
    </message>
    <message>
        <source>Number of corners for polygons</source>
        <translation type="obsolete">Número de esquinas dos polígonos</translation>
    </message>
    <message>
        <source>Degrees of rotation for polygons</source>
        <translation type="obsolete">Graos de rotación dos polígonos</translation>
    </message>
    <message>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="obsolete">Aplicar un Factor de Convexidade/Concavidade para mudar a forma dos Polígonos</translation>
    </message>
    <message>
        <source>Sample Polygon</source>
        <translation type="obsolete">Polígono de Mostra</translation>
    </message>
    <message>
        <source>A negative value will make the polygon concave (or star shaped),
 a positive value will make it convex</source>
        <translation type="obsolete">Un valor negativo fará que o polígono sexa cóncavo (que teña forma de estrela);
un valor positivo farao convexo</translation>
    </message>
    <message>
        <source>Choose the size of the preview in the scrapbook palette</source>
        <translation type="obsolete">Escolla o tamaño da antevisión da paleta do porta-retallos</translation>
    </message>
    <message>
        <source>Save the scrapbook contents everytime after a change</source>
        <translation type="obsolete">Salvar o contido do porta-retallos depois de cada cambio</translation>
    </message>
    <message>
        <source>When using facing pages, show the two pages side by side</source>
        <translation type="obsolete">Ao usar páxinas enfrentadas, mostrar as dúas páxinas lado a lado</translation>
    </message>
    <message>
        <source>Color for paper</source>
        <translation>Cor do papel</translation>
    </message>
    <message>
        <source>Color for the margin lines</source>
        <translation type="obsolete">Cor das liñas das marxes</translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation>Mascarar a área por fora das marxes coa cor das marxes</translation>
    </message>
    <message>
        <source>Enable transparency features within PDF 1.4 export</source>
        <translation type="obsolete">Permitir a funcionalidade de transparencia ao exportar a PDF 1.4</translation>
    </message>
    <message>
        <source>Set the default zoom level</source>
        <translation>Asignar un nível de zoom por omisión</translation>
    </message>
    <message>
        <source>File system location for the Ghostscript interpreter</source>
        <translation type="obsolete">Localización do sistema de ficheiros do intérprete de Ghostscript</translation>
    </message>
    <message>
        <source>Antialias text for EPS and PDF onscreen rendering</source>
        <translation>Texto antialias para a exhibición na pantalla de EPS e PDF</translation>
    </message>
    <message>
        <source>Antialias graphics for EPS and PDF onscreen rendering</source>
        <translation>Gráficos antialias para a exhibición na pantalla de EPS e PDF</translation>
    </message>
    <message>
        <source>File system location for graphics editor. If you use gimp
and your distro includes it, we recommend &apos;gimp-remote&apos;,
as it allows you to edit the image in an already running
instance of gimp.</source>
        <translation type="obsolete">Localización no sistema de ficheiros do editor de gráficos.
Se usa o Gimp e a súa distribución o inclúe, recoméndase usar
&quot;gimp-remote&quot;, xa que permite modificar a imaxe nunha instancia
xa existente do Gimp.</translation>
    </message>
    <message>
        <source>Do not show objects outside the margins on the printed page or exported file</source>
        <translation type="obsolete">Non mostrar os obxectos por fora das marxes na páxina impresa ou no ficheiro exportado</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed
of cyan, yellow and magenta and using black instead.
UCR most affects parts of images which are neutral and/or dark tones
which are close to the gray. Use of this may improve printing some images
and some experimentation and testing is need on a case by case basis.
UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="obsolete">Un xeito de apagar algunhas das sombras en gris compostas
de cian, amarelo e maxenta e usar negro no seu lugar.
O UCR afecta fundamentalmente ás partes das imaxes que teñen tons neutros e/ou escuros
perto do gris. Cando se usa pode mellorar a impresión dalgunhas imaxes,
ainda que é preciso experimentar segundo cada caso.
O UCR reduce a posibilidade dun exceso de saturación coas tintas CMY.</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation>Escolla un Directorio</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation type="obsolete">&amp;Dentro:</translation>
    </message>
    <message>
        <source>O&amp;utside:</source>
        <translation type="obsolete">&amp;Fora:</translation>
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
        <source>&amp;Language:</source>
        <translation>&amp;Lingua:</translation>
    </message>
    <message>
        <source>Document T&amp;emplates:</source>
        <translation>Mod&amp;elos de Documentos:</translation>
    </message>
    <message>
        <source>Units:</source>
        <translation>Unidades:</translation>
    </message>
    <message>
        <source>Undo/Redo</source>
        <translation>Desfacer/Refacer</translation>
    </message>
    <message>
        <source>Action history length</source>
        <translation>Tamaño do historial de Accións</translation>
    </message>
    <message>
        <source>Hyphenator</source>
        <translation>Separador de guións</translation>
    </message>
    <message>
        <source>Fonts</source>
        <translation>Fontes</translation>
    </message>
    <message>
        <source>Preflight Verifier</source>
        <translation>Verificador Pré-voo</translation>
    </message>
    <message>
        <source>Color Management</source>
        <translation>Xestión da Cor</translation>
    </message>
    <message>
        <source>PDF Export</source>
        <translation>Exportación a PDF</translation>
    </message>
    <message>
        <source>Document Item Attributes</source>
        <translation>Atributos do Elemento do Documento</translation>
    </message>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation>Índice e Índices Analíticos</translation>
    </message>
    <message>
        <source>Keyboard Shortcuts</source>
        <translation>Atallos do teclado</translation>
    </message>
    <message>
        <source>Page Display</source>
        <translation>Exhibición da Páxina</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Cor:</translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation>Alt+U</translation>
    </message>
    <message>
        <source>Show Pictures</source>
        <translation>Mostrar as Imaxes</translation>
    </message>
    <message>
        <source>Show Text Chains</source>
        <translation>Mostrar as Cadeas de Texto</translation>
    </message>
    <message>
        <source>Show Text Control Characters</source>
        <translation>Mostrar os Caracteres de Control do Texto</translation>
    </message>
    <message>
        <source>Show Frames</source>
        <translation>Mostrar as Molduras</translation>
    </message>
    <message>
        <source>Rulers relative to Page</source>
        <translation>Regras relativas á Páxina</translation>
    </message>
    <message>
        <source>Scratch Space</source>
        <translation>Espazo de traballo</translation>
    </message>
    <message>
        <source>Gaps between Pages</source>
        <translation>Distancia entre as Páxinas</translation>
    </message>
    <message>
        <source>Horizontal:</source>
        <translation>Horizontal:</translation>
    </message>
    <message>
        <source>Vertical:</source>
        <translation>Vertical:</translation>
    </message>
    <message>
        <source>To adjust the display drag the ruler below with the slider.</source>
        <translation>Para axustar o que se mostra arrastre a regra de embaixo coa escala.</translation>
    </message>
    <message>
        <source>PostScript Interpreter</source>
        <translation>Intérprete de PostScript</translation>
    </message>
    <message>
        <source>dpi</source>
        <translation>dpi</translation>
    </message>
    <message>
        <source>Resolution:</source>
        <translation>Resolución:</translation>
    </message>
    <message>
        <source>Always ask before fonts are replaced when loading a document</source>
        <translation>Perguntar sempre antes de substituir as fontes ao carregar un documento</translation>
    </message>
    <message>
        <source>Preview of current Paragraph Style visible when editing Styles</source>
        <translation>Antevisión do Estilo de Parágrafo actual visíbel ao modificar os Estilos</translation>
    </message>
    <message>
        <source>Show Startup Dialog</source>
        <translation>Mostrar o Diálogo de Inicio</translation>
    </message>
    <message>
        <source>Lorem Ipsum</source>
        <translation>Lorem Ipsum</translation>
    </message>
    <message>
        <source>Always use standard Lorem Ipsum</source>
        <translation>Utilizar sempre o Lorem Ipsum normal</translation>
    </message>
    <message>
        <source>Count of the Paragraphs:</source>
        <translation>Conta de Parágrafos:</translation>
    </message>
    <message>
        <source>Miscellaneous</source>
        <translation>Diversos</translation>
    </message>
    <message>
        <source>Plugins</source>
        <translation>Extensións</translation>
    </message>
    <message>
        <source>Enable or disable  the display of linked frames.</source>
        <translation>Activar ou desactivar  mostrar as molduras vinculadas.</translation>
    </message>
    <message>
        <source>Display non-printing characters such as paragraph markers in text frames</source>
        <translation>Mostrar os caracteres non imprimíbeis, tais como marcadores de parágrafo, nas molduras de texto</translation>
    </message>
    <message>
        <source>Turns the display of frames on or off</source>
        <translation>Activa ou desactiva mostrar as molduras</translation>
    </message>
    <message>
        <source>Turns the display of pictures on or off</source>
        <translation>Activa ou desactiva mostrar as imaxes</translation>
    </message>
    <message>
        <source>Select your default language for Scribus to run with. Leave this blank to choose based on environment variables. You can still override this by passing a command line option when starting Scribus</source>
        <translation>Escolla a linguaxe coa que quer utilizar Scribus normalmente. Déixeo en branco para escoller segundo as variábeis do contorno. É posíbel pasar por encima delas pasándolle unha opción na liña de comandos ao iniciar Scribus</translation>
    </message>
    <message>
        <source>Default ICC profiles directory. This cannot
be changed with a document open.</source>
        <translation type="obsolete">Directorio de perfís ICC por omisión. Isto non se pode
mudar cun documento aberto.</translation>
    </message>
    <message>
        <source>Additional directory for document templates</source>
        <translation>Directorio adicional para modelos de documento</translation>
    </message>
    <message>
        <source>Set the length of the action history in steps.
If set to 0 infinite amount of actions will be stored.</source>
        <translation type="obsolete">Indicar a lonxitude do historial de accións en número de pasos.
Se se deixa en 0 armacenarase unha cantidade infinita de accións.</translation>
    </message>
    <message>
        <source>Place a ruler against your screen and drag the slider to set the zoom level so Scribus will display your pages and objects on them at the correct size</source>
        <translation>Coloque unha regra contra a pantalla e arrastre a escala para axustar o nível de zoom de maneira que Scribus mostre as páxinas e os obxectos no tamaño correcto</translation>
    </message>
    <message>
        <source>Filesystem location for the Ghostscript interpreter</source>
        <translation type="obsolete">Localización no sistema de ficheiros do intérprete de Ghostscript</translation>
    </message>
    <message>
        <source>Defines amount of space left of the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation>Define a cantidade de espacio á esquerda da mesa de traballo do documento disponíbel como área libre para crear e modificar elementos e arrastralos para a páxina activa</translation>
    </message>
    <message>
        <source>Defines amount of space right of the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation>Define a cantidade de espacio á direita da mesa de traballo do documento disponíbel como área libre para crear e modificar elementos e arrastralos para a páxina activa</translation>
    </message>
    <message>
        <source>Defines amount of space above the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation>Define a cantidade de espacio por encima da mesa de traballo do documento disponíbel como área libre para crear e modificar elementos e arrastralos para a páxina activa</translation>
    </message>
    <message>
        <source>Defines amount of space below the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation>Define a cantidade de espacio por debaixo da mesa de traballo do documento disponíbel como área libre para crear e modificar elementos e arrastralos para a páxina activa</translation>
    </message>
    <message>
        <source>Locate Ghostscript</source>
        <translation>Localizar Ghostscript</translation>
    </message>
    <message>
        <source>Locate your image editor</source>
        <translation>Localizar o seu editor de imaxes</translation>
    </message>
    <message>
        <source>&amp;Font Size (Menus):</source>
        <translation>Tamaño da &amp;Fonte (Menús):</translation>
    </message>
    <message>
        <source>Font Size (&amp;Palettes):</source>
        <translation>Tamaño da Fonte (&amp;Paletas):</translation>
    </message>
    <message>
        <source>Choose the default window decoration and looks. Scribus inherits any available KDE or Qt themes, if Qt is configured to search KDE plugins.</source>
        <translation>Escolla a decoración e aparencia por omisión das xanelas. Scribus herda calquer tema disponíbel para KDE ou Qt se Qt está configurado para procurar os plugins de KDE.</translation>
    </message>
    <message>
        <source>Default font size for the tool windows</source>
        <translation>Tamaño de fonte por omisión para as xanelas de ferramentas</translation>
    </message>
    <message>
        <source>Default ICC profiles directory. This cannot be changed with a document open. By default, Scribus will look in the System Directories under Mac OSX and Windows. On Linux and Unix, Scribus will search $home/.color/icc,/usr/share/color/icc and /usr/local/share/color/icc </source>
        <translation>  Directorio por omisión dos perfís ICC. Isto non se pode modificar cando un documento está aberto. Por omisión, Scribus procurará baixo os Directorios de Sistema en MacOS X e Windows. En Linux e Unix, Scribus procurará en $home/.color/icc,/usr/share/color/icc e /usr/local/share/color/icc</translation>
    </message>
    <message>
        <source>When enabled, Scribus saves a backup copy of your file with the .bak extension each time the time period elapses</source>
        <translation>Cando está habilitado, Scribus garda unha copia de seguranza do seu ficheiro coa extensión .bak ao transcorrer o periodo de tempo</translation>
    </message>
    <message>
        <source>Set the length of the action history in steps. If set to 0 infinite amount of actions will be stored.</source>
        <translation>Indique o tamaño do historial de accións en pasos. Se o deixa en 0 armacenaranse infinitas accións.</translation>
    </message>
    <message>
        <source>File system location for graphics editor. If you use gimp and your distro includes it, we recommend &apos;gimp-remote&apos;, as it allows you to edit the image in an already running instance of gimp.</source>
        <translation>Localización do editor de gráficos no sistema de ficheiros. Se utiliza gimp e a súa distribución o inclúe, recomendamos &quot;gimp-remote&quot;, que lle permite modificar a imaxe nunha instancia xa aberta do gimp.</translation>
    </message>
    <message>
        <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis. UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="obsolete">Un xeito de apagar algunhas das sombras en gris compostas de cian, amarelo e maxenta e usar negro no seu lugar.
A UCR afecta fundamentalmente ás partes das imaxes que teñen tons neutros e/ou escuros perto do gris. Cando se usa pode mellorar a impresión dalgunhas imaxes, ainda que é preciso experimentar segundo cada caso. A UCR reduce a posibilidade dun exceso de saturación coas tintas CMY.</translation>
    </message>
    <message>
        <source>Add the path for the Ghostscript interpreter. On Windows, please note it is important to note you need to use the program named gswin32c.exe - NOT gswin32.exe. Otherwise, this maybe cause a hang when starting Scribus.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PrefsDialogBase</name>
    <message>
        <source>&amp;Defaults</source>
        <translation>&amp;Predefinido</translation>
    </message>
    <message>
        <source>Save...</source>
        <translation>Salvar...</translation>
    </message>
    <message>
        <source>Save Preferences</source>
        <translation>Salvar as Preferencias</translation>
    </message>
</context>
<context>
    <name>PrefsManager</name>
    <message>
        <source>Single Page</source>
        <translation type="obsolete">Páxina Única</translation>
    </message>
    <message>
        <source>Double sided</source>
        <translation type="obsolete">A dúas caras</translation>
    </message>
    <message>
        <source>Left Page</source>
        <translation type="obsolete">Páxina Esquerda</translation>
    </message>
    <message>
        <source>Right Page</source>
        <translation type="obsolete">Páxina Direita</translation>
    </message>
    <message>
        <source>3-Fold</source>
        <translation type="obsolete">Tríptico</translation>
    </message>
    <message>
        <source>Middle</source>
        <translation type="obsolete">Medio</translation>
    </message>
    <message>
        <source>4-Fold</source>
        <translation type="obsolete">Catro caras</translation>
    </message>
    <message>
        <source>Middle Left</source>
        <translation type="obsolete">Medio Esquerda</translation>
    </message>
    <message>
        <source>Middle Right</source>
        <translation type="obsolete">Medio Direita</translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation>PostScript</translation>
    </message>
    <message>
        <source>Migrate Old Scribus Settings?</source>
        <translation>Migrar a Configuación Antiga de Scribus?</translation>
    </message>
    <message>
        <source>Scribus has detected existing Scribus 1.2 preferences files.
Do you want to migrate them to the new Scribus version?</source>
        <translation>Scribus detecteu que existen ficheiros con preferencias de Scribus 1.2.
Quéreos migrar para a nova versión de Scribus?</translation>
    </message>
    <message>
        <source>Could not open preferences file &quot;%1&quot; for writing: %2</source>
        <translation>Non se puido abrir o ficheiro de preferencias &quot;%1&quot;  para escribir: %2</translation>
    </message>
    <message>
        <source>Writing to preferences file &quot;%1&quot; failed: QIODevice status code %2</source>
        <translation>Non se puido escribir as preferencias no ficheiro &quot;%1&quot;: Código de estado QIODevice %2</translation>
    </message>
    <message>
        <source>Failed to open prefs file &quot;%1&quot;: %2</source>
        <translation>Non se puido abrir o ficheiro de preferencias &quot;%1%: %2</translation>
    </message>
    <message>
        <source>Failed to read prefs XML from &quot;%1&quot;: %2 at line %3, col %4</source>
        <translation>Non se puideron ler as preferencias XML de &quot;%1&quot;: %2 na liña %3, columna %4</translation>
    </message>
    <message>
        <source>Postscript</source>
        <translation>Postscript</translation>
    </message>
    <message>
        <source>PDF 1.3</source>
        <translation>PDF 1.3</translation>
    </message>
    <message>
        <source>PDF 1.4</source>
        <translation>PDF 1.4</translation>
    </message>
    <message>
        <source>PDF/X-3</source>
        <translation>PDF/X-3</translation>
    </message>
    <message>
        <source>Error Writing Preferences</source>
        <translation>Erro ao Escribir as Preferencias</translation>
    </message>
    <message>
        <source>Scribus was not able to save its preferences:&lt;br&gt;%1&lt;br&gt;Please check file and directory permissions and available disk space.</source>
        <comment>scribus app error</comment>
        <translation>Scribus non puido salvar as súas preferencias:&lt;br&gt;%1&lt;br&gt;Comprobe os permisos do ficheiro e do directorio e o espazo disponíbel no disco.

erro da aplicación scribus.</translation>
    </message>
    <message>
        <source>Error Loading Preferences</source>
        <translation>Erro ao Carregar as Preferencias</translation>
    </message>
    <message>
        <source>Scribus was not able to load its preferences:&lt;br&gt;%1&lt;br&gt;Default settings will be loaded.</source>
        <translation>Scribus non puido carregar as súas preferencias:&lt;br&gt;%1&lt;br&gt;Carregarase a configuración por omisión.</translation>
    </message>
</context>
<context>
    <name>PresetLayout</name>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengunha</translation>
    </message>
    <message>
        <source>Book</source>
        <translation type="obsolete">Libro</translation>
    </message>
    <message>
        <source>Magazine</source>
        <translation>Revista</translation>
    </message>
    <message>
        <source>You can select predefined page layout here. &apos;None&apos; leave margins as is, &apos;Book&apos; sets margins classically (Gutenberg). &apos;Book&apos; is proposed for two-sided documents. &apos;Magazine&apos; sets all margins for same value. Leading is Left/Inside value.</source>
        <translation type="obsolete">Aquí pode escoller a disposición da páxina por omisión. &quot;Nengunha&quot; deixa as marxes como están. &quot;Libro&quot; configura as marxes clásicas (Gutemberg). &quot;Libro&quot; proponse para documentos con dúas páxinas. &quot;Revistas&quot; deixa todas as marxes co mesmo valor. O modelo é o valor Esquerdo/Interior.</translation>
    </message>
    <message>
        <source>Fibonacci</source>
        <translation>Fibonacci</translation>
    </message>
    <message>
        <source>Golden Mean</source>
        <translation>Media Áurea</translation>
    </message>
    <message>
        <source>Nine Parts</source>
        <translation>Nove Partes</translation>
    </message>
    <message>
        <source>Gutenberg</source>
        <translation>Gutenberg</translation>
    </message>
    <message>
        <source>You can select predefined page layout here. &apos;None&apos; leave margins as is, Gutenberg sets margins classically. &apos;Magazine&apos; sets all margins for same value. Leading is Left/Inside value.</source>
        <translation>Pode escoller aquí a disposición de páxina predefinida. &quot;Nengunha&quot; deixa as marxes como están. Gutenberg dispón as marxes clásicas. &quot;Revista&quot; dalles a todas as marxes o mesmo valor. O principal é o valor Esquerda/Interior.</translation>
    </message>
    <message>
        <source>None</source>
        <comment>layout type</comment>
        <translation>Nengunha

tipo de disposición</translation>
    </message>
</context>
<context>
    <name>PythonConsole</name>
    <message>
        <source>&amp;Open...</source>
        <translation>&amp;Abrir...</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Gardar</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation>Gardar &amp;Como...</translation>
    </message>
    <message>
        <source>&amp;Exit</source>
        <translation>&amp;Sair</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Ficheiro</translation>
    </message>
    <message>
        <source>&amp;Run</source>
        <translation>Executa&amp;r</translation>
    </message>
    <message>
        <source>Run As &amp;Console</source>
        <translation>Executar Como &amp;Consola</translation>
    </message>
    <message>
        <source>&amp;Save Output...</source>
        <translation>&amp;Salvar a Saída...</translation>
    </message>
    <message>
        <source>&amp;Script</source>
        <translation>&amp;Guión</translation>
    </message>
    <message>
        <source>Scribus Python Console</source>
        <translation>Consola Python de Scribus</translation>
    </message>
    <message>
        <source>This is derived from standard Python console so it contains some limitations esp. in the case of whitespaces. Please consult Scribus manual for more informations.</source>
        <translation>Esta deriva da consola Python normal, así que contén certas limitacións, en particular no caso dos espazos en branco. Consulte o manual de Scribus para máis información.</translation>
    </message>
    <message>
        <source>Script Console</source>
        <translation>Consola de Guións</translation>
    </message>
    <message>
        <source>Write your commands here. A selection is processed as script</source>
        <translation>Escriba aquí os seus comandos. Unha selección procésase como guión</translation>
    </message>
    <message>
        <source>Output of your script</source>
        <translation>Saída do seu guión</translation>
    </message>
    <message>
        <source>Python Scripts (*.py)</source>
        <translation>Scripts en Python (*.py)</translation>
    </message>
    <message>
        <source>Open File With Python Commands</source>
        <translation type="obsolete">Abrir Ficheiro Con Comandos en Python</translation>
    </message>
    <message>
        <source>Save the Python Commands in File</source>
        <translation>Salvar os Comandos en Python nun Ficheiro</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Advertencia</translation>
    </message>
    <message>
        <source>Text Files (*.txt)</source>
        <translation>Ficheiros de Texto (*.txt)</translation>
    </message>
    <message>
        <source>Save Current Output</source>
        <translation>Salvar a Saída Actual</translation>
    </message>
    <message>
        <source>Open Python Script File</source>
        <translation>Abrir o Ficheiro de Guións Python</translation>
    </message>
</context>
<context>
    <name>QColorDialog</name>
    <message>
        <source>Hu&amp;e:</source>
        <translation>&amp;Ton:</translation>
    </message>
    <message>
        <source>&amp;Sat:</source>
        <translation>&amp;Saturación:</translation>
    </message>
    <message>
        <source>&amp;Val:</source>
        <translation>&amp;Valor:</translation>
    </message>
    <message>
        <source>&amp;Red:</source>
        <translation>&amp;Vermello:</translation>
    </message>
    <message>
        <source>&amp;Green:</source>
        <translation>&amp;Verde:</translation>
    </message>
    <message>
        <source>Bl&amp;ue:</source>
        <translation>A&amp;zul:</translation>
    </message>
    <message>
        <source>A&amp;lpha channel:</source>
        <translation>Canal Al&amp;fa:</translation>
    </message>
    <message>
        <source>&amp;Basic colors</source>
        <translation>Cores &amp;básicas</translation>
    </message>
    <message>
        <source>&amp;Custom colors</source>
        <translation>Cores &amp;Persoais</translation>
    </message>
    <message>
        <source>&amp;Define Custom Colors &gt;&gt;</source>
        <translation>&amp;Definir as Cores Persoais &gt;&gt;</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>De acordo</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <source>&amp;Add to Custom Colors</source>
        <translation>&amp;Adicionar ás Cores Persoais</translation>
    </message>
    <message>
        <source>Select color</source>
        <translation>Escoller a cor</translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <source>Copy or Move a File</source>
        <translation>Copiar ou Mover un Ficheiro</translation>
    </message>
    <message>
        <source>Read: %1</source>
        <translation>Ler: %1</translation>
    </message>
    <message>
        <source>Write: %1</source>
        <translation>Escribir: %1</translation>
    </message>
    <message>
        <source>File &amp;name:</source>
        <translation>&amp;Nome do Ficheiro:</translation>
    </message>
    <message>
        <source>File &amp;type:</source>
        <translation>&amp;Tipo de Ficheiro:</translation>
    </message>
    <message>
        <source>One directory up</source>
        <translation>Subir un directorio</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Tamaño</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Data</translation>
    </message>
    <message>
        <source>Attributes</source>
        <translation>Atributos</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>De acordo</translation>
    </message>
    <message>
        <source>Look &amp;in:</source>
        <translation>Procurar &amp;en:</translation>
    </message>
    <message>
        <source>Back</source>
        <translation>Para tras</translation>
    </message>
    <message>
        <source>Create New Folder</source>
        <translation>Crear un Cartafol Novo</translation>
    </message>
    <message>
        <source>List View</source>
        <translation>Vista en Lista</translation>
    </message>
    <message>
        <source>Detail View</source>
        <translation>Vista Detallada</translation>
    </message>
    <message>
        <source>Preview File Info</source>
        <translation>Examinar a Información do Ficheiro</translation>
    </message>
    <message>
        <source>Preview File Contents</source>
        <translation>Examinar os contidos do Ficheiro</translation>
    </message>
    <message>
        <source>Read-write</source>
        <translation>Lectura e Escritura</translation>
    </message>
    <message>
        <source>Read-only</source>
        <translation>Só Lectura</translation>
    </message>
    <message>
        <source>Write-only</source>
        <translation>Só escritura</translation>
    </message>
    <message>
        <source>Inaccessible</source>
        <translation>Inaccesíbel</translation>
    </message>
    <message>
        <source>Symlink to File</source>
        <translation>Vínculo a Ficheiro</translation>
    </message>
    <message>
        <source>Symlink to Directory</source>
        <translation>Vínculo a Directorio</translation>
    </message>
    <message>
        <source>Symlink to Special</source>
        <translation>Vínculo a Especial</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Ficheiro</translation>
    </message>
    <message>
        <source>Dir</source>
        <translation>Dir</translation>
    </message>
    <message>
        <source>Special</source>
        <translation>Especial</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation>Gardar como</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Abrir</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Gardar</translation>
    </message>
    <message>
        <source>&amp;Rename</source>
        <translation>Muda&amp;r o Nome</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>R&amp;eload</source>
        <translation>R&amp;ecarregar</translation>
    </message>
    <message>
        <source>Sort by &amp;Name</source>
        <translation>Ordenar polo &amp;Nome</translation>
    </message>
    <message>
        <source>Sort by &amp;Size</source>
        <translation>Ordenar polo Tama&amp;ño</translation>
    </message>
    <message>
        <source>Sort by &amp;Date</source>
        <translation>Ordenar pola &amp;Data</translation>
    </message>
    <message>
        <source>&amp;Unsorted</source>
        <translation>&amp;Sen ordenar</translation>
    </message>
    <message>
        <source>Sort</source>
        <translation>Ordenar</translation>
    </message>
    <message>
        <source>Show &amp;hidden files</source>
        <translation>Mostrar os ficheiros &amp;ocultos</translation>
    </message>
    <message>
        <source>the file</source>
        <translation>o ficheiro</translation>
    </message>
    <message>
        <source>the directory</source>
        <translation>o directorio</translation>
    </message>
    <message>
        <source>the symlink</source>
        <translation>o vínculo</translation>
    </message>
    <message>
        <source>Delete %1</source>
        <translation>Eliminar %1</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Are you sure you wish to delete %1 &quot;%2&quot;?&lt;/qt&gt;</source>
        <translation>&lt;qt&gt;Realmente quer eliminar %1 &quot;%2&quot;?&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&amp;Yes</source>
        <translation>&amp;Si</translation>
    </message>
    <message>
        <source>&amp;No</source>
        <translation>&amp;Non</translation>
    </message>
    <message>
        <source>New Folder 1</source>
        <translation>Novo Cartafol 1</translation>
    </message>
    <message>
        <source>New Folder</source>
        <translation>Novo Cartafol</translation>
    </message>
    <message>
        <source>New Folder %1</source>
        <translation>Novo Cartafol %1</translation>
    </message>
    <message>
        <source>Find Directory</source>
        <translation>Procurar Directorio</translation>
    </message>
    <message>
        <source>Directories</source>
        <translation>Directorios</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>Salvar</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Erro</translation>
    </message>
    <message>
        <source>%1
File not found.
Check path and filename.</source>
        <translation>%1
Non se atopou o Ficheiro.
Comprobe a rota e o nome do ficheiro.</translation>
    </message>
    <message>
        <source>All Files (*.*)</source>
        <translation>Todos os Ficheiros (*.*)</translation>
    </message>
    <message>
        <source>Select a Directory</source>
        <translation>Escolla un Directorio</translation>
    </message>
    <message>
        <source>Directory:</source>
        <translation>Directorio:</translation>
    </message>
</context>
<context>
    <name>QFontDialog</name>
    <message>
        <source>&amp;Font</source>
        <translation>&amp;Fonte</translation>
    </message>
    <message>
        <source>Font st&amp;yle</source>
        <translation>Est&amp;ilo da Fonte</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>Tama&amp;ño</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation>Efectos</translation>
    </message>
    <message>
        <source>Stri&amp;keout</source>
        <translation>Tac&amp;hado</translation>
    </message>
    <message>
        <source>&amp;Underline</source>
        <translation>&amp;Subliñado</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation>&amp;Cor</translation>
    </message>
    <message>
        <source>Sample</source>
        <translation>Mostra</translation>
    </message>
    <message>
        <source>Scr&amp;ipt</source>
        <translation>Gu&amp;ión</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>De acordo</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Aplicar</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Fechar</translation>
    </message>
    <message>
        <source>Select Font</source>
        <translation>Escoller Fonte</translation>
    </message>
</context>
<context>
    <name>QLineEdit</name>
    <message>
        <source>Clear</source>
        <translation>Limpar</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>Seleccionalo Todo</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Desfacer</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Refacer</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Recor&amp;tar</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copiar</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Pegar</translation>
    </message>
</context>
<context>
    <name>QMainWindow</name>
    <message>
        <source>Line up</source>
        <translation>Alilñar</translation>
    </message>
    <message>
        <source>Customize...</source>
        <translation>Personalizar...</translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <source>&lt;h3&gt;About Qt&lt;/h3&gt;&lt;p&gt;This program uses Qt version %1.&lt;/p&gt;&lt;p&gt;Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p&gt;&lt;p&gt;Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br&gt;Qt is also available for embedded devices.&lt;/p&gt;&lt;p&gt;Qt is a Trolltech product. See &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt; for more information.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Acerca de Qt&lt;/h3&gt;Este programa usa a versión %1 do Qt.&lt;/p&gt;&lt;p&gt;Qt é un conxunto de ferramentas multiplataforma en C++ para o desenvolvemento de Interfaces de usuario e aplicacións.&lt;/p&gt;&lt;p&gt;Qt fornece portabilidade a partir dun código fonte único para MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, e todas as variantes comerciais principais de UNiX.&lt;br&gt;Qt tamén está disponíbel para dispositivos embebidos.&lt;/p&gt;&lt;p&gt;Qt é un produto da Trolltech. Para máis información, consulte en &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt;.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normal</translation>
    </message>
    <message>
        <source>Importing text</source>
        <translation>Importación de texto</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation>Todos os Formatos Coñecidos</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation>Africaner</translation>
    </message>
    <message>
        <source>Albanian</source>
        <translation>Albanés</translation>
    </message>
    <message>
        <source>Basque</source>
        <translation>Basco</translation>
    </message>
    <message>
        <source>Bulgarian</source>
        <translation>Búlgaro</translation>
    </message>
    <message>
        <source>Brazilian</source>
        <translation>Portugués do Brasil</translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation>Catalán</translation>
    </message>
    <message>
        <source>Chinese</source>
        <translation>Chinés</translation>
    </message>
    <message>
        <source>Croatian</source>
        <translation>Croata</translation>
    </message>
    <message>
        <source>Czech</source>
        <translation>Checo</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation>Dinamarqués</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation>Holandés</translation>
    </message>
    <message>
        <source>English</source>
        <translation>Inglés</translation>
    </message>
    <message>
        <source>English (British)</source>
        <translation>Inglés (Británico)</translation>
    </message>
    <message>
        <source>Esperanto</source>
        <translation>Esperanto</translation>
    </message>
    <message>
        <source>German</source>
        <translation>Alemán</translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation>Finlandés</translation>
    </message>
    <message>
        <source>French</source>
        <translation>Francés</translation>
    </message>
    <message>
        <source>Galician</source>
        <translation>Galego</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation>Grego</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation>Húngaro</translation>
    </message>
    <message>
        <source>Indonesian</source>
        <translation>Indonesio</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation>Italiano</translation>
    </message>
    <message>
        <source>Korean</source>
        <translation>Coreano</translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation>Lituano</translation>
    </message>
    <message>
        <source>Norwegian (Bokmaal)</source>
        <translation>Noruegués (bokmaal)</translation>
    </message>
    <message>
        <source>Norwegian (Nnyorsk)</source>
        <translation>Noruegués (nnyorsk)</translation>
    </message>
    <message>
        <source>Norwegian</source>
        <translation>Noruegués</translation>
    </message>
    <message>
        <source>Polish</source>
        <translation>Polonés</translation>
    </message>
    <message>
        <source>Portuguese (Brazilian)</source>
        <translation type="obsolete">Portugués do Brasil</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation>Ruso</translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation>Sueco</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation>Español</translation>
    </message>
    <message>
        <source>Spanish (Latin)</source>
        <translation>Español (Lationamerica)</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation>Eslovaco</translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation>Esloveno</translation>
    </message>
    <message>
        <source>Serbian</source>
        <translation>Serbio</translation>
    </message>
    <message>
        <source>Turkish</source>
        <translation>Turco</translation>
    </message>
    <message>
        <source>Ukranian</source>
        <translation>Ucraniano</translation>
    </message>
    <message>
        <source>Welsh</source>
        <translation>Galés</translation>
    </message>
    <message>
        <source>Font %1 is broken, discarding it</source>
        <translation>A Fonte %1 está mal; desbótase</translation>
    </message>
    <message>
        <source>Initializing...</source>
        <translation>A inicializar...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="obsolete">Documento</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Fondo</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Advertencia</translation>
    </message>
    <message>
        <source>Do you really want to overwrite the File:
%1 ?</source>
        <translation>Realmente quer sobreescreber o Ficheiro:
%1 ?</translation>
    </message>
    <message>
        <source>page</source>
        <comment>page export</comment>
        <translation>páxina

exportación de páxina</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview</source>
        <translation type="obsolete">Antevisión das &amp;Fontes</translation>
    </message>
    <message>
        <source>&amp;Insert Special</source>
        <translation type="obsolete">&amp;Inserir Especial</translation>
    </message>
    <message>
        <source>New &amp;from Template...</source>
        <translation type="obsolete">Novo a partir dun &amp;Modelo...</translation>
    </message>
    <message>
        <source>Template: </source>
        <translation type="obsolete">Modelo: </translation>
    </message>
    <message>
        <source>Newsletters</source>
        <translation>Boletíns</translation>
    </message>
    <message>
        <source>Brochures</source>
        <translation>Folletos</translation>
    </message>
    <message>
        <source>Catalogs</source>
        <translation>Catálogos</translation>
    </message>
    <message>
        <source>Flyers</source>
        <translation>Panfletos</translation>
    </message>
    <message>
        <source>Signs</source>
        <translation>Sinalización</translation>
    </message>
    <message>
        <source>Cards</source>
        <translation>Cartóns</translation>
    </message>
    <message>
        <source>Letterheads</source>
        <translation>Membretes</translation>
    </message>
    <message>
        <source>Envelopes</source>
        <translation>Sobres</translation>
    </message>
    <message>
        <source>Business Cards</source>
        <translation>Cartóns de negocios</translation>
    </message>
    <message>
        <source>Calendars</source>
        <translation>Calendarios</translation>
    </message>
    <message>
        <source>Advertisements</source>
        <translation>Anuncios</translation>
    </message>
    <message>
        <source>Labels</source>
        <translation>Etiquetas</translation>
    </message>
    <message>
        <source>Menus</source>
        <translation>Menús</translation>
    </message>
    <message>
        <source>Programs</source>
        <translation>Programas</translation>
    </message>
    <message>
        <source>PDF Forms</source>
        <translation>Formularios en PDF</translation>
    </message>
    <message>
        <source>PDF Presentations</source>
        <translation>Presentacións en PDF</translation>
    </message>
    <message>
        <source>Magazines</source>
        <translation>Revistas</translation>
    </message>
    <message>
        <source>Posters</source>
        <translation>Pósters</translation>
    </message>
    <message>
        <source>Announcements</source>
        <translation>Notificacións</translation>
    </message>
    <message>
        <source>Text Documents</source>
        <translation>Documentos de Texto</translation>
    </message>
    <message>
        <source>Folds</source>
        <translation>Trípticos</translation>
    </message>
    <message>
        <source>Media Cases</source>
        <translation>Carátulas</translation>
    </message>
    <message>
        <source>Own Templates</source>
        <translation>Modelos Propios</translation>
    </message>
    <message>
        <source>Save as &amp;Image...</source>
        <translation type="obsolete">Gardar como &amp;Imaxe...</translation>
    </message>
    <message>
        <source>Save as Image</source>
        <translation>Gardar como Imaxe</translation>
    </message>
    <message>
        <source>Error writting the output file(s).</source>
        <translation type="obsolete">Erro ao escribir o(s) ficheiro(s) de saída.</translation>
    </message>
    <message>
        <source>Error writing the output file(s).</source>
        <translation>Erro ao escribir o(s) ficheiro(s) de saída.</translation>
    </message>
    <message>
        <source>Export successful.</source>
        <translation>Exportación realizada.</translation>
    </message>
    <message>
        <source>File exists. Overwrite?</source>
        <translation>Xa existe un ficheiro con ese nome. Sobreescribimos?</translation>
    </message>
    <message>
        <source>exists already. Overwrite?</source>
        <translation>xa existe. Sobreescribimos?</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Non</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>Si</translation>
    </message>
    <message>
        <source>Yes all</source>
        <translation>Si a todo</translation>
    </message>
    <message>
        <source>Print Preview</source>
        <translation type="obsolete">Antevisión da impresión</translation>
    </message>
    <message>
        <source>Print Previe&amp;w</source>
        <translation type="obsolete">Ante&amp;visión da Impresión</translation>
    </message>
    <message>
        <source>Import &amp;EPS/PS...</source>
        <translation type="obsolete">Importar &amp;EPS/PS...</translation>
    </message>
    <message>
        <source>All Supported Formats (*.eps *.EPS *.ps *.PS);;</source>
        <translation>Todos os Formatos Coñecidos (*.eps *.EPS *.ps *.PS);;</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>AbrirAbrir</translation>
    </message>
    <message>
        <source>Save as &amp;Template...</source>
        <translation type="obsolete">Gardar como &amp;Modelo...</translation>
    </message>
    <message>
        <source>Cannot get a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Non se pode procurar unha cor co nome en branco.

erro de python.</translation>
    </message>
    <message>
        <source>Color not found.</source>
        <comment>python error</comment>
        <translation>Non se atopou a cor.</translation>
    </message>
    <message>
        <source>Cannot get a colour with an empty name.</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se pode procurar unha cor co nome en branco.

erro de python.</translation>
    </message>
    <message>
        <source>Color not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se atopou a cor</translation>
    </message>
    <message>
        <source>Cannot change a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Non se pode mudar unha cor co nome en branco.

erro de python.</translation>
    </message>
    <message>
        <source>Color not found in document.</source>
        <comment>python error</comment>
        <translation>Non se atopu a cor no documento.

erro de python.</translation>
    </message>
    <message>
        <source>Color not found in default colors.</source>
        <comment>python error</comment>
        <translation>Non se atopou a cor nas cores predeterminadas.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot create a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Non se pode crear unha cor co nome en branco. 

erro de python.</translation>
    </message>
    <message>
        <source>Cannot delete a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Non se pode eliminar unha cor co nome en branco. 

erro de python.</translation>
    </message>
    <message>
        <source>Cannot replace a color with an empty name.</source>
        <comment>python error</comment>
        <translation>Non se pode substituir unha cor co nome en branco. 

erro de python.</translation>
    </message>
    <message>
        <source>Failed to open document</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se puido abrir o documento</translation>
    </message>
    <message>
        <source>Failed to save document</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se puido salvar o documento</translation>
    </message>
    <message>
        <source>Unit out of range. Use one of the scribus.UNIT_* constants.</source>
        <comment>python error</comment>
        <translation>Unidade fora do rango. Use unha das constantes scribus.UNIT_*.

erro de python.</translation>
    </message>
    <message>
        <source>Color not found - python error</source>
        <comment>python error</comment>
        <translation>Non se atopou a cor - erro de python

erro de python</translation>
    </message>
    <message>
        <source>Target is not an image frame.</source>
        <comment>python error</comment>
        <translation>O obxectivo non é unha moldura de imaxe.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot scale by 0%.</source>
        <comment>python error</comment>
        <translation>Non se pode reducir a un 0%

erro de python.</translation>
    </message>
    <message>
        <source>Specified item not an image frame.</source>
        <comment>python error</comment>
        <translation>O elemento indicado non é unha moldura de imaxe.

erro de python.</translation>
    </message>
    <message>
        <source>Font not found.</source>
        <comment>python error</comment>
        <translation>Non se atopou a fonte.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot render an empty sample.</source>
        <comment>python error</comment>
        <translation>Non se pode exhibir unha mostra baleira.

erro de python.</translation>
    </message>
    <message>
        <source>Unable to save pixmap.</source>
        <comment>scripter error</comment>
        <translation type="obsolete">Non se puido salvar a imaxe.

erro do scripter.</translation>
    </message>
    <message>
        <source>Cannot have an empty layer name.</source>
        <comment>python error</comment>
        <translation>Non se pode ter un nome de capa en branco.

erro de python.</translation>
    </message>
    <message>
        <source>Layer not found.</source>
        <comment>python error</comment>
        <translation>Non se atopou a capa.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot remove the last layer.</source>
        <comment>python error</comment>
        <translation>Non se pode eliminar a última capa.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot create layer without a name.</source>
        <comment>python error</comment>
        <translation>Non se pode crear unha capa sen nome.

erro de python.</translation>
    </message>
    <message>
        <source>An object with the requested name already exists</source>
        <comment>python error</comment>
        <translation type="obsolete">Xa existe un obxecto co nome solicitade.

erro de python</translation>
    </message>
    <message>
        <source>Point list must contain at least two points (four values)</source>
        <comment>python error</comment>
        <translation type="obsolete">A lista de puntos debe conter dous puntos como mínimo (catro valores)

erro de python</translation>
    </message>
    <message>
        <source>Point list must contain an even number of values</source>
        <comment>python error</comment>
        <translation type="obsolete">A lista de puntos debe conter un número par de valores

erro de python</translation>
    </message>
    <message>
        <source>Point list must contain at least three points (six values)</source>
        <comment>python error</comment>
        <translation type="obsolete">A lista de puntos debe conter tres puntos como mínimo (seis valores)

erro de python</translation>
    </message>
    <message>
        <source>Point list must contain at least four points (eight values)</source>
        <comment>python error</comment>
        <translation type="obsolete">A lista de puntos debe conter catro puntos como mínimo (oitovalores)

erro de python</translation>
    </message>
    <message>
        <source>Point list must have a multiple of six values</source>
        <comment>python error</comment>
        <translation type="obsolete">A lista de puntos debe ter un múltiplo de seis valores

erro de python</translation>
    </message>
    <message>
        <source>Object not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se atopou o obxecto

erro de python</translation>
    </message>
    <message>
        <source>Style not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se atopou o estilo

erro de python</translation>
    </message>
    <message>
        <source>Can&apos;t set style on a non-text frame</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se pode asignar o estilo a unha moldura que non sexa de texto

erro de python
</translation>
    </message>
    <message>
        <source>Failed to save EPS</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se puido salvar o EPS

erro de python</translation>
    </message>
    <message>
        <source>Page number out of range</source>
        <comment>python error</comment>
        <translation type="obsolete">Número de páxinas fora de rango

erro de python</translation>
    </message>
    <message>
        <source>argument is not list: must be list of float values</source>
        <comment>python error</comment>
        <translation type="obsolete">o argumento non é unha lista: debe ser unha lista de valores float

erro de python</translation>
    </message>
    <message>
        <source>argument contains non-numeric values: must be list of float values</source>
        <comment>python error</comment>
        <translation type="obsolete">o argumento contén valores non numéricos; debe ser unha lista de valores float

erro de python</translation>
    </message>
    <message>
        <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12</source>
        <comment>python error</comment>
        <translation type="obsolete">Anchura da liña fora de límites, debe ser 0 &lt;= ancho_da_liña &lt;= 12

erro de python</translation>
    </message>
    <message>
        <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100</source>
        <comment>python error</comment>
        <translation type="obsolete">Saturación da liña fora de límites; debe ser 0 &lt;= saturación &lt;= 100

erro de python</translation>
    </message>
    <message>
        <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100</source>
        <comment>python error</comment>
        <translation type="obsolete">Saturación do enchido fora de límites; debe ser 0 &lt;= saturación &lt;= 100

erro de python</translation>
    </message>
    <message>
        <source>Corner radius must be a positive number.</source>
        <comment>python error</comment>
        <translation>A radio da esquina debe ser un número positivo.

erro de python.</translation>
    </message>
    <message>
        <source>Line style not found</source>
        <comment>python error</comment>
        <translation type="obsolete">Non se atopou o estilo de liña

erro de python</translation>
    </message>
    <message>
        <source>Cannot get font size of non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode obter o tamaño de fonte dunha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot get font of non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode obter a fonte dunha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot get text size of non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode obter o tamaño do texto dunha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot get column count of non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se poden contar as columnas nunha moldura que non sexa de texto

erro de python.</translation>
    </message>
    <message>
        <source>Cannot get line space of non-text frame.</source>
        <comment>python error</comment>
        <translation>non se pode obter o interliñado nunha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot get column gap of non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode obter a distancia entre columnas dunha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot get text of non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode obter o texto dunha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot set text of non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode asignar un texto a unha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot insert text into non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode inserir texto unha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Insert index out of bounds.</source>
        <comment>python error</comment>
        <translation>Índice de inserción fora de límites.

erro de python.</translation>
    </message>
    <message>
        <source>Alignment out of range. Use one of the scribus.ALIGN* constants.</source>
        <comment>python error</comment>
        <translation>Aliñamento fora de rango. Utilice unha das constantes scribus.ALIGN*.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot set text alignment on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode obter o aliñamento do texto dunha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Font size out of bounds - must be 1 &lt;= size &lt;= 512.</source>
        <comment>python error</comment>
        <translation>Tamaño de fonte fora de límites: debe ser 1 &lt;= tamaño &lt;= 512.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot set font size on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode asignar o tamaño de fonte dunha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot set font on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode asignar unha fonte a unha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Line space out of bounds, must be &gt;= 0.1.</source>
        <comment>python error</comment>
        <translation>Interliñado fora de límites; debe ser &gt;=0.1.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot set line spacing on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode asignar un interliñado a unha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Column gap out of bounds, must be positive.</source>
        <comment>python error</comment>
        <translation>Distancia entre columnas fora de límites; debe ser positiva.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot set column gap on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode asignar unha distancia entre columnas a unha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Column count out of bounds, must be &gt; 1.</source>
        <comment>python error</comment>
        <translation>Número de columnas fora de límites; debe ser &gt; 1.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot set number of columns on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode asignar un número de columnas a unha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Selection index out of bounds</source>
        <comment>python error</comment>
        <translation>Índice de selección fora de límites.

erro de python</translation>
    </message>
    <message>
        <source>Cannot select text in a non-text frame</source>
        <comment>python error</comment>
        <translation>Non se pode seleccionar texto nunha moldura que non sexa de texto.

erro de python</translation>
    </message>
    <message>
        <source>Cannot delete text from a non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode eliminar texto dunha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot set text fill on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode asignar un enchido de texto a unha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot set text stroke on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode asignar un trazo de texto a unha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot set text shade on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode asignar un matiz de texto a unha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Can only link text frames.</source>
        <comment>python error</comment>
        <translation>Só se poden vincular molduras de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Target frame must be empty.</source>
        <comment>python error</comment>
        <translation>A moldura de destino debe estar baleira.

erro de python.</translation>
    </message>
    <message>
        <source>Target frame links to another frame.</source>
        <comment>python error</comment>
        <translation>A moldura de destino xa está vinculada a outra moldura.

erro de python.</translation>
    </message>
    <message>
        <source>Target frame is linked to by another frame.</source>
        <comment>python error</comment>
        <translation>A moldura de destino xa ten un vínculo desde outra moldura.

erro de python.</translation>
    </message>
    <message>
        <source>Source and target are the same object.</source>
        <comment>python error</comment>
        <translation>A orixe e o destino son o mesmo obxecto.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot unlink a non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode desvincular unha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Object is not a linked text frame, cannot unlink.</source>
        <comment>python error</comment>
        <translation type="obsolete">O obxecto non é unha moldura de texto vinculada; non se pode desvincular.

erro de python.</translation>
    </message>
    <message>
        <source>Object the last frame in a series, cannot unlink. Unlink the previous frame instead.</source>
        <comment>python error</comment>
        <translation type="obsolete">O obxecto é a última moldura dunha serie; non se pode desvincular. Desvincule a moldura anterior en vez desta.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot convert a non-text frame to outlines.</source>
        <comment>python error</comment>
        <translation>Non se pode convertir a siluetas unha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Can&apos;t set bookmark on a non-text frame</source>
        <comment>python error</comment>
        <translation>Non se pode colocar un marcador nunha moldura que non sexa de texto

erro de python</translation>
    </message>
    <message>
        <source>Can&apos;t get info from a non-text frame</source>
        <comment>python error</comment>
        <translation>Non se pode obter información dunha moldura que non sexa de texto

erro de python</translation>
    </message>
    <message>
        <source>Tried to set progress &gt; maximum progress</source>
        <translation type="obsolete">Tentouse asignarlle ao progreso &gt;&gt; máximo progreso</translation>
    </message>
    <message>
        <source>The filename must be a string.</source>
        <comment>python error</comment>
        <translation>O nome de ficheiro debe ser unha cadea.</translation>
    </message>
    <message>
        <source>Cannot delete image type settings.</source>
        <comment>python error</comment>
        <translation>Non se pode eliminar a configuración do tipo de imaxe.

erro de python.</translation>
    </message>
    <message>
        <source>The image type must be a string.</source>
        <comment>python error</comment>
        <translation>O tipo de imaxe debe ser unha cadea.

erro de python.</translation>
    </message>
    <message>
        <source>&apos;allTypes&apos; attribute is READ-ONLY</source>
        <comment>python error</comment>
        <translation>O atributo &quot;allTypes&quot; é de SÓ-LECTURA

erro de python</translation>
    </message>
    <message>
        <source>Failed to export image</source>
        <comment>python error</comment>
        <translation>Non se logrou exportar a imaxe

erro de python</translation>
    </message>
    <message>
        <source>S&amp;cripter Manual...</source>
        <translation type="obsolete">Manual do S&amp;cripter...</translation>
    </message>
    <message>
        <source>Online Reference</source>
        <translation type="obsolete">Referencia en liña</translation>
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
- Many functions will raise a NoDocOpenError if you try to use themwithout a document to operate on.
- If you do not pass a frame name to a function that requires one,the function will use the currently selected frame, if any, orraise a NoValidObjectError if it can&apos;t find anything to operateon.
- Many functions will raise WrongFrameTypeError if you try to use them
on a frame type that they do not make sense with. For example, setting
the text colour on a graphics frame doesn&apos;t make sense, and will result
in this exception being raised.
- Errors resulting from calls to the underlying Python API will be
passed through unaltered. As such, the list of exceptions thrown by
any function as provided here and in its docstring is incomplete.

Details of what exceptions each function may throw are provided on the
function&apos;s documentation.</source>
        <translation type="obsolete">Módulo da interface de Python para Scribus

Este módulo é a interface de Python para Scribus. Fornece funcións
para controlar Scribus e para manipular os obxectos sobre a tela. Cada
función documéntase individualmente máis abaixo.

Certas cousas son iguais na maior parte da interface.

A maioría das funcións operan sobre molduras. As molduras identifícanse polo nome,
unha cadea - non son obxectos reais de Python. Moitas funcións levan un
parámetro opcional (non palabra-chave): un nome de moldura.
Moitas excepcións son tamén comúns á maioría das funcións. Estas non
se documentan actualmente no docstring de cada función.
- Moitas funcións provocarán un NoDocOpenError se tenta usalas sen un documento sobre o que operar.
- Se non lle pasa un nome de moldura a unha función que o requira, a función usará a moldura seleccionada
actualmente, de existir, ou provocará un NoValidObjectError se non pode atopar nada sobre o que operar.
- Moitas funcións provocarán un WrongFrameTypeError se tenta usalas
sobre un tipo de moldura que non teña sentido. Por exemplo, asignarlle unha cor de
texto a unha moldura de gráficos non ten sentido e resultará
na provocación desta excepción.
- Os erros provocados por chamadas á API de Python subxacente pasaránse
sen alteracións. Como tais, a lista de excepcións enviadas por cada función tal e como
se mostra aquí e no seu docstring é incompleta.

Os detalles sobre as excepcións que pode provocar cada función aparecen na
documentación da función.</translation>
    </message>
    <message>
        <source>Custom (optional) configuration: </source>
        <comment>short words plugin</comment>
        <translation>Configuración personalizada (opcional): 

extensión de abreviaturas:</translation>
    </message>
    <message>
        <source>Standard configuration: </source>
        <comment>short words plugin</comment>
        <translation>Configuración Padrón: 

extensión de abreviaturas:</translation>
    </message>
    <message>
        <source>Short &amp;Words...</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">A&amp;breviaturas...

extensión de abreviaturas...</translation>
    </message>
    <message>
        <source>Short Words processing. Wait please...</source>
        <comment>short words plugin</comment>
        <translation>A procesar as Palabras Curtas. Agarde un bocadiño...

extensión palabras curtas...</translation>
    </message>
    <message>
        <source>Short Words processing. Done.</source>
        <comment>short words plugin</comment>
        <translation>Palabras Curtas procesadas. Feito.

extensión palabras curtas.</translation>
    </message>
    <message>
        <source>Save Page as &amp;SVG...</source>
        <translation type="obsolete">Salvar Páxina como &amp;SVG...</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Gardar como</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg *.svgz);;All Files (*)</source>
        <translation>Imaxes SVG (*.svg *.svgz);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>SVG-Images (*.svg);;All Files (*)</source>
        <translation>Imaxes SVG (*.svg);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Import &amp;SVG...</source>
        <translation type="obsolete">Importar &amp;SVG...</translation>
    </message>
    <message>
        <source>Import &amp;OpenOffice.org Draw...</source>
        <translation type="obsolete">Importar do Draw de &amp;OpenOffice.org...</translation>
    </message>
    <message>
        <source>OpenOffice.org Draw (*.sxd);;All Files (*)</source>
        <translation type="obsolete">Draw de OpenOffice.org (*.sxd);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Comma Separated Value Files</source>
        <translation>Ficheiros de Valores Separados por Vírgulas</translation>
    </message>
    <message>
        <source>CSV_data</source>
        <translation>CSV_data</translation>
    </message>
    <message>
        <source>CSV_header</source>
        <translation>CSV_header</translation>
    </message>
    <message>
        <source>HTML Files</source>
        <translation>Ficheiros HTML</translation>
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
Vínculos Externos</translation>
    </message>
    <message>
        <source>OpenDocument Text Documents</source>
        <translation>Documentos de Texto OpenDocument</translation>
    </message>
    <message>
        <source>OpenOffice.org Writer Documents</source>
        <translation>Documentos do Writer de OpenOffice.org</translation>
    </message>
    <message>
        <source>Text Filters</source>
        <translation>Filtros de Texto</translation>
    </message>
    <message>
        <source>Text Files</source>
        <translation>Ficheiros de Texto</translation>
    </message>
    <message>
        <source>Copy #%1 of </source>
        <translation>Copiar nº %1 de </translation>
    </message>
    <message>
        <source>Portuguese</source>
        <translation>Portugués</translation>
    </message>
    <message>
        <source>Portuguese (BR)</source>
        <translation>Portugués do Brasil</translation>
    </message>
    <message>
        <source>Scribus Crash</source>
        <translation>Fallo Xeral do Scribus</translation>
    </message>
    <message>
        <source>Scribus crashes due to Signal #%1</source>
        <translation>Scribus falla debido ao Sinal nº %1</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;De acordo</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalizado</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Páxina</translation>
    </message>
    <message>
        <source>Master Page </source>
        <translation>Páxina Mestra </translation>
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
        <translation>Non se puido abrir o ficheiro de saída %1</translation>
    </message>
    <message>
        <source>Output stream not writeable</source>
        <translation>O fluxo de saída non se pode escribir</translation>
    </message>
    <message>
        <source>Verification of settings failed: %1</source>
        <translation>Fallou a comprobación da configuración: %1</translation>
    </message>
    <message>
        <source>Could not open input file %1</source>
        <translation>Non se puido abrir o ficheiro de entrada %1</translation>
    </message>
    <message>
        <source>Unable to read settings XML:</source>
        <translation>Non se puido ler a configuración XML:</translation>
    </message>
    <message>
        <source>%1 (line %2 col %3)</source>
        <comment>Load PDF settings</comment>
        <translation>%1 (liña %2 col. %3)

Carregar configuración PDF</translation>
    </message>
    <message>
        <source>Unable to read settings XML: %1</source>
        <translation>Imposíbel ler a configuración XML: %1</translation>
    </message>
    <message>
        <source>null root node</source>
        <comment>Load PDF settings</comment>
        <translation>nodo raiz nulo

Carregar configuración PDF</translation>
    </message>
    <message>
        <source>&lt;pdfVersion&gt; invalid</source>
        <comment>Load PDF settings</comment>
        <translation>&lt;pdfVersion&gt; non válida

Carregar configuración PDF</translation>
    </message>
    <message>
        <source>found %1 &lt;%2&gt; nodes, need 1.</source>
        <comment>Load PDF settings</comment>
        <translation>atopáronse %1 &lt;%2&gt; nodos, precísase 1.

Carregar configuración PDF.</translation>
    </message>
    <message>
        <source>unexpected null &lt;%2&gt; node</source>
        <comment>Load PDF settings</comment>
        <translation>nodo nulo &lt;%2&gt; que non se esperaba

Carregar configuración PDF</translation>
    </message>
    <message>
        <source>node &lt;%1&gt; not an element</source>
        <comment>Load PDF settings</comment>
        <translation>o nodo &lt;%1&gt; non é un elemento

Carregar configuración PDF</translation>
    </message>
    <message>
        <source>element &lt;%1&gt; lacks `value&apos; attribute</source>
        <comment>Load PDF settings</comment>
        <translation>ao elemento &lt;%1&gt; fáltalle o atributo &quot;valor&quot;

Carregar configuración PDF</translation>
    </message>
    <message>
        <source>element &lt;%1&gt; value must be `true&apos; or `false&apos;</source>
        <comment>Load PDF settings</comment>
        <translation>o valor do elemento &lt;%1&gt; debe ser &quot;verdadeiro&quot; ou &quot;falso&quot;

Carregar configuración PDF</translation>
    </message>
    <message>
        <source>element &lt;lpiSettingsEntry&gt; lacks `name&apos; attribute</source>
        <comment>Load PDF settings</comment>
        <translation>ao elemento &lt;IpiSettingsEntry&gt; fáltalle o atributo &quot;nome&quot;

Carregar configuración PDF</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Todo</translation>
    </message>
    <message>
        <source>Black</source>
        <translation>Preto</translation>
    </message>
    <message>
        <source>Cyan</source>
        <translation>Cián</translation>
    </message>
    <message>
        <source>Magenta</source>
        <translation>Maxenta</translation>
    </message>
    <message>
        <source>Yellow</source>
        <translation>Amarelo</translation>
    </message>
    <message>
        <source>Freetype2 library not available</source>
        <translation>Non se dispón da libraría Freetype2</translation>
    </message>
    <message>
        <source>Font %1 is broken, no embedding</source>
        <translation>A fonte %1 está mal, non se vai embeber</translation>
    </message>
    <message>
        <source>Font %1 is broken (read stream), no embedding</source>
        <translation>A fonte %1 está mal (fluxo de lectura), non se vai embeber</translation>
    </message>
    <message>
        <source>Font %1 is broken (FreeType2), discarding it</source>
        <translation>A fonte %1 está mal (FreeType2), desbótase</translation>
    </message>
    <message>
        <source>Font %1 is broken (no Face), discarding it</source>
        <translation>A fonte %1 está mal (sen Face), desbótase</translation>
    </message>
    <message>
        <source>Font %1 has broken glyph %2 (charcode %3)</source>
        <translation>A fonte %1 ten mal un glifo %2 (código %3)</translation>
    </message>
    <message>
        <source>Font %1 is broken and will be discarded</source>
        <translation>A fonte %1 está mal e vaise desbotar</translation>
    </message>
    <message>
        <source>Font %1 cannot be read, no embedding</source>
        <translation>A fonte %1 non se pode ler, non se vai embeber</translation>
    </message>
    <message>
        <source>Failed to load font %1 - font type unknown</source>
        <translation>Non se puido carregar a fonte %1 - tipo de fonte descoñecido</translation>
    </message>
    <message>
        <source>Font %1 loaded from %2(%3)</source>
        <translation>Carregouse a fonte %1 desde %2(%3)</translation>
    </message>
    <message>
        <source>Font %1(%2) is duplicate of %3</source>
        <translation>A fonte %1(%2) é un duplicado de %3</translation>
    </message>
    <message>
        <source>Loading font %1 (found using fontconfig)</source>
        <translation>A carregar a fonte %1 (atopada mediante fontconfig)</translation>
    </message>
    <message>
        <source>Font %1 (found using fontconfig) is broken, discarding it</source>
        <translation type="obsolete">A fonte %1 (atopada mediante fontconfig) está mal, desbótase</translation>
    </message>
    <message>
        <source>Failed to load a font - freetype2 couldn&apos;t find the font file</source>
        <translation>Non se puido carregar unha fonte - freetype2 non atopou o ficheiro da fonte</translation>
    </message>
    <message>
        <source>Font %1 is broken (FreeType), discarding it</source>
        <translation>A fonte %1 está mal (FreeType), desbótase</translation>
    </message>
    <message>
        <source>Font %1  has invalid glyph %2 (charcode %3), discarding it</source>
        <translation>A fonte %1  ten un glifo non válido %2 (código %3), desbótase</translation>
    </message>
    <message>
        <source>extracting face %1 from font %2 (offset=%3, nTables=%4)</source>
        <translation>a extrair a face %1 da fonte %2 (offset=%3, nTables=%4)</translation>
    </message>
    <message>
        <source>memcpy header: %1 %2 %3</source>
        <translation>cabezallo memcpy: %1 %2 %3</translation>
    </message>
    <message>
        <source>table &apos;%1&apos;</source>
        <translation>tabela &quot;%1&quot;</translation>
    </message>
    <message>
        <source>memcpy table: %1 %2 %3</source>
        <translation>tabela memcpy: %1 %2 %3</translation>
    </message>
    <message>
        <source>memcpy offset: %1 %2 %3</source>
        <translation>offset memcpy: %1 %2 %3</translation>
    </message>
    <message>
        <source>Scribus Development Version</source>
        <translation>Versión de Desenvolvemento de Scribus</translation>
    </message>
    <message>
        <source>You are running a development version of Scribus 1.3.x. The current document you are working with was originally created in Scribus 1.2.2 or lower. The process of saving will make this file unusable again in Scribus 1.2.2 unless you use File-&gt;Save As. Are you sure you wish to proceed with this operation?</source>
        <translation type="obsolete">Está a executar unha versión de desenvolvemento de Scribus 1.3.x. O documento actual sobre o que traballa creouse orixinalmente con Scribus 1.2.2 ou anterior. O proceso para salvar fará que este ficheiro non se poida volver a utilizar con Scribus 1.2.2 a non ser que utilice Ficheiro-&gt;Gardar Como. Seguro que quer continuar con esta operación?</translation>
    </message>
    <message>
        <source>&amp;Proceed</source>
        <translation type="obsolete">&amp;Continuar</translation>
    </message>
    <message>
        <source>Invalid argument: </source>
        <translation type="obsolete">Argumento non válido: </translation>
    </message>
    <message>
        <source>File %1 does not exist, aborting.</source>
        <translation type="obsolete">O ficheiro %1 non existe; interrompemos.</translation>
    </message>
    <message>
        <source>Usage: scribus [option ... ] [file]</source>
        <translation type="obsolete">Uso: scribus [opción ... ] [ficheiro]</translation>
    </message>
    <message>
        <source>Options:</source>
        <translation type="obsolete">Opcións:</translation>
    </message>
    <message>
        <source>Print help (this message) and exit</source>
        <translation type="obsolete">Imprimir a axuda (esta mensaxe) e sair</translation>
    </message>
    <message>
        <source>Uses xx as shortcut for a language</source>
        <translation type="obsolete">Utiliza xx como atallo dunha lingua</translation>
    </message>
    <message>
        <source>List the currently installed interface languages</source>
        <translation type="obsolete">Listar as interfaces de idioma instaladas actualmente</translation>
    </message>
    <message>
        <source>Show information on the console when fonts are being loaded</source>
        <translation type="obsolete">Mostrar información na consola encanto se carregan as fontes</translation>
    </message>
    <message>
        <source>Do not show the splashscreen on startup</source>
        <translation type="obsolete">Non mostrar a pantalla de inicio</translation>
    </message>
    <message>
        <source>Output version information and exit</source>
        <translation type="obsolete">Mostrar información sobre a versión e sair</translation>
    </message>
    <message>
        <source>Installed interface languages for Scribus are as follows:</source>
        <translation type="obsolete">As interfaces para linguas instaladas para Scribus son as seguintes:</translation>
    </message>
    <message>
        <source>To override the default language choice:</source>
        <translation type="obsolete">Para ultrapasar a escolla de lingua por omisión:</translation>
    </message>
    <message>
        <source>scribus -l xx or scribus --lang xx, where xx is the language of choice.</source>
        <translation type="obsolete">scribus  -l xx ou scribus --lang xx, onde xx é a lingua escollida.</translation>
    </message>
    <message>
        <source>Scribus Version </source>
        <translation type="obsolete">Scribus, Versión</translation>
    </message>
    <message>
        <source>Scribus, Open Source Desktop Publishing</source>
        <translation type="obsolete">Scribus, Publicación Dixital de Código Aberto</translation>
    </message>
    <message>
        <source>---------------------------------------</source>
        <translation type="obsolete">---------------------------------------</translation>
    </message>
    <message>
        <source>Homepage:       http://www.scribus.net </source>
        <translation type="obsolete">Sitio na Web:       http://www.scribus.net</translation>
    </message>
    <message>
        <source>Documentation:  http://docs.scribus.net</source>
        <translation type="obsolete">Documentación:  http://docs.scribus.net</translation>
    </message>
    <message>
        <source>Wiki:           http://wiki.scribus.net</source>
        <translation type="obsolete">Wiki:           http://wiki.scribus.net</translation>
    </message>
    <message>
        <source>Issues:         http://bugs.scribus.net</source>
        <translation type="obsolete">Problemas:         http://bugs.scribus.net</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source> mm</source>
        <translation> mm</translation>
    </message>
    <message>
        <source> in</source>
        <translation> in</translation>
    </message>
    <message>
        <source> p</source>
        <translation> p</translation>
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
        <source>cm</source>
        <translation>cm</translation>
    </message>
    <message>
        <source>c</source>
        <translation>c</translation>
    </message>
    <message>
        <source>Points (pt)</source>
        <translation>Puntos (pt)</translation>
    </message>
    <message>
        <source>Millimeters (mm)</source>
        <translation>Milímetros (mm)</translation>
    </message>
    <message>
        <source>Inches (in)</source>
        <translation>Polgadas (in)</translation>
    </message>
    <message>
        <source>Picas (p)</source>
        <translation>Picas (p)</translation>
    </message>
    <message>
        <source>Centimeters (cm)</source>
        <translation>Centímetros (cm)</translation>
    </message>
    <message>
        <source>Cicero (c)</source>
        <translation>Cícero (c)</translation>
    </message>
    <message>
        <source>File exists</source>
        <translation>O ficheiro xa existe</translation>
    </message>
    <message>
        <source>A file named &apos;%1&apos; already exists.
Do you want to replace it with the file you are saving?</source>
        <translation type="obsolete">Xa existe un ficheiro de nome &quot;%1&quot;.
Quéreo substituir co ficheiro que ten para gardar agora?</translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation>&amp;Substituir</translation>
    </message>
    <message>
        <source>Color Wheel</source>
        <translation>Roda de Cor</translation>
    </message>
    <message>
        <source>Font Preview</source>
        <translation>Antevisión das Fontes</translation>
    </message>
    <message>
        <source>My Plugin</source>
        <translation>A Miña Extensión</translation>
    </message>
    <message>
        <source>New From Template</source>
        <translation>Novo a partir dun Modelo</translation>
    </message>
    <message>
        <source>Document Template: </source>
        <translation>Modelo de Documento: </translation>
    </message>
    <message>
        <source>Export As Image</source>
        <translation>Exportar Como Imaxe</translation>
    </message>
    <message>
        <source>PS/EPS Importer</source>
        <translation>Importador de PS/EPS</translation>
    </message>
    <message>
        <source>Save As Template</source>
        <translation>Salvar como Modelo</translation>
    </message>
    <message>
        <source>Failed to open document.</source>
        <comment>python error</comment>
        <translation>Non se puido abrir o documento.

erro de python.</translation>
    </message>
    <message>
        <source>Failed to save document.</source>
        <comment>python error</comment>
        <translation>Non se puido gardar o documento.

errro de python.</translation>
    </message>
    <message>
        <source>Argument must be page item name, or PyCObject instance</source>
        <translation>O argumento debe ser o nome dun elemento da páxina ou unha instancia PyCObject</translation>
    </message>
    <message>
        <source>Property not found</source>
        <translation>Non se atopou a propriedade</translation>
    </message>
    <message>
        <source>Child not found</source>
        <translation>Non se atopou o filloç</translation>
    </message>
    <message>
        <source>Couldn&apos;t convert result type &apos;%1&apos;.</source>
        <translation>Non se puido convertir o tipo de resultado &quot;%1&quot;.</translation>
    </message>
    <message>
        <source>Property type &apos;%1&apos; not supported</source>
        <translation>Non se acepta o tipo de propriedade &quot;%1&quot;</translation>
    </message>
    <message>
        <source>Couldn&apos;t convert &apos;%1&apos; to property type &apos;%2&apos;</source>
        <translation>Non se puido converter &quot;%1&quot; ao tipo de propriedade &quot;%2&quot;</translation>
    </message>
    <message>
        <source>Types matched, but setting property failed.</source>
        <translation>Os tipos coinciden, mais a asignación de propriedade fallou.</translation>
    </message>
    <message>
        <source>Cannot group less than two items</source>
        <comment>python error</comment>
        <translation>Non se poden agrupar menos de dous elementos

erro de python</translation>
    </message>
    <message>
        <source>Can&apos;t group less than two items</source>
        <comment>python error</comment>
        <translation>Non se pode agrupar menos de dous elementos

erro de python</translation>
    </message>
    <message>
        <source>Need selection or argument list of items to group</source>
        <comment>python error</comment>
        <translation>Precísase dunha selección ou unha lista de argumentos de elementos para agrupar

erro de python</translation>
    </message>
    <message>
        <source>Unable to save pixmap</source>
        <comment>scripter error</comment>
        <translation>Imposíbel gardar a imaxe

erro do scripter</translation>
    </message>
    <message>
        <source>An object with the requested name already exists.</source>
        <comment>python error</comment>
        <translation>Xa existe un obxecto co nome proposto.

erro de python.</translation>
    </message>
    <message>
        <source>Point list must contain at least two points (four values).</source>
        <comment>python error</comment>
        <translation>A lista de puntos debe conter dous pontos cando menos (catro valores).</translation>
    </message>
    <message>
        <source>Point list must contain an even number of values.</source>
        <comment>python error</comment>
        <translation>A lista de puntos debe conter un número par de valores.</translation>
    </message>
    <message>
        <source>Point list must contain at least three points (six values).</source>
        <comment>python error</comment>
        <translation>A lista de puntos debe conter tres puntos cando menos (seis valores).</translation>
    </message>
    <message>
        <source>Point list must contain at least four points (eight values).</source>
        <comment>python error</comment>
        <translation>A lista de puntos debe conter catro valores cando menos (oito valores).</translation>
    </message>
    <message>
        <source>Point list must have a multiple of six values.</source>
        <comment>python error</comment>
        <translation>A lista de puntos debe ter un múltiplo de seis valores.</translation>
    </message>
    <message>
        <source>Object not found.</source>
        <comment>python error</comment>
        <translation>Non se achou o obxecto.

erro de python.</translation>
    </message>
    <message>
        <source>Style not found.</source>
        <comment>python error</comment>
        <translation>Non se achou o estilo.

erro de python.</translation>
    </message>
    <message>
        <source>Cannot set style on a non-text frame.</source>
        <comment>python error</comment>
        <translation>Non se pode asignar un estilo a unha moldura que non sexa de texto.

erro de python.</translation>
    </message>
    <message>
        <source>Failed to save EPS.</source>
        <comment>python error</comment>
        <translation>Non se puido gardar o EPS.

errro de python.</translation>
    </message>
    <message>
        <source>Page number out of range.</source>
        <comment>python error</comment>
        <translation>Número de páxina fora de rango.

erro de python.</translation>
    </message>
    <message>
        <source>argument is not list: must be list of float values.</source>
        <comment>python error</comment>
        <translation>o argumento non é unha lista: debe ser unha lista de valores float.

erro de python.</translation>
    </message>
    <message>
        <source>argument contains non-numeric values: must be list of float values.</source>
        <comment>python error</comment>
        <translation>o argumento contén valores non numéricos: debe ser unha lista de valores float.

erro de python.</translation>
    </message>
    <message>
        <source>argument contains no-numeric values: must be list of float values.</source>
        <comment>python error</comment>
        <translation>o argumento contén valores non numéricos: debe ser unha lista de valores float.

erro de python.</translation>
    </message>
    <message>
        <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12.</source>
        <comment>python error</comment>
        <translation>Anchura da liña fora de limites, debe ser 0 &lt;= anchura_da_liña &lt;= 12.

erro de python.</translation>
    </message>
    <message>
        <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
        <comment>python error</comment>
        <translation>Saturación da liña fora de limites, debe ser 0 &lt;= sombra &lt;= 100.

erro de python.</translation>
    </message>
    <message>
        <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
        <comment>python error</comment>
        <translation>Saturación do recheo fora de limites, debe ser 0 &lt;= saturación &lt;= 100.

erro de python.</translation>
    </message>
    <message>
        <source>Line style not found.</source>
        <comment>python error</comment>
        <translation>Non se achou o estilo da liña.

erro de python.</translation>
    </message>
    <message>
        <source>Object is not a linked text frame, can&apos;t unlink.</source>
        <comment>python error</comment>
        <translation>O obxecto non é unha moldura de texto vinculada, non se pode desvincular.

erro de python.</translation>
    </message>
    <message>
        <source>Object the last frame in a series, can&apos;t unlink. Unlink the previous frame instead.</source>
        <comment>python error</comment>
        <translation>O obxecto é a última moldura dunha serie, non se pode desvincular. Desvincule a moldura anterior.

erro de python.</translation>
    </message>
    <message>
        <source>Only text frames can be checked for overflowing</source>
        <comment>python error</comment>
        <translation>Só se pode comprobar se rebosan as molduras de texto

erro de python</translation>
    </message>
    <message>
        <source>The filename should not be empty string.</source>
        <comment>python error</comment>
        <translation>O nome de ficheiro non pode ser unha cadea baleira.

erro de python.</translation>
    </message>
    <message>
        <source>&amp;Execute Script...</source>
        <translation>&amp;Executar Guión...</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation>Mostrar a &amp;Consola</translation>
    </message>
    <message>
        <source>&amp;About Script...</source>
        <translation>&amp;Acerca de Script...</translation>
    </message>
    <message>
        <source>&amp;Script</source>
        <translation>&amp;Guión</translation>
    </message>
    <message>
        <source>&amp;Scribus Scripts</source>
        <translation>&amp;Guións do Scribus</translation>
    </message>
    <message>
        <source>&amp;Recent Scripts</source>
        <translation>Guións &amp;Recentes</translation>
    </message>
    <message>
        <source>About Script</source>
        <translation>Acerca do Script</translation>
    </message>
    <message>
        <source>Scripter</source>
        <translation>Scripter</translation>
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
        <translation>Módulo da interface de Python para Scribus

Este módulo é a interface de Python para Scribus. Fornece funcións
para controlar Scribus e para manipular os obxectos sobre a tela. Cada
función documéntase individualmente máis abaixo.

Certas cousas son iguais na maior parte da interface.

A maioría das funcións operan sobre molduras. As molduras identifícanse polo nome,
unha cadea - non son obxectos reais de Python. Moitas funcións levan un
parámetro opcional (non palabra-chave): un nome de moldura.
Moitas excepcións son tamén comúns á maioría das funcións. Estas non
se documentan actualmente no docstring de cada función.
- Moitas funcións provocarán un NoDocOpenError se tenta usalas sen un documento sobre o que operar.
- Se non lle pasa un nome de moldura a unha función que o requira, a función usará a moldura seleccionada
actualmente, de existir, ou provocará un NoValidObjectError se non pode atopar nada sobre o que operar.
- Moitas funcións provocarán un WrongFrameTypeError se tenta usalas
sobre un tipo de moldura que non teña sentido. Por exemplo, asignarlle unha cor de
texto a unha moldura de gráficos non ten sentido e resultará
na provocación desta excepción.
- Os erros provocados por chamadas á API de Python subxacente pasaránse
sen alteracións. Como tais, a lista de excepcións enviadas por cada función tal e como
se mostra aquí e no seu docstring é incompleta.

Os detalles sobre as excepcións que pode provocar cada función aparecen na
documentación da función, ainda que, como coa maiora do código en Python esta lista non é exhaustiva
debido a excepcións das funcións chamadas.</translation>
    </message>
    <message>
        <source>Short Words</source>
        <translation>Palabras Curtas</translation>
    </message>
    <message>
        <source>Short Words Manual</source>
        <translation type="obsolete">Manual de Abreviaturas</translation>
    </message>
    <message>
        <source>SVG Export</source>
        <translation>Exportación a SVG</translation>
    </message>
    <message>
        <source>SVG Import</source>
        <translation>Importación de SVG</translation>
    </message>
    <message>
        <source>OpenOffice.org Draw Importer</source>
        <translation>Importador do Draw de OpenOffice.org</translation>
    </message>
    <message>
        <source>Scribus crashes due to the following exception : %1</source>
        <translation>Scribus quebrouse debido á seguinte excepción: %1</translation>
    </message>
    <message>
        <source>Creating Font Cache</source>
        <translation>A crear o Caché das Fontes</translation>
    </message>
    <message>
        <source>New Font found, checking...</source>
        <translation>Atopouse unha Fonte nova, comprobando...</translation>
    </message>
    <message>
        <source>Modified Font found, checking...</source>
        <translation>Atopouse unha Fonte modificada, comprobando...</translation>
    </message>
    <message>
        <source>Reading Font Cache</source>
        <translation>A ler a Caché das Fontes</translation>
    </message>
    <message>
        <source>Writing updated Font Cache</source>
        <translation>A escribir a Caché das Fontes actualizada</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation>A procurar Fontes</translation>
    </message>
    <message>
        <source>You are running a development version of Scribus 1.3.x. The document you are working with was created in Scribus 1.2.3 or lower. The process of saving will make this file unusable again in Scribus 1.2.3 unless you use File-&gt;Save As. Are you sure you wish to proceed with this operation?</source>
        <translation>Está a executar unha versión de desenvolvemento de Scribus 1.3.x. O documento no que está a traballar creouse con Scribus 1.2.3 ou anterior. O proceso de gardado fará que este ficheiro non se poida ler de novo en Scribus 1.2.3 a non ser que utilice Ficheiro-&gt;Gardar Como. Ten a certeza de querer continuar con esta oepración?</translation>
    </message>
    <message>
        <source>The changes to your document have not been saved and you have requested to revert them. Do you wish to continue?</source>
        <translation>As mudanzas realizadas no seu documento non se gardaron e pediu volver atrás. Desexa continuar?</translation>
    </message>
    <message>
        <source>A file named &apos;%1&apos; already exists.&lt;br/&gt;Do you want to replace it with the file you are saving?</source>
        <translation>Xa existe un ficheiro chamado &quot;%1&quot;.&lt;br/&gt;Pretende substituílo co ficheiro que vai gardar?</translation>
    </message>
    <message>
        <source>firstPageOrder is bigger than allowed.</source>
        <comment>python error</comment>
        <translation>ordePrimeiraPáxina é maior do permitido.

erro de python.</translation>
    </message>
    <message>
        <source>Old .sla format support</source>
        <translation>Soporte para o formato .sla antigo</translation>
    </message>
    <message>
        <source>German (Trad.)</source>
        <translation>Alemán (Trad.)</translation>
    </message>
    <message>
        <source>Exporting PostScript File</source>
        <translation>A exportar Ficheiro PostScript</translation>
    </message>
    <message>
        <source>Printing File</source>
        <translation>A imprimir Ficheiro</translation>
    </message>
    <message>
        <source>&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;</source>
        <translation>&lt;p&gt;Está tentando importar máis páxinas das disponíbeis no documento actual a contar desde a páxina actual.&lt;/p&gt;Escolla entre o seguinte:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Crear&lt;/b&gt; as páxinas que faltan&lt;/li&gt;&lt;li&gt;&lt;b&gt;Importar&lt;/b&gt; páxinas até a derradeira páxina&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancelar&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;</translation>
    </message>
    <message>
        <source>C&amp;reate</source>
        <translation>C&amp;rear</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importar</translation>
    </message>
    <message>
        <source>Thai</source>
        <translation>Tailandés</translation>
    </message>
    <message>
        <source>Barcode Generator</source>
        <translation>Xerador de Códigos de Barras</translation>
    </message>
    <message>
        <source>OpenOffice.org Draw (*.sxd *.odg);;All Files (*)</source>
        <translation>OpenOffice.org Draw (*.sxd *.odg);;Todos os ficheiros (*)</translation>
    </message>
    <message>
        <source>Word Documents</source>
        <translation>Documentos de Word</translation>
    </message>
    <message>
        <source>Palm PDB Documents</source>
        <comment>PDB Importer</comment>
        <translation>Documentos PDB de Palm

Importador de PDB</translation>
    </message>
    <message>
        <source>PDB_data</source>
        <comment>PDB Importer</comment>
        <translation>PDB_data

Importador de PDB</translation>
    </message>
    <message>
        <source>PDB Import</source>
        <comment>PDB Importer</comment>
        <translation>Importación de PDB

Importador de PDB</translation>
    </message>
    <message>
        <source>Could not open file %1</source>
        <comment>PDB Importer</comment>
        <translation>Non se puido abrir o ficheiro %1

Importador de PDB</translation>
    </message>
    <message>
        <source>This file is not recognized as a PDB document propably. Please, report this as a bug if you are sure it is one.</source>
        <comment>PDB Importer</comment>
        <translation type="obsolete">Probabelmente non se recoñece este ficheiro como un documento PDB. Informe deste erro se ten a certeza de que o é.</translation>
    </message>
    <message>
        <source>Luxembourgish</source>
        <translation>Luxemburgués</translation>
    </message>
    <message>
        <source>Arabic</source>
        <translation type="unfinished">Árabe</translation>
    </message>
    <message>
        <source>Estonian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Japanese</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Given master page name does not match any existing.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Icelandic</source>
        <translation type="unfinished"></translation>
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
</context>
<context>
    <name>QTextEdit</name>
    <message>
        <source>Clear</source>
        <translation>Limpar</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>Seleccionalo Todo</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Desfacer</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Refacer</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Recor&amp;tar</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copiar</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Pegar</translation>
    </message>
</context>
<context>
    <name>QTitleBar</name>
    <message>
        <source>System Menu</source>
        <translation>Menú de Sistema</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Recoller</translation>
    </message>
    <message>
        <source>Unshade</source>
        <translation>Despregar</translation>
    </message>
    <message>
        <source>Normalize</source>
        <translation>Normalizar</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>Minimizar</translation>
    </message>
    <message>
        <source>Maximize</source>
        <translation>Maximizar</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Fechar</translation>
    </message>
</context>
<context>
    <name>QWorkspace</name>
    <message>
        <source>&amp;Restore</source>
        <translation>&amp;Restaurar</translation>
    </message>
    <message>
        <source>&amp;Move</source>
        <translation>&amp;Mover</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>Tama&amp;ño</translation>
    </message>
    <message>
        <source>Mi&amp;nimize</source>
        <translation>M&amp;inimizar</translation>
    </message>
    <message>
        <source>Ma&amp;ximize</source>
        <translation>Ma&amp;ximizar</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Fechar</translation>
    </message>
    <message>
        <source>Stay on &amp;Top</source>
        <translation>Sempre por &amp;Riba das demáis</translation>
    </message>
    <message>
        <source>Minimize</source>
        <translation>Minimizar</translation>
    </message>
    <message>
        <source>Restore Down</source>
        <translation>Restaurar para Baixo</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Fechar</translation>
    </message>
    <message>
        <source>Sh&amp;ade</source>
        <translation>R&amp;ecoller</translation>
    </message>
    <message>
        <source>%1 - [%2]</source>
        <translation>%1 - [%2]</translation>
    </message>
    <message>
        <source>&amp;Unshade</source>
        <translation>&amp;Despregar</translation>
    </message>
</context>
<context>
    <name>Query</name>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>ReformDoc</name>
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
        <source>Document Setup</source>
        <translation>Cofniguración do Documento</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Tamaño da páxina</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation type="obsolete">Tamaño:</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalizado</translation>
    </message>
    <message>
        <source>Orientation:</source>
        <translation type="obsolete">Orientación:</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Retrato</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Apaisado</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation type="obsolete">Anchura:</translation>
    </message>
    <message>
        <source>Height:</source>
        <translation type="obsolete">Altura:</translation>
    </message>
    <message>
        <source>Margin Guides</source>
        <translation>Guías das Marxes</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>&amp;Superior:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Esquerda:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>&amp;Inferior:</translation>
    </message>
    <message>
        <source>&amp;Right:</source>
        <translation>Di&amp;reita:</translation>
    </message>
    <message>
        <source>&amp;Facing Pages</source>
        <translation type="obsolete">Páxinas &amp;Enfrentadas</translation>
    </message>
    <message>
        <source>Left &amp;Page First</source>
        <translation type="obsolete">A Páxina &amp;Esquerda Primeiro</translation>
    </message>
    <message>
        <source>F&amp;irst Page Number:</source>
        <translation type="obsolete">Pr&amp;imeiro Número de Páxina:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Enable single or spread based layout</source>
        <translation type="obsolete">Permitir a disposición sinxela ou de dobre páxina</translation>
    </message>
    <message>
        <source>Make the first page the left page of the document</source>
        <translation type="obsolete">Facer que a primeira páxina sexa a páxina esquerda do documento</translation>
    </message>
    <message>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation type="obsolete">Distancia entre a guía da marxe superior e o bordo da páxina</translation>
    </message>
    <message>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation type="obsolete">Distancia entre a guía da marxe inferior e o bordo da páxina</translation>
    </message>
    <message>
        <source>Distance between the left margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Distancia entre a guía da marxe esquerda e o bordo da páxina.
Se se escollen Páxinas Enfrentadas, este espazo de marxe pódese ussar para obter as marxes adecuadas para a encuadernación</translation>
    </message>
    <message>
        <source>Distance between the right margin guide and the edge of the page.
If Facing Pages is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="obsolete">Distancia entre a guía da marxe direita e o bordo da páxina.
Se se escollen Páxinas Enfrentadas, este espazo de marxe pódese ussar para obter as marxes adecuadas para a encuadernación</translation>
    </message>
    <message>
        <source>&amp;Inside:</source>
        <translation type="obsolete">&amp;Dentro:</translation>
    </message>
    <message>
        <source>&amp;Outside:</source>
        <translation type="obsolete">&amp;Fora:</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Tamaño:</translation>
    </message>
    <message>
        <source>Orie&amp;ntation:</source>
        <translation>Orie&amp;ntación:</translation>
    </message>
    <message>
        <source>&amp;Width:</source>
        <translation>&amp;Anchura:</translation>
    </message>
    <message>
        <source>&amp;Height:</source>
        <translation>&amp;Altura:</translation>
    </message>
    <message>
        <source>&amp;Unit:</source>
        <translation>&amp;Unidade:</translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="obsolete">Opcións</translation>
    </message>
    <message>
        <source>Apply size settings to all Pages</source>
        <translation type="obsolete">Aplicar a configuración de tamaño a todas as Páxinas</translation>
    </message>
    <message>
        <source>Apply margin settings to all Pages</source>
        <translation type="obsolete">Aplicar a configuración de marxes a todas as Páxinas</translation>
    </message>
    <message>
        <source>Autosave</source>
        <translation>Gardado automático</translation>
    </message>
    <message>
        <source>min</source>
        <translation>min</translation>
    </message>
    <message>
        <source>&amp;Interval:</source>
        <translation>&amp;Intervalo:</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Documento</translation>
    </message>
    <message>
        <source>Document Information</source>
        <translation>Información sobre o Documento</translation>
    </message>
    <message>
        <source>Guides</source>
        <translation>Guías</translation>
    </message>
    <message>
        <source>Page Display</source>
        <translation>Exhibición da Páxina</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Cor:</translation>
    </message>
    <message>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation>Mostrar a Área &amp;Non Imprimíbel na Cor da Marxe</translation>
    </message>
    <message>
        <source>Alt+U</source>
        <translation>Alt+U</translation>
    </message>
    <message>
        <source>Show Pictures</source>
        <translation>Mostrar as Imaxes</translation>
    </message>
    <message>
        <source>Show Text Chains</source>
        <translation>Mostrar as Cadeas de Texto</translation>
    </message>
    <message>
        <source>Show Text Control Characters</source>
        <translation>Mostrar os Caracteres de Control do Texto</translation>
    </message>
    <message>
        <source>Show Frames</source>
        <translation>Mostrar as Molduras</translation>
    </message>
    <message>
        <source>Rulers relative to Page</source>
        <translation>Regras relativas á Páxina</translation>
    </message>
    <message>
        <source>Minimum Scratch Space</source>
        <translation>Espazo de traballo Mínimo</translation>
    </message>
    <message>
        <source>Gaps between Pages</source>
        <translation>Distancia entre as Páxinas</translation>
    </message>
    <message>
        <source>Horizontal:</source>
        <translation>Horizontal:</translation>
    </message>
    <message>
        <source>Vertical:</source>
        <translation>Vertical:</translation>
    </message>
    <message>
        <source>Display</source>
        <translation>Visualización</translation>
    </message>
    <message>
        <source>Typography</source>
        <translation>Tipografía</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation>Ferramentas</translation>
    </message>
    <message>
        <source>Hyphenator</source>
        <translation>Separador de guións</translation>
    </message>
    <message>
        <source>Fonts</source>
        <translation>Fontes</translation>
    </message>
    <message>
        <source>Preflight Verifier</source>
        <translation>Verificador Pré-voo</translation>
    </message>
    <message>
        <source>PDF Export</source>
        <translation>Exportación a PDF</translation>
    </message>
    <message>
        <source>Document Item Attributes</source>
        <translation>Atributos do Elemento Documento</translation>
    </message>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation>Índice e Índices Analíticos</translation>
    </message>
    <message>
        <source>Color Management</source>
        <translation>Xestión da Cor</translation>
    </message>
    <message>
        <source>Enable or disable the display of linked text frames.</source>
        <translation>Activar ou desactivar  mostrar as molduras vinculadas.</translation>
    </message>
    <message>
        <source>Display non-printing characters such as paragraph markers in text frames</source>
        <translation>Mostrar os caracteres non imprimíbeis, tais como marcadores de parágrafo, nas molduras de texto</translation>
    </message>
    <message>
        <source>Turns the display of frames on or off</source>
        <translation>Activa ou desactiva mostrar as molduras</translation>
    </message>
    <message>
        <source>Turns the display of pictures on or off</source>
        <translation>Activa ou desactiva mostrar as imaxes</translation>
    </message>
    <message>
        <source>Color for paper</source>
        <translation>Cor do papel</translation>
    </message>
    <message>
        <source>Mask the area outside the margins in the margin color</source>
        <translation>Mascarar a área por fora das marxes coa cor das marxes</translation>
    </message>
    <message>
        <source>Adjusting Colors</source>
        <translation>A axustar as Cores</translation>
    </message>
    <message>
        <source>Apply size settings to all pages</source>
        <translation>Aplicar a configuración de tamaño a todas as páxinas</translation>
    </message>
    <message>
        <source>Sections</source>
        <translation>Seccións</translation>
    </message>
    <message>
        <source>Apply the page size changes to all existing pages in the document</source>
        <translation>Aplicar as modificacións no tamaño da páxina a todas as páxinas existentes do documento</translation>
    </message>
</context>
<context>
    <name>RunScriptDialog</name>
    <message>
        <source>Python Scripts (*.py);; All Files (*)</source>
        <translation>Guións en Python (*.py);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Run as Extension Script</source>
        <comment>run script dialog</comment>
        <translation>Executar como Guión de Extensión

executar diálogo de guión</translation>
    </message>
</context>
<context>
    <name>SMBase</name>
    <message>
        <source>Style Manager</source>
        <translation>Xestor de Estilos</translation>
    </message>
    <message>
        <source>Column 1</source>
        <translation>Columna 1</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Adicionar</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>C&amp;lone</source>
        <translation>C&amp;lonar</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Nome:</translation>
    </message>
    <message>
        <source>O&amp;K</source>
        <translation>De ac&amp;ordo</translation>
    </message>
    <message>
        <source>Alt+K</source>
        <translation>Alt+K</translation>
    </message>
    <message>
        <source>A&amp;pply</source>
        <translation>&amp;Aplicar</translation>
    </message>
    <message>
        <source>Alt+P</source>
        <translation>Alt+P</translation>
    </message>
    <message>
        <source>Ca&amp;ncel</source>
        <translation>Ca&amp;ncelar</translation>
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
        <translation>Propiedades</translation>
    </message>
    <message>
        <source>Lines</source>
        <translation>Liñas</translation>
    </message>
</context>
<context>
    <name>SToolBAlign</name>
    <message>
        <source>Style Settings</source>
        <translation>Configuración dos Estilos</translation>
    </message>
    <message>
        <source>Style of current paragraph</source>
        <translation>Estilo do parágrafo actual</translation>
    </message>
</context>
<context>
    <name>SToolBColorF</name>
    <message>
        <source>Fill Color Settings</source>
        <translation>Configuración da Cor de Enchido</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengunha</translation>
    </message>
    <message>
        <source>Color of text fill</source>
        <translation>Cor do Enchido de Texto</translation>
    </message>
    <message>
        <source>Saturation of color of text fill</source>
        <translation>Saturación da cor do enchido de texto</translation>
    </message>
</context>
<context>
    <name>SToolBColorS</name>
    <message>
        <source>Stroke Color Settings</source>
        <translation>Configuración da Cor do Trazo</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengunha</translation>
    </message>
    <message>
        <source>Color of text stroke</source>
        <translation>Cor do trazo do texto</translation>
    </message>
    <message>
        <source>Saturation of color of text stroke</source>
        <translation>Saturación da cor do trazo do texto</translation>
    </message>
</context>
<context>
    <name>SToolBFont</name>
    <message>
        <source>Font Settings</source>
        <translation>Configuración das Fontes</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Font of selected text</source>
        <translation>Fonte do texto seleccionado</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Tamaño da Fonte</translation>
    </message>
    <message>
        <source>Scaling width of characters</source>
        <translation>Anchura de ampliación dos caracteres</translation>
    </message>
    <message>
        <source>Scaling height of characters</source>
        <translation>Escala da altura dos caracteres</translation>
    </message>
</context>
<context>
    <name>SToolBStyle</name>
    <message>
        <source>Character Settings</source>
        <translation>Configuración dos caracteres</translation>
    </message>
    <message>
        <source>Tracking:</source>
        <translation type="obsolete">Tracking:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source>Manual Tracking</source>
        <translation>Tracking Manual</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
</context>
<context>
    <name>SVGExportPlugin</name>
    <message>
        <source>Save Page as &amp;SVG...</source>
        <translation>Salvar Páxina como &amp;SVG...</translation>
    </message>
    <message>
        <source>Exports SVG Files</source>
        <translation>Exporta a Ficheiros SVG</translation>
    </message>
    <message>
        <source>Exports the current page into an SVG file.</source>
        <translation>Exporta a páxina actual a un ficheiro SVG.</translation>
    </message>
</context>
<context>
    <name>SVGImportPlugin</name>
    <message>
        <source>Import &amp;SVG...</source>
        <translation>Importar &amp;SVG...</translation>
    </message>
    <message>
        <source>Imports SVG Files</source>
        <translation>Importa Ficheiros SVG</translation>
    </message>
    <message>
        <source>Imports most SVG files into the current document,
converting their vector data into Scribus objects.</source>
        <translation>Importa a maioría dos ficheiros SVG no documento actual,
convertindo os seus datos vectoriais en obxectos de Scribus.</translation>
    </message>
    <message>
        <source>Scalable Vector Graphics</source>
        <translation>Gráficos de Vectores Escalábeis</translation>
    </message>
    <message>
        <source>SVG file contains some unsupported features</source>
        <translation>O ficheiro SVG contén algunhas características non recoñecidas</translation>
    </message>
</context>
<context>
    <name>SWDialog</name>
    <message>
        <source>Short Words</source>
        <comment>short words plugin</comment>
        <translation>Palabras Curtas

Extensión palabras curtas</translation>
    </message>
    <message>
        <source>Apply unbreakable space on:</source>
        <comment>short words plugin</comment>
        <translation>Aplicar un espazo que non se poda rachar en:

extensión palabras curtas:</translation>
    </message>
    <message>
        <source>&amp;Selected frames</source>
        <comment>short words plugin</comment>
        <translation>Molduras e&amp;scollidas

extensión palabras curtas</translation>
    </message>
    <message>
        <source>Active &amp;page</source>
        <comment>short words plugin</comment>
        <translation>&amp;Páxina activa

extensión palabras curtas</translation>
    </message>
    <message>
        <source>&amp;All items</source>
        <comment>short words plugin</comment>
        <translation>&amp;Todos os elementos

extensión palabras curtas</translation>
    </message>
    <message>
        <source>Only selected frames processed.</source>
        <comment>short words plugin</comment>
        <translation>Só procesadas as molduras seleccionadas.

extensión palabras curtas.</translation>
    </message>
    <message>
        <source>Only actual page processed.</source>
        <comment>short words plugin</comment>
        <translation>Só a páxina actual procesada.

extensión palabras curtas.</translation>
    </message>
    <message>
        <source>All items in document processed.</source>
        <comment>short words plugin</comment>
        <translation>Todos os elementos do documento procesados.

extensión palabras curtas.</translation>
    </message>
</context>
<context>
    <name>SWPrefsGui</name>
    <message>
        <source>User settings</source>
        <translation>Configuración do usuario</translation>
    </message>
    <message>
        <source>System wide configuration</source>
        <translation>Configuración do sistema</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation>&amp;Gardar</translation>
    </message>
    <message>
        <source>&amp;Reset</source>
        <translation>Desface&amp;r</translation>
    </message>
    <message>
        <source>Save user configuration</source>
        <translation>Salvar a configuración do usuario</translation>
    </message>
    <message>
        <source>Reload system wide configuration and remove user defined one</source>
        <translation>Recarregar a configuración do sistema e eliminar a definida polo usuario</translation>
    </message>
    <message>
        <source>Edit custom configuration. If you save it, it will be used over system wide configuration</source>
        <translation>Modificar a configuración personalizada. Se a garda, utilizarase por riba da configuración do sistema</translation>
    </message>
    <message>
        <source>Short Words</source>
        <translation>Palabras Curtas</translation>
    </message>
    <message>
        <source>User configuration exists elready. Do you really want to overwrite it?</source>
        <translation>Xa existe unha configuración do sistema. Pretende escribir por riba dela?</translation>
    </message>
    <message>
        <source>Cannot write file %1.</source>
        <translation>Non se puido escribir o ficheiro %1.</translation>
    </message>
    <message>
        <source>User settings saved</source>
        <translation>Gardouse a configuración do usuario</translation>
    </message>
    <message>
        <source>System wide configuration reloaded</source>
        <translation>Recarregouse a configuración do sistema</translation>
    </message>
    <message>
        <source>Cannot open file %1</source>
        <translation>Non se puido abrir o ficheiro %1</translation>
    </message>
</context>
<context>
    <name>SaveAsTemplatePlugin</name>
    <message>
        <source>Save as &amp;Template...</source>
        <translation>Gardar como &amp;Modelo...</translation>
    </message>
    <message>
        <source>Save a document as a template</source>
        <translation>Gardar o documento como modelo</translation>
    </message>
    <message>
        <source>Save a document as a template. Good way to ease the initial work for documents with a constant look</source>
        <translation>Gardar o documento como un modelo. É unha maneira doada de facilitar o traballo inicial en documentos que teñan unha aparencia constante</translation>
    </message>
</context>
<context>
    <name>ScActionPlugin</name>
    <message>
        <source>Could not find target file %1: %2</source>
        <comment>plugins</comment>
        <translation type="obsolete">Non se puido atopar o ficheiro destino %1: %2

extensións</translation>
    </message>
    <message>
        <source>Could not open target file %1: %2</source>
        <comment>plugins</comment>
        <translation type="obsolete">Non se puido abrir o ficheiro destino %1: %2

extensións</translation>
    </message>
</context>
<context>
    <name>ScPlugin</name>
    <message>
        <source>Persistent</source>
        <comment>plugin manager plugin type</comment>
        <translation>Persistente

xestor de extensións tipo de extensións</translation>
    </message>
    <message>
        <source>Import</source>
        <comment>plugin manager plugin type</comment>
        <translation type="obsolete">Importar

xestor de extensións tipo de extensións</translation>
    </message>
    <message>
        <source>Export</source>
        <comment>plugin manager plugin type</comment>
        <translation type="obsolete">Exportar

xestor de extensións tipo de extensións</translation>
    </message>
    <message>
        <source>Action</source>
        <comment>plugin manager plugin type</comment>
        <translation>Acción

xestor de extensións tipo de extensións</translation>
    </message>
    <message>
        <source>Load/Save/Import/Export</source>
        <translation>Carregar/Salvar/Importar/Exportar</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Descoñecido</translation>
    </message>
</context>
<context>
    <name>ScToolBar</name>
    <message>
        <source>Top</source>
        <translation>Superior</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Direita</translation>
    </message>
    <message>
        <source>Bottom</source>
        <translation>Inferior</translation>
    </message>
    <message>
        <source>Left</source>
        <translation>Esquerda</translation>
    </message>
    <message>
        <source>Allow Docking To...</source>
        <translation>Permitir o Acoplamento...</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation>Horizontal</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation>Vertical</translation>
    </message>
    <message>
        <source>Floating Orientation...</source>
        <translation>Orientación flotante...</translation>
    </message>
</context>
<context>
    <name>ScWinPrint</name>
    <message>
        <source>Printing...</source>
        <translation>A Imprimir...</translation>
    </message>
</context>
<context>
    <name>ScriXmlDoc</name>
    <message>
        <source>Copy #%1 of </source>
        <translation>Copiar nº%1 de </translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Fondo</translation>
    </message>
</context>
<context>
    <name>ScribusApp</name>
    <message>
        <source>File</source>
        <translation type="obsolete">Ficheiro</translation>
    </message>
    <message>
        <source>Create a new Document</source>
        <translation type="obsolete">Crear un Documento novo</translation>
    </message>
    <message>
        <source>Open a Document</source>
        <translation type="obsolete">Abrir un Documento</translation>
    </message>
    <message>
        <source>Save the current Document</source>
        <translation type="obsolete">Salvar o Documento actual</translation>
    </message>
    <message>
        <source>Close the current Document</source>
        <translation type="obsolete">Fechar o Documento actual</translation>
    </message>
    <message>
        <source>Print the current Document</source>
        <translation type="obsolete">Imprimir o Documento actual</translation>
    </message>
    <message>
        <source>Save the current Document as PDF</source>
        <translation type="obsolete">Salvar o Documento actual como PDF</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation type="obsolete">A procurar as Fontes</translation>
    </message>
    <message>
        <source>There are no suitable Fonts on your System</source>
        <translation type="obsolete">Non existen Fontes apropiadas no seu Sistema</translation>
    </message>
    <message>
        <source>Exiting now</source>
        <translation type="obsolete">Saindo</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation type="obsolete">Erro Fatal</translation>
    </message>
    <message>
        <source>Font System Initialized</source>
        <translation type="obsolete">Sistema de Fontes inicializado</translation>
    </message>
    <message>
        <source>Smart Hyphen</source>
        <translation type="obsolete">Guión intelixente</translation>
    </message>
    <message>
        <source>Align Left</source>
        <translation type="obsolete">Aliñar á Esquerda</translation>
    </message>
    <message>
        <source>Align Right</source>
        <translation type="obsolete">Aliñar á Direita</translation>
    </message>
    <message>
        <source>Align Center</source>
        <translation type="obsolete">Centrar</translation>
    </message>
    <message>
        <source>Insert Page Number</source>
        <translation type="obsolete">Inserir o Número de Páxina</translation>
    </message>
    <message>
        <source>Attach Text to Path</source>
        <translation type="obsolete">Ligar o Texto ao Trazo</translation>
    </message>
    <message>
        <source>Show Layers</source>
        <translation type="obsolete">Mostrar as Capas</translation>
    </message>
    <message>
        <source>Javascripts...</source>
        <translation type="obsolete">Javascripts...</translation>
    </message>
    <message>
        <source>Undo</source>
        <translation type="obsolete">Desfacer</translation>
    </message>
    <message>
        <source>Show Page Palette</source>
        <translation type="obsolete">Mostrar a Paleta da Páxina</translation>
    </message>
    <message>
        <source>Lock/Unlock</source>
        <translation type="obsolete">Des/Bloquear</translation>
    </message>
    <message>
        <source>Non Breaking Space</source>
        <translation type="obsolete">Espazo que Non Rompe</translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation type="obsolete">Preferencias de Lectura</translation>
    </message>
    <message>
        <source>Getting ICC Profiles</source>
        <translation type="obsolete">Obtendo os Perfís ICC</translation>
    </message>
    <message>
        <source>Init Hyphenator</source>
        <translation type="obsolete">Iniciar o Hyphenator</translation>
    </message>
    <message>
        <source>Setting up Shortcuts</source>
        <translation type="obsolete">A preparar as Abreviaturas</translation>
    </message>
    <message>
        <source>Reading Scrapbook</source>
        <translation type="obsolete">A ler o Porta-retallos</translation>
    </message>
    <message>
        <source>Initializing Plugins</source>
        <translation type="obsolete">A inicializar as Extensións</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="obsolete">&amp;Novo</translation>
    </message>
    <message>
        <source>&amp;Open...</source>
        <translation type="obsolete">&amp;Abrir...</translation>
    </message>
    <message>
        <source>Open &amp;Recent</source>
        <translation type="obsolete">Abrir &amp;Recente</translation>
    </message>
    <message>
        <source>New</source>
        <translation type="obsolete">Novo</translation>
    </message>
    <message>
        <source>Open...</source>
        <translation type="obsolete">Abrir...</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Fechar</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="obsolete">Fechar</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="obsolete">&amp;Gardar</translation>
    </message>
    <message>
        <source>Save</source>
        <translation type="obsolete">Salvar</translation>
    </message>
    <message>
        <source>Save &amp;As...</source>
        <translation type="obsolete">Gardar &amp;Como...</translation>
    </message>
    <message>
        <source>Save as...</source>
        <translation type="obsolete">Gardar Como...</translation>
    </message>
    <message>
        <source>Re&amp;vert to Saved</source>
        <translation type="obsolete">&amp;Volver ao Salvado</translation>
    </message>
    <message>
        <source>Collect for O&amp;utput...</source>
        <translation type="obsolete">Recoller para S&amp;aída...</translation>
    </message>
    <message>
        <source>&amp;Get Text/Picture...</source>
        <translation type="obsolete">&amp;Obter Texto/Imaxe...</translation>
    </message>
    <message>
        <source>Append &amp;Text...</source>
        <translation type="obsolete">Adicionar &amp;Texto...</translation>
    </message>
    <message>
        <source>Import &amp;Page(s)...</source>
        <translation type="obsolete">Importar &amp;Páxina(s)...</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation type="obsolete">&amp;Importar</translation>
    </message>
    <message>
        <source>Save &amp;Text...</source>
        <translation type="obsolete">Salvar &amp;Texto...</translation>
    </message>
    <message>
        <source>Save Page as &amp;EPS...</source>
        <translation type="obsolete">Salvar Páxina como &amp;EPS...</translation>
    </message>
    <message>
        <source>Save as P&amp;DF...</source>
        <translation type="obsolete">Salvar como P&amp;DF...</translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation type="obsolete">E&amp;xportar</translation>
    </message>
    <message>
        <source>Document &amp;Information...</source>
        <translation type="obsolete">&amp;Información sobre o Documento...</translation>
    </message>
    <message>
        <source>Document Info...</source>
        <translation type="obsolete">Información sobre o Documento...</translation>
    </message>
    <message>
        <source>Document &amp;Setup...</source>
        <translation type="obsolete">&amp;Configuración do Documento...</translation>
    </message>
    <message>
        <source>Document Setup...</source>
        <translation type="obsolete">Configuración do Documento...</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation type="obsolete">Im&amp;primir...</translation>
    </message>
    <message>
        <source>Print...</source>
        <translation type="obsolete">Imprimir...</translation>
    </message>
    <message>
        <source>&amp;Quit</source>
        <translation type="obsolete">&amp;Sair</translation>
    </message>
    <message>
        <source>Quit</source>
        <translation type="obsolete">Sair</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation type="obsolete">&amp;Desfacer</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation type="obsolete">Recor&amp;tar</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation type="obsolete">&amp;Copiar</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation type="obsolete">&amp;Pegar</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="obsolete">&amp;Limpar</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation type="obsolete">Seleccion&amp;alo Todo</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation type="obsolete">Recortar</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation type="obsolete">Copiar</translation>
    </message>
    <message>
        <source>Paste</source>
        <translation type="obsolete">Pegar</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation type="obsolete">Limpar</translation>
    </message>
    <message>
        <source>Select all</source>
        <translation type="obsolete">Seleccionalo Todo</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation type="obsolete">Pr&amp;ocurar/Substituir...</translation>
    </message>
    <message>
        <source>C&amp;olors...</source>
        <translation type="obsolete">C&amp;ores...</translation>
    </message>
    <message>
        <source>Colors...</source>
        <translation type="obsolete">Cores...</translation>
    </message>
    <message>
        <source>&amp;Paragraph Styles...</source>
        <translation type="obsolete">Estilos de &amp;Parágrafo...</translation>
    </message>
    <message>
        <source>&amp;Line Styles...</source>
        <translation type="obsolete">Estilos de &amp;Liña...</translation>
    </message>
    <message>
        <source>Styles...</source>
        <translation type="obsolete">Estilos...</translation>
    </message>
    <message>
        <source>&amp;Templates...</source>
        <translation type="obsolete">&amp;Modelos...</translation>
    </message>
    <message>
        <source>Templates...</source>
        <translation type="obsolete">Modelos...</translation>
    </message>
    <message>
        <source>&amp;Javascripts...</source>
        <translation type="obsolete">&amp;Javascripts...</translation>
    </message>
    <message>
        <source>Select New Font</source>
        <translation type="obsolete">Escoller unha Fonte Nova</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation type="obsolete">D&amp;uplicar</translation>
    </message>
    <message>
        <source>Duplicate</source>
        <translation type="obsolete">Duplicar</translation>
    </message>
    <message>
        <source>&amp;Multiple Duplicate</source>
        <translation type="obsolete">Duplicados &amp;Múltiples</translation>
    </message>
    <message>
        <source>Multiple Duplicate</source>
        <translation type="obsolete">Duplicados Múltiples</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="obsolete">&amp;Eliminar</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="obsolete">Eliminar</translation>
    </message>
    <message>
        <source>&amp;Group</source>
        <translation type="obsolete">A&amp;grupar</translation>
    </message>
    <message>
        <source>Group</source>
        <translation type="obsolete">Agrupar</translation>
    </message>
    <message>
        <source>&amp;Ungroup</source>
        <translation type="obsolete">Desa&amp;grupar</translation>
    </message>
    <message>
        <source>Un-group</source>
        <translation type="obsolete">Desagrupar</translation>
    </message>
    <message>
        <source>&amp;Lock</source>
        <translation type="obsolete">B&amp;loquear</translation>
    </message>
    <message>
        <source>Send to &amp;Back</source>
        <translation type="obsolete">Enviar para &amp;Tras</translation>
    </message>
    <message>
        <source>Send to Back</source>
        <translation type="obsolete">Enviar para Tras</translation>
    </message>
    <message>
        <source>Bring to &amp;Front</source>
        <translation type="obsolete">Traer para &amp;Diante</translation>
    </message>
    <message>
        <source>Bring to Front</source>
        <translation type="obsolete">Traer para Diante</translation>
    </message>
    <message>
        <source>&amp;Lower</source>
        <translation type="obsolete">&amp;Baixar</translation>
    </message>
    <message>
        <source>Lower</source>
        <translation type="obsolete">Baixar</translation>
    </message>
    <message>
        <source>&amp;Raise</source>
        <translation type="obsolete">Subi&amp;r</translation>
    </message>
    <message>
        <source>Raise</source>
        <translation type="obsolete">Subir</translation>
    </message>
    <message>
        <source>Distribute/&amp;Align...</source>
        <translation type="obsolete">Distribuir/&amp;Aliñar...</translation>
    </message>
    <message>
        <source>Distribute/Align...</source>
        <translation type="obsolete">Distribuir/Aliñar...</translation>
    </message>
    <message>
        <source>&amp;Edit Shape</source>
        <translation type="obsolete">&amp;Modificar a Forma</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation type="obsolete">&amp;Forma</translation>
    </message>
    <message>
        <source>&amp;Attach Text to Path</source>
        <translation type="obsolete">&amp;Ligar o Texto ao Trazo</translation>
    </message>
    <message>
        <source>&amp;Detach Text from Path</source>
        <translation type="obsolete">&amp;Desligar o Texto do Trazo</translation>
    </message>
    <message>
        <source>&amp;Combine Polygons</source>
        <translation type="obsolete">&amp;Combinar Polígonos</translation>
    </message>
    <message>
        <source>Split &amp;Polygons</source>
        <translation type="obsolete">Partir &amp;Polígonos</translation>
    </message>
    <message>
        <source>C&amp;onvert to Outlines</source>
        <translation type="obsolete">C&amp;onvertir a Siluetas</translation>
    </message>
    <message>
        <source>&amp;Insert...</source>
        <translation type="obsolete">&amp;Inserir...</translation>
    </message>
    <message>
        <source>Insert...</source>
        <translation type="obsolete">Inserir...</translation>
    </message>
    <message>
        <source>&amp;Delete...</source>
        <translation type="obsolete">&amp;Eliminar...</translation>
    </message>
    <message>
        <source>Delete...</source>
        <translation type="obsolete">Eliminar...</translation>
    </message>
    <message>
        <source>&amp;Move...</source>
        <translation type="obsolete">&amp;Mover...</translation>
    </message>
    <message>
        <source>Move...</source>
        <translation type="obsolete">Mover...</translation>
    </message>
    <message>
        <source>&amp;Apply Template...</source>
        <translation type="obsolete">&amp;Aplicar un Modelo...</translation>
    </message>
    <message>
        <source>Apply Template...</source>
        <translation type="obsolete">Aplicar un Modelo...</translation>
    </message>
    <message>
        <source>Manage &amp;Guides...</source>
        <translation type="obsolete">Xerir as &amp;Guías...</translation>
    </message>
    <message>
        <source>Manage Guides...</source>
        <translation type="obsolete">Xerir as Guías...</translation>
    </message>
    <message>
        <source>&amp;Fit in Window</source>
        <translation type="obsolete">&amp;Encaixar na Xanela</translation>
    </message>
    <message>
        <source>Fit in Window</source>
        <translation type="obsolete">Encaixar na Xanela</translation>
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
        <source>&amp;100%</source>
        <translation type="obsolete">&amp;100%</translation>
    </message>
    <message>
        <source>100%</source>
        <translation type="obsolete">100%</translation>
    </message>
    <message>
        <source>200%</source>
        <translation type="obsolete">200%</translation>
    </message>
    <message>
        <source>&amp;Thumbnails</source>
        <translation type="obsolete">&amp;Miniaturas</translation>
    </message>
    <message>
        <source>Thumbnails</source>
        <translation type="obsolete">Miniaturas</translation>
    </message>
    <message>
        <source>Show &amp;Margins</source>
        <translation type="obsolete">Mostrar as &amp;Marxes</translation>
    </message>
    <message>
        <source>Hide Margins</source>
        <translation type="obsolete">Agochar as Marxes</translation>
    </message>
    <message>
        <source>Show &amp;Frames</source>
        <translation type="obsolete">Mostrar as &amp;Molduras</translation>
    </message>
    <message>
        <source>Hide Frames</source>
        <translation type="obsolete">Agochar as Molduras</translation>
    </message>
    <message>
        <source>Show &amp;Images</source>
        <translation type="obsolete">Mostrar as &amp;Imaxes</translation>
    </message>
    <message>
        <source>Hide Images</source>
        <translation type="obsolete">Agochar as Imaxes</translation>
    </message>
    <message>
        <source>Show &amp;Grid</source>
        <translation type="obsolete">Mostrar a &amp;Grella</translation>
    </message>
    <message>
        <source>Show Grid</source>
        <translation type="obsolete">Mostrar a Grella</translation>
    </message>
    <message>
        <source>Show G&amp;uides</source>
        <translation type="obsolete">Mostrar as G&amp;uías</translation>
    </message>
    <message>
        <source>Show &amp;Baseline Grid</source>
        <translation type="obsolete">Mostrar a Grella &amp;Base</translation>
    </message>
    <message>
        <source>Sn&amp;ap to Grid</source>
        <translation type="obsolete">&amp;Agarrar á Grella</translation>
    </message>
    <message>
        <source>Snap to Grid</source>
        <translation type="obsolete">Agarrar á Grella</translation>
    </message>
    <message>
        <source>Sna&amp;p to Guides</source>
        <translation type="obsolete">A&amp;garrarse ás Guías</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation type="obsolete">&amp;Propriedades</translation>
    </message>
    <message>
        <source>Properties</source>
        <translation type="obsolete">Propriedades</translation>
    </message>
    <message>
        <source>&amp;Outline</source>
        <translation type="obsolete">&amp;Esquema</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation type="obsolete">Esquema</translation>
    </message>
    <message>
        <source>&amp;Scrapbook</source>
        <translation type="obsolete">&amp;Porta-retallos</translation>
    </message>
    <message>
        <source>Scrapbook</source>
        <translation type="obsolete">Porta-retallos</translation>
    </message>
    <message>
        <source>&amp;Layers</source>
        <translation type="obsolete">&amp;Capas</translation>
    </message>
    <message>
        <source>P&amp;age Palette</source>
        <translation type="obsolete">Paleta de P&amp;áxinas</translation>
    </message>
    <message>
        <source>&amp;Bookmarks</source>
        <translation type="obsolete">&amp;Marcadores</translation>
    </message>
    <message>
        <source>&amp;Manage Pictures</source>
        <translation type="obsolete">&amp;Xerir as Imaxes</translation>
    </message>
    <message>
        <source>Manage Pictures</source>
        <translation type="obsolete">Xerira as Imaxes</translation>
    </message>
    <message>
        <source>&amp;Hyphenate Text</source>
        <translation type="obsolete">&amp;Cortar as palabras con guións</translation>
    </message>
    <message>
        <source>Hyphenate Text</source>
        <translation type="obsolete">Cortar as palabras con guións</translation>
    </message>
    <message>
        <source>Toolti&amp;ps</source>
        <translation type="obsolete">Su&amp;xestións</translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation type="obsolete">&amp;Ferramentas</translation>
    </message>
    <message>
        <source>P&amp;DF Tools</source>
        <translation type="obsolete">Ferramentas P&amp;DF</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation type="obsolete">Ferramentas</translation>
    </message>
    <message>
        <source>Tooltips</source>
        <translation type="obsolete">Suxestións</translation>
    </message>
    <message>
        <source>P&amp;references...</source>
        <translation type="obsolete">P&amp;referencias...</translation>
    </message>
    <message>
        <source>&amp;Fonts...</source>
        <translation type="obsolete">&amp;Fontes...</translation>
    </message>
    <message>
        <source>Fonts...</source>
        <translation type="obsolete">Fontes...</translation>
    </message>
    <message>
        <source>&amp;Color Management...</source>
        <translation type="obsolete">&amp;Xestión das Cores...</translation>
    </message>
    <message>
        <source>&amp;Hyphenator...</source>
        <translation type="obsolete">&amp;Hyphenator...</translation>
    </message>
    <message>
        <source>&amp;Keyboard Shortcuts...</source>
        <translation type="obsolete">Atallos do &amp;Teclado...</translation>
    </message>
    <message>
        <source>&amp;About Scribus</source>
        <translation type="obsolete">&amp;Acerca do Scribus</translation>
    </message>
    <message>
        <source>About Scribus</source>
        <translation type="obsolete">Acerca do Scribus</translation>
    </message>
    <message>
        <source>About &amp;Qt</source>
        <translation type="obsolete">Acerca do &amp;Qt</translation>
    </message>
    <message>
        <source>About Qt</source>
        <translation type="obsolete">Acerca do Qt</translation>
    </message>
    <message>
        <source>Scribus &amp;Manual...</source>
        <translation type="obsolete">&amp;Manual do Scribus...</translation>
    </message>
    <message>
        <source>Online-Help...</source>
        <translation type="obsolete">Axuda na liña...</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation type="obsolete">&amp;Ficheiro</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="obsolete">&amp;Modificar</translation>
    </message>
    <message>
        <source>St&amp;yle</source>
        <translation type="obsolete">Est&amp;ilo</translation>
    </message>
    <message>
        <source>&amp;Item</source>
        <translation type="obsolete">&amp;Elemento</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation type="obsolete">&amp;Páxina</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation type="obsolete">&amp;Vista</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation type="obsolete">E&amp;xtras</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation type="obsolete">&amp;Configuración</translation>
    </message>
    <message>
        <source>&amp;Windows</source>
        <translation type="obsolete">&amp;Xanelas</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation type="obsolete">&amp;Axuda</translation>
    </message>
    <message>
        <source>&amp;Left</source>
        <translation type="obsolete">&amp;Esquerda</translation>
    </message>
    <message>
        <source>&amp;Center</source>
        <translation type="obsolete">&amp;Centro</translation>
    </message>
    <message>
        <source>&amp;Right</source>
        <translation type="obsolete">Di&amp;reita</translation>
    </message>
    <message>
        <source>&amp;Block</source>
        <translation type="obsolete">B&amp;loquear</translation>
    </message>
    <message>
        <source>&amp;Forced</source>
        <translation type="obsolete">&amp;Forzado</translation>
    </message>
    <message>
        <source>&amp;Other...</source>
        <translation type="obsolete">&amp;Outra...</translation>
    </message>
    <message>
        <source> pt</source>
        <translation type="obsolete"> pt</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normal</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation type="obsolete">Subliñado</translation>
    </message>
    <message>
        <source>Strikethru</source>
        <translation type="obsolete">Tachado</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation type="obsolete">Versalitas</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation type="obsolete">Superíndice</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation type="obsolete">Subíndice</translation>
    </message>
    <message>
        <source>Outlined</source>
        <translation type="obsolete">Contorno</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation type="obsolete">Posición X:</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation type="obsolete">Posición Y:</translation>
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
        <source>Ready</source>
        <translation type="obsolete">Preparado</translation>
    </message>
    <message>
        <source>&amp;Cascade</source>
        <translation type="obsolete">&amp;Cascada</translation>
    </message>
    <message>
        <source>&amp;Tile</source>
        <translation type="obsolete">&amp;Mosaico</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengunha</translation>
    </message>
    <message>
        <source>Get Text/Picture...</source>
        <translation type="obsolete">Obter Texto/Imaxe...</translation>
    </message>
    <message>
        <source>Get Picture...</source>
        <translation type="obsolete">Obter Imaxe...</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation type="obsolete">&amp;Cor</translation>
    </message>
    <message>
        <source>&amp;Invert</source>
        <translation type="obsolete">&amp;Invertir</translation>
    </message>
    <message>
        <source>&amp;Get Text...</source>
        <translation type="obsolete">&amp;Obter Texto...</translation>
    </message>
    <message>
        <source>&amp;Font</source>
        <translation type="obsolete">&amp;Fonte</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation type="obsolete">Tama&amp;ño</translation>
    </message>
    <message>
        <source>&amp;Effects</source>
        <translation type="obsolete">&amp;Efectos</translation>
    </message>
    <message>
        <source>&amp;Alignment</source>
        <translation type="obsolete">&amp;Aliñamento</translation>
    </message>
    <message>
        <source>&amp;Shade</source>
        <translation type="obsolete">&amp;Saturación</translation>
    </message>
    <message>
        <source>&amp;Tabulators...</source>
        <translation type="obsolete">T&amp;abuladores...</translation>
    </message>
    <message>
        <source>Get Text...</source>
        <translation type="obsolete">Obter Texto...</translation>
    </message>
    <message>
        <source>Font</source>
        <translation type="obsolete">Fonte</translation>
    </message>
    <message>
        <source>Size</source>
        <translation type="obsolete">Tamaño</translation>
    </message>
    <message>
        <source>Style</source>
        <translation type="obsolete">Estilo</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="obsolete">Cor</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation type="obsolete">Saturación</translation>
    </message>
    <message>
        <source>Un&amp;lock</source>
        <translation type="obsolete">Desb&amp;loquear</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="obsolete">Abrir</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="obsolete">Documentos (*.sla *.sla.gz *.scd *.scd.gz);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation type="obsolete">Documentos (*.sla *.scd);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Importing Pages...</source>
        <translation type="obsolete">A Importar Páxina(s)...</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation type="obsolete">Importar Páxina(s)</translation>
    </message>
    <message>
        <source>&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</source>
        <translation type="obsolete">&lt;p&gt;Estás tentando importar máis páxinas das que están disponíbeis no documento actual contando a partir da páxina activa.&lt;/p&gt;Escolle unha das seguintes:
&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Crear&lt;/b&gt; as páxinas que faltan&lt;/lil&gt;&lt;li&gt;&lt;b&gt;Importar&lt;/b&gt; páxinas até a derradeira páxina&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancelar&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;&lt;br&gt;</translation>
    </message>
    <message>
        <source>Create</source>
        <translation type="obsolete">Crear</translation>
    </message>
    <message>
        <source>Import</source>
        <translation type="obsolete">Importar</translation>
    </message>
    <message>
        <source>Import done</source>
        <translation type="obsolete">Importado</translation>
    </message>
    <message>
        <source>Found nothing to import</source>
        <translation type="obsolete">Non se atopou nada que importar</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>File %1 is not in Scribus format</source>
        <translation type="obsolete">O Ficheiro %1 non está no formato de Scribus</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">De acordo</translation>
    </message>
    <message>
        <source>Loading...</source>
        <translation type="obsolete">A carregar...</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation type="obsolete">Todos os Formatos Coñecidos</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation type="obsolete">Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Can&apos;t write the File: 
%1</source>
        <translation type="obsolete">Non se puido escribir o Ficheiro:
%1</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation type="obsolete">Gardar como</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</source>
        <translation type="obsolete">Documentos (*.sla *.sla.gz *.scd *.scd.gz);;Todos os ficheiros (*)</translation>
    </message>
    <message>
        <source>Saving...</source>
        <translation type="obsolete">A salvar...</translation>
    </message>
    <message>
        <source>Printing...</source>
        <translation type="obsolete">A Imprimir...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation type="obsolete">Documento</translation>
    </message>
    <message>
        <source>Printing failed!</source>
        <translation type="obsolete">Non se puido Imprimir!</translation>
    </message>
    <message>
        <source>Scribus Manual</source>
        <translation type="obsolete">Manual do Scribus</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation type="obsolete">Ficheiros de Texto (*.txt);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation type="obsolete">&amp;Tamaño:</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation type="obsolete">&amp;Saturación:</translation>
    </message>
    <message>
        <source>Hide Baseline Grid</source>
        <translation type="obsolete">Agochar a Grella de Base</translation>
    </message>
    <message>
        <source>Show Baseline Grid</source>
        <translation type="obsolete">Mostrar a Grella de Base</translation>
    </message>
    <message>
        <source>The following Programs are missing:</source>
        <translation type="obsolete">Faltan os Programas seguintes:</translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS Images</source>
        <translation type="obsolete">Ghostscript: Non pode usar Imaxes EPS</translation>
    </message>
    <message>
        <source>All</source>
        <translation type="obsolete">Todo</translation>
    </message>
    <message>
        <source>EPS-Files (*.eps);;All Files (*)</source>
        <translation type="obsolete">Ficheiros EPS (*.eps);;Todos os Ficheiros (*)</translation>
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
        <source>Some Objects are locked.</source>
        <translation type="obsolete">Algúns Obxectos están bloqueados.</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Cancelar</translation>
    </message>
    <message>
        <source>Lock all</source>
        <translation type="obsolete">Bloquealo todo</translation>
    </message>
    <message>
        <source>Unlock all</source>
        <translation type="obsolete">Desbloquealo todo</translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation type="obsolete">Desbloquear</translation>
    </message>
    <message>
        <source>Lock</source>
        <translation type="obsolete">Bloquear</translation>
    </message>
    <message>
        <source>Loading:</source>
        <translation type="obsolete">A carregar:</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Color management is supported but can not currently be enabled. Make sure you have ICC color profiles installed and that the profile path in the preferences points to where they&apos;re installed.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;A xestión da cor é posíbel pero non está habilitada agora mesmo. Asegúrese de ter instalados os perfís de cor ICC e de que a rota aos perfís nas Preferencias apunta para onde están instalados.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Color management is not supported by this Scribus build (not compiled in).&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;A xestión da cor non é posíbel nesta edición do Scribus (non se compilou con ela).&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Adjusting Colors</source>
        <translation type="obsolete">A axustar as Cores</translation>
    </message>
    <message>
        <source>&amp;Undo Delete Object</source>
        <translation type="obsolete">&amp;Desfacer a Eliminación do Obxecto</translation>
    </message>
    <message>
        <source>&amp;Undo Object Move</source>
        <translation type="obsolete">&amp;Desfacer Mover Obxecto</translation>
    </message>
    <message>
        <source>&amp;Undo Object Change</source>
        <translation type="obsolete">&amp;Desfacer a Modificación do Obxecto</translation>
    </message>
    <message>
        <source>Croatian</source>
        <translation type="obsolete">Croata</translation>
    </message>
    <message>
        <source>German</source>
        <translation type="obsolete">Alemán</translation>
    </message>
    <message>
        <source>Polish</source>
        <translation type="obsolete">Polonés</translation>
    </message>
    <message>
        <source>English</source>
        <translation type="obsolete">Inglés</translation>
    </message>
    <message>
        <source>Spanish</source>
        <translation type="obsolete">Español</translation>
    </message>
    <message>
        <source>Italian</source>
        <translation type="obsolete">Italiano</translation>
    </message>
    <message>
        <source>French</source>
        <translation type="obsolete">Francés</translation>
    </message>
    <message>
        <source>Russian</source>
        <translation type="obsolete">Ruso</translation>
    </message>
    <message>
        <source>Danish</source>
        <translation type="obsolete">Dinamarqués</translation>
    </message>
    <message>
        <source>Slovak</source>
        <translation type="obsolete">Eslovaco</translation>
    </message>
    <message>
        <source>Hungarian</source>
        <translation type="obsolete">Húngaro</translation>
    </message>
    <message>
        <source>Czech</source>
        <translation type="obsolete">Checo</translation>
    </message>
    <message>
        <source>Dutch</source>
        <translation type="obsolete">Holandés</translation>
    </message>
    <message>
        <source>Portuguese</source>
        <translation type="obsolete">Portugués</translation>
    </message>
    <message>
        <source>Portuguese (BR)</source>
        <translation type="obsolete">Portugués do Brasil</translation>
    </message>
    <message>
        <source>Ukrainian</source>
        <translation type="obsolete">Ucraniano</translation>
    </message>
    <message>
        <source>Greek</source>
        <translation type="obsolete">Grego</translation>
    </message>
    <message>
        <source>Catalan</source>
        <translation type="obsolete">Catalán</translation>
    </message>
    <message>
        <source>Finnish</source>
        <translation type="obsolete">Finlandés</translation>
    </message>
    <message>
        <source>Irish</source>
        <translation type="obsolete">Irlandés</translation>
    </message>
    <message>
        <source>Lithuanian</source>
        <translation type="obsolete">Lituano</translation>
    </message>
    <message>
        <source>Swedish</source>
        <translation type="obsolete">Sueco</translation>
    </message>
    <message>
        <source>Slovenian</source>
        <translation type="obsolete">Esloveno</translation>
    </message>
    <message>
        <source>Afrikaans</source>
        <translation type="obsolete">Africaner</translation>
    </message>
    <message>
        <source>Choose a Directory</source>
        <translation type="obsolete">Escolla un Directorio</translation>
    </message>
    <message>
        <source>Invert</source>
        <translation type="obsolete">Invertir</translation>
    </message>
    <message>
        <source>Scribus Crash</source>
        <translation type="obsolete">Fallo Xeral do Scribus</translation>
    </message>
    <message>
        <source>Scribus crashes due to Signal #%1</source>
        <translation type="obsolete">Scribus falla debido ao Sinal nº%1</translation>
    </message>
    <message>
        <source>Initializing Keyboard Shortcuts</source>
        <translation type="obsolete">Dispoñendo os Atallos de Teclado</translation>
    </message>
    <message>
        <source>Initializing Story Editor</source>
        <translation type="obsolete">Iniciando o Editor de Artigos</translation>
    </message>
    <message>
        <source>Reading ICC Profiles</source>
        <translation type="obsolete">A Ler os Perfís ICC</translation>
    </message>
    <message>
        <source>Initializing Hyphenator</source>
        <translation type="obsolete">A iniciar o Separador de Guións</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation type="obsolete">Modificar</translation>
    </message>
    <message>
        <source>There are no fonts found on your system.</source>
        <translation type="obsolete">Non se atoparon fontes neste sistema.</translation>
    </message>
    <message>
        <source>Exiting now.</source>
        <translation type="obsolete">A sair agora.</translation>
    </message>
    <message>
        <source>Preview Settings</source>
        <translation type="obsolete">Configuración da Antevisión</translation>
    </message>
    <message>
        <source>Level</source>
        <translation type="obsolete">Nível</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation type="obsolete">Enviar para &amp;Capa</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation type="obsolete">Opcións do &amp;PDF</translation>
    </message>
    <message>
        <source>C&amp;onvert To</source>
        <translation type="obsolete">C&amp;onvertir Para</translation>
    </message>
    <message>
        <source>I&amp;nsert</source>
        <translation type="obsolete">I&amp;nserir</translation>
    </message>
    <message>
        <source>Character</source>
        <translation type="obsolete">Carácter</translation>
    </message>
    <message>
        <source>Quote</source>
        <translation type="obsolete">Aspa</translation>
    </message>
    <message>
        <source>Space</source>
        <translation type="obsolete">Espazo</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;</source>
        <translation type="obsolete">Documentos (*.sla *.sla.gz *.scd *.scd.gz);;</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;</source>
        <translation type="obsolete">Documentos (*.sla *.scd);;</translation>
    </message>
    <message>
        <source>File %1 is not in an acceptable format</source>
        <translation type="obsolete">O ficheiro %1 non está nun formato aceptábel</translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation type="obsolete">PostScript</translation>
    </message>
    <message>
        <source>Some fonts used by this document have been substituted:</source>
        <translation type="obsolete">Subsituíronse algunhas das fontes utilizadas neste documento:</translation>
    </message>
    <message>
        <source> was replaced by: </source>
        <translation type="obsolete"> substituíuse por: </translation>
    </message>
    <message>
        <source>Some ICC profiles used by this document are not installed:</source>
        <translation type="obsolete">Non están instalados algúns perfís ICC utilizados por este documento:</translation>
    </message>
    <message>
        <source>(converted)</source>
        <translation type="obsolete">(convertido)</translation>
    </message>
    <message>
        <source>Cannot write the file: 
%1</source>
        <translation type="obsolete">Non se pode escribir o ficheiro: 
%1</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation type="obsolete">Gardar como</translation>
    </message>
    <message>
        <source>Scribus has detected some errors.
Consider using the Pre-flight Checker to correct them</source>
        <translation type="obsolete">Scribus detectou algúns erros.
Considere utilizar o Comprobador Pré-voo para corrixilos</translation>
    </message>
    <message>
        <source>&amp;Abort</source>
        <translation type="obsolete">P&amp;arar</translation>
    </message>
    <message>
        <source>&amp;Ignore</source>
        <translation type="obsolete">&amp;Ignorar</translation>
    </message>
    <message>
        <source>Cannot Cut In-Use Item</source>
        <translation type="obsolete">Non se pode Recortar un Elemento en Uso</translation>
    </message>
    <message>
        <source>The item %1 is currently being edited by Story Editor. The cut operation will be cancelled</source>
        <translation type="obsolete">O elemento %1 está a ser modificado no Editor de Artigos. Cancelarase a operación de recordado</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="obsolete">Nome:</translation>
    </message>
    <message>
        <source>New Master Page</source>
        <translation type="obsolete">Páxina Mestra Nova</translation>
    </message>
    <message>
        <source>The following programs are missing:</source>
        <translation type="obsolete">Faltan os programas seguintes:</translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS images or Print Preview</source>
        <translation type="obsolete">Ghostscript: Non se poden utilizar imaxes EPS na Antevisión da Impresión</translation>
    </message>
    <message>
        <source>Scribus detected some errors.
Consider using the Preflight Verifier  to correct them.</source>
        <translation type="obsolete">Scribus detectou algúns erros.
Considere utilizar o Comprobador Pré-voo para corrixilos.</translation>
    </message>
    <message>
        <source>EPS Files (*.eps);;All Files (*)</source>
        <translation type="obsolete">Ficheiros EPS (*.eps);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Detected some errors.
Consider using the Preflight Verifier to correct them</source>
        <translation type="obsolete">Detectáronse algúns erros
Considere utilizar o Comprobador Pré-voo para corrixilos</translation>
    </message>
    <message>
        <source>-Page%1</source>
        <translation type="obsolete">-Páxina%1</translation>
    </message>
    <message>
        <source>Some objects are locked.</source>
        <translation type="obsolete">Algúns obxectos están bloqueados.</translation>
    </message>
    <message>
        <source>&amp;Lock All</source>
        <translation type="obsolete">B&amp;loquealo Todo</translation>
    </message>
    <message>
        <source>&amp;Unlock All</source>
        <translation type="obsolete">&amp;Desbloquealo Todo</translation>
    </message>
    <message>
        <source>Bulgarian</source>
        <translation type="obsolete">Búlgaro</translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="obsolete">Información</translation>
    </message>
    <message>
        <source>The program %1 is already running!</source>
        <translation type="obsolete">Xa está a correr o programa %1!</translation>
    </message>
    <message>
        <source>The program %1 is missing!</source>
        <translation type="obsolete">Falta o programa %1!</translation>
    </message>
    <message>
        <source>The selected color does not exist in the document&apos;s color set. Please enter a name for this new color.</source>
        <translation type="obsolete">A cor seleccionada non existe no conxunto de cores do documento. Introduza outro nome para esta cor nova.</translation>
    </message>
    <message>
        <source>Color Not Found</source>
        <translation type="obsolete">Non se Atopou a Cor</translation>
    </message>
    <message>
        <source>The name you have selected already exists. Please enter a different name for this new color.</source>
        <translation type="obsolete">O nome escollido xa existe. Introduza un nome diferente para esta cor nova.</translation>
    </message>
    <message>
        <source>&amp;Level</source>
        <translation type="obsolete">&amp;Nível</translation>
    </message>
    <message>
        <source>Send to Layer</source>
        <translation type="obsolete">Enviar para Capa</translation>
    </message>
    <message>
        <source>Previe&amp;w Settings</source>
        <translation type="obsolete">Con&amp;figuración da Antevisión</translation>
    </message>
    <message>
        <source>Convert Page to Master Page</source>
        <translation type="obsolete">Converter Páxina a Páxina Mestra</translation>
    </message>
</context>
<context>
    <name>ScribusColorList</name>
    <message>
        <source>Sample</source>
        <translation type="obsolete">Mostra</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="obsolete">Cor</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengunha</translation>
    </message>
    <message>
        <source>Document Colors</source>
        <translation>Cores do Documento</translation>
    </message>
</context>
<context>
    <name>ScribusDoc</name>
    <message>
        <source>Document</source>
        <translation>Documento</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Fondo</translation>
    </message>
    <message>
        <source>New Layer</source>
        <translation>Capa Nova</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Do you really want to clear all your text?</source>
        <translation>Realmente pretende eliminar todo o texto?</translation>
    </message>
    <message>
        <source>Cannot Delete In-Use Item</source>
        <translation>Non se pode Eliminar o Elemento en Uso</translation>
    </message>
    <message>
        <source>The item %1 is currently being edited by Story Editor. The delete operation will be cancelled</source>
        <translation>O elemento %1 está a ser modificado no Editor de Artigos. Cancelarase a operación de eliminación</translation>
    </message>
    <message>
        <source>An error occurred while opening ICC profiles, color management is not enabled.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusMainWindow</name>
    <message>
        <source>Initializing Plugins</source>
        <translation>A inicializar as Extensións</translation>
    </message>
    <message>
        <source>Initializing Keyboard Shortcuts</source>
        <translation>A inicializar os Atallos de Teclado</translation>
    </message>
    <message>
        <source>Reading Preferences</source>
        <translation>A ler as Preferencias</translation>
    </message>
    <message>
        <source>Initializing Story Editor</source>
        <translation>A iniciar o Editor de Artigos</translation>
    </message>
    <message>
        <source>Reading ICC Profiles</source>
        <translation>A Ler os Perfís ICC</translation>
    </message>
    <message>
        <source>Initializing Hyphenator</source>
        <translation>A iniciar o Separador de Guións</translation>
    </message>
    <message>
        <source>Reading Scrapbook</source>
        <translation>A ler o Porta-retallos</translation>
    </message>
    <message>
        <source>Setting up Shortcuts</source>
        <translation>A preparar os Atallos</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Ficheiro</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>Modificar</translation>
    </message>
    <message>
        <source>Searching for Fonts</source>
        <translation>A procurar as Fontes</translation>
    </message>
    <message>
        <source>There are no fonts found on your system.</source>
        <translation>Non se atoparon fontes neste sistema.</translation>
    </message>
    <message>
        <source>Exiting now.</source>
        <translation>A sair agora.</translation>
    </message>
    <message>
        <source>Fatal Error</source>
        <translation>Erro Fatal</translation>
    </message>
    <message>
        <source>Font System Initialized</source>
        <translation>Sistema de Fontes inicializado</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Ficheiro</translation>
    </message>
    <message>
        <source>Open &amp;Recent</source>
        <translation>Abrir &amp;Recente</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importar</translation>
    </message>
    <message>
        <source>&amp;Export</source>
        <translation>E&amp;xportar</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Modificar</translation>
    </message>
    <message>
        <source>St&amp;yle</source>
        <translation>Est&amp;ilo</translation>
    </message>
    <message>
        <source>&amp;Color</source>
        <translation>&amp;Cor</translation>
    </message>
    <message>
        <source>&amp;Size</source>
        <translation>Tama&amp;ño</translation>
    </message>
    <message>
        <source>&amp;Shade</source>
        <translation>&amp;Saturación</translation>
    </message>
    <message>
        <source>&amp;Font</source>
        <translation>&amp;Fonte</translation>
    </message>
    <message>
        <source>&amp;Effects</source>
        <translation>&amp;Efectos</translation>
    </message>
    <message>
        <source>&amp;Item</source>
        <translation>&amp;Elemento</translation>
    </message>
    <message>
        <source>Preview Settings</source>
        <translation>Configuración da Antevisión</translation>
    </message>
    <message>
        <source>Level</source>
        <translation>Nível</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation>Enviar para &amp;Capa</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation>Opcións do &amp;PDF</translation>
    </message>
    <message>
        <source>&amp;Shape</source>
        <translation>&amp;Forma</translation>
    </message>
    <message>
        <source>C&amp;onvert To</source>
        <translation>C&amp;onvertir En</translation>
    </message>
    <message>
        <source>I&amp;nsert</source>
        <translation>I&amp;nserir</translation>
    </message>
    <message>
        <source>Character</source>
        <translation>Carácter</translation>
    </message>
    <message>
        <source>Quote</source>
        <translation>Aspa</translation>
    </message>
    <message>
        <source>Space</source>
        <translation>Espazo</translation>
    </message>
    <message>
        <source>&amp;Page</source>
        <translation>&amp;Páxina</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>&amp;Vista</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation>E&amp;xtras</translation>
    </message>
    <message>
        <source>&amp;Windows</source>
        <translation>&amp;Xanelas</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;Axuda</translation>
    </message>
    <message>
        <source>&amp;Alignment</source>
        <translation>&amp;Aliñamento</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation>Preparado</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Importing Pages...</source>
        <translation>A Importar Páxina(s)...</translation>
    </message>
    <message>
        <source>Import Page(s)</source>
        <translation>Importar Páxina(s)</translation>
    </message>
    <message>
        <source>Import done</source>
        <translation>Importado</translation>
    </message>
    <message>
        <source>Found nothing to import</source>
        <translation>Non se atopou nada que importar</translation>
    </message>
    <message>
        <source>File %1 is not in an acceptable format</source>
        <translation>O ficheiro %1 non está nun formato aceptábel</translation>
    </message>
    <message>
        <source>Loading...</source>
        <translation>A carregar...</translation>
    </message>
    <message>
        <source>PostScript</source>
        <translation>PostScript</translation>
    </message>
    <message>
        <source>Some ICC profiles used by this document are not installed:</source>
        <translation>Non están instalados algúns perfís ICC utilizados por este documento:</translation>
    </message>
    <message>
        <source> was replaced by: </source>
        <translation> substituíuse por: </translation>
    </message>
    <message>
        <source>(converted)</source>
        <translation>(convertido)</translation>
    </message>
    <message>
        <source>All Supported Formats</source>
        <translation>Todos os Formatos Coñecidos</translation>
    </message>
    <message>
        <source>All Files (*)</source>
        <translation>Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Cannot write the file: 
%1</source>
        <translation>Non se pode escribir o ficheiro: 
%1</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *scd.gz);;All Files (*)</source>
        <translation>Documentos (*.sla *.sla.gz *.scd *.scd.gz);;Todos os ficheiros (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documentos (*.sla *.scd);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation>Gardar como</translation>
    </message>
    <message>
        <source>Saving...</source>
        <translation>A salvar...</translation>
    </message>
    <message>
        <source>Scribus has detected some errors. Consider using the Preflight Verifier to correct them</source>
        <translation>O Scribus detectou algúns erros. Considere utilizar o Verificador de Pré-Voo para corrixilos</translation>
    </message>
    <message>
        <source>&amp;Ignore</source>
        <translation>&amp;Ignorar</translation>
    </message>
    <message>
        <source>&amp;Abort</source>
        <translation>P&amp;arar</translation>
    </message>
    <message>
        <source>Printing...</source>
        <translation>A Imprimir...</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>Documento</translation>
    </message>
    <message>
        <source>Printing failed!</source>
        <translation>Non se puido Imprimir!</translation>
    </message>
    <message>
        <source>Cannot Cut In-Use Item</source>
        <translation>Non se pode Recortar un Elemento en Uso</translation>
    </message>
    <message>
        <source>The item %1 is currently being edited by Story Editor. The cut operation will be cancelled</source>
        <translation>O elemento %1 está a ser modificado no Editor de Artigos. Cancelarase a operación de recortar</translation>
    </message>
    <message>
        <source>About Qt</source>
        <translation>Acerca do Qt</translation>
    </message>
    <message>
        <source>Scribus Manual</source>
        <translation>Manual do Scribus</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Gardar como</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Ficheiros de Texto (*.txt);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Nome:</translation>
    </message>
    <message>
        <source>Convert Page to Master Page</source>
        <translation>Converter a Páxina en Páxina Mestra</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Tamaño:</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Tamaño</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation>&amp;Saturación:</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Saturación</translation>
    </message>
    <message>
        <source>No Style</source>
        <translation>Sen Estilo</translation>
    </message>
    <message>
        <source>The following programs are missing:</source>
        <translation>Faltan os programas seguintes:</translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS images or Print Preview</source>
        <translation>Ghostscript: Non se poden utilizar imaxes EPS na Antevisión da Impresión</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Todo</translation>
    </message>
    <message>
        <source>Scribus detected some errors.
Consider using the Preflight Verifier  to correct them.</source>
        <translation>Scribus detectou algúns erros.
Considere utilizar o Comprobador Pré-voo para corrixilos.</translation>
    </message>
    <message>
        <source>EPS Files (*.eps);;All Files (*)</source>
        <translation>Ficheiros EPS (*.eps);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Detected some errors.
Consider using the Preflight Verifier to correct them</source>
        <translation>Detectáronse algúns erros
Considere utilizar o Comprobador Pré-voo para corrixilos</translation>
    </message>
    <message>
        <source>-Page%1</source>
        <translation>-Páxina%1</translation>
    </message>
    <message>
        <source>Some objects are locked.</source>
        <translation>Algúns obxectos están bloqueados.</translation>
    </message>
    <message>
        <source>&amp;Lock All</source>
        <translation>B&amp;loquealo Todo</translation>
    </message>
    <message>
        <source>&amp;Unlock All</source>
        <translation>&amp;Desbloquealo Todo</translation>
    </message>
    <message>
        <source>Information</source>
        <translation>Información</translation>
    </message>
    <message>
        <source>The program %1 is already running!</source>
        <translation>Xa está a correr o programa %1!</translation>
    </message>
    <message>
        <source>The program %1 is missing!</source>
        <translation>Falta o programa %1!</translation>
    </message>
    <message>
        <source>The selected color does not exist in the document&apos;s color set. Please enter a name for this new color.</source>
        <translation>A cor seleccionada non existe na paleta de cores do documento. Introduza outro nome para esta cor nova.</translation>
    </message>
    <message>
        <source>Color Not Found</source>
        <translation>Non se Atopou a Cor</translation>
    </message>
    <message>
        <source>The name you have selected already exists. Please enter a different name for this new color.</source>
        <translation>O nome escollido xa existe. Introduza un nome diferente para esta cor nova.</translation>
    </message>
    <message>
        <source>&amp;Level</source>
        <translation>&amp;Nível</translation>
    </message>
    <message>
        <source>Send to Layer</source>
        <translation>Enviar para Capa</translation>
    </message>
    <message>
        <source>Previe&amp;w Settings</source>
        <translation>Con&amp;figuración da Antevisión</translation>
    </message>
    <message>
        <source>&amp;Tools</source>
        <translation>&amp;Ferramentas</translation>
    </message>
    <message>
        <source>X-Pos:</source>
        <translation>Posición X:</translation>
    </message>
    <message>
        <source>Y-Pos:</source>
        <translation>Posición Y:</translation>
    </message>
    <message>
        <source>Spaces &amp;&amp; Breaks</source>
        <translation>Espazos &amp;&amp; Quebras</translation>
    </message>
    <message>
        <source>Ligature</source>
        <translation>Ligatura</translation>
    </message>
    <message>
        <source>New Master Page %1</source>
        <translation>Nova Páxina Mestra %1</translation>
    </message>
    <message>
        <source>Number of copies: %1
Horizontal shift: %2
Vertical shift: %3</source>
        <translation>Número de copias: %1
Desprazamento horizontal: %2
Desprazamento vertical: %3</translation>
    </message>
    <message>
        <source>Ghostscript : You cannot use EPS images or PostScript Print Preview</source>
        <translation>Ghostscript: Non pode utilizar imaxes EPS ou PostScript na Antevisión da Impresión</translation>
    </message>
    <message>
        <source>Ghostscript is missing : Postscript Print Preview is not available</source>
        <translation>Falta o Ghostscript: Non se dispón da Antevisión da Impresión Postscript</translation>
    </message>
    <message>
        <source>Do you really want to replace your existing image?</source>
        <translation>Pretende substituir a imaxe existente?</translation>
    </message>
    <message>
        <source>Contents</source>
        <translation type="unfinished">Contido</translation>
    </message>
    <message>
        <source>Liga&amp;ture</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusQApp</name>
    <message>
        <source>Invalid argument: </source>
        <translation> Argumento non válido: </translation>
    </message>
    <message>
        <source>File %1 does not exist, aborting.</source>
        <translation>O ficheiro %1 non existe; interrompemos.</translation>
    </message>
    <message>
        <source>Usage: scribus [option ... ] [file]</source>
        <translation>Uso: scribus [opción ... ] [ficheiro]</translation>
    </message>
    <message>
        <source>Options:</source>
        <translation>Opcións:</translation>
    </message>
    <message>
        <source>Print help (this message) and exit</source>
        <translation>Imprimir a axuda (esta mensaxe) e sair</translation>
    </message>
    <message>
        <source>Uses xx as shortcut for a language, eg `en&apos; or `de&apos;</source>
        <translation>Use xx como atallo para unha lingua, p.ex. &quot;gl&quot; ou &quot;pt&quot;</translation>
    </message>
    <message>
        <source>List the currently installed interface languages</source>
        <translation>Listar as interfaces de idioma instaladas actualmente</translation>
    </message>
    <message>
        <source>Show information on the console when fonts are being loaded</source>
        <translation>Mostrar información na consola encanto se carregan as fontes</translation>
    </message>
    <message>
        <source>Do not show the splashscreen on startup</source>
        <translation>Non mostrar a pantalla de inicio</translation>
    </message>
    <message>
        <source>Output version information and exit</source>
        <translation>Mostrar información sobre a versión e sair</translation>
    </message>
    <message>
        <source>Use right to left dialog button ordering (eg. Cancel/No/Yes instead of Yes/No/Cancel)</source>
        <translation>Utilizar a ordenación dereita a esquerda dos botóns (p.ex. Cancelar/Non/Si en vez de Si/Non/Cancelar)</translation>
    </message>
    <message>
        <source>filename</source>
        <translation>nome do ficheiro</translation>
    </message>
    <message>
        <source>Use filename as path for user given preferences</source>
        <translation>Utilizar o nome do ficheiro como rota para as preferencias dadas do usuario</translation>
    </message>
    <message>
        <source>Installed interface languages for Scribus are as follows:</source>
        <translation>As interfaces para linguas instaladas para Scribus son as seguintes:</translation>
    </message>
    <message>
        <source>To override the default language choice:</source>
        <translation>Para ultrapasar a escolla de lingua por omisión:</translation>
    </message>
    <message>
        <source>scribus -l xx or scribus --lang xx, where xx is the language of choice.</source>
        <translation>scribus  -l xx ou scribus --lang xx, onde xx é a lingua escollida.</translation>
    </message>
    <message>
        <source>Scribus Version</source>
        <translation>Versión do Scribus</translation>
    </message>
    <message>
        <source>Scribus, Open Source Desktop Publishing</source>
        <translation>Scribus, Publicación Dixital de Código Aberto</translation>
    </message>
    <message>
        <source>Homepage</source>
        <translation>Sitio web</translation>
    </message>
    <message>
        <source>Documentation</source>
        <translation>Documentación</translation>
    </message>
    <message>
        <source>Wiki</source>
        <translation>Wiki</translation>
    </message>
    <message>
        <source>Issues</source>
        <translation>Problemas</translation>
    </message>
    <message>
        <source>Display a console window</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusView</name>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation>Capa</translation>
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
        <source>All</source>
        <translation type="obsolete">Todo</translation>
    </message>
    <message>
        <source>Copy of</source>
        <translation type="obsolete">Copiar de</translation>
    </message>
    <message>
        <source>Copy Here</source>
        <translation>Copiar Aquí</translation>
    </message>
    <message>
        <source>Move Here</source>
        <translation>Mover Aquí</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Pegar</translation>
    </message>
    <message>
        <source>Picture</source>
        <translation>Imaxe</translation>
    </message>
    <message>
        <source>File: </source>
        <translation>Ficheiro: </translation>
    </message>
    <message>
        <source>Original PPI: </source>
        <translation>PPI Orixinal: </translation>
    </message>
    <message>
        <source>Actual PPI: </source>
        <translation>PPI Real: </translation>
    </message>
    <message>
        <source>Linked Text</source>
        <translation>Texto Vinculado</translation>
    </message>
    <message>
        <source>Text Frame</source>
        <translation>Moldura de Texto</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation>Texto nun Trazo</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation>Parágrafos: </translation>
    </message>
    <message>
        <source>Words: </source>
        <translation>Palabras: </translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation>Caracteres: </translation>
    </message>
    <message>
        <source>Print: </source>
        <translation>Imprimir: </translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>Activado</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>Desactivado</translation>
    </message>
    <message>
        <source>In&amp;fo</source>
        <translation>In&amp;formación</translation>
    </message>
    <message>
        <source>Preview Settings</source>
        <translation>Configuración da Antevisión</translation>
    </message>
    <message>
        <source>&amp;PDF Options</source>
        <translation>Opcións do &amp;PDF</translation>
    </message>
    <message>
        <source>Send to La&amp;yer</source>
        <translation>Enviar para &amp;Capa</translation>
    </message>
    <message>
        <source>Le&amp;vel</source>
        <translation>Ní&amp;vel</translation>
    </message>
    <message>
        <source>Conve&amp;rt to</source>
        <translation>Conve&amp;rtir en</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>Linking Text Frames</source>
        <translation>Vincular as Molduras de Texto</translation>
    </message>
    <message>
        <source>You are trying to link to a filled frame, or a frame to itself.</source>
        <translation>Pretende vincular a unha moldura chea ou unha moldura consigo mesma.</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Do you really want to clear all your text?</source>
        <translation type="obsolete">Realmente pretende eliminar todo o texto?</translation>
    </message>
    <message>
        <source>Cannot Delete In-Use Item</source>
        <translation type="obsolete">Non se pode Eliminar o Elemento en Uso</translation>
    </message>
    <message>
        <source>The item %1 is currently being edited by Story Editor. The delete operation will be cancelled</source>
        <translation type="obsolete">O elemento %1 está a ser modificado no Editor de Artigos. Cancelarase a operación de recordado</translation>
    </message>
    <message>
        <source>Cannot Convert In-Use Item</source>
        <translation>Non se pode Converter o Elemento en Uso</translation>
    </message>
    <message>
        <source>The item %1 is currently being edited by Story Editor. The convert to outlines operation for this item will be skipped</source>
        <translation>O elemento %1 está a ser modificado no Editor de Artigos. Saltarase a operación de conversión deste elemento a siluetas</translation>
    </message>
    <message>
        <source>Page %1 to %2</source>
        <translation>Póxina %1 a %2</translation>
    </message>
    <message>
        <source>Colorspace: </source>
        <translation> Espazo de cores:</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>Descoñecido</translation>
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
        <translation>Escala de grises</translation>
    </message>
    <message>
        <source>Contents</source>
        <translation type="unfinished">Contido</translation>
    </message>
</context>
<context>
    <name>ScribusWin</name>
    <message>
        <source>&amp;Leave Anyway</source>
        <translation type="obsolete">Sa&amp;ir Igual</translation>
    </message>
    <message>
        <source>C&amp;lose Anyway</source>
        <translation type="obsolete">&amp;Fechar Igual</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Document:</source>
        <translation>Documento:</translation>
    </message>
    <message>
        <source>has been changed since the last save.</source>
        <translation>mudou desde a última vez que se salvou.</translation>
    </message>
    <message>
        <source>&amp;Save Now</source>
        <translation type="obsolete">&amp;Gardar Agora</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>&amp;Discard</source>
        <translation>&amp;Desbotar</translation>
    </message>
</context>
<context>
    <name>ScriptPlugin</name>
    <message>
        <source>Embedded Python scripting support.</source>
        <translation>Soporte de guións en Python embebido.</translation>
    </message>
    <message>
        <source>Scripter</source>
        <translation>Scripter</translation>
    </message>
</context>
<context>
    <name>ScripterCore</name>
    <message>
        <source>&amp;Scribus Scripts</source>
        <translation type="obsolete">&amp;Guións do Scribus</translation>
    </message>
    <message>
        <source>&amp;Execute Script...</source>
        <translation type="obsolete">&amp;Executar Guións...</translation>
    </message>
    <message>
        <source>Run a Python script from a file.</source>
        <comment>scripter</comment>
        <translation type="obsolete">Executar un guión Python desde un ficheiro.

scripter.</translation>
    </message>
    <message>
        <source>&amp;Load Extension Script...</source>
        <translation type="obsolete">&amp;Carregar un Guión de Extensión...</translation>
    </message>
    <message>
        <source>Load a Python script as an extension. Used for loading macros and for advanced Python scripts that extend the Scribus user interface.</source>
        <comment>scripter</comment>
        <translation type="obsolete">Carregar un guión de Python como extensión. Úsase para carregar macros e para guións Python avanzados que extenden a interface de usuario de Scribus.

scripter.</translation>
    </message>
    <message>
        <source>&amp;Recent Scripts</source>
        <translation type="obsolete">Guións &amp;Recentes</translation>
    </message>
    <message>
        <source>Show &amp;Console</source>
        <translation type="obsolete">Mostrar a &amp;Consola</translation>
    </message>
    <message>
        <source>Display an interactive Python console where you can write and run Python programs that use the Scripter tools.</source>
        <comment>scripter</comment>
        <translation type="obsolete">Mostrar unha consola de Python interactiva na que pode escribir e executar programas en Python que usen as ferramentas do Scripter.

scripter.</translation>
    </message>
    <message>
        <source>&amp;About Script...</source>
        <translation type="obsolete">&amp;Acerca de Script...</translation>
    </message>
    <message>
        <source>S&amp;cript</source>
        <translation type="obsolete">S&amp;cript</translation>
    </message>
    <message>
        <source>Scripter &amp;Settings</source>
        <comment>script menu</comment>
        <translation type="obsolete">&amp;Configuración do Scripter

menú de script</translation>
    </message>
    <message>
        <source>Open</source>
        <translation type="obsolete">Abrir</translation>
    </message>
    <message>
        <source>Python Scripts (*.py);; All Files (*)</source>
        <translation type="obsolete">Guións en Python (*.py);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Script error</source>
        <translation>Erro de Guión</translation>
    </message>
    <message>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation>Se está a executar un guión oficial informe disto en &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt;, por favor.</translation>
    </message>
    <message>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation>Esta mensaxe tamén está no seu porta-retallos. Use Ctrl+V para pegala no xestor de erros.</translation>
    </message>
    <message>
        <source>Scribus - Script Plugin</source>
        <translation type="obsolete">Scribus - Extensión de Guións</translation>
    </message>
    <message>
        <source>The &apos;Load Script&apos; function of the script plugin is currently disabled.
If you just want to run a normal script, you probably want to use
&apos;Execute Script...&apos; instead.

If you do actually want to load a Python extension script or macro, you
need to go into the Scripter Settings in the Script menu and enable
scripter extensions there.

Please read the documentation on extension scripts first.
</source>
        <translation type="obsolete">A función &quot;Carregar Guión&quot; da extensión de guións está deshabilitada nestes momentos.
Se só quer executar un guión normal, posibelmente prefira usar
&quot;Executar Guión...&quot;.

Se de verdade quer carregar un guión de extensión ou macro en Python,
terá que ir á Configuración de Scripter no menú Guión e habilitar aí
as extensións do scripter.

Lea antes a documentación sobre a extensión.</translation>
    </message>
    <message>
        <source>Hide &amp;Console</source>
        <translation type="obsolete">Agochar a &amp;Consola</translation>
    </message>
    <message>
        <source>About Script</source>
        <translation type="obsolete">Acerca do Script</translation>
    </message>
    <message>
        <source>There was an internal error while trying the command you entered. Details were printed to stderr. </source>
        <translation>Produciuse un erro interno ao tentar o comando introducido. Envióronse os detalles a stderr. </translation>
    </message>
    <message>
        <source>Examine Script</source>
        <translation>Examinar o Guión</translation>
    </message>
    <message>
        <source>Python Scripts (*.py)</source>
        <translation type="obsolete">Guións en Python (*.py)</translation>
    </message>
    <message>
        <source>Setting up the Python plugin failed. Error details were printed to stderr. </source>
        <translation>Fallou a configuración da extensión en Python. Os detalles do erro envióronse a stderr. </translation>
    </message>
    <message>
        <source>Python Scripts (*.py);;All Files (*)</source>
        <translation>Guións en Python (*.py);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Documentation for:</source>
        <translation>Documentación sobre:</translation>
    </message>
    <message>
        <source>Script</source>
        <translation>Guión</translation>
    </message>
    <message>
        <source> doesn&apos;t contain any docstring!</source>
        <translation> non contén nengún docstring!</translation>
    </message>
</context>
<context>
    <name>ScripterPreferences</name>
    <message>
        <source>Scribus - Scripter Preferences</source>
        <translation type="obsolete">Scribus - Preferencias do Scripter</translation>
    </message>
    <message>
        <source>Enable Scripter Extensions</source>
        <translation type="obsolete">Habilitar as Extensións do Scripter</translation>
    </message>
    <message>
        <source>Turn on extension scripts and macros</source>
        <translation type="obsolete">Activar os guións de extensión e macros</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;Enabling scripter extensions turns on additional scripter functionality including Python macros and the option of loading a Python script at start-up. Turning on this option unlocks the &lt;tt&gt;Load Extension Script&lt;/tt&gt; item in the Script menu.&lt;/p&gt;
&lt;p&gt;
Only scripts written to be run as extension scripts should be used with &lt;tt&gt;Load Extension Script&lt;/tt&gt; or as start-up scripts. See the scripter documentation for more details.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;&lt;p&gt;Se activa as extensións de scripter habilitaráse funcionalidade adicional de scripter, incluídas as macros en Python e a opción de carregar un guión en Python no inicio. Activar esta opción desbloquea o elemento &lt;tt&gt;Carregar Guión de Extensión&lt;/tt&gt; no menú de Guión.&lt;/p&gt;
&lt;p&gt;Só se deberían utilizar guións escritos como guións de extensión con &lt;tt&gt;Carregar Guión de Extensión&lt;/tt&gt; ou como guións de inicio. Consulte a documentación de scripter para máis información.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Use a Startup Script</source>
        <translation type="obsolete">Usar un Guión de Inicio</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;If &lt;tt&gt;Use a Startup Script&lt;/tt&gt; is checked, Scribus will load the script file specified here as an extension script at start-up. It is important that the script be written as an extension script, as if not written carefully it can potentially cause problems.&lt;/p&gt;
&lt;p&gt;&lt;tt&gt;Use a Startup Script&lt;/tt&gt; will be disabled if scripter extensions are off, as extension scripts cannot be loaded without scripter extensions enabled.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;&lt;p&gt;Se se activa &lt;tt&gt;Usar un Guión de Inicio&lt;/tt&gt;, Scribus carregará o ficheiro de guión indicado aquí como un guión de extensión ao comezo. É importante que o guión se escriba como un guión de extensión, xa que se non se escribe con coidado pode ocasionar problemas.&lt;/p&gt;
&lt;p&gt;&lt;tt&gt;Usar un Guión de Inicio&lt;/tt&gt; deshabilitarase se o están as extensións de scripter, xa que os guións de extensión non se poden carregar sen ter habilitadas as extensións de scripter.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation type="obsolete">Examinar...</translation>
    </message>
    <message>
        <source>Browse for a new script file</source>
        <translation type="obsolete">Procurar un ficheiro de guión novo</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Browse for a new script file&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Procurar un ficheiro de guión novo&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>What script file to load at start-up</source>
        <translation type="obsolete">Que ficheiro de guión se carregará no inicio</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;The file containing the Python script to run as an extension script at start-up.&lt;/p&gt;
&lt;p&gt;Note that when this script is run, Scribus has not completely started up and the workspace does not yet exist.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;&lt;p&gt;O ficheiro que contén o guión en Python que se executará como guión de extensión no inicio.&lt;/p&gt;
&lt;p&gt;Observe que cando se executa este guión, Scribus ainda non se iniciou de todo e a área de traballo ainda non existe.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Script File:</source>
        <translation type="obsolete">Ficheiro de Guión:</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>Close without saving changes</source>
        <translation type="obsolete">Fechar sen salvar as mudanzas</translation>
    </message>
    <message>
        <source>&amp;Ok</source>
        <translation type="obsolete">&amp;Aceptar as modificacións</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+O</translation>
    </message>
    <message>
        <source>Save changes and close</source>
        <translation type="obsolete">Salvar as mudanzas e fechar</translation>
    </message>
    <message>
        <source>Advanced Options</source>
        <translation type="obsolete">Opcións avanzadas</translation>
    </message>
    <message>
        <source>Import All Names at Startup</source>
        <translation type="obsolete">Importar Todos os Nomes no Inicio</translation>
    </message>
    <message>
        <source>Run &apos;from scribus import *&apos; in the script console at start-up</source>
        <translation type="obsolete">Executar &quot;do importado a Scribus *&quot; na consola de guións no inicio</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Import All Names at Startup&lt;/tt&gt; is an advanced option. You should probably leave it checked unless you have read the documentation and know what you are doing.&lt;/p&gt;
&lt;p&gt;Unchecking this option will prevent the scripter from running its usual &lt;tt&gt;from scribus import *&lt;/tt&gt; command when it initializes the main interpreter (used for the script console and extension scripts) at start-up.&lt;/p&gt;
&lt;p&gt;This option does not take effect until Scribus is restarted.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Importar Todos os Nomes no Inicio&lt;/tt&gt; é unha opción avanzada. Posibelmente deberá deixala sen marcar a non ser que teña lida a documentación e saiba o que está a facer.&lt;/p&gt;
&lt;p&gt;Se non selecciona esta opción evitará que o scripter execute o seu comando habitual &lt;tt&gt;do importado a Scribus *&lt;/tt&gt; cando inicializa o intérprete principal (usado para a consola de guión e os guións de extensión) no inicio.&lt;/p&gt;
&lt;p&gt;Esta opción non é efectiva até que se reinicia o Scribus.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Enable Legacy Name Aliases</source>
        <translation type="obsolete">Permitir Alias de Nome Anticuados</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Enable the use of OldStyle function names&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Permitir o uso de nomes de función Estilo Vello&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Enable Legacy Aliases&lt;/tt&gt; is an advanced option. You should probably leave it how it is.&lt;/p&gt;
&lt;p&gt;If checked, this option will cause the scripter to create a large number of function and constant name aliases for 1.2.0 script compatibility. It defaults to checked.&lt;/p&gt;
&lt;p&gt;This option does not take effect until Scribus is restarted.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Permitir Alias Anticuados&lt;/tt&gt; é unha opción avanzada. Probabelmente sexa mellor que a deixe estar como está.&lt;/p&gt;
&lt;p&gt;Se a selecciona, esta opción fará que scripter cre un número grande de alias de nome de funcións e constantes para compatibilidade coa versión 1.2.0. Normalmente non se fai.&lt;/p&gt;
&lt;p&gt;Esta opción no é efectiva até que se reinicie Scribus.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>Use Fake Stdin</source>
        <translation type="obsolete">Usar Stdin Falso</translation>
    </message>
    <message>
        <source>&lt;qt&gt;Replace sys.stdin with a fake file to prevent Scribus hanging when a script tries to read from stdin.&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;Substituir sys.stdin cun ficheiro falso para evitar que Scribus se colque cando un guión tenta ler desde stdin.&lt;/qt&gt;</translation>
    </message>
    <message>
        <source>&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Use Fake Stdin&lt;/tt&gt; is an advanced option. You should probably leave it how it is.&lt;/p&gt;
&lt;p&gt;Normally, scribus will provide Python with a fake file object for &lt;tt&gt;sys.stdin&lt;/tt&gt;, so that reads from stdin always return an empty string. If the real &lt;tt&gt;sys.stdin&lt;/tt&gt; is left in place, scripts that try to read from it will block - and in turn block scribus&apos;s execution, making the app appear to hang - until input arrives on stdin. It&apos;s unusual for GUI apps to expect anything on stdin, so mostly users will think scribus has crashed.&lt;/p&gt;
&lt;p&gt;You can disable this option if you want to accept input on stdin. Generally you should use &lt;tt&gt;os.popen&lt;/tt&gt; to make a pipe instead, or use some other input mechanism, but this option is here just in case.&lt;/p&gt;&lt;/qt&gt;</source>
        <translation type="obsolete">&lt;qt&gt;&lt;p&gt;&lt;tt&gt;Usar Stdin Falso&lt;/tt&gt; é unha opción avanzada. Probabelmente sexa mellor deixala como está.&lt;/p&gt;
&lt;p&gt;Normalmente, Scribus fornecerá a Python cun obxecto de ficheiro falso para &lt;tt&gt;sys.stdin&lt;/tt&gt; para que as lecturas de stdin devolvean sempre unha cadea baleira. Se o &lt;tt&gt;sys.stdin&lt;/tt&gt; real se deixa no sitio, os guións que tenten ler del bloquearanse - e á súa vez bloquearán a execución do Scribus, facendo parecer que a aplicación se bloqueou - até que chegue input a stdin. Non é normal que as aplicacións con GUI esperen nada de stdin, así que a maioría dos utilizadores pensarán que Scribus se colgou.&lt;/p&gt;
&lt;p&gt;Pode desactivar esta opción se quer aceptar input desde stdin. Normalmente debería utilizar &lt;tt&gt;os.popen&lt;/tt&gt; para facer unha tubería, ou talvez usar outro mecanismo de entrada, pero por se acaso o mecanismo está aquí.&lt;/p&gt;&lt;/qt&gt;</translation>
    </message>
</context>
<context>
    <name>ScripterPrefsGui</name>
    <message>
        <source>Scripter Preferences</source>
        <translation>Preferencias do Scripter</translation>
    </message>
    <message>
        <source>Extension Scripts</source>
        <translation type="obsolete">Guións de Extensión</translation>
    </message>
    <message>
        <source>Enable Extension Scripts</source>
        <translation>Habilitar os Guións de Extensión</translation>
    </message>
    <message>
        <source>Startup Script</source>
        <translation type="obsolete">Guión de Inicio</translation>
    </message>
    <message>
        <source>Extensions</source>
        <translation>Extensións</translation>
    </message>
    <message>
        <source>Console</source>
        <translation>Consola</translation>
    </message>
    <message>
        <source>Startup Script:</source>
        <translation>Guión de Inicio:</translation>
    </message>
    <message>
        <source>Errors:</source>
        <comment>syntax highlighting</comment>
        <translation>Erros:

resalte da sintaxe:</translation>
    </message>
    <message>
        <source>Comments:</source>
        <comment>syntax highlighting</comment>
        <translation>Comentarios:

resalte da sintaxe:</translation>
    </message>
    <message>
        <source>Keywords:</source>
        <comment>syntax highlighting</comment>
        <translation>Palabras chave:

resalte da sintaxe:</translation>
    </message>
    <message>
        <source>Signs:</source>
        <comment>syntax highlighting</comment>
        <translation>Signos:

resalte da sintaxe:</translation>
    </message>
    <message>
        <source>Numbers:</source>
        <comment>syntax highlighting</comment>
        <translation>Números:

resalte da sintaxe:</translation>
    </message>
    <message>
        <source>Strings:</source>
        <comment>syntax highlighting</comment>
        <translation>Cadeas:

resalte da sintaxe:</translation>
    </message>
    <message>
        <source>Base Texts:</source>
        <comment>syntax highlighting</comment>
        <translation>Textos de Base:

resalte da sintaxe:</translation>
    </message>
    <message>
        <source>Select Color</source>
        <translation>Escolla a Cor</translation>
    </message>
    <message>
        <source>Change...</source>
        <translation>Mudar...</translation>
    </message>
    <message>
        <source>Locate Startup Script</source>
        <translation>Localizar o Guión de Inicio</translation>
    </message>
</context>
<context>
    <name>SeList</name>
    <message>
        <source>Show Page Previews</source>
        <translation>Mostrar a Antevisión das Páxinas</translation>
    </message>
</context>
<context>
    <name>SeView</name>
    <message>
        <source>Show Template Names</source>
        <translation type="obsolete">Mostrar os Nomes dos Modelos</translation>
    </message>
    <message>
        <source>Show Master Page Names</source>
        <translation type="obsolete">Mostrar os Nomes das Páxinas mestras</translation>
    </message>
</context>
<context>
    <name>SearchReplace</name>
    <message>
        <source>Search/Replace</source>
        <translation>Procurar/Substituir</translation>
    </message>
    <message>
        <source>Search for:</source>
        <translation>Procurar:</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Texto</translation>
    </message>
    <message>
        <source>Paragraph Style</source>
        <translation>Estilo de Parágrafo</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Fonte</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>Tamaño da Fonte</translation>
    </message>
    <message>
        <source>Font Effects</source>
        <translation>Efectos da Fonte</translation>
    </message>
    <message>
        <source>Fill Color</source>
        <translation>Cor de Enchido</translation>
    </message>
    <message>
        <source>Fill Shade</source>
        <translation>Saturación do enchido</translation>
    </message>
    <message>
        <source>Stroke Color</source>
        <translation>Cor do Trazo</translation>
    </message>
    <message>
        <source>Stroke Shade</source>
        <translation>Matiz do Trazo</translation>
    </message>
    <message>
        <source>Left</source>
        <translation>Esquerda</translation>
    </message>
    <message>
        <source>Center</source>
        <translation>Centro</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Direita</translation>
    </message>
    <message>
        <source>Block</source>
        <translation>Bloquear</translation>
    </message>
    <message>
        <source>Forced</source>
        <translation>Forzado</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source>None</source>
        <translation type="obsolete">Nengunha</translation>
    </message>
    <message>
        <source>Replace with:</source>
        <translation>Substituir por:</translation>
    </message>
    <message>
        <source>&amp;Whole Word</source>
        <translation>Palabra &amp;enteira</translation>
    </message>
    <message>
        <source>&amp;Ignore Case</source>
        <translation>&amp;Ignorar maiúsculas/minúsculas</translation>
    </message>
    <message>
        <source>&amp;Search</source>
        <translation>&amp;Procurar</translation>
    </message>
    <message>
        <source>&amp;Replace</source>
        <translation>&amp;Substituir</translation>
    </message>
    <message>
        <source>Replace &amp;All</source>
        <translation>Substituir &amp;Todo</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Limpar</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Fechar</translation>
    </message>
    <message>
        <source>Search finished</source>
        <translation>Rematou a pesquisa</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">De acordo</translation>
    </message>
    <message>
        <source>Search finished, found %1 matches</source>
        <translation>Rematou a procura e atopáronse %1 equivalencias</translation>
    </message>
</context>
<context>
    <name>SeitenPal</name>
    <message>
        <source>Arrange Pages</source>
        <translation type="obsolete">Dispor as Páxinas</translation>
    </message>
    <message>
        <source>Available Templates:</source>
        <translation type="obsolete">Modelos Disponíbeis:</translation>
    </message>
    <message>
        <source>Document Pages:</source>
        <translation type="obsolete">Páxinas do Documento:</translation>
    </message>
    <message>
        <source>Facing Pages</source>
        <translation type="obsolete">Páxinas Enfrentadas</translation>
    </message>
    <message>
        <source>Left Page first</source>
        <translation type="obsolete">A Páxina Esquerda Primeiro</translation>
    </message>
    <message>
        <source>Drag Pages or Template Pages onto the Trashbin to delete them.</source>
        <translation type="obsolete">Arrastrar as Páxinas ou os Modelos de Páxina para o lixo para eliminalos.</translation>
    </message>
    <message>
        <source>Previews all the pages of your document.</source>
        <translation type="obsolete">Antevisión de todas as páxinas do documento.</translation>
    </message>
    <message>
        <source>Here are all your Templates, to create a new Page
drag a Template to the Pageview below.</source>
        <translation type="obsolete">Eis os seus Modelos. Para crear unha Páxina nova
arrastre un Modelo á Vista da Páxina de embaixo.</translation>
    </message>
    <message>
        <source>Normal</source>
        <translation type="obsolete">Normal</translation>
    </message>
    <message>
        <source>Drag pages or master pages onto the trashbin to delete them</source>
        <translation type="obsolete">Arrastrar as páxinas ou páxinas mestras ao lixo para eliminalas</translation>
    </message>
    <message>
        <source>Previews all the pages of your document</source>
        <translation type="obsolete">Antevisión de todas as páxinas do documento</translation>
    </message>
    <message>
        <source>Here are all your master pages. To create a new page, drag a master page to the page view below</source>
        <translation type="obsolete">Eis todas as páxinas mestras. Para crear unha páxina nova, arrastre unha páxina mestra á vista de páxinas de embaixo</translation>
    </message>
    <message>
        <source>Available Master Pages:</source>
        <translation type="obsolete">Páxinas Mestras Disponíbeis:</translation>
    </message>
    <message>
        <source>Left Page First</source>
        <translation type="obsolete">A Páxina Esquerda Primeiro</translation>
    </message>
</context>
<context>
    <name>SelectFields</name>
    <message>
        <source>Select Fields</source>
        <translation>Escoller Campos</translation>
    </message>
    <message>
        <source>Available Fields</source>
        <translation>Campos Disponíbeis</translation>
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
        <translation>Campos Escollidos</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>ShadeButton</name>
    <message>
        <source>Other...</source>
        <translation>Outra...</translation>
    </message>
    <message>
        <source>&amp;Shade:</source>
        <translation>&amp;Saturación:</translation>
    </message>
    <message>
        <source>Shade</source>
        <translation>Saturación</translation>
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
        <translation>Distancia-X</translation>
    </message>
    <message>
        <source>Y-Offset</source>
        <translation>Distancia-Y</translation>
    </message>
</context>
<context>
    <name>ShortWordsPlugin</name>
    <message>
        <source>Short &amp;Words...</source>
        <comment>short words plugin</comment>
        <translation>A&amp;breviaturas...

extensión de abreviaturas...</translation>
    </message>
    <message>
        <source>Short Words</source>
        <translation>Palabras Curtas</translation>
    </message>
    <message>
        <source>Special plug-in for adding non-breaking spaces before or after so called short words.</source>
        <translation type="obsolete">Extensión especial para adicionar espazos que non quebran antes ou despóis das chamadas abreviaturas.</translation>
    </message>
</context>
<context>
    <name>SideBar</name>
    <message>
        <source>No Style</source>
        <translation>Sen Estilo</translation>
    </message>
    <message>
        <source>Edit Styles...</source>
        <translation>Modifcar os Estilos...</translation>
    </message>
</context>
<context>
    <name>Spalette</name>
    <message>
        <source>No Style</source>
        <translation>Sen Estilo</translation>
    </message>
</context>
<context>
    <name>StilFormate</name>
    <message>
        <source>Edit Styles</source>
        <translation>Modificar os Estilos</translation>
    </message>
    <message>
        <source>&amp;Append</source>
        <translation type="obsolete">&amp;Adicionar</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Novo</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Modificar</translation>
    </message>
    <message>
        <source>D&amp;uplicate</source>
        <translation>D&amp;uplicar</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>&amp;Save</source>
        <translation type="obsolete">&amp;Gardar</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>Copy of %1</source>
        <translation>Copiar de %1</translation>
    </message>
    <message>
        <source>New Style</source>
        <translation>Estilo Novo</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Do you really want to delete this Style?</source>
        <translation type="obsolete">Realmente quer eliminar este Estilo?</translation>
    </message>
    <message>
        <source>No</source>
        <translation type="obsolete">Non</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="obsolete">Si</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation>Documentos (*.sla *.sla.gz *.scd *.scd.gz);;Todos os ficheiros (*)</translation>
    </message>
    <message>
        <source>Documents (*.sla *.scd);;All Files (*)</source>
        <translation>Documentos (*.sla *.scd);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>&amp;Import</source>
        <translation>&amp;Importar</translation>
    </message>
    <message>
        <source>Do you really want to delete this style?</source>
        <translation type="obsolete">Pretende realmente eliminar este estilo?</translation>
    </message>
</context>
<context>
    <name>StoryEditor</name>
    <message>
        <source>Story Editor</source>
        <translation>Editor de Artigos</translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Novo</translation>
    </message>
    <message>
        <source>&amp;Reload Text from Frame</source>
        <translation>&amp;Recarregar o Texto desde a Moldura</translation>
    </message>
    <message>
        <source>&amp;Save to File...</source>
        <translation>&amp;Salvar nun Ficheiro...</translation>
    </message>
    <message>
        <source>&amp;Load from File...</source>
        <translation>&amp;Carregar desde un Ficheiro...</translation>
    </message>
    <message>
        <source>Save &amp;Document</source>
        <translation>Salvar &amp;Documento</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame and Exit</source>
        <translation>&amp;Actualizar a Moldura de Texto e Sair</translation>
    </message>
    <message>
        <source>&amp;Exit Without Updating Text Frame</source>
        <translation>Sair S&amp;en Actualizar a Moldura de Texto</translation>
    </message>
    <message>
        <source>Select &amp;All</source>
        <translation>Seleccion&amp;alo Todo</translation>
    </message>
    <message>
        <source>Cu&amp;t</source>
        <translation>Recor&amp;tar</translation>
    </message>
    <message>
        <source>&amp;Copy</source>
        <translation>&amp;Copiar</translation>
    </message>
    <message>
        <source>&amp;Paste</source>
        <translation>&amp;Pegar</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Limpar</translation>
    </message>
    <message>
        <source>&amp;Search/Replace...</source>
        <translation>Pr&amp;ocurar/Substituir...</translation>
    </message>
    <message>
        <source>&amp;Insert Special...</source>
        <translation type="obsolete">&amp;Inserir Especial...</translation>
    </message>
    <message>
        <source>&amp;Edit Styles...</source>
        <translation>&amp;Modificar os Estilos...</translation>
    </message>
    <message>
        <source>&amp;Fonts Preview...</source>
        <translation>Antevisión das &amp;Fontes...</translation>
    </message>
    <message>
        <source>&amp;Update Text Frame</source>
        <translation>&amp;Actualizar a Moldura de Texto</translation>
    </message>
    <message>
        <source>&amp;Background...</source>
        <translation>&amp;Fondo...</translation>
    </message>
    <message>
        <source>&amp;Display Font...</source>
        <translation>&amp;Mostrar a Fonte...</translation>
    </message>
    <message>
        <source>&amp;Smart text selection</source>
        <translation>Selección de texto &amp;intelixente</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Ficheiro</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation>&amp;Modificar</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation>&amp;Configuración</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Ficheiro</translation>
    </message>
    <message>
        <source>Clear all Text</source>
        <translation type="obsolete">Limpar todo o Texto</translation>
    </message>
    <message>
        <source>Load Text from File</source>
        <translation type="obsolete">Carregar o Texto desde un Ficheiro</translation>
    </message>
    <message>
        <source>Save Text to File</source>
        <translation type="obsolete">Salvar o Texto nun Ficheiro</translation>
    </message>
    <message>
        <source>Update Text Frame and Exit</source>
        <translation type="obsolete">Actualizar a Moldura de Texto e Sair</translation>
    </message>
    <message>
        <source>Exit Without Updating Text Frame</source>
        <translation type="obsolete">Sair Sen Actualizar a Moldura de Texto</translation>
    </message>
    <message>
        <source>Reload Text from Frame</source>
        <translation type="obsolete">Recarregar o Texto desde a Moldura</translation>
    </message>
    <message>
        <source>Update Text Frame</source>
        <translation type="obsolete">Actualizar a Moldura de Texto</translation>
    </message>
    <message>
        <source>Search/Replace</source>
        <translation type="obsolete">Procurar/Substituir</translation>
    </message>
    <message>
        <source>Current Paragraph:</source>
        <translation>Parágrafo Actual:</translation>
    </message>
    <message>
        <source>Words: </source>
        <translation>Palabras: </translation>
    </message>
    <message>
        <source>Chars: </source>
        <translation>Caracteres.: </translation>
    </message>
    <message>
        <source>Totals:</source>
        <translation>Totais:</translation>
    </message>
    <message>
        <source>Paragraphs: </source>
        <translation>Parágrafos: </translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Do you want to save your changes?</source>
        <translation>Quer gravar as súas modificacións?</translation>
    </message>
    <message>
        <source>Do you really want to lose all your Changes?</source>
        <translation type="obsolete">Quer perder realmente as súas Modificacións?</translation>
    </message>
    <message>
        <source>Do you really want to clear all your Text?</source>
        <translation type="obsolete">Realmente quer eliminar todo o Texto?</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Abrir</translation>
    </message>
    <message>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation>Ficheiros de Texto (*.txt);;Todos os Ficheiros (*)</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Gardar como</translation>
    </message>
    <message>
        <source>&amp;Insert Glyph...</source>
        <translation>&amp;Inserir Glifo...</translation>
    </message>
    <message>
        <source>Clear All Text</source>
        <translation>Limpar Todo o texto</translation>
    </message>
    <message>
        <source>Story Editor - %1</source>
        <translation>Editor de Artigos - %1</translation>
    </message>
    <message>
        <source>Do you really want to lose all your changes?</source>
        <translation>De verdade que quer perder todas as modificacións?</translation>
    </message>
    <message>
        <source>Do you really want to clear all your text?</source>
        <translation>Realmente pretende eliminar todo o texto?</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation>&amp;Inserir</translation>
    </message>
    <message>
        <source>Character</source>
        <translation>Carácter</translation>
    </message>
    <message>
        <source>Quote</source>
        <translation>Aspa</translation>
    </message>
    <message>
        <source>Spaces &amp;&amp; Breaks</source>
        <translation>Espazos &amp;&amp; Quebras</translation>
    </message>
    <message>
        <source>Ligature</source>
        <translation>Ligatura</translation>
    </message>
    <message>
        <source>Space</source>
        <translation>Espazo</translation>
    </message>
</context>
<context>
    <name>StrikeValues</name>
    <message>
        <source>Auto</source>
        <translation>Auto</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Displacement</source>
        <translation>Deslocamento</translation>
    </message>
    <message>
        <source>Linewidth</source>
        <translation>Anchuradeliña</translation>
    </message>
</context>
<context>
    <name>StyleManager</name>
    <message>
        <source>More than one item selected</source>
        <translation>Hai máis dun elemento seleccionado</translation>
    </message>
</context>
<context>
    <name>StyleSelect</name>
    <message>
        <source>Underline</source>
        <translation type="obsolete">Subliñado</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation>Versalitas</translation>
    </message>
    <message>
        <source>Subscript</source>
        <translation>Subíndice</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation>Superíndice</translation>
    </message>
    <message>
        <source>Strike Out</source>
        <translation type="obsolete">Tachado</translation>
    </message>
    <message>
        <source>Outline Text</source>
        <translation type="obsolete">Contorno</translation>
    </message>
    <message>
        <source>Underline Words Only</source>
        <translation type="obsolete">Subliñar Só as Palabras</translation>
    </message>
    <message>
        <source>All Caps</source>
        <translation>Todo en Maiúsculas</translation>
    </message>
    <message>
        <source>Outline</source>
        <translation type="obsolete">Esquema</translation>
    </message>
    <message>
        <source>Shadow</source>
        <translation type="obsolete">Sombra</translation>
    </message>
    <message>
        <source>Outline</source>
        <comment>Text Style Selector</comment>
        <translation type="obsolete">Contorno

Selector de Estilo de Texto</translation>
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
        <source>OpenOffice.org Writer Importer Options</source>
        <translation>Opcións do Importador do Writer de OpenOffice.org</translation>
    </message>
    <message>
        <source>Update Paragraph Styles</source>
        <translation type="obsolete">Actualizar os Estilos de Parágrafo</translation>
    </message>
    <message>
        <source>Enabling this will overwrite existing styles in the current Scribus document</source>
        <translation>Se o permite sobreescribiránse os estilos do documento actual de Scribus</translation>
    </message>
    <message>
        <source>Merge Paragraph Styles</source>
        <translation>Integrar os Estilos de Parágrafo</translation>
    </message>
    <message>
        <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document&apos;s styles are named differently.</source>
        <translation>Integrar os estilos de parágrafo polos seus atributos. Isto resultará nun menor número de estilos de parágrafo semellantes e reterá os atributos de estilo, mesmo se os estilos do documento orixinal teñen un nome diferente.</translation>
    </message>
    <message>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation>Usar o nome do documento como prefixo para os estilos de parágrafo</translation>
    </message>
    <message>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation>Antepor o nome do documento ao nome do estilo de parágrafo en Scribus.</translation>
    </message>
    <message>
        <source>Do not ask again</source>
        <translation>Non perguntar máis</translation>
    </message>
    <message>
        <source>Make these settings the default and do not prompt again when importing an OpenOffice.org 1.x document.</source>
        <translation>Configurar isto como predeterminado e non perguntar máis cando se importe un documento de OpenOffice.org 1.x.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>De acordo</translation>
    </message>
    <message>
        <source>Overwrite Paragraph Styles</source>
        <translation>Substituir os Estilos de Parágrafo</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
</context>
<context>
    <name>TOCIndexPrefs</name>
    <message>
        <source>None</source>
        <translation>Nengunha</translation>
    </message>
    <message>
        <source>At the beginning</source>
        <translation>No principio</translation>
    </message>
    <message>
        <source>At the end</source>
        <translation>No final</translation>
    </message>
    <message>
        <source>Not Shown</source>
        <translation>Non se Mostra</translation>
    </message>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation>Índice e Índices Analíticos</translation>
    </message>
    <message>
        <source>Table Of Contents</source>
        <translation>Índice</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Adicionar</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>The frame the table of contents will be placed into</source>
        <translation>A moldura na que se colocará o índice</translation>
    </message>
    <message>
        <source>Page Numbers Placed:</source>
        <translation>Números de Páxina Colocados:</translation>
    </message>
    <message>
        <source>Item Attribute Name:</source>
        <translation>Nome do Elemento Atributo:</translation>
    </message>
    <message>
        <source>The Item Attribute that will be set on frames used as a basis for creation of the entries</source>
        <translation>O Atributo Elemento que se asignará ás molduras utilizadas como base para a creación de entradas</translation>
    </message>
    <message>
        <source>Place page numbers of the entries at the beginning or the end of the line, or not at all</source>
        <translation>Colocar os números de páxina das entradas no principio ou no final da liña, ou non colocalas</translation>
    </message>
    <message>
        <source>List Non-Printing Entries</source>
        <translation>Listaxe de Entradas que Non se Imprimen</translation>
    </message>
    <message>
        <source>Include frames that are set to not print as well</source>
        <translation>Incluir tamén molduras que se indica que non se van imprimir</translation>
    </message>
    <message>
        <source>The paragraph style used for the entry lines</source>
        <translation>O estilo de parágrafo utilizado para as liñas de entrada</translation>
    </message>
    <message>
        <source>Paragraph Style:</source>
        <translation>Estilo de Parágrafo:</translation>
    </message>
    <message>
        <source>Destination Frame:</source>
        <translation>Moldura de Destino:</translation>
    </message>
    <message>
        <source>Inde&amp;x</source>
        <translation>Índi&amp;ce</translation>
    </message>
</context>
<context>
    <name>TOCIndexPrefsBase</name>
    <message>
        <source>Table of Contents and Indexes</source>
        <translation>Índice e Índices Analíticos</translation>
    </message>
    <message>
        <source>Table Of Contents</source>
        <translation>Índice</translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>&amp;Adicionar</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>Alt+D</source>
        <translation>Alt+D</translation>
    </message>
    <message>
        <source>The frame the table of contents will be placed into</source>
        <translation>A moldura na que se colocará o índice</translation>
    </message>
    <message>
        <source>Page Numbers Placed:</source>
        <translation>Números de Páxina Colocados:</translation>
    </message>
    <message>
        <source>Item Attribute Name:</source>
        <translation>Nome do Elemento Atributo:</translation>
    </message>
    <message>
        <source>The Item Attribute that will be set on frames used as a basis for creation of the entries</source>
        <translation>O Atributo do Elemento que se asignará ás molduras utilizadas como base para a creación de entradas</translation>
    </message>
    <message>
        <source>Place page numbers of the entries at the beginning or the end of the line, or not at all</source>
        <translation>Colocar os números de páxina das entradas no principio ou no final da liña, ou non colocalas</translation>
    </message>
    <message>
        <source>List Non-Printing Entries</source>
        <translation>Listaxe de Entradas que Non se Imprimen</translation>
    </message>
    <message>
        <source>Include frames that are set to not print as well</source>
        <translation>Incluir tamén molduras que se indica que non se van imprimir</translation>
    </message>
    <message>
        <source>The paragraph style used for the entry lines</source>
        <translation>O estilo de parágrafo utilizado para as liñas de entrada</translation>
    </message>
    <message>
        <source>Paragraph Style:</source>
        <translation>Estilo de Parágrafo:</translation>
    </message>
    <message>
        <source>Destination Frame:</source>
        <translation>Moldura de Destino:</translation>
    </message>
    <message>
        <source>Inde&amp;x</source>
        <translation>Índi&amp;ce</translation>
    </message>
</context>
<context>
    <name>TabCheckDoc</name>
    <message>
        <source>Ignore all errors</source>
        <translation>Ignorar todos os erros</translation>
    </message>
    <message>
        <source>Automatic check before printing or exporting</source>
        <translation>Comprobación automática antes de imprimir ou exportar</translation>
    </message>
    <message>
        <source>Check for missing glyphs</source>
        <translation>Comprobar os glifos que falten</translation>
    </message>
    <message>
        <source>Check for objects not on a page</source>
        <translation>Comprobar os obxectos que non estexan nunha páxina</translation>
    </message>
    <message>
        <source>Check for overflow in text frames</source>
        <translation>Comprobar se desbordan as molduras de texto</translation>
    </message>
    <message>
        <source>Check for transparencies used</source>
        <translation>Comprobar as transparencias utilizadas</translation>
    </message>
    <message>
        <source>Check for missing images</source>
        <translation>Comprobar as imaxes que falten</translation>
    </message>
    <message>
        <source>Check image resolution</source>
        <translation>Comprobar a resolución das imaxes</translation>
    </message>
    <message>
        <source>Lowest allowed resolution</source>
        <translation>Resolución máis baixa permitida</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation> dpi</translation>
    </message>
    <message>
        <source>Check for placed PDF Files</source>
        <translation>Comprobar os Ficheiros PDF colocados</translation>
    </message>
    <message>
        <source>Check for PDF Annotations and Fields</source>
        <translation>Comprobar as Anotacións e Campos PDF</translation>
    </message>
    <message>
        <source>Add Profile</source>
        <translation>Adicionar Perfil</translation>
    </message>
    <message>
        <source>Remove Profile</source>
        <translation>Eliminar Perfil</translation>
    </message>
</context>
<context>
    <name>TabGuides</name>
    <message>
        <source>Common Settings</source>
        <translation>Configuración Común</translation>
    </message>
    <message>
        <source>Placing in Documents</source>
        <translation>Colocación nos Documentos</translation>
    </message>
    <message>
        <source>In the Background</source>
        <translation>No Fondo</translation>
    </message>
    <message>
        <source>In the Foreground</source>
        <translation>No Primeiro Plano</translation>
    </message>
    <message>
        <source>Snapping</source>
        <translation>Agarre</translation>
    </message>
    <message>
        <source>Snap Distance:</source>
        <translation>Distancia de Agarre:</translation>
    </message>
    <message>
        <source>Grab Radius:</source>
        <translation>Radio de Agarre:</translation>
    </message>
    <message>
        <source> px</source>
        <translation> px</translation>
    </message>
    <message>
        <source>Show Guides</source>
        <translation>Mostrar as Guías</translation>
    </message>
    <message>
        <source>Color:</source>
        <translation>Cor:</translation>
    </message>
    <message>
        <source>Show Margins</source>
        <translation>Mostrar as Marxes</translation>
    </message>
    <message>
        <source>Show Page Grid</source>
        <translation>Mostrar a Grella da Páxina</translation>
    </message>
    <message>
        <source>Major Grid</source>
        <translation>Grella Principal</translation>
    </message>
    <message>
        <source>Spacing:</source>
        <translation>Espaciamento:</translation>
    </message>
    <message>
        <source>Minor Grid</source>
        <translation>Grella Secundaria</translation>
    </message>
    <message>
        <source>Show Baseline Grid</source>
        <translation>Mostrar a Grella de Base</translation>
    </message>
    <message>
        <source>Baseline Settings</source>
        <translation>Configuración da liña base</translation>
    </message>
    <message>
        <source>Baseline &amp;Grid:</source>
        <translation>&amp;Grella de Base:</translation>
    </message>
    <message>
        <source>Baseline &amp;Offset:</source>
        <translation>Dis&amp;tancia da Grella Base:</translation>
    </message>
    <message>
        <source>Guides are not visible through objects on the page</source>
        <translation>As guías non se ven através dos obxectos da páxina</translation>
    </message>
    <message>
        <source>Guides are visible above all objects on the page</source>
        <translation>As guías vense por en cima dos obxectos da páxina</translation>
    </message>
    <message>
        <source>Distance between the minor grid lines</source>
        <translation>Distancia entre as liñas da grella secundaria</translation>
    </message>
    <message>
        <source>Distance between the major grid lines</source>
        <translation>Distancia entre as liñas da grella principal</translation>
    </message>
    <message>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation>Distancia á que un obxecto se agarrará ás guías personalizadas</translation>
    </message>
    <message>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation>Radio da área dentro da que Scribus permitirá agarrar os manipuladores</translation>
    </message>
    <message>
        <source>Color of the minor grid lines</source>
        <translation>Cor das liñas da grella secundaria</translation>
    </message>
    <message>
        <source>Color of the major grid lines</source>
        <translation>Cor das liñas da grella principal</translation>
    </message>
    <message>
        <source>Color of the guide lines you insert</source>
        <translation>Cor das liñas das liñas guía que vaia colocando</translation>
    </message>
    <message>
        <source>Color for the margin lines</source>
        <translation>Cor das liñas das marxes</translation>
    </message>
    <message>
        <source>Color for the baseline grid</source>
        <translation>Cor da grella de base</translation>
    </message>
    <message>
        <source>Turns the basegrid on or off</source>
        <translation>Activa ou desactiva a grella de base</translation>
    </message>
    <message>
        <source>Distance between the lines of the baseline grid</source>
        <translation>Distancia entre as liñas da grella de base</translation>
    </message>
    <message>
        <source>Distance from the top of the page for the first baseline</source>
        <translation>Distancia desde a parte superior da páxina á primeira liña de base</translation>
    </message>
    <message>
        <source>Turns the gridlines on or off</source>
        <translation>Activa ou desactiva as liñas da grella</translation>
    </message>
    <message>
        <source>Turns the guides on or off</source>
        <translation>Activa ou desactiva as guías</translation>
    </message>
    <message>
        <source>Turns the margins on or off</source>
        <translation>Activa ou desactiva as marxes</translation>
    </message>
</context>
<context>
    <name>TabManager</name>
    <message>
        <source>Manage Tabulators</source>
        <translation>Xerir as Tabulacións</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>TabPDFOptions</name>
    <message>
        <source>Export Range</source>
        <translation>Rango de exportación</translation>
    </message>
    <message>
        <source>&amp;All Pages</source>
        <translation>Tod&amp;as as Páxinas</translation>
    </message>
    <message>
        <source>C&amp;hoose Pages</source>
        <translation>Esco&amp;ller as Páxinas</translation>
    </message>
    <message>
        <source>&amp;Rotation:</source>
        <translation>&amp;Rotación:</translation>
    </message>
    <message>
        <source>File Options</source>
        <translation>Opcións do Ficheiro</translation>
    </message>
    <message>
        <source>Compatibilit&amp;y:</source>
        <translation>Compat&amp;ibilidade:</translation>
    </message>
    <message>
        <source>&amp;Binding:</source>
        <translation>&amp;Encadernación:</translation>
    </message>
    <message>
        <source>Left Margin</source>
        <translation>Marxe Esquerda</translation>
    </message>
    <message>
        <source>Right Margin</source>
        <translation>Marxe Direita</translation>
    </message>
    <message>
        <source>Generate &amp;Thumbnails</source>
        <translation>Xerar &amp;Miniaturas</translation>
    </message>
    <message>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation>Salvar as Molduras de Texto Vin&amp;culadas como Artigos PDF</translation>
    </message>
    <message>
        <source>&amp;Include Bookmarks</source>
        <translation>&amp;Incluir os Marcadores</translation>
    </message>
    <message>
        <source>Include Layers</source>
        <translation type="obsolete">Incluir as Capas</translation>
    </message>
    <message>
        <source> dpi</source>
        <translation> dpi</translation>
    </message>
    <message>
        <source>&amp;Resolution for EPS Graphics:</source>
        <translation>&amp;Resolución para os Gráficos EPS:</translation>
    </message>
    <message>
        <source>Com&amp;press Text and Vector Graphics</source>
        <translation>Com&amp;primir o Texto e os Gráficos Vectoriais</translation>
    </message>
    <message>
        <source>Image Settings</source>
        <translation type="obsolete">Configuración das Imaxes</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automática</translation>
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
        <translation>Nengunha</translation>
    </message>
    <message>
        <source>&amp;Method:</source>
        <translation type="obsolete">&amp;Método:</translation>
    </message>
    <message>
        <source>&amp;Quality:</source>
        <translation type="obsolete">&amp;Calidade:</translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation>Máxima</translation>
    </message>
    <message>
        <source>High</source>
        <translation>Alta</translation>
    </message>
    <message>
        <source>Medium</source>
        <translation>Media</translation>
    </message>
    <message>
        <source>Low</source>
        <translation>Baixa</translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation>Mínima</translation>
    </message>
    <message>
        <source>Resample Images to:</source>
        <translation type="obsolete">Reexaminar as Imaxes a:</translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation>&amp;Xeral</translation>
    </message>
    <message>
        <source>&amp;Embed all Fonts</source>
        <translation>&amp;Embeber todas as Fontes</translation>
    </message>
    <message>
        <source>&amp;Subset all Fonts</source>
        <translation>&amp;Subconxunto de todas as Fontes</translation>
    </message>
    <message>
        <source>Embedding</source>
        <translation>Embeber</translation>
    </message>
    <message>
        <source>Available Fonts:</source>
        <translation>Fontes Disponíbeis:</translation>
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
        <translation>Fontes a embeber:</translation>
    </message>
    <message>
        <source>Fonts to subset:</source>
        <translation>Fontes en subconxunto:</translation>
    </message>
    <message>
        <source>&amp;Fonts</source>
        <translation>&amp;Fontes</translation>
    </message>
    <message>
        <source>Enable &amp;Presentation Effects</source>
        <translation>Permitir os Efectos de &amp;Presentación</translation>
    </message>
    <message>
        <source>Page</source>
        <translation>Páxina</translation>
    </message>
    <message>
        <source>Show Page Pre&amp;views</source>
        <translation>Mostrar a Ante&amp;visión das Páxinas</translation>
    </message>
    <message>
        <source>Effects</source>
        <translation>Efectos</translation>
    </message>
    <message>
        <source>&amp;Display Duration:</source>
        <translation>Duración da E&amp;xhibición:</translation>
    </message>
    <message>
        <source>Effec&amp;t Duration:</source>
        <translation>Duración do Efec&amp;to:</translation>
    </message>
    <message>
        <source>Effect T&amp;ype:</source>
        <translation>T&amp;ipo de Efecto:</translation>
    </message>
    <message>
        <source>&amp;Moving Lines:</source>
        <translation>Liñas que se &amp;moven:</translation>
    </message>
    <message>
        <source>F&amp;rom the:</source>
        <translation>De&amp;sde a:</translation>
    </message>
    <message>
        <source>D&amp;irection:</source>
        <translation>D&amp;irección:</translation>
    </message>
    <message>
        <source> sec</source>
        <translation> seg</translation>
    </message>
    <message>
        <source>No Effect</source>
        <translation>Sen Efectos</translation>
    </message>
    <message>
        <source>Blinds</source>
        <translation>Persianas</translation>
    </message>
    <message>
        <source>Box</source>
        <translation>Caixa</translation>
    </message>
    <message>
        <source>Dissolve</source>
        <translation>Disolución</translation>
    </message>
    <message>
        <source>Glitter</source>
        <translation>Brillos</translation>
    </message>
    <message>
        <source>Split</source>
        <translation>Partir</translation>
    </message>
    <message>
        <source>Wipe</source>
        <translation>Limpar</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation>Horizontal</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation>Vertical</translation>
    </message>
    <message>
        <source>Inside</source>
        <translation>Dentro</translation>
    </message>
    <message>
        <source>Outside</source>
        <translation>Fora</translation>
    </message>
    <message>
        <source>Left to Right</source>
        <translation>De Esquerda a Direita</translation>
    </message>
    <message>
        <source>Top to Bottom</source>
        <translation>De Arriba a Baixo</translation>
    </message>
    <message>
        <source>Bottom to Top</source>
        <translation>De Abaixo a Riba</translation>
    </message>
    <message>
        <source>Right to Left</source>
        <translation>De Direita a Esquerda</translation>
    </message>
    <message>
        <source>Top-left to Bottom-Right</source>
        <translation>Superior Esquerda a Inferior Direita</translation>
    </message>
    <message>
        <source>&amp;Apply Effect on all Pages</source>
        <translation>&amp;Aplicar o Efecto a todas as páxinas</translation>
    </message>
    <message>
        <source>E&amp;xtras</source>
        <translation>E&amp;xtras</translation>
    </message>
    <message>
        <source>&amp;Use Encryption</source>
        <translation>&amp;Usar Encriptación</translation>
    </message>
    <message>
        <source>Passwords</source>
        <translation>Contrasinais</translation>
    </message>
    <message>
        <source>&amp;User:</source>
        <translation>&amp;Utilizador:</translation>
    </message>
    <message>
        <source>&amp;Owner:</source>
        <translation>&amp;Proprietario:</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation>Configuración</translation>
    </message>
    <message>
        <source>Allow &amp;Printing the Document</source>
        <translation>Permitir a Im&amp;presión do Documento</translation>
    </message>
    <message>
        <source>Allow &amp;Changing the Document</source>
        <translation>Permitir a &amp;Modificación do Documento</translation>
    </message>
    <message>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation>Permitir a Cop&amp;ia de Texto e Gráficos</translation>
    </message>
    <message>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation>Permitir Engadir &amp;Anotacións e Campos</translation>
    </message>
    <message>
        <source>S&amp;ecurity</source>
        <translation>S&amp;eguranza</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Xeral</translation>
    </message>
    <message>
        <source>Output &amp;Intended For:</source>
        <translation>Saída &amp;Deseñada Para:</translation>
    </message>
    <message>
        <source>Screen / Web</source>
        <translation>Pantalla / Web</translation>
    </message>
    <message>
        <source>Printer</source>
        <translation>Impresora</translation>
    </message>
    <message>
        <source>Grayscale</source>
        <translation>Escala de grises</translation>
    </message>
    <message>
        <source>Convert Spot Colors to Process Colors</source>
        <translation>Convertir as Manchas de Cor en Cores Procesadas</translation>
    </message>
    <message>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation>&amp;Utilizar Configuración Personalizada da Exhibición</translation>
    </message>
    <message>
        <source>Rendering Settings</source>
        <translation>Configuración da Exhibición</translation>
    </message>
    <message>
        <source>Fre&amp;quency:</source>
        <translation>Fre&amp;cuencia:</translation>
    </message>
    <message>
        <source>&amp;Angle:</source>
        <translation>&amp;Ángulo:</translation>
    </message>
    <message>
        <source>S&amp;pot Function:</source>
        <translation>Función P&amp;unto:</translation>
    </message>
    <message>
        <source>Simple Dot</source>
        <translation>Punto simple</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Liña</translation>
    </message>
    <message>
        <source>Round</source>
        <translation>Arredondado</translation>
    </message>
    <message>
        <source>Ellipse</source>
        <translation>Elipse</translation>
    </message>
    <message>
        <source>Solid Colors:</source>
        <translation>Cores sólidas:</translation>
    </message>
    <message>
        <source>Use ICC Profile</source>
        <translation>Usar o Perfil ICC</translation>
    </message>
    <message>
        <source>Profile:</source>
        <translation>Perfil:</translation>
    </message>
    <message>
        <source>Rendering-Intent:</source>
        <translation>Propósito da exhibición:</translation>
    </message>
    <message>
        <source>Perceptual</source>
        <translation>Perceptual</translation>
    </message>
    <message>
        <source>Relative Colorimetric</source>
        <translation>Colorimétrico relativo</translation>
    </message>
    <message>
        <source>Saturation</source>
        <translation>Saturación</translation>
    </message>
    <message>
        <source>Absolute Colorimetric</source>
        <translation>Colorimétrico absoluto</translation>
    </message>
    <message>
        <source>Images:</source>
        <translation>Imaxes:</translation>
    </message>
    <message>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation>Non usar os perfís ICC embebidos</translation>
    </message>
    <message>
        <source>C&amp;olor</source>
        <translation>C&amp;or</translation>
    </message>
    <message>
        <source>PDF/X-3 Output Intent</source>
        <translation>Intención de Saída PDF/X-3</translation>
    </message>
    <message>
        <source>&amp;Info String:</source>
        <translation>Cadea &amp;Info:</translation>
    </message>
    <message>
        <source>Output &amp;Profile:</source>
        <translation>&amp;Perfil de Saída:</translation>
    </message>
    <message>
        <source>Trim Box</source>
        <translation>Caixa de Recorte</translation>
    </message>
    <message>
        <source>PDF/X-&amp;3</source>
        <translation>PDF/X-&amp;3</translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts
will preserve the layout and appearance of your document.</source>
        <translation type="obsolete">Embeber as fontes no PDF. Embeber as fontes
manterá a dispoción e aparencia do seu documento.</translation>
    </message>
    <message>
        <source>Enables presentation effects when using Adobe&amp;#174; Reader&amp;#174; in full screen mode.</source>
        <translation type="obsolete">Permite os efectos de presentación ao usar Adobe&amp;#174; Reader&amp;#174; na pantalla completa.</translation>
    </message>
    <message>
        <source>Show page previews of each page listed above.</source>
        <translation>Mostrar a antevisión de páxina para cada páxina das que se listan en cima.</translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page.</source>
        <translation type="obsolete">Extensión de tempo durante a que se mostra a páxina antes de que a presentación comece na páxina seleccionada.</translation>
    </message>
    <message>
        <source>Length of time the effect runs.
A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation type="obsolete">Extensión de tempo durante a que dura o efecto. Un tempo menor acelerará o efecto; un maior enlentecerao.</translation>
    </message>
    <message>
        <source>Type of the display effect.</source>
        <translation>Tipo de efecto.</translation>
    </message>
    <message>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation>Dirección do efecto de liñas que se moven para os efectos partir e persianas.</translation>
    </message>
    <message>
        <source>Starting position for the box and split effects.</source>
        <translation>Posición inicial para os efectos de caixa e partir.</translation>
    </message>
    <message>
        <source>Direction of the glitter or wipe effects.</source>
        <translation>Dirección dos efectos de brillos e borrado.</translation>
    </message>
    <message>
        <source>Apply the selected effect to all pages.</source>
        <translation>Aplicar os efectos seleccionados a todas as páxinas.</translation>
    </message>
    <message>
        <source>Export all pages to PDF</source>
        <translation>Exportar todas as páxinas a PDF</translation>
    </message>
    <message>
        <source>Export a range of pages to PDF</source>
        <translation>Exportar un rango de páxinas a PDF</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="obsolete">Inserir unha lista de elementos separada por vírgulas, na que
un valor pode ser * para todas as páxinas, 1-5 para
un rango de páxinas ou un único número de páxina.</translation>
    </message>
    <message>
        <source>Determines the PDF compatibility.
The default is PDF 1.3 which gives the widest compatibility.
Choose PDF 1.4 if your file uses features such as transparency or you require 128 bit encryption.
PDF/X-3 is for exporting the PDF, when you want color managed RGB for commercial printing
 and is selectable when you have activated color management. 
Use only when advised by your printer or in some cases printing to a 4 color digital color laser printer.</source>
        <translation type="obsolete">Determina a compatibilidade do PDF.
Por omisión é PDF 1.3, que permite a maior compatibilidade.
Escolla PDF 1.4 se o seu ficheiro utiliza características como a transparencia ou se require de encriptación de 128 bits.
PDF/X-3 é para exportar o PDF cando precisa de cor RGB xestionada para a impresión comercial
e pódese escoller se ten activada a xestión da cor.
Utilíceo só cando llo pidan da imprenta ou nalgúns casos nos que vaia imprimir nunha impresora laser dixital de catro cores.
</translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know
you need to change it leave the default choice - Left.</source>
        <translation type="obsolete">Determina a encadernación de páxinas no PDF. A non ser que o saiba
terá que deixar a escolla por omisión: Esquerda.</translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF.
Some viewers can use the thumbnails for navigation.</source>
        <translation type="obsolete">Xera miniaturas de cada páxina no PDF.
Algúns visualizadores poden usar as miniaturas para a navegación.</translation>
    </message>
    <message>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation>Xerar Artigos PDF, que resultan útiles para navegar por artigos vinculados nun PDF.</translation>
    </message>
    <message>
        <source>Layers in your document are exported to the PDF
Only available if PDF 1.5 is choosen.</source>
        <translation type="obsolete">As capas do seu documento expórtanse para o PDF.
Só disponíbel se se escolle PDF 1.5.</translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document.
These are useful for navigating long PDF documents.</source>
        <translation type="obsolete">Embeber os marcadores que creou no seu documento.
Resultan útiles para navegar por documentos PDF longos.</translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics.
This does not affect the resolution of bitmap images like photos.</source>
        <translation type="obsolete">Exportar a resolución do texto e os gráficos vectoriais.
Isto non vai afectar a resolución das imaxes bitmap como as fotos.</translation>
    </message>
    <message>
        <source>Enable lossless compression of text and graphics.
Unless you have a reason, leave this checked. This reduces PDF size.</source>
        <translation type="obsolete">Permitira a compresión sen perdas de texto e gráficos.
A non ser que teña unha boa razón, selecciónao. Isto reduce o tamaño do PDF.</translation>
    </message>
    <message>
        <source>Method of compression to use for images. Automatic allows Scribus to choose the best method. ZIP is lossless and good for images with solid colors. JPEG is better at creating smaller PDF files which have many photos (with slight image quality loss possible). Leave it set to Automatic, unless you have a need for special compression options.</source>
        <translation type="obsolete">Método de compresión a usar polas imaxes. Automático permite que Scribus escolla o mellor método. ZIP non provoca perdas e é bon para imaxes con cores sólidas. JPEG é mellor en crear ficheiros PDF máis pequenos con moitas fotos (cunha posíbel lixeira perda de calidade). Déixeo en Automático, a non ser que teña unha razón para escoller unha compresión especial.</translation>
    </message>
    <message>
        <source>Compression levels: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%)</source>
        <translation type="obsolete">Níveis de compresión: Mínimo (25%), Baixo (50%), Medio (75%), Alto (85%), Máximo (95%)</translation>
    </message>
    <message>
        <source>Re-sample your bitmap images to the selected DPI.
Leaving this unchecked will render them at their native resolution.
This can increase memory usage and slow down export.</source>
        <translation type="obsolete">Reexaminar as imaxes bitmap para os ppp seleccionados.
Se non se selecciona mostraranse na súa resolución orixinal.
Isto pode incrementar o uso da memoria e enlentecer a exportación.</translation>
    </message>
    <message>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation>PPP (Puntos Por Pulgada) para a exportación das imaxes.</translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF.
If you selected PDF 1.3, the PDF will be protected by 40 bit encryption.
If you selected PDF 1.4, the PDF will be protected by 128 bit encryption.
Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation type="obsolete">Permitir as características de seguranza nos PDF que exporte.
Se escolleu PDF 1.3, o PDF estará protexido con encriptación de 40 bits.
Se escolleu PDF 1.4, o PDF estará protexido con encriptación de 128 bits.
Descargo de responsabilidade: A encriptación dos PDF non é de tanta fiabilidade como a encriptación con GPG ou PGP e ten certos limites.</translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the
security features in your exported PDF</source>
        <translation type="obsolete">Escolla un contrasinal mestre que permita ou deshabilite todas
as funcionalidades de seguranza do seu PDF exportado</translation>
    </message>
    <message>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation>Escolla un contrasinal para que os usuarios poidan ler o seu PDF.</translation>
    </message>
    <message>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation>Permite que se imprima o PDF. Se non se selecciona impídese que se imprima.</translation>
    </message>
    <message>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation>Permite modificar o PDF. Se non se escolle impídese a modificación do PDF.</translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. 
If un-checked, text and graphics cannot be copied.</source>
        <translation type="obsolete">Permite copiar o texto ou gráficos do PDF.
Se non se escolle, non se poderán copiar nen o texto nen os gráficos.</translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. 
If un-checked, editing annotations and fileds is prevented.</source>
        <translation type="obsolete">Permite engadir anotacións e campos ao PDF.
Se non se selecciona impedirase a modificación de anotacións e campos.</translation>
    </message>
    <message>
        <source>Color model for the output of your PDF.
Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets.
Choose Printer when printing to a true 4 color CMYK printer.</source>
        <translation type="obsolete">Modelo de cor para a saída do seu PDF.
Escolla Pantalla/Web para PDFs que vaian ser mostrados nunha pantalla ou que se vaian imprimir nunha impresora de tinta típica.
Escolla Impresora cando sexan para imprimir nunha impresora de 4 cores CMYK verdadeiros.</translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled
when specifically requested by your printer and they have given you the exact details needed.
Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation type="obsolete">Esta é unha configuación avanzada que non se habilita por omisión. Só debería habilitarse
cando o indique explicitamente a súa imprenta e lle fornezan da información precisa.
Se non, o seu PDF exportado pode non imprimirse correctamente e con certeza non será portábel entre sistemas.</translation>
    </message>
    <message>
        <source>Embed a color profile for solid colors</source>
        <translation>Embeber un perfil de cor para cores sólidas</translation>
    </message>
    <message>
        <source>Color profile for solid colors</source>
        <translation>Perfil de cor para cores sólidas</translation>
    </message>
    <message>
        <source>Rendering intent for solid colors</source>
        <translation>Propósito da exhibición para cores sólidas</translation>
    </message>
    <message>
        <source>Embed a color profile for images</source>
        <translation>Embeber un perfil de cor para imaxes</translation>
    </message>
    <message>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation>Non usar perfís de cor embebidos en imaxes fonte</translation>
    </message>
    <message>
        <source>Color profile for images</source>
        <translation>Perfil de cor para imaxes</translation>
    </message>
    <message>
        <source>Rendering intent for images</source>
        <translation>Propósito da exhibición para imaxes</translation>
    </message>
    <message>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation>Perfil de saída para a impresión. De ser posíbel, solicite orientación na imprenta sobre a selección de perfís.</translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail
PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation type="obsolete">Cadea obrigatoria para PDF/X-3 ou o PDF fallará
na conformidade con PDF/X-3. Recomendamos que use o título do documento.</translation>
    </message>
    <message>
        <source>Distance for bleed from the top of the physical page</source>
        <translation>Distancia de sangrado desde a parte superior da páxina física</translation>
    </message>
    <message>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation>Distancia de sangrado desde a parte inferior da páxina física</translation>
    </message>
    <message>
        <source>Distance for bleed from the left of the physical page</source>
        <translation>Distancia de sangrado desde a esquerda da páxina física</translation>
    </message>
    <message>
        <source>Distance for bleed from the right of the physical page</source>
        <translation>Distancia de sangrado desde a direita da páxina física</translation>
    </message>
    <message>
        <source>Mirror Page(s) horizontally</source>
        <translation>Reflexar a(s) Páxina(s) horizontalmente</translation>
    </message>
    <message>
        <source>Mirror Page(s) vertically</source>
        <translation>Reflexar a(s) Páxina(s) verticalmente</translation>
    </message>
    <message>
        <source>Compression &amp;Quality:</source>
        <translation>&amp;Calidade da Compresión:</translation>
    </message>
    <message>
        <source>Compression quality levels for lossy compression methods: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%). Note that a quality level does not directly determine the size of the resulting image - both size and quality loss vary from image to image at any given quality level.</source>
        <translation>Níveis de calidade da compresión para métodos de compresión con perda: Mínimo (25%), Medio (75%), Alto (85%), Máximo (95%). Observe que un nível de calidade non determina directamente o tamaño da imaxe resultante - tanto o tamaño como a perda de calidade varían de imaxe en imaxe en calquer nível de calidade dado.</translation>
    </message>
    <message>
        <source>Allow copying of text or graphics from the PDF. If unchecked, text and graphics cannot be copied.</source>
        <translation>Permitir a copia de texto ou gráficos do PDF. Se non se selecciona non se poden copiar nen texto nen gráficos.</translation>
    </message>
    <message>
        <source>Allow adding annotations and fields to the PDF. If unchecked, editing annotations and fields is prevented.</source>
        <translation>Permite adicionar anotacións e campos no PDF. Se non se selecciona impídese modificar as anotacións e os campos.</translation>
    </message>
    <message>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation>Permite que as Manchas de Cor se convirtan en cores compostas. A non ser que pretenda imprimir manchas de cor nunha imprenta comercial, será preferíbel que deixe isto seleccionado.</translation>
    </message>
    <message>
        <source>Include La&amp;yers</source>
        <translation>Incluir &amp;Capas</translation>
    </message>
    <message>
        <source>Compression Metho&amp;d:</source>
        <translation>Méto&amp;do de Compresión:</translation>
    </message>
    <message>
        <source>Resa&amp;mple Images to:</source>
        <translation>Anali&amp;zar as Imaxes a:</translation>
    </message>
    <message>
        <source>Embed fonts into the PDF. Embedding the fonts will preserve the layout and appearance of your document.</source>
        <translation>Embeber as fontes no PDF. Embeber as fontes manterá a disposición e a aparencia do seu documento.</translation>
    </message>
    <message>
        <source>Length of time the effect runs. A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation>Duración de tempo durante o que se executa o efecto. Un tempo menor acelerará o efecto, un maior enlentecerao.</translation>
    </message>
    <message>
        <source>Insert a comma separated list of tokens where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
        <translation>Inserir unha lista separada por vírgulas de valores, na que un valor pode ser * para todas as páxinas, 1-5 para un rango de páxinas ou un único número de páxina.</translation>
    </message>
    <message>
        <source>Determines the binding of pages in the PDF. Unless you know you need to change it leave the default choice - Left.</source>
        <translation>Determina o encadernado de páxinas no PDF. A non ser que saiba que o vai precisar déixe a escolla por omisión - Esquerda.</translation>
    </message>
    <message>
        <source>Generates thumbnails of each page in the PDF. Some viewers can use the thumbnails for navigation.</source>
        <translation>Xera miniaturas para cada páxina no PDF. Algúns lectores poden utilizar as miniaturas para navegar.</translation>
    </message>
    <message>
        <source>Embed the bookmarks you created in your document. These are useful for navigating long PDF documents.</source>
        <translation>Embeber os marcadores que creou no documento. Resultan útilies para navegar por documentos PDF longos.</translation>
    </message>
    <message>
        <source>Export resolution of text and vector graphics. This does not affect the resolution of bitmap images like photos.</source>
        <translation>Exportar a resolución do texto e os gráficos vectoriais. Isto non afecta a resolución das imaxes de mapas de bits como as fotos.</translation>
    </message>
    <message>
        <source>Enables lossless compression of text and graphics. Unless you have a reason, leave this checked. This reduces PDF file size.</source>
        <translation>Permite a compresión sen perdas de texto e gráficos. A non ser que teña un motivo, non o escolla. Isto reduce o tamaño do ficheiro PDF.</translation>
    </message>
    <message>
        <source>Enable the security features in your exported PDF. If you selected PDF 1.3, the PDF will be protected by 40 bit encryption. If you selected PDF 1.4, the PDF will be protected by 128 bit encryption. Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation>Permitir as características de seguranza no seu PDF exportado. Se escolle PDF 1.3, o PDF protexerase cunha encriptación de 40 bits. Se escolle PDF 1.4 o PDF protexerase cunha encriptación de 128 bits. Advertencia: a encriptación PDF non é de tanta confianza como a encriptación GPG ou PGP e ten as súas limitacións.</translation>
    </message>
    <message>
        <source>Choose a master password which enables or disables all the security features in your exported PDF</source>
        <translation>Escolla un contrasinal mestre que permita ou impida as carcterísticas de seguranza no seu PDF exportado</translation>
    </message>
    <message>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled when specifically requested by your printer and they have given you the exact details needed. Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation>Esta é unha configuración avanzada que non se habilita por omisión. Só se debería permitir se llo require explicitamente a súa imprenta e lle forneceron os detalles precisos. De non ser así, o seu PDF exportado pode non imprimirse adecuadamente e con certeza non se poderá portar entre sistemas.</translation>
    </message>
    <message>
        <source>Mandatory string for PDF/X-3 or the PDF will fail PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation>Cadea obrigatoria para PDF/X-3 ou o PDF non será conforme con PDF/X-3. Recomendamos que utilice o título do documento.</translation>
    </message>
    <message>
        <source>Display Settings</source>
        <translation>Mostrar a Configuración</translation>
    </message>
    <message>
        <source>Page Layout</source>
        <translation>Disposición da Páxina</translation>
    </message>
    <message>
        <source>Single Page</source>
        <translation>Páxina Única</translation>
    </message>
    <message>
        <source>Continuous</source>
        <translation>Contínuo</translation>
    </message>
    <message>
        <source>Double Page Left</source>
        <translation>Dobre Páxina Esquerda</translation>
    </message>
    <message>
        <source>Double Page Right</source>
        <translation>Dobre Páxina Dereita</translation>
    </message>
    <message>
        <source>Visual Appearance</source>
        <translation>Aparencia Visual</translation>
    </message>
    <message>
        <source>Use Viewers Defaults</source>
        <translation>Utilizar o definido polo Lector</translation>
    </message>
    <message>
        <source>Use Full Screen Mode</source>
        <translation>Utilizar Modo a Pantalla Completa</translation>
    </message>
    <message>
        <source>Display Bookmarks Tab</source>
        <translation>Mostrar a Pestana de Marcadores</translation>
    </message>
    <message>
        <source>Display Thumbnails</source>
        <translation>Mostrar as Miniaturas</translation>
    </message>
    <message>
        <source>Display Layers Tab</source>
        <translation>Mostrar a Pestana de Capas</translation>
    </message>
    <message>
        <source>Hide Viewers Toolbar</source>
        <translation>Ocultar a Barra de Ferramentas do Lector</translation>
    </message>
    <message>
        <source>Hide Viewers Menubar</source>
        <translation>Ocultar a Barra de Menú do Lector</translation>
    </message>
    <message>
        <source>Zoom Pages to fit Viewer Window</source>
        <translation>Modificar o tamaño das Páxinas para adecuarse á Xanela do Lector</translation>
    </message>
    <message>
        <source>Special Actions</source>
        <translation>Accións Especiais</translation>
    </message>
    <message>
        <source>No Script</source>
        <translation>Sen Guión</translation>
    </message>
    <message>
        <source>Viewer</source>
        <translation>Lector</translation>
    </message>
    <message>
        <source>Clip to Page Margins</source>
        <translation>Arrimar ás Marxes da Páxina</translation>
    </message>
    <message>
        <source>Lossy - JPEG</source>
        <translation>Con perda - JPEG</translation>
    </message>
    <message>
        <source>Lossless - Zip</source>
        <translation>Sen perda - Zip</translation>
    </message>
    <message>
        <source>Image Compression Method</source>
        <translation>Método de Compresión das Imaxes</translation>
    </message>
    <message>
        <source>Javascript to be executed
when PDF document is opened:</source>
        <translation>Javascript que se executará
ao abrir o documento PDF:</translation>
    </message>
    <message>
        <source>Enables presentation effects when using Adobe&amp;#174; Reader&amp;#174; and other PDF viewers which support this in full screen mode.</source>
        <translation>Permite os efectos de presentación ao utilizar o  Adobe&amp;#174; Reader&amp;#174; e outros lectores de PDF que permitan isto en modo a pantalla completa.</translation>
    </message>
    <message>
        <source>Determines the PDF compatibility. The default is PDF 1.3 which gives the widest compatibility. Choose PDF 1.4 if your file uses features such as transparency or you require 128 bit encryption. PDF 1.5 is necessary when you wish to preserve objects in separate layers within the PDF.  PDF/X-3 is for exporting the PDF when you want color managed RGB for commercial printing and is selectable when you have activated color management. Use only when advised by your printer or in some cases printing to a 4 color digital color laser printer.</source>
        <translation>  Determina a compatibilidade do PDF. Por omisión é PDF 1.3, que permite a maior compatibilidade. Escolla PDF 1.4 se o seu ficheiro utiliza características como a transparencia ou se precisa de encriptación de 128 bits. O PDF 1.5 é necesario para manter obxectos en capas separadas dentro do PDF. PDF/X-3 é para exportar o PDF se quer xestionar cor RGB para a impresión comercial e pódese escoller se ten activada a xestión da cor. Utilíceo só cando llo recomente a súa imprenta ou en determinados casos en que imprima nunha impresora laser en cor dixital.</translation>
    </message>
    <message>
        <source>Layers in your document are exported to the PDF Only available if PDF 1.5 is chosen.</source>
        <translation>As capas do seu documento expórtanse ao PDF. Só é posíbel se escolle PDF 1.5.</translation>
    </message>
    <message>
        <source>Method of compression to use for images. Automatic allows Scribus to choose the best method. ZIP is lossless and good for images with solid colors. JPEG is better at creating smaller PDF files which have many photos (with slight image quality loss possible). Leave it set to Automatic unless you have a need for special compression options. This only affects JPEG images</source>
        <translation>Método de compresión a utilizar coas imaxes. Permite automaticamente que Scribus escolla o mellor método. ZIP non ten perdas e é bon para imaxes con cores sólidas. JPEG é mellor para crear ficheiros PDF máis pequenos con moitas fotos (cunha posíbel perda lixeira de calidade). Déixeo en Automático a non ser que precise de métodos especiais de compresión. Isto só afecta ás imaxes JPEG</translation>
    </message>
    <message>
        <source>Re-sample your bitmap images to the selected DPI. Leaving this unchecked will render them at their native resolution. Enabling this will increase memory usage and slow down export.</source>
        <translation>Examinar as imaxes de mapa de bits para a DPI seleccionada. Déixeo sen marcar para mostralas na súa resolución nativa. Se o activa incrementará a utilización da memoria e enlentecerá a exportación.</translation>
    </message>
    <message>
        <source>Color model for the output of your PDF. Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets. Choose Printer when printing to a true 4 color CMYK printer. Choose Grayscale when you want a grey scale PDF.</source>
        <translation>Modelo de cores para a saída para o seu PDF. Escolla Pantalla/Web para PDFs que se vaian utilizar para mostrar en pantalla e para imprimir nas impresoras de chorro de tinta normais. Escolla Impresora para imprimir en impresoras de catro cores CMYK verdadeiras. Escolla Escala de Grises se o que quer é un PDF en escala de grises.</translation>
    </message>
    <message>
        <source>Do not show objects outside the margins in the exported file</source>
        <translation>Non mostrar os obxectos que fiquen por fora das marxes no ficheiro exportado</translation>
    </message>
    <message>
        <source>Length of time the page is shown before the presentation starts on the selected page. Setting 0 will disable automatic page transition.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabTools</name>
    <message>
        <source>Font:</source>
        <translation>Fonte:</translation>
    </message>
    <message>
        <source> pt</source>
        <translation> pt</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>Tamaño:</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Nengún</translation>
    </message>
    <message>
        <source>Text Color:</source>
        <translation>Cor do Texto:</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Shading:</source>
        <translation>Saturación:</translation>
    </message>
    <message>
        <source>Text Stroke:</source>
        <translation>Trazo do Texto:</translation>
    </message>
    <message>
        <source>Fill Color:</source>
        <translation>Cor de Enchido:</translation>
    </message>
    <message>
        <source>Stroke Color:</source>
        <translation>Cor do Trazo:</translation>
    </message>
    <message>
        <source>Tab Fill Character:</source>
        <translation>Carácter de Enchido das Tabulacións:</translation>
    </message>
    <message>
        <source>Tab Width:</source>
        <translation>Anchura da Tabulación:</translation>
    </message>
    <message>
        <source>Colu&amp;mns:</source>
        <translation>Colu&amp;mnas:</translation>
    </message>
    <message>
        <source>&amp;Gap:</source>
        <translation>&amp;Distancia:</translation>
    </message>
    <message>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation>Se xa o túzaro dicía que mañá quérenllo pór</translation>
    </message>
    <message>
        <source>&amp;Line Color:</source>
        <translation>Cor da &amp;Liña:</translation>
    </message>
    <message>
        <source>&amp;Shading:</source>
        <translation>&amp;Saturación:</translation>
    </message>
    <message>
        <source>&amp;Fill Color:</source>
        <translation>Cor de &amp;Enchido:</translation>
    </message>
    <message>
        <source>S&amp;hading:</source>
        <translation>Sa&amp;turación:</translation>
    </message>
    <message>
        <source>Line Style:</source>
        <translation>Estilo da Liña:</translation>
    </message>
    <message>
        <source>Line &amp;Width:</source>
        <translation>&amp;Anchura da Liña:</translation>
    </message>
    <message>
        <source>Line S&amp;tyle:</source>
        <translation>Es&amp;tilo da Liña:</translation>
    </message>
    <message>
        <source>Arrows:</source>
        <translation>Flechas:</translation>
    </message>
    <message>
        <source>Start:</source>
        <translation>Inicio:</translation>
    </message>
    <message>
        <source>End:</source>
        <translation>Final:</translation>
    </message>
    <message>
        <source>&amp;Free Scaling</source>
        <translation>Ampliación &amp;Libre</translation>
    </message>
    <message>
        <source>&amp;Horizontal Scaling:</source>
        <translation>Ampliación &amp;Horizontal:</translation>
    </message>
    <message>
        <source>&amp;Vertical Scaling:</source>
        <translation>Ampliación &amp;Vertical:</translation>
    </message>
    <message>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation>Aco&amp;modar a Imaxe ao Tamaño da Moldura</translation>
    </message>
    <message>
        <source>Keep Aspect &amp;Ratio</source>
        <translation>Manter a &amp;Proporción</translation>
    </message>
    <message>
        <source>F&amp;ill Color:</source>
        <translation>C&amp;or de Enchido:</translation>
    </message>
    <message>
        <source>Use embedded Clipping Path</source>
        <translation>Utilizar o Trazo de Pegado embebido</translation>
    </message>
    <message>
        <source>On Screen Preview</source>
        <translation>Antevisión na Pantalla</translation>
    </message>
    <message>
        <source>Full Resolution Preview</source>
        <translation>Antevisión a Resolución Total</translation>
    </message>
    <message>
        <source>Normal Resolution Preview</source>
        <translation>Antevisión a Resolución Normal</translation>
    </message>
    <message>
        <source>Low Resolution Preview</source>
        <translation>Antevisión a Baixa Resolución</translation>
    </message>
    <message>
        <source>Mi&amp;nimum:</source>
        <translation>Mí&amp;nimo:</translation>
    </message>
    <message>
        <source>Ma&amp;ximum:</source>
        <translation>Má&amp;ximo:</translation>
    </message>
    <message>
        <source>&amp;Stepping:</source>
        <translation>&amp;Salto:</translation>
    </message>
    <message>
        <source>Text Frame Properties</source>
        <translation>Propriedades das Molduras de Texto</translation>
    </message>
    <message>
        <source>Picture Frame Properties</source>
        <translation>Propriedades das Molduras de Imaxes</translation>
    </message>
    <message>
        <source>Shape Drawing Properties</source>
        <translation>Propriedades do Deseño de Formas</translation>
    </message>
    <message>
        <source>Magnification Level Defaults</source>
        <translation>Nível Predeterminado de Aumento</translation>
    </message>
    <message>
        <source>Line Drawing Properties</source>
        <translation>Propriedades do Deseño de Liñas</translation>
    </message>
    <message>
        <source>Polygon Drawing Properties</source>
        <translation>Propriedades do Deseño de Polígonos</translation>
    </message>
    <message>
        <source>Font for new text frames</source>
        <translation>Fonte para as molduras de texto novas</translation>
    </message>
    <message>
        <source>Size of font for new text frames</source>
        <translation>Tamaño da fonte para as molduras de texto novas</translation>
    </message>
    <message>
        <source>Color of font</source>
        <translation>Cor da fonte</translation>
    </message>
    <message>
        <source>Number of columns in a text frame</source>
        <translation>Número de columnas nunha moldura de texto</translation>
    </message>
    <message>
        <source>Gap between text frame columns</source>
        <translation>Distancia entre as columnas das molduras de texto</translation>
    </message>
    <message>
        <source>Sample of your font</source>
        <translation>Mostra da súa fonte</translation>
    </message>
    <message>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation>As molduras de imaxes permiten que as imaxes varíen de escala</translation>
    </message>
    <message>
        <source>Horizontal scaling of images</source>
        <translation>Modificación do tamaño horizontal das imaxes</translation>
    </message>
    <message>
        <source>Vertical scaling of images</source>
        <translation>Modificación do tamaño vertical das imaxes</translation>
    </message>
    <message>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation>Manter a proporción horizontal e vertical</translation>
    </message>
    <message>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation>As imaxes nas molduras de imaxes acomódanse ao tamaño da moldura</translation>
    </message>
    <message>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation>As imaxes cuxo tamaño se modifica automaticamente manteñen a proporción orixinal</translation>
    </message>
    <message>
        <source>Fill color of picture frames</source>
        <translation>Cor de enchido das molduras de imaxe</translation>
    </message>
    <message>
        <source>Saturation of color of fill</source>
        <translation>Saturación da cor de enchido</translation>
    </message>
    <message>
        <source>Line color of shapes</source>
        <translation>Cor da liña das formas</translation>
    </message>
    <message>
        <source>Saturation of color of lines</source>
        <translation>Saturación da cor das liñas</translation>
    </message>
    <message>
        <source>Fill color of shapes</source>
        <translation>Cor de enchido das formas</translation>
    </message>
    <message>
        <source>Line style of shapes</source>
        <translation>Estilo de liña das formas</translation>
    </message>
    <message>
        <source>Line width of shapes</source>
        <translation>Anchura da liña das formas</translation>
    </message>
    <message>
        <source>Minimum magnification allowed</source>
        <translation>Redución mínima permitida</translation>
    </message>
    <message>
        <source>Maximum magnification allowed</source>
        <translation>Aumento máximo permitido</translation>
    </message>
    <message>
        <source>Change in magnification for each zoom operation</source>
        <translation>Paso de aumento/redución</translation>
    </message>
    <message>
        <source>Color of lines</source>
        <translation>Cor das liñas</translation>
    </message>
    <message>
        <source>Saturation of color</source>
        <translation>Saturación da cor</translation>
    </message>
    <message>
        <source>Style of lines</source>
        <translation>Estilo das liñas</translation>
    </message>
    <message>
        <source>Width of lines</source>
        <translation>Anchura das liñas</translation>
    </message>
    <message>
        <source>Custom:</source>
        <translation>Personalizado:</translation>
    </message>
    <message>
        <source>Custom: </source>
        <translation>Personalizado: </translation>
    </message>
    <message>
        <source>Dot</source>
        <translation>Punto</translation>
    </message>
    <message>
        <source>Hyphen</source>
        <translation>Guión</translation>
    </message>
    <message>
        <source>Underscore</source>
        <translation>Guión baixo</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalizado</translation>
    </message>
</context>
<context>
    <name>TabTypograpy</name>
    <message>
        <source>Subscript</source>
        <translation>Subíndice</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>&amp;Displacement:</source>
        <translation>&amp;Deslocamento:</translation>
    </message>
    <message>
        <source>&amp;Scaling:</source>
        <translation>E&amp;scala:</translation>
    </message>
    <message>
        <source>Superscript</source>
        <translation>Superíndice</translation>
    </message>
    <message>
        <source>D&amp;isplacement:</source>
        <translation>D&amp;eslocamento:</translation>
    </message>
    <message>
        <source>S&amp;caling:</source>
        <translation>Es&amp;cala:</translation>
    </message>
    <message>
        <source>Underline</source>
        <translation>Subliñado</translation>
    </message>
    <message>
        <source>Displacement:</source>
        <translation>Deslocamento:</translation>
    </message>
    <message>
        <source>Auto</source>
        <translation>Auto</translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation>Anchura da Liña:</translation>
    </message>
    <message>
        <source>Strikethru</source>
        <translation>Tachado</translation>
    </message>
    <message>
        <source>Small Caps</source>
        <translation>Versalitas</translation>
    </message>
    <message>
        <source>Sc&amp;aling:</source>
        <translation>Esc&amp;ala:</translation>
    </message>
    <message>
        <source>Automatic &amp;Line Spacing</source>
        <translation>Inter&amp;liñado automático</translation>
    </message>
    <message>
        <source>Line Spacing:</source>
        <translation>Interliñado:</translation>
    </message>
    <message>
        <source>Displacement above the baseline of the font on a line</source>
        <translation>Desprazamento da fonte por en cima da liña de base nunha liña</translation>
    </message>
    <message>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation>Tamaño relativo do superíndice en relación á fonte normal</translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation>Desprazamento da fonte por debaixo da liña de base nunha liña</translation>
    </message>
    <message>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation>Tamaño relativo do subíndice en relación á fonte normal</translation>
    </message>
    <message>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation>Tamaño relativo das versalitas en relación á fonte normal</translation>
    </message>
    <message>
        <source>Percentage increase over the font size for the line spacing</source>
        <translation>Incremento en percentaxe sobre o tamaño da fonte do interliñado</translation>
    </message>
    <message>
        <source>Displacement below the baseline of the normal font expressed as a percentage of the fonts descender</source>
        <translation>Desprazamento por baixo da liña de base da fonte normal expresado como percentaxe do descendente da fonte</translation>
    </message>
    <message>
        <source>Line width expressed as a percentage of the font size</source>
        <translation>Anchura da liña expresada como percentaxe do tamaño da fonte</translation>
    </message>
    <message>
        <source>Displacement above the baseline of the normal font expressed as a percentage of the fonts ascender</source>
        <translation>Desprazamento por riba da liña de base da fonte normal expresado como percentaxe do ascendente da fonte</translation>
    </message>
</context>
<context>
    <name>Tabruler</name>
    <message>
        <source>Left</source>
        <translation>Esquerda</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Direita</translation>
    </message>
    <message>
        <source>Full Stop</source>
        <translation>Punto</translation>
    </message>
    <message>
        <source>Comma</source>
        <translation>Vírgula</translation>
    </message>
    <message>
        <source>Center</source>
        <translation>Centro</translation>
    </message>
    <message>
        <source>&amp;Position:</source>
        <translation>&amp;Posición:</translation>
    </message>
    <message>
        <source>First &amp;Line:</source>
        <translation type="obsolete">Primeira &amp;Liña:</translation>
    </message>
    <message>
        <source>Left Ind&amp;ent:</source>
        <translation type="obsolete">Ind&amp;entado á Esquerda:</translation>
    </message>
    <message>
        <source>Delete All</source>
        <translation>Eliminalo Todo</translation>
    </message>
    <message>
        <source>Indentation for first line of the paragraph</source>
        <translation>Indentación da primeira liña do parágrafo</translation>
    </message>
    <message>
        <source>Indentation from the left for the whole paragraph</source>
        <translation>Indentación á esquerda para todo o parágrafo</translation>
    </message>
    <message>
        <source>Delete all Tabulators</source>
        <translation>Eliminar todos os Tabuladores</translation>
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
        <source>None</source>
        <translation>Nengún</translation>
    </message>
    <message>
        <source>Dot</source>
        <translation>Punto</translation>
    </message>
    <message>
        <source>Hyphen</source>
        <translation>Guión</translation>
    </message>
    <message>
        <source>Underscore</source>
        <translation>Guión baixo</translation>
    </message>
    <message>
        <source>Custom</source>
        <translation>Personalizado</translation>
    </message>
    <message>
        <source>Fill Char:</source>
        <translation>Carácter de Enchido:</translation>
    </message>
    <message>
        <source>Custom:</source>
        <translation>Personalizado:</translation>
    </message>
    <message>
        <source>Custom: </source>
        <translation>Personalizado: </translation>
    </message>
</context>
<context>
    <name>Tree</name>
    <message>
        <source>Outline</source>
        <translation>Esquema</translation>
    </message>
    <message>
        <source>Element</source>
        <translation>Elemento</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Tipo</translation>
    </message>
    <message>
        <source>Information</source>
        <translation type="obsolete">Información</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="obsolete">Advertencia</translation>
    </message>
    <message>
        <source>Name &quot;%1&quot; isn&apos;t unique.
Please choose another.</source>
        <translation type="obsolete">O nome &quot;%1&quot; non é único.
Escolla outro.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">De acordo</translation>
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
        <translation type="obsolete">Fonte:</translation>
    </message>
    <message>
        <source>Group </source>
        <translation>Grupo </translation>
    </message>
    <message>
        <source>Image</source>
        <translation type="obsolete">Imaxe</translation>
    </message>
    <message>
        <source>Text</source>
        <translation type="obsolete">Texto</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="obsolete">Liña</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation type="obsolete">Polígono</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation type="obsolete">Poli-liña</translation>
    </message>
    <message>
        <source>PathText</source>
        <translation type="obsolete">TextoEnTrazo</translation>
    </message>
    <message>
        <source>Page</source>
        <translation type="obsolete">Páxina</translation>
    </message>
    <message>
        <source>Free Objects</source>
        <translation>Obxectos Libres</translation>
    </message>
    <message>
        <source>Page </source>
        <translation>Páxina </translation>
    </message>
</context>
<context>
    <name>UnderlineValues</name>
    <message>
        <source>Auto</source>
        <translation>Auto</translation>
    </message>
    <message>
        <source> %</source>
        <translation> %</translation>
    </message>
    <message>
        <source>Displacement</source>
        <translation>Deslocamento</translation>
    </message>
    <message>
        <source>Linewidth</source>
        <translation>AnchuraDaLiña</translation>
    </message>
</context>
<context>
    <name>UndoManager</name>
    <message>
        <source>Add vertical guide</source>
        <translation>Adicionar guía vertical</translation>
    </message>
    <message>
        <source>Add horizontal guide</source>
        <translation>Adicionar guía horizontal</translation>
    </message>
    <message>
        <source>Remove vertical guide</source>
        <translation>Eliminar guía vertical</translation>
    </message>
    <message>
        <source>Remove horizontal guide</source>
        <translation>Eliminar guía horizontal</translation>
    </message>
    <message>
        <source>Move vertical guide</source>
        <translation>Mover guía vertical</translation>
    </message>
    <message>
        <source>Move horizontal guide</source>
        <translation>Mover guía horizontal</translation>
    </message>
    <message>
        <source>Lock guides</source>
        <translation>Bloquear as guías</translation>
    </message>
    <message>
        <source>Unlock guides</source>
        <translation>Desbloquear as guías</translation>
    </message>
    <message>
        <source>Move</source>
        <translation>Mover</translation>
    </message>
    <message>
        <source>Resize</source>
        <translation>Mudar o tamaño</translation>
    </message>
    <message>
        <source>Rotate</source>
        <translation>Rotar</translation>
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
        <translation>Selección</translation>
    </message>
    <message>
        <source>Group</source>
        <translation>Grupo</translation>
    </message>
    <message>
        <source>Selection/Group</source>
        <translation>Selección/Grupo</translation>
    </message>
    <message>
        <source>Create</source>
        <translation>Crear</translation>
    </message>
    <message>
        <source>X: %1, Y: %2
W: %3, H: %4</source>
        <translation>X: %1, Y: %2
W: %3, H: %4</translation>
    </message>
    <message>
        <source>Align/Distribute</source>
        <translation>Aliñar/Distribuir</translation>
    </message>
    <message>
        <source>Items involved</source>
        <translation>Elementos implicados</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Cancelar</translation>
    </message>
    <message>
        <source>Set fill color</source>
        <translation>Asignar unha cor de enchido</translation>
    </message>
    <message>
        <source>Color1: %1, Color2: %2</source>
        <translation>Cor1: %1, Cor2: %2</translation>
    </message>
    <message>
        <source>Set fill color shade</source>
        <translation>Asignar a saturación da cor de enchido</translation>
    </message>
    <message>
        <source>Set line color</source>
        <translation>Asignar a cor da liña</translation>
    </message>
    <message>
        <source>Set line color shade</source>
        <translation>Asignar a saturación da cor da liña</translation>
    </message>
    <message>
        <source>Flip horizontally</source>
        <translation>Voltear na Horizontal</translation>
    </message>
    <message>
        <source>Flip vertically</source>
        <translation>Voltear na Vertical</translation>
    </message>
    <message>
        <source>Lock</source>
        <translation>Bloquear</translation>
    </message>
    <message>
        <source>Unlock</source>
        <translation>Desbloquear</translation>
    </message>
    <message>
        <source>Lock size</source>
        <translation>Bloquear o tamaño</translation>
    </message>
    <message>
        <source>Unlock size</source>
        <translation>Desbloquear o tamaño</translation>
    </message>
    <message>
        <source>Ungroup</source>
        <translation>Desagrupar</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <source>Rename</source>
        <translation>Mudar o Nome</translation>
    </message>
    <message>
        <source>From %1
to %2</source>
        <translation>Desde %1
até %2</translation>
    </message>
    <message>
        <source>Apply Master Page</source>
        <translation>Aplicar Páxina Mestra</translation>
    </message>
    <message>
        <source>Paste</source>
        <translation>Pegar</translation>
    </message>
    <message>
        <source>Cut</source>
        <translation>Recortar</translation>
    </message>
    <message>
        <source>Set fill color transparency</source>
        <translation>Asignar a transparencia da cor de enchido</translation>
    </message>
    <message>
        <source>Set line color transparency</source>
        <translation>Asignar a transparencia da cor da liña</translation>
    </message>
    <message>
        <source>Set line style</source>
        <translation>Asignar o estilo da liña</translation>
    </message>
    <message>
        <source>Set the style of line end</source>
        <translation>Asignar o estilo do remate da liña</translation>
    </message>
    <message>
        <source>Set the style of line join</source>
        <translation>Asignar o estilo da xunta da liña</translation>
    </message>
    <message>
        <source>Set line width</source>
        <translation>Asignar a anchura da liña</translation>
    </message>
    <message>
        <source>No style</source>
        <translation>Sen estilo</translation>
    </message>
    <message>
        <source>Set custom line style</source>
        <translation>Asignar un estilo de liña personalizado</translation>
    </message>
    <message>
        <source>Do not use custom line style</source>
        <translation>Non utilizar un estilo de liña personalizado</translation>
    </message>
    <message>
        <source>Set start arrow</source>
        <translation>Asignar a flecha inicial</translation>
    </message>
    <message>
        <source>Set end arrow</source>
        <translation>Asingar a flecha final</translation>
    </message>
    <message>
        <source>Create table</source>
        <translation>Crear unha tabela</translation>
    </message>
    <message>
        <source>Rows: %1, Cols: %2</source>
        <translation>Filas: %1, Cols. %2</translation>
    </message>
    <message>
        <source>Set font</source>
        <translation>Asigar a fonte</translation>
    </message>
    <message>
        <source>Set font size</source>
        <translation>Asignar tamaño da fonte</translation>
    </message>
    <message>
        <source>Set font width</source>
        <translation>Asignar anchura de fonte</translation>
    </message>
    <message>
        <source>Set font height</source>
        <translation>Asignar altura de fonte</translation>
    </message>
    <message>
        <source>Set font fill color</source>
        <translation>Asignar cor de enchido de fonte</translation>
    </message>
    <message>
        <source>Set font stroke color</source>
        <translation>Asignar cor de trazo de fonte</translation>
    </message>
    <message>
        <source>Set font fill color shade</source>
        <translation>Asignar saturación de cor de recheo de fonte</translation>
    </message>
    <message>
        <source>Set font stroke color shade</source>
        <translation>Asignar saturación de cor de trazo de fonte</translation>
    </message>
    <message>
        <source>Set kerning</source>
        <translation>Asignar kerning</translation>
    </message>
    <message>
        <source>Set line spacing</source>
        <translation>Asingar interliñado</translation>
    </message>
    <message>
        <source>Set paragraph style</source>
        <translation>Asignar estilo de parágrafo</translation>
    </message>
    <message>
        <source>Set language</source>
        <translation>Asignar lingua</translation>
    </message>
    <message>
        <source>Align text</source>
        <translation>Aliñar texto</translation>
    </message>
    <message>
        <source>Set font effect</source>
        <translation>Asignar efecto de fonte</translation>
    </message>
    <message>
        <source>Image frame</source>
        <translation>Moldura de Imaxe</translation>
    </message>
    <message>
        <source>Text frame</source>
        <translation>Moldura de texto</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Polígono</translation>
    </message>
    <message>
        <source>Bezier curve</source>
        <translation>Curva de Bézier</translation>
    </message>
    <message>
        <source>Polyline</source>
        <translation>Poli-liña</translation>
    </message>
    <message>
        <source>Convert to</source>
        <translation>Convertir en</translation>
    </message>
    <message>
        <source>Import SVG image</source>
        <translation>Importar Imaxe SVG</translation>
    </message>
    <message>
        <source>Import EPS image</source>
        <translation>Importar imaxe EPS</translation>
    </message>
    <message>
        <source>Import OpenOffice.org Draw image</source>
        <translation>Importar Imaxe do Draw de OpenOffice.org</translation>
    </message>
    <message>
        <source>Scratch space</source>
        <translation>Espazo de traballo</translation>
    </message>
    <message>
        <source>Text flows around the frame</source>
        <translation>O Texto Flúe Arredor da Moldura </translation>
    </message>
    <message>
        <source>Text flows around bounding box</source>
        <translation>O texto flúe arredor da caixa delimitadora</translation>
    </message>
    <message>
        <source>Text flows around contour line</source>
        <translation>O texto flúe arredor da liña de contorno</translation>
    </message>
    <message>
        <source>No text flow</source>
        <translation>O texto non flúe</translation>
    </message>
    <message>
        <source>No bounding box</source>
        <translation>Sen caixa delimitadora</translation>
    </message>
    <message>
        <source>No contour line</source>
        <translation>Sen liña de contorno</translation>
    </message>
    <message>
        <source>Page %1</source>
        <translation>Páxina %1</translation>
    </message>
    <message>
        <source>Set image scaling</source>
        <translation>Asignar a escala da imaxe</translation>
    </message>
    <message>
        <source>Frame size</source>
        <translation>Tamaño da moldura</translation>
    </message>
    <message>
        <source>Free scaling</source>
        <translation>Ampliación libre</translation>
    </message>
    <message>
        <source>Keep aspect ratio</source>
        <translation>Manter a proporción do aspecto</translation>
    </message>
    <message>
        <source>Break aspect ratio</source>
        <translation>Rachar a proporción do aspecto</translation>
    </message>
    <message>
        <source>Edit contour line</source>
        <translation>Modificar a liña de contorno</translation>
    </message>
    <message>
        <source>Edit shape</source>
        <translation>Modificar a forma</translation>
    </message>
    <message>
        <source>Reset contour line</source>
        <translation>Restaurar a liña de contorno</translation>
    </message>
    <message>
        <source>Add page</source>
        <translation>Adicionar páxina</translation>
    </message>
    <message>
        <source>Add pages</source>
        <translation>Adicionar páxinas</translation>
    </message>
    <message>
        <source>Delete page</source>
        <translation>Eliminar páxina</translation>
    </message>
    <message>
        <source>Delete pages</source>
        <translation>Eliminar páxinas</translation>
    </message>
    <message>
        <source>Add layer</source>
        <translation>Adicionar capa</translation>
    </message>
    <message>
        <source>Delete layer</source>
        <translation>Eliminar capa</translation>
    </message>
    <message>
        <source>Rename layer</source>
        <translation>Mudarlle o nome á capa</translation>
    </message>
    <message>
        <source>Raise layer</source>
        <translation>Subir capa</translation>
    </message>
    <message>
        <source>Lower layer</source>
        <translation>Baixar capa</translation>
    </message>
    <message>
        <source>Send to layer</source>
        <translation>Enviar para a capa</translation>
    </message>
    <message>
        <source>Enable printing of layer</source>
        <translation>Permitir que se imprima a capa</translation>
    </message>
    <message>
        <source>Disable printing of layer</source>
        <translation>Impedir que se imprima a capa</translation>
    </message>
    <message>
        <source>Change name of the layer</source>
        <translation>Mudarlle o nome á capa</translation>
    </message>
    <message>
        <source>Get image</source>
        <translation>Obte imaxe</translation>
    </message>
    <message>
        <source>Text on a Path</source>
        <translation>Texto nun Trazo</translation>
    </message>
    <message>
        <source>Enable Item Printing</source>
        <translation>Permitir que se Imprima o Elemento</translation>
    </message>
    <message>
        <source>Disable Item Printing</source>
        <translation>Impedir que se Imprima o Elemento</translation>
    </message>
    <message>
        <source>Multiple duplicate</source>
        <translation>Duplicados Múltiples</translation>
    </message>
    <message>
        <source>Change Image Offset</source>
        <translation>Mudar o Desprazamento da Imaxe</translation>
    </message>
    <message>
        <source>Change Image Scale</source>
        <translation>Mudar a Escala da Imaxe</translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset control points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Modify image effects</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UndoPalette</name>
    <message>
        <source>Initial State</source>
        <translation>Estado inicial</translation>
    </message>
    <message>
        <source>Action History</source>
        <translation>Historial de Accións</translation>
    </message>
    <message>
        <source>Show selected object only</source>
        <translation>Mostrar só o obxecto seleccionado</translation>
    </message>
    <message>
        <source>&amp;Undo</source>
        <translation>&amp;Desfacer</translation>
    </message>
    <message>
        <source>&amp;Redo</source>
        <translation>&amp;Refacer</translation>
    </message>
</context>
<context>
    <name>UndoWidget</name>
    <message>
        <source>%1: %2</source>
        <comment>undo target: action (f.e. Text frame: Resize)</comment>
        <translation>%1: %2

destino de desfacer: acción (p.ex. Moldura de Texto: Mudar Tamaño)</translation>
    </message>
</context>
<context>
    <name>UsePrinterMarginsDialog</name>
    <message>
        <source>Minimum Margins for Page Size %1</source>
        <translation>Marxes mínimas para o Tamaño da Páxina %1</translation>
    </message>
</context>
<context>
    <name>UsePrinterMarginsDialogBase</name>
    <message>
        <source>Use Printer Margins</source>
        <translation>Utilizar as Marxes da Impresora</translation>
    </message>
    <message>
        <source>Select &amp;Printer:</source>
        <translation>Escolla a Im&amp;presora:</translation>
    </message>
    <message>
        <source>Margins</source>
        <translation>Marxes</translation>
    </message>
    <message>
        <source>Right:</source>
        <translation>Dereita:</translation>
    </message>
    <message>
        <source>&amp;Top:</source>
        <translation>&amp;Superior:</translation>
    </message>
    <message>
        <source>&amp;Bottom:</source>
        <translation>&amp;Inferior:</translation>
    </message>
    <message>
        <source>&amp;Left:</source>
        <translation>&amp;Esquerda:</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;De acordo</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Cancelar</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
</context>
<context>
    <name>ValueDialog</name>
    <message>
        <source>Insert value</source>
        <translation>Insira un valor</translation>
    </message>
    <message>
        <source>Enter a value then press OK.</source>
        <translation>Insira un valor e prema De Acordo.</translation>
    </message>
    <message>
        <source>Enter a value then press OK</source>
        <translation>Insira un valor e prema De Acordo</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation>Alt+O</translation>
    </message>
    <message>
        <source>Send your value to the script</source>
        <translation>Envíelle o valor ao guión</translation>
    </message>
</context>
<context>
    <name>VlnaDialog</name>
    <message>
        <source>Short Words</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">Abreviaturas

extensión abreviaturas</translation>
    </message>
    <message>
        <source>Apply unbreakable space on:</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">Aplicar un espazo que non se poda rachar en:

extensión abreviaturas:</translation>
    </message>
    <message>
        <source>&amp;Selected frames</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">Molduras e&amp;scollidas

extensión abreviaturas</translation>
    </message>
    <message>
        <source>Active &amp;page</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">&amp;Páxina activa

extensión abreviaturas</translation>
    </message>
    <message>
        <source>&amp;All items</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">&amp;Todos os elementos

extensión abreviaturas</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">&amp;De acordo

extensión abreviaturas</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">&amp;Cancelar

extensión abreviaturas</translation>
    </message>
    <message>
        <source>&amp;Info and
Languages</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">&amp;Información
e Linguas

extensión abreviaturas</translation>
    </message>
    <message>
        <source>Replace defaults by user config</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">Substituir o predeterminado pola configuración personalizada

extensión abreviaturas</translation>
    </message>
    <message>
        <source>When the user config file exists 
(%1)
you can choose if you want to append your config
to the global configuration by unchecked button.

You can replace predefined values by yours
with checked button too.</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">Cando o ficheiro de configuración do usuario existe
(%1)
pode escoller se quer engadir a súa configuración
á configuración global sen seleccionar o botón.

Pode substituir os valores predefinidos polos seus
tamén co botón seleccionado.

extensión abreviaturas.</translation>
    </message>
    <message>
        <source>Only selected frames processed.</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">Só procesadas as molduras seleccionadas.

extensión abreviaturas.</translation>
    </message>
    <message>
        <source>Only actual page processed.</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">Só a páxina actual procesada.

extensión abreviaturas.</translation>
    </message>
    <message>
        <source>All items in document processed.</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">Todos os elementos do documento procesados.

extensión abreviaturas.</translation>
    </message>
    <message>
        <source>Short Words for Scribus</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">Abreviaturas para Scribus

extensión abreviaturas</translation>
    </message>
    <message>
        <source>Available in the following languages</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">Disponíbel nas seguintes linguas

extensión abreviaturas</translation>
    </message>
    <message>
        <source>About Short Words</source>
        <comment>short words plugin</comment>
        <translation type="obsolete">Acerca de Abreviaturas

extensión abreviaturas</translation>
    </message>
    <message>
        <source>Edit &amp;system configuration...</source>
        <translation type="obsolete">Modificar a configuración do &amp;sistema...</translation>
    </message>
    <message>
        <source>Edit &amp;user configuration...</source>
        <translation type="obsolete">Modificar a configuración do &amp;usuario...</translation>
    </message>
    <message>
        <source>S&amp;etup editor...</source>
        <translation type="obsolete">Editor de &amp;Configuración...</translation>
    </message>
    <message>
        <source>&amp;Edit</source>
        <translation type="obsolete">&amp;Modificar</translation>
    </message>
    <message>
        <source>&amp;Info and Languages...</source>
        <translation type="obsolete">&amp;Información e Linguas...</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation type="obsolete">&amp;Axuda</translation>
    </message>
    <message>
        <source>Short Words</source>
        <translation type="obsolete">Abreviaturas</translation>
    </message>
    <message>
        <source>You are starting to edit read-only file.
%1</source>
        <translation type="obsolete">Comeza a modificar un ficheiro de só lectura.
%1</translation>
    </message>
    <message>
        <source>Application &apos;%1&apos; error. Cannot be started.</source>
        <translation type="obsolete">Erro da aplicación &quot;%1%. Non se pode iniciar.</translation>
    </message>
    <message>
        <source>Short Words setup</source>
        <translation type="obsolete">Configuración das Abreviaturas</translation>
    </message>
    <message>
        <source>Enter name of the plain text editor executable:</source>
        <translation type="obsolete">Introduza o nome do executábel do editor de texto simple:</translation>
    </message>
</context>
<context>
    <name>WerkToolB</name>
    <message>
        <source>Tools</source>
        <translation>Ferramentas</translation>
    </message>
    <message>
        <source>Select Items</source>
        <translation type="obsolete">Escoller Elementos</translation>
    </message>
    <message>
        <source>Insert Text Frame</source>
        <translation type="obsolete">Inserir Moldura de Texto</translation>
    </message>
    <message>
        <source>Insert Picture</source>
        <translation type="obsolete">Inserir Imaxe</translation>
    </message>
    <message>
        <source>Insert Table</source>
        <translation type="obsolete">Inserir Táboa</translation>
    </message>
    <message>
        <source>Properties...</source>
        <translation>Propriedades...</translation>
    </message>
    <message>
        <source>Insert Polygons</source>
        <translation type="obsolete">Inserir Polígonos</translation>
    </message>
    <message>
        <source>Insert Lines</source>
        <translation type="obsolete">Inserir Liñas</translation>
    </message>
    <message>
        <source>Insert Bezier Curves</source>
        <translation type="obsolete">Inserir Curvas de Bézier</translation>
    </message>
    <message>
        <source>Insert Freehand Line</source>
        <translation type="obsolete">Inserir Liña a Man Alzada</translation>
    </message>
    <message>
        <source>Rotate Item</source>
        <translation type="obsolete">Rotar Elemento</translation>
    </message>
    <message>
        <source>Zoom in or out</source>
        <translation type="obsolete">Achegarse ou Alonxarse</translation>
    </message>
    <message>
        <source>Edit Contents of Frame</source>
        <translation type="obsolete">Modificar o Contido da Moldura</translation>
    </message>
    <message>
        <source>Edit the text with the Story Editor</source>
        <translation type="obsolete">Modificar o texto co Editor de Artigos</translation>
    </message>
    <message>
        <source>Link Text Frames</source>
        <translation type="obsolete">Vincular as Molduras de Texto</translation>
    </message>
    <message>
        <source>Unlink Text Frames</source>
        <translation type="obsolete">Desvincular as Molduras de Texto</translation>
    </message>
    <message>
        <source>Do measurements</source>
        <translation type="obsolete">Medir</translation>
    </message>
    <message>
        <source>Draw various Shapes</source>
        <translation type="obsolete">Deseñar varias Formas</translation>
    </message>
</context>
<context>
    <name>WerkToolBP</name>
    <message>
        <source>PDF Tools</source>
        <translation>Ferramentas PDF</translation>
    </message>
    <message>
        <source>Button</source>
        <translation>Botón</translation>
    </message>
    <message>
        <source>Text Field</source>
        <translation>Campo de Texto</translation>
    </message>
    <message>
        <source>Check Box</source>
        <translation>Caixa de Selección</translation>
    </message>
    <message>
        <source>Combo Box</source>
        <translation>Caixa de Lista despregábel</translation>
    </message>
    <message>
        <source>List Box</source>
        <translation>Caixa de Lista</translation>
    </message>
    <message>
        <source>Insert PDF Fields</source>
        <translation>Inserir Campos PDF</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>Texto</translation>
    </message>
    <message>
        <source>Link</source>
        <translation>Ligazón</translation>
    </message>
    <message>
        <source>Insert PDF Annotations</source>
        <translation>Inserir Anotacións PDF</translation>
    </message>
</context>
<context>
    <name>ZAuswahl</name>
    <message>
        <source>Select Character:</source>
        <translation type="obsolete">Escoller Carácter:</translation>
    </message>
    <message>
        <source>&amp;Insert</source>
        <translation type="obsolete">&amp;Inserir</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation type="obsolete">&amp;Limpar</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Fechar</translation>
    </message>
    <message>
        <source>Insert the characters at the cursor in the text</source>
        <translation type="obsolete">Inserir os caracteres no texto na posición do cursor</translation>
    </message>
    <message>
        <source>Delete the current selection(s).</source>
        <translation type="obsolete">Eliminar a(s) selección(s) actual/is.</translation>
    </message>
    <message>
        <source>Close this dialog and return to text editing.</source>
        <translation type="obsolete">Fechar este diálogo e voltar á edición de texto.</translation>
    </message>
</context>
<context>
    <name>gtFileDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation>Escoller o importador</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automático</translation>
    </message>
    <message>
        <source>Import Text Only</source>
        <translation>Importar Só Texto</translation>
    </message>
    <message>
        <source>Import text without any formatting</source>
        <translation>Importar o texto sen o formato</translation>
    </message>
    <message>
        <source>Importer:</source>
        <translation>Importador:</translation>
    </message>
    <message>
        <source>Encoding:</source>
        <translation>Codificación:</translation>
    </message>
</context>
<context>
    <name>gtImporterDialog</name>
    <message>
        <source>Choose the importer to use</source>
        <translation>Escoller o importador</translation>
    </message>
    <message>
        <source>Remember association</source>
        <translation>Lembrar a asociación</translation>
    </message>
    <message>
        <source>Remember the file extension - importer association
and do not ask again to select an importer for
files of this type.</source>
        <translation type="obsolete">Lembrar a extensión do ficheiro - asociación do importador
e non perguntar máis para escoller un importador
para ficheiros deste tipo.</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">De acordo</translation>
    </message>
    <message>
        <source>Remember the file extension - importer association and do not ask again to select an importer for files of this type.</source>
        <translation>Lembrar a asociación extensión de ficheiro - importador e non perguntar máis para escoller un importador para ficheiros deste tipo.</translation>
    </message>
</context>
<context>
    <name>nftdialog</name>
    <message>
        <source>New From Template</source>
        <translation>Novo a partir dun Modelo</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>Elimina&amp;r</translation>
    </message>
    <message>
        <source>&amp;Open</source>
        <translation>&amp;Abrir</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Todo</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Tamaño da páxina</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Cores</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Descrición</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation>Uso</translation>
    </message>
    <message>
        <source>Created with</source>
        <translation>Creado con</translation>
    </message>
    <message>
        <source>Date</source>
        <translation>Data</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Autor/a</translation>
    </message>
    <message>
        <source>Downloading Templates</source>
        <translation>A baixar os Modelos</translation>
    </message>
    <message>
        <source>Document templates can be found at http://www.scribus.net/ in the Downloads section.</source>
        <translation>Pódense atopar modelos de documento na sección de Descargas de http://www.scribus.net.</translation>
    </message>
    <message>
        <source>Installing Templates</source>
        <translation>A instalar os Modelos</translation>
    </message>
    <message>
        <source>Extract the package to the template directory ~/.scribus/templates for the current user or PREFIX/share/scribus/templates for all users in the system.</source>
        <translation>Extraia o pacote ao directorio de modelos ~/.scribus/templates para o utilizador actual ou PREFIXO/share/scribus/templates para todos os usuarios do sistema.</translation>
    </message>
    <message>
        <source>Preparing a template</source>
        <translation>A preparar un modelo</translation>
    </message>
    <message>
        <source>Make sure images and fonts you use can be used freely. If fonts cannot be shared do not collect them when saving as a template.</source>
        <translation>Asegúrese de que as imaxes e fontes que utilice poden ser usadas libremente. Se as fontes non se poden compartillar non as recolla ao gardar como modelo.</translation>
    </message>
    <message>
        <source>The template creator should also make sure that the Installing Templates section above applies to their templates as well. This means a user should be able to download a template package and be able to extract them to the template directory and start using them.</source>
        <translation>O creador do modelo deberíase asegurar tamén de que a sección sobre Instalación de Templates anterior se aplica igualmente ao seus modelos. Isto significa que un utilizador debería ser quen de baixar un pacote con modelos e podelso extraer para o directorio de modelos e comezar a usalos.</translation>
    </message>
    <message>
        <source>Removing a template</source>
        <translation>Eliminando un modelo</translation>
    </message>
    <message>
        <source>Removing a template from the New From Template dialog will only remove the entry from the template.xml, it will not delete the document files. A popup menu with remove is only shown if you have write access to the template.xml file.</source>
        <translation>A eliminación dun modelo do diálogo Novo Desde Modelo só eliminará a entrada de template.xmpl, non eliminará os ficheiros do documento. Un menú emerxente con eliminar só se mostra se ten acceso de escritura ao ficheiro template.xml.</translation>
    </message>
    <message>
        <source>Translating template.xml</source>
        <translation>A traducir template.xml</translation>
    </message>
    <message>
        <source>Copy an existing template.xml to a file called template.lang_COUNTRY.xml (use the same lang code that is present in the qm file for your language), for example template.fi.xml for Finnish language template.xml. The copy must be located in the same directory as the original template.xml so Scribus can load it.</source>
        <translation>Copie un template.xml xa existente a un ficheiro chamado template.lang_PAÍS.xml (use o mesmo código de lingua que o do ficheiro qm para a súa lingua). Por exemplo, o template.fi.xml para finlandés para template.xml. A copia debe estar situada no mesmo directorio que o template.xml orixinal para que Scribus o poida carregar.</translation>
    </message>
</context>
<context>
    <name>satdialog</name>
    <message>
        <source>Save as Template</source>
        <translation>Gardar como Modelo</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Categoría</translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation>Tamaño da páxina</translation>
    </message>
    <message>
        <source>Colors</source>
        <translation>Cores</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Descrición</translation>
    </message>
    <message>
        <source>Usage</source>
        <translation>Uso</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Autor/a</translation>
    </message>
    <message>
        <source>Email</source>
        <translation>Correo electrónico</translation>
    </message>
    <message>
        <source>More Details</source>
        <translation>Máis Detalles</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>De acordo</translation>
    </message>
    <message>
        <source>Less Details</source>
        <translation>Menos Detalles</translation>
    </message>
    <message>
        <source>Legal</source>
        <translation>Legal</translation>
    </message>
    <message>
        <source>Letter</source>
        <translation>Carta</translation>
    </message>
    <message>
        <source>Tabloid</source>
        <translation>Tabloide</translation>
    </message>
    <message>
        <source>landscape</source>
        <translation>apaisado</translation>
    </message>
    <message>
        <source>portrait</source>
        <translation>retrato</translation>
    </message>
    <message>
        <source>custom</source>
        <translation>personalizado</translation>
    </message>
</context>
<context>
    <name>tfDia</name>
    <message>
        <source>Create filter</source>
        <translation>Crear filtro</translation>
    </message>
    <message>
        <source>C&amp;lear</source>
        <translation>&amp;Limpar</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation>&amp;Eliminar</translation>
    </message>
    <message>
        <source>Choose a previously saved filter</source>
        <translation>Escoller un filtro salvado con anterioridade</translation>
    </message>
    <message>
        <source>Give a name to this filter for saving</source>
        <translation>Darlle un nome a este filtro para gardalo</translation>
    </message>
    <message>
        <source>Give a name for saving</source>
        <translation>Darlle un nome para gardalo</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;De acordo</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Cancelar</translation>
    </message>
</context>
<context>
    <name>tfFilter</name>
    <message>
        <source>Disable or enable this filter row</source>
        <translation>Activar ou desactivar esta liña do filtro</translation>
    </message>
    <message>
        <source>Remove this filter row</source>
        <translation>Eliminar esta liña do filtro</translation>
    </message>
    <message>
        <source>Add a new filter row</source>
        <translation>Adicionar unha nova liña ao filtro</translation>
    </message>
    <message>
        <source>to</source>
        <translation>a</translation>
    </message>
    <message>
        <source>and</source>
        <translation>e</translation>
    </message>
    <message>
        <source>remove match</source>
        <translation>eliminar a correspondencia</translation>
    </message>
    <message>
        <source>do not remove match</source>
        <translation>non eliminar a correspondencia</translation>
    </message>
    <message>
        <source>words</source>
        <translation>palabras</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Eliminar</translation>
    </message>
    <message>
        <source>Replace</source>
        <translation>Substituir</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>Aplicar</translation>
    </message>
    <message>
        <source>Value at the left is a regular expression</source>
        <translation>O valor da esquerda é unha expresión regular</translation>
    </message>
    <message>
        <source>with</source>
        <translation>con</translation>
    </message>
    <message>
        <source>paragraph style</source>
        <translation>estilo de parágrafo</translation>
    </message>
    <message>
        <source>all instances of</source>
        <translation>todas as veces que apareza</translation>
    </message>
    <message>
        <source>all paragraphs</source>
        <translation>todos os parágrafos</translation>
    </message>
    <message>
        <source>paragraphs starting with</source>
        <translation>parágrafos que comecen por</translation>
    </message>
    <message>
        <source>paragraphs with less than</source>
        <translation>parágrafos con menos de</translation>
    </message>
    <message>
        <source>paragraphs with more than</source>
        <translation>parágrafos con menos de</translation>
    </message>
</context>
</TS>
