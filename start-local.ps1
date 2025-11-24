minikube start
kubectl apply -f k8s-manifests.yaml
kubectl apply -f app-deployment.yaml
kubectl exec -n vault vault-0 -- vault kv put secret/myapp api-key=open-source-hemlighet-54321
Start-Sleep 10
minikube service secrets-app-service --url