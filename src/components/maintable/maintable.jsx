"use client"; // İstemci bileşeni olarak işaretleyin

import React, { useState } from "react";
import Image from "next/image";
import styles from "./maintabel.module.scss";

export default function MainTable() {
    const [abilities, setAbilities] = useState([
        {
            name: "İlköğretim Matematik",
            Image: "/maintable/maintabloone.svg"
        },
        {
            name: "Ortaokul Matematik",
            Image: "/maintable/maintablotwo.svg"
        },
        {
            name: "Lise Matematik",
            Image: "/maintable/maintablothree.svg"
        },
        {
            name: "Kpss Matematik",
            Image: "/maintable/maintablofour.svg"
        },
        {
            name: "Üniversite Matematik",
            Image: "/maintable/maintablofive.svg"
        },
        {
            name: "Yks Matematik",
            Image: "/maintable/maintablosix.svg"
        },
    ]);

    return (
        <section className={styles.abilities}>
            <h2 className={styles.abilitiesTitle}>Hizmet Alanlarımız</h2>
            <div className={styles.abilitiesContainer}>
                {abilities.map((ability, index) => (
                    <div key={index} className={styles.ability}>
                        <Image
                            src={ability.Image}
                            alt={ability.name}
                            width={30}
                            height={30}
                        />
                        <p className={styles.abilityName}>{ability.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
