"use client";
import { useState } from "react";
import styles from "./TarotCard.module.css";

export default function TarotCard({ imgSrc, backImg, alt = "Tarot card" }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ""}`}
      role="button"
      aria-label={alt}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onTouchStart={() => setFlipped(v => !v)} // для телефонов
    >
      <div className={styles.frame}>
        <div className={styles.inner}>
          {/* FRONT */}
          <div className={styles.front}>
            <img src={imgSrc} alt={alt} className={styles.img} />
          </div>

          {/* BACK */}
          <div className={styles.back}>
            <img src={backImg} alt={`${alt} - back`} className={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );
}
