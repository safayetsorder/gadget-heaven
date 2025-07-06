import React from 'react';
import ContactBanner from './ContactBanner';
import { Outlet } from 'react-router-dom';

const ContactLayout = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <Outlet></Outlet>
        </div>
    );
};

export default ContactLayout;