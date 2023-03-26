import express from "express";
import * as dotenv from 'dotenv';
import User from '../mongodb/models/user.js'
dotenv.config();
const router = express.Router();
// post a post
router.route('/').post(async(req, res)=>{
    const {username, password, secretkey} = req.body;
        let reg_user = User.find({username:username});
        if(reg_user.username === username){
            res.json({error:"user already exist"})
        }
        else{
            let newUser = await User.create({
                username,
                password,
                secretkey
            })
            res.json(newUser)
        }
})
export default router