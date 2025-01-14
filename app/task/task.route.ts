import { Router } from "express";
import { catchError } from "../common/middleware/cath-error.middleware";
import * as taskController from "./task.controller";
import * as taskValidator from "./task.validation";
import { roleAuth } from "../common/middleware/role-auth.middleware";

const router = Router();

router
  .post(
    "/",
    taskValidator.createTask,
    roleAuth("ADMIN"),
    catchError,
    taskController.createTask
  )
  .patch(
    "/:id",
    taskValidator.updateTask,
    roleAuth("USER"),
    catchError,
    taskController.updateTask
  )
  .delete("/:id", taskController.deleteTask, roleAuth("ADMIN"))
  .get("/", taskController.getAllTask, roleAuth("ADMIN"))
  .get("/:id", roleAuth("ADMIN"), taskController.getAllTasksOfUser)
  .patch(
    "/edit/:id",
    taskValidator.editTask,
    roleAuth("ADMIN"),
    catchError,
    taskController.editTask
  )
  .get("/", taskController.getUserTask, roleAuth("USER"));

export default router;
