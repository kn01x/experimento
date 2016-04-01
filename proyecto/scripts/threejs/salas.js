var group = new THREE.Object3D();

function cargarSala(){
	var material = new THREE.MeshBasicMaterial({
	    color:0xFFFFFF,
	    side:THREE.DoubleSide
	});

	var cuadradoGeometria = new THREE.Geometry();

	cuadradoGeometria.vertices.push(new THREE.Vector3(-10.0,  40.0, 0.0));
	cuadradoGeometria.vertices.push(new THREE.Vector3( 10.0,  40.0, 0.0));
	cuadradoGeometria.vertices.push(new THREE.Vector3( 10.0, 0.0, 0.0));
	cuadradoGeometria.vertices.push(new THREE.Vector3(-10.0, 0.0, 0.0));
	cuadradoGeometria.faces.push(new THREE.Face3(0, 1, 2));
	cuadradoGeometria.faces.push(new THREE.Face3(2, 3, 0));

	var suelo = new THREE.Mesh(cuadradoGeometria, material);
	suelo.position.set(0.0, 0.0, 0.0);
	suelo.rotation.x= 90 * Math.PI / 180;
	
	

	group.add(suelo);

	//Paredes 
	var geometry = new THREE.BoxGeometry(20, 10, 0.5);
	var material2 = new THREE.MeshBasicMaterial({color: 0xff3ff, side:THREE.DoubleSide});
	var pared1 = new THREE.Mesh(geometry, material2);
	pared1.position.set(0.0,5.0,0.0);

	var pared2 = new THREE.Mesh(geometry, material2);
	pared2.position.set(0.0,5.0,40.0);

	var geometry2 = new THREE.BoxGeometry(40, 10, 0.5);
	var pared3 = new THREE.Mesh(geometry2, material2);
	pared3.rotation.y= 90 * Math.PI / 180;
	pared3.position.set(9.75,5.0,20.0);

	var pared4 = new THREE.Mesh(geometry2, material2);
	pared4.rotation.y= 90 * Math.PI / 180;
	pared4.position.set(-9.75,5.0,20.0);

	group.add(pared1);
	group.add(pared2);
	group.add(pared3);
	group.add(pared4);

	group.position.set(0.0,-40.0,-20.0);

	scene.add(group);
}
