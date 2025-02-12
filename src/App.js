import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CourseList from "./components/CourseList";
import CourseDetail from "./components/CourseDetail";
import { Navbar } from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course-list" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>{" "}
      </Router>
    </>
  );
};

export default App;
