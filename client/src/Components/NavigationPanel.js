import Signin from "./Signin";
import Logout from "./Logout";
import User from "./User";
import { useState } from 'react';
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

function NavigationPanel(props){
    const [isUserVisible, setIsUserVisible] = useState(false); 
    const handleSigninSuccess = () => {
        setIsUserVisible(false);
    }

    return(
    <nav id="navigation_pan">
        {props.isConnected ? (
        <>
            <Logout logout={props.logout}/>
            <button onClick={() => setIsUserVisible(true)}>Mon compte</button>
        </>
        ) : (
            <>
            <Signin signin={props.signin} onSigninSuccess={handleSigninSuccess} />
            
        </>
            
        )}
        
        {isUserVisible ? (<User />): 
        <><br/><br/><br/><br/><br/>
        <h4>en attendant que votre profil utilisateur se lance...</h4>
        <h1>VOICI LE TOP 10 DES TWEETS DE CE MOIS</h1>
        <br/><br/>
            <ul>
                <MessageList />
                <li>Message 1 : "xxx" Posted by author1 in 18/04</li>
                <li>Message 2 : "hello" Posted by author1 in 18/04</li>
                <li>Message 3 : "good morning" Posted by author2 in 17/04</li>
            </ul><br/><br/>
            <MessageForm />
            <br/><br/></>}
    </nav>
    );
}

export default NavigationPanel;


//<nav id="navigation_pan">
  //      {(props.isConnected) ? <Logout logout={props.Logout}/> : <Signin signin={props.Signin}/>}
    //</nav>