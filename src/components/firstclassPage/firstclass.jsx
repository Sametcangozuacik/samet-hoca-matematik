import React from "react";
import styles from "./firstclass.module.scss";


export default function FirstClass() {
    return (
        <main>
            <h2 className={styles.title}>1. Sınıf Matematik Konuları</h2>
            <div className={styles.container}>
                <p>Uzlamsal İlişkiler</p>
                <p>Doğal Sayılar</p>
                <p>Doğal Sayılarda Toplama Toplama İşlemi</p>
                <p>Doğal Sayılarda Toplama Çıkarma İşlemi</p>
                <p>Paralarımız</p>
                <p>Kesirler</p>
                <p>Zaman Ölçme</p>
                <p>Geometrik Şekil ve Cisimler</p>
                <p>Geometrik Örüntüler</p>
                <p>Veri Toplama ve Değerlendirme</p>
                <p>Uzunluk Ölçme</p>
                <p>Sıvıları Ölçme</p>
            </div>
        </main>
    )
}