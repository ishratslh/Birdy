import React from 'react';
import './Help.css';

function Help(){

    return (
    <>
    <body className='body'><title>Help Page</title>
        <div className="Help-h">
            <h1>Help Center</h1>
        </div>

        <div className="Help-main">
            <div className="Help-section">
                <h2>FAQ</h2>
                <div class="faq-items">
                    <h3>How do I reset my password ?</h3>
                    <p>To reset your password, click on the "forgot password" link on the login page and follow the instructions.</p>
                </div>

                <div class="faq-items">
                    <h3>How do I change my email address ?</h3>
                    <p>To change your email address, go to your account settings and update your email address.</p>
                </div>

                <div class="faq-items">
                    <h3>How do I change my password ?</h3>
                    <p>To change your password, go to your account settings and update your password.</p>
                </div>
            </div>
            
        </div>

        <footer>
            <p>&copy; 2023 - Birdy</p>
        </footer>
    </body>
        </>
    )
}

export default Help;