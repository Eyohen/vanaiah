// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../components/Footer';

// const AmortizationLoan = () => {
//   const navigate = useNavigate();
  
//   // Track visible sections for animations
//   const [visibleSections, setVisibleSections] = useState({
//     calculator: false,
//     buttons: false,
//     tagline: false
//   });

//   // For animation effects on input changes and functional calculator
//   const [loanAmount, setLoanAmount] = useState(100000);
//   const [interestRate, setInterestRate] = useState(5); // Percentage
//   const [loanTerm, setLoanTerm] = useState(12); // Months
//   const [monthlyPayment, setMonthlyPayment] = useState(8560);
//   const [totalInterest, setTotalInterest] = useState(2720);
//   const [totalRepayment, setTotalRepayment] = useState(102720);
  
//   // Amortization table state
//   const [showAmortizationTable, setShowAmortizationTable] = useState(false);
//   const [amortizationSchedule, setAmortizationSchedule] = useState([]);

//   // Calculate loan details
//   useEffect(() => {
//     // Convert annual interest rate to monthly and decimal
//     const monthlyInterestRate = (interestRate / 100) / 12;
    
//     // Calculate monthly payment using the amortization formula
//     const monthlyPayment = loanAmount * monthlyInterestRate * 
//       Math.pow(1 + monthlyInterestRate, loanTerm) / 
//       (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);
    
//     // If interest rate is 0, monthly payment is simply loan amount divided by term
//     const calculatedMonthlyPayment = isNaN(monthlyPayment) || !isFinite(monthlyPayment) 
//       ? loanAmount / loanTerm 
//       : monthlyPayment;
    
//     const totalPayment = calculatedMonthlyPayment * loanTerm;
//     const totalInterest = totalPayment - loanAmount;
    
//     setMonthlyPayment(calculatedMonthlyPayment);
//     setTotalInterest(totalInterest);
//     setTotalRepayment(totalPayment);
    
//     // Generate amortization schedule
//     const schedule = [];
//     let remainingBalance = loanAmount;
    
//     for (let i = 1; i <= loanTerm; i++) {
//       const interestPayment = remainingBalance * monthlyInterestRate;
//       const principalPayment = calculatedMonthlyPayment - interestPayment;
//       remainingBalance -= principalPayment;
      
//       schedule.push({
//         month: i,
//         payment: calculatedMonthlyPayment,
//         principalPayment,
//         interestPayment,
//         remainingBalance: remainingBalance < 0 ? 0 : remainingBalance
//       });
//     }
    
//     setAmortizationSchedule(schedule);
//   }, [loanAmount, interestRate, loanTerm]);

//   // Detect scroll for animations
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['calculator', 'buttons', 'tagline'];
//       const newVisibleSections = { ...visibleSections };
      
//       sections.forEach(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           const isVisible = rect.top < window.innerHeight - 100;
//           newVisibleSections[section] = isVisible;
//         }
//       });
      
//       setVisibleSections(newVisibleSections);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Check visibility on initial load
    
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [visibleSections]);

//   return (
//     <div className="min-h-screen bg-white overflow-x-hidden">
//       <Navbar />
//       <div className="container mx-auto px-6 md:px-12 lg:px-24 py-24">
        
//         {/* Calculator Section */}
//         <div id="calculator" className="flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-y-0 md:gap-x-16 lg:gap-x-24 py-16">
          
//           {/* Calculator Interface */}
//           <div className={`w-full md:w-7/12 lg:w-1/2 transform transition-all duration-1000 ease-out ${visibleSections.calculator ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
//             <div className="bg-gradient-to-br from-[#000941] to-[#0a1463] rounded-2xl py-8 px-6 shadow-xl hover:shadow-2xl transition-all duration-500">
//               {/* Top Section */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
//                 <div className="transition-all duration-300 hover:scale-105">
//                   <p className="text-base sm:text-lg text-white mb-2">Loan Amount</p>
//                   <div className="relative">
//                     <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">N</span>
//                     <input 
//                       type="number" 
//                       value={loanAmount}
//                       onChange={(e) => setLoanAmount(Number(e.target.value))}
//                       className="bg-white px-8 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition-all focus:outline-none"
//                     />
//                   </div>
//                 </div>

