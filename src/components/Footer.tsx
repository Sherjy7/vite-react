import { Link } from "react-router-dom";
import { FadeIn } from "./Motion";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <FadeIn>
          <div>
            <div
              className="section-label"
              style={{ letterSpacing: 3, marginBottom: 6 }}
            >
              /// BUILT BY BUILDERS
            </div>
            <div className="tiny" style={{ color: "var(--muted)" }}>
              &copy; {new Date().getFullYear()} UnciaLabs. All rights
              reserved.
            </div>
          </div>
        </FadeIn>

        <div className="footer-links">
          <Link to="/labs">Labs</Link>
          <Link to="/about">About</Link>
          <Link to="/methodology">Methodology</Link>
          <a href="mailto:team@uncialabs.com">team@uncialabs.com</a>
        </div>
      </div>
    </footer>
  );
}
