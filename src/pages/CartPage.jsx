import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  removeFromCart, clearCart } from "../features/cart/cartSlice"; // Import Redux actions

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto px-6 py-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between border-b py-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg" />
                <div>
                  <h3 className="text-lg">{item.name}</h3>
                  <p>{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => dispatch(clearCart())}
            className="mt-4 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition duration-300"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
