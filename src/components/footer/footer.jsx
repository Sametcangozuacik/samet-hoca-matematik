import React from "react";
import styles from "./footer.module.scss";
import Image from 'next/image';
import logo from '../../../public/header/sametmathsicon.svg';
import Link from 'next/link';
import book from '../../../public/footer/bookicon.svg';
import bookopen from '../../../public/footer/bookopenicon.svg';
import bookclosed from '../../../public/footer/bookclosedicon.svg';
import university from '../../../public/footer/universtyicon.svg';
import instagram from "../../../public/ınform/instagramlogoicon.svg";
import youtube from "../../../public/ınform/youtubeicon.svg";
import whatsapp from "../../../public/ınform/wplogicon.svg";
import gmail from "../../../public/ınform/gmaillogoicon.svg";
import twiter from "../../../public/ınform/twiterlogoicon.svg";
import kpss from '../../../public/footer/kpssicon.svg';
import lamp from '../../../public/footer/lampicon.svg';
import policy from '../../../public/footer/policyicon.svg';
import question from '../../../public/footer/questionicon.svg';
import register from '../../../public/footer/registericon.svg';


export default function Footer() {
    return (
        <main>
            <footer className={styles.footer}>
                <div className={styles.col}>
                    <Image className={styles.colImage} src={logo} width={150} height={150} alt="Site Logo" />
                    <p className={styles.colText}>Matematiğe dair herşey !</p>
                    <div className={styles.ınformSectionTwo}>
                        <a className={styles.ınformSectionLinKTwo} href="https://www.instagram.com/yourusername/" target="_blank" rel="noopener noreferrer">
                            <Image src={instagram} width={16} height={16} alt="Instagram" />
                        </a>
                        <a className={styles.ınformSectionLinKTwo} href="https://www.instagram.com/yourusername/" target="_blank" rel="noopener noreferrer">
                            <Image src={youtube} width={16} height={16} alt="Youtube" />
                        </a>
                        <a className={styles.ınformSectionLinKTwo} href="https://www.instagram.com/yourusername/" target="_blank" rel="noopener noreferrer">
                            <Image src={twiter} width={16} height={16} alt="Twiter" />
                        </a>
                    </div>
                </div>
                <div className={styles.footerBox}>
                    <h2 className={styles.footerBoxH2}>Eğitim</h2>
                    <ul className={styles.footerBoxList}>
                        <li><Link className={styles.footerBoxListLink} href=""><Image src={book} width={16} height={16} alt="home" />İlkokul</Link></li>
                        <li><Link className={styles.footerBoxListLink} href=""><Image src={bookclosed} width={16} height={16} alt="home" />Ortaokul</Link></li>
                        <li><Link className={styles.footerBoxListLink} href=""><Image src={bookopen} width={16} height={16} alt="home" />Liseye Hazırlık</Link></li>
                        <li><Link className={styles.footerBoxListLink} href=""><Image src={university} width={16} height={16} alt="home" />Üniversiteye Hazırlık</Link></li>
                        <li><Link className={styles.footerBoxListLink} href=""><Image src={kpss} width={16} height={16} alt="home" />KPSS & ALES</Link></li>
                    </ul>
                </div>
                <div className={styles.footerBox}>
                    <h2 className={styles.footerBoxH2}>Hakkında</h2>
                    <ul className={styles.footerBoxList}>
                        <li><Link className={styles.footerBoxListLink} href=""><Image src={question} width={16} height={16} alt="home" />Biz Kimiz ?</Link></li>
                        <li><Link className={styles.footerBoxListLink} href=""><Image src={lamp} width={16} height={16} alt="home" />Aydınlatma Metni</Link></li>
                        <li><Link className={styles.footerBoxListLink} href=""><Image src={policy} width={16} height={16} alt="home" />KVKK Politaları</Link></li>
                        <li><Link className={styles.footerBoxListLink} href=""><Image src={register} width={16} height={16} alt="home" />Başvuru Formu</Link></li>
                    </ul>
                </div>
                <div className={styles.footerBox}>
                    <h2 className={styles.footerBoxH2}>İletişim</h2>
                    <ul className={styles.footerBoxList}>
                        <a className={styles.ınformSectionLink} href="https://wa.me/5073195505" target="_blank" rel="noopener noreferrer">
                            <Image src={whatsapp} width={16} height={16} alt="WhatsApp" />+90 507 319 5505
                        </a>
                        <a className={styles.ınformSectionLink} href="mailto:lokasyonmatematik@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Image src={gmail} width={16} height={16} alt="Gmail" />lokasyonmatematik@gmail.com
                        </a>
                    </ul>
                </div>
            </footer>
            <footer className={styles.footerBottom}>
                <div className={styles.footerBottomBox}>
                    <p className={styles.footerBottomText}>© 2021 Lokasyon Matematik. Tüm Hakları Saklıdır.</p>
                </div>
            </footer>
        </main>
    );
}