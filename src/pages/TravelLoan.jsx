import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const TravelLoan = () => {
  const navigate = useNavigate();
  
  // State variables for travel loan calculator
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [loanTenor, setLoanTenor] = useState(3); // in months
  
  // Calculated values
  const [monthlyInterestRate, setMonthlyInterestRate] = useState(0.027); // 2.7% monthly
  const [monthlyInterestAmount, setMonthlyInterestAmount] = useState(135000);
  const [totalInterestAmount, setTotalInterestAmount] = useState(405000);
  const [totalRepayment, setTotalRepayment] = useState(5405000);
  
  // Currency format
  const [currencyType, setCurrencyType] = useState('NGN');
  
  // Focused field for animation
  const [focusedField, setFocusedField] = useState(null);
  
  // Track visible sections for animations
  const [visibleSections, setVisibleSections] = useState({
    calculator: false,
    buttons: false,
    tagline: false
  });

  // Calculate values whenever inputs change
  useEffect(() => {
    // Fixed 2.7% monthly interest rate
    const monthlyRate = 0.027;
    setMonthlyInterestRate(monthlyRate);
    
    // Calculate monthly interest amount
    const monthlyInterest = loanAmount * monthlyRate;
    setMonthlyInterestAmount(monthlyInterest);
    
    // Calculate total interest amount
    const totalInterest = monthlyInterest * loanTenor;
    setTotalInterestAmount(totalInterest);
    
    // Calculate total repayment
    // Note: Principal is paid at the end of tenor plus total interest
    const total = loanAmount + totalInterest;
    setTotalRepayment(total);
  }, [loanAmount, loanTenor]);

  // Format number with currency symbol
  const formatCurrency = (amount) => {
    const symbols = {
      'NGN': '₦',
      'USD': '$',
      'EUR': '€',
      'GBP': '£'
    };
    
    const symbol = symbols[currencyType] || '₦';
    return `${symbol}${amount.toLocaleString(undefined, {maximumFractionDigits: 2})}`;
  };

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
              <h2 className="text-white text-2xl font-bold text-center mb-6">
                Travel Loan Calculator
                <div className="w-16 h-1 bg-white mx-auto mt-2"></div>
              </h2>
              
              {/* Currency Selector */}
              {/* <div className="flex justify-end mb-4">
                <div className="inline-flex rounded-md shadow-sm">
                  {['NGN', 'USD', 'EUR', 'GBP'].map((currency) => (
                    <button
                      key={currency}
                      type="button"
                      onClick={() => setCurrencyType(currency)}
                      className={`px-3 py-1 text-sm font-medium ${
                        currencyType === currency 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      } ${
                        currency === 'NGN' ? 'rounded-l-lg' : 
                        currency === 'GBP' ? 'rounded-r-lg' : ''
                      }`}
                    >
                      {currency}
                    </button>
                  ))}
                </div>
              </div> */}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div className="transition-all duration-300 hover:scale-105">
                  <p className="text-base sm:text-lg text-white mb-2">Loan Amount</p>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
                      {currencyType === 'NGN' ? '₦' : 
                       currencyType === 'USD' ? '$' : 
                       currencyType === 'EUR' ? '€' : '£'}
                    </span>
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
                  <p className="text-xs text-blue-200 mt-1">Enter the travel loan amount you need</p>
                </div>

                <div className="transition-all duration-300 hover:scale-105">
                  <p className="text-base sm:text-lg text-white mb-2">Loan Tenor (Months)</p>
                  <select 
                    value={loanTenor}
                    onChange={(e) => setLoanTenor(Number(e.target.value))}
                    onFocus={() => setFocusedField('tenor')}
                    onBlur={() => setFocusedField(null)}
                    className={`bg-white px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition-all focus:outline-none ${
                      focusedField === 'tenor' ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <option value={1}>1 Month</option>
                    <option value={2}>2 Months</option>
                    <option value={3}>3 Months</option>
                    <option value={6}>6 Months</option>
                    <option value={12}>12 Months</option>
                  </select>
                  <p className="text-xs text-blue-200 mt-1">Select your travel loan duration</p>
                </div>
                
                <div className="md:col-span-2 py-2 px-4 bg-blue-900/30 rounded-lg mt-2 mb-4">
                  <p className="text-white text-center text-sm">Monthly Interest Rate: <span className="font-bold">2.7%</span></p>
                </div>
              </div>

              {/* Results Section */}
              <div className="mt-6">
                {/* Monthly Interest */}
                <div className="transition-all duration-300 hover:scale-105 mb-4">
                  <p className="text-base sm:text-lg text-white mb-2">Monthly Interest Payment</p>
                  <div className="border border-white bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-white/10">
                    <span className="text-xl font-semibold">{formatCurrency(monthlyInterestAmount)}</span>
                  </div>
                  <p className="text-xs text-blue-200 mt-1">Interest paid each month during loan tenor</p>
                </div>
                
                {/* Total Interest */}
                <div className="transition-all duration-300 hover:scale-105 mb-4">
                  <p className="text-base sm:text-lg text-white mb-2">Total Interest Amount</p>
                  <div className="border border-white bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-white/10">
                    <span className="text-xl font-semibold">{formatCurrency(totalInterestAmount)}</span>
                  </div>
                  <p className="text-xs text-blue-200 mt-1">Total interest paid over the entire loan period</p>
                </div>
                
                {/* Total Repayment */}
                <div className="flex justify-center mt-6">
                  <div className="w-full max-w-sm transition-all duration-300 hover:scale-105">
                    <p className="text-lg text-white mb-2 text-center font-medium">Total Repayment</p>
                    <div className="border-2 border-white bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-white/10">
                      <span className="text-2xl font-bold">{formatCurrency(totalRepayment)}</span>
                    </div>
                    <p className="text-xs text-blue-200 text-center mt-1">Principal + Total Interest</p>
                  </div>
                </div>
              </div>
              
              {/* Apply Button */}
              <div className="flex justify-center mt-8">
                <button 
                onClick={() => navigate('/applynow')}
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
                      This calculator uses a <span className="font-semibold">2.7% monthly interest rate</span>. Principal amount is paid at the end of the loan tenor along with total interest.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Descriptive Text */}
          <div className={`w-full md:w-5/12 lg:w-1/3 transform transition-all duration-1000 ease-out ${visibleSections.calculator ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            <h2 className="font-bold text-4xl text-gray-900 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Travel Loan Calculator
            </h2>
            <p className="text-xl text-gray-700 mt-6">
              Turn your dream trip into reality with flexible travel financing and easy repayment options.
            </p>
            
            <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">How Travel Loans Work</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Apply for a travel loan</h4>
                    <p className="text-gray-600 mt-1">Submit your application with required documentation</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Pay monthly interest</h4>
                    <p className="text-gray-600 mt-1">Make monthly interest payments during the loan period</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Repay principal at end of tenor</h4>
                    <p className="text-gray-600 mt-1">The principal amount is paid back in full at the end of your loan term</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-blue-800">Perfect for:</h4>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>International vacations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Relocation expenses</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Study abroad programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div id="buttons" className={`flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-center gap-x-8 mt-8 transform transition-all duration-1000 ease-out ${visibleSections.buttons ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <button 
            onClick={() => navigate('/salary-loan')} 
            className="bg-gray-200 text-gray-800 text-xl px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-300 hover:-translate-y-1 transition-all duration-300"
          >
            Salary Loan Calculator
          </button>

          <button 
            onClick={() => navigate('/amortization-loan')} 
            className="bg-[#2B47FF] text-white text-xl px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
          >
            Loan Amortization Calculator
          </button>
        </div>

        {/* Tagline */}
        <div id="tagline" className={`mt-24 mb-12 text-center transform transition-all duration-1000 ease-out ${visibleSections.tagline ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <h2 className="text-[#2B47FF] font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent animate-gradient">
            Calculate your travel loan today
          </h2>
          <p className="text-[#2B47FF] font-bold text-4xl md:text-5xl mt-2">
            and explore the world with confidence
          </p>
          
          {/* Added CTA Button */}
          <div className="mt-8">
            <button className="bg-[#FF6A2B] text-white text-xl px-8 py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-[#E05A22] hover:-translate-y-1 transition-all duration-300 animate-pulse">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
          
      {/* Footer */}
      <div className="transform transition-opacity duration-1000 ease-in">
        <Footer />
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        .animate-gradient {
          animation: gradient 8s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default TravelLoan;