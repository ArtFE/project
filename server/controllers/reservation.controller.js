import Reservation from "../models/reservation.model.js";

export const getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (error) {
    console.log(err);
    res.json({ messages: "Error ..." });
  }
};

export const createReservation = async (req, res) => {
  try {
    const newReservation = req.body;
    const validatedNewReservation = new Reservation(newReservation);
    const savedReservation = await validatedNewReservation.save();

    res.json(savedReservation);
  } catch (error) {
    console.log(error);
    res.json({ messages: "Error ..." });
  }
};

export const updateReservation = async (req, res) => {
  try {
    const reservationId = req.params.id;
    const updatedReservationData = req.body;

    await Reservation.findByIdAndUpdate(reservationId, updatedReservationData);
    const updatedReservation = await Reservation.findById(reservationId);
    const reservations = await Reservation.find();
    res.json({ updatedReservation, reservations });
  } catch (error) {
    console.log(err);
    res.json({ messages: "Error ..." });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    const reservationId = req.params.id;

    await Reservation.findByIdAndDelete(reservationId);
    const reservations = await Reservation.find();
    res.json({ message: "Reservation deleted", reservations });
  } catch (error) {
    console.log(err);
    res.json({ messages: "Error..." });
  }
};
