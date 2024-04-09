# Node JS REST API with Express

v0.1

## Etapes

- Création de l'application Backend Node JS
  - Initialisation de l'application Backend Node JS
  - Dépendances globales (sur le système)
      - Dépendances : 
        - express mysql2 cors body-parser dotenv
  – Connect to Database
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

> Le fichier va générer un fichier **package.json** qui contiendra les informations du projet Node.

---

# Dépendances

On installe les dépendances dont on aura besoin dans ce projet.

```bash
npm install express body-parser mysql2 cors
```

> Les dépendances seront ajoutées dans **package.json** et installées dans le dossier **node_modules**. 
 
---

# Lecture du fichier d'environnement

Dans le fichier **index.js**, on va aller chercher les variables d'environnement placées dans le fichier **.env.docker** (du dossier **parent**)

```javascript
import dotenv from "dotenv";

// Load dotenv file
const env = dotenv.config( { path: '../.env.docker' } );
console.log(env);
```
> Vous devez avoir accès à toutes les variables d'environnement.


> Cette méthode sera ensuite déplacée dans un autre fichier.
> C'est présenté ici uniquement pour la démonstration.
    
--- 

# Connect to Database

Création d'un fichier de configuration de connexion à la base de données.

```bash
touch config/database.js
```

```javascript
import mysql from "mysql2";
import dotenv from "dotenv";

// Load dotenv file
const env = dotenv.config( { path: '../.env.docker' } );
console.log(env);

// create the connection to database
const db = mysql.createConnection(
    {
        host:           env.parsed.DB_HOST_FOR_NODE,
        port:           env.parsed.DB_PORT_FOR_NODE,
        user:           env.parsed.DB_USER,
        password:       env.parsed.DB_PASSWORD,
        database:       env.parsed.DB_NAME
    });

export default db;
```


https://www.tutsmake.com/vue-js-crud-node-js-express-mysql-example/