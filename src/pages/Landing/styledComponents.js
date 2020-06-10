import styled from "styled-components";

const MappingContainer = styled.div`
  position: fixed;
  top: 0;
  left: -50%;
  transform: translate(50%, 50px);
  width: 100%;
  padding: 24px;
  z-index: 99;
  box-sizing: border-box;
  background: white;
  li {
    position: relative;
  }
  span.protected {
    color: red;
    width: 10px;
    height: 10px;
    max-height: 10px;
    max-width: 10px;
    background: red;
    position: relative;
    border-radius: 50%;
    top: 4px;
    display: inline-block;
  }
  h1.title,
  span,
  p {
    font-family: "Montserrat", sans-serif;
  }
`;

const MappingGroup = styled.div`
  background: #f1eeea;
  overflow: auto;
  padding: 16px;
  border-radius: 8px;
  margin-top: 8px;
`;

export { MappingGroup, MappingContainer };
