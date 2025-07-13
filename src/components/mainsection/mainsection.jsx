import React from "react";
import Image from "next/image";
import section from "../../../public/Privatetuition/privatetuition.png";
import styles from "./mainsection.module.scss";

export default function MainSection() {
  return (
    <section className={styles.mainSection}>
      <div className={styles.mainSectionBox}>
        <div>
          <h2 className={styles.mainSectionTitleOne}>Matematikte Zirveye</h2>
          <h2 className={styles.mainSectionTitleTwo}>Lokasyon Matematik</h2>
          <h2 className={styles.mainSectionTitleThree}>ile Ulaşın!</h2>
          <p className={styles.mainP}>
            Bize Ulaşın ve başarıya giden ilk adımı atın.
          </p>
          <a
            href="https://wa.me/905073195505"
            className={styles.mainSectionButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Bize Ulaşın
          </a>
        </div>
        <div>
          <Image
            src={section}
            alt="Ankara'nın Uzman Eğitmenlerinden Online veya Yüz Yüze Ders Fırsatları"
            className={styles.mainSectionImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
