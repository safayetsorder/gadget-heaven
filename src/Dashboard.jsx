import React from 'react';
import DashboardBanner from './DashboardBanner';
import DashboardMain from './DashboardMain';
import Wishlist from './Wishlist';
import { useLocation } from 'react-router-dom';


const Dashboard = ({ cart, removeFromCart, setCart }) => {
  const { pathname } = useLocation();

  return (
    <div>
      <DashboardBanner></DashboardBanner>

      {
        pathname === "/dashboard/cart"
          ? <DashboardMain setCart={setCart} removeFromCart={removeFromCart} cart={cart}></DashboardMain>
          : <Wishlist></Wishlist>
      }
    </div>
  );
};

export default Dashboard;