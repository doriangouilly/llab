import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";

type FnDef = {
  label: string;
  f: (x: number, y: number) => number;
  gx: (x: number, y: number) => number;
  gy: (x: number, y: number) => number;
  color: string;
};

const FNS: Record<string, FnDef> = {
  bowl: {
    label: "Puits (x² + y²)",
    f: (x, y) => x * x + y * y,
    gx: (x) => 2 * x,
    gy: (_, y) => 2 * y,
    color: "#4ecb8d",
  },
  saddle: {
    label: "Selle (x² − y²)",
    f: (x, y) => x * x - y * y,
    gx: (x) => 2 * x,
    gy: (_, y) => -2 * y,
    color: "#5b9cf6",
  },
  gaussian: {
    label: "Gaussienne",
    f: (x, y) => 3 * Math.exp(-(x * x + y * y) * 0.8),
    gx: (x, y) => -4.8 * x * Math.exp(-(x * x + y * y) * 0.8),
    gy: (x, y) => -4.8 * y * Math.exp(-(x * x + y * y) * 0.8),
    color: "#a78bfa",
  },
};

const FN_KEYS = Object.keys(FNS);

function SurfaceMesh({ f, color }: { f: (x: number, y: number) => number; color: string }) {
  const geometry = useMemo(() => {
    const size = 5;
    const segs = 60;
    const geom = new THREE.PlaneGeometry(size, size, segs, segs);
    const pos = geom.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      pos.setZ(i, f(x, y));
    }
    geom.computeVertexNormals();
    return geom;
  }, [f]);

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <mesh geometry={geometry}>
        <meshStandardMaterial 
          color={color} 
          roughness={0.3} 
          metalness={0.1} 
          side={THREE.DoubleSide} 
          transparent
          opacity={0.65}
        />
      </mesh>
      <mesh geometry={geometry}>
        <meshBasicMaterial 
          color="#ffffff" 
          wireframe 
          transparent 
          opacity={0.15} 
        />
      </mesh>
    </group>
  );
}

function SceneContent({ fnKey, pos, setPos, isPlaying }: { fnKey: string; pos: [number, number]; setPos: (p: [number, number]) => void; isPlaying: boolean }) {
  const { camera, raycaster, gl } = useThree();
  const [dragging, setDragging] = useState(false);
  const fn = FNS[fnKey];
  
  const mouse = useRef(new THREE.Vector2());

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      const rect = gl.domElement.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    gl.domElement.addEventListener("pointermove", onPointerMove);
    return () => gl.domElement.removeEventListener("pointermove", onPointerMove);
  }, [gl]);

  useFrame((state) => {
    if (dragging) {
      raycaster.setFromCamera(mouse.current, camera);
      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
      const target = new THREE.Vector3();
      if (raycaster.ray.intersectPlane(plane, target)) {
        const lim = 2.4;
        setPos([
          Math.max(-lim, Math.min(lim, target.x)),
          Math.max(-lim, Math.min(lim, target.z)),
        ]);
      }
    } else if (isPlaying) {
      const t = state.clock.getElapsedTime() * 0.3; 
      const scale = 2.1; 
      const nextX = Math.cos(t) * scale;
      const nextY = Math.sin(2 * t) * (scale * 0.8); 
      
      setPos([nextX, nextY]);
    }
  });

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    setDragging(true);
    gl.domElement.style.cursor = 'grabbing';
  };

  const handlePointerUp = () => {
    setDragging(false);
    gl.domElement.style.cursor = 'crosshair';
  };

  const z = fn.f(pos[0], pos[1]);
  const gx = fn.gx(pos[0], pos[1]);
  const gy = fn.gy(pos[0], pos[1]);

  const gradDir = new THREE.Vector3(gx, 0, gy);
  const gradLen = gradDir.length();
  if (gradLen > 0.001) gradDir.normalize();

  const linePoints = useMemo(() => {
    return [new THREE.Vector3(pos[0], 0, pos[1]), new THREE.Vector3(pos[0], z, pos[1])];
  }, [pos, z]);

  return (
    <group onPointerUp={handlePointerUp}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 15, 10]} intensity={1.2} />
      
      <SurfaceMesh f={fn.f} color={fn.color} />

      <gridHelper args={[6, 12, 0x444444, 0x222222]} />
      <axesHelper args={[3]} />

      <mesh position={[pos[0], 0, pos[1]]} onPointerDown={handlePointerDown}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#e8c840" />
      </mesh>

      <mesh position={[pos[0], z, pos[1]]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#f06070" />
      </mesh>

      <line>
        <bufferGeometry attach="geometry" {...new THREE.BufferGeometry().setFromPoints(linePoints)} />
        <lineBasicMaterial attach="material" color="#a8b4c8" transparent opacity={0.5} />
      </line>

      {gradLen > 0.01 && (
        <primitive 
          object={new THREE.ArrowHelper(
            gradDir, 
            new THREE.Vector3(pos[0], z, pos[1]), 
            Math.max(0.3, gradLen * 0.4), 
            0xf06070, 
            0.15, 
            0.08
          )} 
        />
      )}

      <OrbitControls makeDefault enablePan={false} maxPolarAngle={Math.PI / 2 + 0.2} minDistance={2} maxDistance={12} enableDamping dampingFactor={0.1} />
    </group>
  );
}

