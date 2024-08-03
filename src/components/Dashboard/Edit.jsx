import React, { useState } from 'react';

const EditTransactionForm = ({ transaction, updateTransaction, cancelEdit }) => {
  const [date, setDate] = useState(transaction.date);
  const [customer, setCustomer] = useState(transaction.customer);
  const [amount, setAmount] = useState(transaction.amount);
  const [status, setStatus] = useState(transaction.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTransaction = {
      date,
      customer,
      amount: parseFloat(amount),
      status,
    };
    updateTransaction(transaction.id, updatedTransaction);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium mb-1">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Customer</label>
        <input
          type="text"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Amount</label>
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Overdue">Overdue</option>
        </select>
      </div>
      <div className="col-span-2 flex justify-end">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200 mr-2"
        >
          Save
        </button>
        <button
          onClick={cancelEdit}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors duration-200"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditTransactionForm;
