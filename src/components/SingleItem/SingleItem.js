import React from 'react';
import { useParams } from 'react-router-dom';

const SingleItem = () => {
    const {id}  = useParams();
    console.log(id);
    return (
        <div>
            <h1>This is details</h1>
        </div>
    );
};

export default SingleItem;