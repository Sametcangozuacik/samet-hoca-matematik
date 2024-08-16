import React from "react";
import styles from "./secondclassPage.module.scss";


export default function SecondClass() {
    return (
        <main>
            <h2 className={styles.title}>2. Sınıf Matematik Konuları</h2>
            <div className={styles.container}>
                <p>Doğal Sayılar</p>
                <p>Doğal Sayılarda Toplama Toplama İşlemi</p>
                <p>Doğal Sayılarda Toplama Çıkarma İşlemi</p>
                <p>Sıvı Ölçme</p>
                <p>Geometrik Şekil ve Cisimler</p>
                <p>Uzlamsal İlişkiler</p>
                <p>Geometrik Örüntüler</p>
                <p>Doğal Sayılarda Toplama Çarpma İşlemi</p>
                <p>Doğal Sayılarda Toplama Bölme İşlemi</p>
                <p>Veri Toplama ve Değerlendirme</p>
                <p>Uzunluk Ölçme</p>
                <p>Tartma</p>
            </div>
        </main>
    )
}