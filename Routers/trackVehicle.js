const { getTrackVehicle } = require("../Controllers/trackVehicle");

const router=require("express").Router();

router.get("/",getTrackVehicle);