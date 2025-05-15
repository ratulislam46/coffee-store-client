import React from 'react';
import { Link } from 'react-router'


const Header = () => {
    return (
        <div>
            <nav className='flex justify-around py-6 bg-[#49202195]'>
                <Link to='/'>Home</Link>
                <Link to='/addCoffee'>ADD Coffee</Link>
            </nav>
           
        </div>
    );
};

export default Header;