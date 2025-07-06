import React, { createContext, useState } from 'react';

export const Context = createContext();

const MainContext = ({ children }) => {
    const [cart, setCart] = useState([]);

    return (
        <Context.Provider value={{ cart, setCart }}>
            {children}
        </Context.Provider>
    );
};

export default MainContext;