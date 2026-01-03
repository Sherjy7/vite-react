export default function Branches() {
  return (
    <div className="stack">
      <section className="pagehead">
        <div className="mono tiny dim">/// BRANCHES</div>
        <h1 className="page-title">Core branches</h1>
        <p className="page-sub">
          Different branches, one goal: create leverage through software and systems.
        </p>
      </section>

      <div className="two-col">
        <div className="card soft">
          <div className="mono tiny dim">BRANCH 01</div>
          <h3 className="card-title">R&amp;D</h3>
          <p className="card-text">Exploration, prototypes, and research-driven builds.</p>
        </div>

        <div className="card soft">
          <div className="mono tiny dim">BRANCH 02</div>
          <h3 className="card-title">Product Studio</h3>
          <p className="card-text">Shipping real tools with real users and measurable outcomes.</p>
        </div>

        <div className="card soft">
          <div className="mono tiny dim">BRANCH 03</div>
          <h3 className="card-title">Systems &amp; Ops</h3>
          <p className="card-text">Automation, internal tooling, analytics, reliability.</p>
        </div>

        <div className="card soft">
          <div className="mono tiny dim">BRANCH 04</div>
          <h3 className="card-title">Community (Optional)</h3>
          <p className="card-text">Builders connecting, learning, collaborating, and scaling.</p>
        </div>
      </div>

      <section className="callout">
        <div>
          <div className="mono tiny dim">/// NEXT</div>
          <h2 className="callout-title">Let’s talk</h2>
          <p className="callout-sub">If you want to partner or collaborate, hit the inbox.</p>
        </div>
        <a className="btn primary" href="mailto:team@uncialabs.com">
          Get in touch
        </a>
      </section>
    </div>
  );
}
