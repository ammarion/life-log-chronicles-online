const blogPosts = {
  "problem-definition-ultimate-security-control": {
    title: "Before the First Line of Code: Why Problem Definition is the Ultimate Security Control",
    description: "The most catastrophic security failures aren't failures of technology—they're failures of imagination. Learn why rigorous problem definition is the foundation of effective security engineering.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=630&fit=crop&q=80",
    category: "Cloud Security",
    readTime: "12 min read",
    date: "Jan 20, 2025"
  },
  "getting-things-fixed-security-wins-fails": {
    title: "The Art of Influence: Deeper Reflections on Scott Piper's Mastery of Getting Things Fixed",
    description: "Scott Piper's masterclass keynote on the most challenging aspect of security work: actually getting people to fix the problems you find.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop&q=80",
    category: "Cloud Security", 
    readTime: "18 min read",
    date: "Jan 15, 2025"
  },
  "aws-security-architecture": {
    title: "Architecting Security in the Cloud: Lessons from AWS",
    description: "How I've learned to build security into cloud infrastructure from the ground up, sharing insights from managing security at scale.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=630&fit=crop",
    category: "Cloud Security",
    readTime: "8 min read", 
    date: "Dec 15, 2024"
  }
};

export default function handler(req, res) {
  const { slug } = req.query;
  const post = blogPosts[slug];
  
  if (!post) {
    // Redirect to main site for unknown slugs
    return res.redirect(302, '/');
  }

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${post.title} | Life Chronicles</title>
    <meta name="description" content="${post.description}" />
    <meta name="author" content="Ammar Alim" />

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="${post.title}" />
    <meta property="og:description" content="${post.description}" />
    <meta property="og:type" content="article" />
    <meta property="og:image" content="${post.image}" />
    <meta property="og:image:secure_url" content="${post.image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:url" content="https://ammaralim.com/blog/${slug}" />
    <meta property="og:site_name" content="Life Chronicles" />

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@ammaralim" />
    <meta name="twitter:title" content="${post.title}" />
    <meta name="twitter:description" content="${post.description}" />
    <meta name="twitter:image" content="${post.image}" />

    <!-- Article Meta Tags -->
    <meta property="article:published_time" content="${post.date}" />
    <meta property="article:section" content="${post.category}" />
    <meta property="article:author" content="Ammar Alim" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Redirect to React app after meta tags are read -->
    <script>
      // Only redirect for real browsers, not crawlers
      if (navigator.userAgent.indexOf('bot') === -1 && 
          navigator.userAgent.indexOf('crawler') === -1 &&
          navigator.userAgent.indexOf('spider') === -1) {
        window.location.replace('/blog/${slug}');
      }
    </script>
  </head>
  <body>
    <div id="root">
      <!-- Fallback content for crawlers -->
      <article>
        <h1>${post.title}</h1>
        <p>${post.description}</p>
        <div>
          <span>${post.category}</span> • 
          <span>${post.readTime}</span> • 
          <span>${post.date}</span>
        </div>
        <p><a href="https://ammaralim.com/blog/${slug}">Read the full article →</a></p>
      </article>
    </div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
} 