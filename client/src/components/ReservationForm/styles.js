import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  width: 450px;
  flex-direction: column;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  input {
    width: 200px;
    padding: 5px;
    border-radius: 5px;
    border: none;
  }

  label {
    font-size: 20px;
    font-weight: 400;
    margin-top: 10px;
  }
  p {
    font-size: 14px;
    font-weight: 200;
    color: red;
  }
`;

export const StyledHeadline = styled.h2`
  font-weight: 400;
  font-size: 30px;
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
