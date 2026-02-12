import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function Card({ children, className, hoverEffect = true, ...props }: CardProps) {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -10, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" } : {}}
            className={cn(
                "bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-sm transition-all duration-300",
                className
            )}
            {...(props as any)}
        >
            {children}
        </motion.div>
    );
}
