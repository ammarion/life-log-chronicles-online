
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const featuredPosts = [
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
  }
];

export const FeaturedPosts = () => {
  return (
    <section className="py-20 bg-white" id="posts">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Latest Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-inter">
            Discover my recent thoughts, experiences, and insights from this beautiful journey called life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <Link key={post.id} to={`/post/${post.slug}`}>
              <Card 
                className={`group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in ${
                  post.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
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
      </div>
    </section>
  );
};
