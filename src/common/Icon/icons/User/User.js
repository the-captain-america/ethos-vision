/* eslint-disable react/prop-types */
import React from "react";
const User = props => {
  const { fill = "none", stroke = "#adabbc" } = props;
  return (
    <svg>
      <g strokeWidth="1.5" stroke={stroke} fill={fill}>
        <path d="M9.806 8.269a2.643 2.643 0 10-2.642-2.644 2.646 2.646 0 002.642 2.644zM9.806 10.595a4.85 4.85 0 00-4.844 4.844.632.632 0 00.632.632h8.425a.632.632 0 00.632-.632 4.85 4.85 0 00-4.845-4.844z" />
      </g>
    </svg>
  );
};

export default User;
