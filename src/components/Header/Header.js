import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../../resources/logo2.png';

const Header = () => {
    return (
        <div>
            <div className="navbar">
                
                <img className='logo' src={logo} alt=""/>

                <div className="nav-menu">
                    <a href="/login" className="icon"><FontAwesomeIcon icon={faShoppingCart}/></a>
                    <a href="/login">Login</a>
                    <a href="/signUp">SignUp</a>
                </div>
            </div>

            <div className="top-banner">
                <h1>Best food waiting for your belly</h1>
                <div className="searchBox">

                    <input className="searchInput" type="text" name="" placeholder="Search food items" />
                    <button className="searchButton" href="#">
                    <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;