import { useParams, Link } from "react-router-dom";
import { BlogHeader } from "@/components/BlogHeader";
import { BlogFooter } from "@/components/BlogFooter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { useEffect } from "react";

// This is our full blog posts data
const blogPosts = {
  "aws-security-architecture": {
    title: "Architecting Security in the Cloud: Lessons from AWS",
    date: "2025-06-09",
    readTime: "8 min read",
    category: "Cloud Security",
    content: (
      <>
        <p className="text-lg mb-6">
          After managing security across hundreds of AWS accounts at Adobe, I've learned that cloud security isn't just about tools—it's about building security into the fabric of your infrastructure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Foundation: Defense in Depth</h2>
        <p className="mb-4">
          Security architecture in the cloud starts with layered defenses:
        </p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Account Isolation</strong>: Separate environments with distinct AWS accounts</li>
          <li><strong>Network Segmentation</strong>: VPCs, subnets, and security groups</li>
          <li><strong>Identity Controls</strong>: IAM policies with least privilege</li>
          <li><strong>Data Protection</strong>: Encryption at rest and in transit</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Lessons Learned</h2>
        
        <h3 className="text-xl font-medium mt-6 mb-3">1. Automate Everything</h3>
        <p className="mb-4">
          Manual security processes don't scale. Infrastructure as Code (IaC) with security guardrails built-in is essential.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">2. Monitor Continuously</h3>
        <p className="mb-4">
          CloudTrail, GuardDuty, and Security Hub provide the visibility needed to detect and respond to threats.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">3. Shift Left</h3>
        <p className="mb-4">
          Security decisions made during architecture design are 10x more effective than retrofitting later.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Practical Implementation</h2>
        <p className="mb-4">
          At Adobe, we implemented a centralized security model using AWS Organizations and Control Tower, with automated compliance checking through Config Rules.
        </p>
        <p className="mb-4">
          The result? Consistent security posture across all environments and faster deployment of secure infrastructure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
        <p className="mb-4">
          Cloud security architecture is about enabling business velocity while maintaining strong security posture. The key is building security into your processes, not bolting it on afterwards.
        </p>
      </>
    )
  },
  "engineering-to-management": {
    title: "From Engineer to Manager: Leading Security Teams",
    date: "2025-06-08",
    readTime: "6 min read",
    category: "Leadership",
    content: (
      <>
        <p className="text-lg mb-6">
          The transition from hands-on security engineering to leading teams is one of the most challenging career moves in tech. Here's what I learned during my journey at Adobe.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Mindset Shift</h2>
        <p className="mb-4">
          As an engineer, success is measured by code quality, system reliability, and technical depth. As a manager, success is measured by team productivity, career growth, and strategic impact.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">From Doing to Enabling</h3>
        <p className="mb-4">The hardest part was letting go of the keyboard. Your job becomes:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Removing blockers for your team</li>
          <li>Providing technical direction without micromanaging</li>
          <li>Translating business needs into technical requirements</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Leadership Principles</h2>

        <h3 className="text-xl font-medium mt-6 mb-3">1. Technical Credibility Matters</h3>
        <p className="mb-4">
          In security, your team needs to trust your technical judgment. Stay close enough to the technology to provide meaningful guidance.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">2. Invest in Your People</h3>
        <p className="mb-4">Your team's growth is your growth. Spend time on:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Career development conversations</li>
          <li>Technical mentoring</li>
          <li>Stretch assignments</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-3">3. Bridge Technical and Business</h3>
        <p className="mb-4">
          Security leaders must translate risk into business language and business requirements into technical solutions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Common Pitfalls</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Staying too technical</strong>: Getting pulled back into implementation</li>
          <li><strong>Over-delegating</strong>: Losing touch with the technical reality</li>
          <li><strong>Analysis paralysis</strong>: Overthinking decisions that should be made quickly</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Reward</h2>
        <p className="mb-4">
          Leading a high-performing security team that ships reliable, secure systems while growing individually is incredibly rewarding. The impact you can have through others far exceeds what you can achieve alone.
        </p>
      </>
    )
  },
  "waf-program-implementation": {
    title: "Building a WAF Program: Defense in Depth",
    date: "2025-06-07",
    readTime: "7 min read",
    category: "DevSecOps",
    content: (
      <>
        <p className="text-lg mb-6">
          Implementing a Web Application Firewall (WAF) program across a large organization like Adobe requires more than just deploying technology—it requires a comprehensive strategy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Challenge</h2>
        <p className="mb-4">
          Adobe's infrastructure spans multiple clouds, hundreds of applications, and diverse technology stacks. Our challenge was implementing consistent WAF protection without disrupting development velocity.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>

        <h3 className="text-xl font-medium mt-6 mb-3">1. Centralized Management</h3>
        <p className="mb-4">We implemented AWS WAF with centralized rule management through AWS Firewall Manager, allowing us to:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Deploy consistent policies across all accounts</li>
          <li>Manage exceptions centrally</li>
          <li>Monitor effectiveness at scale</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-3">2. Application-Aware Rules</h3>
        <p className="mb-4">Generic WAF rules don't work for all applications. We developed:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Application-specific rule sets</li>
          <li>Machine learning-based anomaly detection</li>
          <li>Custom rules for Adobe's unique traffic patterns</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-3">3. DevSecOps Integration</h3>
        <p className="mb-4">WAF deployment became part of our infrastructure pipeline:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Terraform modules for consistent deployment</li>
          <li>Automated testing of WAF rules</li>
          <li>CI/CD integration for rule updates</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Key Metrics</h2>
        <p className="mb-4">After 18 months of implementation:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>99.2%</strong> uptime across all protected applications</li>
          <li><strong>40%</strong> reduction in application-layer attacks reaching origin servers</li>
          <li><strong>Zero</strong> false positive incidents affecting customer traffic</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Lessons Learned</h2>
        <ol className="list-decimal ml-6 mb-6 space-y-2">
          <li><strong>Start Simple</strong>: Begin with basic rules and evolve based on traffic patterns</li>
          <li><strong>Monitor Everything</strong>: WAF logs are goldmines for understanding attack patterns</li>
          <li><strong>Team Training</strong>: Ensure operations teams understand WAF behavior and troubleshooting</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
        <p className="mb-4">
          A successful WAF program is about building security into your application delivery pipeline, not just blocking bad traffic. When done right, it enhances both security and reliability.
        </p>
      </>
    )
  },
  "pavel-kettlebell-method": {
    title: "The Pavel Method: Kettlebell Training for Strength and Resilience",
    date: "2025-06-10",
    readTime: "7 min read",
    category: "Fitness",
    content: (
      <>
        <p className="text-lg mb-6">
          My journey with kettlebells began five years ago when I discovered Pavel Tsatsouline's work. His no-nonsense approach to strength training revolutionized not just my physical capabilities, but my entire approach to fitness and resilience.
        </p>

        <div className="my-8">
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&h=600&fit=crop" 
            alt="Kettlebell training" 
            className="rounded-lg w-full h-auto shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">Kettlebell training combines strength, power, and endurance in one compact tool</p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Who is Pavel Tsatsouline?</h2>
        <p className="mb-4">
          For those unfamiliar, Pavel Tsatsouline is often credited with introducing kettlebell training to the West. A former Soviet Special Forces physical training instructor, Pavel's methods focus on:
        </p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Strength as a skill, not just a physical attribute</li>
          <li>Tension control and "greasing the groove"</li>
          <li>Minimalist but highly effective training protocols</li>
          <li>The integration of breathing techniques with movement</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Fundamental Principles</h2>

        <h3 className="text-xl font-medium mt-6 mb-3">1. Tension and Relaxation</h3>
        <p className="mb-4">
          Pavel's core teaching is about generating maximum tension when needed, and relaxing completely when not. This principle applies not just to kettlebell training but to life itself.
        </p>

        <div className="my-8">
          <img 
            src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&h=600&fit=crop" 
            alt="Kettlebell swing" 
            className="rounded-lg w-full h-auto shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">The kettlebell swing: a fundamental movement that builds explosive power</p>
        </div>

        <h3 className="text-xl font-medium mt-6 mb-3">2. The Power of the Swing</h3>
        <p className="mb-4">
          The kettlebell swing is the cornerstone of Pavel's system. This ballistic movement:
        </p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Develops explosive hip power</li>
          <li>Strengthens the posterior chain (back, glutes, hamstrings)</li>
          <li>Builds cardiovascular endurance without traditional "cardio"</li>
          <li>Teaches proper hip hinging patterns essential for daily life</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-3">3. Simple & Sinister</h3>
        <p className="mb-4">
          Pavel's "Simple & Sinister" program exemplifies his minimalist approach: just two exercises (the swing and the Turkish get-up) performed regularly can transform your fitness. The beauty lies in its simplicity and focus on quality over quantity.
        </p>

        <div className="my-8">
          <img 
            src="https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=800&h=600&fit=crop" 
            alt="Kettlebell goblet squat" 
            className="rounded-lg w-full h-auto shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">The goblet squat: Pavel's solution to teaching perfect squat form</p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">My Personal Experience</h2>
        <p className="mb-4">
          Implementing Pavel's methods transformed my approach to fitness in several ways:
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">Strength Without Bulk</h3>
        <p className="mb-4">
          Following Pavel's protocols, I developed what he calls "wiry strength" – significant power without excessive muscle mass. This functional strength translates directly to improved performance in daily activities.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">Resilience Through Practice</h3>
        <p className="mb-4">
          "Greasing the groove" – practicing strength skills frequently but never to failure – built not just physical but mental resilience. This approach teaches patience and consistency over intensity.
        </p>

        <div className="my-8">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop" 
            alt="Kettlebell strength training" 
            className="rounded-lg w-full h-auto shadow-lg"
          />
          <p className="text-sm text-gray-500 mt-2 text-center">Kettlebell training builds "wiry strength" - powerful but functional</p>
        </div>

        <h3 className="text-xl font-medium mt-6 mb-3">Efficiency in Training</h3>
        <p className="mb-4">
          Perhaps the greatest benefit has been time efficiency. A 20-minute kettlebell session following Pavel's principles delivers more real-world strength and conditioning than hours of conventional gym work.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Practical Kettlebell Training Tips</h2>
        
        <h3 className="text-xl font-medium mt-6 mb-3">1. Master the Hardstyle Swing</h3>
        <p className="mb-4">
          The hardstyle swing is the foundation of Pavel's kettlebell system:
        </p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Setup</strong>: Stand with feet shoulder-width apart, kettlebell about a foot in front</li>
          <li><strong>Hinge</strong>: Push hips back while keeping spine neutral</li>
          <li><strong>Grip</strong>: Hook grip the handle, don't squeeze initially</li>
          <li><strong>Hike</strong>: Pull the kettlebell back like hiking a football</li>
          <li><strong>Snap</strong>: Explosively drive hips forward, creating a "float" at the top</li>
          <li><strong>Tension</strong>: At the top, squeeze glutes, quads, and abs while keeping shoulders packed</li>
        </ul>
        
        <h3 className="text-xl font-medium mt-6 mb-3">2. The Turkish Get-Up Progression</h3>
        <p className="mb-4">
          This complex movement builds total-body coordination and stability:
        </p>
        <ol className="list-decimal ml-6 mb-6 space-y-2">
          <li>Start by practicing with no weight, then a shoe balanced on your fist</li>
          <li>Progress to a light kettlebell (8-12kg for men, 4-8kg for women)</li>
          <li>Master each position: roll, elbow, hand, sweep, knee, lunge, stand</li>
          <li>Focus on keeping your eye on the kettlebell throughout the movement</li>
          <li>Practice both sides equally for balanced development</li>
        </ol>

        <h3 className="text-xl font-medium mt-6 mb-3">3. Breathing Techniques for Power</h3>
        <p className="mb-4">
          Pavel's breathing methods enhance strength and stability:
        </p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Power Breathing</strong>: Sharp nasal inhale, followed by "pressurization" through the Valsalva maneuver</li>
          <li><strong>Anatomical Breathing</strong>: For recovery between sets, deep belly breathing</li>
          <li><strong>Match breathing to movement</strong>: Exhale during effort (swing up), inhale during return (swing back)</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-3">4. Programming for Results</h3>
        <p className="mb-4">
          Pavel's minimalist programming approaches:
        </p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Simple & Sinister</strong>: 100 one-handed swings (10 sets of 10) and 5 get-ups per side, performed 5-6 days per week</li>
          <li><strong>The Rite of Passage</strong>: Clean and press ladders combined with pull-ups and swings</li>
          <li><strong>Easy Strength</strong>: Daily practice with submaximal weights (never going to failure)</li>
          <li><strong>Greasing the Groove</strong>: Frequent practice throughout the day at 40-60% of max effort</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started with Kettlebells</h2>
        <p className="mb-4">
          If you're interested in exploring kettlebell training the Pavel way:
        </p>
        <ol className="list-decimal ml-6 mb-6 space-y-2">
          <li><strong>Start with technique</strong>: Form is paramount; begin with a lighter kettlebell than you think you need (16kg for men, 8kg for women is often recommended)</li>
          <li><strong>Master the fundamentals</strong>: The swing, get-up, goblet squat, and press form the foundation</li>
          <li><strong>Focus on quality</strong>: "Strength is a skill" means practicing perfect reps, not maximizing fatigue</li>
          <li><strong>Be consistent</strong>: Regular practice trumps occasional intensity</li>
          <li><strong>Respect recovery</strong>: Pavel emphasizes that strength is built during recovery, not during training</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion: Strength as a Practice</h2>
        <p className="mb-4">
          Pavel's approach to kettlebell training isn't just about physical development—it's a philosophy of approaching strength as a skill to be practiced and refined. The kettlebell becomes not just a tool but a teacher of movement, tension control, and resilience.
        </p>
        <p className="mb-4">
          In our modern world of fitness fads and complicated training systems, there's profound wisdom in Pavel's minimalist approach: "Simple does not mean easy." The kettlebell, when used with proper technique and consistent practice, offers a path to strength that carries over into every aspect of life.
        </p>
      </>
    )
  },
  "tech-career-balance": {
    title: "Finding Balance: Tech Career and Personal Growth",
    date: "2024-12-05",
    readTime: "5 min read",
    category: "Personal Growth",
    content: (
      <>
        <p className="text-lg mb-6">
          Working in technology can be all-consuming. Here's how I've learned to maintain balance while still advancing my career.
        </p>
        <p className="mb-4">
          More content coming soon...
        </p>
      </>
    )
  },
  "mindfulness-for-engineers": {
    title: "Mindfulness Practices for the Busy Engineer",
    date: "2024-11-28",
    readTime: "4 min read",
    category: "Mindfulness",
    content: (
      <>
        <p className="text-lg mb-6">
          Engineering work requires deep focus and problem-solving. Mindfulness practices can enhance these abilities while preventing burnout.
        </p>
        <p className="mb-4">
          More content coming soon...
        </p>
      </>
    )
  },
  "remote-work-southeast-asia": {
    title: "Travel Diaries: Working Remotely from Southeast Asia",
    date: "2024-11-20",
    readTime: "9 min read",
    category: "Travel",
    content: (
      <>
        <p className="text-lg mb-6">
          My experience working as a security engineer while exploring Thailand, Vietnam, and Indonesia.
        </p>
        <p className="mb-4">
          More content coming soon...
        </p>
      </>
    )
  },
  "digital-minimalism": {
    title: "Digital Minimalism: Simplifying Your Tech Life",
    date: "2024-11-15",
    readTime: "6 min read",
    category: "Lifestyle",
    content: (
      <>
        <p className="text-lg mb-6">
          How reducing digital clutter and being intentional about technology use has improved my productivity and mental clarity.
        </p>
        <p className="mb-4">
          More content coming soon...
        </p>
      </>
    )
  }
};

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  console.log("Current slug:", slug);
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;
  console.log("Post found:", post ? "Yes" : "No");
  console.log("Available blog posts:", Object.keys(blogPosts));

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [slug]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <BlogHeader />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been moved.</p>
            <Link to="/">
              <Button variant="default" className="bg-gradient-to-r from-rose-500 to-orange-500">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <BlogFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <BlogHeader />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center text-rose-600 hover:text-rose-800 transition-colors mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <article>
            <header className="mb-10">
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white bg-gradient-to-r from-rose-500 to-orange-500 rounded-full">
                {post.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">{post.title}</h1>
              
              <div className="flex items-center text-gray-600 text-sm mb-6">
                <div className="flex items-center mr-6">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="flex items-center text-gray-600 hover:text-rose-600 transition-colors"
                onClick={handleShare}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
            </header>
            
            <div className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:font-bold prose-a:text-rose-600">
              {post.content}
            </div>
          </article>
          
          <div className="border-t border-gray-200 mt-16 pt-8">
            <h3 className="text-2xl font-bold mb-6 font-playfair">Continue Reading</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(blogPosts)
                .filter(([key]) => key !== slug)
                .slice(0, 2)
                .map(([key, relatedPost]) => (
                  <Link 
                    key={key} 
                    to={`/post/${key}`}
                    className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <h4 className="font-bold text-lg mb-2 line-clamp-2">{relatedPost.title}</h4>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{relatedPost.date}</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <BlogFooter />
    </div>
  );
};
