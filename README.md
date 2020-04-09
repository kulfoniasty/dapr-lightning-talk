
## FIRST
Run local: dapr run --app-id echo --app-port 9080 --port 61096 -- node server.js

In a browser: http://localhost:61096/v1.0/invoke/echo/method/as


## SECOND

docker
 docker build -t echo:v1 .

 kubectl apply -f .\dapr-deployment.yaml
 kubectl get svc
  kubectl port-forward svc/echo-dapr 56311:80

http://localhost:56311/v1.0/invoke/echo/method/as
 
 docker build -t echo:v1 .
