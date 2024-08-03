import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import invoiced from '../../../src/assets/Invoice-rafiki.png';


const InvoiceForm = () => {
  const [invoiceId, setInvoiceId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const navigate = useNavigate();

  const handleIdChange = (e) => setInvoiceId(e.target.value);
  const handleNameChange = (e) => setCustomerName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/invoice/${invoiceId}`);
  };

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto">
      <img src={invoiced} alt="Invoice" className="absolute ml-[65vw] w-56 h-56 items-center justify-items-center  " />

        <h1 className="text-3xl font-bold text-gray-100 mb-6">Generate Invoice</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div>
            <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="invoiceId">
              Invoice ID:
            </label>
            <input
              id="invoiceId"
              type="text"
              value={invoiceId}
              onChange={handleIdChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <label className="block text-gray-100 text-sm font-bold mb-2 mt-3" htmlFor="customerName">
              Customer Name:
            </label>
            <input
              id="customerName"
              type="text"
              value={customerName}
              onChange={handleNameChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
            Submit
          </button>
        </form>
        <Link to="/" className="text-blue-500 hover:text-blue-600 transition-colors duration-200">
          Go Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default InvoiceForm;
