import { NavLink } from "react-router-dom";
import { useMemo, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/labs", label: "Labs" },
  { to: "/about", label: "About" },
  { to: "/methodology", label: "Methodology" },
  { to: "/branches", label: "Branches" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const items = useMemo(
    () =>
      links.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          onClick={() => setOpen(false)}
          className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}
        >
          {l.label}
        </NavLink>
      )),
    []
  );

  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <div className="brand-mark" />
          <div className="brand-text">
            <div className="mono tiny">team@</div>
            <div className="title">UnciaLabs</div>
          </div>
        </div>

        <nav className="nav-desktop">{items}</nav>

        <button
          className="nav-cta"
          onClick={() => (window.location.href = "mailto:team@uncialabs.com")}
        >
          Contact
        </button>

        <button
          className="hamburger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          <div className="container nav-mobile-inner">
            <div className="mono tiny dim">/// NAVIGATION</div>
            <div className="nav-mobile-links">{items}</div>
          </div>
        </div>
      )}
    </header>
  );
}
