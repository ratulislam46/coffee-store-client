import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Banner from '../Components/Banner'

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;