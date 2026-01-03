import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Shell() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="app">
      <div className="bg-glow" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />

      <Nav />

      <main className="container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
