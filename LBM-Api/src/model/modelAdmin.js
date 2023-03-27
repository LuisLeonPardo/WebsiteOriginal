const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
  {
    wallet: {
      type: String,
      required: [true, "wallet is required"],
    },
    isAdmin: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model("Admin", adminSchema);
