import React from "react";
import styles from "../fifthgradePage/fifthgradePage.module.scss";

export default function FifthGrade() {
    return (
        <main>
            <h2 className={styles.title}>5. Sınıf Matematik Konuları</h2>
            <div className={styles.container}>
                <p>Doğal Sayılar</p>
                <p>Doğal Sayılarla İşlemler</p>
                <p>Kesirler</p>
                <p>Kesirlerle İşlemler</p>
                <p>Ondalık Gösterim</p>
                <p>Kesirler</p>
                <p>Yüzdeler</p>
                <p>Temel Geometrik Kavramlar ve Çizimler</p>
                <p>Üçgenler ve Dörtgenler</p>
                <p>Veri Toplama ve Değerlendirme</p>
                <p>Alan Ölçme</p>
                <p>Geometrik Cisimler</p>
            </div>
            <h2 className={styles.title}>5. Sınıf Matematik Dökümantasyonlar</h2>
            <div className={styles.container}>
                <a href="/dowland/beşdoğalsayılar.pdf" download="beşdoğalsayılar.pdf">
                    Doğal Sayılar Okunuşları ve Basamak Kavramları
                </a>
            </div>
        </main>
    );
}
