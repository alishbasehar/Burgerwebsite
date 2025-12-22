import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.jpg";
import { ShoppingCart } from "lucide-react";

interface Item {
  name: string;
  price: number;
  image?: string;
}

interface NavbarProps {
  cart: Item[];
  removeFromCart: (index: number) => void;
}

const navlink = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Menu", link: "/menu" },
  { id: 4, title: "Services", link: "/services" },
];

const Navbar: React.FC<NavbarProps> = ({ cart, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="shadow-xl w-full fixed bg-white top-0 z-50">
      <div className="container max-w-7xl mx-auto py-3 sm:py-0">
        <div className="flex items-center justify-between px-5">

          {/* Logo */}
          <div>
            <Link to="/">
              <img src={logo} className="h-26 w-auto object-contain" alt="Logo" />
            </Link>
          </div>

          {/* Desktop Links */}
          <ul className="hidden sm:flex pl-10 sm:gap-10 lg:gap-20">
            {navlink.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.link}
                  className="inline-block hover:text-orange-300 transition duration-300 py-4"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Cart + Order */}
          <div className="hidden sm:flex items-center gap-5 relative">
            <div
              className="relative cursor-pointer"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <ShoppingCart size={30} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>

              {/* Dropdown Cart */}
              {cartOpen && (
                <div className="absolute right-0 mt-2 w-96 max-h-96 overflow-y-auto bg-white shadow-lg border rounded-lg p-4 z-50">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="font-bold text-lg">Your Cart ({cart.length})</h2>
                    <button
                      onClick={() => setCartOpen(false)}
                      className="text-red-500 font-bold text-xl"
                    >
                      X
                    </button>
                  </div>

                  {cart.length === 0 ? (
                    <p className="text-gray-500 text-sm">Cart is empty</p>
                  ) : (
                    cart.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between mb-3 border-b pb-2"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div>
                            <p className="font-bold">{item.name}</p>
                            <p className="text-gray-500">{item.price}</p>
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFromCart(index);
                          }}
                          className="text-red-500 font-bold text-lg"
                        >
                          &times;
                        </button>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            <button className="bg-linear-to-r from-amber-600 to-yellow-300 text-white px-6 py-2 rounded-lg">
              Order
            </button>
          </div>

          {/* Mobile Cart + Hamburger */}
          <div className="flex sm:hidden items-center gap-4 relative">
            <div
              className="relative cursor-pointer"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <ShoppingCart size={25} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>

              {/* Mobile Cart Dropdown */}
              {cartOpen && (
                <div className="absolute right-0 mt-2 w-72 max-h-96 overflow-y-auto bg-white shadow-lg border rounded-lg p-3 z-50">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="font-bold text-lg">Your Cart ({cart.length})</h2>
                    <button
                      onClick={() => setCartOpen(false)}
                      className="text-red-500 font-bold text-xl"
                    >
                      &times;
                    </button>
                  </div>

                  {cart.length === 0 ? (
                    <p className="text-gray-500 text-sm">Cart is empty</p>
                  ) : (
                    cart.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between mb-3 border-b pb-2"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div>
                            <p className="font-bold">{item.name}</p>
                            <p className="text-gray-500">{item.price}</p>
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFromCart(index);
                          }}
                          className="text-red-500 font-bold text-lg"
                        >
                          &times;
                        </button>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            <button
              className="text-3xl  focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden fixed top-25 left-0 z-40 w-full bg-white py-4 border-t">
            <ul className="flex flex-col items-center gap-4">
              {navlink.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.link}
                    className="inline-block hover:text-orange-300 transition duration-300 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
