function loadX3D() {
    var texto="";// = [];
    //texto+='<X3D id="the_scene">\n');
    texto+='\t<Scene>\n\n';

    texto+='\t\t<NavigationInfo headlight=\'false\'></NavigationInfo>\n';
    texto+='\t\t<Background backUrl=\'space.jpg\'></Background>\n';
    texto+='\t\t<Viewpoint description="Faceted box, smooth shading" position="0 0 25"></Viewpoint>\n';
    texto+='\t\t<PointLight id=\'point\' on=\'TRUE\' intensity=\'0.9000\' color=\'0.9 0.9 0.9\' location=\'0 0 0\' radius=\'5000000\' ></PointLight>\n';

    //Añadimos el escenario
    //childNodes[0] es un texto vacío!!
    var objDin= obtenerEscenario(document.getElementById('sculpture_level').childNodes[1]);

    texto+='\t\t<Transform DEF="Position' + objDin.nombre +'" translation="0 0 0">\n';
    //CAMBIAR ESTA LINEA
    texto+='\t\t\t<inline url="./models/X3D/' + objDin.nombre + '.x3d"> </inline>\n';
    // -----------------
    texto+='\t\t</Transform>\n\n';

    //Añadimos todos los objetos
    var nelements=document.getElementById("sculpture_level").childNodes.length;

    for(var i=2; i<nelements; i++){
    
        objDin= obtenerDatos(document.getElementById('sculpture_level').childNodes[i]);

        texto+='\t\t<Transform DEF="Rotate' + objDin.nombre +'" roation="0 1 0 '+ objDin.rotation + '">\n';
        texto+='\t\t\t<Transform DEF="Translate' + objDin.nombre +'" translation="'+ objDin.x + ' ' + objDin.y + ' ' + objDin.z + '">\n';
        //CAMBIAR ESTA LINEA
        texto+='\t\t\t\t<inline url="./models/X3D/' + objDin.nombre + '.x3d"> </inline>\n';
        // -----------------
        texto+='\t\t\t</Transform>\n';
        texto+='\t\t</Transform>\n\n';

    }

    texto+='\t</Scene>\n';
    //texto+='</X3D>\n');

    document.getElementById('the_scene').innerHTML= texto;
    //document.getElementById('the_scene').innerText= texto;
};