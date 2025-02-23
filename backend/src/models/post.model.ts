import {Schema , model} from "mongoose";

interface IPostSchema{
    title : string
    content : string
    author : string
}

const PostSchema = new Schema<IPostSchema>({
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
},{timestamps : true})  // createdAt , updatedAt



export const Post = model<IPostSchema>('Post' , PostSchema)  //Posts