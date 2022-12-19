
const router=require("express").Router();
const {getVehicle,addVehicle} =require("../Controllers/vehicle.js")

router.get("/:license",getVehicle);
router.post("/",addVehicle);

module.exports=router