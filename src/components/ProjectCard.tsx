import type { Project } from "../data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="card">
      <div className="card-top">
        <div className="mono tiny dim">{p.tag}</div>
        {p.year ? <div className="mono tiny dim">{p.year}</div> : null}
      </div>

      <h3 className="card-title">{p.name}</h3>
      <p className="card-text">{p.blurb}</p>

      <div className="card-bottom">
        <span className="mono tiny dim">///</span>
        <span className="mono tiny">UNCIALABS</span>
      </div>
    </article>
  );
}
