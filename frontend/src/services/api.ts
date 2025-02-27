import { Post, PostCreate } from "../types/post";
import { ApiResponse } from "../types/api.types";

const API_URL = "http://localhost:5000/api/v1";

export const fetchAllPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(`${API_URL}/posts`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    
    const apiResponse: ApiResponse<Post[]> = await response.json();
    console.log('Raw API response:', apiResponse);
    if (apiResponse && apiResponse.data) {
      return apiResponse.data;
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchPostById = async (id: string): Promise<Post> => {
  const response = await fetch(`${API_URL}/post/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  const apiResponse: ApiResponse<Post> = await response.json();
  
  if (!apiResponse.data) {
    throw new Error("Post not found");
  }
  
  return apiResponse.data;
};

export const createPost = async (post: PostCreate): Promise<Post> => {
  const response = await fetch(`${API_URL}/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  
  if (!response.ok) {
    throw new Error("Failed to create post");
  }
  
  const apiResponse: ApiResponse<Post> = await response.json();
  
  if (!apiResponse.data) {
    throw new Error("Failed to create post");
  }
  
  return apiResponse.data;
};

export const updatePost = async (id: string, post: Partial<Post>): Promise<Post> => {
  const response = await fetch(`${API_URL}/post/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  
  if (!response.ok) {
    throw new Error("Failed to update post");
  }
  
  const apiResponse: ApiResponse<Post> = await response.json();
  
  if (!apiResponse.data) {
    throw new Error("Failed to update post");
  }
  
  return apiResponse.data;
};

export const deletePost = async (id: string): Promise<void> => {
  const response = await fetch(`${API_URL}/post/${id}`, {
    method: "DELETE",
  });
  
  if (!response.ok) {
    throw new Error("Failed to delete post");
  }
  
};
