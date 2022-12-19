const { addQueryVehicle,plateQuery,latQuery,dateQuery,getAll } = require("../Controllers/queryVehicle");

const router=require("express").Router();

router.post("/",addQueryVehicle);
router.post("/queryplate",plateQuery);
router.post("/querylat",latQuery);
router.post("/querydate",dateQuery);
router.get("/",getAll);
module.exports=router