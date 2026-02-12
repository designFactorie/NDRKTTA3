import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

const footerLinks = {
    quickLinks: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Admissions", path: "/admissions" },
        { name: "Blog", path: "/blog" },
        { name: "Alumni Network", path: "/alumni" },
    ],
    programs: [
        { name: "Montessori Training", path: "/courses/montessori" },
        { name: "Pre-Primary Training", path: "/courses/pre-primary" },
        { name: "Primary Training", path: "/courses/primary" },
        { name: "Diploma in Education", path: "/courses/diploma" },
    ],
    resources: [
        { name: "Download Brochure", path: "/resources/brochure" },
        { name: "Sample Syllabus", path: "/resources/syllabus" },
        { name: "Success Stories", path: "/stories" },
        { name: "Career Support", path: "/career" },
    ],
};

const SocialIcon = ({ icon: Icon, href }: { icon: any; href: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-white/10 rounded-full hover:bg-accent-gold hover:text-white transition-all duration-300"
    >
        <Icon size={20} />
    </a>
);

export default function Footer() {
    return (
        <footer className="bg-primary-dark text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-heading font-bold mb-4">NDRK Teacher Training Academy</h2>
                        <p className="text-gray-300 mb-6 max-w-sm">
                            Empowering the next generation of educators with world-class training, practical skills, and global certification.
                        </p>
                        <div className="flex items-center gap-2 text-accent-gold mb-6">
                            <CheckCircle size={20} />
                            <span className="font-medium">Google Rated 4.9/5 stars</span>
                        </div>
                        <div className="flex gap-4">
                            <SocialIcon icon={Facebook} href="#" />
                            <SocialIcon icon={Instagram} href="#" />
                            <SocialIcon icon={Linkedin} href="#" />
                            <SocialIcon icon={Youtube} href="#" />
                            <SocialIcon icon={Twitter} href="#" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b-2 border-accent-gold inline-block pb-1">Quick Links</h3>
                        <ul className="space-y-3">
                            {footerLinks.quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-300 hover:text-accent-gold transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b-2 border-accent-gold inline-block pb-1">Programs</h3>
                        <ul className="space-y-3">
                            {footerLinks.programs.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-300 hover:text-accent-gold transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 border-b-2 border-accent-gold inline-block pb-1">Contact Us</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li>
                                <p className="font-medium text-white">NDRK Teacher Training Academy</p>
                                <p>123 Education Lane,</p>
                                <p>Bangalore, Karnataka 560001</p>
                            </li>
                            <li>
                                <p className="font-medium text-white">Phone</p>
                                <a href="tel:+919876543210" className="hover:text-accent-gold">+91 98765 43210</a>
                            </li>
                            <li>
                                <p className="font-medium text-white">Email</p>
                                <a href="mailto:admissions@ndrk.edu" className="hover:text-accent-gold">admissions@ndrk.edu</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>© 2024 NDRK Teacher Training Academy. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                        <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                    <p className="flex items-center gap-1">
                        Made with <span className="text-red-500">❤️</span> in Bangalore
                    </p>
                </div>
            </div>
        </footer>
    );
}
