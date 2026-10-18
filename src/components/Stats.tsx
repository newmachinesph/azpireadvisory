"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Clients Served",
    description: "Businesses trust us with their finances",
  },
  {
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Combined expertise in financial services",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention",
    description: "Clients who continue working with us",
  },
  {
    value: 50,
    suffix: "M+",
    label: "AED Managed",
    description: "In total client finances managed annually",
  },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(increment * currentStep));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#D2A651]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#050A30]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="inline-block rounded-full bg-[#D2A651]/10 px-4 py-1.5 text-sm font-semibold text-[#D2A651] mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#050A30] sm:text-4xl lg:text-5xl">
            Numbers That <span className="text-[#D2A651]">Speak</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our track record demonstrates our commitment to excellence and the
            trust our clients place in us.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:ring-[#D2A651]/30 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#D2A651]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Stat value */}
                <div className="text-4xl sm:text-5xl font-bold text-[#050A30] mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    inView={isInView}
                  />
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-[#D2A651] mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-sm text-gray-500">{stat.description}</div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D2A651] to-[#e4c17a] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500 mb-6">
            Trusted partners and certifications
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {/* Xero Partner */}
            <div className="relative h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/certificates/xero-bronze-partner-logo-RGB-1-scaled-removebg-preview.png"
                alt="Xero Bronze Partner"
                fill
                className="object-contain"
              />
            </div>

            {/* QuickBooks */}
            <div className="relative h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/certificates/QB-Online2X_7561-1-removebg-preview.png"
                alt="QuickBooks Online Certified"
                fill
                className="object-contain"
              />
            </div>

            {/* Xero Certified Advisor */}
            <div className="relative h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src="/certificates/Xero-L2-1-removebg-preview.png"
                alt="Xero Certified Advisor"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
