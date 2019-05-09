# Node.js Version
FROM php:7.2-apache

# INSTALL COMPOSER 
RUN apt-get update && \
    apt-get install -y git zip unzip && \
    php -r "readfile('http://getcomposer.org/installer');" | php -- --install-dir=/usr/bin/ --filename=composer && \
    apt-get -y autoremove && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Verify install composer
RUN composer -Version


# Working Directory
WORKDIR /app
COPY composer.json /app


# Dependencies
RUN composer install
COPY . /app

#Port
EXPOSE 8000

#Execute 
CMD php -S localhost:8000 ./app.php
