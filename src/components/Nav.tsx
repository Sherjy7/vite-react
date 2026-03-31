import { NavLink } from "react-router-dom";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      links.map((l, i) => (
        <NavLink
          key={l.to}
          to={l.to}
          onClick={() => setOpen(false)}
          className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}
        >
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1 + i * 0.05,
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {l.label}
          </motion.span>
        </NavLink>
      )),
    []
  );

  return (
    <motion.header
      className="nav"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container nav-inner">
        <NavLink to="/" className="brand">
          <motion.div
            className="brand-mark"
            whileHover={{ rotate: -8, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L16 6v6l-7 4-7-4V6l7-4z" fill="#000" />
            </svg>
          </motion.div>
          <div className="brand-text">
            <div className="mono tiny dim" style={{ fontSize: 10 }}>
              team@
            </div>
            <div className="title">UnciaLabs</div>
          </div>
        </NavLink>

        <nav className="nav-desktop">{items}</nav>

        <motion.button
          className="nav-cta"
          whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(255,255,255,.12)" }}
          whileTap={{ scale: 0.97 }}
          onClick={() => (window.location.href = "mailto:team@uncialabs.com")}
        >
          Contact
        </motion.button>

        <button
          className="hamburger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="container nav-mobile-inner">
              <div className="section-label">/// NAVIGATION</div>
              <div className="nav-mobile-links">{items}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
