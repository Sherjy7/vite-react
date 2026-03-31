import { TiltCard } from "./Motion";
import type { Project } from "../data/projects";

export default function ProjectCard({
  p,
  index = 0,
}: {
  p: Project;
  index?: number;
}) {
  const isLive = p.status === "live";

  const card = (
    <TiltCard className="card" tiltAmount={6}>
      <span className="card-number">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="card-top">
        <div className="badge">
          <span
            className="badge-dot"
            style={
              isLive
                ? undefined
                : { background: "rgba(255,255,255,.25)", boxShadow: "none" }
            }
          />
          {p.tag}
        </div>
        {p.year ? <div className="mono tiny dim">{p.year}</div> : null}
      </div>

      <h3 className="card-title">{p.name}</h3>
      <p className="card-text">{p.blurb}</p>

      <div className="card-bottom">
        <span className="mono tiny dim">///</span>
        <span className="mono tiny" style={{ letterSpacing: "1px" }}>
          {isLive ? "LIVE" : "COMING SOON"}
        </span>
        {isLive && (
          <span className="btn-arrow" style={{ marginLeft: "auto", fontSize: 14, color: "var(--muted)" }}>
            &#8594;
          </span>
        )}
      </div>
    </TiltCard>
  );

  if (isLive && p.url) {
    return (
      <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
        {card}
      </a>
    );
  }

  return card;
}
