import express from "express";
import {Vehicle} from "../model/Vehicle";
import {VehicleAdd} from "../database/Vehicle-data-store";

const router = express.Router();

//save
router.post('/add',async (req,res,next)=>{
    console.log(req.body);

    const vehicle: Vehicle= req.body;
    try{
        const addedVehicle = await VehicleAdd(vehicle);
        res.send('vehicle Added !')
    }catch(err){
        console.log("error adding vehicle", err);
        res.status(400).send("error adding vehicle");
    }
});

export default router;