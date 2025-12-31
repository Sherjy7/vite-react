import { useEffect, useMemo, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, Image, Stars, Text, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

type Project = {
  title: string;
  tagline: string;
  bullets: string[];
  tags: string[];
};

function clamp(n: number, a = 0, b = 1) {
  return Math.max(a, Math.min(b, n));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function Panel({
  title,
  subtitle,
  position,
  active,
  onClick,
}: {
  title: string;
  subtitle: string;
  position: [number, number, number];
  active?: boolean;
  onClick?: () => void;
}) {
  const ref = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "default";
    return () => {
      document.body.style.cursor = "default";
    };
  }, [hovered]);

  useFrame((_, dt) => {
    if (!ref.current) return;
    const target = active ? 1.06 : hovered ? 1.03 : 1.0;
    ref.current.scale.x = lerp(ref.current.scale.x, target, 1 - Math.pow(0.001, dt));
    ref.current.scale.y = lerp(ref.current.scale.y, target, 1 - Math.pow(0.001, dt));
    ref.current.scale.z = lerp(ref.current.scale.z, target, 1 - Math.pow(0.001, dt));
  });

  const base = active ? 0.16 : hovered ? 0.12 : 0.08;
  const edge = active ? 0.28 : hovered ? 0.18 : 0.12;

  return (
    <group
      ref={ref}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <RoundedBox args={[5.6, 2.6, 0.25]} radius={0.25} smoothness={10}>
        <meshStandardMaterial
          color={new THREE.Color("#0b1224")}
          roughness={0.35}
          metalness={0.25}
          emissive={new THREE.Color("#66dbff")}
          emissiveIntensity={base}
        />
      </RoundedBox>

      {/* subtle border glow */}
      <RoundedBox args={[5.65, 2.65, 0.18]} radius={0.25} smoothness={10}>
        <meshBasicMaterial
          color={new THREE.Color("#66dbff")}
          transparent
          opacity={edge}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </RoundedBox>

      <Text
        position={[-2.45, 0.55, 0.25]}
        fontSize={0.34}
        color="#EAF6FF"
        anchorX="left"
        anchorY="middle"
      >
        {title}
      </Text>

      <Text
        position={[-2.45, -0.25, 0.25]}
        fontSize={0.22}
        color="#A9C7D9"
        anchorX="left"
        anchorY="middle"
        maxWidth={5.0}
      >
        {subtitle}
      </Text>
    </group>
  );
}

export default function UnciaScene({
  section,
  setSection,
  sectionLabels,
  projects,
}: {
  section: number;
  setSection: (n: number) => void;
  sectionLabels: string[];
  projects: Project[];
}) {
  const { camera } = useThree();

  const sectionCount = sectionLabels.length;

  // Camera "stops" (snaps) through a 3D hallway
  const stops = useMemo(
    () => [
      { pos: new THREE.Vector3(0, 0.2, 10), look: new THREE.Vector3(0, 0, 0) },     // Work
      { pos: new THREE.Vector3(0, -0.4, 9.2), look: new THREE.Vector3(0, -0.6, 0) }, // Projects
      { pos: new THREE.Vector3(0, -1.1, 8.6), look: new THREE.Vector3(0, -1.2, 0) }, // Focus
      { pos: new THREE.Vector3(0, -1.8, 8.2), look: new THREE.Vector3(0, -1.9, 0) }, // About
      { pos: new THREE.Vector3(0, -2.5, 8.0), look: new THREE.Vector3(0, -2.6, 0) }, // Contact
    ],
    []
  );

  const target = useRef({ idx: section });
  useEffect(() => {
    target.current.idx = section;
  }, [section]);

  // Wheel/keys = snap between sections
  const cooldown = useRef(0);
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const now = performance.now();
      if (now < cooldown.current) return;
      if (Math.abs(e.deltaY) < 18) return;

      cooldown.current = now + 420;
      setSection(clamp(section + (e.deltaY > 0 ? 1 : -1), 0, sectionCount - 1));
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        setSection(clamp(section + 1, 0, sectionCount - 1));
      }
      if (e.key === "ArrowUp" || e.key === "PageUp") {
        setSection(clamp(section - 1, 0, sectionCount - 1));
      }
      if (e.key === "Home") setSection(0);
      if (e.key === "End") setSection(sectionCount - 1);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, [section, sectionCount, setSection]);

  // Animate camera to the active stop
  useFrame((_, dt) => {
    const idx = target.current.idx;
    const s = stops[Math.min(idx, stops.length - 1)];
    camera.position.lerp(s.pos, 1 - Math.pow(0.001, dt));
    const look = new THREE.Vector3().lerpVectors(
      new THREE.Vector3(),
      s.look,
      1
    );
    camera.lookAt(look);
  });

  // Eye openness increases as you go deeper
  const eyeOpen = clamp(section / Math.max(1, sectionCount - 1));

  return (
    <>
      {/* Ambient + key light */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[6, 10, 8]} intensity={1.1} />
      <pointLight position={[-6, 2, 6]} intensity={0.6} />

      {/* Atmosphere */}
      <Stars radius={60} depth={45} count={900} factor={2.4} fade speed={0.4} />

      {/* Background logo billboard */}
      <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.25}>
        <group position={[0, -1.2, -6]}>
          <Image
            url="/uncialabs-logo.png"
            transparent
            opacity={0.22}
            scale={[11.5, 6.5]}
          />
          {/* Eye glow sprites (fake “opening” effect) */}
          <mesh position={[-1.1, 0.35, 0.05]}>
            <circleGeometry args={[0.65, 64]} />
            <meshBasicMaterial
              color={"#66dbff"}
              transparent
              opacity={0.08 + eyeOpen * 0.55}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
          <mesh position={[1.1, 0.35, 0.05]}>
            <circleGeometry args={[0.65, 64]} />
            <meshBasicMaterial
              color={"#66dbff"}
              transparent
              opacity={0.08 + eyeOpen * 0.55}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        </group>
      </Float>

      {/* 3D “panels” */}
      <group position={[0, 0, 0]}>
        <Panel
          title="Work"
          subtitle="A build hub. Tools, systems, experiments, shipped results."
          position={[0, 1.4, 0]}
          active={section === 0}
          onClick={() => setSection(0)}
        />

        <Panel
          title="Projects"
          subtitle={`${projects.length} builds (replace placeholders with real projects).`}
          position={[0, -0.1, 0]}
          active={section === 1}
          onClick={() => setSection(1)}
        />

        <Panel
          title="Focus"
          subtitle="Computer vision, agents, tooling, product experiments."
          position={[0, -1.6, 0]}
          active={section === 2}
          onClick={() => setSection(2)}
        />

        <Panel
          title="About"
          subtitle="UnciaLabs is a product-focused studio. Shipping is the resume."
          position={[0, -3.1, 0]}
          active={section === 3}
          onClick={() => setSection(3)}
        />

        <Panel
          title="Contact"
          subtitle="dev@uncialabs.com • Add socials • Add real links"
          position={[0, -4.6, 0]}
          active={section === 4}
          onClick={() => setSection(4)}
        />
      </group>
    </>
  );
}
