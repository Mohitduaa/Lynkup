import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
      id: "01",
      title: " Welcome to LynkUp!",
      subheading:"We're thrilled to have you here! ",
      description:
        "LynkUp is the ultimate platform that seamlessly connects content creators with restaurants for exciting, mutually beneficial collaborations—completely free! Whether you're a foodie looking to discover hidden gems or a restaurant eager to amplify your brand, LynkUp makes partnerships effortless and rewarding. Let’s eat, share, and grow together",
      icon: "👋",
      size: "row-span-1"
    },
    {
      id: "02",
      title: "Effortless Collaborations",
      description:
        "Discover our curated offers or simply search by name or date. Once you find the perfect match, select your preferred time and confirm your booking. Once accepted by the restaurant, simply show up, savor the experience, and create amazing content. It’s that simple—connect, collaborate, and create!",
      icon: "🎁",
      size: "row-span-3"
    },
    {
      id: "03",
      title: "Create, Complete & Connect!",
      description:
        "After your visit, post your content with the required tags within 48 hours. Mark the task as completed in the app’s Tasks section once your content is live. Then, explore more exciting offers and start your next collaboration. The more you create, the more opportunities await!",
      icon: "📸",
      size: "row-span-3"
    },
    {
      id: "04",
      title: "Bonus",
      description:
        "Add @lynkupindia Ambassador to your Instagram bio to boost your chances of getting accepted for exclusive events and offers! ",
      icon: "⭐",
      size: "row-span-1"
    },
];

const Howitworks = () => {
  return (
    <section name="Creators">
      <div className="py-10 px-6 md:px-20 lg:px-60">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl text-center font-quicksand font-bold">
            How it works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, amount: 0.2 }} 
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative bg-[#272530] p-6 rounded-xl shadow-lg flex flex-col gap-2 ${step.size}`}
            >
              <span className="text-5xl md:text-6xl">{step.icon}</span>
              <h3 className="text-lg md:text-xl font-bold font-quicksand">{step.title}</h3>
              <h4 className='text-sm md:text-base'>{step.subheading}</h4>
              <p className="text-sm md:text-base font-Lexend font-extralight mb-2">{step.description}</p>

              <div className="absolute -top-3 right-3 bg-[#653FCC] text-white font-bold text-sm w-10 h-10 flex items-center justify-center rounded-full">
                {step.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Howitworks;
