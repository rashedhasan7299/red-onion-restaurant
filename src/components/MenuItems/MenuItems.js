import React from 'react';
import { useParams } from 'react-router-dom';
import foods from '../../fakeData/foods';
import FoodItem from '../FoodItem/FoodItem';
import './MenuItems.css';
import { useEffect } from 'react';
import { getDatabaseCart } from '../../../src/utilities/databaseManager';
import { useState } from 'react';

const MenuItems = () => {

    const [proceed , setProceed] = useState(false);
    useEffect(() => {
        const previousCart = getDatabaseCart();
        const foodIds = Object.keys(previousCart);
        foodIds.length>0 && setProceed(true);
    }, [])

    const { category } = useParams();
    const currentDisplay = foods.filter(food => food.category === category);
    // console.log(currentDisplay);
    
    return (
        <div className="shop">
            <div className="food-container">
            {
                currentDisplay.map(food =>
                    <FoodItem food = {food} key = {food.id}></FoodItem>
                )
            }
            </div>
            <div className="btn">
                {
                    proceed ? <button className='proceed'>Proceed to Checkout</button>
                    : <button className='proceed' disabled>Proceed to Checkout</button>
                }
            </div>
        </div>
    );
};

export default MenuItems;