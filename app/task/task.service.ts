import { type ITask } from "./task.dto";
import TaskSchema from "./task.schema";

export const createTask = async (data: ITask) => {
  const result = await TaskSchema.create({ ...data });
  return result;
};

export const updateTask = async (id: string, data: ITask) => {
  const result = await TaskSchema.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return result;
};

export const deleteTask = async (id: string) => {
  const result = await TaskSchema.deleteOne({ _id: id });
  return result;
};

export const getTaskById = async (id: string) => {
  const result = await TaskSchema.findById(id).lean();
  return result;
};

export const getAllTask = async () => {
  const result = await TaskSchema.find({}).lean();
  return result;
};

export const getAllTasksOfUser = async (userId: string) => {
  const result = await TaskSchema.find({ assignedTo: userId }).lean();
  return result;
};

export const editTask = async (id: string, data: Partial<ITask>) => {
  const result = await TaskSchema.findOneAndUpdate({ _id: id }, data);
  return result;
};

export const getUserTask = async (userId: string) => {
  const result = await TaskSchema.find({ assignedTo: userId }).lean();
  return result;
};
