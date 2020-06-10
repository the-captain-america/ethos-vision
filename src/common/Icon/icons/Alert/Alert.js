/* eslint-disable react/prop-types */
import React from "react";
const alert = props => {
  const { fill = "#ff015b", stroke = "#fff" } = props;
  return (
    <g clipPath="url(#a)" data-name="Artboard – 49">
      <g data-name="Group 2127" transform="translate(-248 -523)">
        <circle
          cx="8.5"
          cy="8.5"
          r="8.5"
          fill={fill}
          data-name="Ellipse 490"
          transform="translate(250 525)"
        />
        <path
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M258.501 534.715v-6.771"
          data-name="Path 370"
        />
        <path
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M258.501 538.014v-.07"
          data-name="Path 1310"
        />
      </g>
    </g>
  );
};

export default alert;
