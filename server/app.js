import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectMongoDB from "./config/db.js";
import {
  getAllReservations,
  createReservation,
  updateReservation,
  deleteReservation,
} from "./controllers/reservation.controller.js";

import { reservationCheck } from "./middlewares/error.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Connecting to MongoDB
connectMongoDB();

//Middilewares
app.use(express.json());

// Routes

//GET ALL Reservations
app.get("/api/reservations", getAllReservations);

// POST
app.post("/api/reservations", createReservation);

//PUT
app.put("/api/reservations/:id", reservationCheck, updateReservation);

//DELETE
app.delete("/api/reservations/:id", reservationCheck, deleteReservation);

//Starting server
app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
