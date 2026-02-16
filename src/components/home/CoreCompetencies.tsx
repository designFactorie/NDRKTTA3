import Section from "@/components/ui/Section";
import { Brain, Lightbulb, Users, Mic, Laptop, Heart, Hand } from "lucide-react";
import { motion } from "framer-motion";

const competencies = [
    {
        icon: <Brain size={32} />,
        label: "Critical thinking and problem-solving",
        color: "bg-blue-100 text-blue-600"
    },
    {
        icon: <Lightbulb size={32} />,
        label: "Creativity and innovation in teaching",
        color: "bg-yellow-100 text-yellow-600"
    },
    {
        icon: <Users size={32} />,
        label: "Collaboration and teamwork",
        color: "bg-green-100 text-green-600"
    },
    {
        icon: <Mic size={32} />,
        label: "Communication skills",
        color: "bg-purple-100 text-purple-600"
    },
    {
        icon: <Laptop size={32} />,
        label: "Digital literacy and responsible technology use",
        color: "bg-red-100 text-red-600"
    },
    {
        icon: <Heart size={32} />,
        label: "Social-emotional learning and student wellbeing",
        color: "bg-pink-100 text-pink-600"
    },
    {
        icon: <Hand size={32} />,
        label: "Inclusive and equitable classroom practices",
        color: "bg-indigo-100 text-indigo-600"
    }
];

export default function CoreCompetencies() {
    return (
        <Section className="bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-heading font-bold text-primary-dark">
                        Core <span className="text-accent-gold">21st Century Competencies</span> We Address
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Our programmes equip teachers to develop and model essential skills for the modern classroom.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {competencies.map((comp, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className="bg-neutral-light p-6 rounded-2xl text-center group hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1.33rem)] lg:w-[calc(25%-1.5rem)]"
                        >
                            <div className={`w-16 h-16 ${comp.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                {comp.icon}
                            </div>
                            <h3 className="font-semibold text-gray-800 group-hover:text-primary-dark transition-colors">
                                {comp.label}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
