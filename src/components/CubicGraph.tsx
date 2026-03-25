import { Mafs, Coordinates, Plot, Point, Text } from "mafs";
import "mafs/core.css";
import "mafs/font.css";

export default function CubicGraph() {
  return (
    <Mafs
      height={300}
      viewBox={{ x: [-3, 3], y: [-4, 5] }}
      preserveAspectRatio={false}
    >
      <Coordinates.Cartesian subdivisions={2} />
      <Plot.OfX y={(x) => x * x * x - 3 * x + 1} color="#5b9cf6" weight={3} />
      <Point x={-1} y={3} color="#4ecb8d" />
      <Point x={1} y={-1} color="#f06070" />
      <Text x={-1.8} y={3.6} size={14} color="#4ecb8d">
        max local (-1, 3)
      </Text>
      <Text x={1.5} y={-1.8} size={14} color="#f06070">
        min local (1, -1)
      </Text>
    </Mafs>
  );
}