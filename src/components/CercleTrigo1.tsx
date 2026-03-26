import React, { useState } from "react";

export default function StaticTrigoCircle() {
  const [activeFamily, setActiveFamily] = useState<string | null>(null);

  const getOpacity = (family: string) => {
    if (activeFamily === null) return "";
    return activeFamily === family ? "active-elem" : "dimmed-elem";
  };

  const families = [
    { id: "main", label: "Axes (0, π/2...)", color: "#f8fafc" },
    { id: "b", label: "Famille π/6", color: "#818cf8" },
    { id: "c", label: "Famille π/4", color: "#34d399" },
    { id: "d", label: "Famille π/3", color: "#a78bfa" }
  ];

  return (
    <div className="svg-container" style={{ textAlign: "center" }}>
      
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
        {families.map((f) => {
          const isActive = activeFamily === f.id;
          return (
            <button 
              key={f.id}
              onClick={() => setActiveFamily(isActive ? null : f.id)}
              style={{ 
                background: isActive ? f.color : "rgba(255,255,255,0.05)", 
                color: isActive ? "#0f172a" : f.color, 
                border: `1px solid ${f.color}`, 
                padding: "8px 16px", 
                borderRadius: "8px", 
                cursor: "pointer", 
                fontWeight: 600, 
                fontSize: "0.9rem",
                transition: "all 0.25s ease" 
              }}
            >
              {f.label}
            </button>
          );
        })}
        <button 
          onClick={() => setActiveFamily(null)}
          style={{ 
            background: "transparent", 
            color: activeFamily ? "#e8c840" : "#475569", 
            border: activeFamily ? "1px solid #e8c840" : "1px solid #475569", 
            padding: "8px 16px", 
            borderRadius: "8px",
            cursor: activeFamily ? "pointer" : "default", 
            fontWeight: 600,
            fontSize: "0.9rem",
            opacity: activeFamily ? 1 : 0.5,
            transition: "all 0.25s ease" 
          }}
          disabled={!activeFamily}
        >
          Tout afficher
        </button>
      </div>

      <svg viewBox="0 0 760 760" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: "800px", display: "block", margin: "0 auto", background: "rgba(255,255,255,0.02)", borderRadius: "16px", padding: "20px" }}>
        <defs>
          <style>{`
            text { font-family: Inter, system-ui, -apple-system, sans-serif; transition: opacity 0.3s ease, font-size 0.3s ease; }
            line, circle, path, g { transition: opacity 0.3s ease, stroke-width 0.3s ease; }
            
            .axis-x { stroke: #22d3ee; stroke-width: 2.5; }
            .axis-y { stroke: #f472b6; stroke-width: 2.5; }
            .circle { stroke: #475569; stroke-width: 2; fill: none; }
            .proj-x { stroke: #64748b; stroke-width: 1.2; stroke-dasharray: 5 4; opacity: 0.7; }
            .proj-y { stroke: #64748b; stroke-width: 1.2; stroke-dasharray: 5 4; opacity: 0.7; }
            .tick-x { stroke: #22d3ee; stroke-width: 2; }
            .tick-y { stroke: #f472b6; stroke-width: 2; }
            .tick-soft-x { stroke: #22d3ee; stroke-width: 1.5; opacity: 0.7; }
            .tick-soft-y { stroke: #f472b6; stroke-width: 1.5; opacity: 0.7; }
            .axis-label-x { fill: #22d3ee; font-size: 18px; font-weight: 900; }
            .axis-label-y { fill: #f472b6; font-size: 18px; font-weight: 900; }
            .val-x { fill: #22d3ee; font-size: 15px; font-weight: 800; paint-order: stroke; stroke: #0f172a; stroke-width: 4px; }
            .val-y { fill: #f472b6; font-size: 15px; font-weight: 800; paint-order: stroke; stroke: #0f172a; stroke-width: 4px; }
            .theta { fill: #e8c840; font-size: 18px; font-weight: 900; }
            .origin { fill: #a8b4c8; font-size: 14px; }
            
            .fam-main { stroke: #94a3b8; fill: #f8fafc; color: #f8fafc; }
            .fam-b { stroke: #818cf8; fill: #818cf8; color: #818cf8; }
            .fam-c { stroke: #34d399; fill: #34d399; color: #34d399; }
            .fam-d { stroke: #a78bfa; fill: #a78bfa; color: #a78bfa; }

            .radius-main { stroke-width: 1.5; opacity: 0.5; }
            .radius-b { stroke-width: 1.5; opacity: 0.6; }
            .radius-c { stroke-width: 1.5; opacity: 0.6; }
            .radius-d { stroke-width: 1.5; opacity: 0.6; }
            .angle-main { font-size: 17px; font-weight: 900; }
            .angle-b { font-size: 17px; font-weight: 850; }
            .angle-c { font-size: 17px; font-weight: 850; }
            .angle-d { font-size: 17px; font-weight: 850; }

            .dimmed-elem { opacity: 0.08 !important; }
            .active-elem.radius-main, .active-elem.radius-b, .active-elem.radius-c, .active-elem.radius-d { opacity: 1 !important; stroke-width: 2.5 !important; }
            .active-elem.pt-main, .active-elem.pt-b, .active-elem.pt-c, .active-elem.pt-d { r: 8 !important; }
            .active-elem.val-x, .active-elem.val-y { font-size: 18px !important; }
            .active-elem.angle-main, .active-elem.angle-b, .active-elem.angle-c, .active-elem.angle-d { font-size: 22px !important; }
            .active-elem.proj-x, .active-elem.proj-y { stroke: #fff !important; opacity: 0.9 !important; stroke-width: 1.5 !important; }
          `}</style>
        </defs>

        <rect x="0" y="0" width="760" height="760" rx="18" fill="none"/>
        <circle cx="380" cy="380" r="240" className="circle"/>

        <g className={getOpacity("b")}>
          <line x1="587.85" y1="260" x2="587.85" y2="380" className="proj-x fam-b"/>
          <line x1="587.85" y1="260" x2="380" y2="260" className="proj-y fam-b"/>
          <line x1="172.15" y1="260" x2="172.15" y2="380" className="proj-x fam-b"/>
          <line x1="172.15" y1="260" x2="380" y2="260" className="proj-y fam-b"/>
          <line x1="172.15" y1="500" x2="172.15" y2="380" className="proj-x fam-b"/>
          <line x1="172.15" y1="500" x2="380" y2="500" className="proj-y fam-b"/>
          <line x1="587.85" y1="500" x2="587.85" y2="380" className="proj-x fam-b"/>
          <line x1="587.85" y1="500" x2="380" y2="500" className="proj-y fam-b"/>
        </g>

        <g className={getOpacity("c")}>
          <line x1="549.71" y1="210.29" x2="549.71" y2="380" className="proj-x fam-c"/>
          <line x1="549.71" y1="210.29" x2="380" y2="210.29" className="proj-y fam-c"/>
          <line x1="210.29" y1="210.29" x2="210.29" y2="380" className="proj-x fam-c"/>
          <line x1="210.29" y1="210.29" x2="380" y2="210.29" className="proj-y fam-c"/>
          <line x1="210.29" y1="549.71" x2="210.29" y2="380" className="proj-x fam-c"/>
          <line x1="210.29" y1="549.71" x2="380" y2="549.71" className="proj-y fam-c"/>
          <line x1="549.71" y1="549.71" x2="549.71" y2="380" className="proj-x fam-c"/>
          <line x1="549.71" y1="549.71" x2="380" y2="549.71" className="proj-y fam-c"/>
        </g>

        <g className={getOpacity("d")}>
          <line x1="500" y1="172.15" x2="500" y2="380" className="proj-x fam-d"/>
          <line x1="500" y1="172.15" x2="380" y2="172.15" className="proj-y fam-d"/>
          <line x1="260" y1="172.15" x2="260" y2="380" className="proj-x fam-d"/>
          <line x1="260" y1="172.15" x2="380" y2="172.15" className="proj-y fam-d"/>
          <line x1="260" y1="587.85" x2="260" y2="380" className="proj-x fam-d"/>
          <line x1="260" y1="587.85" x2="380" y2="587.85" className="proj-y fam-d"/>
          <line x1="500" y1="587.85" x2="500" y2="380" className="proj-x fam-d"/>
          <line x1="500" y1="587.85" x2="380" y2="587.85" className="proj-y fam-d"/>
        </g>

        <line x1="70" y1="380" x2="690" y2="380" className="axis-x"/>
        <line x1="380" y1="70" x2="380" y2="690" className="axis-y"/>
        <text x="646" y="410" className="axis-label-x">x = cos(θ)</text>
        <text x="400" y="58" className="axis-label-y">y = sin(θ)</text>

        <line x1="620" y1="374" x2="620" y2="386" className="tick-x"/>
        <line x1="140" y1="374" x2="140" y2="386" className="tick-x"/>
        <line x1="374" y1="140" x2="386" y2="140" className="tick-y"/>
        <line x1="374" y1="620" x2="386" y2="620" className="tick-y"/>
        
        <g className={getOpacity("d")}><line x1="500" y1="376" x2="500" y2="384" className="tick-soft-x"/><line x1="260" y1="376" x2="260" y2="384" className="tick-soft-x"/></g>
        <g className={getOpacity("c")}><line x1="550" y1="376" x2="550" y2="384" className="tick-soft-x"/><line x1="210.29" y1="376" x2="210.29" y2="384" className="tick-soft-x"/></g>
        <g className={getOpacity("b")}><line x1="376" y1="260" x2="384" y2="260" className="tick-soft-y"/><line x1="376" y1="500" x2="384" y2="500" className="tick-soft-y"/></g>
        <g className={getOpacity("c")}><line x1="376" y1="210.29" x2="384" y2="210.29" className="tick-soft-y"/><line x1="376" y1="549.71" x2="384" y2="549.71" className="tick-soft-y"/></g>

        <g className={getOpacity("main")}>
          <line x1="380" y1="380" x2="620" y2="380" className="radius-main fam-main"/>
          <line x1="380" y1="380" x2="380" y2="140" className="radius-main fam-main"/>
          <line x1="380" y1="380" x2="140" y2="380" className="radius-main fam-main"/>
          <line x1="380" y1="380" x2="380" y2="620" className="radius-main fam-main"/>
        </g>
        <g className={getOpacity("b")}>
          <line x1="380" y1="380" x2="587.85" y2="260" className="radius-b fam-b"/>
          <line x1="380" y1="380" x2="172.15" y2="260" className="radius-b fam-b"/>
          <line x1="380" y1="380" x2="172.15" y2="500" className="radius-b fam-b"/>
          <line x1="380" y1="380" x2="587.85" y2="500" className="radius-b fam-b"/>
        </g>
        <g className={getOpacity("c")}>
          <line x1="380" y1="380" x2="549.71" y2="210.29" className="radius-c fam-c"/>
          <line x1="380" y1="380" x2="210.29" y2="210.29" className="radius-c fam-c"/>
          <line x1="380" y1="380" x2="210.29" y2="549.71" className="radius-c fam-c"/>
          <line x1="380" y1="380" x2="549.71" y2="549.71" className="radius-c fam-c"/>
        </g>
        <g className={getOpacity("d")}>
          <line x1="380" y1="380" x2="500" y2="172.15" className="radius-d fam-d"/>
          <line x1="380" y1="380" x2="260" y2="172.15" className="radius-d fam-d"/>
          <line x1="380" y1="380" x2="260" y2="587.85" className="radius-d fam-d"/>
          <line x1="380" y1="380" x2="500" y2="587.85" className="radius-d fam-d"/>
        </g>

        <g className={getOpacity("main")}>
          <circle cx="620" cy="380" r="6.5" className="pt-main fam-main"/>
          <circle cx="380" cy="140" r="6.5" className="pt-main fam-main"/>
          <circle cx="140" cy="380" r="6.5" className="pt-main fam-main"/>
          <circle cx="380" cy="620" r="6.5" className="pt-main fam-main"/>
        </g>
        <g className={getOpacity("b")}>
          <circle cx="587.85" cy="260" r="6.5" className="pt-b fam-b"/>
          <circle cx="172.15" cy="260" r="6.5" className="pt-b fam-b"/>
          <circle cx="172.15" cy="500" r="6.5" className="pt-b fam-b"/>
          <circle cx="587.85" cy="500" r="6.5" className="pt-b fam-b"/>
        </g>
        <g className={getOpacity("c")}>
          <circle cx="549.71" cy="210.29" r="6.5" className="pt-c fam-c"/>
          <circle cx="210.29" cy="210.29" r="6.5" className="pt-c fam-c"/>
          <circle cx="210.29" cy="549.71" r="6.5" className="pt-c fam-c"/>
          <circle cx="549.71" cy="549.71" r="6.5" className="pt-c fam-c"/>
        </g>
        <g className={getOpacity("d")}>
          <circle cx="500" cy="172.15" r="6.5" className="pt-d fam-d"/>
          <circle cx="260" cy="172.15" r="6.5" className="pt-d fam-d"/>
          <circle cx="260" cy="587.85" r="6.5" className="pt-d fam-d"/>
          <circle cx="500" cy="587.85" r="6.5" className="pt-d fam-d"/>
        </g>

        <g className={getOpacity("main")}>
          <text x="632" y="375" className="angle-main fam-main">0</text>
          <text x="395" y="115" className="angle-main fam-main">π/2</text>
          <text x="120" y="375" className="angle-main fam-main" textAnchor="end">π</text>
          <text x="395" y="655" className="angle-main fam-main">3π/2</text>
        </g>
        <g className={getOpacity("b")}>
          <text x="605" y="245" className="angle-b fam-b">π/6</text>
          <text x="155" y="245" className="angle-b fam-b" textAnchor="end">5π/6</text>
          <text x="155" y="525" className="angle-b fam-b" textAnchor="end">7π/6</text>
          <text x="605" y="525" className="angle-b fam-b">11π/6</text>
        </g>
        <g className={getOpacity("c")}>
          <text x="565" y="195" className="angle-c fam-c">π/4</text>
          <text x="195" y="195" className="angle-c fam-c" textAnchor="end">3π/4</text>
          <text x="195" y="575" className="angle-c fam-c" textAnchor="end">5π/4</text>
          <text x="565" y="575" className="angle-c fam-c">7π/4</text>
        </g>
        <g className={getOpacity("d")}>
          <text x="515" y="155" className="angle-d fam-d">π/3</text>
          <text x="245" y="155" className="angle-d fam-d" textAnchor="end">2π/3</text>
          <text x="245" y="615" className="angle-d fam-d" textAnchor="end">4π/3</text>
          <text x="515" y="615" className="angle-d fam-d">5π/3</text>
        </g>

        <text x="614" y="415" className={`val-x ${getOpacity("main")}`}>1</text>
        <text x="124" y="415" className={`val-x ${getOpacity("main")}`}>−1</text>
        <g className={getOpacity("d")}>
          <text x="500" y="405" className="val-x" textAnchor="middle">1/2</text>
          <text x="260" y="405" className="val-x" textAnchor="middle">−1/2</text>
        </g>
        <g className={getOpacity("c")}>
          <text x="549.71" y="425" className="val-x" textAnchor="middle">√2/2</text>
          <text x="210.29" y="425" className="val-x" textAnchor="middle">−√2/2</text>
        </g>
        <g className={getOpacity("b")}>
          <text x="587.85" y="405" className="val-x" textAnchor="middle">√3/2</text>
          <text x="172.15" y="405" className="val-x" textAnchor="middle">−√3/2</text>
        </g>

        <text x="400" y="145" className={`val-y ${getOpacity("main")}`}>1</text>
        <text x="400" y="625" className={`val-y ${getOpacity("main")}`}>−1</text>
        <g className={getOpacity("b")}>
          <text x="370" y="265" className="val-y" textAnchor="end">1/2</text>
          <text x="370" y="505" className="val-y" textAnchor="end">−1/2</text>
        </g>
        <g className={getOpacity("c")}>
          <text x="390" y="215" className="val-y" textAnchor="start">√2/2</text>
          <text x="390" y="555" className="val-y" textAnchor="start">−√2/2</text>
        </g>
        <g className={getOpacity("d")}>
          <text x="370" y="177" className="val-y" textAnchor="end">√3/2</text>
          <text x="370" y="593" className="val-y" textAnchor="end">−√3/2</text>
        </g>

        <path d="M 428 380 A 48 48 0 0 0 404 338" fill="none" stroke="#e8c840" strokeWidth="2.2" className={getOpacity("none")} style={{opacity: activeFamily ? 0.08 : 1}} />
        <text x="435" y="352" className="theta" style={{opacity: activeFamily ? 0.08 : 1}}>θ</text>
        
        <circle cx="380" cy="380" r="4" fill="#a8b4c8"/>
        <text x="388" y="396" className="origin">O</text>
      </svg>
    </div>
  );
}