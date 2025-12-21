import MenuSection from '../Components/Menu';
import Hero from '../Components/Hero';
import Aboutus from '../Components/Aboutus';
import Service1 from '../Components/Services1'


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
      <Aboutus/>
      <Service1/>
    </div>
  )
}

export default Home;
