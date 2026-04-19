// components/Hero.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";

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

const lineVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.01 } },
};

export default function Hero() {
  const shouldReduce = useReducedMotion();
  const activeLineVariants = shouldReduce ? lineVariantsReduced : lineVariants;

  return (
    <section className="px-20 pt-24 pb-16 w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={activeLineVariants}
          style={{
            fontFamily: "var(--font-serif), Georgia, serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "var(--ink)",
            marginBottom: "0.875rem",
          }}
        >
          Build Lab
        </motion.h1>

        <motion.p
          variants={activeLineVariants}
          style={{
            fontSize: "clamp(1.1rem, 2vw, 1.375rem)",
            fontWeight: 300,
            color: "var(--ink)",
            marginBottom: "0.875rem",
            maxWidth: "36ch",
            lineHeight: 1.4,
          }}
        >
          AI-Augmented Product Explorations
        </motion.p>

        <motion.p
          variants={activeLineVariants}
          style={{
            fontSize: "1rem",
            color: "var(--ink-muted)",
            maxWidth: "52ch",
            lineHeight: 1.6,
          }}
        >
          From idea to working product — using AI to move faster and think
          deeper.
        </motion.p>
      </motion.div>
    </section>
  );
}
