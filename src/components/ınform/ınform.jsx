import React from "react";
import styles from "./ınform.module.scss";
import moment from "moment";
import 'moment/locale/tr';
import Image from "next/image";
import whatsapp from "../../../public/ınform/wplogicon.svg";
import gmail from "../../../public/ınform/gmaillogoicon.svg";
import instagram from "../../../public/ınform/instagramlogoicon.svg";
import youtube from "../../../public/ınform/youtubeicon.svg";
import twiter from "../../../public/ınform/twiterlogoicon.svg";

export default function Inform() {
  return (
    <div className={styles.ınformSection}>
        <div className={styles.ınformSectionOne}>
           <a className={styles.ınformSectionLink} href="https://wa.me/5073195505" target="_blank" rel="noopener noreferrer">
              <Image src={whatsapp} width={16} height={16} alt="WhatsApp" />+90 507 319 5505
           </a>
           <a className={styles.ınformSectionLink} href="mailto:lokasyonmatematik@gmail.com" target="_blank" rel="noopener noreferrer">
              <Image src={gmail} width={16} height={16} alt="Gmail" />lokasyonmatematik@gmail.com
           </a>
        </div>
        <div className={styles.ınformSectionTwo}>
        <a className={styles.ınformSectionLinKTwo} href="https://www.instagram.com/lokasyonmatematik?igsh=MW10bmFnN25xODVtdw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
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
  );
}
