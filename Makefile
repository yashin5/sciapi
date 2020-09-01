up: down
	@docker-compose build
	@docker-compose \
		-f docker-compose.yml up

down:
	docker-compose down -v --remove-orphans

test-shell:
	docker-compose \
		-f docker-compose.yml \
		run --rm app sh 