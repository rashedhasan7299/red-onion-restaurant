import React from 'react';
import './Footer.css';
import logo from '../../resources/logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className="footer-logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="content">
                    <ul>
                        <li>About Online Food</li>
                        <li>Read Our Blog</li>
                        <li>Sign Up to Deliver</li>
                        <li>Add Your Restaurant</li>
                    </ul>
                </div>
                <div className="content">
                    <ul>
                        <li>Get Help</li>
                        <li>Read FAQs</li>
                        <li>View All Cities</li>
                        <li>Restaurant Near Me</li>
                    </ul>
                </div>
            </div>

            <div className="texts">
                    <div>
                        <p><small>copyright &copy; 2020, all rights reserved</small></p>
                    </div>
                    <div className="other-options">
                        <h4>Privacy Policy</h4>
                        <h4>Terms of Use</h4>
                        <h4>Privacy Policy</h4>
                        <h4>Pricing</h4>
                    </div>
                </div>
        </div>
    );
};

export default Footer;