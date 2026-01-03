import { Link } from "react-router-dom";
import { featured } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="stack">
      <section className="hero">
        <div className="hero-left">
          <div className="mono tiny dim">/// BUILT BY BUILDERS</div>

          <h1 className="hero-title">
            We build,
            <br />
            iterate
            <br />& scale
            <br />
            real products.
          </h1>

          <p className="hero-sub">
            UnciaLabs is an AI lab & innovation studio focused on shipping tools,
            systems, and software that solve real problems — fast.
          </p>

          <div className="hero-actions">
            <Link to="/labs" className="btn primary">
              Explore Labs
            </Link>
            <a className="btn" href="mailto:team@uncialabs.com">
              Contact
            </a>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="mono tiny dim">FOCUS</div>
              <div className="stat-val">AI × Tools</div>
            </div>
            <div className="stat">
              <div className="mono tiny dim">MODE</div>
              <div className="stat-val">Ship fast</div>
            </div>
            <div className="stat">
              <div className="mono tiny dim">LOCATION</div>
              <div className="stat-val">Ontario</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="panel">
            <div className="mono tiny dim">/// SIGNAL</div>
            <div className="panel-big mono">
              UNCI<span className="dim">A</span>
              <br />
              LABS
            </div>
            <div className="panel-lines">
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </div>
            <div className="mono tiny dim">experiments → prototypes → products</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="mono tiny dim">/// FEATURED BUILDS</div>
          <div className="mono tiny dim">0 0 1</div>
        </div>

        <div className="grid">
          {featured.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </section>

      <section className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>BUILT BY BUILDERS</span>
          <span className="dim">///</span>
          <span>SHIP FAST</span>
          <span className="dim">///</span>
          <span>SPEED & TASTE</span>
          <span className="dim">///</span>
          <span>REAL SYSTEMS</span>
          <span className="dim">///</span>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div className="mono tiny dim">/// HOW WE WORK</div>
          <div className="mono tiny dim">0 0 2</div>
        </div>

        <div className="two-col">
          <div className="card soft">
            <h3 className="card-title">Build</h3>
            <p className="card-text">
              Start with a narrow wedge. Prototype in days, not months.
            </p>
          </div>

          <div className="card soft">
            <h3 className="card-title">Iterate</h3>
            <p className="card-text">
              Tight feedback loops. Measure what matters. Cut what doesn’t.
            </p>
          </div>

          <div className="card soft">
            <h3 className="card-title">Scale</h3>
            <p className="card-text">
              Harden the system: reliability, analytics, and repeatable ops.
            </p>
          </div>
        </div>

        <div style={{ height: 8 }} />

        <Link to="/methodology" className="btn">
          Read Methodology
        </Link>
      </section>
    </div>
  );
}
