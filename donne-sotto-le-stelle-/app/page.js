"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import TarotCard from "../components/TarotCard";

export default function Home() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className={styles.main}>
      {/* SAFE MAGIC BACKGROUND */}
      <div className={styles.mist} />
      <div className={styles.starsSafe}>
        <div className={`${styles.starDot} ${styles.s2}`} />
        <div className={`${styles.starDot} ${styles.s3}`} />
        <div className={`${styles.starDot} ${styles.s4}`} />
        <div className={`${styles.starDot} ${styles.s5}`} />
      </div>

      {/* LOGO */}
      <div className={styles.logoContainer}>
        <div className={styles.logoFrame}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={200}
            className={styles.logo}
          />
        </div>
      </div>

      {/* MANIFESTO */}
      <section className={styles.manifesto}>
        <h2 className="gold-text">🌙 Manifesto di Donne Sotto le Stelle 🌙</h2>
        <p>
          Siamo donne che si incontrano sotto lo stesso cielo, non per cambiare il mondo,
          ma per ricordare chi siamo. Un cerchio che accoglie, un abbraccio che non giudica.
          Qui le maschere cadono, i respiri si allineano, e ogni silenzio diventa parola sacra.
          <br /><br />
          Siamo arte che guarisce, pennelli che raccontano emozioni, pizzi, fili e stoffe
          che cuciono rinascite. Siamo poesia che nasce da una ferita e diventa luce,
          moda che non veste il corpo, ma l’anima.
          <br /><br />
          Camminiamo tra yoga e tarocchi, tisane e costellazioni, dove la spiritualità
          non è regola, ma esperienza viva. Qui le storie si intrecciano, le fragilità
          si fanno coraggio, le parole si trasformano in guarigione.
          <br /><br />
          Siamo donne che scelgono sé stesse, che ballano, cantano, ridono, piangono,
          e poi si rialzano insieme, ogni volta più vere.
          <br /><br />
          Donne Sotto le Stelle è un ponte tra la terra e l’infinito, tra ciò che siamo
          e ciò che ancora possiamo diventare.
          <br /><br />
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
          «Tutte le risposte sono già dentro di noi. Il mio compito è aiutarti ad ascoltarle.»
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
          <strong>Come si svolge una sessione?</strong><br />
          1. Intenzione e domanda.<br />
          2. Lettura / pratica.<br />
          3. Consapevolezza e integrazione.<br />
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

            <button type="submit">Invia intenzione</button>
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
        <h2 className="gold-text">Catania, Sicilia</h2>
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
