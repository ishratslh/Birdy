const { MongoClient, ObjectId } = require('mongodb');

async function ajouterMessage(message) {
    const client = new MongoClient('mongodb://localhost:27017');
    try {
        await client.connect();
        const db = client.db('mydb');
        const messagesCollection = db.collection('messages');
        const result = await messagesCollection.insertOne(message);
        return result.insertedId;
    } finally {
        await client.close();
    }
}

async function supprimerMessage(id) {
    const client = new MongoClient('mongodb://localhost:27017');
    try {
        await client.connect();
        const db = client.db('mydb');
        const messagesCollection = db.collection('messages');
        const result = await messagesCollection.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) {
            throw new Error('Message not found');
        }
    } finally {
        await client.close();
    }
}

async function modifierMessage(id, updates) {
    const client = new MongoClient('mongodb://localhost:27017');
    try {
        await client.connect();
        const db = client.db('mydb');
        const messagesCollection = db.collection('messages');
        const result = await messagesCollection.updateOne({ _id: id }, { $set: updates });
        if (result.matchedCount === 0) {
            throw new Error('Message not found');
        }
        return result.modifiedCount;
    } finally {
        await client.close();
    }
  }

async function getMessage(id) {
    const client = new MongoClient('mongodb://localhost:27017');
    try {
        await client.connect();
        const db = client.db('mydb');
        const messagesCollection = db.collection('messages');
        const message = await messagesCollection.findOne({ _id: ObjectId(id) });
        if (!message) {
            throw new Error('Message not found');
        }
        return message;
    } finally {
        await client.close();
    }
}

module.exports = { ajouterMessage, supprimerMessage, getMessage, modifierMessage };


  
  
  
  
  
  