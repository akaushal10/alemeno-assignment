import React from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const getEnrollmentStatusData = (courses) => {
  const statusCounts = courses.reduce((acc, course) => {
    acc[course.enrollmentStatus] = (acc[course.enrollmentStatus] || 0) + 1;
    return acc;
  }, {});
  return {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };
};

const getStudentEnrollmentData = (courses) => {
  return {
    labels: courses.map((course) => course.name),
    datasets: [
      {
        data: courses.map((course) => course.students.length),
        backgroundColor: "#FFCE56",
      },
    ],
  };
};

const getWeeklySyllabusData = (courses) => {
  const weekData = {};
  courses.forEach((course) => {
    course.syllabus.forEach((week) => {
      weekData[week.week] = (weekData[week.week] || 0) + 1;
    });
  });
  return {
    labels: Object.keys(weekData).map((week) => `Week ${week}`),
    datasets: [{ data: Object.values(weekData), backgroundColor: "#4BC0C0" }],
  };
};

const Dashboard = () => {
  const courseData = useSelector((state) => state.courses);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Course Dashboard</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-3 mb-4">
            <h4>Enrollment Status</h4>
            <Pie data={getEnrollmentStatusData(courseData)} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3 mb-4">
            <h4>Student Enrollment</h4>
            <Bar data={getStudentEnrollmentData(courseData)} />
          </div>
        </div>
        <div className="col-md-12">
          <div className="card p-3 mb-4">
            <h4>Weekly Syllabus Breakdown</h4>
            <Line data={getWeeklySyllabusData(courseData)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
