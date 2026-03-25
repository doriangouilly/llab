import { Mafs, Coordinates, Plot, Text } from "mafs";
import "mafs/core.css";
import "mafs/font.css";

export default function HyperbolicGraph() {
  return (
    <Mafs
      height={300}
      viewBox={{ x: [-3, 3], y: [-5, 5] }}
      preserveAspectRatio={false}
    >
      <Coordinates.Cartesian subdivisions={2} />
      <Plot.OfX y={(x) => Math.cosh(x)} color="#5b9cf6" weight={3} />
      <Plot.OfX y={(x) => Math.sinh(x)} color="#f472b6" weight={3} />
      <Plot.OfX y={(x) => Math.tanh(x)} color="#4ecb8d" weight={3} />
      <Text x={2.2} y={3.8} size={14} color="#5b9cf6">cosh</Text>
      <Text x={1.8} y={-3.5} size={14} color="#f472b6">sinh</Text>
      <Text x={2.2} y={0.6} size={14} color="#4ecb8d">tanh</Text>
    </Mafs>
  );
}