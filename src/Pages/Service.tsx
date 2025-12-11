import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
const Service = () => {
  return (
    <div className=" container mx-auto pt-10 max-w-7xl">
      <div>
        <h1 className=" text-xl sm:text-4xl font-bold mb-6 text-amber-500    text-center">Our Services</h1>
       <h1 className=" text-2xl sm:text-5xl font-bold mb-6 text-black text-center"> What Restaurant Services </h1>
      </div>
      <div className="flex flex-wrap  gap-6 md:gap-8 mb-10">
        <div className="bg-white hover:bg-yellow-300 shadow rounded-lg p-4 flex flex-col items-center 
                 w-full sm:w-[48%] hover:scale-105 transition-transform duration-300">
                  <img src={img1} className="w-24 h-24 object-contain mt-3 mb-3"/>
          <h1 className="text-xl mt-3 font-bold text-center">Fresh Healthy Food</h1>
          <p className="text-[15px] mt-3 text-gray-600 text-center leading-relaxed"> Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
        </div>
        <div className="bg-white hover:bg-yellow-300 shadow rounded-lg p-4 flex flex-col items-center 
                 w-full sm:w-[48%] hover:scale-105 transition-transform duration-300">
                  <img src={img2} className="w-24 h-24 object-contain mt-3 mb-3"/>
          <h1 className="text-xl mt-3 font-bold text-center">Delicious Homemade Dishes</h1>
          <p className="text-[15px] mt-3 text-gray-600 text-center leading-relaxed"> Savor the taste of our delicious homemade dishes made with love and care for your culinary delight. </p>
        </div>
        <div className="bg-white hover:bg-amber-300 shadow rounded-lg p-4 flex flex-col items-center 
                 w-full sm:w-[48%]  hover:scale-105 transition-transform duration-300">
                  <img src={img3} className="w-24 h-24 object-contain mt-3 mb-3"/>
          <h1 className="text-xl mt-3 font-bold text-center">Gourmet Dining Experience</h1>
          <p className="text-[15px] mt-3 text-gray-600 text-center leading-relaxed"> Experience a gourmet dining journey like no other, with crafted dishes that tantalize your taste buds. </p>
        </div>
        <div className="bg-white hover:bg-yellow-300 shadow rounded-lg p-4 flex flex-col items-center 
                 w-full sm:w-[48%]  hover:scale-105 transition-transform duration-300">
                  <img src={img4} className="w-24 h-24 object-contain mt-3 mb-3"/>
          <h1 className="text-xl mt-3 font-bold text-center">Farm-to-Table Freshness</h1>
          <p className="text-[15px] mt-3 text-gray-600 text-center leading-relaxed"> Lorem ipsum dolor sit amet, consect adisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
        </div>
        <div className="bg-white hover:bg-yellow-300 shadow rounded-lg p-4 flex flex-col items-center 
                 w-full sm:w-[48%] hover:scale-105 transition-transform duration-300">
                  <img src={img5} className="w-24 h-24 object-contain mt-3 mb-3"/>
          <h1 className="text-xl mt-3 font-bold text-center">Mouthwatering Culinary</h1>
          <p className="text-[15px] mt-3 text-gray-600 text-center leading-relaxed">Discover the goodness of farm-to-table freshness in every bite, ensuring a healthy and sustainable dining choice.  </p>
        </div>
        <div className="bg-white  hover:bg-yellow-300 shadow rounded-lg p-4 flex flex-col items-center 
                 w-full sm:w-[48%] hover:scale-105 transition-transform duration-300">
                  <img src={img1} className="w-24 h-24 object-contain mt-3 mb-3"/>
          <h1 className="text-xl mt-3 font-bold text-center">Fresh Healthy Food</h1>
          <p className="text-[15px] mt-3 text-gray-600 text-center leading-relaxed"> Satisfy your sweet cravings with our exquisite dessert delights, each bite a heavenly experience for your taste buds. </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
