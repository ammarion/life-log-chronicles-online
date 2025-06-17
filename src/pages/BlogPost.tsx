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
  "getting-things-fixed-security-wins-fails": {
    title: "The Art of Influence: Deeper Reflections on Scott Piper's Mastery of Getting Things Fixed",
    date: "2025-01-15",
    readTime: "18 min read",
    category: "Cloud Security",
    content: (
      <>
        <p className="text-lg mb-6 italic">
          "The art of getting things done through others is leadership. The art of getting others to want to do things is influence. The art of getting security fixes implemented sits at the intersection of both." 
        </p>

        <p className="text-lg mb-6">
          At BSidesSLC 2025, Scott Piper delivered a keynote that crystallized something many of us have been grappling with: the gap between finding security problems and actually getting them fixed. While his examples were compelling, what struck me wasn't the novelty of his techniques—many of these approaches have been floating around the security community for years—but rather his systematic articulation of why traditional security approaches often fail.
        </p>

        <p className="text-lg mb-6">
          As someone who has built my career around similar principles—focusing on systematic solutions over heroic fixes, building tools that enable others, and treating security as fundamentally a people problem—I found myself both validating my own approach and identifying areas where I could be more intentional about these practices.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-sm text-blue-800">
            <strong>Watch the full keynote:</strong> <a href="https://www.youtube.com/watch?v=SXiwyRY6ed4" target="_blank" rel="noopener noreferrer" className="underline">BSidesSLC 2025 - Getting Things Fixed by Scott Piper</a>
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Uncomfortable Truth About Security Work</h2>
        
        <p className="mb-4">
          There's a seductive comfort in finding vulnerabilities. The dopamine hit of discovering a misconfigured S3 bucket, the satisfaction of crafting the perfect SQL injection, the intellectual thrill of chaining exploits—these are the moments that drew many of us to security. But Piper's keynote forced us to confront an uncomfortable truth: discovery without remediation is merely academic masturbation.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
          <p className="text-sm text-amber-800">
            <strong>Personal Reflection:</strong> In my early career at a large tech company, I remember the frustration of identifying critical vulnerabilities only to watch them languish in JIRA tickets for months. It took me years to understand that my technical skills were only half the equation—the other half was learning to navigate human psychology, organizational dynamics, and the delicate art of influence.
          </p>
        </div>

        <p className="mb-4">
          What makes Piper's approach so compelling is his recognition that security work is fundamentally people work. Every vulnerability exists because a human made a decision—to take a shortcut, to prioritize speed over security, to defer to convenience. And every fix requires a human to make a different decision. Understanding this transforms how we approach our craft.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Mirror Before the Window: Self-Reflection as Strategic Advantage</h2>

        <p className="mb-4">
          Piper's emphasis on "ensuring your own house is in order" resonates deeply with ancient wisdom traditions. The Stoics taught that the only thing we can truly control is our own actions and responses. Buddhist philosophy speaks of the finger pointing at the moon—don't confuse the finger for the moon itself. In security terms: don't confuse your processes for the outcomes you seek.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">The Emoji-Driven Apocalypse: A Cautionary Tale</h3>

        <p className="mb-4">
          The story of the security team using Slack emojis to track critical vulnerabilities would be hilarious if it weren't so tragically common. I've witnessed variations of this anti-pattern across multiple organizations: Excel spreadsheets with color-coded cells, email threads that grow to novella length, whiteboard sessions that get photographed and forgotten.
        </p>

        <p className="mb-4">
          These approaches share a common flaw: they prioritize the appearance of process over the substance of outcomes. As Piper noted with characteristic wit, "You're looking at this critical alert trying to understand if party parrot is good or bad." The absurdity illuminates a deeper truth—when your process is unclear, every interaction becomes an exercise in interpretation rather than action.
        </p>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
          <p className="text-sm text-green-800">
            <strong>Practical Wisdom:</strong> The quality of your processes directly correlates to the speed of your outcomes. A well-designed ticketing system isn't bureaucratic overhead—it's a force multiplier that transforms individual efforts into organizational capability. Time invested in process design pays exponential dividends in execution velocity.
          </p>
        </div>

        <h3 className="text-xl font-medium mt-6 mb-3">The Ownership Paradox: From Blame to Accountability</h3>

        <p className="mb-4">
          Piper's evolution from manual ticket assignment to account vending represents a profound shift in thinking—from reactive blame assignment to proactive ownership design. This mirrors a broader principle in systems thinking: the structure of your system determines the behavior it produces.
        </p>

        <p className="mb-4">
          Consider the psychological dynamics at play in each approach:
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-3">
          <li><strong>Manual Relay</strong>: Creates learned helplessness and diffused responsibility. Each handoff introduces delay and reduces accountability.</li>
          <li><strong>Log Analysis</strong>: Frames security as archaeology rather than architecture. The question becomes "who touched this last?" rather than "who owns this outcome?"</li>
          <li><strong>Resource Tagging</strong>: Attempts to impose structure retroactively, often resulting in inconsistent taxonomy and tag drift over time.</li>
          <li><strong>Account Vending</strong>: Embeds ownership in the infrastructure itself, making responsibility clear and inescapable from day one.</li>
        </ul>

        <p className="mb-4">
          The genius of account vending lies in its recognition that clarity of ownership is more valuable than perfection of assignment. When everyone knows who owns what, even imperfect assignments get resolved quickly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Strategic Thinking in a Tactical World</h2>

        <p className="mb-4">
          Perhaps the most profound insight from Piper's talk was his distinction between tactical and strategic responses to security findings. This reflects a deeper philosophical tension in security work: the balance between immediate action and systemic change.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">The SSRF Enlightenment</h3>

        <p className="mb-4">
          The SSRF example Piper shared—fix the vulnerability versus upgrade to IMDSv2—beautifully illustrates the difference between playing whack-a-mole and changing the game itself. But there's a deeper lesson here about how we frame problems and solutions.
        </p>

        <p className="mb-4">
          When we focus solely on the immediate vulnerability (the SSRF), we're operating in what psychologists call a "local focus" mindset. We see the specific problem in front of us and apply a specific solution. This approach is necessary but insufficient.
        </p>

        <p className="mb-4">
          When we step back and ask "what class of problems does this represent?" we shift into "global focus." Suddenly, the SSRF becomes a symptom of a broader architectural weakness—the lack of authenticated metadata access controls. The solution space expands from patching code to upgrading infrastructure.
        </p>

        <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
          <p className="text-sm text-purple-800">
            <strong>Leadership Lesson:</strong> The mark of senior security practitioners isn't their ability to find more vulnerabilities—it's their ability to see patterns across vulnerabilities and architect solutions that prevent entire classes of problems. This requires both technical depth and systems thinking.
          </p>
        </div>

        <h3 className="text-xl font-medium mt-6 mb-3">The 10,000 Key Dilemma: Scale as Teacher</h3>

        <p className="mb-4">
          Piper's story of discovering 10,000 IAM access keys offers a masterclass in approaching overwhelming problems. The math alone is sobering: 30 minutes per key × 10,000 keys = 5,000 hours = 2.5 years of full-time work. This is where many security teams would either give up or blindly march forward, hoping to chip away at the mountain.
        </p>

        <p className="mb-4">
          Instead, Piper demonstrated what mathematician George Pólya called "working backwards from the goal." Rather than starting with the first key and hoping for the best, he invested time in understanding the problem space:
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-3">
          <li><strong>Sample deeply before scaling</strong>: Work through 100+ examples to understand variation in the problem space</li>
          <li><strong>Document relentlessly</strong>: Capture not just what to do, but how to test, debug, and verify</li>
          <li><strong>Categorize ruthlessly</strong>: Group similar problems to enable targeted solutions</li>
          <li><strong>Prevent proliferation</strong>: Stop the bleeding while you're treating the wound</li>
          <li><strong>Address root causes</strong>: Fix the documentation and processes that created the problem</li>
        </ul>

        <p className="mb-4">
          This approach reflects a deeper understanding of how knowledge work scales. Individual effort has linear returns, but systematic thinking has exponential returns. The time invested in understanding, documenting, and systematizing pays dividends across every subsequent iteration.
        </p>

        <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 mb-6">
          <p className="text-sm text-indigo-800">
            <strong>Pattern Recognition:</strong> This systematic approach has been central to my own security practice for years. The biggest wins come not from heroic individual efforts, but from creating systems that make the right thing the easy thing. Every manual process that gets repeated more than ten times should be automated. Every explanation you give more than three times should be documented. Every mistake that happens more than once should be prevented by design.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Art of External Influence: David vs. Goliath in the Cloud Age</h2>

        <p className="mb-4">
          Piper's stories of influencing AWS from the outside are instructive, though it's worth noting that his success likely benefited from timing, his existing reputation, and AWS's particular organizational culture. Not every security researcher will have the same leverage or platform. Still, the underlying principles—building tools, coordinating multi-vector approaches, and making bold asks—are worth examining.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">Parliament: The Power of Constructive Contribution</h3>

        <p className="mb-4">
          When Piper discovered privilege escalation issues in AWS managed policies, he faced a choice that many security researchers encounter: report the problem and hope for the best, or invest additional effort to make fixing easier. His decision to build Parliament—a tool that automated detection of these issues—reveals deep understanding of how change happens in large organizations.
        </p>

        <p className="mb-4">
          The genius of this approach lies in its recognition of organizational psychology. AWS engineers weren't ignoring security because they didn't care—they were overwhelmed by the scale of the problem and lacked tooling to systematically address it. By providing Parliament, Piper didn't just identify the problem; he lowered the activation energy required to solve it.
        </p>

        <p className="mb-4">
          This principle extends far beyond security. In behavioral psychology, it's known as "making the desired behavior easier than the undesired behavior." In product design, it's called "removing friction from the user journey." In organizational change, it's about "making the right thing the easy thing."
        </p>

        <div className="bg-teal-50 border-l-4 border-teal-400 p-4 mb-6">
          <p className="text-sm text-teal-800">
            <strong>Influence Strategy:</strong> The most effective way to change someone's behavior isn't to convince them they're wrong—it's to make doing the right thing easier than doing the wrong thing. This is why successful security programs focus more on guardrails and automation than on policies and training.
          </p>
        </div>

        <h3 className="text-xl font-medium mt-6 mb-3">Multi-Vector Approach: Lessons from Military Strategy</h3>

        <p className="mb-4">
          Piper's handling of the GitHub Actions OIDC vulnerability demonstrates what military strategists call "multi-domain operations"—coordinating efforts across multiple fronts to achieve a unified objective. Rather than simply reporting the vulnerability and hoping AWS would fix it, he orchestrated a campaign that addressed the problem from multiple angles simultaneously.
        </p>

        <p className="mb-4">
          The brilliance of this approach lies in its understanding of how complex systems change. Large organizations have immune systems designed to resist change—for good reason. Single-point interventions, no matter how well-intentioned, often get absorbed and neutralized. But coordinated pressure from multiple directions is much harder to ignore.
        </p>

        <p className="mb-4">
          Consider how each intervention reinforced the others:
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-3">
          <li><strong>Tutorial Fix</strong>: Addressed the source of misinformation, preventing new instances</li>
          <li><strong>Customer Scanning</strong>: Created urgency by revealing the scope of existing vulnerabilities</li>
          <li><strong>UI Improvement</strong>: Made the secure configuration the default path of least resistance</li>
          <li><strong>Vendor Coordination</strong>: Ensured consistency across the ecosystem</li>
        </ul>

        <p className="mb-4">
          This isn't just good security practice—it's organizational systems thinking at its finest.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Courage of Unreasonable Requests</h2>

        <p className="mb-4">
          Perhaps the most profound moment in Piper's keynote was his reflection on AWS implementing a breaking change to completely prevent the vulnerable OIDC configuration. His surprise at this outcome revealed something important: we often limit ourselves by what we think is possible rather than what we think is right.
        </p>

        <p className="mb-4">
          "Don't be afraid to make those big asks," Piper advised. This seemingly simple statement carries deep wisdom about influence and leadership. Most of us self-censor our requests before we even make them, assuming we know what others will or won't do. But this assumption often reflects our own limitations rather than external constraints.
        </p>

        <div className="bg-rose-50 border-l-4 border-rose-400 p-4 mb-6">
          <p className="text-sm text-rose-800">
            <strong>Personal Insight:</strong> In my experience working with engineering teams, I've learned that they often have more appetite for bold solutions than security teams assume. When we frame requests in terms of engineering excellence rather than security compliance, we often find surprising alignment. The key is asking for what we actually want, not what we think we can get.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Shadow Side: When Good Intentions Go Wrong</h2>

        <p className="mb-4">
          Piper's honesty about his failures—the Senator incident and the "wall of shame"—adds crucial depth to his narrative. These weren't just tactical mistakes; they were examples of how good intentions can lead to unintended consequences when we lose sight of the human dimension of our work.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">The Senator Story: A Case Study in Escalation</h3>

        <p className="mb-4">
          The story of Piper's involvement with Senator Ron Wyden reads like a cautionary tale about the power of truth in complex political systems. When Piper provided evidence that AWS knew about the IMDS vulnerability, he thought he was correcting the record. Instead, he found himself unexpectedly central to a federal investigation.
        </p>

        <p className="mb-4">
          This incident illustrates what systems theorists call "emergent properties"—outcomes that arise from the interactions between system components rather than from the components themselves. Piper's individual actions were reasonable, but when combined with political dynamics and media attention, they created something larger and more unpredictable.
        </p>

        <p className="mb-4">
          The lesson here isn't to avoid speaking truth to power, but to understand that complex systems amplify both intended and unintended consequences. When operating at the intersection of technology and policy, we must consider not just what we're trying to achieve, but what else might happen as a result of our actions.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">The Wall of Shame: Public Pressure as Double-Edged Sword</h3>

        <p className="mb-4">
          Piper's creation of the IMDSv2 "wall of shame" represents a fascinating case study in the ethics of public pressure. On one hand, it was highly effective at driving change—vendors scrambled to get off the list once they found themselves publicly called out. On the other hand, it bypassed normal vulnerability disclosure practices and potentially damaged business relationships.
        </p>

        <p className="mb-4">
          What made the wall of shame ultimately successful wasn't just the naming and shaming—it was the constructive guidance provided alongside the criticism. Piper didn't just point out problems; he offered solutions. This transformed public pressure from mere punishment into collaborative problem-solving.
        </p>

        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
          <p className="text-sm text-orange-800">
            <strong>Ethical Reflection:</strong> The security community's relationship with public disclosure continues to evolve. While transparency can drive positive change, it can also cause unintended harm. The key is balancing the urgency of the security need against the potential for collateral damage, always defaulting toward solutions rather than just problems.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Deeper Patterns: What This Really Teaches Us</h2>

        <h3 className="text-xl font-medium mt-6 mb-3">1. Security as Applied Psychology</h3>

        <p className="mb-4">
          Every technique Piper described ultimately relies on understanding human psychology—both individual and organizational. Whether it's making fixes easier through better tooling, creating clarity through improved processes, or building momentum through strategic communication, success depends on understanding what motivates people to act.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">2. Systems Thinking Over Point Solutions</h3>

        <p className="mb-4">
          The most effective interventions Piper described operated at the system level rather than the incident level. Parliament didn't just fix specific policy issues—it created ongoing capability to detect and prevent similar issues. Account vending didn't just solve ownership problems—it made ownership problems impossible to create.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">3. Influence Through Service, Not Authority</h3>

        <p className="mb-4">
          Piper's successes came not from positional authority but from making himself useful to others' goals. By building tools, providing clear guidance, and reducing friction, he aligned his security objectives with others' operational needs. This is influence through service rather than force.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">4. Long-Term Thinking in Short-Term Environments</h3>

        <p className="mb-4">
          Perhaps most importantly, Piper demonstrated the power of playing a longer game than others around him. While others focused on immediate fixes, he invested in systematic solutions. While others accepted constraints as immutable, he worked to change the constraints themselves.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Practical Applications: How to Apply These Insights</h2>

        <h3 className="text-xl font-medium mt-6 mb-3">For Individual Contributors</h3>

        <ul className="list-disc ml-6 mb-6 space-y-3">
          <li><strong>Build tools, not just reports</strong>: Every finding should come with at least a script, ideally a tool others can use</li>
          <li><strong>Document everything</strong>: Your future self and your colleagues will thank you</li>
          <li><strong>Think in systems</strong>: Ask "what would prevent this entire class of problems?" not just "how do we fix this instance?"</li>
          <li><strong>Make allies, not adversaries</strong>: Frame security work as enabling business objectives, not preventing them</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-3">For Security Leaders</h3>

        <ul className="list-disc ml-6 mb-6 space-y-3">
          <li><strong>Invest in process design</strong>: Well-designed systems produce better outcomes than heroic individual efforts</li>
          <li><strong>Measure what matters</strong>: Track time-to-resolution, not just number of findings</li>
          <li><strong>Create feedback loops</strong>: Make it easy to identify and address root causes</li>
          <li><strong>Think strategically</strong>: Focus team energy on systemic changes rather than tactical fixes</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-3">For Organizations</h3>

        <ul className="list-disc ml-6 mb-6 space-y-3">
          <li><strong>Design for ownership</strong>: Make accountability clear and inescapable</li>
          <li><strong>Lower activation energy</strong>: Make secure behaviors easier than insecure ones</li>
          <li><strong>Embrace transparency</strong>: Share learnings and metrics across teams</li>
          <li><strong>Reward systemic thinking</strong>: Recognize people who prevent problems, not just those who find them</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Meta-Lesson: From Individual Heroics to Systematic Change</h2>

        <p className="mb-4">
          What's most valuable about Piper's examples isn't the specific tactics—many of which require significant privilege, platform, or luck to execute—but rather the underlying shift in mindset. The transition from individual contributor to systems thinker is something every security professional can pursue, regardless of their organizational position or external influence.
        </p>

        <p className="mb-4">
          This represents a maturation in how we approach security work. Instead of optimizing for personal recognition or heroic problem-solving, we can focus on creating conditions where good security outcomes emerge naturally. This isn't always as satisfying as the adrenaline rush of finding the next critical vulnerability, but it's often more impactful.
        </p>

        <p className="mb-4">
          The challenge, of course, is that systematic thinking requires patience and long-term investment in a field that often rewards immediate, visible results. Not every organization will support this approach, and not every security professional has the luxury of playing the long game.
        </p>

        <div className="bg-gray-100 border-l-4 border-gray-600 p-6 mt-8">
          <p className="text-base text-gray-700 mb-4">
            <strong>Final Reflection:</strong> Piper's keynote reflects broader trends in our field—the slow recognition that technical excellence alone isn't sufficient for security impact. While his specific examples may not be universally applicable, the underlying tension he identifies is real: we're often better at finding problems than solving them systematically.
          </p>
          <p className="text-base text-gray-700">
            The challenge isn't just adopting his techniques, but adapting the mindset to different contexts, constraints, and organizational realities. Not everyone can influence AWS, but everyone can think more systematically about the problems they encounter daily. That's perhaps the most practical takeaway from his work.
          </p>
        </div>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-8">
          <p className="text-sm text-gray-700">
            <strong>About Scott Piper:</strong> Scott has worked across various roles in security, from the NSA to San Francisco Bay Area tech companies, startups, and security vendors. He's the creator of tools like Parliament and flaws.cloud, and currently works in cloud security. His diverse experience across government, enterprise, and startup environments provides unique insights into security challenges at scale. His keynote represents not just technical expertise but years of hard-won wisdom about the human side of security work.
          </p>
        </div>
      </>
    )
  },
  "problem-definition-ultimate-security-control": {
    title: "Before the First Line of Code: Why Problem Definition is the Ultimate Security Control",
    date: "2025-01-20",
    readTime: "12 min read",
    category: "Security Strategy",
    content: (
      <>
        <p className="text-lg mb-6">
          The most catastrophic security failures I've witnessed in my career weren't failures of technology. They weren't caused by a lack of budget or a deficiency in engineering talent. They were failures of imagination—specifically, a failure to rigorously define the problem. In security engineering, we are rightfully captivated by sophisticated defenses, from zero-trust architectures to confidential computing. Yet, the strength of any control is downstream of the clarity of its purpose.
        </p>

        <p className="mb-4">
          Building a solution in search of a problem is a cardinal sin in engineering. It leads to security theater, wasted resources, and, most dangerously, a false sense of safety. The success or failure of a security program is determined long before the first firewall rule is written or the first line of code is deployed. It is forged in the crucible of problem definition.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Anatomy of a Vague Mandate</h2>
        <p className="mb-4">
          Consider a common, well-intentioned but dangerously imprecise directive from leadership: "We must improve our cloud security."
        </p>

        <p className="mb-4">
          An undisciplined team hears this and immediately jumps to solutions. The conversation devolves into a beauty contest of acronyms: Should we buy a CSPM? A CWPP? What about a CIEM? The engineers might start hardening container images, the architects might redesign VPC peering, and the compliance team might start auditing IAM roles. While each of these actions may be individually useful, they are uncoordinated and untethered to a specific risk.
        </p>

        <p className="mb-4">What does "better" mean?</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Are we trying to prevent <strong>data exfiltration</strong> from misconfigured S3 buckets and Azure Blob Storage? That's a data security posture management (DSPM) problem, focused on data classification and access control monitoring.</li>
          <li>Are we trying to mitigate <strong>runtime threats</strong> in our Kubernetes clusters? That's a runtime security problem, requiring eBPF-based instrumentation and behavioral anomaly detection.</li>
          <li>Are we trying to prevent <strong>lateral movement</strong> originating from an over-privileged serverless function? That's an identity and access management (IAM) problem, focused on least-privilege enforcement and temporary credentials.</li>
          <li>Are we trying to secure against <strong>supply chain attacks</strong> by validating the integrity of our build pipelines? That's a software supply chain security problem, demanding tools for generating and verifying SBOMs and SLSA attestations.</li>
        </ul>

        <p className="mb-4">
          Without a precise definition, the team operates in a fog. They generate noise, not signal. They produce a flurry of activity and dashboards full of metrics that don't map to a meaningful reduction in business risk. This is worse than doing nothing; it exhausts the team, burns budget, and creates security controls that actively impede the business.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">From Ambition to Architecture: The Power of Precision</h2>
        <p className="mb-4">Now, contrast that vague mandate with a rigorously defined problem statement:</p>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-sm text-blue-800 italic">
            "Our objective is to reduce the risk of accidental public exposure of customer Personally Identifiable Information (PII) hosted in our multi-cloud blob storage (AWS S3 and Google Cloud Storage). Success requires a 99% reduction in public-facing buckets containing classified PII within six months, measured by our DSPM tool, with zero impact on the p99 latency of our critical data-access APIs."
          </p>
        </div>

        <p className="mb-4">This definition is a force multiplier. It provides clarity that cascades through every stage of engineering and execution:</p>

        <ol className="list-decimal ml-6 mb-6 space-y-3">
          <li><strong>Architecture:</strong> The focus on multi-cloud and specific services dictates a solution that is API-native and event-driven. Instead of a clunky, agent-based legacy tool, the team designs a system using AWS EventBridge and Google Cloud Pub/Sub notifications that trigger Lambda or Cloud Functions to scan bucket policies and object ACLs in near real-time.</li>
          <li><strong>Tooling:</strong> The team now knows exactly what to look for in a DSPM tool. They need one with robust data classification engines for PII, native integration with both AWS and GCP APIs, and the ability to automate remediation without disrupting production workflows.</li>
          <li><strong>Operations:</strong> The Service Level Objective (SLO) for API latency (p99 &lt; specified ms) becomes a non-negotiable constraint. This forces the security solution to be lightweight and efficient, preventing the deployment of a system that degrades customer experience.</li>
          <li><strong>Business Alignment:</strong> The objective is expressed in terms of business risk (protecting customer PII) and is measurable. The CISO can walk into a board meeting and report not on the number of alerts closed, but on a quantifiable reduction in data exposure risk, directly tying the security investment to customer trust and regulatory compliance.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4">The Litmus Test: Tying Security to Business Value</h2>
        <p className="mb-4">
          A problem isn't truly defined until its solution can be expressed in terms of business value. Security for security's sake is an academic exercise. Security as a business enabler is a strategic advantage.
        </p>

        <p className="mb-4">
          This requires relentless collaboration. Engineers must understand the business context, and business leaders must articulate their priorities in a way that can be translated into technical requirements. The disconnect between these two worlds is the primary source of failed security projects.
        </p>

        <p className="mb-4">
          Consider early attempts at Zero Trust Network Access (ZTNA). Many were framed with the technical goal of "enforcing per-request, policy-based access." The result was often systems that created immense friction, blocking legitimate users and frustrating developers. The problem definition was technically correct but commercially unviable.
        </p>

        <p className="mb-4">
          A business-aligned problem statement would have been: "Implement a zero-trust access model that verifies user identity and device posture for every request to critical internal applications, <em>while reducing time-to-access for authenticated users and maintaining our existing single sign-on experience.</em>" This dual mandate—enhancing security <em>and</em> improving user experience—forces a more sophisticated solution, likely involving risk-based authentication, adaptive MFA, and caching policies that differentiate between low-risk and high-risk actions.
        </p>

        <p className="mb-4">Success, therefore, must be measured with business-centric KPIs:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>For a DDoS mitigation system:</strong> Not just "terabits per second scrubbed," but "guaranteed uptime of customer-facing services during a volumetric attack."</li>
          <li><strong>For a DevSecOps program:</strong> Not just "vulnerabilities found in pre-production," but "a measurable increase in developer velocity and a reduction in time-to-patch for critical vulnerabilities in production."</li>
          <li><strong>For a fraud detection platform:</strong> Not just "fraudulent transactions blocked," but "optimizing the balance between fraud loss reduction and minimizing the false positive rate that impacts legitimate customer transactions."</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">A First-Principles Framework for Problem Definition</h2>
        <p className="mb-4">
          To embed this discipline into your organization, adopt a structured, first-principles approach. Before any project is greenlit, the following questions must have explicit, written answers:
        </p>

        <h3 className="text-xl font-medium mt-6 mb-3">1. Articulate the Threat and Business Impact</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>What specific threat actor, technique, or condition are we defending against? Be specific. (e.g., "An external attacker leveraging a zero-day RCE in our external web servers to gain initial access.")</li>
          <li>What is the quantifiable business impact if this threat is realized? Use dollars, downtime, or reputational damage. (e.g., "A potential loss of $10M in regulatory fines and a 5% drop in customer retention.")</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-3">2. Define the Engineering Objective and Constraints</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>What specific, technical outcome will mitigate this threat? (e.g., "All internet-facing workloads will be contained within a runtime security solution that detects and blocks attempts to write to the file system or spawn a shell.")</li>
          <li>What are the non-negotiable constraints? (e.g., "The solution must not add more than 5ms of latency to web requests and must not consume more than 2% of CPU on host machines.")</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-3">3. Establish Verifiable Success Metrics</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>What primary technical KPI will prove the solution is working? (e.g., "Number of anomalous processes blocked.")</li>
          <li>What key business result will validate its value? (e.g., "A 90% reduction in confirmed security incidents originating from our web tier.")</li>
          <li>How will we measure these continuously, not just at a single point in time?</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
        <p className="mb-4">
          Security is an act of engineering, and the foundation of all great engineering is a deep, unwavering obsession with defining the problem. It is the most powerful control you can deploy. It costs nothing but intellectual rigor, and it is the only way to build security that is not just a cost center, but a durable, strategic advantage.
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
    
    // Update meta tags for social sharing
    if (post) {
      // Update page title
      document.title = `${post.title} | Life Chronicles`;
      
      // Update Open Graph meta tags
      const updateMetaTag = (property: string, content: string) => {
        let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      const updateMetaName = (name: string, content: string) => {
        let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', name);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      // Set blog post specific meta tags
      updateMetaTag('og:title', post.title);
      
      // Use post-specific descriptions for better social sharing
      const postDescriptions: Record<string, string> = {
        "problem-definition-ultimate-security-control": "The most catastrophic security failures aren't failures of technology—they're failures of imagination. Learn why rigorous problem definition is the foundation of effective security engineering.",
        "getting-things-fixed-security-wins-fails": "Scott Piper's masterclass keynote on the most challenging aspect of security work: actually getting people to fix the problems you find.",
      };
      
      const description = (slug && postDescriptions[slug]) || `${post.category} | ${post.readTime} | Read this insightful article on Life Chronicles`;
      updateMetaTag('og:description', description);
      updateMetaTag('og:url', window.location.href);
      updateMetaTag('og:type', 'article');
      
      // Use post-specific images first, then fall back to category images
      const postSpecificImages: Record<string, string> = {
        "problem-definition-ultimate-security-control": "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop&q=80", // Strategic planning/problem solving
        "getting-things-fixed-security-wins-fails": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop&q=80", // Security/network concept
      };
      
      const categoryImages: Record<string, string> = {
        "Cloud Security": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=630&fit=crop",
        "Fitness": "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1200&h=630&fit=crop",
        "Travel": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=630&fit=crop",
        "Personal Growth": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop",
        "Lifestyle": "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=630&fit=crop"
      };
      
      const imageUrl = (slug && postSpecificImages[slug]) || categoryImages[post.category] || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=630&fit=crop";
      updateMetaTag('og:image', imageUrl);
      updateMetaTag('og:image:width', '1200');
      updateMetaTag('og:image:height', '630');
      
      // Twitter meta tags
      updateMetaName('twitter:title', post.title);
      updateMetaName('twitter:description', description);
      updateMetaName('twitter:image', imageUrl);
      
      // Article specific meta tags
      updateMetaTag('article:published_time', post.date);
      updateMetaTag('article:section', post.category);
    }
  }, [slug, post]);

  const handleShare = (platform?: string) => {
    // Add video reference for specific posts
    const videoReferences: Record<string, string> = {
      "getting-things-fixed-security-wins-fails": "https://www.youtube.com/watch?v=SXiwyRY6ed4"
    };
    
    const videoUrl = slug ? videoReferences[slug] : null;
    const currentUrl = window.location.href;
    
    if (platform === 'linkedin') {
      // LinkedIn sharing with enhanced text
      const linkedinText = videoUrl 
        ? `${post?.title}\n\nInsightful analysis based on Scott Piper's BSidesSLC 2025 keynote.\n\nRead the full blog post: ${currentUrl}\n\nWatch the original talk: ${videoUrl}\n\n#CloudSecurity #InfoSec #BSidesSLC #SecurityEngineering`
        : `${post?.title}\n\nRead more: ${currentUrl}`;
      
      const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
      window.open(linkedinUrl, '_blank', 'width=600,height=400');
      
      // Also copy enhanced text to clipboard for easy pasting
      navigator.clipboard.writeText(linkedinText);
      return;
    }
    
    if (platform === 'twitter') {
      const twitterText = videoUrl 
        ? `${post?.title}\n\nGreat analysis of @ScottPiper's BSidesSLC keynote on getting security fixes implemented.\n\nBlog: ${currentUrl}\nVideo: ${videoUrl}\n\n#CloudSecurity #InfoSec`
        : `${post?.title}\n\n${currentUrl}`;
      
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}`;
      window.open(twitterUrl, '_blank', 'width=600,height=400');
      return;
    }

    // Default sharing (copy to clipboard with enhanced format)
    const copyText = videoUrl 
      ? `${post?.title}\n\nBlog: ${currentUrl}\nOriginal video: ${videoUrl}\n\n#CloudSecurity #InfoSec`
      : `${post?.title}\n\n${currentUrl}`;
    
    navigator.clipboard.writeText(copyText);
    alert('Content copied to clipboard! Perfect for sharing on LinkedIn or other platforms.');
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
              
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  onClick={() => handleShare('linkedin')}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share on LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center text-gray-600 hover:text-blue-400 transition-colors"
                  onClick={() => handleShare('twitter')}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share on Twitter
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center text-gray-600 hover:text-rose-600 transition-colors"
                  onClick={() => handleShare()}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Copy Link
                </Button>
              </div>
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
