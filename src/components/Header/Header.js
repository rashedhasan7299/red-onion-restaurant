import React, { useEffect, useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../../resources/logo2.png';
import { Link, NavLink } from 'react-router-dom';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Header = () => {

  const [proceed , setProceed] = useState(false);
  const [foodCount, setFoodCount] = useState(0);
    useEffect(() => {
        const previousCart = getDatabaseCart();
        const foodIds = Object.keys(previousCart);
        foodIds.length>0 && setProceed(true);
        setFoodCount(foodIds.length);
    }, [])

  const navActive = {
    'background-color': '#f91944',
    color: 'white',
    padding: '15px 20px',
    transition: ' 0.5s',
    'border-radius': '40px'
  };

  return (
    <div className='header'>
      <div className='navbar'>
        <Link to='/'>
          <button className='logo-btn'>
            <img className='logo' src={logo} alt='' />
          </button>
        </Link>

        <div className='nav-menu'>
          <NavLink activeStyle={navActive} to='/cart' className='icon'>
            <FontAwesomeIcon icon={faShoppingCart} />
            <p style={{display: 'inline'}}><small> {foodCount}</small></p>
            
          </NavLink>
          <NavLink activeStyle={navActive} to='/login'>
            Login
          </NavLink>
          <NavLink activeStyle={navActive} to='/signUp'>
            SignUp
          </NavLink>
        </div>
      </div>

      {
        <div className='top-banner'>
          <h1>Best food waiting for your belly</h1>
          <div className='searchBox'>
            <input
              className='searchInput'
              type='text'
              name=''
              placeholder='Search food items'
            />
            <button className='searchButton' href='#'>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default Header;
