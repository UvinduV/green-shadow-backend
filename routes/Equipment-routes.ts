import express from "express";
import {Equipment} from "../model/Equipment";
import {EquipmentAdd} from "../database/Equipment-data-store";

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