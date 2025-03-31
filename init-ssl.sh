#!/bin/bash

mkdir -p certbot/www
mkdir -p certbot/conf

if [ ! -d "/etc/letsencrypt/live/spashkov.ru" ]; then
    echo "Initializing new certificates..."
    docker-compose up -d frontend

    docker-compose run --rm certbot

    docker-compose restart frontend
else
    echo "Certificates already exist, continuing with deployment..."
fi

# Start all services
docker-compose up -d