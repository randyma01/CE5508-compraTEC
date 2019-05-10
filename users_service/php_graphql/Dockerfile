FROM php:7.2-apache

RUN apt-get update && \
  apt-get install -y git zip unzip && \
  php -r "readfile('http://getcomposer.org/installer');" | php -- --install-dir=/usr/bin/ --filename=composer && \
  apt-get -y autoremove && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN composer -Version

WORKDIR /app

COPY composer.json /app

RUN composer install

COPY . /app

EXPOSE 8000

CMD php -S localhost:8000 ./app.php
