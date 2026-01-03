import { Routes, Route, Navigate } from "react-router-dom";
import Shell from "./components/Shell";
import Home from "./pages/Home";
import Labs from "./pages/Labs";
import About from "./pages/About";
import Methodology from "./pages/Methodology";
import Branches from "./pages/Branches";

export default function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route path="/" element={<Home />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/about" element={<About />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
