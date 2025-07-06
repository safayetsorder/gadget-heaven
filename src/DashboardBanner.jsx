import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const DashboardBanner = () => {
    const { pathname } = useLocation();
    const selectedPage = (pathname.split("/")[2]);
    return (
        <div className='bg-blue-700 py-20'>
            <h2 className='text-center text-4xl font-bold text-white'>Dashboard</h2>
            <p className='py-6 px-8 text-white text-center'>Explore the latest gadgets that will take your experience to the next level. From smart <br /> devices to the coolest accessories, we have it all!</p>
            <div className='flex justify-center gap-3'>
                <NavLink className={`px-8  py-2 border border-2 border-white rounded-3xl ${selectedPage === "cart" ? "bg-white text-purple-500" : "text-white"}`} to="/dashboard/cart">Cart</NavLink>
                <NavLink className={`px-8  py-2 border border-2 border-white rounded-3xl ${selectedPage === "wishlist" ? "bg-white text-purple-500" : "text-white"}`} to="/dashboard/wishlist">Wishlist</NavLink>
            </div>

        </div>
    );
};

export default DashboardBanner;