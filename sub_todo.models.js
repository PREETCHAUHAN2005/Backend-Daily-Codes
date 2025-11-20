import mongoose from 'mongoose';

const SubTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: moongose.Schema.Types.ObjectId,
      ref: 'User',
    },
    complete: {},
  },
  { timeStamps: true }
);
export const SubTodo = mongoose.model('SubTodo', subTodoSchema);
