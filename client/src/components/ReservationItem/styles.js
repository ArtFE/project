import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 450px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  background-color: white;
  color: black;

  p {
    color: gray;
  }
`;

export const StyledLabels = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid lightgray;
  padding-right: 10px;
`;

export const StyledData = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  width: 70px;
  background-color: lightblue;
  border-radius: 5px;
  padding: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const StyledFormContainer = styled.div``;

export const StyledHeadline = styled.h2`
  font-weight: 400;
  font-size: 30px;
`;
