import { createPost } from '../services/api';
import PostForm from '../components/post-form/PostForm';
import type { PostCreate as PostCreateType } from '../types/post';

export default function PostCreate() {
  const handleSubmit = async (postData: PostCreateType) => {
    await createPost(postData);
    window.location.href = '/';
  };

  return (
    <PostForm 
      isEditMode={false}
      onSubmit={handleSubmit}
      cancelUrl="/"
    />
  );
}
