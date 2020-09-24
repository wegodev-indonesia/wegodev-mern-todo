import { model, Schema } from 'mongoose';
import { Todo } from '../types/todo';

const todoSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default model<Todo>('Todo', todoSchema);
