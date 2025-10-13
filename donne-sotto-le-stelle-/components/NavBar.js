"use client";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <a href="#chi-sono" className={styles.link}>Chi sono</a>
      <a href="#servizi" className={styles.link}>Servizi</a>
      <a href="#prenota" className={styles.link}>Prenota</a>
    </nav>
  );
}
