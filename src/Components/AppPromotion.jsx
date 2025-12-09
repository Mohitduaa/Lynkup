import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const AppPromotion = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo === "Download") {
      setTimeout(() => {
        const element = document.getElementById("Download");
        if (element) {
          element.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
          });
        }
      }, 100); 
    }
  }, [location]);

  return (
    <section 
      id="Download"
      className="py-16 px-6 lg:px-20"
      style={{
        WebkitOverflowScrolling: 'touch' // Improves scrolling on iOS
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }} // Safari viewport bug fix
          className="text-center lg:text-left lg:pr-10 max-w-lg"
        >
          <h1 
            className="text-3xl lg:text-5xl text-white font-bold mb-4 leading-tight"
            style={{
              WebkitFontSmoothing: 'antialiased' // Better font rendering
            }}
          >
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
            <div className="text-white flex items-center py-3 px-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">
              <NavLink 
                to="https://apps.apple.com/in/app/lynkup-amplify-your-brand/id6740088464"
                className="inline-block"
              >
                <img 
                  src="images/Appstore IOS.png" 
                  alt="App Store" 
                  className="h-10 w-auto" 
                  style={{
                    maxWidth: 'none' // Prevent Safari from shrinking images
                  }}
                />
              </NavLink>
            </div>
            <div className="text-white flex items-center py-3 px-2 rounded-lg hover:bg-gray-800 transition-colors duration-300">
              <NavLink 
                to="https://play.google.com/store/apps/details?id=com.lynkupapplication.android&pcampaignid=web_share"
                className="inline-block"
              >
                <img 
                  src="images/playstore.png" 
                  alt="Google Play" 
                  className="h-10 w-auto"
                  style={{
                    maxWidth: 'none'
                  }}
                />
              </NavLink>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center items-center relative mt-8 lg:mt-0"
        >
          <div className="relative">
            <img
              src="images/mobilenew1.webp"
              alt="App Mockup 2"
              className="w-full max-w-xs md:max-w-md h-auto object-contain"
              style={{
                transform: 'translateZ(0)' // Force GPU acceleration
              }}
            />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="-mt-10"
            >
              <div className="relative">
                <img 
                  className="-rotate-[10deg] -ml-2 mb-2" 
                  src="images/right (2).png" 
                  alt="" 
                />
                <h1 
                  className="absolute px-6 -ml-5 lg:-ml-12 text-white font-poppins font-medium"
                  style={{
                    textShadow: '0 1px 3px rgba(0,0,0,0.5)' // Better text visibility
                  }}
                >
                  100% free for creators 
                </h1>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppPromotion;