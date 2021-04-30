import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullName: {type: String, reqired:true},
    role: {type: Number, required:true},
    email: {type: String, required:true},
    passwordHash: {type:String, required:true},
});
const User = mongoose.model("user", userSchema);

export default User;