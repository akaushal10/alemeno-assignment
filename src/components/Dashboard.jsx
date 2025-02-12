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
import DurationChart from "./DurationChart";
import { courses } from "../data/data";
import StudentCourses from "./StudentCourses";

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
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
      },
    ],
  };
};

const getStudentEnrollmentData = (courses) => {
  const result = {
    labels: courses.map((course) => course.name),
    datasets: [
      {
        label: "No. of Students",
        data: courses.map((course) => course.students.length),
        backgroundColor: "#FFC107",
      },
    ],
  };
  console.log(result);
  return result;
};

const prepareDurationChartData = (courses) => {
  return courses.map((course) => ({
    subject: course.name,
    duration: parseInt(course.duration), // Convert "12 weeks" -> 12
  }));
};
const transformStudentData = (courses) => {
  const studentMap = new Map();

  courses.forEach((course) => {
    course.students.forEach((student) => {
      if (!studentMap.has(student.id)) {
        studentMap.set(student.id, {
          studentName: student.name,
          studentEmail: student.email,
          studentId: student.id,
          courses: [],
        });
      }

      studentMap.get(student.id).courses.push({
        id: course.id,
        name: course.name,
        instructor: course.instructor,
        thumbnail: course.thumbnail,
        status:
          course.enrollmentStatus === "Closed" ? "Completed" : "In-Progress",
        isCompleted: course.enrollmentStatus === "Closed",
      });
    });
  });

  return Array.from(studentMap.values());
};

const Dashboard = () => {
  const courseData = useSelector((state) => state.courses);
  const studentData = transformStudentData(courseData);
  return (
    <div className="container mt-4">
      <h2 className=" mb-4">Student Information</h2>
      <div className="row mb-3">
        <div className="col-12">
          <StudentCourses students={studentData} />
        </div>
      </div>
      <div className="row">
        <h2 className=" mb-2">Course Analytics</h2>
        <div className="col-md-4 card border-0">
          <div className="border rounded p-2 pb-4">
            <h5>Enrollment Status</h5>
            <Pie data={getEnrollmentStatusData(courseData)} />
          </div>
        </div>
        <div className="col-md-8 card border-0 ms-auto">
          <div className="border rounded p-2">
            <h5>Student Enrollment</h5>
            <Bar data={getStudentEnrollmentData(courseData)} />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 card border-0 text-left">
          <div className="border rounded p-2">
            <DurationChart
              data={prepareDurationChartData(courseData)}
            ></DurationChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
