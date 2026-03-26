import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useState } from "react";
import * as THREE from "three";

function Plane3D({
  normal,
  d,
  color,
  size = 5,
}: {
  normal: [number, number, number];
  d: number;
  color: string;
  size?: number;
}) {
  const geometry = useMemo(() => {
    const n = new THREE.Vector3(...normal).normalize();
    const geom = new THREE.PlaneGeometry(size, size, 1, 1);
    const q = new THREE.Quaternion();
    q.setFromUnitVectors(new THREE.Vector3(0, 0, 1), n);
    geom.applyQuaternion(q);
    const offset = n.clone().multiplyScalar(d / n.length());
    geom.translate(offset.x, offset.y, offset.z);
    return geom;
  }, [normal, d, size]);

  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color={color} transparent opacity={0.3} side={THREE.DoubleSide} />
    </mesh>
  );
}

function IntersectionLine({
  n1,
  d1,
  n2,
  d2,
}: {
  n1: [number, number, number];
  d1: number;
  n2: [number, number, number];
  d2: number;
}) {
  const points = useMemo(() => {
    const dir = new THREE.Vector3(...n1).cross(new THREE.Vector3(...n2));
    if (dir.length() < 0.01) return null;
    dir.normalize();

    let pt = new THREE.Vector3();
    const a1 = n1[0], b1 = n1[1], c1 = n1[2];
    const a2 = n2[0], b2 = n2[1], c2 = n2[2];
    const det = a1 * b2 - a2 * b1;
    if (Math.abs(det) > 0.01) {
      pt.set((d1 * b2 - d2 * b1) / det, (a1 * d2 - a2 * d1) / det, 0);
    } else {
      const det2 = a1 * c2 - a2 * c1;
      if (Math.abs(det2) > 0.01) {
        pt.set((d1 * c2 - d2 * c1) / det2, 0, (a1 * d2 - a2 * d1) / det2);
      } else {
        pt.set(0, (d1 * c2 - d2 * c1) / (b1 * c2 - b2 * c1), (b1 * d2 - b2 * d1) / (b1 * c2 - b2 * c1));
      }
    }

    const p1 = pt.clone().add(dir.clone().multiplyScalar(5));
    const p2 = pt.clone().add(dir.clone().multiplyScalar(-5));

    return new THREE.BufferGeometry().setFromPoints([p1, p2]);
  }, [n1, d1, n2, d2]);

  if (!points) return null;
  return (
    <line geometry={points}>
      <lineBasicMaterial color="#e8c840" linewidth={3} />
    </line>
  );
}

function NormalArrow({ normal, d, color }: { normal: [number, number, number]; d: number; color: string }) {
  const n = new THREE.Vector3(...normal).normalize();
  const origin = n.clone().multiplyScalar(d / new THREE.Vector3(...normal).length());
  return (
    <primitive
      object={new THREE.ArrowHelper(n, origin, 1.2, new THREE.Color(color).getHex(), 0.15, 0.08)}
    />
  );
}

type Preset = { label: string; n1: [number, number, number]; d1: number; n2: [number, number, number]; d2: number; desc: string };

const presets: Preset[] = [
  { label: "2 plans secants", n1: [1, 0, 1], d1: 0, n2: [0, 1, 1], d2: 0, desc: "Intersection = droite passant par O" },
  { label: "Plans perpendiculaires", n1: [1, 0, 0], d1: 0, n2: [0, 1, 0], d2: 0, desc: "Intersection = axe Oz" },
  { label: "Plans paralleles", n1: [0, 0, 1], d1: 1, n2: [0, 0, 1], d2: -1, desc: "Pas d'intersection (systeme incompatible)" },
];

export default function VectorSpace3D() {
  const [preset, setPreset] = useState(0);
  const p = presets[preset];

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ width: "100%", height: "380px", borderRadius: "12px", overflow: "hidden", background: "#0a0e17" }}>
        <Canvas camera={{ position: [3, 3, 3], fov: 50 }} dpr={[1, 2]}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 8, 5]} intensity={1} />

          <Plane3D normal={p.n1} d={p.d1} color="#5b9cf6" />
          <Plane3D normal={p.n2} d={p.d2} color="#f06070" />
          <NormalArrow normal={p.n1} d={p.d1} color="#5b9cf6" />
          <NormalArrow normal={p.n2} d={p.d2} color="#f06070" />
          <IntersectionLine n1={p.n1} d1={p.d1} n2={p.n2} d2={p.d2} />

          <axesHelper args={[2.5]} />
          <gridHelper args={[6, 12, "#1e293b", "#141824"]} />
          <OrbitControls enablePan={false} enableDamping dampingFactor={0.08} />
        </Canvas>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "12px", flexWrap: "wrap" }}>
        {presets.map((pr, i) => (
          <button
            key={i}
            onClick={() => setPreset(i)}
            style={{
              padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: 700,
              fontSize: "0.82rem", transition: "all 0.15s",
              border: preset === i ? "2px solid #e8c840" : "1px solid rgba(255,255,255,0.08)",
              background: preset === i ? "rgba(255,255,255,0.06)" : "transparent",
              color: preset === i ? "#e8c840" : "#4a5568",
            }}
          >
            {pr.label}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "8px", fontSize: "0.83rem", color: "#8896ab" }}>
        <span style={{ color: "#5b9cf6" }}>Plan 1</span> (bleu) et{" "}
        <span style={{ color: "#f06070" }}>Plan 2</span> (rouge).{" "}
        <span style={{ color: "#e8c840" }}>Intersection</span> (jaune).{" "}
        {p.desc}
      </div>
    </div>
  );
}
