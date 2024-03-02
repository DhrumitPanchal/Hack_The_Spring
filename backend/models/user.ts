import { Schema, model } from "mongoose";

interface User {
    name: string;
    aadhar: string;
    email: string;
    password: string;
    gender: string;
    number: string | number;
    address: string;
    age: string;
    role: string;
    category: string;
}

const userSchema = new Schema<User>({
    name: { type: String, unique: false },
    aadhar: { type: String, unique: false },
    email: { type: String, unique: false },
    password: { type: String, unique: false },
    gender: { type: String, unique: false },
    number: { type: String, unique: false },
    address: { type: String, unique: false },
    age: { type: String, unique: false },
    role: { type: String, unique: false },
    category: { type: String, unique: false },
});

userSchema.index({ name: 1 }, { unique: false });

const User = model<User>("User", userSchema);

export default User;
