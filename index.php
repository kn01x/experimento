<?php
// Gestiona el contenido a mostrar
if ($_GET['pagina']) {

    $pagina = $_GET['pagina'];
} elseif ($_POST['pagina']) {

    $pagina = $_POST['pagina'];
} else {

    $pagina = 'dashboard';
}
?>


<!DOCTYPE html>
<html lang="es">

    <head>
<?php
include "includes/head.incl.php";
?>
    </head>
   <body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="./">TFG - Trabajo Fin de Grado</a>
            </div>
            <!-- /.navbar-header -->

            <?php include ("includes/menuSuperior.incl.php") ?>

            <!-- /.navbar-top-links -->

            <?php include ("includes/menuLateral.incl.php") ?>

            <!-- /.navbar-static-side -->
        </nav>


        <?php
        switch ($pagina) {
            case 'dashboard':
                include 'includes/paginas/dashBoard.incl.php';
                break;
            default:

                break;
        }
        ?>



    </div>
    <!-- /#wrapper -->
    <!-- jQuery -->
    <script src="bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <!-- DataTables JavaScript -->
    <script src="bower_components/datatables/media/js/jquery.dataTables.min.js"></script>
    <script src="bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="dist/js/sb-admin-2.js"></script>

    <!-- Page-Level Demo Scripts - Tables - Use for reference -->
    <script>
        $(document).ready(function () {
            $('#lista_productos').DataTable({
                responsive: true
            });
        });
    </script>



</body>

</html>
