//Funcion encargada de eliminar la instancia en DOM y el modelo 3D

function RemoveElement(){
	removeModel();

	var nombre= targetElement.getAttributeNS(null,'nombre');
	var objDin, find=false;
	var nelements=document.getElementById("sculpture_level").childNodes.length;

    for(var i=2; i<nelements && !find; i++){
        objDin= obtenerDatos(document.getElementById('sculpture_level').childNodes[i]);

        if(objDin.nombre == nombre){
        	find= true;
        	document.getElementById('sculpture_level').removeChild(document.getElementById('sculpture_level').childNodes[i]);
        }
    }
}

function RemoveIcon(name){
    removeModel();
    document.getElementById('sculpture_level').removeChild(document.getElementById(name));
}