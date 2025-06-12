
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Camera, Book } from "lucide-react";
import profileImage from "@/assets/images/IMG_1822.jpg";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                About
              </h2>
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/3">
                  <img 
                    src={profileImage} 
                    alt="Ammar Alim" 
                    className="rounded-lg shadow-md w-full max-w-[250px] mx-auto"
                  />
                </div>
                <div className="md:w-2/3 prose prose-lg">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    I'm Ammar Alim, a security engineer and leader passionate about building secure, scalable systems. 
                    Currently leading DevSecOps at Adobe, I share insights from the intersection of technology, 
                    security, and engineering leadership.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    My experience spans cloud architecture, DevSecOps, and team leadership. I believe in learning 
                    in public and sharing knowledge that helps others build better, more secure systems.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    When I'm not architecting security solutions or leading teams, you'll find me exploring cloud technologies, 
                    contributing to the security community, or diving deep into the latest DevSecOps practices.
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
