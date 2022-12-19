const queryVehicle = require("../Models/queryVehicle.js");
const Vehicle = require("../Models/vehicle.js");

exports.addQueryVehicle = async (req, res) => {
  const vehicle = req.body;
    const vehicledb = new queryVehicle({
      License: vehicle.License,
      time_stamp: vehicle.time_stamp,
      Date: vehicle.time_stamp.split(",")[0],
      Time: vehicle.time_stamp.split(",")[1].trimStart(),
      Location:vehicle.Location
    });
    const details = await vehicledb.save();
    res.json({
      message: "Added succcessfully",
      data: details,
    });
  
};

exports.plateQuery= async (req, res) => {
  const vehicle = req.body;
  const isvehicle = await queryVehicle.find({ License: vehicle.License});
  console.log(isvehicle);
  res.json({
    message: "Found succcessfully",
    data: isvehicle,
  });
}
exports.latQuery= async (req, res) => {
  const vehicle = req.body;
  const isvehicle = await queryVehicle.find({ Location: vehicle.Location});
  console.log(isvehicle);
  res.json({
    message: "Found succcessfully",
    data: isvehicle,
  });
}
exports.dateQuery= async (req, res) => {
  const vehicle = req.body;
  const isvehicle = await queryVehicle.find({ Date: vehicle.Date});
  console.log(isvehicle);
  res.json({
    message: "Found succcessfully",
    data: isvehicle,
  });
}

exports.getAll=async(req,res)=>{
  const isvehicle = await queryVehicle.find({});
  console.log(isvehicle);
  res.json({
    message: "A list of all vehicles",
    data: isvehicle,
  });
}
