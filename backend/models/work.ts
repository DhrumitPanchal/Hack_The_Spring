import { Schema, model } from "mongoose";

interface iWork {
    title: string;
    address: string;
    peoples: string;
    description: string;
    startdate: string;
    enddate: string;
}

const workSchema = new Schema<iWork>({
    title: { type: String, required: true, unique: true },
    peoples: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    startdate: { type: String, required: true },
    enddate: { type: String, required: true },
});

const Work = model<iWork>("Work", workSchema);

export default Work;
