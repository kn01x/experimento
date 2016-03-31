<?php

/**
 * Gestiona el proceso ftp
 *
 * @author Manuel Jesus Ramos Villegas
 * @version 1803216
 * 
 */
require_once 'class/login/userAuthentication.class.php';

class clienteFTP {

    private $host;
    private $userFTP;
    private $passFTP;
    private $conexionFtp;

    /**
     * 
     * @param String $directoryToUpload || httpdocs/directorio/donde/subir
     */
    public function __construct($directoryToUpload, $archivo) {

        $checkUser = new userAuthentication();

        $this->host = $checkUser->getHost();
        $this->userFTP = $checkUser->getFtpUser();
        $this->passFTP = $checkUser->getFtpPass();

        $this->setConexionFtp($directoryToUpload, $archivo);
    }

    /**
     * Prepara la conexion ftp
     * 
     * @param String $directoryToUpload ||  Ruta donde realizar la subida
     */
    private function setConexionFtp($directoryToUpload, $archivo) {

        if (!$this->conexionFtp = ftp_connect($this->host)) {

            header("Location: error.php?errorCode=100"); // Fallo en la conexion
        } else {

            if (ftp_login($this->conexionFtp, $this->userFTP, $this->passFTP)) {

                echo "login correcto";
                
                if (ftp_chdir($this->conexionFtp, $directoryToUpload)) {

                    $this->subirArchivo($archivo);
                } else {

                    header("Location: error.php?errorCode=102"); // No se pudo acceder al directorio especificado
                }
            } else {
                
                header("Location: error.php?errorCode=101"); // No se pudo hacer login
            }
                
        }
    }

    /**
     * Sube un archivo al servidor
     * 
     * @param array $archivo    ||  array = ( 'nombreArchivo' => imagen.jpg, 
     * 'rutaTemporal' => ruta temporal del archivo a subir
     */
    private function subirArchivo($archivo) {

        $subida = ftp_put($this->conexionFtp, $archivo['name'], $archivo['tmp_name'], FTP_BINARY);

        if ($subida) {

            
        } else {

            header("Location: error.php?errorCode=103"); // No se pudo subir el archivo
        }
    }

    /**
     * Cierra la conexion FTP
     */
    public function ftpClose() {

        ftp_close($this->conexionFtp);
    }

}
