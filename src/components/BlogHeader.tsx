
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BlogHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gray-900 hover:text-gray-700">
            Ammar Alim's Blog
          </Link>
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">Home</Link>
            <Link to="/category/tech" className="text-gray-700 hover:text-gray-900 transition-colors">Tech</Link>
            <Link to="/category/career" className="text-gray-700 hover:text-gray-900 transition-colors">Career</Link>
            <Link to="/category/lifestyle" className="text-gray-700 hover:text-gray-900 transition-colors">Lifestyle</Link>
            <Link to="/" onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-gray-900 transition-colors">About</Link>
            <Link to="/" onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gray-900 transition-colors">Contact</Link>
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t mt-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-gray-900 transition-colors">Home</Link>
              <Link to="/category/tech" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-gray-900 transition-colors">Tech</Link>
              <Link to="/category/career" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-gray-900 transition-colors">Career</Link>
              <Link to="/category/lifestyle" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-gray-900 transition-colors">Lifestyle</Link>
              <Link to="/" onClick={() => { scrollToSection('about'); }} className="text-gray-700 hover:text-gray-900 transition-colors">About</Link>
              <Link to="/" onClick={() => { scrollToSection('contact'); }} className="text-gray-700 hover:text-gray-900 transition-colors">Contact</Link>
              <div className="flex space-x-4 pt-2">
                <a href="https://linkedin.com/in/ammaralim" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors">LinkedIn</a>
                <a href="https://github.com/ammarion" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 transition-colors">GitHub</a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
