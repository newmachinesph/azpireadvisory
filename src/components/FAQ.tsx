"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What services does Azpire Advisory offer?",
    answer:
      "We offer comprehensive financial services including Accounting & Bookkeeping, VAT & Corporate Tax compliance, Business Advisory, and CFO Services. Our solutions are tailored specifically for SMEs in the UAE market.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing is customized based on your business size and specific needs. We offer flexible packages starting from monthly retainers. Book a free consultation and we'll provide a transparent quote tailored to your requirements.",
  },
  {
    question: "Do you work with startups and new businesses?",
    answer:
      "Absolutely! We specialize in supporting SMEs at every stage, from company formation and initial setup to scaling operations. Our 'Get Xero for Zero' offer makes it easy for new businesses to get started with professional accounting systems.",
  },
  {
    question: "What accounting software do you use?",
    answer:
      "We are certified partners of both Xero and QuickBooks Online. We'll recommend and implement the best solution for your business needs, and provide full training and ongoing support.",
  },
  {
    question: "How do you ensure compliance with UAE tax regulations?",
    answer:
      "Our team stays current with FTA regulations and UAE tax laws. We handle VAT registration, quarterly returns, corporate tax assessments, and ESR compliance. We maintain a 100% compliance rate for all our clients.",
  },
  {
    question: "Can you help with company formation in the UAE?",
    answer:
      "Yes, we provide guidance on company formation including mainland and freezone options. We help with trade license applications, bank account setup, and ensuring your financial structure is compliant from day one.",
  },
  {
    question: "How quickly can you respond to urgent queries?",
    answer:
      "We pride ourselves on accessibility. Most email queries are answered within 24 hours, and urgent matters can be addressed via WhatsApp for immediate support. Our clients have direct access to their dedicated advisor.",
  },
  {
    question: "What makes Azpire different from larger accounting firms?",
    answer:
      "As a boutique firm, we offer personalized attention that larger firms can't match. You work directly with experienced advisors, not junior staff. We focus on quality over quantity, treating each client as a true partner in their financial journey.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block rounded-full bg-[#D2A651]/10 px-4 py-1.5 text-sm font-semibold text-[#D2A651] mb-4">
            FAQ
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#050A30] sm:text-4xl">
            Frequently Asked <span className="text-[#D2A651]">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left rounded-2xl p-6 transition-all duration-300 ${
                  openIndex === index
                    ? "bg-[#050A30] shadow-xl"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className={`font-semibold text-lg ${
                      openIndex === index ? "text-white" : "text-[#050A30]"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <ChevronDownIcon
                    className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-[#D2A651]"
                        : "text-gray-400"
                    }`}
                  />
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p
                    className={`mt-4 leading-relaxed ${
                      openIndex === index ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-[#050A30] to-[#0a1454]"
        >
          <p className="text-white text-lg mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:start@azpireadvisory.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#050A30] font-semibold rounded-xl hover:bg-gray-100 transition-colors"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Us
            </a>
            <a
              href="https://wa.me/971524492816"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D2A651] text-[#050A30] font-semibold rounded-xl hover:bg-[#e4c17a] transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
