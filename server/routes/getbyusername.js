import express from "express";
import * as dotenv from 'dotenv';
import famMember from "../mongodb/models/famMember.js";
dotenv.config();
const router = express.Router();
// route to add a member into database
router.route('/').post(async(req, res)=>{
    const {username} = req.body;
    console.log(req.body);
    try {
        let allMembers = await famMember.find({username})
        res.json(allMembers)
    } catch (error) {
        res.json({succes:false})
    }
})
export default router