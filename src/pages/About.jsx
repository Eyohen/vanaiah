// import React from 'react'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
// import aboutus from '../assets/aboutus.png'
// import greencircle from '../assets/greencircle.png'
// import vision from '../assets/vision.png'
// import mission from '../assets/mission.png'

// const About = () => {
//   return (
//     <div>
//       <Navbar/>

//       <section className='pt-32 px-4 md-px-0'>

// <div className='flex flex-col md:flex-row justify-center gap-x-32 gap-y-6 md:gap-y-0'>
//         <div>
//           <p className='text-5xl font-bold text-[#2B47FF]'>About Us</p>
//           <p className='w-[420px] text-xl mt-2'>VANAIAH is a licensed micro-lending company in Lagos, dedicaated to providing financial solutions tailored to individuals and SMEs. We believe in integrity, transparency, and exceptional service, ensuring you get the support you need when you need it.</p>
//         </div>

//         <img src={aboutus} className='object-cover w-[500px] h-[500px] rounded-xl' />
//         </div>

//       </section>
      

//       <section className='pt-32'>
// <div className='flex flex-col md:flex-row justify-center gap-x-32 items-center gap-y-6 md:gap-y-0'>

//         <p className='font-bold text-5xl text-[#2B47FF]'>Our Pillars</p>

//         <div className='flex flex-col gap-y-6'>

//         <button className="border-2 hover:border-[#2B47FF] rounded-xl py-4 px-6 md:px-16 mb-4 md:mb-0 transition-colors duration-300 shadow-2xl">
//              <div className="flex flex-col items-center justify-center gap-2">
//                <img src={greencircle} className="w-9" alt="Travel icon" />
//                <p className='font-semibold text-lg'>Transparency</p>
//              </div>
//            </button>

//            <button className="border-2 hover:border-[#2B47FF] rounded-xl py-4 px-6 md:px-16 mb-4 md:mb-0 transition-colors duration-300 shadow-2xl">
//              <div className="flex flex-col items-center justify-center gap-2">
//                <img src={greencircle} className="w-9" alt="Travel icon" />
//                <p className='font-semibold text-lg'>Excellence in value</p>
//              </div>
//            </button>

//            <button className="border-2 hover:border-[#2B47FF] rounded-xl py-4 px-6 md:px-16 mb-4 md:mb-0 transition-colors duration-300 shadow-2xl">
//              <div className="flex flex-col items-center justify-center gap-2">
//                <img src={greencircle} className="w-9" alt="Travel icon" />
//                <p className='font-semibold text-lg'>Customer satisfaction</p>
//              </div>
//            </button>

//            <button className="border-2 hover:border-[#2B47FF] rounded-xl py-4 px-6 md:px-16 mb-4 md:mb-0 transition-colors duration-300 shadow-2xl">
//              <div className="flex flex-col items-center justify-center gap-2">
//                <img src={greencircle} className="w-9" alt="Travel icon" />
//                <p className='font-semibold text-lg'>Integrity in service</p>
//              </div>
//            </button>

//         </div>

//         </div>
//       </section>

// {/* our vision */}
//       <section className='pt-32'>

// <div className='flex flex-col md:flex-row justify-center gap-x-32 gap-y-6 md:gap-y-0'>
       

//         <img src={vision} className='object-cover w-[550px] h-[350px] rounded-xl' />
//         <div>
//           <p className='text-5xl font-bold'>Our Vision</p>
//           <p className='w-[420px] text-xl mt-2'>VANAIAH is a licensed micro-lending company in Lagos, dedicaated to providing financial solutions tailored to individuals and SMEs. We believe in integrity, transparency, and exceptional service, ensuring you get the support you need when you need it.</p>
//         </div>
//         </div>

//       </section>


//       {/* our mission */}
//       <section className='pt-32 pb-12'>

// <div className='flex flex-col md:flex-row justify-center gap-x-32 gap-y-6 md:gap-y-0'>
//         <div>
//           <p className='text-5xl font-bold'>Our Mission</p>
//           <p className='w-[420px] text-xl mt-2'>At VANAIAH, our mission is to deliver secure, transparent, and affordable lending services that exceed customer expectations. We are committed to creating meaningful value for our clients by offering accessible credit solutions, fostering financial literacy, and driving positive economic impact across communities.
//           </p>
//         </div>

//         <img src={mission} className='object-cover w-[550px] h-[350px] rounded-xl' />
//         </div>

//       </section>
//       <Footer/>
//     </div>
//   )
// }

// export default About





import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import aboutus from '../assets/aboutus.png';
import greencircle from '../assets/greencircle.png';
import vision from '../assets/vision.png';
import mission from '../assets/mission.png';

