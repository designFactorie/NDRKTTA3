import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import {
    BookOpen, Clock, Users, Target, CheckCircle2,
    Award, Layout, GraduationCap, ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Program {
    title: string;
    subtitle: string;
    duration: string;
    targetGroup: string;
    focus: string;
    description: string;
    modules: string[];
    certification: string[];
    capstone: {
        title: string;
        description: string;
        assessment: string[];
    };
    alignment: { element: string; nep: string; }[];
    requirements?: string[];
    whyChoose: string[];
}

const programs: Record<string, Program> = {
    "teaching-excellence": {
        title: "Certificate in Teaching Excellence",
        subtitle: "Building Future-Ready School Facilitators",
        duration: "3 Hours / Module",
        targetGroup: "Aspiring Teachers, New Educators, Professional Development",
        focus: "Core Teaching Competencies",
        description: "A comprehensive programme designed to equip educators with essential skills for the modern classroom, aligned with national and international standards.",
        modules: [
            "Understanding Learning Styles and Needs",
            "Understanding Learners for better Classroom Management",
            "Lesson planning with a purpose – National and International boards aligned",
            "The Aligned unit plan – Skills and competencies based",
            "Building Inclusive Learning Environments through differentiation",
            "Effective Teaching Skills and Pedagogical Practices",
            "Assessment for Learning – Formative and Summative",
            "Reflective Practice and Continuous Professional Growth",
            "Innovation in Teaching and Learning",
            "Digital Pedagogy and Technology Integration",
            "Engaging Parents and the Wider Community",
            "Foster 21st-century skills in the classroom",
            "Collaborative learning",
            "Project-based Learning",
            "Design thinking in the classroom"
        ],
        certification: [
            "Attend and complete all modules",
            "Submit Capstone project",
            "Complete within one year (Self-paced)"
        ],
        capstone: {
            title: "Classroom Challenge Intervention",
            description: "Participants identify a classroom challenge, implement an intervention, and evaluate its impact.",
            assessment: ["Presentation (parameters given by the Academy)", "Mentor evaluation using criteria-based rubric"]
        },
        alignment: [
            { element: "Inclusive education", nep: "Equity & inclusion" },
            { element: "Experiential learning", nep: "Competency-based learning" },
            { element: "Digital pedagogy", nep: "Technology integration" },
            { element: "Continuous assessment", nep: "Holistic progress card" },
            { element: "Teacher professional development", nep: "Continuous Professional Development (CPD)" },
            { element: "Student well-being", nep: "Social-emotional learning" },
            { element: "21st-century skills", nep: "Critical thinking & creativity" }
        ],
        whyChoose: [
            "Aligned with NEP 2020 & national/international Board expectations",
            "Based on international leadership standards",
            "Practical and context-relevant",
            "Builds future-ready school facilitators"
        ]
    },
    "school-leadership": {
        title: "Certificate in School Leadership & Management",
        subtitle: "Leading Transformative Schools",
        duration: "5 Full Day Sessions (5 Hours Each)",
        targetGroup: "Coordinators, Principals, Vice Principals, Aspiring Heads",
        focus: "Transformative School Leadership",
        description: "Prepares educators to lead transformative schools aligned with NEP 2020, National and International Board expectations.",
        modules: [
            "Building self-awareness and understanding others",
            "Exploring core leadership principles",
            "Strengthening team-building skills",
            "Developing social and emotional intelligence",
            "Enhancing instructional leadership",
            "Driving quality teaching through professional growth",
            "Growing as an effective administrator",
            "Understanding policies, systems, and operations",
            "Applying acquired competencies in real-world contexts",
            "Transitioning to a transformative leader"
        ],
        certification: [
            "Attend and complete all modules",
            "Submit Capstone project",
            "Complete within one year (Self-paced)"
        ],
        capstone: {
            title: "School Challenge Intervention",
            description: "Participants identify a school challenge, implement an intervention, and evaluate its impact.",
            assessment: ["Action research Presentation", "Goal setting", "Mentor evaluation using criteria-based rubric"]
        },
        alignment: [
            { element: "Distributed leadership", nep: "School complex & collaborative leadership" },
            { element: "Instructional leadership", nep: "Competency-based education" },
            { element: "Data-driven planning", nep: "Evidence-based decision making" },
            { element: "Teacher professional development", nep: "Continuous Professional Development" },
            { element: "School culture", nep: "Inclusive & equitable education" },
            { element: "Community engagement", nep: "School-community partnership" },
            { element: "Digital leadership", nep: "Technology integration" }
        ],
        requirements: [
            "Post Graduate Degree",
            "Minimum 6 years teaching experience",
            "Leadership role preferred"
        ],
        whyChoose: [
            "Aligned with NEP 2020 & CBSE leadership expectations",
            "Based on international leadership standards",
            "Practical and context-relevant",
            "Builds future-ready school leaders"
        ]
    }
};

export default function Courses() {
    const [activeTab, setActiveTab] = useState<"teaching-excellence" | "school-leadership">("teaching-excellence");
    const [openModules, setOpenModules] = useState(false);

    const program = programs[activeTab];

    return (
        <div className="min-h-screen flex flex-col bg-neutral-light">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-primary-dark text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">
                            Programme <span className="text-accent-gold">Pathways</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                            Empowering educators and leaders with skills for the future.
                        </p>
                    </motion.div>
                </div>
            </section>

            <main className="flex-grow">
                <Section>
                    {/* Tabs */}
                    <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
                        <button
                            onClick={() => { setActiveTab("teaching-excellence"); setOpenModules(false); }}
                            className={cn(
                                "px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 border flex items-center justify-center gap-3",
                                activeTab === "teaching-excellence"
                                    ? "bg-primary-dark text-white border-primary-dark shadow-xl scale-105"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-primary-dark hover:text-primary-dark"
                            )}
                        >
                            <BookOpen size={24} className={activeTab === "teaching-excellence" ? "text-accent-gold" : ""} />
                            Teaching Excellence
                        </button>
                        <button
                            onClick={() => { setActiveTab("school-leadership"); setOpenModules(false); }}
                            className={cn(
                                "px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 border flex items-center justify-center gap-3",
                                activeTab === "school-leadership"
                                    ? "bg-primary-dark text-white border-primary-dark shadow-xl scale-105"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-primary-dark hover:text-primary-dark"
                            )}
                        >
                            <Award size={24} className={activeTab === "school-leadership" ? "text-accent-gold" : ""} />
                            School Leadership
                        </button>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100"
                        >
                            {/* Header */}
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
                                    {program.title}
                                </h2>
                                <p className="text-xl text-accent-gold font-medium mb-6 uppercase tracking-wider">
                                    {program.subtitle}
                                </p>
                                <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                                    {program.description}
                                </p>
                            </div>

                            {/* Key Details Grid */}
                            <div className="grid md:grid-cols-3 gap-6 mb-16">
                                <div className="bg-neutral-light p-6 rounded-2xl flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-xl text-accent-gold shadow-sm">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary-dark mb-1">Duration</h4>
                                        <p className="text-gray-600 text-sm">{program.duration}</p>
                                    </div>
                                </div>
                                <div className="bg-neutral-light p-6 rounded-2xl flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-xl text-accent-gold shadow-sm">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary-dark mb-1">Target Group</h4>
                                        <p className="text-gray-600 text-sm">{program.targetGroup}</p>
                                    </div>
                                </div>
                                <div className="bg-neutral-light p-6 rounded-2xl flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-xl text-accent-gold shadow-sm">
                                        <Target size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary-dark mb-1">Focus</h4>
                                        <p className="text-gray-600 text-sm">{program.focus}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 mb-16">
                                {/* Modules Accordion */}
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-2xl font-bold text-primary-dark flex items-center gap-3">
                                            <Layout className="text-accent-gold" />
                                            Program Modules
                                        </h3>
                                        <button
                                            onClick={() => setOpenModules(!openModules)}
                                            className="text-sm font-semibold text-accent-gold hover:text-accent-gold-dark transition-colors"
                                        >
                                            {openModules ? "Collapse All" : "Expand Details"}
                                        </button>
                                    </div>
                                    <div className="bg-neutral-light rounded-2xl p-2 border border-gray-100">
                                        {program.modules.map((mod, idx) => (
                                            <div key={idx} className="border-b border-gray-200 last:border-0">
                                                <div className="p-4 flex items-start gap-3">
                                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-dark text-white text-xs flex items-center justify-center font-bold mt-0.5">
                                                        {idx + 1}
                                                    </span>
                                                    <span className="text-gray-700 font-medium">{mod}</span>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="p-4 bg-primary-dark/5 rounded-b-xl text-center">
                                            <p className="text-sm text-gray-500 italic">
                                                *Each topic can be taken as a standalone session.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Certification & Requirements */}
                                <div className="space-y-8">
                                    <div className="bg-primary-dark text-white rounded-2xl p-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                                        <h3 className="text-xl font-heading font-bold mb-6 flex items-center gap-2 text-white">
                                            <GraduationCap className="text-accent-gold" />
                                            Diploma Requirements
                                        </h3>
                                        <ul className="space-y-4 relative z-10">
                                            {program.certification.map((req, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircle2 className="text-accent-gold flex-shrink-0" size={20} />
                                                    <span className="text-gray-200">{req}</span>
                                                </li>
                                            ))}
                                            {activeTab === "school-leadership" && program.requirements && (
                                                <>
                                                    <div className="border-t border-white/10 my-4"></div>
                                                    <p className="font-bold text-accent-gold mb-2">Admission Criteria:</p>
                                                    {program.requirements.map((req, idx) => (
                                                        <li key={`req-${idx}`} className="flex items-start gap-3">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 flex-shrink-0"></div>
                                                            <span className="text-gray-200">{req}</span>
                                                        </li>
                                                    ))}
                                                </>
                                            )}
                                        </ul>
                                    </div>

                                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                                        <h3 className="text-xl font-heading font-bold mb-4 text-primary-dark">
                                            Capstone Project
                                        </h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {program.capstone.description}
                                        </p>
                                        <div className="bg-neutral-light rounded-xl p-5">
                                            <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-3">Assessment Metrics</h4>
                                            <ul className="space-y-2">
                                                {program.capstone.assessment.map((item, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-gray-700 font-medium">
                                                        <CheckCircle2 size={16} className="text-green-500" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Alignment Table */}
                            <div className="mb-16">
                                <h3 className="text-2xl font-bold text-primary-dark mb-8 text-center">
                                    NEP 2020 & Board Alignment
                                </h3>
                                <div className="overflow-x-auto bg-white rounded-xl border border-gray-200 shadow-sm">
                                    <table className="w-full text-left">
                                        <thead className="bg-neutral-light text-gray-500 uppercase text-xs font-bold tracking-wider">
                                            <tr>
                                                <th className="px-6 py-4">Key Area / Element</th>
                                                <th className="px-6 py-4">NEP 2020 Alignment</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            {program.alignment.map((row, idx) => (
                                                <tr key={idx} className="hover:bg-neutral-50 transition-colors">
                                                    <td className="px-6 py-4 text-gray-800 font-medium">{row.element}</td>
                                                    <td className="px-6 py-4 text-primary-dark font-semibold bg-primary-dark/5">
                                                        {row.nep}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Why Choose & CTA */}
                            <div className="bg-primary-dark rounded-[2rem] p-8 md:p-12 text-center text-white relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <div className="relative z-10 max-w-4xl mx-auto">
                                    <h3 className="text-3xl font-heading font-bold mb-8 text-white">Why Choose This Programme?</h3>
                                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-10 text-left">
                                        {program.whyChoose.map((point, idx) => (
                                            <div key={idx} className="flex items-start gap-4">
                                                <div className="bg-accent-gold/20 p-2 rounded-lg text-accent-gold">
                                                    <CheckCircle2 size={20} />
                                                </div>
                                                <span className="text-lg text-gray-100 font-medium">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Button variant="primary" size="lg" className="shadow-2xl hover:scale-105 transition-transform" icon={<ArrowRight />}>
                                        Apply Now
                                    </Button>
                                </div>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
