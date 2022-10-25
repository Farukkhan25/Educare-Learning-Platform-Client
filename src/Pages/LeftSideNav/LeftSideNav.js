import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [topics, SetTopics] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/topics")
      .then((res) => res.json())
      .then((data) => SetTopics(data));
  }, []);

  return (
    <div>
      <h4>Topics Number: {topics.length}</h4>
      <div>
        {topics.map((topic) => (
          <p key={topic.id}>
            <Link to={`/courses/topics/${topic.id}`}>{topic.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
