.PHONY: up
up: down
	docker-compose \
		-f docker-compose.yml up --build

.PHONY: down
down:
	docker-compose down -v --remove-orphans

.PHONY: test-shell
test-shell:
	docker-compose \
		-f docker-compose.yml \
		run --rm app sh 