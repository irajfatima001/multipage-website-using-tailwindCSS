// app/menu/page.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
//import Navbar from '../components/Navbar';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    category: "Appetizers",
    items: [
      {
        name: "Bruschetta",
        description: "Grilled bread topped with tomatoes, garlic, and basil.",
        price: "$8",
        image: "/m1.jpg",
      },
      {
        name: "Stuffed Mushrooms",
        description: "Mushrooms stuffed with cheese and herbs.",
        price: "$10",
        image: "/m2.jpg",
      },
      {
        name: "Caesar Salad",
        description: "Crisp romaine with Caesar dressing and croutons.",
        price: "$9",
        image: "/m3.jpg",
      },
      {
        name: "Caprese Skewers",
        description:
          "Skewered mozzarella, cherry tomatoes, and fresh basil, drizzled with balsamic glaze.",
        price: "$12",
        image: "/m4.jpg",
      },
      {
        name: "Spinach Artichoke Dip",
        description:
          "Creamy spinach and artichoke dip served with tortilla chips.",
        price: "$11",
        image: "/m5.jpg",
      },
      {
        name: "Chicken Tenders",
        description:
          "Crispy breaded chicken tenders served with honey mustard sauce.",
        price: "$9",
        image: "/m6.jpg",
      },
      {
        name: "Fried Zucchini",
        description:
          "Lightly battered zucchini slices fried to golden perfection, served with marinara.",
        price: "$7",
        image: "/m7.jpg",
      },
      {
        name: "Garlic Parmesan Fries",
        description:
          "Crispy fries tossed with garlic, parmesan, and fresh herbs.",
        price: "$6",
        image: "/m8.jpg",
      },
      {
        name: "Hummus Platter",
        description:
          "A variety of hummus served with pita bread, cucumbers, and cherry tomatoes.",
        price: "$10",
        image: "/m9.jpg",
      },
      {
        name: "Shrimp Cocktail",
        description: "Chilled shrimp served with tangy cocktail sauce.",
        price: "$14",
        image: "/m10.jpg",
      },
    ],
  },
  {
    category: "Main Courses",
    items: [
      {
        name: "Grilled Salmon",
        description: "Served with seasonal vegetables and lemon butter sauce.",
        price: "$22",
        image: "/m11.jpg",
      },
      {
        name: "Pasta Primavera",
        description:
          "Pasta tossed with fresh vegetables in a light garlic sauce.",
        price: "$18",
        image: "/m12.jpg",
      },
      {
        name: "Steak Frites",
        description: "Juicy steak served with French fries and garlic aioli.",
        price: "$28",
        image: "/m13.jpg",
      },
      {
        name: "Chicken Alfredo",
        description:
          "Creamy alfredo sauce served over fettuccine with grilled chicken.",
        price: "$20",
        image: "/m14.jpg",
      },
      {
        name: "Lamb Chops",
        description:
          "Tender lamb chops grilled to perfection, served with rosemary potatoes.",
        price: "$30",
        image: "/m15.jpg",
      },
      {
        name: "Vegetarian Risotto",
        description:
          "Creamy risotto with seasonal vegetables, mushrooms, and Parmesan.",
        price: "$18",
        image: "/m16.jpg",
      },
      {
        name: "BBQ Ribs",
        description:
          "Tender pork ribs glazed with smoky BBQ sauce, served with coleslaw.",
        price: "$26",
        image: "/m17.jpg",
      },
      {
        name: "Shrimp Scampi",
        description:
          "Shrimp cooked in a garlic butter sauce served over linguine.",
        price: "$24",
        image: "/m18.jpg",
      },
      {
        name: "Beef Wellington",
        description:
          "Filet mignon wrapped in puff pastry with mushroom duxelles and prosciutto.",
        price: "$45",
        image: "/m19.jpg",
      },
      {
        name: "Fish Tacos",
        description:
          "Grilled white fish, slaw, and spicy aioli in soft tortillas.",
        price: "$16",
        image: "/m20.jpg",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Tiramisu",
        description:
          "Classic Italian dessert made with coffee-soaked ladyfingers.",
        price: "$7",
        image: "/m21.jpg",
      },
      {
        name: "Cheesecake",
        description: "Creamy cheesecake with a graham cracker crust.",
        price: "$6",
        image: "/m22.jpg",
      },
      {
        name: "Chocolate Mousse",
        description: "Rich and velvety chocolate mousse.",
        price: "$8",
        image: "/m23.jpg",
      },
      {
        name: "Creme Brulee",
        description: "Vanilla custard with a crisp, caramelized sugar topping.",
        price: "$9",
        image: "/m24.jpg",
      },
      {
        name: "Apple Pie",
        description:
          "Classic apple pie served with a scoop of vanilla ice cream.",
        price: "$5",
        image: "/m25.jpg",
      },
      {
        name: "Lemon Sorbet",
        description: "Refreshing lemon sorbet served chilled.",
        price: "$6",
        image: "/m26.jpg",
      },
      {
        name: "Pavlova",
        description:
          "Meringue dessert topped with fresh fruit and whipped cream.",
        price: "$7",
        image: "/m27.jpg",
      },
      {
        name: "Baklava",
        description: "Flaky pastry filled with nuts and honey syrup.",
        price: "$6",
        image: "/m28.jpg",
      },
      {
        name: "Molten Lava Cake",
        description: "Rich chocolate cake with a gooey molten center.",
        price: "$9",
        image: "/m29.png",
      },
      {
        name: "Carrot Cake",
        description: "Moist carrot cake with cream cheese frosting.",
        price: "$7",
        image: "/m30.jpg",
      },
    ],
  },
];

const MenuCategory: React.FC<{ category: MenuCategory }> = ({ category }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = Array.isArray(category.items) ? category.items : [];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  if (items.length === 0) return null;
  return (
    <div className="bg-black">
      <div className="mb-12 ">
        <h2 className="text-3xl font-semibold mb-4 italic font-serif text-orange-400 underline">
          {category.category}
        </h2>
        <div className="relative">
          <div className="flex justify-center items-center">
            <button
              onClick={prevSlide}
              className="bg-orange-300 rounded-full p-2 mr-4"
            >
              &lt;
            </button>
            <div className="carousel-container flex justify-center items-center">
              <div className="bg-black rounded-lg shadow-md p-4 w-full max-w-md">
                <div className="flex justify-center mb-4">
                  <Image
                    src={items[currentIndex].image}
                    alt={items[currentIndex].name}
                    width={300}
                    height={300}
                    className="h-60 w-78 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl text-gray-200  font-bold text-center">
                  {items[currentIndex].name}
                </h3>
                <p className="text-gray-200 text-center">
                  {items[currentIndex].description}
                </p>
                <p className="text-lg font-semibold mt-2 text-center">
                  {items[currentIndex].price}
                </p>
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="bg-orange-300 rounded-full p-2 ml-4"
            >
              &gt;
            </button>
          </div>
          <div className="flex justify-center mt-4">
            {items.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
                  idx === currentIndex ? "bg-red-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="bg-black">
      <div className="max-w-6xl mx-auto p-6 bg-black">
        <h1 className="text-5xl font-bold text-center mb-8 text-orange-400 mt-6">
          Our Menu
        </h1>
        {menuData.map((category, index) => (
          <MenuCategory key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
