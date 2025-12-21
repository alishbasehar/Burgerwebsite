

const Whychoose = () => {
  const points = [
    {
      title: "Fresh Ingredients",
      description: "We use only the freshest vegetables, premium meats, and quality buns for every burger.",
      icon: "🥬",
    },
    {
      title: "Quick Service",
      description: "Fast and friendly service to make sure you enjoy your meal without the wait.",
      icon: "⏱️",
    },
    {
      title: "Best Recipes",
      description: "Our secret recipes ensure every burger is packed with flavor and satisfaction.",
      icon: "🍳",
    },
    {
      title: "Affordable Prices",
      description: "Delicious burgers at prices that won't break your wallet.",
      icon: "💰",
    },
  ];

  return (
    <section className="mt-20 px-4 container mx-auto max-w-7xl mb-20">
      <h2 className="text-5xl font-extrabold text-amber-500 text-center mb-12 drop-shadow-md">
        Why Choose Us?
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {points.map((point, index) => (
          <div
            key={index}
            className="w-full md:w-[45%] lg:w-[22%] bg-yellow-50 rounded-3xl p-6 flex flex-col items-center text-center
                       shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 
                       transform transition duration-300 ease-in-out"
          >
            <div className="text-6xl mb-4 animate-bounce">{point.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{point.title}</h3>
            <p className="text-gray-700">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Whychoose;
