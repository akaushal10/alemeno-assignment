import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../redux/actionCreator";
import { useDispatch, useSelector } from "react-redux";

const CourseList = () => {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourses()); // this wrote in the context of if we are calling an api to get data
  }, []);
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Available Courses</h2>
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-4" key={course.id}>
            <div className="card mb-3">
              <img
                src={`images/${course.thumbnail}`}
                className="card-img-top"
                alt={course.name}
                style={{ objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">
                  {course.description.substring(0, 75)}...
                </p>
                <Link to={`/course/${course.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
