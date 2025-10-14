"use client";
import { useState } from "react";
import styles from "./TarotCard.module.css";

export default function TarotCard({ imgSrc, title, text }) {
  const [flipped, setFlipped] = useState(false);
  const tTitle = title || "Servizio";
  const tText  = text  || "Descrizione del servizio.";

  const toggle = () => setFlipped(v => !v);

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flipped : ""}`}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      onClick={toggle}
      onKeyDown={(e)=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); toggle(); } }}
    >
      <div className={styles.inner}>
        <div className={`${styles.face} ${styles.front}`}>
          <img src={imgSrc} alt={tTitle} className={styles.img} width={200} height={320} loading="lazy"/>
        </div>
        <div className={`${styles.face} ${styles.back}`}>
          <h3 className={styles.title}>{tTitle}</h3>
          <p className={styles.desc}>{tText}</p>
        </div>
      </div>
    </div>
  );
}
