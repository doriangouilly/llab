import { Mafs, Coordinates, Plot, Vector, Circle, Line, useMovablePoint } from "mafs";
import "mafs/core.css";
import "mafs/font.css";
import { useState, useMemo } from "react";

type FnKey = "bowl" | "saddle";

type FnDef = {
  label: string;
  gx: (x: number, y: number) => number;
  gy: (x: number, y: number) => number;
  color: string;
};

const FNS: Record<FnKey, FnDef> = {
  bowl: {
    label: "Puits (x² + y²)",
    gx: (x) => 2 * x,
    gy: (_, y) => 2 * y,
    color: "#4ecb8d",
  },
  saddle: {
    label: "Selle (x² − y²)",
    gx: (x) => 2 * x,
    gy: (_, y) => -2 * y,
    color: "#5b9cf6",
  },
};

export default function GradientMap2D() {
  const [choice, setChoice] = useState<FnKey>("bowl");
  const fn = FNS[choice];

  const pt = useMovablePoint([1.5, 1], { color: "#e8c840" });
  const px = pt.point[0];
  const py = pt.point[1];

  const gx = fn.gx(px, py);
  const gy = fn.gy(px, py);
  const norm = Math.sqrt(gx * gx + gy * gy);

  let ux = 0, uy = 0;
  let tx = 0, ty = 0;
  
  if (norm > 0.001) {
    ux = gx / norm;
    uy = gy / norm;
    tx = -uy;
    ty = ux;
  }

  const gradScale = Math.min(2, norm * 0.4);

  const vectors = useMemo(() => {
    const arr = [];
    for (let x = -5; x <= 5; x += 1) {
      for (let y = -5; y <= 5; y += 1) {
        if (x === 0 && y === 0) continue;
        const vx = fn.gx(x, y);
        const vy = fn.gy(x, y);
        const vnorm = Math.sqrt(vx * vx + vy * vy);
        const scale = 0.4;
        arr.push(
          <Vector
            key={`${x}-${y}`}
            tail={[x, y]}
            tip={[x + (vx / vnorm) * scale, y + (vy / vnorm) * scale]}
            color="#5b9cf6"
            weight={1.5}
            opacity={0.3}
          />
        );
      }
    }
    return arr;
  }, [fn]);

  const levelCurves = useMemo(() => {
    if (choice === "bowl") {
      return [1, 2, 4, 6, 9, 12, 16, 20].map((c) => (
        <Circle key={`b-${c}`} center={[0, 0]} radius={Math.sqrt(c)} color="#a8b4c8" weight={1.5} strokeOpacity={0.4} fillOpacity={0} />
      ));
    } else {
      const curves = [];
      const levels = [1, 2, 4, 6, 9, 12, 16];
      levels.forEach(c => {
        const r = Math.sqrt(c);
        curves.push(<Plot.Parametric key={`s1-${c}`} t={[-3, 3]} xy={t => [r * Math.cosh(t), r * Math.sinh(t)]} color="#a8b4c8" weight={1.5} opacity={0.4} />);
        curves.push(<Plot.Parametric key={`s2-${c}`} t={[-3, 3]} xy={t => [-r * Math.cosh(t), r * Math.sinh(t)]} color="#a8b4c8" weight={1.5} opacity={0.4} />);
        curves.push(<Plot.Parametric key={`s3-${c}`} t={[-3, 3]} xy={t => [r * Math.sinh(t), r * Math.cosh(t)]} color="#a8b4c8" weight={1.5} opacity={0.4} />);
        curves.push(<Plot.Parametric key={`s4-${c}`} t={[-3, 3]} xy={t => [r * Math.sinh(t), -r * Math.cosh(t)]} color="#a8b4c8" weight={1.5} opacity={0.4} />);
      });
      curves.push(<Plot.OfX key="s0-1" y={x => x} color="#a8b4c8" weight={1.5} opacity={0.4} />);
      curves.push(<Plot.OfX key="s0-2" y={x => -x} color="#a8b4c8" weight={1.5} opacity={0.4} />);
      return curves;
    }
  }, [choice]);

  return (
    <div style={{ width: "100%", background: "rgba(10,14,23,0.4)", borderRadius: "16px", padding: "16px", border: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ borderRadius: "12px", overflow: "hidden", background: "#0a0e17" }}>
        <Mafs height={400} viewBox={{ x: [-4.5, 4.5], y: [-4.5, 4.5] }} pan={false} zoom={false}>
          <Coordinates.Cartesian subdivisions={2} />
          
          {vectors}
          {levelCurves}

          {norm > 0.001 && (
            <>
              <Line.Segment
                point1={[px - tx * 10, py - ty * 10]}
                point2={[px + tx * 10, py + ty * 10]}
                color="#4ecb8d"
                weight={2}
                opacity={0.8}
              />

              <Line.Segment point1={[px + tx * 0.3, py + ty * 0.3]} point2={[px + tx * 0.3 + ux * 0.3, py + ty * 0.3 + uy * 0.3]} color="#f06070" weight={2} />
              <Line.Segment point1={[px + tx * 0.3 + ux * 0.3, py + ty * 0.3 + uy * 0.3]} point2={[px + ux * 0.3, py + uy * 0.3]} color="#f06070" weight={2} />

              <Vector
                tail={[px, py]}
                tip={[px + ux * gradScale, py + uy * gradScale]}
                color="#f06070"
                weight={4}
              />
            </>
          )}

          {pt.element}
        </Mafs>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
        {(Object.keys(FNS) as FnKey[]).map((k) => (
          <button 
            key={k} 
            onClick={() => setChoice(k)} 
            style={{
              padding: "6px 16px", borderRadius: "8px", cursor: "pointer", fontWeight: 700,
              fontSize: "0.85rem", transition: "all 0.2s",
              border: choice === k ? `2px solid ${FNS[k].color}` : "1px solid rgba(255,255,255,0.1)",
              background: choice === k ? `${FNS[k].color}1A` : "transparent",
              color: choice === k ? FNS[k].color : "#8896ab"
            }}
          >
            {FNS[k].label}
          </button>
        ))}
      </div>
    </div>
  );
}