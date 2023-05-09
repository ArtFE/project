import React, { createContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ReservationItem from "../ReservationItem";
import { StyledContainer, StyledHeadline } from "./styles";
import Pagination from "../Pagination";

const ReservationsList = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios
        .get("http://localhost:5000/api/reservations")
        .then((res) => {
          setItems(res.data);
        });
    };
    fetchItems();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <StyledContainer>
      <StyledHeadline>Reservations List</StyledHeadline>
      {currentItems.map((item, index, name, surname, email, age, action) => {
        return (
          <ReservationItem
            key={item._id}
            index={index}
            item={item}
            name={name}
            surname={surname}
            email={email}
            age={age}
            action={action}
          />
        );
      })}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
      />
    </StyledContainer>
  );
};

export default ReservationsList;
