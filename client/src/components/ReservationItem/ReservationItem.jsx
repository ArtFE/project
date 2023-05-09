import React, { useEffect } from "react";
import { useState, useContext } from "react";
import Modal from "../Modal/Modal";
import UpdateForm from "../UpdateForm";
import {
  StyledContainer,
  StyledLabels,
  StyledButton,
  StyledData,
  StyledButtonsContainer,
} from "./styles";
import axios from "axios";
import { ItemsContext } from "../../contexts/ItemsContextProvider";

const ReservationItem = ({ item, index, action }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setItems } = useContext(ItemsContext);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleDelete = async (e, _id) => {
    e.preventDefault();
    const res = await axios.delete(
      `http://localhost:5000/api/reservations/${_id}`
    );
    setItems(res.data.reservations);
  };

  return (
    <StyledContainer>
      <StyledData>
        <StyledLabels>
          <h3>Name</h3>
          <p>Email</p>
          <p>Age</p>
        </StyledLabels>
        <div>
          <h3>
            {item.name} {item.surname}
          </h3>
          <div>
            <p>{item.email}</p>
            <p>{item.age}</p>
          </div>
        </div>
      </StyledData>

      <StyledButtonsContainer>
        <StyledButton onClick={openModal}>Update</StyledButton>
        <StyledButton onClick={(e) => handleDelete(e, item._id)}>
          Delete
        </StyledButton>
      </StyledButtonsContainer>
      {isOpen && (
        <Modal onClose={closeModal}>
          <UpdateForm closeModal={closeModal} id={item._id} />
        </Modal>
      )}
    </StyledContainer>
  );
};

export default ReservationItem;
