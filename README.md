## Coding by Anelka MD

# Gestion des Clients API

Une API simple construite avec **Node.js**, **Express**, et **MySQL** pour gérer les données des clients.

---

## **Fonctionnalités**

- Ajouter un client
- Récupérer tous les clients
- Mettre à jour un client
- Supprimer un client

---

## **Prérequis**

- **Node.js** (v14 ou supérieur)
- **MySQL**
- **Postman** (ou tout autre outil pour tester les API)
- **WAMP/MAMP/XAMPP** (optionnel si MySQL est déjà installé)

---

## **Installation**

1. **Clonez le projet**
   ```bash
   git clone https://github.com/votre-repo/gestion-clients-api.git
   cd gestion-clients-api

2. **Installez les dépendances**

- **npm install**

3. **Configurez la base de données**

- Créez une base de données MySQL appelée gestion_clients (ou un autre nom de votre choix).
- Exécutez le script SQL suivant pour créer la table **Clients* :

    CREATE TABLE Clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    postnom VARCHAR(255) NOT NULL,
    adresse VARCHAR(255),
    numero INIT(15)
);

4. **Installez la bibliothèque dotenv pour lire les variables d'environnement**

    - npm install dotenv

5. **Exemple**

{
    "nom": "Dupont",
    "postnom": "Jean",
    "adresse": "123 Rue Exemple",
    "numero": "0812345678"
}


