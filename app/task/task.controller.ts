import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import * as taskService from "./task.service";
import { createResponse } from "../common/helper/response.hepler";

export const createTask = asyncHandler(async (req: Request, res: Response) => {
  const result = await taskService.createTask(req.body);
  res.send(createResponse(result, "Task created successfully"));
});

export const updateTask = asyncHandler(async (req: Request, res: Response) => {
  const result = await taskService.updateTask(req.params.id, req.body);
  res.send(createResponse(result, "Status updated sucssefully"));
});

export const deleteTask = asyncHandler(async (req: Request, res: Response) => {
  const result = await taskService.deleteTask(req.params.id);
  res.send(createResponse(result, "Task deleted sucssefully"));
});

export const getAllTask = asyncHandler(async (req: Request, res: Response) => {
  const result = await taskService.getAllTask();
  res.send(createResponse(result, "All Task Fetched sucessfully"));
});

export const getAllTasksOfUser = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = req.params.id;
    const result = await taskService.getAllTasksOfUser(userId);
    res.send(createResponse(result, "User All Tasks fetched successfully"));
  }
);

export const editTask = asyncHandler(async (req: Request, res: Response) => {
  const result = await taskService.editTask(req.params.id, req.body);
  res.send(createResponse(result, "Task Edited sucssefully"));
});

export const getUserTask = asyncHandler(async (req: Request, res: Response) => {
  if (req?.user?._id) {
    const result = await taskService.getAllTasksOfUser(req?.user?._id);
    res.send(createResponse(result, "User All Tasks fetched successfully"));
  } else {
    res.send(createResponse(null, "User All Tasks not fetched successfully"));
  }
});
