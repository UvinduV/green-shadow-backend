import express from "express";
import {Field} from "../model/Field";
import {FieldAdd, FieldUpdate} from "../database/field-data-store";

const router = express.Router();


const field = (upload: any) => {
    //save
    router.post('/add', upload.fields([{ name: "fieldImage1", maxCount: 1 }, { name: "fieldImage2", maxCount: 1 }]), async (req, res) => {
        console.log(req.body);

        const { fieldName, location, extentSize } = req.body;

        const files = req.files as { [fieldName: string]: Express.Multer.File[] };
        const fieldImage1 = files?.fieldImage1 ? files.fieldImage1[0].path : '';
        const fieldImage2 = files?.fieldImage2 ? files.fieldImage2[0].path : '';

        const newField = new Field();
        newField.fieldName = fieldName;
        newField.location = location;
        newField.extentSize = extentSize;
        newField.fieldImage1 = fieldImage1;
        newField.fieldImage2 = fieldImage2;

        try {
            const addedField = await FieldAdd(newField);
            res.send('field Added');
        } catch (err) {
            console.error("Error adding field:", err);
            res.status(400).send("Error adding field" );
        }
    });

    //update

    router.put('/update/:fieldName', upload.fields([
        { name: "fieldImage1", maxCount: 1 },
        { name: "fieldImage2", maxCount: 1 }
    ]), async (req, res) => {
        console.log(req.body);

        const {location, extentSize} = req.body;
        const fieldName = req.params.fieldName;

        const files = req.files as { [fieldName: string]: Express.Multer.File[] };
        const fieldImage1 = files?.fieldImage1 ? files.fieldImage1[0].path : undefined;
        const fieldImage2 = files?.fieldImage2 ? files.fieldImage2[0].path : undefined;

        const updatedField: Partial<Field> = {
            fieldName,
            location,
            extentSize: extentSize ? Number(extentSize) : undefined, // Convert to number if provided
            ...(fieldImage1 && { fieldImage1 }),
            ...(fieldImage2 && { fieldImage2 })
        };

        try {
            const updatedRecord = await FieldUpdate(fieldName, updatedField);
            res.send("Field updated successfully");
        } catch (err) {
            console.error("Error updating field:", err);
            res.status(400).json({ error: "Error updating field" });
        }
    });

    return router;

};
export default field;



