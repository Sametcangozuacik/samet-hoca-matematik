import React from "react";
import styles from "./fieldexamPage.module.scss";


export default function FieldExamPage() {
    return (
        <main>
            <h2 className={styles.title}>Ayt Matematik Konuları</h2>
            <div className={styles.container}>
                <p>Fonskiyonlar</p>
                <p>Polinomlar</p>
                <p>2.Dereceden Denklemler</p>
                <p>Permütasyon ve Kombinasyon</p>
                <p>Binom ve Olasılık</p>
                <p>Karmaşık Sayılar</p>
                <p>2.Dereceden Eşitsizlikler</p>
                <p>Parabol</p>
                <p>Trigonometri</p>
                <p>Logaritma</p>
                <p>Diziler</p>
                <p>Limit</p>
                <p>Türev</p>
                <p>İntegral</p>
            </div>
            <h2 className={styles.title}>Ayt Geometri Konuları</h2>
            <div className={styles.container}>
                <p>Analitik Geometri</p>
                <p>Katı Cisimler (Uzay Geometri)</p>
                <p>Çemberin Analitiği</p>
            </div>
        </main>
    );
}
