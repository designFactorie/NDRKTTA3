import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { ArrowUpRight, Globe, GraduationCap, Layout, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProgramsShowcase() {
    const programs = [
        {
            title: "Early Childhood Care",
            icon: <Sparkles size={32} />,
            desc: "Nurture young minds with our comprehensive ECCE diploma program.",
            color: "bg-rose-50 text-rose-600",
            link: "/courses?tab=early-childhood"
        },
        {
            title: "Cambridge Certificate",
            icon: <Globe size={32} />,
            desc: "International Certificate in Teaching & Learning (CICTL) for global educators.",
            color: "bg-blue-50 text-blue-600",
            link: "/courses?tab=cambridge-cert"
        },
        {
            title: "Cambridge Diploma",
            icon: <GraduationCap size={32} />,
            desc: "Advanced Diploma in Teaching & Learning (CIDTL) for experienced teachers.",
            color: "bg-purple-50 text-purple-600",
            link: "/courses?tab=cambridge-dip"
        },
        {
            title: "Certificate Courses",
            icon: <Layout size={32} />,
            desc: "Specialized workshops in CBSE, IGCSE, IB, and Design Thinking.",
            color: "bg-amber-50 text-amber-600",
            link: "/courses?tab=certificates"
        },
    ];

    return (
        <Section className="bg-neutral-light">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-6">
                        Explore Our <span className="text-accent-gold">Programs</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We offer a comprehensive range of internationally recognized qualifications designed to meet the evolving needs of the education sector.
                    </p>
                </div>
                <Button variant="outline" className="flex-shrink-0" icon={<ArrowUpRight size={20} />} href="/courses">View All Courses</Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {programs.map((prog, i) => (
                    <Link
                        key={i}
                        to={prog.link}
                        className="group bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-start h-full"
                    >
                        <div className={`w-16 h-16 ${prog.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            {prog.icon}
                        </div>
                        <h3 className="font-heading font-bold text-2xl mb-3 text-primary-dark group-hover:text-accent-gold transition-colors">{prog.title}</h3>
                        <p className="text-gray-500 mb-8 leading-relaxed flex-grow">{prog.desc}</p>

                        <div className="inline-flex items-center gap-2 text-primary-dark font-bold group-hover:gap-4 transition-all mt-auto">
                            Learn More <ArrowUpRight size={18} />
                        </div>
                    </Link>
                ))}
            </div>
        </Section>
    );
}
