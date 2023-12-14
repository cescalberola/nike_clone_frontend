import React from "react";

const LeftSVG = ({ fill, width, height, className }) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      role="img"
      width={width || "24px"}
      height={height || "24px"}
      fill={fill || "none"}
      className={className || ""}
    >
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M15.525 18.966L8.558 12l6.967-6.967"
      ></path>
    </svg>
  );
};

export default LeftSVG;
