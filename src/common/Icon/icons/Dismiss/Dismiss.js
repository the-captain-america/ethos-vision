/* eslint-disable react/prop-types */
import React from "react";
const Dismiss = props => {
  const { fill = "#9592A8", stroke = "none" } = props;
  return (
    <svg width="20px" height="20px" viewBox="0 0 20 20">
      <g
        id="Icons/ico-dismiss"
        stroke={stroke}
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <path
          d="M14.2427,13.1818 L11.0607,9.9998 L14.2427,6.8178 C14.5357,6.5248 14.5357,6.0508 14.2427,5.7578 C13.9497,5.4648 13.4747,5.4648 13.1817,5.7578 L9.9997,8.9388 L6.8177,5.7578 C6.5247,5.4648 6.0507,5.4648 5.7577,5.7578 C5.4647,6.0508 5.4647,6.5248 5.7577,6.8178 L8.9397,9.9998 L5.7577,13.1818 C5.4647,13.4748 5.4647,13.9498 5.7577,14.2428 C6.0507,14.5358 6.5247,14.5358 6.8177,14.2428 L9.9997,11.0608 L13.1817,14.2428 C13.4747,14.5358 13.9497,14.5358 14.2427,14.2428 C14.5357,13.9498 14.5357,13.4748 14.2427,13.1818"
          id="Fill-2"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default Dismiss;
