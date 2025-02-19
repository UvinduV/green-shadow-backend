import { Fuel,Status,PrismaClient } from "@prisma/client";
import {Vehicle} from "../model/Vehicle";
import {Staff} from "../model/Staff";

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

export async function VehicleUpdate(licensePlateNumber: string, v: Vehicle){
    try{
        const updatedRecord=await prisma.vehicle.update({
            where:{ licensePlateNumber : v.licensePlateNumber},
            data:{
                vehicleCategory: v.vehicleCategory,
                fuelType: v.fuelType,
                status: v.status,
                remarks: v.remarks,
                staffId: v.staffId
            }
        })
        console.log("vehicle Updated:", updatedRecord);
    }catch(err){
        console.log("error updating vehicle", err);
    }
}