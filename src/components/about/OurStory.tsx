"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-bold tracking-[0.3em] text-gold uppercase mb-6 block">
              Our Journey
            </span>
            <h2 className="text-4xl font-black tracking-tight text-navy sm:text-5xl leading-[1.1]">
              Simplicity. Clarity. <br />
              <span className="text-gold">Sustainable Growth.</span>
            </h2>

            <div className="mt-10 space-y-8 text-lg text-gray-600 leading-relaxed font-medium">
              <p>
                Azpire Advisory was built on a personal, hands-on philosophy. We believed that
                SMEs deserve the same high-level strategic guidance that large corporations enjoy,
                but with the agility and care of a boutique firm.
              </p>
              <p>
                Under the leadership of <span className="text-navy font-bold">Jeanelle Kay Nadado</span>,
                we've focused on one goal: turning complex numbers into clear, actionable insights.
                We don't just record the past; we help you design your future.
              </p>
              <p>
                From launching our first Xero implementation to managing the compliance of 500+ UAE
                businesses, our commitment to <span className="text-gold font-bold italic">quality over quantity</span>
                remains unchanged.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#D2A651] to-[#e4c17a] flex items-center justify-center text-[#050A30] font-bold text-xl">
                  JN
                </div>
              </div>
              <div>
                <p className="font-semibold text-[#050A30]">Jeanelle Kay Nadado</p>
                <p className="text-sm text-gray-500">Founder & Managing Director</p>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#050A30] aspect-[4/5]">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#050A30] via-[#0a1454] to-[#050A30]" />

              <div className="absolute top-8 right-8 w-32 h-32 border-2 border-[#D2A651]/30 rounded-full" />
              <div className="absolute top-12 right-12 w-24 h-24 border-2 border-[#D2A651]/20 rounded-full" />

              {/* Founder image */}
              <div className="absolute inset-0 flex items-end justify-center">
                <Image
                  src="/lady.png"
                  alt="Jeanelle Kay Nadado"
                  width={280}
                  height={400}
                  className="object-contain object-bottom"
                />
              </div>

              {/* Name badge at bottom */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                  <p className="text-white font-bold">Jeanelle Kay Nadado</p>
                  <p className="text-xs text-[#D2A651]">Founder & Managing Director</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-[#D2A651]/20 flex items-center justify-center">
                  <svg className="h-6 w-6 text-[#D2A651]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#050A30]">Certified Partner</p>
                  <p className="text-xs text-gray-500">Xero & QuickBooks</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
