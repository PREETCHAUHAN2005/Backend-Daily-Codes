import mongoose from "mongoose"
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);
const User = mongoose.model('User', userSchema);

let doc = await User.create({ name: 'test' });

console.log(doc.createdAt); // 2022-02-26T16:37:48.244Z
console.log(doc.updatedAt); // 2022-02-26T16:37:48.244Z

doc.name = 'test2';
await doc.save();
console.log(doc.createdAt); // 2022-02-26T16:37:48.244Z
console.log(doc.updatedAt); // 2022-02-26T16:37:48.307Z

doc = await User.findOneAndUpdate({ _id: doc._id }, { name: 'test3' }, { new: true });
console.log(doc.createdAt); // 2022-02-26T16:37:48.244Z
console.log(doc.updatedAt); 