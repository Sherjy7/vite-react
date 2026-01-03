import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="mono tiny dim">/// BUILT BY BUILDERS</div>
          <div className="tiny">
            © {new Date().getFullYear()} UnciaLabs. All rights reserved.
          </div>
        </div>

        <div className="footer-links">
          <Link to="/labs">Labs</Link>
          <Link to="/methodology">Methodology</Link>
          <a href="mailto:team@uncialabs.com">team@uncialabs.com</a>
        </div>
      </div>
    </footer>
  );
}
