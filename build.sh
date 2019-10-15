#! /usr/bin/env bash
echo "Building Docker Container Image..."
docker build -t cchen97/acme .
docker push cchen97/acme
echo  "Cleaning Up..."
docker image prune -f 