import React from 'react';
import ReactApexChart from 'react-apexcharts';

const MonthlyRevenueChart = ({ data }) => {
  const chartOptions = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    title: {
      text: 'Monthly Revenue',
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
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: ['#1E90FF'],
    },
    tooltip: {
      theme: 'dark',
    },
  };

  const chartSeries = [
    {
      name: 'Revenue',
      data: Object.values(data),
    },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
    </div>
  );
};

export default MonthlyRevenueChart;
