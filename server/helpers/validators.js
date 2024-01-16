import { body } from "express-validator";

export const registerValidator = [
  body("email", "Wrong email format").isEmail().isString(),
  body("password", "Wrong password format")
    .isString()
    .isLength({ min: 6, max: 18 }),
];
