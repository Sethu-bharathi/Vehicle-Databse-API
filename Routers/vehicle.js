
const router=require("express").Router();
const {getVehicle} =require("../Controllers/vehicle.js")
router.get("/",getVehicle);
router.post("/")