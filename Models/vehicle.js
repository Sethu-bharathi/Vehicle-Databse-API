const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  License: String,
  Owner_name: String,
  Car_color: String,
  Car_type:String,
  Car_company:String,
});


const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports=Vehicle;