function Luz( color,intensity,distance ){	
	this.object;
	this.color = color;
	this.object = new THREE.PointLight( this.color, intensity, distance );
}

Luz.prototype.shadow = function( status ){
	this.object.castShadow = status;
}

Luz.prototype.set_position = function( x,y,z ){
	this.object.position.set( x,y,z );
}

Luz.prototype.get_object = function(){
	return this.object;	
}