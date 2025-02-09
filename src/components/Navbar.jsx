import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import {
  HeartIcon,
  ShoppingBagIcon,
  UserIcon,
  SearchIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.auth.user); 
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  return (
    <>
   
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          
         
          <div className="text-2xl font-bold">
            <Link to="/" className="text-gray-800 hover:text-gray-600">
              Heavenly
            </Link>
          </div>

        
          <nav className="hidden md:flex space-x-6">
            {["Women", "Men", "Kids", "Sale"].map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-gray-900 ${
                    isActive ? "border-b-2 border-gray-400 pb-1" : ""
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>

      
          <div className="flex items-center space-x-6">
            
            <button
              onClick={() => setSearchOpen(true)}
              className="text-gray-700 hover:text-gray-900"
            >
              <SearchIcon className="h-6 w-6" />
            </button>

            <Link to="/favorites" className="text-gray-700 hover:text-gray-900">
              <HeartIcon className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-gray-900 relative">
              <ShoppingBagIcon className="h-6 w-6" />
              {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {totalQuantity}
            </span>
          )}
          
            </Link>
          
           {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-semibold">{user.name}</span>
                <button 
                  onClick={() => dispatch(logout())}
                  className="bg-red-500 text-white px-3 py-1 rounded">
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-gray-900">
                <UserIcon className="h-6 w-6" />
              </Link>
            )}
          </div>
          
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

       
        {isMenuOpen && (
          <div className="md:hidden bg-gray-100 px-6 py-4">
            <nav className="space-y-4">
              {["Women", "Men", "Kids", "Sale"].map((item) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `block text-gray-700 hover:text-gray-900 ${
                      isActive
                        ? "font-semibold border-b-2 border-gray-400 pb-1"
                        : ""
                    }`
                  }
                >
                  {item}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

    
      {isSearchOpen && (
        <div className="fixed inset-0  backdrop-blur-sm flex flex-col items-center justify-center z-50">
          <button
            onClick={() => setSearchOpen(false)}
            className="absolute top-5 right-5 text-gray-700 hover:text-gray-900"
          >
            <XIcon className="h-8 w-8" />
          </button>

          <input
            type="text"
            placeholder="Search for products..."
            className="w-3/4 md:w-1/2 px-4 py-3 border-b-2 border-gray-400 focus:outline-none text-xl bg-transparent placeholder-gray-600"
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
