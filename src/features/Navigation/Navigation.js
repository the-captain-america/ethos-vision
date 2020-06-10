import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FieldInput from "../../common/FieldInput";

const MatchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 8px;
  overflow: hidden;
  background: white;
`;

const NavigationContaienr = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Group = styled.div`
  width: 100%;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  background: white;
  margin-right: auto;
`;

const Matching = styled.div`
  margin-top: 16px;
  display: flex;
  width: 100%;
  border-radius: 8px;
  background: white;
  align-items: center;
  justify-content: flex-start;
  padding: 8px;
  span {
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    color: black;
    padding-left: 8px;
    padding-right: 8px;
    text-overflow: ellipsis;
  }
`;

const defaultUser = [
  {
    id: "dashboard",
    label: "Dashboard",
    url: "/dashboard/dashboard"
  },
  {
    id: "clients",
    label: "Clients",
    url: "/dashboard/clients"
  },
  {
    id: "programs",
    label: "Programs",
    url: "/dashboard/programs"
  },
  {
    id: "settings",
    label: "Settings",
    url: "/dashboard/setting"
  }
];

const Navigation = () => {
  const [value, setValue] = useState("/dashboard");
  const [matchValue, setMatchValue] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const user = null;
  const { menudata } = user || defaultUser;
  const onChange = e => {
    setValue(e.target.value);
  };

  const splitPath = path => path.split("/")[2];

  // const matchPath = (keyword, currentPath) =>
  //     new RegExp(keyword).test(splitPath(currentPath));

  useEffect(() => {
    setMatchValue(true);
    setCurrentPath(value);
    if (value && value.length >= 0) {
      const items = menudata[splitPath(value)];
      console.log("items >>>", items);
    }
    console.log("menudata", menudata);
  }, [value]);

  return (
    <NavigationContaienr>
      <MatchContainer>
        <FieldInput placeholder="URL..." onChange={onChange} value={value} />
      </MatchContainer>
      {matchValue && (
        <Matching>
          <span>Matching:</span>"{splitPath(value)}"
        </Matching>
      )}
    </NavigationContaienr>
  );
};

export default Navigation;
