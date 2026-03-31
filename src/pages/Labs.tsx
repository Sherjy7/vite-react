import { labs } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  MagneticWrap,
  TextClipReveal,
  PageTransition,
} from "../components/Motion";

export default function Labs() {
  return (
    <PageTransition>
      <div className="stack">
        <section className="pagehead">
          <FadeIn>
            <div className="section-label">/// LABS</div>
          </FadeIn>
          <h1 className="page-title">
            <TextClipReveal delay={0.1}>The workbench</TextClipReveal>
          </h1>
          <FadeIn delay={0.3}>
            <p className="page-sub">
              Products, experiments, and systems we're building inside
              UnciaLabs.
            </p>
          </FadeIn>
        </section>

        <StaggerContainer className="grid" stagger={0.1}>
          {labs.map((p, i) => (
            <StaggerItem key={p.name}>
              <ProjectCard p={p} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn>
          <section className="callout">
            <div>
              <div className="section-label">/// COLLAB</div>
              <h2 className="callout-title">Want to build with us?</h2>
              <p className="callout-sub">
                If you're a builder, operator, or designer — reach out.
              </p>
            </div>
            <MagneticWrap strength={0.12}>
              <a className="btn primary" href="mailto:team@uncialabs.com">
                Email UnciaLabs
                <span className="btn-arrow">&#8594;</span>
              </a>
            </MagneticWrap>
          </section>
        </FadeIn>
      </div>
    </PageTransition>
  );
}
