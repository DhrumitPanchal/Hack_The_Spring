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
    aadhar: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String },
    number: { type: SchemaTypes.Mixed },
    address: { type: String },
    age: { type: String },
    role: { type: String },
    category: { type: String },
});

const User = model<User>("User", userSchema);

export default User;
