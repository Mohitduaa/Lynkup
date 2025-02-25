import React from 'react'
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
    <div>
        <div className=" py-10 px-6 md:px-60">
      <h2 className="text-3xl md:text-3xl font-bold text-center mb-8 font-poppins">
        How it works
      </h2>

      <div className="md:mx-20 grid md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative bg-[#272530] p-6 rounded-xl shadow-lg flex flex-col gap-2 ${step.size}`}
          >
            <span className="text-6xl">{step.icon}</span>

            <h3 className="text-xl font-bold">{step.title}</h3>
            <h4>{step.subheading}</h4>

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