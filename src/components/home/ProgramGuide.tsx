import Section from "@/components/ui/Section";
import { CheckCircle2, Target, Users2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function ProgramGuide() {
    const guides = [
        {
            icon: <Target className="w-6 h-6 text-accent-gold" />,
            text: "Deliver research-based and relevant learning goals driven by essential questions and core leadership skills."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-accent-gold" />,
            text: "Promote equity and inclusion through contextualised and personalised learning experiences."
        },
        {
            icon: <Users2 className="w-6 h-6 text-accent-gold" />,
            text: "Create a collaborative and focused learning environment that emphasises practical application."
        },
        {
            icon: <CheckCircle2 className="w-6 h-6 text-accent-gold" />,
            text: "Build a community of educators who share best practices, challenges, and workable solutions."
        }
    ];

    return (
        <Section className="bg-primary-dark text-white relative overflow-hidden pb-10 md:pb-10">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
                            What Guides <br />
                            <span className="text-accent-gold">Our Programme</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Our programme is shaped by commitment, experience, and a strong national network. We strive to create meaningful impact in every classroom.
                        </p>
                        <div className="h-1 w-20 bg-accent-gold rounded-full"></div>
                    </div>

                    <div className="space-y-6">
                        {guides.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex items-start gap-4 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors duration-300 border border-white/10"
                            >
                                <div className="mt-1 bg-white/10 p-2 rounded-lg">
                                    {item.icon}
                                </div>
                                <p className="text-gray-200 leading-relaxed">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
