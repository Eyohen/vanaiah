// // Contact.jsx
// import { useState } from 'react';
// import Navbar from '../components/Navbar';
// import { FiMail, FiMapPin, FiPhone, FiSend, FiMessageSquare } from 'react-icons/fi';
// import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
// import contacthero from '../assets/contacthero.png'
// import rafiki from '../assets/rafiki.png'
// import Footer from '../components/Footer';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     subject: 'General Inquiry',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitSuccess(true);
      
//       // Reset form after showing success message
//       setTimeout(() => {
//         setSubmitSuccess(false);
//         setFormData({
//           name: '',
//           email: '',
//           company: '',
//           subject: 'General Inquiry',
//           message: ''
//         });
//       }, 3000);
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar />
      
//       {/* Header */}
//       <section className="pt-32 pb-16 px-4 md:px-0 h-[400px]"
//       style={{backgroundImage:`url('${contacthero}')`}}
//       >
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center">
//           <p className="text-gray-600 text-2xl max-w-2xl mx-auto">
//            CONTACT US
//             </p>
//             <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">We'd love to talk to you</h1>
        
//           </div>
//         </div>
//       </section>
      
//       {/* Contact Options */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto max-w-6xl px-4">
//           <div className="grid md:grid-cols-2 gap-8">
         
            
//             {/* Phone */}
//             <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
//               <div className="mx-auto bg-gray-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
//                 <FiPhone className="text-[#2B47FF] text-xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-[#2B47FF] mb-2">Call Us</h3>
//               <p className="text-gray-600 mb-4">Available Mon-Fri, 8AM-6PM PT</p>
//               <a href="tel:+18005551234" className="text-black font-medium hover:underline">
//               +2347066391271
//               </a>
//             </div>


//                {/* Email */}
//                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
//               <div className="mx-auto bg-gray-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
//                 <FiMail className="text-[#2B47FF] text-xl" />
//               </div>
//               <h3 className="text-xl font-semibold text-[#2B47FF] mb-2">Email Us</h3>
//               <p className="text-gray-600 mb-4">Our support team typically responds within 2 hours</p>
//               <a href="mailto:support@papersignal.com" className="text-black font-medium hover:underline">
//               support@Vanaiah.com
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Contact Form Section */}
//       <section className="py-16">
//         <div className="container mx-auto max-w-6xl px-4">
//           <div className="flex flex-col md:flex-row gap-12 items-center">
//             <div className="md:w-2/5">
//               <h2 className="text-3xl font-bold text-black mb-6">Send Us a Message</h2>
//               <p className="text-gray-600 mb-8">
//               Reach out to us to have all your questions answered.
//               </p>
      
          
//             </div>
            
//             <div className="">
            
// <img src={rafiki}/>

//             </div>
//           </div>
//         </div>
//       </section>



//       <section className='pb-9'>
// <div className='flex flex-col justify-center items-center'>
//       <p className='font-bold text-4xl'>Send your questions to us!</p>

// <div className='flex gap-x-4'>
//         <div>
//           <p>Name</p>
//           <input className='border border-[#2B47FF] px-2 py-2 w-[442px] rounded-lg'/>
//         </div>


//         <div>
//           <p>Email</p>
//           <input className='border border-[#2B47FF] px-2 py-2 w-[442px] rounded-lg'/>
//         </div>

//         </div>

//         <div className='mt-4'>
//           <p>Subject</p>
//           <input className='border border-[#2B47FF] px-2 py-2 w-[900px] rounded-lg'/>
//         </div>

//         <div className='mt-4'>
//           <p>Message</p>
//           <input className='border border-[#2B47FF] px-2 py-2 w-[900px] h-[350px] rounded-lg'/>
//         </div>

//         <button className='text-white bg-[#2B47FF] px-12 py-3 rounded-xl mt-6'>Send</button>


//         </div>

//       </section>
      
//       {/* Footer */}
//     <Footer/>
//     </div>
//   );
// };

// export default Contact;




