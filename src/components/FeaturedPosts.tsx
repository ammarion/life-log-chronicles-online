
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { allPosts } from "@/components/CategoryNavigation";

export const FeaturedPosts = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {allPosts.map((post, index) => (
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
  );
};
