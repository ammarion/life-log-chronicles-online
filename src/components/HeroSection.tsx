
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-gray-900 mb-6 animate-fade-in">
            Welcome to My
            <span className="block bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
              Life Chronicles
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-inter leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            Join me on this beautiful journey as I share stories, insights, and moments that shape my world. 
            From daily adventures to life lessons, this is where authenticity meets inspiration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-inter">
              Start Reading
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="font-inter">
              About Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
