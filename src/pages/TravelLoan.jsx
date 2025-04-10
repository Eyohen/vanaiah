import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const TravelLoan = () => {
  return (
    <div>
        <Navbar/>
        <div className='px-4 md:px-64 py-24'>

<div className='flex flex-col md:flex-row justify-center gap-y-4 md:gap-y-0 gap-x-48 py-16'>





<div className="bg-[#000941] w-full max-w-3xl mx-auto rounded-2xl py-6 sm:py-9 px-4 sm:px-6">
  {/* Top Section - 1 Column on Mobile, 2 Column on larger screens */}
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-8 md:gap-x-12 gap-y-6 sm:gap-y-9">
    <div>
      <p className="text-base sm:text-lg text-white">Net Monthly Salary</p>
      <div className="bg-white px-2 py-2 rounded-lg mt-1 w-full">N 100,000</div>
    </div>

    <div>
      <p className="text-base sm:text-lg text-white">Advanced Amount Needed</p>
      <div className="bg-white px-2 py-2 rounded-lg mt-1 w-full">N 100,000</div>
    </div>

    <div className="sm:col-span-1">
      <p className="text-base sm:text-lg text-white">Repayment Period</p>
      <div className="bg-white px-2 py-2 rounded-lg mt-1 w-full">N 100,000</div>
    </div>
  </div>

  {/* Middle Section - Responsive Layout */}
  <div className="flex flex-col sm:flex-col md:flex-row sm:justify-between mt-6 sm:mt-9 gap-6 sm:gap-4">
    <div className="w-full sm:w-1/2 sm:pr-2">
      <p className="text-sm sm:text-base md:text-md text-white">Repayment Amount (Per Salary Deduction)</p>
      <div className="border border-white text-white px-2 py-2 rounded-lg mt-1 w-full">N 500,000</div>
    </div>

    <div className="w-full sm:w-1/2 sm:pl-2">
      <p className="text-base sm:text-lg text-white text-center sm:text-center">Interest/Fee (if Any)</p>
      <div className="border border-white text-white px-2 py-2 rounded-lg mt-1 w-full">N 500,000</div>
    </div>
  </div>

  {/* Bottom Section - Centered */}
  <div className="flex justify-center mt-6">
    <div className="w-full sm:w-2/3 md:w-1/2 lg:max-w-md">
      <p className="text-base sm:text-lg text-white text-center">Total Repayment</p>
      <div className="border border-white text-white px-2 py-2 rounded-lg mt-1 w-full">N 500,000</div>
    </div>
  </div>
</div>






<div>
<p className='font-bold text-4xl max-w-[400px]'>Travel Loan Calculator</p>
<p className='text-xl max-w-[400px] mt-4'>Turn your dream trip into reality with flexible travel financing and easy repayment options</p>
</div>


</div>


<div className='flex flex-col md:flex-row justify-center gap-y-4 md:gap-y-0  gap-x-12'>
    <button className='bg-[#2B47FF] text-white text-xl px-4 py-2 rounded-md'>Loan Amortization Calculator</button>


    <button className='px-4 py-2 rounded-md bg-gray-300 text-xl'>Travel loan Calculator</button>
</div>

<p className='text-center text-[#2B47FF] font-bold text-5xl mt-12'>Calculate your loan today and</p>

<p className='text-center text-[#2B47FF] font-bold text-5xl'>and in just a few clicks</p>


        </div>
        <Footer/>
        </div>
  )
}

export default TravelLoan