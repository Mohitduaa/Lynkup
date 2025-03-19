import React from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    id: 1,
    title: "Completely free",
    description:
      "Gain high-quality social media exposure for free",
    image: "images/card1.png",
    direction: -50 // Left se aaye
  },
  {
    id: 2,
    title: "Engagement-Driven Creators",
    description:
      "Partner with creators selected based on engagement, not just follower count",
    image: "images/card1.png",
    direction: 50 // Right se aaye
  },
  {
    id: 3,
    title: "Hassle-Free Collaboration",
    description:
      "List offers, accept creators, and get content—no complicated agreements needed",
    image: "images/card1.png",
    direction: -50 // Left se aaye
  },
  {
    id: 4,
    title: "Targeted Reach",
    description:
      "Connect with creators whose audience matches your ideal customer base",
    image: "images/card1.png",
    direction: 50 // Right se aaye
  },
  {
    id: 5,
    title: "Boost Brand Awareness",
    description:
      "Increase visibility with authentic, user-generated content",
    image: "images/card1.png",
    direction: -50 // Left se aaye
  }
];

const ResturantsCards = () => {
  return (
    <section name="Creators " className="bg-[#100E19]">
      <div className="py-10  max-w-7xl mx-auto px-6 md:px-12 lg:px-20 ">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-center font-quicksand font-bold">
          Why restaurants love LynkUp?          </h2>
        </motion.div>

        {/* Cards */}
        {cardData.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, x: card.direction }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } justify-between items-center py-8 gap-8`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={card.image}
                alt={`Card ${card.id}`}
                className="w-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="w-full lg:w-1/2">
              <h1 className="font-quicksand text-lg lg:text-xl font-bold">
                {card.title}
              </h1>
              <p className="text-sm lg:text-lg font-Lexend font-extralight">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResturantsCards;
