"use client";
import { useState } from "react";
import styles from "./TarotCard.module.css";

export default function TarotCard({ imgSrc, title, text }) {
  const [flip, setFlip] = useState(false);
  const Title = title || "Servizio";
  const Text =
    text ||
    "Descrizione del servizio. Se vedi questo testo, significa che i props sono arrivati.";

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setFlip(true)}
      onMouseLeave={() => setFlip(false)}
      onClick={() => setFlip((v) => !v)} // tap на телефоне
    >
      <div className={`${styles.inner} ${flip ? styles.isFlipped : ""}`}>
        {/* FRONT */}
        <div className={`${styles.face} ${styles.front}`}>
          <img src={imgSrc} alt={Title} className={styles.img} loading="lazy" />
        </div>

        {/* BACK */}
        <div className={`${styles.face} ${styles.back}`}>
          <div>
            <h3 className={styles.title}>{Title}</h3>
            <p className={styles.desc}>{Text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
