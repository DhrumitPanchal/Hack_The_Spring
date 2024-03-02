import Work from "../models/work.js";

class AuthController {
    // add work controller
    static async add(req: any, res: any) {
        try {
            const workData = new Work({
                title: req.body.title,
                address: req.body.address,
                description: req.body.description,
                peoples: req.body.peoples,
                enddate: req.body.enddate,
                startdate: req.body.startdate,
            });
            await workData.save();
            res.status(201).send("Work saved successfully!");
        } catch (err: any) {
            res.status(500).send("Work can not be saved! " + err.message);
        }
    }

    // Get work controller
    static async get(_: any, res: any) {
        try {
            const workData = await Work.find().exec();
            res.status(200).json(workData);
        } catch (err: any) {
            res.status(500).send("Work can not be saved! " + err.message);
        }
    }
}

export default AuthController;
