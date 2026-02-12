import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { CheckCircle2, TrendingUp, Globe2, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function TransformationStory() {
    return (
        <Section className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Column: Visuals */}
                <div className="order-2 lg:order-1 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <div className="absolute -top-10 -left-10 w-full h-full border-[3px] border-accent-gold/20 rounded-[2.5rem] animate-pulse"></div>
                        <img
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                            alt="Teacher Transformation"
                            className="rounded-[2.5rem] shadow-2xl w-full object-cover h-[500px] hover:scale-[1.02] transition-transform duration-500"
                        />

                        {/* Floating Badge 1: Salary Hike */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-10 -right-8 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3 border border-gray-100 max-w-[200px]"
                        >
                            <div className="bg-green-100 p-2 rounded-lg text-green-600">
                                <TrendingUp size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Avg. Salary</p>
                                <p className="text-primary-dark font-bold text-lg">+40% Hike</p>
                            </div>
                        </motion.div>

                        {/* Floating Badge 2: Global Reach */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-6 -left-6 bg-primary-dark p-5 rounded-xl shadow-xl z-20 flex items-center gap-4 border border-white/10 max-w-[220px]"
                        >
                            <div className="bg-accent-gold/20 p-2 rounded-lg text-accent-gold">
                                <Globe2 size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-white/60 font-medium uppercase tracking-wider">Placement</p>
                                <p className="text-white font-bold text-lg">Global Reach</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Decorative Blob */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-gold/5 rounded-full blur-3xl -z-10"></div>
                </div>

                {/* Right Column: Content */}
                <div className="order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/10 text-accent-dark rounded-full mb-6">
                            <Award size={16} className="text-accent-gold-dark" />
                            <span className="text-sm font-bold text-accent-gold-dark uppercase tracking-wider">Key Differentiator</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-primary-dark leading-tight">
                            From Aspiring Teacher to <span className="text-gradient-gold block mt-2">Global Leader</span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            At NDRK, we don't just teach modules; we transform perspectives. Our holistic approach combines
                            <span className="font-semibold text-primary-dark"> modern pedagogy</span> with
                            <span className="font-semibold text-primary-dark"> time-tested values</span> to shape educators who inspire the next generation.
                        </p>

                        <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                            {["Practical Classroom Training", "Personalized Mentorship", "Placement Assistance", "Global Certification"].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.1), duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 text-primary-dark font-medium"
                                >
                                    <CheckCircle2 className="text-accent-gold flex-shrink-0" size={22} />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        <Button variant="primary" size="lg" className="shadow-xl shadow-accent-gold/20">
                            Start Your Transformation
                        </Button>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
