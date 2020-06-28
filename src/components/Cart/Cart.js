import React, { useEffect, useState } from 'react';
import './Cart.css';
import { getDatabaseCart } from '../../utilities/databaseManager';
import CartItems from '../CartItems/CartItems';
import foods from '../../fakeData/foods';
const Cart = () => {

    const [cartFoods, setCartFoods] = useState([]);
    
    useEffect(() => {
        // console.log(foods);
        const previousCart = getDatabaseCart();
        const foodIds = Object.keys(previousCart);
        // console.log(foodIds);
        const allCartFood = foodIds.map( id => {
            const food = foods.find( singleFood => singleFood.id === parseInt(id));
            food.quantity = previousCart[id];
            return(food);
        })
        setCartFoods(allCartFood);
        console.log(cartFoods);

    }, [])
    return (
        <div className='container main-cart'>
            <h1>Order Summary:</h1>
            {
                
            }
        </div>
    );
};

export default Cart;