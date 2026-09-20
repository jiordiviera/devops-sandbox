# DevOps Sandbox

Projet bac à sable minimaliste conçu pour pratiquer l'automatisation d'un cycle de livraison continue (CI/CD) vers un VPS Linux via GitHub Actions, Docker et GHCR (GitHub Container Registry).

---

## Architecture du projet

```text
devops-sandbox/
├── .github/
│   └── workflows/
│       └── deploy.yml    # Pipeline CI/CD automatisé
├── Dockerfile            # Image de production multi-stage / non-root
├── index.js              # Micro-API Node.js native
├── docker-compose.yml    # Fichier de déploiement côté serveur
└── README.md