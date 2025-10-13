"use client";
import Image from "next/image";
import styles from "./TarotCard.module.css";

export default function TarotCard({ imgSrc, title, text }) {
  return (
    <div className={styles.card} role="img" aria-label={title}>
      <div className={styles.inner}>
        {/* FRONT: картинка */}
        <div className={styles.front}>
          <Image
            src={imgSrc}
            alt={title}
            width={200}
            height={320}
            priority
            className={styles.img}
          />
        </div>

        {/* BACK: фиолетовый фон + золотой текст */}
        <div className={styles.back}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{text}</p>
        </div>
      </div>
    </div>
  );
}
