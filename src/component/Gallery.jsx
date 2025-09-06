import { useState } from "react";
import images from "../assests/Gallery";

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <h1 className="text-xl text-center my-10 md:my-20 md:text-5xl mb-10 font-bold text-zinc-700">
        Memorable Moments Showcase
      </h1>
      <div className="lg:max-w-5xl md:max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="mx-auto relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={image}
              loading="lazy"
              alt=""
              className={`w-72 h-72 object-cover transition-all duration-500 ${
                hoveredIndex === index ? "scale-125 rotate-3" : ""
              }`}
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              } rounded`}
            >
              <div
                className={`text-white text-center p-4 transition-all duration-500 ${
                  hoveredIndex === index
                    ? "scale-100 rotate-0"
                    : "scale-0 rotate-12"
                }`}
              ></div>

              {/* Decorative element - small pulsing dot */}
              {hoveredIndex === index && (
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white animate-pulse"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
