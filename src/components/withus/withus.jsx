import React from "react";
import Image from "next/image";
import logo from '../../../public/header/sametmathsicon.svg';
import styles from "./withus.module.scss";

export default function WithUs() {
    return (
        <div className={styles.withus}>
            <Image className={styles.withusLogo} src={logo} alt="logo" width={550} height={550} />
            <h1>Lokasyon Matematik’e katıl, tam potansiyeline birlikte ulaşalım!</h1>
            <p>Tüm süreçlerinde maksimum verimde çalışmak, zamanını en iyi şekilde yönetmek ve hedefe doğrudan ilerlemek için Lokasyon Matematik ile şimdi tanış! 🚀</p>
            <a href="https://wa.me/905073195505" className={styles.mainSectionBoxButton}>Bize Ulaşın</a>
        </div>
    );
}