//                 <div className="transition-all duration-300 hover:scale-105">
//                   <p className="text-base sm:text-lg text-white mb-2">Interest Rate (%)</p>
//                   <input 
//                     type="number" 
//                     min="0"
//                     max="100"
//                     value={interestRate}
//                     onChange={(e) => setInterestRate(Number(e.target.value))}
//                     className="bg-white px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition-all focus:outline-none"
//                   />
//                 </div>

//                 <div className="transition-all duration-300 hover:scale-105">
//                   <p className="text-base sm:text-lg text-white mb-2">Loan Term (Months)</p>
//                   <select 
//                     value={loanTerm}
//                     onChange={(e) => setLoanTerm(Number(e.target.value))}
//                     className="bg-white px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition-all focus:outline-none"
//                   >
//                     <option value={3}>3 Months</option>
//                     <option value={6}>6 Months</option>
//                     <option value={12}>12 Months</option>
//                     <option value={24}>24 Months</option>
//                     <option value={36}>36 Months</option>
//                     <option value={48}>48 Months</option>
//                     <option value={60}>60 Months</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Middle Section - Results */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
//                 <div className="transition-all duration-300 hover:scale-105">
//                   <p className="text-base sm:text-lg text-white mb-2">Monthly Payment</p>
//                   <div className="border border-white bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-white/10">
//                     <span>N</span>
//                     <span className="text-xl font-semibold">{monthlyPayment.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
//                   </div>
//                 </div>

//                 <div className="transition-all duration-300 hover:scale-105">
//                   <p className="text-base sm:text-lg text-white mb-2">Total Interest</p>
//                   <div className="border border-white bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-white/10">
//                     <span>N</span>
//                     <span className="text-xl font-semibold">{totalInterest.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom Section - Total */}
//               <div className="flex justify-center mt-8">
//                 <div className="w-full max-w-sm transition-all duration-300 hover:scale-105">
//                   <p className="text-lg text-white mb-2 text-center font-medium">Total Repayment</p>
//                   <div className="border-2 border-white bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-white/10">
//                     <span>N</span>
//                     <span className="text-2xl font-bold">{totalRepayment.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Buttons */}
//               <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
//                 <button 
//                   onClick={() => setShowAmortizationTable(!showAmortizationTable)}
//                   className="bg-white text-[#000941] text-lg font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
//                 >
//                   {showAmortizationTable ? "Hide Schedule" : "View Amortization Schedule"}
//                 </button>
                
//                 <button 
//                   className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
//                 >
//                   Apply Now
//                 </button>
//               </div>
//             </div>
            
