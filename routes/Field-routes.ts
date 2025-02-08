import express from "express";
import {Field} from "../model/Field";

const router = express.Router();

router.post('/add',async (req,res,next)=>{
    console.log(req.body);

    const field: Field= req.body;
    try{
        const addedField = await FieldAdd(field);
        res.send('field Added')
    }catch(err){
        console.log("error adding field", err);
        res.status(400).send("error adding field");
    }
})

export default router;