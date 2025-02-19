import { Fuel,Status,PrismaClient } from "@prisma/client";
import {Vehicle} from "../model/Vehicle";

const prisma =new PrismaClient();

export async function VehicleAdd(v: Vehicle ){
    try{
        const newVehicle  = await prisma.vehicle.create({
            data:{
                licensePlateNumber: v.licensePlateNumber,
                vehicleCategory: v.vehicleCategory,
                fuelType: v.fuelType as Fuel,
                status: v.status as Status,
                remarks: v.remarks,
                staffId: v.staffId
            }

        })
        console.log('vehicle Added :',newVehicle)
    }catch(err) {
        console.log("error adding vehicle", err);
    }
}