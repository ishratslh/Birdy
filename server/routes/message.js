const express = require('express');
const router = express.Router();
const Message = require('../entities/message');
const { ajouterMessage, supprimerMessage, getMessage, modifierMessage } = require('../entities/message');

// Récupère tous les messages
router.get('/messages', async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Ajouter un message
router.post('/messages', async (req, res) => {
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
        return res.status(400).json({ message: 'Title, content, and author are required.' });
    }
    try {
        const newMessage = await ajouterMessage({ title, content, author });
        res.status(201).json(newMessage);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Supprimer un message
router.delete('/messages/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await supprimerMessage(id);
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

//Modifier un message existant
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
        const updatedMessage = await modifierMessage(id, { title, content });
        res.json({ updatedMessage });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;