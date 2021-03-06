FROM php:7.4.11-fpm

LABEL author="Moustakime KIFIA"
RUN apt-get update \
    && apt-get install -y --no-install-recommends vim curl debconf git apt-transport-https apt-utils \
    build-essential locales acl mailutils wget zip unzip supervisor libsodium-dev librabbitmq-dev \
    libpng-dev libicu-dev libzip-dev libxml2-dev libexif-dev wkhtmltopdf \
    gnupg gnupg1 gnupg2 \
    && printf "\n" | pecl install amqp \
    && docker-php-ext-install gd \
    && docker-php-ext-install intl \
    && docker-php-ext-install zip \
    && docker-php-ext-install pdo \
    && docker-php-ext-install pdo_mysql \
    && docker-php-ext-install xml \
    && docker-php-ext-install sockets \
    && docker-php-ext-install exif \
    && docker-php-ext-enable amqp

COPY php.ini /etc/php/php.ini
COPY php-fpm-pool.conf /etc/php/pool.d/www.conf

RUN echo 'date.timezone="Europe/Madrid"' >> /usr/local/etc/php/conf.d/date.ini

RUN curl -sSk --silent --show-error https://getcomposer.org/installer | php -- --disable-tls && \
    mv composer.phar /usr/local/bin/composer

RUN groupadd dev -g 999
RUN useradd dev -g dev -d /home/dev -m

RUN rm -rf /var/lib/apt/lists/*
RUN echo "en_US.UTF-8 UTF-8" > /etc/locale.gen && \
    echo "fr_FR.UTF-8 UTF-8" >> /etc/locale.gen && \
    locale-gen

WORKDIR /home/agencia/back

EXPOSE 9000

COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

CMD ["php-fpm"]
