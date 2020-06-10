import React from "react";
import { Modal, Overlay } from "../Components";

const ModalUI = ({ isActive, children, onClose = () => {} }) => {
  return (
    <>
      <Modal isActive={isActive}>
        <button className="close" onClick={onClose}>
          Close
        </button>
        {children}
      </Modal>
      <Overlay isActive={isActive} onClick={onClose} />
    </>
  );
};

export default ModalUI;
