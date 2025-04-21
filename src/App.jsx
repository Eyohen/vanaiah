import React, { useState } from 'react';
import {Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import SalaryLoan from './pages/SalaryLoan';
import AmortizationLoan from './pages/AmortizationLoan';
import TravelLoan from './pages/TravelLoan';
import ApplyNow from './pages/ApplyNow';


const App = () => {

  const isAuthenticated = true;

return (
  <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/applynow" element={<ApplyNow />} />
  <Route path="/faq" element={<FAQ />} />
  <Route path="/salary-loan" element={<SalaryLoan />} />
  <Route path="/amortization-loan" element={<AmortizationLoan />} />
  <Route path="/travel-loan" element={<TravelLoan />} />

  </Routes>
)
}

export default App