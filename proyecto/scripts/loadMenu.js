
function Menu(){
	var loaded= false;
	var xcord, ycord;
	var ancho, alto;
	var despX, despY, despRotY;
	var objDin;
}

Menu.prototype.loadMenu= function(element){
	if(!this.loaded){
		this.objDin= obtenerDatos(element);
		this.loadDelete();
        if (this.objDin.clase != 'camera' && this.objDin.clase != 'point')
		    this.loadRotate();
		this.loaded= true;
	}
}

Menu.prototype.loadDelete= function(){
	if(!this.loaded){
		var delet = document.createElementNS('http://www.w3.org/2000/svg','image');
		delet.setAttributeNS('http://www.w3.org/1999/xlink','href', './img/submenu/delete.png');

		delet.setAttribute('id', 'delete');
		delet.setAttributeNS(null, 'nombre', 'delete');

		this.ancho= parseFloat(this.objDin.ancho);//*0.5;
		this.alto= parseFloat(this.objDin.alto);//*0.5;
		delet.setAttributeNS(null,'height',this.alto);
		delet.setAttributeNS(null,'width', this.ancho);
		
		this.despX= (parseFloat(this.objDin.x) + this.ancho*0.5)
		this.despY= (parseFloat(this.objDin.z) - this.alto*1.5)
		delet.setAttributeNS(null,'x',this.despX);
		delet.setAttributeNS(null,'y',this.despY);

		delet.setAttributeNS(null, 'visibility', 'visible');

		document.getElementById(this.objDin.clase+'_level').appendChild(delet);
	}
}

Menu.prototype.loadRotate= function(){
	if(!this.loaded){
		var delet = document.createElementNS('http://www.w3.org/2000/svg','image');
		delet.setAttributeNS('http://www.w3.org/1999/xlink','href', './img/submenu/rotate.png');

		delet.setAttribute('id', 'rotate');
		delet.setAttributeNS(null, 'nombre', 'rotate');

		this.ancho= parseFloat(this.objDin.ancho);//*0.5;
		this.alto= parseFloat(this.objDin.alto);//*0.5;
		delet.setAttributeNS(null,'height',this.alto);
		delet.setAttributeNS(null,'width', this.ancho);
		
		this.despX= (parseFloat(this.objDin.x) + this.ancho*0.5)
		this.despRotY= (parseFloat(this.objDin.z) + this.alto*0.5)
		delet.setAttributeNS(null,'x',this.despX);
		delet.setAttributeNS(null,'y',this.despRotY);

		delet.setAttributeNS(null, 'visibility', 'visible');

		document.getElementById(this.objDin.clase+'_level').appendChild(delet);
	}
}

Menu.prototype.removeMenu= function(){
	if(this.loaded){
		this.removeDelete();
        if (this.objDin.clase != 'camera' && this.objDin.clase != 'point')
		    this.removeRotate();
		this.loaded= false;
	}
}

Menu.prototype.removeDelete= function(){
	document.getElementById(this.objDin.clase+'_level').removeChild(document.getElementById('delete'));
}

Menu.prototype.removeRotate= function(){
	document.getElementById(this.objDin.clase+'_level').removeChild(document.getElementById('rotate'));
}

Menu.prototype.translateMenu= function(x, y, rot){
	if(this.loaded){
		var rot= parseFloat(rot);
		var vx= x + this.ancho/2;
        var vy= y + this.alto/2;

        var rad= (rot*Math.PI)/180;
        x= vx*Math.cos(rad) - vy*Math.sin(rad);
        y= (vx*Math.sin(rad)) + vy*Math.cos(rad);

		this.translateDelete(x, y);
		this.translateRotate(x, y);
	}
}

Menu.prototype.translateDelete= function(x, y){
	this.xcord= x - this.despX + this.ancho/2;
	this.ycord= y - this.despY - this.alto*1.5;
	document.getElementById('delete').setAttributeNS(null, 'transform', 'translate(' + this.xcord +', '+ this.ycord + ')');
}

Menu.prototype.translateRotate= function(x, y){
	this.xcord= x - this.despX + this.ancho/2;
	this.ycord= y - this.despRotY + this.alto*0.5;
	document.getElementById('rotate').setAttributeNS(null, 'transform', 'translate(' + this.xcord +', '+ this.ycord + ')');
}