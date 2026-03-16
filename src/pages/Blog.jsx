import React from 'react';
import { Section } from '../components/ui/Section';
import { Card, CardContent } from '../components/ui/Card';
import { ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Using the same posts data for the archive
export const blogPosts = [
    {
        id: "understanding-rsi",
        category: "Pain Management",
        title: "Understanding RSI: Why Your Wrist Hurts & How to Fix It",
        excerpt: "Repetitive Strain Injury is more than just fatigue. Learn the signs, the science, and the holistic cure.",
        date: "Oct 12, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
    },
    {
        id: "anti-inflammatory-diet",
        category: "Nutrition",
        title: "Anti-Inflammatory Diet: Eating for Recovery",
        excerpt: "What you eat impacts how you heal. Discover the top 10 foods that reduce inflammation naturally.",
        date: "Nov 05, 2024",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop"
    },
    {
        id: "mind-body-connection",
        category: "Wellness",
        title: "The Mind-Body Connection in Chronic Pain",
        excerpt: "Stress manifests physically. Explore how behavioral therapy can unlock chronic pain relief.",
        date: "Dec 01, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop"
    },
    {
        id: "posture-ergonomics",
        category: "Physical Therapy",
        title: "The Modern Desk Worker's Guide to Ergonomics",
        excerpt: "Simple adjustments to your workstation can prevent long-term musculoskeletal issues. Here is our comprehensive guide.",
        date: "Mar 05, 2025",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
    },
];

const Blog = () => {
    return (
        <div className="bg-slate-50 min-h-screen pt-20">
            {/* Header */}
            <Section className="pt-16 md:pt-24 pb-12 bg-white text-center">
                <div className="max-w-3xl mx-auto">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">Our Blog</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">Latest Insights & Articles</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Expert insights on lifestyle medicine, chronic disease management, and preventive health from our team of specialists.
                    </p>
                </div>
            </Section>

            {/* Blog Grid */}
            <Section className="py-12 bg-slate-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {blogPosts.map((post, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="h-full"
                        >
                            <Link to={`/blog/${post.id}`} className="block h-full">
                                <Card className="overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white group h-full flex flex-col">
                                    <div className="h-56 overflow-hidden relative shrink-0">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider shadow-sm">
                                            {post.category}
                                        </div>
                                    </div>
                                    <CardContent className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center justify-between gap-4 text-gray-400 text-xs font-medium mb-4">
                                            <span>{post.date}</span>
                                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-primary-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <span className="text-primary-light font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform mt-auto">
                                            Read Article <ArrowRight className="ml-1 w-4 h-4" />
                                        </span>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Blog;

