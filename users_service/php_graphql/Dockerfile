FROM php:7.3.5-cli

RUN apt-get update && \
    apt-get install -y git zip unzip 


RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');    \
    \$sig = file_get_contents('https://composer.github.io/installer.sig');      \
    if (trim(\$sig) === hash_file('SHA384', 'composer-setup.php')) exit(0);     \
    echo 'ERROR: Invalid installer signature' . PHP_EOL;                        \
    unlink('composer-setup.php');                                               \
    exit(1);"                                                                   \
 && php composer-setup.php -- --filename=composer --install-dir=/usr/local/bin  \
 && rm composer-setup.php


RUN docker-php-ext-install pdo pdo_mysql


WORKDIR /app
COPY composer.json /app



RUN composer install
COPY . /app


EXPOSE 7002


CMD ["php", "-S", "0.0.0.0:8080", "-t", "/app", "./app.php"]
