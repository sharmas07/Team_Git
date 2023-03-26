import express from "express";
import * as dotenv from 'dotenv';
import User from "../mongodb/models/user.js";
dotenv.config();
const router = express.Router();
router.route('/').post(async (req, res)=>{
    try {
        let userdata  = await User.find({username:req.body.username})
        res.json(userdata)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})
export default router;