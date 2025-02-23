import asyncHandler from "../utils/AsyncHandler"
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import { PostCreateSchema } from "../schema/PostCreateSchema";
import FormatValidationError from "../utils/FormatValidationError";
import { Post } from "../models/post.model";

// const createPost = async( req: Request , res : Response) =>{  // without asyncHandler
//     try {
        
//     } catch (error) {
        
//     }
// }


export const createPost = asyncHandler(async(req, res)=>{
  // parse req body
  const result =  PostCreateSchema.safeParse(req.body)

  // check if the result is not success
  if (!result.success){
    const errors = FormatValidationError(result.error)
    throw new ApiError(400, "Validation Error", errors)
  } 
    
  // if the result is success then find the post with the title if title is already exist then throw error else create a new post
   
  // parse the result data to get the title, content and author
    const {title, content , author} = result.data;    // destructure the result.data  
    
   const existingPost = await Post.find({title : title})
   if (existingPost.length > 0) throw new ApiError(400, "Post with this title already exist")

    // create a new post
    const newPost = new Post({
      title  ,
      content,
      author
    })
   const savedPost = await newPost.save()
   res.status(201).json(new ApiResponse(savedPost))  // 201 == created
});



export const getAllPosts = asyncHandler(async(req, res)=>{
  const posts = await Post.find({})
  res.json(new ApiResponse(posts))
});

export const getPostById = asyncHandler(async(req, res)=>{
  const postId = req.params.id
  const post = await Post.findById(postId)
  if (!post) throw new ApiError(404, "Post not found")
  res.json(new ApiResponse(post))
});


export const updatePost = asyncHandler(async(req, res)=>{
 const result = PostCreateSchema.safeParse(req.body)
 if (!result.success){
    const errors = FormatValidationError(result.error)
    throw new ApiError(400, "Validation Error", errors)
  }
  const {title, content , author} = result.data;
  const postId = req.params.id
  const post = await Post.findById(postId)
  if (!post){ 
    throw new ApiError(404, "Post not found")
  }
  
  post.title = title
  post.content = content
  post.author = author

  const updatedPost = await post.save()
  res.json(new ApiResponse(updatedPost))
 
});

export const deletePost = asyncHandler(async(req, res)=>{
  const postId = req.params.id
  const post = await Post.findById(postId)
  if (!post) throw new ApiError(404, "Post not found")
  await post.deleteOne({
    _id : postId
  })
  res.json(new ApiResponse({message : "Post deleted successfully"}))
});