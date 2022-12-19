const mongoose=require("mongoose");

const queryVehicleSchema=new mongoose.Schema({
    License: String,
    time_stamp:String,
    Date:String,
    Time:String,
    Location:Array
})

module.exports=mongoose.model("queryVehicle",queryVehicleSchema);