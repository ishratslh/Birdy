import React, { useState } from 'react';
import Friend from './Friend';

function FriendList() {
    const [friends, setFriends] = useState("");

    const handleRemoveFriend = (id) => {
        setFriends(friends.filter((friend) => friend.id !== id));
    };

    return (
        <div className='friend-list'>
            <h2>My Friends</h2>
            {friends.map((friend) => (
                <div className="friend" key={friend.id}>
                    <div className="friend-info">
                        <h3>{friend.name}</h3>
                        <p>Interests : {friend.interests.join(', ')}</p>
                        <p>Friends in common : {friend.friendsInCommon}</p>
                    </div>
                    <div className='friend-action'>
                        <button onClick={() => handleRemoveFriend(friend.id)}>Remove Friend</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FriendList;
