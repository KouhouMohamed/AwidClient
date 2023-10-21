import React from "react";
import "../styles/login.css";
import { HiXCircle } from 'react-icons/hi';

const Login = ({ setShowLogin }) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <HiXCircle onClick={() => { setShowLogin(false); }} />
                </div>
                <div className="title">
                    <h1>Se connecter à votre compte</h1>
                </div>
                <div className="body">
                    <input type="text" placeholder='Enter your Email' />
                    <input type="password" placeholder='Enter your Password' />
                </div>
                <div className="login--footer">
                    <button>Se Connecter</button>
                    <a href="" className="btn">Créer un compte</a>
                </div>
            </div>
        </div>
    );
}

export default Login;
