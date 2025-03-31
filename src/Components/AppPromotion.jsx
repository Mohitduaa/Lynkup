import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const AppPromotion = () => {
  return (
    <section id="Download">
      <div className="py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-evenly ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left lg:pr-10"
        >
          <h1 className="text-3xl lg:text-5xl text-white font-quicksand font-bold mb-4">
            Book and manage <br /> brand collaborations <br />
            <span className="text-[#653FCC]">with one simple app</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start gap-4"
          >
            <div className="text-white flex items-center py-3 px-2 rounded-lg hover:bg-gray-800 transition">
              <NavLink to="https://apps.apple.com/in/app/lynkup-amplify-your-brand/id6740088464"><img src="images/Appstore IOS.png" alt="App Store" className="h-10 w-full" /></NavLink>
            </div>
            <div className="text-white flex items-center py-3 px-2 rounded-lg hover:bg-gray-800 transition">
              <NavLink to="https://play.google.com/store/apps/details?id=com.lynkupapplication.android&pcampaignid=web_share"><img src="images/playstore.png" alt="Google Play" className="h-10 w-full" /></NavLink>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <div>
            <img
              src="images/mobilenew1.png"
              alt="App Mockup 2"
              className="md:w-full md:h-[600px]"
            />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="-mt-10"
            >
              <img className="-rotate-[10deg] -ml-2 mb-2" src="images/right (2).png" alt="" />
              <h1 className="absolute px-6 -ml-5 md:-ml-12 text-white font-poppins font-medium">
                100% free for creators and restaurants
              </h1>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppPromotion;
