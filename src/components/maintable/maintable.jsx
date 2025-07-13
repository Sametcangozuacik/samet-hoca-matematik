"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./maintabel.module.scss";

export default function MainTable() {
  const [abilities] = useState([
    {
      name: "İlköğretim Matematik",
      image: "/maintable/maintabloone.svg"
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
        {abilities.map(({ name, image }, index) => (
          <div key={index} className={styles.ability}>
            <Image
              src={image}
              alt={`${name} hizmet ikonu`}
              width={48}
              height={48}
              className={styles.abilityImage}
              priority={index < 3} // İlk 3 ikon için öncelikli yükleme
            />
            <p className={styles.abilityName}>{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
