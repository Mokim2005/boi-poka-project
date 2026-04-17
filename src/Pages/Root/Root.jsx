import React from 'react';
import Navber from '../../Components/Header/Navber';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navber></Navber>
            <main className="flex-1">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;