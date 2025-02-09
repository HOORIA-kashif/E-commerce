import React from "react";
import image14 from "../assets/womens/s5.jpg"
import image15 from "../assets/womens/s8.jpg"
import image16 from "../assets/womens/shoes2.webp"
import image17 from "../assets/womens/hoodies.png"

function CircleImagesSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 bg-gray-100 rounded-lg">
     
      <div className="flex space-x-6 mb-6 md:mb-0">
        <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
          <img
            src={image15}
            alt="Quality Product"
            className="rounded-full"
          />
        </div>
       
        <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
          <img
            src={image14}
            alt="Best Production"
            className="rounded-full"
          />
        </div>
        <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center">
          <img
            src={image16}
            alt="Best Production"
            className="rounded-full"
          />
        </div>
        <div className="w-20 h-20 rounded-full  bg-white shadow-md flex items-center justify-center">
          <img
            src={image17}
            alt="Best Production"
            className="rounded-full"
          />
        </div>
      </div>

     
      <div className="text-center md:text-left">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          Quality Product
        </h3>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur ullam.
        </p>

        <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2">
          Best Production
        </h3>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur ullam.
        </p>
      </div>
    </div>
  );
}

export default CircleImagesSection;
