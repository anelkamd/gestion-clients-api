const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware pour analyser le corps des requêtes
app.use(bodyParser.json());

// Connexion à la base de données
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '', 
    database: ''
});

db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
        return;
    }
    console.log('Connecté à la base de données MySQL.');
});

// Routes pour la table Clients

// Récupérer tous les clients
app.get('/clients', (req, res) => {
    db.query('SELECT * FROM clients', (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
});

// Ajouter un client
app.post('/clients', (req, res) => {
    const { nom, postnom, adresse, numero } = req.body;
    db.query(
        'INSERT INTO clients (nom, postnom, adresse, numero) VALUES (?, ?, ?, ?)',
        [nom, postnom, adresse, numero],
        (err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(201).send('Client ajouté avec succès.');
        }
    );
});

// Récupérer un client par ID
app.get('/clients/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM clients WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        if (results.length === 0) {
            res.status(404).send('Client non trouvé.');
            return;
        }
        res.json(results[0]);
    });
});

// Modifier un client
app.put('/clients/:id', (req, res) => {
    const { id } = req.params;
    const { nom, postnom, adresse, numero } = req.body;
    db.query(
        'UPDATE clients SET nom = ?, postnom = ?, adresse = ?, numero = ? WHERE id = ?',
        [nom, postnom, adresse, numero, id],
        (err, results) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.send('Client mis à jour avec succès.');
        }
    );
});

// Supprimer un client
app.delete('/clients/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM clients WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.send('Client supprimé avec succès.');
    });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`API démarrée sur http://localhost:${port}`);
});
