import React, { useState } from 'react';
import './MessageForm.css';

/* Prend en parametre une fonction addMessage qui sera appelee à la soumission du formulaire */
const MessageForm = ({ addMessage }) => {
    const [message, setMessage] = useState({ title: '', content: '', author: '' });
    const [content, setContent] = useState('');
    const handleSubmit = (event) => {
        
        event.preventDefault();
        if (!message.content.trim()) return;

        fetch('../../server/routes/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            addMessage(data);
            setMessage({ content: '' });
        })
        .catch(error => console.error(error));
    };

    const handleChange = (event) => {
        setContent(event.target.value);
    };

    return (
        <form className = 'fff' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="content">Ecrivez votre message :</label><br></br>
                <textarea
                    id="content"
                    name="content"
                    rows="5"
                    value={message.content}
                    onChange={handleChange}
                />     
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default MessageForm;
