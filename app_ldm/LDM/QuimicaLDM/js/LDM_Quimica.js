/* JavaScript Document
DESCRIPCION: Funciones Comunes LDM Fisica
AUTOR: Uriel Vargas Barajas
CONTROL DE CAMBIOS:
	15/Marzo/2009 - Creacion
*/

function AbrirPOPUP (URL,ancho,alto){ 
	xpos=(screen.width/2)-(ancho/2);
	ypos=(screen.height/2)-(alto/2);
	window.open(URL,"ventana1",'width='+ancho+',height='+alto+',left='+xpos+',top='+ypos+',scrollbars=NO');
}

function AbrirPOPUPScroll (URL,ancho,alto){ 
	xpos=(screen.width/2)-(ancho/2);
	ypos=(screen.height/2)-(alto/2);
	window.open(URL,"ventana1",'width='+ancho+',height='+alto+',left='+xpos+',top='+ypos+',scrollbars=1');
}

function Imprimir(){
	AbrirPOPUP (URL_PDF,800,600)
}

function ImprimirPDF(URL_PDF){
	AbrirPOPUP (URL_PDF,800,600)
}