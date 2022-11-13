const router = require("express").Router();
const { json } = require("express");
const Place= require("../models/Place");

router.post("/map", async (req,res)=>{
    try{
        const newPlace = new Place({
            name: req.body.name,
            town: req.body.town,
            materials: req.body.materials,
            desc: req.body.desc,
            image: req.body.image,
            lat: req.body.lat,
            long: req.body.long,
        });

        const place = await newPlace.save()
        res.status(200).json(place)
    } catch(err){
        res.status(500).json(err);
    }
});

router.get("/map", async (req,res)=>{
    const matName = req.query.materials;
    try{
        let places;
        if (matName){
            places = await Place.find({
                materials: {
                    $in:[matName]
                }
            });
        } else {
            places = await Place.find();
        }
        res.status(200).json(places);
    } catch(err){
        res.status(500).json(err)
    }
});

module.exports = router