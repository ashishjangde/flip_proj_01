import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Post, PostCreate } from '../../types/post';
import './PostForm.css';

interface PostFormProps {
  initialData?: Post;
  isEditMode: boolean;
  onSubmit: (data: PostCreate) => Promise<void>;
  cancelUrl: string;
}

export default function PostForm({ initialData, isEditMode, onSubmit, cancelUrl }: PostFormProps) {
  const [formData, setFormData] = useState<PostCreate>({
    title: '',
    content: '',
    author: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // If initialData is provided (edit mode), populate the form
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title,
        content: initialData.content,
        author: initialData.author
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title.trim() || !formData.content.trim() || !formData.author.trim()) {
      setError('All fields are required');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await onSubmit(formData);
    } catch (err) {
      console.error(`Failed to ${isEditMode ? 'update' : 'create'} post:`, err);
      setError(`Failed to ${isEditMode ? 'update' : 'create'} post. Please try again.`);
      setLoading(false);
    }
  };

  return (
    <div className="post-form-container">
      <h1 className="form-title">{isEditMode ? 'Edit Post' : 'Create New Post'}</h1>
      
      {error && <div className="form-error">{error}</div>}
      
      <form className="post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input 
            type="text" 
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter post title"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input 
            type="text" 
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Your name"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea 
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your post content here..."
            rows={10}
            disabled={loading}
          ></textarea>
        </div>

        <div className="form-actions">
          <Link to={cancelUrl} className="cancel-button">Cancel</Link>
          <button 
            type="submit" 
            className="submit-button"
            disabled={loading}
          >
            {loading 
              ? (isEditMode ? 'Updating...' : 'Creating...') 
              : (isEditMode ? 'Update Post' : 'Create Post')}
          </button>
        </div>
      </form>
    </div>
  );
}
