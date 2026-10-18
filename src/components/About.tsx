"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const values = [
  {
    title: "Integrity",
    description:
      "We operate with complete transparency and honesty in all our dealings.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description:
      "We deliver exceptional quality in every service and interaction.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Growth",
    description:
      "We're committed to helping our clients achieve their financial goals.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Partnership",
    description:
      "We work alongside our clients as trusted advisors, not just service providers.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 triangle-pattern opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main visual */}
              <div className="relative rounded-2xl bg-[#050A30] p-8 overflow-hidden">
                {/* Decorative triangles */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
                  <svg viewBox="0 0 100 100" className="h-full w-full">
                    <polygon points="100,0 100,100 0,100" fill="#D2A651" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-24 h-24 opacity-20">
                  <svg viewBox="0 0 100 100" className="h-full w-full">
                    <polygon points="0,100 0,0 100,0" fill="#D2A651" />
                  </svg>
                </div>

                {/* Logo and tagline */}
                <div className="relative text-center py-12">
                  <div className="flex justify-center mb-8">
                    <div className="relative w-32 h-32 animate-float">
                      <Image
                        src="/logo.webp"
                        alt="Azpire Advisory Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">AZPIRE</h3>
                  <p className="text-[#D2A651] tracking-[0.3em] text-sm">
                    ADVISORY
                  </p>
                  <div className="mt-8 text-gray-300">
                    <p className="text-lg font-medium">
                      ACCOUNTING . TAX . ADVISORY
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -right-8 top-1/4 rounded-xl bg-white p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-[#D2A651]/10 flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-[#D2A651]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#050A30]">
                      Licensed & Certified
                    </p>
                    <p className="text-xs text-gray-500">UAE Approved</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -left-8 bottom-1/4 rounded-xl bg-white p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-[#050A30]/10 flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-[#050A30]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#050A30]">
                      15+ Years
                    </p>
                    <p className="text-xs text-gray-500">Combined Experience</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-[#D2A651]/10 px-4 py-1.5 text-sm font-semibold text-[#D2A651] mb-4">
              About Azpire
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#050A30] sm:text-4xl lg:text-5xl">
              Your Trusted{" "}
              <span className="text-[#D2A651]">Financial Partner</span>
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-gray-600">
              <p>
                Founded with a vision to transform how SMEs manage their
                finances, Azpire Advisory combines deep expertise with a
                personal touch that larger firms simply can&apos;t match. Based in Dubai, we understand the unique challenges and
                opportunities that businesses face in the UAE market.
              </p>
              <p>
                Our team of qualified accountants, tax specialists, and business advisors
                work together to deliver comprehensive solutions that drive
                real results—accessible, transparent, and tailored to your
                specific needs.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-start gap-3 rounded-xl p-4 transition-colors hover:bg-[#050A30]/5"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#D2A651]/10 text-[#D2A651] group-hover:bg-[#D2A651] group-hover:text-white transition-colors">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#050A30]">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-500">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#050A30] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#0a1454] hover:shadow-xl"
              >
                Meet Our Team
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
