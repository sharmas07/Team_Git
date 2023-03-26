import express from "express";
import * as dotenv from 'dotenv';

import UserSchema from '../mongodb/models/signup.js'

dotenv.config();

const router = express.Router();


// get all posts
router.route('/').get(async(req, res)=>{
    try {
        const posts = await Post.find({});
        res.send(200).json(posts)
    } catch (error) {
        
    }
})

// post a post
router.route('/').post(async(req, res)=>{
    try {
    
        res.status(201).send('signup post');
    } catch (error) {
        res.send(500).json(error)
    }
})

export default router