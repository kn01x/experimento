function descargarArchivo(contenidoEnBlob, nombreArchivo) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var save = document.createElement('a');
        save.href = event.target.result;
        save.target = '_blank';
        save.download = nombreArchivo || 'archivo.dat';
        var clicEvent = new MouseEvent('click', {
            'view': window,
                'bubbles': true,
                'cancelable': true
        });
        save.dispatchEvent(clicEvent);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    };
    reader.readAsDataURL(contenidoEnBlob);
};

//Función de ayuda: reúne los datos a exportar en un solo objeto
function obtenerDatos(objetoDinamico) {
    return {
        nombre: objetoDinamico.getAttributeNS(null, 'nombre'),
        x: objetoDinamico.getAttributeNS(null, 'cX'),
        y: 0.0,
        z: objetoDinamico.getAttributeNS(null, 'cY'),
        rotation: objetoDinamico.getAttributeNS(null, 'rotation'),
        ancho: objetoDinamico.getAttributeNS(null, 'width'),
        alto: objetoDinamico.getAttributeNS(null, 'height'),
        clase: objetoDinamico.getAttributeNS(null, 'class')
    };
};

//Función de ayuda: reúne los datos a exportar en un solo objeto
function obtenerEscenario(objetoDinamico) {
    return {
        nombre: objetoDinamico.getAttributeNS(null, 'nombre'),
        x: objetoDinamico.getAttributeNS(null, 'x'),
        y: 0.0,
        z: objetoDinamico.getAttributeNS(null, 'y')
    };
};

//Genera un objeto Blob con los datos en un archivo XML
function mostrar(){
    var nelements=document.getElementById('sculpture_level').childNodes.length;
    alert(nelements);
};

function generarX3D() {
    var texto = [];
    texto.push('<X3D id="the_scene">\n');
    texto.push('\t<Scene>\n\n');

    texto.push('\t\t<NavigationInfo headlight=\'false\'></NavigationInfo>\n');
    texto.push('\t\t<Viewpoint description="Faceted box, smooth shading" position="0 0 25"></Viewpoint>\n');
    texto.push('\t\t<PointLight id=\'point\' on=\'TRUE\' intensity=\'0.9000\' color=\'0.9 0.9 0.9\' location=\'0 0 0\' radius=\'5000000\' ></PointLight>\n');

    //Añadimos el escenario
    //childNodes[0] es un texto vacío!!
    var objDin= obtenerEscenario(document.getElementById('sculpture_level').childNodes[1]);

    texto.push('\t\t<Transform DEF="Position' + objDin.nombre +'" translation="0 0 0">\n');
    //CAMBIAR ESTA LINEA
    texto.push('\t\t\t<inline url="' + objDin.nombre + '.x3d"> </inline>\n');
    // -----------------
    texto.push('\t\t</Transform>\n\n');

    //Añadimos todos los objetos
    var nelements=document.getElementById("sculpture_level").childNodes.length;

    for(var i=2; i<nelements; i++){
    
        objDin= obtenerDatos(document.getElementById('sculpture_level').childNodes[i]);

        texto.push('\t\t<Transform DEF="Rotate' + objDin.nombre +'" roation="0 1 0 '+ objDin.rotation + '">\n');
        texto.push('\t\t\t<Transform DEF="Translate' + objDin.nombre +'" translation="'+ objDin.x + ' ' + objDin.y + ' ' + objDin.z + '">\n');
        //CAMBIAR ESTA LINEA
        texto.push('\t\t\t\t<inline url="' + objDin.nombre + '.x3d"> </inline>\n');
        // -----------------
        texto.push('\t\t\t</Transform>\n');
        texto.push('\t\t</Transform>\n\n');

    }

    texto.push('\t</Scene>\n');
    texto.push('</X3D>\n');

    return new Blob(texto, {
        type: 'application/x3d'
    });
};