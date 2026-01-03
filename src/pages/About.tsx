export default function About() {
  return (
    <div className="stack">
      <section className="pagehead">
        <div className="mono tiny dim">/// ABOUT</div>
        <h1 className="page-title">A lab for real-world impact</h1>
        <p className="page-sub">
          UnciaLabs is the innovation layer: we design, engineer, and ship technology
          that solves concrete problems — with a strong bias toward execution.
        </p>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="mono tiny dim">/// PRINCIPLES</div>
          <div className="mono tiny dim">0 0 3</div>
        </div>

        <div className="two-col">
          <div className="card soft">
            <h3 className="card-title">Taste</h3>
            <p className="card-text">
              Clean UX, clear messaging, and strong product choices.
            </p>
          </div>

          <div className="card soft">
            <h3 className="card-title">Speed</h3>
            <p className="card-text">Momentum beats perfection. Ship, learn, refine.</p>
          </div>

          <div className="card soft">
            <h3 className="card-title">Systems</h3>
            <p className="card-text">Everything becomes a repeatable workflow.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
