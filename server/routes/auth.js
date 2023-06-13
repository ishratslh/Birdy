const express = require("express");
const router = express.Router();
const Users = require('../entities/users');
const bcrypt = require('bcrypt');
const {status} = require("express/lib/response");
const session = require('express-session');
const saltRounds = 10;

//Sign up
router.post('/signup', async (req, res) => {
    const { mail, password, firstName, lastName } = req.body;

    // Vérification des paramètres
    if (!mail || !password || !firstName || !lastName) {
        return res.status(400).json({ message: 'Paramètres manquants' });
    }

    try {
        // Hashage du mot de passe
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Vérification si le mail utilisé existe déjà
        const mailExists = await Users.userExists(mail);
        if (mailExists) {
            return res.status(409).json('Le mail existe déjà');
        }

        // Création de l'utilisateur
        const newUser = await new User({
            mail: req.body.mail,
            password: hashedPassword,
        });

        // sauv User
        const userSaved = await nouveau.save();
        // Renvoi de la réponse
        return res.status(201).json('Utilisateur créé');

    } catch (err) {
        console.error(err);
        return res.status(504).json('Erreur serveur');
    }
});

//login
router.post('/login', async (req, res) => {
    const user = new Users('mongodb://localhost:27017', 'mydb');
    try {
        const { mail, password } = req.body;

        if (!mail || !password) {
            return res.status(400).json('Paramètre manquant');
        }

        await user.connect();
        const exists = await user.userExists(mail);
        if (!exists) {
            return res.status(401).json('Utilisateur/mail inconnu');
        }

        const passwordValide = await bcrypt.compare(req.body.password, user.password);
        if (!passwordValide) {
            return res.status(401).json('Mot de passe incorrect');
        }
        
        /*const passwordValide = await user.checkPassword(mail, password);
        if (!passwordValide) {
            return res.status(401).json('Mot de passe incorrect');
        }*/

        req.session.regenerate((err) => {
            if (err) {
                return res.status(504).json('Database error');
            }

            req.session.mail = mail;
            req.session.cookie.maxAge = SESSION_DURATION;
            return res.status(200).json('Access granted');
        });

    } catch (err) {
        console.error(err);
        return res.status(504).json('Database error');
    } finally {
        await user.disconnect();
    }
});

//logout
// Création d'une instance de la classe Users avec les paramètres de connexion à la base de données MongoDB
const users = new Users('mongodb://localhost:27017', 'mydb');

router.post('/logout', async (req, res) => {
    // Vérification que la clé de session est présente dans les cookies
    if (!req.cookies.key) {
        return res.status(400).json({ status: 400, message: 'Bad Request: key is missing from cookies' });
    }

    // Suppression de la clé de session dans la base de données MongoDB
    try {
        await users.connect();
        await users.keys.deleteOne({ key: req.cookies.key });
        await users.disconnect();
    // Suppression de la clé de session dans les cookies
        res.clearCookie('key');
        return res.status(204).json({ status: 204, message: 'Key successfully deleted' });
    } catch (error) {
        console.error(error);
        return res.status(504).json({ status: 504, message: 'Gateway Timeout: unable to connect to the database' });
    }
});

module.exports = router, saltRounds;


