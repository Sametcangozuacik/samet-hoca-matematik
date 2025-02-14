import React from "react";
import styles from "./publications.module.scss";
import Image from "next/image";
import karekok from "../../../public/publications/karekoklogo.png";
import ozdemir from "../../../public/publications/ozdemırlogo.png";
import fenomen from "../../../public/publications/fenomenlogo.png";
import bilgısarmal from "../../../public/publications/bılgısarmallogo.png";
import orginal from "../../../public/publications/orgınallogo.png";
import ucdortbeslogo from "../../../public/publications/345logo.png";
import antreman from "../../../public/publications/antremanlogo.png";

export default function Publications() {
    return (
        <div className={styles.publicationsContainer}>
            <h1 className={styles.title}>Kullandığımız Yayınlar</h1>
            <div className={styles.publicationsBox}>
                <Image src={karekok} width={200} height={70} alt="Karekök Yayınları" className={styles.karekok} />
                <Image src={ozdemir} width={200} height={70} alt="Özdemir Yayınları" className={styles.ozdemir} />
                <Image src={fenomen} width={200} height={70} alt="Fenomen Yayınları" className={styles.fenomen} />
                <Image src={bilgısarmal} width={200} height={70} alt="Bilgi Sarmal Yayınları" className={styles.bilgısarmal} />
                <Image src={orginal} width={200} height={70} alt="Orjinal Yayınları" className={styles.orginal} />
                <Image src={ucdortbeslogo} width={200} height={70} alt="Orjinal Yayınları" className={styles.orginal} />
                <Image src={antreman} width={200} height={70} alt="Orjinal Yayınları" className={styles.orginal} />
            </div>
        </div>
    );
}
