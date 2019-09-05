run:
	docker-compose up
front-test:
	docker-compose exec frontend yarn run test
front-lint:
	docker-compose exec frontend yarn run lint
