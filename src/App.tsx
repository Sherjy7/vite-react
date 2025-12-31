import { Canvas } from "@react-three/fiber";
import { Suspense, useMemo, useState } from "react";
import UnciaScene from "./UnciaScene";
import "./App.css";

type Project = {
  title: string;
  tagline: string;
  bullets: string[];
  tags: string[];
};

export default function App() {
  const [section, setSection] = useState(0);

  const sections = useMemo(
    () => ["Work", "Projects", "Focus", "About", "Contact"],
    []
  );

  const projects: Project[] = useMemo(
    () => [
      {
        title: "UnciaLabs Portfolio (3D)",
        tagline: "A 3D interface that navigates like a product, not a webpage.",
        bullets: ["3D panels + hover", "Scroll/keys snap navigation", "Eye-glow progression"],
        tags: ["3D", "Web", "Brand"],
      },
      {
        title: "Project Placeholder #1",
        tagline: "Replace with a real build.",
        bullets: ["What it does", "Technical highlight", "Outcome/impact"],
        tags: ["AI", "CV", "Systems"],
      },
      {
        title: "Project Placeholder #2",
        tagline: "Replace with a real build.",
        bullets: ["Core capability", "Why it matters", "What makes it unique"],
        tags: ["Tools", "Automation"],
      },
    ],
    []
  );

  return (
    <div className="app3d">
      {/* HUD overlay */}
      <header className="hud">
        <button className="hudBrand" onClick={() => setSection(0)}>
          <span className="dot" />
          <span>UnciaLabs</span>
        </button>

        <nav className="hudNav">
          {sections.map((s, i) => (
            <button
              key={s}
              className={`hudLink ${i === section ? "active" : ""}`}
              onClick={() => setSection(i)}
            >
              {s}
            </button>
          ))}
        </nav>

        <button className="hudCta" onClick={() => setSection(1)}>
          View work →
        </button>
      </header>

      <Canvas
        dpr={[1, 1.8]}
        camera={{ position: [0, 0.2, 10], fov: 45 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#040816"]} />
        <fog attach="fog" args={["#040816", 12, 44]} />

        <Suspense fallback={null}>
          <UnciaScene
            section={section}
            setSection={setSection}
            sectionLabels={sections}
            projects={projects}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
