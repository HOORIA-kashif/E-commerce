import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import skirt from "../assets/womens/skirts.webp";
import top from "../assets/womens/tops.jpg";
import shirt from "../assets/womens/shirt.webp";
import sports from "../assets/womens/sports.jpg";
import shoes from "../assets/womens/shoes.jpg";
import bags from "../assets/womens/bags.jpg";
import jackets from "../assets/womens/jackets.jpg";
import hoodies from "../assets/womens/hoodies.png";
import heels from "../assets/womens/heels.jpg";
import kids from "../assets/womens/kids.jpg";
import frock from "../assets/womens/frock.jpeg";
const products = [
  { id: 1, name: "Skirt", price: "$40", image: skirt },
  { id: 2, name: "Tops", price: "$50", image: top },
  { id: 3, name: "Lehenga", price: "$100", image: shirt },
  { id: 4, name: "Sports Dress", price: "$70", image: sports },
  { id: 1, name: "Shoes", price: "$40", image: shoes },
  { id: 2, name: "Tops", price: "$50", image: bags },
  { id: 3, name: "Lehenga", price: "$100", image: jackets },
  { id: 4, name: "Sports Dress", price: "$70", image: heels },
  { id: 1, name: "Skirt", price: "$40", image: hoodies },
  { id: 2, name: "Tops", price: "$50", image: kids },
  { id: 3, name: "Lehenga", price: "$100", image: shirt },
  { id: 4, name: "Sports Dress", price: "$70", image: frock },
];

const ExclusiveProducts = () => {
  const [favorites, setFavorites] = useState([]);

  // Toggle favorite status
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="px-8 md:px-20 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Exclusive Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden group"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            {/* Product Info */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.price}</p>
            </div>

            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm text-white mb-4 text-center">
                High-quality fabric with a stylish design.
              </p>
              <button className="bg-black hover:bg-gray-600 text-white py-2 px-4 rounded-lg mb-2">
                Add to Cart
              </button>
              <FaHeart
                className={`text-2xl cursor-pointer ${
                  favorites.includes(product.id)
                    ? "text-red-500"
                    : "text-white hover:text-red-500"
                }`}
                onClick={() => toggleFavorite(product.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveProducts;
