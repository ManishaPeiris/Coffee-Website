import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "../Styles/Category.css";

import CoffeeBag from "../Images/Coffee_Bag.png";

const products = [
  {
    name: "Ceylon Coffee",
    price: "Rs. 2500",
    image: CoffeeBag, 
  },
  {
    name: "Robusta Coffee",
    price: "Rs. 3500",
    image: CoffeeBag,
  },
  {
    name: "Arabica Coffee",
    price: "Rs. 4000",
    image: CoffeeBag,
  },
  {
    name: "Cinnamon flavored Coffee",
    price: "Rs. 3500",
    image: CoffeeBag,
  },
];

const Category = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      const newIndex =
        direction === "left"
          ? Math.max(activeIndex - 1, 0)
          : Math.min(activeIndex + 1, products.length - 1);

      scrollRef.current.scrollTo({
        left: newIndex * width,
        behavior: "smooth",
      });
      setActiveIndex(newIndex);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  return (
    <div className="category-container">
      <div className="indicator">
        {products.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === hoveredIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>

      <div className="products-wrapper" ref={scrollRef} onScroll={handleScroll}>
        {products.map((product, index) => (
          <div
            key={index}
            className={`product-card ${
              hoveredIndex !== null && hoveredIndex !== index ? "faded" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.img
              src={product.image}
              alt={product.name}
              className="motion-img"
              whileHover={{ scale: 1.2 }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                e.currentTarget.style.transform = `scale(1.2) translate(${x * 0.05}px, ${y * 0.05}px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
            <p className="product-name">{product.name}</p>
            <p
              className={`product-price ${
                hoveredIndex === index ? "highlighted" : ""
              }`}
            >
              {product.price}
            </p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
