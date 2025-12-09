import MenuSection from '../Components/Menu';
import Hero from '../Components/Hero';

interface Item {
  name: string;
  price: number;
  image?: string;
}

interface HomeProps {
  addToCart: (item: Item) => void;
}

const Home = ({ addToCart }: HomeProps) => {
  return (
    <div>
      <Hero />
      <MenuSection addToCart={addToCart} />
    </div>
  )
}

export default Home;
