function Camera( vname, vpath, vposX, vposY ){
    var sideLength = 50;

    //Atributos
    this.name = vname;
    this.path = vpath;
    this.posX = vposX;
    this.posY = vposY;
    this.rotation = 0;
    this.svgObject = document.createElementNS('http://www.w3.org/2000/svg','image'); //Representacion grafica mediante una imagen

    //Atributos de la representacion grafica
    this.svgObject.setAttributeNS(null, 'name', this.name);
    this.svgObject.setAttributeNS('http://www.w3.org/1999/xlink','href', this.path);
    this.svgObject.setAttributeNS(null, 'class', 'camera'); // Para localizarla luego por su clase
    // Esquina del objeto
    this.svgObject.setAttributeNS(null,'coordX',this.posX);
    this.svgObject.setAttributeNS(null,'coordY',this.posY);
        // Centro del objeto
    this.svgObject.setAttributeNS(null,'cX', (this.posX + (sideLength/2)));
    this.svgObject.setAttributeNS(null,'cY',(this.posY + (sideLength/2)));
        // Para que se visualice
    this.svgObject.setAttributeNS(null,'height', sideLength);
    this.svgObject.setAttributeNS(null,'width', sideLength);
    this.svgObject.setAttributeNS(null,'rotation', this.rotation);
    //this.svgObject.setAttributeNS(null,'opacity', 0.9);

    document.getElementById('camera_level').appendChild(this.svgObject);
}

Camera.prototype.setVisibility = function( value ) {
    this.svgObject.setAttributeNS(null, 'visibility', value);
}
