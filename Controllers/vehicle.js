const Vehicle=require("../Models/vehicle.js");

exports.getVehicle=async (req,res)=>{
    const vehicle=req.body;
    const isvehicle = await Vehicle.findOne({ License: vehicle.license});
    if(isvehicle){
        res.json({
            message: "Found the car",
            data:isvehicle
          }).catch(()=>res.status(400).send("Vehicle found but there are issues in sending"));
    }
    else{
        res.json({
            message: "Car not found",
          })
    }
}

exports.addVehicle=async (req,res)=>{
    const vehicle=req.body;
    const isvehicle = await Authentication.findOne({ License: vehicle.license});
    if(!isvehicle){
        res.json({
            message: "A car already exists with that Number",
          })
    }
    else{

        
    }
}