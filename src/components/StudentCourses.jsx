import React, { useState } from "react";

const StudentCourses = ({ students }) => {
  const [studentData, setStudentData] = useState(students);

  const handleStatusChange = (studentId, courseId, newStatus) => {
    setStudentData((prevData) =>
      prevData.map((student) => {
        if (student.studentId === studentId) {
          return {
            ...student,
            courses: student.courses.map((course) =>
              course.id === courseId
                ? {
                    ...course,
                    status: newStatus,
                    isCompleted: newStatus === "Completed",
                  }
                : course
            ),
          };
        }
        return student;
      })
    );
  };
  return (
    <div className="">
      <div className="accordion" id="studentAccordion">
        {studentData.map((student, index) => (
          <div className="accordion-item" key={student.studentId}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="true"
                aria-controls={`collapse${index}`}
              >
                {`${student.studentName} (${student.studentEmail})`}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#studentAccordion"
            >
              <div className="accordion-body">
                <div className="row">
                  {student.courses.map((course) => (
                    <div
                      className="col-md-6 col-lg-4 mb-3 d-flex align-items-stretch"
                      key={course.id}
                    >
                      <div className="card d-flex flex-row align-items-center p-2">
                        <img
                          src={`images/${course.thumbnail}`}
                          alt={course.name}
                          className="rounded"
                          width="60"
                          height="60"
                        />
                        <div className="ms-3 flex-grow-1">
                          <h6 className="mb-1">{course.name}</h6>
                          <p className="small text-muted mb-1">
                            {course.instructor}
                          </p>
                          <select
                            className="form-select form-select-sm"
                            value={course.status}
                            onChange={(e) =>
                              handleStatusChange(
                                student.studentId,
                                course.id,
                                e.target.value
                              )
                            }
                            disabled={course.status === "Completed"}
                          >
                            <option value="In-Progress">In-Progress</option>
                            <option value="Completed">Completed</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCourses;
