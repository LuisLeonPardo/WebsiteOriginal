// imports
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./src/routes/index.js");
const errorHandler = require("./src/middleware/error.js");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");

// config
const app = express();
const port = process.env.PORT || 3001;
const db = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/libertum";

app.use(cors());
app.use(errorHandler);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());
// routes
app.use("/libertum/", router);

// connect to DB & listen

const connectDB = () => {
  try {
    mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(port, () => {
      console.log(`Server on port ${port} and connected to DB 🔌`);
    });
  } catch (err) {
    console.log("Error al conectar a la db 🚫");
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();

//
