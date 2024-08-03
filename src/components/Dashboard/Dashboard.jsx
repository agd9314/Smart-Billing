import React, { useState, useEffect } from 'react';
import AddTransactionForm from './Add';
import EditTransactionForm from './Edit';
import Pagination from './Pagination';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [editingTransactionId, setEditingTransactionId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5; // Define how many transactions per page

  // Load transactions from localStorage
  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (savedTransactions) {
      setTransactions(savedTransactions);
    } else {
      // Initial transactions
      const initialTransactions = [
        { id: 1, date: '2024-07-25', customer: 'John Doe', amount: 150.0, status: 'Paid' },
        { id: 2, date: '2024-07-24', customer: 'Jane Smith', amount: 200.0, status: 'Pending' },
        { id: 3, date: '2024-07-23', customer: 'Alice Johnson', amount: 100.0, status: 'Paid' },
        { id: 4, date: '2024-07-22', customer: 'Bob Brown', amount: 250.0, status: 'Paid' },
        { id: 5, date: '2024-07-21', customer: 'Charlie Wilson', amount: 300.0, status: 'Overdue' },
        { id: 6, date: '2024-07-21', customer: 'Diana Prince', amount: 300.0, status: 'Overdue' },
        { id: 7, date: '2024-07-21', customer: 'Clark Kent', amount: 300.0, status: 'Overdue' },
        { id: 8, date: '2024-07-21', customer: 'Bruce Wayne', amount: 300.0, status: 'Overdue' },
        { id: 9, date: '2024-07-21', customer: 'Scarlett Johansson', amount: 300.0, status: 'Overdue' },
        { id: 10, date: '2024-07-21', customer: 'Chris Evans', amount: 300.0, status: 'Overdue' },
      ];
      setTransactions(initialTransactions);
    }
  }, []);

  // Save transactions to localStorage
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (newTransaction) => {
    const updatedTransactions = [...transactions, { id: transactions.length + 1, ...newTransaction }];
    setTransactions(updatedTransactions);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  const updateTransaction = (id, updatedTransaction) => {
    const updatedTransactions = transactions.map(transaction =>
      transaction.id === id ? { ...transaction, ...updatedTransaction } : transaction
    );
    setTransactions(updatedTransactions);
    setEditingTransactionId(null);
  };

  const totalRevenue = transactions
    .filter(transaction => transaction.status === 'Paid')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalPending = transactions
    .filter(transaction => transaction.status === 'Pending')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalOverdue = transactions
    .filter(transaction => transaction.status === 'Overdue')
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  // Pagination logic
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  return (
    <div className="container mx-auto p-4 text-black mb-[30rem]  ">
      <h1 className="text-3xl font-bold mb-6 text-center">Billing Dashboard</h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Total Revenue</h2>
          <p className="text-2xl font-bold text-green-500">₹{totalRevenue.toFixed(2)}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Total Pending</h2>
          <p className="text-2xl font-bold text-yellow-500">₹{totalPending.toFixed(2)}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Total Overdue</h2>
          <p className="text-2xl font-bold text-red-500">₹{totalOverdue.toFixed(2)}</p>
        </div>
      </div>

      {/* Add Transaction Form */}
      <AddTransactionForm addTransaction={addTransaction} />

      {/* Recent Transactions Table */}
      <div className="bg-white shadow-lg rounded-lg p-4 overflow-x-auto mt-4">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left border-b">Date</th>
              <th className="px-4 py-2 text-left border-b">Customer</th>
              <th className="px-4 py-2 text-left border-b">Amount</th>
              <th className="px-4 py-2 text-left border-b">Status</th>
              <th className="px-4 py-2 text-left border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map(transaction => (
              <tr key={transaction.id} className="border-b">
                <td className="px-4 py-2">{transaction.date}</td>
                <td className="px-4 py-2">{transaction.customer}</td>
                <td className="px-4 py-2">₹{transaction.amount.toFixed(2)}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ₹{
                      transaction.status === 'Paid'
                        ? 'bg-green-100 text-green-600'
                        : transaction.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {editingTransactionId === transaction.id ? (
                    <EditTransactionForm
                      transaction={transaction}
                      updateTransaction={updateTransaction}
                      cancelEdit={() => setEditingTransactionId(null)}
                    />
                  ) : (
                    <>
                      <button
                        onClick={() => setEditingTransactionId(transaction.id)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition-colors duration-200 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteTransaction(transaction.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors duration-200"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Dashboard;
