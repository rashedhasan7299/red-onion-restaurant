import React from 'react';
import logo from '../../../resources/logo2.png';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='sub-page'>
            <div className='container'>
                <img className="logo-login" src={logo} alt=""/>
                <form>
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="email" name="email" placeholder="Email"/>
                        <input type="password" name="password" placeholder="Password"/>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password"/>
                        <input type="submit" value="Sign Up" />
                </form>
            </div>
            <p>Already have an account?<Link style={{ textDecoration: 'none', color: '#f91944', fontWeight: '700'}} to ='/login'> Login</Link></p>
        </div>
    );
};

export default SignUp;