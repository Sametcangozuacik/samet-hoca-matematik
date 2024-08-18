"use client"; 

import React, { useState } from "react";
import Image from "next/image";
import styles from "./maintabel.module.scss";

export default function MainTable() {
    const [abilities, setAbilities] = useState([
        {
            name: "İlköğretim Matematik",
            image: "/maintable/maintabloone.svg" // Görsel adı küçük harfle
        },
        {
            name: "Ortaokul Matematik",
            image: "/maintable/maintablotwo.svg"
        },
        {
            name: "Lise Matematik",
            image: "/maintable/maintablothree.svg"
        },
        {
            name: "Kpss Matematik",
            image: "/maintable/maintablofour.svg"
        },
        {
            name: "Üniversite Matematik",
            image: "/maintable/maintablofive.svg"
        },
        {
            name: "Yks Matematik",
            image: "/maintable/maintablosix.svg"
        },
    ]);

    return (
        <section className={styles.abilities} aria-labelledby="abilities-title">
            <h2 id="abilities-title" className={styles.abilitiesTitle}>
                Hizmet Alanlarımız
            </h2>
            <div className={styles.abilitiesContainer}>
                {abilities.map((ability, index) => (
                    <div key={index} className={styles.ability}>
                        <Image
                            src={ability.image}
                            alt={`Logo for ${ability.name}`}
                            width={40} 
                            height={40}
                            layout="intrinsic"
                        />
                        <p className={styles.abilityName}>{ability.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