const About = () => {
  // State to track scroll position for animations
  const [scrollY, setScrollY] = useState(0);
  
  // State to track which elements are visible
  const [visibleSections, setVisibleSections] = useState({
    about: false,
    pillars: false,
    vision: false,
    mission: false
  });
  
  // Active pillar for hover animations
  const [activePillar, setActivePillar] = useState(null);

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update visible sections based on scroll position
      const sections = ['about', 'pillars', 'vision', 'mission'];
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

  // Pillar data
  const pillars = [
    { id: "transparency", name: "Transparency", description: "Clear and honest communication in all our dealings" },
    { id: "excellence", name: "Excellence in value", description: "Delivering superior service and solutions" },
    { id: "satisfaction", name: "Customer satisfaction", description: "Your financial success is our priority" },
    { id: "integrity", name: "Integrity in service", description: "Operating with honesty and ethical standards" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      {/* About Us Section */}
      <section id="about" className="pt-32 px-4 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-center gap-x-32 gap-y-6 md:gap-y-0 max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 ease-out ${
            visibleSections.about ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
          }`}>
            <p className="text-5xl font-bold text-[#2B47FF] bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent animate-gradient">
              About Us
            </p>
            <p className="w-full md:w-[420px] text-xl mt-2 text-gray-700">
              VANAIAH is a licensed micro-lending company in Lagos, dedicated to providing financial solutions tailored to individuals and SMEs. We believe in integrity, transparency, and exceptional service, ensuring you get the support you need when you need it.
            </p>
          </div>

          <div className={`relative overflow-hidden rounded-xl transform transition-all duration-1000 ease-out ${
            visibleSections.about ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
          }`}
          style={{
            transform: `perspective(1000px) rotateY(${scrollY * 0.01}deg) rotateX(${scrollY * -0.005}deg)`,
            transition: 'transform 0.1s ease-out'
          }}>
            <img 
              src={aboutus} 
              className="object-cover w-full md:w-[500px] h-[500px] rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]" 
              alt="About Vanaiah"
            />
            <div className="absolute inset-0 rounded-xl border-4 border-transparent hover:border-blue-300 transition-all duration-500"></div>
          </div>
        </div>
      </section>
      
      {/* Our Pillars Section */}
      <section id="pillars" className="pt-32 px-4 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-center gap-x-32 items-center gap-y-6 md:gap-y-0 max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 ease-out ${
            visibleSections.pillars ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
          }`}>
            <p className="font-bold text-5xl text-[#2B47FF] bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Our Pillars
            </p>
          </div>

          <div className="flex flex-col gap-y-6 transform transition-all duration-1000 ease-out">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.id}
                className={`transform transition-all duration-700 delay-${index * 200} ${
                  visibleSections.pillars ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
                }`}
                onMouseEnter={() => setActivePillar(pillar.id)}
                onMouseLeave={() => setActivePillar(null)}
              >
                <button 
                  className={`border-2 ${
                    activePillar === pillar.id 
                      ? 'border-[#2B47FF] bg-blue-50' 
                      : 'border-gray-200 hover:border-[#2B47FF]'
                  } rounded-xl py-4 px-6 md:px-16 mb-4 md:mb-0 transition-all duration-300 shadow-lg hover:shadow-xl w-full`}
                >
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className={`transition-all duration-500 transform ${
                      activePillar === pillar.id ? 'scale-125 rotate-12' : ''
                    }`}>
                      <img src={greencircle} className="w-9" alt={`${pillar.name} icon`} />
                    </div>
                    <p className="font-semibold text-lg">{pillar.name}</p>
                    
                    {/* Description that appears on hover */}
                    <p className={`text-sm text-gray-600 transition-all duration-500 max-h-0 overflow-hidden ${
                      activePillar === pillar.id ? 'max-h-20 opacity-100 mt-2' : 'opacity-0'
                    }`}>
                      {pillar.description}
                    </p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section id="vision" className="pt-32 px-4 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-center gap-x-32 gap-y-6 md:gap-y-0 max-w-7xl mx-auto">
          <div className={`relative overflow-hidden rounded-xl transform transition-all duration-1000 ease-out ${
            visibleSections.vision ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
          }`} 
          style={{ 
            transform: `translateY(${scrollY * 0.03}px)`,
            transition: 'transform 0.1s ease-out'
          }}>
            <img 
              src={vision} 
              className="object-cover w-full md:w-[550px] h-[350px] rounded-xl shadow-lg hover:shadow-xl transition-all duration-500" 
              alt="Our Vision"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-xl"></div>
          </div>
          
          <div className={`transform transition-all duration-1000 ease-out ${
            visibleSections.vision ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
          }`}>
            <p className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Our Vision
            </p>
            <p className="w-full md:w-[420px] text-xl mt-2 text-gray-700">
              VANAIAH is a licensed micro-lending company in Lagos, dedicated to providing financial solutions tailored to individuals and SMEs. We believe in integrity, transparency, and exceptional service, ensuring you get the support you need when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" className="pt-64 pb-12 px-4 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-center gap-x-32 gap-y-6 md:gap-y-0 max-w-7xl mx-auto">
          <div className={`transform transition-all duration-1000 ease-out ${
            visibleSections.mission ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
          }`}>
            <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Mission
            </p>
            <p className="w-full md:w-[420px] text-xl mt-2 text-gray-700">
              At VANAIAH, our mission is to deliver secure, transparent, and affordable lending services that exceed customer expectations. We are committed to creating meaningful value for our clients by offering accessible credit solutions, fostering financial literacy, and driving positive economic impact across communities.
            </p>
          </div>

          <div className={`relative overflow-hidden rounded-xl transform transition-all duration-1000 ease-out ${
            visibleSections.mission ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
          }`}
          style={{ 
            transform: `translateY(${scrollY * -0.02}px)`,
            transition: 'transform 0.1s ease-out'
          }}>
            <img 
              src={mission} 
              className="object-cover w-full md:w-[550px] h-[350px] rounded-xl shadow-lg hover:shadow-xl transition-all duration-500" 
              alt="Our Mission"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-xl"></div>
          </div>
        </div>
      </section>
      
      {/* Moving background elements (subtle) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20">
        <div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100"
          style={{
            transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.02}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-purple-100"
          style={{
            transform: `translate(${scrollY * -0.05}px, ${scrollY * -0.02}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>
      
      {/* Add custom CSS for animations */}
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
      
      <Footer />
    </div>
  );
};

export default About;