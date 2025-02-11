import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getCourseById } from "../redux/actionCreator";
import { useDispatch, useSelector } from "react-redux";

const CourseDetail = () => {
  const { id } = useParams();
  const courses = useSelector((state) => state.courses);
  const course = courses.find((c) => c.id === parseInt(id));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseById(parseInt(id)));
  }, [dispatch, id]);

  if (!course) {
    return <h2 className="text-danger text-center mt-5">Course Not Found</h2>;
  }

  return (
    <div className="container mt-4">
      <h2>{course.name}</h2>
      <img
        src={course.thumbnail}
        alt={course.name}
        className="img-fluid mb-3"
        style={{ maxHeight: "300px" }}
      />
      <p>
        <strong>Instructor:</strong> {course.instructor}
      </p>
      <p>
        <strong>Description:</strong> {course.description}
      </p>
      <p>
        <strong>Duration:</strong> {course.duration}
      </p>
      <p>
        <strong>Schedule:</strong> {course.schedule}
      </p>
      <p>
        <strong>Location:</strong> {course.location}
      </p>
      <p>
        <strong>Enrollment Status:</strong> {course.enrollmentStatus}
      </p>

      <h4>Prerequisites</h4>
      <ul>
        {course.prerequisites.map((prereq, index) => (
          <li key={index}>{prereq}</li>
        ))}
      </ul>

      <h4>Syllabus</h4>
      <ul className="list-group mb-3">
        {course.syllabus.map((item) => (
          <li key={item.week} className="list-group-item">
            <strong>Week {item.week}: </strong> {item.topic} - {item.content}
          </li>
        ))}
      </ul>

      <h4>Enrolled Students</h4>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {course.students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/" className="btn btn-secondary">
        Back to Courses
      </Link>
    </div>
  );
};

export default CourseDetail;
