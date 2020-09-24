import { Document } from 'mongoose';

export interface Todo extends Document {
  title: string;
  status: 'completed' | 'uncompleted';
}
