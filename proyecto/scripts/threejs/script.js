var scene = new THREE.Scene();
var camera;
var renderer= new THREE.WebGLRenderer();
var model;
var controls;
var room;

//smain();

function movimiento_camara() {
	renderer.render(scene, camera.get_object());
}

function onWindowResize() {
	renderer.setSize(300, 300);
	camera.aspect(1);
	camera.updateProjectionMatrix();
}

function refresh(){
	requestAnimationFrame(refresh);
	renderer.render(scene, camera.get_object());
}

function loadModel(path){
	var oLoader = new THREE.OBJLoader();
	oLoader.load(path, function(object) {
		
		object.position.x= 0;
		object.position.y= 0;
		object.position.z= 0;

		object.scale.set(0.1, 0.1, 0.1);
		model = object;
		model.name= "modelo";
		scene.add(model);
	});
	refresh();
}

function removeModel(){
	scene.remove(model);
	refresh();
}

function main() {
	renderer.setClearColor(0x6E6E6E,1.0);	//0x6E6E6E
	//window.innerWidth/2.72, window.innerHeight/1.3
	renderer.setSize(300, 300);
	renderer.shadowMapEnabled = true;
	renderer.setSize(300, 300);

	// ************************* Escena ***************************** //
	//var room = new Room ('models/rooms/ARC170.obj', 0, 0, 0, 'models/rooms/ARC170.mtl');
	//room = new Room ('models/rooms/lacaja.stl', 0, 0, 0, 'null');
	//var room = new Room ('models/rooms/beethoven.ply', 0, 0, 0, 'null');
	//var cubo= new Objetos('obj/ARC170.obj', 0.0, 0.0, 0.0, 'obj/ARC170.mtl');

	// *************************   Luz  ***************************** //
	//var venus= new Objetos('./models/venus/venus.obj', 0, 0, 0, './models/venus/venusdiffuse.tif');

	


	var iluminacion= new Luz(0xafffff, 1, 500000);
	iluminacion.set_position(0, 50, 0);

	var iluminacion2= new Luz(0xafffff, 1, 500000);
	iluminacion.set_position(50, 0, 0);

	var iluminacion3= new Luz(0xafffff, 1, 500000);
	iluminacion.set_position(0, 0, 50);

	scene.add(iluminacion.get_object());
	scene.add(iluminacion2.get_object());
	scene.add(iluminacion3.get_object());

	// ************************* Camara ***************************** //
	camera= new Camara();
	camera.setPosition(0,3,10);
	camera.setUp(new THREE.Vector3(0,1,0));
	camera.setView(new THREE.Vector3(0,0,0));//room.getPosition());

	controls = new THREE.OrbitControls( camera.get_object() );
	controls.damping = 0.2;
	controls.addEventListener( 'change', movimiento_camara );
	
	refresh();
	
	window.addEventListener('resize', onWindowResize, false);
	$("#viewElement").append(renderer.domElement);
}