import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define our categories with proper slugs
export const categories = [
  { name: "All", slug: "all" },
  { name: "Tech", slug: "tech", subcategories: ["Cloud Security", "DevSecOps"] },
  { name: "Career", slug: "career", subcategories: ["Leadership"] },
  { name: "Lifestyle", slug: "lifestyle", subcategories: ["Personal Growth", "Mindfulness", "Fitness"] },
  { name: "Travel", slug: "travel" }
];

// Map to convert category display names to slugs
export const categoryToSlug = (category: string): string => {
  return category.toLowerCase().replace(/\s+/g, '-');
};

// This is our full post data that would typically come from an API or CMS
export const allPosts = [
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
  },
  {
    id: 9,
    title: "Getting Things Fixed: Security Wins and Fails from the Trenches",
    excerpt: "Scott Piper's masterclass keynote on the most challenging aspect of security work: actually getting people to fix the problems you find.",
    category: "Cloud Security",
    date: "Jan 15, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    featured: true,
    slug: "getting-things-fixed-security-wins-fails"
  },
  {
    id: 8,
    title: "The Pavel Method: Kettlebell Training for Strength and Resilience",
    excerpt: "How kettlebell training based on Pavel Tsatsouline's principles transformed my fitness approach and overall strength.",
    category: "Fitness",
    date: "Jun 10, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&h=600&fit=crop",
    featured: true,
    slug: "pavel-kettlebell-method"
  }
];

// Function to get posts by main category
export const getPostsByMainCategory = (mainCategory: string) => {
  if (mainCategory === "all") return allPosts;
  
  const category = categories.find(cat => cat.slug === mainCategory);
  if (!category) return [];
  
  return allPosts.filter(post => {
    if (category.subcategories) {
      return category.subcategories.includes(post.category);
    }
    return post.category.toLowerCase() === mainCategory;
  });
};

interface CategoryNavigationProps {
  activeCategory?: string;
}

export const CategoryNavigation = ({ activeCategory = "all" }: CategoryNavigationProps) => {
  return (
    <div className="mb-8">
      <Tabs defaultValue={activeCategory} className="w-full">
        <TabsList className="flex justify-center mb-6 bg-gray-100 p-1 rounded-lg">
          {categories.map((category) => (
            <TabsTrigger 
              key={category.slug} 
              value={category.slug}
              className="data-[state=active]:bg-white data-[state=active]:text-rose-600"
              asChild
            >
              <Link to={category.slug === "all" ? "/" : `/category/${category.slug}`}>
                {category.name}
              </Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};
