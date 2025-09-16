"use client";

import React from "react";
import Image from "next/image";
import SplitText from "../splittext/splittext"; // Case-sensitive ve uzantısız
import section from "../../../public/Privatetuition/privatetuition.png";
import styles from "./mainsection.module.scss";

export default function MainSection() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section className={styles.mainSection}>
      <div className={styles.mainSectionBox}>
        <div>
          <SplitText
            text="Matematikte Zirveye"
            className={styles.mainSectionTitleOne}
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <SplitText
            text="Lokasyon Matematik"
            className={styles.mainSectionTitleTwo}
            delay={120}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <SplitText
            text="ile Ulaşın!"
            className={styles.mainSectionTitleThree}
            delay={140}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />

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
