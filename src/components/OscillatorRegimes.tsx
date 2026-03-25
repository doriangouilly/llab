import { Mafs, Coordinates, Plot, Text } from "mafs";
import "mafs/core.css";
import "mafs/font.css";

export default function OscillatorRegimes() {
  const mu1 = 1.5;
  const mu2 = 1.0;
  const mu3 = 0.25;
  const w0 = 1.0;
  const v0 = 1.0;

  const overdamped = (t: number) => {
    if (t < 0) return 0;
    const disc = Math.sqrt(mu1 * mu1 - w0 * w0);
    return (v0 / (2 * disc)) * Math.exp(-mu1 * t) * (Math.exp(disc * t) - Math.exp(-disc * t));
  };

  const critical = (t: number) => {
    if (t < 0) return 0;
    return v0 * t * Math.exp(-mu2 * t);
  };

  const underdamped = (t: number) => {
    if (t < 0) return 0;
    const wd = Math.sqrt(w0 * w0 - mu3 * mu3);
    return (v0 / wd) * Math.exp(-mu3 * t) * Math.sin(wd * t);
  };

  const envelope = (t: number) => {
    if (t < 0) return 0;
    const wd = Math.sqrt(w0 * w0 - mu3 * mu3);
    return (v0 / wd) * Math.exp(-mu3 * t);
  };

  const envelopeNeg = (t: number) => -envelope(t);

  return (
    <Mafs
      height={300}
      viewBox={{ x: [-0.5, 18], y: [-0.7, 1.2] }}
      preserveAspectRatio={false}
    >
      <Coordinates.Cartesian
        xAxis={{ lines: 5 }}
        yAxis={{ lines: 0.5 }}
      />
      <Plot.OfX y={overdamped} color="#f6845b" weight={2.5} domain={[0, 18]} />
      <Plot.OfX y={critical} color="#c084fc" weight={2.5} domain={[0, 18]} />
      <Plot.OfX y={underdamped} color="#5b9cf6" weight={2.5} domain={[0, 18]} />
      <Plot.OfX y={envelope} color="#5b9cf6" weight={1} style="dashed" domain={[0, 18]} />
      <Plot.OfX y={envelopeNeg} color="#5b9cf6" weight={1} style="dashed" domain={[0, 18]} />
      <Text x={6} y={0.38} size={13} color="#f6845b">sur-amorti (Δ &gt; 0)</Text>
      <Text x={3.5} y={0.5} size={13} color="#c084fc">critique (Δ = 0)</Text>
      <Text x={10} y={0.75} size={13} color="#5b9cf6">sous-amorti (Δ &lt; 0)</Text>
    </Mafs>
  );
}
