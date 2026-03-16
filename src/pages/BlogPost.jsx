import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts } from './Blog'; // Import data from Blog page for now

const BlogPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Find the post based on the URL parameter ID
        const foundPost = blogPosts.find(p => p.id === id);
        if (foundPost) {
            setPost(foundPost);
        }
        // Scroll to top when post loads
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-20">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-primary-dark mb-4">Article Not Found</h2>
                    <p className="text-gray-500 mb-8">The article you are looking for does not exist or has been moved.</p>
                    <Link to="/blog" className="text-primary font-semibold hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft size={16} /> Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <article className="bg-slate-50 min-h-screen pt-28 pb-20">
            {/* Header Image & Meta */}
            <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary/80 hover:text-primary transition-colors mb-8">
                    <ArrowLeft size={16} /> Back to all articles
                </Link>
                
                <div className="flex items-center gap-3 text-sm text-gray-500 font-medium mb-6">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight mb-8">
                    {post.title}
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mb-12">
                    {post.excerpt}
                </p>

                <div className="w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl mb-12">
                    <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover" 
                    />
                </div>
            </header>

            {/* Content & Sidebar Layout */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
                
                {/* Social Share Sidebar */}
                <div className="lg:w-16 flex lg:flex-col gap-4 items-center pt-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden lg:block -rotate-90 whitespace-nowrap mb-8 mt-4">Share</span>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all">
                        <Facebook size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all">
                        <Twitter size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all">
                        <Linkedin size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all lg:mt-4">
                        <Share2 size={18} />
                    </button>
                </div>

                {/* Main Article Content */}
                <div className="lg:w-[calc(100%-4rem)] prose prose-lg prose-slate prose-headings:text-primary-dark prose-a:text-primary hover:prose-a:text-primary-light max-w-none">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    
                    <h2>The Science Behind It</h2>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    
                    <blockquote className="border-l-4 border-primary pl-6 italic text-gray-600 my-8">
                        "The mind and body are intrinsically connected in ways we are only beginning to fully understand in the modern medical paradigm."
                    </blockquote>
                    
                    <h3>Key Takeaways</h3>
                    <ul>
                        <li>Understanding the root cause is better than suppressing symptoms.</li>
                        <li>Consistent, small daily habits compound into massive health benefits.</li>
                        <li>Your environment dictates your biological responses.</li>
                        <li>Holistic approaches address the whole person, not just the isolated disease.</li>
                    </ul>

                    <p>
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                    </p>

                    <div className="bg-primary/5 rounded-2xl p-8 mt-12 mb-8 border border-primary/10">
                        <h4 className="text-xl font-bold text-primary-dark mt-0">Ready to take control of your health?</h4>
                        <p className="text-gray-600 mb-6 font-normal">Our specialists at Recoup Health can design a personalized treatment plan tailored to your unique physiology and lifestyle.</p>
                        <Link to="/contact" className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors shadow-md shadow-primary/20 no-underline">
                            Book a Consultation Today
                        </Link>
                    </div>
                </div>
            </div>

            {/* Recent Articles Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 border-t border-gray-200 pt-16">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold text-primary-dark">Recent Articles</h2>
                    <Link to="/blog" className="text-primary font-semibold hover:text-primary-light transition-colors flex items-center gap-2">
                        View all <ArrowRight size={18} />
                    </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts
                        .filter(p => p.id !== id)
                        .slice(0, 3)
                        .map((recentPost, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <Link to={`/blog/${recentPost.id}`} className="group block">
                                <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-4 relative">
                                    <img 
                                        src={recentPost.image} 
                                        alt={recentPost.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
                                        {recentPost.category}
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">
                                    <span>{recentPost.date}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1"><Clock size={12} /> {recentPost.readTime}</span>
                                </div>
                                <h3 className="text-lg font-bold text-primary-dark group-hover:text-primary transition-colors leading-snug line-clamp-2">
                                    {recentPost.title}
                                </h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
