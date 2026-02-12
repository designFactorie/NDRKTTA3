import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    id?: string;
    children: React.ReactNode;
}

export default function Section({ className, id, children, ...props }: SectionProps) {
    return (
        <section id={id} className={cn("py-20 md:py-32 relative overflow-hidden", className)} {...props}>
            <div className="container mx-auto px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}
