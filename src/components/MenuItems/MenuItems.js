import React from 'react';
import { useParams } from 'react-router-dom';
import foods from '../../fakeData/foods';
import FoodItem from '../FoodItem/FoodItem';
import './MenuItems.css';

const MenuItems = () => {
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
                <button className='proceed' disabled>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default MenuItems;