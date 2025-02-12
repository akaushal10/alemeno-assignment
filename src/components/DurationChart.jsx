import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const DurationChart = ({ data = [] }) => {
  const chartData = {
    labels: data.map((item) => item.subject),
    datasets: [
      {
        label: "Duration (weeks)",
        data: data.map((item) => item.duration),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y", // Horizontal bar chart
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h5>Subject Duration Chart</h5>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default DurationChart;
