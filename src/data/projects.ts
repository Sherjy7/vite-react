export type Project = {
  name: string;
  year?: string;
  blurb: string;
  tag: string;
  status?: "live" | "upcoming";
  url?: string;
};

export const featured: Project[] = [
  {
    name: "TeamClock.ai",
    year: "2025",
    tag: "PRODUCT",
    status: "live",
    url: "https://teamclock.ai",
    blurb:
      "AI-powered workforce management platform — smart scheduling, mobile time clock with GPS, and real-time labor insights for hourly teams.",
  },
  {
    name: "Voice AI Agents",
    year: "2025–2026",
    tag: "UPCOMING",
    status: "upcoming",
    blurb:
      "Phone agents that answer calls, route requests, and automate follow-ups with analytics.",
  },
  {
    name: "Computer Vision Systems",
    year: "2025–2026",
    tag: "UPCOMING",
    status: "upcoming",
    blurb: "Vision pipelines for event detection, scoring overlays, and real-time stats.",
  },
];

export const labs: Project[] = [
  {
    name: "TeamClock.ai",
    tag: "LIVE",
    status: "live",
    url: "https://teamclock.ai",
    blurb: "AI scheduling, time tracking, and workforce insights — built for hourly teams. Free to start.",
  },
  {
    name: "Second Self",
    tag: "UPCOMING",
    status: "upcoming",
    blurb: "A personal operating system for daily execution, tracking, and compounding output.",
  },
  {
    name: "Cricket AI Scorer",
    tag: "UPCOMING",
    status: "upcoming",
    blurb: "Auto-detect boundaries/wickets, update score, generate highlights, expose an API.",
  },
  {
    name: "Data Quality Studio",
    tag: "UPCOMING",
    status: "upcoming",
    blurb: "Human-in-the-loop eval, rubric design, adversarial testing, and model QA workflows.",
  },
  {
    name: "Micro Tools",
    tag: "UPCOMING",
    status: "upcoming",
    blurb: "Small, sharp tools that solve one problem extremely well — shipped quickly.",
  },
];
