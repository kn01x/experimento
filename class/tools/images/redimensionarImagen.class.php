<?php

/**
 * Redimensiona una imagen
 *
 * @author Manuel Jesus Ramos Villegas
 * @version 16032016
 * 
 */
require_once 'class/ftp/clienteFTP.class.php';

class redimensionarImagen {

    private $imagenOriginal = array();
    private $savePath;
    private $puntosCorte = array();
    private $sizeEscalado = array();
    private $sizeFinal = array();
    private $nombreFinal;

    /**
     * 
     * @param String $pathImgOriginal   || Ubicacion de la imagen a modificar /images/imagen.jpg
     * @param Array $newSize            || array('ancho' => x , 'alto' => y);
     * @param String $rutaGuardado      || Ubicación donde almacenar la imagen a crear
     */
    public function __construct($pathImgOriginal, $newSize, $rutaGuardado, $nombreImagen) {

        $imagen = imagecreatefromjpeg($pathImgOriginal);
        $this->savePath = $rutaGuardado;
        $this->imagenOriginal = array(
            'ancho' => imagesx($imagen),
            'alto' => imagesy($imagen)
        );

        $this->puntosCorte = array(
            'x' => 0,
            'y' => 0
        );

        $this->sizeFinal = array(
            'ancho' => $newSize['ancho'],
            'alto' => $newSize['alto']
        );

        $this->generarNombreImagen($nombreImagen, $newSize);
        $this->calcularProporcion();
        $this->calcularPuntosCorte();
        $imgRedimensionada = $this->redimensionar($imagen);
        $this->recortarImagen($imgRedimensionada);
    }

    private function redimensionar($imagen) {

        $imagenModificada = imagecreatetruecolor($this->sizeEscalado['ancho'], $this->sizeEscalado['alto']);      // Crea un lienzo para imprimir la imagen a modificar

        $resultado = imagecopyresampled($imagenModificada, $imagen, 0, 0, 0, 0, $this->sizeEscalado['ancho'], $this->sizeEscalado['alto'], $this->imagenOriginal['ancho'], $this->imagenOriginal['alto']);


        if ($resultado) {

            return $imagenModificada;
        }
    }

    /**
     * Calcula las proporciones que debe tener la imagen para conservar su relacion de aspecto
     */
    private function calcularProporcion() {

        // if ($this->imagenOriginal['ancho'] < $this->imagenOriginal['alto']) {

        $this->sizeEscalado = array(
            'ancho' => $this->sizeFinal['ancho'],
            'alto' => ($this->imagenOriginal['alto'] * $this->sizeFinal['ancho']) / $this->imagenOriginal['ancho']
        );
        /* } else {

          $this->sizeEscalado = array(
          'ancho' => ($this->imagenOriginal['ancho'] * $this->sizeFinal['alto']) / $this->imagenOriginal['alto'],
          'alto' => $this->sizeFinal['alto']
          );
          } */
    }

    private function calcularPuntosCorte() {


        if ($this->sizeFinal['ancho'] > $this->sizeFinal['alto']) {

            $this->puntosCorte['y'] = ($this->sizeEscalado['alto'] - $this->sizeFinal['alto']) / 2;
        } elseif ($this->sizeFinal['alto'] > $this->sizeFinal['ancho']) {

            $this->puntosCorte['x'] = ($this->sizeEscalado['ancho'] - $this->sizeFinal['ancho']) / 2;
        } elseif ($this->sizeFinal['alto'] == $this->sizeFinal['ancho']) {

            $this->puntosCorte['y'] = ($this->sizeEscalado['alto'] - $this->sizeFinal['alto']) / 2;
            $this->puntosCorte['x'] = ($this->sizeEscalado['ancho'] - $this->sizeFinal['ancho']) / 2;
        }
    }

    private function recortarImagen($imgRedimensionada) {

        $datosImagen = array('x' => round($this->puntosCorte['x'], 0, PHP_ROUND_HALF_UP),
            'y' => round($this->puntosCorte['y'], 0, PHP_ROUND_HALF_UP),
            'width' => $this->sizeFinal['ancho'],
            'height' => $this->sizeFinal['alto']
        );

        print_r($datosImagen);

        $thumb = imagecrop($imgRedimensionada, $datosImagen); //Recorta la imagen

        if ($thumb) {
            imagejpeg($thumb, $this->savePath . $this->nombreFinal);
            
            $directoryToUpload = "/httpdocs/" . $this->savePath;
            $archivo = array(
                'name' => $this->nombreFinal,
                'tmp_name' => $this->savePath . $this->nombreFinal
            );
            
            $fileZilla = new clienteFTP($directoryToUpload, $archivo);
            
            // Borra el archivo temporal
            
            unlink($this->savePath . $this->nombreFinal);
        }
    }

    /**
     * Genera un nuevo nombre para la imagen redimensionada
     * 
     * @param String $nombreImagen  || nombreImagen.jpg
     * @param array $size           || array('ancho' => x , 'alto' => y);
     */
    private function generarNombreImagen($nombreImagen, $size) {

        $nombreSolo = explode(".", $nombreImagen);

        $this->nombreFinal = $nombreSolo[0] . "_" . $size['ancho'] . "_" . $size['alto'] . "." . $nombreSolo[1];
    }

}
