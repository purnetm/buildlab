// lib/projects.ts
export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  href: string;
};

export const projects: Project[] = [
  {
    title: "Spendsmart",
    subtitle: "Financial Advisor Powered by Claude",
    description:
      "Spendsmart is a financial advisor that uses real data to generate personalized insights. It helps users understand spending patterns, optimize subscriptions, and make better financial decisions. Built to explore how AI can move from mock responses to real, usable guidance.",
    tags: ["Personalization", "Claude-API", "FinTech"],
    href: "https://spendsmart-purnetbuilds.vercel.app",
  },
  {
    title: "Calora",
    subtitle: "E-commerce with AI Recommendations",
    description:
      "Calora is a dessert e-commerce experience with smart recommendations and search. It personalizes product discovery while keeping the experience simple and intuitive. Built to explore how AI can enhance discovery without overwhelming users.",
    tags: ["AI", "E-commerce", "Discovery"],
    href: "https://calora-git-editorial-purnetbuilds.vercel.app",
  },
  {
    title: "Post Call Analysis",
    subtitle: "No-Code Dashboard Builder",
    description:
      "Post Call Analysis enables users to build custom dashboards for call insights without writing code. It supports flexible metrics, layouts, and data views based on user needs. Built to explore how AI can make analytics tools more accessible and user-driven.",
    tags: ["Claude-Code", "Figma-MCP", "Analytics"],
    href: "https://data-studio-pca-git-iterations-a-purnetbuilds.vercel.app",
  },
];
