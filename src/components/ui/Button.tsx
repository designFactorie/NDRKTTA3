import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
    size?: "sm" | "md" | "lg";
    href?: string;
    icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", href, icon, children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none tracking-wide";

        const variants = {
            primary: "bg-primary-dark text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 border border-transparent",
            secondary: "bg-gradient-to-r from-accent-gold to-accent-gold-light text-primary-dark font-bold hover:shadow-lg hover:shadow-accent-gold/40 hover:-translate-y-0.5 border border-transparent",
            outline: "border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white",
            ghost: "text-primary-dark hover:bg-neutral-light",
            glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/40 shadow-sm",
        };

        const sizes = {
            sm: "px-5 py-2 text-sm",
            md: "px-7 py-3 text-base",
            lg: "px-10 py-4 text-lg",
        };

        const classes = cn(baseStyles, variants[variant], sizes[size], className);

        if (href) {
            return (
                <Link to={href} className={classes}>
                    {children}
                    {icon && <span className="ml-1">{icon}</span>}
                </Link>
            );
        }

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.98 }}
                className={classes}
                {...(props as any)}
            >
                {children}
                {icon && <span className="ml-1">{icon}</span>}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export default Button;
