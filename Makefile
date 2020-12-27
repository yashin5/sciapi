PHONY: up down build up-and-seed-db test-shell npm-deps

up: build
	docker-compose  up -d

build: down
	docker-compose \
		-f docker-compose.yml build

up-and-seed-db: up
	docker exec sciapi_app_1 npx seed -u 'mongodb://admin:admin@db:27017/admin' ./seed/

down:
	docker-compose down -v --remove-orphans

test-shell:
	docker-compose \
		-f docker-compose.yml \
		run --rm app bash -c 'make npm-deps && /bin/bash'

npm-deps:
	npm install