"use client";
import { useState } from "react";

export default function TarotCard({ imgSrc, title, text }) {
  const [flip, setFlip] = useState(false);

  const card = {
    width: 210, height: 340, perspective: "1200px",
    cursor: "pointer", margin: "10px"
  };
  const inner = {
    position: "relative", width: "100%", height: "100%",
    transformStyle: "preserve-3d",
    borderRadius: 16,
    transition: "transform .6s cubic-bezier(.22,.61,.36,1)",
    transform: flip ? "rotateY(180deg)" : "none",
    boxShadow: "0 18px 0 rgba(212,175,55,.25)"
  };
  const side = {
    position: "absolute", inset: 0, borderRadius: 16, overflow: "hidden",
    border: "2px solid #d4af37",
    backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden",
    display: "flex", justifyContent: "center", alignItems: "center"
  };
  const front = {
    ...side,
    zIndex: flip ? 1 : 2,
    opacity: flip ? 0 : 1,
    transition: "opacity .25s linear",
    transform: "translateZ(0.1px)",
    background: "radial-gradient(76% 60% at 50% 10%, rgba(255,230,140,.22), transparent 60%)"
  };
  const back = {
    ...side,
    zIndex: flip ? 3 : 1,
    opacity: flip ? 1 : 0,
    transition: "opacity .25s linear .12s",
    transform: "rotateY(180deg) translateZ(0.2px)",
    padding: "18px 14px",
    color: "#f5e6c8",
    textAlign: "center",
    background:
      "radial-gradient(66% 60% at 50% 40%, rgba(212,175,55,.18), rgba(13,0,51,0) 60%)," +
      "linear-gradient(180deg, #00124e 0%, #0b0028 70%)"
  };
  const img = { width: 200, height: 320, objectFit: "cover",
    backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" };

  return (
    <div style={card}
         onMouseEnter={() => setFlip(true)}
         onMouseLeave={() => setFlip(false)}
         onClick={() => setFlip(v => !v)}
         role="button" aria-label={title}>
      <div style={inner}>
        <div style={front}>
          <img src={imgSrc} alt={title} style={img} width={200} height={320} loading="lazy" />
        </div>
        <div style={back}>
          <div style={{maxWidth:"92%"}}>
            <h3 style={{
              margin:"0 0 8px", fontSize:"1.12rem", lineHeight:1.25,
              color:"#FFD86B", textShadow:"0 0 10px rgba(255,216,107,.9)", fontWeight:600
            }}>{title}</h3>
            <p style={{margin:0, fontSize:".95rem", lineHeight:1.4}}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
