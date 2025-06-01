
import { Button } from "@/components/ui/button";
import { book } from "lucide-react";

export const BlogHeader = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full flex items-center justify-center">
              <book className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-2xl font-playfair font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Life Chronicles
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors font-inter">Home</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors font-inter">About</a>
            <a href="#posts" className="text-gray-700 hover:text-gray-900 transition-colors font-inter">Posts</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors font-inter">Contact</a>
          </nav>

          <Button variant="outline" className="hidden md:inline-flex">
            Subscribe
          </Button>
        </div>
      </div>
    </header>
  );
};
