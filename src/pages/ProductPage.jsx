import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice"; 
import { Heart } from "lucide-react";
import image1 from "../assets/womens/1.webp";
import image2 from "../assets/womens/2.jpg";
import image3 from "../assets/womens/3.webp";
import image4 from "../assets/womens/4.avif";
import image5 from "../assets/womens/5.webp";
import image6 from "../assets/womens/6.jpg";
import image8 from "../assets/womens/8.jpg";
import image9 from "../assets/womens/9.avif";




const productsData = [
  {
    id: 1,
    name: "Balenciaga Floral-Print Silk Shirt",
    price: "£1,690.00",
    description: "A beautiful floral-print silk shirt for women.",
    details: "Made with 100% silk, this shirt is lightweight and breathable, perfect for formal occasions or casual outings.",
    image: image1,
    category: "shirts",
    ratings: 4.5,
    oldPrice: "£1,890.00",
    images: [image1, image2, image3, image4],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green"],
  },
  {
    id: 2,
    name: "Khaite The Argo Lip-Print Shirt",
    price: "£1,290.00",
    description: "An elegant classic women's shirt for every occasion.",
    details: "Made with premium cotton, this shirt offers a perfect blend of comfort and style.",
    image: image5,
    category: "shirts",
    ratings: 4.7,
    oldPrice: "£1,590.00",
    images: [image5, image6, image8, image9],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Beige"],
  },
];

const ProductDetailsPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = productsData.find((item) => item.id === parseInt(id)); // Find the product by ID

  if (!product) {
    return <div className="p-6 text-red-500">Product not found!</div>;
  }

  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.image);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, size: selectedSize, color: selectedColor, quantity }));
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <img
            src={mainImage}
            alt={product.name}
            className="w-full h-auto rounded-lg mb-4"
          />
          <div className="flex gap-2">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer border ${
                  mainImage === img ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <button className="text-gray-500 hover:text-red-500">
              <Heart size={24} />
            </button>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-lg font-semibold mr-2">{product.ratings}★</span>
            <span className="text-gray-600">(28 reviews)</span>
          </div>
          <p className="text-gray-500 mb-4">{product.description}</p>
          <p className="text-sm text-gray-500 mb-4">{product.details}</p>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-gray-800 mr-4">{product.price}</span>
            <span className="text-gray-400 line-through">{product.oldPrice}</span>
          </div>

          {/* Size Selector */}
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Select Size:</h3>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg text-sm font-medium ${
                    selectedSize === size ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Select Color:</h3>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded-lg text-sm font-medium ${
                    selectedColor === color ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Quantity:</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-2 border rounded-lg text-gray-800"
              >
                -
              </button>
              <span className="text-lg font-medium text-gray-800">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-2 border rounded-lg text-gray-800"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white text-lg font-medium py-3 rounded-lg hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
       {/* Reviews and Comments Section */}
       <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Reviews and Comments</h2>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800">John Doe</h4>
            <p className="text-sm text-gray-600">"Amazing quality! Worth every penny."</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800">Jane Smith</h4>
            <p className="text-sm text-gray-600">"The silk feels so smooth, and the fit is perfect!"</p>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default ProductDetailsPage;
