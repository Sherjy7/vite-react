import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { featured } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TextClipReveal,
  AnimatedCounter,
  MagneticWrap,
  PageTransition,
} from "../components/Motion";

const marqueeItems = [
  "BUILT BY BUILDERS",
  "SHIP FAST",
  "SPEED & TASTE",
  "REAL SYSTEMS",
  "AI x TOOLS",
  "ITERATE ALWAYS",
];

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const maxIndex = Math.max(0, featured.length - 3);

  return (
    <PageTransition>
      <div className="stack">
        {/* HERO */}
        <section className="hero">
          <FadeIn delay={0.1}>
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              <span>Building the future</span>
            </div>
          </FadeIn>

          <h1 className="hero-title">
            <span className="hero-title-line">
              <TextClipReveal delay={0.2}>We build, iterate</TextClipReveal>
            </span>
            <span className="hero-title-line">
              <TextClipReveal delay={0.4}>& scale real</TextClipReveal>
            </span>
            <span className="hero-title-line hero-title-gradient">
              <TextClipReveal delay={0.6}>products.</TextClipReveal>
            </span>
          </h1>

          <FadeIn delay={0.9}>
            <p className="hero-sub">
              UnciaLabs is an AI lab & innovation studio focused on shipping
              tools, systems, and software that solve real problems — fast.
            </p>
          </FadeIn>

          <FadeIn delay={1.1}>
            <div className="hero-actions">
              <MagneticWrap strength={0.15}>
                <Link to="/labs" className="btn primary">
                  Explore Labs
                  <span className="btn-arrow">&#8594;</span>
                </Link>
              </MagneticWrap>
              <MagneticWrap strength={0.15}>
                <a className="btn" href="mailto:team@uncialabs.com">
                  Get in Touch
                </a>
              </MagneticWrap>
            </div>
          </FadeIn>

          <FadeIn delay={1.3}>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-val">
                  <AnimatedCounter target={7} suffix="+" duration={1.5} />
                </div>
                <div className="hero-stat-label">Projects</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-val">
                  <AnimatedCounter target={3} duration={1} />
                </div>
                <div className="hero-stat-label">Studios</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-val">AI</div>
                <div className="hero-stat-label">Focus</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-val">ON</div>
                <div className="hero-stat-label">Ontario</div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* MARQUEE */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
              (item, i) => (
                <span key={i} className="marquee-item">
                  {item}
                  <span className="marquee-dot" />
                </span>
              )
            )}
          </div>
        </div>

        {/* FEATURED BUILDS */}
        <section className="section">
          <div className="carousel">
            <div className="carousel-header">
              <div>
                <FadeIn>
                  <div className="section-label">/// STUDIO 000</div>
                  <h2 className="section-title">Featured builds</h2>
                </FadeIn>
              </div>
              <div className="carousel-arrows">
                <motion.button
                  className="carousel-arrow"
                  onClick={() =>
                    setCarouselIndex((i) => Math.max(0, i - 1))
                  }
                  disabled={carouselIndex === 0}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous"
                >
                  &#8592;
                </motion.button>
                <motion.button
                  className="carousel-arrow"
                  onClick={() =>
                    setCarouselIndex((i) => Math.min(maxIndex, i + 1))
                  }
                  disabled={carouselIndex === maxIndex}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next"
                >
                  &#8594;
                </motion.button>
              </div>
            </div>

            <StaggerContainer className="carousel-track" stagger={0.1}>
              <AnimatePresence mode="wait">
                {featured.map((p, i) => (
                  <StaggerItem key={p.name} className="carousel-slide">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <ProjectCard p={p} index={i} />
                    </motion.div>
                  </StaggerItem>
                ))}
              </AnimatePresence>
            </StaggerContainer>
          </div>
        </section>

        {/* ANIMATED DIVIDER */}
        <div className="divider-animated" />

        {/* HOW WE WORK */}
        <section className="section">
          <FadeIn>
            <div className="section-head">
              <div>
                <div className="section-label">/// HOW WE WORK</div>
                <h2 className="section-title">Build. Iterate. Scale.</h2>
              </div>
            </div>
          </FadeIn>

          <StaggerContainer className="grid" stagger={0.12}>
            {[
              {
                title: "Build",
                text: "Start with a narrow wedge. Prototype in days, not months.",
                num: "01",
              },
              {
                title: "Iterate",
                text: "Tight feedback loops. Measure what matters. Cut what doesn't.",
                num: "02",
              },
              {
                title: "Scale",
                text: "Harden the system: reliability, analytics, and repeatable ops.",
                num: "03",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="card soft" style={{ position: "relative" }}>
                  <span className="card-number">{item.num}</span>
                  <div className="section-label">STEP {item.num}</div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <div style={{ marginTop: 24 }}>
              <MagneticWrap strength={0.12}>
                <Link to="/methodology" className="btn">
                  Read Methodology
                  <span className="btn-arrow">&#8594;</span>
                </Link>
              </MagneticWrap>
            </div>
          </FadeIn>
        </section>

        {/* CTA */}
        <FadeIn>
          <section className="callout">
            <div>
              <div className="section-label">/// JOIN THE LAB</div>
              <h2 className="callout-title">Want to build with us?</h2>
              <p className="callout-sub">
                If you're a builder, operator, or designer — reach out.
              </p>
            </div>
            <MagneticWrap strength={0.12}>
              <a className="btn primary" href="mailto:team@uncialabs.com">
                Get in Touch
                <span className="btn-arrow">&#8594;</span>
              </a>
            </MagneticWrap>
          </section>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
