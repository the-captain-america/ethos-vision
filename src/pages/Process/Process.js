import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Button, Block } from "../../common/Components";
import Slider from "../../features/Slider";
import Icon from "../../common/Icon";

const About = () => {
  const history = useHistory();
  return (
    <Grid>
      <Button reset onClick={() => history.push("/")}>
        <Icon name="CHEVRON_LEFT" size={20} fill="white" />
      </Button>
      <Block
        verticalPush={16}
        bgColor="white"
        align="flex-start"
        direction="column"
      >
        <Slider />

        <Button verticalPush={16} onClick={() => history.push("/signup")}>
          Get Started
        </Button>
      </Block>
    </Grid>
  );
};

export default About;
