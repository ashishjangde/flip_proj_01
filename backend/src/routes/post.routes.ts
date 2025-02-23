import { Router } from "express";
import { createPost , deletePost , getAllPosts , getPostById , updatePost } from "../controller/post.controller";

const postRouter = Router();


postRouter.post("/post", createPost)

postRouter.get("/post/:id",getPostById)

postRouter.get("/posts",getAllPosts)

postRouter.put("/post/:id",updatePost)

postRouter.delete("/post/:id",deletePost)

export default postRouter