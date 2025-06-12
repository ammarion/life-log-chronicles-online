import { useParams, Link } from "react-router-dom";
import { BlogHeader } from "@/components/BlogHeader";
import { BlogFooter } from "@/components/BlogFooter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { useEffect } from "react";
import { CategoryNavigation, allPosts, categoryToSlug } from "@/components/CategoryNavigation";

// Map category slugs to display names
const categoryMap: Record<string, string> = {
  "tech": "Tech",
  "cloud-security": "Cloud Security",
  "devsecops": "DevSecOps",
  "career": "Career",
  "leadership": "Leadership",
  "lifestyle": "Lifestyle",
  "personal-growth": "Personal Growth",
  "mindfulness": "Mindfulness",
  "fitness": "Fitness",
  "travel": "Travel"
};

export const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryName = category ? categoryMap[category] : "All Posts";
  
  // Filter posts by category
  const filteredPosts = allPosts.filter(post => {
    if (!category) return true;
    
    // Check if this is a main category
    if (category === "tech") {
      return post.category === "Cloud Security" || post.category === "DevSecOps";
    }
    
    if (category === "career") {
      return post.category === "Leadership";
    }
    
    if (category === "lifestyle") {
      return ["Personal Growth", "Mindfulness", "Fitness"].includes(post.category);
    }
    
    // Otherwise check if the category matches directly
    return categoryToSlug(post.category) === category;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div className="min-h-screen font-inter">
      <BlogHeader />
      <main>
        <section className="py-16 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4 text-center">
              {categoryName}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
              {`Explore all articles related to ${categoryName}`}
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <CategoryNavigation activeCategory={category} />
            
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <Link key={post.id} to={`/post/${post.slug}`}>
                    <Card 
                      className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="bg-gradient-to-r from-rose-100 to-orange-100 text-rose-700 font-inter">
                            {post.category}
                          </Badge>
                          {post.featured && (
                            <Badge className="bg-gradient-to-r from-rose-500 to-orange-500 text-white font-inter">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-playfair font-semibold text-gray-900 group-hover:text-rose-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4 font-inter leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 font-inter">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold mb-4">No posts found</h3>
                <p className="text-gray-600 mb-8">There are no posts in this category yet.</p>
                <Link 
                  to="/" 
                  className="inline-block px-6 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-md hover:from-rose-600 hover:to-orange-600 transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <BlogFooter />
    </div>
  );
};

export default CategoryPage;
