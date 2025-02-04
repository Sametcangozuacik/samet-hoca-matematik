"use client"; // Client component olarak işaretle

import React, { useState, useEffect } from "react";
import styles from "./ınform.module.scss";
import moment from "moment";
import 'moment/locale/tr'; // Türkçe dil desteği
import Image from "next/image";
import whatsapp from "../../../public/ınform/wplogicon.svg";
import gmail from "../../../public/ınform/gmaillogoicon.svg";

export default function Inform() {
  // Anlık tarihi ve saati tutmak için state
  const [currentDate, setCurrentDate] = useState(moment().locale('tr').format('LL')); // Tarih formatı
  const [currentTime, setCurrentTime] = useState(moment().locale('tr').format('LTS')); // Saat formatı

  // useEffect ile her saniye saati güncelle ve tarihi de güncelle
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(moment().locale('tr').format('LL')); // Tarihi güncelle
      setCurrentTime(moment().locale('tr').format('LTS')); // Saati güncelle
    }, 1000); // Her 1 saniyede bir günceller

    // Cleanup (temizleme) fonksiyonu
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.informSection}>
      <div className={styles.informSectionOne}>
        <a className={styles.informSectionLink} href="https://wa.me/5073195505" target="_blank" rel="noopener noreferrer">
          <Image src={whatsapp} width={16} height={16} alt="WhatsApp" />+90 507 319 5505
        </a>
        <a className={styles.informSectionLink} href="mailto:lokasyonmatematik@gmail.com" target="_blank" rel="noopener noreferrer">
          <Image src={gmail} width={16} height={16} alt="Gmail" />lokasyonmatematik@gmail.com
        </a>
      </div>
      {/* Anlık tarih ve saat bilgisi */}
      <div className={styles.dateTimeContainer}>
        <span className={styles.currentDate}>{currentDate}</span>
        <span className={styles.currentTime}>{currentTime}</span>
      </div>
    </div>
  );
}
