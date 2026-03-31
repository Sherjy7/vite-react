import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TextClipReveal,
  PageTransition,
} from "../components/Motion";

export default function About() {
  return (
    <PageTransition>
      <div className="stack">
        <section className="pagehead">
          <FadeIn>
            <div className="section-label">/// ABOUT</div>
          </FadeIn>
          <h1 className="page-title">
            <span className="hero-title-line">
              <TextClipReveal delay={0.1}>A lab for</TextClipReveal>
            </span>
            <span className="hero-title-line">
              <TextClipReveal delay={0.25}>real-world impact</TextClipReveal>
            </span>
          </h1>
          <FadeIn delay={0.4}>
            <p className="page-sub">
              UnciaLabs is the innovation layer: we design, engineer, and
              ship technology that solves concrete problems — with a strong
              bias toward execution.
            </p>
          </FadeIn>
        </section>

        <div className="divider-animated" />

        <section className="section">
          <FadeIn>
            <div className="section-head">
              <div>
                <div className="section-label">/// PRINCIPLES</div>
                <h2 className="section-title">What drives us</h2>
              </div>
            </div>
          </FadeIn>

          <StaggerContainer className="grid" stagger={0.12}>
            {[
              {
                title: "Taste",
                text: "Clean UX, clear messaging, and strong product choices.",
                num: "01",
              },
              {
                title: "Speed",
                text: "Momentum beats perfection. Ship, learn, refine.",
                num: "02",
              },
              {
                title: "Systems",
                text: "Everything becomes a repeatable workflow.",
                num: "03",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="card soft" style={{ position: "relative" }}>
                  <span className="card-number">{item.num}</span>
                  <div className="section-label">PRINCIPLE {item.num}</div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </div>
    </PageTransition>
  );
}
