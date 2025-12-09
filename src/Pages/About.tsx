import React from 'react';
import Burger from '../assets/Burger.jpg';

const About = () => {
  return (
    <div className='max-w-7xl mt-24 px-5  container mx-auto'>
    <div className=" bg-black mt-24 px-5 sm:px-20">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-orange-300 mb-12 text-center">
        About Us
      </h1>

      {/* Flex Section */}
 
      <div className="flex flex-col  p-10 sm:flex-row items-stretch gap-10">
        {/* Image */}
        <div className="flex-1">
          <img
            className="w-full h-full  object-cover rounded-lg shadow-lg"
            src={Burger}
            alt="Delicious Burger"
          />
        </div>

        {/* Text */}
        <div className="flex-1 bg-amber-300 p-7 rounded-lg flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">World’s Best Burger</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Welcome to Burger World! We serve the juiciest and most delicious burgers made from fresh ingredients. Every burger is handcrafted with love to give you the ultimate flavor experience.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to bring happiness and flavor to every bite. From classic cheeseburgers to gourmet creations, we make every burger memorable for our customers.
          </p>
        </div>
      </div>

     </div>
      <div className="flex flex-col bg-black mt-10  p-10 sm:flex-row items-stretch gap-10">
        {/* Image */}
        <div className="flex-1">
          <img
            className="w-full h-full  object-cover rounded-lg shadow-lg"
            src={Burger}
            alt="Delicious Burger"
          />
        </div>

        {/* Text */}
        <div className="flex-1 bg-amber-300 p-7 rounded-lg flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">World’s Best Burger</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Welcome to Burger World! We serve the juiciest and most delicious burgers made from fresh ingredients. Every burger is handcrafted with love to give you the ultimate flavor experience.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is to bring happiness and flavor to every bite. From classic cheeseburgers to gourmet creations, we make every burger memorable for our customers.
          </p>
        </div>
      </div>
     </div>
     
 
  );
};

export default About;
