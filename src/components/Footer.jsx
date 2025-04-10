import React from 'react'
import { BsBarChart, BsCodeSlash, BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import footerlogo from '../assets/footerlogo.png'

const Footer = () => {
  return (
    <div className="container mx-auto max-w-full px-4 md:px-12 bg-black py-9">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div>
        <img src={footerlogo} 
        />
        <p className="text-white mt-6">
          Fast, Transparent, and Reliable Loans for Individuals & SMEs
        </p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-white hover:text-black transition-colors">
            <BsTwitter className="text-xl" />
          </a>
          <a href="#" className="text-white hover:text-black transition-colors">
            <BsGithub className="text-xl" />
          </a>
          <a href="#" className="text-white hover:text-black transition-colors">
            <BsLinkedin className="text-xl" />
          </a>
        </div>
      </div>
      

      <div className='flex flex-col md:flex-row md:gap-x-24 space-y-4 md:space-y-0'>

      <div>
        <h4 className="font-bold text-white text-2xl mb-4">Quick Links</h4>
        <ul className="space-y-3">
          <li><a href="#" className="text-white transition-colors">About Us</a></li>
          <li><a href="#" className="text-white transition-colors">Loan Options</a></li>
          <li><a href="#" className="text-white transition-colors">FAQs</a></li>
      
        </ul>
      </div>
      
      <div>
        <h4 className="font-bold text-white text-2xl mb-4">Business Hours</h4>
        <ul className="space-y-3">
          <li><a href="#" className="text-white transition-colors">Monday - Friday</a></li>
          <li><a href="#" className="text-white transition-colors">8am - 5pm</a></li>
          <li><a href="#" className="text-white transition-colors">Help Centre</a></li>
          <li><a href="#" className="text-white transition-colors">+234 7066391271</a></li>
          <li><a href="#" className="text-white transition-colors">Email</a></li>
          <li><a href="#" className="text-white transition-colors">support@vanaiah.com</a></li>

        </ul>
      </div>
    </div>


    </div>
    
    <div className="border-t border-gray-100 pt-8">
      <p className="text-white text-center">
        &copy; {new Date().getFullYear()} Vaniah. All rights reserved.
      </p>
    </div>
  </div>
  )
}

export default Footer