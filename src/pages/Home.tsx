import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import TransformationStory from "@/components/home/TransformationStory";
import ProgramsShowcase from "@/components/home/ProgramsShowcase";
import PlacementJourney from "@/components/home/PlacementJourney";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar variant="light" />
            <main className="flex-grow">
                <Hero />
                <TransformationStory />
                <ProgramsShowcase />
                <PlacementJourney />
                <Testimonials />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
}
