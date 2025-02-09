import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice"; 
import { Link } from "react-router-dom";
import image1 from "../assets/womens/1.webp";
import image2 from "../assets/womens/6.jpg";
import image9 from "../assets/womens/9.avif";
import image10 from "../assets/womens/10.webp";
import image11 from "../assets/womens/11.jpg";
import image12 from "../assets/womens/12.webp";



const WomenTopsPage = () => {
  const dispatch = useDispatch();
  const [showFilters, setShowFilters] = useState(false); 
  const [filters, setFilters] = useState({
    category: "",
    size: "",
    price: "",
  });

  
const handleAddToCart = (product) => {
  dispatch(addToCart(product)); 
  
  toast.success(`${product.name} added to cart!`, { 
    position: "top-right",
    autoClose: 3000, 
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};

  const products = [
    {
      id: 1,
      name: "Balenciaga Floral-Print Silk Shirt",
      price: "£1,690.00",
      image: image1,
      category: "shirts",
    },
    {
      id: 2,
      name: "Khaite The Argo Lip-Print Shirt",
      price: "£640.00",
      oldPrice: "£890.00",
      image: image2,
      category: "shirts",
    },
    {
      id: 3,
      name: "Jacquemus La Chemise Galliga Blouse",
      price: "£592.00",
      image: image9,
      category: "tops",
    },
    {
      id: 4,
      name: "Alexander McQueen Zip-Up Denim Corset",
      price: "£1,500.00",
      image: image10,
      category: "dresses",
    },
    {
      id: 5,
      name: "Alexander McQueen Zip-Up Denim Corset",
      price: "£1,500.00",
      image: image11,
      category: "dresses",
    },
    {
      id: 6,
      name: "Alexander McQueen Zip-Up Denim Corset",
      price: "£1,500.00",
      image: image12,
      category: "dresses",
    },
  ];

  const filteredProducts = filters.category
    ? products.filter((product) => product.category === filters.category)
    : products;

  const getHeading = () => {
    if (!filters.category) return "WOMEN’S TOPS";
    return `WOMEN’S ${filters.category.toUpperCase()}`;
  };

  return (
    <div className="bg-gray-100 min-h-screen">
        <ToastContainer /> 
      <div className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-800">{getHeading()}</h1>
          <p className="text-sm text-gray-500 mt-2">{filteredProducts.length} items</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <button
            className="md:hidden px-4 py-2 bg-gray-200 text-gray-700 rounded-full mb-4"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? "Close Filters" : "Filters"}
          </button>
          <div
            className={`${
              showFilters ? "block" : "hidden"
            } md:block bg-white p-4 shadow-md rounded-lg`}
          >
            <h3 className="text-xl font-bold mb-4">Filters</h3>
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">Category</label>
              <select
                className="w-full px-4 py-2 border rounded-lg"
                value={filters.category}
                onChange={(e) =>
                  setFilters({ ...filters, category: e.target.value })
                }
              >
                <option value="">All Categories</option>
                <option value="tops">Tops</option>
                <option value="shirts">Shirts</option>
                <option value="dresses">Dresses</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">Size</label>
              <select
                className="w-full px-4 py-2 border rounded-lg"
                value={filters.size}
                onChange={(e) => setFilters({ ...filters, size: e.target.value })}
              >
                <option value="">All Sizes</option>
                <option value="s">Small</option>
                <option value="m">Medium</option>
                <option value="l">Large</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-2">Price Range</label>
              <input
                type="range"
                min="100"
                max="2000"
                className="w-full"
                value={filters.price}
                onChange={(e) =>
                  setFilters({ ...filters, price: e.target.value })
                }
              />
              <span className="block text-gray-500 mt-2">
                Up to £{filters.price || "2000"}
              </span>
            </div>
          </div>
        </div>
         

        <div className="md:w-3/4">
          <div className="grid grid-cols-2 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 object-cover rounded-lg mb-4 transform transition-transform duration-500 hover:scale-110"
                  />
                </Link>
                <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
                <div className="flex items-center mt-2">
                  {product.oldPrice && (
                    <span className="line-through text-gray-400 mr-2">
                      {product.oldPrice}
                    </span>
                  )}
                  <span className="text-red-500 font-bold">{product.price}</span>
                </div>
             
                <button
                onClick={() => handleAddToCart(product)}
                  className="mt-3 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenTopsPage;
