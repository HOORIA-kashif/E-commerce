import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/womens/banner2.png"

import image2 from "../assets/womens/men2.webp"
import image3 from "../assets/womens/banner1.jpg"
const banners = [
  {
    id: 1,
    image: image1, 
    title: (
      <>
        Use Fashion Into <br /> Your All Collection
      </>
    ),
    description: "Shopping is a bit of a relaxing hobby for me, which is sometimes troubling.",
    buttonText: "Learn More",
  },
  {
    id: 2,
    image: image2, 
    title:(
      <>
      Style That Speaks <br/> Your Personality
      </>
    ),
    
    
    description: "Upgrade your wardrobe with our exclusive collection.",
    buttonText: "Shop Now",
  },
  {
    id: 3,
    image: image3, 
    title:(
      <>
      Step Into Comfort  <br />and Elegance
      </>
    ),
    
    
    description: "Experience the ultimate blend of style and comfort.",
    buttonText: "Explore More",
  },
];

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

 
  const handleDotClick = (index) => {
    setCurrentBanner(index);
  };

  return (
    <div className="relative h-[500px] overflow-hidden">
      {/* Banner Content  */}
      <AnimatePresence>
        {banners.map((banner, index) =>
          index === currentBanner ? (
            <motion.div
              key={banner.id}
              className="absolute inset-0 flex items-center justify-center text-white"
              style={{
                backgroundImage: `url(${banner.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

              {/* Text Content */}
              <div className="relative z-10 text-center px-4 md:px-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{banner.title}</h1>
                <p className="text-lg mb-6">{banner.description}</p>
                <button className="bg-black text-white py-2 px-6 rounded-lg shadow-lg hover:bg-gray-700">
                  {banner.buttonText}
                </button>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBanner ? "bg-black w-5" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
