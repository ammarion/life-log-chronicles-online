
import { Link } from "react-router-dom";

export const BlogHeader = () => {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gray-900 hover:text-gray-700">
            Ammar Alim's Blog
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">Home</Link>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
            <a href="https://linkedin.com/in/ammaralim" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors">LinkedIn</a>
            <a href="https://github.com/ammarion" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors">GitHub</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
