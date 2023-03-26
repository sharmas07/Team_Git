import mongoose from "mongoose";

const SignUp = new mongoose.Schema({
    username: {type:String, required:true},
    password: {type:String, required:true},
    secretKey: {type:String, required:true},
});

const UserSchema = mongoose.model('SignUp', SignUp);

export default UserSchema;