import React from 'react';
import './FoodItem.css';
import { Link } from 'react-router-dom';

    const FoodItem = (props) => {
        const {name, price, image, shortDescription, id, category} = props.food;


    return (
            <div>
                <Link to ={'/menu/'+id} style={{ textDecoration: 'none', color: 'black' }}>
                    <div className="single-item">
                        <img className="item-image" src={image} alt=""/>
                        <h4>{name}</h4>
                        <h6>Price: ${price}</h6>
                        <p><small>{shortDescription}</small></p>
                    </div>
                </Link>
            </div>
    );
};

export default FoodItem;