const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/users/users");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

async function init() {
  const password = "F21L5Y4hx3k4cLMU";
  const url = `mongodb+srv://sshsultanov:${password}@cluster0.wpws8mq.mongodb.net/vocabulary?retryWrites=true&w=majority`;

  await mongoose.connect(url, { useNewUrlParser: true });

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
}

init();
