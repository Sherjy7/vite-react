import { labs } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Labs() {
  return (
    <div className="stack">
      <section className="pagehead">
        <div className="mono tiny dim">/// LABS</div>
        <h1 className="page-title">The workbench</h1>
        <p className="page-sub">
          Products, experiments, and systems we’re building inside UnciaLabs.
        </p>
      </section>

      <div className="grid">
        {labs.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </div>

      <section className="callout">
        <div>
          <div className="mono tiny dim">/// COLLAB</div>
          <h2 className="callout-title">Want to build with us?</h2>
          <p className="callout-sub">
            If you’re a builder, operator, or designer — reach out.
          </p>
        </div>
        <a className="btn primary" href="mailto:team@uncialabs.com">
          Email UnciaLabs
        </a>
      </section>
    </div>
  );
}
