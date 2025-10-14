"use client";
import { useState } from "react";
import styles from "./TarotCard.module.css";

/**
 * Карточка-таро с флипом:
 * - hover (ПК) и click/Enter/Space (моб/доступность)
 * - текст на обороте всегда поверх и виден
 */
export default function TarotCard({ imgSrc, title, text }) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped(v => !v);

  return (
    <div
      className={`${styles.card} ${flipped ? styles.flip : ""}`}
      role="button"
      tabIndex={0}
      aria-label={title}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <div className={styles.inner}>
        {/* FRONT */}
        <div className={`${styles.face} ${styles.front}`} aria-hidden={flipped}>
          <img src={imgSrc} alt={title} className={styles.img} loading="lazy" />
        </div>

        {/* BACK */}
        <div className={`${styles.face} ${styles.back}`} aria-hidden={!flipped}>
          <div className={styles.backInner}>
            <h3 className={styles.title}>{title || "Servizio"}</h3>
            <p className={styles.text}>
              {text ||
                "Descrizione del servizio. Se vedi questo testo, significa che i props sono arrivati."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
