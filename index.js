const express = require("express");
const app = express();
const cors = require("cors");
const mongoose=require("mongoose")

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

const url =
  "mongodb+srv://Sethu:hArini.007@cluster0.nww16js.mongodb.net/?retryWrites=true&w=majority";
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

mongoose
  .connect(url)
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log(e);
  });

