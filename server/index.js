// Contient le code qui permet de lancer le serveur (listen)

const app = require('./app');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Le serveur écoute sur le port ${port}`);
});
