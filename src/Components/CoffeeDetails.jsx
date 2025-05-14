import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {

    const coffeeData = useLoaderData();
    console.log(coffeeData);

    const {name, price, _id , photo} = coffeeData;

    return (
        <div>
            details 
            <div>
                <h1>{name}</h1>
                <h1>Price: {price}</h1>
                <h1>ID: {_id}</h1>
                <img src={photo} alt="" />
            </div>
        </div>
    );
};

export default CoffeeDetails;