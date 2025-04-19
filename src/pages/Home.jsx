// // Home.jsx
// import Navbar from '../components/Navbar';
// import { FiMail, FiCpu, FiShield, FiZap, FiDatabase, FiCheck, FiArrowRight } from 'react-icons/fi';
// import { BsBarChart, BsCodeSlash, BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import about from '../assets/about.png'
// import kite from '../assets/kite.png'
// import coins from '../assets/coins.png'
// import crown from '../assets/crown.png'
// import dollar from '../assets/dollar.png'
// import rocket from '../assets/rocket.png'
// import magglass from '../assets/magglass.png'
// import chart from '../assets/chart.png'
// import support from '../assets/support.png'
// import shield from '../assets/shield.png'
// import FAQ from '../components/FAQ';
// import footerlogo from '../assets/footerlogo.png'
// import Footer from '../components/Footer';

// function Home() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
//       <div className='px-4 md:px-24'>
      
//       {/* Hero Section */}
//       <section className="pt-32">
//         <div className="">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="mb-10 md:mb-0">
//               <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
//                 Fast, Transparent, and Reliable 
//               </p>
//               <p className="text-3xl md:text-4xl lg:text-5xl mt-2 font-bold text-black leading-tight">
//                 Loans
//               </p>
//               <p className="text-3xl md:text-4xl lg:text-5xl mt-2 font-bold text-black leading-tight">
//                 For Individuals & SMEs
//               </p>
//               <p className="mt-6 text-xl text-gray-600 max-w-lg">
//               VANAIAH is your trusted partner for micro-lending in Lagos  State, offering accessible financial solutions with no hidden fees and quick approvals.
//               </p>
//               <div className="mt-8 flex flex-col sm:flex-row gap-4">
//                 <a 
//                   href="/signup" 
//                   className="bg-[#2B47FF] text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors text-center"
//                 >
//                   Apply Now
//                 </a>
              
//               </div>
        
//             </div>
          

//             <div className="w-full max-w-md mx-auto">
//   <div className="bg-[#000941] border border-gray-100 rounded-2xl p-4 sm:p-6 md:p-9 shadow-xl">
    
//     <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-9 gap-y-8 sm:gap-y-12 md:gap-y-16">
//       <button className="bg-gradient-to-r from-[#FF6A2B] to-[#99401A] rounded-2xl text-white py-2 text-sm sm:text-base">Borrow</button>
//       <button className="bg-gradient-to-r from-[#0056D2] to-[#003B90] rounded-2xl text-white py-2 text-sm sm:text-base">Invest</button>
      
//       <div>
//         <p className="text-white text-sm sm:text-base mb-1">Amount</p>
//         <button className="bg-white rounded-lg py-2 px-4 w-full text-sm sm:text-base">N100,000</button>
//       </div>
      
//       <div>
//         <p className="text-white text-sm sm:text-base mb-1">Number of months</p>
//         <div className="bg-white rounded-lg py-2 px-4 w-full text-sm sm:text-base">5</div>
//       </div>
//     </div>
    
//     <div className="pt-8 md:pt-12 text-center">
//       <p className="text-white text-sm sm:text-base mb-1">Monthly Repayment</p>
//       <button className="border border-white rounded-lg text-white py-2 px-4 w-full max-w-xs text-sm sm:text-base">N500,000</button>
//     </div>
    
//   </div>
// </div>



//           </div>
//         </div>
//       </section>
      
//       {/* About us Section */}
//       <section className="py-12 ">
//         <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center">

//           <div>
//           <p className='font-bold text-4xl text-[#2B47FF]'>About us</p>
//           <p className='mt-6 text-xl text-gray-600 max-w-[650px]'>VANAIAH is a licensed micro-lending company in Lagos, dedicaated to providing financial solutions tailored to individuals and SMEs. We believe in integrity, transparency, and exceptional service, ensuring you get the support you need when you need it.</p>
//           </div>
//           <img src={about} />
//         </div>
//       </section>



//            {/* Services Section */}
//            <section className="py-16 flex justify-between items-center">
//             <div className='flex flex-col md:flex-row justify-center gap-x-64 items-center'>
//         <div className="grid md:grid-cols-2 gap-9">

