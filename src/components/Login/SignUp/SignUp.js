import React from 'react';
import logo from '../../../resources/logo2.png';

const SignUp = () => {
    return (
        <div className='sub-page'>
            <div className='container'>
                <img src={logo} alt=""/>
                <form>
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="email" name="email" placeholder="Email"/>
                        <input type="password" name="password" placeholder="Password"/>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password"/>
                        <input type="submit" value="Sign Up" />
                </form>
            </div>
        </div>
    );
};

export default SignUp;