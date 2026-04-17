// components/Hero.tsx
"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.165, 0.84, 0.44, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section className="px-6 pt-24 pb-16 max-w-5xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={lineVariants}
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "var(--ink)",
            marginBottom: "1rem",
          }}
        >
          Build Lab
        </motion.h1>

        <motion.p
          variants={lineVariants}
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.375rem)",
            fontWeight: 300,
            color: "var(--ink)",
            marginBottom: "0.75rem",
            maxWidth: "36ch",
            lineHeight: 1.4,
          }}
        >
          AI-Augmented Product Explorations
        </motion.p>

        <motion.p
          variants={lineVariants}
          style={{
            fontSize: "1rem",
            color: "var(--ink-muted)",
            maxWidth: "52ch",
            lineHeight: 1.6,
          }}
        >
          Projects built with Claude Code, Figma MCP, and strategic design
          thinking.
        </motion.p>
      </motion.div>
    </section>
  );
}
