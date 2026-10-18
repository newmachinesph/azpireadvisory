"use client";

import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Contact", href: "/contact" },
];

const secondaryNavigation = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "FAQ", href: "/contact#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-[#8B6914]/10">
      <div className="container flex flex-col px-6 pt-24 mx-auto lg:flex-row lg:px-8 max-w-7xl">
        {/* Logo */}
        <div className="shrink-0 mx-auto w-48 h-full text-center lg:mx-0 lg:mr-20">
          <Link href="/" className="flex justify-center items-center lg:justify-start group">
            <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-navy flex items-center justify-center p-1 shadow-inner group-hover:shadow-[#8B6914]/20 transition-all duration-300">
              <Image
                src="/logo.webp"
                alt="Azpire Advisory Logo"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col ml-3">
              <span className="text-2xl font-extrabold tracking-tight text-[#050A30] leading-none">
                AZPIRE
              </span>
              <span className="text-[10px] tracking-[0.3em] font-medium text-[#8B6914] leading-none mt-1">
                ADVISORY
              </span>
            </div>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-wrap my-10 w-full text-center lg:mt-0 lg:text-left xl:flex-row">
          {/* Navigation - Large Links */}
          <div className="mb-8 w-full xl:w-1/2">
            <h2 className="mb-4 text-sm font-semibold tracking-widest text-[#8B6914] uppercase">
              Navigation
            </h2>
            <nav className="mb-8 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="text-3xl lg:text-4xl xl:text-5xl font-medium text-[#050A30] hover:text-[#8B6914] transition-colors"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>
          </div>

          {/* Company Info */}
          <div className="w-full xl:w-1/2">
            <div className="flex flex-col justify-between w-full h-full">
              {/* Contact Details */}
              <div className="flex flex-col justify-start mb-12 w-full">
                <h2 className="mb-4 text-sm font-semibold tracking-widest text-[#8B6914] uppercase">
                  Contact Us
                </h2>
                <div className="w-full text-center text-[#050A30] lg:text-left space-y-2">
                  <p className="text-lg">Dubai, UAE</p>
                  <p>
                    <a
                      href="tel:+971568268408"
                      className="text-lg hover:text-[#8B6914] transition-colors"
                    >
                      +971 56 826 8408
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:jen@azpireadvisory.com"
                      className="text-lg hover:text-[#8B6914] transition-colors"
                    >
                      jen@azpireadvisory.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Social & Secondary Nav */}
              <div>
                {/* Social Icons */}
                <span className="inline-flex gap-4 mb-6">
                  <a
                    href="https://www.facebook.com/azpireadvisory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#050A30] hover:text-[#8B6914] transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      className="w-7 h-7"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/azpireadvisory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#050A30] hover:text-[#8B6914] transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      className="w-7 h-7"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/azpireadvisory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#050A30] hover:text-[#8B6914] transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      className="w-7 h-7"
                      viewBox="0 0 24 24"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </span>

                {/* Secondary Navigation */}
                <div className="flex flex-wrap gap-4 justify-center mb-4 lg:justify-start">
                  {secondaryNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm font-semibold text-[#8B6914] hover:text-[#050A30] transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* Copyright */}
                <p className="text-xs text-[#050A30]/60 pb-8">
                  Copyright © {new Date().getFullYear()} Azpire Advisory. All rights reserved.
                  <br />
                  <span className="text-[#8B6914]">Accounting . Tax . Advisory</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
