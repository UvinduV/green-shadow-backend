import {PrismaClient} from "@prisma/client";
import {Field} from "../model/Field";

const prisma= new PrismaClient();

export async function FieldAdd(f: Field ){
    try{
        const extentSizeFloat = Number(f.extentSize);

        const newField  = await prisma.field.create({
            data:{
                fieldName: f.fieldName,
                location: f.location,
                extentSize: extentSizeFloat,
                fieldImage1: f.fieldImage1,
                fieldImage2: f.fieldImage2
            }

        })
        console.log('Field Added :',newField)
    }catch(err) {
        console.log("error adding field", err);
    }

}

