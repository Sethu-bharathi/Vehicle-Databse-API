const Vehicle=require("../Models/vehicle.js");

exports.getVehicle=async (req,res)=>{
    const vehicle=req.params;
    const isvehicle = await Vehicle.findOne({ License: vehicle.license});
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

exports.addVehicle=async (req,res)=>{
    const vehicle=req.body;
    const isvehicle = await Vehicle.findOne({ License: vehicle.License});
    console.log(vehicle);
    if(isvehicle){
        res.json({
            message: "A car already exists with that Number",
          })
    }
    else{
        const vehicledb = new Vehicle({
            License: vehicle.License,
            Owner_name: vehicle.Owner_name,
            vehicle_color: vehicle.vehicle_color,
            vehicle_type:vehicle.vehicle_type,
            vehicle_company:vehicle.vehicle_company,
      });
      const details =await vehicledb.save()
        res.json({
            message:"Added succcessfully",
            data:details
        })
      
        
    }
}