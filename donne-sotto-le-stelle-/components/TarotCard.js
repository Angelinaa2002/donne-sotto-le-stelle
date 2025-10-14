"use client";
import { useState } from "react";
import styles from "./TarotCard.module.css";

export default function TarotCard({ imgSrc, title, text }) {
  const [flip, setFlip] = useState(false);
  const Text = text || "Descrizione del servizio.";

  return (
    <div
      className={`${styles.card} ${flip ? styles.flipped : ""}`}
      onClick={() => setFlip(v => !v)}
      role="button"
      aria-label={title}
    >
      <div className={styles.inner}>
        {/* FRONT */}
        <div className={styles.front}>
          <img src={imgSrc} alt={title} className={styles.img} loading="lazy" />
        </div>

        {/* BACK */}
        <div className={styles.back}>
          <h3>{title}</h3>
          <p>{Text}</p>
        </div>
      </div>
    </div>
  );
}
