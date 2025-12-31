import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

type Project = {
  title: string;
  tagline: string;
  bullets: string[];
  tags: string[];
  links?: { label: string; href: string }[];
};

const clamp01 = (n: number) => Math.max(0, Math.min(1, n));
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function App() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [eye, setEye] = useState(0);

  const projects: Project[] = useMemo(
    () => [
      {
        title: "UnciaLabs Portfolio (This Site)",
        tagline: "Scroll-snap, cinematic background, and eye-glow scroll animation.",
        bullets: [
          "Portfolio-first layout (no client MVP pitch)",
          "Snap scrolling between sections",
          "Scroll-driven ‘eyes open’ effect",
        ],
        tags: ["Web", "Brand", "Motion"],
        links: [{ label: "Live", href: "/" }],
      },
      {
        title: "Project Placeholder #1",
        tagline: "Replace with your real build.",
        bullets: ["What it does", "Why it matters", "What makes it unique"],
        tags: ["AI", "CV", "Systems"],
        links: [{ label: "Demo", href: "#" }, { label: "Repo", href: "#" }],
      },
      {
        title: "Project Placeholder #2",
        tagline: "Replace with your real build.",
        bullets: ["Core capability", "Technical highlight", "Outcome/impact"],
        tags: ["Tools", "Automation"],
        links: [{ label: "Read", href: "#" }],
      },
    ],
    []
  );

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      const p = max > 0 ? el.scrollTop / max : 0;
      // Eye glow opens mostly in first ~60% of the scroll
      const opened = easeOutCubic(clamp01(p / 0.6));
      setEye(opened);
    };

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Work", id: "work" },
    { label: "Projects", id: "projects" },
    { label: "Focus", id: "focus" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page" style={{ ["--eye" as any]: eye }}>
      {/* Background leopard + scroll-driven eyes */}
      <div className="bg" aria-hidden="true">
        <img className="bgLogo" src="/uncialabs-logo.png" alt="" />
        <div className="eyeGlow eyeLeft" />
        <div className="eyeGlow eyeRight" />
        <div className="bgVignette" />
      </div>

      <header className="topbar">
        <button className="brand" onClick={() => scrollTo("work")}>
          <span className="brandDot" />
          <span className="brandText">UnciaLabs</span>
        </button>

        <nav className="nav">
          {nav.map((n) => (
            <button key={n.id} className="navLink" onClick={() => scrollTo(n.id)}>
              {n.label}
            </button>
          ))}
        </nav>

        <button className="cta" onClick={() => scrollTo("projects")}>
          View work →
        </button>
      </header>

      {/* Scroll container with snap */}
      <div ref={scrollRef} className="scroll">
        {/* HERO / WORK */}
        <section id="work" className="section hero">
          <div className="wrap">
            <div className="heroGrid">
              <div>
                <p className="eyebrow">Portfolio • Systems • Visual Intelligence</p>
                <h1 className="title">
                  UnciaLabs builds real products —
                  <span className="titleGlow"> documented as a portfolio.</span>
                </h1>
                <p className="sub">
                  Not a client MVP factory (for now). This is our build hub — tools, systems,
                  experiments, and shipped projects.
                </p>

                <div className="heroActions">
                  <button className="btnPrimary" onClick={() => scrollTo("projects")}>
                    Explore projects →
                  </button>
                  <button className="btnGhost" onClick={() => scrollTo("focus")}>
                    Focus areas
                  </button>
                </div>

                <div className="stats">
                  <div className="stat">
                    <div className="statNum">Build</div>
                    <div className="statLabel">Tools & products</div>
                  </div>
                  <div className="stat">
                    <div className="statNum">Ship</div>
                    <div className="statLabel">Iterate fast</div>
                  </div>
                  <div className="stat">
                    <div className="statNum">Show</div>
                    <div className="statLabel">Portfolio proof</div>
                  </div>
                </div>
              </div>

              <div className="heroCard">
                <div className="cardTop">
                  <div className="pill">Now</div>
                  <div className="pill ghost">UnciaLabs / Portfolio Mode</div>
                </div>
                <h3 className="cardTitle">What you’re seeing</h3>
                <ul className="cardList">
                  <li>Scroll-snap sections</li>
                  <li>Leopard background with scroll-driven eye glow</li>
                  <li>Project cards built for real case studies</li>
                </ul>
                <button className="btnSecondary" onClick={() => scrollTo("contact")}>
                  Add your project list →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="wrap">
            <h2 className="h2">Featured Builds</h2>
            <p className="p">
              These are the projects UnciaLabs is building. Swap the placeholders with your real
              work and links.
            </p>

            <div className="grid">
              {projects.map((p) => (
                <article key={p.title} className="card">
                  <div className="cardHeader">
                    <h3 className="h3">{p.title}</h3>
                    <div className="tags">
                      {p.tags.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="tagline">{p.tagline}</p>
                  <ul className="bullets">
                    {p.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <div className="links">
                    {(p.links || []).map((l) => (
                      <a key={l.label} className="link" href={l.href}>
                        {l.label} →
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FOCUS */}
        <section id="focus" className="section">
          <div className="wrap">
            <h2 className="h2">Focus Areas</h2>
            <p className="p">Where UnciaLabs invests time and obsession.</p>

            <div className="grid2">
              <div className="panel">
                <h3 className="h3">Computer Vision</h3>
                <p className="p2">Event detection, tracking, broadcast overlays, smart highlights.</p>
              </div>
              <div className="panel">
                <h3 className="h3">Voice + Agents</h3>
                <p className="p2">Phone agents, workflow automation, real-world integrations.</p>
              </div>
              <div className="panel">
                <h3 className="h3">Tooling & Systems</h3>
                <p className="p2">Dashboards, scoring engines, pipelines, internal ops tooling.</p>
              </div>
              <div className="panel">
                <h3 className="h3">Product Experiments</h3>
                <p className="p2">Fast iteration, proof-by-shipping, documented results.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="wrap">
            <h2 className="h2">About UnciaLabs</h2>
            <p className="p">
              UnciaLabs is an innovation studio focused on building tools and systems that solve
              real problems. This site is the proof.
            </p>

            <div className="aboutRow">
              <div className="aboutBox">
                <h3 className="h3">Principles</h3>
                <ul className="bullets">
                  <li>Build first, explain after</li>
                  <li>Systems over hype</li>
                  <li>Shipping is the resume</li>
                </ul>
              </div>
              <div className="aboutBox">
                <h3 className="h3">What to add next</h3>
                <ul className="bullets">
                  <li>Real project names + screenshots</li>
                  <li>Case studies per project</li>
                  <li>Changelog / “Now building” feed</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="wrap">
            <h2 className="h2">Contact</h2>
            <p className="p">Put your email and socials here.</p>

            <div className="contactCard">
              <div>
                <div className="contactLabel">Email</div>
                <div className="contactValue">dev@uncialabs.com</div>
              </div>
              <div>
                <div className="contactLabel">Social</div>
                <div className="contactValue">@UnciaLabs</div>
              </div>
              <button className="btnPrimary" onClick={() => scrollTo("work")}>
                Back to top ↑
              </button>
            </div>

            <footer className="footer">© {new Date().getFullYear()} UnciaLabs.</footer>
          </div>
        </section>
      </div>
    </div>
  );
}
