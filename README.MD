Build command: docker build -t api-server:latest .
Run command: docker run -d --rm --name api-server -p 8080:8080 api-server:latest

site: http://localhost:8181/