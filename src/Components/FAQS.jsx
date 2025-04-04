import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const FAQS = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const faqs = [
    {
      question: "Is LynkUp free to use?",
      answer:
        "Yes! Restaurants don’t pay creators, and creators receive experiences in exchange for content.",
    },
    {
      question: "How do I know if my booking is confirmed?",
      answer:
        "You’ll receive a confirmation via the app once the restaurant approves your request.",
    },
    {
      question: "What happens if I don’t post my content on time?",
      answer:
        "A strike will be added to your profile. Three strikes will lead to account suspension.",
    },
    {
      question: "Can restaurants request specific types of content?",
      answer:
        "Yes, every venue has specific content requirements outlined in the app.",
    },
    {
      question: "How does LynkUp ensure fairness in collaborations?",
      answer:
        "We use engagement-based selection criteria to ensure genuine creators get opportunities.",
    },
  ];
  const Resturant = [
    {
      question: "Can cloud kitchens/bars use LynkUp?",
      answer:
        "Yes, LynkUp is open to restaurants, cafes, cloud kitchens, bars, and event organizers.",
    },
    {
      question: "How do I choose the right creators for my brand?",
      answer:
        "You can review applicants and select creators based on their engagement, content quality, and relevance to your brand.",
    },
    {
      question: "Can I set specific content requirements?",
      answer:
        "Yes, you can outline content expectations, including format, hashtags, and mentions, in your offer details.",
    },
    {
      question: "How do I track the content created for my venue?",
      answer:
        "You can monitor tagged posts and content submissions through the LynkUp platform updates.",
    },
    {
      question: "Can I collaborate with the same creator multiple times?",
      answer:
        "Yes, you can accept creators for repeat collaborations if their content aligns with your brand’s vision.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-6 lg:px-20 py-20 ">
      <h1 className="text-2xl lg:text-3xl font-bold font-poppins mb-8 text-center">
        Frequently Asked Questions
      </h1>
      <div className="divide-y divide-gray-200">
        <h1 className="text-2xl lg:text-3xl font-bold font-poppins mb-8">
          Creators
        </h1>
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h2 className="text-lg lg:text-xl font-semibold font-poppins">
                {index + 1}. {faq.question}
              </h2>
              <span
                className={`transform transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                &#9660;
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-3 text-sm lg:text-base font-Lexend text-gray-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="divide-y divide-gray-200 py-5">
        <h1 className="text-2xl lg:text-3xl font-bold font-poppins mb-8 py-5">
        Restaurants        </h1>
        {Resturant.map((faq, index) => (
          <div key={index} className="py-4">
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h2 className="text-lg lg:text-xl font-semibold font-poppins">
                {index + 1}. {faq.question}
              </h2>
              <span
                className={`transform transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                &#9660;
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-3 text-sm lg:text-base font-Lexend text-gray-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;
