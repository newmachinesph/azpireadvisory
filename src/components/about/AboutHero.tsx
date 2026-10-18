"use client";

import { motion } from "framer-motion";
import { TriangleGrid, FloatingTriangles } from "../ui/AnimatedTriangles";

export default function AboutHero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-[#050A30] flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050A30] via-[#0a1454] to-[#050A30]" />

        {/* Triangle decorations */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -right-20 w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
        >
          <TriangleGrid variant="light" rows={7} direction="down" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -bottom-32 -left-32 w-[300px] h-[300px] rotate-180"
        >
          <TriangleGrid variant="gold" rows={5} direction="down" />
        </motion.div>

        <FloatingTriangles variant="mixed" count={6} />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D2A651]/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-40 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#D2A651]/30 bg-[#D2A651]/10 px-4 py-2 mb-6"
            >
              <span className="text-sm font-medium text-[#D2A651]">About Us</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight"
            >
              Empowering SMEs to <br />
              <span className="gradient-text">Aspire Higher</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-xl leading-relaxed text-gray-300 font-medium"
            >
              We are more than accountants. We are strategic partners dedicated to simplifying
              complexity and building sustainable financial structures that drive your business forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-8"
            >
              {[
                { value: "500+", label: "Clients Served" },
                { value: "10+", label: "Years Experience" },
                { value: "100%", label: "Compliance Rate" },
                { value: "24/7", label: "Support Available" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-[#D2A651]">{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D2A651]/20 via-transparent to-[#D2A651]/20 rounded-3xl blur-xl" />

              <div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-1 backdrop-blur-xl border border-white/10">
                <div className="rounded-xl bg-[#050A30]/80 p-8">
                  {/* Values Display */}
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">Our Philosophy</p>
                      <h3 className="text-2xl font-bold text-white">Simplicity. Clarity.</h3>
                      <h3 className="text-2xl font-bold text-[#D2A651]">Sustainable Growth.</h3>
                    </div>

                    {[
                      { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Integrity First", desc: "Transparent & honest" },
                      { icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", label: "Growth Focused", desc: "Your success is ours" },
                      { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", label: "True Partnership", desc: "We work alongside you" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.15 }}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#D2A651]/20">
                          <svg className="h-6 w-6 text-[#D2A651]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-white">{item.label}</p>
                          <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-4 -right-4 rounded-xl bg-white p-3 shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-green-100 p-2">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-[#050A30]">UAE Certified</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" fill="none" className="w-full h-32" preserveAspectRatio="none">
          <path
            d="M0 200L48 185C96 170 192 140 288 120C384 100 480 90 576 90C672 90 768 100 864 115C960 130 1056 150 1152 145C1248 140 1344 110 1392 95L1440 80V200H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
