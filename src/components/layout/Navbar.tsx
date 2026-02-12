import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
];

interface NavbarProps {
    variant?: "light" | "dark";
}

export default function Navbar({ variant = "dark" }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Determine text color based on variant and scroll state
    // Light variant (Home): Dark text initially
    // Dark variant (Inner pages): White text initially
    const isDarkText = isScrolled || variant === "light";

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "glass-panel bg-white/90 py-3 shadow-md"
                        : "bg-transparent py-5"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className={cn(
                            "p-2.5 rounded-xl transition-all duration-300",
                            isScrolled
                                ? "bg-primary-dark text-white"
                                : variant === "light"
                                    ? "bg-primary-dark/5 text-primary-dark backdrop-blur-sm group-hover:bg-primary-dark group-hover:text-white"
                                    : "bg-white/10 text-white backdrop-blur-sm group-hover:bg-white group-hover:text-primary-dark"
                        )}>
                            <GraduationCap size={26} />
                        </div>
                        <div className="flex flex-col">
                            <span className={cn(
                                "text-2xl font-bold font-heading leading-none tracking-tight transition-colors duration-300",
                                isDarkText ? "text-primary-dark" : "text-white"
                            )}>
                                NDRK
                            </span>
                            <span className={cn(
                                "text-[8px] font-bold uppercase tracking-[0.1em] transition-colors duration-300",
                                isDarkText ? "text-accent-gold-dark" : "text-white/80"
                            )}>
                                Teacher Training Academy
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    "text-sm font-semibold transition-all duration-300 relative py-1",
                                    location.pathname === link.path
                                        ? "text-accent-gold"
                                        : isDarkText
                                            ? "text-primary-dark hover:text-accent-gold"
                                            : "text-white hover:text-white/80"
                                )}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.span
                                        layoutId="underline"
                                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-accent-gold"
                                    />
                                )}
                            </Link>
                        ))}
                        <Button
                            variant={isScrolled ? "primary" : (variant === "light" ? "primary" : "secondary")}
                            size="sm"
                            className="ml-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                        >
                            Apply Now
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={28} className={isDarkText ? "text-primary-dark" : "text-white"} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
                        className="fixed inset-0 z-[60] bg-neutral-light flex flex-col"
                    >
                        <div className="p-6 flex justify-end">
                            <button
                                className="p-2 text-primary-dark hover:text-accent-red transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X size={32} />
                            </button>
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        className={cn(
                                            "text-3xl font-heading font-bold transition-colors hover:text-accent-gold",
                                            location.pathname === link.path ? "text-accent-gold" : "text-primary-dark"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Button variant="primary" size="lg" className="mt-4 w-full px-12 shadow-xl">
                                    Start Your Journey
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
