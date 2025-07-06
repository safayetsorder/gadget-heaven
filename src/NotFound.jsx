import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from './Home';

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        404 : Page Not Found
        </h1>
       
      <p className="text-lg text-gray-700 mb-6">
        The page you are looking for is not found
      </p>
      
      <NavLink to="/"
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
        Go to Home
      </NavLink>
    </div>
    );
};

export default NotFound;