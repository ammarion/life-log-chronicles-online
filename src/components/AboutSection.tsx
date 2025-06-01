
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Camera, Book } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-rose-50" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
                Hello, I'm Sarah
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-inter leading-relaxed">
                Welcome to my little corner of the internet! I'm a storyteller, dreamer, and believer in the magic of everyday moments. 
                Through this blog, I share the beautiful, messy, and authentic parts of my journey.
              </p>
              <p className="text-lg text-gray-600 mb-8 font-inter leading-relaxed">
                When I'm not writing, you'll find me exploring new places, trying out recipes that rarely turn out as expected, 
                or curled up with a good book and a cup of coffee that's probably gone cold.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-4">
                <Card className="text-center p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <Heart className="w-8 h-8 text-rose-500 mx-auto mb-2" />
                    <h3 className="font-playfair font-semibold text-gray-900">Passionate</h3>
                    <p className="text-sm text-gray-600 font-inter">About authentic storytelling</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <Camera className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <h3 className="font-playfair font-semibold text-gray-900">Creative</h3>
                    <p className="text-sm text-gray-600 font-inter">Capturing life's moments</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <Book className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                    <h3 className="font-playfair font-semibold text-gray-900">Curious</h3>
                    <p className="text-sm text-gray-600 font-inter">Always learning and growing</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-orange-400 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=800&fit=crop&crop=face" 
                  alt="Sarah's portrait"
                  className="relative w-full rounded-2xl shadow-2xl object-cover aspect-[3/4]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
