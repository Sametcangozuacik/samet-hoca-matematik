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
import twitter from "../../../public/ınform/twiterlogoicon.svg";
import kpss from '../../../public/footer/kpssicon.svg';
import lamp from '../../../public/footer/lampicon.svg';
import policy from '../../../public/footer/policyicon.svg';
import question from '../../../public/footer/questionicon.svg';
import instagramicon from '../../../public/footer/instagramicon.svg';
import location from '../../../public/CommunicationPage/location.icon.svg';

export default function Footer() {
    return (
        <main>
            <footer className={styles.footer}>
                <div className={styles.col}>
                    <Image className={styles.colImage} src={logo} width={180} height={180} alt="Lokasyon Matematik Logo" />
                    <p className={styles.colText}>Matematiğe dair her şey!</p>
                    <div className={styles.ınformSectionTwo}>
                        <a 
                            className={styles.ınformSectionLinKTwo} 
                            href="https://www.instagram.com/lokasyonmatematik?igsh=MW10bmFnN25xODVtdw%3D%3D&utm_source=qr" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Instagram"
                        >
                            <Image src={instagram} width={24} height={24} alt="Instagram" />
                        </a>
                        <a 
                            className={styles.ınformSectionLinKTwo} 
                            href="https://www.youtube.com/channel/yourchannel" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="YouTube"
                        >
                            <Image src={youtube} width={24} height={24} alt="YouTube" />
                        </a>
                        <a 
                            className={styles.ınformSectionLinKTwo} 
                            href="https://twitter.com/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="Twitter"
                        >
                            <Image src={twitter} width={24} height={24} alt="Twitter" />
                        </a>
                    </div>
                </div>
                <div className={styles.footerBox}>
                    <h2 className={styles.footerBoxH2}>Eğitim</h2>
                    <ul className={styles.footerBoxList}>
                        <li>
                            <Link className={styles.footerBoxListLink} href="#">
                                <Image src={book} width={24} height={24} alt="İlkokul Eğitim" />
                                İlkokul
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.footerBoxListLink} href="#">
                                <Image src={bookclosed} width={24} height={24} alt="Ortaokul Eğitim" />
                                Ortaokul
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.footerBoxListLink} href="#">
                                <Image src={bookopen} width={24} height={24} alt="Liseye Hazırlık" />
                                Liseye Hazırlık
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.footerBoxListLink} href="#">
                                <Image src={university} width={24} height={24} alt="Üniversiteye Hazırlık" />
                                Üniversiteye Hazırlık
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.footerBoxListLink} href="#">
                                <Image src={kpss} width={24} height={24} alt="KPSS & ALES" />
                                KPSS & ALES
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerBox}>
                    <h2 className={styles.footerBoxH2}>Hakkında</h2>
                    <ul className={styles.footerBoxList}>
                        <li>
                            <Link className={styles.footerBoxListLink} href="/ours">
                                <Image src={question} width={24} height={24} alt="Biz Kimiz?" />
                                Biz Kimiz?
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.footerBoxListLink} href="/lighting">
                                <Image src={lamp} width={24} height={24} alt="Aydınlatma Metni" />
                                Aydınlatma Metni
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.footerBoxListLink} href="#">
                                <Image src={policy} width={24} height={24} alt="KVKK Politikaları" />
                                KVKK Politikaları
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerBox}>
                    <h2 className={styles.footerBoxH2}>İletişim</h2>
                    <ul className={styles.footerBoxList}>
                        <li>
                            <a 
                                className={styles.ınformSectionLink} 
                                href="https://wa.me/5073195505" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="WhatsApp ile İletişime Geç"
                            >
                                <Image src={whatsapp} width={24} height={24} alt="WhatsApp" />
                                +90 507 319 5505
                            </a>
                        </li>
                        <li>
                            <a 
                                className={styles.ınformSectionLink} 
                                href="mailto:lokasyonmatematik@gmail.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="E-posta ile İletişime Geç"
                            >
                                <Image src={gmail} width={24} height={24} alt="Gmail" />
                                lokasyonmatematik@gmail.com
                            </a>
                        </li>
                        <li>
                            <a 
                                className={styles.ınformSectionLink} 
                                href="https://www.instagram.com/lokasyonmatematik?igsh=MW10bmFnN25xODVtdw%3D%3D&utm_source=qr" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Instagram Profilimiz"
                            >
                                <Image src={instagramicon} width={24} height={24} alt="Instagram" />
                                lokasyonmatematik
                            </a>
                        </li>
                        <li>
                            <p className={styles.ınformSectionLink}>
                                <Image src={location} width={24} height={24} alt="Konum" />
                                Ankara, Türkiye
                            </p>
                        </li>
                    </ul>
                </div>
            </footer>
            <footer className={styles.footerBottom}>
                <div className={styles.footerBottomBox}>
                    <p className={styles.footerBottomText}>© 2024 Lokasyon Matematik. Tüm Hakları Saklıdır.</p>
                </div>
            </footer>
        </main>
    );
}
