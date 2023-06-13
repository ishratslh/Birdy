import React from 'react';
import './Contact.css';

function Contact(props){
    
    function handleSend(evt) {
        evt.preventDefault(); 
        const form = document.getElementById('contact-form');
        fetch('/api/createMessage', {
            method: 'POST',
            body: JSON.stringify({
                firstname: form.firstname.value,
                lastname: form.lastname.value,
                email: form.email.value,
                object: form.object.value,
                message: form.message.value
            }),
            headers: {'Content-Type': 'application/json' }
        })
        .then(response => {
            if (response.ok) {
                alert('Your message has been sent successfully.');
                form.reset();
            } else {
                alert('An error occurred while sending the message.');
            }
        })
        .catch(error => {
            console.error(error);
            alert('An error occurred while sending the message.');
          });
    }


    return (
        <>
        <div className="Contact-Box">
        <div className="Contact-h">
            <h1>Contact Us</h1>
        </div>
        <div className="Contact-main">
            <form id="contact-form2">
                <div>
                    <label htmlFor="firstname"><b>First Name :</b></label>
                    <input type="text" placeholder="Enter First Name" name="firstname" required />
                </div><br></br>

                <div>
                    <label htmlFor="lastname"><b>Last Name :</b></label>
                    <input type="text" placeholder="Enter Last Name" name="lastname" required />
                </div><br></br>

                <div>
                    <label htmlFor="email"><b>Email Adress :</b></label>
                    <input type="email" placeholder="Enter Email Adress" name="email" required />
                </div><br></br>

                <div>
                    <label htmlFor="object"><b>Object :</b></label>
                    <input type="text" placeholder="Enter Subject" name="object" required />
                </div><br></br>

                <div>
                    <label htmlFor="message"><b>Message :</b></label>
                    <textarea placeholder="Enter Message" name="message" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSend}>Send</button>
            </form>
        </div>
        </div>
        </>
    )
}


export default Contact;