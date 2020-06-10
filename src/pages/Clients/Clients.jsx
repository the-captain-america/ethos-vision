import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Button, Input, Block, Content } from "../../common/Components";
import Modal from "../../common/Modal";

const users = [
  {
    uid: "xyz123",
    name: "Kirtana Ganapthi",
    age: "23",
    start: "2/5/2020",
    status: "active"
  },
  {
    uid: "xyz456",
    name: "Kaveri",
    age: "23",
    start: "2/5/2020",
    status: "inactive"
  },
  {
    uid: "xyz678",
    name: "Philip Hultgren",
    age: "29",
    start: "2/5/2020",
    status: "active"
  }
];

const Clients = () => {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState("");
  const history = useHistory();
  const dynamicURL = "/dashboard/clients";

  const modalTypes = {
    create: (
      <Content align="flex-start">
        <h3>Add Client</h3>
        <span>First Name</span>
        <Input />
        <span>Last Name</span>
        <Input />
        <span>Email</span>
        <Input />
        <span>Password</span>
        <Input />
        <Button verticalPush={16} onClick={() => openModal("save")}>
          Save
        </Button>
      </Content>
    ),
    save: (
      <Content>
        <h3>Saved Client</h3>
        <span>Client created.</span>
      </Content>
    )
  };

  const onClose = () => {
    setModal(false);
  };

  const openModal = type => {
    setModal(true);
    setType(type);
  };

  return (
    <div>
      <h1>Clients</h1>
      <Block reset>
        <Button onClick={() => openModal("create")}>Add</Button>
      </Block>
      <ul>
        {users.map((item, index) => (
          <Row
            key={index}
            onClick={() => history.push(`${dynamicURL}/${item.uid}`)}
          >
            <h2>{item.name}</h2>
            <span>{item.start}</span>
            <span>
              {item.status === "active" ? (
                <span>Active</span>
              ) : (
                <span>Inactive</span>
              )}

              {item.status === "active" ? (
                <span className="active" />
              ) : (
                <span className="inactive" />
              )}
            </span>
          </Row>
        ))}
      </ul>
      <Modal onClose={onClose} isActive={modal}>
        {modalTypes[type]}
      </Modal>
    </div>
  );
};

export default Clients;
