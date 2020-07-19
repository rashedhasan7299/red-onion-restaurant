import React from 'react';
import map from "../../resources/Image/map.png";
import deliveryIcon from '../../resources/Image/Group 1151.png';
import './OrderComplete.css';
import { useAuth } from '../Login/useAuth';

const OrderComplete = () => {

    const auth = useAuth();
    return (
        <div className='container main-cart'>

            <div className="delivery-information">
                <img src={map} alt=""/>

            </div>

            <div>

            </div>

            <div className="review-cart delivery-info">
                <img src={deliveryIcon} alt=""/>
                <div className='address'>
                    <h2>Your Location:</h2>
                    <p>107 Road no 8</p>
                    <h2>Shop Address:</h2>
                    <p>Gulshan Plaza</p>
                </div>

                <div className='delivery-time'>
                    <h1>09.30</h1>
                    <p>Estimated delivery time</p>
                </div>

                <div className='address'>
                    <h2>Receiver</h2>
                    {
                        auth.user && <h4>{auth.user.name}</h4>
                    }
                </div>
                <button className='proceed'>Contact Rider</button>
                
            </div>
        </div>
    );
};

export default OrderComplete;