//             {/* Amortization Table */}
//             {showAmortizationTable && (
//               <div className="mt-8 bg-white rounded-xl shadow-lg p-4 overflow-x-auto animate-fade-in">
//                 <h3 className="text-xl font-bold text-[#000941] mb-4">Amortization Schedule</h3>
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Principal</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {amortizationSchedule.map((row, index) => (
//                       <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.month}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">N {row.payment.toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">N {row.principalPayment.toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">N {row.interestPayment.toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">N {row.remainingBalance.toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>

//           {/* Descriptive Text */}
//           <div className={`w-full md:w-5/12 lg:w-1/3 transform transition-all duration-1000 ease-out ${visibleSections.calculator ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
//             <h2 className="font-bold text-4xl text-gray-900 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent animate-gradient">
//               Loan Amortization Calculator
//             </h2>
//             <p className="text-xl text-gray-700 mt-6">
//               Plan your loan repayments with detailed breakdowns, ensuring you stay in control of your finances.
//             </p>
            
//             <div className="mt-8">
//               <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-sm">
//                 <h3 className="text-xl font-semibold text-blue-800 mb-4">Understanding Amortization</h3>
//                 <p className="text-gray-700">
//                   Amortization shows how each payment is applied to principal and interest over time. Early payments go more toward interest, while later payments reduce principal faster.
//                 </p>
                
//                 <div className="mt-6 space-y-4">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
//                       <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
//                       </svg>
//                     </div>
//                     <div className="ml-4">
//                       <h4 className="text-lg font-medium text-gray-900">Detailed Schedule</h4>
//                       <p className="text-gray-600">Month-by-month breakdown of your payments</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
//                       <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                       </svg>
//                     </div>
//                     <div className="ml-4">
//                       <h4 className="text-lg font-medium text-gray-900">Financial Planning</h4>
//                       <p className="text-gray-600">See how interest varies over the loan term</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Navigation Buttons */}
//         <div id="buttons" className={`flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-center gap-x-8 mt-8 transform transition-all duration-1000 ease-out ${visibleSections.buttons ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
//           <button 
//             onClick={() => navigate('/salary-loan')} 
//             className="bg-[#2B47FF] text-white text-xl px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
//           >
//             Salary Loan Calculator
//           </button>

//           <button 
//             onClick={() => navigate('/travel-loan')} 
//             className="bg-gray-200 text-gray-800 text-xl px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-300 hover:-translate-y-1 transition-all duration-300"
//           >
//             Travel Loan Calculator
//           </button>
//         </div>

//         {/* Tagline */}
//         <div id="tagline" className={`mt-24 mb-12 text-center transform transition-all duration-1000 ease-out ${visibleSections.tagline ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
//           <h2 className="text-[#2B47FF] font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent animate-gradient">
//             Calculate your loan today
//           </h2>
//           <p className="text-[#2B47FF] font-bold text-4xl md:text-5xl mt-2">
//             and get approved in just a few clicks
//           </p>
          
//           {/* Added CTA Button */}
//           <div className="mt-8">
//             <button className="bg-[#FF6A2B] text-white text-xl px-8 py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-[#E05A22] hover:-translate-y-1 transition-all duration-300 animate-pulse">
//               Start Your Application
//             </button>
//           </div>
//         </div>
//       </div>
          
//       {/* Footer */}
//       <div className="transform transition-opacity duration-1000 ease-in">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default AmortizationLoan;








import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const AmortizationLoan = () => {
  const navigate = useNavigate();
  
  // Track visible sections for animations
  const [visibleSections, setVisibleSections] = useState({
    calculator: false,
    investmentCalculator: false,
    buttons: false,
    tagline: false
  });

  // Toggle between loan and investment calculators
  const [activeTab, setActiveTab] = useState('loan'); // 'loan' or 'investment'

  // For animation effects on input changes and functional calculator
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(30); // Percentage - 30% per annum
  const [loanTerm, setLoanTerm] = useState(12); // Months
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);
  
  // Investment calculator states
  const [investmentAmount, setInvestmentAmount] = useState(1000000);
  const [investmentPeriod, setInvestmentPeriod] = useState(5); // Months
  const [monthlyInterest, setMonthlyInterest] = useState(18000); // 1.8% per month
  const [totalReturn, setTotalReturn] = useState(1090000);
  
  // Focused field for animation
  const [focusedField, setFocusedField] = useState(null);
  
  // Amortization table state
  const [showAmortizationTable, setShowAmortizationTable] = useState(false);
  const [amortizationSchedule, setAmortizationSchedule] = useState([]);

  // Calculate loan details
  useEffect(() => {
    if (activeTab === 'loan') {
      // Convert annual interest rate to monthly and decimal
      const monthlyInterestRate = (interestRate / 100) / 12;
      
      // Calculate monthly payment using the amortization formula
      const monthlyPayment = loanAmount * monthlyInterestRate * 
        Math.pow(1 + monthlyInterestRate, loanTerm) / 
        (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);
      
      // If interest rate is 0, monthly payment is simply loan amount divided by term
      const calculatedMonthlyPayment = isNaN(monthlyPayment) || !isFinite(monthlyPayment) 
        ? loanAmount / loanTerm 
        : monthlyPayment;
      
      const totalPayment = calculatedMonthlyPayment * loanTerm;
      const totalInterest = totalPayment - loanAmount;
      
      setMonthlyPayment(calculatedMonthlyPayment);
      setTotalInterest(totalInterest);
      setTotalRepayment(totalPayment);
      
      // Generate amortization schedule
      const schedule = [];
      let remainingBalance = loanAmount;
      
      for (let i = 1; i <= loanTerm; i++) {
        const interestPayment = remainingBalance * monthlyInterestRate;
        const principalPayment = calculatedMonthlyPayment - interestPayment;
        remainingBalance -= principalPayment;
        
        schedule.push({
          month: i,
          payment: calculatedMonthlyPayment,
          principalPayment,
          interestPayment,
          remainingBalance: remainingBalance < 0 ? 0 : remainingBalance
        });
      }
      
      setAmortizationSchedule(schedule);
    }
  }, [loanAmount, interestRate, loanTerm, activeTab]);

  // Calculate investment details
  useEffect(() => {
    if (activeTab === 'investment') {
      // Monthly interest rate is 1.8% - as per specification
      const monthlyInterestRate = 0.018;
      
      // Calculate monthly interest amount
      const monthlyInterestAmount = investmentAmount * monthlyInterestRate;
      setMonthlyInterest(monthlyInterestAmount);
      
      // Calculate total return based on formula: Principal + (Principal × 1.8% × Period)
      const totalReturn = investmentAmount + (investmentAmount * monthlyInterestRate * investmentPeriod);
      setTotalReturn(totalReturn);
      
      // Generate investment schedule for display
      const schedule = [];
      let accumulatedValue = investmentAmount;
      
      for (let i = 1; i <= investmentPeriod; i++) {
        const interestForMonth = investmentAmount * monthlyInterestRate;
        accumulatedValue += interestForMonth;
        
        schedule.push({
          month: i,
          interestEarned: interestForMonth,
          accumulatedValue
        });
      }
      
      setAmortizationSchedule(schedule);
    }
  }, [investmentAmount, investmentPeriod, activeTab]);

  // Format currency
  const formatCurrency = (amount) => {
    return '₦' + amount.toLocaleString(undefined, {maximumFractionDigits: 2});
  };

  // Detect scroll for animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['calculator', 'investmentCalculator', 'buttons', 'tagline'];
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
        
        {/* Calculator Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              onClick={() => {
                setActiveTab('loan');
                setShowAmortizationTable(false);
              }}
              className={`px-6 py-3 text-lg font-medium rounded-l-lg ${
                activeTab === 'loan' 
                  ? 'bg-[#2B47FF] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Loan Amortization
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('investment');
                setShowAmortizationTable(false);
              }}
              className={`px-6 py-3 text-lg font-medium rounded-r-lg ${
                activeTab === 'investment' 
                  ? 'bg-[#2B47FF] text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Investment Calculator
            </button>
          </div>
        </div>
        
        {/* Calculator Section */}
        <div id="calculator" className={`flex flex-col md:flex-row justify-center items-start gap-y-8 md:gap-y-0 md:gap-x-16 lg:gap-x-24 py-16 ${activeTab === 'loan' ? 'block' : 'hidden'}`}>
          
          {/* Loan Calculator Interface */}
          <div className={`w-full md:w-7/12 lg:w-1/2 transform transition-all duration-1000 ease-out ${visibleSections.calculator ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
            <div className="bg-gradient-to-br from-[#000941] to-[#0a1463] rounded-2xl py-8 px-6 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h2 className="text-white text-2xl font-bold text-center mb-6">
                Loan Amortization Calculator
                <div className="w-16 h-1 bg-white mx-auto mt-2"></div>
              </h2>
              
              {/* Top Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div className="transition-all duration-300 hover:scale-105">
                  <p className="text-base sm:text-lg text-white mb-2">Loan Amount</p>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">₦</span>
                    <input 
                      type="number" 
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      onFocus={() => setFocusedField('loanAmount')}
                      onBlur={() => setFocusedField(null)}
                      className={`bg-white px-8 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition-all focus:outline-none ${
                        focusedField === 'loanAmount' ? 'ring-2 ring-blue-500' : ''
                      }`}
                    />
                  </div>
                  <p className="text-xs text-blue-200 mt-1">Enter your loan amount</p>
                </div>

                <div className="transition-all duration-300 hover:scale-105">
                  <p className="text-base sm:text-lg text-white mb-2">Interest Rate (%)</p>
                  <input 
                    type="number" 
                    min="0"
                    max="100"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    onFocus={() => setFocusedField('interestRate')}
                    onBlur={() => setFocusedField(null)}
                    className={`bg-white px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition-all focus:outline-none ${
                      focusedField === 'interestRate' ? 'ring-2 ring-blue-500' : ''
                    }`}
                  />
                  <p className="text-xs text-blue-200 mt-1">Annual interest rate (default: 30%)</p>
                </div>

                <div className="transition-all duration-300 hover:scale-105">
                  <p className="text-base sm:text-lg text-white mb-2">Loan Term (Months)</p>
                  <select 
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    onFocus={() => setFocusedField('loanTerm')}
                    onBlur={() => setFocusedField(null)}
                    className={`bg-white px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition-all focus:outline-none ${
                      focusedField === 'loanTerm' ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <option value={3}>3 Months</option>
                    <option value={6}>6 Months</option>
                    <option value={12}>12 Months</option>
                    <option value={24}>24 Months</option>
                    <option value={36}>36 Months</option>
                    <option value={48}>48 Months</option>
                    <option value={60}>60 Months</option>
                  </select>
                  <p className="text-xs text-blue-200 mt-1">Duration of your loan</p>
                </div>
              </div>

              {/* Middle Section - Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="transition-all duration-300 hover:scale-105">
                  <p className="text-base sm:text-lg text-white mb-2">Monthly Payment</p>
                  <div className="border border-white bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-white/10">
                    <span>₦</span>
                    <span className="text-xl font-semibold">{monthlyPayment.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
                  </div>
                </div>

                <div className="transition-all duration-300 hover:scale-105">
                  <p className="text-base sm:text-lg text-white mb-2">Total Interest</p>
                  <div className="border border-white bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-white/10">
                    <span>₦</span>
                    <span className="text-xl font-semibold">{totalInterest.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Total */}
              <div className="flex justify-center mt-8">
                <div className="w-full max-w-sm transition-all duration-300 hover:scale-105">
                  <p className="text-lg text-white mb-2 text-center font-medium">Total Repayment</p>
                  <div className="border-2 border-white bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-white/10">
                    <span>₦</span>
                    <span className="text-2xl font-bold">{totalRepayment.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
                  </div>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <button 
                  onClick={() => setShowAmortizationTable(!showAmortizationTable)}
                  className="bg-white text-[#000941] text-lg font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {showAmortizationTable ? "Hide Schedule" : "View Amortization Schedule"}
                </button>
                
                <button 
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Apply Now
                </button>
              </div>
            </div>
            
            {/* Amortization Table */}
            {showAmortizationTable && activeTab === 'loan' && (
              <div className="mt-8 bg-white rounded-xl shadow-lg p-4 overflow-x-auto animate-fade-in">
                <h3 className="text-xl font-bold text-[#000941] mb-4">Amortization Schedule</h3>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Principal</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {amortizationSchedule.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.month}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₦ {row.payment.toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₦ {row.principalPayment.toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₦ {row.interestPayment.toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₦ {row.remainingBalance.toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Descriptive Text for Loan */}
          <div className={`w-full md:w-5/12 lg:w-1/3 transform transition-all duration-1000 ease-out ${visibleSections.calculator ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            <h2 className="font-bold text-4xl text-gray-900 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Loan Amortization Calculator
            </h2>
            <p className="text-xl text-gray-700 mt-6">
              Plan your loan repayments with detailed breakdowns, ensuring you stay in control of your finances.
            </p>
            
            <div className="mt-8">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-sm">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Understanding Amortization</h3>
                <p className="text-gray-700">
                  Amortization shows how each payment is applied to principal and interest over time. Early payments go more toward interest, while later payments reduce principal faster.
                </p>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Detailed Schedule</h4>
                      <p className="text-gray-600">Month-by-month breakdown of your payments</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">Financial Planning</h4>
                      <p className="text-gray-600">See how interest varies over the loan term</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Investment Calculator Section */}
        <div id="investmentCalculator" className={`flex flex-col md:flex-row justify-center items-start gap-y-8 md:gap-y-0 md:gap-x-16 lg:gap-x-24 py-16 ${activeTab === 'investment' ? 'block' : 'hidden'}`}>
          
          {/* Investment Calculator Interface */}
          <div className={`w-full md:w-7/12 lg:w-1/2 transform transition-all duration-1000 ease-out ${visibleSections.investmentCalculator ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
            <div className="bg-gradient-to-br from-[#000941] to-[#0a1463] rounded-2xl py-8 px-6 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h2 className="text-white text-2xl font-bold text-center mb-6">
                Investment Calculator
                <div className="w-16 h-1 bg-white mx-auto mt-2"></div>
              </h2>
              
              {/* Top Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                <div className="transition-all duration-300 hover:scale-105 md:col-span-2">
                  <p className="text-base sm:text-lg text-white mb-2">Investment Amount</p>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">₦</span>
                    <input 
                      type="number" 
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                      onFocus={() => setFocusedField('investmentAmount')}
                      onBlur={() => setFocusedField(null)}
                      className={`bg-white px-8 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition-all focus:outline-none ${
                        focusedField === 'investmentAmount' ? 'ring-2 ring-blue-500' : ''
                      }`}
                    />
                  </div>
                  <p className="text-xs text-blue-200 mt-1">Enter the amount you want to invest</p>
                </div>

                <div className="transition-all duration-300 hover:scale-105">
                  <p className="text-base sm:text-lg text-white mb-2">Investment Period (Months)</p>
                  <select 
                    value={investmentPeriod}
                    onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                    onFocus={() => setFocusedField('investmentPeriod')}
                    onBlur={() => setFocusedField(null)}
                    className={`bg-white px-4 py-3 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition-all focus:outline-none ${
                      focusedField === 'investmentPeriod' ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    {[1, 2, 3, 4, 5, 6, 9, 12, 18, 24, 36].map(months => (
                      <option key={months} value={months}>{months} Month{months > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                  <p className="text-xs text-blue-200 mt-1">Select your investment duration</p>
                </div>
                
                <div className="transition-all duration-300 hover:scale-105">
                  <p className="text-base sm:text-lg text-white mb-2">Monthly Interest Rate</p>
                  <div className="bg-blue-900/50 text-white px-4 py-3 rounded-lg flex items-center justify-between">
                    <span className="text-xl font-semibold">1.8%</span>
                  </div>
                  <p className="text-xs text-blue-200 mt-1">Fixed monthly interest rate</p>
                </div>
              </div>

              {/* Middle Section - Results */}
              <div className="mt-8">
                <div className="transition-all duration-300 hover:scale-105 mb-6">
                  <p className="text-base sm:text-lg text-white mb-2">Monthly Interest Earned</p>
                  <div className="border border-white bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-white/10">
                    <span>₦</span>
                    <span className="text-xl font-semibold">{monthlyInterest.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
                  </div>
                  <p className="text-xs text-blue-200 mt-1">Interest earned each month (1.8% of principal)</p>
                </div>
              </div>

              {/* Bottom Section - Total */}
              <div className="flex justify-center mt-8">
                <div className="w-full max-w-sm transition-all duration-300 hover:scale-105">
                  <p className="text-lg text-white mb-2 text-center font-medium">Total Return</p>
                  <div className="border-2 border-white bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg flex items-center justify-between transition-all duration-300 hover:bg-white/10">
                    <span>₦</span>
                    <span className="text-2xl font-bold">{totalReturn.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
                  </div>
                  <p className="text-xs text-blue-200 text-center mt-1">Principal + Total Interest after {investmentPeriod} months</p>
                </div>
              </div>
              
              {/* Calculation Details */}
              <div className="mt-8 p-3 bg-blue-900/30 rounded-lg">
                <p className="text-sm text-blue-100 mb-2 font-medium">How it's calculated:</p>
                <div className="flex flex-col text-blue-200 text-sm">
                  <p>Investment Value: ₦{investmentAmount.toLocaleString()}</p>
                  <p>Monthly Interest: ₦{investmentAmount.toLocaleString()} × 1.8% = ₦{monthlyInterest.toLocaleString()}</p>
                  <p>Total Interest: ₦{monthlyInterest.toLocaleString()} × {investmentPeriod} months = ₦{(monthlyInterest * investmentPeriod).toLocaleString()}</p>
                  <p>Total Return: ₦{investmentAmount.toLocaleString()} + ₦{(monthlyInterest * investmentPeriod).toLocaleString()} = ₦{totalReturn.toLocaleString()}</p>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <button 
                  onClick={() => setShowAmortizationTable(!showAmortizationTable)}
                  className="bg-white text-[#000941] text-lg font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {showAmortizationTable ? "Hide Schedule" : "View Investment Schedule"}
                </button>
                
                <button 
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Invest Now
                </button>
              </div>





              </div>
            
            {/* Investment Schedule Table */}
            {showAmortizationTable && activeTab === 'investment' && (
              <div className="mt-8 bg-white rounded-xl shadow-lg p-4 overflow-x-auto animate-fade-in">
                <h3 className="text-xl font-bold text-[#000941] mb-4">Investment Growth Schedule</h3>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest Earned</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accumulated Value</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {amortizationSchedule.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.month}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₦ {row.interestEarned.toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">₦ {row.accumulatedValue.toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Descriptive Text for Investment */}
          <div className={`w-full md:w-5/12 lg:w-1/3 transform transition-all duration-1000 ease-out ${visibleSections.investmentCalculator ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
            <h2 className="font-bold text-4xl text-gray-900 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Investment Calculator
            </h2>
            <p className="text-xl text-gray-700 mt-6">
              Grow your wealth with our competitive 1.8% monthly interest rate investment plans.
            </p>
            
            <div className="mt-8">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 shadow-sm">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">How Our Investments Work</h3>
                
                <div className="space-y-5 mt-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Choose your investment amount</h4>
                      <p className="text-gray-600 mt-1">Invest any amount that suits your financial goals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Select your investment period</h4>
                      <p className="text-gray-600 mt-1">Choose how long you want to invest your money</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Earn 1.8% monthly interest</h4>
                      <p className="text-gray-600 mt-1">Your investment grows steadily each month</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Receive your returns</h4>
                      <p className="text-gray-600 mt-1">Get your principal plus accumulated interest at maturity</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-3 bg-blue-100 rounded-lg">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm font-medium text-blue-800">Example: ₦1,000,000 invested for 5 months yields ₦1,090,000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div id="buttons" className={`flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-center gap-x-8 mt-8 transform transition-all duration-1000 ease-out ${visibleSections.buttons ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <button 
            onClick={() => navigate('/salary-loan')} 
            className="bg-[#2B47FF] text-white text-xl px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
          >
            Salary Loan Calculator
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
            {activeTab === 'loan' ? 'Calculate your loan today' : 'Start investing today'}
          </h2>
          <p className="text-[#2B47FF] font-bold text-4xl md:text-5xl mt-2">
            {activeTab === 'loan' ? 'and get approved in just a few clicks' : 'and secure your financial future'}
          </p>
          
          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-[#FF6A2B] text-white text-xl px-8 py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-[#E05A22] hover:-translate-y-1 transition-all duration-300 animate-pulse">
              {activeTab === 'loan' ? 'Start Your Application' : 'Begin Your Investment Journey'}
            </button>
          </div>
        </div>
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
        
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
          
      {/* Footer */}
      <div className="transform transition-opacity duration-1000 ease-in">
        <Footer />
      </div>
    </div>
  );
};

export default AmortizationLoan;