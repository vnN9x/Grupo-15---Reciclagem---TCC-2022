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

router.get("/", async (req,res)=>{
    const townName = req.query.town;
    try{
        let towns;
        if (townName){
            towns = await Town.find({nome:townName});
        } else {
            towns = await Town.find();
        }
        res.status(200).json(towns);
    } catch(err){
        res.status(500).json(err)
    }
});

module.exports = router