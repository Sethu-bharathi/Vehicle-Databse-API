const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  License: String,
  Owner_name: String,
  vehicle_color: String,
  vehicle_type:String,
  vehicle_company:String,
});


const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports=Vehicle;