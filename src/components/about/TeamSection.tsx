"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const team = [
    {
        name: "Jeanelle Kay Nadado",
        role: "Founder & Managing Director",
        bio: "With over 12 years of experience in accounting and business advisory, Jeanelle leads Azpire with a passion for simplifying financial complexity for SMEs.",
        image: "/team/jeanelle.jpg", // Placeholder or generic icon if not available
    },
    // Add other team members if needed, otherwise keep it boutique as mentioned
];

export default function TeamSection() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base font-bold text-gold tracking-[0.2em] uppercase mb-4">
                        Boutique Excellence
                    </h2>
                    <h3 className="text-4xl font-extrabold text-navy sm:text-5xl">
                        Meet Our <span className="gradient-text">Leadership</span>
                    </h3>
                    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Personal, hands-on, and dedicated. We prioritize quality over quantity to build long-term partnerships based on trust.
                    </p>
                </div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl bg-white rounded-[40px] p-8 lg:p-12 shadow-2xl shadow-navy/5 border border-gold/10 flex flex-col md:flex-row items-center gap-10"
                    >
                        <div className="relative w-48 h-48 flex-shrink-0 group">
                            <div className="absolute inset-0 bg-gold rounded-[32px] rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-navy rounded-[32px] overflow-hidden">
                                {/* Fallback to initials if image not found */}
                                <div className="w-full h-full flex items-center justify-center text-5xl font-black text-gold">
                                    JK
                                </div>
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <h4 className="text-2xl font-black text-navy mb-1">{team[0].name}</h4>
                            <p className="text-gold font-bold uppercase tracking-widest text-sm mb-6">{team[0].role}</p>
                            <p className="text-gray-600 leading-relaxed italic">
                                "{team[0].bio}"
                            </p>
                            <div className="mt-8 flex gap-4 justify-center md:justify-start">
                                <a href="#" className="h-10 w-10 bg-navy/5 rounded-full flex items-center justify-center text-navy hover:bg-gold hover:text-white transition-all">
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
