# Projet

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

