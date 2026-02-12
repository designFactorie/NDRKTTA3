import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, FileText, ArrowRight, UserCheck } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Apply Online",
        description: "Fill out the simple application form with your basic details and educational background. No application fee required for initial inquiry.",
        icon: FileText,
    },
    {
        id: 2,
        title: "Counseling & Interview",
        description: "Attend a one-on-one session with our academic counselors. We assess your aptitude and guide you to the right program.",
        icon: UserCheck,
    },
    {
        id: 3,
        title: "Document Verification",
        description: "Submit digital copies of your academic certificates and ID proof for verification by our admissions team.",
        icon: CheckCircle,
    },
    {
        id: 4,
        title: "Secure Your Seat",
        description: "Pay the admission fee to confirm your enrollment. Welcome to the NDRK family!",
        icon: Calendar,
    },
];

export default function Admissions() {
    return (
        <div className="min-h-screen flex flex-col bg-neutral-light">
            <Navbar />

            <section className="pt-32 pb-20 bg-primary-dark text-white text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 text-white">
                        Begin Your <span className="text-accent-gold">Journey</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                        Our admission process is designed to be simple, transparent, and student-friendly.
                    </p>
                </div>
            </section>

            <main className="flex-grow">
                <Section className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Steps Timeline */}
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

                            <div className="space-y-12">
                                {steps.map((step, idx) => (
                                    <motion.div
                                        key={step.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.2 }}
                                        className="relative flex gap-8"
                                    >
                                        <div className="flex-shrink-0 relative z-10 w-16 h-16 rounded-full bg-white border-4 border-neutral-100 shadow-sm flex items-center justify-center text-primary-dark">
                                            <step.icon size={28} />
                                        </div>
                                        <div className="pt-2">
                                            <span className="text-accent-gold font-bold text-sm tracking-widest uppercase mb-1 block">Step 0{step.id}</span>
                                            <h3 className="text-2xl font-bold text-primary-dark mb-2">{step.title}</h3>
                                            <p className="text-gray-600 leading-relaxed max-w-md">{step.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Apply Form - Sticky */}
                        <div className="order-1 lg:order-2 relative">
                            <div className="lg:sticky lg:top-32">
                                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative z-20 -mt-20 lg:-mt-0">
                                    <h3 className="text-2xl font-heading font-bold text-primary-dark mb-6">Quick Application</h3>
                                    <form className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-sm font-semibold text-gray-700">First Name</label>
                                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-gray-200 focus:ring-2 focus:ring-primary-dark focus:border-transparent outline-none transition-all" placeholder="Jane" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-sm font-semibold text-gray-700">Last Name</label>
                                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-gray-200 focus:ring-2 focus:ring-primary-dark focus:border-transparent outline-none transition-all" placeholder="Doe" />
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                            <input type="email" className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-gray-200 focus:ring-2 focus:ring-primary-dark focus:border-transparent outline-none transition-all" placeholder="jane@example.com" />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                                            <input type="tel" className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-gray-200 focus:ring-2 focus:ring-primary-dark focus:border-transparent outline-none transition-all" placeholder="+91 98765 43210" />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-sm font-semibold text-gray-700">Interested Program</label>
                                            <select className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-gray-200 focus:ring-2 focus:ring-primary-dark focus:border-transparent outline-none transition-all">
                                                <option>Select a course</option>
                                                <option>Montessori Teacher Training</option>
                                                <option>Diploma in Education</option>
                                                <option>Early Childhood Care</option>
                                            </select>
                                        </div>

                                        <Button variant="secondary" className="w-full mt-6 text-lg font-bold" icon={<ArrowRight size={20} />}>
                                            Submit Application
                                        </Button>

                                        <p className="text-xs text-center text-gray-400 mt-4">
                                            By submitting, you agree to our privacy policy. We'll contact you within 24 hours.
                                        </p>
                                    </form>
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
