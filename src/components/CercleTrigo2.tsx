import React, { useState, useEffect, useRef } from "react";
import { Mafs, Coordinates, Text, Circle, Line, Polygon } from "mafs";
import "mafs/core.css";
import "mafs/font.css";

function getRadianLabel(angle: number) {
  let a = angle < 0 ? angle + 2 * Math.PI : angle;
  const standardAngles = [
    { v: 0, s: "0" }, { v: Math.PI / 6, s: "π/6" }, { v: Math.PI / 4, s: "π/4" },
    { v: Math.PI / 3, s: "π/3" }, { v: Math.PI / 2, s: "π/2" }, { v: 2 * Math.PI / 3, s: "2π/3" },
    { v: 3 * Math.PI / 4, s: "3π/4" }, { v: 5 * Math.PI / 6, s: "5π/6" }, { v: Math.PI, s: "π" },
    { v: 7 * Math.PI / 6, s: "7π/6" }, { v: 5 * Math.PI / 4, s: "5π/4" }, { v: 4 * Math.PI / 3, s: "4π/3" },
    { v: 3 * Math.PI / 2, s: "3π/2" }, { v: 5 * Math.PI / 3, s: "5π/3" }, { v: 7 * Math.PI / 4, s: "7π/4" },
    { v: 11 * Math.PI / 6, s: "11π/6" }, { v: 2 * Math.PI, s: "0" }
  ];
  for (let obj of standardAngles) {
    if (Math.abs(a - obj.v) < 0.05) return obj.s;
  }
  return (a / Math.PI).toFixed(2) + "π";
}

function getExactValue(val: number) {
  const eps = 0.05;
  if (Math.abs(val - 0) < eps) return "0";
  if (Math.abs(val - 0.5) < eps) return "1/2";
  if (Math.abs(val - Math.sqrt(2)/2) < eps) return "√2/2";
  if (Math.abs(val - Math.sqrt(3)/2) < eps) return "√3/2";
  if (Math.abs(val - 1) < eps) return "1";
  if (Math.abs(val + 0.5) < eps) return "-1/2";
  if (Math.abs(val + Math.sqrt(2)/2) < eps) return "-√2/2";
  if (Math.abs(val + Math.sqrt(3)/2) < eps) return "-√3/2";
  if (Math.abs(val + 1) < eps) return "-1";
  return val.toFixed(2);
}

export default function AnimatedTrigoCircle() {
  const [angle, setAngle] = useState(0);
  const isPaused = useRef(false);

  useEffect(() => {
    const standardAngles = [
      Math.PI/6, Math.PI/4, Math.PI/3, Math.PI/2,
      2*Math.PI/3, 3*Math.PI/4, 5*Math.PI/6, Math.PI,
      7*Math.PI/6, 5*Math.PI/4, 4*Math.PI/3, 3*Math.PI/2,
      5*Math.PI/3, 7*Math.PI/4, 11*Math.PI/6, 2*Math.PI
    ];

    const intervalId = setInterval(() => {
      if (isPaused.current) return;
      
      setAngle((prev) => {
        let next = prev + 0.015;
        if (next >= 2 * Math.PI) next = 0;
        
        for (const target of standardAngles) {
          if (prev < target && next >= target) {
            isPaused.current = true; 
            setTimeout(() => {
              isPaused.current = false; 
            }, 1500);
            return target; 
          }
        }
        return next;
      });
    }, 20);

    return () => clearInterval(intervalId);
  }, []);

  const px = Math.cos(angle);
  const py = Math.sin(angle);
  const angleLabel = getRadianLabel(angle);
  const exactX = getExactValue(px);
  const exactY = getExactValue(py);

  const arcPoints: [number, number][] = [];
  const steps = 30;
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * angle;
    arcPoints.push([0.25 * Math.cos(t), 0.25 * Math.sin(t)]);
  }
  if (arcPoints.length > 0) arcPoints.push([0, 0]);

  return (
    <div>
      <Mafs height={400} viewBox={{ x: [-1.4, 1.4], y: [-1.4, 1.4] }}>
        <Coordinates.Cartesian subdivisions={4} />
        
        <Circle center={[0, 0]} radius={1} color="#3a5080" weight={2} fillOpacity={0} strokeOpacity={0.4} />
        <Line.Segment point1={[0, 0]} point2={[px, py]} color="#5b9cf6" weight={2.5} />
        
        <Line.Segment point1={[px, py]} point2={[px, 0]} color="#a8b4c880" weight={1.5} style="dashed" />
        <Line.Segment point1={[px, py]} point2={[0, py]} color="#a8b4c880" weight={1.5} style="dashed" />
        
        <Line.Segment point1={[0, 0]} point2={[px, 0]} color="#22d3ee" weight={3} />
        <Line.Segment point1={[0, 0]} point2={[0, py]} color="#f472b6" weight={3} />

        {arcPoints.length > 2 && (
          <Polygon points={arcPoints} color="#e8c840" fillOpacity={0.2} strokeOpacity={0} />
        )}

        <Circle center={[px, py]} radius={0.06} color="#e8c840" fillOpacity={1} weight={0} />

        <Text x={1.5} y={-1.2} size={16} color="#67e67f">
          M( {exactX} ; {exactY} )
        </Text>

        <Text x={px * 1.3} y={py * 1.3} size={18} color="#e8c840">
          θ : {angleLabel}
        </Text>
        
        <Text x={px / 2} y={-0.12} size={14} color="#22d3ee">
          {exactX}
        </Text>

        <Text x={-0.15} y={py / 2} size={14} color="#f472b6">
          {exactY}
        </Text>
      </Mafs>
    </div>
  );
}