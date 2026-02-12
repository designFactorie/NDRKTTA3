export default function TrustMarquee() {
    const logos = [
        "Cambridge Assessment", "Montessori Intl", "National Skill Dev", "Pearson", "British Council",
        "Early Years Alliance", "Global Schools", "Teacher First"
    ];

    return (
        <section className="py-12 bg-white border-y border-gray-100/50">
            <div className="container mx-auto px-6 text-center mb-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                    Trusted by Leading Institutions Worldwide
                </p>
            </div>

            <div className="relative flex overflow-hidden group">
                <div className="flex animate-scroll whitespace-nowrap gap-16 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {[...logos, ...logos].map((logo, i) => (
                        <div key={i} className="text-xl md:text-2xl font-heading font-bold text-primary-dark flex items-center gap-3">
                            <span className="text-3xl">🏛️</span> {logo}
                        </div>
                    ))}
                </div>
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            </div>
        </section>
    );
}
