import './Navbar.css';
import { Link } from 'react-router';

export default function Navbar() {
  return (
    <nav className="navbar-main">
        {/* Logo */}
        <div className="navbar-logo">
            <Link to="/" className="logo-link">
                BlogPost
            </Link>
        </div>
        {/* Routes */}
        <div className="navbar-routes">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post/create">Create Post</Link></li>
            </ul>
        </div>
    </nav>
  )
}
