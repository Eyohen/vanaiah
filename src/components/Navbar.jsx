

// // Navbar.jsx
// import { useState, useEffect } from 'react';
// import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
// import { FiMail } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import logo from '../assets/logo.png';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//       isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
//     }`}>
//       <div className="container mx-auto px-4 md:px-6">
//         {/* Desktop Navigation - Three Column Layout */}
//         <div className="hidden md:grid grid-cols-3 items-center">
//           {/* Logo - Left Column */}
//           <div className="flex items-center">
//             <Link to="/">
//               <img src={logo} alt="Vanaiah Logo" className="h-12" />
//             </Link>
//           </div>
          
//           {/* Navigation Links - Center Column */}
//           <div className="flex items-center justify-center space-x-8">
//             <Link to="/" className="text-gray-800 font-medium hover:text-[#2B47FF] transition-colors">Home</Link>
//             <Link to="/about" className="text-gray-800 font-medium hover:text-[#2B47FF] transition-colors">About</Link>
//             <Link to="/salary-loan" className="text-gray-800 font-medium hover:text-[#2B47FF] transition-colors">Loans</Link>
//             <Link to="/faq" className="text-gray-800 font-medium hover:text-[#2B47FF] transition-colors">FAQ</Link>
//           </div>
          
//           {/* Contact Button - Right Column */}
//           <div className="flex justify-end">
//             <Link 
//               to="/contact" 
//               className="bg-[#2B47FF] hover:bg-black text-white px-4 py-2 rounded-md font-medium transition-colors"
//             >
//               Contact us
//             </Link>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className="md:hidden flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/">
//               <img src={logo} alt="Vanaiah Logo" className="h-10" />
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-gray-800 focus:outline-none"
//           >
//             {isMenuOpen ? (
//               <HiOutlineX className="h-6 w-6" />
//             ) : (
//               <HiOutlineMenu className="h-6 w-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4 flex flex-col space-y-4">
//             <Link to="/" className="text-gray-800 font-medium">Home</Link>
//             <Link to="/about" className="text-gray-800 font-medium">About</Link>
//             <Link to="/salary-loan" className="text-gray-800 font-medium">Loans</Link>
//             <Link to="/faq" className="text-gray-800 font-medium">FAQ</Link>
//             <Link
//               to="/contact" 
//               className="bg-[#2B47FF] text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors inline-block text-center"
//             >
//               Contact us
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// Navbar.jsx
import { useState, useEffect } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Get current location

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

  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Desktop Navigation - Three Column Layout */}
        <div className="hidden md:grid grid-cols-3 items-center">
          {/* Logo - Left Column */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Vanaiah Logo" className="h-12" />
            </Link>
          </div>
          
          {/* Navigation Links - Center Column */}
          <div className="flex items-center justify-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${isActive('/') ? 'text-[#2B47FF]' : 'text-gray-800 hover:text-[#2B47FF]'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${isActive('/about') ? 'text-[#2B47FF]' : 'text-gray-800 hover:text-[#2B47FF]'}`}
            >
              About
            </Link>
            <Link 
              to="/salary-loan" 
              className={`font-medium transition-colors ${isActive('/salary-loan') ? 'text-[#2B47FF]' : 'text-gray-800 hover:text-[#2B47FF]'}`}
            >
              Loans
            </Link>
            <Link 
              to="/faq" 
              className={`font-medium transition-colors ${isActive('/faq') ? 'text-[#2B47FF]' : 'text-gray-800 hover:text-[#2B47FF]'}`}
            >
              FAQ
            </Link>
          </div>
          
          {/* Contact Button - Right Column */}
          <div className="flex justify-end">
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                isActive('/contact') 
                  ? 'bg-black text-white' 
                  : 'bg-[#2B47FF] hover:bg-black text-white'
              }`}
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Vanaiah Logo" className="h-10" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md py-4 px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`font-medium ${isActive('/') ? 'text-[#2B47FF]' : 'text-gray-800'}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium ${isActive('/about') ? 'text-[#2B47FF]' : 'text-gray-800'}`}
            >
              About
            </Link>
            <Link 
              to="/salary-loan" 
              className={`font-medium ${isActive('/salary-loan') ? 'text-[#2B47FF]' : 'text-gray-800'}`}
            >
              Loans
            </Link>
            <Link 
              to="/faq" 
              className={`font-medium ${isActive('/faq') ? 'text-[#2B47FF]' : 'text-gray-800'}`}
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-md font-medium transition-colors inline-block text-center ${
                isActive('/contact') 
                  ? 'bg-black text-white' 
                  : 'bg-[#2B47FF] text-white hover:bg-gray-800'
              }`}
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