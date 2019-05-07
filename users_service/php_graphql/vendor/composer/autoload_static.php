<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit79fe75b18fcd3f24584d6f0db0a457d3
{
    public static $prefixLengthsPsr4 = array (
        'G' => 
        array (
            'GraphQL\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'GraphQL\\' => 
        array (
            0 => __DIR__ . '/..' . '/webonyx/graphql-php/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit79fe75b18fcd3f24584d6f0db0a457d3::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit79fe75b18fcd3f24584d6f0db0a457d3::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}