
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
                Hello, I'm Ammar
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-inter leading-relaxed">
                Welcome to my digital space! I'm a security engineer, leader, and lifelong learner passionate about building secure, 
                scalable systems. Currently managing Product Security at Adobe, I share insights from the intersection of technology, 
                security, and human experience.
              </p>
              <p className="text-lg text-gray-600 mb-8 font-inter leading-relaxed">
                When I'm not architecting security solutions or leading teams, you'll find me exploring cloud technologies, 
                contributing to the security community, or diving deep into the latest DevSecOps practices. I believe in learning 
                in public and sharing knowledge that helps others build better, more secure systems.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-4">
                <Card className="text-center p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <Heart className="w-8 h-8 text-rose-500 mx-auto mb-2" />
                    <h3 className="font-playfair font-semibold text-gray-900">Security-First</h3>
                    <p className="text-sm text-gray-600 font-inter">Building secure systems</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <Camera className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <h3 className="font-playfair font-semibold text-gray-900">Leader</h3>
                    <p className="text-sm text-gray-600 font-inter">Empowering security teams</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <Book className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                    <h3 className="font-playfair font-semibold text-gray-900">Innovator</h3>
                    <p className="text-sm text-gray-600 font-inter">Cloud & DevSecOps expert</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-orange-400 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face" 
                  alt="Ammar's portrait"
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
