import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const LeftSideNav = () => {
  const [alltopics, SetAlltopics] = useState([]);

  useEffect(() => {
    fetch("https://educare-learning-platform-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => SetAlltopics(data));
  }, []);

  return (
    <div>
      <div>
        {alltopics.map((topic) => (
          <p key={topic.id}>
            <Link
              to={`/courseDetails/${topic._id}`}
              className="text-decoration-none"
            >
              {topic.title}
            </Link>
          </p>
        ))}
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default LeftSideNav;
