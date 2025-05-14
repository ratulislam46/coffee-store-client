import React from 'react';
import { useLoaderData } from 'react-router';
import Coffee from './Coffee';

const Home = () => {

    const coffeees = useLoaderData();
    console.log(coffeees);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    coffeees.map(coffee=> <Coffee key={coffee._id} coffee={coffee}></Coffee>)
                }
            </div>
        </div>
    );
};

export default Home;