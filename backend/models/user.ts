import { Schema, SchemaTypes, model } from "mongoose";

interface User {
    name: string;
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
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    number: { type: SchemaTypes.Mixed, required: true },
    address: { type: String, required: true },
    age: { type: String, required: true },
    role: { type: String, required: true },
    category: { type: String, required: true },
});

const User = model<User>("User", userSchema);

export default User;
