import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";



const features = [
  {
    img: "images/2.svg",
    title: "Automated Booking System",
    description: "No back-and-forth coordination required.",
  },
  {
    img: "images/4.svg",
    title: "Verified Instagram API Integration",
    description: "No hassle of verifying the creator's credentials",
  },
  {
    img: "images/3.svg",
    title: "Real-Time Campaign Tracking",
    description: "Monitor content deliveries with ease.",
  },
  {
    img: "images/1.svg",
    title: "Strike & Reputation System",
    description: "Ensures accountability and timely content submissions.",
  },
  {
    img: "images/5.svg",
    title: "Performance-Based Matching",
    description: "Get connected with the best-fit creators for your brand.",
  },
];

const Appfeatures = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo === "Features") {
      setTimeout(() => {
        document.getElementById("Features")?.scrollIntoView({ behavior: "smooth" });
      }, 100); 
    }
  }, [location]);
  return (
    <section className="bg-[#272530]" id="Features">
      <div className="py-1">
        <div className="flex flex-col gap-8 md:gap-5 lg:flex-row lg:justify-between items-start lg:items-center  md:px-10 lg:px-10 lg:mx-32 md:py-10 my-10 rounded-md  ">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start px-5"
          >
            <h1 className="text-2xl md:text-3xl font-quicksand font-bold mb-4">
              Our Features:
            </h1>
            <p className="text-base md:text-xl font-Lexend font-extralight mb-6 md:mb-10 max-w-full md:w-[600px]">
              We believe that the best way to create successful marketing campaigns is to work closely with our clients to understand their goals and challenges.
            </p>
            <motion.img
              src="/images/pannel.png"
              alt="Card"
              className="w-full max-w-lg object-contain"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <div className="flex flex-col  px-6  lg:px-0 gap-6 md:gap-10 ">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex gap-3 items-center"
              >
                <div className="text-[#FDFDFD] bg-[#653FCC] p-2  rounded-lg">
                  <img src={feature.img} alt="" />
                </div>
                <div>
                  <h1 className="text-base md:text-xl font-quicksand font-bold">
                    {feature.title}
                  </h1>
                  <p className="text-sm md:text-[15px] font-Lexend font-extralight mb-2">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Appfeatures;
