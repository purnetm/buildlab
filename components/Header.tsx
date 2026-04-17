// components/Header.tsx
export default function Header() {
  return (
    <header
      style={{ borderBottom: "1px solid var(--border)" }}
      className="w-full px-6 py-5 flex items-center justify-between"
    >
      <a
        href="https://purnet.framer.website/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          color: "var(--ink)",
          fontSize: "1.125rem",
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
        className="hover:opacity-70 transition-opacity duration-150"
      >
        Purnet M.
      </a>
      <span
        style={{
          color: "var(--ink-muted)",
          fontSize: "0.8125rem",
          fontFamily: "var(--font-sans), sans-serif",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Build Lab
      </span>
    </header>
  );
}
