import styled from "styled-components";

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledModal = styled.div`
  max-width: 300px;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
`;

export const StyledCloseButton = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 5px;
  font-size: 20px;
  background-color: none;
  cursor: pointer;
  border-radius: 100%;
`;
