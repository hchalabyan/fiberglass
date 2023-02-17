import React from "react";

const NavIcon = (props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 28 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.41946 2.39122L25.2691 13L2.41945 23.6088L7.25953 13.4965L7.49716 13L7.25953 12.5035L2.41946 2.39122Z"
        stroke="white"
        strokeWidth="2.3"
      />
      <line
        x1="7"
        y1="12.85"
        x2="24"
        y2="12.85"
        stroke="white"
        strokeWidth="2.3"
      />
    </svg>
  );
};

export default NavIcon;
