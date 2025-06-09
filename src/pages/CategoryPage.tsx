import { useParams, Link } from "react-router-dom";
import { BlogHeader } from "@/components/BlogHeader";
import { BlogFooter } from "@/components/BlogFooter";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { useEffect } from "react";

// This would typically come from an API or CMS
const allPosts = [
  {
    id: 1,
    title: "Architecting Security in the Cloud: Lessons from AWS",
    excerpt: "How I've learned to build security into cloud infrastructure from the ground up, sharing insights from managing security at scale across hundreds of AWS accounts.",
    category: "Cloud Security",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    featured: true,
    slug: "aws-security-architecture"
  },
  {
    id: 2,
    title: "From Engineer to Manager: Leading Security Teams",
    excerpt: "The journey from hands-on security engineering to leading product security teams at Adobe. What I learned about balancing technical depth with people leadership.",
    category: "Leadership",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    slug: "engineering-to-management"
  },
  {
    id: 3,
    title: "Building a WAF Program: Defense in Depth",
    excerpt: "How we implemented a comprehensive Web Application Firewall strategy across Adobe's infrastructure, lessons learned and challenges overcome.",
    category: "DevSecOps",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    slug: "waf-program-implementation"
  },
  {
    id: 4,
    title: "Finding Balance: Tech Career and Personal Growth",
    excerpt: "Reflections on maintaining work-life balance in the demanding world of technology and security.",
    category: "Personal Growth",
    date: "Dec 5, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
    slug: "tech-career-balance"
  },
  {
    id: 5,
    title: "Mindfulness Practices for the Busy Engineer",
    excerpt: "How incorporating mindfulness into your daily routine can improve focus, creativity, and overall well-being.",
    category: "Mindfulness",
    date: "Nov 28, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
    slug: "mindfulness-for-engineers"
  },
  {
    id: 6,
    title: "Travel Diaries: Working Remotely from Southeast Asia",
    excerpt: "My experience working as a security engineer while exploring Thailand, Vietnam, and Indonesia.",
    category: "Travel",
    date: "Nov 20, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&h=600&fit=crop",
    slug: "remote-work-southeast-asia"
  },
  {
    id: 7,
    title: "Digital Minimalism: Simplifying Your Tech Life",
    excerpt: "How reducing digital clutter and being intentional about technology use has improved my productivity and mental clarity.",
    category: "Lifestyle",
    date: "Nov 15, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop",
    slug: "digital-minimalism"
  }
];

// Map category slugs to display names
const categoryMap: Record<string, string> = {
  "cloud-security": "Cloud Security",
  "leadership": "Leadership",
  "devsecops": "DevSecOps",
  "personal-growth": "Personal Growth",
  "mindfulness": "Mindfulness",
  "travel": "Travel",
  "lifestyle": "Lifestyle"
};

export const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryName = category ? categoryMap[category] : "";
  
  // Filter posts by category
  const filteredPosts = allPosts.filter(post => {
    if (!category) return true;
    return post.category.toLowerCase().replace(/\s+/g, '-') === category;
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
              {categoryName || "All Posts"}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center">
              {categoryName 
                ? `Explore all articles related to ${categoryName}`
                : "Browse all articles across different categories"}
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
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
