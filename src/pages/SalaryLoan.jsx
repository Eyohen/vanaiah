// import React from 'react'
// import Navbar from '../components/Navbar'
// import { useNavigate } from 'react-router-dom'
// import footerlogo from '../assets/footerlogo.png'
// import Footer from '../components/Footer';

// const SalaryLoan = () => {
//     const navigate = useNavigate()
//   return (
//     <div>
//         <Navbar/>
//         <div className='px-4 md:px-64 py-24'>

// <div className='flex flex-col md:flex-row justify-center gap-y-4 md:gap-y-0 gap-x-48 py-16'>

  

// <div className="bg-[#000941] w-full max-w-3xl mx-auto rounded-2xl py-6 sm:py-9 px-4 sm:px-6">
//   {/* Top Section - 1 Column on Mobile, 2 Column on larger screens */}
//   <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-8 md:gap-x-12 gap-y-6 sm:gap-y-9">
//     <div>
//       <p className="text-base sm:text-lg text-white">Net Monthly Salary</p>
//       <div className="bg-white px-2 py-2 rounded-lg mt-1 w-full">N 100,000</div>
//     </div>

//     <div>
//       <p className="text-base sm:text-lg text-white">Advanced Amount Needed</p>
//       <div className="bg-white px-2 py-2 rounded-lg mt-1 w-full">N 100,000</div>
//     </div>

//     <div className="sm:col-span-1">
//       <p className="text-base sm:text-lg text-white">Repayment Period</p>
//       <div className="bg-white px-2 py-2 rounded-lg mt-1 w-full">N 100,000</div>
//     </div>
//   </div>

//   {/* Middle Section - Responsive Layout */}
//   <div className="flex flex-col sm:flex-col md:flex-row sm:justify-between mt-6 sm:mt-9 gap-6 sm:gap-4">
//     <div className="w-full sm:w-1/2 sm:pr-2">
//       <p className="text-sm sm:text-base md:text-md text-white">Repayment Amount (Per Salary Deduction)</p>
//       <div className="border border-white text-white px-2 py-2 rounded-lg mt-1 w-full">N 500,000</div>
//     </div>

//     <div className="w-full sm:w-1/2 sm:pl-2">
//       <p className="text-base sm:text-lg text-white text-center sm:text-center">Interest/Fee (if Any)</p>
//       <div className="border border-white text-white px-2 py-2 rounded-lg mt-1 w-full">N 500,000</div>
//     </div>
//   </div>

//   {/* Bottom Section - Centered */}
//   <div className="flex justify-center mt-6">
//     <div className="w-full sm:w-2/3 md:w-1/2 lg:max-w-md">
//       <p className="text-base sm:text-lg text-white text-center">Total Repayment</p>
//       <div className="border border-white text-white px-2 py-2 rounded-lg mt-1 w-full">N 500,000</div>
//     </div>
//   </div>
// </div>





// <div>
// <p className='font-bold text-4xl max-w-[400px]'>Salary Advance Loan Calculator</p>
// <p className='text-xl max-w-[400px] mt-4'>Get access to a portion of your salary before payday to handle urgent expenses without stress.</p>
// </div>


// </div>


// <div className='flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-center  gap-x-12'>
//     <button onClick={() => navigate('/amortization-loan')} className='bg-[#2B47FF] text-white text-xl px-4 py-2 rounded-md'>Loan Amortization Calculator</button>

//     <button onClick={() => navigate('/travel-loan')} className='px-4 py-2 rounded-md bg-gray-300 text-xl'>Travel loan Calculator</button>
// </div>

// <p className='text-center text-[#2B47FF] font-bold text-5xl mt-12'>Calculate your loan today and</p>

// <p className='text-center text-[#2B47FF] font-bold text-5xl'>and in just a few clicks</p>

//         </div>
          
//       {/* Footer */}
//    <Footer/>
//         </div>
//   )
// }

// export default SalaryLoan






import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import footerlogo from '../assets/footerlogo.png';
import Footer from '../components/Footer';

