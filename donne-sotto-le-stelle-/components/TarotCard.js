"use client";
import Image from "next/image";
import styles from "./TarotCard.module.css";

export default function TarotCard({ imgSrc, title, text }) {
  // дефолт, если вдруг пропсы не дошли
  const tTitle = title || "✨ Servizio";
  const tText =
    text ||
    "Descrizione del servizio. Se vedi questo testo, significa che i prop non sono arrivati dal genitore.";

  return (
    <div className={styles.card} role="img" aria-label={tTitle}>
      <div className={styles.inner}>
        {/* FRONT: картинка */}
        <div className={styles.front}>
          <Image
            src={imgSrc}
            alt={tTitle}
            width={200}
            height={320}
            priority
            className={styles.img}
          />
        </div>

        {/* BACK: фиолетовый фон + золотой текст */}
        <div className={styles.back}>
          <h3 className={styles.title}>{tTitle}</h3>
          <p className={styles.desc}>{tText}</p>
        </div>
      </div>
    </div>
  );
}
