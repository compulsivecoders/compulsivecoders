build:
	docker build -t compulsivecoders/frontend .
run:
	docker run -it --rm -p 3000:3000 compulsivecoders/frontend
run_sh:
	docker run -it --rm --entrypoint /bin/sh compulsivecoders/frontend
push:
	docker push compulsivecoders/frontend:latest
	
