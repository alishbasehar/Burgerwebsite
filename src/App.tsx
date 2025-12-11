import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import About from './Pages/About';
import Service from './Pages/Service';
import Menu from './Pages/Menu';

interface Item {
  name: string;
  price: number;
  image?: string;
}

function App() {
  const [cart, setCart] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <Router basename="/Burgerwebsite">
      <Navbar cart={cart} removeFromCart={removeFromCart} />

      <div className="min-h-screen mt-20">
        <Routes>
         
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
           <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
