import React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom';

const Menu = () => {

    // const menuClick = e => {
    //     e.preventDefault();
    //     const category = e.target.textContent.toLowerCase();
    //     console.log(category);
    //     return category;
    // }

    const activeStyle = {
        "color": "#f91944",
        "fontWeight": "500",
        "borderBottom": "2px solid #f91944",
        "borderRadius": "1px",
        "transition" : "0.3s"
    }
    return (
        <div>
            <div className="menu">
                <NavLink activeStyle={activeStyle} className="item-name" to="/menu/breakfast">Breakfast</NavLink>
                <NavLink activeStyle={activeStyle} className="item-name" to="/menu/lunch">Lunch</NavLink>
                <NavLink activeStyle={activeStyle} className="item-name" to="/menu/dinner">Dinner</NavLink>
            </div>
        </div>
    );
};

export default Menu;