import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Input, Button, Flex, Text } from "../../common/Components";

const Login = () => {
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
    msg: ""
  });

  const handleSubmit = () => {
    history.push({ pathname: "/dashboard/clients", state: true });
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const onChange = e => {
    const { name, value } = e.target;
    if (e) {
      setState(state => ({ ...state, [name]: [value] }));
    }
  };

  return (
    <>
      <Container column>
        <h1>Login</h1>
        <Input
          placeholder=" Email"
          name="email"
          value={state.email}
          onChange={onChange}
        />
        <Input
          type="password"
          placeholder=" Password"
          name="password"
          value={state.password}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        <Flex>
          <Text link>
            <span onClick={() => history.push("/signup")}>
              Don't have an account?
            </span>
          </Text>
          <Text link>
            <span onClick={() => history.push("/forgot")}>
              Forgot password?
            </span>
          </Text>
        </Flex>
        <Button verticalPush={16} onClick={handleSubmit}>
          Login
        </Button>
      </Container>
    </>
  );
};

export default Login;
