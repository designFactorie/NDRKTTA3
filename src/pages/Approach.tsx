import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { CheckCircle2, Users, BookOpen, Lightbulb } from "lucide-react";

export default function Approach() {
    return (
        <div className="min-h-screen flex flex-col bg-neutral-light">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center bg-primary-dark text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"></div>

                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white"
                    >
                        Our Implementation Approach
                    </motion.h1>
                    <div className="w-24 h-1 bg-accent-gold mx-auto rounded-full"></div>
                </div>
            </section>

            <main className="flex-grow">
                {/* Introduction - Needs Based Training */}
                <Section className="bg-white">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-heading font-bold text-primary-dark mb-6">
                                A Needs-Based Training
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Every school, classroom, and learner is unique. A one-size-fits-all approach to professional development is no longer effective. Our training is grounded in:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Current educational research and global best practices",
                                    "Contextual realities of Indian classrooms",
                                    "School-specific goals and teacher readiness levels",
                                    "Emerging competencies required for future-ready learners"
                                ].map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="text-accent-gold flex-shrink-0 mt-1" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent-gold/10 rounded-2xl transform rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                                alt="Needs Based Training"
                                className="relative rounded-2xl shadow-xl z-10"
                            />
                        </div>
                    </div>
                </Section>

                {/* 3 Step Approach */}
                <Section className="bg-neutral-light border-t border-gray-200">
                    <div className="space-y-24">
                        {/* Step 1 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-2 md:order-1"
                            >
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                    <Users size={32} />
                                </div>
                                <h3 className="text-3xl font-heading font-bold text-primary-dark mb-4">1. Needs Analysis & Customisation</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    We begin by understanding each school’s and individual context through surveys and consultations. This allows us to design training that is relevant, practical, and immediately applicable.
                                </p>
                            </motion.div>
                            <div className="order-1 md:order-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Analysis" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" alt="Blended Learning" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                    <BookOpen size={32} />
                                </div>
                                <h3 className="text-3xl font-heading font-bold text-primary-dark mb-4">2. Blended Learning Model</h3>
                                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                    Our programmes combine interactive workshops, demonstration lessons, peer learning, professional learning communities, online modules, and reflective tasks.
                                </p>
                                <p className="text-primary-dark font-medium italic">
                                    This blended approach ensures flexibility while promoting sustained professional growth.
                                </p>
                            </motion.div>
                        </div>

                        {/* Step 3 */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-2 md:order-1"
                            >
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                                    <Lightbulb size={32} />
                                </div>
                                <h3 className="text-3xl font-heading font-bold text-primary-dark mb-4">3. Practice-Oriented Training</h3>
                                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                    Teachers engage in real classroom simulations, lesson design and feedback cycles, action research projects, and reflective journaling.
                                </p>
                                <p className="text-primary-dark font-medium italic">
                                    The focus is on interpreting theory into effective classroom practice. This ensures long-term impact rather than one-time training.
                                </p>
                            </motion.div>
                            <div className="order-1 md:order-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=2067&auto=format&fit=crop" alt="Practice" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
