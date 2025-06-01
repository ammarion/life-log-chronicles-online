
import { BlogHeader } from "@/components/BlogHeader";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedPosts } from "@/components/FeaturedPosts";
import { AboutSection } from "@/components/AboutSection";
import { Newsletter } from "@/components/Newsletter";
import { BlogFooter } from "@/components/BlogFooter";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <BlogHeader />
      <main>
        <HeroSection />
        <FeaturedPosts />
        <AboutSection />
        <Newsletter />
      </main>
      <BlogFooter />
    </div>
  );
};

export default Index;
