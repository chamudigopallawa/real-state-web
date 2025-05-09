import React from 'react';
import { assets, testimonialsData } from '../assets/assets';

const Testamonials = () => {
  return (
    <div className="container mx-auto py-2 pt-20 px-6 md:px-20 lg:px-25 w-full overflow-hidden" id='Testamonials'>
      <div className="text-center flex flex-col items-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2">Customer <span className="underline underline-offset-4 decoration font-light">Testimonials</span></h1>
        <p className="text-gray-500 max-w-80 mb-8">Crafting spaces, creating legacies - Explore our portfolio</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div key={index}
            className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center">
            <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4"/>
            <h2 className="text-xl text-gray-700 font-medium">{testimonial.name}</h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
            <div className="flex justify-center gap-1">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <img key={i} src={assets.star_icon} alt="Star" className="w-4 h-4" />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testamonials;
