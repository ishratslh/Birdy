import "../App.css";
import { useState } from 'react';
import NavigationPanel from "./NavigationPanel";
import Signup from "./Signup";
import Contact from "./Contact";
import About from "./About";
import Help from "./Help";
import "./MainPage.css";

function MainPage(props){
    const [isConnected, setConnect] = useState(false);
    const [page, setPage] = useState("Signup");

    const getConnected = () => {
        setConnect(true);
        setPage("Message");
    }

    const setLogout = () => {
        setConnect(false);
        setPage("Signup");
    }

    const handleLinkClick = (event, pageName) => {
        event.preventDefault();
        setPage(pageName);
    }

    return( 
        <>
        <div className="header-page">
            <header>
                <div className="left-side"><br></br>
                    <img src="https://www.freepnglogos.com/uploads/thinking-png/thinking-emoji-discord-emoji-17.png" alt="Logo Twitter" width="100" height="100"/>
                </div>

                <div className="middle-side">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit">Submit</button>
                </div>

                <div className="right-side"></div>  
            </header>
        </div>
        
        <div className="main-page">
            <main>
                <div className="sidebar">
                        <a className="active" href="home" onClick={() => setPage("Signup")}><i className="fa fa-fw fa-home"></i>Home</a>
                        <a href="#" onClick={() => setPage("Contact")}> <i className="fa fa-fw fa-envelope"></i>Contact</a>
                        <a href="#" onClick={() => setPage("About")}><i className="fa fa-fw fa-wrench"></i>About</a>
                        <a href="#" onClick={() => setPage("Help")}><i className="fa fa-fw fa-user"></i>Help</a>
                </div>

                <div className="left-side"></div>

                <div className="middle-side">
                    {page==="Signup" ? (
                        <>
                            <h1>Welcome to Birdy !</h1>
                            <h3>Are you new here? Sign Up below.</h3><a href="#" onClick={() => setPage("Signup")}>Sign Up</a>
                            <br/>
                            <h3>Already have an account? Please Sign In.</h3><a href="#" onClick={() => setPage("Signin")}>Sign In</a>
                            <Signup />
                        </>
                    ) : (
                        <NavigationPanel login={getConnected} logout={setLogout} isConnected={isConnected}/>
                    )}
                </div>

                <div className="right-side">
                    {page==="Contact" ? <Contact /> : null}
                    {page==="About" ? <About /> : null}
                    {page==="Help" ? <Help /> : null}
                </div>
            </main>    
        </div>
        </>
    );
}

export default MainPage;

/*
            <div className="right-side">
                    <div>
                        <h1>Welcome to Birdy !</h1>
                        <h3>Are you new here? Sign Up below.</h3>
                        <a href="#" onClick={() => setPage("Signup")}>Sign Up</a>
                        <br/><br/>
                        <h3>Already have an account? Please Sign In.</h3>
                        <a href="#" onClick={() => setPage("Signin")}>Sign In</a>
                        
                    </div>
            {page==="Signup"? <Signup /> : <NavigationPanel login={getConnected} logout={setLogout} isConnected={isConnected}/>}
            {page === "Message" ? <Message /> : null}
              </div>
            </main>    
        </div>
        </>
    );

    {page === "Message" ? <Message /> : null}
    {page === "Contact" ? <Contact /> : null}
    {page === "About" ? <About /> : null} 
    {page === "Help" ? <Help /> : null}

    <a className="active" href="home" onClick={() => setPage("Signup")}><i className="fa fa-fw fa-home"></i>Home</a>
    <a href="#" onClick={() => setPage("Contact")}> <i className="fa fa-fw fa-envelope"></i>Contact</a>
    <a href="#" onClick={() => setPage("About")}><i className="fa fa-fw fa-wrench"></i>About</a>
    <a href="#" onClick={() => setPage("Help")}><i className="fa fa-fw fa-user"></i>Help</a>
}*/
