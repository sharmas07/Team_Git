import express from "express";
import * as dotenv from 'dotenv';
import famMember from "../mongodb/models/famMember.js";
dotenv.config();
const router = express.Router();
// route to add a member into database
router.route('/').post(async(req, res)=>{
    const {username, secretkey, name, dob, gender, occupation, relationDescription, alive} = req.body;
    console.log(req.body);
    try {
        let newMember = await famMember.create({
            username,
            secretkey,
            name,
            dob,
            gender,
            occupation,
            relationDescription,
            alive
        })
        res.json({succes:true,newMember})
    } catch (error) {
        res.json({succes:false})
    }
})
export default router