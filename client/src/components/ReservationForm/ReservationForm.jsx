import React from "react";
import { StyledHeadline, StyledForm, StyledButton } from "./styles";
import { useState } from "react";
import axios from "axios";

const ReservationForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addReservation = async () => {
    let item = { name, surname, age, email };
    if (
      item.name === "" ||
      item.surname === "" ||
      item.age === "" ||
      item.email === ""
    ) {
      alert("All reservation values are required");
      return false;
    }
    await axios.post("http://localhost:5000/api/reservations", {
      name: item.name,
      surname: item.surname,
      email: item.email,
      age: item.age,
    });
    console.log(item);
  };

  return (
    <div>
      <StyledHeadline>Reservation Form</StyledHeadline>
      <div>
        <StyledForm>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label>Surname</label>
          <input
            type="text"
            placeholder="Enter surname"
            value={surname}
            onChange={(e) => {
              setSurname(e.target.value);
            }}
          />

          <label>Email</label>
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label>Age</label>
          <input
            type="number"
            placeholder="Enter age"
            value={age}
            min="0"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />

          <StyledButton onClick={(e) => addReservation(e)} type="submit">
            Add a new Reservation
          </StyledButton>
        </StyledForm>
      </div>
    </div>
  );
};

export default ReservationForm;
