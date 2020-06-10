import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Text, Grid, Block } from "../../common/Components";
import { MappingGroup, MappingContainer } from "./styledComponents";
import { length } from "ramda";
import Icon from "../../common/Icon";

const Mapping = ({ onClose = () => {} }) => {
  const routes = [
    {
      title: "Landing",
      list: []
    },
    {
      title: "Search",
      list: []
    },
    {
      title: "Signup",
      list: []
    },
    {
      title: "About",
      list: []
    },
    {
      title: "Login",
      list: []
    },
    {
      title: "Welcome",
      list: [
        {
          title: "clients (create first client)",
          list: []
        }
      ]
    },
    {
      title: "dashboard",
      protected: true,
      list: [
        {
          title: "clients",
          list: [
            {
              title: "client:id",
              list: []
            }
          ]
        },
        {
          title: "programs",
          list: [
            {
              title: "program:id",
              list: []
            }
          ]
        },
        {
          title: "settings",
          list: []
        }
      ]
    }
  ];
  return (
    <>
      <MappingContainer>
        <Button onClick={onClose}>Close</Button>
        <h1 className="title">Routing</h1>
        <div>
          Protected: <span className="protected">*</span>
        </div>
        <MappingGroup className="folders">
          <div className="folders">
            <ul className="ascii">
              {length(routes) &&
                routes.map((item, index) => (
                  <li key={index}>
                    {item.title}{" "}
                    {item.protected ? (
                      <span className="protected">*</span>
                    ) : null}
                    <ul>
                      {item?.list.map((item, index) => (
                        <li key={index}>
                          {item.title}
                          <ul>
                            {item.list.map((item, index) => (
                              <li key={index}>{item.title}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
            </ul>
          </div>
        </MappingGroup>
      </MappingContainer>
    </>
  );
};

const Landing = () => {
  const history = useHistory();
  const [isActive, setActive] = useState(false);
  const onClose = () => {
    setActive(false);
  };

  return (
    <Grid>
      <Block bgColor="white">
        <Block align="center" justify="center" border bgColor="white">
          <Block
            zIndex={2}
            shadow
            onClick={() => history.push("/search")}
            bgColor="white"
          >
            <Block align="center" direction="column" bgColor="transparent">
              <img src="https://i.ibb.co/DCNxWxP/Victor-3x.png" alt="trainer" />
              <Button verticalPush={16} width="100%" variant="orange">
                <Text center reset>
                  Search Trainers
                </Text>
                <Icon name="SEARCH" fill="white" stroke="none" size={20} />
              </Button>
            </Block>
          </Block>
        </Block>
        <Block align="center" justify="center" border bgColor="white">
          <Block shadow onClick={() => history.push("/process")}>
            <Block align="center" direction="column" bgColor="transparent">
              <img src="https://i.ibb.co/DCNxWxP/Victor-3x.png" alt="trainer" />
              <Button verticalPush={16} width="100%" variant="white">
                <Text center reset>
                  Become a Trainer
                </Text>
              </Button>
            </Block>
          </Block>
        </Block>
        {isActive && <Mapping onClose={onClose} />}
      </Block>
    </Grid>
  );
};

export default Landing;

/* <Creative>
        <div className="box">
          <div className="wave -one" />
          <div className="wave -two" />
          <div className="wave -three" />
          <div className="title">ETHOS</div>
        </div>
      </Creative> */
