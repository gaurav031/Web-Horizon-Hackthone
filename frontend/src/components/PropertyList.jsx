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
    <div className="flex flex-wrap justify-between gap-5 max-w-6xl mx-auto">
      {images.map((img, i) => (
        <div className="flex-1 rounded-lg overflow-hidden cursor-pointer" key={i}>
          <img src={img} alt={types[i]} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h1 className="text-lg font-semibold capitalize text-gray-700">{types[i]}</h1>
            <h2 className="text-sm font-light text-gray-500">{counts[i]} {types[i]}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
