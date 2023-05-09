import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { StyledLabel, StyledContainer, StyledButton } from "./styles";
import { ItemsContext } from "../../contexts/ItemsContextProvider";

const UpdateForm = ({ closeModal, id, action }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const { setItems } = useContext(ItemsContext);

  const updateReservation = async () => {
    let item = { name, surname, age, email };
    console.log(item);
    const res = await axios.put(
      `http://localhost:5000/api/reservations/${id}`,
      {
        name: item.name,
        surname: item.surname,
        email: item.email,
        age: item.age,
      }
    );
    setItems(res.data.reservations);
    closeModal();
  };

  return (
    <StyledContainer>
      <StyledLabel>
        <h2>Update reservation</h2>
      </StyledLabel>
      <StyledLabel>Name</StyledLabel>
      <input
        type="text"
        placeholder="Update name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <StyledLabel>Surname</StyledLabel>
      <input
        type="text"
        placeholder="Update surname"
        value={surname}
        onChange={(e) => {
          setSurname(e.target.value);
        }}
      />
      <StyledLabel>Email</StyledLabel>
      <input
        type="text"
        placeholder="Update email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <StyledLabel>Age</StyledLabel>
      <input
        type="number"
        placeholder="Update age"
        value={age}
        min={0}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />

      <StyledButton type="submit" onClick={updateReservation}>
        Update reservation
      </StyledButton>
    </StyledContainer>
  );
};
export default UpdateForm;
