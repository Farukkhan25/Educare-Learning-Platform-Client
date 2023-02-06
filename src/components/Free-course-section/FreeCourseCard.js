import React, { useContext } from "react";
import { themeContext } from "../../contexts/Context";

const FreeCourseCard = (props) => {
  const { imgUrl, title, students, rating } = props.item;
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
        <img src={imgUrl} alt="" className="w-100" />
        <button className="btn free__btn">Free</button>
      </div>

      <div className="free__course__details">
        <h6
          style={{
            color: darkMode ? "#ffffff" : "",
          }}
        >
          {title}
        </h6>

        <div className=" d-flex align-items-center gap-5">
          <span className=" d-flex align-items-center gap-2">
            <i class="ri-user-line"></i> {students}k
          </span>

          <span className=" d-flex align-items-center gap-2">
            <i class="ri-star-fill"></i> {rating}k
          </span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
