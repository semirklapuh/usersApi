// class User {
//   constructor(id, name, age) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//   }
// }

// module.exports = User;
const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
