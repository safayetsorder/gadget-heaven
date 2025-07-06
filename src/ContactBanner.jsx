import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
const ContactBanner = () => {
    const { pathname } = useLocation();
    const selectedPage = (pathname.split("/")[2]);
    return (
        <div className='bg-blue-700 py-20 mb-8'>
            <h2 className='text-center text-4xl font-bold text-white '>Contact</h2>
            <p className='py-6 px-8 text-white text-center'>We were made to help you find the right technology that fits your needs. It is you who is in control. Help us with your feedback. Your feedbacks are appreciated</p>
            <div className='flex justify-center gap-3'>
                <NavLink className={`px-8  py-2 border border-2 border-white rounded-3xl ${selectedPage === "contact" ? "bg-white text-purple-500" : "text-white"}`} to="/contact/contact">Contact</NavLink>
                <NavLink className={`px-8  py-2 border border-2 border-white rounded-3xl ${selectedPage === "feedback" ? "bg-white text-purple-500" : "text-white"}`} to="/contact/feedback">Feedback</NavLink>
            </div>

        </div>
    );
};

export default ContactBanner;