// import React from "react";
// import { FaRegistered } from 'react-icons/fa';

// const Resturant = () => {
//   return (
//     <div className="bg-[#272530] py-20">
//       <div className="text-2xl md:text-4xl lg:text-5xl text-center font-quicksand font-bold">
//         <h1>How to use LynkUp for restaurants?</h1>
//       </div>
//       <div className="flex flex-wrap justify-center items-start gap-10 pt-10">
//       <div className="bg-[#100E19] px-7 py-8 rounded-lg">
//       <FaRegistered  className=""/>
//           <h1 className="mb-2 text-xl">Sign up for free on our platform</h1>
//           <div className="w-[350px]">
//           <p  className="">Share the experience you’re providing, whether it’s a complimentary meal, special offer, tasting event, or unique dining experience.</p>
//           </div>
//         </div>
//         <div className="bg-[#100E19] px-7 py-8 rounded-lg">
//           <FaRegistered  className=""/>
//           <h1 className="mb-2 text-xl">Sign up for free on our platform</h1>
//           <div className="w-[350px]">
//           <p  className="">Share the experience you’re providing, whether it’s a complimentary meal, special offer, tasting event, or unique dining experience.</p>
//           </div>
//         </div>
//         <div className="bg-[#100E19] px-7 py-8 rounded-lg">
//           <FaRegistered  className=""/>
//           <h1 className="mb-2 text-xl">Sign up for free on our platform</h1>
//           <div className="w-[350px]">
//           <p  className="">Share the experience you’re providing, whether it’s a complimentary meal, special offer, tasting event, or unique dining experience.</p>
//           </div>
//         </div>
//         <div className="bg-[#100E19] px-7 py-8 rounded-lg">
//           <FaRegistered  className=""/>
//           <h1 className="mb-2 text-xl">Sign up for free on our platform</h1>
//           <div className="w-[350px]">
//           <p  className="">Share the experience you’re providing, whether it’s a complimentary meal, special offer, tasting event, or unique dining experience.</p>
//           </div>
//         </div>
//         <div className="bg-[#100E19] px-7 py-8 rounded-lg">
//           <FaRegistered  className=""/>
//           <h1 className="mb-2 text-xl">Sign up for free on our platform</h1>
//           <div className="w-[350px]">
//           <p  className="">Share the experience you’re providing, whether it’s a complimentary meal, special offer, tasting event, or unique dining experience.</p>
//           </div>
//         </div>
        
        
        
        
//       </div>
//     </div>
//   );
// };

// export default Resturant;
import React from "react";
import { FaRegistered } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Resturant = () => {
  const data = [
    {
      title: "Sign up for free on our platform",
      desc: "Share the experience you’re providing, whether it’s a complimentary meal, special offer, tasting event, or unique dining experience."
    },
    // You can duplicate or modify data to add more cards
    {
      title: "Sign up for free on our platform",
      desc: "Share the experience you’re providing, whether it’s a complimentary meal, special offer, tasting event, or unique dining experience."
    },
    {
      title: "Sign up for free on our platform",
      desc: "Share the experience you’re providing, whether it’s a complimentary meal, special offer, tasting event, or unique dining experience."
    },
    {
      title: "Sign up for free on our platform",
      desc: "Share the experience you’re providing, whether it’s a complimentary meal, special offer, tasting event, or unique dining experience."
    },
    {
      title: "Sign up for free on our platform",
      desc: "Share the experience you’re providing, whether it’s a complimentary meal, special offer, tasting event, or unique dining experience."
    },
  ];

  return (
    <div className="bg-[#272530] py-20">
      <div className="text-2xl md:text-4xl lg:text-5xl text-center font-quicksand font-bold">
        <h1>How to use LynkUp for restaurants?</h1>
      </div>

      <div className="pt-10 px-5 md:px-20 relative">
  <Swiper
    modules={[Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    pagination={{
      clickable: true,
      el: '.custom-pagination', // Target custom element
    }}
    autoplay={{ delay: 3000 }}
    breakpoints={{
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }}
  >
    {data.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="bg-[#100E19] px-7 py-8 rounded-lg">
          <FaRegistered className="text-white text-2xl mb-4" />
          <h1 className="mb-2 text-xl text-white">{item.title}</h1>
          <div className="w-[300px] md:w-[350px]">
            <p className="text-white">{item.desc}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Custom Pagination Dots Below Slider */}
  <div className="custom-pagination mt-6 flex justify-center space-x-2 "></div>
</div>
    </div>
  );
};

export default Resturant;
