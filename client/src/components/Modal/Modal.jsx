import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  StyledModalWrapper,
  StyledOverlay,
  StyledModal,
  StyledCloseButton,
} from "./styles";

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const closeModalOnEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", closeModalOnEscape);

    return () => document.removeEventListener("keydown", closeModalOnEscape);
  }, [onClose]);
  const closeOnOverlay = (e) => {
    if (e.target.dataset.id === "modalWrapper") onClose();
    return;
  };

  return createPortal(
    <>
      <StyledOverlay></StyledOverlay>
      <StyledModalWrapper onClick={closeOnOverlay} data-id="modalWrapper">
        <StyledCloseButton>
          <span onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </span>
        </StyledCloseButton>
        <StyledModal>{children}</StyledModal>
      </StyledModalWrapper>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