//           <div className='font-bold text-4xl bg-[#7487FF] w-[330px] px-4 py-6 shadow-2xl'>
//             <img src={kite} />
//             <p className='py-4 text-white text-2xl'>Travel Loans</p>
//             <p className='text-white text-2xl font-light py-9'>Fund your relocation or proof of funds needs without any stress.</p>
//           </div>

//           <div className='font-bold text-4xl w-[330px] px-4 py-6 shadow-2xl'>
//             <img src={coins} />
//             <p className='py-4 text-2xl'>Personal Financial Loans</p>
//             <p className='text-2xl font-light py-9'>Cover unexpected expenses or make a big purchase with ease.</p>
//           </div>

//           <div className='font-bold text-4xl w-[330px] px-4 py-6 shadow-2xl'>
//             <img src={crown} />
//             <p className='py-4 text-2xl'>Financial Advisory</p>
//             <p className='text-2xl font-light py-9'>Get  expert guidance to optimize your finances</p>
//           </div>

//           <div className='font-bold text-4xl w-[330px] px-4 py-6 shadow-2xl'>
//             <img src={dollar} />
//             <p className='py-4 text-2xl'>Salary Advance Loans</p>
//             <p className='text-2xl font-light py-9'>Access your earnings before payday to stay financially secure.</p>
//           </div>

        
        
//         </div>

//         <div>
//           <p className='font-bold text-4xl'>Our Services</p>
//         </div>

        

//         </div>

 

//       </section>
//       <button className='bg-[#FF6A2B] text-white text-xl px-9 rounded-md py-2'>Apply Now</button>



//       {/* Why Choose us Section */}
//       <section className="py-16 ">
//         <p className='py-12 text-center font-bold text-4xl'>Why Choose Us</p>
//         <div className="grid md:grid-cols-2 gap-24">


//   <div className='px-6 py-12 rounded-2xl shadow-2xl'>
//           <div className='flex gap-x-6'>
//           <img src={rocket} className='object-cover' />
//           <div>
//           <p className='font-bold text-xl'>Quick & Easy Access</p>
//           <p className='mt-2 max-w-[400px]'>Simple application, fast approvals, and disbursement within 24 - 48 hours.</p>
//           </div>
//           </div>
//           </div>


//           <div className='px-6 py-12 rounded-2xl shadow-2xl'>
//           <div className='flex gap-x-6'>
//           <img src={magglass}  className='object-cover' />
//           <div>
//           <p className='font-bold text-xl'>Transparent Terms</p>
//           <p>No hidden fees or surprise charges.</p>
//           </div>
//           </div>
//           </div>


//           <div className='px-6 py-16 rounded-2xl shadow-2xl'>
//           <div className='flex gap-x-6'>
//           <img src={chart}  className='object-cover'/>
//           <div>
//           <p className='font-bold text-xl'>Expert Financial Guidance</p>
//           <p>Personalized advice to help manage your finances.</p>
//           </div>
//           </div>
//           </div>


//           <div className='px-6 py-16 rounded-2xl shadow-2xl'>
//           <div className='flex gap-x-6'>
//           <img src={support} className='object-cover'/>
//           <div>
//           <p className='font-bold text-xl'>Support for individuals and SMEs</p>
//           <p>Tailored solutions for every financial need</p>
//           </div>
//           </div>
//           </div>
      


//         </div>
        

// <div className='flex justify-center py-12'>
//         <div className='px-6 py-12 rounded-2xl shadow-2xl w-[650px]'>
//           <div className='flex gap-x-6'>
//           <img src={shield} className='object-cover' />
//           <div>
//           <p className='font-bold text-xl'>Licensed & Trustworthy</p>
//           <p className='mt-2 max-w-[400px]'>We follow all regulatory standards</p>
//           </div>
//           </div>
//           </div>

//           </div>

//       </section>


      
//       {/* Frequently asked questions Section */}
//       <section className="py-12 ">
//       <p className='py-12 text-center text-[#2B47FF] font-bold text-4xl'>Frequently Asked Questions</p>
//         <div className="flex flex-col md:flex-row space-y-9 md:space-y-0">

