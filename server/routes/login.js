import express from "express";
import * as dotenv from 'dotenv';
import User from "../mongodb/models/user.js";
dotenv.config();
const router = express.Router();
router.route('/').post(async (req, res)=>{
    const{ username, password} = req.body
    try {
        let userdata  = await User.find({username:req.body.username});
        if (userdata.length != 0 && password === userdata[0].password) {
            res.json({"loggedin":true,userdata})
        }
        else{
            res.json({"loggedin":false})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})
export default router;