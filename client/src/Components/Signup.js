import '../App.css';
import {useState} from "react";
import './Signup.css';

function Signup(props){
    const [login, setLogin]=useState("");
    const [password, setPassword]=useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [passOK, setPassOK] = useState(false);

    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");

    const getLogin = (evt) => {setLogin(evt.target.value)};
    const getFirstName = (evt) => {setFirstName(evt.target.value)};
    const getLastName = (evt) => {setLastName(evt.target.value)};
    const getPass1 = (evt) => {setPass1(evt.target.value)};
    const getPass2 = (evt) => {setPass2(evt.target.value)};

    const submissionHandler = (evt) => {
        if (pass1 === pass2) setPassOK(true);
    }

    return(
        <div class="prince">
            <body class="flex-center">
                <div class="page-grid">
                    <section class="form-wrapper">
                        <div class="header">
                            <h1>Register</h1>
                            <p>Please fill in the informations to create an account.</p>
                        </div>

                        <div class="field">
                            <label for="firstname"><b>First Name</b></label>
                            <input id="firstname" type="text" placeholder="Enter First Name" name="firstname" onChange={getFirstName} required />

                            <label for="lastname"><b>Last Name</b></label>
                            <input id="lastname" type="text" placeholder="Enter Last Name" name="lastname" onChange={getLastName} required />

                            <label for="email"><b>Email Adress</b></label>
                            <input id="signin_login" type="text" placeholder="Enter Email adress" name="email" onChange={getLogin} required />

                            <label for="psw"><b>Password</b></label>
                            <input id="signin_mdp1" type="password" placeholder="Enter Password" name="psw" onChange={getPass1} required />

                            <label for="psw-repeat"><b>Confirm Password</b></label>
                            <input id="signin_mdp2" type="password" placeholder="Repeat Password" name="psw-repeat" onChange={getPass2} required />
                        </div>

                        <button type="submit" class="btn btn-primary" onClick={submissionHandler}>Register</button>

                    </section>
                </div>
            </body>
        </div>
    );
}

export default Signup;

//<div class="footer">
  //  <p>Already have an account? <a href="./signin.html">Sign In</a></p>
//</div>