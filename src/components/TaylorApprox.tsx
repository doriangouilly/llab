import { Mafs, Coordinates, Plot, Text } from "mafs";
import "mafs/core.css";
import "mafs/font.css";
import { useState } from "react";

function factorial(n: number): number {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

function taylorSin(x: number, order: number): number {
  let sum = 0;
  for (let k = 0; k <= order; k++) {
    const n = 2 * k + 1;
    if (n > order) break;
    sum += (Math.pow(-1, k) * Math.pow(x, n)) / factorial(n);
  }
  return sum;
}

export default function TaylorApprox() {
  const [order, setOrder] = useState(5);

  const colors: Record<number, string> = {
    1: "#f06070",
    3: "#f6845b",
    5: "#e8c840",
    7: "#4ecb8d",
    9: "#5b9cf6",
    11: "#c084fc",
  };
  const color = colors[order] || "#5b9cf6";

  return (
    <div>
      <Mafs
        height={300}
        viewBox={{ x: [-7, 7], y: [-2.5, 2.5] }}
        preserveAspectRatio={false}
      >
        <Coordinates.Cartesian subdivisions={2} />
        <Plot.OfX y={(x) => Math.sin(x)} color="#475569" weight={3} />
        <Plot.OfX
          y={(x) => taylorSin(x, order)}
          color={color}
          weight={2.5}
        />
        <Text x={5.5} y={-1.8} size={14} color="#475569">
          sin(x)
        </Text>
        <Text x={-6} y={2} size={14} color={color}>
          T{order}(x)
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
          Ordre du DL :
        </label>
        {[1, 3, 5, 7, 9, 11].map((n) => (
          <button
            key={n}
            onClick={() => setOrder(n)}
            style={{
              padding: "4px 12px",
              borderRadius: "6px",
              border:
                order === n
                  ? "2px solid " + (colors[n] || "#5b9cf6")
                  : "1px solid rgba(255,255,255,0.1)",
              background:
                order === n ? "rgba(255,255,255,0.06)" : "transparent",
              color: order === n ? (colors[n] || "#5b9cf6") : "#546078",
              cursor: "pointer",
              fontSize: "0.82rem",
              fontWeight: 700,
            }}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}
