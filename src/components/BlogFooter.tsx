
import { Heart, Book } from "lucide-react";
import { Link } from "react-router-dom";

export const BlogFooter = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full flex items-center justify-center">
                <Book className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold">Life Chronicles</h3>
            </div>
            <p className="text-gray-400 font-inter leading-relaxed max-w-md">
              A personal blog about life, growth, and finding beauty in everyday moments. 
              Thank you for being part of this journey.
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-2 font-inter">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/" onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/" onClick={() => scrollToSection('posts')} className="text-gray-400 hover:text-white transition-colors">Posts</Link></li>
              <li><Link to="/" onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2 font-inter">
              <li><Link to="/category/tech" className="text-gray-400 hover:text-white transition-colors">Tech</Link></li>
              <li><Link to="/category/career" className="text-gray-400 hover:text-white transition-colors">Career</Link></li>
              <li><Link to="/category/lifestyle" className="text-gray-400 hover:text-white transition-colors">Lifestyle</Link></li>
              <li><Link to="/category/travel" className="text-gray-400 hover:text-white transition-colors">Travel</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-inter flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-rose-500 mx-1" /> © {currentYear} Life Chronicles
          </p>
        </div>
      </div>
    </footer>
  );
};
