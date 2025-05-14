import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Coffee from './Coffee';

const Home = () => {

    const initialCoffeees = useLoaderData();
    console.log(initialCoffeees);
    const [coffees, setCoffees] = useState(initialCoffeees)

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    coffees.map(coffee=> <Coffee key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></Coffee>)
                }
            </div>
        </div>
    );
};

export default Home;