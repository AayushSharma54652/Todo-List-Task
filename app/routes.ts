import express from "express";
import userRoutes from "./user/user.route";
import taskRoutes from "./task/task.route";

// routes
const router = express.Router();

router.use("/users", userRoutes);
router.use("/tasks", taskRoutes);

export default router;