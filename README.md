# Projet Birdy

Dans le cadre de l'UE Technologies du Web [LU3IN017], nous avons réalisé un projet visant à développer 
« from scratch » un site web de type Twitter en utilisant des langages web comme JS/HTML/CSS/SQL…. 

Le projet se situe dans le le répertoire 'git\birdy\projet\birdyz', le reste étant essentiellement 
du contenu de cours.


## Arborescence du projet

Le projet sera organisé de la manière suivante :
- [ ] server qui contient le code lié au serveur
- [ ] client qui contiet le code lié au client
- [ ] common qui contient le code partagé (client/serveur)

Le projet (côté client) sera organisé de la manière suivante :
- [ ] src/Components/, un répertoire qui contient l'ensemble des composants qui structurent le site (MainPage, Signin, Signup, Logout...)
- [ ] src/app.js 
- [ ] src/index.js 

Le projet (côté serveur) sera organisé de la manière suivante :
- [ ] package.json généré lors du "npm init"
- [ ] src/app.js Contient le code qui définit le serveur
- [ ] src/index.js Contient le code qui permet de lancer le serveur (listen)
- [ ] src/api.js Contient le code qui définit l’API
- [ ] src/routes/, un répertoire qui contient le code qui définit les routes
- [ ] src/entities/, un répertoire qui contiendra les différentes entités à manipuler, par exemple src/entities/users.js
pour la gestion des utilisateurs.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Démarrage

- Installation des modules en se placant dans le répertoire du projet:

### `cd client && npm install`
### `cd ../server && npm install`

- Ouverture de server de mongoDB
Il faut installer le serveur de mongoDB

`mongod --dbpath ./server/mongo/mongo --logpath ./server/mongo/mongod.log --fork`


- Pour la vision client / l'ouverture du front-end:
### `npm start` / `cd client\src && npm start`


- Pour la vision serveur / l'ouverture du back-end:
### `npm start` / `cd server\src && npm start`

Fait tourner l'app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

