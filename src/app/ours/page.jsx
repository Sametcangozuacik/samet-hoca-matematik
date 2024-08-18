import React from "react";
import OursPage from "../../components/ours/ours";
import AboutUs from "@/components/aboutus/aboutus";
import styles from "./ourspage.module.scss";



export default function Ours() {
    return (
        <main className={styles.oursPageSection}>
            <OursPage />
            <AboutUs />
        </main>
    )
}