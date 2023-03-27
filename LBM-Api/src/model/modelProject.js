const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    about: {
      type: String,
    },
    image: {
      type: Array,
      required: [true, "Image is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    approved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model("Project", projectSchema);
