import express from "express";
import * as dotenv from 'dotenv';
import User from '../mongodb/models/user.js'
dotenv.config();
const router = express.Router();
// post a user
router.route('/').post(async(req, res)=>{
    const {username, password, secretkey} = req.body;
        console.log(username);
        const reg_user = await User.find({username});
        if(reg_user.length != 0){
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