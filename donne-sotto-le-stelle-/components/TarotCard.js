"use client";
import { useState } from "react";
import styles from "./TarotCard.module.css";

export default function TarotCard({ imgSrc, title, text }) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped(v => !v);

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ""}`}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`Carta: ${title}`}
    >
      <div className={styles.inner}>
        {/* FRONT */}
        <div className={`${styles.face} ${styles.front}`}>
          <img src={imgSrc} alt={title} className={styles.img} loading="lazy" />
        </div>

        {/* BACK */}
        <div className={`${styles.face} ${styles.back}`}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{text}</p>
        </div>
      </div>
    </div>
  );
}
