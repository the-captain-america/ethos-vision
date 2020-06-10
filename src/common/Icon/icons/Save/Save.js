/* eslint-disable react/prop-types */
import React from "react";
const Icon = props => {
  const { fill = "none", stroke = "#adabbd" } = props;
  return (
    <svg viewBox="0 0 20 20">
      <defs>
        <clipPath id="clip-Artboard_53">
          <rect width="20" height="20" />
        </clipPath>
      </defs>
      <g
        id="Artboard_53"
        data-name="Artboard – 53"
        clipPath="url(#clip-Artboard_53)"
      >
        <g id="save-button" transform="translate(3.677 3.676)">
          <g id="save">
            <path
              id="Path_1064"
              data-name="Path 1064"
              d="M10.752,0H1.536A1.54,1.54,0,0,0,0,1.536V12.288a1.54,1.54,0,0,0,1.536,1.536H12.288a1.54,1.54,0,0,0,1.536-1.536V3.072ZM6.912,11.288a2.3,2.3,0,0,1,0-4.608,2.3,2.3,0,1,1,0,4.608ZM2.536,3.536h6.68"
              fill={fill}
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Icon;
