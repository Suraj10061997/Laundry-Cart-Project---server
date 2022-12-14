import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // Suraj's field
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pincode:{
    type: String,
    required: true
  }
})


const usersModel = mongoose.model('User', userSchema);

export default usersModel;