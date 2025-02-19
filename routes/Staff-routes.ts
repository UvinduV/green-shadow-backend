import express from "express";
import {Staff} from "../model/Staff";
import {StaffAdd} from "../database/Staff-data-store";

const router =express.Router();

router.post('/add',async (req,res,next)=>{
    console.log(req.body);

    const staff: Staff= req.body;
    try{
        const addedStaff = await StaffAdd(staff);
        res.send('staff Added !')
    }catch(err){
        console.log("error adding staff", err);
        res.status(400).send("error adding staff");
    }
})

export default router;