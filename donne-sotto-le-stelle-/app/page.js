"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import TarotCard from "../components/TarotCard"; 

/* === Встроенная карточка (локальные стили внутри компонента) === */
function TarotCard({ imgSrc, title, text }) {
  const tTitle = title || "✨ Servizio";
  const tText =
    text ||
    "Descrizione del servizio. Se vedi questo testo, i prop sono arrivati.";

  return (
    <div className="tc-card" role="group" aria-label={tTitle}>
      <div className="tc-inner">
        {/* FRONT */}
        <div className="tc-front">
          <img
            src={imgSrc}
            alt={tTitle}
            className="tc-img"
            width={200}
            height={320}
            loading="lazy"
          />
        </div>

        {/* BACK */}
        <div className="tc-back">
          <h3 className="tc-title">{tTitle}</h3>
          <p className="tc-desc">{tText}</p>
        </div>
      </div>

      {/* ЛОКАЛЬНЫЕ СТИЛИ КАРТОЧКИ */}
      <style jsx>{`
        .tc-card {
          width: 220px;
          height: 340px;
          perspective: 1200px;
        }
        .tc-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.75s cubic-bezier(0.22, 0.61, 0.36, 1),
            box-shadow 0.3s ease, filter 0.3s ease;
          border-radius: 16px;
          box-shadow: 0 18px rgba(212, 175, 55, 0.25);
          will-change: transform;
        }
        .tc-card:hover .tc-inner {
          transform: rotateY(180deg);
          filter: brightness(1.05);
          box-shadow: 0 30px rgba(212, 175, 55, 0.5),
            0 60px rgba(212, 175, 55, 0.25);
        }

        .tc-front,
        .tc-back {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid #d4af37;
          display: flex;
          justify-content: center;
          align-items: center;
          /* ключ: обе стороны не «просвечивают» в 3D */
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* FRONT */
        .tc-front {
          z-index: 2;
          opacity: 1;
          transition: opacity 0.25s linear, transform 0.2s linear;
          background: radial-gradient(
              76% 60% at 50% 10%,
              rgba(255, 230, 140, 0.22),
              transparent 60%
            ),
            transparent;
        }
        .tc-img {
          display: block;
          width: 200px;
          height: 320px;
          object-fit: cover;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* BACK */
        .tc-back {
          transform: rotateY(180deg) translateZ(1px); /* «вытолкнули» слой вперед */
          z-index: 3;
          opacity: 1;
          text-align: center;
          padding: 18px 14px;
          color: #f5e6c8;
          background:
            radial-gradient(66% 60% at 50% 40%, rgba(212,175,55,.18), rgba(13,0,51,0) 60%),
            linear-gradient(180deg, #001a2e 0%, #0b0432 70%);
          box-shadow: inset 0 0 40px rgba(212, 175, 55, 0.12);
        }

        /* при флипе фронт гасим и отключаем клики, чтобы текст всегда кликался */
        .tc-card:hover .tc-front {
          opacity: 0;
          pointer-events: none;
        }

        .tc-title {
          margin: 0 0 10px;
          font-size: 1.1rem;
          line-height: 1.25;
          color: #ffd66b;
          text-shadow: 0 0 10px rgba(255, 216, 107, 0.9),
            0 18px rgba(255, 216, 107, 0.45);
          font-weight: 600;
        }
        .tc-desc {
          margin: 0;
          font-size: 0.92rem;
          line-height: 1.38;
          opacity: 0.98;
        }

        /* медиаправило — на узких экранах карточку делаем чуть ниже/у already ok */
        @media (max-width: 480px) {
          .tc-card {
            width: 210px;
            height: 335px;
          }
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className={styles.main}>
      {/* ЛОГО */}
      <div className={styles.logoContainer}>
        <div className={styles.logoFrame}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={450}
            height={450}
            className={styles.logo}
          />
        </div>
      </div>

      {/* MANIFESTO */}
      <section className={styles.manifesto}>
        <h2 className="gold-text">🌙 Manifesto di Donne Sotto le Stelle 🌙</h2>
        <p>
          Siamo donne che si incontrano sotto lo stesso cielo, non per cambiare il
          mondo, ma per ricordare chi siamo. Un cerchio che accoglie, un abbraccio
          che non giudica. Qui le maschere cadono, i respiri si allineano, e ogni
          silenzio diventa parola sacra.
          <br />
          <br />
          Siamo arte che guarisce, pennelli che raccontano emozioni, pizzi, fili e
          stoffe che cuciono rinascite. Siamo poesia che nasce da una ferita e
          diventa luce, moda che non veste il corpo, ma l’anima.
          <br />
          <br />
          Camminiamo tra yoga e tarocchi, tisane e costellazioni, dove la
          spiritualità non è regola, ma esperienza viva. Qui le storie si
          intrecciano, le fragilità si fanno coraggio, le parole si trasformano in
          guarigione.
          <br />
          <br />
          Siamo donne che scelgono sé stesse, che ballano, cantano, ridono,
          piangono, e poi si rialzano insieme, ogni volta più vere.
          <br />
          <br />
          Donne Sotto le Stelle è un ponte tra la terra e l’infinito, tra ciò che
          siamo e ciò che ancora possiamo diventare.
          <br />
          <br />
          Perché ogni donna che brilla, illumina il cammino di un’altra.
        </p>
      </section>

      {/* CHI SONO */}
      <section id="chi-sono" className={styles.sectionBlock}>
        <h2 className="gold-text">Chi sono</h2>
        <p>
          Mi chiamo Concetta. Unisco la saggezza dei Tarocchi e pratico lo Yoga,
          aiutando le persone ad ascoltarsi, a ritrovare l’energia e a connettersi
          con la propria fonte interiore.
        </p>
        <p className={styles.quote}>
          «Tutte le risposte sono già dentro di noi. Il mio compito è aiutarti ad
          ascoltarle.»
        </p>
      </section>

      {/* SERVIZI */}
      <section id="servizi" className={styles.sectionBlock}>
        <h2 className="gold-text">Servizi</h2>

        <div className={styles.cardsContainer}>
          <TarotCard
            imgSrc="/tarot1.png"
            title="🌙 Tarocchi-consulenze"
            text="Letture sul cammino, sulle relazioni e sulle risposte interiori."
          />
          <TarotCard
            imgSrc="/tarot2.png"
            title="🪷 Sessioni di Yoga"
            text="Lezioni individuali per ristabilire energia e corpo."
          />
          <TarotCard
            imgSrc="/tarot3.png"
            title="✨ Pratiche Energetiche"
            text="Meditazioni, respiro, pulizia da vecchi schemi."
          />
        </div>

        <div className={styles.sessionInfo}>
          <strong>Come si svolge una sessione?</strong>
          <br />
          1. Intenzione e domanda.
          <br />
          2. Lettura / pratica.
          <br />
          3. Consapevolezza e integrazione.
          <br />
          4. Chiusura – raccomandazioni e supporto.
        </div>
      </section>

      {/* PRENOTA */}
      <section id="prenota" className={styles.sectionBlock}>
        <h2 className="gold-text">Prenota un servizio</h2>

        {!sent ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>Nome</label>
            <input type="text" required />

            <label>Servizio</label>
            <select required>
              <option value="">Seleziona...</option>
              <option>Tarocchi-consulenza</option>
              <option>Sessione di Yoga</option>
              <option>Pratica Energetica</option>
              <option>Tarocchi + Yoga</option>
              <option>Tarocchi + Pratica Energetica</option>
              <option>Pacchetto completo</option>
            </select>

            <label>Email</label>
            <input type="email" required />

            <button type="submit">Invia richiesta</button>
          </form>
        ) : (
          <div className={styles.thankyou}>
            <h3 className="gold-text">Grazie! Mi metterò in contatto entro 24 ore.</h3>
            <p>WhatsApp: +39 375 6248786</p>
            <p>Email: donnesottolestelle25@gmail.com</p>
          </div>
        )}
      </section>

      {/* MAPPA CATANIA */}
      <section className={styles.sectionBlock}>
        <h2 className="gold-text">Catania, Sicilia.</h2>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=15.03,37.45,15.16,37.56&layer=mapnik&marker=37.5079,15.0830"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
