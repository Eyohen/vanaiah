import React, { useState } from "react";
import { TbCircleMinus, TbCirclePlus } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


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
      question: "How do I apply for a loan?",
      answer: "You can apply for a loan by visiting our website or contacting our customer service team. The application process is quick and straightforward, requiring basic personal and financial information.",
      isOpen: false
    },
    {
      id: 3,
      question: "What documents do I need to provide?",
      answer: "Typically, you'll need to provide identification (such as a government-issued ID), proof of income (like payslips or bank statements), and any additional documents specific to the type of loan you're applying for.",
      isOpen: false
    },
    {
      id: 4,
      question: "How long does it take to receive my funds?",
      answer: "Once your application is approved, funds are typically disbursed within 24 to 48 hours, depending on the loan type and your financial institution.",
      isOpen: false
    },
    {
      id: 5,
      question: "Are there any hidden fees?",
      answer: "No, we believe in transparency. All fees and charges will be clearly outlined in your loan agreement, and there are no hidden costs.",
      isOpen: false
    },
    {
      id: 6,
      question: "Can I repay my loan early?",
      answer: "Yes, you can repay your loan early without incurring any penalties. We encourage responsible financial management and appreciate early repayments.",
      isOpen: false
    },
    {
      id: 7,
      question: "What if I have trouble making my payments?",
      answer: "If you’re facing difficulties, please contact our customer service team as soon as possible. We’re here to help and can discuss options that may be available to assist you.",
      isOpen: false
    },
    {
      id: 8,
      question: "Is my personal information safe with VANAIAH?",
      answer: "Absolutely. We take your privacy seriously and employ strict security measures to protect your personal and financial information.",
      isOpen: false
    },
    {
      id: 9,
      question: "Do you provide financial advisory services?",
      answer: "Yes, we offer financial advisory services to help you make informed decisions and optimize your financial planning. Our experts are here to guide you.",
      isOpen: false
    },
    {
      id: 10,
      question: "Who can apply for a loan with VANAIAH?",
      answer: "Our services are available to both individuals and SMEs based in Lagos State. Applicants must meet specific eligibility criteria, which will be outlined during the application process.",
      isOpen: false
    },

    
  ]);

  const toggleFAQ = (id) => {
    setFaqItems(faqItems.map(item => 
      item.id === id ? { ...item, isOpen: !item.isOpen } : item
    ));
  };

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 xl:px-[300px] w-[350px] md:w-[1000px]">

    
      <div className="space-y-4">
        {faqItems.map((item) => (
          <div key={item.id} className="border rounded-lg hover:shadow-md transition-shadow">
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
                <p className="mt-4 text-gray-600 text-base sm:text-lg">
                  {item.answer}
                </p>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// FAQ items data
const faqData = [
  {
    id: 1,
    question: "How can Pigeonhire help my business grow?",
    answer: "Pigeonhire connects your business with targeted communities and professionals across the globe, enabling you to expand your reach, engage with key audiences, and foster strategic partnerships. Whether you're looking to increase brand awareness, drive sales, or build relationships, our platform provides the tools and access necessary to achieve your goals."
  },
  {
    id: 2,
    question: "What makes Pigeonhire different from other community engagement platforms?",
    answer: "Unlike other platforms, Pigeonhire offers a unique combination of local and global community access, precise targeting capabilities, and flexible pricing options. Our focus on creating meaningful connections and providing detailed analytics sets us apart, ensuring that your engagement efforts are effective and measurable."
  },
  // ... Add all other FAQ items here
];

export default FAQ;