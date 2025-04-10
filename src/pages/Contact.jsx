// Contact.jsx
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { FiMail, FiMapPin, FiPhone, FiSend, FiMessageSquare } from 'react-icons/fi';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import contacthero from '../assets/contacthero.png'
import rafiki from '../assets/rafiki.png'
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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4 md:px-0 h-[400px]"
      style={{backgroundImage:`url('${contacthero}')`}}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
          <p className="text-gray-600 text-2xl max-w-2xl mx-auto">
           CONTACT US
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">We'd love to talk to you</h1>
        
          </div>
        </div>
      </section>
      
      {/* Contact Options */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8">
         
            
            {/* Phone */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="mx-auto bg-gray-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FiPhone className="text-[#2B47FF] text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#2B47FF] mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Available Mon-Fri, 8AM-6PM PT</p>
              <a href="tel:+18005551234" className="text-black font-medium hover:underline">
              +2347066391271
              </a>
            </div>


               {/* Email */}
               <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="mx-auto bg-gray-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FiMail className="text-[#2B47FF] text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#2B47FF] mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Our support team typically responds within 2 hours</p>
              <a href="mailto:support@papersignal.com" className="text-black font-medium hover:underline">
              support@Vanaiah.com
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/5">
              <h2 className="text-3xl font-bold text-black mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
              Reach out to us to have all your questions answered.
              </p>
              
             
          
              
          
            </div>
            
            <div className="">
            
<img src={rafiki}/>


            </div>
          </div>
        </div>
      </section>
      
   
      
      {/* Footer */}
    <Footer/>
    </div>
  );
};

export default Contact;