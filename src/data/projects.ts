export type Project = {
  name: string;
  year?: string;
  blurb: string;
  tag: string;
};

export const featured: Project[] = [
  {
    name: "Voice AI Agents",
    year: "2025–2026",
    tag: "PRODUCT",
    blurb:
      "Phone agents that answer calls, route requests, and automate follow-ups with analytics.",
  },
  {
    name: "Computer Vision Systems",
    year: "2025–2026",
    tag: "R&D",
    blurb: "Vision pipelines for event detection, scoring overlays, and real-time stats.",
  },
  {
    name: "Automation Tooling",
    year: "2024–2026",
    tag: "OPS",
    blurb: "Internal tools that turn messy workflows into repeatable systems (fast).",
  },
];

export const labs: Project[] = [
  {
    name: "Second Self",
    tag: "SYSTEM",
    blurb: "A personal operating system for daily execution, tracking, and compounding output.",
  },
  {
    name: "Cricket AI Scorer",
    tag: "CV",
    blurb: "Auto-detect boundaries/wickets, update score, generate highlights, expose an API.",
  },
  {
    name: "Data Quality Studio",
    tag: "EVAL",
    blurb: "Human-in-the-loop eval, rubric design, adversarial testing, and model QA workflows.",
  },
  {
    name: "Micro Tools",
    tag: "SHIP",
    blurb: "Small, sharp tools that solve one problem extremely well — shipped quickly.",
  },
];
