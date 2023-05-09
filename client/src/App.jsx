import React from "react";
import ReservationsList from "./components/ReservationsList";
import ReservationForm from "./components/ReservationForm";
import "../src/index.css";
import ItemsContextProvider from "./contexts/ItemsContextProvider";

function App() {
  return (
    <div className="container">
      <ReservationForm />
      <ItemsContextProvider>
        <ReservationsList />
      </ItemsContextProvider>
    </div>
  );
}

export default App;
