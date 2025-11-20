# Secrets-app med HashiCorp Vault + External Secrets Operator

En komplett demo som visar hur man lagrar riktiga hemligheter i **HashiCorp Vault (AES-256-krypterade)** och automatiskt synkar dem till en Node.js-app i Kubernetes – helt utan att hemligheter någonsin ligger i Git.

### Flödesbeskrivning
1. Hemligheten lagras **krypterad med AES-256** i HashiCorp Vault  
2. External Secrets Operator läser hemligheten med root-token  
3. ESO skapar ett vanligt Kubernetes Secret (`app-secret`)  
4. Kubernetes injicerar hemligheten som miljövariabel i podden  
5. Node.js-app läser `process.env.API_KEY` → visar i webbläsaren

**Resultat:** Du ser `open-source-hemlighet-54321` i webbläsaren – men den har aldrig legat i klartext i Git eller Kubernetes YAML.

## Så startar du lokalt (Minikube)

```bash
minikube start
(en gång:) (helm repo add hashicorp https://helm.releases.hashicorp.com
helm repo add external-secrets https://charts.external-secrets.io
kubectl apply -f k8s-manifests.yaml
kubectl apply -f app-deployment.yaml)
minikube service secrets-app-service --url -n default
