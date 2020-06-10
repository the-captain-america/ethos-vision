import React from "react";
import * as icons from "./icons";
import styled from "styled-components";

const Svg = styled.svg`
  ${props => props.rotate && `transform: rotate(${props.rotate}deg);`}
  transition: all .2s;
`;

const Icon = ({
  name,
  size = 24,
  rotate,
  fill = "default",
  stroke = "default",
  viewBox = `0 0 20 20`,
  ...props
}) => {
  const matchedIcon = Object.keys(icons).includes(name.toUpperCase());

  if (!matchedIcon) {
    console.log(
      `%cUnknown Icon: ${name.toUpperCase()}`,
      "color: orange; line-height: 19px; font-size: 12px; white-space: nowrap; display: inline;"
    );
    return <></>;
  }

  const Path = icons[name.toUpperCase()];
  const normalizedFill = fill === "default" ? undefined : fill;
  const normalizedStroke = stroke === "default" ? undefined : stroke;
  return (
    <Svg
      className={`icon-svg ${name.toLowerCase()}`}
      width={size}
      height={size}
      rotate={rotate}
      viewBox={viewBox}
      {...props}
    >
      <Path fill={normalizedFill} stroke={normalizedStroke} />
    </Svg>
  );
};

export default Icon;