//           <div>
//           <p className='font-bold text-4xl'>Need Help? We're Here for You! </p>
//           <p className='mt-6 text-xl text-gray-600 max-w-[650px]'>Have questions about our loan options, repayment plans, or eligibility criteria? Our team is ready to assist you. Reach out to us, and we'll guide you through every step of the process.</p>
//           <button className='bg-black text-white text-xl font-bold px-6 py-2 rounded-md mt-6'>Contact Us</button>
//           </div>

//           <div>
//       <FAQ/>
//       </div>

//         </div>
//       </section>


//       </div>
      
//       {/* Footer */}
//     <Footer />
//     </div>
//   );
// }

// export default Home;




// Home.jsx with Tailwind CSS animations and styling
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { FiMail, FiCpu, FiShield, FiZap, FiDatabase, FiCheck, FiArrowRight } from 'react-icons/fi';
import { BsBarChart, BsCodeSlash, BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import about from '../assets/about.png';
import kite from '../assets/kite.png';
import coins from '../assets/coins.png';
import crown from '../assets/crown.png';
import dollar from '../assets/dollar.png';
import rocket from '../assets/rocket.png';
import magglass from '../assets/magglass.png';
import chart from '../assets/chart.png';
import support from '../assets/support.png';
import shield from '../assets/shield.png';
import FAQ from '../components/FAQ';
import footerlogo from '../assets/footerlogo.png';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();
  // For scroll reveal effect
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    about: false,
    services: false,
    features: false,
    faq: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'features', 'faq'];
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
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
      
        {/* Hero Section */}
        <section id="hero" className="pt-32 pb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className={`mb-10 md:mb-0 md:w-1/2 transform transition-all duration-1000 ease-out ${visibleSections.hero ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  Fast, Transparent, and Reliable 
                </span>
                <span className="block mt-2 text-blue-600 animate-pulse">Loans</span>
                <span className="block mt-2">For Individuals & SMEs</span>
              </h1>
              <p className={`mt-6 text-xl text-gray-600 max-w-lg transform transition-all duration-1000 delay-300 ease-out ${visibleSections.hero ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                VANAIAH is your trusted partner for micro-lending in Lagos State, offering accessible financial solutions with no hidden fees and quick approvals.
              </p>
              <div className={`mt-8 flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-500 ease-out ${visibleSections.hero ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <Link 
                  to="/applynow" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            <div className={`w-full md:w-1/2 max-w-md mx-auto transform transition-all duration-1000 ease-out ${visibleSections.hero ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
              <div className="bg-gradient-to-br from-[#000941] to-[#0a1463] border border-gray-100 rounded-2xl p-4 sm:p-6 md:p-9 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-9 gap-y-8 sm:gap-y-12 md:gap-y-16">
                  <button className="bg-gradient-to-r from-[#FF6A2B] to-[#99401A] rounded-2xl text-white py-2 text-sm sm:text-base hover:scale-105 transition-transform duration-300">
                    Borrow
                  </button>
                  <button className="bg-gradient-to-r from-[#0056D2] to-[#003B90] rounded-2xl text-white py-2 text-sm sm:text-base hover:scale-105 transition-transform duration-300">
                    Invest
                  </button>
                  
                  <div>
                    <p className="text-white text-sm sm:text-base mb-1">Amount</p>
                    <button className="bg-white rounded-lg py-2 px-4 w-full text-sm sm:text-base hover:scale-105 transition-transform duration-300">
                      N100,000
                    </button>
                  </div>
                  
                  <div>
                    <p className="text-white text-sm sm:text-base mb-1">Number of months</p>
                    <div className="bg-white rounded-lg py-2 px-4 w-full text-sm sm:text-base">5</div>
                  </div>
                </div>
                
                <div className="pt-8 md:pt-12 text-center">
                  <p className="text-white text-sm sm:text-base mb-1">Monthly Repayment</p>
                  <button className="border border-white rounded-lg text-white py-2 px-4 w-full max-w-xs mx-auto text-sm sm:text-base hover:bg-white/10 hover:scale-105 transition-all duration-300">
                    N500,000
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        {/* About us Section */}
        <section id="about" className="py-20">
          <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center">
            <div className={`md:w-1/2 transform transition-all duration-1000 ease-out ${visibleSections.about ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
              <h2 className="text-4xl font-bold text-[#2B47FF] bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                About us
              </h2>
              <p className="mt-6 text-xl text-gray-600 max-w-[650px]">
                VANAIAH is a licensed micro-lending company in Lagos, dedicated to providing financial solutions tailored to individuals and SMEs. We believe in integrity, transparency, and exceptional service, ensuring you get the support you need when you need it.
              </p>
            </div>
            <div className={`md:w-1/2 flex justify-center transform transition-all duration-1000 ease-out ${visibleSections.about ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
              <img 
                src={about} 
                alt="About Vanaiah" 
                className="max-w-full h-auto hover:-translate-y-3 transition-transform duration-700 ease-in-out animate-float"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <h2 className={`text-4xl font-bold text-center mb-16 transform transition-all duration-1000 ease-out ${visibleSections.services ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Our Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`font-bold text-4xl hover:bg-[#7487FF] hover:text-white px-4 py-6 shadow-2xl rounded-lg hover:-translate-y-3 hover:shadow-xl transition-all duration-500 transform ${visibleSections.services ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} transition-all duration-700 delay-100`}>
              <img src={kite} alt="Travel Loans" className="transition-transform duration-500 hover:scale-110" />
              <p className="py-4 text-2xl">Travel Loans</p>
              <p className="text-2xl font-light py-9">Fund your relocation or proof of funds needs without any stress.</p>
            </div>

            <div className={`font-bold text-4xl hover:bg-[#7487FF] hover:text-white px-4 py-6 shadow-2xl rounded-lg hover:-translate-y-3 hover:shadow-xl transition-all duration-500 transform ${visibleSections.services ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} transition-all duration-700 delay-200`}>
              <img src={coins} alt="Personal Financial Loans" className="transition-transform duration-500 hover:scale-110" />
              <p className="py-4 text-2xl">Personal Financial Loans</p>
              <p className="text-2xl font-light py-9">Cover unexpected expenses or make a big purchase with ease.</p>
            </div>

            <div className={`font-bold text-4xl hover:bg-[#7487FF] hover:text-white px-4 py-6 shadow-2xl rounded-lg hover:-translate-y-3 hover:shadow-xl transition-all duration-500 transform ${visibleSections.services ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} transition-all duration-700 delay-300`}>
              <img src={crown} alt="Financial Advisory" className="transition-transform duration-500 hover:scale-110" />
              <p className="py-4 text-2xl">Financial Advisory</p>
              <p className="text-2xl font-light py-9">Get expert guidance to optimize your finances</p>
            </div>

            <div className={`font-bold text-4xl hover:bg-[#7487FF] hover:text-white px-4 py-6 shadow-2xl rounded-lg hover:-translate-y-3 hover:shadow-xl transition-all duration-500 transform ${visibleSections.services ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} transition-all duration-700 delay-400`}>
              <img src={dollar} alt="Salary Advance Loans" className="transition-transform duration-500 hover:scale-110" />
              <p className="py-4 text-2xl">Salary Advance Loans</p>
              <p className="text-2xl font-light py-9">Access your earnings before payday to stay financially secure.</p>
            </div>
          </div>

          <div className={`flex justify-center mt-12 transform transition-all duration-1000 ease-out ${visibleSections.services ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} delay-500`}>
            
            <button  onClick={() => navigate('/applynow')} className="bg-[#FF6A2B] text-white text-xl px-9 rounded-md py-2 hover:bg-[#E05A22] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              Apply Now
            </button>
          </div>
        </section>

        {/* Why Choose us Section */}
        <section id="features" className="py-20">
          <h2 className={`py-12 text-center font-bold text-4xl transform transition-all duration-1000 ease-out ${visibleSections.features ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Why Choose Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div className={`px-6 py-12 border-4 hover:border-[#7487FF] rounded-2xl shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-500 transform ${visibleSections.features ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} transition-all duration-700 delay-100`}>
              <div className="flex gap-x-6 items-center">
                <img src={rocket} className="object-cover h-14 w-14 transition-transform duration-500 hover:scale-125 hover:rotate-12" alt="Quick Access" />
                <div>
                  <p className="font-bold text-xl">Quick & Easy Access</p>
                  <p className="mt-2 max-w-[400px]">Simple application, fast approvals, and disbursement within 24 - 48 hours.</p>
                </div>
              </div>
            </div>

            <div className={`px-6 py-12 rounded-2xl border-4 hover:border-[#7487FF] shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-500 transform ${visibleSections.features ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} transition-all duration-700 delay-200`}>
              <div className="flex gap-x-6 items-center">
                <img src={magglass} className="object-cover h-14 w-14 transition-transform duration-500 hover:scale-125 hover:rotate-12" alt="Transparent Terms" />
                <div>
                  <p className="font-bold text-xl">Transparent Terms</p>
                  <p>No hidden fees or surprise charges.</p>
                </div>
              </div>
            </div>

            <div className={`px-6 py-12 rounded-2xl border-4 hover:border-[#7487FF] shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-500 transform ${visibleSections.features ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} transition-all duration-700 delay-300`}>
              <div className="flex gap-x-6 items-center">
                <img src={chart} className="object-cover h-14 w-14 transition-transform duration-500 hover:scale-125 hover:rotate-12" alt="Expert Financial Guidance" />
                <div>
                  <p className="font-bold text-xl">Expert Financial Guidance</p>
                  <p>Personalized advice to help manage your finances.</p>
                </div>
              </div>
            </div>

            <div className={`px-6 py-12 rounded-2xl border-4 hover:border-[#7487FF] shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-500 transform ${visibleSections.features ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} transition-all duration-700 delay-400`}>
              <div className="flex gap-x-6 items-center">
                <img src={support} className="object-cover h-14 w-14 transition-transform duration-500 hover:scale-125 hover:rotate-12" alt="Support for individuals" />
                <div>
                  <p className="font-bold text-xl">Support for individuals and SMEs</p>
                  <p>Tailored solutions for every financial need</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center py-12">
            <div className={`px-6 py-12 rounded-2xl border-4 hover:border-[#7487FF] shadow-2xl w-[650px] hover:shadow-xl hover:scale-105 transition-all duration-500 transform ${visibleSections.features ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} transition-all duration-700 delay-500`}>
              <div className="flex gap-x-6 items-center">
                <img src={shield} className="object-cover h-14 w-14 transition-transform duration-500 hover:scale-125 hover:rotate-12" alt="Licensed & Trustworthy" />
                <div>
                  <p className="font-bold text-xl">Licensed & Trustworthy</p>
                  <p className="mt-2 max-w-[400px]">We follow all regulatory standards</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      
        {/* Frequently asked questions Section */}
        <section id="faq" className="py-20">
          <h2 className={`py-12 text-center text-[#2B47FF] font-bold text-4xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent transform transition-all duration-1000 ease-out ${visibleSections.faq ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Frequently Asked Questions
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className={`w-full md:w-1/2 transform transition-all duration-1000 delay-200 ${visibleSections.faq ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'}`}>
              <h3 className="text-3xl font-bold">Need Help? We're Here for You!</h3>
              <p className="mt-6 text-xl text-gray-600">
                Have questions about our loan options, repayment plans, or eligibility criteria? Our team is ready to assist you. Reach out to us, and we'll guide you through every step of the process.
              </p>
              <button 
              onClick={() => navigate('/contact')}
              className="bg-black hover:bg-[#7487FF] text-white text-xl font-bold px-6 py-3 rounded-md mt-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                Contact Us
              </button>
            </div>

            <div className={`w-full md:w-1/2 transform transition-all duration-1000 delay-400 ${visibleSections.faq ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'}`}>
              <FAQ />
            </div>
          </div>
        </section>
      </div>
      
      {/* Add animate-fade-in-up class to Footer for animation */}
      <div className="transform transition-opacity duration-1000 ease-in opacity-0 animate-fade-in">
        <Footer />
      </div>
    </div>
  );
}

export default Home;