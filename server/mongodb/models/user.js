import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type:String, required:true},
    password: {type:String, required:true},
    secretkey: {type:String, required:true},
});

const User = mongoose.model('User', UserSchema);
User.createIndexes();
export default User; 