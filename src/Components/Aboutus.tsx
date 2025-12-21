import React from 'react'

const Aboutus = () => {
  return (
    <section className="mt-10 px-4 container mx-auto max-w-7xl">
      
      {/* Section Header */}
      <h1 className="text-5xl font-extrabold text-amber-500 text-center mb-12 drop-shadow-md">
        About Us
      </h1>

      <div className="flex flex-wrap gap-6 mb-10">
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

        <div className="w-full sm:w-[48%] lg:w-[23%] hover:scale-105 transition-transform duration-300 bg-yellow-300 p-6 rounded-2xl shadow-md hover:shadow-xl">
          <h2 className="text-2xl font-bold mb-3">Our Values</h2>
          <p className="text-gray-800">
            Integrity, transparency, and excellence guide everything we do. We strive to create lasting relationships with our clients while making a positive impact on the community.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Aboutus;
