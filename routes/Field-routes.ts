import express from "express";
import {Field} from "../model/Field";
import {FieldAdd} from "../database/field-data-store";

const router = express.Router();


const saveField = (upload: any) => {

    router.post('/add', upload.fields([{ name: "fieldImage1", maxCount: 1 }, { name: "fieldImage2", maxCount: 1 }]), async (req, res) => {
        console.log(req.body);

        const { fieldCode, fieldName, location, extentSize } = req.body;

        const files = req.files as { [fieldname: string]: Express.Multer.File[] };
        const fieldImage1 = files?.fieldImage1 ? files.fieldImage1[0].path : '';
        const fieldImage2 = files?.fieldImage2 ? files.fieldImage2[0].path : '';

        const newField = new Field();
        newField.fieldCode = fieldCode;
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
            res.status(400).json({ error: "Error adding field" });
        }
    });

    return router;
};

export default saveField;