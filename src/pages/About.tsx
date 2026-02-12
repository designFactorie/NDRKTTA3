import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

const legacyEvents = [
    { year: "1963", title: "Foundation", desc: "Established by Smt. Narayani Karigowda" },
    { year: "1985", title: "Expansion", desc: "Added diploma courses in education" },
    { year: "2000", title: "Global Partners", desc: "Tie-ups with international universities" },
    { year: "2023", title: "Autonomy", desc: "Awarded autonomous status for excellence" },
];

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

                {/* Legacy Timeline */}
                <Section className="bg-neutral-light border-t border-gray-200">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-heading font-bold text-primary-dark">A Journey of Excellence</h2>
                    </div>

                    <div className="relative container mx-auto px-6">
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 hidden md:block"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {legacyEvents.map((event, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -10 }}
                                    className="relative bg-white p-6 rounded-xl shadow-md z-10 border border-gray-100 text-center"
                                >
                                    <div className="w-12 h-12 bg-primary-dark text-accent-gold flex items-center justify-center rounded-full text-lg font-bold mx-auto mb-4 border-4 border-white shadow-lg">
                                        {idx + 1}
                                    </div>
                                    <h3 className="text-4xl font-bold text-accent-gold/40 mb-2">{event.year}</h3>
                                    <h4 className="text-xl font-bold text-primary-dark mb-2">{event.title}</h4>
                                    <p className="text-gray-500 text-sm">{event.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
