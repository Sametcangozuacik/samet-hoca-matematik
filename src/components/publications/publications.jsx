import React from "react";
import styles from "./publications.module.scss";
import Image from "next/image";

import karekok from "../../../public/publications/karekoklogo.png";
import ozdemir from "../../../public/publications/ozdemırlogo.png";
import fenomen from "../../../public/publications/fenomenlogo.png";
import bilgısarmal from "../../../public/publications/bılgısarmallogo.png";
import orginal from "../../../public/publications/orgınallogo.png";
import ucdortbeslogo from "../../../public/publications/345logo.svg";
import antreman from "../../../public/publications/antremanlogo.png";
import hız from "../../../public/publications/hızlogo.svg";

const publications = [
  { src: karekok, alt: "Karekök Yayınları" },
  { src: ozdemir, alt: "Özdemir Yayınları" },
  { src: fenomen, alt: "Fenomen Yayınları" },
  { src: bilgısarmal, alt: "Bilgi Sarmal Yayınları" },
  { src: orginal, alt: "Orjinal Yayınları" },
  { src: ucdortbeslogo, alt: "345 Yayınları" },
  { src: antreman, alt: "Antrenman Yayınları" },
  { src: hız, alt: "Hız Yayınları" },
];

export default function Publications() {
  return (
    <div className={styles.publicationsContainer}>
      <h1 className={styles.title}>Kullandığımız Yayınlar</h1>
      <div className={styles.publicationsBox}>
        {publications.map(({ src, alt }, index) => (
          <Image
            key={index}
            src={src}
            width={220}
            height={45}
            alt={alt}
            className={styles.publicationsBoxLogo}
          />
        ))}
      </div>
    </div>
  );
}

