/* eslint-disable react/prop-types */
import React from "react";
const Icon = props => {
  const { fill = "#9592A8", stroke = "none" } = props;
  return (
    <svg width="20px" height="20px" viewBox="0 0 20 20">
      <g strokeWidth="1" fillRule="evenodd">
        <path
          d="M11.7676,11.9445 L9.8236,10.0005 L11.7676,8.0555 C12.0606,7.7625 12.0606,7.2875 11.7676,6.9945 C11.4746,6.7015 10.9996,6.7015 10.7066,6.9945 L8.2326,9.4695 C7.9396,9.7625 7.9396,10.2375 8.2326,10.5305 L10.7066,13.0055 C10.9996,13.2985 11.4746,13.2985 11.7676,13.0055 C12.0606,12.7125 12.0606,12.2375 11.7676,11.9445"
          id="Colour"
          stroke={stroke}
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default Icon;
