Node JS REST API with Express

Step 1- Create Database and Table (in Docker)
Step 2 – Install Express, MySQL2, and Cors
Step 3 – Connect to Database
Step 4 – Create Controller, Model and Route
Step 5 – Update index.js
Step 6 – Start Node JS Express + MySQL App

---

# Initialisation

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
[...]
"main": "index.js",
"type": "module",
[...]
```

https://www.tutsmake.com/vue-js-crud-node-js-express-mysql-example/