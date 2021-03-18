import React from "react";
import Modal from "react-modal";

export default function AppModal({
  iconClass,
  iconColor,
  modalText,
  buttonText,
  showModal = false,
  handleCloseModal,
}) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 5,
      height: "35%",
      width: "35%",
      display: "flex",
      justifyContent: "space-around",
      flexDirection: "column",
      alignItems: "center",
      padding: "30px",
    },
  };
  Modal.setAppElement("#root");
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={handleCloseModal}
      style={customStyles}
      contentLabel="Authentication Modal"
    >
      {/* {this.renderModal(
        this.state.successModal
          ? this.state.successModalConfig
          : this.state.failModalConfig
      )} */}
      <i
        class={iconClass}
        style={{
          fontSize: "100px",
          color: iconColor,
          marginTop: "50px",
        }}
      ></i>
      <div style={{ fontSize: "27px", color: "grey", fontWeight: "600" }}>
        {modalText}
      </div>
      <div
        style={{
          fontSize: "22px",
          color: "#444",
          // border: "2px solid #444",
          padding: "7.5px 10px",
          borderRadius: "3px",
          fontWeight: "600",
          marginTop: "20px",
          cursor: "pointer",
        }}
        onClick={handleCloseModal}
      >
        {buttonText}
      </div>
    </Modal>
  );
}
