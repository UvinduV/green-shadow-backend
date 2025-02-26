import { PrismaClient } from "@prisma/client";
import {User} from "../model/user";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function createUser(user : User) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const addedUser = await prisma.user.create({
        data: {
            email : user.email,
            password : hashedPassword,
        },
    });
    console.log("User created:", addedUser);
}