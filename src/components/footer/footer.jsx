'use client';

import React from "react";
import styles from "./footer.module.scss";
import Image from 'next/image';
import Link from 'next/link';

// Görseller (SVG'ler için unoptimized kullanılıyor)
import logo from '../../../public/header/sametmathsicon.svg';
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
    <>
      <footer className={styles.footer}>
        <div className={styles.col}>
          <Image
            className={styles.colImage}
            src={logo}
            width={300}
            height={200}
            alt="Lokasyon Matematik Logo"
            unoptimized
          />
          <p className={styles.colText}>Matematiğe dair her şey!</p>
          <div className={styles.ınformSectionTwo}>
            <a
              href="https://www.instagram.com/lokasyonmatematik"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.ınformSectionLinKTwo}
            >
              <Image src={instagram} width={24} height={24} alt="Instagram" unoptimized />
            </a>
            <a
              href="https://www.youtube.com/@lokasyonmatematik"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className={styles.ınformSectionLinKTwo}
            >
              <Image src={youtube} width={24} height={24} alt="YouTube" unoptimized />
            </a>
            <a
              href="https://twitter.com/lokasyonmat"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className={styles.ınformSectionLinKTwo}
            >
              <Image src={twitter} width={24} height={24} alt="Twitter" unoptimized />
            </a>
          </div>
        </div>

        {/* Eğitim */}
        <div className={styles.footerBox}>
          <h2 className={styles.footerBoxH2}>Eğitim</h2>
          <ul className={styles.footerBoxList}>
            <li>
              <Link href="/ilkokul" className={styles.footerBoxListLink}>
                <Image src={book} width={24} height={24} alt="İlkokul Eğitim" unoptimized />
                İlkokul
              </Link>
            </li>
            <li>
              <Link href="/ortaokul" className={styles.footerBoxListLink}>
                <Image src={bookclosed} width={24} height={24} alt="Ortaokul Eğitim" unoptimized />
                Ortaokul
              </Link>
            </li>
            <li>
              <Link href="/liseye-hazirlik" className={styles.footerBoxListLink}>
                <Image src={bookopen} width={24} height={24} alt="Liseye Hazırlık" unoptimized />
                Liseye Hazırlık
              </Link>
            </li>
            <li>
              <Link href="/universite-hazirlik" className={styles.footerBoxListLink}>
                <Image src={university} width={24} height={24} alt="Üniversiteye Hazırlık" unoptimized />
                Üniversiteye Hazırlık
              </Link>
            </li>
            <li>
              <Link href="/kpss-ales" className={styles.footerBoxListLink}>
                <Image src={kpss} width={24} height={24} alt="KPSS & ALES" unoptimized />
                KPSS & ALES
              </Link>
            </li>
          </ul>
        </div>

        {/* Hakkında */}
        <div className={styles.footerBox}>
          <h2 className={styles.footerBoxH2}>Hakkında</h2>
          <ul className={styles.footerBoxList}>
            <li>
              <Link href="/ours" className={styles.footerBoxListLink}>
                <Image src={question} width={24} height={24} alt="Biz Kimiz?" unoptimized />
                Biz Kimiz?
              </Link>
            </li>
            <li>
              <Link href="/lighting" className={styles.footerBoxListLink}>
                <Image src={lamp} width={24} height={24} alt="Aydınlatma Metni" unoptimized />
                Aydınlatma Metni
              </Link>
            </li>
            <li>
              <Link href="/kvkk" className={styles.footerBoxListLink}>
                <Image src={policy} width={24} height={24} alt="KVKK Politikaları" unoptimized />
                KVKK Politikaları
              </Link>
            </li>
          </ul>
        </div>

        {/* İletişim */}
        <div className={styles.footerBox}>
          <h2 className={styles.footerBoxH2}>İletişim</h2>
          <ul className={styles.footerBoxList}>
            <li>
              <a
                href="https://wa.me/905073195505"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ınformSectionLink}
              >
                <Image src={whatsapp} width={24} height={24} alt="WhatsApp" unoptimized />
                +90 507 319 5505
              </a>
            </li>
            <li>
              <a
                href="mailto:lokasyonmatematik@gmail.com"
                className={styles.ınformSectionLink}
              >
                <Image src={gmail} width={24} height={24} alt="Gmail" unoptimized />
                lokasyonmatematik@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lokasyonmatematik"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ınformSectionLink}
              >
                <Image src={instagramicon} width={24} height={24} alt="Instagram" unoptimized />
                lokasyonmatematik
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=Ankara"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ınformSectionLink}
              >
                <Image src={location} width={24} height={24} alt="Konum" unoptimized />
                Ankara, Türkiye
              </a>
            </li>
          </ul>
        </div>
      </footer>

      {/* Alt Copyright */}
      <footer className={styles.footerBottom}>
        <div className={styles.footerBottomBox}>
          <p className={styles.footerBottomText}>
            © 2025 Lokasyon Matematik. Tüm Hakları Saklıdır.
          </p>
        </div>
      </footer>
    </>
  );
}
