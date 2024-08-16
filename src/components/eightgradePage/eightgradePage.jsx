import React from "react";
import styles from "./eightgradePage.module.scss";



export default function EightGradePage() {
    return (
        <main>
            <h2 className={styles.title}>8. Sınıf Matematik Konuları</h2>
            <div className={styles.container}>
                <p>Çarpanlar ve Katlar</p>
                <p>Üslü İfadeler</p>
                <p>Kareköklü İfadeler</p>
                <p>Veri Analizi</p>
                <p>Basit Olayların Olma Olasılığı</p>
                <p>Cebirsel İfadeler ve Özdeşlikler</p>
                <p>Doğrusal Denklemler</p>
                <p>Eşitsizlikler</p>
                <p>Üçgenler</p>
                <p>Eşlik ve Benzerlik</p>
                <p>Dönüşüm Geometrisi</p>
                <p>Geometrik Cisimler</p>
            </div>
        </main>
    );
}