import { useParams, Link } from "react-router-dom";

const blogPosts = {
  "aws-security-architecture": {
    title: "Architecting Security in the Cloud: Lessons from AWS",
    date: "2025-06-09",
    content: `
# Architecting Security in the Cloud: Lessons from AWS

After managing security across hundreds of AWS accounts at Adobe, I've learned that cloud security isn't just about tools—it's about building security into the fabric of your infrastructure.

## The Foundation: Defense in Depth

Security architecture in the cloud starts with layered defenses:

1. **Account Isolation**: Separate environments with distinct AWS accounts
2. **Network Segmentation**: VPCs, subnets, and security groups
3. **Identity Controls**: IAM policies with least privilege
4. **Data Protection**: Encryption at rest and in transit

## Key Lessons Learned

### 1. Automate Everything
Manual security processes don't scale. Infrastructure as Code (IaC) with security guardrails built-in is essential.

### 2. Monitor Continuously
CloudTrail, GuardDuty, and Security Hub provide the visibility needed to detect and respond to threats.

### 3. Shift Left
Security decisions made during architecture design are 10x more effective than retrofitting later.

## Practical Implementation

At Adobe, we implemented a centralized security model using AWS Organizations and Control Tower, with automated compliance checking through Config Rules.

The result? Consistent security posture across all environments and faster deployment of secure infrastructure.

## Conclusion

Cloud security architecture is about enabling business velocity while maintaining strong security posture. The key is building security into your processes, not bolting it on afterwards.
    `
  },
  "engineering-to-management": {
    title: "From Engineer to Manager: Leading Security Teams",
    date: "2025-06-08",
    content: `
# From Engineer to Manager: Leading Security Teams

The transition from hands-on security engineering to leading teams is one of the most challenging career moves in tech. Here's what I learned during my journey at Adobe.

## The Mindset Shift

As an engineer, success is measured by code quality, system reliability, and technical depth. As a manager, success is measured by team productivity, career growth, and strategic impact.

### From Doing to Enabling

The hardest part was letting go of the keyboard. Your job becomes:
- Removing blockers for your team
- Providing technical direction without micromanaging
- Translating business needs into technical requirements

## Key Leadership Principles

### 1. Technical Credibility Matters
In security, your team needs to trust your technical judgment. Stay close enough to the technology to provide meaningful guidance.

### 2. Invest in Your People
Your team's growth is your growth. Spend time on:
- Career development conversations
- Technical mentoring
- Stretch assignments

### 3. Bridge Technical and Business
Security leaders must translate risk into business language and business requirements into technical solutions.

## Common Pitfalls

- **Staying too technical**: Getting pulled back into implementation
- **Over-delegating**: Losing touch with the technical reality
- **Analysis paralysis**: Overthinking decisions that should be made quickly

## The Reward

Leading a high-performing security team that ships reliable, secure systems while growing individually is incredibly rewarding. The impact you can have through others far exceeds what you can achieve alone.
    `
  },
  "waf-program-implementation": {
    title: "Building a WAF Program: Defense in Depth",
    date: "2025-06-07",
    content: `
# Building a WAF Program: Defense in Depth

Implementing a Web Application Firewall (WAF) program across a large organization like Adobe requires more than just deploying technology—it requires a comprehensive strategy.

## The Challenge

Adobe's infrastructure spans multiple clouds, hundreds of applications, and diverse technology stacks. Our challenge was implementing consistent WAF protection without disrupting development velocity.

## Our Approach

### 1. Centralized Management
We implemented AWS WAF with centralized rule management through AWS Firewall Manager, allowing us to:
- Deploy consistent policies across all accounts
- Manage exceptions centrally
- Monitor effectiveness at scale

### 2. Application-Aware Rules
Generic WAF rules don't work for all applications. We developed:
- Application-specific rule sets
- Machine learning-based anomaly detection
- Custom rules for Adobe's unique traffic patterns

### 3. DevSecOps Integration
WAF deployment became part of our infrastructure pipeline:
- Terraform modules for consistent deployment
- Automated testing of WAF rules
- CI/CD integration for rule updates

## Key Metrics

After 18 months of implementation:
- **99.2%** uptime across all protected applications
- **40%** reduction in application-layer attacks reaching origin servers
- **Zero** false positive incidents affecting customer traffic

## Lessons Learned

1. **Start Simple**: Begin with basic rules and evolve based on traffic patterns
2. **Monitor Everything**: WAF logs are goldmines for understanding attack patterns
3. **Team Training**: Ensure operations teams understand WAF behavior and troubleshooting

## Conclusion

A successful WAF program is about building security into your application delivery pipeline, not just blocking bad traffic. When done right, it enhances both security and reliability.
    `
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
            
            <div className="whitespace-pre-line leading-relaxed">
              {post.content}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};