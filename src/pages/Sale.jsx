import React from "react";
import skirtSale from "../assets/womens/6.jpg";
import topSale from "../assets/womens/s9.jpg";
import shirtSale from "../assets/womens/s10.avif";
import sportsSale from "../assets/womens/s13.jpg";

const saleProducts = [
  { id: 1, name: "Skirt", originalPrice: "$40", salePrice: "$30", image: skirtSale },
  { id: 2, name: "Tops", originalPrice: "$50", salePrice: "$35", image: topSale },
  { id: 3, name: "Lehenga", originalPrice: "$100", salePrice: "$70", image: shirtSale },
  { id: 4, name: "Sports Dress", originalPrice: "$70", salePrice: "$50", image: sportsSale },
];

const SalePage = () => {
  return (
    <div className="px-8 md:px-20 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🔥 On Sale Now!</h2>
      <p className="text-center text-gray-600 mb-8">
        Grab these amazing deals before they're gone!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {saleProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-lg p-4 rounded-lg relative group">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-500 line-through">{product.originalPrice}</p>
            <p className="text-red-500 font-bold">{product.salePrice}</p>
            <button className="absolute bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalePage;
