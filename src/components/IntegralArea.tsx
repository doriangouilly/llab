import { Mafs, Coordinates, Plot, Polygon, Text } from "mafs";
import "mafs/core.css";
import "mafs/font.css";

export default function IntegralArea() {
  const f = (x: number) => Math.sin(x) * 1.8;
  const steps = 80;

  const posPoints: [number, number][] = [[0, 0]];
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * Math.PI;
    posPoints.push([x, f(x)]);
  }
  posPoints.push([Math.PI, 0]);

  const negPoints: [number, number][] = [[Math.PI, 0]];
  for (let i = 0; i <= steps; i++) {
    const x = Math.PI + (i / steps) * Math.PI;
    negPoints.push([x, f(x)]);
  }
  negPoints.push([2 * Math.PI, 0]);

  return (
    <Mafs
      height={260}
      viewBox={{ x: [-0.5, 7], y: [-2.5, 2.5] }}
      preserveAspectRatio={false}
    >
      <Coordinates.Cartesian subdivisions={2} />
      <Polygon
        points={posPoints}
        color="#4ecb8d"
        fillOpacity={0.25}
        strokeOpacity={0}
        weight={0}
      />
      <Polygon
        points={negPoints}
        color="#f06070"
        fillOpacity={0.25}
        strokeOpacity={0}
        weight={0}
      />
      <Plot.OfX y={f} color="#5b9cf6" weight={3} />
      <Text x={1.6} y={1.3} size={15} color="#4ecb8d">
        Aire +
      </Text>
      <Text x={4.7} y={-1.3} size={15} color="#f06070">
        Aire −
      </Text>
      <Text x={0} y={-0.4} size={12} color="#a8b4c8">
        0
      </Text>
      <Text x={6.35} y={-0.4} size={12} color="#a8b4c8">
        2π
      </Text>
    </Mafs>
  );
}
