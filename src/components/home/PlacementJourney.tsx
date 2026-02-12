import Section from "@/components/ui/Section";

export default function PlacementJourney() {
    const steps = [
        { id: 1, title: "Admission", desc: "Easy enrollment" },
        { id: 2, title: "Training", desc: "theory + Practical" },
        { id: 3, title: "Internship", desc: "Live experience" },
        { id: 4, title: "Certification", desc: "Global recognition" },
        { id: 5, title: "Placement", desc: "Join top schools" },
    ];

    return (
        <Section className="bg-primary-dark text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-heading font-bold mb-4">Your Roadmap to Success</h2>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mt-4 mb-12 leading-tight">
                        Five steps to your <span className="text-accent-gold">dream career</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute top-[2.5rem] left-0 w-full h-0.5 bg-gray-700/50 hidden md:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center group">
                                <div className="w-20 h-20 rounded-full bg-primary-dark border-2 border-gray-600 flex items-center justify-center text-2xl font-heading font-bold text-white mb-6 relative z-10 group-hover:border-accent-gold group-hover:scale-110 transition-all duration-300 shadow-xl">
                                    {step.id}
                                </div>
                                <h3 className="text-lg font-heading font-medium text-gray-300 text-center group-hover:text-accent-gold transition-colors">{step.title}</h3>
                                <p className="text-sm text-gray-400 group-hover:text-white transition-colors">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
