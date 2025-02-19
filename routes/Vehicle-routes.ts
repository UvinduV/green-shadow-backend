import express from "express";
import {Vehicle} from "../model/Vehicle";
import {VehicleAdd, VehicleUpdate} from "../database/Vehicle-data-store";

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

//update
router.put('/update/:licensePlateNumber',async (req,res,next)=>{
    const licensePlateNumber: string = req.params.licensePlateNumber;
    const vehicle : Vehicle = req.body;

    try{
        const updatedVehicle=await VehicleUpdate(licensePlateNumber, vehicle);
        res.send('Vehicle Updated !');
        console.log("vehicle updated");

    }catch(err){
        console.log("error updating vehicle", err);
    }
});

export default router;