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
        <div className="flex justify-between items-center px-4 md:px-6 lg:px-20 py-2">
          {/* Logo Section */}
          <div>
          <img className="w-full h-[50px] " src="images/icon1.png" alt="Logo" />          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex gap-3">
              {[
                "Book a Demo",
                "Testimonials",
                "Influencers",
                "Blog",
                "AppStore",
                "GooglePlay",
              ].map((item, index) => (
                <li
                  key={index}
                  className="font-normal font-poppins text-[14px] lg:text-[17px] text-[#100E19] bg-[#FDFDFD] px-[8px] py-[4px] rounded-lg cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Toggle Button */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white text-black shadow-md">
            <ul className="flex flex-col gap-3 px-4 py-4">
              {[
                "Book a Demo",
                "Testimonials",
                "Influencers",
                "Blog",
                "AppStore",
                "GooglePlay",
              ].map((item, index) => (
                <li
                  key={index}
                  className="font-normal font-poppins text-[14px] md:text-[17px] cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div
        className="h-[600px] md:h-[700px] lg:h-[800px] w-full"
        style={{
          backgroundImage: `url('images/pin.jpg')`,
          backgroundSize: "cover",
          backgroundBlendMode: "screen",
        }}
      >
        <div className="flex justify-center md:justify-start items-center h-full px-4 md:px-12 lg:px-20">
          <div className="text-center text-black md:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold font-poppins mb-4">
              Eat, Share, Grow
            </h1>
            <p className="font-Lexend text-[14px] md:text-xl font-extralight mb-2 max-w-[90%] md:max-w-[640px]">
              LynkUp bridges the gap between restaurants looking for authentic
              promotion and creators who want to experience and share the best
              food in town.
            </p>
            <p className="font-Lexend font-extralight mb-2 max-w-[90%] md:max-w-[660px] text-[14px] md:text-xl">
              <span className="font-poppins font-bold text-lg md:text-2xl">Our Mission:</span> To
              empower creators with opportunities and help restaurants leverage
              influencer marketing with minimal effort.
            </p>
            <p className="font-Lexend font-extralight max-w-[90%] md:max-w-[660px] text-[14px] md:text-xl">
              <span className="font-poppins font-bold text-lg md:text-2xl">Our Vision:</span> To be
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
