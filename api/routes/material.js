const router = require("express").Router();
const Material = require("../models/Material");

router.post("/map", async (req,res)=>{
    try{
        const newMaterial = new Material({
            material: req.body.material,
            place: req.body.place,
        })

        const material = await newMaterial.save();
        response.status(200).json(material);

    } catch(err){
        res.status(500).json(err)
    }
});

router.get("/map", async (req,res)=>{
    const materials = await Material.find();
    res.json(materials);
});

module.exports = router