import z from 'zod';


export const PostUpdateSchema = z.object({
  title: z.string().min(5 , {message: 'Title should be atleast 5 character long'}).max(30, {message: 'Title should be less than 30 characters'}),
  content: z.string().min(5 , {message : "Content should be atleast 5 characters long"}),
  author : z.string({message:"Author name only can be string"}).min(3 , {message : "Author name should be atleast 3 characters long"})
});