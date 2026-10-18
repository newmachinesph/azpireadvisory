"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a free consultation to understand your business needs, challenges, and goals. This helps us tailor our approach specifically for you.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Custom Proposal",
    description:
      "Based on our discussion, we create a tailored service package with transparent pricing. No hidden fees, no surprises – just clarity.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Seamless Onboarding",
    description:
      "We handle all the setup – connecting to your accounting software, gathering documents, and establishing clear communication channels.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Ongoing Excellence",
    description:
      "Enjoy proactive financial management with regular reviews, insights, and recommendations to help your business grow.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#050A30] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D2A651]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#D2A651]/5 rounded-full blur-3xl" />

        {/* Triangle patterns */}
        <div className="absolute inset-0 opacity-5">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="process-triangles" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <polygon points="15,0 30,30 0,30" fill="#D2A651" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#process-triangles)" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-[#D2A651]/20 px-4 py-1.5 text-sm font-semibold text-[#D2A651] mb-4">
            How It Works
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Simple Process,{" "}
            <span className="text-[#D2A651]">Exceptional Results</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Getting started with Azpire Advisory is easy. Our streamlined process
            ensures you can focus on running your business while we handle the
            financial complexities.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="mt-16 sm:mt-20">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 hidden lg:block">
              <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-[#D2A651]/30 to-transparent" />
            </div>

            <div className="grid gap-8 lg:grid-cols-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="group relative flex flex-col items-center text-center">
                    {/* Step number badge */}
                    <div className="relative mb-6">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D2A651] to-[#e4c17a] shadow-lg shadow-[#D2A651]/20 transition-transform group-hover:scale-110">
                        <div className="text-[#050A30]">{step.icon}</div>
                      </div>
                      <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-[#050A30] shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector (hidden on last item and mobile) */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 -right-4 hidden lg:block">
                      <svg
                        className="h-8 w-8 text-[#D2A651]/30"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#D2A651] px-8 py-4 text-base font-semibold text-[#050A30] shadow-lg transition-all hover:bg-[#e4c17a] hover:shadow-xl hover:scale-105"
          >
            Start Your Journey Today
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
        </motion.div>
      </div>
    </section>
  );
}
