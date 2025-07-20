import React from "react";
import Image from "next/image";
import logo from "../../../public/header/sametmathsicon.svg";
import styles from "./withus.module.scss";

export default function WithUs() {
    return (
        <section className={styles.withus}>
            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    <Image
                        className={styles.withusLogo}
                        src={logo}
                        alt="Lokasyon Matematik Logo"
                        width={450}
                        height={450}
                        priority
                    />
                </div>
                <div className={styles.textContent}>
                    <h1>Lokasyon Matematik’e Katıl</h1>
                    <p>
                        Tüm süreçlerinde maksimum verimde çalışmak, zamanını en iyi şekilde
                        yönetmek ve hedefe doğrudan ilerlemek için Lokasyon Matematik ile
                        şimdi tanış! 🚀
                    </p>
                    <a
                        href="https://wa.me/905073195505"
                        className={styles.mainSectionBoxButton}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Bize Ulaşın
                    </a>
                </div>
            </div>
        </section>
    );
}
