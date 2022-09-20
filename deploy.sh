export PROJECT_NAME=blog
cat deploy/deployment.yml | envsubst | kubectl apply -f -
cat deploy/service.yml | envsubst | kubectl apply -f -