import { Schema } from "mongoose";

const postSchema = new Schema ({
    nama : {type:String},
    title : {type:String},
    author : {type:String}
}, {
    timestamps: true, 
});

export default postSchema;