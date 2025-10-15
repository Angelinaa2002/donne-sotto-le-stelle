"use client";
import { useState } from "react";
import styles from "./TarotCard.module.css";

export default function TarotCard({ imgSrc, backImg, alt = "Tarot card" }) {
  const [flipped, setFlipped] = useState(false);

  const handlers = {
    onMouseEnter: () => setFlipped(true),   // ховер (десктоп)
    onMouseLeave: () => setFlipped(false),
    onTouchStart: () => setFlipped(f => !f),// тач (мобильные)
    onClick: () => setFlipped(f => !f),     // клик (десктоп)
  };

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ""}`}
      role="button"
      aria-label={alt}
      {...handlers}
    >
      <div className={styles.inner}>
        {/* FRONT */}
        <div className={styles.front} aria-hidden={flipped}>
          <img
            src={imgSrc}
            alt={alt}
            className={styles.img}
            width={220}
            height={340}
            loading="lazy"
          />
        </div>

        {/* BACK */}
        <div className={styles.back} aria-hidden={!flipped}>
          <img
            src={backImg}
            alt={`${alt} — retro`}
            className={styles.img}
            width={220}
            height={340}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
