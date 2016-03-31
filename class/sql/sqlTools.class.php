<?php

/**
 * Reune todas las funcionalidades basicas utilizadas en el sistema
 *
 * @author Manuel Jesus Ramos Villegas
 * @version 1503216
 * 
 */
require_once 'class/login/userAuthentication.class.php';

class sqlTools {

    private $host;
    private $user;
    private $pass;
    private $dataBase;
    private $insertedId;

    public function __construct() {

        $this->setDataBaseConfs();
    }

    /**
     * Inicializa la configuracion de la base de datos del usuario
     * */
    private function setDataBaseConfs() {

        $session = new userAuthentication();

        $this->host = $session->getHost();
        $this->user = $session->getMysqlUser();
        $this->pass = $session->getMysqlPass();
        $this->dataBase = $session->getDataBase();
    }

    /**
     * 
     * Ejecuta una sentencia sql
     * 
     * @param String $sql       || Sentencia sql
     * @param Boolean $debug    || Activa modo de errores
     */
    public function runQuery($sql, $debug = false) {

        $mysqli = new mysqli(
                $this->host, $this->user, $this->pass, $this->dataBase
        );

        if ($mysqli->connect_errno) {

            printf("Falló la conexión: %s\n", $mysqli->connect_error);
            exit();
        } else {

            $resultado = $mysqli->query($sql);
            $this->insertedId = $mysqli->insert_id;

            // Si la setencia sql se ejecuta con normalidad, resultado = true

            if ($resultado) {

                if ($debug) {

                    echo "<p>La consulta<br/><strong>" . $sql . "</strong></p>" . "<p>Se ha ejecutado con exito</p>";
                }
                
                $mysqli->close();
                return $resultado;
            } else if ($debug) {

                echo "<p>La consulta<br/><strong>" . $sql . "</strong></p>"
                . "<p>No se ha ejecutado con exito</p>"
                . "<p>Se ha producido el siguiente error<br/>"
                . "$mysqli->error</p>";
                $mysqli->close();
            }
        }
    }

    public function getInsertId() {

        return $this->insertedId;
    }

}
