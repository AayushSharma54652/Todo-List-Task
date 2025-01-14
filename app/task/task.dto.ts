import { type BaseSchema } from "../common/dto/base.dto";
import mongoose, { ObjectId } from "mongoose";

export interface ITask extends BaseSchema {
  title: string;
  description: string;
  assignedTo: string | ObjectId;
  status: "pending" | "in-progress" | "completed";
}
