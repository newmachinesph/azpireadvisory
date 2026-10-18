"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-3xl bg-[#050A30] px-6 py-24 text-center shadow-2xl sm:px-16">
          {/* Background decorations */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D2A651]/10 rounded-full blur-3xl" />
          </div>

          {/* Decorative triangles */}
          <div className="absolute top-0 left-0 w-48 h-48 opacity-10">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <polygon points="0,0 100,0 0,100" fill="#D2A651" />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <polygon points="100,100 0,100 100,0" fill="#D2A651" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D2A651]/30 bg-[#D2A651]/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#D2A651] animate-pulse" />
              <span className="text-sm font-medium text-[#D2A651]">
                Limited Time Offer
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to Transform Your{" "}
              <span className="text-[#D2A651]">Finances?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Get a free 30-minute consultation with our experts. Discover how
              we can help optimize your finances and drive your business
              forward.
            </p>

            {/* Value propositions */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-[#D2A651]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                No obligation
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-[#D2A651]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                100% free
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-[#D2A651]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Expert advice
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#D2A651] px-8 py-4 text-base font-semibold text-[#050A30] shadow-lg transition-all hover:bg-[#e4c17a] hover:shadow-xl hover:scale-105"
              >
                Schedule Free Consultation
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
              <a
                href="tel:+971568268408"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us Now
              </a>
            </div>
          </motion.div>

          {/* Decorative gradient circles */}
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#D2A651]/20 to-transparent blur-2xl" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#D2A651]/20 to-transparent blur-2xl" />
        </div>
      </div>
    </section>
  );
}
