// components/ProjectCard.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/lib/projects";

export const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1] as const,
    },
  },
};

export const cardVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.01 } },
};

export default function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  href,
}: Project) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.article
      variants={shouldReduce ? cardVariantsReduced : cardVariants}
      whileHover={
        shouldReduce
          ? undefined
          : { y: -6, transition: { duration: 0.24, ease: [0.645, 0.045, 0.355, 1] } }
      }
      aria-labelledby={`project-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
      style={{
        backgroundColor: "var(--bg-card)",
        border: "1.5px solid var(--border)",
        borderRadius: "var(--radius-card)",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      {/* Subtitle */}
      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: 500,
          color: "var(--ink-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          margin: 0,
        }}
      >
        {subtitle}
      </p>

      {/* Title */}
      <h2
        id={`project-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          fontSize: "1.5rem",
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          color: "var(--ink)",
          margin: 0,
        }}
      >
        {title}
      </h2>

      {/* Description */}
      <p
        style={{
          fontSize: "0.9375rem",
          lineHeight: 1.65,
          color: "var(--ink-muted)",
          flexGrow: 1,
          margin: 0,
        }}
      >
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              backgroundColor: "var(--tag-bg)",
              color: "var(--tag-text)",
              borderRadius: "var(--radius-tag)",
              fontSize: "0.75rem",
              fontWeight: 500,
              padding: "0.25rem 0.625rem",
              transition: "background-color 150ms ease, color 150ms ease",
            }}
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileTap={
          shouldReduce
            ? undefined
            : { scale: 0.97, transition: { duration: 0.12, ease: [0.25, 0.46, 0.45, 0.94] } }
        }
        style={{
          display: "block",
          width: "100%",
          padding: "0.75rem 1.5rem",
          backgroundColor: "var(--accent)",
          color: "var(--accent-text)",
          borderRadius: "var(--radius-button)",
          fontSize: "0.875rem",
          fontWeight: 500,
          textAlign: "center",
          textDecoration: "none",
          letterSpacing: "0.02em",
          cursor: "pointer",
          transition: "opacity 150ms ease",
        }}
        className="hover:opacity-85"
      >
        View Project →
      </motion.a>
    </motion.article>
  );
}
