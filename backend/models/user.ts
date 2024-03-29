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
<<<<<<< HEAD
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
=======
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
>>>>>>> a3e832bd1c50b570fba92c00b093d281e8851447
});

userSchema.index({ name: 1 }, { unique: false });

const User = model<User>("User", userSchema);

export default User;
