import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>BlogPost</h3>
          <p>Share your thoughts with the world.</p>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/post/create">Create Post</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: contact@blogpost.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} BlogPost. All rights reserved.</p>
      </div>
    </footer>
  )
}
