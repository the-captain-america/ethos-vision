import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Heading, Block, Button } from "../../common/Components";
import Icon from "../../common/Icon";

const dynamicSort = property => {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function(a, b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
};

const Programs = () => {
  const history = useHistory();
  const programs = [
    {
      uid: "xyz123",
      name: "First Workout Program",
      duration: 28,
      createdAt: "10/11/2019"
    },
    {
      uid: "xyz456",
      name: "Second Workout Program",
      duration: 40,
      createdAt: "10/12/2019"
    },
    {
      uid: "xyz4q16",
      name: "Main Workout Program",
      duration: 2,
      createdAt: "10/1/2020"
    }
  ];
  return (
    <div>
      <Button reset onClick={() => history.push("/dashboard/clients")}>
        <Icon name="CHEVRON_LEFT" size={20} fill="white" stroke="none" />
      </Button>

      <Heading>Programs</Heading>
      <ul>
        {programs.sort(dynamicSort("duration")).map((item, index) => (
          <Row key={index}>
            <h2>{item.name}</h2>
            <Block padding="0" justify="space-between" bgColor="transparent">
              <span>Created: {item.createdAt}</span>
              <span>{`${item.duration} days`}</span>
              <Button variant="orange">Edit</Button>
            </Block>
          </Row>
        ))}
      </ul>
    </div>
  );
};

export default Programs;
