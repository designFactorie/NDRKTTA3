import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, GraduationCap, Users, Award } from "lucide-react";

export default function FinalCTA() {
    return (
        <Section className="relative py-32 overflow-hidden bg-primary-dark">
            {/* Dynamic Background with Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-accent-gold/5 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px] animate-pulse delay-700"></div>
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

                    {/* Concept: The "Launchpad" - Central content with floating satellites */}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Floating Element 1: Excellence (Top Left) */}
                        <motion.div
                            animate={{ y: [0, -15, 0], rotate: [0, -2, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute -top-12 -left-4 md:-left-24 hidden md:flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-2xl"
                        >
                            <div className="bg-accent-gold/20 p-2 rounded-lg text-accent-gold">
                                <Award size={20} />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Certified</p>
                                <p className="text-sm font-bold text-white">Excellence</p>
                            </div>
                        </motion.div>

                        {/* Floating Element 2: Community (Bottom Right) */}
                        <motion.div
                            animate={{ y: [0, 15, 0], rotate: [0, 2, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -right-4 md:-right-20 hidden md:flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-2xl"
                        >
                            <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                                <Users size={20} />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Join</p>
                                <p className="text-sm font-bold text-white">10k+ Alumni</p>
                            </div>
                        </motion.div>

                        {/* Main Headline */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
                            <Sparkles size={16} className="text-accent-gold" />
                            <span className="text-sm font-medium text-gray-300">New Batches Starting Soon</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-white leading-tight">
                            Ready to Shape <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-yellow-200 to-accent-gold-light relative">
                                Young Minds?
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-gold/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                                </svg>
                            </span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Join the next batch of world-class educators. Transform your passion into a global career with our accredited programs.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto"
                    >
                        <Button
                            size="lg"
                            variant="secondary"
                            className="px-10 py-6 text-lg shadow-2xl shadow-accent-gold/20 group md:min-w-[240px]"
                            icon={<ArrowRight className="group-hover:translate-x-1 transition-transform" />}
                        >
                            Apply for Admission
                        </Button>
                        <Button
                            size="lg"
                            variant="glass"
                            className="px-10 py-6 text-lg md:min-w-[240px]"
                            icon={<GraduationCap />}
                        >
                            Download Prospectus
                        </Button>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
