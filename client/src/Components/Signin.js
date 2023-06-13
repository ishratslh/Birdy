import '../App.css';
import {useState} from 'react';
import './Signin.css';

function Signin(props){
    const[login, setLogin] = useState("");
    const[password, setPassword] = useState("");

    const getLogin = (evt) =>{setLogin(evt.target.value)}
    const getPassword = (evt) =>{setPassword(evt.target.value)}
    const handleLogin = (evt) => {
        evt.preventDefault(); //empeche la soumission du formulaire par defaut
        // Effectue une requete au serveur pour verifier les informations d'authentification
        fetch('../../server/routes/auth', {
            method: 'POST',
            body: JSON.stringify({ login, password }),
            headers: {'Content-Type': 'application/json' }
        })
        .then(response => {
            if(response.ok) {
                // Redirige l'utilisateur vers une autre page
                props.history.push('/');
            } else {
                // Affiche un message d'erreur dans la console
                console.error('Informations invalides');
            }
        })
        .catch(error => console.error(error));
    };

    return(
        <div className="flex-center">
            <div className="page-grid">
                <section className="form-wrapper">
                    <div className="header">
                        <h1>Log in</h1>
                        <p>Please fill in the informations to login.</p>
                    </div>

                    <div className="field">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required onChange={getLogin} />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required onChange={getPassword} />
                    </div>

                    <div className="pass-section flex">
                        <div className="input-item">
                            <input type="checkbox" name="remember" id="" />
                            <span>Remember me</span>
                        </div>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={handleLogin}>Sign In</button>

                    <div className="footer">
                        <p>Don't have an account? <a href="./signup.html">Sign up</a></p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Signin;

