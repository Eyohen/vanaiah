// Navbar.jsx
import { useState, useEffect } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
          
            <span className="font-bold text-xl text-black"><img src={logo} /></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[#2B47FF] font-medium underline">Home</a>
            <a href="#documentation" className="text-gray-800 hover:text-black font-medium">About</a>
            <Link to="/salary-loan" className="text-gray-800 hover:text-black font-medium">Loans</Link>
            <Link to="/faq" className="text-gray-800 hover:text-black font-medium">FAQ</Link>
            

            <Link 
              to="/contact" 
              className="bg-[#2B47FF] text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {isMenuOpen ? (
                <HiOutlineX className="h-6 w-6" />
              ) : (
                <HiOutlineMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4 flex flex-col space-y-4">
            <a href="#features" className="text-gray-800 hover:text-black font-medium">Home</a>
            <Link to="/salary-loan" className="text-gray-800 hover:text-black font-medium">Loans</Link>
            <Link to="/faq" className="text-gray-800 hover:text-black font-medium">FAQ</Link>
        
            
            <Link
              to="/contact" 
              className="bg-[#2B47FF] text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors inline-block text-center"
            >
              Contact us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;