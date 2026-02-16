import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col bg-neutral-light">
            <Navbar variant="light" />

            <main className="flex-grow pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Contact Info Panel */}
                        <div className="bg-primary-dark text-white rounded-[2rem] p-10 md:p-14 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                            {/* Decorative Circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent-gold/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>

                            <div className="relative z-10">
                                <h6 className="text-accent-gold font-bold uppercase tracking-widest mb-4">Contact Us</h6>
                                <h1 className="text-5xl md:text-6xl font-heading font-bold mb-8 leading-tight text-white">
                                    Let's Start a <br />Conversation
                                </h1>
                                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                                    Have questions about our programs or admissions? Reach out to us, and our team will get back to you shortly.
                                </p>
                            </div>

                            <div className="space-y-8 relative z-10 mt-12">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-full">
                                        <MapPin className="text-accent-gold" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-white">Visit Us</h4>
                                        <p className="text-gray-300">123 Education Lane, Koramangala<br />Bangalore, Karnataka 560034</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-full">
                                        <Mail className="text-accent-gold" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-white">Email Us</h4>
                                        <p className="text-gray-300 text-lg">admissions@ndrk.edu</p>
                                        <p className="text-gray-400 text-sm">info@ndrk.edu</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-full">
                                        <Phone className="text-accent-gold" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-white">Call Us</h4>
                                        <p className="text-gray-300 text-xl font-medium">+91 98765 43210</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form & Map Panel */}
                        <div className="grid grid-rows-2 gap-6">
                            {/* Contact Form */}
                            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-lg border border-gray-100 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-primary-dark mb-6">Send a Message</h3>
                                <form className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <input type="text" placeholder="Your Name" className="w-full px-5 py-3 rounded-xl bg-neutral-50 border border-gray-200 outline-none focus:ring-2 focus:ring-accent-gold transition-all" />
                                        <input type="email" placeholder="Your Email" className="w-full px-5 py-3 rounded-xl bg-neutral-50 border border-gray-200 outline-none focus:ring-2 focus:ring-accent-gold transition-all" />
                                    </div>
                                    <textarea rows={4} placeholder="How can we help you?" className="w-full px-5 py-3 rounded-xl bg-neutral-50 border border-gray-200 outline-none focus:ring-2 focus:ring-accent-gold transition-all resize-none"></textarea>
                                    <Button variant="primary" className="w-full" icon={<Send size={18} />}>Send Message</Button>
                                </form>
                            </div>

                            {/* Map Embed */}
                            <div className="bg-gray-200 rounded-[2rem] overflow-hidden shadow-inner relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.0!2d77.6!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzYlMjAwLjAiRQ!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: "grayscale(100%) contrast(1.2)" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale hover:grayscale-0 transition-all duration-700"
                                ></iframe>
                                <div className="absolute inset-0 pointer-events-none border-[12px] border-white/30 rounded-[2rem]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
