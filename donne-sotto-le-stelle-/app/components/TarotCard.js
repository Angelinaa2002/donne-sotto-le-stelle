"use client";
import Image from "next/image";
import styles from "./TarotCard.module.css";
import { useState } from "react";

export default function TarotCard({ imgSrc, title, text }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={title}
    >
      <div className={`${styles.inner} ${hover ? styles.flipped : ""}`}>
        {/* FRONT */}
        <div className={styles.front}>
          <Image src={imgSrc} alt={title} width={220} height={380} priority />
        </div>

        {/* BACK */}
        <div className={styles.back}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  );
}
