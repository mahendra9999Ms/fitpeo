import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Sample data for 12 months
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const data = {
      labels: months,
      datasets: [
        {
          label: 'Monthly Sales',
          data: [50, 65, 75, 92, 105, 80, 120, 135, 150, 110, 95, 60],
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
          borderColor: 'rgba(75, 192, 192, 1)', // Border color
          borderWidth: 1,
        },
      ],
    };

    const myChart = new Chart(chartRef.current, {
      type: 'bar',
      data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarChart;
