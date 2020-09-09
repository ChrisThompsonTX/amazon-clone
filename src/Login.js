import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom';
import { auth } from './firebase';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
            })
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="amazon logo"
                />
            </Link>

            <div className="login__container">
                <h1 className="login__signin" >Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="login__signinbutton" onClick={signIn} type="submit">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className="login__registerbutton" onClick={register} >Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
