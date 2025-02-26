import express from "express";
import {User} from "../model/user";
import {createUser} from "../database/user-client";

const router = express.Router();

router.post("/register", async (req, res) => {
    console.log('Register', req.body);
    const email = req.body.user.email;
    const password = req.body.user.password;

    const user : User = {email, password};

    try{
        const registration = await createUser(user);
        res.status(201).json(registration);
    }catch(err){
        console.log(err);
        res.status(401).json(err);
    }
})

export default router;