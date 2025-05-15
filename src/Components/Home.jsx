import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Coffee from './Coffee';


const Home = () => {

    const initialCoffeees = useLoaderData();
    console.log(initialCoffeees);
    const [coffees, setCoffees] = useState(initialCoffeees)

    return (
        <div>
            <div>
                <h1 className='text-2xl md:text-5xl lg:text-6xl text-center my-10'>Our Popular Products</h1>
                <h3 className='text-2xl md:text-5xl lg:text-6xl text-center mb-12'>Add Coffee</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    coffees.map(coffee=> <Coffee key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></Coffee>)
                }
            </div>
        </div>
    );
};

export default Home;