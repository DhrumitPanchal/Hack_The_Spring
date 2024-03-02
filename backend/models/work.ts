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
    title: { type: String, required: false },
    peoples: { type: String, required: false },
    description: { type: String, required: false },
    address: { type: String, required: false },
    startdate: { type: String, required: false },
    enddate: { type: String, required: false },
});

const Work = model<iWork>("Work", workSchema);

export default Work;
