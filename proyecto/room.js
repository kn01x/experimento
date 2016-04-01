
var svgroom;

function Room(nombre, pathLocation, altura, anchura){

	var location;
	var height;
	var width;
	var id;
	var nombre;

	this.height= altura;
	this.width= anchura;
	this.location= pathLocation;
	this.id= "sala";
	this.nombre= nombre;
	
	svgroom = document.createElementNS('http://www.w3.org/2000/svg','image');

	svgroom.setAttribute('id', this.id);
	svgroom.setAttributeNS(null, 'nombre', this.nombre);
	svgroom.setAttributeNS(null,'height', this.height);
	svgroom.setAttributeNS(null,'width', this.width);
	svgroom.setAttributeNS('http://www.w3.org/1999/xlink','href', this.location);
	svgroom.setAttributeNS(null,'x','0');
	svgroom.setAttributeNS(null,'y','0');
	svgroom.setAttributeNS(null, 'visibility', 'visible');


	document.getElementById('room_level').appendChild(svgroom);
}

Room.prototype.change = function( pathLocation, altura, anchura){
	this.height= altura;
	this.width= anchura;
	this.location= pathLocation;

	svgroom.setAttributeNS(null,'height', this.height);
	svgroom.setAttributeNS(null,'width', this.width);
	svgroom.setAttributeNS('http://www.w3.org/1999/xlink','href', this.location);
}