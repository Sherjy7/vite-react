import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TextClipReveal,
  PageTransition,
} from "../components/Motion";

const steps = [
  {
    num: "01",
    title: "Define the wedge",
    sub: "One user, one pain, one outcome.",
  },
  {
    num: "02",
    title: "Prototype fast",
    sub: "Days \u2192 a demo. Weeks \u2192 a usable tool.",
  },
  {
    num: "03",
    title: "Instrument everything",
    sub: "Logs, analytics, and feedback baked-in.",
  },
  {
    num: "04",
    title: "Scale the system",
    sub: "Reliability, onboarding, and repeatable ops.",
  },
];

export default function Methodology() {
  return (
    <PageTransition>
      <div className="stack">
        <section className="pagehead">
          <FadeIn>
            <div className="section-label">/// METHODOLOGY</div>
          </FadeIn>
          <h1 className="page-title">
            <span className="hero-title-line">
              <TextClipReveal delay={0.1}>Build. Iterate.</TextClipReveal>
            </span>
            <span className="hero-title-line">
              <TextClipReveal delay={0.25}>Scale.</TextClipReveal>
            </span>
          </h1>
          <FadeIn delay={0.4}>
            <p className="page-sub">
              Our loop is simple: ship something real, shorten feedback
              cycles, then scale what works.
            </p>
          </FadeIn>
        </section>

        <div className="divider-animated" />

        <section className="section">
          <FadeIn>
            <div className="section-head">
              <div>
                <div className="section-label">/// OPERATING LOOP</div>
                <h2 className="section-title">Four steps</h2>
              </div>
            </div>
          </FadeIn>

          <StaggerContainer className="list" stagger={0.1}>
            {steps.map((step) => (
              <StaggerItem key={step.num}>
                <div className="list-item">
                  <div className="list-num">{step.num}</div>
                  <div>
                    <div className="list-title">{step.title}</div>
                    <div className="list-sub">{step.sub}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </div>
    </PageTransition>
  );
}
