import { Request, Response } from "express";
import { log } from "console";
import User from "../models/user.js";

class AuthController {
    // signup controller
    static async signup(req: any, res: any) {
        try {
            const {
                name,
                aadhar,
                email,
                password,
                gender,
                number,
                address,
                age,
                role,
                category,
            } = req.body;
            const user = new User({
                name,
                aadhar,
                email,
                password,
                gender,
                number,
                address,
                age,
                role,
                category,
            });
            await user.save();
            log(`User saved! Email: ${user.email}`);
            res.status(201).send("Signup successful");
        } catch (err: any) {
            res.status(500).send(
                "Error while saving user: " + req + err.message
            );
        }
    }

    // Login controller
    static async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user || user!.password != password) {
                return res.status(401).send("Invalid login credentials");
            }

            return res.status(200).send("Login successful");
        } catch (err: any) {
            return res.status(500).send("Login error " + err.message);
        }
    }
}

export default AuthController;
