/* eslint-disable react/prop-types */
import React from "react";
const Drag = props => {
  const { fill = "none", stroke = "#465265" } = props;
  return (
    <g fill={fill} stroke={stroke}>
      <path d="M7.374 20V.172" />
      <path d="M12.5 20V.172" />
    </g>
  );
};

export default Drag;
