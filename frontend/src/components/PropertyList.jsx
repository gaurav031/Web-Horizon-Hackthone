import React from "react";

const PropertyList = () => {
  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];

  const types = ["Hotels", "Apartments", "Resorts", "Villas", "Chalets"];
  const counts = [233, 524, 412, 234, 129];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-6xl mx-auto p-4">
      {images.map((img, i) => (
        <div
          className="relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
          key={i}
        >
          <img
            src={img}
            alt={types[i]}
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition duration-300 ease-in-out hover:brightness-90"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-300 ease-in-out" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90">
            <h1 className="text-sm sm:text-lg font-bold capitalize text-gray-800">{types[i]}</h1>
            <h2 className="text-xs sm:text-sm font-light text-gray-600">{counts[i]} {types[i]}</h2>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black opacity-80 transform translate-y-full transition-transform duration-300 ease-in-out hover:translate-y-0">
            <h1 className="text-sm sm:text-lg font-bold text-white">{types[i]}</h1>
            <h2 className="text-xs sm:text-sm font-light text-gray-300">{counts[i]} {types[i]}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
