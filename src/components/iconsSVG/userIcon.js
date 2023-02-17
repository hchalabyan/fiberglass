import React from "react";

const UserIcon = (props) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="15"
        cy="15"
        r="14"
        stroke={props.color ? props.color : "#9B9591"}
        strokeWidth="2"
      />
      <path
        d="M20 13C20 14.404 19.4228 15.9356 18.4667 17.1119C17.5099 18.289 16.271 19 15 19C13.729 19 12.4901 18.289 11.5333 17.1119C10.5772 15.9356 10 14.404 10 13C10 11.4737 10.3479 10.2466 11.0694 9.41089C11.7673 8.60266 12.9549 8 15 8C17.0451 8 18.2327 8.60266 18.9306 9.41089C19.6521 10.2466 20 11.4737 20 13Z"
        stroke={props.pathColor ? props.pathColor : "#9B9591"}
        strokeWidth="2"
      />
      <path
        d="M7 26C7 26 9.31456 21 15 21C20.6854 21 23 26 23 26"
        stroke={props.pathColor ? props.pathColor : "#9B9591"}
        strokeWidth="2"
      />
    </svg>
  );
};
export default UserIcon;
