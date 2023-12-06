const express = require('express');
const Visualization = require("../models").Visualization;
const router = express.Router();

router.get("/:link", async(req, res) => {
    let {link} = req.params
    const [visualization, created] = await Visualization.findOrCreate({
        where: {link: link}
    })
    res.status(200)
    res.json({visualization})
    
})

router.post("/:id", async(req, res) =>{
    let {id} = req.params
    let visualization = await Visualization.findByPk(id)
    if (!visualization){
        res.status(404)
        res.json({message: "Visualization not found"})
    } else {
        visualization.count += 1
        await visualization.save()
        res.status(200)
        res.json({visualization})
    }  
})

router.get("/", async(req, res) => {
    let visualizations = await Visualization.findAll()
    res.status(200)
    res.json({visualizations})
})

module.exports = router