"use client";

import { useState } from "react";
import styles from "./TarotCard.module.css";

export default function TarotCard({ imgSrc, backImg, alt = "Tarot card" }) {
  const [flipped, setFlipped] = useState(false);

  // Управление: hover (десктоп), клик (десктоп), тап (мобилка)
  const handlers = {
    onMouseEnter: () => setFlipped(true),
    onMouseLeave: () => setFlipped(false),
    onClick:      () => setFlipped(f => !f),
    onTouchStart: () => setFlipped(f => !f),
  };

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ""}`}
      role="button"
      aria-label={alt}
      aria-pressed={flipped}
      {...handlers}
    >
      <div className={styles.frame}>
        <div className={styles.inner}>
          {/* FRONT */}
          <div className={styles.front} aria-hidden={flipped}>
            <img
              src={imgSrc}
              alt={alt}
              className={styles.img}
              width={200}
              height={320}
              loading="lazy"
            />
          </div>

          {/* BACK (показываем твой PNG-задник) */}
          <div className={styles.back} aria-hidden={!flipped}>
            <img
              src={backImg}
              alt={`${alt} — retro`}
              className={styles.img}
              width={200}
              height={320}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
