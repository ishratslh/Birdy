const { MongoClient } = require('mongodb');

async function getFriends() {
    const db = await db.connect();
    const friends = await db.collection('friends').find().toArray();
    return friends;
}

async function addFriend(friend) {
    const db = await db.connect();
    const newFriend = await db.collection('friends').insertOne(friend);
    return newFriend;
}

async function deleteFriend(id) {
    const db = await db.connect();
    
}

async function sendFriendRequest(id) {}

async function acceptFriendRequest(id) {}

module.exports = { getFriends, addFriend, deleteFriend, sendFriendRequest, acceptFriendRequest };

