import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { BookOpen, Award, Clock, CheckCircle2, ChevronRight, Globe, School, Layout, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface CourseData {
    id: string;
    title: string;
    duration: string;
    mode: string;
    description: string;
    modules: string[];
    certification: string;
    icon: React.ReactNode;
}

const courses: Record<string, CourseData[]> = {
    "early-childhood": [
        {
            id: "ecce-diploma",
            title: "Early Childhood Care and Education (ECCE)",
            duration: "1 Year",
            mode: "Online / Offline",
            description: "A comprehensive program designed to equip future educators with the skills to nurture young minds. Focuses on child psychology, health, nutrition, and play-way methodology.",
            modules: ["Child Development & Psychology", "Curriculum Planning for Pre-primary", "Health, Nutrition & Safety", "School Organization & Administration"],
            certification: "NDRK Teacher Training Academy Diploma",
            icon: <span className="text-4xl">🧸</span>
        }
    ],
    "cambridge-cert": [
        {
            id: "cictl",
            title: "Cambridge International Certificate in Teaching and Learning",
            duration: "4 Months",
            mode: "Hybrid",
            description: "Based on the Cambridge Teacher Standards, this qualification helps teachers develop their professional thinking and practice, and enhance the quality of their teaching and learning.",
            modules: ["Understanding Learning", "Teaching for Learning", "Assessment for Learning", "Active Learning Strategies"],
            certification: "Cambridge Assessment International Education",
            icon: <span className="text-4xl">📜</span>
        }
    ],
    "cambridge-dip": [
        {
            id: "cidtl",
            title: "Cambridge International Diploma in Teaching and Learning",
            duration: "1 Year",
            mode: "Hybrid",
            description: "An advanced qualification for experienced teachers. It focuses on developing the candidate's understanding of the principles of teaching and learning and their ability to reflect on and improve their practice.",
            modules: ["Teaching & Learning in Action", "Developing Professional Practice", "Reflective Practice", "Educational Research"],
            certification: "Cambridge Assessment International Education",
            icon: <span className="text-4xl">🎓</span>
        }
    ],
    "certificates": [
        {
            id: "curr-cbse",
            title: "Curriculum Specific Instructional Planning (CBSE)",
            duration: "Short Term",
            mode: "Online / Workshop",
            description: "Master the art of lesson planning and instructional design specifically tailored for the CBSE curriculum framework.",
            modules: ["CBSE Learning Outcomes", "Lesson Plan Structure", "Assessment Strategies", "NCF Guidelines"],
            certification: "Certificate of Completion",
            icon: <School className="w-10 h-10 text-accent-gold" />
        },
        {
            id: "curr-igcse",
            title: "Curriculum Specific Instructional Planning (IGCSE)",
            duration: "Short Term",
            mode: "Online / Workshop",
            description: "Learn to design effective learning experiences aligned with the Cambridge IGCSE curriculum standards.",
            modules: ["Cambridge Learner Attributes", "Syllabus Interpretation", "Active Learning in IGCSE", "Past Paper Analysis"],
            certification: "Certificate of Completion",
            icon: <Globe className="w-10 h-10 text-accent-gold" />
        },
        {
            id: "curr-ib",
            title: "Curriculum Specific Instructional Planning (IB)",
            duration: "Short Term",
            mode: "Online / Workshop",
            description: "Understand the inquiry-based approach of the International Baccalaureate (IB) and how to plan units of inquiry.",
            modules: ["IB Learner Profile", "Inquiry Cycles", "Transdisciplinary Themes", "Approaches to Learning (ATL)"],
            certification: "Certificate of Completion",
            icon: <Layout className="w-10 h-10 text-accent-gold" />
        },
        {
            id: "intl-curr",
            title: "Understanding International Curriculum",
            duration: "Short Term",
            mode: "Online / Workshop",
            description: "A broad overview of global education standards and practices, comparing various international curricula.",
            modules: ["Global Education Trends", "Comparative Curriculum Analysis", "Cultural Sensitivity", "21st Century Skills"],
            certification: "Certificate of Completion",
            icon: <BookOpen className="w-10 h-10 text-accent-gold" />
        },
        {
            id: "design-thinking",
            title: "Design Thinking in Schools",
            duration: "Short Term",
            mode: "Workshop",
            description: "Empower educators to use design thinking methodology to solve classroom challenges and foster creativity in students.",
            modules: ["Empathy & Definition", "Ideation Techniques", "Prototyping Solutions", "Testing & Iteration"],
            certification: "Certificate of Completion",
            icon: <Lightbulb className="w-10 h-10 text-accent-gold" />
        }
    ]
};

const categories = [
    { id: "early-childhood", label: "Early Childhood Care" },
    { id: "cambridge-cert", label: "Cambridge Certificate" },
    { id: "cambridge-dip", label: "Cambridge Diploma" },
    { id: "certificates", label: "Certificate Courses" },
];

export default function Courses() {
    const [activeTab, setActiveTab] = useState("early-childhood");

    return (
        <div className="min-h-screen flex flex-col bg-neutral-light">
            <Navbar />

            {/* Hero Header */}
            <section className="relative pt-32 pb-20 bg-primary-dark text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">
                        Our <span className="text-accent-gold">Programs</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                        World-class qualifications for every stage of your teaching career.
                    </p>
                </div>
            </section>

            <main className="flex-grow">
                <Section>
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={cn(
                                    "px-6 py-3 rounded-full text-base md:text-lg font-medium transition-all duration-300 border",
                                    activeTab === cat.id
                                        ? "bg-primary-dark text-white border-primary-dark shadow-lg scale-105"
                                        : "bg-white text-gray-600 border-gray-200 hover:border-primary-dark hover:text-primary-dark"
                                )}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Courses Grid */}
                    <div className="grid gap-8">
                        {courses[activeTab].map((course) => (
                            <div
                                key={course.id}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="md:col-span-2">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="bg-neutral-50 p-3 rounded-xl text-4xl border border-gray-100 group-hover:bg-accent-gold/10 transition-colors">
                                                {course.icon}
                                            </div>
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider">
                                                <CheckCircle2 size={14} /> Admissions Open
                                            </span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors">
                                            {course.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {course.description}
                                        </p>

                                        <div className="flex flex-wrap gap-6 mb-8">
                                            <div className="flex items-center gap-2 text-gray-700 font-medium">
                                                <Clock size={18} className="text-accent-gold" />
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-700 font-medium">
                                                <BookOpen size={18} className="text-accent-gold" />
                                                <span>{course.mode}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-700 font-medium">
                                                <Award size={18} className="text-accent-gold" />
                                                <span>{course.certification}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-neutral-light rounded-xl p-6 border border-gray-100 flex flex-col justify-between">
                                        <div>
                                            <h4 className="font-bold text-primary-dark mb-4 border-b border-gray-200 pb-2">Key Modules</h4>
                                            <ul className="space-y-3 mb-8">
                                                {course.modules.map((mod, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-gold flex-shrink-0" />
                                                        {mod}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="space-y-3">
                                            <Button variant="primary" className="w-full justify-between group-hover:bg-accent-gold group-hover:text-primary-dark transition-colors">
                                                View Details <ChevronRight size={18} />
                                            </Button>
                                            <button className="w-full text-center text-sm font-semibold text-gray-500 hover:text-primary-dark transition-colors">
                                                Download Syllabus
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
