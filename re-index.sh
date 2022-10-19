#!/usr/bin/env bash

docker run -it --env-file=./docsearch/.env -e "CONFIG=$(cat ./docsearch/config.json | jq -r tostring)" algolia/docsearch-scraper
