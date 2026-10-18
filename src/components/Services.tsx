"use client";

import { motion } from "framer-motion";
import {
  CalculatorIcon,
  DocumentTextIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    name: "Accounting Services",
    description:
      "Comprehensive bookkeeping, financial reporting, and accounting solutions that give you complete visibility into your business performance.",
    icon: CalculatorIcon,
    features: [
      "Monthly bookkeeping",
      "Financial statements",
      "Cash flow management",
      "Accounts payable/receivable",
    ],
  },
  {
    name: "Tax Compliance",
    description:
      "Navigate UAE tax regulations with confidence. We ensure full compliance while optimizing your tax position legally and ethically.",
    icon: DocumentTextIcon,
    features: [
      "VAT registration & filing",
      "Corporate tax planning",
      "Tax return preparation",
      "Audit support",
    ],
  },
  {
    name: "Business Advisory",
    description:
      "Strategic guidance to help your business grow. From financial planning to operational efficiency, we're your trusted advisors.",
    icon: ChartBarIcon,
    features: [
      "Financial forecasting",
      "Business planning",
      "Growth strategy",
      "Risk assessment",
    ],
  },
  {
    name: "Company Formation",
    description:
      "Seamless business setup in UAE. We handle all the paperwork so you can focus on building your dream business.",
    icon: BuildingOfficeIcon,
    features: [
      "Free zone setup",
      "Mainland licenses",
      "Offshore companies",
      "Trade license renewal",
    ],
  },
  {
    name: "Payroll Management",
    description:
      "Accurate and timely payroll processing that keeps your team happy and your business compliant with labor laws.",
    icon: CurrencyDollarIcon,
    features: [
      "Salary processing",
      "WPS compliance",
      "End of service benefits",
      "Leave management",
    ],
  },
  {
    name: "Audit & Assurance",
    description:
      "Independent verification of your financial statements to build trust with stakeholders and meet regulatory requirements.",
    icon: ClipboardDocumentCheckIcon,
    features: [
      "Statutory audits",
      "Internal audits",
      "Due diligence",
      "Compliance reviews",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 triangle-pattern opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D2A651]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#050A30]/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full bg-[#D2A651]/10 px-4 py-1.5 text-sm font-semibold text-[#D2A651] mb-4">
            Our Services
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#050A30] sm:text-4xl lg:text-5xl">
            Comprehensive Financial{" "}
            <span className="text-[#D2A651]">Solutions</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From day-to-day accounting to strategic advisory, we provide
            end-to-end financial services that empower your business to thrive.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              className="group relative flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:ring-[#D2A651]/30 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#050A30] to-[#0a1454] shadow-lg group-hover:from-[#D2A651] group-hover:to-[#e4c17a] transition-all duration-300">
                <service.icon className="h-7 w-7 text-[#D2A651] group-hover:text-[#050A30] transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#050A30] group-hover:text-[#D2A651] transition-colors">
                {service.name}
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="mt-6 space-y-3 flex-1">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-[#D2A651]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn more link */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#050A30] group-hover:text-[#D2A651] transition-colors"
                >
                  Learn more
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                </a>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 h-20 w-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute -right-10 -top-10 h-20 w-20 rotate-45 bg-gradient-to-br from-[#D2A651]/10 to-transparent group-hover:from-[#D2A651]/20 transition-colors" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Not sure which service you need? Let&apos;s discuss your requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#050A30] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#0a1454] hover:shadow-xl hover:scale-105"
          >
            Get a Free Consultation
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
