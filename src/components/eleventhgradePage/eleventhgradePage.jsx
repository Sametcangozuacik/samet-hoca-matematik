import React from "react";
import styles from "./eleventhgradePage.module.scss";


export default function EleventhGrade() {
    return (
        <main>
            <h2 className={styles.title}>11. Sınıf Matematik Konuları</h2>
            <div className={styles.container}>
                <p>Trigonometri</p>
                <p>Analitik Geometri</p>
                <p>Fonksiyonlarda Uygulamalar</p>
                <p>Denklem ve Eşitsizlik Sistemleri</p>
                <p>Çember ve Daire</p>
                <p>Uzay Geometri</p>
                <p>Olasılık</p>
            </div>
        </main>
    );
}