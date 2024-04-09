
# Lancement du docker

Le fichier docker-compose.yml est configuré pour lancer les services:
- mariadb
- phpmyadmin

```bash
docker-compose up -d --env-file .env.docker
```

> Vous devez avoir un service mariadb et un service phpmyadmin fonctionnels.
> La base de données doit déjà être remplie.

> ![](readme_docs/f7b5a7c8.png)


PHPMyAdmin
http://localhost:8088/

---


# Dépendances globales (sur le système)

Install de vue-cli
```bash
npm install -g @vue/cli
```

# Création du projet

Pour créer un nouveau projet Vue
```bash
vue create vue-women-in-tech
```

![](readme_docs/13220f53.png)

Choisir le preset **Manually select features**

![](readme_docs/5a0e01d1.png)
![](readme_docs/d804d3f3.png)

---

# Dépendances du projet

# Lancement

## Backend

    ```bash
    cd backend
    node index.js
    ```

## Frontend

```bash
cd frontend
npm run serve
```

# Accès

App
http://localhost:8080/
PHPMyAdmin
http://localhost:8088/