export interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostCreate {
  title: string;
  content: string;
  author: string;
}