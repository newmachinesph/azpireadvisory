"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    content:
      "Azpire Advisory transformed our financial operations. Their proactive approach to tax planning saved us over 20% on our annual tax bill. Highly recommended for any growing SME.",
    author: "Ahmed Hassan",
    role: "CEO",
    company: "TechVenture Dubai",
    rating: 5,
  },
  {
    content:
      "As a startup founder, I was overwhelmed with compliance requirements. Azpire made everything simple and stress-free. They're not just accountants – they're true business partners.",
    author: "Sarah Mitchell",
    role: "Founder",
    company: "Bloom Marketing Agency",
    rating: 5,
  },
  {
    content:
      "The team's expertise in UAE tax regulations is exceptional. They guided us through corporate tax implementation smoothly and ensured we were fully compliant from day one.",
    author: "Michael Chen",
    role: "CFO",
    company: "Global Trade Solutions",
    rating: 5,
  },
  {
    content:
      "We've worked with several accounting firms before, but Azpire stands out for their responsiveness and attention to detail. They truly understand SME challenges.",
    author: "Fatima Al-Rashid",
    role: "Managing Director",
    company: "Desert Rose Hospitality",
    rating: 5,
  },
  {
    content:
      "From company formation to ongoing accounting support, Azpire has been with us every step of the way. Their guidance was invaluable during our expansion phase.",
    author: "James Wilson",
    role: "Owner",
    company: "Wilson Consulting DMCC",
    rating: 5,
  },
  {
    content:
      "The monthly financial reports and insights we receive have completely changed how we make business decisions. Azpire turned our numbers into actionable strategies.",
    author: "Priya Sharma",
    role: "Operations Director",
    company: "Innovate Tech LLC",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-gray-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D2A651]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#050A30]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="inline-block rounded-full bg-[#D2A651]/10 px-4 py-1.5 text-sm font-semibold text-[#D2A651] mb-4">
            Client Stories
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#050A30] sm:text-4xl lg:text-5xl">
            What Our Clients <span className="text-[#D2A651]">Say</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don&apos;t just take our word for it. Here&apos;s what business owners across
            Dubai have to say about working with Azpire Advisory.
          </p>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative rounded-3xl bg-[#050A30] p-8 lg:p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A651]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#D2A651]/5 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              {/* Quote */}
              <div>
                <svg
                  className="h-12 w-12 text-[#D2A651] mb-6"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
                </svg>
                <blockquote className="text-xl lg:text-2xl font-medium text-white leading-relaxed">
                  {testimonials[activeIndex].content}
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#D2A651] to-[#e4c17a] flex items-center justify-center text-[#050A30] font-bold text-xl">
                    {testimonials[activeIndex].author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonials[activeIndex].author}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[activeIndex].role},{" "}
                      {testimonials[activeIndex].company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col items-center lg:items-end gap-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-6 w-6 text-[#D2A651]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-3 w-3 rounded-full transition-all ${
                        index === activeIndex
                          ? "bg-[#D2A651] w-8"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100 transition-all hover:shadow-xl hover:ring-[#D2A651]/30 ${
                index === activeIndex ? "ring-[#D2A651]/50" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="h-4 w-4 text-[#D2A651]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 leading-relaxed line-clamp-4">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#050A30] to-[#0a1454] flex items-center justify-center text-[#D2A651] font-semibold text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[#050A30] text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>

                          </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
