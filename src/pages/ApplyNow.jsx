// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import kite from '../assets/kite.png';
// import slide1 from '../assets/slide1.png';
// import slide2 from '../assets/slide2.png';
// import slide3 from '../assets/slide3.png';
// import Footer from '../components/Footer';

// const ApplyNow = () => {
//   // State to track current slide
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   // Array of slide images
//   const slides = [slide1, slide2, slide3];
  
//   // Auto-advancing slides effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 5000); // Change slide every 5 seconds
    
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />

//       {/* Header Carousel */}
//       <section className="pt-32 pb-16 px-4 md:px-0 h-[400px] relative overflow-hidden">
//         {/* Slides container */}
//         <div className="absolute inset-0 w-full h-full">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//                 currentSlide === index ? 'opacity-100' : 'opacity-0'
//               }`}
//               style={{
//                 backgroundImage: `url('${slide}')`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 zIndex: currentSlide === index ? 10 : 0
//               }}
//             />
//           ))}
//         </div>
        
//         {/* Optional overlay for text readability */}
//         <div className="absolute inset-0 bg-black bg-opacity-40 z-20"></div>
        
//         {/* Content */}
//         <div className="container mx-auto max-w-6xl relative z-30">
//           <div className="text-center text-white">
//             {/* Optional header content */}
//           </div>
//         </div>
        
//         {/* Carousel indicators (optional - small dots at bottom) */}
//         <div className="absolute bottom-4 left-0 right-0 z-40 flex justify-center">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-2 h-2 mx-1 rounded-full transition-all ${
//                 currentSlide === index 
//                   ? 'bg-white w-3 h-3' 
//                   : 'bg-white bg-opacity-50'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </section>

//       <section className="pb-24">
//         <div className="text-center py-16">
//           <p className="font-bold text-5xl">Apply Now</p>
//           <p className="text-xl pt-4">And get the best of Vanaiah!</p>
//         </div>

//         <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-x-12 px-4">
//           <button className="bg-[#2B47FF] rounded-xl py-4 text-white px-6 md:px-16 mb-4 md:mb-0 hover:bg-blue-700 transition-colors duration-300">
//             <div className="flex flex-col items-center justify-center gap-2">
//               <img src={kite} className="w-9" alt="Travel icon" />
//               <p>Travel Loan Application</p>
//             </div>
//           </button>
          
//           <button className="bg-[#2B47FF] rounded-xl py-4 text-white px-6 md:px-16 mb-4 md:mb-0 hover:bg-blue-700 transition-colors duration-300">
//             <div className="flex flex-col items-center justify-center gap-2">
//               <img src={kite} className="w-9" alt="Salary icon" />
//               <p>Salary Loan Application</p>
//             </div>
//           </button>
          
//           <button className="bg-[#2B47FF] rounded-xl py-4 text-white px-6 md:px-16 hover:bg-blue-700 transition-colors duration-300">
//             <div className="flex flex-col items-center justify-center gap-2">
//               <img src={kite} className="w-9" alt="Personal loan icon" />
//               <p>Personal Loan Application</p>
//             </div>
//           </button>
//         </div>
//       </section>
      
//       <Footer />
//     </div>
//   );
// };

// export default ApplyNow;





import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import kite from '../assets/kite.png';
import money from '../assets/money.png';
import human from '../assets/human.png';
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';

