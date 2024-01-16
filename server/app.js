import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { register } from "./controllers/UserController.js";
import { registerValidator } from "./helpers/validators.js";
import handleValidationError from "./middlewares/handleValidationError.js";

dotenv.config();
const PORT = process.env.PORT || 8888;

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Db successfuly connected"))
  .catch((error) => console.error("Error: " + error));

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", registerValidator, handleValidationError, register);
// app.post('/login')
// app.post('/me')

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  }

  console.log(`Server runing on port: ${PORT}`);
});
