import React from 'react';
import choose from '../../fakeData/choose';
import './ChooseUs.css'
import SingleOption from '../SingleOption/SingleOption';


const ChooseUs = () => {

    return (
        <div className='container'>
            <h1 className="main-heading">Why Choose Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, praesentium quam excepturi maiores iste ipsa! Praesentium, iste aut. Earum ab amet similique unde mollitia!</p>
            <div className="options">
                {
                    choose.map(option=> <SingleOption key = {option.id} singleOption = {option}></SingleOption>)
                }
            </div>

        </div>
    );
};

export default ChooseUs;