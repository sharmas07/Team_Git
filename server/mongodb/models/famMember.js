import mongoose from "mongoose";

const famMemberSchema = new mongoose.Schema({
    username: {type:String, required:true},
    secretkey: {type:String, required:true},
    name: {type:String, required:true},
    dob: {type:String, required:true},
    gender: {type:String, required:true},
    occupation: {type:String, required:true},
    relationDescription : {type: String, required:true},
    alive:{type:String,required:true}
});

const famMember = mongoose.model('famMember', famMemberSchema);
famMember.createIndexes();
export default famMember; 