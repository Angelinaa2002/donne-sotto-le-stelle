"use client";

import { useState } from "react";
import styles from "./TarotCard.module.css";

export default function TarotCard({ imgSrc, backImg, alt = "Tarot card" }) {
  const [flipped, setFlipped] = useState(false);

  const handlers = {
    onMouseEnter: () => setFlipped(true),
    onMouseLeave: () => setFlipped(false),
    onClick:      () => setFlipped(f => !f), // клик на десктопе
    onTouchStart: () => setFlipped(f => !f), // тап на телефоне
  };

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ""}`}
      role="button"
      aria-label={alt}
      {...handlers}
    >
      <div className={styles.frame}>
        <div className={styles.inner}>
          {/* FRONT */}
          <div className={styles.front}>
            <img
              src={imgSrc}
              alt={alt}
              className={styles.img}
              width={200}
              height={320}
              loading="lazy"
            />
          </div>

          {/* BACK — показываем твоё PNG */}
          <div className={styles.back}>
            <img
              src={backImg}
              alt={`${alt} – retro`}
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
