import { Mafs, Coordinates, Plot, Polygon, Text } from "mafs";
import "mafs/core.css";
import "mafs/font.css";
import { useState } from "react";

export default function RiemannSums() {
  const [n, setN] = useState(6);
  const f = (x: number) => -0.15 * x * x * x + 0.8 * x * x - 0.2 * x + 0.5;
  const a = 0.5;
  const b = 4.5;
  const dx = (b - a) / n;

  const rects: [number, number][][] = [];
  let approx = 0;
  for (let i = 0; i < n; i++) {
    const xi = a + i * dx;
    const yi = f(xi);
    approx += yi * dx;
    rects.push([
      [xi, 0],
      [xi, yi],
      [xi + dx, yi],
      [xi + dx, 0],
    ]);
  }

  return (
    <div>
      <Mafs
        height={300}
        viewBox={{ x: [-0.5, 5.5], y: [-0.5, 3.5] }}
        preserveAspectRatio={false}
      >
        <Coordinates.Cartesian subdivisions={2} />
        {rects.map((pts, i) => (
          <Polygon
            key={i}
            points={pts}
            color="#5b9cf6"
            fillOpacity={0.25}
            strokeOpacity={0.6}
            weight={1}
          />
        ))}
        <Plot.OfX y={f} color="#4ecb8d" weight={3} />
        <Text x={2.5} y={3.2} size={14} color="#4ecb8d">
          f(x)
        </Text>
      </Mafs>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          marginTop: "12px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <label
          style={{ color: "#a8b4c8", fontSize: "0.88rem", fontWeight: 600 }}
        >
          Rectangles : {n}
        </label>
        <input
          type="range"
          min={2}
          max={40}
          value={n}
          onChange={(e) => setN(Number(e.target.value))}
          style={{ width: "180px", accentColor: "#5b9cf6" }}
        />
        <span
          style={{ color: "#7a8a9e", fontSize: "0.82rem", minWidth: "120px" }}
        >
          Approx ≈ {approx.toFixed(3)}
        </span>
      </div>
    </div>
  );
}
