import { body } from "express-validator";

export const createTask = [
  body("title")
    .notEmpty()
    .withMessage("title is required")
    .isString()
    .withMessage("title must be a string"),
  body("description")
    .optional()
    .isString()
    .withMessage("description must be a string"),
  body("assignedTo")
    .notEmpty()
    .withMessage("assignedTo is required")
    .isString()
    .withMessage("assignedTo must be a valid user ID"),
  body("status")
    .optional()
    .isIn(["pending", "in-progress", "completed"])
    .withMessage(
      "status must be one of 'pending', 'in-progress', or 'completed'"
    ),
];

export const updateTask = [
  body("status")
    .notEmpty()
    .withMessage("status is required")
    .isIn(["pending", "in-progress", "completed"])
    .withMessage(
      "status must be one of 'pending', 'in-progress', or 'completed'"
    ),
];

export const editTask = [
  body("title").isString().withMessage("name must be a string"),
  body("description").isString().withMessage("email must be a string"),
];
