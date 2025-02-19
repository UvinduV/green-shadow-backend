import {Gender, PrismaClient, Role} from "@prisma/client";
import {Staff} from "../model/Staff";

const prisma =new PrismaClient();

export async function StaffAdd(s: Staff ){
    try{
        const newStaff  = await prisma.staff.create({
            data:{
                firstName: s.firstName,
                lastName: s.lastName,
                designation: s.designation,
                gender: s.gender as Gender,
                joinedDate: s.joinedDate,
                dob: s.dob,
                address: s.address,
                contactNo: s.contactNo,
                email: s.email,
                role: s.role as Role,
                fieldId: s.fieldId

            }

        })
        console.log('staff Added :',newStaff)
    }catch(err) {
        console.log("error adding staff", err);
    }

}
