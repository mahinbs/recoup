import React from 'react';
import SubNav from '../../components/second-bell/SubNav';
import { Section } from '../../components/ui/Section';
import { Button } from '../../components/ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Activity, MonitorOff, UserCheck, HeartPulse, ShieldAlert, TrendingUp, Search, Zap, BarChart } from 'lucide-react';
import heroImg from '../../assets/second-bell/hero.png';
import teacherImg from '../../assets/second-bell/teacher.png';
import collabImg from '../../assets/second-bell/collaboration.png';
import { useNavigate } from 'react-router-dom';

const Overview = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-slate-50 min-h-screen pt-24">
            <SubNav />

            {/* 1. Hero Section */}
            <Section className="py-12 md:py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <span className="text-primary font-semibold tracking-wide uppercase text-sm">Recoup Health Framework</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-primary-dark leading-tight">
                            Second Bell<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light font-serif italic text-3xl md:text-5xl">The Health Side of Academic Performance</span>
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                            Schools today manage far more than just academics. A student's physiological and psychological wellbeing directly dictates their attention span, learning endurance, and ultimate academic performance.
                        </p>
                        <Button size="lg" onClick={() => navigate('/contact')}>
                            Discuss Our Program <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 aspect-video lg:aspect-square object-cover"
                    >
                        <img src={heroImg} alt="Students learning in a bright academic environment" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent mix-blend-multiply" />
                    </motion.div>
                </div>
            </Section>

            {/* 2. Problem Grid */}
            <Section className="bg-white py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Beyond the Syllabus</h2>
                    <p className="text-gray-600 text-lg">Modern education requires observing more than just test scores. Early health signals quietly dictate classroom success.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: <Brain />, title: "Attention & Readiness", desc: "Difficulty focusing or comprehending material due to underlying fatigue or cognitive overload." },
                        { icon: <HeartPulse />, title: "Emotional Regulation", desc: "Inability to manage stress, frustration, or peer interactions effectively." },
                        { icon: <Activity />, title: "Student Fatigue", desc: "Chronic tiredness affecting participation, memory retention, and physical activity." },
                        { icon: <MonitorOff />, title: "Digital Habits", desc: "Excessive screen time impacting sleep quality and exacerbating sedentary behaviors." },
                        { icon: <UserCheck />, title: "Posture & Physicality", desc: "Poor ergonomics leading to musculoskeletal pain and reduced stamina." },
                        { icon: <ShieldAlert />, title: "Student Wellbeing", desc: "A holistic measure of a child's safety, mental health, and overall physiological balance." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-primary-dark mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 3. Structural Gap */}
            <Section className="bg-primary-dark text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none w-1/2 h-full">
                    <img src={teacherImg} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="text-primary-light font-semibold tracking-widest uppercase text-sm mb-4 block">The Structural Gap</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-white">
                        Teachers notice the symptoms. <br />
                        <span className="font-serif italic text-white/80">But they cannot diagnose the cause.</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-4 text-white">In the Classroom</h3>
                            <p className="text-gray-300 leading-relaxed font-light">
                                Teachers spend hours with students and are often the first to notice behavioral shifts, slouching, or lack of focus. However, schools lack the clinical framework to medically diagnose or address these physiological and psychological root causes.
                            </p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-4 text-white">At Home</h3>
                            <p className="text-gray-300 leading-relaxed font-light">
                                Parents rely on academic reports for feedback. By the time an underlying health issue manifests as an academic or disciplinary problem, it has already been developing for months. The intervention often comes too late.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. Framework & 5. Program & 6. RSHS Previews (Quick visual links) */}
            <Section className="bg-slate-50 py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">The Complete Ecosystem</h2>
                    <p className="text-gray-600 text-lg">Second Bell integrates structured observation, clinical interventions, and data-driven scoring to support schools proactively.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Preview Cards */}
                    <div onClick={() => navigate('/second-bell/framework')} className="group cursor-pointer bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col items-start text-left h-full">
                        <div className="w-full aspect-video bg-slate-100 rounded-xl mb-6 overflow-hidden">
                            <img src={collabImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Framework Preview" />
                        </div>
                        <h3 className="text-xl font-bold text-primary-dark mb-3">6-Domain Framework</h3>
                        <p className="text-gray-500 text-sm mb-6 flex-grow">A structured framework helping schools observe early health signals affecting learning across physical, emotional, and digital domains.</p>
                        <span className="text-primary font-medium text-sm flex items-center">Explore Framework <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                    </div>

                    <div onClick={() => navigate('/second-bell/program')} className="group cursor-pointer bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col items-start text-left h-full">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                            <Activity size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-primary-dark mb-3">Health Program</h3>
                        <p className="text-gray-500 text-sm mb-6 flex-grow">Preventive screening, health education workshops, specialist support, and teacher training integrated seamlessly.</p>
                        <span className="text-primary font-medium text-sm flex items-center">View Programs <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                    </div>

                    <div onClick={() => navigate('/second-bell/rshs')} className="group cursor-pointer bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col items-start text-left h-full">
                        <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary flex items-center justify-center mb-6">
                            <span className="font-bold text-primary">85</span>
                        </div>
                        <h3 className="text-xl font-bold text-primary-dark mb-3">RSHS Score</h3>
                        <p className="text-gray-500 text-sm mb-6 flex-grow">The Recoup School Health Score. A definitive benchmark converting abstract wellbeing into actionable data.</p>
                        <span className="text-primary font-medium text-sm flex items-center">Understanding RSHS <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                    </div>
                </div>
            </Section>

            {/* Impact for Schools */}
            <Section className="bg-white py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">Measurable Outcomes</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Impact for Schools</h2>
                    <p className="text-gray-600 text-lg">Our structured health framework delivers clear, actionable benefits that directly enhance the academic environment.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {[
                        { icon: <Zap className="w-6 h-6" />, title: "Enhanced Endurance", desc: "Improved student attention and sustained learning endurance throughout the day." },
                        { icon: <Search className="w-6 h-6" />, title: "Early Detection", desc: "Early identification of underlying physiological or psychological barriers to learning." },
                        { icon: <ShieldAlert className="w-6 h-6" />, title: "Reduced Disruptions", desc: "Decreased classroom behavioral disruptions through proactive emotional regulation support." },
                        { icon: <BarChart className="w-6 h-6" />, title: "Actionable Insights", desc: "Data-driven wellbeing insights and campus-wide trends provided directly to school leadership." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary mb-4 shadow-sm">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-primary-dark mb-2">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="bg-slate-50 py-16 md:py-24">
                <div className="bg-primary/5 rounded-[2rem] p-8 md:p-12 text-center max-w-4xl mx-auto border border-primary/10">
                    <h2 className="text-2xl md:text-4xl font-bold text-primary-dark mb-4">A conversation, not a decision.</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                        Implementing a health framework requires alignment. Let's discuss how Second Bell can integrate with your school's unique culture and routines.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" onClick={() => navigate('/contact')}>Book a Consultation</Button>
                    </div>
                </div>
            </Section>

        </div>
    );
};

export default Overview;
