run:
	docker-compose up
front-test:
	docker-compose exec frontend yarn run test
front-lint:
	docker-compose exec frontend yarn run lint
front-sh:
	docker-compose exec frontend sh
api-build:
	docker-compose run api yarn build
api-install:
	docker-compose run api yarn install
front-install:
	docker-compose run frontend yarn install
front-prod:
	docker-compose run -p 3000:3000 frontend yarn start
api-migration:
	docker-compose run api yarn run typeorm migration:run
