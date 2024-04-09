# Node JS REST API with Express

v0.1

## Etapes

1 - Create Database and Table (in Docker)
2 - Création de l'application Backend Node JS
    - Dépendances: Express, MySQL2, Cors, body-parser et dotenv
3 – Connect to Database
    - Création d'un fichier de configuration de connexion à la base de données
    - Vérification
4 – Create Controller, Model and Route
    - Création d'un script principal
    - Création des routes
        - Les routes seront définies dans un fichier de route spécifique
    - Création du modèle
        - Le modèle sera défini dans un fichier de modèle spécifique
        - Le modèle contiendra les fonctions pour effectuer les opérations CRUD basiques
    - Création du contrôleur
        - Le contrôleur sera défini dans un fichier de contrôleur spécifique
        - Le contrôleur contiendra les actions spécifiques de chaque route
        - Chaque action du contrôleur appellera les fonctions du modèle
5 – Update index.js
    - Importer les dépendances
    - Créer une instance d'Express
    - Définir le port
    - Définir les routes
    - Lancer le serveur
6 – Start Node JS Express + MySQL App
7 - Test API using Postman

---

## 1. Create Database and Table


---

## 2. Initialisation de l'application Backend Node JS

Dans le dossier backend

```bash
npm init -y
```

---

# Dépendances

```bash
npm install express body-parser mysql2 cors
```

# Transformation en module

Modifier le fichier package.json et ajouter
_"type": "module",_
    
```json
/* [...] */
"main": "index.js",
"type": "module",
/* [...] */
```

https://www.tutsmake.com/vue-js-crud-node-js-express-mysql-example/