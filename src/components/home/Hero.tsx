import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { PlayCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero_updated.png";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-neutral-light">
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-[-10%] w-[60%] h-[70%] bg-gradient-to-br from-blue-100/40 to-purple-100/30 rounded-full blur-3xl animate-[blob_7s_infinite]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[60%] bg-gradient-to-tr from-gold-100/30 to-orange-50/30 rounded-full blur-3xl animate-[blob_7s_infinite_2s]"></div>
                <div className="absolute top-[20%] left-[15%] w-[20%] h-[20%] bg-blue-50/50 rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/40 text-primary-dark font-semibold text-sm mb-8 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse"></span>
                        Admissions Open for 2026-27
                    </div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] mb-8 text-primary-dark tracking-tight">
                        Teach with <br />
                        <span className="text-gradient-gold">Impact.</span>
                    </h1>

                    <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-light">
                        Gain practical classroom skills, internationally recognized certification, and mentorship that transforms your passion into a profession.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <Button size="lg" variant="primary" icon={<ArrowRight size={20} />} className="shadow-xl shadow-primary/20">
                            Apply Now
                        </Button>
                        <Button size="lg" variant="outline" icon={<PlayCircle size={20} />}>
                            Watch Our Story
                        </Button>
                    </div>

                    <div className="flex items-center gap-12 border-t border-gray-200/60 pt-8">
                        <div>
                            <p className="text-4xl font-bold text-primary-dark mb-1">10k+</p>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Graduates</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold text-primary-dark mb-1">95%</p>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Placement</p>
                        </div>
                        <div className="hidden sm:block">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map(I => (
                                    <div key={I} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                                ))}
                            </div>
                            <p className="text-xs text-gray-400 mt-2 pl-2">Join our community</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative hidden lg:block"
                >
                    {/* Main Hero Visual */}
                    <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 border-8 border-white aspect-[4/5] group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-10"></div>
                        <img
                            src={heroImage}
                            alt="Teacher in classroom"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Floating Card 1 */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute top-12 -left-12 bg-white p-5 rounded-2xl shadow-xl z-20 max-w-[200px]"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <span className="text-xl">🏆</span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 font-bold uppercase">Certified</p>
                                    <p className="text-sm font-bold text-primary-dark">Top Rated</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Card 2 */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 -right-8 bg-white p-5 rounded-2xl shadow-xl z-20"
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-center">
                                    <p className="text-xs text-gray-400 uppercase font-bold mb-1">Batch Starting</p>
                                    <p className="text-xl font-bold text-accent-red">In 3 Days</p>
                                </div>
                                <div className="w-12 h-12 rounded-full border-4 border-accent-gold/20 flex items-center justify-center">
                                    <span className="text-lg">⏳</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Decorative Background Elements behind image */}
                    <div className="absolute inset-0 bg-accent-gold rounded-[2.5rem] rotate-6 scale-[1.02] z-0 opacity-20"></div>
                </motion.div>
            </div>
        </section>
    );
}
