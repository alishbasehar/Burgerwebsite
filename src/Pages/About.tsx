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
 
      <div className="flex flex-col lg:flex-row sm:gap-6 gap-10 p-5">
  {/* Image */}
  <div className="lg:flex-1 w-full flex justify-center">
    <img
      className=" lg:max-w-lg max-w[250] object-cover rounded-lg shadow-lg"
      src={Burger}
      alt="Delicious Burger"
    />
  </div>

  {/* Text */}
  <div className="lg:flex-1  bg-amber-300 p-7 rounded-lg flex flex-col justify-center">
    <h2 className="text-xl sm:text-3xl font-bold sm:mb-2 mb-6">
      World’s Best Burger
    </h2>
    <p className="text-gray-700 text-sm sm:text-lg leading-relaxed mb-4">
      Welcome to Burger World! We serve the juiciest and most delicious burgers made from fresh ingredients. Every burger is handcrafted with love to give you the ultimate flavor experience.
    </p>
    <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
      Our mission is to bring happiness and flavor to every bite. From classic cheeseburgers to gourmet creations, we make every burger memorable for our customers.
    </p>
  </div>
</div>


     </div>
<div className="flex flex-wrap  gap-6 mt-5">
  <div className="w-full sm:w-[48%] lg:w-[23%] hover:scale-105 transition-transform duration-300 bg-yellow-300 p-6 rounded-2xl shadow-md hover:shadow-xl">
    <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
    <p className="text-gray-800">
      We aim to empower businesses and individuals by delivering innovative solutions that make a real difference. Our focus is on quality, creativity, and customer satisfaction.
    </p>
  </div>

  <div className="w-full sm:w-[48%] lg:w-[23%] hover:scale-105 transition-transform duration-300 bg-yellow-300 p-6 rounded-2xl shadow-md hover:shadow-xl">
    <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
    <p className="text-gray-800">
      To become a trusted partner for our clients by consistently exceeding expectations and embracing new technologies to drive growth and success.
    </p>
  </div>

  <div className="w-full sm:w-[48%] lg:w-[23%] hover:scale-105 transition-transform duration-300 bg-yellow-300 p-6 rounded-2xl shadow-md hover:shadow-xl">
    <h2 className="text-2xl font-bold mb-3">Our Team</h2>
    <p className="text-gray-800">
      Our diverse team of experts combines experience, creativity, and dedication to deliver solutions that truly matter. Collaboration and innovation are at our core.
    </p>
  </div>

  <div className="w-full sm:w-[48%]  lg:w-[23%] hover:scale-105 transition-transform duration-300 bg-yellow-300 p-6 rounded-2xl shadow-md hover:shadow-xl">
    <h2 className="text-2xl font-bold mb-3">Our Values</h2>
    <p className="text-gray-800">
      Integrity, transparency, and excellence guide everything we do. We strive to create lasting relationships with our clients while making a positive impact on the community.
    </p>
  </div>
</div>
<div className="flex flex-col sm:flex-row items-stretch justify-evenly gap-6 mt-6 mb-6">

  {/* Text Section */}
  <div className="flex flex-1 flex-col justify-center bg-black text-amber-50 rounded-2xl p-8 md:p-12 shadow-lg hover:scale-105 transition-transform duration-300 w-full">
    <h1 className="text-3xl md:text-4xl font-bold mb-4">
      Delicious Burgers, Just For You!
    </h1>
    <p className="text-lg md:text-xl leading-relaxed">
      Indulge in our mouth-watering burgers made from fresh ingredients...
    </p>
  </div>

  {/* Image Section */}
  <div className="flex flex-1 justify-center items-center w-full">
    <img
      src={Burger}
      alt="Tasty Burger"
      className="rounded-2xl w-full h-full object-cover shadow-xl hover:scale-105 transition-transform duration-300"
    />
  </div>

</div>




     </div>
     
 
  );
};

export default About;
