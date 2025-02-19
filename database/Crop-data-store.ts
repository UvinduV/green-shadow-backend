import {PrismaClient} from "@prisma/client";
import {Crop} from "../model/Crop";

const prisma =new PrismaClient();

export async function CropAdd(c: Crop ){
    try{
        const newCrop  = await prisma.crop.create({
            data:{
                commonName: c.commonName,
                scientificName:c.scientificName,
                cropImage1:c.cropImage1,
                category:c.category,
                season:c.season,
                fieldId:c.fieldId
            }

        })
        console.log('crop Added :',newCrop)
    }catch(err) {
        console.log("error adding crop", err);
    }

}