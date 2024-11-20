// Import nécessaires pour l'application Express
import express from "express";
import cors from "cors";                        // CORS
import bodyParser from "body-parser";           // Pour l'interprétation des données réçues

// Import de la définition des routes
import Router from "./routes/routes.js";

// Initialisation de l'app
const app = express();

// L'application utilisera JSON
app.use(express.json());

// L'application utilisera CORS
app.use(cors());

// L'application utilisera BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// On fournit les routes à l'application Express
app.use(Router);

// Lancement de l'appli
app.listen(5000,
    () => console.log(`Server running at http://localhost:5000/women`)
);