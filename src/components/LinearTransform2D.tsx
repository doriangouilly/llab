import { Mafs, Coordinates, Vector, Polygon, Text, Line, useMovablePoint } from "mafs";
import "mafs/core.css";
import "mafs/font.css";
import { useState, useMemo } from "react";

export default function LinearTransform2D() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(1);

  const det = a * d - b * c;

  const transform = (x: number, y: number): [number, number] => [
    a * x + b * y,
    c * x + d * y,
  ];

  const e1t = transform(1, 0);
  const e2t = transform(0, 1);

  const gridLines = useMemo(() => {
    const lines: { p1: [number, number]; p2: [number, number]; axis: boolean }[] = [];
    for (let i = -4; i <= 4; i++) {
      lines.push({
        p1: transform(i, -4),
        p2: transform(i, 4),
        axis: i === 0,
      });
      lines.push({
        p1: transform(-4, i),
        p2: transform(4, i),
        axis: i === 0,
      });
    }
    return lines;
  }, [a, b, c, d]);

  const parallelogram: [number, number][] = [
    [0, 0],
    e1t,
    [e1t[0] + e2t[0], e1t[1] + e2t[1]],
    e2t,
  ];

  const presets: { label: string; m: [number, number, number, number] }[] = [
    { label: "Id", m: [1, 0, 0, 1] },
    { label: "Rot 45°", m: [0.707, -0.707, 0.707, 0.707] },
    { label: "Cisaillement", m: [1, 1, 0, 1] },
    { label: "Réflexion", m: [1, 0, 0, -1] },
    { label: "det = 0", m: [1, 2, 0.5, 1] },
  ];

  const sliderStyle: React.CSSProperties = {
    width: "100%",
    accentColor: "#5b9cf6",
    margin: "2px 0",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.78rem",
    color: "#a8b4c8",
    fontFamily: "monospace",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "6px",
  };

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <Mafs height={380} viewBox={{ x: [-4, 4], y: [-4, 4] }} preserveAspectRatio={true}>
        <Coordinates.Cartesian subdivisions={2} />

        {gridLines.map((l, i) => (
          <Line.Segment
            key={i}
            point1={l.p1}
            point2={l.p2}
            color={l.axis ? "#475569" : "#5b9cf6"}
            weight={l.axis ? 1.5 : 0.8}
            opacity={l.axis ? 0.5 : 0.15}
          />
        ))}

        <Polygon
          points={parallelogram}
          color={det >= 0 ? "#4ecb8d" : "#f06070"}
          fillOpacity={0.15}
          strokeOpacity={0.6}
          weight={2}
        />

        <Vector tail={[0, 0]} tip={e1t} color="#f06070" weight={3} />
        <Vector tail={[0, 0]} tip={e2t} color="#5b9cf6" weight={3} />

        <Text x={e1t[0] + 0.15} y={e1t[1] + 0.2} size={14} color="#f06070">
          Ae1
        </Text>
        <Text x={e2t[0] + 0.15} y={e2t[1] + 0.2} size={14} color="#5b9cf6">
          Ae2
        </Text>
        <Text x={0.2} y={-0.3} size={12} color="#a8b4c8">
          O
        </Text>
      </Mafs>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "8px 16px",
        maxWidth: "380px",
        margin: "12px auto 0",
        padding: "12px 16px",
        background: "rgba(10,14,23,0.5)",
        borderRadius: "10px",
        border: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={labelStyle}>
          <span>a = {a.toFixed(2)}</span>
          <input type="range" min={-2} max={2} step={0.05} value={a} onChange={(e) => setA(+e.target.value)} style={sliderStyle} />
        </div>
        <div style={labelStyle}>
          <span>b = {b.toFixed(2)}</span>
          <input type="range" min={-2} max={2} step={0.05} value={b} onChange={(e) => setB(+e.target.value)} style={sliderStyle} />
        </div>
        <div style={labelStyle}>
          <span>c = {c.toFixed(2)}</span>
          <input type="range" min={-2} max={2} step={0.05} value={c} onChange={(e) => setC(+e.target.value)} style={sliderStyle} />
        </div>
        <div style={labelStyle}>
          <span>d = {d.toFixed(2)}</span>
          <input type="range" min={-2} max={2} step={0.05} value={d} onChange={(e) => setD(+e.target.value)} style={sliderStyle} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "10px", flexWrap: "wrap" }}>
        {presets.map((p) => (
          <button
            key={p.label}
            onClick={() => { setA(p.m[0]); setB(p.m[1]); setC(p.m[2]); setD(p.m[3]); }}
            style={{
              padding: "4px 10px", borderRadius: "6px", cursor: "pointer",
              border: "1px solid rgba(255,255,255,0.1)", background: "transparent",
              color: "#8896ab", fontSize: "0.78rem", fontWeight: 600,
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "8px", fontSize: "0.85rem", color: "#a8b4c8" }}>
        A = <span style={{ fontFamily: "monospace" }}>
          (({a.toFixed(2)}, {b.toFixed(2)}), ({c.toFixed(2)}, {d.toFixed(2)}))
        </span>
        {" | "}
        det(A) = <strong style={{ color: det > 0.001 ? "#4ecb8d" : det < -0.001 ? "#f06070" : "#e8c840" }}>
          {det.toFixed(3)}
        </strong>
        {" | "}
        Aire = <strong style={{ color: "#c084fc" }}>{Math.abs(det).toFixed(3)}</strong>
      </div>
    </div>
  );
}
