import './PostCard.css';
import { Link } from 'react-router';
import { Post } from '../../types/post';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  // Truncate content to 150 characters and add ellipsis if longer
  const truncatedContent = post.content.length > 150 
    ? `${post.content.slice(0, 150)}...` 
    : post.content;

  return (
    <div className="post-card">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-author">By: {post.author}</p>
      <p className="post-content">{truncatedContent}</p>
      <div className="post-footer">
        <span className="post-date">{new Date(post.createdAt).toLocaleDateString()}</span>
        <Link to={`/post/${post._id}`} className="read-more">Read More</Link>
      </div>
    </div>
  )
}
