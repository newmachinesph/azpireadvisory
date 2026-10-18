"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "default" | "white" | "gold" | "navy";
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  animated?: boolean;
  href?: string;
  className?: string;
}

const sizeConfig = {
  sm: { icon: 32, text: "text-lg", subtext: "text-[6px]", gap: "gap-2" },
  md: { icon: 40, text: "text-xl", subtext: "text-[8px]", gap: "gap-2" },
  lg: { icon: 48, text: "text-2xl", subtext: "text-xs", gap: "gap-3" },
  xl: { icon: 64, text: "text-3xl", subtext: "text-sm", gap: "gap-4" },
};

const colorConfig = {
  default: {
    navy: "#050A30",
    gold: "#D2A651",
    text: "text-[#050A30]",
    subtext: "text-[#D2A651]",
  },
  white: {
    navy: "#FFFFFF",
    gold: "#D2A651",
    text: "text-white",
    subtext: "text-[#D2A651]",
  },
  gold: {
    navy: "#D2A651",
    gold: "#D2A651",
    text: "text-[#D2A651]",
    subtext: "text-[#D2A651]",
  },
  navy: {
    navy: "#050A30",
    gold: "#050A30",
    text: "text-[#050A30]",
    subtext: "text-[#050A30]",
  },
};

export function Logo({
  variant = "default",
  size = "md",
  showText = true,
  animated = false,
  href = "/",
  className = "",
}: LogoProps) {
  const sizeConf = sizeConfig[size];
  const colorConf = colorConfig[variant];

  const LogoContent = () => (
    <>
      {/* Use the actual logo image */}
      <motion.div
        initial={animated ? { opacity: 0, scale: 0.8 } : {}}
        animate={animated ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="relative"
        style={{ width: sizeConf.icon, height: sizeConf.icon }}
      >
        <Image
          src="/logo.webp"
          alt="Azpire Advisory"
          width={sizeConf.icon}
          height={sizeConf.icon}
          className="object-contain"
          priority
        />
      </motion.div>

      {showText && (
        <motion.div
          className="flex flex-col"
          initial={animated ? { opacity: 0, x: -10 } : {}}
          animate={animated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className={`${sizeConf.text} font-bold tracking-wider ${colorConf.text}`}>
            AZPIRE
          </span>
          <span className={`${sizeConf.subtext} tracking-[0.25em] ${colorConf.subtext}`}>
            ADVISORY
          </span>
        </motion.div>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`flex items-center ${sizeConf.gap} ${className}`}>
        <LogoContent />
      </Link>
    );
  }

  return (
    <div className={`flex items-center ${sizeConf.gap} ${className}`}>
      <LogoContent />
    </div>
  );
}

export function LogoIcon({
  variant = "default",
  size = "md",
  animated = false,
  className = "",
}: Omit<LogoProps, "showText" | "href">) {
  const sizeConf = sizeConfig[size];

  return (
    <motion.div
      initial={animated ? { opacity: 0, scale: 0.8 } : {}}
      animate={animated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className={`relative ${className}`}
      style={{ width: sizeConf.icon, height: sizeConf.icon }}
    >
      <Image
        src="/logo.webp"
        alt="Azpire Advisory"
        width={sizeConf.icon}
        height={sizeConf.icon}
        className="object-contain"
        priority
      />
    </motion.div>
  );
}

// SVG version for when image can't be used
export function LogoSVG({
  variant = "default",
  size = "md",
  showText = true,
  animated = false,
  className = "",
}: Omit<LogoProps, "href">) {
  const sizeConf = sizeConfig[size];
  const colorConf = colorConfig[variant];

  return (
    <div className={`flex items-center ${sizeConf.gap} ${className}`}>
      <motion.svg
        width={sizeConf.icon}
        height={sizeConf.icon}
        viewBox="0 0 100 100"
        fill="none"
        initial={animated ? { opacity: 0, scale: 0.8 } : {}}
        animate={animated ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {/* Main A shape - navy triangle */}
        <motion.path
          d="M50 8 L15 92 L38 92 L50 68 L62 92 L85 92 Z"
          fill={colorConf.navy}
          initial={animated ? { pathLength: 0 } : {}}
          animate={animated ? { pathLength: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        {/* Inner triangle cutout */}
        <motion.path
          d="M50 35 L40 55 L60 55 Z"
          fill={variant === "white" ? "#050A30" : "white"}
          initial={animated ? { opacity: 0 } : {}}
          animate={animated ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.6 }}
        />
        {/* Gold Z arrow */}
        <motion.path
          d="M52 28 L68 28 L55 45 L72 45 L72 52 L82 38 L72 24 L72 31 L58 31 L72 14 L52 14 Z"
          fill={colorConf.gold}
          initial={animated ? { opacity: 0, x: 10 } : {}}
          animate={animated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
      </motion.svg>

      {showText && (
        <motion.div
          className="flex flex-col"
          initial={animated ? { opacity: 0, x: -10 } : {}}
          animate={animated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className={`${sizeConf.text} font-bold tracking-wider ${colorConf.text}`}>
            AZPIRE
          </span>
          <span className={`${sizeConf.subtext} tracking-[0.25em] ${colorConf.subtext}`}>
            ADVISORY
          </span>
        </motion.div>
      )}
    </div>
  );
}
