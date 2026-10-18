"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certifications = [
    {
        name: "Xero Bronze Partner",
        logo: "/certificates/xero-bronze-partner-logo-RGB-1-scaled-removebg-preview.png"
    },
    {
        name: "Xero Certified Advisor",
        logo: "/certificates/Xero-L2-1-removebg-preview.png"
    },
    {
        name: "QuickBooks Online Certified",
        logo: "/certificates/QB-Online2X_7561-1-removebg-preview.png"
    },
    {
        name: "Migration Specialist",
        logo: "/certificates/Migration-specialist-1-removebg-preview.png"
    },
    {
        name: "Payroll Specialist",
        logo: "/certificates/Payroll-specialist-removebg-preview.png"
    },
];

export default function Certifications() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-4">
                        Trusted Partners & Certifications
                    </h2>
                    <p className="text-3xl font-bold text-navy">
                        Certified Excellence You Can Trust
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl group hover:bg-gold/5 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="relative h-24 w-full mb-4 group-hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={cert.logo}
                                    alt={cert.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-[10px] font-bold text-navy text-center uppercase tracking-wider leading-relaxed">
                                {cert.name}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-navy/70 font-medium text-lg italic max-w-2xl mx-auto">
                        "Our certifications aren't just badges; they're our commitment to delivering the highest standard of financial excellence for your business."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
