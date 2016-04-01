
function Camara(){

	var zoom= 0.03;
	
	this.object = new THREE.OrthographicCamera( (window.innerWidth/-2.72)*zoom, (window.innerWidth/2.72)*zoom,
	 (window.innerHeight/1.3)*zoom, (window.innerHeight/-1.3)*zoom, -20, 1000 );
	
}

Camara.prototype.get_object = function(){

	return this.object;	
	
}

Camara.prototype.updateProjectionMatrix = function(){

	this.object.updateProjectionMatrix();	
	
}

Camara.prototype.aspect = function( val ){
	
	this.object.aspect = val;
	
}

Camara.prototype.setPosition = function( x,y,z ){

	this.object.position.set(x,y,z);
	
}

Camara.prototype.setUp = function( up ){

	this.object.up = up;

}
Camara.prototype.setView = function( at ){

	this.object.lookAt( at );
		
}
