import React, { useState } from "react";
import StaticTrigoCircle from "./CercleTrigo1";
import AnimatedTrigoCircle from "./CercleTrigo2";

export default function TrigoSectionSwitcher() {
  const [activeTab, setActiveTab] = useState("static"); 

  return (
    <div className="trigo-switcher bloc" style={{ padding: "0", overflow: "hidden" }}>

      <div className="trigo-tabs" style={{ display: "flex", borderBottom: "1px solid #3a5080", backgroundColor: "rgba(30, 41, 59, 0.6)" }}>
        <button
          onClick={() => setActiveTab("static")}
          style={{
            flex: 1, padding: "12px 16px", background: "none", border: "none", color: activeTab === "static" ? "#5b9cf6" : "#a8b4c8",
            fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", outline: "none",
            borderBottom: activeTab === "static" ? "2px solid #5b9cf6" : "2px solid transparent",
            transition: "all 0.2s ease"
          }}
        >
          Vue Fixe
        </button>
        <button
          onClick={() => setActiveTab("animated")}
          style={{
            flex: 1, padding: "12px 16px", background: "none", border: "none", color: activeTab === "animated" ? "#e8c840" : "#a8b4c8",
            fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", outline: "none",
            borderBottom: activeTab === "animated" ? "2px solid #e8c840" : "2px solid transparent",
            transition: "all 0.2s ease"
          }}
        >
          Vue Animée
        </button>
      </div>

      
      <div className="trigo-content" style={{ padding: "24px 16px" }}>
        {activeTab === "static" ? (
          <StaticTrigoCircle />
        ) : (
          <AnimatedTrigoCircle />
        )}
      </div>
    </div>
  );
}