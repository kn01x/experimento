//Variables
var activePoints = 0; //Siempre hay 1
var maxPoints = 5;
var selectedPoint = 0;

//Funcion para cargar una camara nueva
function loadNewPoint() {
    if (activePoints >= maxPoints)
        return;
    else {
        activePoints += 1;

        //Crear un punto nuevo
        var img = $("<img/>", { src : "./img/camera/control.jpg", alt : "Add more" });
        var label = $("<label/>", { for : "botonControl" + activePoints, class : "boton" });
        var input = $("<input/>", { type : "radio", id : "botonControl" + activePoints, onclick : "loadPoint(" + activePoints + ")" });
        var li = $("<li/>", { id : "control"+activePoints });
        //Aniadir el punto nuevo
        $("#controls").append(li.append(input, label.append(img)));

        loadPoint(activePoints);

        newPoint = new Point(activePoints, "./img/camera/controlT.png", 0, 0);
    }
}

//Desactivar todos los bordes
function updateBordersP() {
    for(i = 1; i <= activePoints; i++){
        $("#control" + i + " img").css("border", "3px solid #73AD21");
    }
}

//Funcion para seleccionar una camara ya creada
function loadPoint( id ) {
        selectedPoint = id;
        updateBordersP();
        $("#control" + id + " img").css("border", "3px solid #1C1C1C");
}

