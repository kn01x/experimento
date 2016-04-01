$(document).ready(function() {
    $("#content div").hide(); // Initially hide all content
    $("#tabs li:first").attr("id","current"); // Activate first tab
    $("#content div:first").fadeIn(); // Show first tab content
    $("#content div:first #viewElement").fadeIn();
    $("#content #tab1 .row").fadeIn();
    $("#content #tab1 textarea").fadeIn();
    $("#content #tab1 #boxTextInfo").fadeIn();
    $("#content #tab1 #botonesFicha").fadeIn();
    
    $('#tabs a').click(function(e) {
        e.preventDefault();        
        $("#content div").hide(); //Hide all content
        $("#tabs li").attr("id",""); //Reset id's
        $(this).parent().attr("id","current"); // Activate this
        $('#' + $(this).attr('title')).fadeIn(); // Show content for current tab

        if($(this).attr('title') == "tab1"){
            $("#content #tab1 #viewElement").fadeIn();
            $("#content #tab1 .row").fadeIn();
            $("#content #tab1 textarea").fadeIn();
            $("#content #tab1 #boxTextInfo").fadeIn();
            $("#content #tab1 #botonesFicha").fadeIn();
        }
        else if($(this).attr('title') == "tab2"){
            $("#content #tab2 #the_scene").fadeIn();
            loadX3D();
        }
        else if($(this).attr('title') == "tab3"){
            $("#content #tab3 .row").fadeIn();
            $("#content #tab3 #FPCscene").fadeIn();
            var fcamera = new FirstCamera('FirstCamera', './img/camera/FirstCamera.png', 40, 40, 0, 0);
        }
    });
});