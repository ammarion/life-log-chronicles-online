
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive updates about new posts and stories.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-rose-500 to-orange-500">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm shadow-2xl animate-fade-in">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Stay Connected
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 font-inter leading-relaxed">
              Join our community of dreamers and storytellers. Get the latest posts, behind-the-scenes content, 
              and exclusive insights delivered straight to your inbox.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 font-inter"
                required
              />
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-inter"
              >
                Subscribe
              </Button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4 font-inter">
              No spam, ever. Unsubscribe anytime with one click.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
