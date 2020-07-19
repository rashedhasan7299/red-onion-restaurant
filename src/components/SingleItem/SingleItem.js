import React from 'react';
import { useParams } from 'react-router-dom';
import foods from '../../fakeData/foods';
import './SingleItem.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { addToDatabaseCart, getDatabaseCart } from '../../../src/utilities/databaseManager';
import { useEffect } from 'react';


const SingleItem = (props) => {
    const [count, setCount] = useState(0);
    const {currentId}  = useParams();

    const currentFood = foods.find(food => food.id === parseInt(currentId));
    const {name, price, longDescription, image, id} = currentFood;

    useEffect(() => {
        const previousCart = getDatabaseCart();
        const foodIds = Object.keys(previousCart);
        const currentItem = foodIds.find(pd => parseInt(pd) === id);
        if(currentItem) {
            const currentCount = previousCart[currentItem];
            setCount(currentCount);
        }
    }, [])


    const handleSub = () => {
        count !== 0 && setCount(count - 1);
    }

    const handleAdd = () => {
        setCount(count + 1);
    }

    const addToCart = () => {
        count > 0 && addToDatabaseCart(id, count);
    }

    return (
        <div className="container single-item-view">
            <div className="grid-2-1">
                <div>
                    <h1>{name}</h1>
                    <p>{longDescription}</p>
                    <div className="cart-container">
                        <h2>${price}</h2>
                        <div className='cart'>
                            <button onClick= {handleSub} className='cart-btn'>-</button>
                            <h2>  {count}  </h2>
                            <button onClick= {handleAdd} className='cart-btn' style={{color: '#f91944'}}>+</button>
                        </div>
                    </div>
                    <button onClick={addToCart} className='addToCart'><FontAwesomeIcon style={{marginRight: '10px'}} icon={faShoppingCart} />Add</button>
                </div>
            </div>
            <div className="grid-2-2">
                <img src={image} alt=""/>
            </div>
        </div>
    );
};

export default SingleItem;