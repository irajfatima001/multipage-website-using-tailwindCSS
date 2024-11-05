import React from 'react';

const About = () => {
  return (
    <div className="relative bg-black">
      <div className="max-w-4xl mx-auto p-6">
        
        <h1 className="text-5xl font-serif text-center mb-6 text-orange-400 italic">Our Story</h1>
        <p className="text-lg text-white mb-4 leading-relaxed ">
          Welcome to <span className="font-serif text-orange-300 italic">Foodelicious</span>, where every dish tells a story and every meal is a celebration of flavor. Located in the vibrant heart of <span className="font-serif text-orange-300 italic">Downtown New York</span>, { `we’ve`} been delighting locals and visitors alike since 2022.
        </p>
        <p className="text-lg text-white mb-4 leading-relaxed ">
          At Foodelicious, we believe in the power of food to bring people together. Our mission is to craft unforgettable dining experiences using the freshest, locally sourced ingredients. From our kitchen to your table, every bite is a testament to our passion for <span className="font-serif text-orange-300 italic">modern fusion cuisine</span>.
        </p>
        
        <h2 className="text-3xl font-serif mt-8 mb-4 text-orange-400 underline">The Heart of Our Kitchen</h2>
        <p className="text-lg text-white mb-4 leading-relaxed ">
          Our culinary journey began with a simple dream: to share the rich flavors and traditions of <span className="font-serif text-orange-300 italic">Mediterranean and Asian cuisine</span>. Our restaurant is a labor of love. Each dish is a blend of time-honored recipes and modern twists, created with care by our talented chefs who pour their hearts into every plate.
        </p>
        
        <h2 className="text-3xl font-serif mt-8 mb-4 text-orange-400 underline">Our Community</h2>
        <p className="text-lg text-white mb-4 leading-relaxed ">
          We are more than just a restaurant; we are a gathering place for the community. Our doors are open to everyone from families celebrating milestones to friends catching up over a shared meal. We take pride in supporting local farmers and artisans, ensuring that our menu reflects the bounty of our region.
        </p>
        
        <h2 className="text-3xl font-serif mt-8 mb-4 text-orange-400 underline">Join Us at the Table</h2>
        <p className="text-lg text-white mb-4 leading-relaxed ">
          We invite you to experience the warmth of our hospitality and the richness of our cuisine. Visit us at <span className="font-serif text-orange-300 italic">123 Flavor Street, Downtown New York</span>, where every meal is an opportunity to create memories. Follow us on social media to stay updated on special events, seasonal menus, and exclusive offers. We {`can’t`} wait to welcome you into our family!
        </p>
        
      </div>
    </div>
  );
};

export default About;
