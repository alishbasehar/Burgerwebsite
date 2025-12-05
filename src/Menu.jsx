import React from "react";
import { ShoppingCart } from "lucide-react";
import chickenroll from './assets/chicken-roll.png'
import pizza from './assets/pizza.png'
import speg from './assets/spaghetti.png'

const menuItems = [
  {
    name: "Classic Burger",
    description: "Juicy beef patty, lettuce, tomato, and our special sauce.",
    price: "$8.99",
    image: chickenroll,
  },
  {
    name: "Cheese Lover",
    description: "Loaded with cheddar, mozzarella, and a beef patty.",
    price: "$9.99",
    image: pizza,
  },
  {
    name: "Veggie Delight",
    description: "Grilled veggie patty with fresh greens and avocado.",
    price: "$7.99",
    image: speg,
  },
  {
    name: "Bacon Supreme",
    description: "Crispy bacon, cheddar, and BBQ sauce on a beef patty.",
    price: "$10.99",
    image: chickenroll,
  },
];

const MenuSection = () => {
  return (
    <section  id="menu">
      <div className="contain bg-amber-50 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-2">Our Menu</h2>
        <p className="text-lg text-gray-700 mb-12">
          Juicy, fresh, and made with love
        </p>

        {/* FLEX VERSION */}
        <div className="flex flex-col md:flex-row  md:justify-between pl-5 pr-5 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 w-full w-1/2 sm:w-1/2 lg:w-1/4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{item.price}</span>
                  
                  <button  className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
