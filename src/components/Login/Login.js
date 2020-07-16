import React from 'react';
import './Login.css';
import logo from '../../resources/logo2.png'
import { Link } from 'react-router-dom';
import { useAuth } from './useAuth';

const Login = () => {

    const auth =useAuth();
    console.log(auth);
    return (
        <div className='sub-page'>
            <div className='container'>
                <img className="logo-login" src={logo} alt=""/>
                <form>
                        <input type="email" name="email" placeholder="Email"/>
                        <input type="password" name="password" placeholder="Password"/>
                        <input type="submit" value="Login" />
                </form>
            </div>
            <p>Don't have an account?<Link style={{ textDecoration: 'none', color: '#f91944', fontWeight: '700'}} to ='/signUp'> Sign Up</Link></p>
            {
                auth.user ? <button className="google-btn" onClick={auth.signOut}>Sign Out</button>
                : <button className="google-btn" onClick={auth.signInWithGoogle}>Sign In with Google</button>
            }
            {
                auth.user && <h1>{auth.user.name}</h1>
            }

        </div>
    );
};

export default Login;