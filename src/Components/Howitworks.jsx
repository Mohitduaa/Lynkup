import React from 'react'
const steps = [
    {
      id: "01",
      title: "Welcome",
      description:
        "Hey there! We're thrilled to have you on our app. On Invyed, we connect amazing content creators with exciting opportunities from businesses, music venues, movie premieres, and more – all for free!",
      icon: "👋",
      size: "row-span-1"
    },
    {
      id: "02",
      title: "During your visit",
      description:
        "Take beautiful content like we know you can! Showcase the venue and your experience as best as possible. If you can’t make it, please cancel through the app. If you don’t cancel over 3 times, you will be banned from future opportunities.",
      icon: "🎁",
      size: "row-span-3"

    },
    {
      id: "03",
      title: "After",
      description:
        "Post your content within 48 hours (minimum of 2x IG stories or 1x TikTok). Remember to mention the relevant accounts and hashtags.",
      icon: "📸",
      size: "row-span-3"
    },
    {
      id: "04",
      title: "Extra!",
      description:
        "If you add @invyed.app Ambassador in your IG/TT Bio, this will increase your chances of being accepted into ‘request’ events/offers!",
      icon: "⭐",
      size: "row-span-1"
    },
  ];
const Howitworks = () => {
  return (
    <div>
        <div className=" py-10 px-6 md:px-60">
      <h2 className="text-3xl md:text-3xl font-bold text-center mb-8 font-poppins">
        How it works
      </h2>

      <div className="mx-20 grid md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative bg-[#272530] p-6 rounded-xl shadow-lg flex flex-col gap-2 ${step.size}`}
          >
            <span className="text-6xl">{step.icon}</span>

            <h3 className="text-xl font-bold">{step.title}</h3>

            <p className=" text-sm font-Lexend font-extralight mb-2">{step.description}</p>

            <div className="absolute -top-3 right-3 bg-[#653FCC] text-white font-bold text-sm w-10 h-10 flex items-center justify-center rounded-full">
              {step.id}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Howitworks