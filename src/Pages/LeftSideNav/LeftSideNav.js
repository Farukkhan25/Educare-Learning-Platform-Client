import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [alltopics, SetAlltopics] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => SetAlltopics(data));
  }, []);

  return (
    <div>
      <h4>Topics Number: {alltopics.length}</h4>
      <div>
        {alltopics.map((topic) => (
          <p key={topic.id}>
            <Link to={`/courseDetails/${topic._id}`}>{topic.title}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
