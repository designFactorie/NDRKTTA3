import Section from "@/components/ui/Section";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Montessori Director",
        image: "https://i.pravatar.cc/150?u=sarah",
        text: "The training I received was transformative. I learned not just how to teach, but how to connect with students on a deeper level.",
        rating: 5,
    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "Primary School Teacher",
        image: "https://i.pravatar.cc/150?u=priya",
        text: "NDRK's curriculum is perfectly aligned with modern teaching standards. It gave me the confidence to handle a diverse classroom.",
        rating: 5,
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Special Education Needs Coordinator",
        image: "https://i.pravatar.cc/150?u=michael",
        text: "The practical workshops were a game-changer. Real-world scenarios helped me prepare for the actual challenges of teaching.",
        rating: 5,
    },
    {
        id: 4,
        name: "Emily Davis",
        role: "Early Childhood Educator",
        image: "https://i.pravatar.cc/150?u=emily",
        text: "I loved the focus on child psychology. Understanding the 'why' behind student behavior has made me a much more effective teacher.",
        rating: 4,
    },
    {
        id: 5,
        name: "Arjun Singh",
        role: "High School Math Teacher",
        image: "https://i.pravatar.cc/150?u=arjun",
        text: "The mentorship program is fantastic. Having guidance from experienced educators made my transition into teaching smooth.",
        rating: 5,
    },
    {
        id: 6,
        name: "Jessica Lee",
        role: "Art Teacher",
        image: "https://i.pravatar.cc/150?u=jessica",
        text: "Creativity is at the heart of their training. I learned how to make every lesson engaging and fun for my students.",
        rating: 5,
    },
];

const MarqueeRow = ({ items, direction = "left", speed = 50 }: { items: typeof testimonials, direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="flex overflow-hidden relative w-full py-4">
            <motion.div
                className="flex gap-8 flex-nowrap"
                initial={{ x: direction === "left" ? 0 : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : 0 }}
                transition={{
                    ease: "linear",
                    duration: speed,
                    repeat: Infinity,
                }}
            >
                {[...items, ...items].map((item, idx) => (
                    <div
                        key={`${item.id}-${idx}`}
                        className="w-[350px] flex-shrink-0 bg-white/60 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-accent-gold"
                            />
                            <div>
                                <h4 className="font-heading font-bold text-primary-dark text-lg leading-tight">{item.name}</h4>
                                <p className="text-xs text-primary/70 uppercase font-medium tracking-wide">{item.role}</p>
                            </div>
                        </div>

                        <div className="mb-3 flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i} className={`text-sm ${i < item.rating ? "text-accent-gold" : "text-gray-300"}`}>★</span>
                            ))}
                        </div>

                        <div className="relative">
                            <Quote size={16} className="absolute -top-2 -left-2 text-accent-gold/20" fill="currentColor" />
                            <p className="text-primary/80 text-sm leading-relaxed relative z-10 pl-2">
                                "{item.text}"
                            </p>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function Testimonials() {
    return (
        <Section className="bg-neutral-light overflow-hidden relative">
            {/* Background blobs for visual interest */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary-dark/5 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4">
                    Alumni <span className="text-gradient-gold">Success Stories</span>
                </h2>
                <p className="text-lg text-primary/70 max-w-2xl mx-auto font-medium">
                    Join a community of educators appearing in top schools worldwide.
                </p>
            </div>

            <div className="relative z-10 space-y-8">
                <MarqueeRow items={testimonials.slice(0, 3)} direction="left" speed={30} />
                <MarqueeRow items={testimonials.slice(3, 6)} direction="right" speed={35} />
            </div>
        </Section>
    );
}
