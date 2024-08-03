import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Sample data for invoices
const invoicesData = [
  { id: 1, date: '2024-01-15', customer: 'John Doe', amount: 350.0, status: 'Paid', items: [{ name: 'Item A', quantity: 2, price: 50 }, { name: 'Item B', quantity: 1, price: 250 }], address: '123 Elm St, Springfield', invoiceNumber: 'INV001', paymentMethod: 'Credit Card' },
  { id: 2, date: '2024-01-28', customer: 'Jane Smith', amount: 500.0, status: 'Pending', items: [{ name: 'Item C', quantity: 3, price: 100 }, { name: 'Item D', quantity: 2, price: 100 }], address: '456 Maple St, Metropolis', invoiceNumber: 'INV002', paymentMethod: 'Bank Transfer' },
  { id: 3, date: '2024-02-12', customer: 'Alice Johnson', amount: 450.0, status: 'Paid', items: [{ name: 'Item E', quantity: 1, price: 200 }, { name: 'Item F', quantity: 5, price: 50 }], address: '789 Pine St, Gotham', invoiceNumber: 'INV003', paymentMethod: 'Cash' },
  { id: 4, date: '2024-02-25', customer: 'Bob Brown', amount: 600.0, status: 'Overdue', items: [{ name: 'Item G', quantity: 2, price: 200 }, { name: 'Item H', quantity: 1, price: 200 }], address: '101 Oak St, Star City', invoiceNumber: 'INV004', paymentMethod: 'Credit Card' },
  { id: 5, date: '2024-03-08', customer: 'Charlie Wilson', amount: 550.0, status: 'Paid', items: [{ name: 'Item I', quantity: 1, price: 150 }, { name: 'Item J', quantity: 4, price: 100 }], address: '202 Cedar St, Central City', invoiceNumber: 'INV005', paymentMethod: 'Credit Card' },
  { id: 6, date: '2024-03-20', customer: 'Diana Prince', amount: 750.0, status: 'Pending', items: [{ name: 'Item K', quantity: 3, price: 200 }, { name: 'Item L', quantity: 2, price: 75 }], address: '303 Birch St, Themyscira', invoiceNumber: 'INV006', paymentMethod: 'Bank Transfer' },
  { id: 7, date: '2024-04-01', customer: 'Clark Kent', amount: 900.0, status: 'Overdue', items: [{ name: 'Item M', quantity: 5, price: 100 }, { name: 'Item N', quantity: 2, price: 200 }], address: '404 Ash St, Metropolis', invoiceNumber: 'INV007', paymentMethod: 'Cash' },
  { id: 8, date: '2024-04-10', customer: 'Bruce Wayne', amount: 1000.0, status: 'Paid', items: [{ name: 'Item O', quantity: 3, price: 300 }, { name: 'Item P', quantity: 1, price: 100 }], address: '505 Walnut St, Gotham', invoiceNumber: 'INV008', paymentMethod: 'Credit Card' },
  { id: 9, date: '2024-04-20', customer: 'Scarlett Johansson', amount: 450.0, status: 'Paid', items: [{ name: 'Item Q', quantity: 2, price: 150 }, { name: 'Item R', quantity: 1, price: 150 }], address: '606 Cherry St, Springfield', invoiceNumber: 'INV009', paymentMethod: 'Bank Transfer' },
  { id: 10, date: '2024-04-30', customer: 'Chris Evans', amount: 600.0, status: 'Paid', items: [{ name: 'Item S', quantity: 4, price: 100 }, { name: 'Item T', quantity: 2, price: 50 }], address: '707 Fir St, Star City', invoiceNumber: 'INV010', paymentMethod: 'Credit Card' },
];

const InvoicePage = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    const foundInvoice = invoicesData.find((invoice) => invoice.id === parseInt(id));
    setInvoice(foundInvoice);
  }, [id]);

  if (!invoice) {
    return (
      <div className="min-h-screen py-10 px-4 bg-fixed">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-100 mb-6">Invoice Not Found</h1>
          <Link to="/invoice" className="text-blue-500 hover:text-blue-600 transition-colors duration-200">
            Go Back to Invoice Form
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Invoice #{invoice.invoiceNumber}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Customer Details</h2>
            <p className="text-gray-600">{invoice.customer}</p>
            <p className="text-gray-600">{invoice.address}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Invoice Details</h2>
            <p className="text-gray-600">Date: {invoice.date}</p>
            <p className="text-gray-600">
              Status: <span className={`font-semibold ${invoice.status === 'Paid' ? 'text-green-500' : invoice.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>{invoice.status}</span>
            </p>
            <p className="text-gray-600">Payment Method: {invoice.paymentMethod}</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">Itemized Charges</h2>
        <table className="min-w-full bg-white border border-gray-200 mb-4">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Item</th>
              <th className="px-4 py-2 border-b">Quantity</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{item.name}</td>
                <td className="px-4 py-2 border-b text-center">{item.quantity}</td>
                <td className="px-4 py-2 border-b text-right">${item.price.toFixed(2)}</td>
                <td className="px-4 py-2 border-b text-right">${(item.quantity * item.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end">
          <p className="text-lg font-semibold text-gray-700">Total Amount: ${invoice.amount.toFixed(2)}</p>
        </div>

        <Link to="/" className="mt-8 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default InvoicePage;