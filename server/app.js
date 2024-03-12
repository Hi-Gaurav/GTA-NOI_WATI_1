const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRoutes = require("./routes/Tasks");

const app = express();
const PORT = 5000;
const MONGODB_URI = "mongodb://localhost:27017/task";

app.use(bodyParser.json());
app.use(cors());
app.use("/api/tasks", taskRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
