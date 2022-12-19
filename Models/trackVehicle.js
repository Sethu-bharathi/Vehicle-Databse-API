const mongoose=require("mongoose");

const trackVehicleSchema=new mongoose.Schema({
    License: String,
    Owner_name: String,
    vehicle_color: String,
    vehicle_type:String,
    vehicle_company:String,
    locations:Map
})

module.exports=mongoose.model("trackVehicle",trackVehicleSchema);