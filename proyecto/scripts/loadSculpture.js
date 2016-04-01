
var sculptureLoads= [false, false, false, false, false, false];
var nameScultureLoad;

//Control de la sala que ha sido cargada.
function updateSculpture( id ){
	for(var i=0; i<sculptureLoads.length; i++)
		if(i+sculptureLoads.length == id)
			sculptureLoads[i]= true;
		else
			sculptureLoads[i]= false;
}

//Comprobar que existe actualmente una sala cargada.
function isSculptureLoad(){
	for(var i=0; i<sculptureLoads.length; i++)
		if(sculptureLoads[i])
			return true;
	return false;
}

//Comprobar si la sala seleccionada esta actualmente cargada.
function isAlreadySculptureLoad( id ){
	return sculptureLoads[id];
}

//Iniciar la sala correspondiente.
function initSculpture(id){
	switch(id){
		case 6:
			sculpture = new Sculpture('venus','./img/models2D/venus.jpg', 40, 40, 0, 0);
			loadModel('./models/venus/venus.obj');
			nameScultureLoad= 'venus';
			break;
		case 7:
			sculpture = new Sculpture('thinker','./img/models2D/thinker.jpg', 60, 60, 0, 0);
			loadModel('./models/thinker/thinker.obj');
			nameScultureLoad= 'thinker';
			break;
		case 8:
			sculpture = new Sculpture('david','./img/models2D/david.jpg', 50, 50, 0, 0);
			loadModel('./models/david/david.obj');
			nameScultureLoad= 'david';
			break;
		case 9:
			sculpture = new Sculpture('dragon','./img/models2D/dragon.jpg', 40, 40, 0, 0);
			loadModel('./models/dragon/dragon.obj');
			nameScultureLoad= 'dragon';
			break;
		case 10:
			sculpture = new Sculpture('ramses2','./img/models2D/ramses2.jpg', 60, 60, 0, 0);
			loadModel('./models/ramses2/ramses2.obj');
			nameScultureLoad= 'ramses2';
			break;
		case 11:
			sculpture = new Sculpture('pascua','./img/models2D/pascua.jpg', 30, 30, 0, 0);
			loadModel('./models/pascua/pascua.obj');
			nameScultureLoad= 'pascua';
			break;
	}
}

//Funcion encargada de comprobar y cargar la escultura correspondiente.
function loadSculpture( id ){
	if(RoomInit){
		if( isSculptureLoad() ){
			removeModel();
			updateSculpture( id );
			initSculpture(id);
		}

		else if( !isAlreadySculptureLoad(id) ){
			updateSculpture(id);
			initSculpture(id);
		}
	}
}

//Funcion para eliminar y cargar otros modelos de esculturas desde un click de SVG
function changeSculture( id ){
	if(RoomInit){
		if( nameScultureLoad != id ){
			removeModel();
			loadModel('./models/'+id+'/'+id+'.obj');
			nameScultureLoad= id;
		}
	}
}

function showSculptureMenu(){
	$(document).ready(function() {
		$("#6").click(function(){
		    $("#sculpture1 img").css("border", "3px solid #1C1C1C");
		    $("#sculpture2 img").css("border", "3px solid #73AD21");
		    $("#sculpture3 img").css("border", "3px solid #73AD21");
		    $("#sculpture4 img").css("border", "3px solid #73AD21");
		    $("#sculpture5 img").css("border", "3px solid #73AD21");
		    $("#sculpture6 img").css("border", "3px solid #73AD21");

		});
		$("#7").click(function(){
		    $("#sculpture2 img").css("border", "3px solid #1C1C1C");
		    $("#sculpture1 img").css("border", "3px solid #73AD21");
		    $("#sculpture3 img").css("border", "3px solid #73AD21");
		    $("#sculpture4 img").css("border", "3px solid #73AD21");
		    $("#sculpture5 img").css("border", "3px solid #73AD21");
		    $("#sculpture6 img").css("border", "3px solid #73AD21");
		});
		$("#8").click(function(){
		    $("#sculpture3 img").css("border", "3px solid #1C1C1C");
		    $("#sculpture2 img").css("border", "3px solid #73AD21");
		    $("#sculpture1 img").css("border", "3px solid #73AD21");
		    $("#sculpture4 img").css("border", "3px solid #73AD21");
		    $("#sculpture5 img").css("border", "3px solid #73AD21");
		    $("#sculpture6 img").css("border", "3px solid #73AD21");
		});
		$("#9").click(function(){
		    $("#sculpture4 img").css("border", "3px solid #1C1C1C");
		    $("#sculpture3 img").css("border", "3px solid #73AD21");
		    $("#sculpture2 img").css("border", "3px solid #73AD21");
		    $("#sculpture1 img").css("border", "3px solid #73AD21");
		    $("#sculpture5 img").css("border", "3px solid #73AD21");
		    $("#sculpture6 img").css("border", "3px solid #73AD21");
		});
		$("#10").click(function(){
		    $("#sculpture5 img").css("border", "3px solid #1C1C1C");
		    $("#sculpture4 img").css("border", "3px solid #73AD21");
		    $("#sculpture3 img").css("border", "3px solid #73AD21");
		    $("#sculpture2 img").css("border", "3px solid #73AD21");
		    $("#sculpture1 img").css("border", "3px solid #73AD21");
		    $("#sculpture6 img").css("border", "3px solid #73AD21");
		    
		});
		$("#11").click(function(){
		    $("#sculpture6 img").css("border", "3px solid #1C1C1C");
		    $("#sculpture1 img").css("border", "3px solid #73AD21");
		    $("#sculpture2 img").css("border", "3px solid #73AD21");
		    $("#sculpture3 img").css("border", "3px solid #73AD21");
		    $("#sculpture4 img").css("border", "3px solid #73AD21");
		    $("#sculpture5 img").css("border", "3px solid #73AD21");
		});
	});
}