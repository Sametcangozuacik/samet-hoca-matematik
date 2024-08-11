import React from "react";
import Link from "next/link";
import styles from "./ours.module.scss";

export default function Ours() {
    return (
        <div className={styles.oursContainer}>
            <div className={styles.oursContent}>
                <ul className={styles.oursContentLinkBox}>
                    <li><Link className={styles.oursContentLink} href="/services/university1">Hakkımızda</Link></li>
                    <li><Link className={styles.oursContentLink} href="/services/university1">Başarılarımız</Link></li>
                    <li><Link className={styles.oursContentLink} href="/services/university1">Sizden Gelenler</Link></li>
                </ul>
            </div>
        </div>
    )
}