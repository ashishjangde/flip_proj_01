import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchPostById, updatePost } from '../services/api';
import { Post, PostCreate } from '../types/post';
import PostForm from '../components/post-form/PostForm';

export default function PostUpdate() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;

      try {
        const postData = await fetchPostById(id);
        setPost(postData);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch post:', err);
        setError('Failed to load post data. It may not exist or has been removed.');
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (postData: PostCreate) => {
    if (!id) return;
    await updatePost(id, postData);
    window.location.href = `/post/${id}`;
  };

  if (loading) {
    return <div className="loading">Loading post data...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!post) {
    return <div className="error">Post not found</div>;
  }

  return (
    <PostForm 
      initialData={post}
      isEditMode={true}
      onSubmit={handleSubmit}
      cancelUrl={`/post/${id}`}
    />
  );
}
