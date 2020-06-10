import styled, { css } from "styled-components";
import Theme from "../../common/Theme";

const SelectGroup = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  top: -8px;
  background: white;
  z-index: 90;
  border-radius: 7px;
  max-height: 260px;
  overflow-x: hidden;
  width: 100%;
  overflow-y: auto;
  padding: 13px 7px;
  box-sizing: border-box;
  &::-webkit-scrollbar-track {
    background: transparent;
    border: none;
    box-shadow: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #8c87a6;
    border: none;
    box-shadow: none;
  }
  ${props =>
    props.theme.mode === "dark" &&
    css`
      &::-webkit-scrollbar-track {
        background: #373946;
        border: none;
        box-shadow: none;
      }
      &::-webkit-scrollbar-thumb {
        background: #465265;
        border: none;
        box-shadow: none;
      }
    `}
  box-shadow: 0 6px 14px 0 rgba(33, 21, 81, 0.1);
`;

const SelectStyle = styled.div`
  width: 100%;
`;

const SelectOption = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  display: block;
  border-radius: 7px;
  cursor: pointer;
  span.text {
    padding: 10px 14px;
    display: block;
    font-family: ${Theme.font.fontFamily};
    font-size: 15px;
    line-height: 1.38;
    text-align: left;
    color: #211551;
  }
  &:focus {
    outline: none;
    border: none;
  }
  &:hover {
    background: #f7f8fa;
    span.text {
      color: #211551;
    }
  }
  ${props =>
    props.isActive &&
    css`
      background: #fb7a6f47;
      &:hover {
        background: #fb7a6f47;
      }
      span.text {
        color: #211551;
      }
    `}
`;

const Chevron = styled.span`
  position: absolute;
  right: 0;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  pointer-events: inherit;
  margin: 0;
  padding: 0;
`;

const SelectedItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  background: #f5f5f8;
  border-radius: 7px;
  border: 1px solid transparent;
  &:focus {
    outline: none;
    border: none;

    /* border: solid 1px #FB7A6F; */
    /* box-shadow: 0px 0px 0px 2px rgba(113, 0, 192, 0.1); */
  }
  span.text {
    padding-left: 14px;
    text-align: left;
    font-size: 15px;
    line-height: 20px;
    font-family: ${Theme.font.fontFamily};
    padding: 16px 0px 16px 14px;
    color: #8f89a7;
  }
  ${props =>
    props.isDisabled &&
    css`
      cursor: not-allowed;
      user-select: none;
      span.text {
        color: #dcdcdc;
        font-style: normal;
      }
      &:focus {
        outline: none;
        /* border: 1px solid transparent; */
        box-shadow: none;
      }
      ${Chevron} {
        svg {
          path {
            stroke: #dcdcdc;
            fill: #dcdcdc;
          }
        }
      }
    `}

  ${props =>
    props.isActive &&
    css`
      span.text {
        color: #2a1f58;
        font-style: normal;
      }
    `}
`;

const SelectContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  background: #f5f5f8;
  min-width: 162px;
  height: 50px;
  display: block;
  width: 100%;
  border-radius: 7px;
  ${props =>
    props.theme.mode === "dark" &&
    css`
      background: #373946;
    `}
`;

export {
  Chevron,
  SelectGroup,
  SelectStyle,
  SelectOption,
  SelectedItem,
  SelectContainer
};
