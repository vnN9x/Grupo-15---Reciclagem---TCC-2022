const router = require("express").Router();
const Town = require("../models/Town");

router.post("/map", async (req,res)=>{
    try{
        const newTown = new Town({
            name: req.body.name,
            lat: req.body.lat,
            long: req.body.long,
        });

        const town = await newTown.save()
        res.status(200).json(town)
    } catch(err){
        res.status(500).json(err);
    }
});

module.exports = router