const SalaryLoan = () => {
  const navigate = useNavigate();
  
  // Track visible sections for animations
  const [visibleSections, setVisibleSections] = useState({
    calculator: false,
    buttons: false,
    tagline: false
  });

  // For animation effects on input changes
  const [netSalary, setNetSalary] = useState(100000);
  const [advanceAmount, setAdvanceAmount] = useState(100000);
  const [repaymentPeriod, setRepaymentPeriod] = useState(3);
  const [repaymentAmount, setRepaymentAmount] = useState(35000);
  const [interestFee, setInterestFee] = useState(5000);
  const [totalRepayment, setTotalRepayment] = useState(105000);

  // Recalculate values when inputs change
  useEffect(() => {
    // Simple calculation for demo purposes
    const interest = advanceAmount * 0.05;
    setInterestFee(interest);
    setRepaymentAmount((advanceAmount + interest) / repaymentPeriod);
    setTotalRepayment(advanceAmount + interest);
  }, [advanceAmount, repaymentPeriod]);

  // Detect scroll for animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['calculator', 'buttons', 'tagline'];
      const newVisibleSections = { ...visibleSections };
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight - 100;
          newVisibleSections[section] = isVisible;
        }
      });
      
      setVisibleSections(newVisibleSections);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24">
        
        {/* Calculator Section */}
        <div id="calculator" className="flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-y-0 md:gap-x-24 lg:gap-x-32 py-16">
          
          {/* Calculator Interface */}
          <div className={`w-full md:w-7/12 lg:w-1/2 transform transition-all duration-1000 ease-out ${visibleSections.calculator ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
            <div className="bg-gradient-to-br from-[#000941] to-[#0a1463] rounded-2xl py-8 px-6 shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* Top Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div className="transition-all duration-300 hover:scale-105">
                  <p className="text-base sm:text-lg text-white mb-2">Net Monthly Salary</p>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">N</span>
                    <input 
                      type="number" 
                      value={netSalary}
                      onChange={(e) => setNetSalary(Number(e.target.value))}
                      className="bg-white px-8 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition-all focus:outline-none"
                    />
                  </div>
                </div>

                <div className="transition-all duration-300 hover:scale-105">
                  <p className="text-base sm:text-lg text-white mb-2">Advanced Amount Needed</p>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">N</span>
                    <input 
                      type="number" 
                      value={advanceAmount}
                      onChange={(e) => setAdvanceAmount(Number(e.target.value))}
                      className="bg-white px-8 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition-all focus:outline-none"
                    />
                  </div>
                </div>

                <div className="transition-all duration-300 hover:scale-105">
                  <p className="text-base sm:text-lg text-white mb-2">Repayment Period (Months)</p>
                  <select 
                    value={repaymentPeriod}
                    onChange={(e) => setRepaymentPeriod(Number(e.target.value))}
                    className="bg-white px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition-all focus:outline-none"
                  >
                    <option value={1}>1 Month</option>
                    <option value={2}>2 Months</option>
                    <option value={3}>3 Months</option>
                    <option value={6}>6 Months</option>
                    <option value={12}>12 Months</option>
                  </select>
                </div>
              </div>

              {/* Middle Section - Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="transition-all duration-300 hover:scale-105">
                  <p className="text-base sm:text-lg text-white mb-2">Monthly Repayment</p>
                  <div className="border border-white bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-white/10">
                    <span>N</span>
                    <span className="text-xl font-semibold">{repaymentAmount.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
                  </div>
                </div>

                <div className="transition-all duration-300 hover:scale-105">
                  <p className="text-base sm:text-lg text-white mb-2 text-center md:text-left">Interest/Fee</p>
                  <div className="border border-white bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-white/10">
                    <span>N</span>
                    <span className="text-xl font-semibold">{interestFee.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Total */}
              <div className="flex justify-center mt-8">
                <div className="w-full max-w-sm transition-all duration-300 hover:scale-105">
                  <p className="text-lg text-white mb-2 text-center font-medium">Total Repayment</p>
                  <div className="border-2 border-white bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-white/10">
                    <span>N</span>
                    <span className="text-2xl font-bold">{totalRepayment.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
                  </div>
                </div>
              </div>
              
              {/* Apply Now Button */}
              <div className="flex justify-center mt-8">
                <button 
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          {/* Descriptive Text */}
          <div className={`w-full md:w-5/12 lg:w-1/3 transform transition-all duration-1000 ease-out ${visibleSections.calculator ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            <h2 className="font-bold text-4xl text-gray-900 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Salary Advance Loan Calculator
            </h2>
            <p className="text-xl text-gray-700 mt-6">
              Get access to a portion of your salary before payday to handle urgent expenses without stress.
            </p>
            <div className="mt-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-lg text-gray-700">Quick approval process</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-lg text-gray-700">Flexible repayment options</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-lg text-gray-700">No hidden fees or charges</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div id="buttons" className={`flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-center gap-x-8 mt-8 transform transition-all duration-1000 ease-out ${visibleSections.buttons ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <button 
            onClick={() => navigate('/amortization-loan')} 
            className="bg-[#2B47FF] text-white text-xl px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
          >
            Loan Amortization Calculator
          </button>

          <button 
            onClick={() => navigate('/travel-loan')} 
            className="bg-gray-200 text-gray-800 text-xl px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-300 hover:-translate-y-1 transition-all duration-300"
          >
            Travel Loan Calculator
          </button>
        </div>

        {/* Tagline */}
        <div id="tagline" className={`mt-24 mb-12 text-center transform transition-all duration-1000 ease-out ${visibleSections.tagline ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <h2 className="text-[#2B47FF] font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent animate-gradient">
            Calculate your loan today
          </h2>
          <p className="text-[#2B47FF] font-bold text-4xl md:text-5xl mt-2">
            and get approved in just a few clicks
          </p>
          
          {/* Added CTA Button */}
          <div className="mt-8">
            <button className="bg-[#FF6A2B] text-white text-xl px-8 py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-[#E05A22] hover:-translate-y-1 transition-all duration-300 animate-pulse">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
          
      {/* Footer */}
      <div className="transform transition-opacity duration-1000 ease-in">
        <Footer />
      </div>
    </div>
  );
};

export default SalaryLoan;