import React from 'react';
import { Section } from '../ui/Section';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const BlogPreview = () => {
    const posts = [
        {
            category: "Pain Management",
            title: "Understanding RSI: Why Your Wrist Hurts & How to Fix It",
            excerpt: "Repetitive Strain Injury is more than just fatigue. Learn the signs, the science, and the holistic cure.",
            date: "Oct 12, 2024",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
        },
        {
            category: "Nutrition",
            title: "Anti-Inflammatory Diet: Eating for Recovery",
            excerpt: "What you eat impacts how you heal. Discover the top 10 foods that reduce inflammation naturally.",
            date: "Nov 05, 2024",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop"
        },
        {
            category: "Wellness",
            title: "The Mind-Body Connection in Chronic Pain",
            excerpt: "Stress manifests physically. Explore how behavioral therapy can unlock chronic pain relief.",
            date: "Dec 01, 2024",
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop"
        }
    ];

    return (
        <Section id="blog" className="bg-secondary/20">
            <div className="flex items-center justify-between mb-12">
                <div>
                    <span className="text-accent font-semibold tracking-wide uppercase text-sm mb-2 block">Knowledge Hub</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary-dark">Latest Wellness Insights</h2>
                </div>
                <Button variant="ghost" className="hidden md:flex">View All Articles <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.map((post, idx) => (
                    <Card key={idx} className="overflow-hidden border-none shadow-sm hover:shadow-xl transition-shadow bg-white group cursor-pointer">
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
                            <span className="text-gray-400 text-xs font-medium mb-2 block">{post.date}</span>
                            <h3 className="text-xl font-bold text-primary-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>
                            <span className="text-accent font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                                Read Article <ArrowRight className="ml-1 w-4 h-4" />
                            </span>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-8 text-center md:hidden">
                <Button variant="outline" className="w-full">View All Articles</Button>
            </div>
        </Section>
    );
};

export default BlogPreview;
