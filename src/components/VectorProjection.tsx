import { Mafs, Coordinates, Text, Line, Vector, useMovablePoint } from "mafs";
import "mafs/core.css";
import "mafs/font.css";

export default function VectorProjection() {
  const uPoint = useMovablePoint([3, 4], { color: "#5b9cf6" });
  const dDir: [number, number] = [1, 0.4];
  const dNorm = Math.sqrt(dDir[0] * dDir[0] + dDir[1] * dDir[1]);
  const dUnit: [number, number] = [dDir[0] / dNorm, dDir[1] / dNorm];

  const ux = uPoint.point[0];
  const uy = uPoint.point[1];
  const dot = ux * dUnit[0] + uy * dUnit[1];
  const projX = dot * dUnit[0];
  const projY = dot * dUnit[1];

  const extD = 6;

  return (
    <Mafs height={320} viewBox={{ x: [-1, 7], y: [-1, 6] }} preserveAspectRatio={false}>
      <Coordinates.Cartesian subdivisions={2} />
      <Line.Segment
        point1={[-dUnit[0] * extD, -dUnit[1] * extD]}
        point2={[dUnit[0] * extD, dUnit[1] * extD]}
        color="#475569"
        weight={1.5}
        style="dashed"
      />
      <Vector tip={uPoint.point} color="#5b9cf6" weight={2.5} />
      <Vector tip={[projX, projY]} color="#4ecb8d" weight={3} />
      <Line.Segment point1={uPoint.point} point2={[projX, projY]} color="#f06070" weight={1.5} style="dashed" />
      {uPoint.element}
      <Text x={ux + 0.2} y={uy + 0.3} size={15} color="#5b9cf6">u</Text>
      <Text x={projX / 2 - 0.1} y={projY / 2 - 0.4} size={14} color="#4ecb8d">proj(u)</Text>
      <Text x={6} y={dUnit[1] * 6 + 0.3} size={13} color="#475569">d</Text>
      <Text x={(ux + projX) / 2 + 0.3} y={(uy + projY) / 2} size={12} color="#f06070">⊥</Text>
    </Mafs>
  );
}
