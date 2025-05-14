import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-around py-6 my-4 bg-gray-200 text-blue-500'>
                <Link to='/'>Home</Link>
                <Link to='/addCoffee'>ADD Coffee</Link>
            </nav>
        </div>
    );
};

export default Header;