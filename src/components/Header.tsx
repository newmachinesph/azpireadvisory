"use client";

import { Fragment, useRef, useState, useEffect, useCallback } from "react";
import { Popover, PopoverButton, PopoverGroup, PopoverPanel, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    name: "Accounting & Bookkeeping",
    description: "Tailored systems for effortless financial management.",
    href: "/solutions#accounting",
  },
  {
    name: "VAT & Corporate Tax",
    description: "Expert compliance and strategic tax planning.",
    href: "/solutions#tax",
  },
  {
    name: "Business Advisory",
    description: "Strategic insights for sustainable growth.",
    href: "/solutions#advisory",
  },
  {
    name: "CFO Services",
    description: "Fractional CFO support for advanced financial leadership.",
    href: "/solutions",
  },
];

const resources = [
  {
    name: "About Us",
    description: "Our mission, philosophy, and commitment to your growth.",
    href: "/about",
  },
  {
    name: "Contact Us",
    description: "Book a free consultation with our experts.",
    href: "/contact",
  },
  {
    name: "Testimonials",
    description: "Real stories from businesses we've empowered.",
    href: "/#testimonials",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const timeoutDuration = 200;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [openState, setOpenState] = useState<boolean>(false);
  const [navCSS, setNavCSS] = useState("m-2 rounded-xl bg-white");
  const [buttonCSS, setButtonCSS] = useState("hidden");

  const toggleMenu = useCallback((open: boolean, index: number) => {
    setOpenState(!open);
    buttonRef.current[index]?.click();
  }, []);

  const onHover = useCallback((open: boolean, action: string, index: number) => {
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => toggleMenu(open, index), timeoutDuration);
    }
  }, [openState, toggleMenu]);

  const handleClick = useCallback((open: boolean) => {
    setOpenState(!open);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY;
      if (scrollCheck > 50) {
        setNavCSS("m-0 rounded-none transition-all ease-in-out duration-500 shadow-2xl backdrop-blur-md bg-white/90 border-b border-gold/10");
        setButtonCSS("inline-flex");
      } else {
        setNavCSS("m-2 rounded-xl transition-all ease-in-out duration-500 bg-white");
        setButtonCSS("hidden text-opacity-0 scale-95");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Popover className="fixed top-0 z-50 w-full px-2 sm:px-4 py-2">
      <div
        className={`flex justify-between items-center py-3 px-4 sm:px-8 xl:justify-start xl:space-x-10 ring-1 ring-navy/5 ${navCSS}`}
      >
        {/* Logo */}
        <div className="flex justify-start">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="sr-only">Azpire Advisory</span>
            <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-navy flex items-center justify-center p-1 shadow-inner group-hover:shadow-gold/20 transition-all duration-300">
              <Image
                src="/logo.webp"
                alt="Azpire Advisory Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-navy leading-none">AZPIRE</span>
              <span className="text-[9px] tracking-[0.3em] font-medium text-gold leading-none mt-1">ADVISORY</span>
            </div>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="-my-2 -mr-2 ml-auto xl:hidden">
          <PopoverButton className="inline-flex justify-center items-center p-2.5 text-navy hover:text-gold bg-transparent hover:bg-gold/5 rounded-xl focus:outline-none transition-all">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
          </PopoverButton>
        </div>

        {/* Desktop navigation */}
        <PopoverGroup as="nav" className="hidden space-x-10 xl:flex">
          {/* Services dropdown */}
          <Popover className="relative">
            {({ open }) => (
              <div
                onMouseEnter={() => onHover(open, "onMouseEnter", 0)}
                onMouseLeave={() => onHover(open, "onMouseLeave", 0)}
                className="flex flex-col"
              >
                <div className="flex items-center">
                  <Link
                    href="/solutions"
                    className={classNames(
                      open ? "text-gold" : "text-navy",
                      "text-[15px] font-semibold hover:text-gold transition-colors duration-200"
                    )}
                  >
                    Solutions
                  </Link>
                  <PopoverButton
                    ref={(el: HTMLButtonElement | null) => { buttonRef.current[0] = el; }}
                    className={classNames(
                      open ? "text-gold" : "text-navy",
                      "group bg-transparent rounded-md inline-flex items-center hover:text-gold focus:outline-none transition-colors duration-200"
                    )}
                    onClick={() => handleClick(open)}
                  >
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gold rotate-180" : "text-navy/60",
                        "ml-1.5 h-4 w-4 group-hover:text-gold transition-all duration-300"
                      )}
                      aria-hidden="true"
                    />
                  </PopoverButton>
                </div>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-300"
                  enterFrom="opacity-0 translate-y-2"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-2"
                >
                  <PopoverPanel className="absolute left-1/2 z-10 px-2 mt-5 w-screen max-w-sm -translate-x-1/2 sm:px-0">
                    <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-navy/10 border border-gold/10">
                      <div className="relative grid gap-2 py-6 px-6 bg-white">
                        {services.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block p-4 -m-3 hover:bg-gold/5 rounded-xl transition-all duration-200 group/item"
                          >
                            <p className="text-[15px] font-bold text-navy group-hover/item:text-gold transition-colors">{item.name}</p>
                            <p className="mt-1 text-xs text-navy/60 leading-relaxed">{item.description}</p>
                          </Link>
                        ))}
                      </div>
                      <div className="p-5 bg-gray-50 border-t border-gold/10">
                        <Link
                          href="/solutions"
                          className="flex items-center gap-2 text-xs font-bold text-gold hover:text-navy uppercase tracking-widest transition-all"
                        >
                          Explore all solutions
                          <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </PopoverPanel>
                </Transition>
              </div>
            )}
          </Popover>

          <Link href="/#process" className="text-[15px] font-semibold text-navy hover:text-gold transition-colors duration-200">
            Process
          </Link>

          <Link href="/about" className="text-[15px] font-semibold text-navy hover:text-gold transition-colors duration-200">
            Our Story
          </Link>

          {/* Resources dropdown */}
          <Popover className="relative">
            {({ open }) => (
              <div
                onMouseEnter={() => onHover(open, "onMouseEnter", 1)}
                onMouseLeave={() => onHover(open, "onMouseLeave", 1)}
                className="flex flex-col"
              >
                <PopoverButton
                  ref={(el: HTMLButtonElement | null) => { buttonRef.current[1] = el; }}
                  className={classNames(
                    open ? "text-gold" : "text-navy",
                    "group bg-transparent rounded-md inline-flex items-center text-[15px] font-semibold hover:text-gold focus:outline-none transition-colors duration-200"
                  )}
                  onClick={() => handleClick(open)}
                >
                  <span>Company</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? "text-gold rotate-180" : "text-navy/60",
                      "ml-1.5 h-4 w-4 group-hover:text-gold transition-all duration-300"
                    )}
                    aria-hidden="true"
                  />
                </PopoverButton>

                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-300"
                  enterFrom="opacity-0 translate-y-2"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-2"
                >
                  <PopoverPanel className="absolute left-1/2 z-10 px-2 mt-5 w-screen max-w-sm -translate-x-1/2 sm:px-0">
                    <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-navy/10 border border-gold/10">
                      <div className="relative grid gap-2 py-6 px-6 bg-white">
                        {resources.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block p-4 -m-3 hover:bg-gold/5 rounded-xl transition-all duration-200 group/item"
                          >
                            <p className="text-[15px] font-bold text-navy group-hover/item:text-gold transition-colors">{item.name}</p>
                            <p className="mt-1 text-xs text-navy/60 leading-relaxed">{item.description}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </PopoverPanel>
                </Transition>
              </div>
            )}
          </Popover>
        </PopoverGroup>

        {/* Desktop CTA */}
        <div className="hidden justify-end items-center xl:flex xl:flex-1 xl:w-0 gap-6">
          <a
            href="https://wa.me/971524492816"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] font-bold text-navy hover:text-gold whitespace-nowrap transition-colors flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            WhatsApp Us
          </a>
          <Link
            href="/contact"
            className={`px-8 py-3.5 text-[15px] font-bold text-navy whitespace-nowrap bg-gold hover:bg-gold-light rounded-xl shadow-[0_8px_30px_rgb(210,166,81,0.2)] hover:shadow-[0_8px_30px_rgb(210,166,81,0.4)] hover:-translate-y-0.5 transition-all duration-300 ${buttonCSS}`}
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition
        as={Fragment}
        enter="duration-300 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-200 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          className="absolute inset-x-0 top-0 p-3 transition origin-top-right xl:hidden"
        >
          <div className="bg-white rounded-2xl divide-y divide-gray-100 shadow-2xl ring-1 ring-navy/10 border border-gold/10">
            <div className="px-6 pt-6 pb-8">
              <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-lg bg-navy flex items-center justify-center p-1">
                    <Image src="/logo.webp" alt="Logo" width={40} height={40} className="object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-extrabold tracking-tight text-navy leading-none">AZPIRE</span>
                    <span className="text-[8px] tracking-[0.2em] font-medium text-gold leading-none mt-1">ADVISORY</span>
                  </div>
                </Link>
                <div className="-mr-2">
                  <PopoverButton className="inline-flex justify-center items-center p-2.5 text-navy hover:text-gold bg-transparent hover:bg-gold/5 rounded-xl transition-all">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div className="mt-10">
                <p className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-6">Solutions</p>
                <nav className="grid grid-cols-1 gap-6">
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-bold text-navy hover:text-gold transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-8 px-6">
              <div className="grid grid-cols-2 gap-x-6 gap-y-10">
                <Link href="/about" className="text-[15px] font-bold text-navy hover:text-gold transition-colors">
                  Our Story
                </Link>
                <Link href="/#process" className="text-[15px] font-bold text-navy hover:text-gold transition-colors">
                  Process
                </Link>
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-[15px] font-bold text-navy hover:text-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-12 space-y-4">
                <Link
                  href="/contact"
                  className="flex justify-center items-center py-4 px-4 w-full text-[15px] font-bold text-navy bg-gold hover:bg-gold-light rounded-xl shadow-lg transition-all"
                >
                  Get Started
                </Link>
                <a
                  href="https://wa.me/971524492816"
                  className="flex justify-center items-center py-4 px-4 w-full text-[15px] font-bold text-navy border border-navy/10 hover:border-gold rounded-xl transition-all gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  WhatsApp: +971 52 449 2816
                </a>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}
