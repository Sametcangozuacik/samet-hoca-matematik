import React from "react";
import Link from "next/link";
import styles from "./ours.module.scss";

export default function Ours() {
    return (
        <div className={styles.oursContainer}>
            <div className={styles.oursContent}>
                <ul className={styles.oursContentLinkBox}>
                    <li><Link className={styles.oursContentLink} href="/ours">Hakkımızda</Link></li>
                    <li><Link className={styles.oursContentLink} href="/ours/achievements">Başarılarımız</Link></li>
                    <li><Link className={styles.oursContentLink} href="/ours/fromyou">Sizden Gelenler</Link></li>
                </ul>
            </div>
        </div>
    )
}