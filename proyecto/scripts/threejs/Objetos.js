function Objetos( pathLocation, posX, posY, posZ, pathMaterial ){
	var model;
	var objeto;
	var coordPosition;

	/*var geometry = new THREE.BoxGeometry( 20, 20, 20 );
	var texture = THREE.ImageUtils.loadTexture( 'texture.jpg' );
	var material = new THREE.MeshBasicMaterial( { map: texture } );

	mesh = new THREE.Mesh( geometry, material );

	scene.add(mesh);
	*/
	this.posX= posX;
	this.posY= posY;
	this.posZ= posZ;

	this.coordPosition= new THREE.Vector3( this.posX, this.posY, this.posZ );
	
	var oLoader = new THREE.OBJMTLLoader();
	oLoader.load(pathLocation, pathMaterial, function(object) {
		
		object.position.x= this.posX;
		object.position.y= this.posY;
		object.position.z= this.posZ;

		object.scale.set(0.01, 0.01, 0.01);
		model = object;
		scene.add(model);
	});
}

Objetos.prototype.getPosition = function(){
	return this.coordPosition;
}

Objetos.prototype.getModel = function(){
	return this.objeto;
}

Objetos.prototype.setPosition = function( x,y,z ){
	
	this.objeto.position.set( x,y,z );
	
}