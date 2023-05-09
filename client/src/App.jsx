import React from "react";
import ReservationsList from "./components/ReservationsList";
import ReservationForm from "./components/ReservationForm";
import "../src/index.css";

function App() {
  return (
    <div className="container">
      <ReservationForm />
      <ReservationsList />
    </div>
  );
}

export default App;