const ApplyNow = () => {
    const navigate = useNavigate();
  // State to track current slide
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // State to track elements visibility (for animations)
  const [isVisible, setIsVisible] = useState({
    title: false,
    subtitle: false,
    buttons: false
  });
  
  // Active button state for hover effects
  const [activeButton, setActiveButton] = useState(null);
  
  // Array of slide images
  const slides = [slide1, slide2, slide3];
  
  // Auto-advancing slides effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  // Animate elements on page load
  useEffect(() => {
    // Staggered animation timing
    setTimeout(() => setIsVisible(prev => ({ ...prev, title: true })), 300);
    setTimeout(() => setIsVisible(prev => ({ ...prev, subtitle: true })), 700);
    setTimeout(() => setIsVisible(prev => ({ ...prev, buttons: true })), 1100);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Button data with icons and application types
  const applicationButtons = [
    {
      id: 'travel',
      icon: kite,
      label: 'Travel Loan Application',
      description: 'Fund your travel needs and explore the world',
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 'salary',
      icon: money,
      label: 'Salary Loan Application',
      description: 'Get advance on your salary with quick approvals',
      color: 'from-indigo-600 to-indigo-800'
    },
    {
      id: 'personal',
      icon: human,
      label: 'Personal Loan Application',
      description: 'Cover your personal expenses with flexible terms',
      color: 'from-purple-600 to-purple-800'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* Header Carousel */}
      <section className="pt-32 pb-16 px-4 md:px-0 h-[500px] relative overflow-hidden">
        {/* Slides container */}
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${slide}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: currentSlide === index ? 10 : 0
              }}
            />
          ))}
        </div>
        
        {/* Optional overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-20"></div>
        
        {/* Content overlay on carousel */}
        <div className="container mx-auto max-w-6xl relative z-30 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className={`text-4xl md:text-6xl font-bold mb-4 transition-all duration-700 transform ${
              isVisible.title ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Start Your Financial Journey
            </h1>
            <p className={`text-xl md:text-2xl max-w-2xl mx-auto transition-all duration-700 delay-300 transform ${
              isVisible.subtitle ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Choose the loan that fits your needs and apply in minutes
            </p>
          </div>
        </div>
        
        {/* Carousel indicators */}
        <div className="absolute bottom-4 left-0 right-0 z-40 flex justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 mx-1 rounded-full transition-all ${
                currentSlide === index 
                  ? 'bg-white w-3 h-3' 
                  : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Apply Now Section */}
      <section className="pb-24 relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -mr-32 -mt-32 opacity-50"></div>
        {/* <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full -ml-48 -mb-48 opacity-50"></div> */}
        
        <div className="text-center py-16 relative animate-on-scroll">
          <p className={`font-bold text-5xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text transform transition-all duration-700 ${
            isVisible.title ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Apply Now
          </p>
          <p className={`text-xl pt-4 text-gray-700 transform transition-all duration-700 delay-200 ${
            isVisible.subtitle ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            And get the best of Vanaiah!
          </p>
          
          {/* Application process steps */}
          <div className="max-w-4xl mx-auto mt-12 px-4 animate-on-scroll">
            <div className="flex flex-col md:flex-row justify-between mb-16">
              <div className="flex flex-col items-center mb-8 md:mb-0 transform transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">1</div>
                <div className="h-8 w-1 bg-blue-200 my-2"></div>
                <h3 className="text-xl font-semibold mb-2">Choose a Loan</h3>
                <p className="text-gray-600 text-center max-w-xs">Select the loan type that best suits your financial needs</p>
              </div>
              
              <div className="flex flex-col items-center mb-8 md:mb-0 transform transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl font-bold">2</div>
                <div className="h-8 w-1 bg-indigo-200 my-2"></div>
                <h3 className="text-xl font-semibold mb-2">Fill Application</h3>
                <p className="text-gray-600 text-center max-w-xs">Complete our simple application form with your details</p>
              </div>
              
              <div className="flex flex-col items-center transform transition-all duration-500 hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl font-bold">3</div>
                <div className="h-8 w-1 bg-purple-200 my-2"></div>
                <h3 className="text-xl font-semibold mb-2">Get Approved</h3>
                <p className="text-gray-600 text-center max-w-xs">Receive quick approval and funds within 24-48 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Application buttons with enhanced styling */}
        <div className={`flex flex-col md:flex-row justify-center gap-4 md:gap-x-8 px-4 max-w-6xl mx-auto transition-all duration-1000 transform ${
          isVisible.buttons ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {applicationButtons.map((button) => (
            <div 
              key={button.id}
              className="w-full md:w-1/3"
              onMouseEnter={() => setActiveButton(button.id)}
              onMouseLeave={() => setActiveButton(null)}
            >
              <Link to={'https://form.vanaiah.com/'} >
              <button 
                className={`w-full bg-gradient-to-r ${button.color} rounded-xl py-6 px-4 text-white shadow-lg 
                  transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                  ${activeButton === button.id ? 'scale-105' : ''}`}
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className={`p-3 bg-white bg-opacity-20 rounded-full transform transition-all duration-300 ${
                    activeButton === button.id ? 'rotate-12 scale-110' : ''
                  }`}>
                    <img src={button.icon} className="w-10 h-10" alt={`${button.id} icon`} />
                  </div>
                  <p className="text-xl font-semibold">{button.label}</p>
                  <p className="text-sm text-white text-opacity-90">{button.description}</p>
                </div>
              </button>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Benefits section */}
        {/* <div className="max-w-6xl mx-auto mt-24 px-4 animate-on-scroll">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Vanaiah?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-blue-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fast Approvals</h3>
              <p className="text-gray-600">Get your loan approved within 24-48 hours with minimal paperwork</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-blue-600 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Secure Process</h3>
              <p className="text-gray-600">Your data is secure with our encrypted application process</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-blue-600 text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold mb-2">Flexible Terms</h3>
              <p className="text-gray-600">Choose repayment terms that work best for your financial situation</p>
            </div>
          </div>
        </div>
         */}

      </section>
      
      {/* Custom CSS for scroll animations */}
      {/* <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
       */}
      <Footer />
    </div>
  );
};

export default ApplyNow;