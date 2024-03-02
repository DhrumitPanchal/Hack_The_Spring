import { Schema, SchemaTypes, model } from "mongoose";

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
    name: { type: String, required: true },
    aadhar: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: false },
    number: { type: SchemaTypes.Mixed, required: false },
    address: { type: String, required: false },
    age: { type: String, required: false },
    role: { type: String, required: false },
    category: { type: String, required: false },
});

const User = model<User>("User", userSchema);

export default User;
