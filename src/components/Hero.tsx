"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRightIcon, PlayCircleIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { TriangleGrid, FloatingTriangles } from "./ui/AnimatedTriangles";
import Image from "next/image";

const partners = [
  { name: "Xero", logo: "/partners/xero.svg" },
  { name: "QuickBooks", logo: "/partners/quickbooks.svg" },
];

const trustIndicators = [
  "Free Consultation",
  "No Hidden Fees",
  "100% Compliance Guaranteed",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#050A30]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050A30] via-[#0a1454] to-[#050A30]" />

        {/* Triangle grid decoration - top right */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -top-20 -right-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px]"
        >
          <TriangleGrid variant="light" rows={8} direction="down" />
        </motion.div>

        {/* Triangle grid decoration - bottom left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute -bottom-40 -left-40 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rotate-180"
        >
          <TriangleGrid variant="gold" rows={6} direction="down" />
        </motion.div>

        {/* Floating triangles throughout */}
        <FloatingTriangles variant="mixed" count={8} />

        {/* Gold accent glow */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#D2A651]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-[#D2A651]/3 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-8 lg:pt-44 lg:pb-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#D2A651]/30 bg-[#D2A651]/10 px-5 py-2.5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D2A651] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D2A651]" />
              </span>
              <span className="text-sm font-medium text-[#D2A651]">
                Trusted by 500+ SMEs Across the UAE
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05]">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="block"
              >
                Tailored{" "}
                <span className="relative inline-block">
                  <span className="gradient-text">Growth</span>
                  <motion.svg
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute -bottom-2 left-0 w-full h-4"
                    viewBox="0 0 200 12"
                    fill="none"
                  >
                    <motion.path
                      d="M2 8 C50 2, 150 2, 198 8"
                      stroke="#D2A651"
                      strokeWidth="6"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                    />
                  </motion.svg>
                </span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="block text-white"
              >
                For SMEs
              </motion.span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-10 text-xl leading-relaxed text-gray-300 sm:text-2xl max-w-2xl mx-auto lg:mx-0 font-medium"
            >
              Empowering startups and SMEs to grow through{" "}
              <span className="text-gold font-bold">Smart, Simple Accounting</span>.
              We transform your financial complexity into strategic clarity.
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {trustIndicators.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <CheckCircleIcon className="h-5 w-5 text-[#D2A651]" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="group relative flex items-center gap-2 rounded-full bg-[#D2A651] px-8 py-4 text-base font-semibold text-[#050A30] shadow-xl transition-all hover:bg-[#e4c17a] hover:shadow-2xl hover:shadow-[#D2A651]/20 hover:scale-105"
              >
                <span>Get Your Free Consultation</span>
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/solutions"
                className="group flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/40"
              >
                <PlayCircleIcon className="h-5 w-5" />
                <span>Explore Our Solutions</span>
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8"
            >
              {/* Client avatars */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1.1 + i * 0.1 }}
                      className="h-10 w-10 rounded-full border-2 border-[#050A30] bg-gradient-to-br from-[#D2A651] to-[#e4c17a] flex items-center justify-center text-[#050A30] font-semibold text-xs"
                    >
                      {String.fromCharCode(64 + i)}
                    </motion.div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-white">500+</span>
                  <span className="text-gray-400"> Happy Clients</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.svg
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 1.3 + i * 0.1, type: "spring" }}
                      className="h-5 w-5 text-[#D2A651]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
                <span className="text-sm">
                  <span className="font-bold text-white">4.9/5</span>
                  <span className="text-gray-400"> Rating</span>
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Main Dashboard Card */}
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D2A651]/20 via-transparent to-[#D2A651]/20 rounded-3xl blur-xl" />

              <div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-1 backdrop-blur-xl border border-white/10">
                <div className="rounded-xl bg-[#050A30]/80 p-6">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-gray-400">Financial Overview</p>
                      <p className="text-2xl font-bold text-white">AED 2.4M</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-medium text-green-400">+23.5%</span>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="h-48 flex items-end gap-2">
                    {[35, 52, 41, 68, 55, 82, 72, 95, 85, 78, 92, 88].map((height, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-[#D2A651] to-[#D2A651]/50"
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 1 + i * 0.08, duration: 0.5, ease: "easeOut" }}
                      />
                    ))}
                  </div>

                  {/* Month labels */}
                  <div className="flex justify-between mt-3 text-xs text-gray-500">
                    {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"].map((m, i) => (
                      <span key={`${m}-${i}`}>{m}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -left-12 top-32 rounded-xl bg-white p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-2.5">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Revenue Growth</p>
                    <p className="text-lg font-bold text-[#050A30]">+147%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -right-8 bottom-32 rounded-xl bg-white p-4 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#D2A651]/20 p-2.5">
                    <svg className="h-5 w-5 text-[#D2A651]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Tax Compliance</p>
                    <p className="text-lg font-bold text-[#050A30]">100%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 }}
                className="absolute -right-4 top-4 rounded-xl bg-white p-3 shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-blue-100 p-2">
                    <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Saved</p>
                    <p className="text-sm font-bold text-[#050A30]">AED 340K</p>
                  </div>
                </div>
              </motion.div>

              {/* Partner Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                className="absolute -top-6 left-1/2 -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-2 rounded-full bg-[#D2A651] px-5 py-2.5 text-sm font-semibold text-[#050A30] shadow-lg shadow-[#D2A651]/30"
                >
                  <span className="w-2 h-2 rounded-full bg-[#050A30] animate-pulse" />
                  Certified Xero & QuickBooks Partner
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 120L48 115C96 110 192 100 288 90C384 80 480 70 576 70C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
