"use client"; // Bu satır client tarafında çalışmasını sağlar

import React, { useState } from "react";
import OursPage from "../../components/ours/ours";
import AboutUs from "@/components/aboutus/aboutus";
import FrequentlyAsked from "../ours/frequentlyAsked/frequentlyasked";
import styles from "./ourspage.module.scss";

export default function Ours() {
    // Sayfa ilk yüklendiğinde "about" varsayılan olarak seçili olacak
    const [activeComponent, setActiveComponent] = useState('about');

    return (
        <main className={styles.oursPageSection}>
            <div className={styles.oursContainer}>
                <div className={styles.oursContent}>
                    <ul className={styles.oursContentLinkBox}>
                        <li>
                            <button 
                                className={styles.oursContentLink} 
                                onClick={() => setActiveComponent('about')}
                            >
                                Hakkımızda
                            </button>
                        </li>
                        <li>
                            <button 
                                className={styles.oursContentLink} 
                                onClick={() => setActiveComponent('faq')}
                            >
                                Sıkça Sorulan Sorular
                            </button>
                        </li>
                    </ul>
                </div>

                <div className={styles.componentContainer}>
                    {/* Seçilen komponenti göster */}
                    {activeComponent === 'about' && <AboutUs />}
                    {activeComponent === 'faq' && <FrequentlyAsked />}
                </div>
            </div>
        </main>
    );
}
