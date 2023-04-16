import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatsSubscriptions = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          label: 'Subscriptions',
          data: [4, 8, 2, 22, 16, 13, 3],
          borderColor: 'rgba(173, 245, 0)',
          backgroundColor: 'rgba(173, 245, 0)'
        }
      ]
    });
    setChartOptions({
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Daily Subscriptions'
        }
      },
      maintainAspectRatio: false,
      responsive: true
    });
  }, []);

  return (
    <>
      <Bar data={chartData} options={chartOptions} />
    </>
  );
};
export default StatsSubscriptions;
