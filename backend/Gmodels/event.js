const mongoose = require("mongoose");

module.exports = mongoose.Schema(
  {
    name: { type: string, required: true },
    details: { type: string, required: true },
    eventDate: { type: string, required: true },

    coordinator: {
      type: mongoose.schema.Types.ObjectId,
      ref: "eventcoordinator",
    },
  },
  { timestamps: true }
);
