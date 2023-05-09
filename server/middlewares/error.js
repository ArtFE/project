import Reservation from "../models/reservation.model.js";

export const reservationCheck = async (req, res, next) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
