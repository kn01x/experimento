<?php

/**
 * Description of encrypter
 *
 * @author knox
 */
class encrypter {

    private static $Key = "gj8kkka3sj";

    public static function encrypt($input) {
        $output = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_256
                        , md5(Encrypter::$Key), $input, MCRYPT_MODE_CBC, md5(md5(Encrypter
                                        ::$Key))));
        return $output;
    }

    public static function decrypt($input) {
        $output = rtrim(mcrypt_decrypt(MCRYPT_RIJNDAEL_256, md5(Encrypter::$Key), base64_decode($input), MCRYPT_MODE_CBC, md5(md5(Encrypter::$Key))), "\0");
        return $output;
    }

    public function generarKey() {

        $str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
        $cad = "";
        for ($i = 0; $i < 12; $i++) {
            $cad .= substr($str, rand(0, 62), 1);
        }
        return $cad;
    }

}
