import React from 'react';
import './SingleOption.css';

const SingleOption = (props) => {
    const { heading, longDescription, image, icon } = props.singleOption;
    return (
        <div>
            <img src={image} alt=""/>
            <div style={{display: 'flex'}}>
                <div className='font-icon'>
                <i className={icon}></i>
                </div>
                <div>
                    <h2>{heading}</h2>
                    <p style={{width: "500px"}}>{longDescription}</p>
                    <a className="see-link" style={{}} href="/">See more <i className="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
};

export default SingleOption;