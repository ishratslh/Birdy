import React, { useState } from 'react';
import MessageForm from './MessageForm';

function Message( props ) {
    const { id, content, author, date, currentUser , onDelete, onEdit} = props;
    const [isDeleting, setIsDeleting] = useState(false);
    const [messageToEdit, setMessageToEdit] = useState(false);
    const isAuthor = currentUser === author;

    const handleDeleteMessage = () => {
        setIsDeleting(true);
        onDelete(id);
    };

    const handleEditMessage = (id) => {
        setMessageToEdit(true);
    };

    return (
        <div className="message">
            <h2>Message :</h2>
            <p>{content}</p>
            <p>Posted by {author} in {date}</p>
            {isAuthor && (
                <>
                <button onClick={() => handleEditMessage(id)}>Modifier</button>
                <button onClick={handleDeleteMessage} disabled={isDeleting}>
                    {isDeleting ? 'Deleting...' : 'Delete message'}Supprimer
                </button>
                </>
            )}
            {messageToEdit && (
                <MessageForm message={props} onEdit={onEdit} />
            )}
        </div>
    );
};


export default Message;
