import chickenroll from '../assets/chicken-roll.png';
import pizza from '../assets/pizza.png';
import speg from '../assets/spaghetti.png';

interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
}

interface MenuSectionProps {
  addToCart: (item: MenuItem) => void;
}

const menuItems: MenuItem[] = [
  { name: "Classic Burger", description: "Juicy beef patty, lettuce, tomato, and our special sauce.", price: 8.99, image: chickenroll },
  { name: "Cheese Lover", description: "Loaded with cheddar, mozzarella, and a beef patty.", price: 9.99, image: pizza },
  { name: "Veggie Delight", description: "Grilled veggie patty with fresh greens and avocado.", price: 7.99, image: speg },
  { name: "Bacon Supreme", description: "Crispy bacon, cheddar, and BBQ sauce on a beef patty.", price: 10.99, image: chickenroll },
{ name: "Classic Burger", description: "Juicy beef patty, lettuce, tomato, and our special sauce.", price: 8.99, image: chickenroll },
  { name: "Cheese Lover", description: "Loaded with cheddar, mozzarella, and a beef patty.", price: 9.99, image: pizza },
  { name: "Veggie Delight", description: "Grilled veggie patty with fresh greens and avocado.", price: 7.99, image: speg },
  { name: "Bacon Supreme", description: "Crispy bacon, cheddar, and BBQ sauce on a beef patty.", price: 10.99, image: chickenroll },
];




const Menu = ({ addToCart }: MenuSectionProps) => {
  return (
    <section className="mt-20 px-4 container mx-auto mb-10 max-w-7xl bg-gradient-to-b from-yellow-50 to-white py-10 rounded-xl shadow-lg">
      <h2 className="text-5xl font-extrabold mb-12 text-amber-500 text-center drop-shadow-md">
        Our Delicious Menu
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 flex flex-col items-center text-center
                       shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out relative"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-40 object-contain rounded-full border-2 border-amber-200 mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-gray-800">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <span className="bg-amber-500 text-white font-bold px-4 py-1 rounded-full mb-4">
              ${item.price.toFixed(2)}
            </span>

            <button
              onClick={() => addToCart(item)}
              className="bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-yellow-500 hover:to-amber-400 text-white font-semibold px-6 py-2 rounded-full transition-transform transform hover:scale-105 shadow-md"
            >
              Order Now
            </button>

            <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
              Hot
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
