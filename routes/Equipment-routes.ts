import express from "express";
import {Equipment} from "../model/Equipment";
import {EquipmentAdd, EquipmentUpdate} from "../database/Equipment-data-store";

const router = express.Router();

//save
router.post('/add',async (req,res,next)=>{
    console.log(req.body);

    const equipment: Equipment= req.body;
    try{
        const addedEquipment = await EquipmentAdd(equipment);
        res.send('Equipment Added !')
    }catch(err){
        console.log("error adding equipment", err);
        res.status(400).send("error adding equipment");
    }
});

//update
router.put('/update/:name',async (req,res,next)=>{
    const name: string = req.params.name;
    const equipment : Equipment = req.body;

    try{
        const updatedEquipment=await EquipmentUpdate(name, equipment);
        res.send('Equipment Updated !');
        console.log("equipment updated");

    }catch(err){
        console.log("error updating equipment", err);
    }
});

export default router;