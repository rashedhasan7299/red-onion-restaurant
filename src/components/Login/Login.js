import React from 'react';
import './Login.css';
import logo from '../../resources/logo2.png'
import { Link } from 'react-router-dom';

const Login = () => {
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
        </div>
    );
};

export default Login;