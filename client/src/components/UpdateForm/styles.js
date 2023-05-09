import styled from "styled-components";

export const StyledLabel = styled.div`
  font-size: 14px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  input {
    width: 200px;
    padding: 5px;
    border-radius: 5px;
    border: none;
  }
`;

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  width: fit-content;
  background-color: lightblue;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;
