import express from "express";
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();


router.route('/').post(async (req, res)=>{
    try {
        res.send('login route')
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

export default router;