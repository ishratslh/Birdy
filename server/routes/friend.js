const express = require('express');
const router = express.Router();
const Friend = require('../entities/friend');
const User = require('../entities/users');

// Ajouter un ami
router.post('/add', async (req, res) => {
    try {
        const { userId, friendId } = req.body;
        const user = await User.findById(userId);
        const friend = await User.findById(friendId);

        if (!user || !friend) {
          return res.status(404).json({ message: 'Utilisateur ou ami introuvable' });
        }

        const newFriend = new Friend({
            user: userId,
            friend: friendId
        });

        await newFriend.save();

        res.status(201).json({ message: 'Ami ajouté' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
});

// Supprimer un ami
router.delete('/:id', async (req, res) => {
    try {
        const friend = await Friend.findById(req.params.id);

        if (!friend) {
            return res.status(404).json({ message: 'Ami introuvable' });
        }

        await friend.remove();

        res.json({ message: 'Ami supprimé' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur' });
    }
});

module.exports = router;
