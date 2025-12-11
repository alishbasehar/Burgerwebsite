import chickenroll from '../assets/chicken-roll.png';
import pizza from '../assets/pizza.png';
import speg from '../assets/spaghetti.png';

const menuItems:MenuItem[] = [
  { name: "Classic Burger", description: "Juicy beef patty, lettuce, tomato, and our special sauce.", price: 8.99, image: chickenroll },
  { name: "Cheese Lover", description: "Loaded with cheddar, mozzarella, and a beef patty.", price: 9.99, image: pizza },
  { name: "Veggie Delight", description: "Grilled veggie patty with fresh greens and avocado.", price: 7.99, image: speg },
  { name: "Bacon Supreme", description: "Crispy bacon, cheddar, and BBQ sauce on a beef patty.", price: 10.99, image: chickenroll },
  { name: "Classic Burger", description: "Juicy beef patty, lettuce, tomato, and our special sauce.", price: 8.99, image: chickenroll },
  { name: "Cheese Lover", description: "Loaded with cheddar, mozzarella, and a beef patty.", price: 9.99, image: pizza },
  { name: "Veggie Delight", description: "Grilled veggie patty with fresh greens and avocado.", price: 7.99, image: speg },
  { name: "Bacon Supreme", description: "Crispy bacon, cheddar, and BBQ sauce on a beef patty.", price: 10.99, image: chickenroll },
];
interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
}
interface MenuSectionProps {
  addToCart: (item: MenuItem) => void;
}

const Menu = ({ addToCart }: MenuSectionProps) => {
  return (
     <section id="menu" className="mt-32 px-4 container mx-auto max-w-7xl">
      <h2 className="text-4xl font-bold mb-6 text-amber-500  text-center">Our Menu</h2>
  <div className="flex flex-wrap gap-6">
  {menuItems.map((item, index) => (
    <div
      key={index}
      className="bg-white shadow rounded-lg p-4 flex flex-col items-center 
                 w-full sm:w-[48%] lg:w-[23%] hover:scale-105 transition-transform duration-300"
    >
      <img src={item.image} alt={item.name} className="h-32 object-contain mb-4 "  />
      <h3 className="font-bold">{item.name}</h3>
      <p className="text-gray-600">{item.description}</p>
      <p className="font-bold mt-2">{item.price}</p>

      <button
        onClick={() => addToCart(item)}
        className="bg-yellow-500 text-white px-4 py-2 rounded-full mt-2 hover:bg-yellow-600"
      >
        Order Now
      </button>
    </div>
  ))}
</div>

     
    </section>

  )
}

export default Menu