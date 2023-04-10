FROM php:8.2-cli

WORKDIR /app

RUN apt-get update -y && apt-get install -y unzip
RUN docker-php-ext-install pdo_mysql

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
COPY . /app
RUN composer install

EXPOSE 8000
CMD php artisan serve --host=0.0.0.0 --port=8000