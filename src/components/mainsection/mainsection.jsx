import React from "react";
import Image from "next/image";
import section from "../../../public/Privatetuition/privatetuition.png";
import styles from "./mainsection.module.scss";

export default function MainSection() {
    return (
        <main className={styles.mainSection}>
            <div className={styles.mainSectionBox}>
            <div className={styles.mainSectionContainerBox}>
            <h2 className={styles.mainSectionTitleOne}>
                Matematikte Zirveye
            </h2>
            <h2 className={styles.mainSectionTitleTwo}>
                Lokasyon Matematik
            </h2>
            <h2 className={styles.mainSectionTitleThree}>
                ile Ulaşın!
            </h2>
            <p className={styles.mainP}>Bize Ulaşın ve başarıya giden ilk adımı atın.</p>
            <a href="https://wa.me/905073195505" className={styles.mainSectionButton}>Bize Ulaşın</a>
            </div>
            <div className={styles.mainSectionContainer}>
                <Image
                    className={styles.mainSectionImage}
                    src={section}
                    alt="Ankara'nın Uzman Eğitmenlerinden Online veya Yüz Yüze Ders Fırsatları"
                />
            </div>
            </div>
        </main>
    );
}
