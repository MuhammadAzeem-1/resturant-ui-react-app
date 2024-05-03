import React from "react";
import images from "../../constants/images";

function SubHeading({ title }) {
  return (
    <div>
      <p
        style={{
          color: "var(--color-white) ",
          fontFamily: " var(--font-base)",
          fontSize: "21px",
        }}
      >
        {" "}
        {title}
      </p>
      <img src={images.spoon} alt="" />
    </div>
  );
}

export default SubHeading;
