import React from 'react';
import User from './User';

class Friend extends React.Component {
    handleDelete = () => {
        this.props.onDelete(this.props.id);
    }

    render() {
        const { name, status, email, ville, pays } = this.props.friend;
        return (
            <div className="friend">
                <h3>{name}</h3>
                <p>{status}</p>
                <User utilisateur={{ nom: name, email: email, ville: ville, pays: pays }} />
                <button onClick={this.handleDelete}>Supprimer</button>
            </div>
        );
    }
  
}

export default Friend;
