import asyncHandler from "../utils/AsyncHandler"
import type { Request, Response} from "express";

// const createPost = async( req: Request , res : Response) =>{  // without asyncHandler
//     try {
        
//     } catch (error) {
        
//     }
// }


export const createPost = asyncHandler(async(req, res)=>{

});

export const getAllPosts = asyncHandler(async(req, res)=>{

});

export const getPostById = asyncHandler(async(req, res)=>{

});


export const updatePost = asyncHandler(async(req, res)=>{

});

export const deletePost = asyncHandler(async(req, res)=>{

});