import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema(
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
      type: 'mongoose.Schema.Types.ObjectId',
      ref: 'User',
    },
    subTodos: [
      {
        type: 'mongoose.Schema.Types.ObjectId ',
        ref: 'subTodo',
      },
    ],
  },
  { timestamps: true }
);
export const Todo = mongoose.model('Todo', todoSchema);
//  In ObjectId we should keep in mind that O and I should be capital it is a structure