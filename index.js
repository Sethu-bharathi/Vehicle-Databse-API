const express = require("express");
const app = express();
const cors = require("cors");
const mongoose=require("mongoose")
app.use(express.json());
app.use(cors());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.use("/vehicle",require("./Routers/vehicle"));
app.use("/query",require("./Routers/queryVehicle"));