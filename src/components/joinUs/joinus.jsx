import React from "react";
import styles from "./joinus.module.scss";

export default function JoinUs() {
  return (
    <section className={styles.joinUs}>
      <h2>Lokasyon Matematik Ekibine Katıl</h2>
      <p>
        Matematik alanında uzman veya başarılı bir üniversite öğrencisi misin?
        Lokasyon Matematik ailesine katılarak birlikte daha fazla öğrenciye
        dokunabiliriz. Hemen bizimle iletişime geç!
      </p>
      <a
        href="https://wa.me/905073195505"
        className={styles.mainSectionBoxButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Bize Ulaşın
      </a>
    </section>
  );
}

