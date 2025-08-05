#  Kubernetes Project: Node.js + MongoDB with PVC

This project shows how to deploy a simple Node.js app that connects to MongoDB inside Kubernetes using:

- Deployments
- Services
- Secrets
- ConfigMaps
- PersistentVolumeClaim (PVC)
- Default namespace (no separate namespace)

---

##  Stack

- Node.js + Express
- MongoDB
- Kubernetes (Minikube or your own cluster)
- Docker

---

##  Prerequisites

- Docker
- kubectl
- Minikube (or Kubernetes cluster)

---

## Step 1: Start Minikube


minikube start
eval $(minikube docker-env)

## Step 2: Build Docker Image
  
  cd app
  docker build -t node-mongo-app:1.0 .
  cd ..

## Step 3: Apply Kubernetes YAMLs

  kubectl apply -f k8s/

## Step 4: Access the Node.js App

  minikube service nodejs-service

You should see:
"MongoDB Connected! Hello World!"