export default function SurfaceExplorer3D() {
  const [fnKey, setFnKey] = useState<string>("saddle");
  const [pos, setPos] = useState<[number, number]>([1, 1]);
  const [isPlaying, setIsPlaying] = useState(false);

  const fn = FNS[fnKey];
  const z = fn.f(pos[0], pos[1]);
  const gx = fn.gx(pos[0], pos[1]);
  const gy = fn.gy(pos[0], pos[1]);

  return (
    <div style={{ width: "100%", background: "rgba(10,14,23,0.4)", borderRadius: "16px", padding: "16px", border: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ height: "600px", width: "100%", borderRadius: "12px", overflow: "hidden", background: "#0a0e17", position: "relative", cursor: "crosshair" }}>
        <Canvas camera={{ position: [4, 3.5, 4], fov: 45 }} dpr={[1, 2]}>
          <SceneContent fnKey={fnKey} pos={pos} setPos={setPos} isPlaying={isPlaying} />
        </Canvas>
        
        <div style={{
          position: "absolute", top: 12, left: 12,
          background: "rgba(10,14,23,0.6)", backdropFilter: "blur(4px)",
          borderRadius: 6, padding: "6px 10px", fontSize: "0.7rem",
          color: "#8896ab", lineHeight: 1.5, pointerEvents: "none",
          border: "1px solid rgba(255,255,255,0.05)"
        }}>
          <div>P <span style={{ color: "#e8c840" }}>({pos[0].toFixed(2)}, {pos[1].toFixed(2)})</span></div>
          <div>z = <span style={{ color: fn.color }}>{z.toFixed(2)}</span></div>
          <div>∇f = <span style={{ color: "#f06070" }}>({gx.toFixed(1)}, {gy.toFixed(1)})</span></div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16, flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", gap: 8 }}>
          {FN_KEYS.map((k) => (
            <button 
              key={k} 
              onClick={() => { setFnKey(k); setIsPlaying(false); }} 
              style={{
                padding: "6px 14px", borderRadius: "6px",
                border: fnKey === k ? `1px solid ${FNS[k].color}` : "1px solid rgba(255,255,255,0.1)",
                background: fnKey === k ? `${FNS[k].color}1A` : "transparent",
                color: fnKey === k ? FNS[k].color : "#8896ab",
                cursor: "pointer", fontSize: "0.85rem", fontWeight: 600, transition: "all 0.2s"
              }}
            >
              {FNS[k].label}
            </button>
          ))}
        </div>
        
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "6px 14px", borderRadius: "6px",
            border: isPlaying ? "1px solid #5b9cf6" : "1px solid rgba(255,255,255,0.1)",
            background: isPlaying ? "rgba(91, 156, 246, 0.1)" : "transparent",
            color: isPlaying ? "#5b9cf6" : "#8896ab",
            cursor: "pointer", fontSize: "0.85rem", fontWeight: 600, transition: "all 0.2s"
          }}
        >
          {isPlaying ? (
            <span style={{ fontSize: "1.1rem", lineHeight: "0.8rem", color: "#5b9cf6" }}>❚❚</span>
          ) : (
            <span style={{ fontSize: "1.2rem", lineHeight: "0.8rem", color: "#4ecb8d" }}>▶</span>
          )}
          <span>{isPlaying ? "Pause" : "Play"}</span>
        </button>
      </div>
    </div>
  );
}