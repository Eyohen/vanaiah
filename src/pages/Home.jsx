// Home.jsx
import Navbar from '../components/Navbar';
import { FiMail, FiCpu, FiShield, FiZap, FiDatabase, FiCheck, FiArrowRight } from 'react-icons/fi';
import { BsBarChart, BsCodeSlash, BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import about from '../assets/about.png'
import kite from '../assets/kite.png'
import coins from '../assets/coins.png'
import crown from '../assets/crown.png'
import dollar from '../assets/dollar.png'
import rocket from '../assets/rocket.png'
import magglass from '../assets/magglass.png'
import chart from '../assets/chart.png'
import support from '../assets/support.png'
import shield from '../assets/shield.png'
import FAQ from '../components/FAQ';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className='px-96'>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-0">
        <div className="">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-10 md:mb-0">
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Fast, Transparent, and Reliable 
              </p>
              <p className="text-3xl md:text-4xl lg:text-5xl mt-2 font-bold text-black leading-tight">
                Loans
              </p>
              <p className="text-3xl md:text-4xl lg:text-5xl mt-2 font-bold text-black leading-tight">
                For Individuals & SMEs
              </p>
              <p className="mt-6 text-xl text-gray-600 max-w-lg">
              VANAIAH is your trusted partner for micro-lending in Lagos  State, offering accessible financial solutions with no hidden fees and quick approvals.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a 
                  href="/signup" 
                  className="bg-[#2B47FF] text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors text-center"
                >
                  Apply Now
                </a>
              
              </div>
        
            </div>
            <div className="md:w-[600px]">
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-500">api-request.js</div>
                </div>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                  <code>
{`import { PaperSignal } from '@papersignal/sdk';

// Initialize the client
const client = new PaperSignal('YOUR_API_KEY');

// Send a simple email
await client.send({
  from: 'notifications@yourapp.com',
  to: 'user@example.com',
  subject: 'Welcome to YourApp!',
  html: '<h1>Welcome!</h1><p>Thanks for signing up.</p>',
  
  // Optional tracking
  track: {
    opens: true,
    clicks: true,
    unsubscribe: true
  }
});`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About us Section */}
      <section className="py-12 ">
        <div className="flex flex-col md:flex-row justify-between items-center">

          <div>
          <p className='font-bold text-4xl text-[#2B47FF]'>About us</p>
          <p className='mt-6 text-xl text-gray-600 max-w-[650px]'>VANAIAH is a licensed micro-lending company in Lagos, dedicaated to providing financial solutions tailored to individuals and SMEs. We believe in integrity, transparency, and exceptional service, ensuring you get the support you need when you need it.</p>
          </div>
          <img src={about} />
        </div>
      </section>



           {/* Services Section */}
           <section className="py-16 flex justify-between items-center">
            <div className='flex justify-center gap-x-64 items-center'>
        <div className="grid grid-cols-2 gap-9">

          <div className='font-bold text-4xl bg-[#7487FF] w-[330px] px-4 py-6 shadow-2xl'>
            <img src={kite} />
            <p className='py-4 text-white text-2xl'>Travel Loans</p>
            <p className='text-white text-2xl font-light py-9'>Fund your relocation or proof of funds needs without any stress.</p>
          </div>

          <div className='font-bold text-4xl w-[330px] px-4 py-6 shadow-2xl'>
            <img src={coins} />
            <p className='py-4 text-2xl'>Personal Financial Loans</p>
            <p className='text-2xl font-light py-9'>Cover unexpected expenses or make a big purchase with ease.</p>
          </div>

          <div className='font-bold text-4xl w-[330px] px-4 py-6 shadow-2xl'>
            <img src={crown} />
            <p className='py-4 text-2xl'>Financial Advisory</p>
            <p className='text-2xl font-light py-9'>Get  expert guidance to optimize your finances</p>
          </div>

          <div className='font-bold text-4xl w-[330px] px-4 py-6 shadow-2xl'>
            <img src={dollar} />
            <p className='py-4 text-2xl'>Salary Advance Loans</p>
            <p className='text-2xl font-light py-9'>Access your earnings before payday to stay financially secure.</p>
          </div>

        
        
        </div>

        <div>
          <p className='font-bold text-4xl'>Our Services</p>
        </div>

        

        </div>

 

      </section>
      <button className='bg-[#FF6A2B] text-white text-xl px-9 rounded-md py-2'>Apply Now</button>



      {/* Why Choose us Section */}
      <section className="py-16 ">
        <p className='py-12 text-center font-bold text-4xl'>Why Choose Us</p>
        <div className="grid grid-cols-2 gap-24">


  <div className='px-6 py-12 rounded-2xl shadow-2xl'>
          <div className='flex gap-x-6'>
          <img src={rocket} className='object-cover' />
          <div>
          <p className='font-bold text-xl'>Quick & Easy Access</p>
          <p className='mt-2 max-w-[400px]'>Simple application, fast approvals, and disbursement within 24 - 48 hours.</p>
          </div>
          </div>
          </div>


          <div className='px-6 py-12 rounded-2xl shadow-2xl'>
          <div className='flex gap-x-6'>
          <img src={magglass}  className='object-cover' />
          <div>
          <p className='font-bold text-xl'>Transparent Terms</p>
          <p>No hidden fees or surprise charges.</p>
          </div>
          </div>
          </div>


          <div className='px-6 py-16 rounded-2xl shadow-2xl'>
          <div className='flex gap-x-6'>
          <img src={chart}  className='object-cover'/>
          <div>
          <p className='font-bold text-xl'>Expert Financial Guidance</p>
          <p>Personalized advice to help manage your finances.</p>
          </div>
          </div>
          </div>


          <div className='px-6 py-16 rounded-2xl shadow-2xl'>
          <div className='flex gap-x-6'>
          <img src={support} className='object-cover'/>
          <div>
          <p className='font-bold text-xl'>Support for individuals and SMEs</p>
          <p>Tailored solutions for every financial need</p>
          </div>
          </div>
          </div>
      


        </div>
        

<div className='flex justify-center py-12'>
        <div className='px-6 py-12 rounded-2xl shadow-2xl w-[650px]'>
          <div className='flex gap-x-6'>
          <img src={shield} className='object-cover' />
          <div>
          <p className='font-bold text-xl'>Licensed & Trustworthy</p>
          <p className='mt-2 max-w-[400px]'>We follow all regulatory standards</p>
          </div>
          </div>
          </div>

          </div>

      </section>


      
      {/* Frequently asked questions Section */}
      <section className="py-12 ">
      <p className='py-12 text-center text-[#2B47FF] font-bold text-4xl'>Frequently Asked Questions</p>
        <div className="flex flex-col md:flex-row ">

          <div>
          <p className='font-bold text-4xl'>Need Help? We're Here for You! </p>
          <p className='mt-6 text-xl text-gray-600 max-w-[650px]'>Have questions about our loan options, repayment plans, or eligibility criteria? Our team is ready to assist you. Reach out to us, and we'll guide you through every step of the process.</p>
          <button className='bg-black text-white text-xl font-bold px-6 py-2 rounded-md mt-6'>Contact Us</button>
          </div>

          <div>
      <FAQ/>
      </div>

        </div>
      </section>


      </div>
      
      {/* Footer */}
      <footer className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <FiMail className="text-black text-2xl mr-2" />
                <span className="font-bold text-xl text-black">PaperSignal</span>
              </div>
              <p className="text-gray-600 mb-6">
                The email API for modern developers
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-black transition-colors">
                  <BsTwitter className="text-xl" />
                </a>
                <a href="#" className="text-gray-500 hover:text-black transition-colors">
                  <BsGithub className="text-xl" />
                </a>
                <a href="#" className="text-gray-500 hover:text-black transition-colors">
                  <BsLinkedin className="text-xl" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-black mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-600 hover:text-black transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-600 hover:text-black transition-colors">Pricing</a></li>
                <li><a href="#documentation" className="text-gray-600 hover:text-black transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Status</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-black mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-black mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-600 hover:text-black transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8">
            <p className="text-gray-500 text-center">
              &copy; {new Date().getFullYear()} PaperSignal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;