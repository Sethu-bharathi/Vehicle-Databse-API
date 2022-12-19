const trackVehicle=require("../Models/trackVehicle.js")

exports.getTrackVehicle=async (req,res)=>{
    const vehicle=req.params;
    const isvehicle = await trackVehicle.findOne({ License: vehicle.license});
    if(isvehicle){
        res.json({
            message: "Found the car",
            data:isvehicle
          })
    }
    else{
        res.json({
            message: "Car not found",
          })
    }
}