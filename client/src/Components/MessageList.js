import React, { useState, useEffect } from 'react';
import Message from './Message';
import MessageForm from './MessageForm';

const MessageList = () => {
    const [messages, setMessages] = useState([]);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        fetch('../../server/routes/message')
        .then(response => response.json())
        .then(data => setMessages(data))
        .catch(error => console.error(error));
    }, []);

    const addMessage = (message) => {
        fetch('../../server/routes/message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
        })
        .then(response => response.json())
        .then(data => setMessages([...messages, data]))
        .catch(error => console.error(error));
    };

    const handleDelete = (id) => {
        setIsDeleting(true);
        fetch(`../../server/routes/message/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            setMessages(messages.filter((message) => message.id !== id));
        })
        .catch(error => console.error(error));
    };


    return (
        <div>
            {messages.map((message) => (
                <Message
                    key={message.id}
                    message={message}
                    onDelete={handleDelete}
                    
                />
            ))}
        </div>
    );
};

export default MessageList;
//<MessageForm onAdd={addMessage} />