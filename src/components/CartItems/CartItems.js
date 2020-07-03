import React from 'react';
import './CartItems.css'
import { useState } from 'react';
import foods from '../../fakeData/foods';
import { addToDatabaseCart, removeFromDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const CartItems = (props) => {
    const {name, price, quantity, image, id} = props.currentFood;
    const [quantityCount, setQuantityCount] = useState(quantity);

    const handleAdd = clickedId => {
        const currentFood = foods.find(food => clickedId === food.id);
        const currentQuantity = quantityCount + 1
        setQuantityCount(currentQuantity);
        currentFood.quantity = currentQuantity;
        console.log(currentFood);
        addToDatabaseCart(clickedId, currentQuantity);
    }

    const handleSub = clickedId => {
        if(quantityCount> 0) {
            const currentFood = foods.find(food => clickedId === food.id);
            const currentQuantity = quantityCount - 1
            setQuantityCount(currentQuantity);
            currentFood.quantity = currentQuantity;
            console.log(currentFood);
            addToDatabaseCart(clickedId, currentQuantity);
        }

        if(quantityCount===0 || quantityCount ===1) {
            removeFromDatabaseCart(clickedId);
        }
    }


    return (
        <div>
            {
           quantityCount > 0 && <div className = "cartItemContainer">
            <div className="food-image">
                <img src={image} alt=""/>
            </div>

            <div className='food-info'>
                <h5>{name}</h5>
                <h3>${price}</h3>
            </div>

            <div className='cart'>
                <button onClick={() => {handleSub(id)}} className='cart-btn'>-</button>
                <h3>  {quantityCount}  </h3>
                <button onClick={() => {handleAdd(id)}} className='cart-btn' style={{color: '#f91944'}}>+</button>
            </div>
        </div>
        }
        </div>
    );
};

export default CartItems;