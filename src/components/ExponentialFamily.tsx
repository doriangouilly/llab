import { Mafs, Coordinates, Plot, Text } from "mafs";
import "mafs/core.css";
import "mafs/font.css";

export default function ExponentialFamily() {
  const a = -0.5;
  const constants = [-2, -1, -0.5, 0.5, 1, 2];
  const colors = ["#f06070", "#f472b6", "#c084fc", "#4ecb8d", "#5b9cf6", "#f6845b"];

  return (
    <Mafs
      height={280}
      viewBox={{ x: [-1, 6], y: [-2.5, 2.5] }}
      preserveAspectRatio={false}
    >
      <Coordinates.Cartesian subdivisions={2} />
      {constants.map((c, i) => (
        <Plot.OfX
          key={i}
          y={(x) => c * Math.exp(a * x)}
          color={colors[i]}
          weight={2}
        />
      ))}
      <Text x={0.3} y={2.3} size={13} color="#f6845b">C = 2</Text>
      <Text x={0.3} y={1.2} size={13} color="#5b9cf6">C = 1</Text>
      <Text x={0.3} y={-1.2} size={13} color="#f472b6">C = −1</Text>
      <Text x={0.3} y={-2.3} size={13} color="#f06070">C = −2</Text>
      <Text x={4.5} y={0.3} size={14} color="#a8b4c8">t</Text>
    </Mafs>
  );
}
