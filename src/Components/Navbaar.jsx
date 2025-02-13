import React, { useState, useEffect } from "react";

const Navbaar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 lg:px-20 py-2">
          <div>
            <img className="w-full h-[50px]" src="images/icon1.png" alt="Logo" />
          </div>

          <div className="hidden lg:block">
            <ul className="flex gap-3">
              <li className="font-normal font-poppins text-[17px] cursor-pointer">
                Book a Demo
              </li>
              <li className="font-normal font-poppins text-[17px] cursor-pointer">
                Testimonials
              </li>
              <li className="font-normal font-poppins text-[17px] cursor-pointer">
                Influencers
              </li>
              <li className="font-normal font-poppins text-[17px] cursor-pointer">
                Blog
              </li>
              <li className="font-normal font-poppins text-[17px] cursor-pointer">
                AppStore
              </li>
              <li className="font-normal font-poppins text-[17px] cursor-pointer">
                GooglePlay
              </li>
            </ul>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <ul className="flex flex-col gap-3 px-6 py-4">
              <li className="font-normal font-poppins text-[17px] cursor-pointer">
                Book a Demo
              </li>
              <li className="font-normal font-poppins text-[17px] cursor-pointer">
                Testimonials
              </li>
              <li className="font-normal font-poppins text-[17px] cursor-pointer">
                Influencers
              </li>
              <li className="font-normal font-poppins text-[17px] cursor-pointer">
                Blog
              </li>
              <li className="font-normal font-poppins text-[17px] cursor-pointer">
                AppStore
              </li>
              <li className="font-normal font-poppins text-[17px] cursor-pointer">
                GooglePlay
              </li>
            </ul>
          </div>
        )}
      </div>

      <div
        className="h-[800px] w-full"
        style={{
          backgroundImage: `url('images/pin.jpg')`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-start items-center py-20">
          <div className="text-center lg:text-left max-w-lg px-20">
            <h1 className="text-xl lg:text-5xl font-bold font-poppins mb-4">
              Get Eat, Share, Grow
            </h1>
            <p className="font-Lexend text-2xl font-extralight mb-2">
              LynkUp bridges the gap between restaurants looking for authentic
              promotion and creators who want to experience and share the best
              food in town.
            </p>
            <p className="font-Lexend font-extralight mb-2">
              🔹{" "}
              <span className="font-poppins font-bold">Our Mission:</span> To
              empower creators with opportunities and help restaurants leverage
              influencer marketing with minimal effort.
            </p>
            <p className="font-Lexend font-extralight">
              🔹{" "}
              <span className="font-poppins font-bold">Our Vision:</span> To be
              the go-to platform for barter collaborations between content
              creators and hospitality brands.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbaar;
