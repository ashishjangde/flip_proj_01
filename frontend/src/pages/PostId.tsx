import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { deletePost, fetchPostById } from '../services/api';
import { Post } from '../types/post';
import './PostId.css';

export default function PostId() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getPost = async () => {
      if (!id) return;

      try {
        const fetchedPost = await fetchPostById(id);
        setPost(fetchedPost);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch post:', err);
        setError('Failed to fetch post. It may not exist or has been removed.');
        setLoading(false);
      }
    };

    getPost();
  }, [id]);

  const handleDelete = async () => {
    if (!id || !window.confirm('Are you sure you want to delete this post?')) return;

    try {
      await deletePost(id);
      window.location.href = '/';
    } catch (err) {
      console.error('Failed to delete post:', err);
      alert('Failed to delete post. Please try again.');
    }
  };

  if (loading) {
    return <div className="loading">Loading post...</div>;
  }

  if (error || !post) {
    return <div className="error">{error || 'Post not found'}</div>;
  }

  return (
    <div className="post-detail">
      <h1 className="post-title">{post.title}</h1>
      <div className="post-meta">
        <p className="post-author">By: {post.author}</p>
        <p className="post-date">
          Published on: {new Date(post.createdAt).toLocaleDateString()}
        </p>
      </div>
      <div className="post-content-full">
        {post.content.split('\n').map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
      <div className="post-actions">
        <Link to={`/post/update/${post._id}`} className="edit-button">Edit Post</Link>
        <button className="delete-button" onClick={handleDelete}>Delete Post</button>
      </div>
      <div className="back-link">
        <Link to="/">← Back to Posts</Link>
      </div>
    </div>
  );
}
