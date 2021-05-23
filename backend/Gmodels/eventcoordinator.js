const mongoose = require("mongoose");

module.exports = mongoose.Schema(
  {
    name: { type: string, required: true },
    email: { type: string, required: true },
    password: { type: string, required: true },
    collegeName: { type: string, required: true },
    phoneNumber: { type: string, required: true },
    dateOfBirth: { type: string, required: true },
    gender: { type: string, required: true },
    city: string,

    eventCoordinator: {
      type: mongoose.schema.Types.ObjectId,
      ref: "event",
    },
  },
  { timestamps: true }
);
