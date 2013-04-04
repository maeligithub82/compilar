/* JavaScript Document
DESCRIPCION: Funciones Comunes LDM
AUTOR: Uriel Vargas Barajas
CONTROL DE CAMBIOS:
	28/Mayo/2009 - Creacion
*/
<!--
// -----------------------------------------------------------------------------
// Globals
// Major version of Flash required
var requiredMajorVersion = 10;
// Minor version of Flash required
var requiredMinorVersion = 0;
// Minor version of Flash required
var requiredRevision = 0;
// -----------------------------------------------------------------------------
// -->

function AbrirLDM (URL){ 
	//alert("funcion NUEVA VENTANA");
	
	Nwindow=window.open(URL, "", "width="+(screen.width)+", height="+(screen.height)+", scrollbars=NO, fullscreen=yes");
	Nwindow.moveTo((screen.width/2-((screen.width))/2), (screen.height/2-((screen.height))/2));
	Nwindow.focus();
	window.opener="";	
}

function nueva_ventana(url) {
	
	Nwindow=window.open(url, "","scrollbars=YES, width=740,height=543");
	izquierda = (screen.width) ? (screen.width-740)/2 : 100
	arriba = (screen.height) ? (screen.height-543)/2 : 100
	Nwindow.moveTo(izquierda,arriba);
	Nwindow.focus();
	window.opener="";	

}

