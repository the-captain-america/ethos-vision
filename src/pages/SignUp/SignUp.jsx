import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Heading,
  Input,
  Text,
  Grid,
  Button
} from "../../common/Components";
import Select from "../../features/Select";
import DatePicker from "../../features/Calendar";
import Icon from "../../common/Icon";

const SignUp = () => {
  const history = useHistory();
  const [state, setState] = useState({
    firstName: "George",
    lastName: "Harrison",
    password: "password",
    email: "george@gmail.com",
    clients: "",
    msg: "",
    date: ""
  });

  const handleSubmit = () => {
    history.push("/login");
  };

  const onChange = e => {
    const { value, name } = e.target;
    if (e) {
      setState(state => ({ ...state, [name]: value }));
    } else {
      return;
    }
  };

  const handleSelect = () => {
    console.log("selected");
  };

  const handleChange = () => {
    console.log("hi");
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const onSelect = value => {
    setState(state => ({ ...state, client: value }));
  };

  useEffect(() => {
    setState(state => ({ ...state, date: new Date() }));
  }, []);

  return (
    <Grid>
      <Button reset onClick={() => history.push("/")}>
        <Icon name="CHEVRON_LEFT" size={20} fill="white" />
      </Button>
      <Container column>
        <Heading>Sign Up</Heading>
        <Text>First Name</Text>
        <Input
          placeholder="First Name"
          name="firstName"
          value={state.firstName}
          onChange={onChange}
        />
        <Text>Last Name</Text>
        <Input
          placeholder="Last Name"
          name="lastName"
          value={state.lastName}
          onChange={onChange}
        />
        <Text>Create a password</Text>

        <Input
          type="password"
          placeholder=" password"
          name="password"
          value={state.password}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        <Text>Enter Your Email</Text>
        <Input
          type="text"
          name="email"
          value={state.email}
          placeholder=" Email"
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        <br />
        <Text>
          How many clients do you plan to train? (You can change this number
          later)
        </Text>
        <br />
        <Select
          callback={onSelect}
          defaultValue={state.clients}
          options={[
            { uid: "xxila", name: "5 Clients", value: "5" },
            { uid: "wiqix", name: "10 Clients", value: "10" },
            { uid: "wiruw", name: "15 Clients", value: "15" }
          ]}
        />
        <br />
        <Text>Date of Birth</Text>
        <DatePicker onSelect={handleSelect} onChange={handleChange} />

        <Button verticalPush={16} onClick={handleSubmit}>
          Sign Up
        </Button>
      </Container>
    </Grid>
  );
};

export default SignUp;
