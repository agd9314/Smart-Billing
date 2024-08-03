import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
// import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Chart from './components/Analytics/Chart.js';
import Services from './components/Inventory/Service.js';
import SignUp from './Authentication/SignUp.js';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import InvoicePage from './components/Invoice/Invoice.jsx';
import InvoiceForm from './components/Invoice/InvoiceForm.jsx'; // Import the InvoiceForm

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  

  return (
    <BrowserRouter>
      <div className="absolute  -z-10 h-[70rem] w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="App">
          {showNavbar && <Navbar />}
          <Routes>
            <Route path="/" element={<Landing onGetStartedClick={setShowNavbar} />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Analytics" element={<Chart />} />
            <Route path="/inventory" element={<Services />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/invoice" element={<InvoiceForm />} /> {/* Add InvoiceForm route */}
            <Route path="/invoice/:id" element={<InvoicePage />} /> {/* Add InvoicePage route */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;