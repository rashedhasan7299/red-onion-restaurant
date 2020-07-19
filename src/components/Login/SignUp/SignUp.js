import React, { useState } from 'react';
import logo from '../../../resources/logo2.png';
import { Link } from 'react-router-dom';
import Auth, { useAuth } from '../useAuth';
import * as firebase from "firebase/app";

const SignUp = () => {

    const auth = useAuth();
    const [user, setUser] = useState(auth.user);
    const newUserInfo = {
        ...user
    }

    const validateEmail = email => {
        var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return pattern.test(email);  // returns a boolean 
    }

    const validatePassword = password => {
        var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        return pattern.test(password);  // returns a boolean 
    }

    const confirmPassword = password => {
        if(newUserInfo.password === password) {
            return true;
        }
        else return false;  // returns a boolean 
    }

    const handleChange = e => {
        if(e.target.name === "name" && e.target.value.length > 0) {
            newUserInfo[e.target.name] = e.target.value;
        }

        if(e.target.name === "email" && e.target.value.length > 0) {
            validateEmail(e.target.value) ? newUserInfo[e.target.name] = e.target.value : newUserInfo[e.target.name] = null;
        }

        if(e.target.name === "password" && e.target.value.length > 0) {
            validatePassword(e.target.value) ? newUserInfo[e.target.name] = e.target.value : newUserInfo[e.target.name] = null;
        }

        if(e.target.name === "confirmPassword") {
            confirmPassword(e.target.value) ? console.log("password valid") : newUserInfo.password = null;
        }
    }

    const createAccount = e => {
        e.preventDefault();
        if(newUserInfo.name && newUserInfo.email && newUserInfo.password){
            firebase.auth().createUserWithEmailAndPassword(newUserInfo.email, newUserInfo.password)
            .then(res => {
                setUser(newUserInfo);
                console.log(res);
            })
            .catch(err => console.log("error happened", err))
        }
        else {
            console.log("invalid user", newUserInfo);
        }
    }
    return (
        <div className='sub-page'>
            {
                auth.user ? 
                <>
                    <h1>Hi! {auth.user.name}</h1> {}
                    <button className='proceed place-order'>Log Out</button>
                </>
                :
                <>
                    <div className='container'>
                    <img className="logo-login" src={logo} alt=""/>
                    <form>
                            <input onBlur={handleChange} type="text" name="name" placeholder="Name"/>
                            <input onBlur={handleChange} type="email" name="email" placeholder="Email"/>
                            <input onBlur={handleChange} type="password" name="password" placeholder="Password"/>
                            <input onBlur={handleChange} type="password" name="confirmPassword" placeholder="Confirm Password"/>
                            <input onClick={createAccount} type="submit" value="Sign Up" />
                    </form>
                    </div>
                    <p>Already have an account?<Link style={{ textDecoration: 'none', color: '#f91944', fontWeight: '700'}} to ='/login'> Login</Link></p>
                </>
            }
        </div>
    );
};

export default SignUp;