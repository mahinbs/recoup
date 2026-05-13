/** Shared fallback article HTML when `bodyHtml` is empty */
export const defaultArticleBodyHtml = `
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<h2>The Science Behind It</h2>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
<blockquote><p>&ldquo;The mind and body are intrinsically connected in ways we are only beginning to fully understand in the modern medical paradigm.&rdquo;</p></blockquote>
<h3>Key Takeaways</h3>
<ul>
<li>Understanding the root cause is better than suppressing symptoms.</li>
<li>Consistent, small daily habits compound into massive health benefits.</li>
<li>Your environment dictates your biological responses.</li>
<li>Holistic approaches address the whole person, not just the isolated disease.</li>
</ul>
<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
`.trim();

export const defaultBlogPosts = [
  {
    id: 'understanding-rsi',
    category: 'Pain Management',
    title: 'Understanding RSI: Why Your Wrist Hurts & How to Fix It',
    excerpt:
      'Repetitive Strain Injury is more than just fatigue. Learn the signs, the science, and the holistic cure.',
    date: 'Oct 12, 2024',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop',
    metaTitle: 'Understanding RSI: Causes, Symptoms & Treatment | Recoup',
    metaDescription:
      "Learn what causes repetitive strain injury (RSI), how to spot symptoms early, and how Recoup's integrative approach helps you recover and prevent recurrence in Bangalore.",
    bodyHtml: defaultArticleBodyHtml,
  },
  {
    id: 'anti-inflammatory-diet',
    category: 'Nutrition',
    title: 'Anti-Inflammatory Diet: Eating for Recovery',
    excerpt:
      'What you eat impacts how you heal. Discover the top 10 foods that reduce inflammation naturally.',
    date: 'Nov 05, 2024',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop',
    metaTitle: 'Anti-Inflammatory Diet Guide for Chronic Pain | Recoup Health',
    metaDescription:
      'Discover how an anti-inflammatory diet can reduce chronic pain, improve gut health & support autoimmune recovery. Expert nutrition advice from Recoup Health, Bangalore.',
    bodyHtml: defaultArticleBodyHtml,
  },
  {
    id: 'mind-body-connection',
    category: 'Wellness',
    title: 'The Mind-Body Connection in Chronic Pain',
    excerpt:
      'Stress manifests physically. Explore how behavioral therapy can unlock chronic pain relief.',
    date: 'Dec 01, 2024',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop',
    metaTitle: 'The Mind-Body Connection: How Stress Affects Your Health',
    metaDescription:
      "Explore the science behind the mind-body connection and learn how chronic stress drives physical illness. Insights from Recoup Health's integrative medicine specialists.",
    bodyHtml: defaultArticleBodyHtml,
  },
  {
    id: 'posture-ergonomics',
    category: 'Physical Therapy',
    title: "The Modern Desk Worker's Guide to Ergonomics",
    excerpt:
      'Simple adjustments to your workstation can prevent long-term musculoskeletal issues. Here is our comprehensive guide.',
    date: 'Mar 05, 2025',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop',
    metaTitle: 'Posture & Ergonomics: Fix Pain at the Source | Recoup Health',
    metaDescription:
      "Poor posture and bad ergonomics are leading causes of chronic pain. Learn how Recoup's ergonomic assessments and posture correction therapy help you heal in Bangalore.",
    bodyHtml: defaultArticleBodyHtml,
  },
];
