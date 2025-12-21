import React from 'react';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Gourmet Burgers",
    description: "Delicious, juicy, handcrafted burgers made from fresh ingredients every day.",
    icon: "🍔",
  },
  {
    title: "Fries & Sides",
    description: "Crispy golden fries, onion rings, and other tasty sides to complement your meal.",
    icon: "🍟",
  },
  {
    title: "Beverages",
    description: "Refreshing drinks, shakes, and sodas to complete your perfect burger experience.",
    icon: "🥤",
  },
  {
    title: "Special Offers",
    description: "Exclusive combos and deals to make your meal even more satisfying.",
    icon: "🎉",
  },
];

const Service1 = () => {
  return (
    <section className="mt-10 px-4 container mx-auto max-w-7xl mb-10">
      {/* Section Header */}
      <h1 className="text-5xl font-extrabold text-amber-500 text-center mb-12 drop-shadow-md">
        Our Services
      </h1>

      <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto text-lg">
        At Burger Bliss, we offer a range of services and treats to satisfy every burger lover. From gourmet burgers to crispy sides, refreshing drinks, and special offers, we make every meal unforgettable!
      </p>

      {/* Flex container */}
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full md:w-[45%] lg:w-[22%] bg-yellow-50 rounded-2xl p-6 flex flex-col items-center text-center
                       shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <div className="text-6xl mb-4 animate-bounce">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service1;
