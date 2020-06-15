import React from 'react';
import { useParams } from 'react-router-dom';
import foods from '../../fakeData/foods';
import FoodItem from '../FoodItem/FoodItem';

const MenuItems = () => {
    const { category } = useParams();
    const currentDisplay = foods.filter(food => food.category === category);
    // console.log(currentDisplay);
    
    return (
        <div>
            {
                currentDisplay.map(food =>
                    <FoodItem food = {food} key = {food.id}></FoodItem>
                )
            }
        </div>
    );
};

export default MenuItems;