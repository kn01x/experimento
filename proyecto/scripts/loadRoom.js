
var RoomLoads= [false, false, false, false, false, false];
var RoomInit= false;

//Control de la sala que ha sido cargada.
function updateRoom( id ){
	for(var i=0; i<RoomLoads.length; i++)
		if(i == id)
			RoomLoads[i]= true;
		else
			RoomLoads[i]= false;
}

//Comprobar que existe actualmente una sala cargada.
function isRoomLoad(){
	for(var i=0; i<RoomLoads.length; i++)
		if(RoomLoads[i])
			return true;
	return false;
}

//Comprobar si la sala seleccionada esta actualmente cargada.
function isAlreadyLoad( id ){
	return RoomLoads[id];
}

//Iniciar la sala correspondiente.
function initRoom(id){
	switch(id){
		case 0:
			svgroom = new Room ('Sala1','./img/rooms/sala1.png', 500, 500);
			break;
		case 1:
			svgroom = new Room ('Sala2','./img/rooms/sala2.png', 500, 500);
			break;
		case 2:
			svgroom = new Room ('Sala3','./img/rooms/sala3.png', 500, 500);
			break;
		case 3:
			svgroom = new Room ('Sala4','./img/rooms/sala4.png', 500, 500);
			break;
		case 4:
			svgroom = new Room ('Sala5','./img/rooms/sala5.png', 500, 500);
			break;
		case 5:
			svgroom = new Room ('Sala6','./img/rooms/sala6.png', 500, 500);
			break;
	}
}

//Cambiar de sala.
function changeRoom(id){
	switch(id){
		case 0:
			svgroom.change('./img/rooms/sala1.png', 500, 500);
			break;
		case 1:
			svgroom.change('./img/rooms/sala2.png', 500, 500);
			break;
		case 2:
			svgroom.change('./img/rooms/sala3.png', 500, 500);
			break;
		case 3:
			svgroom.change('./img/rooms/sala4.png', 500, 500);
			break;
		case 4:
			svgroom.change('./img/rooms/sala5.png', 500, 500);
			break;
		case 5:
			svgroom.change('./img/rooms/sala6.png', 500, 500);
			break;
	}
}

//Funcion encargada de comprobar y cargar la sala correspondiente.
function loadRoom( id ){

	RoomInit = true;

	if( isRoomLoad() ){
		updateRoom(id);
		changeRoom(id);
	}

	else if( !isAlreadyLoad(id) ){
		updateRoom(id);
		initRoom(id);
	}

}

function showMenu(){
	$(document).ready(function() {
		$("#0").click(function(){
		    $("#imagen1 img").css("border", "3px solid #1C1C1C");
		    $("#imagen2 img").css("border", "3px solid #73AD21");
		    $("#imagen3 img").css("border", "3px solid #73AD21");
		    $("#imagen4 img").css("border", "3px solid #73AD21");
		    $("#imagen5 img").css("border", "3px solid #73AD21");
		    $("#imagen6 img").css("border", "3px solid #73AD21");
		});
		$("#1").click(function(){
		    $("#imagen2 img").css("border", "3px solid #1C1C1C");
		    $("#imagen1 img").css("border", "3px solid #73AD21");
		    $("#imagen3 img").css("border", "3px solid #73AD21");
		    $("#imagen4 img").css("border", "3px solid #73AD21");
		    $("#imagen5 img").css("border", "3px solid #73AD21");
		    $("#imagen6 img").css("border", "3px solid #73AD21");
		});
		$("#2").click(function(){
		    $("#imagen3 img").css("border", "3px solid #1C1C1C");
		    $("#imagen2 img").css("border", "3px solid #73AD21");
		    $("#imagen1 img").css("border", "3px solid #73AD21");
		    $("#imagen4 img").css("border", "3px solid #73AD21");
		    $("#imagen5 img").css("border", "3px solid #73AD21");
		    $("#imagen6 img").css("border", "3px solid #73AD21");
		});
		$("#3").click(function(){
		    $("#imagen4 img").css("border", "3px solid #1C1C1C");
		    $("#imagen3 img").css("border", "3px solid #73AD21");
		    $("#imagen2 img").css("border", "3px solid #73AD21");
		    $("#imagen1 img").css("border", "3px solid #73AD21");
		    $("#imagen5 img").css("border", "3px solid #73AD21");
		    $("#imagen6 img").css("border", "3px solid #73AD21");
		});
		$("#4").click(function(){
		    $("#imagen5 img").css("border", "3px solid #1C1C1C");
		    $("#imagen4 img").css("border", "3px solid #73AD21");
		    $("#imagen3 img").css("border", "3px solid #73AD21");
		    $("#imagen2 img").css("border", "3px solid #73AD21");
		    $("#imagen1 img").css("border", "3px solid #73AD21");
		    $("#imagen6 img").css("border", "3px solid #73AD21");
		    
		});
		$("#5").click(function(){
		    $("#imagen6 img").css("border", "3px solid #1C1C1C");
		    $("#imagen1 img").css("border", "3px solid #73AD21");
		    $("#imagen2 img").css("border", "3px solid #73AD21");
		    $("#imagen3 img").css("border", "3px solid #73AD21");
		    $("#imagen4 img").css("border", "3px solid #73AD21");
		    $("#imagen5 img").css("border", "3px solid #73AD21");
		});
	});
}