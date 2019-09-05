run:
	docker-compose up
front-test:
	docker-compose exec frontend yarn run test
front-lint:
	docker-compose exec frontend yarn run lint
front-sh:
	docker-compose exec frontend sh
api-build:
	docker-compose exec api yarn build

