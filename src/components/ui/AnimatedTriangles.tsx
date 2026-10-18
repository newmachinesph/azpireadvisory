"use client";

import { motion } from "framer-motion";

interface TriangleProps {
  className?: string;
  variant?: "light" | "dark" | "gold";
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  delay?: number;
}

const sizeMap = {
  sm: 100,
  md: 200,
  lg: 300,
  xl: 400,
};

const colorMap = {
  light: {
    primary: "rgba(255, 255, 255, 0.1)",
    secondary: "rgba(255, 255, 255, 0.05)",
    tertiary: "rgba(255, 255, 255, 0.02)",
  },
  dark: {
    primary: "rgba(5, 10, 48, 0.15)",
    secondary: "rgba(5, 10, 48, 0.08)",
    tertiary: "rgba(5, 10, 48, 0.03)",
  },
  gold: {
    primary: "rgba(210, 166, 81, 0.2)",
    secondary: "rgba(210, 166, 81, 0.1)",
    tertiary: "rgba(210, 166, 81, 0.05)",
  },
};

export function SingleTriangle({
  className = "",
  variant = "light",
  size = "md",
  animated = true,
  delay = 0,
}: TriangleProps) {
  const s = sizeMap[size];
  const colors = colorMap[variant];

  return (
    <motion.svg
      width={s}
      height={s}
      viewBox="0 0 100 100"
      className={className}
      initial={animated ? { opacity: 0, scale: 0.8 } : {}}
      animate={animated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      <motion.polygon
        points="50,10 90,90 10,90"
        fill={colors.primary}
        initial={animated ? { opacity: 0 } : {}}
        animate={animated ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      />
    </motion.svg>
  );
}

interface TriangleGridProps {
  className?: string;
  variant?: "light" | "dark" | "gold";
  rows?: number;
  animated?: boolean;
  direction?: "down" | "up";
}

export function TriangleGrid({
  className = "",
  variant = "light",
  rows = 5,
  animated = true,
  direction = "down",
}: TriangleGridProps) {
  const colors = colorMap[variant];
  const triangles: { x: number; y: number; up: boolean; delay: number }[] = [];

  for (let row = 0; row < rows; row++) {
    const trianglesInRow = row + 1;
    const rowWidth = trianglesInRow * 30;
    const startX = 50 - rowWidth / 2 + 15;

    for (let col = 0; col < trianglesInRow * 2 - 1; col++) {
      const isUp = col % 2 === 0;
      triangles.push({
        x: startX + col * 15,
        y: direction === "down" ? row * 26 + 10 : 100 - (row * 26 + 10) - 26,
        up: direction === "down" ? !isUp : isUp,
        delay: (row * 0.1) + (col * 0.05),
      });
    }
  }

  return (
    <svg
      viewBox="0 0 100 140"
      className={className}
      style={{ overflow: "visible" }}
    >
      {triangles.map((tri, i) => (
        <motion.polygon
          key={i}
          points={
            tri.up
              ? `${tri.x},${tri.y} ${tri.x + 15},${tri.y + 26} ${tri.x - 15},${tri.y + 26}`
              : `${tri.x - 15},${tri.y} ${tri.x + 15},${tri.y} ${tri.x},${tri.y + 26}`
          }
          fill={i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.secondary : colors.tertiary}
          initial={animated ? { opacity: 0, scale: 0.5 } : {}}
          animate={animated ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.4,
            delay: tri.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </svg>
  );
}

interface FloatingTrianglesProps {
  className?: string;
  variant?: "light" | "dark" | "gold" | "mixed";
  count?: number;
}

const floatingTriangles = [
  { left: 5, top: 10, size: 40, rotation: 15, duration: 8 },
  { left: 85, top: 5, size: 60, rotation: -10, duration: 10 },
  { left: 15, top: 70, size: 35, rotation: 25, duration: 7 },
  { left: 90, top: 60, size: 50, rotation: -20, duration: 9 },
  { left: 45, top: 85, size: 45, rotation: 5, duration: 11 },
  { left: 70, top: 30, size: 30, rotation: -15, duration: 8.5 },
  { left: 25, top: 40, size: 55, rotation: 10, duration: 9.5 },
  { left: 60, top: 75, size: 38, rotation: -25, duration: 7.5 },
];

export function FloatingTriangles({
  className = "",
  variant = "mixed",
  count = 8,
}: FloatingTrianglesProps) {
  const getColor = (index: number) => {
    if (variant === "mixed") {
      return index % 2 === 0 ? "rgba(210, 166, 81, 0.15)" : "rgba(5, 10, 48, 0.1)";
    }
    return colorMap[variant as keyof typeof colorMap].primary;
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {floatingTriangles.slice(0, count).map((tri, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${tri.left}%`,
            top: `${tri.top}%`,
            width: tri.size,
            height: tri.size,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            y: [0, -20, 0],
            rotate: [tri.rotation, tri.rotation + 5, tri.rotation],
          }}
          transition={{
            duration: tri.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,10 90,90 10,90"
              fill={getColor(i)}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

interface TrianglePatternProps {
  className?: string;
  variant?: "light" | "dark" | "gold";
}

export function TrianglePattern({ className = "", variant = "light" }: TrianglePatternProps) {
  const colors = colorMap[variant];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="absolute w-full h-full" preserveAspectRatio="none">
        <defs>
          <pattern
            id={`trianglePattern-${variant}`}
            width="60"
            height="52"
            patternUnits="userSpaceOnUse"
          >
            <polygon points="30,0 60,52 0,52" fill={colors.tertiary} />
            <polygon points="30,52 60,0 0,0" fill={colors.secondary} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#trianglePattern-${variant})`} />
      </svg>
    </div>
  );
}

export function AnimatedTriangleDecoration({
  className = "",
  position = "top-right",
}: {
  className?: string;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}) {
  const positionClasses = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0 -scale-x-100",
    "bottom-right": "bottom-0 right-0 -scale-y-100",
    "bottom-left": "bottom-0 left-0 -scale-x-100 -scale-y-100",
  };

  return (
    <div className={`absolute ${positionClasses[position]} ${className}`}>
      <TriangleGrid
        variant="gold"
        rows={6}
        className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 opacity-30"
      />
    </div>
  );
}
