const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');

class Users {
    constructor(url, dbName) {
        this.url = url;
        this.dbName = dbName;
        this.client = new MongoClient(url, { useNewUrlParser: true });
    }

    async connect() {
        await this.client.connect();
        console.log(`Connected to MongoDB at ${this.url}`);
        this.db = this.client.db(this.dbName);
        this.users = this.db.collection('users');
    }

    async disconnect() {
        await this.client.close();
    }

    async userExists(mail) {
        const result = await this.users.findOne({ mail });
        return !!result;
    }

    async checkMdp(mail, password) {
        const result = await this.users.findOne({ mail });
        if (!result) {
            return false;
        }
        return result.password === password;
    }

    async createUser(mail, password, firstName, lastName) {
        try {
            if (!mail || !password || !firstName || !lastName) {
                throw new Error('Missing parameter');
            }

            const userExiste = await this.userExists(mail);
            if (userExiste) {
                throw new Error('L\'utilisateur existe déjà');
            }
            const salt = await bcrypt.genSalt(saltRounds);

            const newUser = {
                mail: mail,
                password: password,
                firstName: firstName,
                lastName: lastName
            };

            const result = await this.users.insertOne(newUser);

            if (result.insertedCount !== 1) {
                throw new Error('Erreur lors de la création de votre utilisateur');
            }

            return {
                status: 201,
                message: 'Utilisateur créé',
                details: ''
            };
        } catch (error) {
            if (error.message === 'Missing parameter') {
                return {
                    status: 400,
                    message: 'Paramètres manquants',
                    details: ''
                };
            } else if (error.message === 'L\'utilisateur existe déjà') {
                return {
                    status: 409,
                    message: 'L\'utilisateur existe déjà',
                    details: ''
                };
            } else {
                return {
                    status: 500,
                    message: 'Internal server error',
                    details: error.message
                };
            }
        }
    }
}

module.exports = Users;