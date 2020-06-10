import styled, { css } from "styled-components";
import Theme from "../../common/Theme";

const SliderContainer = styled.div`
  position: relative;
  background: #fafafa;
  overflow: hidden;
  width: 100%;

  height: ${props => props.height || "500px"};
`;

const SliderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const SliderItem = styled.div`
  position: relative;
  height: 500px;
  width: ${props => props.width + "px" || "100%"};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-family: ${Theme.font.fontFamily};
`;

const Navigation = styled.ul`
  position: absolute;
  bottom: 16px;
  margin: 0;
  padding: 0;
  left: 16px;
  display: flex;
`;

const NavigationItem = styled.li`
  list-style: none;
  width: 10px;
  height: 10px;
  margin: 0 3px;
  background: ${Theme.colors.tertiary.babyBlueDark};
  border-radius: 100%;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      background: ${Theme.colors.primary.redPinkDark};
    `};
`;

const Control = styled.div`
  position: absolute;
  top: 0;
  margin: 10px;
  cursor: pointer;
`;

const ControlLeft = styled(Control)`
  font-family: ${Theme.font.fontFamily};
  padding: 12px;
  background: white;
  border-radius: 8px;
  left: 0;
  &:hover {
    background: #efeaea;
  }
`;
const ControlRight = styled(Control)`
  font-family: ${Theme.font.fontFamily};
  padding: 12px;
  background: white;
  border-radius: 8px;
  right: 0;
  &:hover {
    background: #efeaea;
  }
`;

const BigElement = styled.div`
  min-height: 1000px;
  background: #61dafb;
  width: 30px;
`;

export {
  SliderContainer,
  SliderWrapper,
  SliderItem,
  Navigation,
  NavigationItem,
  Control,
  ControlLeft,
  ControlRight,
  BigElement
};
