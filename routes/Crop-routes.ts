import express from "express";
import {Crop} from "../model/Crop";
import {CropAdd} from "../database/Crop-data-store";

const router = express.Router();

const crop = (upload: any) => {
    //save
    router.post('/add', upload.fields([{ name: "cropImage1", maxCount: 1 }]), async (req, res) => {
        console.log(req.body);

        const {commonName,scientificName,category,season,fieldId } = req.body;

        const files = req.files as { [commonName: string]: Express.Multer.File[] };
        const cropImage1 = files?.cropImage1 ? files.cropImage1[0].path : '';

        const newCrop = new Crop();
        newCrop.commonName=commonName;
        newCrop.scientificName=scientificName;
        newCrop.cropImage1=cropImage1;
        newCrop.category=category;
        newCrop.season=season;
        newCrop.fieldId=fieldId;


        try {
            const addedCrop = await CropAdd(newCrop);
            res.send('Crop Added');
        } catch (err) {
            console.error("Error adding Crop:", err);
            res.status(400).send("Error adding Crop" );
        }
    });
};

export default crop;