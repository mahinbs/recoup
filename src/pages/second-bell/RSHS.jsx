import React from 'react';
import SubNav from '../../components/second-bell/SubNav';
import { Section } from '../../components/ui/Section';
import CircularScore from '../../components/second-bell/CircularScore';
import { ArrowRight, CheckCircle2, AlertCircle, AlertTriangle, LayoutDashboard, Target, Zap, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RSHS = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-slate-50 min-h-screen pt-24 text-left">
            <SubNav />

            {/* Intro */}
            <Section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">Quantifying Wellbeing</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6 leading-tight">Recoup School Health Score</h1>
                    <p className="text-gray-600 text-lg leading-relaxed mb-12">
                        Abstract concerns cannot be effectively managed. The RSHS synthesizes multi-layered clinical observations from our screenings into a definitive, actionable score.
                    </p>

                    <div className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-100 mb-16 shadow-inner">
                        <h2 className="text-2xl font-bold text-primary-dark mb-8">Overall Campus Metric Example</h2>
                        <div className="flex justify-center mb-8">
                            <CircularScore score={85} label="Campus Health Average" color="#14b8a6" />
                        </div>
                        <p className="text-gray-500 max-w-2xl mx-auto text-sm">
                            The RSHS aggregates individual student scores to provide school leadership with a macroscopic view of campus health trends, allowing for targeted programmatic interventions.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Deliverables Section */}
            <Section className="py-16 md:py-24 bg-white border-t border-slate-100">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary-dark mb-4">Post-Assessment Deliverables</h2>
                        <p className="text-gray-600 text-lg">Following the initial screening phase, school leadership receives a comprehensive suite of insights.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4 items-start hover:border-primary/20 transition-colors">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0 text-primary">
                                <LayoutDashboard className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-dark mb-1">Campus Insights Dashboard</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">A macroscopic view of campus health trends and aggregated wellbeing metrics.</p>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4 items-start hover:border-primary/20 transition-colors">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0 text-primary">
                                <Target className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-dark mb-1">Domain-Wise Analysis</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Detailed breakdowns of performance across all six core health domains.</p>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4 items-start hover:border-primary/20 transition-colors">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0 text-primary">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-dark mb-1">Early Risk Identification</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Flagging emerging physiological or psychological barriers before they escalate.</p>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4 items-start hover:border-primary/20 transition-colors">
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0 text-primary">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary-dark mb-1">Actionable Recommendations</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">Clear, structured interventions proposed specifically for school leadership.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Score Bands */}
            <Section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary-dark mb-12 text-center">Understanding the Scoring Bands</h2>

                    <div className="space-y-6">
                        {/* 80-100 */}
                        <div className="bg-white p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center border border-gray-100 shadow-sm">
                            <div className="shrink-0 w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
                                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                            </div>
                            <div className="flex-grow flex flex-col md:flex-row md:items-center md:justify-between w-full">
                                <div>
                                    <h3 className="text-emerald-600 font-bold text-xl mb-1">Excellent Range</h3>
                                    <p className="text-gray-600">Optimal physical and psychological readiness to learn.</p>
                                </div>
                                <div className="mt-4 md:mt-0 text-3xl font-black text-emerald-500 tracking-tighter">80 - 100</div>
                            </div>
                        </div>

                        {/* 60-79 */}
                        <div className="bg-white p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center border border-gray-100 shadow-sm">
                            <div className="shrink-0 w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center border border-amber-100">
                                <AlertCircle className="w-8 h-8 text-amber-500" />
                            </div>
                            <div className="flex-grow flex flex-col md:flex-row md:items-center md:justify-between w-full">
                                <div>
                                    <h3 className="text-amber-600 font-bold text-xl mb-1">Moderate Range</h3>
                                    <p className="text-gray-600">Minor underlying issues detected; preventative workshops recommended.</p>
                                </div>
                                <div className="mt-4 md:mt-0 text-3xl font-black text-amber-500 tracking-tighter">60 - 79</div>
                            </div>
                        </div>

                        {/* Below 60 */}
                        <div className="bg-white p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center border border-gray-100 shadow-sm">
                            <div className="shrink-0 w-16 h-16 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                                <AlertTriangle className="w-8 h-8 text-red-500" />
                            </div>
                            <div className="flex-grow flex flex-col md:flex-row md:items-center md:justify-between w-full">
                                <div>
                                    <h3 className="text-red-600 font-bold text-xl mb-1">Needs Attention</h3>
                                    <p className="text-gray-600">Significant barriers to learning; targeted clinical intervention required.</p>
                                </div>
                                <div className="mt-4 md:mt-0 text-3xl font-black text-red-500 tracking-tighter">&lt; 60</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Next Steps CTA */}
            <Section className="py-16 bg-white text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-primary-dark mb-4">Ready to start the conversation?</h2>
                    <p className="text-gray-600 mb-8">
                        Connect with our program directors to discuss bringing Second Bell to your school.
                    </p>
                    <button onClick={() => navigate('/contact')} className="inline-flex items-center justify-center bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition-colors">
                        Contact Our Team <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </Section>
        </div>
    );
};
export default RSHS;
