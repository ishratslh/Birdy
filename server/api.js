//Contient le code qui définit l’API

const express = require('express');
const router = express.Router();
const auth = require('./routes/auth');
const userRouter = require('./routes/user');
const messageRouter = require('./routes/message');
const friendRouter = require('./routes/friend');

router.use('/auth', auth);
router.use('/user', userRouter);
router.use('/message', messageRouter);
router.use('/friend', friendRouter);

module.exports = router;


