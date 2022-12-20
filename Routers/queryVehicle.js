const { addQueryVehicle,plateQuery,latQuery,dateQuery,getAll,dateAndLat,queryAll } = require("../Controllers/queryVehicle");

const router=require("express").Router();

router.post("/",addQueryVehicle);
router.post("/queryplate",plateQuery);
router.post("/querylat",latQuery);
router.post("/querydate",dateQuery);
router.get("/",getAll);
router.post("/querydateAndLat",dateAndLat);
router.post("/queryAny",queryAll)
module.exports=router