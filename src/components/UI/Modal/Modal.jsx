import ReactModal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(18, 20, 23, 0.5)",
  },
  content: {
    width: "541px",
    maxHeight: "752px",
    margin: "auto",
    padding: "40px",
    border: "none",
    borderRadius: "14px",
  },
};

ReactModal.setAppElement("#root");

export const Modal = ({ modalIsOpen, closeModal, children }) => {
  return (
    <ReactModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      {children}
    </ReactModal>
  );
};
