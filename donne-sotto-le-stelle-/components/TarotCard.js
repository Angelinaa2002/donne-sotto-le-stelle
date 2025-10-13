"use client";
import styles from "./TarotCard.module.css";

export default function TarotCard({ imgSrc, title, text }) {
  const tTitle = title || "✨ Servizio";
  const tText =
    text ||
    "Descrizione del servizio. Se vedi questo testo, significa che i prop sono arrivati.";

  return (
    <div className={styles.card} role="group" aria-label={tTitle}>
      <div className={styles.inner}>
        {/* FRONT */}
        <div className={styles.front}>
          <img
            src={imgSrc}
            alt={tTitle}
            className={styles.img}
            width={200}
            height={320}
            loading="lazy"
          />
        </div>

        {/* BACK (инлайн-стили, чтобы ничего не перебило) */}
        <div className={styles.back}>
          <div
            style={{
              position: "relative",
              zIndex: 5,
              width: "92%",
              textAlign: "center",
              color: "#f5e6c8",
              filter: "none",
            }}
          >
            <h3
              style={{
                margin: "0 0 10px",
                fontSize: "1.1rem",
                lineHeight: 1.25,
                color: "#FFD86B",
                textShadow:
                  "0 0 10px rgba(255,216,107,.9), 0 0 18px rgba(255,216,107,.45)",
                fontWeight: 600,
              }}
            >
              {tTitle}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: ".92rem",
                lineHeight: 1.38,
                opacity: 0.98,
              }}
            >
              {tText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
