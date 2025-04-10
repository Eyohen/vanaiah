import React, { useState } from "react";
import { TbCircleMinus, TbCirclePlus } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Navbar from "../components/Navbar";
import unanswered from '../assets/unanswered.png'
import Footer from '../components/Footer';


const FAQ = () => {
  // Use an array of objects for FAQ items
  const [faqItems, setFaqItems] = useState([
    {
      id: 1,
      question: "What types of loans does VANAIAH offer?",
      answer: "You can apply for a loan by visiting our website or contacting our customer service team. The application process is quick and straightforward, requiring basic personal and financial information.",
      isOpen: false
    },
    {
      id: 2,
      question: "What documents do I need to provide?",
      answer: "Yes! You can start with our free plan, which offers core features to help you manage your inventory for 14 days only.",
      isOpen: false
    },
    {
      id: 3,
      question: "How long does it take to receive my funds?",
      answer: "After our 14 days free plan, you will be required to pay our subscription fee (monthly) which enables you enjoy our premium features for advanced analytics and collaborative features.",
      isOpen: false
    },
    {
      id: 4,
      question: "Are there any hidden fees?",
      answer: "We take data security seriously. Your information is encrypted, and we adhere to industry-standard practices to ensure your data remains private and protected.",
      isOpen: false
    },
    {
      id: 5,
      question: "Are there any hidden fees?",
      answer: "Definitely! The system is designed with small businesses in mind. It’s affordable, user-friendly, and helps save time by automating repetitive tasks.",
      isOpen: false
    },

    
  ]);

  const toggleFAQ = (id) => {
    setFaqItems(faqItems.map(item => 
      item.id === id ? { ...item, isOpen: !item.isOpen } : item
    ));
  };

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 xl:px-[300px] py-12 max-w-[1920px] mx-auto">
        <Navbar/>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center pt-16">
        Frequently asked questions
      </h2>

      <p className='text-center text-xl text-gray-500 mt-8 mb-8'>More than 100+ trusted customers</p>

      <div className="flex flex-col md:flex-row justify-center gap-y-4 md:gap-y-0 gap-x-12">
        <div>
        <button className="bg-[#2B47FF] text-white px-4 py-2 rounded-md">About Us</button>
      </div>

      <div>
        <button className="bg-gray-200 px-4 py-2 rounded-md">Our Service</button>
      </div>

      <div>
        <button className="bg-gray-200 px-4 py-2 rounded-md">Support</button>
      </div>

      </div>

      <div className="space-y-4 mt-9">
        {faqItems.map((item) => (
          <div key={item.id} className="border rounded-lg hover:shadow-md transition-shadow bg-gray-200">
            <button
              onClick={() => toggleFAQ(item.id)}
              className="w-full text-left p-6 focus:outline-none"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-medium pr-8">
                  {item.question}
                </h3>
                <div className="flex-shrink-0 mt-1">
                  {item.isOpen ? (
                    <IoIosArrowUp className="w-6 h-6 text-gray-500" />
                  ) : (
                    <IoIosArrowDown className="w-6 h-6 text-gray-500" />
                  )}
                </div>
              </div>
              {item.isOpen && (
                <p className="mt-4 text-gray-600 text-base sm:text-lg bg-[#BFC2D7] rounded-xl p-4">
                  {item.answer}
                </p>
              )}
            </button>
          </div>
        ))}
      </div>

<p className="font-bold text-center text-4xl mt-12">Have unanswered questions?</p>
<div className="flex justify-center mt-12"><img src={unanswered}/></div>


<Footer/>
    </div>
  );
};



export default FAQ;