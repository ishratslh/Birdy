const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {status} = require("express/lib/response");
const Users = require('../entities/users');
const saltRounds = 10;

//Récupération d'un utilisateur
router.get("/", async (req, res) => {
    const mail = req.query.mail;
    const username = req.query.username;
    try {
        const user = mail ?
            await Users.findById(mail) :
            await Users.findOne({
                username: username
            });
        const {
            followings,
            followers,
            password,
            updatedAt,
            ...other
        } = user._doc; // model._doc : show all informations except password, updatedAt, etc...

        res.status(200).json(other);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
