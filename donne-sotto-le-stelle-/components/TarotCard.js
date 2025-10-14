"use client";
import styles from "./TarotCard.module.css";
import { useState } from "react";

export default function TarotCard({ imgSrc, title, text }) {
  const [flip, setFlip] = useState(false);

  return (
    <div
      className={`${styles.card} ${flip ? styles.flipped : ""}`}
      onClick={() => setFlip(v => !v)}   // тап на мобилке
      onMouseLeave={() => setFlip(false)}
      role="button"
      aria-label={title}
    >
      <div className={styles.inner}>
        {/* FRONT */}
        <div className={styles.front}>
          <img src={imgSrc} alt={title} className={styles.img} width={200} height={320} loading="lazy" />
        </div>

        {/* BACK */}
        <div className={styles.back}>
          <div style={{ maxWidth: "92%" }}>
            <h3 style={{
              margin: "0 0 8px", fontSize: "1.12rem", lineHeight: 1.25,
              color: "#FFD86B", textShadow: "0 0 10px rgba(255,216,107,.9)", fontWeight: 600
            }}>
              {title}
            </h3>
            <p style={{ margin: 0, fontSize: ".95rem", lineHeight: 1.4 }}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
