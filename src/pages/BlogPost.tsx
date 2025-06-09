import { useParams, Link } from "react-router-dom";

const blogPosts = {
  "aws-security-architecture": {
    title: "Architecting Security in the Cloud: Lessons from AWS",
    date: "2025-06-09",
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
  }
};

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <Link to="/" className="text-blue-600 hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="text-blue-600 hover:underline mb-8 block">
            ← Back to Home
          </Link>
          
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-600 mb-8">{post.date}</p>
            
            <div className="prose prose-lg max-w-none">
              {post.content}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};