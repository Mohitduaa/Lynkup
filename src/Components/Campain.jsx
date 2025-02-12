import React from "react";

const Campaign = () => {
  return (
    <div className=" bg-[#FFEEDD] py-12 bg- text-center px-20">
      <h1 className="text-3xl lg:text-4xl font-poppins font-bold mb-4">
        Planning a  campaign?
      </h1>

      <p className="text-lg lg:text-xl mb-6">
        Book a free 15-min kick-off call with one of our customer champions and
        get your first batch of content back in just a matter of days
      </p>

      <div className="flex justify-center mb-6">
        <div className="flex -space-x-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile 1"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile 2"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Profile 3"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <img
            src="https://randomuser.me/api/portraits/women/12.jpg"
            alt="Profile 4"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
        </div>
      </div>

      <button className="bg-white text-pink-500 hover:bg-gray-100 font-medium py-3 px-6 rounded-full shadow-lg transition">
        Book your kick-off call →
      </button>

      <p className="text-sm mt-6">
        👉 Or click here if you're ready to get started on your own
      </p>
    </div>
  );
};

export default Campaign;
