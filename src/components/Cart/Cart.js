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

    let subTotal = 0;
    const calculateSubTotal = () => {
        cartFoods.map(food => subTotal = subTotal + (food.quantity * parseFloat(food.price)))
        return subTotal.toFixed(2);
    }
    let tax = 0;
    const calculateTax = () => {
        tax = subTotal * 0.15;
        return tax.toFixed(2);
    }
    let fee = 0;
    const deliveryFee = () => {
        if(subTotal < 10 && subTotal > 0) {fee = 0}
        else if(subTotal < 50 && subTotal > 10) {fee = 5}
        else if(subTotal < 100 && subTotal > 50) {fee = 10}
        else if(subTotal < 500 && subTotal > 100) {fee = 15}
        else fee = 0
        return fee;
    }



    return (
        <div className='container main-cart'>

            <div className="delivery-information">
                <h3>Edit Delivery Address</h3>
                <form>
                        <input type="text" name="method" placeholder="Deliver to:"/>
                        <input type="text" name="address" placeholder="Street Name:"/>
                        <input type="text" name="additional info" placeholder="House No./Flat/floor no."/>
                        <input type="text" name="clientName" placeholder="Business Name"/>
                        <input type="text" name="instruction" placeholder="Add Delivery Instruction"/>
                        <input type="submit" value="Save and Continue" />
                </form>

            </div>

            <div>

            </div>

            <div className="review-cart">

                <p>From <b>Gulshan Plaza</b></p>
                <p>Arriving in 30-40 minutes</p>
                <p>107 road no 8</p>
                {
                    cartFoods.map(currentFood=> <CartItems key = {currentFood.id} currentFood= {currentFood} ></CartItems>)
                }

                <h2>Order Summary: </h2>

                <div className="summary">
                    <div className="section-name">
                        <h4>Subtotal: </h4>
                        <h4>tax: </h4>
                        <h4>Delivery Fee: </h4>
                        <h4>Total: </h4>
                    </div>
                    <div className="amount">
                        <h4>{calculateSubTotal()}</h4>
                        <h4>{calculateTax()}</h4>
                        <h4>{deliveryFee()}</h4>
                        <h4>{(subTotal+tax+fee).toFixed(2)}</h4>
                    </div>
                </div>
                {
                    cartFoods.length > 0 ? <button className='proceed place-order'>Place Order</button>
                    : <button className='proceed place-order' disabled>Place Order</button>
                }
            </div>
        </div>
    );
};

export default Cart;