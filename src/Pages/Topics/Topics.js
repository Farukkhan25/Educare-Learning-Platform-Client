import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Course from "../Course/Course";

const Topics = () => {
  const [allCourses, SetAllCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => SetAllCourses(data));
  }, []);

  // const topics = useLoaderData();
  //   console.log(topics);
  //   const { title, details, image_url, category_id } = topics;
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <>
            {allCourses.map((courses) => (
              <Course key={courses.id} courses={courses}></Course>
            ))}
          </>
        ))}
      </Row>
    </div>
  );
};

export default Topics;