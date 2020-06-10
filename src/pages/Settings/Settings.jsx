import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Row,
  Input,
  Button,
  Circle,
  Text,
  Heading,
  Content,
  Block
} from "../../common/Components";
import Modal from "../../common/Modal";
import Accordion from "../../common/Accordion";
import Select from "../../features/Select";
import Icon from "../../common/Icon";

const Settings = () => {
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [password, setPassword] = useState("xyz123");
  const [type, setType] = useState("payment");
  const [state, setState] = useState({
    membership: ""
  });

  const memberships = {
    bronze: {
      name: "bronze",
      cost: "5",
      clients: "5"
    },
    silver: {
      name: "silver",
      cost: "10",
      clients: "15"
    },

    gold: {
      name: "gold",
      cost: "15",
      clients: "25"
    }
  };

  const onSelect = value => {
    console.log("value >>>", value);
    setState(state => ({ ...state, membership: value }));
  };

  const modalTypes = {
    membership: (
      <>
        <h3>Membership</h3>
        <Select
          callback={onSelect}
          defaultValue={state.clients}
          options={[
            {
              uid: "bronze",
              name: "Bronze",
              value: memberships["bronze"].clients
            },
            {
              uid: "silver",
              name: "Silver",
              value: memberships["silver"].clients
            },
            { uid: "gold", name: "Gold", value: memberships["gold"].clients }
          ]}
        />

        <p>
          {state.membership.uid && (
            <div>
              <strong>Membership</strong>:{" "}
              {memberships[(state.membership?.uid)]?.name}
            </div>
          )}
          {state.membership.uid && (
            <div>
              <strong>Clients</strong>:{" "}
              {memberships[(state.membership?.uid)]?.clients}
            </div>
          )}
          {state.membership.uid && (
            <div>
              <strong>Price</strong>: $
              {memberships[(state.membership?.uid)]?.cost}.00
            </div>
          )}
        </p>
        <Button onClick={() => openModal("updatedMembership")}>Save</Button>
      </>
    ),
    updatedMembership: (
      <Content>
        <h3>Membership Updated</h3>
        <span>You have successfully updated your Memebership</span>
      </Content>
    ),
    updatedPayment: (
      <Content>
        <h3>Payment Details Updated</h3>
        <span>You have successfully updated your payment details.</span>
      </Content>
    )
  };

  const openModal = type => {
    console.log("hit", type);
    setModal(true);
    setType(type);
  };

  const onClose = () => {
    setModal(false);
  };

  const onFocus = e => {
    setEditPassword(!editPassword);
  };

  const onChange = e => {
    const { value } = e.target;
    setPassword(value);
  };
  return (
    <div>
      <Button reset onClick={() => history.push("/dashboard/clients")}>
        <Icon name="CHEVRON_LEFT" size={20} fill="white" stroke="none" />
      </Button>
      <Heading>Settings</Heading>

      <h2>Your Details </h2>
      <Accordion title="Your Details" maxHeight={1000} isActive={true}>
        <Block bgColor="white" direction="column" align="flex-start">
          <Block padding="0" bgColor="transparent" align="flex-start">
            <Circle size={200} align="center">
              <h2>Avatar</h2>
            </Circle>
            <Block bgColor="transparent" align="flex-start" direction="column">
              <Text reset>First Name</Text>
              <Input type="text" />

              <Text rest>Last Name</Text>
              <Input type="text" />

              <Text rest>Email</Text>
              <Input type="text" />

              <Text rest>Password Name</Text>
              <Input
                onFocus={onFocus}
                onBlur={onFocus}
                onChange={onChange}
                type={editPassword ? "text" : "password"}
                value={password}
              />

              <Text rest>Show my account on Ethos search engine?</Text>
              <br />
              <Select
                callback={onSelect}
                defaultValue={state.clients}
                options={[
                  {
                    uid: "show",
                    name: "Show my account",
                    value: "yes"
                  },
                  {
                    uid: "hide",
                    name: "Hide my account",
                    value: "no"
                  }
                ]}
              />
            </Block>
          </Block>
        </Block>
      </Accordion>

      <h2>Memebership: Bronze </h2>
      <Block justify="space-between" bgColor="white">
        <span>
          You have access to: <strong>16 Clients</strong>
        </span>{" "}
        <Button className="square" onClick={() => openModal("membership")}>
          Edit
        </Button>
      </Block>

      <h2>Your Payment Details</h2>
      <Accordion title="Payment Details" isActive={true}>
        <p>
          <Input placeholder="CREDIT CARD" type="text" value="*** **** 9007" />
        </p>
        <p>
          <Input placeholder="CCV" type="text" value="" />
        </p>
        <p>
          <Input placeholder="EXPIRY DATE" type="text" value="" />
        </p>
        <br />
        <Button onClick={() => openModal("updatedPayment")}>
          Save Details <Icon name="SAVE" size={20} fill="none" stroke="white" />
        </Button>
      </Accordion>

      <h2>Payment History </h2>
      <Accordion title="Payment History" isActive={true}>
        <ul>
          <Row>
            <strong>Paid</strong>: 10/03/2020 <span>Amount: 24.99</span>
          </Row>
          <Row>
            <strong>Paid</strong>: 10/03/2020 <span>Amount: 24.99</span>
          </Row>
          <Row>
            <strong>Paid</strong>: 10/03/2020 <span>Amount: 24.99</span>
          </Row>
          <Row>
            <strong>Paid</strong>: 10/03/2020 <span>Amount: 24.99</span>
          </Row>
        </ul>
      </Accordion>

      <Modal onClose={onClose} isActive={modal}>
        {modalTypes[type]}
      </Modal>
    </div>
  );
};

export default Settings;
