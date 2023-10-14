import mongoose from "mongoose";
import UserModel from "./user.js";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: UserModel
  }
},{timestamps:true});

const LinvesModel = mongoose.model("lives", schema);

export default LinvesModel;