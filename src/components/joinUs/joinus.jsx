import React from "react";
import styles from "./joinus.module.scss";

export default function JoinUs() {
    return (
        <div className={styles.joinUs}>
            <h2>Lokasyon Matematik Ekibine Katıl</h2>
            <p>&quot;Matematik alanında uzman ya da başarılı bir üniversite öğrencisi olarak ekibimize katılmak için aşağıdaki butonları kullanabilirsiniz!&quot;</p>
            <a href="https://wa.me/905073195505" className={styles.mainSectionBoxButton}>Bize Ulaşın</a>
        </div>
    );
}
