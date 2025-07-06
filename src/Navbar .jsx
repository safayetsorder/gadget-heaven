import { Heart, ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "./context/MainContext";

const Navbar = () => {
  const { cart } = useContext(Context);
  return (
    <nav className="bg-blue-600 p-8 flex justify-between items-center">
      <NavLink to="/" className="text-white font-bold text-xl">GadgetHeaven</NavLink>
      <div className="flex  gap-6	">
        <NavLink to="/" className={({ isActive }) =>
          isActive ? "text-yellow-300 font-bold underline" : "text-white"}>
          Home
        </NavLink>
        <NavLink to="/dashboard/cart" className={({ isActive }) =>
          isActive ? "text-yellow-300 font-bold underline" : "text-white"}>
          Dashboard
        </NavLink>
        <NavLink to="/statistic" className={({ isActive }) =>
          isActive ? "text-yellow-300 font-bold underline" : "text-white"}>
          Statistic
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) =>
          isActive ? "text-yellow-300 font-bold underline" : "text-white"}>
          Contact
        </NavLink>
      </div>
      <div className="flex gap-6">
        <NavLink
          className="rounded-full relative bg-white p-2"
          to="/dashboard/cart"
        >
          <ShoppingCart className="text-pink-500 " />
          <div className="absolute w-4 h-5 right-0 -top-2 bg-red-500 text-white rounded-full flex justify-center items-center">
            {cart.length}
          </div>
        </NavLink>

        <NavLink
          className="rounded-full bg-white p-2"
          to="/dashboard/wishlist"
        >
          <Heart className="text-pink-500 " />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
