import React from 'react';
import "../App.css";
import "./Logout.css";

function Logout(props) {
    const handleLogout = () => {
        console.log("Log Out succeeded !");
        window.location.href = "./MainPage";
    };

    return (
        <div className="container">
            <button id="logout-btn" onClick={handleLogout}>Log Out</button>
        </div>
    );
}

export default Logout;
