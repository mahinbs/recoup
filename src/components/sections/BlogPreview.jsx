import React from 'react';
import { Section } from '../ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPreview = () => {
    const posts = [
        {
            category: "Pain Management",
            title: "Understanding RSI: Why Your Wrist Hurts & How to Fix It",
            excerpt: "Repetitive Strain Injury is more than just fatigue. Learn the signs, the science, and the holistic cure.",
            date: "Oct 12, 2024",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
        },
        {
            category: "Nutrition",
            title: "Anti-Inflammatory Diet: Eating for Recovery",
            excerpt: "What you eat impacts how you heal. Discover the top 10 foods that reduce inflammation naturally.",
            date: "Nov 05, 2024",
            readTime: "4 min read",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop"
        },
        {
            category: "Wellness",
            title: "The Mind-Body Connection in Chronic Pain",
            excerpt: "Stress manifests physically. Explore how behavioral therapy can unlock chronic pain relief.",
            date: "Dec 01, 2024",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop"
        }
    ];

    return (
        <Section id="blog" className="bg-white">
            <div className="flex items-center justify-between mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary-light font-semibold tracking-wide uppercase text-sm mb-2 block">Latest Insights
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary-dark">Health & Wellness Articles
                    </h2>
                    <p className="text-gray-600 mt-2 max-w-2xl">Expert insights on lifestyle medicine, chronic disease management, and preventive health from Dr. Deepak Sharan
                    </p>
                </motion.div>
                <div className="hidden md:block">
                    <Button variant="ghost" className="hidden md:flex">View All Articles <ArrowRight className="ml-2 w-4 h-4" /></Button>
                </div>
            </div>

            <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide">
                {posts.map((post, idx) => (
                    <motion.div
                        key={idx}
                        className="min-w-[85vw] md:min-w-0 snap-center h-full"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                        <Card className="overflow-hidden border-none shadow-sm hover:shadow-xl transition-shadow bg-white group cursor-pointer h-full">
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                                    {post.category}
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between gap-4 text-gray-400 text-xs font-medium mb-3">
                                    <span>{post.date}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <span className="text-primary-light font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                                    Read Article <ArrowRight className="ml-1 w-4 h-4" />
                                </span>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 text-center md:hidden">
                <Button variant="outline" className="w-full">View All Articles</Button>
            </div>
        </Section>
    );
};

export default BlogPreview;
