Build command: docker build -t api-server:latest .
Run command: docker run -d --rm --name api-server -p 8080:8080 api-server:latest

site: http://localhost:8181/



deploy a stack of the image: docker stack deploy -c docker-compose.yaml myapp-stack
scale first service to 7 instances: docker service scale myapp-stack_servicetwo=7
remove stack and containers: docker stack rm myapp-stack