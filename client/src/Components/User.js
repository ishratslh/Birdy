import React, { useState } from 'react';
import FriendList from './FriendList';
import MessageList from './MessageList';
//import "./User.css";

function User(props) {
    const {firstName, lastName, profilePic, interests, messageList, friendList, currentUser, setCurrentUser, userId, friendId} = props;
    const [user, setUser] = useState();
    const [isFriendRequestSent, setIsFriendRequestSent] = useState(false);

    if (!props.user) {
        return <div>Loading...</div>;
    }

    const addFriendRequest = () => {
        fetch('/addFriendRequest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                senderId: user.id || props.currentUser.id, 
                receiverId: user.id ? props.currentUser.id : userId, 
            })
        })
        .then(response => response.json())
        .then(data => setIsFriendRequestSent(true))
        .catch(error => console.error(error));
    };

    const removeFriend = () => {
        fetch(`/friends/${friendId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: currentUser.id
            })
        })
        .then(response => response.json())
        .then(data => {
            // Mettre à jour la liste d'amis après la suppression
            const updatedFriends = currentUser.friends.filter(friend => friend.id !== friendId);
            setCurrentUser({
                ...currentUser,
                friends: updatedFriends
            });
        })
        .catch(error => console.error(error));
    };

    return (
        <div className="user-profile">
            <header>
                <div className='user-header'>
                    <div className='user-profile-pic'>
                        <img src={profilePic} alt="profile picture" />
                        <h1 className='user-name'>{firstName} {lastName}</h1>
                    </div>
                </div>
            </header>
            
            <main>
                <div className='user-interests'>
                    <h2>Interests</h2>
                    <ul>
                        {interests.map((interest, index) => (
                            <li key={index}>{interest}</li>
                        ))}
                    </ul>
                </div>
                
                <div className='user-friends'>
                    <h2>friends</h2>
                    <ul>
                    {friendList.map((friend, index) => (
                        <li key={index}>
                        <div className="friend-profile-pic">
                            <img src={friend.profilePic} alt={`${friend.firstName} ${friend.lastName} profile`} />
                        </div>
                        <div className="friend-name">{friend.firstName} {friend.lastName}</div>
                        <button onClick={() => removeFriend(friend.id)}>Remove Friend</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='user-messages'>
                    <h2>Messages</h2>
                    <ul>
                        {messageList.map((message, index) => (
                            <li key={index}>
                                <div className="message-from">{message.from}</div>
                                <div className="message-text">{message.message}</div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='addOrRemoveFriend'>
                    {props.currentUser && props.currentUser.id !== props.user.id ? (
                        isFriendRequestSent ? (
                            <p>Friend request sent!</p>
                        ) : (
                            <button onClick={addFriendRequest}>Add Friend</button>
                        )
                    ) : null}
                </div>
            </main>
        </div>
    );
};

export default User;