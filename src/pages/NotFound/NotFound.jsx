import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "../../common/Components";

const NotFound = props => {
  const history = useHistory();
  return (
    <Container column>
      <h1>404</h1>
      <p>Not found.</p>
      <button onClick={() => history.push("/")}>Home</button>
    </Container>
  );
};

export default NotFound;
