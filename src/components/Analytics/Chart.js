import React from 'react';
import MonthlyRevenueChart from './Revenue.jsx';
import MonthlyExpenseChart from './ExpenseChart';
import MonthlyComparisonChart from './Comparison';

const AnalyticsPage = () => {
  // Sample data for charts
  const monthlyRevenue = {
    January: 350,
    February: 650,
    March: 1250,
    April: 1750,
    May: 1950,
    June: 2550,
    July: 3150,
  };

  const monthlyExpenses = {
    January: 200,
    February: 500,
    March: 850,
    April: 1200,
    May: 1350,
    June: 1700,
    July: 2100,
  };

  return (
    <div className="text-white  px-4  ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Analytics Page</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <MonthlyRevenueChart data={monthlyRevenue} />
          <MonthlyExpenseChart data={monthlyExpenses} />
          <MonthlyComparisonChart revenueData={monthlyRevenue} expenseData={monthlyExpenses} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
