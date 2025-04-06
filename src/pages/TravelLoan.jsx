import React from 'react'
import Navbar from '../components/Navbar'

const TravelLoan = () => {
  return (
    <div>
        <Navbar/>
        <div className='px-64 py-24'>

<div className='flex justify-center gap-x-48 py-16'>
<div className='bg-[#000941] w-[700px] rounded-2xl py-9 px-6'>
    <div className='grid grid-cols-2 gap-x-12 gap-y-9'>

        <div>
    <p className='text-lg text-white'>Net Monthly Salary</p>
    <div className='bg-white px-2 py-2 rounded-lg mt-1'>N 100,000</div>
    </div>

    <div>
    <p className='text-lg text-white'>Advanced Amount Needed</p>
    <div className='bg-white px-2 py-2 rounded-lg mt-1'>N 100,000</div>
    </div>

    <div>
    <p className='text-lg text-white'>Repayment Period</p>
    <div className='bg-white px-2 py-2 rounded-lg mt-1'>N 100,000</div>
    </div>

    </div>


    <div className='flex justify-between mt-9'>
    <div>
    <p className='text-md text-white'>Repayment Amount (Per Salary Deduction)</p>
    <div className='border border-white text-white px-2 py-2 rounded-lg mt-1 w-[300px]'>N 500,000</div>
    </div>

    <div>
    <p className='text-lg text-white text-center'>Interest/Fee (if Any)</p>
    <div className='border border-white text-white px-2 py-2 rounded-lg mt-1 w-[300px]'>N 500,000</div>
    </div>

    </div>

    
<div className='flex justify-center mt-6'>
    <div>
    <p className='text-lg text-white text-center'>Total Repayment</p>
    <div className='border border-white text-white px-2 py-2 rounded-lg mt-1 w-[300px]'>N 500,000</div>
    </div>
    </div>



</div>


<div>
<p className='font-bold text-4xl max-w-[400px]'>Travel Loan Calculator</p>
<p className='text-xl max-w-[400px] mt-4'>Turn your dream trip into reality with flexible travel financing and easy repayment options</p>
</div>


</div>


<div className='flex justify-center gap-x-12'>
    <button className='bg-[#2B47FF] text-white text-xl px-4 py-2 rounded-md'>Loan Amortization Calculator</button>


    <button className='px-4 py-2 rounded-md bg-gray-300 text-xl'>Travel loan Calculator</button>
</div>

<p className='text-center text-[#2B47FF] font-bold text-5xl mt-12'>Calculate your loan today and</p>

<p className='text-center text-[#2B47FF] font-bold text-5xl'>and in just a few clicks</p>


        </div>
        </div>
  )
}

export default TravelLoan