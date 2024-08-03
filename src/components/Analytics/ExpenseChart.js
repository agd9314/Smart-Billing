import React from 'react';
import ReactApexChart from 'react-apexcharts';

const MonthlyExpenseChart = ({ data }) => {
  const chartOptions = {
    chart: {
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    title: {
      text: 'Monthly Expenses',
      align: 'left',
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333',
      },
    },
    xaxis: {
      categories: Object.keys(data),
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
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: ['#FF6347'],
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 5,
      colors: ['#FF6347'],
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: {
        size: 7,
      },
    },
    tooltip: {
      theme: 'dark',
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5,
      },
    },
  };

  const chartSeries = [
    {
      name: 'Expenses',
      data: Object.values(data),
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={350} />
    </div>
  );
};

export default MonthlyExpenseChart;
