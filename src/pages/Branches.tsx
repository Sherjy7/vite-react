import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  MagneticWrap,
  TextClipReveal,
  PageTransition,
} from "../components/Motion";

const branches = [
  {
    num: "01",
    title: "R&D",
    text: "Exploration, prototypes, and research-driven builds.",
  },
  {
    num: "02",
    title: "Product Studio",
    text: "Shipping real tools with real users and measurable outcomes.",
  },
  {
    num: "03",
    title: "Systems & Ops",
    text: "Automation, internal tooling, analytics, reliability.",
  },
  {
    num: "04",
    title: "Community",
    text: "Builders connecting, learning, collaborating, and scaling.",
  },
];

export default function Branches() {
  return (
    <PageTransition>
      <div className="stack">
        <section className="pagehead">
          <FadeIn>
            <div className="section-label">/// BRANCHES</div>
          </FadeIn>
          <h1 className="page-title">
            <TextClipReveal delay={0.1}>Core branches</TextClipReveal>
          </h1>
          <FadeIn delay={0.3}>
            <p className="page-sub">
              Different branches, one goal: create leverage through software
              and systems.
            </p>
          </FadeIn>
        </section>

        <StaggerContainer className="two-col" stagger={0.1}>
          {branches.map((b) => (
            <StaggerItem key={b.num}>
              <div className="card soft" style={{ position: "relative" }}>
                <span className="card-number">{b.num}</span>
                <div className="section-label">BRANCH {b.num}</div>
                <h3 className="card-title">{b.title}</h3>
                <p className="card-text">{b.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn>
          <section className="callout">
            <div>
              <div className="section-label">/// NEXT</div>
              <h2 className="callout-title">Let's talk</h2>
              <p className="callout-sub">
                If you want to partner or collaborate, hit the inbox.
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
