import React from "react";
import styles from "./alesexamPage.module.scss";


export default function AlesExamPage() {
    return (
        <main>
            <h2 className={styles.title}>ALES Matematik Konuları</h2>
            <div className={styles.container}>
                <p>Temel Kavramlar</p>
                <p>Sayı Basamakları</p>
                <p>Bölme ve Bölünebilme</p>
                <p>EBOB – EKOK</p>
                <p>Rasyonel Sayılar</p>
                <p>Basit Eşitsizlikler</p>
                <p>Mutlak Değer</p>
                <p>Üslü Sayılar</p>
                <p>Köklü Sayılar</p>
                <p>Çarpanlara Ayırma</p>
                <p>Oran Orantı</p>
                <p>Denklem Çözme</p>
                <p>Problemler</p>
                <p>Kümeler – Kartezyen Çarpım</p>
                <p>Mantık</p>
                <p>Fonskiyonlar</p>
                <p>Permütasyon ve Kombinasyon</p>
                <p>Olasılık</p>
            </div>
        </main>
    );

}


