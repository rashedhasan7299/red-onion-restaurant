import React from 'react';
import './FoodItem.css';

const FoodItem = (props) => {
    const {name, price, image, shortDescription} = props.food;
    console.log( image );

    return (
            <div className="single-item">
                <img className="item-image" src={image} alt=""/>
                <h4>{name}</h4>
                <h6>Price: ${price}</h6>
                <p><small>{shortDescription}</small></p>
            </div>
    );
};

export default FoodItem;