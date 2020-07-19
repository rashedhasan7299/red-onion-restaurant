import React from 'react';
import './Login.css';
import logo from '../../resources/logo2.png'
import { Link } from 'react-router-dom';
import { useAuth } from './useAuth';
import { useState } from 'react';
import * as firebase from "firebase/app";

const Login = () => {

    const auth = useAuth();
    const userInfo = {
        ...auth.user
    }
    const [loginInfo, setLoginInfo] = useState(false);
    const [error, setError] = useState(false);

    const validateEmail = email => {
        var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return pattern.test(email);  // returns a boolean 
    }

    const validatePassword = password => {
        var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        return pattern.test(password);  // returns a boolean 
    }

    const handleChange = e => {
        if(e.target.name === "email" && e.target.value.length > 0) {
            validateEmail(e.target.value) ? userInfo[e.target.name] = e.target.value : userInfo[e.target.name] = null;
        }

        if(e.target.name === "password" && e.target.value.length > 0) {
            validatePassword(e.target.value) ? userInfo[e.target.name] = e.target.value : userInfo[e.target.name] = null;
        }
    }

    const loginApprove = e => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(userInfo.email, userInfo.password)
        .then(res=> {
            setLoginInfo(true);
            console.log(res);
        })
        .catch(err => {
            setLoginInfo(false);
            setError(true);
            auth.user.error = err.message;
        })
    }
    return (
        <div className='sub-page'>
            {
                auth.user ? <h1>Hi! {auth.user.name}</h1>
                :
                <>
                <div className='container'>
                <img className="logo-login" src={logo} alt=""/>
                <form>
                        <input onBlur={handleChange} type="email" name="email" placeholder="Email"/>
                        <input onBlur={handleChange} type="password" name="password" placeholder="Password"/>
                        <input onClick={loginApprove} type="submit" value="Login" />
                </form>
                </div>
                <p>Don't have an account?<Link style={{ textDecoration: 'none', color: '#f91944', fontWeight: '700'}} to ='/signUp'> Sign Up</Link></p>
                {
                    auth.user ? <button className="google-btn" onClick={auth.signOut}>Sign Out</button>
                    : <button className="google-btn" onClick={auth.signInWithGoogle}>Sign In with Google</button>
                }

                {
                    error && <p>{auth.user.error}</p>
                }
                </>
            }

        </div>
    );
};

export default Login;