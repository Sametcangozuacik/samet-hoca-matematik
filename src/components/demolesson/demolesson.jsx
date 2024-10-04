import React from "react";
import styles from "./demolesson.module.scss";

export default function DemoLesson() {
    return (
        <div className={styles.demoLesson}>
            <h1 className={styles.demoLesson__heading}>Örnek Kaynaklar</h1>
            <div className={styles.demoLesson__text}>
            <a className={styles.demoLesson__link} href="/demolesson/5.Sınıf%20Örüntüler.pdf" download="5.Sınıf_Örüntüler.pdf">
                <button className={styles.demoLesson__button}>5. Sınıf Örüntüler Testini İndir (PDF)</button>
            </a>
            <a className={styles.demoLesson__link} href="/demolesson/6.Sınıf%20Bölme%20ve%20Bölünebilme.pdf" download="6.Sınıf_Bölme_ve_Bölünebilme.pdf">
                <button className={styles.demoLesson__button}>6. Sınıf Bölme ve Bölünebilme Testini İndir (PDF)</button>
            </a>
            <a className={styles.demoLesson__link} href="/demolesson/8.Sınıf%20Ebob-Ekok.pdf" download="8.Sınıf_Ebob_Ekok.pdf">
                <button className={styles.demoLesson__button}>8. Sınıf EBOB-EKOK Testini İndir (PDF)</button>
            </a>
            <a className={styles.demoLesson__link} href="/demolesson/10.Sınıf%20Faktöriyel.pdf" download="10.Sınıf_Faktöriyel.pdf">
                <button className={styles.demoLesson__button}>10. Sınıf Faktöriyel Testini İndir (PDF)</button>
            </a>
            <a className={styles.demoLesson__link} href="/demolesson/10.Sınıf%20Sayma.pdf" download="10.Sınıf_Sayma.pdf">
                <button className={styles.demoLesson__button}>10. Sınıf Sayma Testini İndir (PDF)</button>
            </a>
            <a className={styles.demoLesson__link} href="/demolesson/Tyt%20Hareket%20Problemleri.pdf" download="Tyt_Hareket_Problemleri.pdf">
                <button className={styles.demoLesson__button}>(TYT) Hareket Problemleri Testini İndir (PDF)</button>
            </a>
            </div>        
            </div>
    );
}
