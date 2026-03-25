import { Mafs, Coordinates, Plot, Point, Text } from "mafs";
import "mafs/core.css";
import "mafs/font.css";

export default function ExpLnGraph() {
  return (
    <Mafs
      height={340}
      viewBox={{ x: [-4, 6], y: [-4, 6] }}
      preserveAspectRatio={false}
    >
      <Coordinates.Cartesian subdivisions={2} />
      <Plot.OfX y={(x) => x} color="#475569" weight={1} style="dashed" />
      <Plot.OfX y={(x) => Math.exp(x)} color="#5b9cf6" weight={3} />
      <Plot.OfX y={(x) => Math.log(x)} color="#4ecb8d" weight={3} domain={[0.01, 20]} />
      <Point x={0} y={1} color="#5b9cf6" />
      <Point x={1} y={0} color="#4ecb8d" />
      <Text x={3} y={5} size={16} color="#5b9cf6">exp</Text>
      <Text x={5} y={1.8} size={16} color="#4ecb8d">ln</Text>
      <Text x={5} y={5.5} size={12} color="#475569">y = x</Text>
    </Mafs>
  );
}