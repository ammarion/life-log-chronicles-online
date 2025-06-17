const blogPosts = {
  "problem-definition-ultimate-security-control": {
    title: "Before the First Line of Code: Why Problem Definition is the Ultimate Security Control",
    description: "The most catastrophic security failures aren't failures of technology—they're failures of imagination. Learn why rigorous problem definition is the foundation of effective security engineering.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop&q=80",
    category: "Cloud Security",
    readTime: "12 min read",
    date: "2025-01-20"
  },
  "security-problem-definition-engineering-control": {
    title: "Before the First Line of Code: Why Problem Definition is the Ultimate Security Control",
    description: "The most catastrophic security failures aren't failures of technology—they're failures of imagination. Learn why rigorous problem definition is the foundation of effective security engineering.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=630&fit=crop&q=80",
    category: "Cloud Security",
    readTime: "12 min read",
    date: "2025-01-20"
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

  // Add cache-busting timestamp to image URLs
  const timestamp = Date.now();
  const imageWithCacheBust = `${post.image}&t=${timestamp}`;
  const postWithCacheBust = { ...post, image: imageWithCacheBust };

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${postWithCacheBust.title} | Life Chronicles</title>
    <meta name="description" content="${postWithCacheBust.description}" />
    <meta name="author" content="Ammar Alim" />

    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="${postWithCacheBust.title}" />
    <meta property="og:description" content="${postWithCacheBust.description}" />
    <meta property="og:type" content="article" />
    <meta property="og:image" content="${postWithCacheBust.image}" />
    <meta property="og:image:secure_url" content="${postWithCacheBust.image}" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${postWithCacheBust.title}" />
    <meta property="og:url" content="https://ammaralim.com/blog/${slug}" />
    <meta property="og:site_name" content="Life Chronicles" />
    <meta property="og:locale" content="en_US" />

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@ammaralim" />
    <meta name="twitter:title" content="${postWithCacheBust.title}" />
    <meta name="twitter:description" content="${postWithCacheBust.description}" />
    <meta name="twitter:image" content="${postWithCacheBust.image}" />

    <!-- Article Meta Tags -->
    <meta property="article:published_time" content="${postWithCacheBust.date}" />
    <meta property="article:section" content="${postWithCacheBust.category}" />
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
        <h1>${postWithCacheBust.title}</h1>
        <p>${postWithCacheBust.description}</p>
        <div>
          <span>${postWithCacheBust.category}</span> • 
          <span>${postWithCacheBust.readTime}</span> • 
          <span>${postWithCacheBust.date}</span>
        </div>
        <p><a href="https://ammaralim.com/blog/${slug}">Read the full article →</a></p>
      </article>
    </div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

  // Set aggressive cache-busting headers
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Vary', 'User-Agent');
  res.status(200).send(html);
} 