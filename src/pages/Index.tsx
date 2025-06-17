
import { BlogHeader } from "@/components/BlogHeader";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedPosts } from "@/components/FeaturedPosts";
import { AboutSection } from "@/components/AboutSection";
import { Newsletter } from "@/components/Newsletter";
import { BlogFooter } from "@/components/BlogFooter";
import { CategoryNavigation } from "@/components/CategoryNavigation";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check for redirect parameter from server-side redirect
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('redirect');
    if (redirectPath) {
      navigate(redirectPath, { replace: true });
      return;
    }
    
    // Check if there's a hash in the URL and scroll to that section
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [navigate]);

  return (
    <div className="min-h-screen font-inter">
      <BlogHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <section className="py-20 bg-white" id="posts">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
                Latest Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter">
                Discover my recent thoughts, experiences, and insights from this beautiful journey called life.
              </p>
            </div>
            
            <CategoryNavigation activeCategory="all" />
            <FeaturedPosts />
          </div>
        </section>
        <Newsletter />
      </main>
      <BlogFooter />
    </div>
  );
};

export default Index;
