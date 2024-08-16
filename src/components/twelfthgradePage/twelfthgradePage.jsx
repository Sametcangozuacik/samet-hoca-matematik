import React from "react";
import styles from "./twelfthgradePage.module.scss";


export default function TwelfthGradePage() {
    return (
        <main>
            <h2 className={styles.title}>12. Sınıf Matematik Konuları</h2>
            <div className={styles.container}>
                <p>Üstel Fonksiyon</p>
                <p>Logaritma Fonksiyonu</p>
                <p>Üstel, Logaritmik Denklemler ve Eşitsizlikler</p>
                <p>Gerçek Sayı Dizileri</p>
                <p>Toplam-Fark ve İki Kat Açı Formülleri</p>
                <p>Trigonometrik Denklemler</p>
                <p>Analitik Düzlemde Temel Dönüşümler</p>
                <p>Limit ve Süreklilik</p>
                <p>Anlık Değişim Oranı ve Türev</p>
                <p>Türevin Uygulamaları</p>
                <p>Belirsiz İntegral</p>
                <p>Belirli İntegral ve Uygulamaları</p>
                <p>Çemberin Analitik İncelenmesi</p>
            </div>
        </main>
    );
    }