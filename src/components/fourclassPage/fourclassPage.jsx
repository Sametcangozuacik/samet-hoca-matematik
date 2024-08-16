import React from "react";
import styles from "./fourclassPage.module.scss";


export default function FourClass() {
    return (
        <main>
            <h2 className={styles.title}>4. Sınıf Matematik Konuları</h2>
            <div className={styles.container}>
                <p>Doğal Sayılar</p>
                <p>Doğal Sayılarda Toplama Toplama İşlemi</p>
                <p>Doğal Sayılarda Toplama Çıkarma İşlemi</p>
                <p>Doğal Sayılarda Toplama Çarpma İşlemi</p>
                <p>Doğal Sayılarda Toplama Bölme İşlemi</p>
                <p>Kesirler</p>
                <p>Zaman Ölçme</p>
                <p>Veri Toplama ve Değerlendirme</p>
                <p>Geometrik Şekil ve Cisimler</p>
                <p>Uzunluk Ölçme</p>
                <p>Çevre Ölçme ve Alan Ölçme</p>
                <p>Sıvı Ölçme</p>
            </div>
        </main>
    );
}
