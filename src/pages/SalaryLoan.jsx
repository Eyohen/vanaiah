import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import footerlogo from '../assets/footerlogo.png';
import Footer from '../components/Footer';

const SalaryLoan = () => {
  const navigate = useNavigate();


    // State variables for calculator
    const [loanAmount, setLoanAmount] = useState(100000);
    const [repaymentPeriod, setRepaymentPeriod] = useState(3);
    
    // Calculated values
    const [interestAmount, setInterestAmount] = useState(30000);
    const [totalRepayment, setTotalRepayment] = useState(130000);
    const [monthlyRepayment, setMonthlyRepayment] = useState(43333.33);
    
    // Focused field for animation
    const [focusedField, setFocusedField] = useState(null);
    
    // Calculate values whenever inputs change
    useEffect(() => {
      // Fixed 30% flat interest rate
      const interestRate = 0.30;
      
      // Calculate interest amount
      const interest = loanAmount * interestRate;
      setInterestAmount(interest);
      
      // Calculate total repayment
      const total = loanAmount + interest;
      setTotalRepayment(total);
      
      // Calculate monthly repayment
      const monthly = total / repaymentPeriod;
      setMonthlyRepayment(monthly);
    }, [loanAmount, repaymentPeriod]);
  
  // Track visible sections for animations
  const [visibleSections, setVisibleSections] = useState({
    calculator: false,
    buttons: false,
    tagline: false
  });

  // For animation effects on input changes
  const [netSalary, setNetSalary] = useState(100000);
  const [advanceAmount, setAdvanceAmount] = useState(100000);

  const [repaymentAmount, setRepaymentAmount] = useState(35000);
  const [interestFee, setInterestFee] = useState(5000);


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
<div className={`w-full md:w-7/12 lg:w-1/2 transform transition-all duration-1000 ease-out ${visibleSections ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
      <div className="bg-gradient-to-br from-[#000941] to-[#0a1463] rounded-2xl py-8 px-6 shadow-xl hover:shadow-2xl transition-all duration-500">
        <h2 className="text-white text-2xl font-bold text-center mb-6">
          Salary Loan Calculator
          <div className="w-16 h-1 bg-white mx-auto mt-2"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          <div className="transition-all duration-300 hover:scale-105">
            <p className="text-base sm:text-lg text-white mb-2">Loan Amount</p>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">₦</span>
              <input 
                type="number" 
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                onFocus={() => setFocusedField('amount')}
                onBlur={() => setFocusedField(null)}
                className={`bg-white px-8 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition-all focus:outline-none ${
                  focusedField === 'amount' ? 'ring-2 ring-blue-500' : ''
                }`}
              />
            </div>
            <p className="text-xs text-blue-200 mt-1">Enter the amount you want to borrow</p>
          </div>

          <div className="transition-all duration-300 hover:scale-105">
            <p className="text-base sm:text-lg text-white mb-2">Repayment Period</p>
            <select 
              value={repaymentPeriod}
              onChange={(e) => setRepaymentPeriod(Number(e.target.value))}
              onFocus={() => setFocusedField('period')}
              onBlur={() => setFocusedField(null)}
              className={`bg-white px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition-all focus:outline-none ${
                focusedField === 'period' ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <option value={1}>1 Month</option>
              <option value={2}>2 Months</option>
              <option value={3}>3 Months</option>
              <option value={6}>6 Months</option>
              <option value={12}>12 Months</option>
            </select>
            <p className="text-xs text-blue-200 mt-1">Select your preferred repayment period</p>
          </div>
          
          <div className="md:col-span-2 py-2 px-4 bg-blue-900/30 rounded-lg mt-2 mb-4">
            <p className="text-white text-center text-sm">Fixed Interest Rate: <span className="font-bold">30%</span> (Flat)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="transition-all duration-300 hover:scale-105">
            <p className="text-base sm:text-lg text-white mb-2">Monthly Repayment</p>
            <div className="border border-white bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-white/10">
              <span>₦</span>
              <span className="text-xl font-semibold">{monthlyRepayment.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>
          </div>

          <div className="transition-all duration-300 hover:scale-105">
            <p className="text-base sm:text-lg text-white mb-2">Interest Amount</p>
            <div className="border border-white bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-white/10">
              <span>₦</span>
              <span className="text-xl font-semibold">{interestAmount.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="w-full max-w-sm transition-all duration-300 hover:scale-105">
            <p className="text-lg text-white mb-2 text-center font-medium">Total Repayment</p>
            <div className="border-2 border-white bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-white/10">
              <span>₦</span>
              <span className="text-2xl font-bold">{totalRepayment.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <button 
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center"
          >
            Apply Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        {/* Information tooltip */}
        <div className="mt-8 p-3 bg-blue-900/30 rounded-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-200">
                This calculator uses a <span className="font-semibold">30% flat interest rate</span>. Interest is calculated once on the initial loan amount.
              </p>
            </div>
          </div>
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