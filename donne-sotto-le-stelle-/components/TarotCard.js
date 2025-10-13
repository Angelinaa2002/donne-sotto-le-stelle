"use client";
import Image from "next/image";
import styles from "./TarotCard.module.css";
import { useState } from "react";

export default function TarotCard({ imgSrc, title, text }) {
  const [flipped, setFlipped] = useState(false);

  const enableFlip = () => setFlipped(true);
  const disableFlip = () => setFlipped(false);
  const toggleFlip = () => setFlipped((v) => !v); // для тача

  return (
    <div className={styles.card}>
      <div
        className={`${styles.inner} ${flipped ? styles.flipped : ""}`}
        onMouseEnter={enableFlip}
        onMouseLeave={disableFlip}
        onClick={toggleFlip}
        role="button"
        aria-label={title}
      >
        {/* FRONT */}
        <div className={styles.front}>
          <Image src={imgSrc} alt={title} width={220} height={380} priority />
        </div>

        {/* BACK */}
        <div className={styles.back}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
          <span className={styles.tip}>tocca / hover</span>
        </div>
      </div>
    </div>
  );
}
