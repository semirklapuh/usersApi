const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.use("/api/v1/users", usersRouter);

const dbUri =
  "mongodb+srv://mongo:mongo123@cluster0.gsq4gdj.mongodb.net/user?retryWrites=true&w=majority";

function connectToServer() {
  //app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
  mongoose
    .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
      (result) => console.log("Connected to db..."),
      app.listen(PORT, () =>
        console.log(`The server is running on port ${PORT}`)
      )
    )
    .catch((err) => console.log(err));
}

module.exports = connectToServer;