// Contact.jsx
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { FiMail, FiMapPin, FiPhone, FiSend, FiMessageSquare } from 'react-icons/fi';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import contacthero from '../assets/contacthero.png';
import rafiki from '../assets/rafiki.png';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // For animations
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    contactOptions: false,
    messageSection: false,
    formSection: false
  });
  
  // Track scroll for animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'contactOptions', 'messageSection', 'formSection'];
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
  
  // For input field focus animations
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          subject: 'General Inquiry',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      {/* Header */}
      <section 
        id="hero"
        className="pt-32 pb-16 px-4 md:px-0 h-[400px] relative"
        style={{
          backgroundImage:`url('${contacthero}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className={`text-center transform transition-all duration-1000 ${
            visibleSections.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-white text-2xl font-medium max-w-2xl mx-auto mb-2">
              CONTACT US
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              We'd love to talk to you
            </h1>
            
            {/* Added subtle animation for visual interest */}
            <div className="w-24 h-1 bg-[#2B47FF] mx-auto mt-6 animate-pulse"></div>
          </div>
        </div>
      </section>
      
      {/* Contact Options */}
      <section id="contactOptions" className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Phone */}
            <div 
              className={`bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center transform hover:-translate-y-2 ${
                visibleSections.contactOptions ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '100ms', transitionDuration: '800ms' }}
            >
              <div className="mx-auto bg-gray-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group transform transition-all duration-300 hover:scale-110 hover:bg-blue-50">
                <FiPhone className="text-[#2B47FF] text-xl group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-[#2B47FF] mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Available Mon-Fri, 8AM-6PM PT</p>
              <a 
                href="tel:+2348038938564" 
                className="text-black font-medium hover:text-[#2B47FF] transition-colors duration-300 inline-flex items-center"
              >
                +234 8038938564
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Email */}
            <div 
              className={`bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center transform hover:-translate-y-2 ${
                visibleSections.contactOptions ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '300ms', transitionDuration: '800ms' }}
            >
              <div className="mx-auto bg-gray-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 group transform transition-all duration-300 hover:scale-110 hover:bg-blue-50">
                <FiMail className="text-[#2B47FF] text-xl group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-[#2B47FF] mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Our support team typically responds within 2 hours</p>
              <a 
                href="mailto:support@Vanaiah.com" 
                className="text-black font-medium hover:text-[#2B47FF] transition-colors duration-300 inline-flex items-center"
              >
                support@Vanaiah.com
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section id="messageSection" className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div 
              className={`md:w-2/5 transform transition-all duration-1000 ${
                visibleSections.messageSection ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <h2 className="text-3xl font-bold text-black mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Reach out to us to have all your questions answered.
              </p>
              
              {/* Added benefits list */}
              <div className="space-y-4 mt-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <FiMessageSquare className="text-[#2B47FF]" />
                  </div>
                  <p className="text-gray-700">Fast response to all inquiries</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <FiPhone className="text-[#2B47FF]" />
                  </div>
                  <p className="text-gray-700">Dedicated customer support</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <FiSend className="text-[#2B47FF]" />
                  </div>
                  <p className="text-gray-700">Personalized financial advice</p>
                </div>
              </div>
            </div>
            
            <div 
              className={`transform transition-all duration-1000 ${
                visibleSections.messageSection ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <img 
                src={rafiki} 
                alt="Contact Illustration" 
                className="hover:scale-105 transition-transform duration-500 max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="formSection" className="pb-16">
        <div className="flex flex-col justify-center items-center">
          <p 
            className={`font-bold text-4xl mb-8 text-center transform transition-all duration-700 ${
              visibleSections.formSection ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Send your questions to us!
          </p>

          <form 
            onSubmit={handleSubmit}
            className="w-full max-w-4xl"
          >
            <div 
              className={`flex flex-col md:flex-row gap-4 transform transition-all duration-700 delay-100 ${
                visibleSections.formSection ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="flex-1">
                <label className="block text-gray-700 mb-2">Name</label>
                <div className={`relative ${focusedField === 'name' ? 'scale-[1.02]' : ''} transition-transform duration-300`}>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="border-2 border-[#2B47FF] px-4 py-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B47FF] focus:ring-opacity-50 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-[#2B47FF] transition-all duration-300 ${
                    focusedField === 'name' ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
              </div>

              <div className="flex-1">
                <label className="block text-gray-700 mb-2">Email</label>
                <div className={`relative ${focusedField === 'email' ? 'scale-[1.02]' : ''} transition-transform duration-300`}>
                  <input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="border-2 border-[#2B47FF] px-4 py-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B47FF] focus:ring-opacity-50 transition-all duration-300"
                    placeholder="Your email"
                    required
                  />
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-[#2B47FF] transition-all duration-300 ${
                    focusedField === 'email' ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
              </div>
            </div>

            <div 
              className={`mt-6 transform transition-all duration-700 delay-200 ${
                visibleSections.formSection ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <label className="block text-gray-700 mb-2">Subject</label>
              <div className={`relative ${focusedField === 'subject' ? 'scale-[1.02]' : ''} transition-transform duration-300`}>
                <input 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  className="border-2 border-[#2B47FF] px-4 py-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B47FF] focus:ring-opacity-50 transition-all duration-300"
                  placeholder="What is your question about?"
                  required
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-[#2B47FF] transition-all duration-300 ${
                  focusedField === 'subject' ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            </div>

            <div 
              className={`mt-6 transform transition-all duration-700 delay-300 ${
                visibleSections.formSection ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <label className="block text-gray-700 mb-2">Message</label>
              <div className={`relative ${focusedField === 'message' ? 'scale-[1.02]' : ''} transition-transform duration-300`}>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="border-2 border-[#2B47FF] px-4 py-3 w-full h-[350px] rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#2B47FF] focus:ring-opacity-50 transition-all duration-300"
                  placeholder="Please type your message here..."
                  required
                ></textarea>
                <div className={`absolute bottom-0 left-0 h-0.5 bg-[#2B47FF] transition-all duration-300 ${
                  focusedField === 'message' ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            </div>

            <div 
              className={`flex justify-center mt-8 transform transition-all duration-700 delay-400 ${
                visibleSections.formSection ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <button 
                type="submit"
                className="text-white bg-[#2B47FF] px-12 py-3 rounded-xl hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send
                    <FiSend className="ml-2" />
                  </>
                )}
              </button>
            </div>
            
            {/* Success message */}
            {submitSuccess && (
              <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center animate-fade-in">
                <strong className="font-bold">Thank you!</strong>
                <span className="block sm:inline"> Your message has been sent successfully. We'll get back to you soon.</span>
              </div>
            )}
          </form>
        </div>
      </section>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;