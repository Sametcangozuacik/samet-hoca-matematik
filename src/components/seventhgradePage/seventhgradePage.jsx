import React from "react";
import styles from "./seventhgradePage.module.scss";



export default function SeventhGradePage() {
    return (
        <main>
            <h2 className={styles.title}>7. Sınıf Matematik Konuları</h2>
            <div className={styles.container}>
                <p>Tam Sayılarla İşlemler</p>
                <p>Rasyonel Sayılar</p>
                <p>Rasyonel Sayılarla İşlemler</p>
                <p>Cebirsel İfadeler</p>
                <p>Eşitlik ve Denklem</p>
                <p>Oran ve Orantı</p>
                <p>Yüzdeler</p>
                <p>Doğrular ve Açılar</p>
                <p>Çokgenler</p>
                <p>Çember ve Daire</p>
                <p>Veri Analizi</p>
                <p>Cisimlerin Farklı Yönlerden Görünümleri</p>
            </div>
        </main>
    );
}
