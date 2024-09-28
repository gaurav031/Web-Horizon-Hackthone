import React from 'react';

const Whythis = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Why Book Hotels With Hotel Booking?</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {/* Best Deals */}
        <img 
          src="https://images.ixigo.com/image/upload/f_auto/accommodations/why-book/01c4341766ac34c5cc53a06e7d7d5aa0-pbavt.png" 
          alt="Discount icon" 
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain transition-transform transform hover:scale-125"
        />
        
        {/* Customer Support */}
        <img 
          src="https://images.ixigo.com/image/upload/f_auto/accommodations/why-book/0f89b79b2067112eb3ebe655080d8b4c-jdtju.png" 
          alt="Customer support icon" 
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain transition-transform transform hover:scale-125"
        />
        
        {/* Largest Selection */}
        <img 
          src="https://images.ixigo.com/image/upload/f_auto/accommodations/why-book/1630b18820e7d4aecab6ea3a5f856746-ppbtn.png" 
          alt="Map with location pins icon" 
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain transition-transform transform hover:scale-125"
        />
      
        {/* Pay at Hotel */}
        <img 
          src="https://images.ixigo.com/image/upload/f_auto/accommodations/why-book/22eb78fb935bb5da698dd29c8ce75d4b-ekqbl.png" 
          alt="Hotel building icon" 
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain transition-transform transform hover:scale-125"
        />
        
        {/* Shared Wishlists */}
        {/* <img 
          src="https://images.ixigo.com/image/upload/f_auto/accommodations/why-book/59806b249e1162d5286de549e61df741-xkhoq.png" 
          alt="Shared wishlist icon" 
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain transition-transform transform hover:scale-125"
        /> */}
      </div>
    </div>
  );
};

export default Whythis;
