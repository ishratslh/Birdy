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
