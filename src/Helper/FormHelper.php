<?php

namespace HeimrichHannot\MultiColumnEditorBundle\Helper;

class FormHelper
{
    public static function encrypt(string $plain, string $key = '', string $cipher = 'aes-256-ctr', $options = 0)
    {
        if (\in_array($cipher, openssl_get_cipher_methods())) {
            $ivLength = openssl_cipher_iv_length($cipher);
            $iv = openssl_random_pseudo_bytes($ivLength);

            return [openssl_encrypt($plain, $cipher, $key, $options, $iv), base64_encode($iv)];
        }

        return false;
    }
}