import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Row,
  Heading,
  Button,
  Text,
  Input,
  Block,
  Content
} from "../../common/Components";
import Icon from "../../common/Icon";

const Dashboard = () => {
  const history = useHistory();

  return (
    <>
      <Heading>Dashboard</Heading>
      <Block reset bgColor="white" padding="16">
        <Text>Quick Links</Text>
        <Button
          verticalPush={16}
          onClick={() => history.push("/dashboard/clients")}
        >
          <Icon name="USER" size={20} fill="white" stroke="none" />
          <Text center reset>
            View my clients
          </Text>
        </Button>
      </Block>
    </>
  );
};

export default Dashboard;
