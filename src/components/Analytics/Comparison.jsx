import React from 'react';
import ReactApexChart from 'react-apexcharts';

const MonthlyComparisonChart = ({ revenueData, expenseData }) => {
  const chartOptions = {
    chart: {
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    title: {
      text: 'Monthly Revenue vs Expenses',
      align: 'left',
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333',
      },
    },
    xaxis: {
      categories: Object.keys(revenueData),
      labels: {
        style: {
          colors: '#333',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#333',
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: 'dark',
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -10,
      offsetX: -5,
    },
  };

  const chartSeries = [
    {
      name: 'Revenue',
      data: Object.values(revenueData),
      color: '#1E90FF',
    },
    {
      name: 'Expenses',
      data: Object.values(expenseData),
      color: '#FF6347',
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
    </div>
  );
};

export default MonthlyComparisonChart;
