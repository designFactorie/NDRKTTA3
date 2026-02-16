import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";



export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-neutral-light">
            <Navbar />

            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center bg-primary-dark text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed"></div>

                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-heading font-bold mb-6 text-white"
                    >
                        Our Legacy
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                        Over <span className="text-accent-gold font-bold">60 years</span> of shaping educators who inspire the world.
                    </p>
                </div>
            </section>

            <main className="flex-grow">
                {/* Mission / Vision */}
                <Section className="bg-white">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h6 className="text-accent-gold tracking-widest uppercase font-bold text-sm mb-2">Who We Are</h6>
                            <h2 className="text-4xl font-heading font-bold text-primary-dark mb-6">Empowering Education since 1963</h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                NDRK Teacher Training Academy was founded with a singular vision: to create a generation of teachers who are not just instructors, but mentors, guides, and leaders.
                            </p>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                We believe that education is the foundation of any society, and the quality of that foundation depends entirely on the quality of its teachers.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-primary-dark p-8 rounded-2xl text-white transform translate-y-8 shadow-lg cursor-pointer"
                            >
                                <span className="text-4xl mb-4 block">🎯</span>
                                <h3 className="text-xl font-bold mb-2 text-white">Our Mission</h3>
                                <p className="text-gray-300 text-sm">To provide world-class teacher training that combines traditional values with modern pedagogy.</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="bg-neutral-100 p-8 rounded-2xl shadow-md cursor-pointer group hover:bg-[#D4AF37] transition-colors duration-300"
                            >
                                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">💡</span>
                                <h3 className="text-xl font-bold mb-2 text-primary-dark transition-colors duration-300">Our Vision</h3>
                                <p className="text-gray-600 text-sm group-hover:text-primary-dark/80 transition-colors duration-300">To be the global benchmark in teacher education and educational leadership.</p>
                            </motion.div>
                        </div>
                    </div>
                </Section>

                {/* Our Commitment */}
                <Section className="bg-neutral-light border-t border-gray-200">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-heading font-bold text-primary-dark">Our Commitment</h2>
                            <div className="w-24 h-1 bg-accent-gold mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="space-y-6"
                            >
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    We are committed to building a community of educators who are <span className="font-semibold text-primary-dark">future-ready, reflective, and driven by purpose</span>. Through needs-based, 21st century teacher training, we aim to transform classrooms into dynamic learning environments where both teachers and students thrive.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Education in the 21st century demands teachers who are adaptive, reflective, and equipped to prepare learners for a rapidly changing world. Today’s classrooms require more than subject expertise — they call for educators who can foster critical thinking, creativity, collaboration, digital literacy, and social-emotional growth.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                            >
                                <h3 className="text-2xl font-bold text-primary-dark mb-4">Bridging the Gap</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Our needs-based teacher training programmes are designed to bridge the gap between traditional teaching practices and the evolving expectations of modern education. We focus on empowering teachers to become facilitators of learning, innovators in pedagogy, and leaders in their educational communities.
                                </p>
                                <h3 className="text-2xl font-bold text-primary-dark mb-4">Facilitator-Led Excellence</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Our facilitator-led sessions are designed to build strong, reflective facilitator ready to cater to the demands of the 21st century learning. Each session combines interactive presentations with opportunities for personal reflection and introspection.
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-12 bg-primary-dark text-white p-8 rounded-2xl text-center max-w-4xl mx-auto shadow-xl"
                        >
                            <p className="text-lg font-light italic">
                                "Participants engage with thought-provoking case studies, curated readings, and guided reflection prompts that encourage deeper thinking and real-world application."
                            </p>
                        </motion.div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
