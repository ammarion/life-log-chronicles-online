
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
            <a 
              href="https://www.linkedin.com/in/ammar-alim-6630a977/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"
            >
              LinkedIn
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1">
                <path d="M20 4h1a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1m0 0v2m0-2h16m-5 12v-5.5m0 5.5v-5.5m0 0c0-.471.029-.943.088-1.405M16 10.5h-4v5.5m4-5.5c0 1.657-1.343 3-3 3m0 0c-1.657 0-3-1.343-3-3m3 3v5.5m-3-8.5h6"/>
              </svg>
            </a>
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
              <a 
                href="https://www.linkedin.com/in/ammar-alim-6630a977/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 hover:text-gray-900 transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                LinkedIn
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1">
                  <path d="M20 4h1a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1m0 0v2m0-2h16m-5 12v-5.5m0 5.5v-5.5m0 0c0-.471.029-.943.088-1.405M16 10.5h-4v5.5m4-5.5c0 1.657-1.343 3-3 3m0 0c-1.657 0-3-1.343-3-3m3 3v5.5m-3-8.5h6"/>
                </svg>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
